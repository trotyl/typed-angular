import { Module, Provide, Provider } from 'angular'
import * as angular from 'angular'

describe('auto/$provide', () => {
    let module: Module

    function MyFn($controllerProvider) { this.$get = () => 0 }
    class MyClass { $get() { return 0 }; constructor($controllerProvider) { }}

    beforeEach(() => {
        module = angular.module('custom', [])
    })

    it('.provider should have right parameters', (done) => {
        module.config(($provide: Provide) => {
            $provide.provider('customService0', { $get: () => 0 })
            $provide.provider('customService1', MyFn)
            $provide.provider('customService2', MyClass)
            $provide.provider('customService3', ['$controllerProvider', MyFn])
            $provide.provider('customService4', ['$controllerProvider', MyClass])

            $provide.provider<number, Provider<number>>('customService0', { $get: () => 0 })
            $provide.provider<number>('customService1', MyFn)
            $provide.provider<number, MyClass>('customService2', MyClass)
            $provide.provider<number>('customService3', ['$controllerProvider', MyFn])
            $provide.provider<number, MyClass>('customService4', ['$controllerProvider', MyClass])

            done()
        })

        angular.bootstrap(document, ['custom'])
    })

    it('.provider should have right return type', (done) => {
        // NOTICE: Manual testing in VSCode with mouse hover

        module.config(($provide: Provide) => {
            // Should have type of Provider<number>
            const provider0 = $provide.provider('customService0', { $get: () => 0 })

            // Should have type of Provider<any>
            const provider1 = $provide.provider('customService1', MyFn)

            // Should have type of MyClass
            const provider2 = $provide.provider('customService2', MyClass)

            // Should have type of Provider<any>
            const provider3 = $provide.provider('customService3', ['$controllerProvider', MyFn])

            // Should have type of MyClass
            const provider4 = $provide.provider('customService4', ['$controllerProvider', MyClass])
        }).run((customService0, customService1, customService2, customService3, customService4) => {
            expect(customService0).toBe(0)
            expect(customService1).toBe(0)
            expect(customService2).toBe(0)
            expect(customService3).toBe(0)
            expect(customService4).toBe(0)

            done()
        })

        angular.bootstrap(document, ['custom'])
    })

    it('.factory should have right parameters', (done) => {
        module.config(($provide: Provide) => {
            $provide.factory('customService0', () => 0)
            $provide.factory('customService1', ['$controller', () => 0])

            $provide.factory<number>('customService0', () => 0)
            $provide.factory<number>('customService1', ['$controller', () => 0])
            
            done()
        })

        angular.bootstrap(document, ['custom'])
    })

    it('.factory should have right return type', (done) => {
        // NOTICE: Manual testing in VSCode with mouse hover
        module.config(($provide: Provide) => {

            // Should have type of Provider<number>
            const provider0 = $provide.factory('customService0', () => 0)
            const provider1 = $provide.factory('customService1', ['$controller', () => 0])
            
            done()
        }).run((customService0, customService1) => {
            expect(customService0).toBe(0)
            expect(customService1).toBe(0)

            done()
        })

        angular.bootstrap(document, ['custom'])
    })
})

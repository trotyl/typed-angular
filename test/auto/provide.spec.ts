import { Module, Provide, Provider } from 'angular'
import * as angular from 'angular'

describe('auto/$provide', () => {
    let module: Module

    function MyProviderFn($controllerProvider) { this.$get = () => 0 }
    class MyProviderClass { $get() { return 0 }; constructor($controllerProvider) { } }

    function MyServiceFn($controller) {}
    class MyServiceClass { constructor($controller) { } }

    beforeEach(() => {
        module = angular.module('custom', [])
    })

    it('.provider should have right parameters', (done) => {
        module.config(($provide: Provide) => {
            $provide.provider('customService0', { $get: () => 0 })
            $provide.provider('customService1', MyProviderFn)
            $provide.provider('customService2', MyProviderClass)
            $provide.provider('customService3', ['$controllerProvider', MyProviderFn])
            $provide.provider('customService4', ['$controllerProvider', MyProviderClass])

            $provide.provider<number, Provider<number>>('customService0', { $get: () => 0 })
            $provide.provider<number>('customService1', MyProviderFn)
            $provide.provider<number, MyProviderClass>('customService2', MyProviderClass)
            $provide.provider<number>('customService3', ['$controllerProvider', MyProviderFn])
            $provide.provider<number, MyProviderClass>('customService4', ['$controllerProvider', MyProviderClass])

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
            const provider1 = $provide.provider('customService1', MyProviderFn)

            // Should have type of MyClass
            const provider2 = $provide.provider('customService2', MyProviderClass)

            // Should have type of Provider<any>
            const provider3 = $provide.provider('customService3', ['$controllerProvider', MyProviderFn])

            // Should have type of MyClass
            const provider4 = $provide.provider('customService4', ['$controllerProvider', MyProviderClass])
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
        }).run((customService0, customService1) => {
            expect(customService0).toBe(0)
            expect(customService1).toBe(0)

            done()
        })

        angular.bootstrap(document, ['custom'])
    })

    it('.service should have right parameters', (done) => {
        module.config(($provide: Provide) => {
            $provide.service('customService0', MyServiceFn)
            $provide.service('customService1', MyServiceClass)
            $provide.service('customService2', ['$controller', MyServiceFn])
            $provide.service('customService3', ['$controller', MyServiceClass])

            $provide.service<number>('customService0', MyServiceFn)
            $provide.service<MyServiceClass>('customService1', MyServiceClass)
            $provide.service<number>('customService2', ['$controller', MyServiceFn])
            $provide.service<MyServiceClass>('customService3', ['$controller', MyServiceClass])
            
            done()
        })

        angular.bootstrap(document, ['custom'])
    })

    it('.service should have right return type', (done) => {
        // NOTICE: Manual testing in VSCode with mouse hover
        module.config(($provide: Provide) => {

            // Should have type of Provider<number>
            const provider0 = $provide.service('customService0', MyServiceFn)
            const provider1 = $provide.service('customService1', MyServiceClass)
            const provider2 = $provide.service('customService2', ['$controller', MyServiceFn])
            const provider3 = $provide.service('customService3', ['$controller', MyServiceClass])
        }).run((customService0, customService1, customService2, customService3) => {
            expect(customService0 instanceof MyServiceFn).toBeTruthy()
            expect(customService1 instanceof MyServiceClass).toBeTruthy()
            expect(customService2 instanceof MyServiceFn).toBeTruthy()
            expect(customService3 instanceof MyServiceClass).toBeTruthy()

            done()
        })

        angular.bootstrap(document, ['custom'])
    })
})

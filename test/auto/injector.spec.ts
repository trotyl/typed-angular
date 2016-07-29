import { Injector } from 'angular'
import * as angular from 'angular'

describe('auto/$injector', () => {
  let injector: Injector

  class CustomService {}

  function MyFn($controller, $filter) { }

  class MyClass { constructor($controller, $filter) {} }

  beforeEach(() => {
    angular.module('custom', ['ng'])
      .value('$jsonpCallbacks', {})
      .value('$rootElement', { on: angular.noop })
      .service('customService', CustomService)
    
    injector = angular.injector(['custom'])
  })

  it('.get should have right parameters', () => {
    injector.get('customService')
    injector.get('customService', 'nobody')

    injector.get<number>('customService')
    injector.get<number>('customService', 'nobody')
  })

  it('.get should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of their own
    const $injector = injector.get('$injector')
    const $anchorScroll = injector.get('$anchorScroll')
    const $animate = injector.get('$animate')
    const $animateCss = injector.get('$animateCss')
    const $cacheFactory = injector.get('$cacheFactory')
    const $compile = injector.get('$compile')
    const $controller = injector.get('$controller')
    const $document = injector.get('$document')
    const $exceptionHandler = injector.get('$exceptionHandler')
    const $filter = injector.get('$filter')
    const $http = injector.get('$http')
    const $httpBackend = injector.get('$httpBackend')
    const $httpParamSerializer = injector.get('$httpParamSerializer')
    const $httpParamSerializerJQLike = injector.get('$httpParamSerializerJQLike')
    const $interpolate = injector.get('$interpolate')
    const $interval = injector.get('$interval')
    const $jsonpCallbacks = injector.get('$jsonpCallbacks')
    const $locale = injector.get('$locale')
    const $location = injector.get('$location')
    const $log = injector.get('$log')
    const $parse = injector.get('$parse')
    const $q = injector.get('$q')
    const $rootElement = injector.get('$rootElement')
    const $rootScope = injector.get('$rootScope')
    const $sce = injector.get('$sce')
    const $sceDelegate = injector.get('$sceDelegate')
    const $templateCache = injector.get('$templateCache')
    const $templateRequest = injector.get('$templateRequest')
    const $timeout = injector.get('$timeout')
    const $window = injector.get('$window')
    const $xhrFactory = injector.get('$xhrFactory')

    // Should have type of generic
    const customService = injector.get<CustomService>('customService')
    expect(customService instanceof CustomService).toBeTruthy()

    // Should have type of any
    const anyService = injector.get('customService')
    expect(customService instanceof CustomService).toBeTruthy()
  })

  it('.invoke should have right parameters', () => {
    injector.invoke((customService: CustomService) => customService)
    injector.invoke((customService: CustomService) => customService, {})
    injector.invoke((customService: CustomService) => customService, {}, { customService: {} })
    injector.invoke(['customService', (customService: CustomService) => customService])
    injector.invoke(['customService', (customService: CustomService) => customService], {})
    injector.invoke(['customService', (customService: CustomService) => customService], {}, { customService: {} })

    injector.invoke<CustomService>((customService: CustomService) => customService)
    injector.invoke<CustomService>((customService: CustomService) => customService, {})
    injector.invoke<CustomService>((customService: CustomService) => customService, {}, { customService: {} })
    injector.invoke<CustomService>(['customService', (customService: CustomService) => customService])
    injector.invoke<CustomService>(['customService', (customService: CustomService) => customService], {})
    injector.invoke<CustomService>(['customService', (customService: CustomService) => customService], {}, { customService: {} })
  })

  it('.invoke should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of CustomService
    const customService0 = injector.invoke((customService: CustomService) => customService)
    expect(customService0 instanceof CustomService).toBeTruthy()
    const customService1 = injector.invoke(['customService', (customService: CustomService) => customService])
    expect(customService1 instanceof CustomService).toBeTruthy()

    const customService2 = injector.invoke<CustomService>((customService: CustomService) => customService)
    const customService3 = injector.invoke<CustomService>(['customService', (customService: CustomService) => customService])
  })

  it('.has should have right parameters', () => {
    injector.has('customService')
  })

  it('.has should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of boolean
    const result = injector.has('customService')
    expect(result).toBe(true)
  })

  it('.instantiate should have right parameters', () => {
    injector.instantiate(MyFn)
    injector.instantiate(MyFn, { anotherService: {} })
    injector.instantiate(MyClass)
    injector.instantiate(MyClass, { anotherService: {} })
    injector.instantiate(['$controller', '$filter', MyFn])
    injector.instantiate(['$controller', '$filter', MyFn], { anotherService: {} })
    injector.instantiate(['$controller', '$filter', MyClass])
    injector.instantiate(['$controller', '$filter', MyClass], { anotherService: {} })

    injector.instantiate<CustomService>(MyFn)
    injector.instantiate<CustomService>(MyFn, { anotherService: {} })
    injector.instantiate<CustomService>(MyClass)
    injector.instantiate<CustomService>(MyClass, { anotherService: {} })
    injector.instantiate<CustomService>(['$controller', '$filter', MyFn])
    injector.instantiate<CustomService>(['$controller', '$filter', MyFn], { anotherService: {} })
    injector.instantiate<CustomService>(['$controller', '$filter', MyClass])
    injector.instantiate<CustomService>(['$controller', '$filter', MyClass], { anotherService: {} })
  })

  it('.instantiate should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of any
    const myFn0 = injector.instantiate(MyFn)
    expect(myFn0 instanceof MyFn).toBeTruthy()

    // Should have type of MyClass
    const myClass0 = injector.instantiate(MyClass)
    expect(myClass0 instanceof MyClass).toBeTruthy()

    // Should have type of any
    const myFn1 = injector.instantiate(['$controller', '$filter', MyFn])
    expect(myFn1 instanceof MyFn).toBeTruthy()

    // Should have type of MyClass
    const myClass1 = injector.instantiate(['$controller', '$filter', MyClass])
    expect(myClass1 instanceof MyClass).toBeTruthy()

    // Should have type of Generic
    const myFn2 = injector.instantiate<number>(MyFn)

    // Should have type of MyClass
    const myClass2 = injector.instantiate<MyClass>(MyClass)

    // Should have type of Generic
    const myFn3 = injector.instantiate<number>(['$controller', '$filter', MyFn])

    // Should have type of MyClass
    const myClass3 = injector.instantiate<MyClass>(['$controller', '$filter', MyClass])
  })

  it('.annotate should have right parameters', () => {
    injector.annotate(MyFn)
    injector.annotate(MyFn, false)
    injector.annotate(MyClass)
    injector.annotate(MyClass, false)
    injector.annotate(['$controller', '$filter', MyFn])
    injector.annotate(['$controller', '$filter', MyFn], false)
    injector.annotate(['$controller', '$filter', MyClass])
    injector.annotate(['$controller', '$filter', MyClass], false)
  })

  it('.annotate should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of string[]
    const dependencies0 = injector.annotate(MyFn)
    expect(dependencies0).toEqual(['$controller', '$filter'])
    const dependencies1 = injector.annotate(MyFn, false)
    expect(dependencies1).toEqual(['$controller', '$filter'])
    const dependencies2 = injector.annotate(MyClass)
    expect(dependencies2).toEqual(['$controller', '$filter'])
    const dependencies3 = injector.annotate(MyClass, false)
    expect(dependencies3).toEqual(['$controller', '$filter'])
    const dependencies4 = injector.annotate(['$controller', '$filter', MyFn])
    expect(dependencies4).toEqual(['$controller', '$filter'])
    const dependencies5 = injector.annotate(['$controller', '$filter', MyFn], false)
    expect(dependencies5).toEqual(['$controller', '$filter'])
    const dependencies6 = injector.annotate(['$controller', '$filter', MyClass])
    expect(dependencies6).toEqual(['$controller', '$filter'])
    const dependencies7 = injector.annotate(['$controller', '$filter', MyClass], false)
    expect(dependencies7).toEqual(['$controller', '$filter'])
  })
})

import { Injector } from 'angular'
import * as angular from 'angular'


describe('auto/$injector', () => {
  let injector: Injector

  class CustomService {}

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
    injector.instantiate(CustomService)
    injector.instantiate(CustomService, { anotherService: {} })

    injector.instantiate<CustomService>(CustomService)
    injector.instantiate<CustomService>(CustomService, { anotherService: {} })
  })

  it('.instantiate should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of CustomService
    const customService0 = injector.instantiate(CustomService)
    expect(customService0 instanceof CustomService).toBeTruthy()
    const customService1 = injector.instantiate(CustomService, { anotherService: {} })
    expect(customService1 instanceof CustomService).toBeTruthy()

    const customService2 = injector.instantiate<CustomService>(CustomService)
    const customService3 = injector.instantiate<CustomService>(CustomService, { anotherService: {} })
  })

  it('.annotate should have right parameters', () => {
    injector.annotate(function MyFn($scope, $route) { })
    injector.annotate(function MyFn($scope, $route) { }, false)
    injector.annotate(class MyClass { constructor($scope, $route) {} })
    injector.annotate(class MyClass { constructor($scope, $route) {} }, false)
    injector.annotate(['$scope', '$route', function MyFn($scope, $route) { }])
    injector.annotate(['$scope', '$route', function MyFn($scope, $route) { }], false)
    injector.annotate(['$scope', '$route', class MyClass { constructor($scope, $route) {} }])
    injector.annotate(['$scope', '$route', class MyClass { constructor($scope, $route) {} }], false)
  })

  it('.annotate should have right return type', () => {
    // NOTICE: Manual testing in VSCode with mouse hover

    // Should have type of ['$scope', '$route']
    const dependencies0 = injector.annotate(function MyFn($scope, $route) { })
    expect(dependencies0).toEqual(['$scope', '$route'])
    const dependencies1 = injector.annotate(function MyFn($scope, $route) { }, false)
    expect(dependencies1).toEqual(['$scope', '$route'])
    const dependencies2 = injector.annotate(class MyClass { constructor($scope, $route) {} })
    expect(dependencies2).toEqual(['$scope', '$route'])
    const dependencies3 = injector.annotate(class MyClass { constructor($scope, $route) {} }, false)
    expect(dependencies3).toEqual(['$scope', '$route'])
    const dependencies4 = injector.annotate(['$scope', '$route', function MyFn($scope, $route) { }])
    expect(dependencies4).toEqual(['$scope', '$route'])
    const dependencies5 = injector.annotate(['$scope', '$route', function MyFn($scope, $route) { }], false)
    expect(dependencies5).toEqual(['$scope', '$route'])
    const dependencies6 = injector.annotate(['$scope', '$route', class MyClass { constructor($scope, $route) {} }])
    expect(dependencies6).toEqual(['$scope', '$route'])
    const dependencies7 = injector.annotate(['$scope', '$route', class MyClass { constructor($scope, $route) {} }], false)
    expect(dependencies7).toEqual(['$scope', '$route'])
  })
})

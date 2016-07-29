import { Provide } from 'angular'
import * as angular from 'angular'

describe('auto/$injector', () => {
  let provide: Provide

  beforeEach(() => {
    angular.module('custom', ['ng'])
      .config($provide => provide = $provide)
  })

  xit('.provider should have right parameters', () => {
    provide.provider('customService', { $get: () => 0 })
    provide.provider('customService', ['$http', { $get: () => 0 }])
    //provide.provider('customService', function MyFn() { this.$get = () => 0 })
    provide.provider('customService', ['$http', { $get: () => 0 }])
  })
})

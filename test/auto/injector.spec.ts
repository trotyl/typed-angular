import * as angular from 'angular'
import { Injector } from 'angular'


describe('auto/$injector', () => {
  let injector: Injector

  beforeEach(() => {
    injector = angular.injector()
  })

  it('The following always holds true', () => {
    expect(injector.get('$injector')).toBe(injector)
    expect(injector.invoke(($injector: Injector) => $injector)).toBe(injector)
  })

  it('Argument names', () => {
    function MyController($scope, $route) { }
    expect(injector.annotate(MyController)).toEqual(['$scope', '$route'])
  })

  it('The $inject property', () => {
    var MyController = function (obfuscatedScope, obfuscatedRoute) { }
    MyController['$inject'] = ['$scope', '$route']
    expect(injector.annotate(MyController)).toEqual(['$scope', '$route'])
  })

  it('The array notation', () => {
    expect(injector.annotate(
      ['$compile', '$rootScope', function (obfus_$compile, obfus_$rootScope) { }])
    ).toEqual(['$compile', '$rootScope'])
  })
})

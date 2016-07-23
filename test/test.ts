/// <reference path="../typings/index.d.ts" />

import test = require('blue-tape')

import angular = require('angular')
import * as angular_alias from 'angular'

import { Scope } from 'angular'

let scope: Scope

scope.$watch(() => {}, () => {})

angular.bind({}, () => {})
angular.bind({}, () => {}, 1)
angular.bind({}, () => {}, 1, 2)

angular.bootstrap(document, ['demo'])
angular.bootstrap(document, ['demo'], { strictDi: true })

let copy = angular.copy({})
angular.copy({}, copy)

angular.element('body')

angular.equals(1, 2)


class MyVal {
}

let t = angular.toJson(undefined, false)
let x = angular.fromJson(123)

let y = angular.forEach({ a: 1, b: '2'}, (value, key, obj) => {})
let z = angular.forEach([1, 2], (value, key, obj) => {})
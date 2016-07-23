/// <reference path="../typings/index.d.ts" />

import test = require('blue-tape')

import angular_m = require('angular')
import * as angular_ns from 'angular'

import { Scope } from 'angular'

let scope: Scope

scope.$watch(() => {}, () => {})

angular.copy({}, {})
angular_ns.copy({}, {})

angular_m.bind({}, () => {})
angular_m.bind({}, () => {}, 1)
angular_m.bind({}, () => {}, 1, 2)

angular_m.bootstrap(document, ['demo'])
angular_m.bootstrap(document, ['demo'], { strictDi: true })

let copy = angular_m.copy({})
angular_m.copy({}, copy)

angular_m.element('body')

angular_m.equals(1, 2)


class MyVal {
}

let t = angular_m.toJson(undefined, false)
let x = angular_m.fromJson(123)

let y = angular_m.forEach({ a: 1, b: '2'}, (value, key, obj) => {})
let z = angular_m.forEach([1, 2], (value, key, obj) => {})
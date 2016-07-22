/// <reference path="../index.d.ts" />

import test = require('blue-tape')

import angular = require('angular')

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


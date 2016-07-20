import test = require('blue-tape')

import angular = require('../src')
import { Scope } from '../src/scope'

angular.bind({}, () => {})
angular.bind({}, () => {}, 1)
angular.bind({}, () => {}, 1, 2)

angular.bootstrap(document, ['demo'])
angular.bootstrap(document, ['demo'], { strictDi: true })

let copy = angular.copy({})
angular.copy({}, copy)

angular.element('body')

angular.equals(1, 2)

let scope: Scope

class MyVal {
}

scope.$watch(() => new MyVal(), (newVal) => {})
declare class Module {
}

declare class Injector {
}

declare class JQueryExtened {
}

declare namespace angular {
    function bind<T extends Function>(self: any, fn: T, ...args: any[]): T
    function bootstrap(element: Node, modules?: string[], config?: { strictDi: boolean }): Injector
    function copy<T>(source: T, destination?: T): T
    function element(element: string|Node): JQueryExtened
    function equals<T>(o1: T, o2: T): boolean
    function extend(dst: Object, ...src: Object[]): Object
    function forEach(obj: Object, iterator: (value: any, key: string, obj: Object) => void, context?: any): Object
    function forEach<T>(obj: T[], iterator: (value: T, key: number, obj: T[]) => void, context?: any): T[]
    function fromJson(json: string): Object|any[]|string|number
    function identity<T>(value: T): T
    function injector(modules: (string|Function)[], strictDi?: boolean): Injector
    function isArray(value: any): boolean
    function isDate(value: any): boolean
    function isDefined(value: any): boolean
    function isElement(value: any): boolean
    function isFunction(value: any): boolean
    function isNumber(value: any): boolean
    function isObject(value: any): boolean
    function isString(value: any): boolean
    function isUndefined(value: any): boolean
    function merge(dst: Object, ...src: Object[]): Object
    function module(name: string, requires?: string[], configFn?: Function): Module
    function noop(): void
    function reloadWithDebugInfo(): void
    function toJson(obj: any, pretty: boolean|number): string
}

export = angular;

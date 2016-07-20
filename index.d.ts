declare class Module {
}

declare class Injector {
}

declare class JQueryExtened {
}

declare class Cache {
    put<T>(key: string, value: T): T
    get<T>(key: string): T
    remove(key: string): void
    removeAll(): void
    destroy(): void
    info(): { id: string, size: number, [key: string]: any }
}

declare class Attributes {
    $attr: { [key: string]: string }
    $normalize(name: string): string
    $addClass(classVal: string): void
    $removeClass(classVal: string): void
    $updateClass(newClasses: string, oldClasses: string): void
    $observe(key: string, fn: (interpolatedValue: string) => void): () => void
    $set(name: string, value: string)
}

declare class AngularEvent extends Event {
    targetScope: Scope
    currentScope: Scope
    name: string
    stopPropagation(): void
    preventDefault(): void
    defaultPrevented: boolean
}

declare class Scope {
    $id: string
    $parent: Scope
    $root: Scope

    $new(isolate: boolean, parent: Scope): Scope
    $watch(watchExpression: string|((scope: Scope) => any), listener: (newVal, oldVal, scope) => void, objectEquality: boolean): () => void
    $watchGroup(watchExpression: (string|((scope: Scope) => any))[], listener: (newVal, oldVal, scope) => void): () => void
    $watchCollection(obj: string|((scope: Scope) => any), listener: (newVal, oldVal, scope) => void): () => void
    $digest(): void
    $destroy(): void
    $eval(expression?: string, locals?: { [key: string]: any }): any
    $eval<T>(expression?: (scope: Scope) => T, locals?: { [key: string]: any }): T
    $evalAsync(expression?: string, locals?: { [key: string]: any }): any
    $evalAsync<T>(expression?: (scope: Scope) => T, locals?: { [key: string]: any }): T
    $apply(exp?: string|((scope: Scope) => any)): void
    $applyAsync(exp?: string|((scope: Scope) => any)): void
    $on(name: string, listener: (event: AngularEvent, ...args: any[]) => void): () => void
    $emit(name: string, ...args: any[]): AngularEvent
    $broadcast(name: string, ...args: any[]): AngularEvent
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

    const version: {
        full: string,
        major: number,
        minor: number,
        dot: number,
        codeName: string
    }
}

export = angular;

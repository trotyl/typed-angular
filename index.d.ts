// Type definitions for Angular JS 1.5
// Project: http://angularjs.org
// Definitions by: Trotyl Yu <http://github.com/trotyl>
// Definitions: https://github.com/trotyl/typed-angular

interface Function {
    $inject?: string[]
}

declare module 'angular' {
    export = angular
}

declare namespace angular {

    type AnimationFactoryFn<T> = InjectableFn<T>
    type AsyncValidatorFn = (modelValue: any, viewValue: any) => Promise<void>
    //TODO check type of callback
    type Callback = any
    type ConfigFn = InjectableFn<void>
    type Control = FormController | NgModelController
    type DecoratorFn<T> = InjectableFn<T>
    type DirectiveFactoryFn<T extends Controller> = InjectableFn<DirectiveOptions<T>>
    type DoneFunction = NoParameterFn
    type EventListener = (event?: AngularEvent, ...args: any[]) => void
    type FilterFactoryFn<T> = InjectableFn<T>
    type FormatterFn = SingleTranformFn
    type FunctionParameter = any
    type GetFn<T> = InjectableFn<T>
    type InitializationFn = InjectableFn<void>
    type InjectableFnArray<T> = (string | InjectableFn<T>)[]
    type MapObject<T> = { [key: string]: T }
    type ModuleToLoad = string | ModuleToLoadFn | ModuleToLoadFnArray
    type ModuleToLoadFn = InjectableFn<void>
    type ModuleToLoadFnArray = InjectableFnArray<void>
    type NoParameterFn = () => void
    type OffFn = NoParameterFn
    type ParserFn = SingleTranformFn
    type SingleTranformFn = (value: any) => any
    type StringMapObject = { [key: string]: string }
    type ScopeExpression = ScopeExpressionFn<any> | string
    type ScopeExpressionFn<T> = (scope?: Scope) => T
    type SelectableElement = string | Element | Document | JQuery
    type UnObserveFn = NoParameterFn
    type UnWatchFn = NoParameterFn
    type ValidatorFn = (modelValue: any, viewValue: any) => boolean
    type ViewChangeListener = NoParameterFn
    type WatchListener<T> = (newVal?: T, oldVal?: T, scope?: Scope) => void

    const callbacks: { 
        counter: number, 
        [key: number]: Callback 
    }
    const version: {
        full: string,
        major: number,
        minor: number,
        dot: number,
        codeName: string
    }

    function bind<T extends Function>(self: any, fn: T, ...args: FunctionParameter[]): T
    function bootstrap(element: SelectableElement, modules?: ModuleToLoad[], config?: { strictDi?: boolean }): Injector
    function copy<T>(source: T): T
    function copy<T>(source: T, destination: T): void
    function element(element: SelectableElement): JQuery
    function equals<T>(o1: T, o2: T): boolean
    function extend<TDist, TSrc>(dst: TDist, src: TSrc): TDist & TSrc
    function extend<TDist, TSrc0, TSrc1>(dst: TDist, src0: TSrc0, src1: TSrc1): TDist & TSrc0 & TSrc1
    function extend<TDist, TSrc0, TSrc1, TSrc2>(dst: TDist, src0: TSrc0, src1: TSrc1, src2: TSrc2): TDist & TSrc0 & TSrc1 & TSrc2
    function extend<TDist, TSrc0, TSrc1, TSrc2, TSrc3>(dst: TDist, src0: TSrc0, src1: TSrc1, src2: TSrc2, src3: TSrc3): TDist & TSrc0 & TSrc1 & TSrc2 & TSrc3
    function extend(dst: any, ...src: any[]): any
    function forEach<T>(obj: MapObject<T>, iterator: (value?: T, key?: string, obj?: MapObject<T>) => void, context?: any): MapObject<T>
    function forEach<T>(obj: T[], iterator: (value?: T, key?: number, obj?: T[]) => void, context?: any): T[]
    function fromJson(json: string): Object | any[] | string | number
    function fromJson<T>(json: T): T
    //TODO: check $testability service type
    function getTestability(rootElement: SelectableElement): any 
    function identity<T>(value: T): T
    function injector(modules: (string | Function)[], strictDi?: boolean): Injector
    function isArray(value: any): boolean
    function isDate(value: any): boolean
    function isDefined(value: any): boolean
    function isElement(value: any): boolean
    function isFunction(value: any): boolean
    function isNumber(value: any): boolean
    function isObject(value: any): boolean
    function isString(value: any): boolean
    function isUndefined(value: any): boolean
    function lowercase(str: string): string
    function lowercase<T>(value: T): T
    function merge<TDist, TSrc>(dst: TDist, src: TSrc): TDist & TSrc
    function merge<TDist, TSrc0, TSrc1>(dst: TDist, src0: TSrc0, src1: TSrc1): TDist & TSrc0 & TSrc1
    function merge<TDist, TSrc0, TSrc1, TSrc2>(dst: TDist, src0: TSrc0, src1: TSrc1, src2: TSrc2): TDist & TSrc0 & TSrc1 & TSrc2
    function merge<TDist, TSrc0, TSrc1, TSrc2, TSrc3>(dst: TDist, src0: TSrc0, src1: TSrc1, src2: TSrc2, src3: TSrc3): TDist & TSrc0 & TSrc1 & TSrc2 & TSrc3
    function merge(dst: Object, ...src: Object[]): Object
    function module(name: string, requires?: string[], configFn?: Function): Module
    function noop(): void
    function reloadWithDebugInfo(): void
    function toJson(obj: undefined, pretty?: boolean | number): undefined
    function toJson(obj: any, pretty?: boolean | number): string
    function uppercase(str: string): string
    function uppercase<T>(value: T): T

    interface AnchorScrollProvider {
        disableAutoScrolling(): void
    }

    interface AngularEvent {
        targetScope: Scope
        currentScope: Scope
        name: string
        stopPropagation(): void
        preventDefault(): void
        defaultPrevented: boolean
    }

    interface Animation {
        // TODO: check element type
        setClass?(element, addedClasses, removedClasses, doneFunction: DoneFunction, options): void
        addClass?(element, addedClasses, doneFunction: DoneFunction, options): void
        removeClass?(element, removedClasses, doneFunction: DoneFunction, options): void
        enter?(element, doneFunction: DoneFunction, options): void
        leave?(element, doneFunction: DoneFunction, options): void
        move?(element, doneFunction: DoneFunction, options): void
        animate?(element, fromStyles, toStyles, doneFunction: DoneFunction, options): void
    }

    interface AnimateProvider {
        register<T extends Animation>(name: string, factory: AnimationFactoryFn<T>): void
        classNameFilter(expression?: RegExp): RegExp
    }

    interface Attributes {
        $attr: StringMapObject
        $normalize(name: string): string
        $addClass(classVal: string): void
        $removeClass(classVal: string): void
        $updateClass(newClasses: string, oldClasses: string): void
        $observe(key: string, fn: (interpolatedValue: string) => void): UnObserveFn
        $set(name: string, value: string): void
    }

    interface Cache {
        put<T>(key: string, value: T): T
        get<T>(key: string): T
        remove(key: string): void
        removeAll(): void
        destroy(): void
        info(): { id: string, size: number, [key: string]: any }
    }

    interface Constructor<T> {
        new (...args: any[]): T
    }

    interface DirectiveOptions<T extends Controller> {

    }

    interface ComponentOptions<T extends Controller> {

    }

    interface CompileProvider {
        directive<T extends Controller>(name: string, directiveFactory: DirectiveFactoryFn<T>): CompileProvider
        directive(mapObject: MapObject<DirectiveOptions<Controller>>): CompileProvider
        component<T extends Controller>(name: string, options: ComponentOptions<T>): CompileProvider
    }

    interface Controller {

    }

    interface ControllerProvider {
        register<T extends Controller>(name: string, constructor: Constructor<T>): void
    }

    interface Filter {

    }

    interface FilterProvider {
        register<T extends Filter>(name: string, factory: FilterFactoryFn<T>): T
        register(mapObject: MapObject<Filter>): MapObject<Filter>
    }

    interface FormController {
        $pristine: boolean
        $dirty: boolean
        $valid: boolean
        $invalid: boolean
        $pending: boolean
        $submitted: boolean
        $error: MapObject<Control>

        $rollbackViewValue(): void
        $commitViewValue(): void
        $addControl(control: Control): void
        $removeControl(control: Control): void
        $setValidity(): void
        $setDirty(): void
        $setPristine(): void
        $setUntouched(): void
        $setSubmitted(): void
    }

    interface InjectableFn<T> {
        (...args: any[]): T
    }

    interface Injector {

    }

    interface JQuery {
        scope<T extends Scope>(): T
        isolateScope<T extends Scope>(): T
        controller<T extends Controller>(name?: string): T
        injector(): Injector
        inheritedData<T>(name: string): T
        inheritedData(map: MapObject<any>): JQuery
        inheritedData(name: string, value: any): JQuery
    }

    interface Module {
        provider<T extends Service, U extends Provider<T>>(name: string, providerType: U | Constructor<U>): Module
        factory<T extends Service>(name: string, $providerFunction: GetFn<T>): Module
        service<T extends Service>(name: string, constructor: Constructor<T>): Module
        value<T extends Service>(name: string, object: T): Module
        constant<T extends Service>(name: string, object: T): Module
        decorator<T extends Service>(name: string, decorFn: DecoratorFn<T>): Module

        animation<T extends Animation>(name: string, animationFactory: AnimationFactoryFn<T>): Module
        controller<T extends Controller>(name: string, constructor: Constructor<T>): Module
        filter<T extends Filter>(name: string, filterFactory: FilterFactoryFn<T>): Module
        filter(mapObject: MapObject<Filter>): Module

        directive<T extends Controller>(name: string, directiveFactory: DirectiveFactoryFn<T>): CompileProvider
        directive(mapObject: MapObject<DirectiveOptions<Controller>>): CompileProvider
        component<T extends Controller>(name: string, options: ComponentOptions<T>): CompileProvider

        config(configFn: ConfigFn): Module
        run(initializationFn: InitializationFn): Module
    }

    interface NgModelController {
        $viewValue: any
        $modelValue: any
        $parsers: ParserFn[]
        $formatters: FormatterFn[]
        $validators: MapObject<ValidatorFn>
        $asyncValidators: MapObject<AsyncValidatorFn>
        $viewChangeListeners: ViewChangeListener[]
        // TODO: Check value type
        $error: MapObject<void>
        // TODO: Check value type
        $pending: MapObject<void>
        $untouched: boolean
        $touched: boolean
        $pristine: boolean
        $dirty: boolean
        $valid: boolean
        $invalid: boolean
        $name: string

        $render(): void
        $isEmpty(value: any): boolean
        $setValidity(validationErrorKey: string, isValid: boolean): void
        $setPristine(): void
        $setDirty(): void
        $setUntouched(): void
        $setTouched(): void
        $rollbackViewValue(): void
        $validate(): void
        $commitViewValue(): void
        $setViewValue(value: any, trigger: string): void
    }

    interface Provide {
        provider<T extends Service, U extends Provider<T>>(name: string, provider: U | Constructor<U>): U
        factory<T extends Service>(name: string, $getFn: GetFn<T>): Provider<T>
        service<T extends Service>(name: string, constructor: Constructor<T>): Provider<T>
        value<T extends Service>(name: string, value: T): Provider<T>
        constant<T extends Service>(name: string, value: T): T
        decorator<T extends Service>(name: string, decorator: DecoratorFn<T>)
    }

    interface Provider<T> {
        $get: GetFn<T>
        [key: string]: any
    }

    interface Scope {
        $id: string
        $parent: Scope
        $root: Scope

        $new(isolate: boolean, parent?: Scope): Scope
        $watch(watchExpression: string, listener: WatchListener<any>, objectEquality?: boolean): UnWatchFn
        $watch<T>(watchExpression: ScopeExpressionFn<T>, listener: WatchListener<T>, objectEquality?: boolean): UnWatchFn
        $watchGroup(watchExpression: string[], listener: WatchListener<any[]>): UnWatchFn
        $watchGroup<T>(watchExpression: ScopeExpressionFn<T>[], listener: WatchListener<T[]>): UnWatchFn
        $watchCollection(obj: string, listener: WatchListener<any>): UnWatchFn
        $watchCollection<T extends MapObject<any>>(obj: ScopeExpressionFn<T>, listener: WatchListener<T>): UnWatchFn
        $digest(): void
        $destroy(): void
        $eval(expression?: string, locals?: MapObject<any>): any
        $eval<T>(expression?: ScopeExpressionFn<T>, locals?: MapObject<any>): T
        $evalAsync(expression?: string, locals?: MapObject<any>): any
        $evalAsync<T>(expression?: ScopeExpressionFn<T>, locals?: MapObject<any>): T
        $apply(exp?: ScopeExpression): void
        $applyAsync(exp?: ScopeExpression): void
        $on(name: string, listener: EventListener): OffFn
        $emit(name: string, ...args: any[]): AngularEvent
        $broadcast(name: string, ...args: any[]): AngularEvent
    }

    interface SelectController {

    }

    interface Service {

    }
}

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

    namespace internal {
        type AnimateEvent = 'enter' | 'leave' | 'move' | 'addClass' | 'removeClass'
        type AnimationFactoryFn<T> = InjectableFn<T>
        type ConfigFn = InjectableFn<void>
        type Control = FormController | NgModelController
        type DecoratorFn<T> = InjectableFn<T>
        type DirectiveFactoryFn<T extends Controller> = InjectableFn<DirectiveOptions<T>>
        type DoneFunction = NoParameterFn
        type FilterFactoryFn<T> = InjectableFn<T>
        type FormatterFn = SingleTranformFn
        type GetFn<T> = InjectableFn<T>
        type InitializationFn = InjectableFn<void>
        type InjectableFnInArray<T> = (string | InjectableFn<T>)[]
        type ModuleToLoad = string | ModuleToLoadFn | ModuleToLoadFnArray
        type ModuleToLoadFn = InjectableFn<void>
        type ModuleToLoadFnArray = InjectableFnInArray<void>
        type OffFn = NoParameterFn
        type ParserFn = SingleTranformFn
        type StringMapObject = { [key: string]: string }
        type ScopeExpression = ScopeExpressionFn<any> | string
        type ScopeExpressionFn<T> = (scope?: Scope) => T
        type SelectableElement = string | Element | Document | JQuery
        type Type = InjectableFn<void> | InjectableFnInArray<void>
        type UnObserveFn = NoParameterFn
        type UnWatchFn = NoParameterFn
        type ValidatorFn = (modelValue: any, viewValue: any) => boolean
        type ViewChangeListener = NoParameterFn
        type WatchListener<T> = (newVal?: T, oldVal?: T, scope?: Scope) => void

        interface Constructor<T> {
            new (...args: any[]): T
        }

        type ConstructorInArray<T> = (string | Constructor<T>)[]

        interface InjectableFn<T> extends Function {
            (...args: any[]): T
        }
    }

    const callbacks: {
        counter: number,
        [key: number]: Function
    }
    const version: {
        full: string,
        major: number,
        minor: number,
        dot: number,
        codeName: string
    }

    function bind<T extends Function>(self: any, fn: T): T
    function bind<TResult, TParam>(self: any, fn: (param: TParam) => TResult, arg: TParam): () => TResult
    function bind<TResult, TParam0, TParam1>(self: any, fn: (param0: TParam0, param1: TParam1) => TResult, arg0: TParam0): (param1: TParam1) => TResult
    function bind<TResult, TParam0, TParam1>(self: any, fn: (param0: TParam0, param1: TParam1) => TResult, arg0: TParam0, arg1: TParam1): () => TResult
    function bind<TResult, TParam0, TParam1, TParam2>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2) => TResult, arg0: TParam0): (param1: TParam1, param2: TParam2) => TResult
    function bind<TResult, TParam0, TParam1, TParam2>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2) => TResult, arg0: TParam0, arg1: TParam1): (param2: TParam2) => TResult
    function bind<TResult, TParam0, TParam1, TParam2>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2) => TResult, arg0: TParam0, arg1: TParam1, arg2: TParam2): () => TResult
    function bind<TResult, TParam0, TParam1, TParam2, TParam3>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2, param3: TParam3) => TResult, arg0: TParam0): (param1: TParam1, param2: TParam2, param3: TParam3) => TResult
    function bind<TResult, TParam0, TParam1, TParam2, TParam3>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2, param3: TParam3) => TResult, arg0: TParam0, arg1: TParam1): (param2: TParam2, param3: TParam3) => TResult
    function bind<TResult, TParam0, TParam1, TParam2, TParam3>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2, param3: TParam3) => TResult, arg0: TParam0, arg1: TParam1, arg2: TParam2): (param3: TParam3) => TResult
    function bind<TResult, TParam0, TParam1, TParam2, TParam3>(self: any, fn: (param0: TParam0, param1: TParam1, param2: TParam2, param3: TParam3) => TResult, arg0: TParam0, arg1: TParam1, arg2: TParam2, arg3: TParam3): () => TResult
    function bind(self: any, fn: Function, ...args: any[]): Function
    function bootstrap(element: internal.SelectableElement, modules?: internal.ModuleToLoad[], config?: { strictDi?: boolean }): Injector
    function copy<T>(source: T): T
    function copy<T>(source: T, destination: T): void
    function element(element: internal.SelectableElement): JQuery
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
    function identity<T>(value: T): T
    function injector(modules?: (string | Function)[], strictDi?: boolean): Injector
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

    interface AnchorScrollService extends Service {
        (hash?: string): void
        yOffset: number | ((...args: any[]) => number) | JQuery
    }

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

    interface AnimateService extends Service {
        on(event: internal.AnimateEvent, container: Element, callback: (element: Element, phase: 'start' | 'close') => void): void
        off(container: Element, callback?: any): void
        off(event: string, container?: Element, callback?: () => void): void
        pin(element: string, parentElement: string): void
        enabled(enabled?: boolean): boolean
        enabled(element?: Element, enabled?: boolean): boolean
        cancel(animationPromise: Promise<void>): void
        enter<T extends MapObject<string>>(element: Element, parent: Element, after?: Element, options?: AnimateOptions<T>): Promise<void>
        move<T extends MapObject<string>>(element: Element, parent: Element, after?: Element, options?: AnimateOptions<T>): Promise<void>
        leave<T extends MapObject<string>>(element: Element, options?: AnimateOptions<T>): Promise<void>
        addClass<T extends MapObject<string>>(element: Element, className: string, options?: AnimateOptions<T>): Promise<void>
        removeClass<T extends MapObject<string>>(element: Element, className: string, options?: AnimateOptions<T>): Promise<void>
        setClass<T extends MapObject<string>>(element: Element, add: string, remove: string, options?: AnimateOptions<T>): Promise<void>
        animate<T extends MapObject<string>>(element: Element, from: T, to: T, className: string, options?: AnimateOptions<T>): Promise<void>
    }

    interface AnimateCssOptions<T> extends AnimateOptions<T> {
        event: Event
        structural: boolean
        easing: string
        transitionStyle: string
        keyframeStyle: string
        duration: number
        delay: number
        stagger: number
        staggerIndex: number
        applyClassesEarly: boolean
        cleanupStyles: boolean
    }

    interface AnimateCssService extends Service {
        (element: JQuery | Element | Document, options): Animator
    }

    interface AnimateOptions<T> {
        removeClass: string
        addClass: string
        from: T
        to: T
    }

    interface AnimateProvider {
        register<T extends Animation>(name: string, factory: internal.AnimationFactoryFn<T>): void
        classNameFilter(expression?: RegExp): RegExp
    }

    interface Animation {
        // TODO: check element type
        setClass?(element, addedClasses, removedClasses, doneFunction: internal.DoneFunction, options): void
        addClass?(element, addedClasses, doneFunction: internal.DoneFunction, options): void
        removeClass?(element, removedClasses, doneFunction: internal.DoneFunction, options): void
        enter?(element, doneFunction: internal.DoneFunction, options): void
        leave?(element, doneFunction: internal.DoneFunction, options): void
        move?(element, doneFunction: internal.DoneFunction, options): void
        animate?(element, fromStyles, toStyles, doneFunction: internal.DoneFunction, options): void
    }

    interface Animator {
        start(): Promise<void>
        end(): void
    }

    interface AsyncValidatorFn {
        (modelValue: any, viewValue: any): Promise<void>
    }

    interface Attributes {
        $attr: internal.StringMapObject
        $normalize(name: string): string
        $addClass(classVal: string): void
        $removeClass(classVal: string): void
        $updateClass(newClasses: string, oldClasses: string): void
        $observe(key: string, fn: (interpolatedValue: string) => void): internal.UnObserveFn
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

    interface CacheFactoryService extends Service {
        //TODO
    }

    interface CompileService extends Service {
        //TODO
    }

    interface ComponentOptions<T extends Controller> {

    }

    interface CompileProvider {
        directive<T extends Controller>(name: string, directiveFactory: internal.DirectiveFactoryFn<T>): CompileProvider
        directive(mapObject: MapObject<DirectiveOptions<Controller>>): CompileProvider
        component<T extends Controller>(name: string, options: ComponentOptions<T>): CompileProvider
    }

    interface Controller {

    }

    interface ControllerService extends Service {
        //TODO
    }

    interface ControllerProvider {
        register<T extends Controller>(name: string, constructor: internal.Constructor<T>): void
    }

    interface DirectiveOptions<T extends Controller> {

    }

    interface DocumentService extends Service {
        //TODO
    }

    interface ExceptionHandlerService extends Service {
        //TODO
    }

    interface EventListener {
        (event?: AngularEvent, ...args: any[]): void
    }

    interface Filter {

    }

    interface FilterService extends Service {
        //TODO
    }

    interface FilterProvider {
        register<T extends Filter>(name: string, factory: internal.FilterFactoryFn<T>): T
        register(mapObject: MapObject<Filter>): MapObject<Filter>
    }

    interface FormController {
        $pristine: boolean
        $dirty: boolean
        $valid: boolean
        $invalid: boolean
        $pending: boolean
        $submitted: boolean
        $error: MapObject<internal.Control>

        $rollbackViewValue(): void
        $commitViewValue(): void
        $addControl(control: internal.Control): void
        $removeControl(control: internal.Control): void
        $setValidity(): void
        $setDirty(): void
        $setPristine(): void
        $setUntouched(): void
        $setSubmitted(): void
    }

    interface HttpService extends Service {
        //TODO
    }

    interface HttpBackendService extends Service {
        //TODO
    }

    interface HttpParamSerializerService extends Service {
        //TODO
    }

    interface HttpParamSerializerJQLikeService extends Service {
        //TODO
    }

    interface Injector {
        get(name: '$injector', caller?: string): Injector
        get(name: '$anchorScroll', caller?: string): AnchorScrollService
        get(name: '$animate', caller?: string): AnimateService
        get(name: '$animateCss', caller?: string): AnimateCssService
        get(name: '$cacheFactory', caller?: string): CacheFactoryService
        get(name: '$compile', caller?: string): CompileService
        get(name: '$controller', caller?: string): ControllerService
        get(name: '$document', caller?: string): DocumentService
        get(name: '$exceptionHandler', caller?: string): ExceptionHandlerService
        get(name: '$filter', caller?: string): FilterService
        get(name: '$http', caller?: string): HttpService
        get(name: '$httpBackend', caller?: string): HttpBackendService
        get(name: '$httpParamSerializer', caller?: string): HttpParamSerializerService
        get(name: '$httpParamSerializerJQLike', caller?: string): HttpParamSerializerJQLikeService
        get(name: '$interpolate', caller?: string): InterpolateService
        get(name: '$interval', caller?: string): IntervalService
        get(name: '$jsonpCallbacks', caller?: string): JsonpCallbacksService
        get(name: '$locale', caller?: string): LocaleService
        get(name: '$location', caller?: string): LocationService
        get(name: '$log', caller?: string): LogService
        get(name: '$parse', caller?: string): ParseService
        get(name: '$q', caller?: string): QService
        get(name: '$rootElement', caller?: string): RootElementService
        get(name: '$rootScope', caller?: string): RootScopeService
        get(name: '$sce', caller?: string): SceService
        get(name: '$sceDelegate', caller?: string): SceDelegateService
        get(name: '$templateCache', caller?: string): TemplateCacheService
        get(name: '$templateRequest', caller?: string): TemplateRequestService
        get(name: '$timeout', caller?: string): TimeoutService
        get(name: '$window', caller?: string): WindowService
        get(name: '$xhrFactory', caller?: string): XhrFactoryService
        get<T extends Service>(name: string, caller?: string): T
        invoke<T>(fn: internal.InjectableFn<T>, self?: any, locals?: Locals): T
        invoke<T>(fn: internal.InjectableFnInArray<T>, self?: any, locals?: Locals): T
        has(name: string): boolean
        instantiate<T>(type: internal.InjectableFn<void>, locals?: Locals): T
        instantiate<T>(type: internal.Constructor<T>, locals?: Locals): T
        instantiate<T>(type: internal.InjectableFnInArray<void>, locals?: Locals): T
        instantiate<T>(type: internal.ConstructorInArray<T>, locals?: Locals): T
        annotate(fn: internal.InjectableFn<void>, strictDi?: boolean): string[]
        annotate(fn: internal.Constructor<any>, strictDi?: boolean): string[]
        annotate(fn: internal.InjectableFnInArray<void>, strictDi?: boolean): string[]
        annotate(fn: internal.ConstructorInArray<any>, strictDi?: boolean): string[]
    }

    interface InterpolateService extends Service {
        //TODO
    }

    interface IntervalService extends Service {
        //TODO
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

    interface JsonpCallbacksService extends Service {
        //TODO
    }

    interface LocaleService extends Service {
        //TODO
    }

    interface Locals {
        $anchorScroll?: AnchorScrollService
        $animate?: AnimateService
        $animateCss?: AnimateCssService
        $cacheFactory?: CacheFactoryService
        $compile?: CompileService
        $controller?: ControllerService
        $document?: Document
        $exceptionHandler?: ExceptionHandlerService
        $filter?: FilterService
        $http?: HttpService
        $httpBackend?: HttpBackendService
        $httpParamSerializer?: HttpParamSerializerService
        $httpParamSerializerJQLike?: HttpParamSerializerJQLikeService
        $interpolate?: InterpolateService
        $interval?: IntervalService
        $jsonpCallbacks?: JsonpCallbacksService
        $locale?: LocaleService
        $locationL?: LocationService
        $log?: LogService
        $parse?: ParseService
        $q?: QService
        $rootElement?: RootElementService
        $rootScope?: RootScopeService
        $sce?: SceService
        $sceDelegate?: SceDelegateService
        $templateCache?: TemplateCacheService
        $templateRequest?: TemplateRequestService
        $timeout?: TimeoutService
        $window?: WindowService
        $xhrFactory?: XhrFactoryService
        [name: string]: Service
    }

    interface LocationService extends Service {
        //TODO
    }

    interface LogService extends Service {
        //TODO
    }

    interface MapObject<T> {
        [key: string]: T
    }

    interface Module {
        provider<T extends Service, U extends Provider<T>>(name: string, providerType: U | internal.Constructor<U>): Module
        factory<T extends Service>(name: string, $providerFunction: internal.GetFn<T>): Module
        service<T extends Service>(name: string, constructor: internal.Constructor<T>): Module
        value<T extends Service>(name: string, object: T): Module
        constant<T extends Service>(name: string, object: T): Module
        decorator<T extends Service>(name: string, decorFn: internal.DecoratorFn<T>): Module

        animation<T extends Animation>(name: string, animationFactory: internal.AnimationFactoryFn<T>): Module
        controller<T extends Controller>(name: string, constructor: internal.Constructor<T>): Module
        filter<T extends Filter>(name: string, filterFactory: internal.FilterFactoryFn<T>): Module
        filter(mapObject: MapObject<Filter>): Module

        directive<T extends Controller>(name: string, directiveFactory: internal.DirectiveFactoryFn<T>): CompileProvider
        directive(mapObject: MapObject<DirectiveOptions<Controller>>): CompileProvider
        component<T extends Controller>(name: string, options: ComponentOptions<T>): CompileProvider

        config(configFn: internal.ConfigFn): Module
        run(initializationFn?: internal.InitializationFn): Module
    }

    interface NgModelController {
        $viewValue: any
        $modelValue: any
        $parsers: internal.ParserFn[]
        $formatters: internal.FormatterFn[]
        $validators: MapObject<internal.ValidatorFn>
        $asyncValidators: MapObject<AsyncValidatorFn>
        $viewChangeListeners: internal.ViewChangeListener[]
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

    interface NoParameterFn {
        (): void
    }

    interface ParseService extends Service {
        //TODO
    }

    interface Provide {
        provider<TService extends Service, TProvider extends Provider<TService>>(name: string, provider: TProvider): TProvider
        provider<TService extends Service>(name: string, provider: internal.InjectableFn<any>): Provider<TService>
        provider<TService extends Service, TProvider extends Provider<TService>>(name: string, provider: internal.Constructor<TProvider>): TProvider
        provider<TService extends Service, TProvider extends Provider<TService>>(name: string, provider: (string | TProvider)[]): TProvider
        provider<TService extends Service>(name: string, provider: internal.InjectableFnInArray<any>): Provider<TService>
        provider<TService extends Service, TProvider extends Provider<TService>>(name: string, provider: internal.ConstructorInArray<TProvider>): TProvider
        factory<T extends Service>(name: string, $getFn: internal.GetFn<T>): Provider<T>
        service<T extends Service>(name: string, constructor: internal.Constructor<T>): Provider<T>
        value<T extends Service>(name: string, value: T): Provider<T>
        constant<T extends Service>(name: string, value: T): T
        decorator<T extends Service>(name: string, decorator: internal.DecoratorFn<T>)
    }

    interface Provider<T> {
        $get: internal.GetFn<T>
        [key: string]: any
    }

    interface QService extends Service {
        //TODO
    }

    interface RootElementService extends Service {
        //TODO
    }

    interface RootScopeService extends Service {
        //TODO
    }

    interface SingleTranformFn {
        (value: any): any
    }

    interface SceService extends Service {
        //TODO
    }

    interface SceDelegateService extends Service {
        //TODO
    }

    interface Scope {
        $id: string
        $parent: Scope
        $root: Scope

        $new(isolate: boolean, parent?: Scope): Scope
        $watch(watchExpression: string, listener: internal.WatchListener<any>, objectEquality?: boolean): internal.UnWatchFn
        $watch<T>(watchExpression: internal.ScopeExpressionFn<T>, listener: internal.WatchListener<T>, objectEquality?: boolean): internal.UnWatchFn
        $watchGroup(watchExpression: string[], listener: internal.WatchListener<any[]>): internal.UnWatchFn
        $watchGroup<T>(watchExpression: internal.ScopeExpressionFn<T>[], listener: internal.WatchListener<T[]>): internal.UnWatchFn
        $watchCollection(obj: string, listener: internal.WatchListener<any>): internal.UnWatchFn
        $watchCollection<T extends MapObject<any>>(obj: internal.ScopeExpressionFn<T>, listener: internal.WatchListener<T>): internal.UnWatchFn
        $digest(): void
        $destroy(): void
        $eval(expression?: string, locals?: MapObject<any>): any
        $eval<T>(expression?: internal.ScopeExpressionFn<T>, locals?: MapObject<any>): T
        $evalAsync(expression?: string, locals?: MapObject<any>): any
        $evalAsync<T>(expression?: internal.ScopeExpressionFn<T>, locals?: MapObject<any>): T
        $apply(exp?: internal.ScopeExpression): void
        $applyAsync(exp?: internal.ScopeExpression): void
        $on(name: string, listener: EventListener): internal.OffFn
        $emit(name: string, ...args: any[]): AngularEvent
        $broadcast(name: string, ...args: any[]): AngularEvent
    }

    interface SelectController {

    }

    interface Service {

    }

    interface TemplateCacheService extends Service {
        //TODO
    }

    interface TemplateRequestService extends Service {
        //TODO
    }

    interface TimeoutService extends Service {
        //TODO
    }

    interface WindowService extends Service {
        //TOOD
    }

    interface XhrFactoryService extends Service {
        //TODO
    }
}

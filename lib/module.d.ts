import { Constructor, InjectableFn, MapObject } from './lang'

import { GetFn, DecoratorFn, Provider, Service } from './provide'

import { Animation, FactoryFn as AnimationFactoryFn } from './animate-provider'
import { Controller } from './controller-provider'
import { FactoryFn as FilterFactoryFn, Filter } from './filter-provider'

import { CompileProvider, DirectiveFactoryFn, DirectiveOptions, ComponentOptions } from './compile-provider'



type ConfigFn = InjectableFn<void>
type InitializationFn = InjectableFn<void>

export interface Module {
    provider<T extends Service, U extends Provider<T>>(name: string, providerType: U|Constructor<U>): Module
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

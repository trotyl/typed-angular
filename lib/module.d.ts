import { Constructor, InjectableFn } from './lang'

import { GetFn, DecoratorFn, Provider } from './provide'

import { RegisterFn as AnimateRegisterFn } from './animate-provider'
import { RegisterFn as ControllerRegisterFn } from './controller-provider'
import { RegisterFn as FilterRegisterFn } from './filter-provider'

import { DirectiveFn, ComponentFn } from './compile-provider'



type ConfigFn = InjectableFn<void>
type InitializationFn = InjectableFn<void>

export interface Module {
    provider<T, U extends Provider<T>>(name: string, providerType: U|Constructor<U>): Module
    factory<T>(name: string, $providerFunction: GetFn<T>): Module
    service<T>(name: string, constructor: Constructor<T>): Module
    value<T>(name: string, object: T): Module
    constant<T>(name: string, object: T): Module
    decorator<T>(name: string, decorFn: DecoratorFn<T>): Module

    animation: AnimateRegisterFn
    controller: ControllerRegisterFn
    filter: FilterRegisterFn
    
    directive: DirectiveFn
    component: ComponentFn

    config(configFn: ConfigFn): Module
    run(initializationFn: InitializationFn): Module
}

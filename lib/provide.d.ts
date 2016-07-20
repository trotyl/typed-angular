import { InjectableFn, Constructor } from './lang'

export type GetFn<T> = InjectableFn<T>
export type DecoratorFn<T> = InjectableFn<T>

export interface Provider<T> {
    $get: GetFn<T>
    [key: string]: any
}

export interface Provide {
    provider<T, U extends Provider<T>>(name: string, provider: U|Constructor<U>): U
    factory<T>(name: string, $getFn: GetFn<T>): Provider<T>
    service<T>(name: string, constructor: Constructor<T>): Provider<T>
    value<T>(name: string, value: T): Provider<T>
    constant<T>(name: string, value: T): T
    decorator<T>(name: string, decorator: DecoratorFn<T>)
}

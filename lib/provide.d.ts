import { InjectableFn, Constructor } from './lang'

export type GetFn<T> = InjectableFn<T>
export type DecoratorFn<T> = InjectableFn<T>

export interface Service {

}

export interface Provider<T> {
    $get: GetFn<T>
    [key: string]: any
}

export interface Provide {
    provider<T extends Service, U extends Provider<T>>(name: string, provider: U|Constructor<U>): U
    factory<T extends Service>(name: string, $getFn: GetFn<T>): Provider<T>
    service<T extends Service>(name: string, constructor: Constructor<T>): Provider<T>
    value<T extends Service>(name: string, value: T): Provider<T>
    constant<T extends Service>(name: string, value: T): T
    decorator<T extends Service>(name: string, decorator: DecoratorFn<T>)
}

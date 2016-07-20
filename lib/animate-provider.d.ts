import { InjectableFn } from './lang'

export type FactoryFn<T> = InjectableFn<T>

export interface Animation {

}

export interface AnimateProvider {
    register<T extends Animation>(name: string, factory: FactoryFn<T>)
}

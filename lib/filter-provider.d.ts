import { InjectableFn, MapObject } from './lang'

export type FactoryFn<T> = InjectableFn<T>

export interface Filter {

}

export interface FilterProvider {
    register<T extends Filter>(name: string, factory: FactoryFn<T>): T
    register(mapObject: MapObject<Filter>): MapObject<Filter>
}

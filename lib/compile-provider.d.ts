import { InjectableFn, MapObject } from './lang'
import { Controller } from './controller-provider'

export type DirectiveFactoryFn<T extends Controller> = InjectableFn<DirectiveOptions<T>>

export interface DirectiveOptions<T extends Controller> {

}

export interface ComponentOptions<T extends Controller> {
    
}

export interface CompileProvider {
    directive<T extends Controller>(name: string, directiveFactory: DirectiveFactoryFn<T>): CompileProvider
    directive(mapObject: MapObject<DirectiveOptions<Controller>>): CompileProvider
    component<T extends Controller>(name: string, options: ComponentOptions<T>): CompileProvider
}

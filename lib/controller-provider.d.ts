import { Constructor } from './lang'

export interface Controller {

}

export interface ControllerProvider {
    register<T extends Controller>(name: string, constructor: Constructor<T>): void
}

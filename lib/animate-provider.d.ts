import { InjectableFn, NoParameterFn } from './lang'

export type FactoryFn<T> = InjectableFn<T>
export type DoneFunction = NoParameterFn

export interface Animation {
    // TODO: check element type
    setClass?(element, addedClasses, removedClasses, doneFunction: DoneFunction, options): void
    addClass?(element, addedClasses, doneFunction: DoneFunction, options): void
    removeClass?(element, removedClasses, doneFunction: DoneFunction, options): void
    enter?(element, doneFunction: DoneFunction, options): void
    leave?(element, doneFunction: DoneFunction, options): void
    move?(element, doneFunction: DoneFunction, options): void
    animate?(element, fromStyles, toStyles, doneFunction: DoneFunction, options): void
}

export interface AnimateProvider {
    register<T extends Animation>(name: string, factory: FactoryFn<T>): void
    classNameFilter(expression?: RegExp): RegExp
}

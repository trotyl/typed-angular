import { StringMapObject, NoParameterFn } from './lang'

export type UnObserveFn = NoParameterFn

export interface Attributes {
    $attr: StringMapObject
    $normalize(name: string): string
    $addClass(classVal: string): void
    $removeClass(classVal: string): void
    $updateClass(newClasses: string, oldClasses: string): void
    $observe(key: string, fn: (interpolatedValue: string) => void): UnObserveFn
    $set(name: string, value: string): void
}

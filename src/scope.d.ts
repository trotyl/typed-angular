import { AngularEvent } from './angular-event'
import { MapObject, NoParameterFn } from './lang'

type ScopeExpressionFn<T> = (scope?: Scope) => T
type ScopeExpression = ScopeExpressionFn<any>|string
type WatchListener<T> = (newVal?: T, oldVal?: T, scope?: Scope) => void
type EventListener = (event?: AngularEvent, ...args: any[]) => void
type UnWatchFn = NoParameterFn
type OffFn = NoParameterFn

export interface Scope {
    $id: string
    $parent: Scope
    $root: Scope

    $new(isolate: boolean, parent?: Scope): Scope
    $watch(watchExpression: string, listener: WatchListener<any>, objectEquality?: boolean): UnWatchFn
    $watch<T>(watchExpression: ScopeExpressionFn<T>, listener: WatchListener<T>, objectEquality?: boolean): UnWatchFn
    $watchGroup(watchExpression: string[], listener: WatchListener<any[]>): UnWatchFn
    $watchGroup<T>(watchExpression: ScopeExpressionFn<T>[], listener: WatchListener<T[]>): UnWatchFn
    $watchCollection(obj: string, listener: WatchListener<any>): UnWatchFn
    $watchCollection<T extends MapObject>(obj: ScopeExpressionFn<T>, listener: WatchListener<T>): UnWatchFn
    $digest(): void
    $destroy(): void
    $eval(expression?: string, locals?: MapObject): any
    $eval<T>(expression?: ScopeExpressionFn<T>, locals?: MapObject): T
    $evalAsync(expression?: string, locals?: MapObject): any
    $evalAsync<T>(expression?: ScopeExpressionFn<T>, locals?: MapObject): T
    $apply(exp?: ScopeExpression): void
    $applyAsync(exp?: ScopeExpression): void
    $on(name: string, listener: EventListener): OffFn
    $emit(name: string, ...args: any[]): AngularEvent
    $broadcast(name: string, ...args: any[]): AngularEvent
}

import { Scope } from './scope'

export interface AngularEvent {
    targetScope: Scope
    currentScope: Scope
    name: string
    stopPropagation(): void
    preventDefault(): void
    defaultPrevented: boolean
}
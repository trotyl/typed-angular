export type NoParameterFn = () => void

export type MapObject<T> = { [key: string]: T }
export type StringMapObject = { [key: string]: string }

export interface InjectableFn<T> {
    (...args: any[]): T
}

export interface Constructor<T> {
    new(...args: any[]): T
}

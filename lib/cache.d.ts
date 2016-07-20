export interface Cache {
    put<T>(key: string, value: T): T
    get<T>(key: string): T
    remove(key: string): void
    removeAll(): void
    destroy(): void
    info(): { id: string, size: number, [key: string]: any }
}

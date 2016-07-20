type ProviderFunction = (...args: any[]) => void

interface Provider {
    $get: ProviderFunction
    [key: string]: any
}

interface ProviderConstructor {
    new(...args: any[]): Provider
}

export interface Module {
    provider<T extends Provider>(name: string, provider: T|ProviderConstructor): Provider
}

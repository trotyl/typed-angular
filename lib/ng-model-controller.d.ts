import { MapObject, NoParameterFn } from './lang'

export type SingleTranformFn = (value: any) => any
export type ParserFn = SingleTranformFn
export type FormatterFn = SingleTranformFn
export type ValidatorFn = (modelValue: any, viewValue: any) => boolean
export type AsyncValidatorFn = (modelValue: any, viewValue: any) => Promise<void>
export type ViewChangeListener = NoParameterFn

export interface NgModelController {
    $viewValue: any
    $modelValue: any
    $parsers: ParserFn[]
    $formatters: FormatterFn[]
    $validators: MapObject<ValidatorFn>
    $asyncValidators: MapObject<AsyncValidatorFn>
    $viewChangeListeners: ViewChangeListener[]
    // TODO: Check value type
    $error: MapObject<void>
    // TODO: Check value type
    $pending: MapObject<void>
    $untouched: boolean
    $touched: boolean
    $pristine: boolean
    $dirty: boolean
    $valid: boolean
    $invalid: boolean
    $name: string

    $render(): void
    $isEmpty(value: any): boolean
    $setValidity(validationErrorKey: string, isValid: boolean): void
    $setPristine(): void
    $setDirty(): void
    $setUntouched(): void
    $setTouched(): void
    $rollbackViewValue(): void
    $validate(): void
    $commitViewValue(): void
    $setViewValue(value: any, trigger: string): void
}

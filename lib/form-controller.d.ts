import { MapObject } from './lang'
import { NgModelController } from './ng-model-controller'

export type Control = FormController|NgModelController

export interface FormController {
    $pristine: boolean
    $dirty: boolean
    $valid: boolean
    $invalid: boolean
    $pending: boolean
    $submitted: boolean
    $error: MapObject<Control>

    $rollbackViewValue(): void
    $commitViewValue(): void
    $addControl(control: Control): void
    $removeControl(control: Control): void
    $setValidity(): void
    $setDirty(): void
    $setPristine(): void
    $setUntouched(): void
    $setSubmitted(): void
}
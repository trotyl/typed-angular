import { Module } from 'angular'
import * as angular from 'angular'

describe('auto/$provide', () => {
    let module: Module
    let element: Document

    beforeEach(() => {
        module = angular.module('custom', [])
        element = document.cloneNode(true) as Document
    })

    
})

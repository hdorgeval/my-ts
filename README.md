# my-ts
fluent API for TypeScript

![travis build](https://img.shields.io/travis/hdorgeval/my-ts.svg)
![npm](https://img.shields.io/npm/v/my-ts.svg)
[![devDependency Status](https://david-dm.org/hdorgeval/my-ts/dev-status.svg)](https://david-dm.org/hdorgeval/my-ts?type=dev)
[![dependency Status](https://david-dm.org/hdorgeval/my-ts/status.svg)](https://david-dm.org/hdorgeval/my-ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/hdorgeval/my-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/hdorgeval/my-ts)

[![npm badge](https://nodei.co/npm/my-ts.png)](https://npmjs.org/package/my-ts)

## Prerequisites

This library have dependencies that require Node 7.0.8 or higher, together with NPM 4.2.0 or higher.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install my-ts --save-dev
```

## Usage

```typescript
const object: any = ...
if (my(object).isNullOrUndefinedOrEmpty) {
    //code omitted for brevity
}

const validator = (element: any): IValidationResult => { ... }
const {isValid, validationErrors} = my(object).validateWith(validator);
if (isValid ) {
    //code omitted for brevity
}

const notNull = (element: any): boolean => { ... }
if (my(object).is(notNull)) {
    //code omitted for brevity
}
 
```

## API
```typescript
    /**
     * Check if input object is null
     */
    isNull: boolean;

    /**
     * Check if input object is undefined
     */
    isUndefined: boolean;

    /**
     * Check if input object is null or undefined
     */
    isNullOrUndefined: boolean;

    /**
     * Check if input object is empty
     */
    isEmpty: boolean;

    /**
     * Check if input object has owned properties
     */
    hasOwnProperties: boolean;

    /**
     * Check if input object is null or undefined or empty
     */
    isNullOrUndefinedOrEmpty: boolean;

    /**
     * Check if input array contains a value
     */
    contains<T>(value: T): boolean;

    /**
     * Get in input array the first element that matches the predicate
     * @param {function} - Predicate used to find the element
     * @returns {T | undefined}
     */
    firstOrDefault<T>(predicate: (element: T, index: number) => boolean): T | undefined;

    /**
     * Select, in a new array, all items of the input array that satisfies the predicate.
     * @param {function} predicate - Predicate used to select the elements in input array
     * @returns {T[]} - returns the selected items or an empty array if no item is selected
     */
    where<T>(predicate: (element: T, index: number) => boolean): T[];

    /**
     * Validate input object with specified validator.
     * @param {function} validator - function that takes input object and returns an IValidationResult object
     * @returns {IValidationResult} - returns the IValidationResult object returned by the validator
     */
    validateWith<T>(validator: (element: T) => IValidationResult): IValidationResult;

    /**
     * Check if input object matches the predicate
     * @param {function} predicate - Predicate used to verify that input object satisfies a specific condition
     * @returns {boolean | undefined}
     */
    is<T>(predicate: (element: T) => boolean): boolean | undefined;

```
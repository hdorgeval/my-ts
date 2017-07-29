# my-ts
fluent syntax for writing TypeScript Apps

![travis build](https://img.shields.io/travis/hdorgeval/my-ts.svg)
![npm](https://img.shields.io/npm/v/my-ts.svg)
[![devDependency Status](https://david-dm.org/hdorgeval/my-ts/dev-status.svg)](https://david-dm.org/hdorgeval/my-ts?type=dev)
[![dependency Status](https://david-dm.org/hdorgeval/my-ts/status.svg)](https://david-dm.org/hdorgeval/my-ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/hdorgeval/my-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/hdorgeval/my-ts)
[![Known Vulnerabilities](https://snyk.io/test/github/hdorgeval/my-ts/badge.svg)](https://snyk.io/test/github/hdorgeval/my-ts)
[![Code Climate](https://codeclimate.com/github/hdorgeval/my-ts/badges/gpa.svg)](https://codeclimate.com/github/hdorgeval/my-ts)
[![Issue Count](https://codeclimate.com/github/hdorgeval/my-ts/badges/issue_count.svg)](https://codeclimate.com/github/hdorgeval/my-ts)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Quality Gate](https://sonarcloud.io/api/badges/gate?key=hdorgeval:my-ts)](https://sonarcloud.io/dashboard/index/hdorgeval:my-ts)



[![npm badge](https://nodei.co/npm/my-ts.png)](https://npmjs.org/package/my-ts)

## Installation
```bash
npm install my-ts --save
```

## Examples

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

const elements: any[] = ...
const elementWithSpecificPattern = (element: any): boolean => { ... }
if (my(elements).hasAtLeastOne(elementWithSpecificPattern)) {
    //code omitted for brevity
}

const object: any = ...
const process = (element: any): any => { ... }
const {hasFailed, hasSucceeded, result, error} = my(object).tryTo(process);       
if (hasSucceeded) {
    //code omitted for brevity
}

const elements: any[] = ...
const closed = (element: any): boolean => { ... }
if (my(elements).areAll(closed)) {
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

    /**
     * Check if input object does not match the predicate
     * @param {function} predicate - Predicate used to verify that input object does not satisfy a specific condition
     * @returns {boolean | undefined}
     */
    isNot<T>(predicate: (element: T) => boolean): boolean | undefined;

    /**
     * Check if input array contains at least one element that satisfies the predicate
     * @param {function} predicate - Predicate used to find an element
     * @returns {boolean | undefined} - returns true if one element has been found.
     *                                  returns undefined if the predicate throws an exception
     */
    hasAtLeastOne<T>(predicate: (element: T) => boolean): boolean | undefined;

    /**
     * Try to execute an action on input element
     * @param {function} action - Action used to process the element
     * @returns {IActionResult<U>} - returns an IActionResult object that wraps the result returned by the action.
     */
    tryTo<T, U>(action: (element: T) => U): IActionResult<U>;

    /**
     * Check if all items of the input array satisfies the predicate.
     * @param {function} predicate - Predicate used to check each item in the input array
     * @returns {boolean | undefined} - returns true when the predicate returns true for all items.
     *                                  returns undefined if the predicate throws an error
     */
    areAll<T>(predicate: (element: T) => boolean): boolean | undefined;

```
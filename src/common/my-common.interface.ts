export interface ImyCommon {
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
     * @param {function} predicate - Predicate used to find the element
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
}

export interface IValidatable {
    /**
     * Validate input object with specified validator.
     * @param {function} validator - function that takes input object and returns an IValidationResult object
     * @returns {IValidationResult} - returns the IValidationResult object returned by the validator
     */
    validateWith<T>(validator: (element: T) => IValidationResult): IValidationResult;
}

export interface IValidationResult {
    isValid: boolean;
    validationErrors?: IValidationError[];
}

export interface IValidationError {
    reason: string;
}

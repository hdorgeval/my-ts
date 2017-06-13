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
}

export interface ImyArray {
    /**
     * Check if input object is an array
     */
    isArray: boolean;

    /**
     * Check if input array is empty
     */
    isEmpty: boolean;
    /**
     * Check if input array is not empty
     */
    isNotEmpty: boolean;

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
     * Check if input array contains at least one element that satisfies the predicate
     * @param {function} predicate - Predicate used to find an element
     * @returns {boolean | undefined} - returns true if one element has been found.
     *                                  returns undefined if the predicate throws an exception
     */
    hasAtLeastOne<T>(predicate: (element: T) => boolean): boolean | undefined;
}

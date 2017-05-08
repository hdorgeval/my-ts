export interface Imy {
    /**
     * Check if input object is null
     */
    isNull(): boolean;

    /**
     * Check if input object is undefined
     */
    isUndefined(): boolean;

    /**
     * Check if input object is null or undefined
     */
    isNullOrUndefined(): boolean;

    /**
     * Check if input object is empty
     */
    isEmpty(): boolean;

    /**
     * Check if input object is an array
     */
    isArray(): boolean;

    /**
     * Check if input object has owned properties
     */
    hasOwnProperties(): boolean;

    /**
     * Check if input object is null or undefined or empty
     */
    isNullOrUndefinedOrEmpty(): boolean;
}

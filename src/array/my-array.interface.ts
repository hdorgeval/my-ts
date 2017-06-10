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
}

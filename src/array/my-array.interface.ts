export interface ImyArray {
    /**
     * Check if input object is an array
     */
    isArray(): ImyArrayNext;
}

export interface ImyArrayNext {
    /**
     * Check if input array is empty
     */
    isEmpty(): boolean;
    /**
     * Check if input array is not empty
     */
    isNotEmpty(): boolean;
}

import {ImyArray} from "./my-array.interface";

class My implements ImyArray {
    private input: any;

    /**
     *
     */
    constructor(input: any) {
        this.input = input;
    }

    public isArray(): boolean {
        if (Array.isArray(this.input)) {
            return true;
        }
        return false;
    }

    public isEmpty(): boolean {
        if (this.isArray() && this.input.length === 0) {
            return true;
        }
        return false;
    }

    public isNotEmpty(): boolean {
        if (this.isArray() && this.input.length > 0) {
            return true;
        }
        return false;
    }

}

/**
 * my fluent API for array types
 * @param input object used by the fluent API
 */
export const my = (input: any): ImyArray => {
    return new My(input);
};

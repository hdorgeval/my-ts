import {ImyArray, ImyArrayNext} from "./my-array.interface";

class My implements ImyArray {
    private input: any;

    private shouldDiscardExecution: boolean;

    /**
     *
     */
    constructor(input: any) {
        this.input = input;
        this.shouldDiscardExecution = false;
    }

    public isArray(): ImyArrayNext {
        if (Array.isArray(this.input)) {
            return this;
        }
        this.shouldDiscardExecution = true;
        return this;
    }

    public isEmpty(): boolean {
        if (this.shouldDiscardExecution) {
            return false;
        }
        if (this.input.length === 0) {
            return true;
        }
        return false;
    }

    public isNotEmpty(): boolean {
        if (this.shouldDiscardExecution) {
            return false;
        }
        if (this.input.length > 0) {
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

import {ImyArray} from "./my-array.interface";

class My implements ImyArray {
    private input: any;

    /**
     *
     */
    constructor(input: any) {
        this.input = input;
    }
    public get isArray(): boolean {
        if (Array.isArray(this.input)) {
            return true;
        }
        return false;
    }
    private get isNotArray(): boolean {
        return this.isArray === false;
    }
    public get isEmpty(): boolean {
        if (this.isArray && this.input.length === 0) {
            return true;
        }
        return false;
    }
    public get isNotEmpty(): boolean {
        if (this.isArray && this.input.length > 0) {
            return true;
        }
        return false;
    }
    public contains<T>(value: T): boolean {
        if (this.isNotArray) {
            return false;
        }
        if (this.isEmpty) {
            return false;
        }
        for (const v of this.input) {
            if (v === value) {
                return true;
            }
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

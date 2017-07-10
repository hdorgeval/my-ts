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
    public firstOrDefault<T>(predicate: (element: T, index: number) => boolean): T | undefined {
        if (this.isNotArray) {
            return undefined;
        }
        if (this.isEmpty) {
            return undefined;
        }
        for (let i = 0; i < this.input.length; i++) {
            const value = this.input[i];
            try {
                if (predicate(value, i)) {
                    return value;
                }
            } catch (error) {
                return undefined;
            }
        }
        return undefined;
    }

    public where<T>(predicate: (element: T, index: number) => boolean): T[] {
        if (this.isNotArray) {
            return [];
        }
        if (this.isEmpty) {
            return [];
        }
        const foundItems: T[] = [];
        for (let i = 0; i < this.input.length; i++) {
            const item = this.input[i];
            try {
                if (predicate(item, i)) {
                    foundItems.push(item);
                }
            } catch (error) {
                continue;
            }
        }
        return foundItems;
    }

    public hasAtLeastOne<T>(predicate: (element: T) => boolean): boolean | undefined {
        if (this.isNotArray) {
            return false;
        }
        if (this.isEmpty) {
            return false;
        }
        for (const element of this.input) {
            try {
                if (predicate(element)) {
                    return true;
                }
            } catch (error) {
                return undefined;
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

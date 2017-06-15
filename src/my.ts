
import {my as my_array} from "./array/my-array";
import { IValidationResult } from "./common/my-common.interface";
import {Imy} from "./my.interface";

class My implements Imy {
    private input: any;

    /**
     *
     */
    constructor(input: any) {
        this.input = input;
    }
    public get isNull(): boolean {
        if (this.input === null) {
            return true;
        }
        return false;
    }
    public get isUndefined(): boolean {
        if (this.input === undefined) {
            return true;
        }
        return false;
    }
    public get isNullOrUndefined(): boolean {
        if (this.isNull) {
            return true;
        }
        if (this.isUndefined) {
            return true;
        }
        return false;
    }
    public get isEmpty(): boolean {
        if (this.isEmptyArray) {
            return true;
        }
        if (this.isNonEmptyArray) {
            return false;
        }
        if (typeof this.input === "string" && this.input.length === 0) {
            return true;
        }
        if (typeof this.input === "number") {
            return false;
        }
        if (typeof this.input === "boolean") {
            return false;
        }
        if (this.hasOwnProperties) {
            return false;
        }
        return true;
    }
    public get hasOwnProperties(): boolean {
        const ownPropertyNames = Object.getOwnPropertyNames(this.input);
        if (my(ownPropertyNames).isEmpty) {
            return false;
        }
        return true;
    }
    public get isNullOrUndefinedOrEmpty(): boolean {
        if (this.isNullOrUndefined) {
            return true;
        }
        if (this.isEmpty) {
            return true;
        }
        return false;
    }
    private get isEmptyArray(): boolean {
        return my_array(this.input)
                .isEmpty;
    }
    private get isNonEmptyArray(): boolean {
        return my_array(this.input)
                .isNotEmpty;
    }
    public contains<T>(value: T): boolean {
        if (my_array(this.input).contains(value)) {
            return true;
        }
        return false;
    }
    public firstOrDefault<T>(predicate: (element: T, index: number) => boolean): T {
        return my_array(this.input).firstOrDefault(predicate);
    }
    public where<T>(predicate: (element: T, index: number) => boolean): T[] {
        return my_array(this.input).where(predicate);
    }
    public validateWith<T>(validator: (element: T) => IValidationResult): IValidationResult {
        try {
            return validator(this.input);
        } catch (error) {
            const errorMessage = `${error}`;
            return {
                isValid: false,
                validationErrors: [{reason: errorMessage}],
            };
        }
    }

}

/**
 * my fluent API
 * @param input object used by the fluent API
 */
export const my = (input: any): Imy => {
    return new My(input);
};

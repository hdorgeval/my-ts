
import {my as my_array} from "./array/my-array";
import {Imy} from "./my.interface";

class My implements Imy {
    private input: any;

    /**
     *
     */
    constructor(input: any) {
        this.input = input;
    }

    public isNull(): boolean {
        if (this.input === null) {
            return true;
        }
        return false;
    }

    public isUndefined(): boolean {
        if (this.input === undefined) {
            return true;
        }
        return false;
    }

    public isNullOrUndefined(): boolean {
        if (this.isNull()) {
            return true;
        }
        if (this.isUndefined()) {
            return true;
        }
        return false;
    }

    public isEmpty(): boolean {
        if (this.isEmptyArray()) {
            return true;
        }
        if (this.isNonEmptyArray()) {
            return false;
        }
        if (typeof this.input === "string" && this.input.length === 0) {
            return true;
        }
        if (this.hasOwnProperties()) {
            return false;
        }
        return true;
    }

    public hasOwnProperties(): boolean {
        const ownPropertyNames = Object.getOwnPropertyNames(this.input);
        if (my(ownPropertyNames).isEmpty()) {
            return false;
        }
        return true;
    }
    public isNullOrUndefinedOrEmpty(): boolean {
        if (this.isNullOrUndefined()) {
            return true;
        }
        if (this.isEmpty()) {
            return true;
        }
        return false;
    }
    private isEmptyArray(): boolean {
        return my_array(this.input)
                .isEmpty();
    }

    private isNonEmptyArray(): boolean {
        return my_array(this.input)
                .isNotEmpty();
    }

}

/**
 * my fluent API
 * @param input object used by the fluent API
 */
export const my = (input: any): Imy => {
    return new My(input);
};


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
        if (this.isArray() && this.input.length > 0) {
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

}

/**
 * my fluent API
 * @param input object used by the fluent API
 */
export const my = (input: any): Imy => {
    return new My(input);
};

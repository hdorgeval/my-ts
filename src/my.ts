
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

}

/**
 * my fluent API
 * @param input object used by the fluent API
 */
export const my = (input: any): Imy => {
    return new My(input);
};

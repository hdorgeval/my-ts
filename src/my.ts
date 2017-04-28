
import {myInterface} from './my.interface'
class My implements myInterface{
    private _input:any;
    
    /**
     *
     */
    constructor(input:any) {
        this._input = input;
    }
    
    isNull():boolean{
        if (this._input === null){
            return true;
        }
        return false;
    }

    isUndefined():boolean{
        if (this._input === undefined){
            return true;
        }
        return false;
    }
    
    isNullOrUndefined():boolean{
        if (this.isNull()){
            return true;
        }
        if (this.isUndefined()){
            return true;
        }
        return false;
    }

}


/**
 * my fluent API
 * @param input object used by the fluent API
 */
export const my=function(input:any):myInterface{
    return new My(input);
} 
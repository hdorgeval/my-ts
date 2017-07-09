import { IValidationResult } from "./common/my-common.interface";
import {my} from "./my";
// tslint:disable:max-line-length
test("isNull should return true when input object is null", () => {
    // Given
    const object: any = null;
    // When
    const result = my(object).isNull;
    /// Then
    expect(result).toBeTruthy();
});

test("isNull should return false when input object is not null", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isNull;
    /// Then
    expect(result).toBeFalsy();
});

test("isNull should return false when input object is a number", () => {
    // Given
    const object: number = 0;
    // When
    const result = my(object).isNull;
    /// Then
    expect(result).toBeFalsy();
});

test("isUndefined should return true when input object is undefined", () => {
    // Given
    const object: any = undefined;
    // When
    const result = my(object).isUndefined;
    /// Then
    expect(result).toBeTruthy();
});

test("isUndefined should return false when input object is not undefined", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isUndefined;
    /// Then
    expect(result).toBeFalsy();
});

test("isUndefined should return false when input object is a number", () => {
    // Given
    const object: number = 0;
    // When
    const result = my(object).isUndefined;
    /// Then
    expect(result).toBeFalsy();
});

test("isNullOrUndefined should return true when input object is null", () => {
    // Given
    const object: any = null;
    // When
    const result = my(object).isNullOrUndefined;
    /// Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefined should return true when input object is undefined", () => {
    // Given
    const object: any = undefined;
    // When
    const result = my(object).isNullOrUndefined;
    /// Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefined should return false when input object is not null and not undefined", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isNullOrUndefined;
    // Then
    expect(result).toBeFalsy();
});

test("isNullOrUndefined should return false when input object is a number", () => {
    // Given
    const object: number = 0;
    // When
    const result = my(object).isNullOrUndefined;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return true when input object is an empty array of string", () => {
    // Given
    const object: string[] = [];
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isEmpty should return false when input object is non empty array", () => {
    // Given
    const object: any[] = [1, 2, 3];
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return true when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isEmpty should return true when input object is an empty string", () => {
    // Given
    const object: string = "";
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isEmpty should return false when input object is a non empty string", () => {
    // Given
    const object: string = "test";
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return false when input object is a number", () => {
    // Given
    const object: number = 0;
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return false when input object is a boolean", () => {
    // Given
    const object: boolean = false;
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("hasOwnProperties should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).hasOwnProperties;
    // Then
    expect(result).toBeFalsy();
});

test("hasOwnProperties should return true when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).hasOwnProperties;
    // Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefinedOrEmpty should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isNullOrUndefinedOrEmpty should return false when input object is non empty array", () => {
    // Given
    const object: any[] = [1, 2, 3];
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isNullOrUndefinedOrEmpty should return true when input object is an empty array", () => {
    // Given
    const object: any[] = [];
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefinedOrEmpty should return true when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefinedOrEmpty should return true when input object is an empty string", () => {
    // Given
    const object: string = "";
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("isNullOrUndefinedOrEmpty should return false when input object is a non empty string", () => {
    // Given
    const object: string = "test";
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isNullOrUndefinedOrEmpty should return true when input object is undefined", () => {
    // Given
    const object: any = undefined;
    // When
    const result = my(object).isNullOrUndefinedOrEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("contains should return false when input object is undefined", () => {
    // Given
    const object: any = undefined;
    const value = {};
    // When
    const result = my(object).contains(value);
    // Then
    expect(result).toBeFalsy();
});

test("contains should return false when input object is null", () => {
    // Given
    const object: any = null;
    const value = {};
    // When
    const result = my(object).contains(value);
    // Then
    expect(result).toBeFalsy();
});

test("contains should return true when input object is an array of literal objects that contains the specified literal object", () => {
    // Given
    const obj1 = {};
    const obj2 = {};
    const obj3 = {};
    const object: any[] = [obj1, obj2 , obj3];
    // When
    const result = my(object).contains(obj2);
    // Then
    expect(result).toBeTruthy();
});

test(`Given input object is an empty string[]
      And predicate searches string "test"
      When firstOrDefault is called
      Then the result should be undefined`
    , () => {
    // Given
    const object: string[] = [];
    const elementToFind = "test";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).firstOrDefault(predicate);
    // Then
    expect(result).toBeUndefined();
});

test(`Given input object is an empty string[]
      And predicate searches string "test"
      When 'where' is called
      Then the result should be an empty []`
    , () => {
    // Given
    const object: string[] = [];
    const elementToFind = "test";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).where(predicate);
    // Then
    expect(result).toEqual([]);
});

test(`Given input object is a null object
      And a validator that checks input object should not be null
      When 'validateWith' is called with this validator
      Then the result should be an IValidationResult with isValid=false`
    , () => {
    // Given
    const object: any = null;
    const validator = (element: any): IValidationResult => {
        if (my(object).isNullOrUndefinedOrEmpty) {
            return {isValid: false};
        }
        return {isValid: true};
    };
    // When
    const {isValid} = my(object).validateWith(validator);
    // Then
    expect(isValid).toBe(false);
});

test(`Given input object is a null object
      And a validator that checks input object should not be null
      When 'validateWith' is called with this validator
      But validator throws an error
      Then the result should be an IValidationResult with isValid=false
      And the reason message should be the error message of the throwned exception
      `
    , () => {
    // Given
    const object: any = null;
    const errorMessage = "bad";
    const validator = (element: any): IValidationResult => {
        if (my(object).isNullOrUndefinedOrEmpty) {
            throw new Error(errorMessage);
        }
        return {isValid: true};
    };
    // When
    const {isValid, validationErrors} = my(object).validateWith(validator);
    // Then
    expect(isValid).toBe(false);
    expect(validationErrors[0].reason.indexOf(errorMessage)).toBeGreaterThan(1);
});

test(`Given input object is a null object
      And a predicate that checks input object is not null
      When 'is' is called with this predicate
      Then the result should be false`
    , () => {
    // Given
    const object: any = null;
    const notNull = (element: any): boolean => {
        if (element == null) {
            return false;
        }
        return true;
    };
    // When
    const result = my(object).is(notNull);
    // Then
    expect(result).toBe(false);
});

test(`Given input object is a null object
      And a predicate that checks input object is not null
      When 'is' is called with this predicate
      But predicate throws an error
      Then the result should be undefined`
    , () => {
    // Given
    const object: any = null;
    const errorMessage = "bad";
    const notNull = (element: any): boolean => {
        if (element == null) {
            throw new Error(errorMessage);
        }
        return true;
    };
    // When
    const result = my(object).is(notNull);
    // Then
    expect(result).toBeUndefined();
});

test(`Given input object is a null object
      And a predicate that checks input object is nullOrUndefinedOrEmpty
      When 'isNot' is called with this predicate
      Then the result should be false`
    , () => {
    // Given
    const object: any = null;
    const nullOrUndefinedOrEmpty = (element: any): boolean => {
        if (my(element).isNullOrUndefinedOrEmpty) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).isNot(nullOrUndefinedOrEmpty);
    // Then
    expect(result).toBe(false);
});

test(`Given input object is a null object
      And a predicate that checks input object is nullOrUndefinedOrEmpty
      When 'isNot' is called with this predicate
      But predicate throws an error
      Then the result should be undefined`
    , () => {
    // Given
    const object: any = null;
    const errorMessage = "bad";
    const nullOrUndefinedOrEmpty = (element: any): boolean => {
        if (my(element).isNullOrUndefinedOrEmpty) {
            throw new Error(errorMessage);
        }
        return false;
    };
    // When
    const result = my(object).isNot(nullOrUndefinedOrEmpty);
    // Then
    expect(result).toBeUndefined();
});

test(`Given input object is an empty string[]
      And predicate searches string "test"
      When 'hasAtLeastOne' is called
      Then the result should be false`
    , () => {
    // Given
    const object: string[] = [];
    const elementToFind = "test";
    const predicate = (element: string): boolean => {
        if (element === elementToFind) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).hasAtLeastOne(predicate);
    // Then
    expect(result).toBe(false);
});

import {my} from "./my";

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

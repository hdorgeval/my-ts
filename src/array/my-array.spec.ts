import {my} from "./my-array";

test("isEmpty should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isArray().isEmpty();
    // Then
    expect(result).toBeFalsy();
});
test("isNotEmpty should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isArray().isNotEmpty();
    // Then
    expect(result).toBeFalsy();
 });

test("isEmpty should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isArray().isEmpty();
    // Then
    expect(result).toBeFalsy();
});
test("isNotEmpty should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isArray().isNotEmpty();
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return true when input object is an empty array", () => {
    // Given
    let object: any[] = new Array<any>();
    // When
    const result = my(object).isArray().isEmpty();
    // Then
    expect(result).toBeTruthy();
});
test("isNotEmpty should return false when input object is an empty array", () => {
    // Given
    let object: any[] = new Array<any>();
    // When
    const result = my(object).isArray().isNotEmpty();
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return false when input object is an array with at least one value in it", () => {
    // Given
    let object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).isArray().isEmpty();
    // Then
    expect(result).toBeFalsy();
});
test("isNotEmpty should return true when input object is an array with at least one value in it", () => {
    // Given
    let object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).isArray().isNotEmpty();
    // Then
    expect(result).toBeTruthy();
});

import { my } from "./my";
// tslint:disable:max-line-length

test(`Given input object is a null object
      When 'splitToLines' is called on this object
      Then the result should be an empty array
      `, () => {
  // Given
  const object: any = null;
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

test(`Given input object is an undefined object
      When 'splitToLines' is called on this object
      Then the result should be an empty array
      `, () => {
  // Given
  const object: any = undefined;
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

test(`Given input object is an empty string
      When 'splitToLines' is called on this string
      Then the result should be an empty array
      `, () => {
  // Given
  const object: string = "";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

test(`Given input object is a string with value "test"
      When 'splitToLines' is called on this string
      Then the result should be an array that contains only the input string
      `, () => {
  // Given
  const object: string = "test";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that starts with the empty line "\n"
      When 'splitToLines' is called on this string
      Then the first empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "\ntest";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that starts with the empty line "\r\n"
      When 'splitToLines' is called on this string
      Then the first empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "\r\ntest";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that starts with the empty line "\r"
      When 'splitToLines' is called on this string
      Then the first empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "\rtest";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that ends with the empty line "\n"
      When 'splitToLines' is called on this string
      Then the last empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "test\n";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that ends with the empty line "\r\n"
      When 'splitToLines' is called on this string
      Then the last empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "test\r\n";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string that ends with the empty line "\r"
      When 'splitToLines' is called on this string
      Then the last empty line should be removed from the result
      `, () => {
  // Given
  const object: string = "test\r";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test"]);
});

test(`Given input object is a multiline string 
      And lines are separated by "\n"
      When 'splitToLines' is called on this string
      Then every line should be trimmed in the result
      `, () => {
  // Given
  const object: string = "test1 \n\ttest2 ";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test1", "test2"]);
});

test(`Given input object is a multiline string 
      And lines are separated by "\r\n"
      When 'splitToLines' is called on this string
      Then every line should be trimmed in the result
      `, () => {
  // Given
  const object: string = "test1 \r\n\ttest2 ";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual(["test1", "test2"]);
});

test(`Given input object is a multiline string 
      But all lines are empty and separated by "\n"
      When 'splitToLines' is called on this string
      Then every line should be an empty array
      `, () => {
  // Given
  const object: string = "\n\n\n";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

test(`Given input object is a multiline string 
      But all lines are white spaces and separated by "\n"
      When 'splitToLines' is called on this string
      Then every line should be an empty array
      `, () => {
  // Given
  const object: string = "\n \n   \n";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

test(`Given input object is a multiline string 
      But all lines are white spaces or tab and separated by "\n"
      When 'splitToLines' is called on this string
      Then every line should be an empty array
      `, () => {
  // Given
  const object: string = "\n\n\t\t \n \t  \n";
  // When
  const result = my(object).splitToLines();
  // Then
  expect(result).toEqual([]);
});

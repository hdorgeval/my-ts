import { my } from "./my";
// tslint:disable:max-line-length

test(`Given input array is string[] with values ["test1","test2"]
      And a predicate that checks input string has only one character
      When 'areAll' is called
      Then the result should be false`, () => {
  // Given
  const objects: string[] = ["test1", "test2"];
  const predicate = (element: string): boolean => {
    if (element.length === 1) {
      return true;
    }
    return false;
  };
  // When
  const result = my(objects).areAll(predicate);
  // Then
  expect(result).toBe(false);
});

test(`Given input array is string[] with values ["a","b"]
      And a predicate that checks input string has only one character
      When 'areAll' is called
      Then the result should be true`, () => {
  // Given
  const objects: string[] = ["a", "b"];
  const predicate = (element: string): boolean => {
    if (element.length === 1) {
      return true;
    }
    return false;
  };
  // When
  const result = my(objects).areAll(predicate);
  // Then
  expect(result).toBe(true);
});

test(`Given input array is string[] with values ["a","b"]
      And a predicate that checks input string has only one character
      When 'areAll' is called
      But predicate throws an error
      Then the result should be undefined`, () => {
  // Given
  const objects: string[] = ["a", "b"];
  const predicate = (element: string): boolean => {
    if (element.length === 1) {
      throw new Error("predicate failure");
    }
    return false;
  };
  // When
  const result = my(objects).areAll(predicate);
  // Then
  expect(result).toBe(undefined);
});

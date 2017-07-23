import { IActionResult } from "./common/my-common.interface";
import { my } from "./my";
// tslint:disable:max-line-length

test(`Given input object is a null object
      And an action that process this object to return a number
      When 'tryTo' is called with this action
      But action throws an error
      Then the result should be an IActionResult with
            hasSucceeded=false,
            hasFailed=true,
            result=undefined
      And the error object should be the error throwned by the action
      `, () => {
  // Given
  const object: any = null;
  const actionResult: number = 0;
  const actionError = new Error("processing error");
  const process = (element: any): number => {
    if (my(object).isNullOrUndefinedOrEmpty) {
      throw actionError;
    }
    return actionResult;
  };
  // When
  const { hasFailed, hasSucceeded, result, error } = my(object).tryTo(process);
  // Then
  expect(hasFailed).toBe(true);
  expect(hasSucceeded).toBe(false);
  expect(error).toBe(actionError);
  expect(result).toBe(undefined);
});

test(`Given input object is the path "/usr/bin/test/"
      And an action that process this path to remove any trailing separator
      When 'tryTo' is called with this action
      Then the result should be an IActionResult with
            hasSucceeded=true,
            hasFailed=false,
            result="/usr/bin/test"
      `, () => {
  // Given
  const path: string = "/usr/bin/test/";
  const actionResult: string = "/usr/bin/test";
  const removeTrailingDirectorySeparator = (element: string): string => {
    return actionResult;
  };
  // When
  const { hasFailed, hasSucceeded, result, error } = my(path).tryTo(removeTrailingDirectorySeparator);
  // Then
  expect(hasFailed).toBe(false);
  expect(hasSucceeded).toBe(true);
  expect(error).toBe(undefined);
  expect(result).toBe(actionResult);
});

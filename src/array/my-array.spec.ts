import {my} from "./my-array";
// tslint:disable:max-line-length
test("isArray should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isArray;
    // Then
    expect(result).toBeFalsy();
});
test("isArray should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isArray;
    // Then
    expect(result).toBeFalsy();
});
test("isArray should return false when input object is null", () => {
    // Given
    const object: any = null;
    // When
    const result = my(object).isArray;
    // Then
    expect(result).toBeFalsy();
});
test("isArray should return false when input object is undefined", () => {
    // Given
    const object: any = undefined;
    // When
    const result = my(object).isArray;
    // Then
    expect(result).toBeFalsy();
});
test("isArray should return true when input object is an empty array", () => {
    // Given
    const object: any[] = new Array<any>();
    // When
    const result = my(object).isArray;
    // Then
    expect(result).toBeTruthy();
});

test("isEmpty should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});
test("isNotEmpty should return false when input object is an empty literal object", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).isNotEmpty;
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
test("isNotEmpty should return false when input object is a literal object with owned properties", () => {
    // Given
    const object: any = {prop1: "prop1", length: 0};
    // When
    const result = my(object).isNotEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return true when input object is an empty array", () => {
    // Given
    const object: any[] = new Array<any>();
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeTruthy();
});
test("isNotEmpty should return false when input object is an empty array", () => {
    // Given
    const object: any[] = new Array<any>();
    // When
    const result = my(object).isNotEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isEmpty should return false when input object is an array with at least one value in it", () => {
    // Given
    const object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).isEmpty;
    // Then
    expect(result).toBeFalsy();
});

test("isNotEmpty should return true when input object is an array with at least one value in it", () => {
    // Given
    const object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).isNotEmpty;
    // Then
    expect(result).toBeTruthy();
});

test("contains should return false when input object is not an array", () => {
    // Given
    const object: any = {};
    // When
    const result = my(object).contains(0);
    // Then
    expect(result).toBeFalsy();
});

test("contains should return false when input object is an empty array", () => {
    // Given
    const object: any[] = [];
    // When
    const result = my(object).contains(0);
    // Then
    expect(result).toBeFalsy();
});

test("contains should return true when input object is an array of numbers that contains the specified number", () => {
    // Given
    const object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).contains(0);
    // Then
    expect(result).toBeTruthy();
});

test("contains should return false when input object is an array of numbers that does not contain the specified number", () => {
    // Given
    const object: any[] = [0, 1, 2, 3];
    // When
    const result = my(object).contains(4);
    // Then
    expect(result).toBeFalsy();
});

test("contains should return false when input object is an array of literal objects that does not contain the specified literal object", () => {
    // Given
    const obj1 = {};
    const obj2 = {};
    const obj3 = {};
    const object: any[] = [obj1, obj2 , obj3];
    // When
    const obj4 = {};
    const result = my(object).contains(obj4);
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

test("contains should return true when input object is an array of literal objects that contains the specified undefined object", () => {
    // Given
    const obj1 = {};
    const obj2: any = undefined;
    const obj3 = {};
    const object: any[] = [obj1, obj2 , obj3];
    // When
    const result = my(object).contains(undefined);
    // Then
    expect(result).toBeTruthy();
});

test("contains should return true when input object is an array of literal objects that contains the specified null object", () => {
    // Given
    const obj1 = {};
    const obj2: any = null;
    const obj3 = {};
    const object: any[] = [obj1, obj2 , obj3];
    // When
    const result = my(object).contains(null);
    // Then
    expect(result).toBeTruthy();
});

test(`Given input array is a null string[]
      And predicate searches string "test"
      When 'firstOrDefault' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object: string[] = null;
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

test(`Given input array is an undefined string[]
      And predicate searches string "test"
      When 'firstOrDefault' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object: string[] = undefined;
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

test(`Given input array is an empty string[]
      And predicate searches string "test"
      When 'firstOrDefault' is called
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

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test1"
      When 'firstOrDefault' is called
      Then the result should be "test1"`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test1";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).firstOrDefault(predicate);
    // Then
    expect(result).toBe(elementToFind);
});

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test3"
      When 'firstOrDefault' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test3";
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

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test1"
      But predicate throws an error
      When 'firstOrDefault' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test1";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            throw new Error("predicate failure");
        }
        return false;
    };
    // When
    const result = my(object).firstOrDefault(predicate);
    // Then
    expect(result).toBeUndefined();
});

test(`Given input array is a literal object {test1,test2}
      And predicate searches string "test1"
      When 'firstOrDefault' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object = {test1: "test1", test2: "test2"};
    const elementToFind = "test1";
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

test(`Given input array is a null string[]
      And predicate searches string "test"
      When 'where' is called
      Then the result should be an empty array`
    , () => {
    // Given
    const object: string[] = null;
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

test(`Given input array is an undefined string[]
      And predicate searches string "test"
      When 'where' is called
      Then the result should be an empty array`
    , () => {
    // Given
    const object: string[] = undefined;
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

test(`Given input array is an empty string[]
      And predicate searches string "test"
      When 'where' is called
      hen the result should be an empty array`
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

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test1"
      When 'where' is called
      Then the result should be ["test1"]`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test1";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            return true;
        }
        return false;
    };
    // When
    const result = my(object).where(predicate);
    // Then
    expect(result).toEqual([elementToFind]);
});

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test3"
      When 'where' is called
      Then the result should be an empty array`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test3";
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

test(`Given input array is string[] with values ["test1","test2"]
      And predicate searches string "test1"
      But predicate throws an error
      When 'where' is called
      Then the result should be an empty array`
    , () => {
    // Given
    const object: string[] = ["test1", "test2"];
    const elementToFind = "test1";
    const predicate = (element: string, index: number): boolean => {
        if (element === elementToFind) {
            throw new Error("predicate failure");
        }
        return false;
    };
    // When
    const result = my(object).where(predicate);
    // Then
    expect(result).toEqual([]);
});

test(`Given input array is a literal object {test1,test2}
      And predicate searches string "test1"
      When 'where' is called
      Then the result should be undefined`
    , () => {
    // Given
    const object = {test1: "test1", test2: "test2"};
    const elementToFind = "test1";
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

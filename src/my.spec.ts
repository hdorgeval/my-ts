import {my} from './my'

test('isNull should return true when input object is null',()=>{
    //Given
    const object:any = null;
    //When
    const result = my(object).isNull();
    //Then
    expect(result).toBeTruthy();
})

test('isNull should return false when input object is not null',()=>{
    //Given
    const object:any = {};
    //When
    const result = my(object).isNull();
    //Then
    expect(result).toBeFalsy();
})

test('isUndefined should return true when input object is undefined',()=>{
    //Given
    const object:any = undefined;
    //When
    const result = my(object).isUndefined();
    //Then
    expect(result).toBeTruthy();
})

test('isUndefined should return false when input object is not undefined',()=>{
    //Given
    const object:any = {};
    //When
    const result = my(object).isUndefined();
    //Then
    expect(result).toBeFalsy();
})

test('isNullOrUndefined should return true when input object is null',()=>{
    //Given
    const object:any = null;
    //When
    const result = my(object).isNullOrUndefined();
    //Then
    expect(result).toBeTruthy();
})

test('isNullOrUndefined should return true when input object is undefined',()=>{
    //Given
    const object:any = undefined;
    //When
    const result = my(object).isNullOrUndefined();
    //Then
    expect(result).toBeTruthy();
})

test('isNullOrUndefined should return false when input object is not null and not undefined',()=>{
    //Given
    const object:any = {};
    //When
    const result = my(object).isNullOrUndefined();
    //Then
    expect(result).toBeFalsy();
})


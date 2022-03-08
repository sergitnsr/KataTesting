//const bucle = require('./index.js');
//test("comprueba resultados", () => {
//  expect(bucle).toEqual(expect.anything());
//});

import { divisiblePor3 } from "./index";
import { divisiblePor5 } from "../scripts/FizzBuzz";
import { divisiblePor3Y5 } from "../scripts/FizzBuzz";

describe('Testing FizzBuzz', () => {
    test('should return Fizz', () => {
    expect(divisiblePor3()).toBe('Fizz');  
    });    
})

describe('Testing FizzBuzz', () => {
    test('should return Buzz', () => {
    expect(divisiblePor5()).toBe('Buzz')  
    });   
})

describe('Testing FizzBuzz', () => {
    test('should return FizzBuzz', () => {
    expect(divisiblePor3Y5()).toBe('FizzBuzz')  
    });   
})
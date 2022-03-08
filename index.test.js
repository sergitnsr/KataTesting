//const bucle = require('./index.js');
//test("comprueba resultados", () => {
//  expect(bucle).toEqual(expect.anything());
//});

import { divisiblePor3 } from "./index";
import { divisiblePor5 } from "./index";
import { divisiblePor3Y5 } from "./index";

describe('Test Fizz', () => {
    test('devuelve Fizz', () => {
    expect(divisiblePor3()).toBe('Fizz');  
    });    
})

describe('Test Buzz', () => {
    test('devuelve Buzz', () => {
    expect(divisiblePor5()).toBe('Buzz')  
    });   
})

describe('Test FizzBuzz', () => {
    test('devuelve FizzBuzz', () => {
    expect(divisiblePor3Y5()).toBe('FizzBuzz')  
    });   
})
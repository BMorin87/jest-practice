import {capitalize, reverseString, calculator, caesarCipher} from './practice';

test('capitalizes hello world', () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
})

test('reverses hello world', () => {
    expect(reverseString("Hello, world!")).toBe("!dlrow ,olleH");
})

describe('calculator', () => {
    test('add: adds two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });
    test('subtract: subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    test('multiply: multiplies two numbers', () => {
        expect(calculator.multiply(2, 4)).toBe(8);
    });
    test('divide: divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
})

test('ciphers hello world', () => {
    expect(caesarCipher("Hello, World!", 4)).toBe("Lipps, Asvph!");
})
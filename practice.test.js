import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './practice';

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

const array = [1,8,3,4,2,6];
const result = analyzeArray(array);
test('finds mean of an array', () => {
    expect(result.average).toBe(4);
})
test('finds minimum of an array', () => {
    expect(result.min).toBe(1);
})
test('finds maximum of an array', () => {
    expect(result.max).toBe(8);
})
test('finds length of an array', () => {
    expect(result.length).toBe(6);
})
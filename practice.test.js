import {capitalize, reverseString} from './practice';

test('capitalizes hello world', () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
})

test('reverses hello world', () => {
    expect(reverseString("Hello, world!")).toBe("!dlrow ,olleH");
})
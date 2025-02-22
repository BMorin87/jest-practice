import capitalize from './practice';

test('capitalizes hello world', () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
})
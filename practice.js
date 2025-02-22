export function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.split('').reverse().join('');
}
export function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export function caesarCipher(str, shift) {
  if (typeof str !== "string") {
    return str;
  }
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  if (isLowerCase(code)) {
    return shiftCharCode(code, shift, 97, 122);
  } else if (isUpperCase(code)) {
    return shiftCharCode(code, shift, 65, 90);
  } else {
    return char;
  }
}

function isLowerCase(code) {
  return code >= 97 && code <= 122;
}

function isUpperCase(code) {
  return code >= 65 && code <= 90;
}

function shiftCharCode(code, shift, min, max) {
  let shiftedCode = code + (shift % 26);
  if (shiftedCode > max) {
    shiftedCode -= 26;
  } else if (shiftedCode < min) {
    shiftedCode += 26;
  }
  return String.fromCharCode(shiftedCode);
}

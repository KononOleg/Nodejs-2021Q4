const COUNT_LETTERS = 26,
  INDEX = 64;

const decodeChar = (char, shift, code) => {
  let charCode = char.charCodeAt() - INDEX;

  if (charCode >= 1 && charCode <= COUNT_LETTERS) {
    let newShift = charCode + shift;
    if (code === "Atbash") newShift = COUNT_LETTERS - newShift;
    else {
      shift = code == 0 ? -shift : shift;
      newShift = charCode + shift;
      newShift = newShift <= COUNT_LETTERS && newShift >= 1 ? newShift : Math.abs(Math.abs(newShift) - COUNT_LETTERS);
    }
    return String.fromCharCode(newShift + INDEX);
  } else return char;
};

const convertData = (str, shift, code) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      res += decodeChar(str[i].toUpperCase(), shift, code).toLowerCase();
    } else {
      res += decodeChar(str[i], shift, code);
    }
  }
  return res;
};

const cipherCaesar = (str, code) => {
  return convertData(str, 1, code);
};
const cipherAtbash = (str) => {
  return convertData(str, -1, "Atbash");
};
const cipherROT = (str, code) => {
  return convertData(str, 8, code);
};

module.exports = { cipherCaesar, cipherAtbash, cipherROT };

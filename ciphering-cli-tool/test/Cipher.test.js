const { cipherCaesar, cipherAtbash, cipherROT } = require("../src/Cipher/Cipher");

describe("Cipher:", () => {
  const mock = jest.fn().mockImplementation((cipher) => cipher);
  test("Cipher Caesar encode", () => {
    expect(mock(cipherCaesar("A", 1))).toBe("B");
  });
  test("Cipher Atbash encode", () => {
    expect(mock(cipherAtbash("A"))).toBe("Z");
  });
  test("Cipher Rot8", () => {
    expect(mock(cipherROT("A", 1))).toBe("I");
  });
  test("Cipher Rot8 decode", () => {
    expect(mock(cipherROT("A", 0))).toBe("S");
  });
  test("Cipher Caesar encode lower case ", () => {
    expect(mock(cipherCaesar("a", 1))).toBe("b");
  });
  test("Cipher Caesar encode not a letter ", () => {
    expect(mock(cipherCaesar("_", 1))).toBe("_");
  });
});

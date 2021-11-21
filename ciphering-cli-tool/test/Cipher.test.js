const { cipherCaesar, cipherAtbash, cipherROT } = require("../src/Cipher/Cipher");

describe("Cipher:", () => {
  test("Cipher Caesar encode", () => {
    const res = cipherCaesar("A", 1);
    expect(res).toEqual("B");
  });
  test("Cipher Atbash encode", () => {
    const res = cipherAtbash("A");
    expect(res).toEqual("Z");
  });
  test("Cipher Rot8", () => {
    const res = cipherROT("A", 1);
    expect(res).toEqual("I");
  });
  test("Cipher Rot8 decode", () => {
    const res = cipherROT("A", 0);
    expect(res).toEqual("S");
  });
  test("Cipher Caesar encode lower case ", () => {
    const res = cipherCaesar("a", 1);
    expect(res).toEqual("b");
  });
  test("Cipher Caesar encode not a letter ", () => {
    const res = cipherCaesar("_", 1);
    expect(res).toEqual("_");
  });
});

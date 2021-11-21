const { cipherCaesar, cipherAtbash, cipherROT } = require("../src/Cipher/Cipher");

describe("Cipher:", () => {
  test("Cipher Caesar encode", () => {
    const res = cipherCaesar("A", 1);
    expect(res).toBe("B");
  });
  test("Cipher Atbash encode", () => {
    const res = cipherAtbash("A");
    expect(res).toBe("Z");
  });
  test("Cipher Rot8", () => {
    const res = cipherROT("A", 1);
    expect(res).toBe("I");
  });
  test("Cipher Rot8 decode", () => {
    const res = cipherROT("A", 0);
    expect(res).toBe("S");
  });
  test("Cipher Caesar encode lower case ", () => {
    const res = cipherCaesar("a", 1);
    expect(res).toBe("b");
  });
  test("Cipher Caesar encode not a letter ", () => {
    const res = cipherCaesar("_", 1);
    expect(res).toBe("_");
  });
});

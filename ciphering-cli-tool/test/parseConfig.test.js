const { parseConfig } = require("../src/parseConfig");

describe("Parse config:", () => {
  test("Encode and decode a text.", () => {
    const res = parseConfig("C1-C1-R0-A", "This is secret. Message about symbol!");
    expect(res).toBe("Myxn xn nbdobm. Tbnnfzb ferlm nhteru!");
  });
});

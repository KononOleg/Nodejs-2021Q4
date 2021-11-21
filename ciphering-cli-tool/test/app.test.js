
const { validatePath, validateConfig, validateOption } = require("../src/streams/validation/validation");

describe("Error scenarios:", () => {
  let mockExit;
  beforeEach(() => {
    mockExit = jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });
  });

  afterEach(() => {
    expect(mockExit).toHaveBeenCalledWith(9);
    mockExit.mockRestore();
  });
  test("User passes the same cli argument twice.", () => {
    expect(() => {
      validateOption("-c");
    }).toThrow();
  });
  test("User doesn't pass -c or --config argument.", () => {
    expect(() => {
      validateConfig(null);
    }).toThrow();
  });
  test("User passes -i argument with path that doesn't exist or with no read access.", () => {
    expect(() => {
      validatePath("./src/input.txt");
    }).toThrow();
  });
  test("User passes -o argument with path to directory that doesn't exist.", () => {
    expect(() => {
      validatePath("./src/output.txt");
    }).toThrow();
  });
  test("User passes incorrent symbols in argument for --config.", () => {
    expect(() => {
      validateConfig("C1-C1-A-R2");
    }).toThrow();
  });
});

describe("Success scenarios:", () => {
  test("User passes correct sequence of symbols as argument for --config that matches regular expression.", () => {
    expect(() => {
      validateConfig("C1-C1-A-R1");
    }).not.toThrow();
  });
});

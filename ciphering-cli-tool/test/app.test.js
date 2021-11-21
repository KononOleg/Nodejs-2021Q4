const { validateOption } = require("../src/streams/validation/validation");
const { ProcessedData } = require("../src/streams/ProcessedData");

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
      ProcessedData(null, null, null);
    }).toThrow();
  });
  test("User passes -i argument with path that doesn't exist or with no read access.", () => {
    expect(() => {
      ProcessedData(null, "./src/input.txt", null);
    }).toThrow();
  });
  test("User passes -o argument with path to directory that doesn't exist.", () => {
    expect(() => {
      ProcessedData(null, null, "./src/output.txt");
    }).toThrow();
  });
  test("User passes incorrent symbols in argument for --config.", () => {
    expect(() => {
      ProcessedData("C1-C1-A-R2", null, null);
    }).toThrow();
  });
});

describe("Success scenarios:", () => {
  test("User passes correct sequence of symbols as argument for --config that matches regular expression.", () => {
    expect(() => {
      ProcessedData("C1-C1-A-R1", "./input.txt", "./output.txt");
    }).not.toThrow();
  });
});

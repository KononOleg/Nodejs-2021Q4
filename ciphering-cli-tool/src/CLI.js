const { argv } = require("process");
const { validateOpton } = require("./streams/validation/validation");

const getArgument = (flag) => {
  const flagFirstIndex = argv.indexOf(flag);
  const flagLastIndex = argv.lastIndexOf(flag);

  if (flagFirstIndex !== flagLastIndex) {
    validateOpton(flag);
  } else {
    return flagFirstIndex !== -1 ? argv[flagFirstIndex + 1] : null;
  }
};

const getArguments = () => {
  const config = getArgument("-c");
  const input = getArgument("-i");
  const output = getArgument("-o");

  return { config, input, output };
};

module.exports = { getArguments };

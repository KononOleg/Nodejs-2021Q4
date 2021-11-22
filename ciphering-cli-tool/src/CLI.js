const { argv } = require("process");
const { validateOption } = require("./streams/validation/validation");

const getArgument = (firstFlag, secondFlag) => {
  const flagIndex = argv.filter((flag) => flag == firstFlag || flag == secondFlag);

  if (flagIndex.length <= 1) {
    return flagIndex.length === 0 ? null : argv[argv.indexOf(flagIndex[0]) + 1];
  } else {
    validateOption(firstFlag);
  }
};

const getArguments = () => {
  const config = getArgument("-c", "--config");
  const input = getArgument("-i", "--input");
  const output = getArgument("-o", "--output");

  return { config, input, output };
};

module.exports = { getArguments };

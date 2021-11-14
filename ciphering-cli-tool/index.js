const { ProcessedData } = require("./src/streams/ProcessedData");
const { getArguments } = require("./src/CLI");

const { config, input, output } = getArguments();

ProcessedData(config, input, output);

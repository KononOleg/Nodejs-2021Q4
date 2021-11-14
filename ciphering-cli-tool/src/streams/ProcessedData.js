const { pipeline } = require("stream");
const { ReadStream } = require("./ReadStream");
const { WriteStream } = require("./WriteStream");
const { TransformStream } = require("./TransformStream");
const { validatePath, validateConfig } = require("./validation/validation");

const ProcessedData = (config, inputPathName, outputPathName) => {
  validatePath(inputPathName);
  validatePath(outputPathName);
  validateConfig(config);

  pipeline(ReadStream(inputPathName), TransformStream(config), WriteStream(outputPathName), (err) => {
    if (err) {
      process.stderr.write(err);
      process.exit(9);
    }
  });
};

module.exports = { ProcessedData };

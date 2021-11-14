const { pipeline } = require("stream");
const { ReadStream } = require("./ReadStream");
const { WriteStream } = require("./WriteStream");
const { TransformStream } = require("./TransformStream");

const ProcessedData = (config, inputPathName, outputPathName) => {
  pipeline(ReadStream(inputPathName), TransformStream(config), WriteStream(outputPathName), (err) => {
    if (err) {
    }
  });
};

module.exports = { ProcessedData };

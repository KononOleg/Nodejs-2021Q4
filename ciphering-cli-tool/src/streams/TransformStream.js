const { parseConfig } = require("../parseConfig");
const { Transform } = require("stream");

const TransformStream = (config) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(parseConfig(config, chunk.toString()));
      callback();
    },
  });
};

module.exports = { TransformStream };

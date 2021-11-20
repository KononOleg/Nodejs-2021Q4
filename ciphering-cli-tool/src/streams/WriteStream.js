const { Writable } = require("stream");
const fs = require("fs");

class WriteStreamClass extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(callback) {
    fs.open(this.filename, "a", (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback(err);
      }
    });
  }
  _write(chunk, encode, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      if (err.syscall === "open") {
        process.stderr.write(`Error: file ${this.filename} is only read-only`);
        process.exit(9);
      } else callback(err);
    }
  }
}

const WriteStream = (outputPathName) => {
  if (outputPathName) {
    const ws = new WriteStreamClass(outputPathName);
    return ws;
  } else {
    return process.stdout;
  }
};

module.exports = { WriteStream };

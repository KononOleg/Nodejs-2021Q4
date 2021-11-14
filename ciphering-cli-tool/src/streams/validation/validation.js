const fs = require("fs");
const path = require("path");
const ValidationError = require("./ValidationError");
const Error = require("./Error");

const validatePath = (file) => {
  try {
    if (!fs.existsSync(file) && file) {
      throw new Error("does not exist!");
    }
  } catch (err) {
    const filename = path.basename(file);
    process.stderr.write(`${err.name}: ${filename} ${err.message}`);
    process.exit(9);
  }
};

const validateOpton = (option) => {
  process.stderr.write(`Error: option ${option} cannot repeat !`);
  process.exit(9);
};

const validateConfig = (config) => {
  try {
    if (!config) {
      throw new ValidationError("config cannot empty!");
    }
    let arrayConfig = config.split("-");

    for (let i = 0; i < arrayConfig.length; i++) {
      let cipher = arrayConfig[i].split("");
      const code = cipher[1],
        mark = cipher[0];
      const validationCR = (mark == "C" || mark == "R") && (code == "1" || code == "0") && arrayConfig[i].length == 2;
      const validationA = mark == "A" && arrayConfig[i].length == 1;
      if (!validationCR && !validationA) {
        throw new ValidationError("config is not valid!");
      }
    }
  } catch (err) {
    process.stderr.write(`${err.name}: ${err.message}`);
    process.exit(9);
  }
};

module.exports = { validatePath, validateConfig, validateOpton };

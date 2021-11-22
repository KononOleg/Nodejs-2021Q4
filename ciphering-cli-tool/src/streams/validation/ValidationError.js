const Error = require("./Error");

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}
module.exports = ValidationError;

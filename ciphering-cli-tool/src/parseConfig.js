const { cipherCaesar, cipherAtbash, cipherROT } = require("./Cipher/Cipher");

const parseConfig = (config, str) => {
  let arrayConfig = config.split("-");
  for (let i = 0; i < arrayConfig.length; i++) {
    let cipher = arrayConfig[i].split("");
    const code = cipher[1],
      mark = cipher[0];

    switch (mark) {
      case "C":
        str = cipherCaesar(str, code);
        break;
      case "R":
        str = cipherROT(str, code);
        break;
      case "A":
        str = cipherAtbash(str);
        break;
    }
  }
  return str;
};

module.exports = { parseConfig };

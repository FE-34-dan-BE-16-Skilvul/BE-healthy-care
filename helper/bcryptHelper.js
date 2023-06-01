const bcrypt = require("bcrypt");

const bcryptHelper = {
  hash: (password) => {
    return bcrypt.hash(password, 10);
  },
  compare: (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  },
};

module.exports = bcryptHelper;

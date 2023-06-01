const jwt = require("jsonwebtoken");

const secret =
  "1d6be6xju/XYbaMT6de6NLX3H2DCWl16I6mkNB37UtCGt0iDAA5HEXWt1miDV6LUE1MWJqBu/tb61GMf";

const jwtHelper = {
  sign: (payload, option) => {
    return jwt.sign(payload, secret, option);
  },
  verify: (payload, option) => {
    return jwt.verify(payload, secret, option);
  },
};

module.exports = jwtHelper;

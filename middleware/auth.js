const jwtHelper = require("../helper/jwtHelper");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      return res.status(401).json({
        message: "Token header required!",
      });
    }

    const data = jwtHelper.verify(token);

    if (!data.id) {
      return res.status(401).json({
        message: "Invalid id!",
      });
    }

    req.user = {
      id: data.id,
    };

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Server error!",
      error,
    });
  }
};

module.exports = authMiddleware;

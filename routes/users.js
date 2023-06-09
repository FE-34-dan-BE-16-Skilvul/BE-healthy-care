const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const userRouter = express.Router();

/* GET users listing. */
userRouter.get("/", function (req, res, next) {
  res.send(process.env.APP_NAME);
});
userRouter.post("/users/register", userController.registerUser);
userRouter.post("/users/login", userController.loginUser);

module.exports = userRouter;

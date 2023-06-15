const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/users/register", userController.registerUser);
userRouter.post("/users/login", userController.loginUser);

module.exports = userRouter;

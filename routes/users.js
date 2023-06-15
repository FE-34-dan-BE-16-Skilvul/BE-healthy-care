const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const userRouter = express.Router();

userRouter.use(authMiddleware);

userRouter.post("/users/register", userController.registerUser);
userRouter.post("/users/login", userController.loginUser);

module.exports = userRouter;

const express = require("express");
const dailyController = require("../controllers/dailyCaloriesController");
const authMiddleware = require("../middleware/auth");
const dailyRouter = express.Router();

// dailyRouter.use(authMiddleware);

dailyRouter.post("/daily/:id", dailyController.insertDaily);
dailyRouter.get("/daily/:id", dailyController.getDaily);

module.exports = dailyRouter;

const express = require("express");
const dailyController = require("../controllers/dailyCaloriesController");
const dailyRouter = express.Router();

dailyRouter.post("/daily/:id", dailyController.insertDaily);
dailyRouter.get("/daily/:id", dailyController.getDaily);


module.exports = dailyRouter;

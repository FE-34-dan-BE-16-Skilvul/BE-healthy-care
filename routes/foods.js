const express = require("express");
const authMiddleware = require("../middleware/auth");
const foodController = require("../controllers/foodController");
const foodRouter = express.Router();

foodRouter.use(authMiddleware);

foodRouter.get("/foods", foodController.getAllFoods);
foodRouter.get("/foods/:id", foodController.detailFoods);

module.exports = foodRouter;

const express = require("express");
const foodController = require("../controllers/foodController");
const foodRouter = express.Router();

foodRouter.get("/foods", foodController.getAllFoods);
foodRouter.get("/foods/:id", foodController.detailFoods);

module.exports = foodRouter;

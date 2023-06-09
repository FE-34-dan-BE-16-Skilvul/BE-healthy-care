const express = require("express");
const bmiController = require("../controllers/bmiMainController");
const bmiRouter = express.Router();

bmiRouter.post("/bmi/:id", bmiController.insertBmi);
bmiRouter.get("/bmi/:id", bmiController.getBmi);


module.exports = bmiRouter;

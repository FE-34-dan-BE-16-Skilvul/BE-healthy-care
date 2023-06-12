const express = require("express");
const bmiController = require("../controllers/bmiMainController");
const bmiRouter = express.Router();

//id_user
bmiRouter.post("/bmi/:id", bmiController.insertBmi);
bmiRouter.get("/bmi/:id", bmiController.getBmi);

//id_bmi
bmiRouter.delete("/bmi/:id", bmiController.deleteBmi);


module.exports = bmiRouter;

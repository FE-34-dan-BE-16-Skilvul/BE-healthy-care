const express = require("express");
const authMiddleware = require("../middleware/auth");
const categoriesController = require("../controllers/categoriesController");
const categoriesRoute = express.Router();

categoriesRoute.use(authMiddleware);

categoriesRoute.get("/categories", categoriesController.getAllCategories);

module.exports = categoriesRoute;

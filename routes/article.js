const express = require("express");
const article = require("../controllers/articleController");
const articleRouter = express.Router();


articleRouter.get("/articles", article.getAllArticle);
articleRouter.get("/articles/:id", article.getOneArticle);

module.exports = articleRouter;

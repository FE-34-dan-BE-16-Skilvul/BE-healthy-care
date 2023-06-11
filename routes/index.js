const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bmiRouter = require("./bmiRouter");
const dailyRouter = require("./dailyRouter");
const foodRouter = require("./foods");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use(userRouter);
router.use(bmiRouter);
router.use(dailyRouter);
router.use(foodRouter);

module.exports = router;

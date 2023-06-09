const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bmiRouter = require("./bmiRouter");
const dailyRouter = require("./dailyRouter");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use(userRouter);
router.use(bmiRouter);
router.use(dailyRouter);

module.exports = router;

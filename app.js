require("dotenv").config();
const router = require("./routes");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bmiRouter = require("./routes/bmiRouter");

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(router);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const port = 3000; // Port yang ingin Anda gunakan

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

module.exports = app;

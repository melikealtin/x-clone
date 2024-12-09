const dotenv = require("dotenv");
const express = require("express");

const ErrorService = require("./services/error-service");
const loggerWinston = require("./lib/winston-config");
const errorService = new ErrorService(loggerWinston);

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const indexRouter = require("./routes/index");

dotenv.config();
require("./mongo-connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  errorService.handle(err, req, res, next);
});

module.exports = app;

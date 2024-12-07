const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const indexRouter = require("./routes/index");

dotenv.config();
require("./mongo-connection");

const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");

app.use("/users", usersRouter);
app.use("/", indexRouter);

module.exports = app;

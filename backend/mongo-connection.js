const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected to mongodb!");
});

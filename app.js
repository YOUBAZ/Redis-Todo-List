const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const redis = require("redis");
const app = express();
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000);
console.log("Server Started on port 3000...");
module.exports = app;

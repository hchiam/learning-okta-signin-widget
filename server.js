const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/index.js", function (req, res) {
  res.sendFile(path.join(__dirname, "index.js"));
});

app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "style.css"));
});

app.listen(8080, function () {
  console.log("App listening on port 8080");
});

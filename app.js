const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index.js")


var app = express();

var server = app.listen(3002);
console.log(" server success");
app.use(express.static("public"));

app.use("/index",index);
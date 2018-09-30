const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index.js")
const product_list = require("./routes/product_list.js");
const goodsList = require("./routes//goodslist.js")



var app = express();

var server = app.listen(3002);
console.log(" server success");
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
	extended:false
}))

app.use("/index",index);
app.use("/productlist",product_list);
app.use("/goodslist",goodsList)

const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index.js")
const product_list = require("./routes/product_list.js");
const productXZ = require("./routes/products-xz.js")
const shopCart = require("./routes/shopCart.js")


// var cookieParser = require('cookie-parser');
// var session = require('express-session');


var app = express();

var server = app.listen(3002);
console.log(" server success");
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
	extended:false
}))

// app.use(cookieParser());
// app.use(session({
//   secret: 'sessiontest',//与cookieParser中的一致
//   resave: true,
//   saveUninitialized:false
// }));


app.use("/index",index);
app.use("/productlist",product_list);
app.use("/pro",productXZ)
app.use("/shopCart",shopCart)
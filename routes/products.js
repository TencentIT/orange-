/*
* @Author: Administrator
* @Date:   2018-10-09 23:43:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-09 23:58:39
*/
const express = require("express");
var pool = require('../pool.js');
var router = express.Router();

router.get("/products",(req,res)=>{
   var kw=req.query.kw;
  var kws=kw.split(" ");
  kws.forEach((elem,i,kws)=>
    kws[i]=` title like '%${elem}%' `)
  var where=` where ${kws.join(" and ")} `
  var sql=`SELECT * FROM orange_index_products `;

  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    data={};
    data = result;
    res.send(data);
  })
  //http://localhost:3002/pro/products?kw= 6  6 
});

module.exports = router;
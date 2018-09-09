const express = require("express");
var pool = require('../pool.js');

var router = express.Router();
router.get('/',(req,res)=>{
    var sql = `SELECT * FROM orange_index_products WHERE pid>0`;
    pool.query(sql,[],(err,result)=>{
    	if(err) throw err;
    	res.send(result);
    })
})

module.exports = router;
const express = require("express");
var pool = require('../pool.js');
var router = express.Router();

router.get("/pagination",(req,res)=>{
    var pno = parseInt(req.query.pno);
    console.log(1,pno);
    var pageSize=16;
    if(!pno){
        pno=0;
    }

    var sql = ` select *  from orange_index_products`
    console.log(sql);
    pool.query(sql,[],(err,result)=>{
      if(err) console.log(err);
      data={};//新建结果对象
      data.pno=req.query.pno;//在结果对象中添加pno属性
      //用查询结果的总数/16,上取整，获得总页数，放入结果data中
      data.pageCount=Math.ceil(result.length/16)
      //仅截取查询结果中的pno*16还是的16条记录，放入data中
      data.products=result.slice(data.pno*16,data.pno*16+16)
      // console.log(data)
      res.send(data);

    })
});

module.exports = router;
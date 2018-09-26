const express = require("express");
var pool = require('../pool.js');
var router = express.Router();

router.get("/pagination",(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
   
    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    // console.log(1,typeof(pno));
    // console.log(2,typeof(pageSize));
    //正则验证
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式 不正确"});
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-1,msg:"页大小格式不正确"});
        return;
    }

    
    var obj = {pno:pno,pageSize:pageSize};
    var progress = 0;   //给两个sql查询弄一个进度条 初始值为50 当为100 时 表示两个都查询完了 把两次查询的数据放在obj对象里 
    //然后当进度为100 时 统一发送

    //页码 和 页大小 查询
    var sql = " select * ";
        sql += " from orange_index_products "
        sql += " limit ?,? " 
    // var sql = `from orange_index_products limit ? ,? `
    
    //把 pno  pageSize 转换成数字 要不然会会出现SQL语句问题
    pno = parseInt(pno);
    pageSize = parseInt(pageSize);  
    var offset = (pno-1)*pageSize;
    
    pool.query(sql,[offset,pageSize],(err,result)=>{
        console.log(sql);
        if(err) throw err;{ 
            // console.log(result);
           obj.data = result;
        
        }

    })

    // 总共的页数  pageCount  即求数据的个数然后处以每一页的大小 就是个数
    var sql = `SELECT COUNT(pid) as c FROM orange_index_products`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(2,result[0].c);  numbher类型
        var pageCount = Math.ceil(result[0].c);    //总数据的条数
        obj.pageCount  = pageCount;

    })




    res.send({code:1,msg:"ok"+pno+":"+pageSize});
    // console.log(pno,pageSize);
    //http://localhost:3002/productlist/pagination?pno=1&pageSize=5
});

module.exports = router;
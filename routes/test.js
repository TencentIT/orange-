const express = require("express");
var pool = require('../pool.js');
var router = express.Router();

router.get("/pagination",(req,res)=>{
    var pno = req.query.pno;
    // var pageSize = req.query.pageSize;
   
    if(!pno){
        pno=1;
    }
    // if(!pageSize){
    //     pageSize=10;
    // }
    // console.log(1,typeof(pno));
    // console.log(2,typeof(pageSize));
    //正则验证
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:"pno_error"});
        return;return;
    }
    // if(!reg.test(pageSize)){
    //     res.send({code:-1,msg:"页大小格式不正确"});
    //     return;
    // }

    
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


// ----------------------------------------

const express = require("express");
var pool = require('../pool.js');
var router = express.Router();

var obj = {}  //定义公共对象 然后查询到的数据 存进来 后面的查询里面就可以调用数据了

//查询 uid
router.get("/a",(req,res)=>{
var lid = req.query.lid;
var buyCount = req.query.buyCount; 
var size = req.query.size; 
var uname = req.query.uname; 

obj = {
  lid:lid,
  buyCount:buyCount,
  size:size,
  uname:uname ,
  count:111
}
var sql = `SELECT uid FROM orange_user where uname =?`;
  pool.query(sql,[obj.uname],(err,result)=>{
    if(err) console.log(err);
    // console.log(111,result[0].uid);\
   var uid = result[0].uid;
    obj.uid= uid;

  })
});
//
(`SELECT uid FROM orange_user where uname =${uname} as`)

`SELECT iid FROM ow_shoppingcart_item WHERE 
user_id = "SELECT uid FROM orange_user where uname =${uname}"
AND product_id=${obj.lid} AND clothes_size='${obj.size}'`; 


var sql3 ;
router.get("/b",(req,res)=>{
  var sql2 = `SELECT iid FROM ow_shoppingcart_item WHERE user_id=${obj.uid} AND product_id=${obj.lid} AND clothes_size='${obj.size}'`; 
  pool.query(sql2,[],(err,result)=>{
    if(err) console.log(err);
    console.log('iid',result[0].iid); 
    obj.iid=result[0].iid;

    if(obj.iid!==undefined){
      sq3=`update ow_shoppingcart_item set count='${obj.count}+${obj.buyCount}'
       where user_id=${obj.uid} and product_id=${obj.lid} and clothes_size='${obj.size}'`;
    }else{  //表记录里面没有买东西得记录
      sq3=`insert into ow_shoppingcart_item 
      values(null,${obj.uid},${obj.lid},${obj.buyCount},false,'${obj.size}')`;
     }
  })
 
});



 router.get("/c",[],(req,res)=>{
  console.log(sql3);
  pool.query(sql3,[],(err,result)=>{
    if(err) console.log(err);
    if(result){
     res.send({"code":200, "msg":"添加商品成功！"});
    }else {
     res.send({"code":500, "msg":"添加商品失败！"});
    }
  })
})


 

//  pool.query($sql,[],(err,result)=>{
//   if(err) console.log(err);
//   console.log(result);
//  });

 
  // if($row){ //如果已经在记录里面买过东西
  //   $sql="update v_shoppingcart_item set count=count+$buyCount where user_id=$_SESSION[loginUid] and product_id=$lid and clothes_size='$size'";
  // }else{  //表记录里面没有买东西得记录
  //     $sql="insert into v_shoppingcart_item values(null,$_SESSION[loginUid],$lid,$buyCount,false,'$size')";
  // }
 
  //  if($result){
  //   res.send({"code":200, "msg":"添加商品成功！"});
  //  }else {
  //   res.send({"code":500, "msg":"添加商品失败！"});
  //  }


module.exports = router;

  //http://localhost:3002/shopCart 



  $.when(
    $.ajax({
      async:false,
      type:'get',
      url:'http://localhost:3002/shopCart/a',
      data:{lid:location.search.split('=')[1],buyCount:buyCount,size:size,uname:uname},
      success:function(result){
          if(result.code==300){
              alert(result.msg);
              location.href="05-login.html";
          }else if(result.code==200){
              alert(result.msg);
              location.href="08-cart.html";
          }else{
              alert(result.msg);
          }
          alert(result);
      },
      error:function(){
          alert("网络故障，请检查！");
      }
    })
    // $.ajax({
    //   async:false,
    //   type:'get',
    //   url:'http://localhost:3002/shopCart/b',
    //   success:function(result){
    //     console.log(777,result);
    //   }
    // })
).done(function(){
  alert("nice")
})
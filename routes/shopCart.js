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
// var sql = `SELECT uid FROM orange_user where uname =?`;

var sql =`SELECT iid FROM 
ow_shoppingcart_item inner join orange_user
WHERE  
ow_shoppingcart_item.iid = orange_user.uid
And uname =${uname}"
AND product_id=${obj.lid} AND clothes_size='${obj.size}'`; 
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    console.log(sql);
    console.log(999,result);

  })
});
//



// var sql3 ;
// router.get("/b",(req,res)=>{
//   var sql2 = `SELECT iid FROM ow_shoppingcart_item WHERE user_id=${obj.uid} AND product_id=${obj.lid} AND clothes_size='${obj.size}'`; 
//   pool.query(sql2,[],(err,result)=>{
//     if(err) console.log(err);
//     console.log('iid',result[0].iid); 
//     obj.iid=result[0].iid;

//     if(obj.iid!==undefined){
//       sq3=`update ow_shoppingcart_item set count='${obj.count}+${obj.buyCount}'
//        where user_id=${obj.uid} and product_id=${obj.lid} and clothes_size='${obj.size}'`;
//     }else{  //表记录里面没有买东西得记录
//       sq3=`insert into ow_shoppingcart_item 
//       values(null,${obj.uid},${obj.lid},${obj.buyCount},false,'${obj.size}')`;
//      }
//   })
 
// });



//  router.get("/c",[],(req,res)=>{
//   console.log(sql3);
//   pool.query(sql3,[],(err,result)=>{
//     if(err) console.log(err);
//     if(result){
//      res.send({"code":200, "msg":"添加商品成功！"});
//     }else {
//      res.send({"code":500, "msg":"添加商品失败！"});
//     }
//   })
// })


 

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
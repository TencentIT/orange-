const express = require("express");
var pool = require('../pool.js');

var router = express.Router();
router.get('/products',(req,res)=>{
    var sql = `SELECT * FROM orange_index_products WHERE pid>0`;
    pool.query(sql,[],(err,result)=>{
    	if(err) throw err;
			res.send(result);
		 
    })
})
// 轮播
router.get("/carousel",(req,res)=>{
	var sql = `SELECT *  FROM  orange_ad_carousel WHERE cid>0`;
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
// 鲜盟店铺 
router.get("/xmdpAreas",(req,res)=>{
	var sql = `SELECT *  FROM  orange_provincial WHERE a_id>0`;
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		setTimeout(function(){
			res.send(result);
		},1000);
	})
})
// 注册
router.post("/register",(req,res)=>{
	var obj = req.body;
	console.log(2,obj);
	var uname = obj.uname;
  var upwd = obj.upwd;
  var email  =obj.email;
  console.log(3,uname,upwd,email);
if(uname=="" || upwd=="") {
  console.log("uname_cannot_null_reg");
  res.send("regFail");
  return;
}

  var sql = `INSERT INTO  orange_user (uname ,upwd,email) VALUES (?,?,?)`;
  pool.query(sql,[uname,upwd,email],(err,result)=>{
    if(err) throw err;
    else
      res.send('reg_suc');
    // res.send({code: 200, msg: 'register suc'});
  })	
})
// 检查用户名
router.post("/check_uname",(req,res)=>{
  console.log(1,req.body);
	var obj = req.body;
	// console.log(obj);
	var reg_uname = obj.reg_uname;
	// console.log(uname);
	if(reg_uname==""){
		res.send('username_null');
		return;
	}

	var sql = `select * from   orange_user where uname=?`;
	pool.query(sql,[reg_uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('username_exist');
			return;
		}else{
      res.send('username_not_exist');
      
		}
	});	
})
//登录
router.post("/login",(req,res)=>{
	var obj = req.body;
	var uname = obj.uname;
	var upwd = obj.upwd;
	if(!uname){
		res.send("用户名不能为空");
		return;
	}
	if(!upwd){
		res.send("密码不能为空");
		return;
	}
	var sql = `select * from   orange_user where uname=? and upwd = ?`;
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('login_success');
			return;
		}
		else{
				res.send('login_fail');
		}
	});	

	
})

module.exports = router;
const express=require("express")
const router=express.Router()
const pool=require("../pool")

///products
router.get("/",(req,res)=>{
  var kw=req.query.kw;
  var kws=kw.split(" ");
  kws.forEach((elem,i,kws)=>
    kws[i]=` title like '%${elem}%' `)
  var where=` where ${kws.join(" and ")} `
  var sql=`SELECT *,(
    select md from xz_laptop_pic
    where laptop_id=lid
    limit 1
  ) as md
  FROM xz_laptop `;
  sql+=where;//查全部，不分页
  //var pno=req.query.pno;
  //sql+=` limit ${pno*9},9 `;//不再用sql的limit截取
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    data={};//新建结果对象
    data.pno=req.query.pno;//在结果对象中添加pno属性
    //用查询结果的总数/9,上取整，获得总页数，放入结果data中
    data.pageCount=Math.ceil(result.length/9)
    //仅截取查询结果中的pno*9还是的9条记录，放入data中
    data.products=result.slice(data.pno*9,data.pno*9+9)
    res.send(data);
  })
  //测试: 
  //http://localhost:3000/products/?kw=i7 128g&pno=0,1
})

module.exports=router
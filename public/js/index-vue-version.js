

// 用Vue实现前后台数据交互
// (async function(){
//   var res=await ajax({
//     url:"http://localhost:3002/index/products",
//     type:"get",
//     dataType:"json"
//   });
//   console.log(8,res)
 
  
// })()

var vm ;
$(function(){
  // 推荐产品
  $.ajax({
    url:"http://localhost:3002/index/products",
    type:"get",
    dataType:"json",
    success:function(res){
      // console.log(111,res);
     new Vue({
        el:".tj_products .tj_ul", 
        data:{
         res
        }
      });
    }
  });
  // 鲜盟店铺地址
  $.ajax({
    url:"http://localhost:3002/index/xmdpAreas",
    type:"get",
    dataType:"json",
    success:function(res){
      // console.log(222,res);
      new Vue({
        el:".xm-dianpu .areas>ul",
        data:{
          res
        }
      })
    }
  });
  // 热销产品
  $.ajax({
    url:"http://localhost:3002/index/products",
    type:"get",
    dataType:"json",
    success:function(res){
      // console.log(111,res);
     new Vue({
        el:"#rx-ul", 
        data:{
         res
        }
      });
    }
  });
  // $.ajax({
  //   url:"http://localhost:3002/index/products",
  //   type:"get",
  //   dataType:"json",
  //   success:function(res){
  //     new Vue({
  //       el:"#rx-ul", 
  //       data:{
  //        res
  //       }
  //     });
  //   }
  // });
})
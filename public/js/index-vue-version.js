

// 用Vue实现前后台数据交互
// (async function(){
//   var res=await ajax({
//     url:"http://localhost:3002/index/products",
//     type:"get",
//     dataType:"json"
//   });
//   console.log(8,res)
 
  
// })()

// var vm ;
// $(function(){
//   // 推荐产品
//   $.ajax({
//     url:"http://localhost:3002/index/products",
//     type:"get",
//     dataType:"json",
//     success:function(res){
//       // console.log(111,res);
//      new Vue({
//         el:".tj_products .tj_ul", 
//         data:{
//          res
//         }
//       });
//     }
//   });
  // 鲜盟店铺地址
  // $.ajax({
  //   url:"http://localhost:3002/index/xmdpAreas",
  //   type:"get",
  //   dataType:"json",
  //   success:function(res){
  //     // console.log(222,res);
  //     new Vue({
  //       el:".xm-dianpu .areas>ul",
  //       data:{
  //         res
  //       }
  //     })
  //   }
  // });
  // 热销产品
  // $.ajax({
  //   url:"http://localhost:3002/index/products",
  //   type:"get",
  //   dataType:"json",
  //   success:function(res){
  //     // console.log(111,res);
  //    new Vue({
  //       el:"#rx-ul", 
  //       data:{
  //        res
  //       }
  //     });
  //   }
  // });
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
// })


// 全部重新改 都用axios方式请求数据 不用ajax方式请求数据了
// new Vue({
//   el:".tj_products .tj_ul",
//   data:{
//     res:[
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0}
//     ]
//   },
//   beforeCreate(){
//     (async function(_self){
//       // 推荐产品
//       var res = await axios.get("http://localhost:3002/index/products");
//       setTimeout(function(){
//         _self.res = res.data;

//       },2000);

//     })(this);
//   }
// })
// 热销产品  这块有点问题
// new Vue({
//   el:"#rx-ul",
//   data:{
//     res:[
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0},
//       {title:"",pic:"",price:0,sell:0}
//     ]
//   },
//   beforeCreate(){
//     (async function(_self){
//       // 推荐产品
//       var res = await axios.get("http://localhost:3002/index/products");
//       setTimeout(function(){
//         _self.res = res.data;

//       },2000);

//     })(this);
//   }
// })
// 鲜盟店铺
new Vue({
  el:".xm-dianpu .areas>ul",
  data:{
    res:[
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0}
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/xmdpAreas");
      setTimeout(function(){
        _self.res = res.data;

      },2000);

    })(this);
  }
})
// 限时促销
new Vue({
  el:"#rx-ul",
  data:{
    res:[
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0},
      {title:"",pic:"",price:0,sell:0}
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
      setTimeout(function(){
        _self.res = res.data;

      },2000);

    })(this);
  }
})
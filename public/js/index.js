
// 全部重新改 都用axios方式请求数据 不用ajax方式请求数据了
/************************************首页数据 index.html*******************************/
new Vue({
  el:".tj_products .tj_ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
        _self.res = res.data;
    })(this);
  }
})
// 热销产品
new Vue({
  el:"#rx-ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
        _self.res = res.data;
    })(this);
  }
})
// 限时促销
new Vue({
  el:".xscx-items .xscx-ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
     
        _self.res = res.data;
    })(this);
  }
})
// 鲜盟店铺
new Vue({
  el:".xm-dianpu .areas>ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/xmdpAreas");
      
        _self.res = res.data;
    })(this);
  }
})
// 1F
new Vue({
  el:"#fl-pro-ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
     
        _self.res = res.data;
    })(this);
  }
})
// 2F
new Vue({
  el:"#f-2",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
        _self.res = res.data;
    })(this);
  }
})
// 3F
new Vue({
  el:"#f-3",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
    
        _self.res = res.data;
        // for(var c of )

    })(this);
  }
})
// 猜你喜欢
new Vue({
  el:"#cnxh-ul",
  data:{
    res:[
       {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
      {title:"",pic:"",price:0,sell:0,href:""},
    ]
  },
  beforeCreate(){
    (async function(_self){
      // 推荐产品
      var res = await axios.get("http://localhost:3002/index/products");
        _self.res = res.data;

    })(this);
  }  
})
var cloaks = document.querySelectorAll("[cloak]"); 
for(var c of cloaks){
  c.removeAttribute("cloak");
}



$(".nav_bar_left_title").hover(function() {
  $(".nav_bar_left_items").show();

}, function() {
  $(".nav_bar_left_items").hide();
})
$(".menu_list li").hover(function() {
  $(".menv_Detail").show();
}, function() {
  $(".menv_Detail").hide();
})


//无缝轮播  热销产品
// $(document).ready(function(){
//   var   rxList= $("#rx-products-list"),
//         rxUl=$("#rx-ul"),
//       rxLi= rxUl.find("li"),s=0
//   ;
//   rxLi.each(function(){
//     s+=rxLi.outerWidth(true);
//   })
//   var v0=1 , left=0;
//   if(s>=rxList.width()){
   
//   }
//   setInterval(function(){
//     left-=v0;
//     rxUl.css("left",left)
//   },100)
// })
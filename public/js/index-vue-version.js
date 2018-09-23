
// 全部重新改 都用axios方式请求数据 不用ajax方式请求数据了
/************************************首页数据 index-vue-version.html*******************************/
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
// 浏览记录
new Vue({
  el:"#Record_ul",
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

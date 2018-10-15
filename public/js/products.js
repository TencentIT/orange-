/*
* @Author: Administrator
* @Date:   2018-10-09 23:41:59
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-10 00:05:49
*/
/************************************商品 products.html*******************************/
// 今日推荐
new Vue({
    el:"#recommend_ul",
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
        var res = await axios.get("http://localhost:3002/pro/products");
          _self.res = res.data;
  
      })(this);
    }
  })
//   浏览记录
  new Vue({
    el:"#record_ul",
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
        var res = await axios.get("http://localhost:3002/pro/products");
          _self.res = res.data;
  
      })(this);
    }
  })
//   产品列表样式
  new Vue({
    el:"#p_list_ul",
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
        var res = await axios.get("http://localhost:3002/pro/products");
          _self.res = res.data;
  
      })(this);
    }
  })
//   销量排行
  new Vue({
    el:"#tabRank",
    data:{
      res:[
        {pid:0,title:"",pic:"",price:0,sell:0,href:""},
        {pid:0,title:"",pic:"",price:0,sell:0,href:""},
        {pid:0,title:"",pic:"",price:0,sell:0,href:""},
        {pid:0,title:"",pic:"",price:0,sell:0,href:""},
       
      ]
    },
    beforeCreate(){
      (async function(_self){
        // 推荐产品
        var res = await axios.get("http://localhost:3002/pro/products");
          _self.res = res.data;
  
      })(this);
    }
  })
  var cloaks = document.querySelectorAll("[cloak]"); 
  for(var c of cloaks){
    c.removeAttribute("cloak");
  }
  

  //分页
  
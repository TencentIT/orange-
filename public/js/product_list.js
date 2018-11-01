/************************************商品详情页数据 product_detail.html*******************************/
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
        var res = await axios.get("http://localhost:3002/index/products");
          _self.res = res.data;
  
      })(this);
    }
  })
//   浏览记录
  new Vue({
    el:"#record-ul",
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
//   产品列表样式 换成 ajax 传数据 分页
  // new Vue({
  //   el:"#p_list_ul",
  //   data:{
  //     res:[
  //       {title:"",pic:"",price:0,sell:0,href:""},
  //       {title:"",pic:"",price:0,sell:0,href:""},
  //       {title:"",pic:"",price:0,sell:0,href:""},
  //       {title:"",pic:"",price:0,sell:0,href:""},
       
  //     ]
  //   },
  //   beforeCreate(){
  //     (async function(_self){
  //       // 推荐产品
  //       var res = await axios.get("http://localhost:3002/productlist/pagination?pno=1");

  //         _self.res = res.data;
  //         console.log( 3,_self.res)
  //     })(this);
  //   }
  // })
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
        var res = await axios.get("http://localhost:3002/index/products");
          _self.res = res.data;
  
      })(this);
    }
  })
  var cloaks = document.querySelectorAll("[cloak]"); 
  for(var c of cloaks){
    c.removeAttribute("cloak");
  }
  

  //分页
  $(function(){
    function loadPage(pno=0){
        $.ajax({
          url:"http://localhost:3002/productlist/pagination",
          type:"get",
          data:{pno},
          dataType:"json",
          success:function(data){
            var {pno,pageCount,products}=data;
            console.log(222,data);
            // 产品列表样式
            var html="";
            for(var {href,pic,title,pid,sell,price} of products){
              html+=`<li class="gl-item"> <em class="icon_special tejia"></em>
              <div class="Borders">
                  <div class="img">
                      <a href="${href}" target="_blank" ><img src="${pic}" style="width:220px;height:220px" /></a>
                  </div>
                  <div class="Price">
                      <b>&yen;${price.toFixed(2)}</b>
                      <span>[&yen;49.01/500g]</span>
                  </div>
                  <div class="name">
                      <a  target="_blank" href="${href}" target="_blank">${title}</a>
                  </div>
                  <div class="Review">
                      已有
                      <a  target="_blank" href="#">${sell}</a>评论
                  </div>
                  <div class="p-operate">
                      <a  target="_blank" href="#" class="p-o-btn Collect"><em></em>收藏</a>
                      <a  target="_blank" href="#" class="p-o-btn shop_cart"><em></em>加入购物车</a>
                  </div>
                </div>
              </li>`
            }
            $("#p_list_ul").html(html);
            //分页
            var html=`<a  target="_blank" href="${pno>=1?pno:1}" class="pn-prev">上一页</a>`;
            for(var i=1;i<=pageCount;i++){
              html+=`<a  target="_blank" href="#" class="${pno!=i-1?'':'on'}">${i}</a>`
            }
            html+=`<a  target="_blank" href="${pno<pageCount-1?parseInt(pno)+1:pno}">下一页</a>`;
            var $page=$(".Pagination")
            $page.html(html);
            if(pno==0)
              $page.children(":first").addClass("page_disabled")
            if(pno==pageCount-1)
              $page.children(":last").addClass("page_disabled")
          },
          error:function(){
            alert("网络故障，！！请检查！");
          }
        })
    }
    loadPage();
    $(".Pagination").on("click","a",function(e){
      e.preventDefault();
      var $a=$(this);
      if($a.html()=="上一页" ){
        var pno=$(this).attr("href")-1;
        // alert(pno);
      }else if($a.html()=="下一页"){
        var pno=parseInt($(this).attr("href"));
        // alert(pno);
        
      }else{
        var pno=$a.html()-1;
        // alert(pno);
      }
      loadPage(pno);
       
    })
  })
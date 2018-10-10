$(function(){
  
  function loadPage(pno=0){
    if(location.search.indexOf("kw=")!=-1){
      //header.js:23 $input.val(decodeURI(kw))
      var kw=decodeURI(
        location.search.split("=")[1]
      );
      $.ajax({
        url:"http://localhost:3002/pro/",
        type:"get",
        data:{kw,pno},
        dataType:"json",
        success:function(data){
          var {pno,pageCount,products}=data;
          var html="";
          for(var {md,price,title,lid} of products){
            html+=`<div class="col-md-4 p-1">
              <div class="card mb-4 box-shadow pr-2 pl-2">
                <a href="product_details.html?lid=${lid}">
                  <img class="card-img-top" src="${md}">
                </a>
                <div class="card-body p-0">
                  <h5 class="text-primary">¥${price.toFixed(2)}</h5>
                  <p class="card-text">
                    <a href="product_details.html?lid=${lid}" class="text-muted small" title="${title}">${title}</a>
                  </p>
                  <div class="d-flex justify-content-between align-items-center p-2 pt-0">
                    <button class="btn btn-outline-secondary p-0 border-0" type="button">-</button>
                    <input type="text" class="form-control p-1" value="1">
                    <button class="btn btn-outline-secondary p-0 border-0" type="button">+</button>
                    <a class="btn-orange float-right ml-1 pl-1 pr-1" href="cart.html" data-lid="${lid}">加入购物车</a>
                  </div>
                </div>
              </div>
            </div>`
          }
          $("#plist").html(html);
          console.log(111)
          var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
          for(var i=1;i<=pageCount;i++){
            html+=`<li class="page-item ${pno==i-1?'active':''}"><a class="page-link ${pno!=i-1?'bg-transparent':'border'}" href="#">${i}</a></li>`;
          }
          html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
          var $page=$(".pagination")
          $page.html(html);
          if(pno==0)
            $page.children(":first").addClass("disabled")
          if(pno==pageCount-1)
            $page.children(":last").addClass("disabled")
        }
      })
    }
  }
  loadPage();
  $(".pagination").on("click","a",function(e){
    e.preventDefault();
    var $a=$(this);
    if(!$a.parent().is(".disabled,.active")){
      if($a.html()=="上一页"){
        //var pno=?;
      }else if($a.html()=="下一页"){
        //var pno=?;
      }else{
        var pno=$a.html()-1;
      }
      loadPage(pno);
    }
  })
})
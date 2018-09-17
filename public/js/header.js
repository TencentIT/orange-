$(function(){
	$.ajax({
		url:"header.html",
		type:"get",
		success:function(res){
			//console.log("header",res);
			$(res).replaceAll("#header");
        var $search = $(".search_box .search");
        $search.click(function(){
        location.href=
          `http://localhost:3002/products.html?kw=${$input.val().trim()}`
      })
		}
	})
})
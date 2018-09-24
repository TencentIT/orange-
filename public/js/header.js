$(function(){
	$.ajax({
		url:"header.html",
		type:"get",
		success:function(res){
			//console.log("header",res);
			$(res).replaceAll("#header");
		var $search = $(".search_box .search"),
			$input  = $(".search_box .search_input");
			
        $search.click(function(){
			// alert(1);
			location.href=
			`http://localhost:3002/product_details.html?kw=${$input.val().trim()}`;
		})
		
		console.log($input);
		//键盘回车 搜索 
		$input.keyup(function(e){
			if(e.keyCode == 13){
				// alert(2222);
				$search.click();
			}
		})

		if(location.search.indexOf("kw=")!=-1){
			var kw = location.search.split("=")[1];
			$input.val(kw);
		}

		}
	})
})
$(function(){
	$.ajax({
		url:"fixedBox.html",
		type:"get",
		success:function(res){
			// console.log("fixedBox",res);
			$(res).replaceAll("#fixedBox")
		}
	})
})
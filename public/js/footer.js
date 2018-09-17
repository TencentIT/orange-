/*
* @Author: Administrator
* @Date:   2018-09-15 14:35:40
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-15 16:07:29
*/
$(function(){
	$.ajax({
		url:"footer.html",
		type:"get",
		success:function(res){
			// console.log("footer",res);
			$(res).replaceAll("footer")
		}
	})
})
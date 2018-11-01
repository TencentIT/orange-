/*
* @Author: Administrator
* @Date:   2018-09-15 16:54:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-15 22:55:40
*/
$.ajax({
	url:"http://localhost:3002/index/carousel",
	type:"get",
	dataType:"json",
	success:function(res){
		// console.log("carousel",res);  数据成功过来了
		var parent = document.querySelector(`.slideBox>.lunbo_imgs>ul`);
		console.log(6,parent);

		var html = ``;
		for(var p of res.slice(0,5)){
			var {cid,img} = p;
			html+=`<li><a href="#"> <img class="lunbo_img${cid}" src="${img}"/> </a></li> `
		}
		console.log(7,html);
		// parent.innerHTML = html;
  },
  error:function(){
    alert("网络故障，请检查！");
}
})






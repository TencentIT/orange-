/*
* @Author: Administrator
* @Date:   2018-09-15 21:26:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-15 21:29:44
*/
$.ajax({
	url:"http://localhost:3002/index/xmdpAreas",
	type:"get",
	dataType:"json",
	success:function(res){
		// console.log("carousel",res);  数据成功过来了
		var parent = document.querySelector(`.xm-dianpu>.areas>ul`);
		console.log(7,parent);

		var html = ``;
		for(var p of res.slice(0,5)){
			var {cid,img} = p;
			html+=`<li><a href="#"> <img class="lunbo_img${cid}" src="${img}"/> </a></li> `
		}
		console.log(7,html);
		// parent.innerHTML = html;
	}
})
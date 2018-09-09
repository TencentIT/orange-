(async function(){
	var res =await ajax({
		url :"http://localhost:3002/index",
		dataType:"json",
		type:"get"
	});
	console.log(res);

//推荐产品模块 数据
	var html = ``;
	var parent = document.querySelector(`#main>.tj_products>ul.tj_ul`);
	console.log(1,parent);
	for(var p of res.slice(0,4)){
		var {pic,title,price} = p;
		html+=`<li> <img src="${pic}" /> 
      <div class="tj-pro-detail"> 
       <a href="#" class="tj-details ">${title}</a> 
       <span class="tj-price">￥${price.toFixed(2)}</span> 
       <a class="tj-buy">立即购买</a> 
      </div> </li>`
	}
	parent.innerHTML = html;

	 // 热销产品 模块数据
	parent = parent.parentNode.nextElementSibling.nextElementSibling.children[1].children[1].children[0];
	console.log(2,parent);

	html = ``;
	for(var p of res){
		var {pic,title,price,sell} = p;
		html+=`<li> <a href="#" class="rx-img-a"><img src="${pic}" alt="" /></a> 
		<a href="#" class="rx-detail">${title}</a>
		 <p> <span class="rx-price">￥${price.toFixed(2)}</span> 
		<span class="rx-sell">销售:&nbsp;&nbsp;<b>${sell}</b>件</span> </p> </li> `;
	}
})();
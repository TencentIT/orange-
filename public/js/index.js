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
	for(var p of res.slice(4,8)){
		var {pic,title,price,sell} = p;
		html+=`<li> <a href="#" class="rx-img-a"><img src="${pic}" alt="" /></a> 
		<a href="#" class="rx-detail">${title}</a>
		 <p> <span class="rx-price">￥${price.toFixed(2)}</span> 
		<span class="rx-sell">销售:&nbsp;&nbsp;<b>${sell}</b>件</span> </p> </li> `;
	}
	parent.innerHTML = html;

	
 // 限时促销 
  	html = ``;
  	parent = document.querySelector("#main>.xscx>.xscx-items>.xscx-ul")
  	console.log(3,parent)
  	for(var p of res.slice(8,13)){
  		html+=`<li> <a href="#" class="xscx-img-a"><img src="${pic}" alt="" /></a> 
       <div class="xscx-box"> 
        <a href="#" class="xscx-detail">${title}</a> 
        <div> 
         <span class="xscx-price">￥<b>${price.toFixed(2)}</b></span> 
         <span class="xscx-sub-price">￥${sell.toFixed(2)}</span> 
        </div> 
        <button>剩余时间：23时34分23秒</button> 
       </div> </li> `
  	}
  	parent.innerHTML = html;

  	//1F
  		html=``
  	 parent = document.querySelector("#main>.floor-box > .f-1 > .fl-items > .fl-porducts >.fl-pro-ul")
  		for(p of res.slice(13,21)){
  			var {pic,title,price,sell} = p; 
  			html += `<li> <a href="#" class="fl-a-img"><img src="${pic}" alt="" /></a> <a href="#" class="fl-pro-details">${title}</a> 
         <div class="fl-porducts-div"> 
          <span class="xscx-price">￥<i>${price.toFixed(2)}</i></span> 
          <span class="xscx-sub-price">销量<i>${sell.toFixed(2)}</i>件</span> 
         </div> </li> `;
  		}
  	
  		console.log(4,parent)
  		parent.innerHTML = html;

  	//2F
  		html=``
  	 parent = document.querySelector("#main>.floor-box > .f-2 > .fl-items > .fl-porducts >.fl-pro-ul")
  		for(p of res.slice(13,21)){
  			var {pic,title,price,sell} = p; 
  			html += `<li> <a href="#" class="fl-a-img"><img src="${pic}" alt="" /></a> <a href="#" class="fl-pro-details">${title}</a> 
         <div class="fl-porducts-div"> 
          <span class="xscx-price">￥<i>${price.toFixed(2)}</i></span> 
          <span class="xscx-sub-price">销量<i>${sell.toFixed(2)}</i>件</span> 
         </div> </li> `;
  		}
  	
  		console.log(4,parent)
  		parent.innerHTML = html;

  	//3F
  	 html=``
  	 parent = document.querySelector("#main>.floor-box > .f-3 > .fl-items > .fl-porducts >.fl-pro-ul")
  		for(p of res.slice(13,21)){
  			var {pic,title,price,sell} = p; 
  			html += `<li> <a href="#" class="fl-a-img"><img src="${pic}" alt="" /></a> <a href="#" class="fl-pro-details">${title}</a> 
         <div class="fl-porducts-div"> 
          <span class="xscx-price">￥<i>${price.toFixed(2)}</i></span> 
          <span class="xscx-sub-price">销量<i>${sell.toFixed(2)}</i>件</span> 
         </div> </li> `;
  		}
  	
  		console.log(4,parent)
  		parent.innerHTML = html;
  	// console.log(4,parent)


})();

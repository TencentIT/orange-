function ajax({url,type,data,dataType}){
	// 不加fun  因为会有回调地狱问题 所以用new promise 
  return new Promise(function(open,err){
	//1. 创建xhr对象
	var xhr=new XMLHttpRequest();
	//2.绑定监听事件
	xhr.onreadystatechange=function(){
	  if(xhr.readyState==4&&xhr.status==200){
		if(dataType!==undefined
			&&dataType.toLowerCase()==="json")
		  var res=JSON.parse(xhr.responseText);
		else
		  var res=xhr.responseText
		open(res);
	  }
	}
	if(type.toLowerCase()=="get"&&data!=undefined){
	  url+="?"+data;
	}
	//3.打开连接
	xhr.open(type,url,true);
	if(type.toLowerCase()==="post")
	  //增加：设置请求消息头
	  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//4.发送请求
	if(type.toLowerCase()=="post"&&data!==undefined)
	  xhr.send(data);
	else
	  xhr.send(null);
  })
}
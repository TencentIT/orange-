// function $(id){
// 	return document.getElementById(id);
// }
// function createXhr(){
// 	var xhr=null;
// 	if(window.XMLHttpRequest){
// 		 xhr = new XMLHttpRequest();
// 	}else{
// 		 xhr = new ActiveXObject('Microsoft.XMLHTTP');
// 	}
// 	return xhr;
// }

  function createXhr(){
    var xhr=null;
    if(window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
    }else{
      xhr=new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
 }
 
 function logout(){
   alert("logout")
 }
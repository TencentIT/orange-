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

 //全选
 $("#CheckedAll").click(function(){
   if(this.checked){
     $("input[type=checkbox][name=checkitems]").attr("checked",true)
   }else{
     $("input[type=checkbox][name=checkitems]").attr("checked",false)
   }
 })
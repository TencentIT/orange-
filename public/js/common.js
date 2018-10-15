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
$(document).ready(function(){
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

  console.log(this.checked)

   if(this.checked){
    console.log(1,this.checked)
     $("input[type=checkbox][name=checkitems]").attr("checked",true)
   }else{
     $("input[type=checkbox][name=checkitems]").attr("checked",false)
   }

 })

//  $("input[type=checkbox][name=checkitems]").click(function(){
//    var flag = true;
//    $("input[type=checkbox][name=checkitems]").each(function(){
//      if(!this.checkded){
//        flag = false
//      }
//      if(flag){
//       $("#CheckedAll").attr("checked",true)
//      }else{
//       $("#CheckedAll").attr("checked",false)
//      }
//    })

//  })



})
  
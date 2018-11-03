
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		 xhr = new XMLHttpRequest();
	}else{
		 xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xhr;
}
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

})

//加载动画 等待所有加载  
$(window).load(function() {
  $('body').addClass('loaded');
  $('#loader-wrapper .load_title').remove();
});

//产品规格
$("#guige>div").click("a",function(e){
  e.preventDefault();
  $(this).addClass("selected").siblings().removeClass("selected");
})


//数量添加
var n=$(".buy-num").val()*1;
$(".jian").click(function(){
  if(n>1){
    $(".buy-num").val(n-=1);
  }

})
$(".jia").click(function(){
  $(".buy-num").val(n+=1);

})



// function $(id){
// 	return document.getElementById(id);
// }
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
  if(n>=1){
    $(".buy-num").val(n-=1);
  }

})
$(".jia").click(function(){
  $(".buy-num").val(n+=1);

})

var n1=$(".buy-num1").val()*1;
var Total_price = $("#Total_price");
var jian1,jia1,sum1,sum2,p1,sum=0;
$(".jian1").click(function(){
  p1 = Number($(".price_item.item1>span").html().split("￥")[1]);

  if(n1>=1){
   jian1 = Number($(".buy-num1").val(n1-=1));
  }
   sum1=jian1*p1;
   sum+=sum1;
})
$(".jia1").click(function(){
 jia1 = Number($(".buy-num1").val(n1+=1));
   sum2=jian1*p1;
   sum+=sum2;
})

Total_price.html(sum);
var n2=$(".buy-num2").val()*1;
$(".jian2").click(function(){
  if(n2>=1){
    $(".buy-num2").val(n2-=1);
  }
})
$(".jia2").click(function(){
  $(".buy-num2").val(n2+=1);
})

function sum(jian1,jia1){
  return jian1+jia1;
}

//点击加入购物车按钮，立即购买
// $("body").on("click",".add_cart,.liji_buy",function(e){
//   e.preventDefault();
//   // console.log(666);
//   var buyCount=$(".buy-num").val();
//   var size= $("#guige>.selected>a").data("size");
//   // console.log(555,buyCount,size); // 注意这里是$.data("size") 获取值 
//   $.ajax({
//       type:'POST',
//       url:'',
//       data:{lid:location.search.split('=')[1],buyCount:buyCount,size:size},
//       success:function(result){
//           if(result.code==300){
//               alert(result.msg);
//               location.href="05-login.html";
//           }else if(result.code==200){
//               alert(result.msg);
//               location.href="08-cart.html";
//           }else{
//               alert(result.msg);
//           }
//       },
//       error:function(){
//           alert("网络故障，请检查！");
//       }
//   });
// })


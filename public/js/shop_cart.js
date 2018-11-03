//购物车
var table =document.getElementsByClassName("table_list")[0];
var sum=0;
table.onclick=function(e){
  if(e.target.nodeName==='BUTTON'){
    e.preventDefault();
    // alert(1);
    var btn = e.target;
    var input = btn.parentNode.children[1];
    //数量
    var n = parseInt(input.value);
    //本店价
    var price = parseFloat(btn
    .parentNode
    .parentNode
    .previousElementSibling
    .children[0]
    .innerHTML
    .slice(1))
    ;
    // alert(price)
    // 加减
    if(btn.innerHTML=='+'){
      n++;
    }else if(btn.innerHTML=='-'){
      if(n>1){
        n--;
      }
    }
    input.value=n;

    //小计
    var xj = btn.parentNode.parentNode.nextElementSibling.children[0];
    // alert(xj);

    xj.innerHTML = `￥${(n*price).toFixed(2)}`;
    // btn.parentNode.parentNode.nextElementSibling.children[0].innerHTML=xj;

 
    var xjs = document.querySelectorAll('.table_list tr td.xj span');
    console.log(xjs)
    for(var i=0;i<xjs.length;i++){
      sum+=Number(xjs[i].innerHTML.slice(1));
    }
    console.log(sum)
    var totalPrice = document.getElementsByClassName('totalPrice')[0];
    totalPrice.innerHTML=sum.toFixed(2);
  }
   
   
}

//马上付款
$('.cartsubmit').on('click',function(){
  if(sum==0){
    alert('尊敬的顾客您还未购物哟^_^')
  }else
  alert('尊敬的顾客,已成功付款'+sum.toFixed(2)+'元^_^')
})

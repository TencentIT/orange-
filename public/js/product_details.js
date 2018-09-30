// 商品放大镜下方轮动图片
var $prev = $("#pro_btn"),
    $next = $("#next_btn"),
    $ul = $prev.next(),
    LIWIDTH = 65,
    moved = 0
    ;
$next.click(function(){
    // var $next = $(this);
    moved++;
    $ul.children().css("margin-left",-moved*LIWIDTH);
    
});
$prev.click(function(){
    moved--;
    $ul.children().css("margin-left",-moved*LIWIDTH);  
})
// 放大镜
var $mImg = $(".fdj_left>img");
// console.log(2,$mImg);

$ul.on("mouseover","img",function(){
    // alert(1)
    var $img = $(this);
    var md = $img.attr("data-md");
    // alert(md)
    $mImg.attr("src",md);

})
var $mask = $("#mask"),
    $smask = $("#super-mask"),
    $lgDiv = $("#div-lg"),
    MSIZE_WIDTH = 235,
    MSIZE_HEIGHT = 210,
    SMIZE_WIDTH = 370,
    SMIZE_HEIGHT =  380
   ;
$smask.hover(function(){
    $mask.toggleClass("d-none");
    $lgDiv.toggleClass("d-none");
}).mousemove(function(e){
    var top = parseInt(e.offsetY- MSIZE_HEIGHT/2);
    var left = parseInt(e.offsetX - MSIZE_WIDTH/2);
    console.log("1"+top+left);
    MAX_WIDTH = SMIZE_WIDTH-MSIZE_WIDTH;
    MAX_HEIGHT = SMIZE_HEIGHT - MSIZE_HEIGHT; 
    if(top<0) top = 0;else if(top>MAX_HEIGHT) top  = MAX_HEIGHT;
    if(left<0) left = 0; else if(left>MAX_WIDTH) left = MAX_WIDTH;
    $mask.css({"left":left,top:top});
    $lgDiv.css(
        "backgroundPosition",
        `${-3*left}px ${-3*top}px`
      )
})


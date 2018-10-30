// 商品放大镜下方轮动图片
var $prev = $("#pro_btn"),
    $next = $("#next_btn"),
    $ul_div = $prev.next(),
    $ul = $ul_div.children(),
    LIWIDTH = 65,
    moved = 0
    ;
$next.click(function(){
    var $next = $(this);
    // console.log($ul.children("li").length)
    if(!$next.is(".disabled")){
        moved++;
        $ul_div.children().css({
            "margin-left":-moved*LIWIDTH,
            "transition":"all 1s linear"
        });
        $prev.removeClass("disabled");
        if(moved==$ul.children().length-5) {
            $next.addClass("disabled");
        //    return;
        }
    }
    
  
});
$prev.click(function(){
    var $prev = $(this);
    if(!$prev.is(".disabled")){
        moved--;
        $ul_div.children().css({
            "margin-left":-moved*LIWIDTH,
            "transition":"all 1s linear"
        });
        if(moved==0){
            $prev.addClass("disabled");
        }
        // else{
        //     $prev.removeClass("disabled");
          
        // }
    }
   
    
})
// 放大镜
var $mImg = $(".card-img-top-fdj");
$lgDiv = $("#div-lg");
// console.log(2,$mImg);

$ul_div.on("mouseover","img",function(){
    // alert(1)
    var $img = $(this);
    var md = $img.attr("data-md");
    var divlg = $img.attr("data-lg");
    $mImg.attr("src",md); 
    $lgDiv.css({
        "backgroundImage":`url("${divlg}")`
    });
})
var $mask = $("#mask"),
    $smask = $("#super-mask"),
 
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
    // console.log("1"+top+":"+left);
    MAX_WIDTH = SMIZE_WIDTH-MSIZE_WIDTH;
    MAX_HEIGHT = SMIZE_HEIGHT - MSIZE_HEIGHT; 
    if(top<0) top = 0;else if(top>MAX_HEIGHT) top  = MAX_HEIGHT;
    if(left<0) left = 0; else if(left>MAX_WIDTH) left = MAX_WIDTH;
    $mask.css({left,top});
    $lgDiv.css(
        "backgroundPosition",
        `${-2*left}px ${-2*top}px`
      )
})


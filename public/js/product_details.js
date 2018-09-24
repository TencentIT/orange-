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
var lgDiv = $("#div-lg");
$ul.on("mouseover","img",function(){
    // alert(1)
    var $img = $(this);
    var md = $img.attr("data-md");
    // alert(md)
    $mImg.attr("src",md);

})

    
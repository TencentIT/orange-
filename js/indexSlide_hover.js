$(function(){
    // var parent = document.querySelector(".nav_bar_left_title>a");
    // console.log(8,parent.nextElementSibling);
    // // parent.nextElementSibling
    // var div_box = parent.nextElementSibling;
    // parent.onmouseenter()

    $(".nav_bar_left_title").hover(function(){   
        // alert(1)
        // $(this).siblings().show();
        $(this).find('.nav_bar_left_items').show();
    },function(){
        // $(this).siblings().hide();
        $(this).find('.nav_bar_left_items').hide();
    })
})
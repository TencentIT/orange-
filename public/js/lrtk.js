
// =================================================*/

;(function($){
    $.fn.fix = function(options){
        var defaults = {
            float : 'left',
			minStatue : false,
			skin : 'blue',
			durationTime : 1000	
        }
        var options = $.extend(defaults, options);		

        this.each(function(){			
            //��ȡ����
			var thisBox = $(this),
				closeBtn = thisBox.find('.close_btn' ),
				show_btn = thisBox.find('.show_btn' ),
				sideContent = thisBox.find('.side_content'),
				sideList = thisBox.find('.side_list')
				sidetitle=thisBox.find('.side_title');
				scrollsidebar=thisBox.find('.page_right_style');	
			var defaultTop = thisBox.offset().top;	//�����Ĭ��top	
			
			thisBox.css(options.float, 0);			
			if(options.minStatue){
				$(".show_btn").css("float", options.float);
				sideContent.css('width', 0);
				show_btn.css('width', 25);
			}
			//Ƥ�����
			//if(options.skin) thisBox.addClass('side_'+options.skin);
				
						
			//����scroll�¼�			
			//$(window).bind("scroll",function(){
//				var offsetTop = defaultTop + $(window).clientHeight()+ "px";
//	            show_btn.animate({
//	                top: offsetTop
//	            },
//	            {
//	                duration: options.durationTime,	
//	                queue: false    //�˶����������붯������
//	            });
//			});	
			//close�¼�
			closeBtn.bind("click",function(){
				sideContent.animate({width: '0px'},"fast").addClass('active');
            	show_btn.stop(true, true).delay(300).animate({ width: '25px'},"fast");
				sideList.css("display","none");
				sidetitle.css("display","none");
				show_btn.css("display","block")
				scrollsidebar.addClass("Widescreen")
			});
			//show�¼�
			 show_btn.click(function() {
	            $(this).animate({width: '0px'},"fast").css('display','none');
	            sideContent.stop(true, true).delay(0).animate({ width: '220px'},"fast");
				sideList.css("display","block")
				sidetitle.css("display","block");
				scrollsidebar.removeClass("Widescreen")
				
	        });
				
        });	//end this.each

    };
})(jQuery);


(function($){
    $('#header .asideArea,#aside .asideClose').click(function(){
        $('body').toggleClass('asideopen');    
    }); 
	$(function() {  
        var mainHeader = $('#header'); 
        var scrollArrow = $('.scrollArrow');  
        var floatMenu = $('.floatMenu');  
        $(window).scroll(function () {        
            if ($(this).scrollTop() > 400) {            
                mainHeader.addClass('fix');        
            } else {            
                mainHeader.removeClass('fix');        
            }    
        });  
        $(window).scroll(function () {        
            if ($(this).scrollTop() > 200) {            
                scrollArrow.fadeOut();        
            } else {            
                scrollArrow.fadeIn();        
            }    
        });  
        $(window).scroll(function () {        
            if ($(this).scrollTop() > 600) {            
                floatMenu.fadeIn();        
            } else {            
                floatMenu.fadeOut();        
            }    
        }); 
    });
    $('.floatSearch > a').click(function(){
        $('.floatSearch').toggleClass('open');    
    }); 

    $('.upBtn').click(function(e) {
        $('body, html').stop().animate({scrollTop:0}, 300);
        e.preventDefault();
    });
    $('.downBtn').click(function(e) {
        $('body, html').stop().animate({scrollTop: $(document).height() + $(window).height()}, 300);
        e.preventDefault();
    });
    $(window).ready(function() {
        function loop() {
            $('.scrollArrow img').animate ({ top: '+=4' }, 300) 
                .animate({ top: '-=4' }, 200)
                .animate({ top: '+=4' }, 300)
                .animate({ top: '-=4' }, 200)
                .animate({bottom:50}, 1000, function() {
                loop();
            });
            }
        loop();
    });
     
})(jQuery);     
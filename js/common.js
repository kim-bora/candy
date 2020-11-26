$(document).ready(function() {
 // 반응형 txt
                setTimeout(function() {
                    $('.ex').fadeOut();
                }, 5000);
    // 명함 온오프
    $('#header .asideArea, #aside .asideClose').click(function(){
        $('body').toggleClass('asideopen');    
    }); 
     // 스크롤 fix 애로우 페이드처리
     var Hedaer = $('#header'); 
     var scrollArrow = $('.scrollArrow');  
     $(window).scroll(function () {        
      if ($(this).scrollTop() > 400) {            
         Hedaer.addClass('fix');        
     } else {            
         Hedaer.removeClass('fix');        
     }    
 });  
     $(window).scroll(function () {        
      if ($(this).scrollTop() > 200) {            
         scrollArrow.fadeOut();        
     } else {            
         scrollArrow.fadeIn();        
     }    
 });  
     
     // 스크롤 애로우 애니메이션
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
    
    //스크롤 애로우
    scrollArrow.click(function(){ 
        var first_area = $('.mainSlide').next().offset().top;   
       // alert(first_area);
        $('html, body').animate ({ scrollTop:first_area+"px" }, 500);
    }); 
    
    // 메인 슬라이드
    var swiper = new Swiper('.mainSlide', {
        loop:true,    
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },   
        speed:1000
    });
	
	// 프로필 스크롤 효과
	
     $(window).scroll(function () {        
		var windowTom = $(this).scrollTop(); // 스크롤 탑 기준
		var windowBottom = $(this).scrollTop() + $(this).innerHeight(); // 스크롤 바텀 기준
      
        // mv showing 
        $('.subTit, .mainTit, .img img, .sideTxt').each(function(index) { 
            var time = 30; 
            var $li = $(this);
            var objectBottom = $(this).offset().top - $(this).outerHeight()/8;
            if (objectBottom <= windowBottom) { 
                setTimeout(function() {
                    $li.removeClass('moveout');
                    $li.addClass('moveit');
                }, index*time);
            }
        });
 });  
 
 
 
    
});
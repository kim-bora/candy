$(document).ready(function() {
 // 반응형 txt
                setTimeout(function() {
                    $('.ex').fadeOut();
                }, 5000);
				//탭
				$("#header .rightArea > ul > li > a").on("click", function (e) {
	e.preventDefault();//anchor이벤트의 기본동작을 막는다.
	var thisTarget = $(this).attr("href");
	//$(window).scrollTop($(thisTarget).offset().top);
        $('html, body').animate ({ scrollTop:$(thisTarget).offset().top }, 700);
});

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
 
 
 
 
 
 
// 상품상세 > 탭고정

var _prdTabWrap = jQuery('.product_tab_wrap'),
    _prdTab = _prdTabWrap.find('.product_tab_lst'),
    _prdTabAnchor = _prdTab.find('a'),
    _prdTabHeight,
    _prdTabContent = jQuery('.product_tab_content'),

    _prdBtnWrap = jQuery('.product_btn_wrap'),
    _prdBtn = _prdBtnWrap.find('.product_btn'),
    _prdShareBtn = _prdBtnWrap.find('.btn_share');

function setPrdTabHeight() {
  _prdTabHeight = _prdTab.outerHeight(true);
  _prdTabWrap.css('height', _prdTabHeight);
}
function fixedPrdTab() {
  var _prdTabOffset = jQuery('.product_tab_wrap').offset().top,
      _headerBtn = jQuery('.product_detail .header'),
      _prdTab = jQuery('.product_tab_lst');

  if(_scrollTop > 0) {
    _headerBtn.addClass('is_active');
    _prdBtn.show();

    if(_scrollTop >= _prdTabOffset) {
      if(!_prdTab.hasClass('is_fixed')) {
        _prdTab.addClass('is_fixed');
      }
      _prdBtn.hide();
    } else {
      if(_prdTab.hasClass('is_fixed')) {
        _prdTab.removeClass('is_fixed');
      }
      _prdBtn.show();
    }
  } else {
    _headerBtn.removeClass('is_active');
    _prdBtn.hide();
  }
}
function activeCurrentTab() {
  var _prdTabContent = jQuery('.product_tab_content'),
      _prdTabWrap = jQuery('.product_tab_wrap'),
      _prdTab = _prdTabWrap.find('.product_tab_lst'),
      _prdTabAnchor = _prdTab.find('a'),
      _prdTabHeight = _prdTab.outerHeight(true);


  _prdTabContent.each(function(i) {
    var _this = jQuery(this),
      _targetStart = _this.offset().top - _prdTabHeight - 1;
    if(_scrollTop >= _targetStart) {
      _prdTab.find('li').removeClass('is_active');
      _prdTabAnchor.closest('li').eq(i).addClass('is_active');
    }
  })
}
// _prdTabAnchor.on('click', function(e) {
// 	e.preventDefault();
// 	var _target = jQuery(e.currentTarget),
// 		_targetHref = jQuery(_target).attr('href'),
// 		_targetOffset = jQuery(_targetHref).offset().top;
// 	jQuery('html, body').scrollTop(_targetOffset - _prdTabHeight + 1);
// })

jQuery(document).on('click', '.product_tab_wrap .product_tab_lst a', function(e) {
  e.preventDefault();
  var _target = jQuery(e.target),
      _targetHref = jQuery(_target).attr('href'),
      _targetOffset = jQuery(_targetHref).offset().top,
      _prdTabHeight = jQuery('.product_tab_lst').outerHeight(true);

  jQuery('html, body').scrollTop(_targetOffset - _prdTabHeight + 1);
})




 
    
});
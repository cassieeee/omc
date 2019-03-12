var swiper = new Swiper('.swiper-container', {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            
          });
          
//回到顶部
$('.right-nav .top-block').click(function(){
    $('html ,body').animate({scrollTop: 0}, 300);
    return false;
});
var tabTop = $(".page-nav").offset().top;
$(window).scroll(function () {
    //tab悬浮顶部
	sTop = $(this).scrollTop();
	if (sTop >= tabTop) {
		$('#main-header').css({ "position": "static" });
		$(".page-nav").css({ "position": "fixed", "top": "0px", "z-index": 99999 });
	} else {
        $('#main-header').css({ "position": "fixed" });
		$(".page-nav").css({ "position": "static" });
	}

});
//tab菜单点击滚动
$('.page-nav-container a').click(function(){
      var block_hight = $($(this).attr("href")).offset().top;
	  console.log(block_hight);
        $("html, body").animate({
            scrollTop: block_hight-100 + "px"
        }, 300);
        return false;
    });
$('.page-nav-container a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
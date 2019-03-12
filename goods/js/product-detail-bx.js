$(function () {
  //产品介绍
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 4,
    cssWidthAndHeight: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    noSwiping: true,
    // pagination: '.pagination',
    // autoplay : 5000,
  });

  $('.self-main .content-block .gallery-thumbs .my-thumb').click(function () {
    var index = $(this).index();
    $(this).addClass('swiper-slide-thumb-active').siblings().removeClass('swiper-slide-thumb-active');
    $('.self-main .content-block .gallery-top .swiper-wrapper').css('transition-duration', '.3s');
    $('.self-main .content-block .gallery-top .swiper-wrapper').css('-ms-transition-duration', '.3s');

    var bigImgwidth = $('.gallery-top').width();
    var wth = bigImgwidth * index;
    $('.self-main .content-block .gallery-top .swiper-wrapper').css('transform', 'translateX(-' + wth + 'px)');
    $('.self-main .content-block .gallery-top .swiper-wrapper').css('-ms-transform', 'translateX(-' + wth + 'px)');
    // $('.self-main .content-block .gallery-top .swiper-slide').eq(index).addClass('swiper-slide-visible swiper-slide-active').siblings().removeClass('swiper-slide-visible swiper-slide-active');
  });
  //应用场景 scenario tab 切换 
  scenarioTabchange();
  //初始化li的宽度
  initLiwidth('.common-scenario .scenario-tab');

  

$('.case-swiper').bxSlider({
    slideWidth: 380,
    auto: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    pause: 5000,
    slideMargin: 20,
    infiniteLoop: false,
    hideControlOnEnd: true,
  });

  //荣誉成就 4.4
  $('.honor-swiper').bxSlider({
    slideWidth: 380,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    pause: 5000,
    slideMargin: 20,
    infiniteLoop: false,
    hideControlOnEnd: true,
    auto: true,
  });

// listenResize=true;
// resizeFunc(screenWidth);

if(screenWidth<=1200){
  //产品下载点击
    $('.down-item-block .down-item').click(function () {
      $('.down-item-block .ewm-item').hide();
      $('.down-item-block .down-item').removeClass('active');
      $(this).next().toggle();
      $(this).addClass('active');
    });
}
 


  // window.onresize = function() {
    // padSwiper();
  // };



});
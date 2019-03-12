
$(document).ready(function () {
    //初始化li的宽度
    initLiwidth('.components .components-tab');
    initLiwidth('.common-scenario .scenario-tab');

    //components tab 切换 给每个tab下的li添加当前tab名字的类，点击添加active
    function componentsTabchange() {
        //初始化第一个tab选中
        var firstLi = $('.components .components-tab ul li').eq(0);
        firstLi.addClass('active');
        $('.components .tab-content').find('.li-0').addClass('active');

        //点击tab
        $('.components .components-tab ul li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('.tab-content .content-item').removeClass('active');
            $('.tab-content').find('.li-' + index).addClass('active');

        });
    }

    componentsTabchange();

    //scenario tab 切换 
    scenarioTabchange();

    //成功案例 4.4
    $('.case-swiper').bxSlider({
        slideWidth: 354,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        pause: 5000,
        slideMargin: 20,
        infiniteLoop: false,
        hideControlOnEnd: true,
        auto: true,
    });

    // var slideNum = $('.case-swiper .swiper-slide').length;
    // if(slideNum<=3){
    //     $('.case-swiper-block .bx-controls a').addClass('disabled');
    // }

// listenResize=true;
// resizeFunc(screenWidth);

    //pad
    // function padSwiper() {
    //     var pageWidth=screenWidth;
    //     if(pageWidth>=960 && pageWidth<=1200){
    //         $('.case-swiper-block .bx-wrapper .bx-viewport').css('width','80%');
    //         var viewWidth = $('.case-swiper-block .bx-wrapper .bx-viewport').width();
    //         var slideWidth = (viewWidth-40)/3;
    //         $('.case-swiper .swiper-slide').width(slideWidth+'px');

    //     }else{
    //         $('.case-swiper-block .bx-wrapper .bx-viewport').css('width','100%');
    //     }
    // }
    // padSwiper();

    // window.onresize = function() {
    //     padSwiper();
    // };
});
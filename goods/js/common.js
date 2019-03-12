

//components li的宽度
function initLiwidth(select) {
    var liNums = $(select + ' ul li').length;
    // var ulWidth = $(select + ' ul').width();
    // var liWidth = ulWidth / liNums;
    var liWidth = 100 / liNums;
    $(select + ' ul li').css('width', liWidth+'%');
}

//common-scenario tab 切换 
function scenarioTabchange() {
    //初始化第一个tab选中
    var firstLi = $('.common-scenario .scenario-tab ul li').eq(0);
    firstLi.addClass('active');
    $('.common-scenario .tab-content .content-item').eq(0).show();

    var contentSwiper = new Swiper('.contents', {
        noSwiping: true,
    });
    $('.page-nav li').each(function () {
        $(this).on("click", function (ev) {
            ev.preventDefault();
            var _this = $(this);
            // contentSwiper.slideTo(_this.index()); //s4
            contentSwiper.swipeTo(_this.index());
            _this.parent().children().removeClass('active');
            _this.addClass('active');
        });
    });
}


    //关闭引导页
    $('.first-guide .guide-btn').click(function () {
        $(this).parent().hide();
    });


var screenWidth = document.documentElement.clientWidth ||　document.body.clientWidth;
    screenWidth　=　screenWidth　+ getScrollBarWidth();
//    function padSwiper() {
//     //   $('.case-swiper-block .bx-wrapper .bx-viewport').css('width','80%');
//     //   $('.honor-swiper-block .bx-wrapper .bx-viewport').css('width','80%');
//     //   var viewWidth = $('.case-swiper-block .bx-wrapper .bx-viewport').width();
//     //   var slideWidth = (viewWidth-40)/3;
//     //   alert(slideWidth);
//     //   $('.case-swiper .swiper-slide').width(slideWidth+'px');
//     //   $('.honor-swiper .swiper-slide').width(slideWidth+'px');

//       //产品下载点击
//     //   $('.down-item-block .down-item').click(function () {
//     //     $('.down-item-block .ewm-item').hide();
//     //     $('.down-item-block .down-item').removeClass('active');
//     //     $(this).next().toggle();
//     //     $(this).addClass('active');
//     //   });
//   }
//   function pcSwiper(){
//     //   var slideWidth = 380;
//     //   $('.case-swiper-block .bx-wrapper .bx-viewport').css('width','100%');
//     //   $('.honor-swiper-block .bx-wrapper .bx-viewport').css('width','100%');
//     //  var viewWidth = $('.case-swiper-block .bx-wrapper .bx-viewport').width();
//     //   var slideWidth = (viewWidth-40)/3;
//     // //   alert(slideWidth);
//     //   $('.case-swiper .swiper-slide').width(slideWidth+'px');
//     //   $('.honor-swiper .swiper-slide').width(slideWidth+'px');

//   }

//     function resizeFunc(width) {
//         screenWidth = width;
//         // alert(screenWidth);
//         if(screenWidth>=960 && screenWidth<=1200){
//             padSwiper();
//         }else{
//             pcSwiper();
//         }
//     }
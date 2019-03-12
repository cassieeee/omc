// $(function () {

var tabul,tab,tabTop;
var screenWidth = document.documentElement.clientWidth ||　document.body.clientWidth;
    screenWidth　=　screenWidth　+ getScrollBarWidth();
//tab菜单点击滚动
$(document).on("ready", function(){



    //导航栏和tab菜单的特效
// mytopnav = $('.mytopnav .nav ul .on');
    function navFunc(selector,pars){
        $(selector+' li').on('click',function () {
            $(this).addClass('on');

            tabul = $(this);
        });

        $(selector+' li').mouseenter(function () {
            $(selector).find('.on').removeClass('on');

        });

        $(selector+' li').mouseleave(function () {
            tabul && tabul.addClass("on");
        });
    }
    navFunc('.tab ul','tab');//tab菜单

    $('.tab ul a').on('click',function () {
        var block_hight = $($(this).attr("href"))[0].offsetTop;
        vm.scrollTo(block_hight-160);
    });

    //tab悬浮顶部
    tab = $("body section").hasClass('tab');
    if (tab) {
        tabTop = $(".tab")[0].offsetTop;
    }


    

//关闭引导页
    $('.first-guide .guide-btn').click(function () {
        $(this).parent().hide();
    });

    

});

var sTop = 0;
var topnavHeight = $('.mytopnav').height();
function tabAdapt(top) {
    sTop = top;
    if (sTop >= tabTop-100) {
        $(".tab").css({ "position": "fixed", "top": topnavHeight+"px", "z-index": 9 });
    } else {
        $(".tab").css({ "position": "static" });
    }
}

listenScroll = true;
function scrollFunc(top){
    //tab悬浮顶部
    tab && tabAdapt(top);
}

//tab悬浮顶部 移动端没有vuescroll 监听原生的
$(document).scroll(function(){
    var scrTop = $(window).scrollTop();
    tabAdapt(scrTop);
});

//适配替换二倍图
listenResize=true;
function replaceImgToDouble(selector){
    // console.log($(selector));
    $(selector).each(function(){
        if($(this).attr("src").indexOf("@2x") < 0 ){
            var src=$(this).attr("src").replace('.png','@2x.png');
            $(this).attr('src',src);
        }
    });
}
function replaceImgToOne(selector){
    $(selector).each(function(){
        var src=$(this).attr("src").replace('@2x.png','.png');
        $(this).attr('src',src);
    });
}
var listttt=false;
function resizeFunc(width) {
    screenWidth = width;
    console.log(screenWidth);
    if(screenWidth<=1200){
        replaceImgToDouble(".main-wrapper img[retina]");
        // listttt && company(true);
    }else{
        replaceImgToOne('.main-wrapper img[retina]');
        // listttt && company(false);
    }

}


//判断是否是IE10以下
    function IEVersion() {
        //取得浏览器的userAgent字符串
        var userAgent = navigator.userAgent;
        //判断是否IE浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion < 10) {
                return true;
            } else {
                return false;
            }
        }
        else {
            return false;
        }
    }
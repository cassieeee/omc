$(function () {
    $('.tabcont').eq(2).show();
    $('.tabli li').eq(2).css('background-color', '#fff');
    $('.tabli li').mouseover(function () {
        $(this).css('background-color', '#fff').siblings().css('background-color', '#f9f9f9');
        $('.tabcont').hide().eq($(this).index()).show();   //当前选中内容显示
    });

   
    //pad两倍图替换
    resizeFunc(screenWidth);

});


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

//兼容ie10以下
function initPageoneAnimt() {
    if (IEVersion()) {
        $('.server .server-content .tabcont .desc-block .block-title').css('opacity', 1);
        $('.server .server-content .tabcont .desc-block .block-desc').css('opacity', 1);
    }
}
initPageoneAnimt();
var page_index = 0;
var scrollTopCallback = function(){
    page_index = 0;
};

$(function () {
    var slideNum = $('#banner .swiper-slide').length;
    if (slideNum == 1) {
        $('#banner .swiper-slide').addClass('swiper-no-swiping');
    }

//二倍图
resizeFunc(screenWidth);

// function goPAGE() {
//     if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//         /*window.location.href="你的手机版地址";*/
//         // alert("mobile")
//     }
//     else {
//         /*window.location.href="你的电脑版地址";    */
//         // alert("pc")
//     }
// }
// goPAGE();

// $('.section').height(document.body.offsetHeight+'px');
// alert(document.body.offsetHeight);
   //下属公司
var screenImage = $('.my-handle .subsidiary .right-block .item img');
var theImage = new Image();
var imgWidth = 0;//获取图片宽度
var imgHeight = 0;//获取图片高度
var multipleHeight=0,normalWidth;
theImage.src = screenImage.attr("src");
theImage.onload =function(){
    // imgWidth = theImage.width;//获取图片宽度
    // imgHeight = theImage.height;//获取图片高度
    // if(imgHeight<document.body.offsetHeight){
    //     multipleHeight =  (document.body.offsetHeight/2)/imgHeight;//高缩放的比例
    // }else{
    //     multipleHeight = document.body.offsetHeight/imgHeight;//高缩放的比例
    // }
    // normalWidth = imgWidth * multipleHeight;//缩放后的宽
     normalWidth=$('.subsidiary .right-block .item').width();
    

    var index = 0;
    var leftWidth = $('.subsidiary .left-block').width();
    var rightWidth = document.body.clientWidth - leftWidth; //右侧可视宽度
    var sliderNum = $('#subsidiary .item').length;
    var slideWidths =normalWidth * 7;//slide总的宽度
    var subWidth = slideWidths - rightWidth;//宽度差
    var moveSlidenum = Math.ceil(subWidth / normalWidth);//可点击几次
    var subnum = rightWidth / normalWidth - Math.floor(rightWidth / normalWidth); //到最右端剩余的移动距离
    // alert(document.body.clientWidth);
    // alert(leftWidth);
    function selectSlider(index) {
       
        movewidths = index * normalWidth;
        if (index == moveSlidenum) {
            movewidths = ((index - 1) * normalWidth + (1 - subnum) * normalWidth);
        }
        $('#subsidiary ').css('transform', 'translateX(-' + movewidths + 'px)');
        $('#subsidiary ').css('transition-duration', '.5s');
    }
    $('.tips-left').on('click', function (e) {
        e.preventDefault();
        index -= 1;
        if (index < 0) {
            // index = sliderNum - 1;
            index = 0;
        }
        if (index > moveSlidenum) {
            index = moveSlidenum;
        }
        selectSlider(index);
    });
    $('.tips-right').on('click', function (e) {
        e.preventDefault();
        index += 1;
        if (index > moveSlidenum) {
            index = moveSlidenum;
        }
        if (index <= moveSlidenum) {
            selectSlider(index);
        }

    });


//定义变量，用于记录坐标和角度
    var startx,starty,movex,movey,endx,endy,nx,ny,angle;
    var subsidiary = document.getElementById('subsidiary');        //获取DOM标签

    //开始触摸函数，event为触摸对象
    function touchs(event){
        //阻止浏览器默认滚动事件
        

        //通过if语句判断event.type执行了哪个触摸事件
        if(event.type=="touchstart"){
            console.log('开始');
            //获取开始的位置数组的第一个触摸位置
            var touch = event.touches[0];
            //获取第一个坐标的X轴
            startx = Math.floor(touch.pageX);
            //获取第一个坐标的X轴
            starty = Math.floor(touch.pageY);
        }else if(event.type=="touchmove"){
            //触摸中的坐标获取
            // console.log('滑动中');
            var touch = event.touches[0];
            movex = Math.floor(touch.pageX);
            movey = Math.floor(touch.pageY);

            //当手指离开屏幕或系统取消触摸事件的时候
        }else if(event.type == "touchend" || event.type == "touchcancel"){
            //获取最后的坐标位置
            endx = Math.floor(event.changedTouches[0].pageX);
            endy = Math.floor(event.changedTouches[0].pageY);
            // console.log('结束');

            //获取开始位置和离开位置的距离
            nx = endx-startx;
            ny = endy-starty;

            //通过坐标计算角度公式 Math.atan2(y,x)*180/Math.PI
            angle = Math.atan2(ny, nx) * 180 / Math.PI;
            // console.log(nx);
            if(Math.abs(nx)<=1 ||Math.abs(ny)<=1){
                // console.log('滑动距离太小');
                return false;
            }

            //通过滑动的角度判断触摸的方向
            if(angle<45 && angle>=-45){
                event.preventDefault();
                index-=1;
                if (index < 0) {
                    // index = sliderNum - 1;
                    index = 0;
                }
                if (index > moveSlidenum) {
                    index = moveSlidenum;
                }
                console.log(index);
                // alert('右滑动');
                selectSlider(index);
                return false;
            }
            else if((angle<=180 && angle>=135) || (angle>=-180 && angle<-135 )){
                event.preventDefault();
                index+=1;
                if (index > moveSlidenum) {
                    index = moveSlidenum;
                }
                console.log(index);
                if (index <= moveSlidenum) {
                    selectSlider(index);
                }
                // alert('左滑动');
                return false;
            }else if(angle<135 && angle>=45){
                // alert('下滑动');
                // return false;
            }else if(angle<=-45 && angle >=-135){
                // alert('上滑动');
                // return false;
            }

        }
    }

    //添加触摸事件的监听，并直行自定义触摸函数
    subsidiary.addEventListener('touchstart',touchs,false);
    subsidiary.addEventListener('touchmove',touchs,false);
    subsidiary.addEventListener('touchend',touchs,false);




}
   


    









    var dongmanchengSlider = $('#bottom-dongmancheng-banner').bxSlider({
        auto: true,
        infiniteLoop: true,
        pause: 5000,
        fullPage: true,
    });

    var xiaozhenSlider;
    // 创意基地右边tab
    $('.right-block .item').click(function () {
        if ($(this).index() == 0) {
            $('.bx-wrapper').hide();
            // console.log($('.slider7').parent().parent());
            $('#bottom-dongmancheng-banner').parent().parent().show();
            dongmanchengSlider && dongmanchengSlider.destroySlider();
            dongmanchengSlider = $('#bottom-dongmancheng-banner').bxSlider({
                // slideWidth: 600,
                fullPage: true,
                auto: true,
                pause: 5000,
                infiniteLoop: true,
            });

            //滚动 动漫城显示
            $('#bottom-dongmancheng-banner').removeClass('hide');
            $('#bottom-xiaozhen-banner').addClass('hide');
            //处理当前点击item的状态
            $(this).find('.normal').hide();
            $(this).find('.hover').show();
             $(this).next().find('.hover').hide();
            $(this).next().find('.normal').fadeIn('1000');
           


        } else {
            $('.bx-wrapper').hide();
            $('#bottom-xiaozhen-banner').show();
            // console.log($('.slider77').parent().parent());
            $('#bottom-xiaozhen-banner').parent().parent().show();

            xiaozhenSlider && xiaozhenSlider.destroySlider();
            xiaozhenSlider = $('#bottom-xiaozhen-banner').bxSlider({
                // slideWidth: 600,
                fullPage: true,
                auto: true,
                pause: 5000,
                infiniteLoop: true,
                // minSlides: 1,
            });

            //滚动 小镇显示
            $('#bottom-dongmancheng-banner').addClass('hide');
            $('#bottom-xiaozhen-banner').removeClass('hide');
            //处理当前点击item的状态
            $(this).find('.normal').hide();
            $(this).find('.hover').show();
            $(this).prev().find('.hover').hide();
            $(this).prev().find('.normal').fadeIn('1000');
            
        }

    });

    //右侧hover
    $('.right-block .item').mouseenter(function () {
        var index = $(this).index();
        if (index == 0) {//海西动漫城
            $(this).find('.normal img').attr('src', '/html/static/images/introduce/airship-hover.png');
            $(this).find('.normal img').css('bottom', '-4px');
        } else {//小镇
            $(this).find('.normal img').attr('src', '/html/static/images/introduce/town-hover.png');
            $(this).find('.normal img').css('bottom', '-4px');
        }
    });
    $('.right-block .item').mouseleave(function () {
        var index = $(this).index();
        if (index == 0) {//海西动漫城
            $(this).find('.normal img').attr('src', '/html/static/images/introduce/airship-normal.png');
            $(this).find('.normal img').css('bottom', '-0px');
        } else {//小镇
            $(this).find('.normal img').attr('src', '/html/static/images/introduce/town-normal.png');
            $(this).find('.normal img').css('bottom', '0');
        }
    });


    // var cheight = $(document.body).height();
    // $('.section').height(cheight + 'px');

    //滚轮翻页
    var screen_height = $(window).height();
    var doScroll = true;

    var oDiv = document.querySelector('.main-wrapper');
    var footer = document.querySelector('#main-footer');
    function onMouseWheel(ev) {/*当鼠标滚轮事件发生时，执行一些操作*/
        var ev = ev || window.event;
        var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
        if (doScroll) {
            if (down) {
                if (page_index != 3) {
                    doScroll = false;
                    page_index++;
                    vm.scrollTo(page_index * screen_height);
                    //当响应向下滚动事件的时候，将doScroll设置成false，控制在这次响应过程中，不再响应其他滚轮事件，当这次事件执行结束后（500ms后），再讲doScroll恢复成true，准备响应下次滚动。
                    setTimeout(function () {
                        doScroll = true;
                    }, 500);
                }
            } else {
                if (page_index != 0) {
                    doScroll = false;
                    page_index--;
                    vm.scrollTo( page_index * screen_height);
                    // $("#main-swiper").css('transition-duration', '.5s');
                    setTimeout(function () {
                        doScroll = true;
                    }, 500);
                }
            }
            if (ev.preventDefault) {/*FF 和 Chrome*/
                ev.preventDefault();// 阻止默认事件
            }
        }

        return false;
    }
    addEvent(oDiv, 'mousewheel', onMouseWheel);
    addEvent(oDiv, 'DOMMouseScroll', onMouseWheel);
    addEvent(footer, 'mousewheel', onMouseWheel);
    addEvent(footer, 'DOMMouseScroll', onMouseWheel);


    function addEvent(obj, xEvent, fn) {
        if (obj.attachEvent) {
            obj.attachEvent('on' + xEvent, fn);
        } else {
            obj.addEventListener(xEvent, fn, false);
        }
    }

    listenScroll = false;

});

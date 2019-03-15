var page_index = 0;
var scrollTopCallback = function(){
    page_index = 0;
};

$(function () {
    var slideNum = $('#banner .swiper-slide').length;
    if (slideNum == 1) {
        $('#banner .swiper-slide').addClass('swiper-no-swiping');
    }

 
// resizeFunc(screenWidth);
    //第二屏适配屏幕的高度
    var normalWidth = 0;
    
    // var theImage = new Image();
    // var multiple;
    // theImage.src = screenImage.attr("src");

    //下属公司
    var index = 0;
    var rightWidth = 0; //右侧可视宽度
    var sliderNum = $('#subsidiary .item').length;
    var slideWidths = 0;//slide总的宽度
    var subWidth = 0;//宽度差
    var moveSlidenum = 0;//可点击几次
    var subnum = 0; //到最右端剩余的移动距离
    // console.log(slideWidths,rightWidth,subWidth,moveSlidenum,sliderNum);
    function selectSlider(index) {
        console.log(normalWidth);
        movewidths = index * normalWidth;
        if (index == moveSlidenum) {
            movewidths = (index - 1) * normalWidth + (1 - subnum) * normalWidth;
        }
        $('#subsidiary ').css('transform', 'translateX(-' + movewidths + 'px)');
        $('#subsidiary ').css('transition-duration', '.5s');
    }
    $('.tips-left').on('click', function (e) {
        e.preventDefault();
        index -= 1;
        console.log(index);
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
        console.log(index);
        if (index > moveSlidenum) {
            index = moveSlidenum;
        }
        if (index <= moveSlidenum) {
            selectSlider(index);
        }

    });
    var screenImage = $('.my-handle .subsidiary .right-block .item #myimg');

    function imgLoad(){console.log(111)
        var imageWidth = screenImage.width();//获取图片宽度
        var imageHeight = screenImage.height();//获取图片宽度
        console.log(imageWidth)
        if( screenWidth>1200){
            multiple = document.body.offsetHeight / imageHeight;//高缩放的比例
        }else if(screenWidth<=1200 && screenWidth>=960 ){
            multiple = document.body.offsetHeight/2 / imageHeight;//高缩放的比例
        }
        console.log(multiple);
        normalWidth = imageWidth * multiple;//缩放后的宽console.log(moveSlidenum)
        slideWidths = normalWidth * 7;
        rightWidth = document.body.clientWidth - $('.subsidiary .left-block').width();
        subWidth = slideWidths - rightWidth;
        moveSlidenum = Math.ceil(subWidth / normalWidth);
        subnum = rightWidth / normalWidth - Math.floor(rightWidth / normalWidth);
        
        
        $('.my-handle .subsidiary .right-block .item').css('width', normalWidth + 'px');

        //定义变量，用于记录坐标和角度
        var startx,starty,movex,movey,endx,endy,nx,ny,angle;
        var subsidiary = document.getElementById('subsidiary');        //获取DOM标签

        //开始触摸函数，event为触摸对象
        function touchs(event){
            //阻止浏览器默认滚动事件
            event.preventDefault();

            //通过if语句判断event.type执行了哪个触摸事件
            if(event.type=="touchstart"){
                // console.log('开始');
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
                }

            }
        }

        //添加触摸事件的监听，并直行自定义触摸函数
        subsidiary.removeEventListener('touchstart',touchs);
        subsidiary.addEventListener('touchstart',touchs,false);
        subsidiary.removeEventListener('touchmove',touchs);
        subsidiary.addEventListener('touchmove',touchs,false);
        subsidiary.removeEventListener('touchend',touchs);
        subsidiary.addEventListener('touchend',touchs,false);

    }

    screenImage.load(imgLoad());
    var dongmanchengSlider = $('#bottom-dongmancheng-banner').bxSlider({
        auto: true,
        infiniteLoop: true,
        pause: 5000,
        fullPage: true,
    });

    var xiaozhenSlider,dongmanchengSlider;
    // 创意基地右边tab
    $('.right-block .item').click(function () {
        if ($(this).index() == 0) {
            $('.bx-wrapper').hide();
            $('#bottom-dongmancheng-banner').show();
            dongmanchengSlider && dongmanchengSlider.destroySlider();
            dongmanchengSlider = $('#bottom-dongmancheng-banner').bxSlider({
                fullPage: true,
                auto: true,
                pause: 5000,
                infiniteLoop: true,
            });

            //处理当前点击item的状态
            $(this).find('.hover').show();
            $(this).find('.normal').hide();
            $(this).next().find('.normal').fadeIn('1000');
            $(this).next().find('.hover').fadeOut('1000');


        } else {
            $('.bx-wrapper').hide();
            $('#bottom-xiaozhen-banner').show();
            xiaozhenSlider && xiaozhenSlider.destroySlider();
            xiaozhenSlider = $('#bottom-xiaozhen-banner').bxSlider({
                fullPage: true,
                auto: true,
                pause: 5000,
                infiniteLoop: true,
            });

            //处理当前点击item的状态
            $(this).find('.hover').show();
            $(this).find('.normal').hide();
            $(this).prev().find('.normal').fadeIn('1000');
            $(this).prev().find('.hover').fadeOut('1000');
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

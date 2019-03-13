var page_index = 0;
var scrollTopCallback = function(){
    page_index = 0;
};

$(function () {
    var slideNum = $('#banner .swiper-slide').length;
    if (slideNum == 1) {
        $('#banner .swiper-slide').addClass('swiper-no-swiping');
    }


    //兼容ie10以下 第一页的动画
    function initPageoneAnimt() {
        // if (IEVersion()) {
        //     $('.content h1').css('opacity', 1);
        //     $('.banner .desc').css('opacity', 1);
        //     $('.banner .btn').css('opacity', 1);
        //     $('.banner img').css('opacity', 1)
        // }
    }
    initPageoneAnimt();

    //第二屏适配屏幕的高度
    var screenImage = $('.my-handle .subsidiary .right-block .item .item-normal img');
    var theImage = new Image();
    theImage.src = screenImage.attr("src");
    var imageWidth = theImage.width;//获取图片宽度
    var multiple = document.body.offsetHeight / 1080;//高缩放的比例
    var normalWidth = imageWidth * multiple;//缩放后的宽
    $('.my-handle .subsidiary .right-block .item').css('width', normalWidth + 'px');


    //下属公司
    var index = 0;
    var rightWidth = document.body.clientWidth - 326; //右侧可视宽度
    var sliderNum = $('#subsidiary .item').length;
    var slideWidths = normalWidth * 7;//slide总的宽度
    var subWidth = slideWidths - rightWidth;//宽度差
    var moveSlidenum = Math.ceil(subWidth / normalWidth);//可点击几次
    var subnum = rightWidth / normalWidth - Math.floor(rightWidth / normalWidth); //到最右端剩余的移动距离
    // console.log(slideWidths,rightWidth,subWidth,moveSlidenum,sliderNum);
    function selectSlider(index) {
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
        //  console.log(index);
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
    subsidiary.addEventListener('touchstart',touchs,false);
    subsidiary.addEventListener('touchmove',touchs,false);
    subsidiary.addEventListener('touchend',touchs,false);










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


    var cheight = $(document.body).height();
    $('.section').height(cheight + 'px');


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

































//         var drag=function(obj){
//                 obj.bind("mousedown",start);
// var movelength =$(window).scrollLeft();
//                 function start(event){
//                     console.log(movelength);
//                     if(event.button==0 ){//判断是否点击鼠标左键
//                         gapX=event.clientX;
//                         startx = movelength;  // scroll的初始位置

//                         //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
//                         $(document).bind("mousemove",move);
//                         //此处的$(document)可以改为obj
//                         $(document).bind("mouseup",stop);
//                     }
//                     return false;//阻止默认事件或冒泡
//                 }
//                 function move(event){
//                     var left = event.clientX-gapX; // 鼠标移动的相对距离
//                     movelength = (startx - left);
//                     console.log(movelength);
//                     if(movelength<0){
//                         movelength=0;
//                     }
//                     if(movelength>=1766){
//                         movelength = 1766;
//                     }

//                     $('.items').css('left',-movelength);

//                     return false;//阻止默认事件或冒泡
//                 }
//                 function stop(){
//                     //解绑定，这一步很必要，前面有解释
//                     $(document).unbind("mousemove",move);
//                     $(document).unbind("mouseup",stop);
//                 }
//             }
//             obj=$("#right-block");
//             drag(obj);//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数

            //存放图片路径的数组
    // var imgSrcArr = [
    //     'images/introduce/huayu-pic.png',
    //     // '../images/introduce/admodo-pic.png',
    //     // '../images/introduce/admodo-pic.png'
    // ];

    // var imgWrap = [];

    // function preloadImg(arr) {
    //     for(var i =0; i< arr.length ;i++) {
    //         imgWrap[i] = new Image();
    //         imgWrap[i].src = arr[i];
    //     }
    // }

    // preloadImg(imgSrcArr);

    //或者延迟的文档加载完毕在加载图片

    // $(function () {
    //     preloadImg(imgSrcArr);
    // })

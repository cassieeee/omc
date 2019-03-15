$(function () {
    var index=0;
    var marginRight=20;
    var normalWidthandMargin= $('.colleges .colleges-swiper .bx-slide').width()+marginRight;
    var normalWidth= $('.colleges .colleges-swiper .bx-slide').width();
    var index = 0;
    var rightWidth = $('.colleges .colleges-swiper-block').width(); //可视宽度
    var sliderNum = $('.colleges .colleges-swiper .bx-slide').length;
    var slideWidths = normalWidthandMargin * 7;//slide总的宽度
    var subWidth = slideWidths - rightWidth;//宽度差
    var moveSlidenum = Math.ceil(subWidth / normalWidthandMargin);//可点击几次
    var subnum = rightWidth / normalWidthandMargin - Math.floor(rightWidth / normalWidth); //到最右端剩余的移动距离
    
    function selectSlider(index) {
        movewidths = index * normalWidthandMargin;
        console.log(index);
        if (index == moveSlidenum) {
            movewidths = (index - 1) * normalWidthandMargin + (1 - subnum) * normalWidthandMargin;
            $('.colleges .colleges-swiper-block .pager .next').hide();
        }else if(index==0){
            $('.colleges .colleges-swiper-block .pager .prev').hide();
        }else{
            $('.colleges .colleges-swiper-block .pager .next').show();
            $('.colleges .colleges-swiper-block .pager .prev').show();
        }
        $('.colleges-swiper').css('transform', 'translateX(-' + movewidths + 'px)');
        $('.colleges-swiper').css('transition-duration', '.5s');
    }
   
     $('.prev').on('click', function (e) {
        e.preventDefault();
        index -= 1;
        if (index < 0) {
            index = 0;
        }
        if (index > moveSlidenum) {
            index = moveSlidenum;
        }
        selectSlider(index);
    });


    $('.next').on('click', function (e) {
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
    var colleges = document.getElementsByClassName('colleges-swiper');        //获取DOM标签

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
    colleges.addEventListener('touchstart',touchs,false);
    colleges.addEventListener('touchmove',touchs,false);
    colleges.addEventListener('touchend',touchs,false);

});
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
        }else if(index== 1){
            $('.colleges .colleges-swiper-block .pager .pre').hide();
        }else{
            $('.colleges .colleges-swiper-block .pager .next').show();
        }
        $('.colleges-swiper').css('transform', 'translateX(-' + movewidths + 'px)');
        $('.colleges-swiper').css('transition-duration', '.5s');
    }
    $('.prev').on('click', function (e) {
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
});
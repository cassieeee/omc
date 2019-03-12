$(function () {

    function searchblock(selector) {
        //每个选项点击
        $(selector + ' .search-content .search-content-items ul li span').click(function () {
            var text = $(this).text();
            $(selector + ' .search-input input').val(text);
            $(selector + ' .search-content').hide();
        });
        //搜索清除点击
        $(selector + ' .search-content .search-content-input .search-icon').click(function () {
            $(selector + ' .search-content .search-content-input input').val('');
        });
        //选择框点击
        $(selector + ' .search-input').click(function () {
            $(selector + ' .search-content').show();
        })
    }
    searchblock('#service-search');
    searchblock('#technology-search');

    function searchpadblock(selector) {
        //每个选项点击
        $(selector + ' .search-content-pad .search-content-items ul li span').click(function () {
            var text = $(this).text();
            $(selector + ' .search-input input').val(text);
            $(selector + ' .search-content-pad').hide();
        });

        //选择框点击
        $(selector + ' .search-input').click(function (e) {
            e.stopPropagation();
            $(selector + ' .search-content-pad').show();
            vm.$refs['saleSearch'].refresh();
        });

        // $('body').click(function () {
        //     $('.common-block .search-block .search-content-pad').hide();
        // });
    }
    searchpadblock('#service-search-pad');
    searchpadblock('#technology-search-pad');

listenScroll = true;
    //pad两倍图替换
    // resizeFunc(screenWidth);
});
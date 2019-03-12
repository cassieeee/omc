$(function () {

    function searchblock(selector) {
        //每个选项点击
        $(selector + ' .search-content .search-content-items ul li').click(function () {
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
            vm.$refs['saleSearch-service'].refresh();
            vm.$refs['saleSearch-technology'].refresh();
        })
    }
    searchblock('#service-search');
    searchblock('#technology-search')

    //pad两倍图替换
    resizeFunc(screenWidth);
});
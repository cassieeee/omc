$(function () {
    function initdata(module) {
        var htm = '';
        for (var i = 0; i < data[module].length; i++) {
            htm += '<a href=' + data[module][i]['links'] + ' target="_blank">' +
                '<div class="item"><div class="item-img">' +
                '<img src="' + data[module][i]['image'] + '" alt="img" retina></div>' +
                '<div class="item-title">' + data[module][i]['title'] + '</div>' +
                '<div class="item-desc">' + data[module][i]['desc'] + '</div>' +
                '<div class="item-more">›</div>' +
                '</div></a>';
        }
        $('#' + module).append(htm);
    }
    initdata('education');
    initdata('government');
    initdata('company');
    initdata('entertainment');
    initdata('sea');

    //pad两倍图替换
    resizeFunc(screenWidth);
});
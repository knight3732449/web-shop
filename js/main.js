// $(function () {
//     function resize() {
//         var windowWidth = $(window).width();
//         var isSmallScreen = windowWidth < 768;
//         $("#main_ad> .carousel-inner>.item").each(function (i,item) {
//             var $item = $(item);
//             var imgSrc = $item.data(isSmallScreen ? 'img-xs':'img-lg');
//             $item.css('backgroundImage','url("'+ imgSrc +'")')
//         })
//     }
//     $(window).on('resize',resize).trigger('resize');
// })
$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner >.item').each(function (i,item) {
            var $item = $(item);
            var imgSrc = $item.data( isSmallScreen ? 'img-xs': 'img-lg' );
            $item.css('backgroundImage','url("'+ imgSrc +'")')
            if(isSmallScreen){
                $item.html('<img src="'+ imgSrc +'" alt="">');
            }else{
                $item.empty();
            }
        })
    }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();
    var $ulWrap = $(".nav-tabs");
    var width = 30;
    console.log($ulWrap.children());
    $ulWrap.children().each(function (item,element) {
        width += $(element).width();
    })
    //判断当前UL宽度是否超出屏幕宽度，如果超出显示横向滚动条
    if( width > $(window).width()){
        $ulWrap.css('width',width).parent().css('overflow-x','scroll');
    }
    var $title = $('.news-title');
    $('#news .nav-pills a').on('click',function () {
        var $this = $(this);
        var $name =$this.data('title');
        $title.text($name);
    })
    var $carousel = $('.carousel ');//获取轮播图元素区域
    var startX ,endX;
    var offset = 50;
    $carousel.on('touchstart',function (e) {
        startX = e.originalEvent.changedTouches[0].clientX;
        console.log(e.originalEvent.changedTouches[0].clientX);
    })
    $carousel.on('touchmove',function (e) {
        endX = e.originalEvent.changedTouches[0].clientX;
    })
    $carousel.on('touchend',function (e) {
        console.log(endX);
        var distance = Math.abs(startX - endX);
        if(distance > offset){
            console.log(startX > endX ? '←':'→');
            $(this).carousel(startX > endX ? 'next':'prev');
        }
    })
})
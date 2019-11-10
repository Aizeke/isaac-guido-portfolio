(function ($) {
    $(function () {
        var header = $(".start-nav");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 15) {
                header.removeClass('start-nav').addClass('on-scroll-nav');
                header.removeClass('bg-transparent').addClass("bg-dark");
            } else {
                header.removeClass('on-scroll-nav').addClass('start-nav');
                header.removeClass('bg-dark').addClass("bg-transparent");
            }
        });
    });

})(jQuery);
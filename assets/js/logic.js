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

        $('#map-cover').on("click", (e) => {
            e.preventDefault();

            const cover = $('#map-cover');

            if ( cover.data("map-active") === "on" ){
                cover.addClass("active-map");
                $(".map-text-on").addClass("display-off");
                $(".map-text-off").removeClass("display-off");
                cover.data("map-active", "off");
            } else { 
                cover.removeClass("active-map");
                $(".map-text-off").addClass("display-off");
                $(".map-text-on").removeClass("display-off");
                cover.data("map-active", "on");
            }
        })
    });

})(jQuery);
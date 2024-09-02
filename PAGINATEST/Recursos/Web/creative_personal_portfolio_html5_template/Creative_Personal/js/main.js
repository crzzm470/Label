jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
    $('body').scrollspy({
        target: '.bs-example-js-navbar-scrollspy',
        offset: 65
    });


    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });


    /*--------------------------
       HOME PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /* -------------------------------------------------------
     PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
    $('.portfolio-menu li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*----------------------------
        PORTFOLIO MASONRY ACTIVE
    -----------------------------*/
    var $CreativePortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded === 'function') {
        imagesLoaded($CreativePortfolioMasonry, function () {
            setTimeout(function () {
                $CreativePortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };


    /* ------------------------------
     PORTFOLIO FILTERING
     -------------------------------- */
    $('.portfolio-menu li').on('click', function () {
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');

        $(".portfolio-masonry").isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });


    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    $('.testmonial-list').owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /*----------------------------
        PRICE TABLE ACTIVE
    -----------------------------*/
    $('.single-price').on('hover', function (e) {
        $('.single-price').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });


    /*------------------------------
        ABOUT VIDEO POPUP
    --------------------------------*/
    $('.video-play-button').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 320,
        preloader: false
    });


    /*---------------------------
        COUNTER UP TIMER
    -----------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);


    /*---------------------------
        ISOTOPE ACTIVE ON LOAD
    -----------------------------*/
    $(".portfolio-masonry").isotope({
        itemSelector: '.portfolio-item'
    });

});

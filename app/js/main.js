$(function () {


    $('.product__stars--small').rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "13px",
        normalFill: "#ccc"
    });

    $('.product__stars').rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "15px",
        normalFill: "#ccc"
    });


    $('.featured__slider').slick({
        prevArrow: '<button class="featured__slick-arrow featured__slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="featured__slick-arrow featured__slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.featured__slider-nav',
        // autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.feed__slider').slick({
        prevArrow: '<button class="feed__slick-arrow feed__slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="feed__slick-arrow feed__slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.feed__slider-nav',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.feedback__slider').slick({
        prevArrow: '<button class="feedback__slick-arrow feedback__slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="feedback__slick-arrow feedback__slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',

    });

    $('.filter__list').on('click', function () {
        $('.filter__list').addClass('active');
        $('.filter__grid').removeClass('active');
        $('.product').addClass('list')
    });

    $('.filter__grid').on('click', function () {
        $('.filter__grid').addClass('active');
        $('.filter__list').removeClass('active');
        $('.product').removeClass('list')
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        skin: "round",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
        // grid: true
    });

    try {
        var mixer = mixitup('.newest__inner-box');
    }
    catch {}

    try {
        var mixer2 = mixitup('.sort__content-box');
    }
    catch {}

    $('.header__mobile-menu').on('click', function () {
        $('.header__menu').slideToggle()
    })

});


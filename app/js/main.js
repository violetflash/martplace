$(function () {


    $('.product__stars--newest').rateYo({
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
        autoplay: true,
        autoplaySpeed: 3000,
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
        $('.filter__grid').removeClass('active')
    });

    $('.filter__grid').on('click', function () {
        $('.filter__grid').addClass('active');
        $('.filter__list').removeClass('active')
    });

    var mixer = mixitup('.newest__inner-box');


});


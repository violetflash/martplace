$(function () {

    // dropdown-menu
    $('.newest__filter').on('mouseover', function () {
        $('.newest__menu-box').css('visibility','visible');
    });
    $('.newest__menu-box').on('mouseleave', function () {
        $('.newest__menu-box').css('visibility', 'hidden' );

    });

    //dropdown-menu


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

    var mixer = mixitup('.newest__inner-box');


});


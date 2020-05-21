$(function () {

    $('.featured-stars').rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "15px",
        normalFill: "#ccc"
    });

    $('.product-stars').rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "13px",
        normalFill: "#ccc"
    });


    $('.featured__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/slider-left-arrow.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/slider-right-arrow.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
    })

});
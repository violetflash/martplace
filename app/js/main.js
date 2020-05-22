$(function () {

    var mixer = mixitup('.products__inner-box');


    $('button.products__filter-btn').click(function(){
        if ( $('.products__menu-box').css('visibility') == 'hidden' )
            $('.products__menu-box').css('visibility','visible');
        myDropDown = $(this).next('.products__menu-box');

        if( myDropDown.is(':visible') ) {
            $(this).removeClass('drop-down-open');
            myDropDown.hide();
        } else {
            myDropDown.fadeIn();
            $(this).addClass('drop-down-open');
        }

        return false;
    });

    $('html').click(function(e) {
        $('.products__menu-box').hide();
    });

    $('.products__menu-box').click(function(e){
        e.stopPropagation();
    });








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

jQuery(document).ready(function() {
    jQuery('.products__filter-btn').click(function() {
        jQuery('.products__menu-box').toggleClass('visible');
    });
});
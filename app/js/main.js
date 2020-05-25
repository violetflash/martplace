$(function () {

    // dropdown-menu
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
    //dropdown-menu


    $('.product__stars--w13').rateYo({
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
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    var mixer = mixitup('.products__inner-box');


});


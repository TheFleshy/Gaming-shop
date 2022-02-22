jQuery(document).ready(function ($) {

    $(".loader-wrapper").fadeOut();

    $("#search-btn").click(function (e) {
        e.preventDefault();

        $(".search-wrapper").fadeIn();
    });

    $("#close-search").click(function (e) {
        e.preventDefault();

        $(".search-wrapper").fadeOut();
    });

    $("#hamburger-btn").click(function () {
        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        } else {
            $("nav ul").slideDown();
        }

        $(this).toggleClass('opened');
    });







    $(window).scroll(function () {
        if($(window).scrollTop() > 200) {
            $("nav").addClass('fixed-nav');
        } else {
            $("nav").removeClass('fixed-nav');
        }
    });

});
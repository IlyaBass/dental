$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================
    // Burger menu
    $('.burger').click(function () {
        $(this).addClass('active');
        $('.nav__ul_mob').slideDown();
    });
    $('.nav__ul_mob-overlay').click(function () {
        $('.nav__ul_mob').slideUp();
        $('.burger').removeClass('active');
    });
    // /Burger menu

    $('.main__slider').slick({
        prevArrow: $('.main__left'),
        nextArrow: $('.main__right'),
        autoplay: true,
    });

    $('.services__slider').slick({
        slidesToShow: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 524,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ],
    });

    $('.team__slider').slick({
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });
});
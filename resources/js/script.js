$(document).ready(function () {

    /* Sticky Navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });

    /* Scroll to Element*/
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    })
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    });

    /* Animation on Scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse')
    }, {
        offset: '50%'
    })

    /* Navigation Toggle */
    $(".js--nav-icon").click(() => {
        const nav = $(".js--main-nav");
        nav.slideToggle(200); /* def uses display: !value + css slide drawer */
        const icon = $(".js--nav-icon ion-icon");
        console.log(icon[0].name);

        if (icon.attr("name") == "menu-outline") {
            icon.attr("name", "close-outline");
        } else {
            icon.attr("name", "menu-outline")
        }
    });
});

$(document).ready(function() {
    "use strict";

    $(window).scroll(function(){
        $('.eapps-link').remove();
    });

    $('.parallax-img').jarallax({
    });

    // SLICK SLIDER
    $(".pro-carousel").slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><img src="assets/images/icon-left.png" alt="left"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous"><img src="assets/images/icon-%20right.png" alt="right"></button>',
        pauseOnHover: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            }

        ]
    });
    // AOS initilaize
    AOS.init({
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

    });
});
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
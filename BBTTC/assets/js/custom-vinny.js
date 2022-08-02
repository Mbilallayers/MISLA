$(function () {
    if ($('.vinnyfollow').length) {
        setTimeout(function () {
            setupAnimations();
        }, 100);
        $(window).resize(function () {
            $('.vinny-animate').remove();
            setupAnimations();
        });
        var prevScroll = 0;
        $(window).scroll(function () {
            if ($('.features').length) {
                //Features widget
                animateFeaturesVinny($('.features.vinnyfollow .vinny-line'));
            }
            else if ($('.platforms-chart').length) {
                //Platforms chart widget
                animatePlatformsVinny($('.platforms-chart.vinnyfollow .vinny-line'), $(window).scrollTop() < prevScroll);
            }
            else if ($('.partner-box').length) {
                //Partners list
                animatePartnersVinny($('.partner-box:last-child .vinnyfollow .vinny-line:last-child'));
            }
            else {
                //General vinnyfollow animation
                animateToBottom($('.vinnyfollow').last().find('.vinny-line'));
            }
            prevScroll = $(window).scrollTop();
        });
    }
});
var animateToBottom = function (vinnyline) {
    checkAnimateBar();
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        var vinnyflow = vinnyline.find('.vinnyflow');
        var vinnyBottom = getVinnyBottom(vinnyline);
        var vinnyPosition = parseInt(vinnyflow.css('top').replace('px', '')) + vinnyflow.height();
        if (vinnyPosition < vinnyBottom) {
            var orig = vinnyPosition - vinnyflow.height();
            var top = vinnyBottom - vinnyflow.height();
            $('.vinnyflow').animate({ 'top': "+=" + (top - orig) + "px" }, 300);
            setTimeout(function () {
                $('.vinnyfollow').addClass('animate-bar');
            }, 300);
        }
    }
};
var animateFeaturesVinny = function (vinnyline) {
    if (vinnyline.length) {
        var vinnyflow = vinnyline.find('.vinnyflow');
        var vinnyBottom = getVinnyBottom(vinnyline);
        var vinnyPosition = parseInt(vinnyflow.css('top').replace('px', '')) + vinnyflow.height();
        var horizontalWidth = $('.features .row').width() / 2;
        if (vinnyPosition >= vinnyBottom) {
            var fraction = (vinnyPosition - vinnyBottom) / vinnyflow.height();
            var calc = Math.round(horizontalWidth * fraction);
            var barWidth = calc <= horizontalWidth ? calc : horizontalWidth;
            $('.vinny-horiz').css('width', barWidth);
            $('.vinny-horiz').css('left', "calc(50% - (" + barWidth / 2 + "px - 2px))");
            if (calc > horizontalWidth) {
                var maxHeight = parseInt($('.feature').css('margin-top').replace('px', '')) + 1;
                var legCalc = calc - barWidth;
                var height = legCalc <= maxHeight ? legCalc : maxHeight;
                $('.vinny-leg').css('height', height);
            }
            else {
                $('.vinny-leg').css('height', 0);
            }
        }
        else {
            $('.vinny-horiz').css('left', '50%');
            $('.vinny-horiz').css('width', 0);
            $('.vinny-leg').css('height', 0);
        }
    }
};
var animatePlatformsVinny = function (vinnyline, scrollUp) {
    if (vinnyline.length) {
        checkAnimateBar();
        var vinnyflow = vinnyline.find('.vinnyflow');
        var vinnyBottom = getVinnyBottom(vinnyline);
        var vinnyPosition = parseInt(vinnyflow.css('top').replace('px', ''));
        var horizontalWidth = $('.platforms').width() - 61 - 9;
        var legHeight = parseInt($('.platforms li').css('margin-top').replace('px', '')) + 2;
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            if (vinnyPosition < vinnyBottom) {
                var orig = vinnyPosition - vinnyflow.height();
                $('.vinnyflow').animate({ 'top': "+=" + (vinnyBottom - orig) + "px" }, 600);
                $('.vinny-horiz').css('transition-delay', '.4s');
                $('.vinny-horiz').css('left', "calc(50% - (" + horizontalWidth / 2 + "px - 3px))");
                $('.vinny-horiz').css('width', horizontalWidth + "px");
                $('.vinny-leg').css('transition-delay', '.6s');
                $('.vinny-leg').css('height', legHeight + "px");
                setTimeout(function () {
                    $('.vinnyfollow').addClass('animate-bar');
                }, 600);
            }
            else {
                $('.vinny-horiz').css('left', "calc(50% - (" + horizontalWidth / 2 + "px - 3px))");
                $('.vinny-horiz').css('width', horizontalWidth + "px");
                $('.vinny-leg').css('height', legHeight);
            }
        }
        else if ((vinnyPosition + vinnyflow.height()) >= vinnyBottom && !scrollUp) {
            var adjPosition = vinnyPosition + vinnyflow.height();
            var fraction = (adjPosition - vinnyBottom) / vinnyflow.height();
            var calc = Math.round(horizontalWidth * fraction);
            var barWidth = calc <= horizontalWidth ? calc : horizontalWidth;
            $('.vinny-horiz').css('width', barWidth + "px");
            $('.vinny-horiz').css('left', "calc(50% - (" + barWidth / 2 + "px - 2px))");
            if (calc > horizontalWidth) {
                var maxHeight = legHeight;
                var legCalc = calc - barWidth;
                var height = legCalc <= maxHeight ? legCalc : maxHeight;
                $('.vinny-leg').css('height', height);
            }
            else {
                $('.vinny-leg').css('height', 0);
            }
        }
        else {
            $('.vinny-horiz').css('left', '50%');
            $('.vinny-horiz').css('width', 0);
            $('.vinny-leg').css('height', 0);
        }
    }
};
var animatePartnersVinny = function (vinnyline) {
    if (vinnyline.length) {
        checkAnimateBar();
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            var vinnyflow = vinnyline.find('.vinnyflow');
            var vinnyBottom = getVinnyBottom(vinnyline);
            var vinnyPosition = parseInt(vinnyflow.css('top').replace('px', '')) + vinnyflow.height();
            if (vinnyPosition < vinnyBottom) {
                var orig = vinnyPosition - vinnyflow.height();
                var top = vinnyBottom - vinnyflow.height();
                $('.vinny-line:not(.line-horiz) .vinnyflow').animate({ 'top': "+=" + (top - orig) + "px" }, 300);
                $('.vinny-line.line-horiz .vinnyflow').animate({ 'left': '100%' }, 100);
                setTimeout(function () {
                    $('.vinnyfollow').addClass('animate-bar');
                }, 300);
            }
        }
    }
};
var getVinnyBottom = function (vinnyline) {
    var vinnycolor = vinnyline.find('.vinnycolor');
    return parseInt(vinnycolor.css('top').replace('px', '')) + vinnycolor.height();
};
var checkAnimateBar = function () {
    if ($('.animate-bar').length) {
        if ($('.platforms-chart').length) {
            $('.vinny-horiz').css('transition-delay', '.2s');
            $('.vinny-horiz').css('left', '50%');
            $('.vinny-horiz').css('width', 0);
            $('.vinny-leg').css('transition-delay', '0s');
            $('.vinny-leg').css('height', 0);
        }
        setTimeout(function () {
            $('.vinnyfollow').removeClass('animate-bar');
        }, 500);
    }
};
var setupAnimations = function () {
    if (!$('.vinny-animate').length) {
        if ($('.features').length) {
            var vinnyBottom = getVinnyBottom($('.features.vinnyfollow .vinny-line'));
            var horizontalWidth = $('.features .row').width() / 2;
            $('.features.vinnyfollow').append('<div class="vinny-animate"><div class="vinny-horiz"></div><div class="vinny-leg"></div><div class="vinny-leg"></div></div>');
            $('.vinny-horiz, .vinny-leg').css('top', vinnyBottom - 1 + "px");
            $($('.vinny-leg')[0]).css('left', "calc(50% - (" + horizontalWidth / 2 + "px + 1px))");
            $($('.vinny-leg')[1]).css('left', "calc(50% + (" + horizontalWidth / 2 + "px - 1px))");
        }
        else if ($('.platforms-chart').length) {
            var vinnyBottom = getVinnyBottom($('.platforms-chart.vinnyfollow .vinny-line'));
            $('.platforms-chart.vinnyfollow').append('<div class="vinny-animate"><div class="vinny-horiz"></div></div>');
            $('.platforms li').each(function (i, elem) {
                $('.vinny-animate').append("<div class=\"vinny-leg\" style=\"left: " + ($(elem).offset().left + ($(elem).width() / 2) - 1) + "px\"></div>");
            });
            $('.vinny-horiz, .vinny-leg').css('top', vinnyBottom - 2 + "px");
        }
    }
};

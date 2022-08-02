$(function () {
    $('.modal').on('show.bs.modal', function () {
        if ($('.solutions-banner').length > 0) {
            $('.solutions-banner').css({
                'padding-right': '15px'
            });
        }
    });
    $('.modal').on('hide.bs.modal', function () {
        if ($('.solutions-banner').length > 0) {
            $('.solutions-banner').css({
                'padding-right': 'inherit'
            });
        }
    });
    $(document).scroll(function () {
        checkScrollPosition();
    });
    function checkScrollPosition() {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }
    }
    checkScrollPosition();
    if (jQuery('body.page-template-pricing').length > 0) {
        jQuery('section.tabbed-content:gt(0)').hide();
        jQuery('section.solutions-banner a.media').click(function (e) {
            //history.pushState({ p: jQuery(this).attr('href') }, '', '');
            history.pushState('', '', '?p=' + jQuery(this).attr('href').substr(1));
            e.stopPropagation();
            switchPricingProducts();
            return false;
        });
        switchPricingProducts();
    }
    function switchPricingProducts() {
        var product = getUrlParameter('p');
        if (product) {
            jQuery('section.tabbed-content').hide();
            jQuery('section.solutions-banner a.media').removeClass('active');
            jQuery('section.solutions-banner a.media[href="#' + product + '"]').addClass('active');
            jQuery('section.tabbed-content#' + product).show();
        }
    }
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    ;
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
    setTimeout(function () {
        setAngle();
    }, 1);
    $(window).resize(function () {
        setTimeout(function () {
            setAngle();
        }, 1);
    });
});
var setAngle = function () {
    if ($('.solutions-content').length) {
        solutionsAngle();
    }
    else if ($('.partners-list').length) {
        partnersAngle();
    }
};
var calculateAngle = function (opposite, adjacent) {
    var oa = opposite / adjacent;
    var radian = Math.atan(oa);
    var degree = radian * (180 / Math.PI);
    var angle = (90 - degree).toFixed(1);
    return angle;
};
var solutionsAngle = function () {
    var solutions = $('.solutions-content');
    var container = solutions.find('.solution-box').first();
    if (!solutions.hasClass('bannerless')) {
        var o = (container.height() * .4);
        var a = container.find('.solution-wrapper').width() * .5;
        container.find('.vinny-line.line-2').css('transform', 'skewX(' + calculateAngle(o, a) + 'deg)');
    }
};
var partnersAngle = function () {
    var partners = $('.partners-list');
    var container = partners.find('.partner-box').first();
    var o = (container.height() * .4);
    var a = container.find('.container-semifluid').width() * .5;
    container.find('.vinny-line.line-2').css('transform', 'skewX(' + calculateAngle(o, a) + 'deg)');
    if (partners.hasClass('skew-vinnyline')) {
        var skewStartContainer = partners.find('.partner-box:nth-child(4)');
        var skewStartO = (skewStartContainer.height() * .4);
        var skewStartA = skewStartContainer.find('.container-semifluid').width() * .25;
        skewStartContainer.find('.vinny-line.line-2').css('transform', 'skewX(' + -calculateAngle(skewStartO, skewStartA) + 'deg)');
        var skewEndContainer = partners.find('.partner-box:nth-child(5)');
        skewEndContainer.find('.vinny-line:not(.line-2)').css('transform', 'skewX(' + -calculateAngle(skewStartO - 1, skewStartA) + 'deg)');
    }
};

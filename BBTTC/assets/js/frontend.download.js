frontend.download = {
    defaultValue: {

    },
    init: function () {
        if (jQuery('.mobile-download').length) {
            frontend.download.showDownloadPopup();
        }
    },

    showDownloadPopup: function () {
        if (!Cookies.get('download_pt_popup')) {

            if (window.jQBrowser.android || window.jQBrowser.kindle || window.jQBrowser.ipad || window.jQBrowser.iphone || window.jQBrowser.ipod || window.jQBrowser.mac || window.jQBrowser.win) {
                frontend.defaultValue = {
                    bodyPaddingTop: parseInt(jQuery('body').css('padding-top')),
                    bannerHeight: jQuery('.mobile-download').outerHeight()
                };

                var platform = '';

                if (window.jQBrowser.android) {
                    platform = 'android';
                } else if (window.jQBrowser.kindle) {
                    platform = 'amazon';
                } else if (window.jQBrowser.ipad || window.jQBrowser.iphone || window.jQBrowser.ipod) {
                    platform = 'ios';
                }

                if (platform != '') {

                    jQuery('.mobile-download .logo img').attr('src', jQuery('.mobile-download .data-mobile').data(platform + '-icon'));
                    jQuery('.mobile-download .logo img').attr('alt', jQuery('.mobile-download .data-mobile').data(platform + '-icon-alt'));
                    jQuery('.mobile-download .title a').attr('href', jQuery('.mobile-download .data-mobile').data(platform + '-url'));
                    jQuery('.mobile-download .title a').html(jQuery('.mobile-download .data-mobile').data(platform + '-title'));
                    jQuery('.mobile-download .description a').attr('href', jQuery('.mobile-download .data-mobile').data(platform + '-url'));
                    jQuery('.mobile-download .description a').html(jQuery('.mobile-download .data-mobile').data(platform + '-subtitle'));
                    jQuery('.mobile-download a.btn').attr('href', jQuery('.mobile-download .data-mobile').data(platform + '-url'));
                    jQuery('.mobile-download a.btn').html(jQuery('.mobile-download .data-mobile').data(platform + '-label'));

                    jQuery('.mobile-download').animate({
                        marginTop: '0px',
                    }, 1500);

                    jQuery('body').animate({
                        paddingTop: parseInt(frontend.defaultValue.bodyPaddingTop + frontend.defaultValue.bannerHeight) + 'px'
                    }, 1500);

                    jQuery('body > header').animate({
                        top: parseInt(frontend.defaultValue.bannerHeight) + 'px'
                    }, 1500);
                }
            }
        }
    },

    closeBanner: function () {
        jQuery('.mobile-download').animate({
            marginTop: parseInt(frontend.defaultValue.bannerHeight * -1) + 'px'
        }, 1500);

        jQuery('body').animate({
            paddingTop: parseInt(frontend.defaultValue.bodyPaddingTop) + 'px'
        }, 1500);

        jQuery('body > header').animate({
            top: '0px'
        }, 1500);

        Cookies.set('download_pt_popup', true, { expires: 14, path: '' });
    }
}

jQuery(document).ready(function () {
    frontend.download.init();
});
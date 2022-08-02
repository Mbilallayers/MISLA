frontend.pagination = {
    page: 1,
    totalPages: -1,

    load: function () {
        if (frontend.pagination.totalPages == -1 || frontend.pagination.page < frontend.pagination.totalPages) {
            frontend.pagination.page++;
            frontend.pagination.pull();
        }
    },

    pull: function () {

        jQuery('section.load-more-pagination div.load-more-pagination a').blur();

        var categoryId = '';

        if (jQuery('#category_id').length > 0) {
            categoryId = jQuery('#category_id').val();
        }

        var data = {
            action: 'load_more_news',
            page: frontend.pagination.page,
            category: categoryId
        };

        jQuery.post(ajaxurl, data, function (response) {
            var response = JSON.parse(response);
            frontend.pagination.totalPages = response.pages;

            if (frontend.pagination.totalPages == frontend.pagination.page || frontend.pagination.totalPages == 0) {
                frontend.pagination.disable();
            }

            frontend.pagination.parse(response.posts);
        });
    },

    disable: function () {
        jQuery('section.load-more-pagination div.load-more-pagination').css({
            opacity: .0,
            pointerEvents: 'none'
        });
    },

    parse: function (posts) {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            console.log(post);

            var column = jQuery('<div/>').addClass('col-xs-12').addClass('col-sm-6');
            var container = jQuery('<div/>').addClass('item-news');

            if (post.image) {
                var image = jQuery('<div/>').addClass('image').css({
                    backgroundImage: 'url(' + post.image + ')'
                });
                container.append(image);
            }

            var info = jQuery('<div/>').addClass('item-info');
            var header = jQuery('<header/>');
            var h3 = jQuery('<h3/>').addClass('title');
            var footer = jQuery('<footer/>');

            var headerLink = jQuery('<a/>').addClass('category').attr('title', post.category_label).attr('href', post.category_link).text(post.category_label);
            var h3Link = jQuery('<a/>').attr('title', post.title).attr('href', post.link).text(post.title);
            var date = jQuery('<div/>').addClass('date').text(post.date);
            var imgReadMore = jQuery('<img/>').attr('alt', 'Read More').attr('src', '/wp-content/themes/openvpn/assets/images/arrow.png');
            var linkDate = jQuery('<a/>').addClass('go-to').attr('href', post.link);

            linkDate.append(imgReadMore);
            date.append(linkDate);
            footer.append(date);

            h3.append(h3Link);

            header.append(headerLink);

            info.append(header).append(h3).append(footer);

            container.append(info);
            column.append(container);

            jQuery('section.news > .container > .row > .col-xs-12 > .row').append(column);
        }
    }
};
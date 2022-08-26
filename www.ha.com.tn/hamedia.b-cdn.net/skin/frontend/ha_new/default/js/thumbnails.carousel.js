(function(g, b) {
    var c = {
            center: !0,
            backgroundControl: !1
        },
        a = {
            $carouselContainer: b('.thumbnails-carousel').parent(),
            $thumbnailsLi: b('.thumbnails-carousel li'),
            $controls: b('.thumbnails-carousel').parent().find('.carousel-control')
        };

    function e() {
        a.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix'), a.$thumbnailsLi.first().addClass('active-thumbnail'), c.backgroundControl ? a.$controls.height(a.$carouselContainer.find('.carousel-inner').height()) : a.$carouselContainer.find('.carousel-control').addClass('controls-background-reset'), c.center && a.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>")
    }

    function f(c) {
        a.$thumbnailsLi.removeClass('active-thumbnail'), a.$thumbnailsLi.eq(b(c).index()).addClass('active-thumbnail')
    }

    function d() {
        a.$carouselContainer.on('slide.bs.carousel', function(a) {
            f(a.relatedTarget)
        }), a.$thumbnailsLi.click(function() {
            a.$carouselContainer.carousel(b(this).index())
        })
    }
    b.fn.thumbnailsCarousel = function(a) {
        return c = b.extend(c, a), e(), d(), this
    }
})(window, jQuery)
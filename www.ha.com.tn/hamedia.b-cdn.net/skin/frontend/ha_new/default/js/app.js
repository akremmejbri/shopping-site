var bp = {
        xsmall: 479,
        small: 599,
        medium: 770,
        large: 979,
        xlarge: 1199
    },
    PointerManager, $j, ProductMediaManager;
Varien.searchForm.prototype.initialize = function(a, b, c) {
    this.form = $(a), this.field = $(b), this.emptyText = c, this.validator = new Validation(this.form), Event.observe(this.form, 'submit', this.submit.bind(this)), Event.observe(this.field, 'focus', this.focus.bind(this)), Event.observe(this.field, 'blur', this.blur.bind(this)), this.blur()
}, Varien.searchForm.prototype.submit = function(a) {
    return !(!this.validator || !this.validator.validate()) || (Event.stop(a), !1)
}, PointerManager = {
    MOUSE_POINTER_TYPE: 'mouse',
    TOUCH_POINTER_TYPE: 'touch',
    POINTER_EVENT_TIMEOUT_MS: 500,
    standardTouch: !1,
    touchDetectionEvent: null,
    lastTouchType: null,
    pointerTimeout: null,
    pointerEventLock: !1,
    getPointerEventsSupported: function() {
        return this.standardTouch
    },
    getPointerEventsInputTypes: function() {
        return window.navigator.pointerEnabled ? {
            MOUSE: 'mouse',
            TOUCH: 'touch',
            PEN: 'pen'
        } : window.navigator.msPointerEnabled ? {
            MOUSE: 4,
            TOUCH: 2,
            PEN: 3
        } : {}
    },
    getPointer: function() {
        return Modernizr.ios ? this.TOUCH_POINTER_TYPE : this.lastTouchType ? this.lastTouchType : Modernizr.touch ? this.TOUCH_POINTER_TYPE : this.MOUSE_POINTER_TYPE
    },
    setPointerEventLock: function() {
        this.pointerEventLock = !0
    },
    clearPointerEventLock: function() {
        this.pointerEventLock = !1
    },
    setPointerEventLockTimeout: function() {
        var a = this;
        this.pointerTimeout && clearTimeout(this.pointerTimeout), this.setPointerEventLock(), this.pointerTimeout = setTimeout(function() {
            a.clearPointerEventLock()
        }, this.POINTER_EVENT_TIMEOUT_MS)
    },
    triggerMouseEvent: function(a) {
        if (this.lastTouchType == this.MOUSE_POINTER_TYPE) return;
        this.lastTouchType = this.MOUSE_POINTER_TYPE, $j(window).trigger('mouse-detected', a)
    },
    triggerTouchEvent: function(a) {
        if (this.lastTouchType == this.TOUCH_POINTER_TYPE) return;
        this.lastTouchType = this.TOUCH_POINTER_TYPE, $j(window).trigger('touch-detected', a)
    },
    initEnv: function() {
        window.navigator.pointerEnabled ? (this.standardTouch = !0, this.touchDetectionEvent = 'pointermove') : window.navigator.msPointerEnabled ? (this.standardTouch = !0, this.touchDetectionEvent = 'MSPointerMove') : this.touchDetectionEvent = 'touchstart'
    },
    wirePointerDetection: function() {
        var a = this;
        this.standardTouch ? $j(window).on(this.touchDetectionEvent, function(b) {
            switch (b.originalEvent.pointerType) {
                case a.getPointerEventsInputTypes().MOUSE:
                    a.triggerMouseEvent(b);
                    break;
                case a.getPointerEventsInputTypes().TOUCH:
                case a.getPointerEventsInputTypes().PEN:
                    a.triggerTouchEvent(b);
                    break
            }
        }) : ($j(window).on(this.touchDetectionEvent, function(b) {
            if (a.pointerEventLock) return;
            a.setPointerEventLockTimeout(), a.triggerTouchEvent(b)
        }), $j(document).on('mouseover', function(b) {
            if (a.pointerEventLock) return;
            a.setPointerEventLockTimeout(), a.triggerMouseEvent(b)
        }))
    },
    init: function() {
        this.initEnv(), this.wirePointerDetection()
    }
}, $j = jQuery.noConflict(), $j(document).ready(function() {
    var n = $j(window),
        m = $j(document),
        l = $j('body'),
        k = $j('#carousel img'),
        i = $j('.skip-content'),
        f = $j('.skip-link'),
        a, g, b, d, j, c, h;
    f.on('click', function(e) {
        var a, c, b, d;
        e.preventDefault(), a = $j(this), c = a.attr('href'), b = $j(c), d = b.hasClass('skip-active') ? 1 : 0, f.removeClass('skip-active'), i.removeClass('skip-active'), d ? a.removeClass('skip-active') : (a.addClass('skip-active'), b.addClass('skip-active'))
    }), $j('#header-cart').on('click', '.skip-link-close', function(b) {
        var a = $j(this).parents('.skip-content'),
            c = a.siblings('.skip-link');
        a.removeClass('skip-active'), c.removeClass('skip-active'), b.preventDefault()
    }), a = $j('#nav'), g = {
        TOUCH_SCROLL_THRESHOLD: 20,
        touchStartPosition: null,
        shouldCancelTouch: function() {
            if (!this.touchStartPosition) return !1;
            var a = $j(window).scrollTop() - this.touchStartPosition;
            return Math.abs(a) > this.TOUCH_SCROLL_THRESHOLD
        }
    }, b = 'touchend', window.navigator.pointerEnabled ? b = 'pointerdown' : window.navigator.msPointerEnabled && (b = 'MSPointerDown'), a.find('a.has-children.level0').on(b, function(c) {
        var b, d;
        if (g.shouldCancelTouch()) return;
        if (window.navigator.msPointerEnabled && c.originalEvent.pointerType == 'mouse' && Modernizr.mq("screen and (min-width:" + (bp.medium + 1) + "px)")) {
            $j(this).data('has-touch', !1);
            return
        }
        $j(this).data('has-touch', !0), b = $j(this).parent(), d = b.hasClass('menu-active'), a.find('li.level0').removeClass('menu-active'), a.find('.sub-menu-active').removeClass('sub-menu-active'), d || b.addClass('menu-active'), c.preventDefault()
    }).on('click', function(c) {
        var b = $j(this),
            d;
        if (b.data('has-touch')) {
            b.data('has-touch', !1), c.preventDefault();
            return
        }
        Modernizr.mq("screen and (max-width:" + bp.medium + "px)") && (b = $j(this).parent(), d = b.hasClass('menu-active'), a.find('li.level0').removeClass('menu-active'), a.find('.sub-menu-active').removeClass('sub-menu-active'), d || b.addClass('menu-active'), c.preventDefault())
    }).on('touchstart', function(a) {
        $j(this).data('has-touch'), g.touchStartPosition = $j(window).scrollTop()
    }), a.find('li.level1 a.has-children').on('click', function(b) {
        var a, c;
        b.preventDefault(), b.stopPropagation(), a = $j(this).parent(), c = a.hasClass('sub-menu-active') ? 1 : 0, Modernizr.mq("screen and (min-width:" + (bp.medium + 1) + "px)") && a.siblings('.sub-menu-active').removeClass('sub-menu-active').find('.sub-menu-active').removeClass('sub-menu-active'), c ? a.removeClass('sub-menu-active') : a.addClass('sub-menu-active')
    });

    function e() {
        var a = $j(window).width();
        $j('ul.level0').each(function() {
            var b = $j(this),
                c, d;
            b.addClass('position-test'), b.removeClass('spill'), c = b.outerWidth(), d = b.offset().left, b.removeClass('position-test'), d + c > a && b.addClass('spill')
        })
    }
    e(), $j(window).on('delayed-resize', e), enquire.register('(max-width: ' + bp.medium + 'px)', {
        match: function() {
            $j('.page-header-container .store-language-container').prepend($j('.form-language'))
        },
        unmatch: function() {
            $j('.header-language-container .store-language-container').prepend($j('.form-language'))
        }
    }), enquire.register('screen and (min-width: ' + (bp.medium + 1) + 'px)', {
        match: function() {
            $j('.menu-active').removeClass('menu-active'), $j('.sub-menu-active').removeClass('sub-menu-active'), $j('.skip-active').removeClass('skip-active')
        },
        unmatch: function() {
            $j('.menu-active').removeClass('menu-active'), $j('.sub-menu-active').removeClass('sub-menu-active'), $j('.skip-active').removeClass('skip-active')
        }
    }), d = $j('.media-list').find('a'), j = $j('.primary-image').find('img'), d.length && d.on('click', function(a) {
        a.preventDefault();
        var b = $j(this);
        j.attr('src', b.attr('href'))
    }), jQuery.fn.toggleSingle = function(a) {
        var b = $j.extend({
            destruct: !1
        }, a);
        return this.each(function() {
            b.destruct ? ($j(this).off('click'), $j(this).removeClass('active').next().removeClass('no-display')) : ($j(this).on('click', function() {
                $j(this).toggleClass('active').next().toggleClass('no-display')
            }), $j(this).next().addClass('no-display'))
        })
    }, $j('.toggle-content').each(function() {
        var a = jQuery(this),
            h = a.hasClass('tabs'),
            l = a.hasClass('accordion'),
            k = a.hasClass('open'),
            g = a.children('dl:first'),
            c = g.children('dt'),
            j = g.children('dd'),
            b = new Array(c, j),
            f, d, e;
        h && (f = jQuery('<ul class="toggle-tabs"></ul>'), c.each(function() {
            var b = jQuery(this),
                a = jQuery('<li></li>');
            a.html(b.html()), f.append(a)
        }), f.insertBefore(g), d = f.children(), b.push(d));
        for (e = 0; e < b.length; e++) b[e].filter(':last').addClass('last');

        function i(c, d) {
            var e = d.index(c),
                a;
            for (a = 0; a < b.length; a++) b[a].removeClass('current'), b[a].eq(e).addClass('current')
        }
        c.on('click', function(b) {
            jQuery(this).hasClass('current') && a.hasClass('accordion-open') ? a.removeClass('accordion-open') : a.addClass('accordion-open'), i(jQuery(this), c)
        }), h && (d.on('click', function(a) {
            i(jQuery(this), d)
        }), d.eq(0).trigger('click')), k && c.eq(0).trigger('click')
    }), $j('.col-left-first > .block').length && $j('.category-products').length && enquire.register('screen and (max-width: ' + bp.medium + 'px)', {
        match: function() {
            $j('.col-left-first').insertBefore($j('.category-products'))
        },
        unmatch: function() {
            $j('.col-left-first').insertBefore($j('.col-main'))
        }
    }), $j('.main-container.col3-layout').length > 0 && enquire.register('screen and (max-width: 1000px)', {
        match: function() {
            var a = $j('.col-right'),
                b = $j('.col-wrapper');
            a.appendTo(b)
        },
        unmatch: function() {
            var a = $j('.col-right'),
                b = $j('.main');
            a.appendTo(b)
        }
    }), enquire.register('(max-width: ' + bp.medium + 'px)', {
        setup: function() {
            this.toggleElements = $j('.col-left-first .block:not(.block-layered-nav) .block-title, .col-left-first .block-layered-nav .block-subtitle--filter, .sidebar:not(.col-left-first) .block .block-title')
        },
        match: function() {
            this.toggleElements.toggleSingle()
        },
        unmatch: function() {
            this.toggleElements.toggleSingle({
                destruct: !0
            })
        }
    }), $j('body.checkout-onepage-index').length && enquire.register('(max-width: ' + bp.large + 'px)', {
        match: function() {
            $j('#checkout-step-review').prepend($j('#checkout-progress-wrapper'))
        },
        unmatch: function() {
            $j('.col-right').prepend($j('#checkout-progress-wrapper'))
        }
    }), $j('body.checkout-cart-index').length && $j('input[name^="cart"]').focus(function() {
        $j(this).siblings('button').fadeIn()
    }), $j('.products-grid').length && (c = function() {
        var b = [],
            a = [];
        productGridElements = $j('.products-grid > li'), productGridElements.each(function(c) {
            $j(this).css('clear') != 'none' && c != 0 && (b.push(a), a = []), a.push(this), productGridElements.length == c + 1 && b.push(a)
        }), $j.each(b, function() {
            var a = 0;
            $j.each(this, function() {
                $j(this).find('.product-info').css('min-height', ''), elHeight = parseInt($j(this).find('.product-info').css('height')), elHeight > a && (a = elHeight)
            }), $j.each(this, function() {
                $j(this).find('.product-info').css('minHeight', a)
            })
        })
    }, c(), $j(window).on('delayed-resize', function(a, b) {
        c()
    })), $j(window).resize(function(a) {
        clearTimeout(h), h = setTimeout(function() {
            $j(window).trigger('delayed-resize', a)
        }, 250)
    })
}), ProductMediaManager = {
    IMAGE_ZOOM_THRESHOLD: 20,
    zoomEnabled: Modernizr.mq("screen and (min-width:768px)"),
    imageWrapper: null,
    allImgs: null,
    destroyZoom: function() {
        $j('.zoomContainer').remove(), $j('.product-image-gallery .gallery-image').removeData('elevateZoom')
    },
    createZoom: function(a) {
        var b, c;
        if (ProductMediaManager.destroyZoom(), !ProductMediaManager.zoomEnabled) return;
        if (a.length <= 0) return;
        if (a[0].naturalWidth && a[0].naturalHeight) {
            if (b = a[0].naturalWidth - a.width() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD, c = a[0].naturalHeight - a.height() - ProductMediaManager.IMAGE_ZOOM_THRESHOLD, b < 0 && c < 0) {
                a.parents('.product-image').removeClass('zoom-available');
                return
            }
            a.parents('.product-image').addClass('zoom-available')
        }
        a.elevateZoom()
    },
    imageIndex: function(a) {
        var b = 0,
            c;
        return a = $j(a), c = a.attr("src").substring(a.attr("src").lastIndexOf('/') + 1), ProductMediaManager.allImgs.each(function(a) {
            var d = $j(this).attr("src").substring($j(this).attr("src").lastIndexOf('/') + 1);
            throw d == c ? (b = a, $break) : $continue
        }), b
    },
    swapImage: function(a) {
        var c = ProductMediaManager.imageIndex(a),
            b;
        return a = $j(a), $j("#carousel").trigger("slideTo", c), !1;
        a.addClass('gallery-image'), ProductMediaManager.destroyZoom(), b = $j('.product-image-gallery'), a[0].complete ? (b.find('.gallery-image').removeClass('visible'), b.append(a), a.addClass('visible'), ProductMediaManager.createZoom(a)) : (b.addClass('loading'), b.append(a), imagesLoaded(a, function() {
            b.removeClass('loading'), b.find('.gallery-image').removeClass('visible'), a.addClass('visible'), ProductMediaManager.createZoom(a)
        }))
    },
    wireThumbnails: function() {
        $j('.product-image-thumbs .thumb-link').click(function(c) {
            var a, b;
            c.preventDefault(), a = $j(this), b = $j('#image-' + a.data('image-index')), ProductMediaManager.swapImage(b)
        })
    },
    initZoom: function() {
        ProductMediaManager.createZoom($j(".no-touch .gallery-image.visible"))
    },
    init: function() {
        ProductMediaManager.imageWrapper = $j('.product-img-box'), ProductMediaManager.allImgs = $j('#carousel img'), enquire.register("screen and (min-width:768px)", {
            match: function() {
                ProductMediaManager.zoomEnabled = !0, ProductMediaManager.initZoom()
            },
            unmatch: function() {
                ProductMediaManager.destroyZoom(), ProductMediaManager.zoomEnabled = !1
            }
        }), $j(window).on('delayed-resize', function(a, b) {
            ProductMediaManager.destroyZoom(), ProductMediaManager.initZoom()
        }), ProductMediaManager.wireThumbnails(), $j(document).trigger('product-media-loaded', ProductMediaManager)
    }
}, $j(document).ready(function() {
    ProductMediaManager.init()
})
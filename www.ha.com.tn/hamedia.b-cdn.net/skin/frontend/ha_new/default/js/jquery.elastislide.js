(function(a, b, i) {
    'use strict';
    var f = a.event,
        c = f.special.debouncedresize = {
            setup: function() {
                a(this).on("resize", c.handler)
            },
            teardown: function() {
                a(this).off("resize", c.handler)
            },
            handler: function(b, d) {
                var g = this,
                    h = arguments,
                    a = function() {
                        b.type = "debouncedresize", f.dispatch.apply(g, h)
                    };
                e && clearTimeout(e), d ? a() : e = setTimeout(a, c.threshold)
            },
            threshold: 150
        },
        g = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        e, h, d, j;
    a.fn.imagesLoaded = function(d) {
        var e = this,
            b = a.isFunction(a.Deferred) ? a.Deferred() : 0,
            m = a.isFunction(b.notify),
            c = e.find('img').add(e.filter('img')),
            j = [],
            k = [],
            f = [];
        a.isPlainObject(d) && a.each(d, function(a, c) {
            a === 'callback' ? d = c : b && b[a](c)
        });

        function l() {
            var g = a(k),
                h = a(f);
            b && (f.length ? b.reject(c, g, h) : b.resolve(c)), a.isFunction(d) && d.call(e, c, g, h)
        }

        function h(d, e) {
            if (d.src === g || a.inArray(d, j) !== -1) return;
            j.push(d), e ? f.push(d) : k.push(d), a.data(d, 'imagesLoaded', {
                isBroken: e,
                src: d.src
            }), m && b.notifyWith(a(d), [e, c, a(k), a(f)]), c.length === j.length && (setTimeout(l), c.unbind('.imagesLoaded'))
        }
        return c.length ? c.bind('load.imagesLoaded error.imagesLoaded', function(a) {
            h(a.target, a.type === 'error')
        }).each(function(e, b) {
            var d = b.src,
                c = a.data(b, 'imagesLoaded');
            if (c && c.src === d) {
                h(b, c.isBroken);
                return
            }
            if (b.complete && b.naturalWidth !== i) {
                h(b, b.naturalWidth === 0 || b.naturalHeight === 0);
                return
            }(b.readyState || b.complete) && (b.src = g, b.src = d)
        }) : l(), b ? b.promise(e) : e
    }, h = a(b), d = b.Modernizr, a.Elastislide = function(b, c) {
        this.$el = a(c), this._init(b)
    }, a.Elastislide.defaults = {
        orientation: 'horizontal',
        speed: 500,
        easing: 'ease-in-out',
        minItems: 3,
        start: 0,
        onClick: function(a, b, c) {
            return !1
        },
        onReady: function() {
            return !1
        },
        onBeforeSlide: function() {
            return !1
        },
        onAfterSlide: function() {
            return !1
        }
    }, a.Elastislide.prototype = {
        _init: function(c) {
            this.options = a.extend(!0, {}, a.Elastislide.defaults, c);
            var b = this,
                e = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    msTransition: 'MSTransitionEnd',
                    transition: 'transitionend'
                };
            if (this.transEndEventName = e[d.prefixed('transition')], this.support = d.csstransitions && d.csstransforms, this.current = this.options.start, this.isSliding = !1, this.$items = this.$el.children('li'), this.itemsCount = this.$items.length, this.itemsCount === 0) return !1;
            this._validate(), this.$items.detach(), this.$el.empty(), this.$el.append(this.$items), this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>'), this.hasTransition = !1, this.hasTransitionTimeout = setTimeout(function() {
                b._addTransition()
            }, 100), this.$el.imagesLoaded(function() {
                b.$el.show(), b._layout(), b._configure(), b.hasTransition ? (b._removeTransition(), b._slideToItem(b.current), b.$el.on(b.transEndEventName, function() {
                    b.$el.off(b.transEndEventName), b._setWrapperSize(), b._addTransition(), b._initEvents()
                })) : (clearTimeout(b.hasTransitionTimeout), b._setWrapperSize(), b._initEvents(), b._slideToItem(b.current), setTimeout(function() {
                    b._addTransition()
                }, 25)), b.options.onReady()
            })
        },
        _validate: function() {
            this.options.speed < 0 && (this.options.speed = 500), (this.options.minItems < 1 || this.options.minItems > this.itemsCount) && (this.options.minItems = 1), (this.options.start < 0 || this.options.start > this.itemsCount - 1) && (this.options.start = 0), this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' && (this.options.orientation = 'horizontal')
        },
        _layout: function() {
            this.$el.wrap('<div class="elastislide-carousel"></div>'), this.$carousel = this.$el.parent(), this.$wrapper = this.$carousel.parent().removeClass('elastislide-loading');
            var a = this.$items.find('img:first');
            this.imgSize = {
                width: a.outerWidth(!0),
                height: a.outerHeight(!0)
            }, this._setItemsSize(), this.options.orientation === 'horizontal' ? this.$el.css('max-height', this.imgSize.height) : this.$el.css('height', this.options.minItems * this.imgSize.height), this._addControls()
        },
        _addTransition: function() {
            this.support && this.$el.css('transition', 'all ' + this.options.speed + 'ms ' + this.options.easing), this.hasTransition = !0
        },
        _removeTransition: function() {
            this.support && this.$el.css('transition', 'all 0s'), this.hasTransition = !1
        },
        _addControls: function() {
            var b = this;
            this.$navigation = a('<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>').appendTo(this.$wrapper), this.$navPrev = this.$navigation.find('span.elastislide-prev').on('mousedown.elastislide', function(a) {
                return b._slide('prev'), !1
            }), this.$navNext = this.$navigation.find('span.elastislide-next').on('mousedown.elastislide', function(a) {
                return b._slide('next'), !1
            })
        },
        _setItemsSize: function() {
            var a = this.options.orientation === 'horizontal' ? Math.floor(this.$carousel.width() / this.options.minItems) * 100 / this.$carousel.width() : 100;
            this.$items.css({
                width: a + '%',
                'max-width': this.imgSize.width,
                'max-height': this.imgSize.height
            }), this.options.orientation === 'vertical' && this.$wrapper.css('max-width', this.imgSize.width + parseInt(this.$wrapper.css('padding-left')) + parseInt(this.$wrapper.css('padding-right')))
        },
        _setWrapperSize: function() {
            this.options.orientation === 'vertical' && this.$wrapper.css({
                height: this.options.minItems * this.imgSize.height + parseInt(this.$wrapper.css('padding-top')) + parseInt(this.$wrapper.css('padding-bottom'))
            })
        },
        _configure: function() {
            this.fitCount = this.options.orientation === 'horizontal' ? this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor(this.$carousel.width() / this.imgSize.width) : this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor(this.$carousel.height() / this.imgSize.height)
        },
        _initEvents: function() {
            var b = this;
            h.on('debouncedresize.elastislide', function() {
                b._setItemsSize(), b._configure(), b._slideToItem(b.current)
            }), this.$el.on(this.transEndEventName, function() {
                b._onEndTransition()
            }), this.options.orientation === 'horizontal' ? this.$el.on({
                swipeleft: function() {
                    b._slide('next')
                },
                swiperight: function() {
                    b._slide('prev')
                }
            }) : this.$el.on({
                swipeup: function() {
                    b._slide('next')
                },
                swipedown: function() {
                    b._slide('prev')
                }
            }), this.$el.on('click.elastislide', 'li', function(d) {
                var c = a(this);
                b.options.onClick(c, c.index(), d)
            })
        },
        _destroy: function(a) {
            this.$el.off(this.transEndEventName).off('swipeleft swiperight swipeup swipedown .elastislide'), h.off('.elastislide'), this.$el.css({
                'max-height': 'none',
                transition: 'none'
            }).unwrap(this.$carousel).unwrap(this.$wrapper), this.$items.css({
                width: 'auto',
                'max-width': 'none',
                'max-height': 'none'
            }), this.$navigation.remove(), this.$wrapper.remove(), a && a.call()
        },
        _toggleControls: function(a, b) {
            b ? a === 'next' ? this.$navNext.show() : this.$navPrev.show() : a === 'next' ? this.$navNext.hide() : this.$navPrev.hide()
        },
        _slide: function(g, e) {
            var k, d, j, f, c, b, h, l;
            if (this.isSliding) return !1;
            if (this.options.onBeforeSlide(), this.isSliding = !0, k = this, d = this.translation || 0, j = this.options.orientation === 'horizontal' ? this.$items.outerWidth(!0) : this.$items.outerHeight(!0), f = this.itemsCount * j, c = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height(), e === i) {
                if (b = this.fitCount * j, b < 0) return !1;
                g === 'next' && f - (Math.abs(d) + b) < c ? (b = f - (Math.abs(d) + c), this._toggleControls('next', !1), this._toggleControls('prev', !0)) : g === 'prev' && Math.abs(d) - b < 0 ? (b = Math.abs(d), this._toggleControls('next', !0), this._toggleControls('prev', !1)) : (h = g === 'next' ? Math.abs(d) + Math.abs(b) : Math.abs(d) - Math.abs(b), h > 0 ? this._toggleControls('prev', !0) : this._toggleControls('prev', !1), h < f - c ? this._toggleControls('next', !0) : this._toggleControls('next', !1)), e = g === 'next' ? d - b : d + b
            } else b = Math.abs(e), Math.max(f, c) - b < c && (e = -(Math.max(f, c) - c)), b > 0 ? this._toggleControls('prev', !0) : this._toggleControls('prev', !1), Math.max(f, c) - c > b ? this._toggleControls('next', !0) : this._toggleControls('next', !1);
            if (this.translation = e, d === e) return this._onEndTransition(), !1;
            this.support ? this.options.orientation === 'horizontal' ? this.$el.css('transform', 'translateX(' + e + 'px)') : this.$el.css('transform', 'translateY(' + e + 'px)') : (a.fn.applyStyle = this.hasTransition ? a.fn.animate : a.fn.css, l = this.options.orientation === 'horizontal' ? {
                left: e
            } : {
                top: e
            }, this.$el.stop().applyStyle(l, a.extend(!0, [], {
                duration: this.options.speed,
                complete: function() {
                    k._onEndTransition()
                }
            }))), this.hasTransition || this._onEndTransition()
        },
        _onEndTransition: function() {
            this.isSliding = !1, this.options.onAfterSlide()
        },
        _slideTo: function(a) {
            var a = a || this.current,
                b = Math.abs(this.translation) || 0,
                c = this.options.orientation === 'horizontal' ? this.$items.outerWidth(!0) : this.$items.outerHeight(!0),
                e = b + this.$carousel.width(),
                d = Math.abs(a * c);
            (d + c > e || d < b) && this._slideToItem(a)
        },
        _slideToItem: function(a) {
            var b = this.options.orientation === 'horizontal' ? a * this.$items.outerWidth(!0) : a * this.$items.outerHeight(!0);
            this._slide('', -b)
        },
        add: function(a) {
            var b = this,
                c = this.current,
                d = this.$items.eq(this.current);
            this.$items = this.$el.children('li'), this.itemsCount = this.$items.length, this.current = d.index(), this._setItemsSize(), this._configure(), this._removeTransition(), c < this.current ? this._slideToItem(this.current) : this._slide('next', this.translation), setTimeout(function() {
                b._addTransition()
            }, 25), a && a.call()
        },
        setCurrent: function(b, a) {
            this.current = b, this._slideTo(), a && a.call()
        },
        next: function() {
            self._slide('next')
        },
        previous: function() {
            self._slide('prev')
        },
        slideStart: function() {
            this._slideTo(0)
        },
        slideEnd: function() {
            this._slideTo(this.itemsCount - 1)
        },
        destroy: function(a) {
            this._destroy(a)
        }
    }, j = function(a) {
        b.console && b.console.error(a)
    }, a.fn.elastislide = function(c) {
        var b = a.data(this, 'elastislide'),
            d;
        return typeof c == 'string' ? (d = Array.prototype.slice.call(arguments, 1), this.each(function() {
            if (!b) {
                j("cannot call methods on elastislide prior to initialization; attempted to call method '" + c + "'");
                return
            }
            if (!a.isFunction(b[c]) || c.charAt(0) === "_") {
                j("no such method '" + c + "' for elastislide self");
                return
            }
            b[c].apply(b, d)
        })) : this.each(function() {
            b ? b._init() : b = a.data(this, 'elastislide', new a.Elastislide(c, this))
        }), b
    }
})(jQuery, window)
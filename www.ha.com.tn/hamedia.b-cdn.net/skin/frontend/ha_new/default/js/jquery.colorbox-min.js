/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(b, m, x) {
    function f(f, c, d) {
        var a = m.createElement(f);
        return c && (a.id = e + c), d && (a.style.cssText = d), b(a)
    }

    function W() {
        return x.innerHeight ? x.innerHeight : b(x).height()
    }

    function O(c, a) {
        a !== Object(a) && (a = {}), this.cache = {}, this.el = c, this.value = function(c) {
            var d;
            return void 0 === this.cache[c] && (d = b(this.el).attr("data-cbox-" + c), void 0 !== d ? this.cache[c] = d : void 0 !== a[c] ? this.cache[c] = a[c] : void 0 !== Z[c] && (this.cache[c] = Z[c])), this.cache[c]
        }, this.get = function(c) {
            var a = this.value(c);
            return b.isFunction(a) ? a.call(this.el, this) : a
        }
    }

    function N(c) {
        var b = j.length,
            a = (l + c) % b;
        return 0 > a ? b + a : a
    }

    function k(a, b) {
        return Math.round((/%/.test(a) ? ("x" === b ? w.width() : W()) / 100 : 1) * parseInt(a, 10))
    }

    function af(a, b) {
        return a.get("photo") || a.get("photoRegex").test(b)
    }

    function ae(a, b) {
        return a.get("retinaUrl") && x.devicePixelRatio > 1 ? b.replace(a.get("photoRegex"), a.get("retinaSuffix")) : b
    }

    function ag(a) {
        "contains" in c[0] && !c[0].contains(a.target) && a.target !== s[0] && (a.stopPropagation(), c.focus())
    }

    function F(a) {
        F.str !== a && (c.add(s).removeClass(F.str).addClass(a), F.str = a)
    }

    function ah(c) {
        l = 0, c && c !== !1 && "nofollow" !== c ? (j = b("." + A).filter(function() {
            var a = b.data(this, o),
                d = new O(this, a);
            return d.get("rel") === c
        }), l = j.index(a.el), -1 === l && (j = j.add(a.el), l = j.length - 1)) : j = b(a.el)
    }

    function z(a) {
        b(m).trigger(a), p.triggerHandler(a)
    }

    function L(y) {
        var e, j, l, w, x, d;
        C || (e = b(y).data(o), a = new O(y, e), ah(a.get("rel")), !u && (u = G = !0, F(a.get("className")), c.css({
            visibility: "hidden",
            display: "block",
            opacity: ""
        }), i = f(h, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), n.css({
            width: "",
            height: ""
        }).append(i), q = _.height() + X.height() + n.outerHeight(!0) - n.height(), r = V.width() + U.width() + n.outerWidth(!0) - n.width(), t = i.outerHeight(!0), v = i.outerWidth(!0), j = k(a.get("initialWidth"), "x"), l = k(a.get("initialHeight"), "y"), w = a.get("maxWidth"), x = a.get("maxHeight"), a.w = Math.max((w !== !1 ? Math.min(j, k(w, "x")) : j) - v - r, 0), a.h = Math.max((x !== !1 ? Math.min(l, k(x, "y")) : l) - t - q, 0), i.css({
            width: "",
            height: a.h
        }), g.position(), z(ai), a.get("onOpen"), R.add(T).hide(), c.focus(), a.get("trapFocus") && m.addEventListener && (m.addEventListener("focus", ag, !0), p.one($, function() {
            m.removeEventListener("focus", ag, !0)
        })), a.get("returnFocus") && p.one($, function() {
            b(a.el).focus()
        })), d = parseFloat(a.get("opacity")), s.css({
            opacity: d === d ? d : "",
            cursor: a.get("overlayClose") ? "pointer" : "",
            visibility: "visible"
        }).show(), a.get("closeButton") ? K.html(a.get("close")).appendTo(n) : K.appendTo("<div/>"), aj())
    }

    function ad() {
        c || (Y = !1, w = b(x), c = f(h).attr({
            id: o,
            class: b.support.opacity === !1 ? e + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), s = f(h, "Overlay").hide(), I = b([f(h, "LoadingOverlay")[0], f(h, "LoadingGraphic")[0]]), y = f(h, "Wrapper"), n = f(h, "Content").append(T = f(h, "Title"), S = f(h, "Current"), H = b('<button type="button"/>').attr({
            id: e + "Previous"
        }), E = b('<button type="button"/>').attr({
            id: e + "Next"
        }), B = f("button", "Slideshow"), I), K = b('<button type="button"/>').attr({
            id: e + "Close"
        }), y.append(f(h).append(f(h, "TopLeft"), _ = f(h, "TopCenter"), f(h, "TopRight")), f(h, !1, "clear:left").append(V = f(h, "MiddleLeft"), n, U = f(h, "MiddleRight")), f(h, !1, "clear:left").append(f(h, "BottomLeft"), X = f(h, "BottomCenter"), f(h, "BottomRight"))).find("div div").css({
            float: "left"
        }), D = f(h, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), R = E.add(H).add(S).add(B)), m.body && !c.parent().length && b(m.body).append(s, c.append(y, D))
    }

    function al() {
        function d(a) {
            a.which > 1 || a.shiftKey || a.altKey || a.metaKey || a.ctrlKey || (a.preventDefault(), L(this))
        }
        return !!c && (Y || (Y = !0, E.click(function() {
            g.next()
        }), H.click(function() {
            g.prev()
        }), K.click(function() {
            g.close()
        }), s.click(function() {
            a.get("overlayClose") && g.close()
        }), b(m).bind("keydown." + e, function(b) {
            var c = b.keyCode;
            u && a.get("escKey") && 27 === c && (b.preventDefault(), g.close()), u && a.get("arrowKey") && j[1] && !b.altKey && (37 === c ? (b.preventDefault(), H.click()) : 39 === c && (b.preventDefault(), E.click()))
        }), b.isFunction(b.fn.on) ? b(m).on("click." + e, "." + A, d) : b("." + A).live("click." + e, d)), !0)
    }

    function aj() {
        var c, m, o, i = g.prep,
            s = ++Q,
            n;
        G = !0, d = !1, z(M), z(J), a.get("onLoad"), a.h = a.get("height") ? k(a.get("height"), "y") - t - q : a.get("innerHeight") && k(a.get("innerHeight"), "y"), a.w = a.get("width") ? k(a.get("width"), "x") - v - r : a.get("innerWidth") && k(a.get("innerWidth"), "x"), a.mw = a.w, a.mh = a.h, a.get("maxWidth") && (a.mw = k(a.get("maxWidth"), "x") - v - r, a.mw = a.w && a.w < a.mw ? a.w : a.mw), a.get("maxHeight") && (a.mh = k(a.get("maxHeight"), "y") - t - q, a.mh = a.h && a.h < a.mh ? a.h : a.mh), c = a.get("href"), ac = setTimeout(function() {
            I.show()
        }, 100), a.get("inline") ? (n = b(c), o = b("<div>").hide().insertBefore(n), p.one(M, function() {
            o.replaceWith(n)
        }), i(n)) : a.get("iframe") ? i(" ") : a.get("html") ? i(a.get("html")) : af(a, c) ? (c = ae(a, c), d = a.get("createImg"), b(d).addClass(e + "Photo").bind("error." + e, function() {
            i(f(h, "Error").html(a.get("imgError")))
        }).one("load", function() {
            s === Q && setTimeout(function() {
                var c;
                a.get("retinaImage") && x.devicePixelRatio > 1 && (d.height = d.height / x.devicePixelRatio, d.width = d.width / x.devicePixelRatio), a.get("scalePhotos") && (m = function() {
                    d.height -= d.height * c, d.width -= d.width * c
                }, a.mw && d.width > a.mw && (c = (d.width - a.mw) / d.width, m()), a.mh && d.height > a.mh && (c = (d.height - a.mh) / d.height, m())), a.h && (d.style.marginTop = Math.max(a.mh - d.height, 0) / 2 + "px"), j[1] && (a.get("loop") || j[l + 1]) && (d.style.cursor = "pointer", b(d).bind("click." + e, function() {
                    g.next()
                })), d.style.width = d.width + "px", d.style.height = d.height + "px", i(d)
            }, 1)
        }), d.src = c) : c && D.load(c, a.get("data"), function(d, c) {
            s === Q && i("error" === c ? f(h, "Error").html(a.get("xhrError")) : b(this).contents())
        })
    }
    var s, c, y, n, _, V, U, X, j, w, i, D, I, T, S, B, E, H, K, R, a, q, r, t, v, l, d, u, G, C, ac, g, Y, Z = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return b(this).attr("href")
            },
            title: function() {
                return this.title
            },
            createImg: function() {
                var a = new Image,
                    c = b(this).data("cbox-img-attrs");
                return "object" == typeof c && b.each(c, function(b, c) {
                    a[b] = c
                }), a
            },
            createIframe: function() {
                var a = m.createElement("iframe"),
                    c = b(this).data("cbox-iframe-attrs");
                return "object" == typeof c && b.each(c, function(b, c) {
                    a[b] = c
                }), "frameBorder" in a && (a.frameBorder = 0), "allowTransparency" in a && (a.allowTransparency = "true"), a.name = (new Date).getTime(), a.allowFullscreen = !0, a
            }
        },
        o = "colorbox",
        e = "cbox",
        A = e + "Element",
        ai = e + "_open",
        J = e + "_load",
        P = e + "_complete",
        aa = e + "_cleanup",
        $ = e + "_closed",
        M = e + "_purge",
        p = b("<a/>"),
        h = "div",
        Q = 0,
        ab = {},
        ak = function() {
            function b() {
                clearTimeout(n)
            }

            function k() {
                (a.get("loop") || j[l + 1]) && (b(), n = setTimeout(g.next, a.get("slideshowSpeed")))
            }

            function o() {
                B.html(a.get("slideshowStop")).unbind(f).one(f, m), p.bind(P, k).bind(J, b), c.removeClass(d + "off").addClass(d + "on")
            }

            function m() {
                b(), p.unbind(P, k).unbind(J, b), B.html(a.get("slideshowStart")).unbind(f).one(f, function() {
                    g.next(), o()
                }), c.removeClass(d + "on").addClass(d + "off")
            }

            function h() {
                i = !1, B.hide(), b(), p.unbind(P, k).unbind(J, b), c.removeClass(d + "off " + d + "on")
            }
            var i, n, d = e + "Slideshow_",
                f = "click." + e;
            return function() {
                i ? a.get("slideshow") || (p.unbind(aa, h), h()) : a.get("slideshow") && j[1] && (i = !0, p.one(aa, h), a.get("slideshowAuto") ? o() : m(), B.show())
            }
        }();
    b[o] || (b(ad), g = b.fn[o] = b[o] = function(c, d) {
        var e, a = this;
        return c = c || {}, b.isFunction(a) && (a = b("<a/>"), c.open = !0), a[0] ? (ad(), al() && (d && (c.onComplete = d), a.each(function() {
            var a = b.data(this, o) || {};
            b.data(this, o, b.extend(a, c))
        }).addClass(A), e = new O(a[0], c), e.get("open") && L(a[0])), a) : a
    }, g.position = function(f, p) {
        var d, j, l, m, i, h, o;

        function s() {
            _[0].style.width = X[0].style.width = n[0].style.width = parseInt(c[0].style.width, 10) - r + "px", n[0].style.height = V[0].style.height = U[0].style.height = parseInt(c[0].style.height, 10) - q + "px"
        }
        m = 0, i = 0, h = c.offset(), (w.unbind("resize." + e), c.css({
            top: -9e4,
            left: -9e4
        }), j = w.scrollTop(), l = w.scrollLeft(), a.get("fixed") ? (h.top -= j, h.left -= l, c.css({
            position: "fixed"
        })) : (m = j, i = l, c.css({
            position: "absolute"
        })), i += a.get("right") !== !1 ? Math.max(w.width() - a.w - v - r - k(a.get("right"), "x"), 0) : a.get("left") !== !1 ? k(a.get("left"), "x") : Math.round(Math.max(w.width() - a.w - v - r, 0) / 2), m += a.get("bottom") !== !1 ? Math.max(W() - a.h - t - q - k(a.get("bottom"), "y"), 0) : a.get("top") !== !1 ? k(a.get("top"), "y") : Math.round(Math.max(W() - a.h - t - q, 0) / 2), c.css({
            top: h.top,
            left: h.left,
            visibility: "visible"
        }), y[0].style.width = y[0].style.height = "9999px", d = {
            width: a.w + v + r,
            height: a.h + t + q,
            top: m,
            left: i
        }, f) && (o = 0, b.each(d, function(a) {
            return d[a] !== ab[a] ? (o = f, void 0) : void 0
        }), f = o), ab = d, f || c.css(d), c.dequeue().animate(d, {
            duration: f || 0,
            complete: function() {
                s(), G = !1, y[0].style.width = a.w + v + r + "px", y[0].style.height = a.h + t + q + "px", a.get("reposition") && setTimeout(function() {
                    w.bind("resize." + e, g.position)
                }, 1), b.isFunction(p) && p()
            },
            step: s
        })
    }, g.resize = function(b) {
        var c;
        u && (b = b || {}, b.width && (a.w = k(b.width, "x") - v - r), b.innerWidth && (a.w = k(b.innerWidth, "x")), i.css({
            width: a.w
        }), b.height && (a.h = k(b.height, "y") - t - q), b.innerHeight && (a.h = k(b.innerHeight, "y")), b.innerHeight || b.height || (c = i.scrollTop(), i.css({
            height: "auto"
        }), a.h = i.height()), i.css({
            height: a.h
        }), c && i.scrollTop(c), g.position("none" === a.get("transition") ? 0 : a.get("speed")))
    }, g.prep = function(r) {
        function s() {
            return a.w = a.w || i.width(), a.w = a.mw && a.mw < a.w ? a.mw : a.w, a.w
        }

        function t() {
            return a.h = a.h || i.height(), a.h = a.mh && a.mh < a.h ? a.mh : a.h, a.h
        }
        if (u) {
            var k, q = "none" === a.get("transition") ? 0 : a.get("speed");
            i.remove(), i = f(h, "LoadedContent").append(r), i.hide().appendTo(D.show()).css({
                width: s(),
                overflow: a.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: t()
            }).prependTo(n), D.hide(), b(d).css({
                float: "none"
            }), F(a.get("className")), k = function() {
                function h() {
                    b.support.opacity === !1 && c[0].style.removeAttribute("filter")
                }
                var d, f, g = j.length;
                u && (f = function() {
                    clearTimeout(ac), I.hide(), z(P), a.get("onComplete")
                }, T.html(a.get("title")).show(), i.show(), g > 1 ? ("string" == typeof a.get("current") && S.html(a.get("current").replace("{current}", l + 1).replace("{total}", g)).show(), E[a.get("loop") || g - 1 > l ? "show" : "hide"]().html(a.get("next")), H[a.get("loop") || l ? "show" : "hide"]().html(a.get("previous")), ak(), a.get("preloading") && b.each([N(-1), N(1)], function() {
                    var d, e = j[this],
                        c = new O(e, b.data(e, o)),
                        a = c.get("href");
                    a && af(c, a) && (a = ae(c, a), d = m.createElement("img"), d.src = a)
                })) : R.hide(), a.get("iframe") ? (d = a.get("createIframe"), a.get("scrolling") || (d.scrolling = "no"), b(d).attr({
                    src: a.get("href"),
                    class: e + "Iframe"
                }).one("load", f).appendTo(i), p.one(M, function() {
                    d.src = "//about:blank"
                }), a.get("fastIframe") && b(d).trigger("load")) : f(), "fade" === a.get("transition") ? c.fadeTo(q, 1, h) : h())
            }, "fade" === a.get("transition") ? c.fadeTo(q, 0, function() {
                g.position(0, k)
            }) : g.position(q, k)
        }
    }, g.next = function() {
        !G && j[1] && (a.get("loop") || j[l + 1]) && (l = N(1), L(j[l]))
    }, g.prev = function() {
        !G && j[1] && (a.get("loop") || l) && (l = N(-1), L(j[l]))
    }, g.close = function() {
        u && !C && (C = !0, u = !1, z(aa), a.get("onCleanup"), w.unbind("." + e), s.fadeTo(a.get("fadeOut") || 0, 0), c.stop().fadeTo(a.get("fadeOut") || 0, 0, function() {
            c.hide(), s.hide(), z(M), i.remove(), setTimeout(function() {
                C = !1, z($), a.get("onClosed")
            }, 1)
        }))
    }, g.remove = function() {
        c && (c.stop(), b[o].close(), c.stop(!1, !0).remove(), s.remove(), C = !1, c = null, b("." + A).removeData(o).removeClass(A), b(m).unbind("click." + e).unbind("keydown." + e))
    }, g.element = function() {
        return b(a.el)
    }, g.settings = Z)
})(jQuery, document, window)
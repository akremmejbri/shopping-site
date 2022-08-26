typeof Object.create != "function" && (Object.create = function(b) {
        function a() {}
        return a.prototype = b, new a
    }),
    function(a, b, c) {
        var d = {
            init: function(c, d) {
                var b = this;
                b.$elem = a(d), b.options = a.extend({}, a.fn.owlCarousel.options, b.$elem.data(), c), b.userOptions = c, b.loadContent()
            },
            loadContent: function() {
                var b = this,
                    c;

                function d(a) {
                    var c, d = "";
                    if (typeof b.options.jsonSuccess == "function") b.options.jsonSuccess.apply(this, [a]);
                    else {
                        for (c in a.owl) a.owl.hasOwnProperty(c) && (d += a.owl[c].item);
                        b.$elem.html(d)
                    }
                    b.logIn()
                }
                typeof b.options.beforeInit == "function" && b.options.beforeInit.apply(this, [b.$elem]), typeof b.options.jsonPath == "string" ? (c = b.options.jsonPath, a.getJSON(c, d)) : b.logIn()
            },
            logIn: function() {
                var a = this;
                a.$elem.data("owl-originalStyles", a.$elem.attr("style")), a.$elem.data("owl-originalClasses", a.$elem.attr("class")), a.$elem.css({
                    opacity: 0
                }), a.orignalItems = a.options.items, a.checkBrowser(), a.wrapperWidth = 0, a.checkVisible = null, a.setVars()
            },
            setVars: function() {
                var a = this;
                if (a.$elem.children().length === 0) return !1;
                a.baseClass(), a.eventTypes(), a.$userItems = a.$elem.children(), a.itemsAmount = a.$userItems.length, a.wrapItems(), a.$owlItems = a.$elem.find(".owl-item"), a.$owlWrapper = a.$elem.find(".owl-wrapper"), a.playDirection = "next", a.prevItem = 0, a.prevArr = [0], a.currentItem = 0, a.customEvents(), a.onStartup()
            },
            onStartup: function() {
                var a = this;
                a.updateItems(), a.calculateAll(), a.buildControls(), a.updateControls(), a.response(), a.moveEvents(), a.stopOnHover(), a.owlStatus(), a.options.transitionStyle !== !1 && a.transitionTypes(a.options.transitionStyle), a.options.autoPlay === !0 && (a.options.autoPlay = 5e3), a.play(), a.$elem.find(".owl-wrapper").css("display", "block"), a.$elem.is(":visible") ? a.$elem.css("opacity", 1) : a.watchVisibility(), a.onstartup = !1, a.eachMoveUpdate(), typeof a.options.afterInit == "function" && a.options.afterInit.apply(this, [a.$elem])
            },
            eachMoveUpdate: function() {
                var a = this;
                a.options.lazyLoad === !0 && a.lazyLoad(), a.options.autoHeight === !0 && a.autoHeight(), a.onVisibleItems(), typeof a.options.afterAction == "function" && a.options.afterAction.apply(this, [a.$elem])
            },
            updateVars: function() {
                var a = this;
                typeof a.options.beforeUpdate == "function" && a.options.beforeUpdate.apply(this, [a.$elem]), a.watchVisibility(), a.updateItems(), a.calculateAll(), a.updatePosition(), a.updateControls(), a.eachMoveUpdate(), typeof a.options.afterUpdate == "function" && a.options.afterUpdate.apply(this, [a.$elem])
            },
            reload: function() {
                var a = this;
                b.setTimeout(function() {
                    a.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var a = this;
                if (a.$elem.is(":visible") === !1) a.$elem.css({
                    opacity: 0
                }), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible);
                else return !1;
                a.checkVisible = b.setInterval(function() {
                    a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                        opacity: 1
                    }, 200), b.clearInterval(a.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var a = this;
                a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), a.wrapperOuter = a.$elem.find(".owl-wrapper-outer"), a.$elem.css("display", "block")
            },
            baseClass: function() {
                var a = this,
                    b = a.$elem.hasClass(a.options.baseClass),
                    c = a.$elem.hasClass(a.options.theme);
                b || a.$elem.addClass(a.options.baseClass), c || a.$elem.addClass(a.options.theme)
            },
            updateItems: function() {
                var b = this,
                    c, d;
                if (b.options.responsive === !1) return !1;
                if (b.options.singleItem === !0) return b.options.items = b.orignalItems = 1, b.options.itemsCustom = !1, b.options.itemsDesktop = !1, b.options.itemsDesktopSmall = !1, b.options.itemsTablet = !1, b.options.itemsTabletSmall = !1, b.options.itemsMobile = !1, !1;
                if (c = a(b.options.responsiveBaseWidth).width(), c > (b.options.itemsDesktop[0] || b.orignalItems) && (b.options.items = b.orignalItems), b.options.itemsCustom !== !1) {
                    {
                        b.options.itemsCustom.sort(function(a, b) {
                            return a[0] - b[0]
                        });
                        for (d = 0; d < b.options.itemsCustom.length; d += 1) b.options.itemsCustom[d][0] <= c && (b.options.items = b.options.itemsCustom[d][1])
                    }
                } else c <= b.options.itemsDesktop[0] && b.options.itemsDesktop !== !1 && (b.options.items = b.options.itemsDesktop[1]), c <= b.options.itemsDesktopSmall[0] && b.options.itemsDesktopSmall !== !1 && (b.options.items = b.options.itemsDesktopSmall[1]), c <= b.options.itemsTablet[0] && b.options.itemsTablet !== !1 && (b.options.items = b.options.itemsTablet[1]), c <= b.options.itemsTabletSmall[0] && b.options.itemsTabletSmall !== !1 && (b.options.items = b.options.itemsTabletSmall[1]), c <= b.options.itemsMobile[0] && b.options.itemsMobile !== !1 && (b.options.items = b.options.itemsMobile[1]);
                b.options.items > b.itemsAmount && b.options.itemsScaleUp === !0 && (b.options.items = b.itemsAmount)
            },
            response: function() {
                var c = this,
                    e, d;
                if (c.options.responsive !== !0) return !1;
                d = a(b).width(), c.resizer = function() {
                    a(b).width() !== d && (c.options.autoPlay !== !1 && b.clearInterval(c.autoPlayInterval), b.clearTimeout(e), e = b.setTimeout(function() {
                        d = a(b).width(), c.updateVars()
                    }, c.options.responsiveRefreshRate))
                }, a(b).resize(c.resizer)
            },
            updatePosition: function() {
                var a = this;
                a.jumpTo(a.currentItem), a.options.autoPlay !== !1 && a.checkAp()
            },
            appendItemsSizes: function() {
                var b = this,
                    c = 0,
                    d = b.itemsAmount - b.options.items;
                b.$owlItems.each(function(e) {
                    var f = a(this);
                    f.css({
                        width: b.itemWidth
                    }).data("owl-item", Number(e)), (e % b.options.items === 0 || e === d) && (e > d || (c += 1)), f.data("owl-roundPages", c)
                })
            },
            appendWrapperSizes: function() {
                var a = this,
                    b = a.$owlItems.length * a.itemWidth;
                a.$owlWrapper.css({
                    width: b * 2,
                    left: 0
                }), a.appendItemsSizes()
            },
            calculateAll: function() {
                var a = this;
                a.calculateWidth(), a.appendWrapperSizes(), a.loops(), a.max()
            },
            calculateWidth: function() {
                var a = this;
                a.itemWidth = Math.round(a.$elem.width() / a.options.items)
            },
            max: function() {
                var a = this,
                    b = (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth) * -1;
                return a.options.items > a.itemsAmount ? (a.maximumItem = 0, b = 0, a.maximumPixels = 0) : (a.maximumItem = a.itemsAmount - a.options.items, a.maximumPixels = b), b
            },
            min: function() {
                return 0
            },
            loops: function() {
                var b = this,
                    d = 0,
                    f = 0,
                    c, g, e;
                b.positionsInArray = [0], b.pagesInArray = [];
                for (c = 0; c < b.itemsAmount; c += 1) f += b.itemWidth, b.positionsInArray.push(-f), b.options.scrollPerPage === !0 && (g = a(b.$owlItems[c]), e = g.data("owl-roundPages"), e !== d && (b.pagesInArray[d] = b.positionsInArray[c], d = e))
            },
            buildControls: function() {
                var b = this;
                (b.options.navigation === !0 || b.options.pagination === !0) && (b.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !b.browser.isTouch).appendTo(b.$elem)), b.options.pagination === !0 && b.buildPagination(), b.options.navigation === !0 && b.buildButtons()
            },
            buildButtons: function() {
                var b = this,
                    c = a('<div class="owl-buttons"/>');
                b.owlControls.append(c), b.buttonPrev = a("<div/>", {
                    class: "owl-prev",
                    html: b.options.navigationText[0] || ""
                }), b.buttonNext = a("<div/>", {
                    class: "owl-next",
                    html: b.options.navigationText[1] || ""
                }), c.append(b.buttonPrev).append(b.buttonNext), e() ? (c.on("touchstart.owlControls", 'div[class^="owl"]', function(a) {
                    a.preventDefault()
                }), c.on("touchend.owlControls ", 'div[class^="owl"]', function(c) {
                    c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
                })) : (c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                    a.preventDefault()
                }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(c) {
                    c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
                }))
            },
            buildPagination: function() {
                var b = this;
                b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(c) {
                    c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var b = this,
                    e, f, g, c, d, h;
                if (b.options.pagination === !1) return !1;
                b.paginationWrapper.html(""), e = 0, f = b.itemsAmount - b.itemsAmount % b.options.items;
                for (c = 0; c < b.itemsAmount; c += 1) c % b.options.items === 0 && (e += 1, f === c && (g = b.itemsAmount - b.options.items), d = a("<div/>", {
                    class: "owl-page"
                }), h = a("<span></span>", {
                    text: b.options.paginationNumbers === !0 ? e : "",
                    class: b.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), d.append(h), d.data("owl-page", f === c ? g : c), d.data("owl-roundPages", e), b.paginationWrapper.append(d));
                b.checkPagination()
            },
            checkPagination: function() {
                var b = this;
                if (b.options.pagination === !1) return !1;
                b.paginationWrapper.find(".owl-page").each(function() {
                    a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var a = this;
                if (a.options.navigation === !1) return !1;
                a.options.rewindNav === !1 && (a.currentItem === 0 && a.maximumItem === 0 ? (a.buttonPrev.addClass("disabled"), a.buttonNext.addClass("disabled")) : a.currentItem === 0 && a.maximumItem !== 0 ? (a.buttonPrev.addClass("disabled"), a.buttonNext.removeClass("disabled")) : a.currentItem === a.maximumItem ? (a.buttonPrev.removeClass("disabled"), a.buttonNext.addClass("disabled")) : a.currentItem !== 0 && a.currentItem !== a.maximumItem && (a.buttonPrev.removeClass("disabled"), a.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var a = this;
                a.updatePagination(), a.checkNavigation(), a.owlControls && (a.options.items >= a.itemsAmount ? a.owlControls.hide() : a.owlControls.show())
            },
            destroyControls: function() {
                var a = this;
                a.owlControls && a.owlControls.remove()
            },
            next: function(b) {
                var a = this;
                if (a.isTransition) return !1;
                if (a.currentItem += a.options.scrollPerPage === !0 ? a.options.items : 1, a.currentItem > a.maximumItem + (a.options.scrollPerPage === !0 ? a.options.items - 1 : 0))
                    if (a.options.rewindNav === !0) a.currentItem = 0, b = "rewind";
                    else return a.currentItem = a.maximumItem, !1;
                a.goTo(a.currentItem, b)
            },
            prev: function(b) {
                var a = this;
                if (a.isTransition) return !1;
                if (a.options.scrollPerPage === !0 && a.currentItem > 0 && a.currentItem < a.options.items ? a.currentItem = 0 : a.currentItem -= a.options.scrollPerPage === !0 ? a.options.items : 1, a.currentItem < 0)
                    if (a.options.rewindNav === !0) a.currentItem = a.maximumItem, b = "rewind";
                    else return a.currentItem = 0, !1;
                a.goTo(a.currentItem, b)
            },
            goTo: function(c, e, f) {
                var a = this,
                    d;
                if (a.isTransition) return !1;
                if (typeof a.options.beforeMove == "function" && a.options.beforeMove.apply(this, [a.$elem]), c >= a.maximumItem ? c = a.maximumItem : c <= 0 && (c = 0), a.currentItem = a.owl.currentItem = c, a.options.transitionStyle !== !1 && f !== "drag" && a.options.items === 1 && a.browser.support3d === !0) return a.swapSpeed(0), a.browser.support3d === !0 ? a.transition3d(a.positionsInArray[c]) : a.css2slide(a.positionsInArray[c], 1), a.afterGo(), a.singleItemTransition(), !1;
                d = a.positionsInArray[c], a.browser.support3d === !0 ? (a.isCss3Finish = !1, e === !0 ? (a.swapSpeed("paginationSpeed"), b.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.paginationSpeed)) : e === "rewind" ? (a.swapSpeed(a.options.rewindSpeed), b.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.rewindSpeed)) : (a.swapSpeed("slideSpeed"), b.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.slideSpeed)), a.transition3d(d)) : e === !0 ? a.css2slide(d, a.options.paginationSpeed) : e === "rewind" ? a.css2slide(d, a.options.rewindSpeed) : a.css2slide(d, a.options.slideSpeed), a.afterGo()
            },
            jumpTo: function(b) {
                var a = this;
                typeof a.options.beforeMove == "function" && a.options.beforeMove.apply(this, [a.$elem]), b >= a.maximumItem || b === -1 ? b = a.maximumItem : b <= 0 && (b = 0), a.swapSpeed(0), a.browser.support3d === !0 ? a.transition3d(a.positionsInArray[b]) : a.css2slide(a.positionsInArray[b], 1), a.currentItem = a.owl.currentItem = b, a.afterGo()
            },
            afterGo: function() {
                var a = this;
                a.prevArr.push(a.currentItem), a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2], a.prevArr.shift(0), a.prevItem !== a.currentItem && (a.checkPagination(), a.checkNavigation(), a.eachMoveUpdate(), a.options.autoPlay !== !1 && a.checkAp()), typeof a.options.afterMove == "function" && a.prevItem !== a.currentItem && a.options.afterMove.apply(this, [a.$elem])
            },
            stop: function() {
                var a = this;
                a.apStatus = "stop", b.clearInterval(a.autoPlayInterval)
            },
            checkAp: function() {
                var a = this;
                a.apStatus !== "stop" && a.play()
            },
            play: function() {
                var a = this;
                if (a.apStatus = "play", a.options.autoPlay === !1) return !1;
                b.clearInterval(a.autoPlayInterval), a.autoPlayInterval = b.setInterval(function() {
                    a.next(!0)
                }, a.options.autoPlay)
            },
            swapSpeed: function(b) {
                var a = this;
                b === "slideSpeed" ? a.$owlWrapper.css(a.addCssSpeed(a.options.slideSpeed)) : b === "paginationSpeed" ? a.$owlWrapper.css(a.addCssSpeed(a.options.paginationSpeed)) : typeof b != "string" && a.$owlWrapper.css(a.addCssSpeed(b))
            },
            addCssSpeed: function(a) {
                return {
                    "-webkit-transition": "all " + a + "ms ease",
                    "-moz-transition": "all " + a + "ms ease",
                    "-o-transition": "all " + a + "ms ease",
                    transition: "all " + a + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(a) {
                return {
                    "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                    transform: "translate3d(" + a + "px, 0px,0px)"
                }
            },
            transition3d: function(b) {
                var a = this;
                a.$owlWrapper.css(a.doTranslate(b))
            },
            css2move: function(a) {
                var b = this;
                b.$owlWrapper.css({
                    left: a
                })
            },
            css2slide: function(b, c) {
                var a = this;
                a.isCssFinish = !1, a.$owlWrapper.stop(!0, !0).animate({
                    left: b
                }, {
                    duration: c || a.options.slideSpeed,
                    complete: function() {
                        a.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var i = this,
                    a = "translate3d(0px, 0px, 0px)",
                    f = c.createElement("div"),
                    g, d, h, e;
                f.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, g = /translate3d\(0px, 0px, 0px\)/g, d = f.style.cssText.match(g), h = d !== null && d.length === 1, e = "ontouchstart" in b || b.navigator.msMaxTouchPoints, i.browser = {
                    support3d: h,
                    isTouch: e
                }
            },
            moveEvents: function() {
                var a = this;
                (a.options.mouseDrag !== !1 || a.options.touchDrag !== !1) && (a.gestures(), a.disabledEvents())
            },
            eventTypes: function() {
                var a = this,
                    b = ["s", "e", "x"];
                a.ev_types = {}, a.options.mouseDrag === !0 && a.options.touchDrag === !0 ? b = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : a.options.mouseDrag === !1 && a.options.touchDrag === !0 ? b = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : a.options.mouseDrag === !0 && a.options.touchDrag === !1 && (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), a.ev_types.start = b[0], a.ev_types.move = b[1], a.ev_types.end = b[2]
            },
            disabledEvents: function() {
                var b = this;
                b.$elem.on("dragstart.owl", function(a) {
                    a.preventDefault()
                }), b.$elem.on("mousedown.disableTextSelect", function(b) {
                    return a(b.target).is('input, textarea, select, option')
                })
            },
            gestures: function() {
                var d = this,
                    e = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                d.isCssFinish = !0;

                function f(a) {
                    if (a.touches !== void 0) return {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    };
                    if (a.touches === void 0) {
                        if (a.pageX !== void 0) return {
                            x: a.pageX,
                            y: a.pageY
                        };
                        if (a.pageX === void 0) return {
                            x: a.clientX,
                            y: a.clientY
                        }
                    }
                }

                function g(b) {
                    b === "on" ? (a(c).on(d.ev_types.move, i), a(c).on(d.ev_types.end, j)) : b === "off" && (a(c).off(d.ev_types.move), a(c).off(d.ev_types.end))
                }

                function h(i) {
                    var c = i.originalEvent || i || b.event,
                        h;
                    if (c.which === 3) return !1;
                    if (d.itemsAmount <= d.options.items) return;
                    if (d.isCssFinish === !1 && !d.options.dragBeforeAnimFinish) return !1;
                    if (d.isCss3Finish === !1 && !d.options.dragBeforeAnimFinish) return !1;
                    d.options.autoPlay !== !1 && b.clearInterval(d.autoPlayInterval), d.browser.isTouch !== !0 && !d.$owlWrapper.hasClass("grabbing") && d.$owlWrapper.addClass("grabbing"), d.newPosX = 0, d.newRelativeX = 0, a(this).css(d.removeTransition()), h = a(this).position(), e.relativePos = h.left, e.offsetX = f(c).x - h.left, e.offsetY = f(c).y - h.top, g("on"), e.sliding = !1, e.targetElement = c.target || c.srcElement
                }

                function i(h) {
                    var g = h.originalEvent || h || b.event,
                        i, j;
                    d.newPosX = f(g).x - e.offsetX, d.newPosY = f(g).y - e.offsetY, d.newRelativeX = d.newPosX - e.relativePos, typeof d.options.startDragging == "function" && e.dragging !== !0 && d.newRelativeX !== 0 && (e.dragging = !0, d.options.startDragging.apply(d, [d.$elem])), (d.newRelativeX > 8 || d.newRelativeX < -8) && d.browser.isTouch === !0 && (g.preventDefault !== void 0 ? g.preventDefault() : g.returnValue = !1, e.sliding = !0), (d.newPosY > 10 || d.newPosY < -10) && e.sliding === !1 && a(c).off("touchmove.owl"), i = function() {
                        return d.newRelativeX / 5
                    }, j = function() {
                        return d.maximumPixels + d.newRelativeX / 5
                    }, d.newPosX = Math.max(Math.min(d.newPosX, i()), j()), d.browser.support3d === !0 ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
                }

                function j(h) {
                    var c = h.originalEvent || h || b.event,
                        i, f, j;
                    c.target = c.target || c.srcElement, e.dragging = !1, d.browser.isTouch !== !0 && d.$owlWrapper.removeClass("grabbing"), d.newRelativeX < 0 ? d.dragDirection = d.owl.dragDirection = "left" : d.dragDirection = d.owl.dragDirection = "right", d.newRelativeX !== 0 && (i = d.getNewPosition(), d.goTo(i, !1, "drag"), e.targetElement === c.target && d.browser.isTouch !== !0 && (a(c.target).on("click.disable", function(b) {
                        b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable")
                    }), f = a._data(c.target, "events").click, j = f.pop(), f.splice(0, 0, j))), g("off")
                }
                d.$elem.on(d.ev_types.start, ".owl-wrapper", h)
            },
            getNewPosition: function() {
                var a = this,
                    b = a.closestItem();
                return b > a.maximumItem ? (a.currentItem = a.maximumItem, b = a.maximumItem) : a.newPosX >= 0 && (b = 0, a.currentItem = 0), b
            },
            closestItem: function() {
                var b = this,
                    c = b.options.scrollPerPage === !0 ? b.pagesInArray : b.positionsInArray,
                    e = b.newPosX,
                    d = null;
                return a.each(c, function(f, g) {
                    e - b.itemWidth / 20 > c[f + 1] && e - b.itemWidth / 20 < g && b.moveDirection() === "left" ? (d = g, b.options.scrollPerPage === !0 ? b.currentItem = a.inArray(d, b.positionsInArray) : b.currentItem = f) : e + b.itemWidth / 20 < g && e + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && b.moveDirection() === "right" && (b.options.scrollPerPage === !0 ? (d = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(d, b.positionsInArray)) : (d = c[f + 1], b.currentItem = f + 1))
                }), b.currentItem
            },
            moveDirection: function() {
                var a = this,
                    b;
                return a.newRelativeX < 0 ? (b = "right", a.playDirection = "next") : (b = "left", a.playDirection = "prev"), b
            },
            customEvents: function() {
                var a = this;
                a.$elem.on("owl.next", function() {
                    a.next()
                }), a.$elem.on("owl.prev", function() {
                    a.prev()
                }), a.$elem.on("owl.play", function(c, b) {
                    a.options.autoPlay = b, a.play(), a.hoverStatus = "play"
                }), a.$elem.on("owl.stop", function() {
                    a.stop(), a.hoverStatus = "stop"
                }), a.$elem.on("owl.goTo", function(c, b) {
                    a.goTo(b)
                }), a.$elem.on("owl.jumpTo", function(c, b) {
                    a.jumpTo(b)
                })
            },
            stopOnHover: function() {
                var a = this;
                a.options.stopOnHover === !0 && a.browser.isTouch !== !0 && a.options.autoPlay !== !1 && (a.$elem.on("mouseover", function() {
                    a.stop()
                }), a.$elem.on("mouseout", function() {
                    a.hoverStatus !== "stop" && a.play()
                }))
            },
            lazyLoad: function() {
                var b = this,
                    e, c, f, d, g;
                if (b.options.lazyLoad === !1) return !1;
                for (e = 0; e < b.itemsAmount; e += 1) {
                    if (c = a(b.$owlItems[e]), c.data("owl-loaded") === "loaded") continue;
                    if (f = c.data("owl-item"), d = c.find(".lazyOwl"), typeof d.data("src") != "string") {
                        c.data("owl-loaded", "loaded");
                        continue
                    }
                    c.data("owl-loaded") === void 0 && (d.hide(), c.addClass("loading").data("owl-loaded", "checked")), b.options.lazyFollow === !0 ? g = f >= b.currentItem : g = !0, g && f < b.currentItem + b.options.items && d.length && b.lazyPreload(c, d)
                }
            },
            lazyPreload: function(h, a) {
                var c = this,
                    e = 0,
                    f;
                a.prop("tagName") === "DIV" ? (a.css("background-image", "url(" + a.data("src") + ")"), f = !0) : a[0].src = a.data("src");

                function g() {
                    h.data("owl-loaded", "loaded").removeClass("loading"), a.removeAttr("data-src"), c.options.lazyEffect === "fade" ? a.fadeIn(400) : a.show(), typeof c.options.afterLazyLoad == "function" && c.options.afterLazyLoad.apply(this, [c.$elem])
                }

                function d() {
                    e += 1, c.completeImg(a.get(0)) || f === !0 ? g() : e <= 100 ? b.setTimeout(d, 100) : g()
                }
                d()
            },
            autoHeight: function() {
                var c = this,
                    e = a(c.$owlItems[c.currentItem]).find("img"),
                    d;

                function f() {
                    var d = a(c.$owlItems[c.currentItem]).height();
                    c.wrapperOuter.css("height", d + "px"), c.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function() {
                        c.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function g() {
                    d += 1, c.completeImg(e.get(0)) ? f() : d <= 100 ? b.setTimeout(g, 100) : c.wrapperOuter.css("height", "")
                }
                e.get(0) !== void 0 ? (d = 0, g()) : f()
            },
            completeImg: function(a) {
                var b;
                return !!a.complete && (!(b = typeof a.naturalWidth, b !== "undefined" && a.naturalWidth === 0))
            },
            onVisibleItems: function() {
                var b = this,
                    c;
                b.options.addClassActive === !0 && b.$owlItems.removeClass("active"), b.visibleItems = [];
                for (c = b.currentItem; c < b.currentItem + b.options.items; c += 1) b.visibleItems.push(c), b.options.addClassActive === !0 && a(b.$owlItems[c]).addClass("active");
                b.owl.visibleItems = b.visibleItems
            },
            transitionTypes: function(a) {
                var b = this;
                b.outClass = "owl-" + a + "-out", b.inClass = "owl-" + a + "-in"
            },
            singleItemTransition: function() {
                var a = this,
                    g = a.outClass,
                    f = a.inClass,
                    c = a.$owlItems.eq(a.currentItem),
                    d = a.$owlItems.eq(a.prevItem),
                    h = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                    e = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2,
                    b = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
                a.isTransition = !0, a.$owlWrapper.addClass('owl-origin').css({
                    "-webkit-transform-origin": e + "px",
                    "-moz-perspective-origin": e + "px",
                    "perspective-origin": e + "px"
                });

                function i(a) {
                    return {
                        position: "relative",
                        left: a + "px"
                    }
                }
                d.css(i(h, 10)).addClass(g).on(b, function() {
                    a.endPrev = !0, d.off(b), a.clearTransStyle(d, g)
                }), c.addClass(f).on(b, function() {
                    a.endCurrent = !0, c.off(b), a.clearTransStyle(c, f)
                })
            },
            clearTransStyle: function(b, c) {
                var a = this;
                b.css({
                    position: "",
                    left: ""
                }).removeClass(c), a.endPrev && a.endCurrent && (a.$owlWrapper.removeClass('owl-origin'), a.endPrev = !1, a.endCurrent = !1, a.isTransition = !1)
            },
            owlStatus: function() {
                var a = this;
                a.owl = {
                    userOptions: a.userOptions,
                    baseElement: a.$elem,
                    userItems: a.$userItems,
                    owlItems: a.$owlItems,
                    currentItem: a.currentItem,
                    prevItem: a.prevItem,
                    visibleItems: a.visibleItems,
                    isTouch: a.browser.isTouch,
                    browser: a.browser,
                    dragDirection: a.dragDirection
                }
            },
            clearEvents: function() {
                var d = this;
                d.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", d.resizer)
            },
            unWrap: function() {
                var a = this;
                a.$elem.children().length !== 0 && (a.$owlWrapper.unwrap(), a.$userItems.unwrap().unwrap(), a.owlControls && a.owlControls.remove()), a.clearEvents(), a.$elem.attr("style", a.$elem.data("owl-originalStyles") || "").attr("class", a.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var a = this;
                a.stop(), b.clearInterval(a.checkVisible), a.unWrap(), a.$elem.removeData()
            },
            reinit: function(c) {
                var b = this,
                    d = a.extend({}, b.userOptions, c);
                b.unWrap(), b.init(d, b.$elem)
            },
            addItem: function(c, d) {
                var a = this,
                    b;
                if (!c) return !1;
                if (a.$elem.children().length === 0) return a.$elem.append(c), a.setVars(), !1;
                a.unWrap(), d === void 0 || d === -1 ? b = -1 : b = d, b >= a.$userItems.length || b === -1 ? a.$userItems.eq(-1).after(c) : a.$userItems.eq(b).before(c), a.setVars()
            },
            removeItem: function(b) {
                var a = this,
                    c;
                if (a.$elem.children().length === 0) return !1;
                b === void 0 || b === -1 ? c = -1 : c = b, a.unWrap(), a.$userItems.eq(c).remove(), a.setVars()
            }
        };
        a.fn.owlCarousel = function(b) {
            return this.each(function() {
                if (a(this).data("owl-init") === !0) return !1;
                a(this).data("owl-init", !0);
                var c = Object.create(d);
                c.init(b, this), a.data(this, "owlCarousel", c)
            })
        }, a.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: b,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        };

        function e() {
            return navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i) !== null
        }
    }(jQuery, window, document)
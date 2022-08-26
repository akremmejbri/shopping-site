/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function b() {}

    function d(b, c) {
        for (var a = b.length; a--;)
            if (b[a].listener === c) return a;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var a = b.prototype,
        e = this,
        f = e.EventEmitter;
    a.getListeners = function(c) {
        var d, a, b = this._getEvents();
        if ("object" == typeof c) {
            d = {};
            for (a in b) b.hasOwnProperty(a) && c.test(a) && (d[a] = b[a])
        } else d = b[c] || (b[c] = []);
        return d
    }, a.flattenListeners = function(b) {
        var a, c = [];
        for (a = 0; b.length > a; a += 1) c.push(b[a].listener);
        return c
    }, a.getListenersAsObject = function(c) {
        var a, b = this.getListeners(c);
        return b instanceof Array && (a = {}, a[c] = b), a || b
    }, a.addListener = function(e, a) {
        var b, c = this.getListenersAsObject(e),
            f = "object" == typeof a;
        for (b in c) c.hasOwnProperty(b) && -1 === d(c[b], a) && c[b].push(f ? a : {
            listener: a,
            once: !1
        });
        return this
    }, a.on = c("addListener"), a.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, a.once = c("addOnceListener"), a.defineEvent = function(a) {
        return this.getListeners(a), this
    }, a.defineEvents = function(b) {
        for (var a = 0; b.length > a; a += 1) this.defineEvent(b[a]);
        return this
    }, a.removeListener = function(e, f) {
        var c, a, b = this.getListenersAsObject(e);
        for (a in b) b.hasOwnProperty(a) && (c = d(b[a], f), -1 !== c && b[a].splice(c, 1));
        return this
    }, a.off = c("removeListener"), a.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, a.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, a.manipulateListeners = function(d, b, e) {
        var a, c, f = d ? this.removeListener : this.addListener,
            g = d ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (a = e.length; a--;) f.call(this, b, e[a]);
        else
            for (a in b) b.hasOwnProperty(a) && (c = b[a]) && ("function" == typeof c ? f.call(this, a, c) : g.call(this, a, c));
        return this
    }, a.removeEvent = function(c) {
        var a, d = typeof c,
            b = this._getEvents();
        if ("string" === d) delete b[c];
        else if ("object" === d)
            for (a in b) b.hasOwnProperty(a) && c.test(a) && delete b[a];
        else delete this._events;
        return this
    }, a.removeAllListeners = c("removeEvent"), a.emitEvent = function(e, g) {
        var a, d, c, f, b = this.getListenersAsObject(e);
        for (c in b)
            if (b.hasOwnProperty(c))
                for (d = b[c].length; d--;) a = b[c][d], a.once === !0 && this.removeListener(e, a.listener), f = a.listener.apply(this, g || []), f === this._getOnceReturnValue() && this.removeListener(e, a.listener);
        return this
    }, a.trigger = c("emitEvent"), a.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, a.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, a._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, a._getEvents = function() {
        return this._events || (this._events = {})
    }, b.noConflict = function() {
        return e.EventEmitter = f, b
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return b
    }) : "object" == typeof module && module.exports ? module.exports = b : this.EventEmitter = b
}).call(this),
    function(e) {
        var a, b, c, d;

        function f(b) {
            var a = e.event;
            return a.target = a.target || a.srcElement || b, a
        }
        a = document.documentElement, b = function() {}, a.addEventListener ? b = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : a.attachEvent && (b = function(a, c, b) {
            a[c + b] = b.handleEvent ? function() {
                var c = f(a);
                b.handleEvent.call(b, c)
            } : function() {
                var c = f(a);
                b.call(a, c)
            }, a.attachEvent("on" + c, a[c + b])
        }), c = function() {}, a.removeEventListener ? c = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : a.detachEvent && (c = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        }), d = {
            bind: b,
            unbind: c
        }, "function" == typeof define && define.amd ? define("eventie/eventie", d) : e.eventie = d
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventEmitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(this, function(l, f, d) {
        var c, g, j, k, h;

        function i(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function n(a) {
            return "[object Array]" === k.call(a)
        }

        function m(a) {
            var b = [],
                c, d;
            if (n(a)) b = a;
            else if ("number" == typeof a.length)
                for (c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function a(b, d, e) {
            if (!(this instanceof a)) return new a(b, d);
            "string" == typeof b && (b = document.querySelectorAll(b)), this.elements = m(b), this.options = i({}, this.options), "function" == typeof d ? e = d : i(this.options, d), e && this.on("always", e), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var f = this;
            setTimeout(function() {
                f.check()
            })
        }

        function e(a) {
            this.img = a
        }

        function b(a) {
            this.src = a, h[a] = this
        }
        return c = l.jQuery, g = l.console, j = g !== void 0, k = Object.prototype.toString, a.prototype = new f, a.prototype.options = {}, a.prototype.getImages = function() {
            var a, e, b, d, c, f, g;
            this.images = [];
            for (a = 0, e = this.elements.length; e > a; a++) {
                b = this.elements[a], "IMG" === b.nodeName && this.addImage(b);
                for (d = b.querySelectorAll("img"), c = 0, f = d.length; f > c; c++) g = d[c], this.addImage(g)
            }
        }, a.prototype.addImage = function(a) {
            var b = new e(a);
            this.images.push(b)
        }, a.prototype.check = function() {
            var a, d, b, c, e;

            function f(c, e) {
                return a.options.debug && j && g.log("confirm", c, e), a.progress(c), d++, d === b && a.complete(), !0
            }
            if (a = this, d = 0, b = this.images.length, this.hasAnyBroken = !1, !b) return this.complete(), void 0;
            for (c = 0; b > c; c++) e = this.images[c], e.on("confirm", f), e.check()
        }, a.prototype.progress = function(b) {
            this.hasAnyBroken = this.hasAnyBroken || !b.isLoaded;
            var a = this;
            setTimeout(function() {
                a.emit("progress", a, b), a.jqDeferred && a.jqDeferred.notify && a.jqDeferred.notify(a, b)
            })
        }, a.prototype.complete = function() {
            var b = this.hasAnyBroken ? "fail" : "done",
                a;
            this.isComplete = !0, a = this, setTimeout(function() {
                if (a.emit(b, a), a.emit("always", a), a.jqDeferred) {
                    var c = a.hasAnyBroken ? "reject" : "resolve";
                    a.jqDeferred[c](a)
                }
            })
        }, c && (c.fn.imagesLoaded = function(b, d) {
            var e = new a(this, b, d);
            return e.jqDeferred.promise(c(this))
        }), e.prototype = new f, e.prototype.check = function() {
            var a = h[this.img.src] || new b(this.img.src),
                c;
            if (a.isConfirmed) return this.confirm(a.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            c = this, a.on("confirm", function(a, b) {
                return c.confirm(a.isLoaded, b), !0
            }), a.check()
        }, e.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        }, h = {}, b.prototype = new f, b.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                d.bind(a, "load", this), d.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, b.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, b.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, b.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, b.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, b.prototype.unbindProxyEvents = function(a) {
            d.unbind(a.target, "load", this), d.unbind(a.target, "error", this)
        }, a
    })
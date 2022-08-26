/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function(d, a, b) {
    var c = a.matchMedia;
    typeof module != 'undefined' && module.exports ? module.exports = b(c) : typeof define == 'function' && define.amd ? define(function() {
        return a[d] = b(c)
    }) : a[d] = b(c)
})('enquire', this, function(b) {
    'use strict';

    function a(b, d) {
        var a = 0,
            e = b.length,
            c;
        for (a; a < e; a++)
            if (c = d(b[a], a), c === !1) break
    }

    function f(a) {
        return Object.prototype.toString.apply(a) === '[object Array]'
    }

    function g(a) {
        return typeof a == 'function'
    }

    function c(a) {
        this.options = a, !a.deferSetup && this.setup()
    }
    c.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(a) {
            return this.options === a || this.options.match === a
        }
    };

    function d(a, d) {
        this.query = a, this.isUnconditional = d, this.handlers = [], this.mql = b(a);
        var c = this;
        this.listener = function(a) {
            c.mql = a, c.assess()
        }, this.mql.addListener(this.listener)
    }
    d.prototype = {
        addHandler: function(b) {
            var a = new c(b);
            this.handlers.push(a), this.matches() && a.on()
        },
        removeHandler: function(c) {
            var b = this.handlers;
            a(b, function(a, d) {
                if (a.equals(c)) return a.destroy(), !b.splice(d, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            a(this.handlers, function(a) {
                a.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var b = this.matches() ? 'on' : 'off';
            a(this.handlers, function(a) {
                a[b]()
            })
        }
    };

    function e() {
        if (!b) throw new Error('matchMedia not present, legacy browsers require a polyfill');
        this.queries = {}, this.browserIsIncapable = !b('only all').matches
    }
    return e.prototype = {
        register: function(c, b, h) {
            var e = this.queries,
                i = h && this.browserIsIncapable;
            return e[c] || (e[c] = new d(c, i)), g(b) && (b = {
                match: b
            }), f(b) || (b = [b]), a(b, function(a) {
                e[c].addHandler(a)
            }), this
        },
        unregister: function(b, c) {
            var a = this.queries[b];
            return a && (c ? a.removeHandler(c) : (a.clear(), delete this.queries[b])), this
        }
    }, new e
})
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function() {
    if (window.matchMedia && window.matchMedia('all').addListener) return !1;
    var b = window.matchMedia,
        e = b('only all').matches,
        c = !1,
        d = 0,
        a = [],
        f = function(c) {
            clearTimeout(d), d = setTimeout(function() {
                for (var c = 0, h = a.length, d, f, g, e, i; c < h; c++)
                    if (d = a[c].mql, f = a[c].listeners || [], g = b(d.media).matches, g !== d.matches) {
                        d.matches = g;
                        for (e = 0, i = f.length; e < i; e++) f[e].call(window, d)
                    }
            }, 30)
        };
    window.matchMedia = function(i) {
        var g = b(i),
            d = [],
            h = 0;
        return g.addListener = function(b) {
            if (!e) return;
            c || (c = !0, window.addEventListener('resize', f, !0)), h === 0 && (h = a.push({
                mql: g,
                listeners: d
            })), d.push(b)
        }, g.removeListener = function(b) {
            for (var a = 0, c = d.length; a < c; a++) d[a] === b && d.splice(a, 1)
        }, g
    }
})()
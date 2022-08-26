/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var b = window.styleMedia || window.media,
        a, c, d;
    return b || (a = document.createElement('style'), c = document.getElementsByTagName('script')[0], d = null, a.type = 'text/css', a.id = 'matchmediajs-test', c.parentNode.insertBefore(a, c), d = 'getComputedStyle' in window && window.getComputedStyle(a, null) || a.currentStyle, b = {
            matchMedium: function(c) {
                var b = '@media ' + c + '{ #matchmediajs-test { width: 1px; } }';
                return a.styleSheet ? a.styleSheet.cssText = b : a.textContent = b, d.width === '1px'
            }
        }),
        function(a) {
            return {
                matches: b.matchMedium(a || 'all'),
                media: a || 'all'
            }
        }
}())
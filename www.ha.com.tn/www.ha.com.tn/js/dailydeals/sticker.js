DailyDeals = Class.create();
DailyDeals.prototype = {
    initialize: function() {
        this.helements = new Array();
        this.velements = new Array();
        document.observe("dom:loaded", onPageLoad);
        Event.observe(window, 'load', onPageLoad);
    },
    setVertPos: function(element, position) {
        var eH = element.offsetHeight;
        var pH = element.parentNode.offsetHeight;
        var eT = 0;

        if (eH != pH) {
            switch (position) {
                case 'top':
                    eT = 0;
                    break;
                case 'middle':
                    eT = (pH - eH) / 2;
                    break;
                case 'bottom':
                    eT = pH - eH;
                    break;
                default:
                    eT = 0;
            }
        } else if (eH == pH) {
            eT = 0;
        }
        element.style.bottom = null;
        element.style.top = eT + 'px';

    },
    setHorPos: function(element, position) {
        var eW = element.offsetWidth;
        var pW = element.parentNode.offsetWidth;
        var eL = 0;

        if (eW != pW) {
            switch (position) {
                case 'left':
                    eL = 0;
                    break;
                case 'center':
                    eL = (pW - eW) / 2;
                    break;
                case 'right':
                    eL = pW - eW;
                    break;
                default:
                    eL = 0;
            }
        } else if (eW == pW) {
            eL = 0;
        }
        element.style.right = null;
        element.style.left = eL + 'px';

    },
    registerVertPosition: function(element, position) {
        element.vposition = position;
        this.velements.push(element);
    },
    registerHorPosition: function(element, position) {
        element.hposition = position;
        this.helements.push(element);
    }
}

var onPageLoad = function() {
    /* Set hor. position to labels */
    if (dailydeals.helements.length > 0) {
        for (var i = 0; i < dailydeals.helements.length; i++) {
            dailydeals.setHorPos(dailydeals.helements[i], dailydeals.helements[i].hposition);
        }
    }
    /* Set vert. position to labels */
    if (dailydeals.velements.length > 0) {
        for (var j = 0; j < dailydeals.velements.length; j++) {
            dailydeals.setVertPos(dailydeals.velements[j], dailydeals.velements[j].vposition);
        }
    }
}

function dailydealsinit(id, hpos, vpos) {
    try {
        lcontainer = $('category-container-' + id);
        llabel = $('category-dailydeals-label-' + id);
        dailydeals.registerHorPosition(lcontainer, hpos);
        dailydeals.registerVertPosition(lcontainer, vpos);
        dailydeals.registerHorPosition(llabel, 'center');
        dailydeals.registerVertPosition(llabel, 'middle');
        dailydeals.setHorPos(lcontainer, lcontainer.hposition);
        dailydeals.setVertPos(lcontainer, lcontainer.vposition);
        dailydeals.setHorPos(llabel, llabel.hposition);
        dailydeals.setVertPos(llabel, llabel.vposition);
    } catch (e) {}
}

if (typeof dailydeals == 'undefined') {
    var dailydeals = new DailyDeals();
}
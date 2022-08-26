(function(a, f, g, c) {
    "use strict";
    var b = 'countDown',
        e = {
            css_class: 'countdown',
            always_show_days: !1,
            with_labels: !0,
            with_seconds: !0,
            with_separators: !0,
            with_hh_leading_zero: !0,
            with_mm_leading_zero: !0,
            with_ss_leading_zero: !0,
            label_dd: 'jours',
            label_hh: 'heures',
            label_mm: 'min.',
            label_ss: 'sec.',
            separator: ':',
            separator_days: ','
        };

    function d(c, d) {
        this.element = a(c), this.options = a.extend({}, e, d), this._defaults = e, this._name = b, this.init()
    }
    a.extend(d.prototype, {
        init: function() {
            if (this.element.children().length) return;
            if (this.element.attr('datetime') && (this.endDate = this.parseEndDate(this.element.attr('datetime'))), this.endDate === c && (this.endDate = this.parseEndDate(this.element.text())), this.endDate === c) return;
            this.element.is('time') ? this.timeElement = this.element : (this.timeElement = a('<time></time>'), this.element.html(this.timeElement)), this.markup(), this.setTimeoutDelay = this.sToMs(1), this.daysVisible = !0, this.timeElement.on('time.elapsed', this.options.onTimeElapsed), this.timeElement.on('time.tick', this.options.onTick), this.doCountDown()
        },
        parseEndDate: function(b) {
            var a;
            if (a = this.parseDuration(b), a instanceof Date) return a;
            if (a = this.parseDateTime(b), a instanceof Date) return a;
            if (a = this.parseHumanReadableDuration(b), a instanceof Date) return a;
            if (a = Date.parse(b), !isNaN(a)) return new Date(a)
        },
        parseDuration: function(h) {
            var a = h.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:\.(\d{1,3}))?S)?$/),
                b, d, e, f, c, g;
            if (a) return d = a[1] ? this.dToMs(a[1]) : 0, e = a[2] ? this.hToMs(a[2]) : 0, f = a[3] ? this.mToMs(a[3]) : 0, c = a[4] ? this.sToMs(a[4]) : 0, g = a[5] ? parseInt(a[5], 10) : 0, b = new Date, b.setTime(b.getTime() + d + e + f + c + g), b
        },
        parseDateTime: function(m) {
            var a = m.match(/^(\d{4,})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?:\:(\d{2}))?(?:\.(\d{1,3}))?([Z\+\-\:\d]+)?$/),
                d, b, e, g, f, h, i, j, k, l;
            if (a) return d = a[8] ? a[8].match(/^([\+\-])?(\d{2}):?(\d{2})$/) : c, b = 0, d && (b = this.hToMs(d[2]) + this.mToMs(d[3]), b = d[1] === '-' ? b : -b), g = a[1], f = a[2] - 1, h = a[3], i = a[4] || 0, j = a[5] || 0, k = a[6] || 0, l = a[7] || 0, e = new Date(Date.UTC(g, f, h, i, j, k, l)), e.setTime(e.getTime() + b), e
        },
        parseHumanReadableDuration: function(h) {
            var a = h.match(/^(?:(\d+).+\s)?(\d+)[h:]\s?(\d+)[m:]?\s?(\d+)?[s]?(?:\.(\d{1,3}))?$/),
                b, d, e, f, c, g;
            if (a) return b = new Date, d = a[1] ? this.dToMs(a[1]) : 0, e = a[2] ? this.hToMs(a[2]) : 0, f = a[3] ? this.mToMs(a[3]) : 0, c = a[4] ? this.sToMs(a[4]) : 0, g = a[5] ? parseInt(a[5], 10) : 0, b.setTime(b.getTime() + d + e + f + c + g), b
        },
        sToMs: function(a) {
            return parseInt(a, 10) * 1e3
        },
        mToMs: function(a) {
            return parseInt(a, 10) * 60 * 1e3
        },
        hToMs: function(a) {
            return parseInt(a, 10) * 60 * 60 * 1e3
        },
        dToMs: function(a) {
            return parseInt(a, 10) * 24 * 60 * 60 * 1e3
        },
        msToS: function(a) {
            return parseInt(a / 1e3 % 60, 10)
        },
        msToM: function(a) {
            return parseInt(a / 1e3 / 60 % 60, 10)
        },
        msToH: function(a) {
            return parseInt(a / 1e3 / 60 / 60 % 24, 10)
        },
        msToD: function(a) {
            return parseInt(a / 1e3 / 60 / 60 / 24, 10)
        },
        markup: function() {
            var a = ['<span class="item item-dd">', '<span class="dd"></span>', '<span class="label label-dd">', this.options.label_dd, '</span>', '</span>', '<span class="separator separator-dd">', this.options.separator_days, '</span>', '<span class="item item-hh">', '<span class="hh-1"></span>', '<span class="hh-2"></span>', '<span class="label label-hh">', this.options.label_hh, '</span>', '</span>', '<span class="separator">', this.options.separator, '</span>', '<span class="item item-mm">', '<span class="mm-1"></span>', '<span class="mm-2"></span>', '<span class="label label-mm">', this.options.label_mm, '</span>', '</span>', '<span class="separator">', this.options.separator, '</span>', '<span class="item item-ss">', '<span class="ss-1"></span>', '<span class="ss-2"></span>', '<span class="label label-ss">', this.options.label_ss, '</span>', '</span>'];
            this.timeElement.html(a.join('')), this.options.with_labels || this.timeElement.find('.label').remove(), this.options.with_separators || this.timeElement.find('.separator').remove(), this.options.with_seconds || (this.timeElement.find('.item-ss').remove(), this.timeElement.find('.separator').last().remove()), this.item_dd = this.timeElement.find('.item-dd'), this.separator_dd = this.timeElement.find('.separator-dd'), this.remaining_dd = this.timeElement.find('.dd'), this.remaining_hh1 = this.timeElement.find('.hh-1'), this.remaining_hh2 = this.timeElement.find('.hh-2'), this.remaining_mm1 = this.timeElement.find('.mm-1'), this.remaining_mm2 = this.timeElement.find('.mm-2'), this.remaining_ss1 = this.timeElement.find('.ss-1'), this.remaining_ss2 = this.timeElement.find('.ss-2'), this.timeElement.addClass(this.options.css_class)
        },
        doCountDown: function() {
            var a = this.endDate.getTime() - (new Date).getTime(),
                b = this.msToS(a),
                c = this.msToM(a),
                d = this.msToH(a),
                e = this.msToD(a),
                g;
            return a <= 0 && (b = c = d = e = 0), this.displayRemainingTime({
                ss: b < 10 ? (this.options.with_ss_leading_zero ? '0' : ' ') + b.toString() : b.toString(),
                mm: c < 10 ? (this.options.with_mm_leading_zero ? '0' : ' ') + c.toString() : c.toString(),
                hh: d < 10 ? (this.options.with_hh_leading_zero ? '0' : ' ') + d.toString() : d.toString(),
                dd: e.toString()
            }), !this.options.with_seconds && e === 0 && c === 0 && d === 0 && (b = 0), e === 0 && c === 0 && d === 0 && b === 0 ? this.timeElement.trigger('time.elapsed') : (g = this, f.setTimeout(function() {
                g.doCountDown()
            }, g.setTimeoutDelay), this.timeElement.trigger('time.tick', a))
        },
        displayRemainingTime: function(a) {
            var b = [];
            b.push('P'), a.dd !== '0' && b.push(a.dd, 'D'), b.push('T', a.hh, 'H', a.mm, 'M'), this.options.with_seconds && b.push(a.ss, 'S'), this.timeElement.attr('datetime', b.join('')), this.daysVisible && !this.options.always_show_days && a.dd === '0' && (this.item_dd.remove(), this.separator_dd.remove(), this.daysVisible = !1), this.remaining_dd.text(a.dd), this.remaining_hh1.text(a.hh[0].trim()), this.remaining_hh2.text(a.hh[1]), this.remaining_mm1.text(a.mm[0].trim()), this.remaining_mm2.text(a.mm[1]), this.remaining_ss1.text(a.ss[0].trim()), this.remaining_ss2.text(a.ss[1])
        }
    }), a.fn[b] = function(e) {
        var g = arguments,
            f;
        if (e === c || typeof e == 'object') return this.each(function() {
            a.data(this, 'plugin_' + b) || a.data(this, 'plugin_' + b, new d(this, e))
        });
        if (typeof e == 'string' && e[0] !== '_' && e !== 'init') return this.each(function() {
            var c = a.data(this, 'plugin_' + b);
            c instanceof d && typeof c[e] == 'function' && (f = c[e].apply(c, Array.prototype.slice.call(g, 1))), e === 'destroy' && a.data(this, 'plugin_' + b, null)
        }), f !== c ? f : this
    }
})(window.jQuery, window, document)
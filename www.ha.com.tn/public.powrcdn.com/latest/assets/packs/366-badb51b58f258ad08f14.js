(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [366], {
        630: (function(module, exports, __webpack_require__) {
            ! function(e, t) {
                true ? module.exports = t(__webpack_require__(352), __webpack_require__(355), __webpack_require__(631)) : undefined
            }(function() {
                return "undefined" != typeof window && window ? window : "undefined" != typeof self && self ? self : this
            }(), function(n, o, r) {
                return function(l) {
                    function e(e) {
                        for (var t, n, o = e[0], r = e[1], a = 0, i = []; a < o.length; a++) n = o[a], u[n] && i.push(u[n][0]), u[n] = 0;
                        for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (l[t] = r[t]);
                        for (s && s(e); i.length;) i.shift()()
                    }
                    var n = {},
                        u = {
                            0: 0
                        };

                    function r(e) {
                        if (n[e]) return n[e].exports;
                        var t = n[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return l[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                    }
                    r.m = l, r.c = n, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(t, e) {
                        if (1 & e && (t = r(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var o in t) r.d(n, o, function(e) {
                                return t[e]
                            }.bind(null, o));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r.oe = function(e) {
                        throw console.error(e), e
                    };
                    var t = function() {
                            return "undefined" != typeof window && window ? window : "undefined" != typeof self && self ? self : this
                        }().webpackJsonpIntlTelInput = function() {
                            return "undefined" != typeof window && window ? window : "undefined" != typeof self && self ? self : this
                        }().webpackJsonpIntlTelInput || [],
                        o = t.push.bind(t);
                    t.push = e, t = t.slice();
                    for (var a = 0; a < t.length; a++) e(t[a]);
                    var s = o;
                    return r(r.s = 5)
                }([function(e, t) {
                    e.exports = n
                }, function(e, t, n) {
                    var o;
                    ! function() {
                        "use strict";
                        var i = {}.hasOwnProperty;

                        function l() {
                            for (var e = [], t = 0; t < arguments.length; t++) {
                                var n = arguments[t];
                                if (n) {
                                    var o = typeof n;
                                    if ("string" === o || "number" === o) e.push(n);
                                    else if (Array.isArray(n) && n.length) {
                                        var r = l.apply(null, n);
                                        r && e.push(r)
                                    } else if ("object" === o)
                                        for (var a in n) i.call(n, a) && n[a] && e.push(a)
                                }
                            }
                            return e.join(" ")
                        }
                        e.exports ? (l.default = l, e.exports = l) : void 0 === (o = function() {
                            return l
                        }.apply(t, [])) || (e.exports = o)
                    }()
                }, function(s, e, t) {
                    ! function(e) {
                        var i = {},
                            t = Array.prototype,
                            n = Object.prototype,
                            l = n.hasOwnProperty,
                            o = n.toString,
                            u = t.forEach,
                            r = t.indexOf,
                            d = t.slice,
                            f = function(e, t, n) {
                                var o, r, a;
                                if (e)
                                    if (u && e.forEach === u) e.forEach(t, n);
                                    else if (e.length === +e.length) {
                                    for (r = 0, a = e.length; r < a; r++)
                                        if (r in e && t.call(n, e[r], r, e) === i) return
                                } else
                                    for (o in e)
                                        if (l.call(e, o) && t.call(n, e[o], o, e) === i) return
                            },
                            c = function(e) {
                                return !!(e && e.constructor && e.call && e.apply)
                            },
                            m = function(n) {
                                return f(d.call(arguments, 1), function(e) {
                                    var t;
                                    for (t in e) void 0 !== e[t] && (n[t] = e[t])
                                }), n
                            },
                            h = function(e, t, n) {
                                var o;
                                if (t) {
                                    if (r) return r.call(t, e, n);
                                    for (o = t.length, n = n ? n < 0 ? Math.max(0, o + n) : n : 0; n < o; n++)
                                        if (n in t && t[n] === e) return n
                                }
                                return -1
                            },
                            a = {};
                        f("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                            a["[object " + e + "]"] = e.toLowerCase()
                        });
                        var y = function(e) {
                                return null == e ? String(e) : a[o.call(e)] || "object"
                            },
                            p = {},
                            g = {};
                        p.Callbacks = function(o) {
                            var e, t;
                            o = "string" == typeof o ? g[o] || (t = g[e = o] = {}, f(e.split(/\s+/), function(e) {
                                t[e] = !0
                            }), t) : m({}, o);
                            var n, r, a, i, l, u, s = [],
                                d = !o.once && [],
                                c = function(e) {
                                    for (n = o.memory && e, r = !0, u = i || 0, i = 0, l = s.length, a = !0; s && u < l; u++)
                                        if (!1 === s[u].apply(e[0], e[1]) && o.stopOnFalse) {
                                            n = !1;
                                            break
                                        }
                                    a = !1, s && (d ? d.length && c(d.shift()) : n ? s = [] : p.disable())
                                },
                                p = {
                                    add: function() {
                                        if (s) {
                                            var e = s.length;
                                            ! function n(e) {
                                                f(e, function(e) {
                                                    var t = y(e);
                                                    "function" === t ? o.unique && p.has(e) || s.push(e) : e && e.length && "string" !== t && n(e)
                                                })
                                            }(arguments), a ? l = s.length : n && (i = e, c(n))
                                        }
                                        return this
                                    },
                                    remove: function() {
                                        return s && f(arguments, function(e) {
                                            for (var t; - 1 < (t = h(e, s, t));) s.splice(t, 1), a && (t <= l && l--, t <= u && u--)
                                        }), this
                                    },
                                    has: function(e) {
                                        return -1 < h(e, s)
                                    },
                                    empty: function() {
                                        return s = [], this
                                    },
                                    disable: function() {
                                        return s = d = n = void 0, this
                                    },
                                    disabled: function() {
                                        return !s
                                    },
                                    lock: function() {
                                        return d = void 0, n || p.disable(), this
                                    },
                                    locked: function() {
                                        return !d
                                    },
                                    fireWith: function(e, t) {
                                        return t = [e, (t = t || []).slice ? t.slice() : t], !s || r && !d || (a ? d.push(t) : c(t)), this
                                    },
                                    fire: function() {
                                        return p.fireWith(this, arguments), this
                                    },
                                    fired: function() {
                                        return !!r
                                    }
                                };
                            return p
                        }, p.Deferred = function(e) {
                            var i = [
                                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", p.Callbacks("memory")]
                                ],
                                r = "pending",
                                a = {
                                    state: function() {
                                        return r
                                    },
                                    always: function() {
                                        return l.done(arguments).fail(arguments), this
                                    },
                                    then: function() {
                                        var a = arguments;
                                        return p.Deferred(function(r) {
                                            f(i, function(e, t) {
                                                var n = e[0],
                                                    o = a[t];
                                                l[e[1]](c(o) ? function() {
                                                    var e;
                                                    try {
                                                        e = o.apply(this, arguments)
                                                    } catch (e) {
                                                        return void r.reject(e)
                                                    }
                                                    e && c(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r["notify" !== n ? "resolveWith" : n + "With"](this === l ? r : this, [e])
                                                } : r[n])
                                            }), a = null
                                        }).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? m(e, a) : a
                                    }
                                },
                                l = {};
                            return a.pipe = a.then, f(i, function(e, t) {
                                var n = e[2],
                                    o = e[3];
                                a[e[1]] = n.add, o && n.add(function() {
                                    r = o
                                }, i[1 ^ t][2].disable, i[2][2].lock), l[e[0]] = n.fire, l[e[0] + "With"] = n.fireWith
                            }), a.promise(l), e && e.call(l, l), l
                        }, p.when = function(e) {
                            var r, t, n, o = 0,
                                a = "array" === y(e) && 1 === arguments.length ? e : d.call(arguments),
                                i = a.length,
                                l = 1 !== i || e && c(e.promise) ? i : 0,
                                u = 1 === l ? e : p.Deferred(),
                                s = function(t, n, o) {
                                    return function(e) {
                                        n[t] = this, o[t] = 1 < arguments.length ? d.call(arguments) : e, o === r ? u.notifyWith(n, o) : --l || u.resolveWith(n, o)
                                    }
                                };
                            if (1 < i)
                                for (r = new Array(i), t = new Array(i), n = new Array(i); o < i; o++) a[o] && c(a[o].promise) ? a[o].promise().done(s(o, n, a)).fail(u.reject).progress(s(o, t, r)) : --l;
                            return l || u.resolveWith(n, a), u.promise()
                        }, s.exports ? s.exports = p : void 0 !== e._ ? e._.mixin(p) : e._ = p
                    }(this)
                }, function(e, t) {
                    e.exports = o
                }, function(e, t, n) {}, function(e, t, r) {
                    "use strict";
                    r.r(t);
                    var n, a = r(0),
                        f = r.n(a),
                        o = r(1),
                        s = r.n(o),
                        i = r(2),
                        l = r.n(i),
                        u = [
                            ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                            ["Albania (Shqipëri)", "al", "355"],
                            ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                            ["American Samoa", "as", "1684"],
                            ["Andorra", "ad", "376"],
                            ["Angola", "ao", "244"],
                            ["Anguilla", "ai", "1264"],
                            ["Antigua and Barbuda", "ag", "1268"],
                            ["Argentina", "ar", "54"],
                            ["Armenia (Հայաստան)", "am", "374"],
                            ["Aruba", "aw", "297"],
                            ["Australia", "au", "61", 0],
                            ["Austria (Österreich)", "at", "43"],
                            ["Azerbaijan (Azərbaycan)", "az", "994"],
                            ["Bahamas", "bs", "1242"],
                            ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                            ["Barbados", "bb", "1246"],
                            ["Belarus (Беларусь)", "by", "375"],
                            ["Belgium (België)", "be", "32"],
                            ["Belize", "bz", "501"],
                            ["Benin (Bénin)", "bj", "229"],
                            ["Bermuda", "bm", "1441"],
                            ["Bhutan (འབྲུག)", "bt", "975"],
                            ["Bolivia", "bo", "591"],
                            ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                            ["Botswana", "bw", "267"],
                            ["Brazil (Brasil)", "br", "55"],
                            ["British Indian Ocean Territory", "io", "246"],
                            ["British Virgin Islands", "vg", "1284"],
                            ["Brunei", "bn", "673"],
                            ["Bulgaria (България)", "bg", "359"],
                            ["Burkina Faso", "bf", "226"],
                            ["Burundi (Uburundi)", "bi", "257"],
                            ["Cambodia (កម្ពុជា)", "kh", "855"],
                            ["Cameroon (Cameroun)", "cm", "237"],
                            ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                            ["Cape Verde (Kabu Verdi)", "cv", "238"],
                            ["Caribbean Netherlands", "bq", "599", 1],
                            ["Cayman Islands", "ky", "1345"],
                            ["Central African Republic (République centrafricaine)", "cf", "236"],
                            ["Chad (Tchad)", "td", "235"],
                            ["Chile", "cl", "56"],
                            ["China (中国)", "cn", "86"],
                            ["Christmas Island", "cx", "61", 2],
                            ["Cocos (Keeling) Islands", "cc", "61", 1],
                            ["Colombia", "co", "57"],
                            ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                            ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                            ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                            ["Cook Islands", "ck", "682"],
                            ["Costa Rica", "cr", "506"],
                            ["Côte d’Ivoire", "ci", "225"],
                            ["Croatia (Hrvatska)", "hr", "385"],
                            ["Cuba", "cu", "53"],
                            ["Curaçao", "cw", "599", 0],
                            ["Cyprus (Κύπρος)", "cy", "357"],
                            ["Czech Republic (Česká republika)", "cz", "420"],
                            ["Denmark (Danmark)", "dk", "45"],
                            ["Djibouti", "dj", "253"],
                            ["Dominica", "dm", "1767"],
                            ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                            ["Ecuador", "ec", "593"],
                            ["Egypt (‫مصر‬‎)", "eg", "20"],
                            ["El Salvador", "sv", "503"],
                            ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                            ["Eritrea", "er", "291"],
                            ["Estonia (Eesti)", "ee", "372"],
                            ["Ethiopia", "et", "251"],
                            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                            ["Faroe Islands (Føroyar)", "fo", "298"],
                            ["Fiji", "fj", "679"],
                            ["Finland (Suomi)", "fi", "358", 0],
                            ["France", "fr", "33"],
                            ["French Guiana (Guyane française)", "gf", "594"],
                            ["French Polynesia (Polynésie française)", "pf", "689"],
                            ["Gabon", "ga", "241"],
                            ["Gambia", "gm", "220"],
                            ["Georgia (საქართველო)", "ge", "995"],
                            ["Germany (Deutschland)", "de", "49"],
                            ["Ghana (Gaana)", "gh", "233"],
                            ["Gibraltar", "gi", "350"],
                            ["Greece (Ελλάδα)", "gr", "30"],
                            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                            ["Grenada", "gd", "1473"],
                            ["Guadeloupe", "gp", "590", 0],
                            ["Guam", "gu", "1671"],
                            ["Guatemala", "gt", "502"],
                            ["Guernsey", "gg", "44", 1],
                            ["Guinea (Guinée)", "gn", "224"],
                            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                            ["Guyana", "gy", "592"],
                            ["Haiti", "ht", "509"],
                            ["Honduras", "hn", "504"],
                            ["Hong Kong (香港)", "hk", "852"],
                            ["Hungary (Magyarország)", "hu", "36"],
                            ["Iceland (Ísland)", "is", "354"],
                            ["India (भारत)", "in", "91"],
                            ["Indonesia", "id", "62"],
                            ["Iran (‫ایران‬‎)", "ir", "98"],
                            ["Iraq (‫العراق‬‎)", "iq", "964"],
                            ["Ireland", "ie", "353"],
                            ["Isle of Man", "im", "44", 2],
                            ["Israel (‫ישראל‬‎)", "il", "972"],
                            ["Italy (Italia)", "it", "39", 0],
                            ["Jamaica", "jm", "1876"],
                            ["Japan (日本)", "jp", "81"],
                            ["Jersey", "je", "44", 3],
                            ["Jordan (‫الأردن‬‎)", "jo", "962"],
                            ["Kazakhstan (Казахстан)", "kz", "7", 1],
                            ["Kenya", "ke", "254"],
                            ["Kiribati", "ki", "686"],
                            ["Kosovo", "xk", "383"],
                            ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                            ["Laos (ລາວ)", "la", "856"],
                            ["Latvia (Latvija)", "lv", "371"],
                            ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                            ["Lesotho", "ls", "266"],
                            ["Liberia", "lr", "231"],
                            ["Libya (‫ليبيا‬‎)", "ly", "218"],
                            ["Liechtenstein", "li", "423"],
                            ["Lithuania (Lietuva)", "lt", "370"],
                            ["Luxembourg", "lu", "352"],
                            ["Macau (澳門)", "mo", "853"],
                            ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                            ["Madagascar (Madagasikara)", "mg", "261"],
                            ["Malawi", "mw", "265"],
                            ["Malaysia", "my", "60"],
                            ["Maldives", "mv", "960"],
                            ["Mali", "ml", "223"],
                            ["Malta", "mt", "356"],
                            ["Marshall Islands", "mh", "692"],
                            ["Martinique", "mq", "596"],
                            ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                            ["Mauritius (Moris)", "mu", "230"],
                            ["Mayotte", "yt", "262", 1],
                            ["Mexico (México)", "mx", "52"],
                            ["Micronesia", "fm", "691"],
                            ["Moldova (Republica Moldova)", "md", "373"],
                            ["Monaco", "mc", "377"],
                            ["Mongolia (Монгол)", "mn", "976"],
                            ["Montenegro (Crna Gora)", "me", "382"],
                            ["Montserrat", "ms", "1664"],
                            ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                            ["Mozambique (Moçambique)", "mz", "258"],
                            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                            ["Namibia (Namibië)", "na", "264"],
                            ["Nauru", "nr", "674"],
                            ["Nepal (नेपाल)", "np", "977"],
                            ["Netherlands (Nederland)", "nl", "31"],
                            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                            ["New Zealand", "nz", "64"],
                            ["Nicaragua", "ni", "505"],
                            ["Niger (Nijar)", "ne", "227"],
                            ["Nigeria", "ng", "234"],
                            ["Niue", "nu", "683"],
                            ["Norfolk Island", "nf", "672"],
                            ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                            ["Northern Mariana Islands", "mp", "1670"],
                            ["Norway (Norge)", "no", "47", 0],
                            ["Oman (‫عُمان‬‎)", "om", "968"],
                            ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                            ["Palau", "pw", "680"],
                            ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                            ["Panama (Panamá)", "pa", "507"],
                            ["Papua New Guinea", "pg", "675"],
                            ["Paraguay", "py", "595"],
                            ["Peru (Perú)", "pe", "51"],
                            ["Philippines", "ph", "63"],
                            ["Poland (Polska)", "pl", "48"],
                            ["Portugal", "pt", "351"],
                            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                            ["Qatar (‫قطر‬‎)", "qa", "974"],
                            ["Réunion (La Réunion)", "re", "262", 0],
                            ["Romania (România)", "ro", "40"],
                            ["Russia (Россия)", "ru", "7", 0],
                            ["Rwanda", "rw", "250"],
                            ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
                            ["Saint Helena", "sh", "290"],
                            ["Saint Kitts and Nevis", "kn", "1869"],
                            ["Saint Lucia", "lc", "1758"],
                            ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                            ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                            ["Saint Vincent and the Grenadines", "vc", "1784"],
                            ["Samoa", "ws", "685"],
                            ["San Marino", "sm", "378"],
                            ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                            ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                            ["Senegal (Sénégal)", "sn", "221"],
                            ["Serbia (Србија)", "rs", "381"],
                            ["Seychelles", "sc", "248"],
                            ["Sierra Leone", "sl", "232"],
                            ["Singapore", "sg", "65"],
                            ["Sint Maarten", "sx", "1721"],
                            ["Slovakia (Slovensko)", "sk", "421"],
                            ["Slovenia (Slovenija)", "si", "386"],
                            ["Solomon Islands", "sb", "677"],
                            ["Somalia (Soomaaliya)", "so", "252"],
                            ["South Africa", "za", "27"],
                            ["South Korea (대한민국)", "kr", "82"],
                            ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                            ["Spain (España)", "es", "34"],
                            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                            ["Sudan (‫السودان‬‎)", "sd", "249"],
                            ["Suriname", "sr", "597"],
                            ["Svalbard and Jan Mayen", "sj", "47", 1],
                            ["Swaziland", "sz", "268"],
                            ["Sweden (Sverige)", "se", "46"],
                            ["Switzerland (Schweiz)", "ch", "41"],
                            ["Syria (‫سوريا‬‎)", "sy", "963"],
                            ["Taiwan (台灣)", "tw", "886"],
                            ["Tajikistan", "tj", "992"],
                            ["Tanzania", "tz", "255"],
                            ["Thailand (ไทย)", "th", "66"],
                            ["Timor-Leste", "tl", "670"],
                            ["Togo", "tg", "228"],
                            ["Tokelau", "tk", "690"],
                            ["Tonga", "to", "676"],
                            ["Trinidad and Tobago", "tt", "1868"],
                            ["Tunisia (‫تونس‬‎)", "tn", "216"],
                            ["Turkey (Türkiye)", "tr", "90"],
                            ["Turkmenistan", "tm", "993"],
                            ["Turks and Caicos Islands", "tc", "1649"],
                            ["Tuvalu", "tv", "688"],
                            ["U.S. Virgin Islands", "vi", "1340"],
                            ["Uganda", "ug", "256"],
                            ["Ukraine (Україна)", "ua", "380"],
                            ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                            ["United Kingdom", "gb", "44", 0],
                            ["United States", "us", "1", 0],
                            ["Uruguay", "uy", "598"],
                            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                            ["Vanuatu", "vu", "678"],
                            ["Vatican City (Città del Vaticano)", "va", "39", 1],
                            ["Venezuela", "ve", "58"],
                            ["Vietnam (Việt Nam)", "vn", "84"],
                            ["Wallis and Futuna", "wf", "681"],
                            ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
                            ["Yemen (‫اليمن‬‎)", "ye", "967"],
                            ["Zambia", "zm", "260"],
                            ["Zimbabwe", "zw", "263"],
                            ["Åland Islands", "ax", "358", 1]
                        ];

                    function d(e) {
                        n = (e || u).map(function(e) {
                            return {
                                name: e[0],
                                iso2: e[1],
                                dialCode: e[2],
                                priority: e[3] || 0,
                                areaCodes: e[4] || null
                            }
                        })
                    }
                    var c = {
                        initialize: d,
                        getCountries: function() {
                            return n || d(), n
                        }
                    };

                    function p(e) {
                        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var m = {
                        arraysEqual: function(e, t) {
                            if (e === t) return !0;
                            if (null === e || null === t) return !1;
                            if (e.length !== t.length) return !1;
                            for (var n = 0; n < e.length; ++n)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        },
                        shallowEquals: function(e, t) {
                            if (e === t) return !0;
                            for (var n in e)
                                if (e[n] !== t[n]) {
                                    if (!Array.isArray(e[n]) || !Array.isArray(t[n])) return !1;
                                    if (!this.arraysEqual(e[n], t[n])) return !1
                                }
                            for (var o in t)
                                if (!1 === e.hasOwnProperty(o)) return !1;
                            return !0
                        },
                        trim: function(e) {
                            return e ? e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : ""
                        },
                        isNumeric: function(e) {
                            return 0 <= e - parseFloat(e)
                        },
                        retrieveLiIndex: function(e) {
                            if (!e) return -1;
                            for (var t = e.parentNode.childNodes, n = 0, o = 0, r = t.length; o < r; o++) {
                                if (t[o] === e) return n;
                                1 === t[o].nodeType && "li" === t[o].tagName.toLowerCase() && (n += 1)
                            }
                            return -1
                        },
                        getNumeric: function(e) {
                            return e.replace(/\D/g, "")
                        },
                        startsWith: function(e, t) {
                            return e.substr(0, t.length).toUpperCase() === t
                        },
                        isWindow: function(e) {
                            return null !== e && e === e.window
                        },
                        getWindow: function(e) {
                            return this.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
                        },
                        offset: function(e) {
                            var t, n, o = {
                                    top: 0,
                                    left: 0
                                },
                                r = e && e.ownerDocument;
                            return t = r.documentElement, "undefined" !== p(e.getBoundingClientRect) && (o = e.getBoundingClientRect()), n = this.getWindow(r), {
                                top: o.top + n.pageYOffset - t.clientTop,
                                left: o.left + n.pageXOffset - t.clientLeft
                            }
                        },
                        getOuterHeight: function(e) {
                            return e.offsetHeight + parseFloat(window.getComputedStyle(e).getPropertyValue("margin-top")) + parseFloat(window.getComputedStyle(e).getPropertyValue("margin-bottom"))
                        },
                        getCountryData: function(e, t, n, o, r) {
                            for (var a = n ? c.getCountries() : e, i = 0; i < a.length; i++)
                                if (a[i].iso2 === t) return a[i];
                            return o ? null : ("function" == typeof r && r(t), {})
                        },
                        hasClass: function(e, t) {
                            return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)".concat(t, "(\\s|$)")))
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : this.hasClass(e, t) || (e.className += " ".concat(t))
                        },
                        removeClass: function(e, t) {
                            if (e.classList) e.classList.remove(t);
                            else if (this.hasClass(e, t)) {
                                var n = new RegExp("(\\s|^)".concat(t, "(\\s|$)"));
                                e.className = e.className.replace(n, " ")
                            }
                        },
                        findIndex: function(e, n) {
                            var o = -1;
                            return e.some(function(e, t) {
                                if (n(e)) return o = t, !0
                            }), o
                        },
                        getCursorPositionAfterFormating: function(e, t, n) {
                            if (t === n) return e.length;
                            var o = 0;
                            if (t.length > n.length)
                                for (var r = 0, a = 0; r < e.length && a < n.length; r += 1) e[r] !== n[a] ? isNaN(n[a]) && !isNaN(e[r]) ? (r -= 1, a += 1, o += 1) : o -= 1 : a += 1;
                            else
                                for (var i = 0, l = 0; i < e.length && l < n.length; l += 1) e[i] !== n[l] ? isNaN(e[i]) && !isNaN(n[l]) ? (l -= 1, i += 1, o -= 1) : o += 1 : i += 1;
                            return e.length + o
                        }
                    };

                    function h(e) {
                        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function y(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function g(e) {
                        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function b(e, t) {
                        return (b = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function C(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function w(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    var v = function(e) {
                        function i() {
                            var e, u, t, n;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, i);
                            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                            return t = this, n = (e = g(i)).call.apply(e, [this].concat(r)), w(C(C(u = !n || "object" !== h(n) && "function" != typeof n ? C(t) : n)), "setDropdownPosition", function() {
                                m.removeClass(u.listElement, "hide");
                                var e = u.props.inputTop,
                                    t = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
                                    n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                                    o = u.props.inputOuterHeight,
                                    r = m.getOuterHeight(u.listElement),
                                    a = !(e + o + r < t + n) && t < e - r ? "-".concat(r - 1, "px") : "";
                                u.listElement.style.top = a, u.listElement.setAttribute("class", "country-list")
                            }), w(C(C(u)), "setFlag", function(e) {
                                u.props.setFlag(e)
                            }), w(C(C(u)), "appendListItem", function(e) {
                                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                    l = u.props.preferredCountries.length;
                                return e.map(function(e, t) {
                                    var n = i ? t : t + l,
                                        o = {
                                            country: !0,
                                            highlight: u.props.highlightedCountry === n,
                                            preferred: i
                                        },
                                        r = s()(o),
                                        a = i ? "pref-" : "";
                                    return f.a.createElement("li", {
                                        key: "".concat(a).concat(e.iso2),
                                        className: r,
                                        "data-dial-code": e.dialCode,
                                        "data-country-code": e.iso2,
                                        onMouseOver: u.props.isMobile ? null : u.handleMouseOver,
                                        onClick: function(e) {
                                            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                                            return e.bind.apply(e, [e].concat(n))
                                        }(u.setFlag, e.iso2)
                                    }, f.a.createElement("div", {
                                        ref: function(e) {
                                            u.selectedFlag = e
                                        },
                                        className: "flag-box"
                                    }, f.a.createElement("div", {
                                        ref: function(e) {
                                            u.selectedFlagInner = e
                                        },
                                        className: "iti-flag ".concat(e.iso2)
                                    })), f.a.createElement("span", {
                                        className: "country-name"
                                    }, e.name), f.a.createElement("span", {
                                        className: "dial-code"
                                    }, "+", e.dialCode))
                                })
                            }), w(C(C(u)), "handleMouseOver", function(e) {
                                if (-1 < e.currentTarget.getAttribute("class").indexOf("country")) {
                                    var t = m.retrieveLiIndex(e.currentTarget);
                                    u.props.changeHighlightCountry(!0, t)
                                }
                            }), u
                        }
                        var t, n, o;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && b(e, t)
                        }(i, a["Component"]), t = i, (n = [{
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                var t = !m.shallowEquals(this.props, e);
                                return t && e.showDropdown && (this.listElement.setAttribute("class", "country-list v-hide"), this.setDropdownPosition()), t
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e, t = this,
                                    n = this.props.preferredCountries,
                                    o = null,
                                    r = this.props.countries,
                                    a = s()({
                                        "country-list": !0,
                                        hide: !this.props.showDropdown
                                    }),
                                    i = null;
                                return n.length && (o = this.appendListItem(n, !0), i = f.a.createElement("div", {
                                    className: "divider"
                                })), e = this.appendListItem(r), f.a.createElement("ul", {
                                    ref: function(e) {
                                        t.listElement = e
                                    },
                                    className: a
                                }, o, i, e)
                            }
                        }]) && y(t.prototype, n), o && y(t, o), i
                    }();
                    v.__docgenInfo = {
                        description: "",
                        methods: [{
                            name: "setDropdownPosition",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "setFlag",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "iso2",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "appendListItem",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countries",
                                type: null
                            }, {
                                name: "isPreferred",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleMouseOver",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }],
                        displayName: "CountryList",
                        props: {
                            setFlag: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            countries: {
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "object"
                                    }
                                },
                                required: !1,
                                description: ""
                            },
                            inputTop: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            inputOuterHeight: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            preferredCountries: {
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "object"
                                    }
                                },
                                required: !1,
                                description: ""
                            },
                            highlightedCountry: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            changeHighlightCountry: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            showDropdown: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            isMobile: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            }
                        }
                    };
                    var D = r(3),
                        k = r.n(D);

                    function S(e) {
                        return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function N(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function O(e, t) {
                        return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                            if (void 0 !== e) return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }

                    function F(e) {
                        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function P(e, t) {
                        return (P = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }
                    var I = function(e) {
                        function n(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n), (t = O(this, F(n).call(this, e))).modalTarget = document.createElement("div"), t.modalTarget.className = "intl-tel-input iti-container", t
                        }
                        var t, o, r;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && P(e, t)
                        }(n, a["Component"]), t = n, (o = [{
                            key: "componentDidMount",
                            value: function() {
                                document.body.appendChild(this.modalTarget)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                document.body.removeChild(this.modalTarget)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return k.a.createPortal(f.a.createElement(a.Fragment, null, this.props.children), this.modalTarget)
                            }
                        }]) && N(t.prototype, o), r && N(t, r), n
                    }();

                    function T(e) {
                        return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function q(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function E(e) {
                        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function A(e, t) {
                        return (A = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function j(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function M(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    I.__docgenInfo = {
                        description: "",
                        methods: [],
                        displayName: "RootModal",
                        props: {
                            children: {
                                type: {
                                    name: "node"
                                },
                                required: !1,
                                description: ""
                            }
                        }
                    };
                    var x = function(e) {
                        function i() {
                            var e, p, t, n;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, i);
                            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                            return t = this, n = (e = E(i)).call.apply(e, [this].concat(r)), M(j(j(p = !n || "object" !== T(n) && "function" != typeof n ? j(t) : n)), "genSelectedDialCode", function() {
                                var e = p.props,
                                    t = e.separateDialCode,
                                    n = e.dialCode;
                                return t ? f.a.createElement("div", {
                                    className: "selected-dial-code"
                                }, n) : ""
                            }), M(j(j(p)), "genArrow", function() {
                                var e = p.props,
                                    t = e.allowDropdown,
                                    n = e.showDropdown,
                                    o = s()({
                                        "iti-arrow": !0,
                                        up: n
                                    });
                                return t ? f.a.createElement("div", {
                                    className: o
                                }) : ""
                            }), M(j(j(p)), "genFlagClassName", function() {
                                var e = p.props.countryCode,
                                    t = {
                                        "iti-flag": !0
                                    };
                                return e && (t[e] = !0), s()(t)
                            }), M(j(j(p)), "genCountryList", function() {
                                var e = p.props,
                                    t = e.dropdownContainer,
                                    n = e.showDropdown,
                                    o = e.isMobile,
                                    r = e.allowDropdown,
                                    a = e.setFlag,
                                    i = e.countries,
                                    l = e.inputTop,
                                    u = e.inputOuterHeight,
                                    s = e.preferredCountries,
                                    d = e.highlightedCountry,
                                    c = e.changeHighlightCountry;
                                return f.a.createElement(v, {
                                    ref: function(e) {
                                        p.countryList = e
                                    },
                                    dropdownContainer: t,
                                    isMobile: o,
                                    showDropdown: r && n,
                                    setFlag: a,
                                    countries: i,
                                    inputTop: l,
                                    inputOuterHeight: u,
                                    preferredCountries: s,
                                    highlightedCountry: d,
                                    changeHighlightCountry: c
                                })
                            }), p
                        }
                        var t, n, o;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && A(e, t)
                        }(i, a["Component"]), t = i, (n = [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    n = e.allowDropdown,
                                    o = e.clickSelectedFlag,
                                    r = e.handleSelectedFlagKeydown,
                                    a = e.titleTip,
                                    i = e.dropdownContainer,
                                    l = e.showDropdown;
                                return f.a.createElement("div", {
                                    ref: t,
                                    className: "flag-container"
                                }, f.a.createElement("div", {
                                    className: "selected-flag",
                                    tabIndex: n ? "0" : "",
                                    onClick: o,
                                    onKeyDown: r,
                                    title: a
                                }, f.a.createElement("div", {
                                    className: this.genFlagClassName()
                                }), this.genSelectedDialCode(), this.genArrow()), i && l ? f.a.createElement(I, null, this.genCountryList()) : this.genCountryList())
                            }
                        }]) && q(t.prototype, n), o && q(t, o), i
                    }();

                    function L(e) {
                        return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function V() {
                        return (V = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function _(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function U(e) {
                        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function B(e, t) {
                        return (B = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function H(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function R(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    x.__docgenInfo = {
                        description: "",
                        methods: [{
                            name: "genSelectedDialCode",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "genArrow",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "genFlagClassName",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "genCountryList",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }],
                        displayName: "FlagDropDown",
                        props: {
                            allowDropdown: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            dropdownContainer: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            separateDialCode: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            dialCode: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            countryCode: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            showDropdown: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            clickSelectedFlag: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            handleSelectedFlagKeydown: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            isMobile: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            setFlag: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            countries: {
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "object"
                                    }
                                },
                                required: !1,
                                description: ""
                            },
                            inputTop: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            inputOuterHeight: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            preferredCountries: {
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "object"
                                    }
                                },
                                required: !1,
                                description: ""
                            },
                            highlightedCountry: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            },
                            changeHighlightCountry: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            titleTip: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            refCallback: {
                                type: {
                                    name: "func"
                                },
                                required: !0,
                                description: ""
                            }
                        }
                    };
                    var K = function(e) {
                        function l() {
                            var e, t, n, o;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, l);
                            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                            return n = this, o = (e = U(l)).call.apply(e, [this].concat(a)), R(H(H(t = !o || "object" !== L(o) && "function" != typeof o ? H(n) : o)), "state", {
                                hasFocus: !1
                            }), R(H(H(t)), "refHandler", function(e) {
                                t.tel = e, t.props.refCallback(e)
                            }), R(H(H(t)), "handleBlur", function(e) {
                                t.setState({
                                    hasFocus: !1
                                }), "function" == typeof t.props.handleOnBlur && t.props.handleOnBlur(e)
                            }), R(H(H(t)), "handleFocus", function(e) {
                                t.setState({
                                    hasFocus: !0
                                }), "function" == typeof t.props.handleOnFocus && t.props.handleOnFocus(e)
                            }), t
                        }
                        var t, n, o;
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && B(e, t)
                        }(l, a["Component"]), t = l, (n = [{
                            key: "componentDidUpdate",
                            value: function() {
                                this.state.hasFocus && this.tel.setSelectionRange(this.props.cursorPosition, this.props.cursorPosition)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return f.a.createElement("input", V({}, this.props.inputProps, {
                                    ref: this.refHandler,
                                    type: "tel",
                                    autoComplete: this.props.autoComplete,
                                    className: this.props.className,
                                    disabled: !!this.props.disabled && "disabled",
                                    readOnly: !!this.props.readonly && "readonly",
                                    name: this.props.fieldName,
                                    id: this.props.fieldId,
                                    value: this.props.value,
                                    placeholder: this.props.placeholder,
                                    onChange: this.props.handleInputChange,
                                    onBlur: this.handleBlur,
                                    onFocus: this.handleFocus,
                                    autoFocus: this.props.autoFocus
                                }))
                            }
                        }]) && _(t.prototype, n), o && _(t, o), l
                    }();
                    K.__docgenInfo = {
                        description: "",
                        methods: [{
                            name: "refHandler",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "element",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleBlur",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleFocus",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }],
                        displayName: "TelInput",
                        props: {
                            className: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            disabled: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            readonly: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            fieldName: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            fieldId: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            value: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            placeholder: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            handleInputChange: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            handleOnBlur: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            handleOnFocus: {
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: ""
                            },
                            autoFocus: {
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: ""
                            },
                            autoComplete: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: ""
                            },
                            inputProps: {
                                type: {
                                    name: "object"
                                },
                                required: !1,
                                description: ""
                            },
                            refCallback: {
                                type: {
                                    name: "func"
                                },
                                required: !0,
                                description: ""
                            },
                            cursorPosition: {
                                type: {
                                    name: "number"
                                },
                                required: !1,
                                description: ""
                            }
                        }
                    };
                    r(4);

                    function z(e) {
                        return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function W(e) {
                        return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function G(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function J(e, t, n) {
                        return t && G(e.prototype, t), n && G(e, n), e
                    }

                    function Y(e, t) {
                        return (Y = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function Z(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function $(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    var Q = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
                        X = function(e) {
                            function o(e) {
                                var p, t, n;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), t = this, n = W(o).call(this, e), $(Z(Z(p = !n || "object" !== z(n) && "function" != typeof n ? Z(t) : n)), "updateFlagOnDefaultCountryChange", function(e) {
                                    p.setFlag(e, !1)
                                }), $(Z(Z(p)), "getTempCountry", function(e) {
                                    if ("auto" === e) return "auto";
                                    var t = m.getCountryData(p.countries, e);
                                    return t.iso2 || (t = 0 < p.props.preferredCountries.length ? m.getCountryData(p.countries, p.props.preferredCountries[0]) : c.getCountries()[0]), t.iso2
                                }), $(Z(Z(p)), "setNumber", function(e, t) {
                                    p.updateFlagFromNumber(e), p.updateValFromNumber(e, !t)
                                }), $(Z(Z(p)), "setFlagDropdownRef", function(e) {
                                    p.flagDropDown = e
                                }), $(Z(Z(p)), "setTelRef", function(e) {
                                    p.tel = e
                                }), $(Z(Z(p)), "setFlag", function(o, r) {
                                    var a = p.selectedCountryData && p.selectedCountryData.iso2 ? p.selectedCountryData : {};
                                    p.selectedCountryData = o ? m.getCountryData(p.countries, o, !1, !1, p.props.noCountryDataHandler) : {}, p.selectedCountryData.iso2 && (p.defaultCountry = p.selectedCountryData.iso2);
                                    var e = o ? "".concat(p.selectedCountryData.name, ": +").concat(p.selectedCountryData.dialCode) : "Unknown",
                                        t = p.state.dialCode;
                                    p.props.separateDialCode && (t = p.selectedCountryData.dialCode ? "+".concat(p.selectedCountryData.dialCode) : "", a.dialCode && delete p.wrapperClass["iti-sdc-".concat(a.dialCode.length + 1)], t && (p.wrapperClass["iti-sdc-".concat(t.length)] = !0));
                                    var n = 0;
                                    o && "auto" !== o && -1 === (n = m.findIndex(p.preferredCountries, function(e) {
                                        return e.iso2 === o
                                    })) && (-1 === (n = m.findIndex(p.countries, function(e) {
                                        return e.iso2 === o
                                    })) && (n = 0), n += p.preferredCountries.length), p.tel && p.state.showDropdown && p.tel.focus();
                                    var i = p.updateDialCode(p.selectedCountryData.dialCode, !r);
                                    p.setState({
                                        value: i,
                                        showDropdown: !1,
                                        highlightedCountry: n,
                                        countryCode: o,
                                        title: e,
                                        dialCode: t
                                    }, function() {
                                        if (p.updatePlaceholder(p.props), p.wrapperClass.active = !1, !r && a.iso2 !== o && "function" == typeof p.props.onSelectFlag) {
                                            var e = p.state.value,
                                                t = p.formatFullNumber(e),
                                                n = p.isValidNumber(t);
                                            p.props.onSelectFlag(e, p.selectedCountryData, t, n)
                                        }
                                    })
                                }), $(Z(Z(p)), "getExtension", function(e) {
                                    return window.intlTelInputUtils ? window.intlTelInputUtils.getExtension(p.getFullNumber(e), p.selectedCountryData.iso2) : ""
                                }), $(Z(Z(p)), "getNumber", function(e, t) {
                                    return window.intlTelInputUtils ? window.intlTelInputUtils.formatNumber(p.getFullNumber(e), p.selectedCountryData.iso2, t) : ""
                                }), $(Z(Z(p)), "getFullNumber", function(e) {
                                    return (p.props.separateDialCode ? "+".concat(p.selectedCountryData.dialCode) : "") + e
                                }), $(Z(Z(p)), "getDialCode", function(e) {
                                    var t = "";
                                    if ("+" === e.charAt(0))
                                        for (var n = "", o = 0, r = e.length; o < r; o++) {
                                            var a = e.charAt(o);
                                            if (m.isNumeric(a) && (n += a, p.countryCodes[n] && (t = e.substr(0, o + 1)), 4 === n.length)) break
                                        }
                                    return t
                                }), $(Z(Z(p)), "isUnknownNanp", function(e, t) {
                                    return "+1" === t && 4 <= m.getNumeric(e).length
                                }), $(Z(Z(p)), "addCountryCode", function(e, t, n, o) {
                                    n in e || (e[n] = []);
                                    var r = o || 0;
                                    return e[n][r] = t, e
                                }), $(Z(Z(p)), "processAllCountries", function() {
                                    p.props.onlyCountries.length ? p.filterCountries(p.props.onlyCountries, function(e) {
                                        return -1 !== e
                                    }) : p.props.excludeCountries.length ? p.filterCountries(p.props.excludeCountries, function(e) {
                                        return -1 === e
                                    }) : p.countries = c.getCountries()
                                }), $(Z(Z(p)), "processCountryCodes", function() {
                                    p.countryCodes = {};
                                    for (var e = 0; e < p.countries.length; e++) {
                                        var t = p.countries[e];
                                        if (p.addCountryCode(p.countryCodes, t.iso2, t.dialCode, t.priority), t.areaCodes)
                                            for (var n = 0; n < t.areaCodes.length; n++) p.addCountryCode(p.countryCodes, t.iso2, t.dialCode + t.areaCodes[n])
                                    }
                                }), $(Z(Z(p)), "processPreferredCountries", function() {
                                    p.preferredCountries = [];
                                    for (var e = 0, t = p.props.preferredCountries.length; e < t; e++) {
                                        var n = p.props.preferredCountries[e].toLowerCase(),
                                            o = m.getCountryData(p.countries, n, !0);
                                        o && p.preferredCountries.push(o)
                                    }
                                }), $(Z(Z(p)), "setInitialState", function() {
                                    var e = p.props.value || p.props.defaultValue || "";
                                    p.getDialCode(e) ? p.updateFlagFromNumber(e, !0) : "auto" !== p.tempCountry && (p.tempCountry ? p.setFlag(p.tempCountry, !0) : (p.defaultCountry = p.preferredCountries.length ? p.preferredCountries[0].iso2 : p.countries[0].iso2, e || p.setFlag(p.defaultCountry, !0)), e || p.nationalMode || p.autoHideDialCode || p.props.separateDialCode || p.setState({
                                        value: "+".concat(p.selectedCountryData.dialCode)
                                    }));
                                    e && p.updateValFromNumber(e, p.props.formatOnInit, !0)
                                }), $(Z(Z(p)), "initRequests", function() {
                                    Promise.resolve().then(r.t.bind(null, 6, 7)).then(function() {
                                        p.loadUtils(), p.utilsScriptDeferred.resolve()
                                    }).catch(function() {
                                        return "An error occurred while loading the component"
                                    }), "auto" === p.tempCountry ? p.loadAutoCountry() : p.autoCountryDeferred.resolve()
                                }), $(Z(Z(p)), "loadAutoCountry", function() {
                                    var e = void 0 !== window.localStorage ? window.localStorage.getItem("itiAutoCountry") : "";
                                    e && (p.autoCountry = e), p.autoCountry ? p.autoCountryLoaded() : p.startedLoadingAutoCountry || (p.startedLoadingAutoCountry = !0, "function" == typeof p.props.geoIpLookup && p.props.geoIpLookup(function(e) {
                                        p.autoCountry = e.toLowerCase(), void 0 !== window.localStorage && window.localStorage.setItem("itiAutoCountry", p.autoCountry), p.autoCountryLoaded()
                                    }))
                                }), $(Z(Z(p)), "cap", function(e) {
                                    var t = p.tel ? p.tel.getAttribute("maxlength") : e;
                                    return t && e.length > t ? e.substr(0, t) : e
                                }), $(Z(Z(p)), "removeEmptyDialCode", function() {
                                    var e = p.state.value;
                                    if ("+" === e.charAt(0)) {
                                        var t = m.getNumeric(e);
                                        t && p.selectedCountryData.dialCode !== t || p.setState({
                                            value: ""
                                        })
                                    }
                                }), $(Z(Z(p)), "handleUpDownKey", function(e) {
                                    var t = p.flagDropDown.querySelectorAll(".highlight")[0],
                                        n = t ? t.previousElementSibling : void 0,
                                        o = t ? t.nextElementSibling : void 0,
                                        r = e === p.keys.UP ? n : o;
                                    if (r) {
                                        -1 < r.getAttribute("class").indexOf("divider") && (r = e === p.keys.UP ? r.previousElementSibling : r.nextElementSibling), p.scrollTo(r);
                                        var a = m.retrieveLiIndex(r);
                                        p.setState({
                                            showDropdown: !0,
                                            highlightedCountry: a
                                        })
                                    }
                                }), $(Z(Z(p)), "handleEnterKey", function() {
                                    var e = p.flagDropDown.querySelectorAll(".highlight")[0];
                                    if (e) {
                                        var t = m.retrieveLiIndex(e),
                                            n = e.getAttribute("data-country-code");
                                        p.setState({
                                            showDropdown: !1,
                                            highlightedCountry: t,
                                            countryCode: n
                                        }, function() {
                                            p.setFlag(p.state.countryCode), p.unbindDocumentClick()
                                        })
                                    }
                                }), $(Z(Z(p)), "searchForCountry", function(e) {
                                    for (var t = 0, n = p.countries.length; t < n; t++)
                                        if (m.startsWith(p.countries[t].name, e)) {
                                            var o = p.flagDropDown.querySelector('.country-list [data-country-code="'.concat(p.countries[t].iso2, '"]:not(.preferred)')),
                                                r = m.retrieveLiIndex(o);
                                            p.setState({
                                                showDropdown: !0,
                                                highlightedCountry: r
                                            }), p.scrollTo(o, !0);
                                            break
                                        }
                                }), $(Z(Z(p)), "formatNumber", function(e) {
                                    if (window.intlTelInputUtils && p.selectedCountryData) {
                                        var t = window.intlTelInputUtils.numberFormat.INTERNATIONAL;
                                        (!p.props.separateDialCode && p.nationalMode || "+" !== e.charAt(0)) && (t = window.intlTelInputUtils.numberFormat.NATIONAL), e = window.intlTelInputUtils.formatNumber(e, p.selectedCountryData.iso2, t)
                                    }
                                    return e
                                }), $(Z(Z(p)), "updateValFromNumber", function(e, t) {
                                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                                    if (t && window.intlTelInputUtils && p.selectedCountryData) {
                                        var o = p.props.separateDialCode || !p.nationalMode && "+" === e.charAt(0) ? window.intlTelInputUtils.numberFormat.INTERNATIONAL : window.intlTelInputUtils.numberFormat.NATIONAL;
                                        e = window.intlTelInputUtils.formatNumber(e, p.selectedCountryData.iso2, o)
                                    }
                                    e = p.beforeSetNumber(e), p.setState({
                                        showDropdown: !1,
                                        value: e
                                    }, function() {
                                        n && p.notifyPhoneNumberChange(e), p.unbindDocumentClick()
                                    })
                                }), $(Z(Z(p)), "updateFlagFromNumber", function(e, t) {
                                    e && p.nationalMode && p.selectedCountryData && "1" === p.selectedCountryData.dialCode && "+" !== e.charAt(0) && ("1" !== e.charAt(0) && (e = "1".concat(e)), e = "+".concat(e));
                                    var n = p.getDialCode(e),
                                        o = null;
                                    if (n) {
                                        var r = p.countryCodes[m.getNumeric(n)];
                                        if (!(p.selectedCountryData && -1 !== r.indexOf(p.selectedCountryData.iso2)) || p.isUnknownNanp(e, n))
                                            for (var a = 0; a < r.length; a++)
                                                if (r[a]) {
                                                    o = r[a];
                                                    break
                                                }
                                    } else "+" === e.charAt(0) && m.getNumeric(e).length && (o = null);
                                    null !== o && p.setFlag(o, t)
                                }), $(Z(Z(p)), "filterCountries", function(e, t) {
                                    var n;
                                    for (n = 0; n < e.length; n++) e[n] = e[n].toLowerCase();
                                    for (p.countries = [], n = 0; n < c.getCountries().length; n++) t(e.indexOf(c.getCountries()[n].iso2)) && p.countries.push(c.getCountries()[n])
                                }), $(Z(Z(p)), "processCountryData", function() {
                                    c.initialize(p.props.countriesData), p.processAllCountries.call(Z(Z(p))), p.processCountryCodes.call(Z(Z(p))), p.processPreferredCountries.call(Z(Z(p)))
                                }), $(Z(Z(p)), "handleOnBlur", function(e) {
                                    if (p.removeEmptyDialCode(), "function" == typeof p.props.onPhoneNumberBlur) {
                                        var t = p.state.value,
                                            n = p.formatFullNumber(t),
                                            o = p.isValidNumber(n);
                                        p.props.onPhoneNumberBlur(o, t, p.selectedCountryData, n, p.getExtension(t), e)
                                    }
                                }), $(Z(Z(p)), "handleOnFocus", function(e) {
                                    if ("function" == typeof p.props.onPhoneNumberFocus) {
                                        var t = p.state.value,
                                            n = p.formatFullNumber(t),
                                            o = p.isValidNumber(n);
                                        p.props.onPhoneNumberFocus(o, t, p.selectedCountryData, n, p.getExtension(t), e)
                                    }
                                }), $(Z(Z(p)), "bindDocumentClick", function() {
                                    p.isOpening = !0, document.querySelector("html").addEventListener("click", p.handleDocumentClick)
                                }), $(Z(Z(p)), "unbindDocumentClick", function() {
                                    document.querySelector("html").removeEventListener("click", p.handleDocumentClick)
                                }), $(Z(Z(p)), "clickSelectedFlag", function(e) {
                                    var t = p.props,
                                        n = t.allowDropdown,
                                        o = t.onFlagClick,
                                        r = p.state,
                                        a = r.showDropdown,
                                        i = r.disabled,
                                        l = r.readonly;
                                    a || i || l || !n ? a && p.toggleDropdown(!1) : p.setState({
                                        showDropdown: !0,
                                        offsetTop: m.offset(p.tel).top,
                                        outerHeight: m.getOuterHeight(p.tel)
                                    }, function() {
                                        var e = p.flagDropDown.querySelector(".highlight");
                                        e && p.scrollTo(e, !0)
                                    }), "function" == typeof o && o(e)
                                }), $(Z(Z(p)), "updatePlaceholder", function() {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : p.props;
                                    if (window.intlTelInputUtils && e.autoPlaceholder && p.selectedCountryData) {
                                        var t = window.intlTelInputUtils.numberType[e.numberType],
                                            n = p.selectedCountryData.iso2 ? window.intlTelInputUtils.getExampleNumber(p.selectedCountryData.iso2, p.nationalMode, t) : "";
                                        n = p.beforeSetNumber(n, e), "function" == typeof e.customPlaceholder && (n = e.customPlaceholder(n, p.selectedCountryData)), p.setState({
                                            placeholder: n
                                        })
                                    }
                                }), $(Z(Z(p)), "toggleDropdown", function(e) {
                                    p.setState({
                                        showDropdown: !!e
                                    }, function() {
                                        p.state.showDropdown || p.unbindDocumentClick()
                                    })
                                }), $(Z(Z(p)), "scrollTo", function(e, t) {
                                    try {
                                        var n = p.flagDropDown.querySelector(".country-list"),
                                            o = parseFloat(window.getComputedStyle(n).getPropertyValue("height")),
                                            r = m.offset(n).top,
                                            a = r + o,
                                            i = m.getOuterHeight(e),
                                            l = m.offset(e).top,
                                            u = l + i,
                                            s = o / 2 - i / 2,
                                            d = l - r + n.scrollTop;
                                        if (l < r) t && (d -= s), n.scrollTop = d;
                                        else if (a < u) {
                                            t && (d += s);
                                            var c = o - i;
                                            n.scrollTop = d - c
                                        }
                                    } catch (e) {}
                                }), $(Z(Z(p)), "updateDialCode", function(e, t) {
                                    var n = p.state.value;
                                    if (!e) return n;
                                    var o = n;
                                    if (e = "+".concat(e), "+" === n.charAt(0)) {
                                        var r = p.getDialCode(n);
                                        o = r ? n.replace(r, e) : e
                                    } else p.nationalMode || p.props.separateDialCode || (n ? o = e + n : !t && p.autoHideDialCode || (o = e));
                                    return o !== n && p.notifyPhoneNumberChange(o), o
                                }), $(Z(Z(p)), "generateMarkup", function() {
                                    p.wrapperClass["separate-dial-code"] = p.props.separateDialCode, p.isMobile && p.props.useMobileFullscreenDropdown && (m.addClass(document.querySelector("body"), "iti-mobile"), p.dropdownContainer = "body", window.addEventListener("scroll", p.handleWindowScroll))
                                }), $(Z(Z(p)), "handleSelectedFlagKeydown", function(e) {
                                    p.state.showDropdown || e.which !== p.keys.UP && e.which !== p.keys.DOWN && e.which !== p.keys.SPACE && e.which !== p.keys.ENTER || (e.preventDefault(), e.stopPropagation(), p.toggleDropdown(!0)), e.which === p.keys.TAB && p.toggleDropdown(!1)
                                }), $(Z(Z(p)), "isValidNumber", function(e) {
                                    var t = m.trim(e),
                                        n = p.nationalMode || p.props.separateDialCode ? p.selectedCountryData.iso2 : "";
                                    return !!window.intlTelInputUtils && window.intlTelInputUtils.isValidNumber(t, n)
                                }), $(Z(Z(p)), "formatFullNumber", function(e) {
                                    return window.intlTelInputUtils ? p.getNumber(e, window.intlTelInputUtils.numberFormat.INTERNATIONAL) : e
                                }), $(Z(Z(p)), "notifyPhoneNumberChange", function(e) {
                                    if ("function" == typeof p.props.onPhoneNumberChange) {
                                        var t = p.formatFullNumber(e),
                                            n = p.isValidNumber(t);
                                        p.props.onPhoneNumberChange(n, e, p.selectedCountryData, t, p.getExtension(e))
                                    }
                                }), $(Z(Z(p)), "beforeSetNumber", function(e) {
                                    if ((1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : p.props).separateDialCode) {
                                        var t = p.getDialCode(e);
                                        if (t) {
                                            null !== p.selectedCountryData.areaCodes && (t = "+".concat(p.selectedCountryData.dialCode));
                                            var n = " " === e[t.length] || "-" === e[t.length] ? t.length + 1 : t.length;
                                            e = e.substr(n)
                                        }
                                    }
                                    return p.cap(e)
                                }), $(Z(Z(p)), "handleWindowScroll", function() {
                                    p.setState({
                                        showDropdown: !1
                                    }, function() {
                                        window.removeEventListener("scroll", p.handleWindowScroll)
                                    })
                                }), $(Z(Z(p)), "handleDocumentKeyDown", function(e) {
                                    var t;
                                    e.preventDefault(), e.which === p.keys.UP || e.which === p.keys.DOWN ? p.handleUpDownKey(e.which) : e.which === p.keys.ENTER ? p.handleEnterKey() : e.which === p.keys.ESC ? p.setState({
                                        showDropdown: !1
                                    }) : (e.which >= p.keys.A && e.which <= p.keys.Z || e.which === p.keys.SPACE) && (t && clearTimeout(t), p.query || (p.query = ""), p.query += String.fromCharCode(e.which), p.searchForCountry(p.query), t = setTimeout(function() {
                                        p.query = ""
                                    }, 1e3))
                                }), $(Z(Z(p)), "handleDocumentClick", function(e) {
                                    var t = e.target.getAttribute("class");
                                    (null === t || t && -1 === t.indexOf("country") && -1 === t.indexOf("selected-flag") && -1 === t.indexOf("iti-flag") && -1 === t.indexOf("iti-arrow")) && (p.isOpening = !1), p.isOpening || p.toggleDropdown(!1), p.isOpening = !1
                                }), $(Z(Z(p)), "handleInputChange", function(e) {
                                    var t = e.target.selectionStart,
                                        n = e.target.value,
                                        o = "" === n ? n : n.substring(0, t),
                                        r = p.props.format ? p.formatNumber(e.target.value) : e.target.value;
                                    t = m.getCursorPositionAfterFormating(o, n, r), void 0 !== p.props.value ? p.setState({
                                        cursorPosition: t
                                    }, function() {
                                        p.updateFlagFromNumber(r), p.notifyPhoneNumberChange(r)
                                    }) : p.setState({
                                        value: r,
                                        cursorPosition: t
                                    }, function() {
                                        p.updateFlagFromNumber(r), p.notifyPhoneNumberChange(r)
                                    })
                                }), $(Z(Z(p)), "changeHighlightCountry", function(e, t) {
                                    p.setState({
                                        showDropdown: e,
                                        highlightedCountry: t
                                    })
                                }), $(Z(Z(p)), "loadUtils", function() {
                                    window.intlTelInputUtils && p.utilsScriptDeferred.resolve()
                                }), $(Z(Z(p)), "autoCountryLoaded", function() {
                                    "auto" === p.tempCountry && (p.tempCountry = p.autoCountry, p.autoCountryDeferred.resolve())
                                }), p.wrapperClass = {}, p.autoCountry = "", p.tempCountry = "", p.startedLoadingAutoCountry = !1, p.deferreds = [], p.autoCountryDeferred = new l.a.Deferred, p.utilsScriptDeferred = new l.a.Deferred, p.isOpening = !1, p.isMobile = "undefined" != typeof navigator && Q.test(navigator.userAgent), p.preferredCountries = [], p.countries = [], p.countryCodes = {}, p.windowLoaded = !1, p.keys = {
                                    UP: 38,
                                    DOWN: 40,
                                    ENTER: 13,
                                    ESC: 27,
                                    PLUS: 43,
                                    A: 65,
                                    Z: 90,
                                    SPACE: 32,
                                    TAB: 9
                                }, p.query = "", p.selectedCountryData = {}, p.state = {
                                    showDropdown: !1,
                                    highlightedCountry: 0,
                                    value: e.value || e.defaultValue,
                                    disabled: e.disabled,
                                    readonly: !1,
                                    offsetTop: 0,
                                    outerHeight: 0,
                                    placeholder: "",
                                    title: "",
                                    countryCode: "us",
                                    dialCode: "",
                                    cursorPosition: (e.value || e.defaultValue).length
                                }, p
                            }
                            return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && Y(e, t)
                            }(o, a["Component"]), J(o, null, [{
                                key: "getDerivedStateFromProps",
                                value: function(e, t) {
                                    var n = null;
                                    return void 0 !== e.value && t.value !== e.value && (n = {
                                        value: e.value
                                    }), t.disabled !== e.disabled && (n = {
                                        disabled: e.disabled
                                    }), n
                                }
                            }]), J(o, [{
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    this.autoHideDialCode = this.props.autoHideDialCode, this.allowDropdown = this.props.allowDropdown, this.nationalMode = this.props.nationalMode, this.dropdownContainer = "", this.nationalMode && (this.autoHideDialCode = !1), this.props.separateDialCode && (this.autoHideDialCode = !1, this.nationalMode = !1, this.allowDropdown = !0), this.processCountryData.call(this), this.tempCountry = this.getTempCountry(this.props.defaultCountry), "complete" === document.readyState ? this.windowLoaded = !0 : window.addEventListener("load", function() {
                                        e.windowLoaded = !0
                                    }), this.generateMarkup(), this.setInitialState(), this.initRequests(), this.deferreds.push(this.autoCountryDeferred.promise()), this.deferreds.push(this.utilsScriptDeferred.promise()), l.a.when(this.deferreds).done(function() {
                                        e.setInitialState()
                                    }), document.addEventListener("keydown", this.handleDocumentKeyDown)
                                }
                            }, {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return t.showDropdown ? (document.addEventListener("keydown", this.handleDocumentKeyDown), this.bindDocumentClick()) : (document.removeEventListener("keydown", this.handleDocumentKeyDown), this.unbindDocumentClick()), !0
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function(e) {
                                    this.props.value !== e.value && this.updateFlagFromNumber(this.props.value), "function" == typeof this.props.customPlaceholder && e.customPlaceholder !== this.props.customPlaceholder && this.updatePlaceholder(this.props), this.props.allowDropdown !== e.allowDropdown && (this.allowDropdown = this.props.allowDropdown), this.props.defaultCountry !== e.defaultCountry && this.updateFlagOnDefaultCountryChange(this.props.defaultCountry)
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    document.removeEventListener("keydown", this.handleDocumentKeyDown), window.removeEventListener("scroll", this.handleWindowScroll), this.unbindDocumentClick()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    this.wrapperClass[this.props.containerClassName] = !0;
                                    var e = this.props.inputClassName,
                                        t = Object.assign({}, this.props.style || {});
                                    this.wrapperClass["allow-dropdown"] = this.allowDropdown, this.wrapperClass.expanded = this.state.showDropdown;
                                    var n = s()(this.wrapperClass),
                                        o = this.selectedCountryData ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown",
                                        r = void 0 !== this.props.value ? this.props.value : this.state.value;
                                    return f.a.createElement("div", {
                                        className: n,
                                        style: t
                                    }, f.a.createElement(x, {
                                        refCallback: this.setFlagDropdownRef,
                                        allowDropdown: this.allowDropdown,
                                        dropdownContainer: this.dropdownContainer,
                                        separateDialCode: this.props.separateDialCode,
                                        dialCode: this.state.dialCode,
                                        clickSelectedFlag: this.clickSelectedFlag,
                                        setFlag: this.setFlag,
                                        countryCode: this.state.countryCode,
                                        isMobile: this.isMobile,
                                        handleSelectedFlagKeydown: this.handleSelectedFlagKeydown,
                                        changeHighlightCountry: this.changeHighlightCountry,
                                        countries: this.countries,
                                        showDropdown: this.state.showDropdown,
                                        inputTop: this.state.offsetTop,
                                        inputOuterHeight: this.state.outerHeight,
                                        preferredCountries: this.preferredCountries,
                                        highlightedCountry: this.state.highlightedCountry,
                                        titleTip: o
                                    }), f.a.createElement(K, {
                                        refCallback: this.setTelRef,
                                        handleInputChange: this.handleInputChange,
                                        handleOnBlur: this.handleOnBlur,
                                        handleOnFocus: this.handleOnFocus,
                                        className: e,
                                        disabled: this.state.disabled,
                                        readonly: this.state.readonly,
                                        fieldName: this.props.fieldName,
                                        fieldId: this.props.fieldId,
                                        value: r,
                                        placeholder: void 0 !== this.props.placeholder ? this.props.placeholder : this.state.placeholder,
                                        autoFocus: this.props.autoFocus,
                                        autoComplete: this.props.autoComplete,
                                        inputProps: this.props.telInputProps,
                                        cursorPosition: this.state.cursorPosition
                                    }))
                                }
                            }]), o
                        }();
                    X.defaultProps = {
                        containerClassName: "intl-tel-input",
                        inputClassName: "",
                        fieldName: "",
                        fieldId: "",
                        defaultValue: "",
                        countriesData: null,
                        allowDropdown: !0,
                        autoHideDialCode: !0,
                        autoPlaceholder: !0,
                        customPlaceholder: null,
                        excludeCountries: [],
                        formatOnInit: !0,
                        separateDialCode: !1,
                        defaultCountry: "",
                        geoIpLookup: null,
                        nationalMode: !0,
                        numberType: "MOBILE",
                        noCountryDataHandler: null,
                        onlyCountries: [],
                        preferredCountries: ["us", "gb"],
                        onPhoneNumberChange: null,
                        onPhoneNumberBlur: null,
                        onPhoneNumberFocus: null,
                        onSelectFlag: null,
                        disabled: !1,
                        autoFocus: !1,
                        useMobileFullscreenDropdown: !0,
                        autoComplete: "off",
                        telInputProps: {},
                        format: !1,
                        onFlagClick: null
                    };
                    t.default = X;
                    X.__docgenInfo = {
                        description: "",
                        methods: [{
                            name: "getDerivedStateFromProps",
                            docblock: null,
                            modifiers: ["static"],
                            params: [{
                                name: "nextProps",
                                type: null
                            }, {
                                name: "prevState",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "updateFlagOnDefaultCountryChange",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countryCode",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "getTempCountry",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countryCode",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "setNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "preventFormat",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "setFlagDropdownRef",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "ref",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "setTelRef",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "ref",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "setFlag",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countryCode",
                                type: null
                            }, {
                                name: "isInit",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "getExtension",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "getNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "format",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "getFullNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "getDialCode",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "isUnknownNanp",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "dialCode",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "addCountryCode",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countryCodes",
                                type: null
                            }, {
                                name: "iso2",
                                type: null
                            }, {
                                name: "dialCode",
                                type: null
                            }, {
                                name: "priority",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "processAllCountries",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "processCountryCodes",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "processPreferredCountries",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "setInitialState",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "initRequests",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "loadAutoCountry",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "cap",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "removeEmptyDialCode",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "handleUpDownKey",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "key",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleEnterKey",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "searchForCountry",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "query",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "formatNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "updateValFromNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "doFormat",
                                type: null
                            }, {
                                name: "doNotify",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "updateFlagFromNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "isInit",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "filterCountries",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "countryArray",
                                type: null
                            }, {
                                name: "processFunc",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "processCountryData",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "handleOnBlur",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleOnFocus",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "bindDocumentClick",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "unbindDocumentClick",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "clickSelectedFlag",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "updatePlaceholder",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "props",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "toggleDropdown",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "status",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "scrollTo",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "element",
                                type: null
                            }, {
                                name: "middle",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "updateDialCode",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "newDialCode",
                                type: null
                            }, {
                                name: "hasSelectedListItem",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "generateMarkup",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "handleSelectedFlagKeydown",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "isValidNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "formatFullNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "notifyPhoneNumberChange",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "newNumber",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "beforeSetNumber",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "number",
                                type: null
                            }, {
                                name: "props",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleWindowScroll",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "handleDocumentKeyDown",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleDocumentClick",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "handleInputChange",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "e",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "changeHighlightCountry",
                            docblock: null,
                            modifiers: [],
                            params: [{
                                name: "showDropdown",
                                type: null
                            }, {
                                name: "selectedIndex",
                                type: null
                            }],
                            returns: null
                        }, {
                            name: "loadUtils",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }, {
                            name: "autoCountryLoaded",
                            docblock: null,
                            modifiers: [],
                            params: [],
                            returns: null
                        }],
                        displayName: "IntlTelInput",
                        props: {
                            containerClassName: {
                                defaultValue: {
                                    value: "'intl-tel-input'",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Container CSS class name."
                            },
                            inputClassName: {
                                defaultValue: {
                                    value: "''",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Text input CSS class name."
                            },
                            fieldName: {
                                defaultValue: {
                                    value: "''",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "It's used as `input` field `name` attribute."
                            },
                            fieldId: {
                                defaultValue: {
                                    value: "''",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "It's used as `input` field `id` attribute."
                            },
                            defaultValue: {
                                defaultValue: {
                                    value: "''",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "The value used to initialize input. This will only work on uncontrolled component."
                            },
                            countriesData: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "array"
                                    }
                                },
                                required: !1,
                                description: "Countries data can be configured, it defaults to data defined in `AllCountries`."
                            },
                            allowDropdown: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Whether or not to allow the dropdown. If disabled, there is no dropdown arrow, and the selected flag is not clickable.\nAlso we display the selected flag on the right instead because it is just a marker of state."
                            },
                            autoHideDialCode: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "If there is just a dial code in the input: remove it on blur, and re-add it on focus."
                            },
                            autoPlaceholder: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Add or remove input placeholder with an example number for the selected country."
                            },
                            customPlaceholder: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Change the placeholder generated by autoPlaceholder. Must return a string."
                            },
                            excludeCountries: {
                                defaultValue: {
                                    value: "[]",
                                    computed: !1
                                },
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "string"
                                    }
                                },
                                required: !1,
                                description: "Don't display the countries you specify. (Array)"
                            },
                            formatOnInit: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Format the input value during initialisation."
                            },
                            separateDialCode: {
                                defaultValue: {
                                    value: "false",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Display the country dial code next to the selected flag so it's not part of the typed number.\nNote that this will disable nationalMode because technically we are dealing with international numbers,\nbut with the dial code separated."
                            },
                            defaultCountry: {
                                defaultValue: {
                                    value: "''",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Default country."
                            },
                            geoIpLookup: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "GeoIp lookup function."
                            },
                            nationalMode: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Don't insert international dial codes."
                            },
                            numberType: {
                                defaultValue: {
                                    value: "'MOBILE'",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Number type to use for placeholders."
                            },
                            noCountryDataHandler: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: 'The function which can catch the "no this default country" exception.'
                            },
                            onlyCountries: {
                                defaultValue: {
                                    value: "[]",
                                    computed: !1
                                },
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "string"
                                    }
                                },
                                required: !1,
                                description: "Display only these countries."
                            },
                            preferredCountries: {
                                defaultValue: {
                                    value: "['us', 'gb']",
                                    computed: !1
                                },
                                type: {
                                    name: "arrayOf",
                                    value: {
                                        name: "string"
                                    }
                                },
                                required: !1,
                                description: "The countries at the top of the list. defaults to United States and United Kingdom."
                            },
                            onPhoneNumberChange: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Optional validation callback function. It returns validation status, input box value and selected country data."
                            },
                            onPhoneNumberBlur: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Optional validation callback function. It returns validation status, input box value and selected country data."
                            },
                            onPhoneNumberFocus: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Optional validation callback function. It returns validation status, input box value and selected country data."
                            },
                            onSelectFlag: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Allow main app to do things when a country is selected."
                            },
                            disabled: {
                                defaultValue: {
                                    value: "false",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Disable this component."
                            },
                            autoFocus: {
                                defaultValue: {
                                    value: "false",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Enable auto focus"
                            },
                            useMobileFullscreenDropdown: {
                                defaultValue: {
                                    value: "true",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Render fullscreen flag dropdown when mobile useragent is detected. The dropdown element is rendered as a direct child of document.body"
                            },
                            autoComplete: {
                                defaultValue: {
                                    value: "'off'",
                                    computed: !1
                                },
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Set the value of the autoComplete attribute on the input. For example, set it to phone to tell the browser where to auto complete phone numbers."
                            },
                            telInputProps: {
                                defaultValue: {
                                    value: "{}",
                                    computed: !1
                                },
                                type: {
                                    name: "object"
                                },
                                required: !1,
                                description: "Pass through arbitrary props to the tel input element."
                            },
                            format: {
                                defaultValue: {
                                    value: "false",
                                    computed: !1
                                },
                                type: {
                                    name: "bool"
                                },
                                required: !1,
                                description: "Format the number."
                            },
                            onFlagClick: {
                                defaultValue: {
                                    value: "null",
                                    computed: !1
                                },
                                type: {
                                    name: "func"
                                },
                                required: !1,
                                description: "Allow main app to do things when flag icon is clicked."
                            },
                            value: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "The value of the input field. Useful for making input value controlled from outside the component."
                            },
                            placeholder: {
                                type: {
                                    name: "string"
                                },
                                required: !1,
                                description: "Static placeholder for input controller. When defined it takes priority over autoPlaceholder."
                            },
                            style: {
                                type: {
                                    name: "custom",
                                    raw: "StylePropTypes"
                                },
                                required: !1,
                                description: "Style object for the wrapper div. Useful for setting 100% width on the wrapper, etc."
                            }
                        }
                    }
                }, function(e, t) {
                    e.exports = r
                }])
            });
        }),
        631: (function(module, exports) {
            (function() {
                var aa = this;

                function k(a) {
                    return "string" == typeof a
                }

                function m(a, b) {
                    a = a.split(".");
                    var c = aa;
                    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
                }

                function n(a, b) {
                    function c() {}
                    c.prototype = b.prototype;
                    a.o = b.prototype;
                    a.prototype = new c;
                    a.prototype.constructor = a;
                    a.aa = function(a, c, f) {
                        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                        return b.prototype[c].apply(a, d)
                    }
                };
                var p = Array.prototype.indexOf ? function(a, b, c) {
                    return Array.prototype.indexOf.call(a, b, c)
                } : function(a, b, c) {
                    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                    if (k(a)) return k(b) && 1 == b.length ? a.indexOf(b, c) : -1;
                    for (; c < a.length; c++)
                        if (c in a && a[c] === b) return c;
                    return -1
                };

                function q(a, b) {
                    a.sort(b || ba)
                }

                function ba(a, b) {
                    return a > b ? 1 : a < b ? -1 : 0
                };

                function ca(a) {
                    var b = [],
                        c = 0,
                        d;
                    for (d in a) b[c++] = a[d];
                    return b
                };

                function da(a, b) {
                    this.a = a;
                    this.h = !!b.i;
                    this.c = b.b;
                    this.m = b.type;
                    this.l = !1;
                    switch (this.c) {
                        case ea:
                        case fa:
                        case ha:
                        case ia:
                        case ja:
                        case ka:
                        case la:
                            this.l = !0
                    }
                    this.g = b.defaultValue
                }
                var la = 1,
                    ka = 2,
                    ea = 3,
                    fa = 4,
                    ha = 6,
                    ia = 16,
                    ja = 18;

                function ma(a, b) {
                    this.c = a;
                    this.a = {};
                    for (a = 0; a < b.length; a++) {
                        var c = b[a];
                        this.a[c.a] = c
                    }
                }

                function na(a) {
                    a = ca(a.a);
                    q(a, function(a, c) {
                        return a.a - c.a
                    });
                    return a
                };

                function r() {
                    this.a = {};
                    this.g = this.f().a;
                    this.c = this.h = null
                }
                r.prototype.has = function(a) {
                    return null != this.a[a.a]
                };
                r.prototype.get = function(a, b) {
                    return t(this, a.a, b)
                };
                r.prototype.set = function(a, b) {
                    u(this, a.a, b)
                };
                r.prototype.add = function(a, b) {
                    v(this, a.a, b)
                };

                function oa(a, b) {
                    for (var c = na(a.f()), d = 0; d < c.length; d++) {
                        var e = c[d],
                            f = e.a;
                        if (null != b.a[f]) {
                            a.c && delete a.c[e.a];
                            var g = 11 == e.c || 10 == e.c;
                            if (e.h) {
                                e = w(b, f);
                                for (var h = 0; h < e.length; h++) v(a, f, g ? e[h].clone() : e[h])
                            } else e = x(b, f), g ? (g = x(a, f)) ? oa(g, e) : u(a, f, e.clone()) : u(a, f, e)
                        }
                    }
                }
                r.prototype.clone = function() {
                    var a = new this.constructor;
                    a != this && (a.a = {}, a.c && (a.c = {}), oa(a, this));
                    return a
                };

                function x(a, b) {
                    var c = a.a[b];
                    if (null == c) return null;
                    if (a.h) {
                        if (!(b in a.c)) {
                            var d = a.h,
                                e = a.g[b];
                            if (null != c)
                                if (e.h) {
                                    for (var f = [], g = 0; g < c.length; g++) f[g] = d.c(e, c[g]);
                                    c = f
                                } else c = d.c(e, c);
                            return a.c[b] = c
                        }
                        return a.c[b]
                    }
                    return c
                }

                function t(a, b, c) {
                    var d = x(a, b);
                    return a.g[b].h ? d[c || 0] : d
                }

                function y(a, b) {
                    if (null != a.a[b]) a = t(a, b, void 0);
                    else a: {
                        a = a.g[b];
                        if (void 0 === a.g)
                            if (b = a.m, b === Boolean) a.g = !1;
                            else if (b === Number) a.g = 0;
                        else if (b === String) a.g = a.l ? "0" : "";
                        else {
                            a = new b;
                            break a
                        }
                        a = a.g
                    }
                    return a
                }

                function w(a, b) {
                    return x(a, b) || []
                }

                function A(a, b) {
                    return a.g[b].h ? null != a.a[b] ? a.a[b].length : 0 : null != a.a[b] ? 1 : 0
                }

                function u(a, b, c) {
                    a.a[b] = c;
                    a.c && (a.c[b] = c)
                }

                function v(a, b, c) {
                    a.a[b] || (a.a[b] = []);
                    a.a[b].push(c);
                    a.c && delete a.c[b]
                }

                function B(a, b) {
                    var c = [],
                        d;
                    for (d in b) 0 != d && c.push(new da(d, b[d]));
                    return new ma(a, c)
                };

                function C() {}
                C.prototype.a = function(a) {
                    new a.c;
                    throw Error("Unimplemented");
                };
                C.prototype.c = function(a, b) {
                    if (11 == a.c || 10 == a.c) return b instanceof r ? b : this.a(a.m.prototype.f(), b);
                    if (14 == a.c) return k(b) && pa.test(b) && (a = Number(b), 0 < a) ? a : b;
                    if (!a.l) return b;
                    a = a.m;
                    if (a === String) {
                        if ("number" == typeof b) return String(b)
                    } else if (a === Number && k(b) && ("Infinity" === b || "-Infinity" === b || "NaN" === b || pa.test(b))) return Number(b);
                    return b
                };
                var pa = /^-?[0-9]+$/;

                function D() {}
                n(D, C);
                D.prototype.a = function(a, b) {
                    a = new a.c;
                    a.h = this;
                    a.a = b;
                    a.c = {};
                    return a
                };

                function E() {}
                n(E, D);
                E.prototype.c = function(a, b) {
                    return 8 == a.c ? !!b : C.prototype.c.apply(this, arguments)
                };
                E.prototype.a = function(a, b) {
                    return E.o.a.call(this, a, b)
                };

                function F(a, b) {
                    null != a && this.a.apply(this, arguments)
                }
                F.prototype.c = "";
                F.prototype.set = function(a) {
                    this.c = "" + a
                };
                F.prototype.a = function(a, b, c) {
                    this.c += String(a);
                    if (null != b)
                        for (var d = 1; d < arguments.length; d++) this.c += arguments[d];
                    return this
                };
                F.prototype.toString = function() {
                    return this.c
                };

                function G() {
                    r.call(this)
                }
                n(G, r);
                var qa = null;

                function H() {
                    r.call(this)
                }
                n(H, r);
                var ra = null;

                function I() {
                    r.call(this)
                }
                n(I, r);
                var sa = null;
                G.prototype.f = function() {
                    var a = qa;
                    a || (qa = a = B(G, {
                        0: {
                            name: "NumberFormat",
                            j: "i18n.phonenumbers.NumberFormat"
                        },
                        1: {
                            name: "pattern",
                            required: !0,
                            b: 9,
                            type: String
                        },
                        2: {
                            name: "format",
                            required: !0,
                            b: 9,
                            type: String
                        },
                        3: {
                            name: "leading_digits_pattern",
                            i: !0,
                            b: 9,
                            type: String
                        },
                        4: {
                            name: "national_prefix_formatting_rule",
                            b: 9,
                            type: String
                        },
                        6: {
                            name: "national_prefix_optional_when_formatting",
                            b: 8,
                            defaultValue: !1,
                            type: Boolean
                        },
                        5: {
                            name: "domestic_carrier_code_formatting_rule",
                            b: 9,
                            type: String
                        }
                    }));
                    return a
                };
                G.f = G.prototype.f;
                H.prototype.f = function() {
                    var a = ra;
                    a || (ra = a = B(H, {
                        0: {
                            name: "PhoneNumberDesc",
                            j: "i18n.phonenumbers.PhoneNumberDesc"
                        },
                        2: {
                            name: "national_number_pattern",
                            b: 9,
                            type: String
                        },
                        9: {
                            name: "possible_length",
                            i: !0,
                            b: 5,
                            type: Number
                        },
                        10: {
                            name: "possible_length_local_only",
                            i: !0,
                            b: 5,
                            type: Number
                        },
                        6: {
                            name: "example_number",
                            b: 9,
                            type: String
                        }
                    }));
                    return a
                };
                H.f = H.prototype.f;
                I.prototype.f = function() {
                    var a = sa;
                    a || (sa = a = B(I, {
                        0: {
                            name: "PhoneMetadata",
                            j: "i18n.phonenumbers.PhoneMetadata"
                        },
                        1: {
                            name: "general_desc",
                            b: 11,
                            type: H
                        },
                        2: {
                            name: "fixed_line",
                            b: 11,
                            type: H
                        },
                        3: {
                            name: "mobile",
                            b: 11,
                            type: H
                        },
                        4: {
                            name: "toll_free",
                            b: 11,
                            type: H
                        },
                        5: {
                            name: "premium_rate",
                            b: 11,
                            type: H
                        },
                        6: {
                            name: "shared_cost",
                            b: 11,
                            type: H
                        },
                        7: {
                            name: "personal_number",
                            b: 11,
                            type: H
                        },
                        8: {
                            name: "voip",
                            b: 11,
                            type: H
                        },
                        21: {
                            name: "pager",
                            b: 11,
                            type: H
                        },
                        25: {
                            name: "uan",
                            b: 11,
                            type: H
                        },
                        27: {
                            name: "emergency",
                            b: 11,
                            type: H
                        },
                        28: {
                            name: "voicemail",
                            b: 11,
                            type: H
                        },
                        29: {
                            name: "short_code",
                            b: 11,
                            type: H
                        },
                        30: {
                            name: "standard_rate",
                            b: 11,
                            type: H
                        },
                        31: {
                            name: "carrier_specific",
                            b: 11,
                            type: H
                        },
                        33: {
                            name: "sms_services",
                            b: 11,
                            type: H
                        },
                        24: {
                            name: "no_international_dialling",
                            b: 11,
                            type: H
                        },
                        9: {
                            name: "id",
                            required: !0,
                            b: 9,
                            type: String
                        },
                        10: {
                            name: "country_code",
                            b: 5,
                            type: Number
                        },
                        11: {
                            name: "international_prefix",
                            b: 9,
                            type: String
                        },
                        17: {
                            name: "preferred_international_prefix",
                            b: 9,
                            type: String
                        },
                        12: {
                            name: "national_prefix",
                            b: 9,
                            type: String
                        },
                        13: {
                            name: "preferred_extn_prefix",
                            b: 9,
                            type: String
                        },
                        15: {
                            name: "national_prefix_for_parsing",
                            b: 9,
                            type: String
                        },
                        16: {
                            name: "national_prefix_transform_rule",
                            b: 9,
                            type: String
                        },
                        18: {
                            name: "same_mobile_and_fixed_line_pattern",
                            b: 8,
                            defaultValue: !1,
                            type: Boolean
                        },
                        19: {
                            name: "number_format",
                            i: !0,
                            b: 11,
                            type: G
                        },
                        20: {
                            name: "intl_number_format",
                            i: !0,
                            b: 11,
                            type: G
                        },
                        22: {
                            name: "main_country_for_code",
                            b: 8,
                            defaultValue: !1,
                            type: Boolean
                        },
                        23: {
                            name: "leading_digits",
                            b: 9,
                            type: String
                        },
                        26: {
                            name: "leading_zero_possible",
                            b: 8,
                            defaultValue: !1,
                            type: Boolean
                        }
                    }));
                    return a
                };
                I.f = I.prototype.f;

                function J() {
                    r.call(this)
                }
                n(J, r);
                var ta = null,
                    ua = {
                        $: 0,
                        w: 1,
                        v: 5,
                        u: 10,
                        s: 20
                    };
                J.prototype.f = function() {
                    var a = ta;
                    a || (ta = a = B(J, {
                        0: {
                            name: "PhoneNumber",
                            j: "i18n.phonenumbers.PhoneNumber"
                        },
                        1: {
                            name: "country_code",
                            required: !0,
                            b: 5,
                            type: Number
                        },
                        2: {
                            name: "national_number",
                            required: !0,
                            b: 4,
                            type: Number
                        },
                        3: {
                            name: "extension",
                            b: 9,
                            type: String
                        },
                        4: {
                            name: "italian_leading_zero",
                            b: 8,
                            type: Boolean
                        },
                        8: {
                            name: "number_of_leading_zeros",
                            b: 5,
                            defaultValue: 1,
                            type: Number
                        },
                        5: {
                            name: "raw_input",
                            b: 9,
                            type: String
                        },
                        6: {
                            name: "country_code_source",
                            b: 14,
                            defaultValue: 0,
                            type: ua
                        },
                        7: {
                            name: "preferred_domestic_carrier_code",
                            b: 9,
                            type: String
                        }
                    }));
                    return a
                };
                J.ctor = J;
                J.ctor.f = J.prototype.f;
                var K = {
                        1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
                        7: ["RU", "KZ"],
                        20: ["EG"],
                        27: ["ZA"],
                        30: ["GR"],
                        31: ["NL"],
                        32: ["BE"],
                        33: ["FR"],
                        34: ["ES"],
                        36: ["HU"],
                        39: ["IT", "VA"],
                        40: ["RO"],
                        41: ["CH"],
                        43: ["AT"],
                        44: ["GB", "GG", "IM", "JE"],
                        45: ["DK"],
                        46: ["SE"],
                        47: ["NO", "SJ"],
                        48: ["PL"],
                        49: ["DE"],
                        51: ["PE"],
                        52: ["MX"],
                        53: ["CU"],
                        54: ["AR"],
                        55: ["BR"],
                        56: ["CL"],
                        57: ["CO"],
                        58: ["VE"],
                        60: ["MY"],
                        61: ["AU", "CC", "CX"],
                        62: ["ID"],
                        63: ["PH"],
                        64: ["NZ"],
                        65: ["SG"],
                        66: ["TH"],
                        81: ["JP"],
                        82: ["KR"],
                        84: ["VN"],
                        86: ["CN"],
                        90: ["TR"],
                        91: ["IN"],
                        92: ["PK"],
                        93: ["AF"],
                        94: ["LK"],
                        95: ["MM"],
                        98: ["IR"],
                        211: ["SS"],
                        212: ["MA", "EH"],
                        213: ["DZ"],
                        216: ["TN"],
                        218: ["LY"],
                        220: ["GM"],
                        221: ["SN"],
                        222: ["MR"],
                        223: ["ML"],
                        224: ["GN"],
                        225: ["CI"],
                        226: ["BF"],
                        227: ["NE"],
                        228: ["TG"],
                        229: ["BJ"],
                        230: ["MU"],
                        231: ["LR"],
                        232: ["SL"],
                        233: ["GH"],
                        234: ["NG"],
                        235: ["TD"],
                        236: ["CF"],
                        237: ["CM"],
                        238: ["CV"],
                        239: ["ST"],
                        240: ["GQ"],
                        241: ["GA"],
                        242: ["CG"],
                        243: ["CD"],
                        244: ["AO"],
                        245: ["GW"],
                        246: ["IO"],
                        247: ["AC"],
                        248: ["SC"],
                        249: ["SD"],
                        250: ["RW"],
                        251: ["ET"],
                        252: ["SO"],
                        253: ["DJ"],
                        254: ["KE"],
                        255: ["TZ"],
                        256: ["UG"],
                        257: ["BI"],
                        258: ["MZ"],
                        260: ["ZM"],
                        261: ["MG"],
                        262: ["RE", "YT"],
                        263: ["ZW"],
                        264: ["NA"],
                        265: ["MW"],
                        266: ["LS"],
                        267: ["BW"],
                        268: ["SZ"],
                        269: ["KM"],
                        290: ["SH", "TA"],
                        291: ["ER"],
                        297: ["AW"],
                        298: ["FO"],
                        299: ["GL"],
                        350: ["GI"],
                        351: ["PT"],
                        352: ["LU"],
                        353: ["IE"],
                        354: ["IS"],
                        355: ["AL"],
                        356: ["MT"],
                        357: ["CY"],
                        358: ["FI", "AX"],
                        359: ["BG"],
                        370: ["LT"],
                        371: ["LV"],
                        372: ["EE"],
                        373: ["MD"],
                        374: ["AM"],
                        375: ["BY"],
                        376: ["AD"],
                        377: ["MC"],
                        378: ["SM"],
                        380: ["UA"],
                        381: ["RS"],
                        382: ["ME"],
                        383: ["XK"],
                        385: ["HR"],
                        386: ["SI"],
                        387: ["BA"],
                        389: ["MK"],
                        420: ["CZ"],
                        421: ["SK"],
                        423: ["LI"],
                        500: ["FK"],
                        501: ["BZ"],
                        502: ["GT"],
                        503: ["SV"],
                        504: ["HN"],
                        505: ["NI"],
                        506: ["CR"],
                        507: ["PA"],
                        508: ["PM"],
                        509: ["HT"],
                        590: ["GP", "BL", "MF"],
                        591: ["BO"],
                        592: ["GY"],
                        593: ["EC"],
                        594: ["GF"],
                        595: ["PY"],
                        596: ["MQ"],
                        597: ["SR"],
                        598: ["UY"],
                        599: ["CW", "BQ"],
                        670: ["TL"],
                        672: ["NF"],
                        673: ["BN"],
                        674: ["NR"],
                        675: ["PG"],
                        676: ["TO"],
                        677: ["SB"],
                        678: ["VU"],
                        679: ["FJ"],
                        680: ["PW"],
                        681: ["WF"],
                        682: ["CK"],
                        683: ["NU"],
                        685: ["WS"],
                        686: ["KI"],
                        687: ["NC"],
                        688: ["TV"],
                        689: ["PF"],
                        690: ["TK"],
                        691: ["FM"],
                        692: ["MH"],
                        800: ["001"],
                        808: ["001"],
                        850: ["KP"],
                        852: ["HK"],
                        853: ["MO"],
                        855: ["KH"],
                        856: ["LA"],
                        870: ["001"],
                        878: ["001"],
                        880: ["BD"],
                        881: ["001"],
                        882: ["001"],
                        883: ["001"],
                        886: ["TW"],
                        888: ["001"],
                        960: ["MV"],
                        961: ["LB"],
                        962: ["JO"],
                        963: ["SY"],
                        964: ["IQ"],
                        965: ["KW"],
                        966: ["SA"],
                        967: ["YE"],
                        968: ["OM"],
                        970: ["PS"],
                        971: ["AE"],
                        972: ["IL"],
                        973: ["BH"],
                        974: ["QA"],
                        975: ["BT"],
                        976: ["MN"],
                        977: ["NP"],
                        979: ["001"],
                        992: ["TJ"],
                        993: ["TM"],
                        994: ["AZ"],
                        995: ["GE"],
                        996: ["KG"],
                        998: ["UZ"]
                    },
                    wa = {
                        AC: [, [, , "(?:[01589]\\d|[46])\\d{4}", , , , , , , [5, 6]],
                            [, , "6[2-467]\\d{3}", , , , "62889", , , [5]],
                            [, , "4\\d{4}", , , , "40123", , , [5]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "[01589]\\d{5}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]
                        ],
                        AD: [, [, , "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", , , , , , , [6, 8, 9]],
                            [, , "[78]\\d{5}", , , , "712345", , , [6]],
                            [, , "690\\d{6}|[36]\\d{5}", , , , "312345", , , [6, 9]],
                            [, , "180[02]\\d{4}", , , , "18001234", , , [8]],
                            [, , "[19]\\d{5}", , , , "912345", , , [6]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AD", 376, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                            ], , [, , , , , , , , , [-1]], , , [, , "1800\\d{4}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AE: [, [, , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                            [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8],
                                [7]
                            ],
                            [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
                            [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
                            [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
                            [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AE", 971, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                                [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "600[25]\\d{5}", , , , "600212345", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        AF: [, [, , "[2-7]\\d{8}", , , , , , , [9],
                                [7]
                            ],
                            [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [7]],
                            [, , "7(?:[014-9]\\d|2[89]|3[01])\\d{6}", , , , "701234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                            ],
                            [
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AG: [, [, , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [7]],
                            [, , "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", , , , "2684641234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]], "AG", 1, "011", "1", , , "1|([457]\\d{6})$", "268$1", , , , , [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]], , "268", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AI: [, [, , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "2644(?:6[12]|9[78])\\d{4}", , , , "2644612345", , , , [7]],
                            [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "1|([2457]\\d{6})$", "264$1", , , , , [, , , , , , , , , [-1]], , "264", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AL: [, [, , "(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}", , , , , , , [6, 7, 8, 9],
                                [5]
                            ],
                            [, , "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", , , , "22345678", , , [8],
                                [5, 6, 7]
                            ],
                            [, , "6(?:[689][2-9]|7[2-6])\\d{6}", , , , "662123456", , , [9]],
                            [, , "800\\d{4}", , , , "8001234", , , [7]],
                            [, , "900[1-9]\\d\\d", , , , "900123", , , [6]],
                            [, , "808[1-9]\\d\\d", , , , "808123", , , [6]],
                            [, , "700[2-9]\\d{4}", , , , "70021234", , , [8]],
                            [, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AM: [, [, , "(?:[1-489]\\d|55|60|77)\\d{6}", , , , , , , [8],
                                [5, 6]
                            ],
                            [, , "(?:(?:1[0-2]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [5, 6]],
                            [, , "(?:4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456"],
                            [, , "800\\d{5}", , , , "80012345"],
                            [, , "90[016]\\d{5}", , , , "90012345"],
                            [, , "80[1-4]\\d{5}", , , , "80112345"],
                            [, , , , , , , , , [-1]],
                            [, , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}", , , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AO: [, [, , "[29]\\d{8}", , , , , , , [9]],
                            [, , "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", , , , "222123456"],
                            [, , "9[1-49]\\d{7}", , , , "923123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AO", 244, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AR: [, [, , "(?:11|(?:[2368]|9\\d)\\d)\\d{8}", , , , , , , [10, 11],
                                [6, 7, 8]
                            ],
                            [, , "(?:(?:11[2-7]|670)\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6]))))\\d{5}", , , , "1123456789", , , [10],
                                [6, 7, 8]
                            ],
                            [, , "(?:675\\d\\d|9(?:11[2-7]\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6])))))\\d{5}", , , , "91123456789", , , , [6, 7, 8]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", , , [
                                [, "(\\d{3})", "$1", ["[09]|1(?:[02]|1[02-5])"]],
                                [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-7]|8[0-7]"]],
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]|8[013-8]"]],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["2[0-8]|[3-7]"]],
                                [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:[56][4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|[45][4-6]))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4[4-6]|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78])))", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|6[4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78])))"], "0$1", , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:[56][4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|[45][4-6]))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4[4-6]|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78]))))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|6[4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78]))))"], "0$1"],
                                [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]
                            ],
                            [
                                [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:[56][4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|[45][4-6]))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4[4-6]|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78])))", "2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|6[4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78])))"], "0$1", , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:[56][4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|[45][4-6]))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4[4-6]|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78]))))", "9(?:2(?:2(?:02|[24-9])|3(?:02|[1-59])|47|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|6[4-6]|[78])|5(?:4[46]|[56][4-6]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3(?:[278]|5[4-6])|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7(?:[378]|6[4-6])|8(?:5[4-6]|6[3-6]|[78]))))"]],
                                [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "810\\d{7}", , , , , , , [10]],
                            [, , "810\\d{7}", , , , "8101234567", , , [10]], , , [, , , , , , , , , [-1]]
                        ],
                        AS: [, [, , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]],
                            [, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", , , , "6847331234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "1|([267]\\d{6})$", "684$1", , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AT: [, [, , "[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{6}|[135-7]\\d{5}|[15]\\d{4}|1\\d{3}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                [3]
                            ],
                            [, , "(?:1(?:11|[2-9]\\d{2,10})|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,9}|4(?:(?:2[1-8]|35|7[1368]|8[2457])\\d{3,9}|63\\d{2,9})|5(?:12\\d{2,9}|(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])\\d{3,9})|6(?:(?:13|2[1-47]|4[135-8]|5[468])\\d{3,9}|62\\d{2,9}))\\d|(?:316|732)\\d{3}", , , , "1234567890", , , , [3]],
                            [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]],
                            [, , "800\\d{6,10}", , , , "800123456", , , [9, 10, 11, 12, 13]],
                            [, , "9(?:0[01]|3[019])\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]],
                            [, , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                                [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                                [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                [, "(\\d{6})", "$1", ["1"]],
                                [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                                [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                            ],
                            [
                                [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                                [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                                [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                                [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AU: [, [, , "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", , , , , , , [5, 6, 7, 8, 9, 10]],
                            [, , "(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", , , , "212345678", , , [9],
                                [8]
                            ],
                            [, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                            [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                            [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                            [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:14(?:5\\d|71)|550\\d)\\d{5}", , , , "550123456", , , [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0", , "0011", , [
                                [, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]],
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]],
                                [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]],
                                [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                            ],
                            [, , "16\\d{3,7}", , , , "1612345", , , [5, 6, 7, 8, 9]], 1, , [, , "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}", , , , , , , [6, 7, 8, 10]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AW: [, [, , "(?:[25-79]\\d\\d|800)\\d{4}", , , , , , , [7]],
                            [, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"],
                            [, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"],
                            [, , "800\\d{4}", , , , "8001234"],
                            [, , "900\\d{4}", , , , "9001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:28\\d|501)\\d{4}", , , , "5011234"], "AW", 297, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        AX: [, [, , "(?:(?:[1247]\\d|3[0-46-9]|[56]0)\\d\\d|800)\\d{4,6}|(?:[1-47]\\d|50)\\d{4,5}|2\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10]],
                            [, , "18[1-8]\\d{3,6}", , , , "181234567", , , [6, 7, 8, 9]],
                            [, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
                            [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                            [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , "18", [, , , , , , , , , [-1]],
                            [, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
                        ],
                        AZ: [, [, , "(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}", , , , , , , [9],
                                [7]
                            ],
                            [, , "(?:(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}", , , , "123123456", , , , [7]],
                            [, , "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}", , , , "401234567"],
                            [, , "88\\d{7}", , , , "881234567"],
                            [, , "900200\\d{3}", , , , "900200123"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                            ],
                            [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BA: [, [, , "(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}", , , , , , , [8, 9],
                                [6]
                            ],
                            [, , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8],
                                [6]
                            ],
                            [, , "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}", , , , "61123456"],
                            [, , "8[08]\\d{6}", , , , "80123456", , , [8]],
                            [, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
                            [, , "8[12]\\d{6}", , , , "82123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BA", 387, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                            ],
                            [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "70(?:3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        BB: [, [, , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]],
                            [, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", , , , "2462501234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "1|([2-9]\\d{6})$", "246$1", , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]],
                            [, , "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", , , , "2464301234", , , , [7]], , , [, , , , , , , , , [-1]]
                        ],
                        BD: [, [, , "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", , , , , , , [6, 7, 8, 9, 10]],
                            [, , "(?:(?:2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|7(?:02|21\\d|[3-589]1|6[12]|72[24])\\d|8(?:(?:[01]|217|3[12])\\d|4[12]|[5-7](?:1\\d|2)))\\d|3(?:(?:0(?:2[348]\\d|3[2-6])|(?:1(?:2[5-7]|[5-7])|3(?:1|24)|[5-7]1)\\d)\\d|2(?:1\\d\\d|2(?:[35]\\d\\d|4))|4(?:1\\d\\d|2(?:[25]\\d\\d|[47]))|8(?:1\\d\\d|2(?:(?:2\\d|4)\\d|3)))|4(?:0(?:2(?:[09]\\d|7)|33\\d\\d)|(?:1\\d|4(?:2[2-46]|5[25])|8(?:23|54))\\d\\d|2(?:1\\d\\d|2(?:[25]|[67]\\d\\d))|3(?:1\\d\\d(?:\\d{2})?|(?:2[236-9]|32)\\d\\d)|525|6(?:(?:[18]|2[3-6]|62)\\d\\d|5(?:[38]|[5-7]\\d\\d))|9(?:(?:[18]|2[2-5])\\d\\d|53\\d\\d?))|5(?:(?:02[03489]|1|22[2457]|32[35-79]|42[46]|[58]26|724)\\d\\d|6(?:(?:[18]|53)\\d\\d|2))|6(?:(?:(?:[04]2[34]|32[3478]|52[47]|[78]2[2-5]|92[2-6])\\d|6(?:[18]\\d|6(?:2(?:2|[34]\\d)|5[245]\\d)))\\d|2(?:(?:2[2-5]|8)\\d\\d|5(?:[3-5]\\d\\d|7)))|9(?:[24]1\\d\\d|[35]1))\\d{3}|(?:3(?:0(?:2[02-9]\\d|3[56])|(?:22[1-5]|32[2-6]|422)\\d|529)|(?:4(?:22[2-8]|32[02-9]|(?:[48][18]|71)\\d|5(?:1\\d|23)|6(?:2[467]|5[3-57]))|5(?:[2-47-9]1\\d|5(?:1\\d|26))|6(?:0(?:1\\d|24)|[3-589]1\\d|665[35])|81|9(?:[024]2|1\\d|81))\\d|732)\\d{3}|(?:4[46]23|5(?:222|32[37]))\\d{3}", , , , "27111234"],
                            [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", , , , "1812345678", , , [10]],
                            [, , "80[03]\\d{7}", , , , "8001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
                                [, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[2-5]1|[67]|8[013-9])|4(?:[235]1|4[01346-9]|6[168]|7|[89][18])|5(?:[2-578]1|6[128]|9)|6(?:[0389]1|28|4[14]|5|6[01346-9])|7(?:[2-589]|61)|8(?:0[014-9]|[12]|[3-7]1)|9(?:[24]1|[358])"], "0$1"],
                                [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                                [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BE: [, [, , "4\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9]],
                            [, , "(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}", , , , "12345678", , , [8]],
                            [, , "4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", , , , "470123456", , , [9]],
                            [, , "800[1-9]\\d{4}", , , , "80012345", , , [8]],
                            [, , "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", , , , "90012345", , , [8]],
                            [, , "7879\\d{4}", , , , "78791234", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", , , , "78102345", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        BF: [, [, , "[25-7]\\d{7}", , , , , , , [8]],
                            [, , "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"],
                            [, , "(?:5[124-8]|[67]\\d)\\d{6}", , , , "70123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BG: [, [, , "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [6, 7, 8, 9],
                                [4, 5]
                            ],
                            [, , "(?:(?:[236]\\d|5[1-9]|8[1-6]|9[1-7])\\d|4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}|2\\d{5}", , , , "2123456", , , [6, 7, 8],
                                [4, 5]
                            ],
                            [, , "(?:4(?:3[07-9]|8\\d)|(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d)\\d{5}", , , , "48123456", , , [8, 9]],
                            [, , "800\\d{5}", , , , "80012345", , , [8]],
                            [, , "90\\d{6}", , , , "90123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , "700\\d{5}", , , , "70012345", , , [8]],
                            [, , , , , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [
                                [, "(\\d{6})", "$1", ["1"]],
                                [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                            ],
                            [
                                [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BH: [, [, , "[136-9]\\d{7}", , , , , , , [8]],
                            [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}", , , , "17001234"],
                            [, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}", , , , "36001234"],
                            [, , "80\\d{6}", , , , "80123456"],
                            [, , "(?:87|9[014578])\\d{6}", , , , "90123456"],
                            [, , "84\\d{6}", , , , "84123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BH", 973, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BI: [, [, , "(?:[267]\\d|31)\\d{6}", , , , , , , [8]],
                            [, , "22\\d{6}", , , , "22201234"],
                            [, , "(?:29|31|6[189]|7[125-9])\\d{6}", , , , "79561234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BJ: [, [, , "[2689]\\d{7}", , , , , , , [8]],
                            [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", , , , "20211234"],
                            [, , "(?:6\\d|9[03-9])\\d{6}", , , , "90011234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "857[58]\\d{4}", , , , "85751234"], "BJ", 229, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "81\\d{6}", , , , "81123456"], , , [, , , , , , , , , [-1]]
                        ],
                        BL: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                            [, , "590(?:2[7-9]|5[12]|87)\\d{4}", , , , "590271234"],
                            [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BL", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BM: [, [, , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", , , , "4412345678", , , , [7]],
                            [, , "441(?:[37]\\d|5[0-39])\\d{5}", , , , "4413701234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "BM", 1, "011", "1", , , "1|([2-8]\\d{6})$", "441$1", , , , , [, , , , , , , , , [-1]], , "441", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BN: [, [, , "[2-578]\\d{6}", , , , , , , [7]],
                            [, , "(?:2(?:[013-9]\\d|2[0-7])|[3-5]\\d\\d)\\d{4}", , , , "2345678"],
                            [, , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BN", 673, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BO: [, [, , "(?:[2-467]\\d{3}|80017)\\d{4}", , , , , , , [8, 9],
                                [7]
                            ],
                            [, , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8],
                                [7]
                            ],
                            [, , "[67]\\d{7}", , , , "71234567", , , [8]],
                            [, , "80017\\d{4}", , , , "800171234", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BO", 591, "00(?:1\\d)?", "0", , , "0(1\\d)?", , , , [
                                [, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"], , "0$CC $1"],
                                [, "(\\d{8})", "$1", ["[67]"], , "0$CC $1"],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], , "0$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BQ: [, [, , "(?:[34]1|7\\d)\\d{5}", , , , , , , [7]],
                            [, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", , , , "7151234"],
                            [, , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "[347]", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BR: [, [, , "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", , , , , , , [8, 9, 10, 11]],
                            [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10],
                                [8]
                            ],
                            [, , "(?:[14689][1-9]9\\d|2[12478](?:7|9\\d)|(?:3[1-578]|5[13-5]|7[13-579])(?:[6-8]|9\\d?))\\d{7}|(?:[189][1-9]7|[46][1-9][6-9])\\d{7}", , , , "11961234567", , , [10, 11],
                                [8, 9]
                            ],
                            [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]],
                            [, , "(?:300|[59]00\\d?)\\d{6}", , , , "300123456", , , [9, 10]],
                            [, , "(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}", , , , "40041234", , , [8, 10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [
                                [, "(\\d{3,5})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])"]],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]", "[235-9]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],
                                [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                                [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])[2-57]|[3-7]"], "($1)", "0 $CC ($1)"],
                                [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["1[1-9]|[2-9]"], "($1)", "0 $CC ($1)"]
                            ],
                            [
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]],
                                [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])[2-57]|[3-7]"], "($1)", "0 $CC ($1)"],
                                [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["1[1-9]|[2-9]"], "($1)", "0 $CC ($1)"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "(?:300\\d|40(?:0\\d|20))\\d{4}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BS: [, [, , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [7]],
                            [, , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [7]],
                            [, , "(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}", , , , "8002123456", , , , [7]],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "BS", 1, "011", "1", , , "1|([3-8]\\d{6})$", "242$1", , , , , [, , , , , , , , , [-1]], , "242", [, , , , , , , , , [-1]],
                            [, , "242225[0-46-9]\\d{3}", , , , "2422250123"], , , [, , , , , , , , , [-1]]
                        ],
                        BT: [, [, , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [7, 8],
                                [6]
                            ],
                            [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7],
                                [6]
                            ],
                            [, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BT", 975, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]],
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                            ],
                            [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BW: [, [, , "(?:(?:[2-6]|7\\d)\\d|90)\\d{5}", , , , , , , [7, 8]],
                            [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", , , , "2401234", , , [7]],
                            [, , "7(?:[1-6]\\d{3}|7(?:[014-8]\\d\\d|200))\\d{3}", , , , "71123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , "90\\d{5}", , , , "9012345", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", , , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BY: [, [, , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11],
                                [5]
                            ],
                            [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9],
                                [5, 6, 7]
                            ],
                            [, , "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", , , , "294911911", , , [9]],
                            [, , "8(?:0[013]|20\\d)\\d{7}|800\\d{3,6}", , , , "8011234567"],
                            [, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                                [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                                [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                                [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:0[013]|10|20\\d)|902)\\d{7}|800\\d{3,6}"],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        BZ: [, [, , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [7, 11]],
                            [, , "(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}", , , , "2221234", , , [7]],
                            [, , "6[0-35-7]\\d{5}", , , , "6221234", , , [7]],
                            [, , "0800\\d{7}", , , , "08001234123", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                                [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CA: [, [, , "(?:[2-8]\\d|90)\\d{8}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
                            [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", , , , "5002345678"],
                            [, , "600[2-9]\\d{6}", , , , "6002012345"], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CC: [, [, , "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", , , , , , , [6, 7, 8, 9, 10]],
                            [, , "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9],
                                [8]
                            ],
                            [, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                            [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                            [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                            [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:14(?:5\\d|71)|550\\d)\\d{5}", , , , "550123456", , , [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CD: [, [, , "[189]\\d{8}|[1-68]\\d{6}", , , , , , , [7, 9]],
                            [, , "12\\d{7}|[1-6]\\d{6}", , , , "1234567"],
                            [, , "(?:8(?:[0-2459]\\d\\d|8)|9[017-9]\\d\\d)\\d{5}", , , , "991234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CF: [, [, , "(?:[27]\\d{3}|8776)\\d{4}", , , , , , , [8]],
                            [, , "2[12]\\d{6}", , , , "21612345"],
                            [, , "7[0257]\\d{6}", , , , "70012345"],
                            [, , , , , , , , , [-1]],
                            [, , "8776\\d{4}", , , , "87761234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CG: [, [, , "(?:(?:0\\d|80)\\d|222)\\d{6}", , , , , , , [9]],
                            [, , "222[1-589]\\d{5}", , , , "222123456"],
                            [, , "0[14-6]\\d{7}", , , , "061234567"],
                            [, , , , , , , , , [-1]],
                            [, , "80(?:0\\d\\d|11[0-4])\\d{4}", , , , "800123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CH: [, [, , "8\\d{11}|[2-9]\\d{8}", , , , , , , [9, 12]],
                            [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]],
                            [, , "7[35-9]\\d{7}", , , , "781234567", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "90[016]\\d{6}", , , , "900123456", , , [9]],
                            [, , "84[0248]\\d{6}", , , , "840123456", , , [9]],
                            [, , "878\\d{6}", , , , "878123456", , , [9]],
                            [, , , , , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                            ], , [, , "74[0248]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                            [, , "5[18]\\d{7}", , , , "581234567", , , [9]], , , [, , "860\\d{9}", , , , "860123456789", , , [12]]
                        ],
                        CI: [, [, , "[02-8]\\d{7}", , , , , , , [8]],
                            [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", , , , "21234567"],
                            [, , "(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}", , , , "01234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CK: [, [, , "[2-8]\\d{4}", , , , , , , [5]],
                            [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"],
                            [, , "[5-8]\\d{4}", , , , "71234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CL: [, [, , "(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}", , , , , , , [9, 10, 11]],
                            [, , "(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}", , , , "221234567", , , [9]],
                            [, , "(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}", , , , "221234567", , , [9]],
                            [, , "(?:1230\\d|800)\\d{6}", , , , "800123456", , , [9, 11]],
                            [, , , , , , , , , [-1]],
                            [, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]],
                            [, , , , , , , , , [-1]],
                            [, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [
                                [, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]],
                                [, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                            ],
                            [
                                [, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , , , , [10, 11]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CM: [, [, , "(?:[26]\\d\\d|88)\\d{6}", , , , , , , [8, 9]],
                            [, , "2(?:22|33|4[23])\\d{6}", , , , "222123456", , , [9]],
                            [, , "6[5-9]\\d{7}", , , , "671234567", , , [9]],
                            [, , "88\\d{6}", , , , "88012345", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CM", 237, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CN: [, [, , "(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}", , , , , , , [7, 8, 9, 10, 11, 12],
                                [5, 6]
                            ],
                            [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})", , , , "1012345678", , , , [5, 6]],
                            [, , "1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[25-7]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}", , , , "13123456789", , , [11]],
                            [, , "(?:10)?800\\d{7}", , , , "8001234567", , , [10, 12]],
                            [, , "16[08]\\d{5}", , , , "16812345", , , [8]],
                            [, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", , , , "4001234567", , , [7, 8, 9, 10, 11],
                                [5, 6]
                            ],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CN", 86, "(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00", "0", , , "0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))", , "00", , [
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                                [, "(\\d{5,6})", "$1", ["100|95"]],
                                [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                                [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                                [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"]],
                                [, "(\\d{2})(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|6[25-7])"], , "$CC $1"],
                                [, "(\\d{5})(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                                [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                                [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                                [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                                [, "(\\d{2})(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|6[25-7])"], , "$CC $1"],
                                [, "(\\d{5})(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                                [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}", , , , , , , [10, 11, 12]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CO: [, [, , "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", , , , , , , [8, 10, 11],
                                [7]
                            ],
                            [, , "[124-8][2-9]\\d{6}", , , , "12345678", , , [8],
                                [7]
                            ],
                            [, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", , , , "3211234567", , , [10]],
                            [, , "1800\\d{7}", , , , "18001234567", , , [11]],
                            [, , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [
                                [, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[25-8]|4[2-9]"], "($1)", "0$CC $1"],
                                [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                                [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1"]
                            ],
                            [
                                [, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[25-8]|4[2-9]"], "($1)", "0$CC $1"],
                                [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                                [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9)", "1(?:800|9)"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CR: [, [, , "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", , , , , , , [8, 10]],
                            [, , "2(?:[024-7]\\d\\d|1(?:0[7-9]|[1-9]\\d))\\d{4}", , , , "22123456", , , [8]],
                            [, , "(?:(?:5(?:0[01]|7[0-3])|(?:7[0-3]|8[3-9])\\d)\\d\\d|6(?:[0-4]\\d{3}|500[01]))\\d{3}", , , , "83123456", , , [8]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "90[059]\\d{7}", , , , "9001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:210[0-6]|4\\d{3}|5100)\\d{4}", , , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], , "$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CU: [, [, , "[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}", , , , , , , [6, 7, 8],
                                [4, 5]
                            ],
                            [, , "(?:2[1-4]|7\\d)\\d{5,6}|(?:3[1-3]|4[1-35-8])\\d{6}|3[23]\\d{4,5}|4[12578]\\d{5}|4[78]\\d{4}", , , , "71234567", , , , [4, 5]],
                            [, , "5\\d{7}", , , , "51234567", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
                                [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                                [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CV: [, [, , "[2-59]\\d{6}", , , , , , , [7]],
                            [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234"],
                            [, , "(?:[34][36]|5[1-389]|9\\d)\\d{5}", , , , "9911234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CV", 238, "0", , , , , , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CW: [, [, , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [7, 8]],
                            [, , "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}", , , , "94351234"],
                            [, , "9(?:5(?:[12467]\\d|3[01])|6[5-9]\\d)\\d{4}", , , , "95181234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "60[0-2]\\d{4}", , , , "6001234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                            ], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, "[69]", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CX: [, [, , "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", , , , , , , [6, 7, 8, 9, 10]],
                            [, , "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [9],
                                [8]
                            ],
                            [, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                            [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                            [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                            [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:14(?:5\\d|71)|550\\d)\\d{5}", , , , "550123456", , , [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        CY: [, [, , "(?:[279]\\d|[58]0)\\d{6}", , , , , , , [8]],
                            [, , "2[2-6]\\d{6}", , , , "22345678"],
                            [, , "9[4-79]\\d{6}", , , , "96123456"],
                            [, , "800\\d{5}", , , , "80001234"],
                            [, , "90[09]\\d{5}", , , , "90012345"],
                            [, , "80[1-9]\\d{5}", , , , "80112345"],
                            [, , "700\\d{5}", , , , "70012345"],
                            [, , , , , , , , , [-1]], "CY", 357, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "(?:50|77)\\d{6}", , , , "77123456"], , , [, , , , , , , , , [-1]]
                        ],
                        CZ: [, [, , "(?:[2-578]\\d|60|9\\d{1,4})\\d{7}", , , , , , , [9, 10, 11, 12]],
                            [, , "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [9]],
                            [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]],
                            [, , "8[134]\\d{7}", , , , "811234567", , , [9]],
                            [, , "70[01]\\d{6}", , , , "700123456", , , [9]],
                            [, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]
                        ],
                        DE: [, [, , "(?:1|[235-9]\\d{11}|4(?:[0-8]\\d{2,10}|9(?:[05]\\d{7}|[46][1-8]\\d{2,6})))\\d{3}|[1-35-9]\\d{6,13}|49(?:(?:[0-25]\\d|3[1-689])\\d{4,8}|4[1-8]\\d{4}|6[0-8]\\d{3,4}|7[1-7]\\d{5,8})|497[0-7]\\d{4}|49(?:[0-2579]\\d|[34][1-9])\\d{3}|[1-9]\\d{5}|[13468]\\d{4}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                                [3]
                            ],
                            [, , "(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:0\\d?|[35-9][15]|4[015])|4(?:0\\d?|[2-9]1)|[57][1-9]1|[68](?:[1-8]1|9\\d?)|9(?:06|[1-9]1))\\d{3}", , , , "30123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                                [3, 4]
                            ],
                            [, , "1(?:5[0-25-9]\\d{8}|(?:6[023]|7\\d)\\d{7,8})", , , , "15123456789", , , [10, 11]],
                            [, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]],
                            [, , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [10, 11]],
                            [, , "1(?:3(?:7[1-6]\\d\\d|8)|80\\d{1,7})\\d{4}", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]],
                            [, , "700\\d{8}", , , , "70012345678", , , [11]],
                            [, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                                [, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)", "2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)"], "0$1"],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                                [, "(\\d{4})(\\d{3,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])"], "0$1"],
                                [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                                [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                                [, "(\\d{5})(\\d{3,10})", "$1 $2", ["3"], "0$1"],
                                [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                                [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                                [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                                [, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                                [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                                [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                                [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                            ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]],
                            [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [, , "1(?:5(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)|(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d?)\\d{7}", , , , "177991234567", , , [12, 13]]
                        ],
                        DJ: [, [, , "(?:2\\d|77)\\d{6}", , , , , , , [8]],
                            [, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"],
                            [, , "77\\d{6}", , , , "77831001"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]],
                            [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
                            [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
                            [, , "80\\d{6}", , , , "80123456"],
                            [, , "90\\d{6}", , , , "90123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        DM: [, [, , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", , , , "7674201234", , , , [7]],
                            [, , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", , , , "7672251234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "DM", 1, "011", "1", , , "1|([2-7]\\d{6})$", "767$1", , , , , [, , , , , , , , , [-1]], , "767", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        DO: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", , , , "8092345678", , , , [7]],
                            [, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "8[024]9", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        DZ: [, [, , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [8, 9]],
                            [, , "(?:(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d|9619)\\d{5}", , , , "12345678"],
                            [, , "(?:(?:5[4-6]|7[7-9])\\d|6(?:[569]\\d|7[0-6]))\\d{6}", , , , "551234567", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
                            [, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "98[23]\\d{6}", , , , "983123456", , , [9]], "DZ", 213, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        EC: [, [, , "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [8, 9, 10, 11],
                                [7]
                            ],
                            [, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8],
                                [7]
                            ],
                            [, , "9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}", , , , "991234567", , , [9]],
                            [, , "1800\\d{6,7}", , , , "18001234567", , , [10, 11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "[2-7]890\\d{4}", , , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                            ],
                            [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        EE: [, [, , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", , , , , , , [7, 8, 10]],
                            [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [7]],
                            [, , "(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", , , , "51234567", , , [7, 8]],
                            [, , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345"],
                            [, , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [7, 8]],
                            [, , , , , , , , , [-1]],
                            [, , "70[0-2]\\d{5}", , , , "70012345", , , [8]],
                            [, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                                [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
                                [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                            ], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , , , , [7]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        EG: [, [, , "(?:[189]\\d?|[24-6])\\d{8}|[135]\\d{7}", , , , , , , [8, 9, 10],
                                [6, 7]
                            ],
                            [, , "1(?:3[23]\\d{6}|5\\d{6,7})|(?:(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}|5(?:(?:0[2-7]|5\\d)\\d{6}|7[23]\\d{5,6})", , , , "234567890", , , [8, 9],
                                [6, 7]
                            ],
                            [, , "1[0-25]\\d{8}", , , , "1001234567", , , [10]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "900\\d{7}", , , , "9001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                                [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        EH: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
                            [, , "528[89]\\d{5}", , , , "528812345"],
                            [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", , , , "650123456"],
                            [, , "80\\d{7}", , , , "801234567"],
                            [, , "89\\d{7}", , , , "891234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "5924[01]\\d{4}", , , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "528[89]", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ER: [, [, , "[178]\\d{6}", , , , , , , [7],
                                [6]
                            ],
                            [, , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [6]],
                            [, , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ES: [, [, , "(?:51|[6-9]\\d)\\d{7}", , , , , , , [9]],
                            [, , "(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{4}|9(?:(?:(?:[135]\\d|[28][0-8]|4[1-9])\\d\\d|7(?:[124-9]\\d\\d|3(?:[0-8]\\d|9[1-9])))\\d\\d|6(?:[0-8]\\d{4}|9(?:0(?:[0-57-9]\\d\\d|6(?:0[0-8]|1[1-9]|[2-9]\\d))|[1-9]\\d{3}))))\\d\\d", , , , "810123456"],
                            [, , "(?:(?:6\\d|7[1-48])\\d{5}|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d", , , , "612345678"],
                            [, , "[89]00\\d{6}", , , , "800123456"],
                            [, , "80[367]\\d{6}", , , , "803123456"],
                            [, , "90[12]\\d{6}", , , , "901123456"],
                            [, , "70\\d{7}", , , , "701234567"],
                            [, , , , , , , , , [-1]], "ES", 34, "00", , , , , , , , [
                                [, "(\\d{4})", "$1", ["905"]],
                                [, "(\\d{6})", "$1", ["[79]9"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "51\\d{7}", , , , "511234567"], , , [, , , , , , , , , [-1]]
                        ],
                        ET: [, [, , "(?:11|[2-59]\\d)\\d{7}", , , , , , , [9],
                                [7]
                            ],
                            [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", , , , "111112345", , , , [7]],
                            [, , "9\\d{8}", , , , "911234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        FI: [, [, , "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10]],
                            [, , "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", , , , "131234567", , , [5, 6, 7, 8, 9]],
                            [, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
                            [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                            [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , [
                                [, "(\\d{5})", "$1", ["75[12]"], "0$1"],
                                [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                                [, "(\\d{6})", "$1", ["11"]],
                                [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
                                [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
                            ],
                            [
                                [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                                [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
                                [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], 1, "1[03-79]|[2-9]", [, , "[13]00\\d{3,7}|20(?:0\\d{3,7}|(?:2[023]|9[89])\\d{1,6})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})"],
                            [, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
                        ],
                        FJ: [, [, , "(?:(?:0800\\d|[235-9])\\d|45)\\d{5}", , , , , , , [7, 11]],
                            [, , "(?:(?:3[0-5]|8[58])\\d|6(?:03|[25-7]\\d))\\d{4}", , , , "3212345", , , [7]],
                            [, , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [7]],
                            [, , "0800\\d{7}", , , , "08001234567", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        FK: [, [, , "[2-7]\\d{4}", , , , , , , [5]],
                            [, , "[2-47]\\d{4}", , , , "31234"],
                            [, , "[56]\\d{4}", , , , "51234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        FM: [, [, , "[39]\\d{6}", , , , , , , [7]],
                            [, , "(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}", , , , "3201234"],
                            [, , "(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}", , , , "3501234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        FO: [, [, , "(?:[2-8]\\d|90)\\d{4}", , , , , , , [6]],
                            [, , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234"],
                            [, , "(?:[27][1-9]|5\\d)\\d{4}", , , , "211234"],
                            [, , "80[257-9]\\d{3}", , , , "802123"],
                            [, , "90(?:[13-5][15-7]|2[125-7]|99)\\d\\d", , , , "901123"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
                                [, "(\\d{6})", "$1", ["[2-9]"], , "$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        FR: [, [, , "[1-9]\\d{8}", , , , , , , [9]],
                            [, , "[1-5]\\d{8}", , , , "123456789"],
                            [, , "(?:6\\d\\d|7(?:00|[3-9]\\d))\\d{6}", , , , "612345678"],
                            [, , "80[0-5]\\d{6}", , , , "801234567"],
                            [, , "8[129]\\d{7}", , , , "891123456"],
                            [, , "884\\d{6}", , , , "884012345"],
                            [, , , , , , , , , [-1]],
                            [, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
                                [, "(\\d{4})", "$1", ["10"]],
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                            ],
                            [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]
                        ],
                        GA: [, [, , "(?:0\\d|[2-7])\\d{6}", , , , , , , [7, 8]],
                            [, , "01\\d{6}", , , , "01441234", , , [8]],
                            [, , "(?:0[2-7]|[2-7])\\d{6}", , , , "06031234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GA", 241, "00", , , , , , , , [
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GB: [, [, , "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", , , , , , , [7, 9, 10],
                                [4, 5, 6, 8]
                            ],
                            [, , "(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", , , , "1212345678", , , [9, 10],
                                [4, 5, 6, 7, 8]
                            ],
                            [, , "7(?:(?:[1-3]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|8(?:[014-9]\\d|[23][0-8]))\\d|4(?:[0-46-9]\\d\\d|5(?:[0-689]\\d|7[0-57-9]))|7(?:0(?:0[01]|[1-9]\\d)|(?:[1-7]\\d|8[02-9]|9[0-689])\\d)|9(?:(?:[024-9]\\d|3[0-689])\\d|1(?:[02-9]\\d|1[028])))\\d{5}", , , , "7400123456", , , [10]],
                            [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
                            [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{8}", , , , "7012345678", , , [10]],
                            [, , "56\\d{8}", , , , "5612345678", , , [10]], "GB", 44, "00", "0", " x", , "0", , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                                [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                                [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                                [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
                                [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                            ], , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]],
                            [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
                        ],
                        GD: [, [, , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", , , , "4732691234", , , , [7]],
                            [, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "GD", 1, "011", "1", , , "1|([2-9]\\d{6})$", "473$1", , , , , [, , , , , , , , , [-1]], , "473", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GE: [, [, , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [9],
                                [6]
                            ],
                            [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6]],
                            [, , "(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}", , , , "555123456"],
                            [, , "800\\d{6}", , , , "800123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "706\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "706\\d{6}"],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GF: [, [, , "[56]94\\d{6}", , , , , , , [9]],
                            [, , "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}", , , , "594101234"],
                            [, , "694(?:[0-249]\\d|3[0-48])\\d{4}", , , , "694201234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GF", 594, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GG: [, [, , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [7, 9, 10],
                                [6]
                            ],
                            [, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10],
                                [6]
                            ],
                            [, , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [10]],
                            [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
                            [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{8}", , , , "7012345678", , , [10]],
                            [, , "56\\d{8}", , , , "5612345678", , , [10]], "GG", 44, "00", "0", , , "0|([25-9]\\d{5})$", "1481$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], , , [, , , , , , , , , [-1]],
                            [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
                        ],
                        GH: [, [, , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [8, 9],
                                [7]
                            ],
                            [, , "3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", , , , "302345678", , , [9],
                                [7]
                            ],
                            [, , "(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]))\\d{6}", , , , "231234567", , , [9]],
                            [, , "800\\d{5}", , , , "80012345", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|80"]],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                            ],
                            [
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GI: [, [, , "(?:[25]\\d\\d|629)\\d{5}", , , , , , , [8]],
                            [, , "2(?:(?:00\\d|2(?:2[2457]|50))\\d|1(?:6[24-7]\\d|90[0-2]))\\d{3}", , , , "20012345"],
                            [, , "(?:5[46-8]\\d|629)\\d{5}", , , , "57123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GL: [, [, , "(?:19|[2-689]\\d)\\d{4}", , , , , , , [6]],
                            [, , "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}", , , , "321000"],
                            [, , "(?:[25][1-9]|4[2-9])\\d{4}", , , , "221234"],
                            [, , "80\\d{4}", , , , "801234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "3[89]\\d{4}", , , , "381234"], "GL", 299, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GM: [, [, , "[2-9]\\d{6}", , , , , , , [7]],
                            [, , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
                            [, , "(?:[23679]\\d|5[01])\\d{5}", , , , "3012345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GM", 220, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GN: [, [, , "(?:30|6\\d\\d|722)\\d{6}", , , , , , , [8, 9]],
                            [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", , , , "30241234", , , [8]],
                            [, , "6[02356]\\d{7}", , , , "601123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "722\\d{6}", , , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GP: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                            [, , "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", , , , "590201234"],
                            [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GP", 590, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GQ: [, [, , "(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}", , , , , , , [9]],
                            [, , "3(?:3(?:[0-24-9]\\d[46]|3\\d[7-9])|5\\d\\d[7-9])\\d{4}", , , , "333091234"],
                            [, , "(?:222|55[015])\\d{6}", , , , "222123456"],
                            [, , "80\\d[1-9]\\d{5}", , , , "800123456"],
                            [, , "90\\d[1-9]\\d{5}", , , , "900123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                                [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GR: [, [, , "(?:[268]\\d|[79]0)\\d{8}", , , , , , , [10]],
                            [, , "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", , , , "2123456789"],
                            [, , "6(?:8[57-9]|9\\d)\\d{7}", , , , "6912345678"],
                            [, , "800\\d{7}", , , , "8001234567"],
                            [, , "90[19]\\d{7}", , , , "9091234567"],
                            [, , "8(?:0[16]|12|25)\\d{7}", , , , "8011234567"],
                            [, , "70\\d{8}", , , , "7012345678"],
                            [, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                                [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GT: [, [, , "(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [8, 11]],
                            [, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]],
                            [, , "[3-5]\\d{7}", , , , "51234567", , , [8]],
                            [, , "18[01]\\d{8}", , , , "18001112222", , , [11]],
                            [, , "19\\d{9}", , , , "19001112222", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GU: [, [, , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                            [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "1|([3-9]\\d{6})$", "671$1", , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GW: [, [, , "[49]\\d{8}|4\\d{6}", , , , , , , [7, 9]],
                            [, , "443\\d{6}", , , , "443201234", , , [9]],
                            [, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        GY: [, [, , "(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}", , , , , , , [7]],
                            [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", , , , "2201234"],
                            [, , "6\\d{6}", , , , "6091234"],
                            [, , "(?:289|862)\\d{4}", , , , "2891234"],
                            [, , "9008\\d{3}", , , , "9008123"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "GY", 592, "001", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        HK: [, [, , "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", , , , , , , [5, 6, 7, 8, 9, 11]],
                            [, , "(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", , , , "21234567", , , [8]],
                            [, , "(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5(?:(?:[1-59][0-46-9]|6[0-4689])\\d|7(?:[0-2469]\\d|30))|6(?:(?:0[1-9]|[13-59]\\d|[68][0-57-9]|7[0-79])\\d|2(?:[0-57-9]\\d|6[01]))|707[1-5]|848[01]|9(?:(?:0[1-9]|1[02-9]|[358][0-8]|[467]\\d)\\d|2(?:[0-8]\\d|9[03-9])))\\d{4}", , , , "51234567", , , [8]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [5, 6, 7, 8, 11]],
                            [, , , , , , , , , [-1]],
                            [, , "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", , , , "81123456", , , [8]],
                            [, , , , , , , , , [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [
                                [, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ], , [, , "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", , , , "71123456", , , [8]], , , [, , , , , , , , , [-1]],
                            [, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        HN: [, [, , "[237-9]\\d{7}", , , , , , , [8]],
                            [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", , , , "22123456"],
                            [, , "[37-9]\\d{7}", , , , "91234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        HR: [, [, , "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", , , , , , , [6, 7, 8, 9]],
                            [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", , , , "12345678", , , [8, 9],
                                [6, 7]
                            ],
                            [, , "9(?:(?:01|[12589]\\d)\\d|7(?:[0679]\\d|51))\\d{5}|98\\d{6}", , , , "921234567", , , [8, 9]],
                            [, , "80[01]\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                            [, , "6[01459]\\d{6}|6[01]\\d{4,5}", , , , "611234", , , [6, 7, 8]],
                            [, , , , , , , , , [-1]],
                            [, , "7[45]\\d{6}", , , , "74123456", , , [8]],
                            [, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "(?:62\\d?|72)\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]
                        ],
                        HT: [, [, , "[2-489]\\d{7}", , , , , , , [8]],
                            [, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"],
                            [, , "[34]\\d{7}", , , , "34101234"],
                            [, , "8\\d{7}", , , , "80012345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234"], "HT", 509, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        HU: [, [, , "[2357]\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9],
                                [6, 7]
                            ],
                            [, , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8],
                                [6, 7]
                            ],
                            [, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
                            [, , "[48]0\\d{6}", , , , "80123456", , , [8]],
                            [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "21\\d{7}", , , , "211234567", , , [9]], "HU", 36, "00", "06", , , "06", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
                            ], , [, , , , , , , , , [-1]], , , [, , "[48]0\\d{6}", , , , , , , [8]],
                            [, , "38\\d{7}", , , , "381234567", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        ID: [, [, , "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12],
                                [5, 6]
                            ],
                            [, , "2(?:[124]\\d{7,8}|(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])\\d{5,8})|(?:3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}|6(?:1(?:[0-8]\\d{4,7}|9\\d{4,8})|(?:[25]\\d|3[1-69]|4[1-6])\\d{5,8})|2(?:1(?:14|500)|2\\d{3})\\d{3}", , , , "218350123", , , [7, 8, 9, 10, 11],
                                [5, 6]
                            ],
                            [, , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]],
                            [, , "(?:177\\d|800)\\d{5,7}", , , , "8001234567", , , [8, 9, 10, 11]],
                            [, , "809\\d{7}", , , , "8091234567", , , [10]],
                            [, , "804\\d{7}", , , , "8041234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ID", 62, "0(?:0[17-9]|10(?:00|1[67]))", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                                [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                                [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                                [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                                [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                                [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                                [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                                [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "8071\\d{6}", , , , , , , [10]],
                            [, , "(?:1500|8071\\d{3})\\d{3}", , , , "8071123456", , , [7, 10]], , , [, , , , , , , , , [-1]]
                        ],
                        IE: [, [, , "[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}", , , , , , , [7, 8, 9, 10],
                                [5, 6]
                            ],
                            [, , "(?:1\\d{2,3}|2(?:[13]\\d\\d|[24-9])|4(?:0[24]|(?:(?:[1-469]|8[0-46-9])\\d|5)\\d|7)|5(?:0[45]|(?:1|[23679]\\d)\\d|8)|6(?:[237-9]|[4-6]\\d\\d)|7[14]\\d\\d|9(?:[04]\\d\\d|[35-9]))\\d{5}|[269]1\\d{6}", , , , "2212345", , , , [5, 6]],
                            [, , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [9]],
                            [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                            [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [10]],
                            [, , "18[59]0\\d{6}", , , , "1850123456", , , [10]],
                            [, , "700\\d{6}", , , , "700123456", , , [9]],
                            [, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                                [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                                [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]
                            ], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , , , , [10]],
                            [, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "8[35-9]5\\d{7}", , , , "8551234567", , , [10]]
                        ],
                        IL: [, [, , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12]],
                            [, , "(?:153\\d\\d?|[2-489])\\d{7}", , , , "21234567", , , [8, 11, 12],
                                [7]
                            ],
                            [, , "5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-5]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [9]],
                            [, , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [7, 10]],
                            [, , "1(?:2(?:00\\d\\d|12)|9(?:0[01]|19)\\d\\d)\\d{4}", , , , "1919123456", , , [8, 10]],
                            [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , "7(?:(?:18|2[23]|3[237]|47|6[58]|7\\d|9[2357-9])\\d|8(?:2\\d|33|55|77|81))\\d{5}", , , , "771234567", , , [9]], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
                                [, "(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                                [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                                [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                                [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                            ], , [, , , , , , , , , [-1]], , , [, , "1700\\d{6}", , , , , , , [10]],
                            [, , "1599\\d{6}", , , , "1599123456", , , [10]], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]
                        ],
                        IM: [, [, , "(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}", , , , , , , [10],
                                [6]
                            ],
                            [, , "1624[5-8]\\d{5}", , , , "1624756789", , , , [6]],
                            [, , "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
                            [, , "808162\\d{4}", , , , "8081624567"],
                            [, , "(?:8(?:4(?:40[49]06|5624\\d)|7(?:0624|2299)\\d)|90[0167]624\\d)\\d{3}", , , , "9016247890"],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{8}", , , , "7012345678"],
                            [, , "56\\d{8}", , , , "5612345678"], "IM", 44, "00", "0", , , "0|([5-8]\\d{5})$", "1624$1", , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "(?:3(?:(?:08162|3\\d{4}|7(?:0624|2299))\\d|4(?:40[49]06|5624\\d))|55\\d{5})\\d{3}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
                        ],
                        IN: [, [, , "(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}", , , , , , , [8, 9, 10, 11, 12, 13],
                                [6, 7]
                            ],
                            [, , "(?:1(?:1[2-7]\\d\\d|2(?:[0-249][2-7]\\d|[35-8]\\d[2-7])|3(?:[0-25][2-7]\\d|[346-9]\\d[2-7])|4(?:[145][2-7]\\d|[236-9]\\d[2-7])|[59](?:[0235-9]\\d[2-7]|[14][2-7]\\d)|6(?:[014][2-7]\\d|[235-9]\\d[2-7])|7(?:(?:0[24]|[1257][2-7])\\d|[34689]\\d[2-7])|8(?:[01346][2-7]\\d|[257-9]\\d[2-7]))|2(?:[02][2-7]\\d\\d|1(?:[134689]\\d[2-7]|[257][2-7]\\d)|3(?:[013][2-7]\\d|[24-8]\\d[2-7])|4(?:[01][2-7]\\d|[2-8]\\d[2-7])|5(?:[0137][2-7]\\d|[25689]\\d[2-7])|6(?:[0158][2-7]\\d|[2-4679]\\d[2-7])|7(?:[13-79]\\d[2-7]|8[2-7]\\d)|8(?:(?:0[13468]|[1568][2-7])\\d|[2-479]\\d[2-7])|9(?:(?:0\\d|[14][2-7])\\d|[235-9]\\d[2-7]))|3(?:(?:01|1[79])\\d[2-7]|2(?:[1-5]\\d[2-7]|6[2-7]\\d)|3[2-7]\\d\\d|4(?:[13][2-7]\\d|2(?:[0189][2-7]|[2-7]\\d)|[5-8]\\d[2-7])|5(?:[125689]\\d[2-7]|[34][2-7]\\d)|6(?:[01489][2-7]\\d|[235-7]\\d[2-7])|7(?:[02-46][2-7]\\d|[157-9]\\d[2-7])|8(?:(?:0\\d|[159][2-7])\\d|[2-46-8]\\d[2-7]))|4(?:[04][2-7]\\d\\d|1(?:[14578]\\d[2-7]|[36][2-7]\\d)|2(?:(?:0[24]|[1-47][2-7])\\d|[5689]\\d[2-7])|3(?:[15][2-7]\\d|[2-467]\\d[2-7])|5(?:[12][2-7]\\d|[4-7]\\d[2-7])|6(?:[0-26-9][2-7]\\d|[35]\\d[2-7])|7(?:(?:[014-9][2-7]|2[2-8])\\d|3\\d[2-7])|8(?:[013-57][2-7]\\d|[2689]\\d[2-7])|9(?:[014-7][2-7]\\d|[2389]\\d[2-7]))|5(?:1(?:[025][2-7]\\d|[146-9]\\d[2-7])|2(?:[14-8]\\d[2-7]|2[2-7]\\d)|3(?:[1346]\\d[2-7]|[25][2-7]\\d)|4(?:[14-69]\\d[2-7]|[28][2-7]\\d)|5(?:(?:1[2-7]|2[1-7])\\d|[46]\\d[2-7])|6(?:[146-9]\\d[2-7]|[25][2-7]\\d)|7(?:1[2-7]\\d|[2-4]\\d[2-7])|8(?:1[2-7]\\d|[2-8]\\d[2-7])|9(?:[15][2-7]\\d|[246]\\d[2-7]))|6(?:1(?:[1358]\\d[2-7]|2[2-7]\\d)|2(?:1[2-7]\\d|[2457]\\d[2-7])|3(?:1[2-7]\\d|[2-4]\\d[2-7])|4(?:1[2-7]\\d|[235-7]\\d[2-7])|5(?:[17][2-7]\\d|[2-689]\\d[2-7])|6(?:[13][2-7]\\d|[24578]\\d[2-7])|7(?:1[2-7]\\d|[235689]\\d[2-7]|4(?:[0189][2-7]|[2-7]\\d))|8(?:0[2-7]\\d|[1-6]\\d[2-7]))|7(?:1(?:[013-9]\\d[2-7]|2[2-7]\\d)|2(?:[0235-9]\\d[2-7]|[14][2-7]\\d)|3(?:[134][2-7]\\d|[2679]\\d[2-7])|4(?:[1-35689]\\d[2-7]|[47][2-7]\\d)|5(?:[15][2-7]\\d|[2-46-9]\\d[2-7])|[67](?:[02-9]\\d[2-7]|1[2-7]\\d)|8(?:(?:[013-7]\\d|2[0-6])[2-7]|8(?:[0189][2-7]|[2-7]\\d))|9(?:[0189]\\d[2-7]|[2-7]\\d\\d))|8(?:0[2-7]\\d\\d|1(?:[1357-9]\\d[2-7]|6[2-7]\\d)|2(?:[014][2-7]\\d|[235-8]\\d[2-7])|3(?:[03-57-9]\\d[2-7]|[126][2-7]\\d)|(?:4[0-24-9]|5\\d)\\d[2-7]|6(?:[136][2-7]\\d|[2457-9]\\d[2-7])|7(?:[078][2-7]\\d|[1-6]\\d[2-7])|8(?:[1256]\\d[2-7]|[34][2-7]\\d)|9(?:1[2-7]\\d|[2-4]\\d[2-7])))\\d{5}", , , , "7410410123", , , [10],
                                [6, 7, 8]
                            ],
                            [, , "(?:6(?:(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|9(?:0[019]|13))\\d|1279|3(?:(?:0[0-79]|6[0-4679]|7[0-24-9]|[89]\\d)\\d|5(?:0[0-6]|[1-9]\\d)))|7(?:(?:0\\d\\d|19[0-5])\\d|2(?:(?:[0235-79]\\d|[14][017-9])\\d|8(?:[0-59]\\d|[6-8][089]))|3(?:(?:[05-8]\\d|3[017-9])\\d|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d\\d|1(?:[015-9]\\d|[2-4][089])|[29](?:[0-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|[47](?:[089]\\d|11|7[02-8])|[56]\\d[089]|8(?:[0-24-7][089]|[389]\\d))|5(?:(?:[0346-8]\\d|5[017-9])\\d|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[1-3][089])|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d\\d)|8(?:[0-79]\\d\\d|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d\\d|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:(?:[01589]\\d|6[67])\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d\\d|6(?:[089]\\d|7[02-8]))|2(?:[014](?:[089]\\d|7[02-8])|[235-9]\\d\\d)|3(?:[03-57-9]\\d\\d|[126](?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d\\d|[136](?:[089]\\d|7[02-8]))|7(?:(?:0[07-9]|[1-69]\\d)\\d|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d\\d|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d\\d|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}", , , , "8123456789", , , [10]],
                            [, , "(?:00800\\d|1(?:600|80[03]\\d{3}))\\d{6}|1800\\d{4,8}", , , , "1800123456"],
                            [, , "186[12]\\d{9}", , , , "1861123456789", , , [13]],
                            [, , "1860\\d{7}", , , , "18603451234", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [
                                [, "(\\d{7})", "$1", ["575"]],
                                [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
                                [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)", "1(?:2(?:[0-24]|9[2-7])|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6(?:[058]|1[2-7])|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])", "1(?:2(?:[0-24]|9[2-7])|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6(?:[058]|1[2-7])|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"], "0$1", , 1],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5(?:[013-9]|2[2-7])))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"], "0$1", , 1],
                                [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
                                [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
                                [, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["0"], "0$1", , 1],
                                [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
                            ],
                            [
                                [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
                                [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)", "1(?:2(?:[0-24]|9[2-7])|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6(?:[058]|1[2-7])|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])", "1(?:2(?:[0-24]|9[2-7])|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6(?:[058]|1[2-7])|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"], "0$1", , 1],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5(?:[013-9]|2[2-7])))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"], "0$1", , 1],
                                [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
                                [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
                                [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "(?:00800\\d|1(?:600|8(?:0[03]\\d\\d|6(?:0|[12]\\d\\d))\\d))\\d{6}|1800\\d{4,8}"],
                            [, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]
                        ],
                        IO: [, [, , "3\\d{6}", , , , , , , [7]],
                            [, , "37\\d{5}", , , , "3709100"],
                            [, , "38\\d{5}", , , , "3801234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        IQ: [, [, , "(?:1|[2-6]\\d?|7\\d\\d)\\d{7}", , , , , , , [8, 9, 10],
                                [6, 7]
                            ],
                            [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9],
                                [6, 7]
                            ],
                            [, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        IR: [, [, , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [4, 5, 6, 7, 10],
                                [8]
                            ],
                            [, , "(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{4}|94(?:(?:000|(?:11|2\\d)\\d|30[01])\\d|4(?:111|40\\d)))\\d{4}|(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[16]|[289]\\d?)\\d{3}", , , , "2123456789", , , [6, 7, 10],
                                [4, 5, 8]
                            ],
                            [, , "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[01]\\d|44)\\d|510|8(?:1[01]|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", , , , "9123456789", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "993\\d{7}", , , , "9932123456", , , [10]], "IR", 98, "00", "0", , , "0", , , , [
                                [, "(\\d{4,5})", "$1", ["96"], "0$1"],
                                [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "9(?:4(?:11[1-7]|440)\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", , , , , , , [4, 5, 10]],
                            [, , "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", , , , "9601", , , [4, 5]], , , [, , , , , , , , , [-1]]
                        ],
                        IS: [, [, , "(?:38\\d|[4-9])\\d{6}", , , , , , , [7, 9]],
                            [, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", , , , "4101234", , , [7]],
                            [, , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}", , , , "6111234"],
                            [, , "800\\d{4}", , , , "8001234", , , [7]],
                            [, , "90\\d{5}", , , , "9011234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "49\\d{5}", , , , "4921234", , , [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:689|8(?:7[0189]|80)|95[48])\\d{4}", , , , "6891234", , , [7]]
                        ],
                        IT: [, [, , "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", , , , , , , [6, 7, 8, 9, 10, 11]],
                            [, , "0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}", , , , "0212345678"],
                            [, , "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10, 11]],
                            [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
                            [, , "(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", , , , "899123456", , , [6, 8, 9, 10]],
                            [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
                            [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                            [, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
                                [, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]],
                                [, "(\\d{6})", "$1", ["1(?:1|92)"]],
                                [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                                [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                                [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                                [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
                                [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                                [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                                [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                                [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
                                [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                            ],
                            [, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , , , , [9]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        JE: [, [, , "(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}", , , , , , , [10],
                                [6]
                            ],
                            [, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]],
                            [, , "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}", , , , "7797712345"],
                            [, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"],
                            [, , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"],
                            [, , , , , , , , , [-1]],
                            [, , "701511\\d{4}", , , , "7015115678"],
                            [, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "0|([0-24-8]\\d{5})$", "1534$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]],
                            [, , "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
                        ],
                        JM: [, [, , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-46-8]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [7]],
                            [, , "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", , , , "8762101234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "658|876", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        JO: [, [, , "(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}", , , , , , , [8, 9]],
                            [, , "(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", , , , "62001234", , , [8]],
                            [, , "7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", , , , "790123456", , , [9]],
                            [, , "80\\d{6}", , , , "80012345", , , [8]],
                            [, , "900\\d{5}", , , , "90012345", , , [8]],
                            [, , "85\\d{6}", , , , "85012345", , , [8]],
                            [, , "70\\d{7}", , , , "700123456", , , [9]],
                            [, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                                [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], , [, , "74(?:66|77)\\d{5}", , , , "746612345", , , [9]], , , [, , , , , , , , , [-1]],
                            [, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        JP: [, [, , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
                            [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [9]],
                            [, , "[7-9]0[1-9]\\d{7}", , , , "9012345678", , , [10]],
                            [, , "(?:00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)|(?:120|800\\d)\\d{4})\\d\\d", , , , "120123456"],
                            [, , "990\\d{6}", , , , "990123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "60\\d{7}", , , , "601234567", , , [9]],
                            [, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "0", , , , [
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82[0367]|993", "2(?:[34]7|[56]9|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]", "2(?:[34]7|59(?:[02-8]|1[0-689]|9[0-8])|69|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2(?:2[12]|3[0-269]|4[59]|5[0-468]|62|7[1-35]|8[16]|9[0238])|4(?:2[1-57]|3[0-57]|[45]|6[28]|7[259]|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|9(?:4[15]|9[12489])", "2(?:2[12]|3[0-269]|4[59]|5(?:[04][01]|[1-3]|[68]1)|62|7[1-35]|8[16]|9(?:[028]|3[015-9]))|4(?:2(?:[13-57]|21)|3[0-57]|[45]|6[28]|7(?:2|[59][019])|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|9(?:4[15]|9(?:[1289]|4[0178]))"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|60|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93)", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|7[016-9])|49|6(?:[0-24]|5[0-3589]|[68][019]|9[01459])|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93[34])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9(?:[0169]|2[1-9]|4[1-3]))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|8[019]|9(?:[0145]|9[014-9]))|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9(?:[019]|2[1-9]|4[1-3]|6(?:[0-47-9]|5[01346-9]|6[1-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|8[019]|9(?:[0145]|9[014-9]))|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2[09]|7(?:0[019]|1))"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                                [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]],
                                [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]],
                                [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]],
                                [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]],
                                [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82[0367]|993", "2(?:[34]7|[56]9|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]", "2(?:[34]7|59(?:[02-8]|1[0-689]|9[0-8])|69|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2(?:2[12]|3[0-269]|4[59]|5[0-468]|62|7[1-35]|8[16]|9[0238])|4(?:2[1-57]|3[0-57]|[45]|6[28]|7[259]|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|9(?:4[15]|9[12489])", "2(?:2[12]|3[0-269]|4[59]|5(?:[04][01]|[1-3]|[68]1)|62|7[1-35]|8[16]|9(?:[028]|3[015-9]))|4(?:2(?:[13-57]|21)|3[0-57]|[45]|6[28]|7(?:2|[59][019])|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|9(?:4[15]|9(?:[1289]|4[0178]))"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|60|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93)", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|7[016-9])|49|6(?:[0-24]|5[0-3589]|[68][019]|9[01459])|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93[34])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9(?:[0169]|2[1-9]|4[1-3]))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|8[019]|9(?:[0145]|9[014-9]))|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9(?:[0-3]|[89][019]))|60|8(?:2(?:[1258]|4[0-39]|9(?:[019]|2[1-9]|4[1-3]|6(?:[0-47-9]|5[01346-9]|6[1-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|8[019]|9(?:[0145]|9[014-9]))|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2[09]|7(?:0[019]|1))"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                            ],
                            [, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d"],
                            [, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        KE: [, [, , "(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}", , , , , , , [7, 8, 9, 10]],
                            [, , "20\\d{6,7}|(?:4[0-6]|5\\d|6[0-24-9])\\d{7}|(?:4[0245]|6[014-9])\\d{6}|5[1-79]\\d{5,6}|(?:4[245]|6[01457-9])\\d{5}", , , , "202012345", , , [7, 8, 9]],
                            [, , "7\\d{8}", , , , "712123456", , , [9]],
                            [, , "800[24-8]\\d{5,6}", , , , "800223456", , , [9, 10]],
                            [, , "900[02-9]\\d{5}", , , , "900223456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                                [, "(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KG: [, [, , "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", , , , , , , [9, 10],
                                [5, 6]
                            ],
                            [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9],
                                [5, 6]
                            ],
                            [, , "(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}", , , , "700123456", , , [9]],
                            [, , "800\\d{6,7}", , , , "800123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [
                                [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KH: [, [, , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [8, 9, 10],
                                [6, 7]
                            ],
                            [, , "(?:2(?:3(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)|[4-6](?:4[56]|[56]\\d)\\d)|(?:3[2-6]|4[2-4]|[5-7][2-5])(?:4[56]|[56]\\d)\\d)\\d{4}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])[236-9]\\d{5}", , , , "23756789", , , [8, 9],
                                [6, 7]
                            ],
                            [, , "(?:(?:(?:1[28]|9[67])\\d|8(?:[013-79]|8\\d))\\d|(?:2[3-6]|4[2-4]|[56][2-5])48|3(?:[18]\\d\\d|[2-6]48)|7(?:(?:[07-9]|[16]\\d)\\d|[2-5]48))\\d{5}|(?:1\\d|6[016-9]|9[0-57-9])\\d{6}", , , , "91234567", , , [8, 9]],
                            [, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
                            [, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KH", 855, "00[14-9]", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KI: [, [, , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [5, 8]],
                            [, , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234"],
                            [, , "(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}", , , , "72001234", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [8]], "KI", 686, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KM: [, [, , "[3478]\\d{6}", , , , , , , [7]],
                            [, , "7[4-7]\\d{5}", , , , "7712345"],
                            [, , "[34]\\d{6}", , , , "3212345"],
                            [, , , , , , , , , [-1]],
                            [, , "8\\d{6}", , , , "8001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KN: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", , , , "8692361234", , , , [7]],
                            [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "1|([2-7]\\d{6})$", "869$1", , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KP: [, [, , "(?:(?:19\\d|2)\\d|85)\\d{6}", , , , , , , [8, 10],
                                [6, 7]
                            ],
                            [, , "(?:2\\d|85)\\d{6}", , , , "21234567", , , [8],
                                [6, 7]
                            ],
                            [, , "19[1-3]\\d{7}", , , , "1921234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "2(?:[0-24-9]\\d\\d|3(?:[0-79]\\d|8[02-9]))\\d{4}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KR: [, [, , "(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14],
                                [3, 4, 7]
                            ],
                            [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", , , , "22123456", , , [5, 6, 8, 9, 10],
                                [3, 4, 7]
                            ],
                            [, , "1[0-26-9]\\d{7,8}", , , , "1000000000", , , [9, 10]],
                            [, , "(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}", , , , "801234567", , , [9, 11, 12, 13, 14]],
                            [, , "60[2-9]\\d{6}", , , , "602345678", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "50\\d{8,9}", , , , "5012345678", , , [10, 11]],
                            [, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [
                                [, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1"],
                                [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                                [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
                                [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]],
                                [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"],
                                [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]],
                                [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                                [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
                                [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]
                            ],
                            [, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08|68\\d)|798\\d{1,3})\\d{6}", , , , , , , [11, 12, 13, 14]],
                            [, , "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        KW: [, [, , "(?:18|[2569]\\d\\d)\\d{5}", , , , , , , [7, 8]],
                            [, , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [8]],
                            [, , "(?:5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25]))|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|222|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|4[01479]|55|6[0679]|8[057-9]|9\\d)\\d|11[01]|7(?:02|[1-9]\\d)))\\d{4}", , , , "50012345", , , [8]],
                            [, , "18\\d{5}", , , , "1801234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KY: [, [, , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", , , , "3452221234", , , , [7]],
                            [, , "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", , , , "3453231234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "1|([2-9]\\d{6})$", "345$1", , , , , [, , "345849\\d{4}", , , , "3458491234"], , "345", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        KZ: [, [, , "(?:33622|(?:7\\d|80)\\d{3})\\d{5}", , , , , , , [10]],
                            [, , "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", , , , "7123456789"],
                            [, , "7(?:0[0-2578]|47|6[02-4]|7[15-8]|85)\\d{7}", , , , "7710009998"],
                            [, , "800\\d{7}", , , , "8001234567"],
                            [, , "809\\d{7}", , , , "8091234567"],
                            [, , , , , , , , , [-1]],
                            [, , "808\\d{7}", , , , "8081234567"],
                            [, , "751\\d{7}", , , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , "33|7", [, , "751\\d{7}"],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LA: [, [, , "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [8, 9, 10],
                                [6]
                            ],
                            [, , "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", , , , "21212862", , , [8],
                                [6]
                            ],
                            [, , "20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}", , , , "2023123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "30\\d{7}", , , , "301234567", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        LB: [, [, , "[7-9]\\d{7}|[13-9]\\d{6}", , , , , , , [7, 8]],
                            [, , "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", , , , "1123456", , , [7]],
                            [, , "(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}", , , , "71123456"],
                            [, , , , , , , , , [-1]],
                            [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                            [, , "80\\d{6}", , , , "80123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LC: [, [, , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", , , , "7584305678", , , , [7]],
                            [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", , , , "7582845678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "LC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "758$1", , , , , [, , , , , , , , , [-1]], , "758", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LI: [, [, , "(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}", , , , , , , [7, 9]],
                            [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [7]],
                            [, , "(?:6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}", , , , "660234567"],
                            [, , "80(?:02[28]|9\\d\\d)\\d\\d", , , , "8002222", , , [7]],
                            [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", , , , "9002222", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "0|(10(?:01|20|66))", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"], , "$CC $1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"], , "$CC $1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "870(?:28|87)\\d\\d", , , , "8702812", , , [7]], , , [, , "697(?:42|56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]
                        ],
                        LK: [, [, , "(?:[1-7]\\d|[89]1)\\d{7}", , , , , , , [9],
                                [7]
                            ],
                            [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [7]],
                            [, , "7[0-25-8]\\d{7}", , , , "712345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "1973\\d{5}", , , , "197312345"], , , [, , , , , , , , , [-1]]
                        ],
                        LR: [, [, , "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", , , , , , , [7, 8, 9]],
                            [, , "(?:2\\d{3}|33333)\\d{4}", , , , "21234567", , , [8, 9]],
                            [, , "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}", , , , "770123456", , , [7, 9]],
                            [, , , , , , , , , [-1]],
                            [, , "332(?:02|[34]\\d)\\d{4}", , , , "332021234", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LS: [, [, , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [8]],
                            [, , "2\\d{7}", , , , "22123456"],
                            [, , "[56]\\d{7}", , , , "50123456"],
                            [, , "800[256]\\d{4}", , , , "80021234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LT: [, [, , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [8]],
                            [, , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567"],
                            [, , "6\\d{7}", , , , "61234567"],
                            [, , "800\\d{5}", , , , "80012345"],
                            [, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"],
                            [, , "808\\d{5}", , , , "80812345"],
                            [, , "700\\d{5}", , , , "70012345"],
                            [, , , , , , , , , [-1]], "LT", 370, "00", "8", , , "[08]", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1],
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", , 1],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", , 1]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "70[67]\\d{5}", , , , "70712345"], , , [, , , , , , , , , [-1]]
                        ],
                        LU: [, [, , "[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]],
                            [, , "(?:(?:2[2-9]|[457]\\d)\\d|3(?:[0-46-9]\\d|5[013-9])|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}", , , , "27123456"],
                            [, , "6(?:[269][18]|5[158]|7[189]|81)\\d{6}", , , , "628123456", , , [9]],
                            [, , "800\\d{5}", , , , "80012345", , , [8]],
                            [, , "90[015]\\d{5}", , , , "90012345", , , [8]],
                            [, , "801\\d{5}", , , , "80112345", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [
                                [, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["2[2-9]|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LV: [, [, , "(?:[268]\\d|90)\\d{6}", , , , , , , [8]],
                            [, , "6\\d{7}", , , , "63123456"],
                            [, , "2\\d{7}", , , , "21234567"],
                            [, , "80\\d{6}", , , , "80123456"],
                            [, , "90\\d{6}", , , , "90123456"],
                            [, , "81\\d{6}", , , , "81123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        LY: [, [, , "(?:[2569]\\d|71)\\d{7}", , , , , , , [9],
                                [7]
                            ],
                            [, , "(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}", , , , "212345678", , , , [7]],
                            [, , "9[1-6]\\d{7}", , , , "912345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MA: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
                            [, , "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456"],
                            [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", , , , "650123456"],
                            [, , "80\\d{7}", , , , "801234567"],
                            [, , "89\\d{7}", , , , "891234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "5924[01]\\d{4}", , , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [
                                [, "(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                                [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                                [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MC: [, [, , "(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}", , , , , , , [8, 9]],
                            [, , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [8]],
                            [, , "(?:(?:3|6\\d)\\d\\d|4(?:4\\d|5[1-9]))\\d{5}", , , , "612345678"],
                            [, , "90\\d{6}", , , , "90123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                            ],
                            [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                                [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "870\\d{5}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MD: [, [, , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [8]],
                            [, , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"],
                            [, , "(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", , , , "62112345"],
                            [, , "800\\d{5}", , , , "80012345"],
                            [, , "90[056]\\d{5}", , , , "90012345"],
                            [, , "808\\d{5}", , , , "80812345"],
                            [, , , , , , , , , [-1]],
                            [, , "3[08]\\d{6}", , , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "803\\d{5}", , , , "80312345"], , , [, , , , , , , , , [-1]]
                        ],
                        ME: [, [, , "(?:20|[3-79]\\d|80\\d?)\\d{6}", , , , , , , [8, 9],
                                [6]
                            ],
                            [, , "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", , , , "30234567", , , [8],
                                [6]
                            ],
                            [, , "6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", , , , "67622901", , , [8]],
                            [, , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002"],
                            [, , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "78[1-49]\\d{5}", , , , "78108780", , , [8]], "ME", 382, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "77[1-9]\\d{5}", , , , "77273012", , , [8]], , , [, , , , , , , , , [-1]]
                        ],
                        MF: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                            [, , "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}", , , , "590271234"],
                            [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MF", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MG: [, [, , "[23]\\d{8}", , , , , , , [9],
                                [7]
                            ],
                            [, , "20(?:(?:2\\d|4[47]|5[3467]|6[279]|8[268]|9[245])\\d|7(?:2[29]|[35]\\d))\\d{4}", , , , "202123456", , , , [7]],
                            [, , "3[2-49]\\d{7}", , , , "321234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "22\\d{7}", , , , "221234567"], "MG", 261, "00", "0", , , "0|([24-9]\\d{6})$", "20$1", , , [
                                [, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MH: [, [, , "(?:(?:[256]\\d|45)\\d|329)\\d{4}", , , , , , , [7]],
                            [, , "(?:247|528|625)\\d{4}", , , , "2471234"],
                            [, , "(?:(?:23|54)5|329|45[56])\\d{4}", , , , "2351234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "635\\d{4}", , , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MK: [, [, , "[2-578]\\d{7}", , , , , , , [8],
                                [6, 7]
                            ],
                            [, , "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]],
                            [, , "7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|421)\\d{4}", , , , "72345678"],
                            [, , "800\\d{5}", , , , "80012345"],
                            [, , "5[02-9]\\d{6}", , , , "50012345"],
                            [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                                [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ML: [, [, , "(?:[246-9]\\d|50)\\d{6}", , , , , , , [8]],
                            [, , "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}", , , , "20212345"],
                            [, , "(?:2(?:079|17\\d)|(?:50|[679]\\d|8[239])\\d\\d)\\d{4}", , , , "65012345"],
                            [, , "80\\d{6}", , , , "80012345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [
                                [, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "80\\d{6}"],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MM: [, [, , "(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}", , , , , , , [6, 7, 8, 9, 10],
                                [5]
                            ],
                            [, , "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|3(?:20\\d|470|56)|420\\d|5470)|5(?:2(?:2\\d\\d?|470)|4(?:2(?:1|86)|470)|522\\d|7(?:20\\d|480)|[89](?:20\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|42[04]|[56]2\\d)\\d|3(?:20\\d|470)|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|7(?:0470|1(?:20\\d?|470)|4(?:25\\d|470)|5(?:202|470|96\\d))|8(?:[13](?:2\\d\\d|470)|[25]2\\d\\d))\\d{4}|(?:(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4]))\\d|25\\d{2,3}|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[2-689]|2[2-8]|3[24]|4[24-7]|5[245]|6[23]))\\d{4}", , , , "1234567", , , [6, 7, 8, 9],
                                [5]
                            ],
                            [, , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6[89]|89)\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", , , , "92123456", , , [7, 8, 9, 10]],
                            [, , "80080(?:[01][1-9]|2\\d)\\d{3}", , , , "8008001234", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:1(?:333|468)|2468)\\d{4}", , , , "13331234", , , [8]], "MM", 95, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                                [, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MN: [, [, , "[12]\\d{8,9}|[1257-9]\\d{7}", , , , , , , [8, 9, 10],
                                [4, 5, 6]
                            ],
                            [, , "(?:[12](?:1|2[1-37]|(?:3[2-8]|4[2-68]|5[1-4689])\\d?)|5[0568])\\d{6}|[12]2[1-3]\\d{5}", , , , "50123456", , , , [4, 5, 6]],
                            [, , "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", , , , "88123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "7[05-8]\\d{6}", , , , "75123456", , , [8]], "MN", 976, "001", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                                [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                                [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                                [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MO: [, [, , "(?:28|[68]\\d)\\d{6}", , , , , , , [8]],
                            [, , "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345"],
                            [, , "6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}", , , , "66123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MP: [, [, , "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                            [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "1|([2-9]\\d{6})$", "670$1", , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MQ: [, [, , "(?:596|69\\d)\\d{6}", , , , , , , [9]],
                            [, , "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}", , , , "596301234"],
                            [, , "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}", , , , "696201234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MQ", 596, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MR: [, [, , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [8]],
                            [, , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456"],
                            [, , "[2-4][0-46-9]\\d{6}", , , , "22123456"],
                            [, , "800\\d{5}", , , , "80012345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MR", 222, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MS: [, [, , "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", , , , , , , [10],
                                [7]
                            ],
                            [, , "664491\\d{4}", , , , "6644912345", , , , [7]],
                            [, , "66449[2-6]\\d{4}", , , , "6644923456", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "1|(4\\d{6})$", "664$1", , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MT: [, [, , "(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}", , , , , , , [8]],
                            [, , "2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d\\d)\\d{4}", , , , "21001234"],
                            [, , "(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}", , , , "96961234"],
                            [, , "800[3467]\\d{4}", , , , "80071234"],
                            [, , "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}", , , , "50037123"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                            ], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]],
                            [, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]
                        ],
                        MU: [, [, , "(?:[2-468]|5\\d)\\d{6}", , , , , , , [7, 8]],
                            [, , "(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:4\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123"],
                            [, , "5(?:(?:2[589]|7\\d|9[0-8])\\d|4(?:2[1-389]|[489]\\d|7[1-9])|8(?:[0-689]\\d|7[15-8]))\\d{4}", , , , "52512345", , , [8]],
                            [, , "80[0-2]\\d{4}", , , , "8001234", , , [7]],
                            [, , "30\\d{5}", , , , "3012345", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MV: [, [, , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [7, 10]],
                            [, , "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", , , , "6701234", , , [7]],
                            [, , "(?:46[46]|(?:7[2-9]|9[14-9])\\d)\\d{4}", , , , "7712345", , , [7]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "900\\d{7}", , , , "9001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[14-9]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "4[05]0\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]
                        ],
                        MW: [, [, , "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", , , , , , , [7, 9]],
                            [, , "(?:1[2-9]|21\\d\\d)\\d{5}", , , , "1234567"],
                            [, , "(?:111|(?:77|88|99)\\d)\\d{6}", , , , "991234567", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "31\\d{7}", , , , "310123456", , , [9]], "MW", 265, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MX: [, [, , "(?:1\\d|[2-9])\\d{9}", , , , , , , [10, 11],
                                [7, 8]
                            ],
                            [, , "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "2221234567", , , [10],
                                [7, 8]
                            ],
                            [, , "1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "12221234567", , , [11]],
                            [, , "8(?:00|88)\\d{7}", , , , "8001234567", , , [10]],
                            [, , "900\\d{7}", , , , "9001234567", , , [10]],
                            [, , "300\\d{7}", , , , "3001234567", , , [10]],
                            [, , "500\\d{7}", , , , "5001234567", , , [10]],
                            [, , , , , , , , , [-1]], "MX", 52, "0[09]", "01", , , "0[12]|04[45]([2-9]\\d{9})$", "1$1", "00", , [
                                [, "(\\d{5})", "$1", ["53"]],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", , 1],
                                [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], "044 $1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], "044 $1"]
                            ],
                            [
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", , 1],
                                [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|5[56]|81)"]],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MY: [, [, , "(?:1\\d\\d?|3\\d|[4-9])\\d{7}", , , , , , , [8, 9, 10],
                                [6, 7]
                            ],
                            [, , "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", , , , "323856789", , , [8, 9],
                                [6, 7]
                            ],
                            [, , "1(?:(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|59\\d)\\d)\\d|4(?:[235-9]\\d\\d|400)|8(?:(?:1[23]|[236]\\d|5[7-9]|7[016-9]|9[0-8])\\d|4(?:[06]\\d|7[0-4])|8(?:[01]\\d|[27][0-4])))\\d{4}", , , , "123456789", , , [9, 10]],
                            [, , "1[378]00\\d{6}", , , , "1300123456", , , [10]],
                            [, , "1600\\d{6}", , , , "1600123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", , , , "1546012345", , , [10]], "MY", 60, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"],
                                [, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        MZ: [, [, , "(?:2|8\\d)\\d{7}", , , , , , , [8, 9]],
                            [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]],
                            [, , "8[2-7]\\d{7}", , , , "821234567", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "MZ", 258, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NA: [, [, , "[68]\\d{7,8}", , , , , , , [8, 9]],
                            [, , "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}", , , , "61221234"],
                            [, , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [9]],
                            [, , "80\\d{7}", , , , "800123456", , , [9]],
                            [, , "8701\\d{5}", , , , "870123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NC: [, [, , "[2-57-9]\\d{5}", , , , , , , [6]],
                            [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"],
                            [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", , , , "751234"],
                            [, , , , , , , , , [-1]],
                            [, , "36\\d{4}", , , , "366711"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [
                                [, "(\\d{3})", "$1", ["5[6-8]"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NE: [, [, , "[0289]\\d{7}", , , , , , , [8]],
                            [, , "2(?:0(?:20|3[1-7]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234"],
                            [, , "(?:8[04589]|9\\d)\\d{6}", , , , "93123456"],
                            [, , "08\\d{6}", , , , "08123456"],
                            [, , "09\\d{6}", , , , "09123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NF: [, [, , "[13]\\d{5}", , , , , , , [6],
                                [5]
                            ],
                            [, , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [5]],
                            [, , "3[58]\\d{4}", , , , "381234", , , , [5]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [
                                [, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                                [, "(\\d)(\\d{5})", "$1 $2", ["3"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NG: [, [, , "[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", , , , , , , [7, 8, 10, 11, 12, 13, 14],
                                [5, 6]
                            ],
                            [, , "(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", , , , "18040123", , , [7, 8],
                                [5, 6]
                            ],
                            [, , "(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}", , , , "8021234567", , , [10]],
                            [, , "800\\d{7,11}", , , , "80017591759", , , [10, 11, 12, 13, 14]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                                [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "700\\d{7,11}", , , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]]
                        ],
                        NI: [, [, , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [8]],
                            [, , "2\\d{7}", , , , "21234567"],
                            [, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567"],
                            [, , "1800\\d{4}", , , , "18001234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NI", 505, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NL: [, [, , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}", , , , , , , [5, 6, 7, 8, 9, 10]],
                            [, , "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", , , , "101234567", , , [9]],
                            [, , "6[1-58]\\d{7}", , , , "612345678", , , [9]],
                            [, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]],
                            [, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:85|91)\\d{7}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [
                                [, "(\\d{4})", "$1", ["1[238]|[34]"]],
                                [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]],
                                [, "(\\d{6})", "$1", ["1"]],
                                [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                                [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                            ],
                            [
                                [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                                [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                            ],
                            [, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", , , , , , , [5, 6]],
                            [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}", , , , "14020", , , [5, 6, 9]], , , [, , , , , , , , , [-1]]
                        ],
                        NO: [, [, , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [5, 8]],
                            [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]],
                            [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "40612345", , , [8]],
                            [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                            [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                            [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                            [, , "880\\d{5}", , , , "88012345", , , [8]],
                            [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                            ], , [, , , , , , , , , [-1]], 1, "[02-689]|7[0-8]", [, , , , , , , , , [-1]],
                            [, , "(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
                        ],
                        NP: [, [, , "9\\d{9}|[1-9]\\d{7}", , , , , , , [8, 10],
                                [6, 7]
                            ],
                            [, , "(?:1[0-6]\\d|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6])\\d{5}", , , , "14567890", , , [8],
                                [6, 7]
                            ],
                            [, , "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                                [, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                                [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NR: [, [, , "(?:444|55\\d|888)\\d{4}", , , , , , , [7]],
                            [, , "(?:444|888)\\d{4}", , , , "4441234"],
                            [, , "55[4-9]\\d{4}", , , , "5551234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NU: [, [, , "(?:[47]|888\\d)\\d{3}", , , , , , , [4, 7]],
                            [, , "[47]\\d{3}", , , , "7012", , , [4]],
                            [, , "888[4-9]\\d{3}", , , , "8884012", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "NU", 683, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        NZ: [, [, , "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", , , , , , , [8, 9, 10],
                                [7]
                            ],
                            [, , "(?:24099|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{3})\\d{3}", , , , "32345678", , , [8],
                                [7]
                            ],
                            [, , "2(?:[0-28]\\d?|[79])\\d{7}|21\\d{6}", , , , "211234567"],
                            [, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456"],
                            [, , "90\\d{6,7}", , , , "900123456", , , [8, 9]],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{7}", , , , "701234567", , , [9]],
                            [, , , , , , , , , [-1]], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
                                [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                            ], , [, , "[28]6\\d{6,7}", , , , "26123456", , , [8, 9]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        OM: [, [, , "(?:[279]\\d{3}|500|8007\\d?)\\d{4}", , , , , , , [7, 8, 9]],
                            [, , "2[2-6]\\d{6}", , , , "23123456", , , [8]],
                            [, , "(?:7[129]\\d|9(?:0[1-9]|[1-9]\\d))\\d{5}", , , , "92123456", , , [8]],
                            [, , "(?:500|8007\\d?)\\d{4}", , , , "80071234"],
                            [, , "900\\d{5}", , , , "90012345", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "OM", 968, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PA: [, [, , "(?:[1-57-9]|6\\d)\\d{6}", , , , , , , [7, 8]],
                            [, , "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", , , , "2001234", , , [7]],
                            [, , "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}", , , , "61234567"],
                            [, , "800\\d{4}", , , , "8001234", , , [7]],
                            [, , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                                [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PE: [, [, , "(?:[14-8]|9\\d)\\d{7}", , , , , , , [8, 9],
                                [6, 7]
                            ],
                            [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", , , , "11234567", , , [8],
                                [6, 7]
                            ],
                            [, , "9\\d{8}", , , , "912345678", , , [9]],
                            [, , "800\\d{5}", , , , "80012345", , , [8]],
                            [, , "805\\d{5}", , , , "80512345", , , [8]],
                            [, , "801\\d{5}", , , , "80112345", , , [8]],
                            [, , "80[24]\\d{5}", , , , "80212345", , , [8]],
                            [, , , , , , , , , [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                                [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PF: [, [, , "[48]\\d{7}|4\\d{5}", , , , , , , [6, 8]],
                            [, , "4(?:[09][4-689]\\d|4)\\d{4}", , , , "40412345"],
                            [, , "8[79]\\d{6}", , , , "87123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PF", 689, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , "44\\d{4}", , , , , , , [6]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PG: [, [, , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [7, 8]],
                            [, , "(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9])\\d{4}", , , , "3123456"],
                            [, , "(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}", , , , "70123456", , , [8]],
                            [, , "180\\d{4}", , , , "1801234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "2(?:0[0-47]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "00|140[1-3]", , , , , , "00", , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PH: [, [, , "(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}", , , , , , , [6, 8, 9, 10, 11, 12, 13],
                                [4, 5, 7]
                            ],
                            [, , "(?:2\\d(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|8[2-8]\\d{7}", , , , "21234567", , , [6, 8, 9, 10],
                                [4, 5, 7]
                            ],
                            [, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[3-79]|89|9[4-9]))\\d{7}", , , , "9051234567", , , [10]],
                            [, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                                [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PK: [, [, , "(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", , , , , , , [8, 9, 10, 11, 12],
                                [5, 6, 7]
                            ],
                            [, , "2(?:(?:1[2-9]\\d|[25][2-9])\\d{6}|(?:3[2358]|4[2-4]|9[2-8])[2-9]\\d{5,6})|4(?:(?:[0146-9][2-9]|2[2-9]\\d)\\d{6}|5[3479][2-9]\\d{5,6})|5(?:(?:[1-35-7][2-9]|8[126]\\d)\\d{6}|4[2-467][2-9]\\d{5,6})|6(?:0[468][2-9]\\d{5,6}|[1-8][2-9]\\d{6})|7(?:[14][2-9]\\d{6}|2[236][2-9]\\d{5,6})|8(?:[16][2-9]\\d{6}|(?:2[2-689]|3[23578]|4[3478]|5[2356])[2-9]\\d{5,6})|9(?:1[2-9]\\d{6}|(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])[2-9]\\d{5,6})", , , , "2123456789", , , [9, 10],
                                [5, 6, 7, 8]
                            ],
                            [, , "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", , , , "3012345678", , , [10]],
                            [, , "800\\d{5}", , , , "80012345", , , [8]],
                            [, , "900\\d{5}", , , , "90012345", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , "122\\d{6}", , , , "122044444", , , [9]],
                            [, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                                [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                                [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                                [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356]))[2-9]|9(?:2(?:2[2-9]|[3-8])|(?:3[27-9]|4[2-6]|6[3569])[2-9]|9(?:[25-7][2-9]|8))"], "(0$1)"],
                                [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                                [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                                [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", , , , "21111825888", , , [11, 12]], , , [, , , , , , , , , [-1]]
                        ],
                        PL: [, [, , "[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?", , , , , , , [6, 7, 8, 9]],
                            [, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19\\d{3}", , , , "123456789", , , [7, 9]],
                            [, , "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]],
                            [, , "801\\d{6}", , , , "801234567", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
                                [, "(\\d{5})", "$1", ["19"]],
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                                [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]
                            ], , [, , "64\\d{4,7}", , , , "641234567"], , , [, , , , , , , , , [-1]],
                            [, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        PM: [, [, , "[45]\\d{5}", , , , , , , [6]],
                            [, , "(?:4[1-3]|50)\\d{4}", , , , "430123"],
                            [, , "(?:4[02-4]|5[05])\\d{4}", , , , "551234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PR: [, [, , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                            [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PS: [, [, , "(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}", , , , , , , [8, 9, 10],
                                [7]
                            ],
                            [, , "(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", , , , "22234567", , , [8],
                                [7]
                            ],
                            [, , "5[69]\\d{7}", , , , "599123456", , , [9]],
                            [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PT: [, [, , "(?:[26-9]\\d|30)\\d{7}", , , , , , , [9]],
                            [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
                            [, , "9(?:[1-36]\\d\\d|480)\\d{5}", , , , "912345678"],
                            [, , "80[02]\\d{6}", , , , "800123456"],
                            [, , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456"],
                            [, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
                            [, , "884[0-4689]\\d{5}", , , , "884123456"],
                            [, , "30\\d{7}", , , , "301234567"], "PT", 351, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "70(?:7\\d|8[17])\\d{5}", , , , "707123456"], , , [, , "600\\d{6}", , , , "600110000"]
                        ],
                        PW: [, [, , "(?:[25-8]\\d\\d|345|488|900)\\d{4}", , , , , , , [7]],
                            [, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"],
                            [, , "(?:6[2-4689]0|77\\d|88[0-4])\\d{4}", , , , "6201234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        PY: [, [, , "(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}", , , , , , , [6, 7, 8, 9],
                                [5]
                            ],
                            [, , "(?:2(?:1\\d|2[4-68]|7[15]|9[1-5])|5(?:[1-4]\\d|5[02-4])|6(?:1\\d|3[1-3]|44|7[1-46-8]))\\d{5,6}|3(?:(?:18|3[167]|4[2357]|51)\\d{5,6}|[289]\\d{5,7})|4(?:[1246-8]\\d{5,7}|(?:3[12]|5[13]|9[1-47])\\d{5,6})|7(?:[1-3]\\d{5,7}|(?:4[0-4]|6[1-578]|75|8[0-8])\\d{5,6})|8(?:[1-36]\\d{5,7}|58\\d{5,6})|[26]1\\d{5}", , , , "212345678", , , [7, 8, 9],
                                [5, 6]
                            ],
                            [, , "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", , , , "961456789", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                                [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                                [, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "[2-9]0\\d{4,7}", , , , "201234567"], , , [, , , , , , , , , [-1]]
                        ],
                        QA: [, [, , "(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}", , , , , , , [7, 8]],
                            [, , "4[04]\\d{6}", , , , "44123456", , , [8]],
                            [, , "[35-7]\\d{7}", , , , "33123456", , , [8]],
                            [, , "800\\d{4}", , , , "8001234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                            ], , [, , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        RE: [, [, , "(?:26|[68]\\d)\\d{7}", , , , , , , [9]],
                            [, , "262\\d{6}", , , , "262161234"],
                            [, , "69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}", , , , "692123456"],
                            [, , "80\\d{7}", , , , "801234567"],
                            [, , "89[1-37-9]\\d{6}", , , , "891123456"],
                            [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "RE", 262, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], 1, "262|69|8", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        RO: [, [, , "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", , , , , , , [6, 9]],
                            [, , "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d", , , , "211234567"],
                            [, , "7(?:(?:[02-7]\\d|8[03-8]|99)\\d|1(?:[01]\\d|20))\\d{5}", , , , "712034567", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "90[036]\\d{6}", , , , "900123456", , , [9]],
                            [, , "801\\d{6}", , , , "801123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                                [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "37\\d{7}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        RS: [, [, , "[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11, 12],
                                [4, 5]
                            ],
                            [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:0[2-9]|[2-9]\\d)))\\d{3,8}", , , , "10234567", , , [7, 8, 9, 10, 11, 12],
                                [4, 5, 6]
                            ],
                            [, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]],
                            [, , "800\\d{3,9}", , , , "80012345"],
                            [, , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [6, 7, 8, 9, 10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                                [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "7[06]\\d{4,10}", , , , "700123456"], , , [, , , , , , , , , [-1]]
                        ],
                        RU: [, [, , "[347-9]\\d{9}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", , , , "3011234567", , , , [7]],
                            [, , "9\\d{9}", , , , "9123456789"],
                            [, , "80[04]\\d{7}", , , , "8001234567"],
                            [, , "80[39]\\d{7}", , , , "8091234567"],
                            [, , , , , , , , , [-1]],
                            [, , "808\\d{7}", , , , "8081234567"],
                            [, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [
                                [, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
                            ],
                            [, , , , , , , , , [-1]], 1, "3[04-689]|[489]", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        RW: [, [, , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [8, 9]],
                            [, , "(?:06|2[258]\\d)\\d{6}", , , , "250123456"],
                            [, , "7[238]\\d{7}", , , , "720123456", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "900\\d{6}", , , , "900123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SA: [, [, , "(?:(?:[15]|8\\d)\\d|92)\\d{7}", , , , , , , [9, 10],
                                [7]
                            ],
                            [, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9],
                                [7]
                            ],
                            [, , "5(?:[013-689]\\d|7[0-36-8])\\d{6}", , , , "512345678", , , [9]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "925\\d{6}", , , , "925012345", , , [9]],
                            [, , "920\\d{6}", , , , "920012345", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [
                                [, "(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "811\\d{7}", , , , "8110123456", , , [10]], , , [, , , , , , , , , [-1]]
                        ],
                        SB: [, [, , "(?:[1-6]|[7-9]\\d\\d)\\d{4}", , , , , , , [5, 7]],
                            [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]],
                            [, , "(?:48|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d)\\d{3}", , , , "7421234"],
                            [, , "1[38]\\d{3}", , , , "18123", , , [5]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "5[12]\\d{3}", , , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SC: [, [, , "(?:(?:[249]\\d|64)\\d\\d|8000)\\d{3}", , , , , , , [7]],
                            [, , "4[2-46]\\d{5}", , , , "4217123"],
                            [, , "2[5-8]\\d{5}", , , , "2510123"],
                            [, , "8000\\d{3}", , , , "8000000"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:64\\d|9(?:5\\d|71))\\d{4}", , , , "6412345"], "SC", 248, "0(?:[02]|10?)", , , , , , "00", , [
                                [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SD: [, [, , "[19]\\d{8}", , , , , , , [9]],
                            [, , "1(?:5[3-7]|8[35-7])\\d{6}", , , , "153123456"],
                            [, , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SE: [, [, , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [6, 7, 8, 9, 10, 12]],
                            [, , "1(?:0[1-8]\\d{6}|(?:[13689]\\d|2[0-35]|4[0-4]|5[0-25-9]|7[13-6])\\d{5,6})|(?:2(?:[136]\\d|2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|[1356]\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01]))\\d{5,6}|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})|(?:[12][136]|3[356])\\d{5}", , , , "8123456", , , [7, 8, 9]],
                            [, , "7[02369]\\d{7}", , , , "701234567", , , [9]],
                            [, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]],
                            [, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]],
                            [, , "77[0-7]\\d{6}", , , , "771234567", , , [9]],
                            [, , "75[1-8]\\d{6}", , , , "751234567", , , [9]],
                            [, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"],
                                [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                                [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                                [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"],
                                [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"],
                                [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]
                            ],
                            [
                                [, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]],
                                [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],
                                [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                                [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]],
                                [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                                [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                            ],
                            [, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [12]]
                        ],
                        SG: [, [, , "(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}", , , , , , , [8, 10, 11]],
                            [, , "6[1-9]\\d{6}", , , , "61234567", , , [8]],
                            [, , "(?:8[1-8]|9[0-8])\\d{6}", , , , "81234567", , , [8]],
                            [, , "(?:18|8)00\\d{7}", , , , "18001234567", , , [10, 11]],
                            [, , "1900\\d{7}", , , , "19001234567", , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "3[12]\\d{6}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [
                                [, "(\\d{4,5})", "$1", ["1[0135-7]|77"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                                [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ],
                            [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                                [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]
                        ],
                        SH: [, [, , "(?:[256]\\d|8)\\d{3}", , , , , , , [4, 5]],
                            [, , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158"],
                            [, , "[56]\\d{4}", , , , "51234", , , [5]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "262\\d\\d", , , , "26212", , , [5]], "SH", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], 1, "[256]", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SI: [, [, , "[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}", , , , , , , [5, 6, 7, 8]],
                            [, , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [8],
                                [7]
                            ],
                            [, , "(?:(?:[37][01]|4[0139]|51)\\d\\d|6(?:[48]\\d\\d|5(?:1\\d|55|[67]0)|9(?:10|[69]\\d)))\\d{4}", , , , "31234567", , , [8]],
                            [, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
                            [, , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [8]], "SI", 386, "00|10(?:22|66|88|99)", "0", , , "0", , "00", , [
                                [, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SJ: [, [, , "(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}", , , , , , , [5, 8]],
                            [, , "79\\d{6}", , , , "79123456", , , [8]],
                            [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "41234567", , , [8]],
                            [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                            [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                            [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                            [, , "880\\d{5}", , , , "88012345", , , [8]],
                            [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "79", [, , , , , , , , , [-1]],
                            [, , "(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
                        ],
                        SK: [, [, , "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", , , , , , , [6, 7, 9]],
                            [, , "(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567"],
                            [, , "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}", , , , "912123456", , , [9]],
                            [, , "800\\d{6}", , , , "800123456", , , [9]],
                            [, , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [9]],
                            [, , "8[5-9]\\d{7}", , , , "850123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                                [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                            ],
                            [
                                [, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                                [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                            ],
                            [, , "9090\\d{3}", , , , "9090123", , , [7]], , , [, , "(?:(?:602|8(?:00|[5-9]\\d))\\d{3}|9(?:0(?:0\\d{3}|90)|[78]\\d{4}))\\d{3}", , , , , , , [7, 9]],
                            [, , "96\\d{7}", , , , "961234567", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        SL: [, [, , "(?:[2-578]\\d|66|99)\\d{6}", , , , , , , [8],
                                [6]
                            ],
                            [, , "[235]2[2-4][2-9]\\d{4}", , , , "22221234", , , , [6]],
                            [, , "(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}", , , , "25123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["[2-9]"], "(0$1)"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SM: [, [, , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [8, 10],
                                [6]
                            ],
                            [, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10],
                                [6]
                            ],
                            [, , "6[16]\\d{6}", , , , "66661212", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , "7[178]\\d{6}", , , , "71123456", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "5[158]\\d{6}", , , , "58001110", , , [8]], "SM", 378, "00", , , , "([89]\\d{5})$", "0549$1", , , [
                                [, "(\\d{6})", "$1", ["[89]"]],
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                            ],
                            [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SN: [, [, , "(?:[378]\\d{4}|93330)\\d{4}", , , , , , , [9]],
                            [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"],
                            [, , "7(?:[06-8]\\d|21|90)\\d{6}", , , , "701234567"],
                            [, , "800\\d{6}", , , , "800123456"],
                            [, , "88[4689]\\d{6}", , , , "884123456"],
                            [, , "81[02468]\\d{6}", , , , "810123456"],
                            [, , , , , , , , , [-1]],
                            [, , "(?:3(?:392|9[01]\\d)\\d|93330)\\d{4}", , , , "933301234"], "SN", 221, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SO: [, [, , "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", , , , , , , [6, 7, 8, 9]],
                            [, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", , , , "4012345", , , [6, 7]],
                            [, , "(?:(?:15|(?:3[59]|4[89]|6[1-9]|79|8[08])\\d|9(?:0[67]|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}", , , , "71123456", , , [7, 8, 9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                                [, "(\\d{6})", "$1", ["[134]"]],
                                [, "(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],
                                [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
                                [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SR: [, [, , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [6, 7]],
                            [, , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234"],
                            [, , "(?:7[124-7]|8[125-9])\\d{5}", , , , "7412345", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                                [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SS: [, [, , "[19]\\d{8}", , , , , , , [9]],
                            [, , "18\\d{7}", , , , "181234567"],
                            [, , "(?:12|9[1257])\\d{7}", , , , "977123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ST: [, [, , "(?:22|9\\d)\\d{5}", , , , , , , [7]],
                            [, , "22\\d{5}", , , , "2221234"],
                            [, , "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d\\d)\\d{3}", , , , "9812345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SV: [, [, , "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", , , , , , , [7, 8, 11]],
                            [, , "2[1-6]\\d{6}", , , , "21234567", , , [8]],
                            [, , "[67]\\d{7}", , , , "70123456", , , [8]],
                            [, , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [7, 11]],
                            [, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SX: [, [, , "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", , , , , , , [10],
                                [7]
                            ],
                            [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", , , , "7215425678", , , , [7]],
                            [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                            [, , "900[2-9]\\d{6}", , , , "9002123456"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "SX", 1, "011", "1", , , "1|(5\\d{6})$", "721$1", , , , , [, , , , , , , , , [-1]], , "721", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SY: [, [, , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [8, 9],
                                [6, 7]
                            ],
                            [, , "(?:1[14]\\d|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}|1[1-356]\\d{6}", , , , "112345678", , , , [6, 7]],
                            [, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", , , , "944567890", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        SZ: [, [, , "(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}", , , , , , , [8, 9]],
                            [, , "[23][2-5]\\d{6}", , , , "22171234", , , [8]],
                            [, , "7[6-9]\\d{6}", , , , "76123456", , , [8]],
                            [, , "0800\\d{4}", , , , "08001234", , , [8]],
                            [, , "900\\d{6}", , , , "900012345", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{6}", , , , "70012345", , , [8]], "SZ", 268, "00", , , , , , , , [
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                                [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                            ], , [, , , , , , , , , [-1]], , , [, , "0800\\d{4}", , , , , , , [8]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TA: [, [, , "8\\d{3}", , , , , , , [4]],
                            [, , "8\\d{3}", , , , "8999"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "8", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TC: [, [, , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "649(?:712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]],
                            [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , "64971[01]\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "1|([2-479]\\d{6})$", "649$1", , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TD: [, [, , "(?:22|[69]\\d|77)\\d{6}", , , , , , , [8]],
                            [, , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234"],
                            [, , "(?:6[023568]|77|9\\d)\\d{6}", , , , "63012345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TG: [, [, , "[279]\\d{7}", , , , , , , [8]],
                            [, , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345"],
                            [, , "(?:7[09]|9[0-36-9])\\d{6}", , , , "90112345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TH: [, [, , "(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}", , , , , , , [8, 9, 10]],
                            [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]],
                            [, , "(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]],
                            [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                            [, , "1900\\d{6}", , , , "1900123456", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00[1-9]", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                                [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TJ: [, [, , "(?:[3-59]\\d|77|88)\\d{7}", , , , , , , [9],
                                [3, 5, 6, 7]
                            ],
                            [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", , , , "372123456", , , , [3, 5, 6, 7]],
                            [, , "(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}", , , , "917123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TJ", 992, "810", "8", , , "8", , "8~10", , [
                                [, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], , , 1],
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], , , 1],
                                [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], , , 1],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[457-9]"], , , 1]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]],
                            [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"],
                            [, , "7[2-4]\\d{2,5}", , , , "7290"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TL: [, [, , "(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}", , , , , , , [7, 8]],
                            [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]],
                            [, , "7[3-8]\\d{6}", , , , "77212345", , , [8]],
                            [, , "80\\d{5}", , , , "8012345", , , [7]],
                            [, , "90\\d{5}", , , , "9012345", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , "70\\d{5}", , , , "7012345", , , [7]],
                            [, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TM: [, [, , "[1-6]\\d{7}", , , , , , , [8]],
                            [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"],
                            [, , "6[1-9]\\d{6}", , , , "66123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [
                                [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                                [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                                [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]],
                            [, , "(?:(?:3[0-2]|7\\d)\\d{3}|81200)\\d{3}", , , , "30010123"],
                            [, , "(?:(?:[259]\\d|4[0-6])\\d\\d|3(?:001|1(?:[1-35]\\d|40)|240|(?:6[0-4]|91)\\d))\\d{4}", , , , "20123456"],
                            [, , "8010\\d{4}", , , , "80101234"],
                            [, , "88\\d{6}", , , , "88123456"],
                            [, , "8[12]10\\d{4}", , , , "81101234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TO: [, [, , "(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}", , , , , , , [5, 7]],
                            [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", , , , "20123", , , [5]],
                            [, , "(?:7[578]|8[46-9])\\d{5}", , , , "7715123", , , [7]],
                            [, , "0800\\d{3}", , , , "0800222", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TO", 676, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]],
                                [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TR: [, [, , "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", , , , , , , [7, 10]],
                            [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", , , , "2123456789", , , [10]],
                            [, , "5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d\\d|6161)\\d{5}", , , , "5012345678", , , [10]],
                            [, , "800\\d{7}", , , , "8001234567", , , [10]],
                            [, , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [10]],
                            [, , , , , , , , , [-1]],
                            [, , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [10]],
                            [, , , , , , , , , [-1]], "TR", 90, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], , , 1],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
                            ],
                            [, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "444\\d{4}", , , , , , , [7]],
                            [, , "(?:444|850\\d{3})\\d{4}", , , , "4441444"], , , [, , , , , , , , , [-1]]
                        ],
                        TT: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "868(?:2(?:01|1[89]|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]],
                            [, , "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", , , , "8682911234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "1|([2-46-8]\\d{6})$", "868$1", , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]
                        ],
                        TV: [, [, , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [5, 6, 7]],
                            [, , "2[02-9]\\d{3}", , , , "20123", , , [5]],
                            [, , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [6, 7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        TW: [, [, , "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", , , , , , , [7, 8, 9, 10]],
                            [, , "(?:(?:2[2-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9])\\d\\d|8(?:2(?:3\\d|66)|[7-9]\\d\\d))\\d{4}|24\\d{6}", , , , "221234567", , , [8, 9]],
                            [, , "9[0-8]\\d{7}", , , , "912345678", , , [9]],
                            [, , "80[0-79]\\d{6}", , , , "800123456", , , [9]],
                            [, , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [7, 9]],
                            [, , , , , , , , , [-1]],
                            [, , "99\\d{7}", , , , "990123456", , , [9]],
                            [, , "70\\d{8}", , , , "7012345678", , , [10]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [
                                [, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                                [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[27-9]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        TZ: [, [, , "(?:[26-8]\\d|41|90)\\d{7}", , , , , , , [9]],
                            [, , "2[2-8]\\d{7}", , , , "222345678"],
                            [, , "(?:6[2-9]|7[13-9])\\d{7}", , , , "621234567"],
                            [, , "80[08]\\d{6}", , , , "800123456"],
                            [, , "90\\d{7}", , , , "900123456"],
                            [, , "8(?:40|6[01])\\d{6}", , , , "840123456"],
                            [, , , , , , , , , [-1]],
                            [, , "41\\d{7}", , , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        UA: [, [, , "[3-9]\\d{8}", , , , , , , [9],
                                [5, 6, 7]
                            ],
                            [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", , , , "311234567", , , , [5, 6, 7]],
                            [, , "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "391234567"],
                            [, , "800\\d{6}", , , , "800123456"],
                            [, , "900[2-49]\\d{5}", , , , "900212345"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "89[1-579]\\d{6}", , , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0"], "0$1"],
                                [, "(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        UG: [, [, , "(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}", , , , , , , [9],
                                [5, 6, 7]
                            ],
                            [, , "(?:20(?:(?:(?:[0147]\\d|5[0-4]|8[0-2])\\d|2(?:40|[5-9]\\d)|3(?:0[0-4]|[2367]\\d))\\d|6(?:00[0-2]|30[0-4]|[5-9]\\d\\d))|[34]\\d{5})\\d{3}", , , , "312345678", , , , [5, 6, 7]],
                            [, , "7(?:(?:[0157-9]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}", , , , "712345678"],
                            [, , "800[1-3]\\d{5}", , , , "800123456"],
                            [, , "90[1-3]\\d{6}", , , , "901123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [
                                [, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                                [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        US: [, [, , "[2-9]\\d{9}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                            [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [
                                [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
                                [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], , , 1]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]
                            ],
                            [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                            [, , "710[2-9]\\d{6}", , , , "7102123456"], , , [, , , , , , , , , [-1]]
                        ],
                        UY: [, [, , "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", , , , , , , [7, 8]],
                            [, , "(?:2\\d|4[2-7])\\d{6}", , , , "21231234", , , [8],
                                [7]
                            ],
                            [, , "9[1-9]\\d{6}", , , , "94231234", , , [8]],
                            [, , "80[05]\\d{4}", , , , "8001234", , , [7]],
                            [, , "90[0-8]\\d{4}", , , , "9001234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                                [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        UZ: [, [, , "[679]\\d{8}", , , , , , , [9]],
                            [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", , , , "669050123"],
                            [, , "(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}", , , , "912345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VA: [, [, , "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", , , , , , , [6, 7, 8, 9, 10, 11]],
                            [, , "06698\\d{1,6}", , , , "0669812345"],
                            [, , "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10, 11]],
                            [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
                            [, , "(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", , , , "899123456", , , [6, 8, 9, 10]],
                            [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
                            [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                            [, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "06698", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VC: [, [, , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
                            [, , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", , , , "7844301234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "VC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "784$1", , , , , [, , , , , , , , , [-1]], , "784", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VE: [, [, , "(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}", , , , "2121234567", , , , [7]],
                            [, , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567"],
                            [, , "800\\d{7}", , , , "8001234567"],
                            [, , "900\\d{7}", , , , "9001234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "VE", 58, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1", "$CC $1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VG: [, [, , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}", , , , "2842291234", , , , [7]],
                            [, , "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}", , , , "2843001234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "1|([2-578]\\d{6})$", "284$1", , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VI: [, [, , "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", , , , , , , [10],
                                [7]
                            ],
                            [, , "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                            [, , "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                            [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                            [, , "900[2-9]\\d{6}", , , , "9002345678"],
                            [, , , , , , , , , [-1]],
                            [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                            [, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "1|([2-9]\\d{6})$", "340$1", , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        VN: [, [, , "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}", , , , , , , [7, 8, 9, 10]],
                            [, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]],
                            [, , "(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5-9]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}", , , , "912345678", , , [9]],
                            [, , "1800\\d{4,6}", , , , "1800123456", , , [8, 9, 10]],
                            [, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "672\\d{6}", , , , "672012345", , , [9]], "VN", 84, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1],
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                                [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1],
                                [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
                            ],
                            [
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                                [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
                                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
                                [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
                            ],
                            [, , , , , , , , , [-1]], , , [, , "(?:[17]99|69\\d\\d?)\\d{4}", , , , , , , [7, 8]],
                            [, , "(?:[17]99|69\\d\\d?|80\\d)\\d{4}", , , , "1992000", , , [7, 8]], , , [, , , , , , , , , [-1]]
                        ],
                        VU: [, [, , "(?:(?:[23]|(?:[57]\\d|90)\\d)\\d|[48]8)\\d{3}", , , , , , , [5, 7]],
                            [, , "(?:(?:2[02-9]|88)\\d|3(?:[4-7]\\d|8[0-8])|48[4-9])\\d\\d", , , , "22123", , , [5]],
                            [, , "(?:5(?:[0-689]\\d|7[2-5])|7[013-7]\\d)\\d{4}", , , , "5912345", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "90[1-9]\\d{4}", , , , "9010123", , , [7]], "VU", 678, "00", , , , , , , , [
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "(?:3[03]|900\\d)\\d{3}", , , , "30123"], , , [, , , , , , , , , [-1]]
                        ],
                        WF: [, [, , "(?:[45]0|68|72|8\\d)\\d{4}", , , , , , , [6]],
                            [, , "(?:50|68|72)\\d{4}", , , , "501234"],
                            [, , "(?:50|68|72|8[23])\\d{4}", , , , "501234"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "WF", 681, "00", , , , , , , , [
                                [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234"]
                        ],
                        WS: [, [, , "(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}", , , , , , , [5, 6, 7, 10]],
                            [, , "(?:[2-5]\\d|6[1-9])\\d{3}", , , , "22123", , , [5]],
                            [, , "(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [7, 10]],
                            [, , "800\\d{3}", , , , "800123", , , [6]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "WS", 685, "0", , , , , , , , [
                                [, "(\\d{5})", "$1", ["[2-6]"]],
                                [, "(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        XK: [, [, , "(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}", , , , , , , [8, 9]],
                            [, , "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", , , , "28012345"],
                            [, , "4[3-79]\\d{6}", , , , "43201234", , , [8]],
                            [, , "800\\d{5}", , , , "80001234", , , [8]],
                            [, , "900\\d{5}", , , , "90001234", , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "XK", 383, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        YE: [, [, , "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", , , , , , , [7, 8, 9],
                                [6]
                            ],
                            [, , "17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", , , , "1234567", , , [7, 8],
                                [6]
                            ],
                            [, , "7[0137]\\d{7}", , , , "712345678", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [
                                [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        YT: [, [, , "(?:(?:26|63)9|80\\d)\\d{6}", , , , , , , [9]],
                            [, , "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}", , , , "269601234"],
                            [, , "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}", , , , "639012345"],
                            [, , "80\\d{7}", , , , "801234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "YT", 262, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "269|63", [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ZA: [, [, , "[1-9]\\d{8}|8\\d{4,7}", , , , , , , [5, 6, 7, 8, 9]],
                            [, , "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [9]],
                            [, , "(?:6\\d|7[0-46-9]|8[1-5])\\d{7}|8[1-4]\\d{3,6}", , , , "711234567"],
                            [, , "80\\d{7}", , , , "801234567", , , [9]],
                            [, , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [9]],
                            [, , "860\\d{6}", , , , "860123456", , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "87\\d{7}", , , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [
                                [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "861\\d{6}", , , , "861123456", , , [9]], , , [, , , , , , , , , [-1]]
                        ],
                        ZM: [, [, , "(?:(?:21|76|9\\d)\\d|800)\\d{6}", , , , , , , [9],
                                [6]
                            ],
                            [, , "21[1-8]\\d{6}", , , , "211234567", , , , [6]],
                            [, , "(?:76|9[5-8])\\d{7}", , , , "955123456"],
                            [, , "800\\d{6}", , , , "800123456"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "ZM", 260, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                            ],
                            [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                            ],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        ZW: [, [, , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10],
                                [3, 4]
                            ],
                            [, , "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|(?:4\\d\\d|9[2-9])\\d\\d?|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}", , , , "1312345", , , , [3, 4]],
                            [, , "(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}", , , , "712345678", , , [9, 10]],
                            [, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "86(?:1[12]|30|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
                                [, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78]|75)"], "0$1"],
                                [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                                [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                                [, "(\\d{2})(\\d{7})", "$1 $2", ["2(?:[05-79]2|4)|(?:39|5[45]|6[15-8])2|8[13-59]", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                                [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                                [, "(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56]|9[0-79])|3(?:[09][0-79]|1[0-689]|[24-6]|3[0-69])|5(?:[0236-9]|1[2-4]|5[0-69])|6(?:[013-59]|2[0-79]|[68][0-69]|7[0-46-9])"], "0$1"],
                                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                                [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        800: [, [, , "\\d{8}", , , , , , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "\\d{8}", , , , "12345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 800, , , , , , , , 1, [
                                [, "(\\d{4})(\\d{4})", "$1 $2"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        808: [, [, , "\\d{8}", , , , , , , [8]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "\\d{8}", , , , "12345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [
                                [, "(\\d{4})(\\d{4})", "$1 $2"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        870: [, [, , "[35-7]\\d{8}", , , , , , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:[356]\\d|7[6-8])\\d{7}", , , , "301234567"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 870, , , , , , , , , [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        878: [, [, , "10\\d{10}", , , , , , , [12]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [
                                [, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        881: [, [, , "[67]\\d{8}", , , , , , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , "[67]\\d{8}", , , , "612345678"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 881, , , , , , , , , [
                                [, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        882: [, [, , "[13]\\d{6}(?:\\d{2,5})?|1\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12]],
                            [, , , , , , , , , [-1]],
                            [, , "3(?:(?:(?:2|7\\d{3})\\d|37)\\d\\d|4(?:2|7\\d{3}))\\d{4}", , , , "3421234", , , [7, 9, 10, 12]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "(?:1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])|6\\d{1,6})|3(?:45|9\\d{3})\\d{3})\\d{4}", , , , "390123456789"], "001", 882, , , , , , , , , [
                                [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                                [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
                                [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                                [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[13]"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]
                        ],
                        883: [, [, , "51\\d{7}(?:\\d{3})?", , , , , , , [9, 12]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "51[013]0\\d{8}|5100\\d{5}", , , , "510012345"], "001", 883, , , , , , , , 1, [
                                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                                [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                                [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ],
                        888: [, [, , "\\d{11}", , , , , , , [11]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [
                                [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]
                        ],
                        979: [, [, , "\\d{9}", , , , , , , [9]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , "\\d{9}", , , , "123456789"],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [
                                [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                            ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                            [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                        ]
                    };

                function M() {
                    this.a = {}
                }
                M.c = void 0;
                M.a = function() {
                    return M.c ? M.c : M.c = new M
                };
                var xa = {
                        0: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        "\uff10": "0",
                        "\uff11": "1",
                        "\uff12": "2",
                        "\uff13": "3",
                        "\uff14": "4",
                        "\uff15": "5",
                        "\uff16": "6",
                        "\uff17": "7",
                        "\uff18": "8",
                        "\uff19": "9",
                        "\u0660": "0",
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u06f0": "0",
                        "\u06f1": "1",
                        "\u06f2": "2",
                        "\u06f3": "3",
                        "\u06f4": "4",
                        "\u06f5": "5",
                        "\u06f6": "6",
                        "\u06f7": "7",
                        "\u06f8": "8",
                        "\u06f9": "9"
                    },
                    ya = {
                        0: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        "\uff10": "0",
                        "\uff11": "1",
                        "\uff12": "2",
                        "\uff13": "3",
                        "\uff14": "4",
                        "\uff15": "5",
                        "\uff16": "6",
                        "\uff17": "7",
                        "\uff18": "8",
                        "\uff19": "9",
                        "\u0660": "0",
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u06f0": "0",
                        "\u06f1": "1",
                        "\u06f2": "2",
                        "\u06f3": "3",
                        "\u06f4": "4",
                        "\u06f5": "5",
                        "\u06f6": "6",
                        "\u06f7": "7",
                        "\u06f8": "8",
                        "\u06f9": "9",
                        A: "2",
                        B: "2",
                        C: "2",
                        D: "3",
                        E: "3",
                        F: "3",
                        G: "4",
                        H: "4",
                        I: "4",
                        J: "5",
                        K: "5",
                        L: "5",
                        M: "6",
                        N: "6",
                        O: "6",
                        P: "7",
                        Q: "7",
                        R: "7",
                        S: "7",
                        T: "8",
                        U: "8",
                        V: "8",
                        W: "9",
                        X: "9",
                        Y: "9",
                        Z: "9"
                    },
                    N = /^[+\uff0b]+/,
                    za = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
                    Aa = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
                    Ba = /[\\\/] *x/,
                    Ca = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
                    Da = /(?:.*?[A-Za-z]){3}.*/,
                    Ea = /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
                    Fa = /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
                    Ga = /(\$\d)/;

                function Ha(a) {
                    var b = a.search(Aa);
                    0 <= b ? (a = a.substring(b), a = a.replace(Ca, ""), b = a.search(Ba), 0 <= b && (a = a.substring(0, b))) : a = "";
                    return a
                }

                function Ia(a) {
                    return 2 > a.length ? !1 : O(Fa, a)
                }

                function Ja(a) {
                    return O(Da, a) ? P(a, ya) : P(a, xa)
                }

                function Ka(a) {
                    var b = Ja(a.toString());
                    a.c = "";
                    a.a(b)
                }

                function La(a) {
                    return null != a && (1 != A(a, 9) || -1 != w(a, 9)[0])
                }

                function P(a, b) {
                    for (var c = new F, d, e = a.length, f = 0; f < e; ++f) d = a.charAt(f), d = b[d.toUpperCase()], null != d && c.a(d);
                    return c.toString()
                }

                function Q(a) {
                    return null != a && isNaN(a) && a.toUpperCase() in wa
                }

                function Ma(a, b, c) {
                    if (0 == t(b, 2) && null != b.a[5]) {
                        var d = y(b, 5);
                        if (0 < d.length) return d
                    }
                    d = y(b, 1);
                    var e = R(b);
                    if (0 == c) return Na(d, 0, e, "");
                    if (!(d in K)) return e;
                    a = S(a, d, T(d));
                    b = null != b.a[3] && 0 != t(b, 3).length ? 3 == c ? ";ext=" + t(b, 3) : null != a.a[13] ? t(a, 13) + y(b, 3) : " ext. " + y(b, 3) : "";
                    a: {
                        a = 0 == w(a, 20).length || 2 == c ? w(a, 19) : w(a, 20);
                        for (var f, g = a.length, h = 0; h < g; ++h) {
                            f = a[h];
                            var l = A(f, 3);
                            if (0 == l || 0 == e.search(t(f, 3, l - 1)))
                                if (l = new RegExp(t(f, 1)), O(l, e)) {
                                    a = f;
                                    break a
                                }
                        }
                        a = null
                    }
                    null != a && (g = a, a = y(g, 2), f = new RegExp(t(g, 1)), y(g, 5), g = y(g, 4), e = 2 == c && null != g && 0 < g.length ? e.replace(f, a.replace(Ga, g)) : e.replace(f, a), 3 == c && (e = e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/, ""), e = e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g, "-")));
                    return Na(d, c, e, b)
                }

                function S(a, b, c) {
                    return "001" == c ? U(a, "" + b) : U(a, c)
                }

                function R(a) {
                    if (null == a.a[2]) return "";
                    var b = "" + t(a, 2);
                    return null != a.a[4] && t(a, 4) && 0 < y(a, 8) ? Array(y(a, 8) + 1).join("0") + b : b
                }

                function Na(a, b, c, d) {
                    switch (b) {
                        case 0:
                            return "+" + a + c + d;
                        case 1:
                            return "+" + a + " " + c + d;
                        case 3:
                            return "tel:+" + a + "-" + c + d;
                        default:
                            return c + d
                    }
                }

                function V(a, b) {
                    switch (b) {
                        case 4:
                            return t(a, 5);
                        case 3:
                            return t(a, 4);
                        case 1:
                            return t(a, 3);
                        case 0:
                        case 2:
                            return t(a, 2);
                        case 5:
                            return t(a, 6);
                        case 6:
                            return t(a, 8);
                        case 7:
                            return t(a, 7);
                        case 8:
                            return t(a, 21);
                        case 9:
                            return t(a, 25);
                        case 10:
                            return t(a, 28);
                        default:
                            return t(a, 1)
                    }
                }

                function W(a, b) {
                    return X(a, t(b, 1)) ? X(a, t(b, 5)) ? 4 : X(a, t(b, 4)) ? 3 : X(a, t(b, 6)) ? 5 : X(a, t(b, 8)) ? 6 : X(a, t(b, 7)) ? 7 : X(a, t(b, 21)) ? 8 : X(a, t(b, 25)) ? 9 : X(a, t(b, 28)) ? 10 : X(a, t(b, 2)) ? t(b, 18) || X(a, t(b, 3)) ? 2 : 0 : !t(b, 18) && X(a, t(b, 3)) ? 1 : -1 : -1
                }

                function U(a, b) {
                    if (null == b) return null;
                    b = b.toUpperCase();
                    var c = a.a[b];
                    if (null == c) {
                        c = wa[b];
                        if (null == c) return null;
                        c = (new E).a(I.f(), c);
                        a.a[b] = c
                    }
                    return c
                }

                function X(a, b) {
                    var c = a.length;
                    return 0 < A(b, 9) && -1 == p(w(b, 9), c) ? !1 : O(y(b, 2), a)
                }

                function Oa(a, b) {
                    if (null == b) return null;
                    var c = y(b, 1);
                    c = K[c];
                    if (null == c) a = null;
                    else if (1 == c.length) a = c[0];
                    else a: {
                        b = R(b);
                        for (var d, e = c.length, f = 0; f < e; f++) {
                            d = c[f];
                            var g = U(a, d);
                            if (null != g.a[23]) {
                                if (0 == b.search(t(g, 23))) {
                                    a = d;
                                    break a
                                }
                            } else if (-1 != W(b, g)) {
                                a = d;
                                break a
                            }
                        }
                        a = null
                    }
                    return a
                }

                function T(a) {
                    a = K[a];
                    return null == a ? "ZZ" : a[0]
                }

                function Y(a, b, c, d) {
                    var e = V(c, d),
                        f = 0 == A(e, 9) ? w(t(c, 1), 9) : w(e, 9);
                    e = w(e, 10);
                    if (2 == d)
                        if (La(V(c, 0))) a = V(c, 1), La(a) && (f = f.concat(0 == A(a, 9) ? w(t(c, 1), 9) : w(a, 9)), q(f), 0 == e.length ? e = w(a, 10) : (e = e.concat(w(a, 10)), q(e)));
                        else return Y(a, b, c, 1);
                    if (-1 == f[0]) return 5;
                    b = b.length;
                    if (-1 < p(e, b)) return 4;
                    c = f[0];
                    return c == b ? 0 : c > b ? 2 : f[f.length - 1] < b ? 3 : -1 < p(f, b, 1) ? 0 : 5
                }

                function Pa(a, b) {
                    var c = R(b);
                    b = y(b, 1);
                    if (!(b in K)) return 1;
                    b = S(a, b, T(b));
                    return Y(a, c, b, -1)
                }

                function Qa(a, b, c, d, e, f) {
                    if (0 == b.length) return 0;
                    b = new F(b);
                    var g;
                    null != c && (g = t(c, 11));
                    null == g && (g = "NonMatch");
                    var h = b.toString();
                    if (0 == h.length) g = 20;
                    else if (N.test(h)) h = h.replace(N, ""), b.c = "", b.a(Ja(h)), g = 1;
                    else {
                        h = new RegExp(g);
                        Ka(b);
                        g = b.toString();
                        if (0 == g.search(h)) {
                            h = g.match(h)[0].length;
                            var l = g.substring(h).match(za);
                            l && null != l[1] && 0 < l[1].length && "0" == P(l[1], xa) ? g = !1 : (b.c = "", b.a(g.substring(h)), g = !0)
                        } else g = !1;
                        g = g ? 5 : 20
                    }
                    e && u(f, 6, g);
                    if (20 != g) {
                        if (2 >= b.c.length) throw Error("Phone number too short after IDD");
                        a: {
                            a = b.toString();
                            if (0 != a.length && "0" != a.charAt(0))
                                for (e = a.length, b = 1; 3 >= b && b <= e; ++b)
                                    if (c = parseInt(a.substring(0, b), 10), c in K) {
                                        d.a(a.substring(b));
                                        d = c;
                                        break a
                                    }
                            d = 0
                        }
                        if (0 != d) return u(f, 1, d), d;
                        throw Error("Invalid country calling code");
                    }
                    if (null != c && (g = y(c, 10), h = "" + g, l = b.toString(), 0 == l.lastIndexOf(h, 0) && (h = new F(l.substring(h.length)), l = t(c, 1), l = new RegExp(y(l, 2)), Ra(h, c, null), h = h.toString(), !O(l, b.toString()) && O(l, h) || 3 == Y(a, b.toString(), c, -1)))) return d.a(h), e && u(f, 6, 10), u(f, 1, g), g;
                    u(f, 1, 0);
                    return 0
                }

                function Ra(a, b, c) {
                    var d = a.toString(),
                        e = d.length,
                        f = t(b, 15);
                    if (0 != e && null != f && 0 != f.length) {
                        var g = new RegExp("^(?:" + f + ")");
                        if (e = g.exec(d)) {
                            f = new RegExp(y(t(b, 1), 2));
                            var h = O(f, d),
                                l = e.length - 1;
                            b = t(b, 16);
                            if (null == b || 0 == b.length || null == e[l] || 0 == e[l].length) {
                                if (!h || O(f, d.substring(e[0].length))) null != c && 0 < l && null != e[l] && c.a(e[1]), a.set(d.substring(e[0].length))
                            } else if (d = d.replace(g, b), !h || O(f, d)) null != c && 0 < l && c.a(e[1]), a.set(d)
                        }
                    }
                }

                function Z(a, b, c) {
                    if (!Q(c) && 0 < b.length && "+" != b.charAt(0)) throw Error("Invalid country calling code");
                    return Sa(a, b, c, !0)
                }

                function Sa(a, b, c, d) {
                    if (null == b) throw Error("The string supplied did not seem to be a phone number");
                    if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
                    var e = new F,
                        f = b.indexOf(";phone-context=");
                    if (0 <= f) {
                        var g = f + 15;
                        if ("+" == b.charAt(g)) {
                            var h = b.indexOf(";", g);
                            0 < h ? e.a(b.substring(g, h)) : e.a(b.substring(g))
                        }
                        g = b.indexOf("tel:");
                        e.a(b.substring(0 <= g ? g + 4 : 0, f))
                    } else e.a(Ha(b));
                    f = e.toString();
                    g = f.indexOf(";isub=");
                    0 < g && (e.c = "", e.a(f.substring(0, g)));
                    if (!Ia(e.toString())) throw Error("The string supplied did not seem to be a phone number");
                    f = e.toString();
                    if (!(Q(c) || null != f && 0 < f.length && N.test(f))) throw Error("Invalid country calling code");
                    f = new J;
                    d && u(f, 5, b);
                    a: {
                        b = e.toString();g = b.search(Ea);
                        if (0 <= g && Ia(b.substring(0, g))) {
                            h = b.match(Ea);
                            for (var l = h.length, z = 1; z < l; ++z)
                                if (null != h[z] && 0 < h[z].length) {
                                    e.c = "";
                                    e.a(b.substring(0, g));
                                    b = h[z];
                                    break a
                                }
                        }
                        b = ""
                    }
                    0 < b.length && u(f, 3, b);
                    g = U(a, c);
                    b = new F;
                    h = 0;
                    l = e.toString();
                    try {
                        h = Qa(a, l, g, b, d, f)
                    } catch (L) {
                        if ("Invalid country calling code" == L.message && N.test(l)) {
                            if (l = l.replace(N, ""), h = Qa(a, l, g, b, d, f), 0 == h) throw L;
                        } else throw L;
                    }
                    0 != h ? (e = T(h), e != c && (g = S(a, h, e))) : (Ka(e), b.a(e.toString()), null != c ? (h = y(g, 10), u(f, 1, h)) : d && (delete f.a[6], f.c && delete f.c[6]));
                    if (2 > b.c.length) throw Error("The string supplied is too short to be a phone number");
                    null != g && (c = new F, e = new F(b.toString()), Ra(e, g, c), a = Y(a, e.toString(), g, -1), 2 != a && 4 != a && 5 != a && (b = e, d && 0 < c.toString().length && u(f, 7, c.toString())));
                    d = b.toString();
                    a = d.length;
                    if (2 > a) throw Error("The string supplied is too short to be a phone number");
                    if (17 < a) throw Error("The string supplied is too long to be a phone number");
                    if (1 < d.length && "0" == d.charAt(0)) {
                        u(f, 4, !0);
                        for (a = 1; a < d.length - 1 && "0" == d.charAt(a);) a++;
                        1 != a && u(f, 8, a)
                    }
                    u(f, 2, parseInt(d, 10));
                    return f
                }

                function O(a, b) {
                    return (a = "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a)) && a[0].length == b.length ? !0 : !1
                };
                m("intlTelInputUtils", {});
                m("intlTelInputUtils.formatNumber", function(a, b, c) {
                    try {
                        var d = M.a(),
                            e = Z(d, a, b),
                            f = Pa(d, e);
                        return 0 == f || 4 == f ? Ma(d, e, "undefined" == typeof c ? 0 : c) : a
                    } catch (g) {
                        return a
                    }
                });
                m("intlTelInputUtils.getExampleNumber", function(a, b, c) {
                    try {
                        var d = M.a();
                        a: {
                            if (Q(a)) {
                                var e = V(U(d, a), c);
                                try {
                                    if (null != e.a[6]) {
                                        var f = t(e, 6);
                                        var g = Sa(d, f, a, !1);
                                        break a
                                    }
                                } catch (h) {}
                            }
                            g = null
                        }
                        return Ma(d, g, b ? 2 : 1)
                    } catch (h) {
                        return ""
                    }
                });
                m("intlTelInputUtils.getExtension", function(a, b) {
                    try {
                        return t(Z(M.a(), a, b), 3)
                    } catch (c) {
                        return ""
                    }
                });
                m("intlTelInputUtils.getNumberType", function(a, b) {
                    try {
                        var c = M.a();
                        var d = Z(c, a, b),
                            e = Oa(c, d),
                            f = S(c, y(d, 1), e);
                        if (null == f) var g = -1;
                        else {
                            var h = R(d);
                            g = W(h, f)
                        }
                        return g
                    } catch (l) {
                        return -99
                    }
                });
                m("intlTelInputUtils.getValidationError", function(a, b) {
                    try {
                        var c = M.a(),
                            d = Z(c, a, b);
                        return Pa(c, d)
                    } catch (e) {
                        return "Invalid country calling code" == e.message ? 1 : "The string supplied did not seem to be a phone number" == e.message ? 4 : "Phone number too short after IDD" == e.message || "The string supplied is too short to be a phone number" == e ? 2 : "The string supplied is too long to be a phone number" == e.message ? 3 : -99
                    }
                });
                m("intlTelInputUtils.isValidNumber", function(a, b) {
                    try {
                        var c = M.a(),
                            d = Z(c, a, b);
                        var e = Oa(c, d),
                            f = y(d, 1),
                            g = S(c, f, e),
                            h;
                        if (!(h = null == g)) {
                            var l;
                            if (l = "001" != e) {
                                var z = U(c, e);
                                if (null == z) throw Error("Invalid region code: " + e);
                                var L = y(z, 10);
                                l = f != L
                            }
                            h = l
                        }
                        if (h) var va = !1;
                        else {
                            var Ta = R(d);
                            va = -1 != W(Ta, g)
                        }
                        return va
                    } catch (Ua) {
                        return !1
                    }
                });
                m("intlTelInputUtils.numberFormat", {
                    E164: 0,
                    INTERNATIONAL: 1,
                    NATIONAL: 2,
                    RFC3966: 3
                });
                m("intlTelInputUtils.numberType", {
                    FIXED_LINE: 0,
                    MOBILE: 1,
                    FIXED_LINE_OR_MOBILE: 2,
                    TOLL_FREE: 3,
                    PREMIUM_RATE: 4,
                    SHARED_COST: 5,
                    VOIP: 6,
                    PERSONAL_NUMBER: 7,
                    PAGER: 8,
                    UAN: 9,
                    VOICEMAIL: 10,
                    UNKNOWN: -1
                });
                m("intlTelInputUtils.validationError", {
                    IS_POSSIBLE: 0,
                    INVALID_COUNTRY_CODE: 1,
                    TOO_SHORT: 2,
                    TOO_LONG: 3,
                    NOT_A_NUMBER: 4
                });
            })();
        })
    }
]);
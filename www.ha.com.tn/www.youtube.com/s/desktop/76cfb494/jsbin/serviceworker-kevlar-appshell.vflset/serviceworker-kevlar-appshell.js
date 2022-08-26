/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function ea(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function fa(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return fa(a())
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function ha(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
ea("Array.prototype.values", function(a) {
    return a ? a : function() {
        return ha(this, function(b, c) {
            return c
        })
    }
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
ea("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var t = this || self;

function v(a, b, c) {
    a = a.split(".");
    c = c || t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function w(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ja(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function la(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function ma(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma = ka : ma = la;
    return ma.apply(null, arguments)
}

function na(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Na = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.yb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
na(oa, Error);
oa.prototype.name = "CustomError";

function pa() {};

function qa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ra(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function sa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ta(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ua(a) {
    var b = va;
    for (const c in b)
        if (a.call(void 0, b[c], c, b)) return c
}

function wa(a) {
    for (const b in a) return !1;
    return !0
}

function xa(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = xa(a[c]);
    return b
}
const ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function za(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ya.length; f++) c = ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Aa() {}

function Ba(a) {
    return new Aa(Ca, a)
}
var Ca = {};
Ba("");
var Da = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function Ea() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function x(a) {
    return -1 != Ea().indexOf(a)
};

function Fa() {
    return (x("Chrome") || x("CriOS")) && !x("Edge") || x("Silk")
};
var Ga = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ha(a) {
    return a ? decodeURI(a) : a
}

function Ia(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ia(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Ja(a) {
    var b = [],
        c;
    for (c in a) Ia(c, a[c], b);
    return b.join("&")
};

function Ka() {
    throw Error("Invalid UTF8");
}

function La(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Ma = void 0,
    Na;
const Oa = "undefined" !== typeof TextDecoder;
!x("Android") || Fa();
Fa();
var Pa = x("Safari") && !(Fa() || x("Coast") || x("Opera") || x("Edge") || x("Edg/") || x("OPR") || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Qa = {},
    Sa = null;

function Ta(a, b) {
    void 0 === b && (b = 0);
    Ua();
    b = Qa[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Va(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Wa(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Wa(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = Sa[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ua();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ua() {
    if (!Sa) {
        Sa = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Qa[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Sa[f] && (Sa[f] = e)
            }
        }
    }
};
var Xa = "undefined" !== typeof Uint8Array;

function Ya(a) {
    return Xa && null != a && a instanceof Uint8Array
}
let Za;
var $a = {};
let ab;

function bb(a) {
    if (a !== $a) throw Error("illegal external caller");
}

function cb() {
    return ab || (ab = new db(null, $a))
}
var db = class {
    constructor(a, b) {
        bb(b);
        this.R = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
        return null == this.R
    }
};
const A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

function eb(a, b) {
    Object.isFrozen(a) || (A ? a[A] |= b : void 0 !== a.F ? a.F |= b : Object.defineProperties(a, {
        F: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }))
}

function fb(a, b) {
    Object.isExtensible(a) && (A ? a[A] && (a[A] &= ~b) : void 0 !== a.F && (a.F &= ~b))
}

function gb(a) {
    let b;
    A ? b = a[A] : b = a.F;
    return null == b ? 0 : b
}

function hb(a, b) {
    A ? a[A] = b : void 0 !== a.F ? a.F = b : Object.defineProperties(a, {
        F: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
}

function ib(a) {
    return a ? !!(gb(a) & 1) : !1
}

function jb(a) {
    eb(a, 1);
    return a
}

function B(a) {
    return a ? !!(gb(a) & 2) : !1
}

function kb(a) {
    eb(a, 16);
    return a
}

function lb(a) {
    if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
    fb(a, 16)
}

function mb(a, b) {
    b ? eb(a, 8) : fb(a, 8)
}

function nb(a, b) {
    hb(b, (gb(a) | 0) & -51)
};

function ob(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let pb;
var qb = Object.freeze(jb([]));

function rb(a) {
    if (B(a.s)) throw Error("Cannot mutate an immutable Message");
}
var sb = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

function tb(a) {
    return {
        value: a,
        configurable: !1,
        writable: !1,
        enumerable: !1
    }
};

function ub(a) {
    return a.displayName || a.name || "unknown type name"
}

function vb(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${ub(b)} but got ${a&&ub(a.constructor)}`);
    return a
}

function wb(a, b, c = !1, d = !1) {
    if (Array.isArray(a)) return new b(d ? kb(a) : a);
    if (c) return new b
};

function xb(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a)) {
                if (Ya(a)) return Ta(a);
                if (a instanceof db) {
                    var b = a.R;
                    b = null == b || "string" === typeof b ? b : Xa && b instanceof Uint8Array ? Ta(b) : null;
                    return null == b ? "" : a.R = b
                }
            }
    }
    return a
};

function yb(a, b, c) {
    if (null != a) {
        if (Array.isArray(a)) a = zb(a, b, c);
        else if (ob(a)) {
            const d = {};
            for (let e in a) d[e] = yb(a[e], b, c);
            a = d
        } else a = b(a);
        return a
    }
}

function zb(a, b, c) {
    const d = Array.prototype.slice.call(a);
    c(a, d);
    for (a = 0; a < d.length; a++) d[a] = yb(d[a], b, c);
    return d
}

function Ab(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = xb(a);
    return Array.isArray(a) ? zb(a, Ab, Bb) : a
}

function Cb(a) {
    if ("object" === typeof a) {
        if (Ya(a)) return new Uint8Array(a);
        if (Array.isArray(a.s) && a.constructor !== Object) return a.clone()
    }
    return a
}

function Bb() {};

function Db(a) {
    return a.j || (a.j = a.s[a.m + a.l] = {})
}

function C(a, b, c = !1) {
    return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : c && a.j && (c = a.j[b], null != c) ? c : a.s[b + a.l]
}

function D(a, b, c, d = !1, e = !1) {
    e || rb(a);
    a.v && (a.v = void 0);
    if (b >= a.m || d) return Db(a)[b] = c, a;
    void 0 !== a.j && a.m >= a.s.length ? (d = a.s.length - 1, e = b + a.l, e >= d ? (a.s[d] = void 0, a.s[e] = c, a.s.push(a.j)) : a.s[e] = c) : a.s[b + a.l] = c;
    void 0 !== a.j && b in a.j && delete a.j[b];
    return a
}

function Eb(a, b, c, d) {
    let e = C(a, b, d);
    Array.isArray(e) ? ib(e) || jb(e) : e = qb;
    if (B(a.s)) c & 1 || (eb(e, 2), Object.freeze(e));
    else if (e === qb || B(e)) e = jb(Array.prototype.slice.call(e)), D(a, b, e, d);
    return e
}

function Fb(a, b, c = !1) {
    return Eb(a, b, 0, c)
}

function Gb(a, b, c, d) {
    rb(a);
    (c = Hb(a, c)) && c !== b && null != d && (a.i && c in a.i && (a.i[c] = void 0), D(a, c));
    return D(a, b, d)
}

function Hb(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != C(a, e) && (0 !== c && D(a, c, void 0, !1, !0), c = e)
    }
    return c
}

function Ib(a, b, c, d = !1) {
    {
        a.i || (a.i = {});
        const e = a.i[c];
        if (e) b = e;
        else if (b = wb(C(a, c, d), b)) a.i[c] = b, eb(b.s, gb(a.s) & -33)
    }
    if (null == b) return b;
    B(b.s) && !B(a.s) && (b = b.ja(), D(a, c, b.s, d), a.i[c] = b);
    return b
}

function Jb(a, b, c, d, e = !0) {
    a.i || (a.i = {});
    let f = a.i[c];
    d = Eb(a, c, 2, d);
    const g = !!(gb(a.s) & 16);
    var h = B(d);
    h = B(a.s) || h;
    if (!f) {
        f = [];
        let l = h;
        for (let m = 0; m < d.length; m++) {
            var k = d[m];
            l = l || B(k);
            k = wb(k, b, !1, g);
            void 0 !== k && (f.push(k), h && eb(k.s, 2))
        }
        a.i[c] = f;
        mb(d, !l)
    }
    b = h || e;
    e = B(f);
    b && !e && (Object.isFrozen(f) && (a.i[c] = f = f.slice()), eb(f, 2), Object.freeze(f));
    !b && e && (a.i[c] = f = f.slice());
    return f
}

function Kb(a, b, c, d = !1) {
    const e = B(a.s);
    b = Jb(a, b, c, d, e);
    a = Fb(a, c, d);
    if (!(c = e) && (c = a)) {
        if (!a) throw Error("cannot check mutability state of non-array");
        c = !(gb(a) & 8)
    }
    if (c) {
        for (c = 0; c < b.length; c++)(d = b[c]) && B(d.s) && !e && (b[c] = b[c].ja(), a[c] = b[c].s);
        mb(a, !0)
    }
    return b
}

function E(a, b, c, d) {
    rb(a);
    a.i || (a.i = {});
    null == d ? b = d = void 0 : b = vb(d, b).s;
    a.i[c] = d;
    D(a, c, b)
}

function Lb(a, b, c, d, e) {
    rb(a);
    a.i || (a.i = {});
    null != e ? b = vb(e, b).s : b = e = void 0;
    a.i[c] = e;
    Gb(a, c, d, b)
}

function Mb(a, b, c, d) {
    rb(a);
    const e = Jb(a, c, b, void 0, !1);
    c = null != d ? vb(d, c) : new c;
    a = Eb(a, b, 2);
    e.push(c);
    a.push(c.s);
    c.L() && mb(a, !1);
    return c
}

function Nb(a, b) {
    a = C(a, b);
    return null == a ? "" : a
};

function Ob(a) {
    pb = !0;
    try {
        return JSON.stringify(a.toJSON(), Pb)
    } finally {
        pb = !1
    }
}
var Tb = class {
    constructor(a, b, c) {
        a || (a = Qb);
        Qb = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.i;
        a ? gb(a) & 16 && eb(a, 32) : (a = f ? [f] : [], eb(a, 48));
        e && 0 < a.length && ob(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.l = (f ? 0 : -1) - d;
        this.i = void 0;
        this.s = a;
        a: {
            f = this.s.length;d = f - 1;
            if (f && (f = this.s[d], ob(f))) {
                this.j = f;
                b = Object.keys(f);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.m = Number.MAX_VALUE : this.m = d - this.l;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.l), this.j = void 0) : this.m =
                Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) b = c[e], b < this.m ? (b += this.l, (d = this.s[b]) ? Array.isArray(d) && jb(d) : this.s[b] = qb) : (d = Db(this), (f = d[b]) ? Array.isArray(f) && jb(f) : d[b] = qb)
    }
    toJSON() {
        const a = Rb(this.s);
        return pb ? a : zb(a, Ab, Bb)
    }
    clone() {
        var a = zb(this.s, Cb, nb);
        kb(a);
        Qb = a;
        a = new this.constructor(a);
        Qb = null;
        Sb(a, this);
        return a
    }
    isMutable() {
        return !B(this.s)
    }
    L() {
        return B(this.s)
    }
};

function Pb(a, b) {
    return xb(b)
}

function Rb(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && ib(h) && !h.length ? h = null : h = Rb(h);
            h != e && (d = !0)
        } else if (g === a.length - 1 && ob(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let m = f[l];
                    if (Array.isArray(m)) {
                        let p = m;
                        Array.isArray(m) && ib(m) && !m.length ? m = null : m = Rb(m);
                        m != p && (k = !0)
                    }
                    null != m ? e[l] = m : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}

function Sb(a, b) {
    b.o && (a.o = b.o.slice());
    const c = b.i;
    if (c) {
        b = b.j;
        for (let f in c) {
            const g = c[f];
            if (g) {
                var d = !(!b || !b[f]),
                    e = +f;
                if (Array.isArray(g)) {
                    if (g.length)
                        for (d = Kb(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Sb(d[e], g[e])
                } else(d = Ib(a, g.constructor, e, d)) && Sb(d, g)
            }
        }
    }
}
let Qb;

function Ub(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Vb() {
    return Error("Failed to read varint, encoding is invalid.")
}

function Wb(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function Xb(a) {
    if ("string" === typeof a) return {
        buffer: Va(a),
        L: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        L: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === db) {
        bb($a);
        var b = a.R;
        b = null == b || Ya(b) ? b : "string" === typeof b ? Va(b) : null;
        return {
            buffer: (null == b ? b : a.R = b) || Za || (Za = new Uint8Array(0)),
            L: !0
        }
    }
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        L: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const Yb = "function" === typeof Uint8Array.prototype.slice;

function Zb(a, b) {
    a.i = b;
    if (b > a.j) throw Wb(a.j, b);
}

function $b(a) {
    const b = a.l;
    let c = a.i,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Vb();
    Zb(a, c);
    return e
}

function ac(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.i,
        d = c + b;
    if (d > a.j) throw Wb(b, a.j - c);
    a.i = d;
    return c
}
var bc = class {
        constructor(a) {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.init(a, void 0, void 0, void 0)
        }
        init(a, b, c, {
            aa: d = !1
        } = {}) {
            this.aa = d;
            a && (a = Xb(a), this.l = a.buffer, this.o = a.L, this.m = b || 0, this.j = void 0 !== c ? this.m + c : this.l.length, this.i = this.m)
        }
        clear() {
            this.l = null;
            this.o = !1;
            this.i = this.j = this.m = 0;
            this.aa = !1
        }
        reset() {
            this.i = this.m
        }
        advance(a) {
            Zb(this, this.i + a)
        }
    },
    cc = [];

function dc(a) {
    var b = a.i;
    if (b.i == b.j) return !1;
    a.l = a.i.i;
    var c = $b(a.i) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Ub(c, a.l);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.l})`);
    a.m = b;
    a.j = c;
    return !0
}

function ec(a) {
    switch (a.j) {
        case 0:
            if (0 != a.j) ec(a);
            else a: {
                a = a.i;
                var b = a.i;
                const c = b + 10,
                    d = a.l;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        Zb(a, b);
                        break a
                    }
                throw Vb();
            }
            break;
        case 1:
            a.i.advance(8);
            break;
        case 2:
            2 != a.j ? ec(a) : (b = $b(a.i) >>> 0, a.i.advance(b));
            break;
        case 5:
            a.i.advance(4);
            break;
        case 3:
            b = a.m;
            do {
                if (!dc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.j) {
                    if (a.m != b) throw Error("Unmatched end-group tag");
                    break
                }
                ec(a)
            } while (1);
            break;
        default:
            throw Ub(a.j, a.l);
    }
}
var fc = class {
        constructor(a) {
            if (cc.length) {
                const b = cc.pop();
                b.init(a, void 0, void 0, void 0);
                a = b
            } else a = new bc(a);
            this.i = a;
            this.l = this.i.i;
            this.j = this.m = -1;
            ({
                T: a = !1
            } = {});
            this.T = a
        }
        reset() {
            this.i.reset();
            this.l = this.i.i;
            this.j = this.m = -1
        }
        advance(a) {
            this.i.advance(a)
        }
    },
    gc = [];

function hc(a, b, c, d, e, f) {
    if (a = a.i && a.i[c])
        if (Array.isArray(a)) {
            f = f.M ? jb(a.slice()) : a;
            e = 0 < f.length ? f[0].constructor : void 0;
            rb(b);
            if (null != f) {
                d = jb([]);
                a = !1;
                for (let g = 0; g < f.length; g++) d[g] = vb(f[g], e).s, a = a || B(d[g]);
                b.i || (b.i = {});
                b.i[c] = f;
                mb(d, !a)
            } else b.i && (b.i[c] = void 0), d = qb;
            D(b, c, d)
        } else E(b, a.constructor, c, a);
    else Xa && d instanceof Uint8Array ? e = d.length ? new db(new Uint8Array(d), $a) : cb() : (Array.isArray(d) && (e ? eb(d, 2) : ib(d) && f.M ? (e = Array.prototype.slice.call(d), hb(e, (gb(d) | 0) & -51), d = e) : lb(d)), e = d),
        D(b, c, e)
};
var ic = class extends Tb {
    ja() {
        return this
    }
};
sb && Object.defineProperties(ic, {
    [Symbol.hasInstance]: tb(() => {
        throw Error(void 0);
    })
});
const jc = Symbol();

function kc(a, b, c) {
    return a[jc] || (a[jc] = (d, e) => b(d, e, c))
}

function lc(a) {
    let b = a[jc];
    if (!b) {
        const c = mc(a);
        b = (d, e) => nc(d, e, c);
        a[jc] = b
    }
    return b
}

function oc(a) {
    var b = a.zb;
    if (b) return lc(b);
    if (b = a.Jb) return kc(a.Ca.ba, b, a.Ib)
}

function pc(a) {
    const b = oc(a),
        c = a.Ca,
        d = a.Rb.X;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}

function qc(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (rc in c || sc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const sc = Symbol(),
    rc = Symbol();

function tc(a, b) {
    a[0] = b
}

function uc(a, b, c, d) {
    const e = c.X;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function vc(a, b, c, d, e) {
    const f = c.X,
        g = lc(d),
        h = mc(d).ba;
    a[b] = (k, l, m) => f(k, l, m, h, g, e)
}

function wc(a, b, c, d, e, f, g) {
    const h = c.X,
        k = kc(d, e, f);
    a[b] = (l, m, p) => h(l, m, p, d, k, g)
}

function mc(a) {
    var b = a[rc];
    if (b) return b;
    b = a[rc] = {};
    var c = tc,
        d = uc,
        e = vc,
        f = wc;
    b.ba = a[0];
    let g = 1;
    if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
    }
    for (; g < a.length;) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
        h = a[g++];
        k -= g;
        switch (k) {
            case 0:
                d(b, c, h);
                break;
            case 1:
                (k = qc(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                break;
            case 2:
                k = b;
                var l = g++;
                l = qc(a, l);
                e(k, c, h, l, a[g++]);
                break;
            case 3:
                f(b, c, h, a[g++], a[g++], a[g++]);
                break;
            case 4:
                f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                break;
            default:
                throw Error("unexpected number of binary field arguments: " +
                    k);
        }
    }
    rc in a && sc in a && (a.length = 0);
    return b
}

function nc(a, b, c) {
    for (; dc(b) && 4 != b.j;) {
        var d = b.m,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = pc(f))
        }
        if (!e || !e(b, a, d))
            if (f = b, d = a, e = f.l, ec(f), !f.T) {
                var g = f.i.i - e;
                f.i.i = e;
                a: {
                    f = f.i;e = g;
                    if (0 == e) {
                        e = cb();
                        break a
                    }
                    const h = ac(f, e);f.aa && f.o ? e = f.l.subarray(h, h + e) : (f = f.l, g = h, e = h + e, e = g === e ? Za || (Za = new Uint8Array(0)) : Yb ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)));e = 0 == e.length ? cb() : new db(e, $a)
                }(f = d.o) ? f.push(e) : d.o = [e]
            }
    }
    return a
}

function xc(a, b) {
    return {
        X: a,
        Zb: b
    }
}
var yc = xc(function(a, b, c) {
        if (2 !== a.j) return !1;
        var d = $b(a.i) >>> 0;
        a = a.i;
        var e = ac(a, d);
        a = a.l;
        if (Oa) {
            var f = a,
                g;
            (g = Na) || (g = Na = new TextDecoder("utf-8", {
                fatal: !0
            }));
            a = e + d;
            f = 0 === e && a === f.length ? f : f.subarray(e, a);
            try {
                var h = g.decode(f)
            } catch (l) {
                if (void 0 === Ma) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (m) {}
                    try {
                        g.decode(new Uint8Array([97])), Ma = !0
                    } catch (m) {
                        Ma = !1
                    }
                }!Ma && (Na = void 0);
                throw l;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            let l = null;
            let m;
            for (; h < d;) {
                var k = a[h++];
                128 > k ? e.push(k) : 224 > k ? h >= d ? Ka() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                    (h--, Ka()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? Ka() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, Ka()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? Ka() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, Ka()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ka();
                8192 <= e.length && (l = La(l, e), e.length = 0)
            }
            h = La(l, e)
        }
        D(b, c, h);
        return !0
    }, function(a, b, c) {
        a.j(c, C(b, c))
    }),
    zc = xc(function(a, b, c, d, e) {
        if (2 !== a.j) return !1;
        b = Mb(b, c, d);
        c = a.i.j;
        d = $b(a.i) >>> 0;
        const f = a.i.i + d;
        let g = f - c;
        0 >= g && (a.i.j = f, e(b, a, void 0, void 0, void 0), g = f - a.i.i);
        if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.i.i = f;
        a.i.j = c;
        return !0
    }, function(a, b, c, d, e) {
        a.i(c, Kb(b, d, c), e)
    });
class F extends ic {
    ja() {
        if (B(this.s)) {
            var {
                M: a
            } = {
                M: !0
            };
            a = {
                M: a
            };
            const c = B(this.s);
            if (c && !a.M) throw Error("copyRepeatedFields must be true for frozen messages");
            c || lb(this.s);
            const d = new this.constructor;
            this.o && (d.o = this.o.slice());
            const e = this.s;
            for (let f = 0; f < e.length; f++) {
                const g = e[f];
                if (f === e.length - 1 && ob(g))
                    for (b in g) {
                        const h = +b;
                        Number.isNaN(h) ? Db(d)[b] = g[b] : hc(this, d, h, g[b], c, a)
                    } else hc(this, d, f - this.l, g, c, a)
            }
            var b = d;
            b.v = this
        } else b = this;
        return b
    }
}
sb && Object.defineProperties(F, {
    [Symbol.hasInstance]: tb(Object[Symbol.hasInstance])
});
Ba("csi.gstatic.com");
Ba("googleads.g.doubleclick.net");
Ba("partner.googleadservices.com");
Ba("pubads.g.doubleclick.net");
Ba("securepubads.g.doubleclick.net");
Ba("tpc.googlesyndication.com");

function Ac(a) {
    var b = w("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Bc(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Cc[c]) c = Cc[c];
                else {
                    c = String(c);
                    if (!Cc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Cc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Cc[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Bc(a, b) {
    b || (b = {});
    b[Dc(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Dc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Bc(a, b));
    return c
}

function Dc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Cc = {};
/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ec(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
Ec.prototype.clone = function() {
    return new Ec(this.x, this.y)
};
Ec.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
Ec.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
Ec.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Fc(a, b) {
    for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
};

function Gc(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
        c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var Hc = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Ic = [...Hc, "client_dev_set_cookie"];

function Jc() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(p) {
        for (var u = g, n = 0; 64 > n; n += 4) u[n / 4] = p[n] << 24 | p[n + 1] << 16 | p[n + 2] << 8 | p[n + 3];
        for (n = 16; 80 > n; n++) p = u[n - 3] ^ u[n - 8] ^ u[n - 14] ^ u[n - 16], u[n] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var y = e[1],
            z = e[2],
            I = e[3],
            Ra = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var K = I ^ y & (z ^ I);
                    var da = 1518500249
                } else K = y ^ z ^ I, da = 1859775393;
            else 60 > n ? (K = y & z | I & (y | z), da = 2400959708) : (K = y ^ z ^ I, da = 3395469782);
            K = ((p << 5 | p >>> 27) & 4294967295) + K + Ra + da + u[n] & 4294967295;
            Ra = I;
            I = z;
            z = (y << 30 | y >>> 2) & 4294967295;
            y = p;
            p = K
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + y & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + I & 4294967295;
        e[4] = e[4] + Ra & 4294967295
    }

    function c(p, u) {
        if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var n = [], y = 0, z = p.length; y < z; ++y) n.push(p.charCodeAt(y));
            p = n
        }
        u || (u = p.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < u;) b(p.slice(n, n + 64)), n += 64, m += 64;
        for (; n < u;)
            if (f[l++] = p[n++], m++, 64 == l)
                for (l = 0, b(f); n + 64 < u;) b(p.slice(n, n + 64)), n += 64, m += 64
    }

    function d() {
        var p = [],
            u = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = u & 255, u >>>= 8;
        b(f);
        for (n = u = 0; 5 > n; n++)
            for (var y = 24; 0 <= y; y -= 8) p[u++] = e[n] >> y & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Aa: function() {
            for (var p = d(), u = "", n = 0; n < p.length; n++) u += "0123456789ABCDEF".charAt(Math.floor(p[n] / 16)) + "0123456789ABCDEF".charAt(p[n] % 16);
            return u
        }
    }
};

function Kc(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, Lc(Gc(d), a, c || null)].join(" ") : null
}

function Lc(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], qa(d, function(h) {
        e.push(h)
    }), Mc(e.join(" "));
    var f = [],
        g = [];
    qa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    qa(d, function(h) {
        e.push(h)
    });
    a = Mc(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Mc(a) {
    var b = Jc();
    b.update(a);
    return b.Aa().toLowerCase()
};
const Nc = {};

function Oc() {
    this.i = document || {
        cookie: ""
    }
}
q = Oc.prototype;
q.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ra: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d;
    var e = !1;
    let f;
    if ("object" === typeof c) {
        f = c.Vb;
        e = c.Wb || !1;
        d = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.ra
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = d ? ";domain=" + d : "";
    g = g ? ";path=" + g : "";
    e = e ? ";secure" : "";
    h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
    this.i.cookie = a + "=" + b + c + g + h + e + (null != f ? ";samesite=" +
        f : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.i.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Da(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        ra: 0,
        path: b,
        domain: c
    });
    return d
};
q.isEmpty = function() {
    return !this.i.cookie
};
q.clear = function() {
    var a = (this.i.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Da(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Pc() {
    return !!Nc.FPA_SAMESITE_PHASE2_MOD || !1
}

function Qc(a, b, c, d) {
    (a = t[a]) || (a = (new Oc).get(b));
    return a ? Kc(a, c, d) : null
}

function Rc() {
    var a = [],
        b = Gc(String(t.location.href));
    const c = [];
    var d = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    Pc() && (d = d || t.__1PSAPISID);
    if (d) var e = !0;
    else e = new Oc, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), Pc() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? t.__SAPISID : t.__APISID, d || (d = new Oc, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? Kc(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && Pc() && ((b = Qc("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = Qc("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};

function Sc() {
    this.l = this.l;
    this.m = this.m
}
Sc.prototype.l = !1;
Sc.prototype.dispose = function() {
    this.l || (this.l = !0, this.U())
};
Sc.prototype.U = function() {
    if (this.m)
        for (; this.m.length;) this.m.shift()()
};
const Tc = self;

function Uc(a, b) {
    a.m(b);
    100 > a.j && (a.j++, b.next = a.i, a.i = b)
}
class Vc {
    constructor(a, b) {
        this.l = a;
        this.m = b;
        this.j = 0;
        this.i = null
    }
    get() {
        let a;
        0 < this.j ? (this.j--, a = this.i, this.i = a.next, a.next = null) : a = this.l();
        return a
    }
};

function Wc(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
class Xc {
    constructor() {
        this.j = this.i = null
    }
    add(a, b) {
        const c = Yc.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.i = c;
        this.j = c
    }
    remove() {
        let a = null;
        this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null);
        return a
    }
}
var Yc = new Vc(() => new Zc, a => a.reset());
class Zc {
    constructor() {
        this.next = this.scope = this.i = null
    }
    set(a, b) {
        this.i = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.i = null
    }
};
let $c, ad = !1,
    bd = new Xc,
    dd = (a, b) => {
        $c || cd();
        ad || ($c(), ad = !0);
        bd.add(a, b)
    },
    cd = () => {
        const a = t.Promise.resolve(void 0);
        $c = () => {
            a.then(ed)
        }
    };
var ed = () => {
    let a;
    for (; a = bd.remove();) {
        try {
            a.i.call(a.scope)
        } catch (b) {
            Wc(b)
        }
        Uc(Yc, a)
    }
    ad = !1
};
class fd {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function G(a) {
    this.i = 0;
    this.v = void 0;
    this.m = this.j = this.l = null;
    this.o = this.u = !1;
    if (a != pa) try {
        var b = this;
        a.call(void 0, function(c) {
            gd(b, 2, c)
        }, function(c) {
            gd(b, 3, c)
        })
    } catch (c) {
        gd(this, 3, c)
    }
}

function hd() {
    this.next = this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
}
hd.prototype.reset = function() {
    this.context = this.onRejected = this.j = this.i = null;
    this.l = !1
};
var id = new Vc(function() {
    return new hd
}, function(a) {
    a.reset()
});

function jd(a, b, c) {
    var d = id.get();
    d.j = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function kd(a) {
    if (a instanceof G) return a;
    var b = new G(pa);
    gd(b, 2, a);
    return b
}
G.prototype.then = function(a, b, c) {
    return ld(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
G.prototype.$goog_Thenable = !0;
q = G.prototype;
q.Qa = function(a, b) {
    return ld(this, null, a, b)
};
q.catch = G.prototype.Qa;
q.cancel = function(a) {
    if (0 == this.i) {
        var b = new md(a);
        dd(function() {
            nd(this, b)
        }, this)
    }
};

function nd(a, b) {
    if (0 == a.i)
        if (a.l) {
            var c = a.l;
            if (c.j) {
                for (var d = 0, e = null, f = null, g = c.j; g && (g.l || (d++, g.i == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.i && 1 == d ? nd(c, b) : (f ? (d = f, d.next == c.m && (c.m = d), d.next = d.next.next) : od(c), pd(c, e, 3, b)))
            }
            a.l = null
        } else gd(a, 3, b)
}

function qd(a, b) {
    a.j || 2 != a.i && 3 != a.i || rd(a);
    a.m ? a.m.next = b : a.j = b;
    a.m = b
}

function ld(a, b, c, d) {
    var e = jd(null, null, null);
    e.i = new G(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof md ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.i.l = a;
    qd(a, e);
    return e.i
}
q.Ra = function(a) {
    this.i = 0;
    gd(this, 2, a)
};
q.Sa = function(a) {
    this.i = 0;
    gd(this, 3, a)
};

function gd(a, b, c) {
    if (0 == a.i) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.i = 1;
        a: {
            var d = c,
                e = a.Ra,
                f = a.Sa;
            if (d instanceof G) {
                qd(d, jd(e || pa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    if (ja(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            sd(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.i = b, a.l = null, rd(a), 3 != b || c instanceof md || td(a, c))
    }
}

function sd(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function rd(a) {
    a.u || (a.u = !0, dd(a.Ba, a))
}

function od(a) {
    var b = null;
    a.j && (b = a.j, a.j = b.next, b.next = null);
    a.j || (a.m = null);
    return b
}
q.Ba = function() {
    for (var a; a = od(this);) pd(this, a, this.i, this.v);
    this.u = !1
};

function pd(a, b, c, d) {
    if (3 == c && b.onRejected && !b.l)
        for (; a && a.o; a = a.l) a.o = !1;
    if (b.i) b.i.l = null, ud(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : ud(b, c, d)
    } catch (e) {
        vd.call(null, e)
    }
    Uc(id, b)
}

function ud(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function td(a, b) {
    a.o = !0;
    dd(function() {
        a.o && vd.call(null, b)
    })
}
var vd = Wc;

function md(a) {
    oa.call(this, a)
}
na(md, oa);
md.prototype.name = "cancel";

function H(a) {
    Sc.call(this);
    this.v = 1;
    this.o = [];
    this.u = 0;
    this.i = [];
    this.j = {};
    this.I = !!a
}
na(H, Sc);
q = H.prototype;
q.za = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.v;
    this.i[e] = a;
    this.i[e + 1] = b;
    this.i[e + 2] = c;
    this.v = e + 3;
    d.push(e);
    return e
};
q.ka = function(a) {
    var b = this.i[a];
    if (b) {
        var c = this.j[b];
        0 != this.u ? (this.o.push(a), this.i[a + 1] = () => {}) : (c && sa(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2])
    }
    return !!b
};
q.ga = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.I)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                wd(this.i[g + 1], this.i[g + 2], d)
            } else {
                this.u++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.i[g + 1].apply(this.i[g + 2], d)
                } finally {
                    if (this.u--, 0 < this.o.length && 0 == this.u)
                        for (; c = this.o.pop();) this.ka(c)
                }
            }
        return 0 != e
    }
    return !1
};

function wd(a, b, c) {
    dd(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.ka, this), delete this.j[a])
    } else this.i.length = 0, this.j = {}
};
q.U = function() {
    H.Na.U.call(this);
    this.clear();
    this.o.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var xd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var yd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Ad = class extends F {
        constructor(a) {
            super(a)
        }
        getKey() {
            return C(this, 1)
        }
        ca() {
            return C(this, 2 === Hb(this, zd) ? 2 : -1)
        }
        setValue(a) {
            return Gb(this, 2, zd, a)
        }
    },
    zd = [2, 3, 4, 5, 6];
var Bd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Dd = class extends F {
        constructor(a) {
            super(a, -1, Cd)
        }
        clearLocationPlayabilityToken() {
            return D(this, 89, void 0, !1)
        }
    },
    Cd = [9, 66, 24, 32, 86, 100, 101];
var Fd = class extends F {
        constructor(a) {
            super(a, -1, Ed)
        }
    },
    Ed = [15, 26, 28];
var Gd = class extends F {
    constructor(a) {
        super(a)
    }
    setToken(a) {
        return D(this, 2, a)
    }
};
var Id = class extends F {
        constructor(a) {
            super(a, -1, Hd)
        }
    },
    Hd = [12];
var Kd = class extends F {
        constructor(a) {
            super(a, -1, Jd)
        }
        u(a) {
            E(this, Dd, 1, a)
        }
    },
    Jd = [12];
var Md = class extends F {
        constructor(a) {
            super(a, -1, Ld)
        }
    },
    Nd = class extends F {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Nb(this, 1)
        }
        ca() {
            return Nb(this, 2)
        }
        setValue(a) {
            return D(this, 2, a)
        }
    },
    Ld = [4, 5];
var Od = class extends F {
    constructor(a) {
        super(a)
    }
};
var Pd = class extends F {
        constructor(a) {
            super(a)
        }
    },
    Qd = [2, 3, 4];
var Rd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Sd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Td = class extends F {
    constructor(a) {
        super(a)
    }
};
var Vd = class extends F {
        constructor(a) {
            super(a, -1, Ud)
        }
    },
    Ud = [10, 17];
var Wd = class extends F {
    constructor(a) {
        super(a)
    }
};
var J = class extends F {
    constructor(a) {
        super(a)
    }
};
var Xd = class extends F {
    constructor(a) {
        super(a)
    }
};
var Zd = class extends F {
        constructor(a) {
            super(a, -1, Yd)
        }
    },
    Yd = [4];

function $d(a, b) {
    E(a, J, 1, b)
}
var ae = class extends F {
    constructor(a) {
        super(a)
    }
    C(a) {
        D(this, 2, a)
    }
};

function be(a, b) {
    E(a, J, 1, b)
}
var ce = class extends F {
    constructor(a) {
        super(a)
    }
};

function de(a, b) {
    E(a, J, 2, b)
}
var fe = class extends F {
        constructor(a) {
            super(a, -1, ee)
        }
        C(a) {
            D(this, 1, a)
        }
    },
    ee = [3];
var ge = class extends F {
    constructor(a) {
        super(a)
    }
    C(a) {
        D(this, 1, a)
    }
};
var he = class extends F {
    constructor(a) {
        super(a)
    }
    C(a) {
        D(this, 1, a)
    }
};
var ie = class extends F {
    constructor(a) {
        super(a)
    }
    C(a) {
        D(this, 1, a)
    }
};
var je = class extends F {
    constructor(a) {
        super(a)
    }
    C(a) {
        D(this, 1, a)
    }
};
var ke = class extends F {
    constructor(a) {
        super(a)
    }
};
var le = class extends F {
    constructor(a) {
        super(a)
    }
};
var L = class extends F {
        constructor(a) {
            super(a, 442)
        }
    },
    me = [23, 24, 11, 6, 7, 5, 2, 3, 13, 20, 21, 22, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 148, 151, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 402, 320, 203, 204, 205, 206, 258, 259, 260, 261, 327, 209, 219, 226, 227, 232, 233, 234, 240, 244, 247, 248, 249, 251, 256, 257, 266, 254, 255, 270, 272, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328,
        330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 388, 389, 403, 410, 412, 429, 413, 414, 415, 416, 417, 418, 430, 423, 424, 425, 426, 427, 431, 117, 439, 441
    ];
var ne = {
    pb: 0,
    Za: 1,
    gb: 2,
    hb: 4,
    mb: 8,
    ib: 16,
    jb: 32,
    ob: 64,
    nb: 128,
    bb: 256,
    eb: 512,
    lb: 1024,
    cb: 2048,
    fb: 4096,
    ab: 8192,
    kb: 16384
};
var oe = class extends F {
    constructor(a) {
        super(a)
    }
};
var qe = class extends F {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Gb(this, 1, pe, a)
        }
    },
    pe = [1, 2];
var se = class extends F {
        constructor() {
            super(void 0, -1, re)
        }
    },
    re = [3];
var te = new class {
    constructor(a) {
        this.name = a
    }
}("recordNotificationInteractionsEndpoint");
var ue = ["notification/convert_endpoint_to_url"],
    ve = ["notification/record_interactions"],
    we = ["notification_registration/set_registration"];
Date.now();
const xe = t.window;
let ye, ze;
const Ae = (null == xe ? void 0 : null == (ye = xe.yt) ? void 0 : ye.config_) || (null == xe ? void 0 : null == (ze = xe.ytcfg) ? void 0 : ze.data_) || {};
v("yt.config_", Ae);

function M(...a) {
    a = arguments;
    1 < a.length ? Ae[a[0]] = a[1] : 1 === a.length && Object.assign(Ae, a[0])
}

function N(a, b) {
    return a in Ae ? Ae[a] : b
}

function Be() {
    return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function Ce() {
    const a = Ae.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};

function O(a) {
    a = De(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function Ee(a, b) {
    a = De(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function Fe() {
    return N("EXPERIMENTS_TOKEN", "")
}

function De(a) {
    const b = N("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : N("EXPERIMENT_FLAGS", {})[a]
}

function Ge() {
    const a = [],
        b = N("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c in b) a.push({
        key: c,
        value: String(b[c])
    });
    c = N("EXPERIMENT_FLAGS", {});
    for (let d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
const He = [];

function Ie(a) {
    He.forEach(b => b(a))
}

function Je(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Ke(b)
        }
    } : a
}

function Ke(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), M("ERRORS", b));
    Ie(a)
}

function Le(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = N("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), M("ERRORS", b))
};
const Me = /^[\w.]*$/,
    Ne = {
        q: !0,
        search_query: !0
    };

function Oe(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Pe(h[0] || ""),
                l = Pe(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ta(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Oe);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Qe == l ? "unchanged" : l
            }];
            Ne.hasOwnProperty(e) || Le(d)
        }
    }
    return c
}
const Qe = String(Oe);

function Re(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Oe(a, "&")
}

function Se(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Re(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Ja(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Te(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ga)[1] || null,
        d = Ha(a.match(Ga)[3] || null);
    c && d ? (a = a.match(Ga), b = b.match(Ga), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ha(b.match(Ga)[3] || null) == d && (Number(b.match(Ga)[4] || null) || null) == (Number(a.match(Ga)[4] || null) || null) : !0;
    return a
}

function Pe(a) {
    return a && a.match(Me) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function Ue(a, b) {
    "function" === typeof a && (a = Je(a));
    return window.setTimeout(a, b)
};
[...Hc];
let Ve = !1;

function We(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Xe(a, b);
    const d = Ye(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = Ue(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function Xe(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = N("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Se(a, b || {}, !0);
    return a
}

function Ye(a, b) {
    const c = N("XSRF_FIELD_NAME"),
        d = N("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    var g = N("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ha(a.match(Ga)[3] || null) && !b.withCredentials && Ha(a.match(Ga)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (O("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e =
        Re(e), za(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Ja(e));
    f = e || f && !wa(f);
    !Ve && f && "POST" != b.method && (Ve = !0, Ke(Error("AJAX request with postData should use POST")));
    return e
};
v("ytglobal.prefsUserPrefsPrefs_", w("ytglobal.prefsUserPrefsPrefs_") || {});

function Ze() {
    return "INNERTUBE_API_KEY" in Ae && "INNERTUBE_API_VERSION" in Ae
}

function $e() {
    return {
        innertubeApiKey: N("INNERTUBE_API_KEY"),
        innertubeApiVersion: N("INNERTUBE_API_VERSION"),
        da: N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ea: N("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Fa: N("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: N("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        qa: N("INNERTUBE_CONTEXT_HL"),
        pa: N("INNERTUBE_CONTEXT_GL"),
        Ga: N("INNERTUBE_HOST_OVERRIDE") || "",
        Ia: !!N("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ha: !!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: N("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function af(a) {
    const b = {
        client: {
            hl: a.qa,
            gl: a.pa,
            clientName: a.Ea,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.da
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = Fe();
    "" !== c && (b.client.experimentsToken = c);
    c = Ge();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    bf(a, void 0, b);
    N("DELEGATED_SESSION_ID") && !O("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: N("DELEGATED_SESSION_ID")
    });
    a = Object;
    c = a.assign;
    var d = b.client,
        e = N("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Re(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function cf(a) {
    const b = new Kd,
        c = new Dd;
    D(c, 1, a.qa);
    D(c, 2, a.pa);
    D(c, 16, a.Fa);
    D(c, 17, a.innertubeContextClientVersion);
    if (a.da) {
        var d = a.da,
            e = new Bd;
        d.coldConfigData && D(e, 1, d.coldConfigData);
        d.appInstallData && D(e, 6, d.appInstallData);
        d.coldHashData && D(e, 3, d.coldHashData);
        d.hotHashData && D(e, 5, d.hotHashData);
        E(c, Bd, 62, e)
    }(d = t.devicePixelRatio) && 1 != d && D(c, 65, d);
    d = Fe();
    "" !== d && D(c, 54, d);
    d = Ge();
    if (0 < d.length) {
        e = new Fd;
        for (let f = 0; f < d.length; f++) {
            const g = new Ad;
            D(g, 1, d[f].key);
            g.setValue(d[f].value);
            Mb(e, 15,
                Ad, g)
        }
        E(b, Fd, 5, e)
    }
    bf(a, c);
    N("DELEGATED_SESSION_ID") && !O("pageid_as_header_web") && (a = new Id, D(a, 3, N("DELEGATED_SESSION_ID")));
    a = N("DEVICE", "");
    for (const [f, g] of Object.entries(Re(a))) a = f, d = g, "cbrand" === a ? D(c, 12, d) : "cmodel" === a ? D(c, 13, d) : "cbr" === a ? D(c, 87, d) : "cbrver" === a ? D(c, 88, d) : "cos" === a ? D(c, 18, d) : "cosver" === a ? D(c, 19, d) : "cplatform" === a && D(c, 42, d);
    b.u(c);
    return b
}

function bf(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Ib(b, Bd, 62)) ? d : new Bd;
            D(c, 6, a.appInstallData);
            E(b, Bd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function df(a, b, c = {}) {
    let d = {};
    N("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": N("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || N("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.xb || N("AUTHORIZATION")) || (a ? b = `Bearer ${w("gapi.auth.getToken")().wb}` : b = Rc());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = N("SESSION_INDEX", 0), O("pageid_as_header_web") && (d["X-Goog-PageId"] = N("DELEGATED_SESSION_ID")));
    return d
};
const ef = window;
var P = ef.ytcsi && ef.ytcsi.now ? ef.ytcsi.now : ef.performance && ef.performance.timing && ef.performance.now && ef.performance.timing.navigationStart ? () => ef.performance.timing.navigationStart + ef.performance.now() : () => (new Date).getTime();

function ff(a, b) {
    gf(a, 2, b)
}
var hf = class {
    i(a, b) {
        gf(a, 1, b)
    }
};

function gf(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = w("yt.scheduler.instance.addJob");
    d ? d(a, b, c) : void 0 === c ? a() : Ue(a, c || 0)
}
var jf = class extends hf {
    start() {
        const a = w("yt.scheduler.instance.start");
        a && a()
    }
};
jf.i || (jf.i = new jf);
var kf = jf.i;
const lf = [];
let mf, nf = !1;

function of (a) {
    nf || (mf ? mf.handleError(a) : (lf.push({
        type: "ERROR",
        payload: a
    }), 10 < lf.length && lf.shift()))
}

function pf(a, b) {
    nf || (mf ? mf.V(a, b) : (lf.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < lf.length && lf.shift()))
};
var Q = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};

function qf() {
    if (void 0 !== N("DATASYNC_ID")) return N("DATASYNC_ID");
    throw new Q("Datasync ID not set", "unknown");
};

function rf(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function sf(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const tf = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    uf = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    vf = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var R = class extends Q {
        constructor(a, b = {}, c = tf[a], d = uf[a], e = vf[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.i = e;
            Object.setPrototypeOf(this, R.prototype)
        }
    },
    wf = class extends R {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, tf.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, wf.prototype)
        }
    },
    xf = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, xf.prototype)
        }
    };
const yf = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function zf(a, b, c, d) {
    b = sf(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof R) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new R("QUOTA_EXCEEDED", a);
    if (Pa && "UnknownError" === e.name) return new R("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof xf) return new R("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && yf.some(f => e.message.includes(f))) return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new R("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Mb: e.name
    })];
    e.level = "WARNING";
    return e
}

function Af(a, b, c) {
    return new R("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Bf(a) {
    if (!a) throw Error();
    throw a;
}

function Cf(a) {
    return a
}
var Df = class {
    constructor(a) {
        this.i = a
    }
};

function Ef(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof S ? Ff(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Gf(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof S ? Ff(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Ff(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof S ? Ff(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var S = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.i = [];
        this.onRejected = [];
        a = a.i;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.i) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new S(new Df((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) S.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new S(new Df((b, c) => {
            a instanceof S ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new S(new Df((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : Cf,
            d = null != b ? b : Bf;
        return new S(new Df((e, f) => {
            "PENDING" === this.state.status ? (this.i.push(() => {
                Ef(this, this, c, e, f)
            }), this.onRejected.push(() => {
                Gf(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Ef(this, this, c, e, f) : "REJECTED" === this.state.status && Gf(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Hf(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function If(a) {
    return new Promise((b, c) => {
        Hf(a, b, c)
    })
}

function T(a) {
    return new S(new Df((b, c) => {
        Hf(a, b, c)
    }))
};

function Jf(a, b) {
    return new S(new Df((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function Kf(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            J: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.J ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(P());
            try {
                const m = a.i.transaction(b, e.mode);
                var k = d;
                const p = new Lf(m),
                    u = yield Mf(p, k), n = Math.round(P());
                Nf(a, l, n, g, void 0, b.join(), e);
                return u
            } catch (m) {
                k = Math.round(P());
                const p = zf(m, a.i.name, b.join(), a.i.version);
                if (p instanceof R && !p.i || g >= f) Nf(a, l, k, g, p, b.join(), e),
                    h = p
            }
        }
        return Promise.reject(h)
    })
}

function Of(a, b, c) {
    a = a.i.createObjectStore(b, c);
    return new Pf(a)
}

function Qf(a, b, c, d) {
    return Kf(a, [b], {
        mode: "readwrite",
        J: !0
    }, e => {
        e = e.objectStore(b);
        return T(e.i.put(c, d))
    })
}

function Nf(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof R && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && pf("QUOTA_EXCEEDED", {
        dbName: sf(a.i.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof R && "UNKNOWN_ABORT" === e.type && (c -= a.l, 0 > c && c >= Math.pow(2, 31) && (c = 0), pf("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.j = !0), Rf(a, !1, d, f, b, g.tag), of (e)) : Rf(a, !0, d, f, b, g.tag)
}

function Rf(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    pf("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.j,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Sf = class {
    constructor(a, b) {
        this.i = a;
        this.options = b;
        this.transactionCount = 0;
        this.l = Math.round(P());
        this.j = !1
    }
    add(a, b, c) {
        return Kf(this, [a], {
            mode: "readwrite",
            J: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return Kf(this, [a], {
            mode: "readwrite",
            J: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.i.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return Kf(this, [a], {
            mode: "readonly",
            J: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return Kf(this, [a], {
            mode: "readwrite",
            J: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return Kf(this, [a], {
            mode: "readonly",
            J: !0
        }, c => c.objectStore(a).get(b))
    }
    objectStoreNames() {
        return Array.from(this.i.objectStoreNames)
    }
};

function Tf(a, b, c) {
    a = a.i.openCursor(b.query, b.direction);
    return Uf(a).then(d => Jf(d, c))
}

function Vf(a, b) {
    return Tf(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Pf = class {
    constructor(a) {
        this.i = a
    }
    add(a, b) {
        return T(this.i.add(a, b))
    }
    autoIncrement() {
        return this.i.autoIncrement
    }
    clear() {
        return T(this.i.clear()).then(() => {})
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Vf(this, a) : T(this.i.delete(a))
    }
    get(a) {
        return T(this.i.get(a))
    }
    index(a) {
        try {
            return new Wf(this.i.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new xf(a, this.i.name);
            throw b;
        }
    }
    keyPath() {
        return this.i.keyPath
    }
};

function Mf(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Lf = class {
    constructor(a) {
        this.i = a;
        this.l = new Map;
        this.j = !1;
        this.done = new Promise((b, c) => {
            this.i.addEventListener("complete", () => {
                b()
            });
            this.i.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.i.error)
            });
            this.i.addEventListener("abort", () => {
                var d = this.i.error;
                if (d) c(d);
                else if (!this.j) {
                    d = R;
                    var e = this.i.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.i.db.name,
                        mode: this.i.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.i.abort();
        this.j = !0;
        throw new R("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.i.objectStore(a);
        let b = this.l.get(a);
        b || (b = new Pf(a), this.l.set(a, b));
        return b
    }
};

function Xf(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.i.openCursor(d, e);
    return Uf(a).then(f => Jf(f, c))
}
var Wf = class {
    constructor(a) {
        this.i = a
    }
    count(a) {
        return T(this.i.count(a))
    }
    delete(a) {
        return Xf(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return T(this.i.get(a))
    }
    getKey(a) {
        return T(this.i.getKey(a))
    }
    keyPath() {
        return this.i.keyPath
    }
    unique() {
        return this.i.unique
    }
};

function Uf(a) {
    return T(a).then(b => b ? new Yf(a, b) : null)
}
var Yf = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Uf(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Uf(this.request)
    }
    delete() {
        return T(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    ca() {
        return this.cursor.value
    }
    update(a) {
        return T(this.cursor.update(a))
    }
};

function Zf(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.Pa,
            l = c.upgrade,
            m = c.closed;
        let p;
        const u = () => {
            p || (p = new Sf(f.result, {
                closed: m
            }));
            return p
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && pf("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: sf(a)
                });
                const y = u(),
                    z = new Lf(f.transaction);
                l && l(y, I => n.oldVersion < I && n.newVersion >= I, z);
                z.done.catch(I => {
                    e(I)
                })
            } catch (y) {
                e(y)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(u())
            });
            n.addEventListener("close", () => {
                pf("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: sf(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(u())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function $f(a, b, c = {}) {
    return Zf(a, b, c)
}

function ag(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.blocked;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield If(c)
        } catch (c) {
            throw zf(c, a, "", -1);
        }
    })
};

function bg(a) {
    return new Promise(b => {
        ff(() => {
            b()
        }, a)
    })
}

function cg(a, b) {
    return new R("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function dg(a, b) {
    if (!b) throw Af("openWithToken", sf(a.name));
    return a.open()
}
var eg = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.m = !0;
        this.u = this.o = 0;
        this.j = 500
    }
    l(a, b, c = {}) {
        return $f(a, b, c)
    }
    delete(a = {}) {
        return ag(this.name, a)
    }
    open() {
        if (!this.m) throw cg(this);
        if (this.i) return this.i;
        let a;
        const b = () => {
                this.i === a && (this.i = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Pa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.l(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const m of Object.keys(h.O)) {
                            const {
                                S: p,
                                Sb: u = Number.MAX_VALUE
                            } = h.O[m];
                            !(f.i.version >= p) || f.i.version >= u || f.i.objectStoreNames.contains(m) || l.push(m)
                        }
                        if (0 !== l.length) {
                            const m = Object.keys(e.options.O),
                                p = k.objectStoreNames();
                            if (e.u < Ee("ytidb_reopen_db_retries", 0)) return e.u++, k.close(), of (new R("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: p
                            })), d();
                            if (e.o < Ee("ytidb_remake_db_retries", 1)) return e.o++, O("ytidb_remake_db_enable_backoff_delay") && (yield bg(e.j), e.j *= 2), yield e.delete(), of (new R("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: p
                            })), d();
                            throw new wf(p, m);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k &&
                            "An attempt was made to open a database using a lower version than the existing version." === k.message) {
                            g = yield e.l(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.i.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.m = !1, cg(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !O("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw zf(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.i = a = d()
    }
};
const fg = new eg("YtIdbMeta", {
    O: {
        databases: {
            S: 1
        }
    },
    upgrade(a, b) {
        b(1) && Of(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function gg(a, b) {
    return r(function*() {
        return Kf(yield dg(fg, b), ["databases"], {
            J: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return T(d.i.put(a, void 0)).then(() => {})
            })
        })
    })
}

function hg(a, b) {
    return r(function*() {
        if (a) return (yield dg(fg, b)).delete("databases", a)
    })
};
let ig;
const jg = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function kg() {
    return r(function*() {
        return !0
    })
}

function lg() {
    if (void 0 !== ig) return ig;
    nf = !0;
    return ig = kg().then(a => {
        nf = !1;
        return a
    })
}

function mg() {
    const a = w("ytglobal.idbToken_") || void 0;
    return a ? Promise.resolve(a) : lg().then(b => {
        (b = b ? jg : void 0) && v("ytglobal.idbToken_", b);
        return b
    })
};
new fd;

function ng(a) {
    try {
        qf();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new R("AUTH_INVALID", {
        dbName: a
    }), of (a), a;
    b = qf();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function og(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield mg();
        if (!e) throw e = Af("openDbImpl", a, b), O("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), of (e), e;
        rf(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : ng(a);
        try {
            return yield gg(f, e), yield $f(f.actualName, b, d)
        } catch (g) {
            try {
                yield hg(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function pg(a, b, c = {}) {
    return og(a, b, !1, c)
}

function qg(a, b, c = {}) {
    return og(a, b, !0, c)
}

function rg(a, b = {}) {
    return r(function*() {
        const c = yield mg();
        if (c) {
            rf(a);
            var d = ng(a);
            yield ag(d.actualName, b);
            yield hg(d.actualName, c)
        }
    })
}

function sg(a, b = {}) {
    return r(function*() {
        const c = yield mg();
        c && (rf(a), yield ag(a, b), yield hg(a, c))
    })
};

function tg(a) {
    this.version = 1;
    this.args = a
};

function ug() {
    var a = vg;
    this.topic = "screen-created";
    this.i = a
}
ug.prototype.toString = function() {
    return this.topic
};
const wg = w("ytPubsub2Pubsub2Instance") || new H;
H.prototype.subscribe = H.prototype.za;
H.prototype.unsubscribeByKey = H.prototype.ka;
H.prototype.publish = H.prototype.ga;
H.prototype.clear = H.prototype.clear;
v("ytPubsub2Pubsub2Instance", wg);
const xg = w("ytPubsub2Pubsub2SubscribedKeys") || {};
v("ytPubsub2Pubsub2SubscribedKeys", xg);
const yg = w("ytPubsub2Pubsub2TopicToKeys") || {};
v("ytPubsub2Pubsub2TopicToKeys", yg);
const zg = w("ytPubsub2Pubsub2IsAsync") || {};
v("ytPubsub2Pubsub2IsAsync", zg);
v("ytPubsub2Pubsub2SkipSubKey", null);

function Ag(a) {
    var b = Bg;
    const c = Cg();
    c && c.publish.call(c, b.toString(), b, a)
}

function Dg(a) {
    var b = Bg;
    const c = Cg();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = w("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (xg[d]) try {
                if (f && b instanceof ug && b != e) try {
                    var h = b.i,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.ta) {
                            const n = new h;
                            h.ta = n.version
                        }
                        var l = h.ta
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var p = k.args;
                            const n = p.length;
                            if (0 < n) {
                                const y = Array(n);
                                for (k = 0; k < n; k++) y[k] = p[k];
                                var u = y
                            } else u = []
                        }
                        f = m.call(l, h, u)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                Ke(n)
            }
        }, zg[b.toString()] ? w("yt.scheduler.instance") ? kf.i(g) : Ue(g, 0) : g())
    });
    xg[d] = !0;
    yg[b.toString()] || (yg[b.toString()] = []);
    yg[b.toString()].push(d);
    return d
}

function Eg() {
    var a = Fg;
    const b = Dg(function(c) {
        a.apply(void 0, arguments);
        Gg(b)
    });
    return b
}

function Gg(a) {
    const b = Cg();
    b && ("number" === typeof a && (a = [a]), qa(a, c => {
        b.unsubscribeByKey(c);
        delete xg[c]
    }))
}

function Cg() {
    return w("ytPubsub2Pubsub2Instance")
};

function Hg(a, b) {
    let c;
    return () => {
        c || (c = new Ig(a, b));
        return c
    }
}
var Ig = class extends eg {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        rf(a)
    }
    l(a, b, c = {}) {
        return (this.options.ha ? qg : pg)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.ha ? sg : rg)(this.name, a)
    }
};
const Jg = ["client.name", "client.version"];

function Kg(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Jg.includes(b.key) : !1);
    return a
};
var Lg;
Lg = Hg("ServiceWorkerLogsDatabase", {
    O: {
        SWHealthLog: {
            S: 1
        }
    },
    ha: !0,
    upgrade: (a, b) => {
        b(1) && Of(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).i.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Mg(a, b) {
    return r(function*() {
        var c = yield dg(Lg(), b), d = N("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Kg(e.clientError));
        e.interface = d;
        return Qf(c, "SWHealthLog", e)
    })
};
const Ng = t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    potentialEsfErrorCounter: 0
};
v("ytNetworklessLoggingInitializationOptions", Ng);

function Og(a) {
    !a.config_ && Ze() && (a.config_ = $e());
    return !!a.config_
}

function Pg(a, b, c) {
    !N("VISITOR_DATA") && .01 > Math.random() && Le(new Q("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!Og(a)) throw a = new Q("innertube xhrclient not ready", "log_event", b, c), Ke(a), a;
    const d = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (m, p) => {
            if (c.onSuccess) c.onSuccess(p)
        },
        onFetchSuccess: m => {
            if (c.onSuccess) c.onSuccess(m)
        },
        onError: (m, p) => {
            if (c.onError) c.onError(p)
        },
        onFetchError: m => {
            if (c.onError) c.onError(m)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    d.headers["Content-Type"] || (d.headers["Content-Type"] = "application/json");
    b = "";
    var e = a.config_.Ga;
    e && (b = e);
    e = df(a.config_.Ia || !1, b, c);
    Object.assign(d.headers, e);
    (e = d.headers.Authorization) && !b && (d.headers["x-origin"] = window.location.origin);
    const f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.Ha && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    const k = Se(`${b}${f}`, g || {}, !0),
        l = () => {
            try {
                We(k,
                    d)
            } catch (m) {
                if ("InvalidAccessError" == m.name) Le(Error("An extension is blocking network request."));
                else throw m;
            }
        };
    !O("use_new_nwl") && w("ytNetworklessLoggingInitializationOptions") && Ng.isNwlInitialized ? lg().then(m => {
        l(m)
    }) : l(!1)
}
class Qg {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Ze() && (this.config_ = $e())
    }
};
let Rg = 0;
v("ytDomDomGetNextId", w("ytDomDomGetNextId") || (() => ++Rg));
const Sg = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    screenX: 1,
    screenY: 1,
    scale: 1,
    rotation: 1,
    webkitMovementX: 1,
    webkitMovementY: 1
};

function Tg(a) {
    if (document.body && document.documentElement) {
        const b = document.body.scrollTop + document.documentElement.scrollTop;
        a.i = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
        a.j = a.clientY + b
    }
}
class Wg {
    constructor(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (let d in a) d in Sg || (this[d] = a[d]);
                this.rotation = a.rotation;
                var b = a.target || a.srcElement;
                b && 3 == b.nodeType && (b = b.parentNode);
                this.target = b;
                var c = a.relatedTarget;
                if (c) try {
                    c =
                        c.nodeName ? c : null
                } catch (d) {
                    c = null
                } else "mouseover" == this.type ? c = a.fromElement : "mouseout" == this.type && (c = a.toElement);
                this.relatedTarget = c;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.i = a.pageX;
                this.j = a.pageY
            }
        } catch (d) {}
    }
    preventDefault() {
        this.event &&
            (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    }
    stopPropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    }
    stopImmediatePropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
};
const va = t.ytEventsEventsListeners || {};
v("ytEventsEventsListeners", va);
const Xg = t.ytEventsEventsCounter || {
    count: 0
};
v("ytEventsEventsCounter", Xg);

function Yg(a, b, c, d = {}) {
    a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
    return ua(e => {
        const f = "boolean" === typeof e[4] && e[4] == !!d;
        var g;
        if (g = ja(e[4]) && ja(d)) a: {
            g = e[4];
            for (const h in g)
                if (!(h in d) || g[h] !== d[h]) {
                    g = !1;
                    break a
                }
            for (const h in d)
                if (!(h in g)) {
                    g = !1;
                    break a
                }
            g = !0
        }
        return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
    })
}
const Zg = function(a) {
    let b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    let a = !1;
    try {
        const b = Object.defineProperty({}, "capture", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, b)
    } catch (b) {}
    return a
});

function $g(a, b, c, d = {}) {
    if (!a || !a.addEventListener && !a.attachEvent) return "";
    let e = Yg(a, b, c, d);
    if (e) return e;
    e = ++Xg.count + "";
    const f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
    let g;
    g = f ? h => {
        h = new Wg(h);
        if (!Fc(h.relatedTarget, k => k == a)) return h.currentTarget = a, h.type = b, c.call(a, h)
    } : h => {
        h = new Wg(h);
        h.currentTarget = a;
        return c.call(a, h)
    };
    g = Je(g);
    a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), Zg() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent(`on${b}`, g);
    va[e] = [a, b, c, g, d];
    return e
}

function ah(a) {
    a && ("string" == typeof a && (a = [a]), qa(a, b => {
        if (b in va) {
            var c = va[b];
            const d = c[0],
                e = c[1],
                f = c[3];
            c = c[4];
            d.removeEventListener ? Zg() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent(`on${e}`, f);
            delete va[b]
        }
    }))
};
const bh = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
    return window.performance.timing.navigationStart + window.performance.now()
} : function() {
    return (new Date).getTime()
};

function ch(a) {
    this.Z = a;
    this.i = null;
    this.u = 0;
    this.I = null;
    this.v = 0;
    this.j = [];
    for (a = 0; 4 > a; a++) this.j.push(0);
    this.o = 0;
    this.wa = $g(window, "mousemove", ma(this.xa, this));
    a = ma(this.va, this);
    "function" === typeof a && (a = Je(a));
    this.ya = window.setInterval(a, 25)
}
na(ch, Sc);
ch.prototype.xa = function(a) {
    void 0 === a.i && Tg(a);
    var b = a.i;
    void 0 === a.j && Tg(a);
    this.i = new Ec(b, a.j)
};
ch.prototype.va = function() {
    if (this.i) {
        var a = bh();
        if (0 != this.u) {
            var b = this.I,
                c = this.i,
                d = b.x - c.x;
            b = b.y - c.y;
            d = Math.sqrt(d * d + b * b) / (a - this.u);
            this.j[this.o] = .5 < Math.abs((d - this.v) / this.v) ? 1 : 0;
            for (c = b = 0; 4 > c; c++) b += this.j[c] || 0;
            3 <= b && this.Z();
            this.v = d
        }
        this.u = a;
        this.I = this.i;
        this.o = (this.o + 1) % 4
    }
};
ch.prototype.U = function() {
    window.clearInterval(this.ya);
    ah(this.wa)
};
const dh = {};

function eh() {
    var {
        Pb: a = !1,
        Eb: b = !0
    } = {};
    if (null == w("_lact", window)) {
        var c = parseInt(N("LACT"), 10);
        c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
        v("_lact", c, window);
        v("_fact", c, window); - 1 == c && fh();
        $g(document, "keydown", fh);
        $g(document, "keyup", fh);
        $g(document, "mousedown", fh);
        $g(document, "mouseup", fh);
        a ? $g(window, "touchmove", () => {
            gh("touchmove", 200)
        }, {
            passive: !0
        }) : ($g(window, "resize", () => {
            gh("resize", 200)
        }), b && $g(window, "scroll", () => {
            gh("scroll", 200)
        }));
        new ch(() => {
            gh("mouse", 100)
        });
        $g(document, "touchstart", fh, {
            passive: !0
        });
        $g(document, "touchend", fh, {
            passive: !0
        })
    }
}

function gh(a, b) {
    dh[a] || (dh[a] = !0, kf.i(() => {
        fh();
        dh[a] = !1
    }, b))
}

function fh() {
    null == w("_lact", window) && eh();
    var a = Date.now();
    v("_lact", a, window); - 1 == w("_fact", window) && v("_fact", a, window);
    (a = w("ytglobal.ytUtilActivityCallback_")) && a()
}

function hh() {
    const a = w("_lact", window);
    var b;
    null == a ? b = -1 : b = Math.max(Date.now() - a, 0);
    return b
};
t.ytPubsubPubsubInstance || new H;

function ih(a, b) {
    const c = Object.keys(b);
    var d = "THIS_KEY_FIELD_NOT_FILLED",
        e = "THIS_KEY_FIELD_NOT_FILLED",
        f = "THIS_KEY_FIELD_NOT_FILLED";
    for (const g of c) "auth" === g ? d = jh(b.auth) : "isJspb" === g ? e = JSON.stringify(b.isJspb) : "cttAuthInfo" === g && (f = jh(b.cttAuthInfo));
    b = [];
    d = [d, e, f];
    for (const g of Object.keys(a.i)) {
        a = g.split("/");
        e = !0;
        for (f = 0; f < d.length; f++)
            if ("THIS_KEY_FIELD_NOT_FILLED" !== d[f] && d[f] !== a[f]) {
                e = !1;
                break
            }
        e && b.push(g)
    }
    return b
}
var lh = class {
    constructor(a) {
        this.policy = a;
        this.store = [];
        this.i = {}
    }
    storePayload(a, b) {
        this.store.push({
            payload: b,
            keys: a
        });
        b = kh(a);
        this.i[b] ? this.i[b]++ : this.i[b] = 1;
        this.i[b] >= this.policy.maxBatchSize && (this.policy.onBatchSizeExceeded(a), this.i[b] = 0);
        return b
    }
    extractMatchingEntries(a) {
        const b = [],
            c = [];
        for (const f of this.store) {
            a: {
                var d = a;
                var e = f;
                const g = Object.keys(d);
                for (const h of g)
                    if (e.keys[h] !== d[h]) {
                        d = !1;
                        break a
                    }
                d = !0
            }
            d ? (b.push(f.payload), this.i[kh(f.keys)]--) : c.push(f)
        }
        this.store = c;
        a = ih(this, a);
        for (const f of a) 0 < this.i[f] && Le(new Q("Transport IMS did not fully extract entries for key:", {
            sequence: f,
            Nb: b.length,
            Lb: this.i[f]
        }));
        return b
    }
    getSequenceCount(a) {
        a = ih(this, a);
        let b = 0;
        for (const c of a) b += this.i[c];
        return b
    }
};
lh.prototype.getSequenceCount = lh.prototype.getSequenceCount;
lh.prototype.extractMatchingEntries = lh.prototype.extractMatchingEntries;
lh.prototype.storePayload = lh.prototype.storePayload;

function kh(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo].join("/")
}

function jh(a) {
    return void 0 === a ? "undefined" : a
};
const mh = Ee("initial_gel_batch_timeout", 2E3),
    nh = Math.pow(2, 16) - 1;
let U = void 0;
class oh {
    constructor() {
        this.l = this.i = this.j = 0
    }
}
const ph = new oh,
    qh = new oh;
let rh = !0;
const sh = t.ytLoggingTransportGELQueue_ || new Map,
    th = t.ytLoggingTransportGELProtoQueue_ || new Map,
    uh = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    vh = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let wh = {};

function xh() {
    let a = w("yt.logging.ims");
    a || (a = new lh({
        maxBatchSize: Ee("tvhtml5_logging_max_batch") || Ee("web_logging_max_batch") || 100,
        onBatchSizeExceeded: b => {
            yh({
                writeThenSend: !0
            }, void 0, b.isJspb)
        }
    }), v("yt.logging.ims", a));
    return a
}

function zh(a, b) {
    O("web_all_payloads_via_jspb") && Le(new Q("transport.log called for JSON in JSPB only experiment"));
    if ("log_event" === a.endpoint) {
        var c = Ah(a);
        if (O("use_new_in_memory_storage")) {
            wh[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !1
            };
            xh().storePayload(d, a.payload);
            Bh(b, [], c, !1, d)
        } else d = sh.get(c) || [], sh.set(c, d), d.push(a.payload), Bh(b, d, c)
    }
}

function Ch(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ah(a, !0);
        if (O("use_new_in_memory_storage")) {
            wh[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !0
            };
            xh().storePayload(d, a.payload.toJSON());
            Bh(b, [], c, !0, d)
        } else d = th.get(c) || [], th.set(c, d), a = a.payload.toJSON(), d.push(a), Bh(b, d, c, !0)
    }
}

function Bh(a, b, c, d = !1, e) {
    a && (U = new a);
    a = Ee("tvhtml5_logging_max_batch") || Ee("web_logging_max_batch") || 100;
    const f = P(),
        g = d ? qh.l : ph.l;
    b = b.length;
    e && (b = xh().getSequenceCount(e));
    b >= a ? O("background_thread_flush_logs_due_to_batch_limit") ? Ue(() => {
        yh({
            writeThenSend: !0
        }, O("flush_only_full_queue") ? c : void 0, d)
    }, 0) : yh({
        writeThenSend: !0
    }, O("flush_only_full_queue") ? c : void 0, d) : 10 <= f - g && (Dh(d), d ? qh.l = f : ph.l = f)
}

function Eh(a, b) {
    O("web_all_payloads_via_jspb") && Le(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));
    if ("log_event" === a.endpoint) {
        var c = Ah(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (U = new b);
        return new G((e, f) => {
            U && Og(U) ? Fh(d, U, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Gh(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ah(a, !0),
            d = new Map;
        d.set(c, [a.payload.toJSON()]);
        b && (U = new b);
        return new G(e => {
            U && Og(U) ? Hh(d, U, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Ah(a, b = !1) {
    var c = "";
    if (a.N) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new qe;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Gb(d, 2, pe, c.playlistId);
            vh[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), uh[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function yh(a = {}, b, c = !1) {
    !c && O("web_all_payloads_via_jspb") && Le(new Q("transport.flushLogs called for JSON in JSPB only experiment"));
    new G((d, e) => {
        c ? (window.clearTimeout(qh.j), window.clearTimeout(qh.i), qh.i = 0) : (window.clearTimeout(ph.j), window.clearTimeout(ph.i), ph.i = 0);
        U && Og(U) ? O("use_new_in_memory_storage") ? Ih(d, e, a, b, c) : Jh(d, e, a, b, c) : (Dh(c), d())
    })
}

function Ih(a, b, c = {}, d, e = !1) {
    var f = U,
        g = new Map;
    const h = new Map;
    if (void 0 !== d) e ? (b = xh().extractMatchingEntries({
        isJspb: e,
        cttAuthInfo: d
    }), g.set(d, b), Hh(g, f, a, c)) : (g = xh().extractMatchingEntries({
        isJspb: e,
        cttAuthInfo: d
    }), h.set(d, g), Fh(h, f, a, b, c));
    else if (e) {
        for (const k of Object.keys(wh)) b = xh().extractMatchingEntries({
            isJspb: !0,
            cttAuthInfo: k
        }), 0 < b.length && g.set(k, b), delete wh[k];
        Hh(g, f, a, c)
    } else {
        for (const k of Object.keys(wh)) d = xh().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: k
        }), 0 < d.length && h.set(k,
            d), delete wh[k];
        Fh(h, f, a, b, c)
    }
}

function Jh(a, b, c = {}, d, e = !1) {
    var f = U;
    if (void 0 !== d)
        if (e) b = new Map, e = th.get(d) || [], b.set(d, e), Hh(b, f, a, c), th.delete(d);
        else {
            e = new Map;
            const g = sh.get(d) || [];
            e.set(d, g);
            Fh(e, f, a, b, c);
            sh.delete(d)
        }
    else e ? (Hh(th, f, a, c), th.clear()) : (Fh(sh, f, a, b, c), sh.clear())
}

function Dh(a = !1) {
    if (O("web_gel_timeout_cap") && (!a && !ph.i || a && !qh.i)) {
        var b = Ue(() => {
            yh({
                writeThenSend: !0
            }, void 0, a)
        }, 6E4);
        a ? qh.i = b : ph.i = b
    }
    window.clearTimeout(a ? qh.j : ph.j);
    b = N("LOGGING_BATCH_TIMEOUT", Ee("web_gel_debounce_ms", 1E4));
    O("shorten_initial_gel_batch_timeout") && rh && (b = mh);
    b = Ue(() => {
        yh({
            writeThenSend: !0
        }, void 0, a)
    }, b);
    a ? qh.j = b : ph.j = b
}

function Fh(a, b, c, d, e = {}, f) {
    const g = Math.round(P());
    let h = a.size;
    for (const [m, p] of a) {
        var k = m,
            l = p;
        a = xa({
            context: af(b.config_ || $e())
        });
        if (!ia(l) && !O("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        a.events = l;
        (l = uh[k]) && Kh(a, k, l);
        delete uh[k];
        k = "visitorOnlyApprovedKey" === k;
        Lh(a, g, k);
        Mh(e);
        l = () => {
            h--;
            h || c()
        };
        const u = () => {
            h--;
            h || c()
        };
        try {
            Pg(b, a, Nh(e, k, l, u, f)), rh = !1
        } catch (n) {
            Ke(n), d()
        }
    }
}

function Hh(a, b, c, d = {}, e) {
    const f = Math.round(P());
    let g = a.size;
    var h = new Map([...a]);
    for (const [m] of h) {
        var k = m,
            l = a.get(k);
        h = new se;
        const p = cf(b.config_ || $e());
        E(h, Kd, 1, p);
        l = l ? Oh(l) : [];
        for (const u of l) Mb(h, 3, L, u);
        (l = vh[k]) && Ph(h, k, l);
        delete vh[k];
        k = "visitorOnlyApprovedKey" === k;
        Qh(h, f, k);
        Mh(d);
        h = Ob(h);
        k = Nh(d, k, () => {
            g--;
            g || c()
        }, () => {
            g--;
            g || c()
        }, e);
        k.headers["Content-Type"] = "application/json+protobuf";
        k.postBodyFormat = "JSPB";
        k.postBody = h;
        Pg(b, "", k);
        rh = !1
    }
}

function Mh(a) {
    O("always_send_and_write") && (a.writeThenSend = !1)
}

function Nh(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        Kb: a,
        N: b,
        Ab: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: ""
    };
    O("use_request_time_ms_header") && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(P())));
    return a
}

function Lh(a, b, c) {
    O("use_request_time_ms_header") || (a.requestTimeMs = String(b));
    O("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = N("EVENT_ID")) && (c = Rh(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Qh(a, b, c) {
    O("use_request_time_ms_header") || D(a, 2, b);
    if (!c && (b = N("EVENT_ID"))) {
        c = Rh();
        const d = new oe;
        D(d, 1, b);
        D(d, 2, c);
        E(a, oe, 5, d)
    }
}

function Rh() {
    let a = N("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * nh / 2));
    a++;
    a > nh && (a = 1);
    M("BATCH_CLIENT_COUNTER", a);
    return a
}

function Kh(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Ph(a, b, c) {
    let d;
    if (C(c, 1 === Hb(c, pe) ? 1 : -1)) d = 1;
    else if (C(c, 2 === Hb(c, pe) ? 2 : -1)) d = 2;
    else return;
    E(a, qe, 4, c);
    a = Ib(a, Kd, 1) || new Kd;
    c = Ib(a, Id, 3) || new Id;
    const e = new Gd;
    e.setToken(b);
    D(e, 1, d);
    Mb(c, 12, Gd, e);
    E(a, Id, 3, c)
}

function Oh(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new L(a[c]))
    } catch (d) {
        Ke(new Q("Transport failed to deserialize " + String(a[c])))
    }
    return b
};
const Sh = t.ytLoggingGelSequenceIdObj_ || {};

function V(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || P());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    O("enable_unknown_lact_fix_on_html5") && eh();
    a = hh();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    O("log_sequence_info_on_gel_web") && d.D && (a = e.context, b = d.D, b = {
        index: Th(b),
        groupKey: b
    }, a.sequence = b, d.oa && delete Sh[d.D]);
    (d.Ma ? Eh : zh)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        N: d.N
    }, c)
}

function Uh(a = !1) {
    yh(void 0, void 0, a)
}

function Th(a) {
    Sh[a] = a in Sh ? Sh[a] + 1 : 0;
    return Sh[a]
};
let Vh = Qg;

function Wh(a, b, c = {}) {
    let d = Vh;
    N("ytLoggingEventsDefaultDisabled", !1) && Vh === Qg && (d = null);
    O("web_all_payloads_via_jspb") && Le(new Q("Logs should be translated to JSPB but are sent as JSON instead", a));
    V(a, b, d, c)
};
const Xh = t.ytLoggingGelSequenceIdObj_ || {};

function Yh(a, b, c = {}) {
    var d = Math.round(c.timestamp || P());
    D(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
    var e = hh();
    d = new le;
    D(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
    if (O("log_sequence_info_on_gel_web") && c.D) {
        e = c.D;
        const f = Th(e),
            g = new ke;
        D(g, 2, f);
        D(g, 1, e);
        E(d, ke, 3, g);
        c.oa && delete Xh[c.D]
    }
    E(a, le, 33, d);
    (c.Ma ? Gh : Ch)({
        endpoint: "log_event",
        payload: a,
        cttAuthInfo: c.cttAuthInfo,
        N: c.N
    }, b)
};

function Zh(a, b = {}) {
    let c = !1;
    N("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
    Yh(a, c ? null : Qg, b)
};

function $h(a, b, c) {
    const d = new L;
    Lb(d, ie, 72, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function ai(a, b, c) {
    const d = new L;
    Lb(d, he, 73, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function bi(a, b, c) {
    const d = new L;
    Lb(d, ge, 78, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function ci(a, b, c) {
    const d = new L;
    Lb(d, je, 208, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function di(a, b, c) {
    const d = new L;
    Lb(d, ae, 156, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function ei(a, b, c) {
    const d = new L;
    Lb(d, fe, 215, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
}

function fi(a, b, c) {
    const d = new L;
    Lb(d, Xd, 111, me, a);
    c ? Yh(d, c, b) : Zh(d, b)
};
let gi = Qg;

function W(a, b, c = {}) {
    if (O("migrate_events_to_ts")) Wh(a, b, c);
    else {
        var d = gi;
        N("ytLoggingEventsDefaultDisabled", !1) && gi == Qg && (d = null);
        V(a, b, d, c)
    }
};
const hi = [{
    fa: a => `Cannot read property '${a.key}'`,
    W: {
        Error: [{
            B: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            B: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            B: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            B: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            B: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            B: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            B: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    fa: a => `Cannot call '${a.key}'`,
    W: {
        TypeError: [{
            B: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            B: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            B: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            B: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            B: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            B: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    fa: a => `${a.key} is not defined`,
    W: {
        ReferenceError: [{
            B: /(.*) is not defined/,
            groups: ["key"]
        }, {
            B: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var ji = {
    H: [],
    G: [{
        callback: ii,
        weight: 500
    }]
};

function ii(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function ki() {
    if (!li) {
        var a = li = new mi;
        a.H.length = 0;
        a.G.length = 0;
        ni(a, ji)
    }
    return li
}

function ni(a, b) {
    b.H && a.H.push.apply(a.H, b.H);
    b.G && a.G.push.apply(a.G, b.G)
}
var mi = class {
        constructor() {
            this.G = [];
            this.H = []
        }
    },
    li;
const oi = new H;

function pi(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = qi(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = qi(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = qi(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function qi(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function ri(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += si(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = pi(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? si(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += si(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = ti(a), d += c[b].length;
    else c[b] = ti(a), d += c[b].length;
    return d
}

function si(a, b, c, d) {
    c += `.${a}`;
    a = ti(b);
    d[c] = a;
    return c.length + a.length
}

function ti(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};
var ui = new Set,
    vi = 0,
    wi = 0,
    xi = 0,
    yi = [];
const zi = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Ai(a) {
    Bi(a)
}

function Ci(a) {
    Bi(a, "WARNING")
}

function Bi(a, b = "ERROR") {
    var c = {};
    c.name = N("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = N("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Di(a, c || {}, b)
}

function Di(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (O("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= vi)) {
            d = yi;
            var e = Ac(a);
            const I = e.message || "Unknown Error",
                Ra = e.name || "UnknownError";
            var f = e.stack || a.j || "Not available";
            if (f.startsWith(`${Ra}: ${I}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let K = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(K = ri(a.args[h], `params.${h}`, b, K), 500 <= K); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const da = a.params;
                if ("object" === typeof a.params)
                    for (h in da) {
                        if (!da[h]) continue;
                        const Ug = `params.${h}`,
                            Vg = ti(da[h]);
                        b[Ug] =
                            Vg;
                        K += Ug.length + Vg.length;
                        if (500 < K) break
                    } else b.params = ti(da)
            }
            if (d.length)
                for (h = 0; h < d.length && !(K = ri(d[h], `params.context.${h}`, b, K), 500 <= K); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: I,
                name: Ra,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = ki();d = b;
                for (k of a.H)
                    if (d.message && d.message.match(k.Ja)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.G)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of hi)
                if (m.W[k.name]) {
                    l = m.W[k.name];
                    for (var p of l)
                        if (l = k.message.match(p.B)) {
                            k.params["params.error.original"] = l[0];
                            a = p.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.fa(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = ki();
            k.params["params.errorServiceSignature"] = `msg=${m.H.length}&cb=${m.G.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Ba("sample").constructor !== Aa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !ui.has(k.message)) {
                "ERROR" === c ? (oi.ga("handleError", k), O("record_app_crashed_web") && 0 === xi && 1 === k.sampleWeight && (xi++, O("errors_via_jspb") ? (m = new Wd, D(m, 1, 1), O("report_client_error_with_app_crash_ks") || (l = new Rd, D(l, 1, k.message), p = new Sd, E(p, Rd, 3, l), l = new Td, E(l, Sd, 5, p), p = new Vd, E(p,
                    Td, 9, l), E(m, Vd, 4, p)), p = new L, Lb(p, Wd, 20, me, m), Zh(p)) : (m = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, O("report_client_error_with_app_crash_ks") || (m.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: k.message
                            }
                        }
                    }
                }), W("appCrashed", m))), wi++) : "WARNING" === c && oi.ga("handleWarning", k);
                a: {
                    if (O("errors_via_jspb")) {
                        if (Ei()) var u = void 0;
                        else {
                            m = new Od;
                            D(m, 1, k.stack);
                            k.fileName && D(m, 4, k.fileName);
                            var n = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== n.length && (1 !== n.length || isNaN(Number(n[0])) ?
                                2 !== n.length || isNaN(Number(n[0])) || isNaN(Number(n[1])) || (D(m, 2, Number(n[0])), D(m, 3, Number(n[1]))) : D(m, 2, Number(n[0])));
                            n = new Rd;
                            D(n, 1, k.message);
                            D(n, 3, k.name);
                            D(n, 6, k.sampleWeight);
                            "ERROR" === c ? D(n, 2, 2) : "WARNING" === c ? D(n, 2, 1) : D(n, 2, 0);
                            var y = new Pd;
                            D(y, 1, !0);
                            Lb(y, Od, 3, Qd, m);
                            m = new Md;
                            D(m, 3, window.location.href);
                            p = N("FEXP_EXPERIMENTS", []);
                            for (b = 0; b < p.length; b++) l = m, a = p[b], rb(l), Eb(l, 5, 2, !1).push(a);
                            p = Be();
                            if (!Ce() && p)
                                for (var z of Object.keys(p)) l = new Nd, D(l, 1, z), l.setValue(String(p[z])), Mb(m, 4, Nd, l);
                            if (z = k.params)
                                for (u of Object.keys(z)) p = new Nd, D(p, 1, `client.${u}`), p.setValue(String(z[u])), Mb(m, 4, Nd, p);
                            z = N("SERVER_NAME");
                            u = N("SERVER_VERSION");
                            z && u && (p = new Nd, D(p, 1, "server.name"), p.setValue(z), Mb(m, 4, Nd, p), z = new Nd, D(z, 1, "server.version"), z.setValue(u), Mb(m, 4, Nd, z));
                            u = new Sd;
                            E(u, Md, 1, m);
                            E(u, Pd, 2, y);
                            E(u, Rd, 3, n)
                        }
                        if (!u) break a;
                        z = new L;
                        Lb(z, Sd, 163, me, u);
                        Zh(z)
                    } else {
                        if (Ei()) u = void 0;
                        else {
                            z = {
                                stackTrace: k.stack
                            };
                            k.fileName && (z.filename = k.fileName);
                            u = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                            0 !== u.length && (1 !== u.length || isNaN(Number(u[0])) ? 2 !== u.length || isNaN(Number(u[0])) || isNaN(Number(u[1])) || (z.lineNumber = Number(u[0]), z.columnNumber = Number(u[1])) : z.lineNumber = Number(u[0]));
                            u = {
                                level: "ERROR_LEVEL_UNKNOWN",
                                message: k.message,
                                errorClassName: k.name,
                                sampleWeight: k.sampleWeight
                            };
                            "ERROR" === c ? u.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (u.level = "ERROR_LEVEL_WARNNING");
                            z = {
                                isObfuscated: !0,
                                browserStackInfo: z
                            };
                            m = {
                                pageUrl: window.location.href,
                                kvPairs: []
                            };
                            N("FEXP_EXPERIMENTS") && (m.experimentIds =
                                N("FEXP_EXPERIMENTS"));
                            p = Be();
                            if (!Ce() && p)
                                for (y of Object.keys(p)) m.kvPairs.push({
                                    key: y,
                                    value: String(p[y])
                                });
                            if (y = k.params)
                                for (n of Object.keys(y)) m.kvPairs.push({
                                    key: `client.${n}`,
                                    value: String(y[n])
                                });
                            n = N("SERVER_NAME");
                            y = N("SERVER_VERSION");
                            n && y && (m.kvPairs.push({
                                key: "server.name",
                                value: n
                            }), m.kvPairs.push({
                                key: "server.version",
                                value: y
                            }));
                            u = {
                                errorMetadata: m,
                                stackTrace: z,
                                logMessage: u
                            }
                        }
                        if (!u) break a;
                        W("clientError", u)
                    }
                    if ("ERROR" === c || O("errors_flush_gel_always_killswitch")) b: if (O("migrate_events_to_ts")) c: {
                        if (O("web_fp_via_jspb") &&
                            (Uh(!0), !O("web_fp_via_jspb_and_json"))) break c;Uh()
                    }
                    else {
                        if (O("web_fp_via_jspb") && (Uh(!0), !O("web_fp_via_jspb_and_json"))) break b;
                        Uh()
                    }
                }
                try {
                    ui.add(k.message)
                } catch (da) {}
                vi++
            }
        }
    }
}

function Ei() {
    for (const a of zi) {
        const b = Ea();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
};
let Fi = 1;

function Gi(a) {
    return new Hi({
        trackingParams: a
    })
}

function Ii(a) {
    const b = Fi++;
    return new Hi({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}
var Hi = class {
    constructor(a) {
        this.i = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.i.trackingParams ? a.trackingParams = this.i.trackingParams : (a.veType = this.i.veType, void 0 !== this.i.veCounter && (a.veCounter = this.i.veCounter), void 0 !== this.i.elementIndex && (a.elementIndex = this.i.elementIndex));
        void 0 !== this.i.dataElement && (a.dataElement = this.i.dataElement.getAsJson());
        void 0 !== this.i.youtubeData && (a.youtubeData = this.i.youtubeData);
        return a
    }
    getAsJspb() {
        const a = new J;
        if (void 0 !== this.i.trackingParams) {
            var b = this.i.trackingParams;
            null != b && b instanceof db && bb($a);
            D(a, 1, b)
        } else void 0 !== this.i.veType && D(a, 2, this.i.veType), void 0 !== this.i.veCounter && D(a, 6, this.i.veCounter), void 0 !== this.i.elementIndex && D(a, 3, this.i.elementIndex);
        void 0 !== this.i.dataElement && (b = this.i.dataElement.getAsJspb(), E(a, J, 7, b));
        void 0 !== this.i.youtubeData && E(a, yd, 8, this.i.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.i.trackingParams && !!this.i.veType
    }
};
let Ji = Date.now().toString();
let Ki = t.ytLoggingDocDocumentNonce_;
if (!Ki) {
    var Li;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            Li = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (Ji) {
            let d = 1;
            for (let e = 0; e < Ji.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ Ji.charCodeAt(e), d++
        }
        Li = c
    }
    const a = Li,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    Ki = b.join("")
}
var Mi = Ki;
let Ni = Qg;
var Oi = {
    Xa: 0,
    Va: 1,
    Wa: 2,
    qb: 3,
    Ya: 4,
    vb: 5,
    rb: 6,
    ub: 7,
    sb: 8,
    tb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};

function Pi(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function Qi(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Ri(a = 0) {
    return N(Qi(a))
}

function Si(a = 0) {
    return (a = Ri(a)) ? new Hi({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Ti() {
    let a = N("csn-to-ctt-auth-info");
    a || (a = {}, M("csn-to-ctt-auth-info", a));
    return a
}

function X(a = 0) {
    a = N(Pi(a));
    if (!a && !N("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Ui(a, b, c) {
    const d = Ti();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function Vi(a) {
    return Ti()[a]
}

function Wi(a, b, c = 0, d) {
    if (a !== N(Pi(c)) || b !== N(Qi(c)))
        if (Ui(a, d, c), M(Pi(c), a), M(Qi(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (O("web_time_via_jspb")) {
                            var e = new Xd;
                            D(e, 1, Mi);
                            D(e, 2, a);
                            O("use_default_heartbeat_client") ? fi(e) : fi(e, void 0, Ni)
                        } else e = {
                            clientDocumentNonce: Mi,
                            clientScreenNonce: a
                        }, O("use_default_heartbeat_client") ? W("foregroundHeartbeatScreenAssociated", e) : V("foregroundHeartbeatScreenAssociated", e, Ni)
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};
class vg extends tg {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Bg = new ug,
    Xi = [];
let Zi = Yi,
    $i = 0;

function aj(a, b, c, d, e, f, g) {
    const h = Zi();
    f = new Hi({
        veType: b,
        youtubeData: f,
        jspbYoutubeData: void 0
    });
    e = {
        cttAuthInfo: e,
        D: h
    };
    const k = () => {
        Ci(new Q("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (O("il_via_jspb")) {
        const l = new ae;
        l.C(h);
        $d(l, f.getAsJspb());
        c && c.visualElement ? (f = new ce, c.clientScreenNonce && D(f, 2, c.clientScreenNonce), be(f, c.visualElement.getAsJspb()), g && D(f, 4, ne[g]), E(l, ce, 5, f)) : c && k();
        d && D(l, 3, d);
        di(l, e, a)
    } else f = {
        csn: h,
        pageVe: f.getAsJson()
    }, c && c.visualElement ? (f.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (f.implicitGesture.gestureType = g)) : c && k(), d && (f.cloneCsn = d), a ? V("screenCreated", f, a, e) : W("screenCreated", f, e);
    Ag(new vg(h));
    return h
}

function bj(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: Vi(b),
            D: b
        };
    for (const g of d) d = g.getAsJson(), (wa(d) || !d.trackingParams && !d.veType) && Ci(Error("Child VE logged with no data"));
    if (O("il_via_jspb")) {
        const g = new fe;
        g.C(b);
        de(g, c.getAsJspb());
        ra(e, h => {
            h = h.getAsJspb();
            Mb(g, 3, J, h)
        });
        "UNDEFINED_CSN" == b ? Y("visualElementAttached", g, f) : ei(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: ra(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" == b ? Y("visualElementAttached", c, f) : a ? V("visualElementAttached", c, a, f) : W("visualElementAttached", c, f)
}

function cj(a, b, c, d, e) {
    const f = {
        cttAuthInfo: Vi(b),
        D: b
    };
    if (O("il_via_jspb")) {
        const g = new ie;
        g.C(b);
        c = c.getAsJspb();
        E(g, J, 2, c);
        D(g, 4, 1);
        d && E(g, Zd, 3, e);
        "UNDEFINED_CSN" == b ? Y("visualElementShown", g, f) : $h(g, f, a)
    } else e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementShown", e, f) : a ? V("visualElementShown", e, a, f) : W("visualElementShown", e, f)
}

function dj(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: Vi(b),
        D: b,
        oa: d
    };
    O("il_via_jspb") ? (e = new he, e.C(b), c = c.getAsJspb(), E(e, J, 2, c), D(e, 4, d ? 16 : 8), "UNDEFINED_CSN" == b ? Y("visualElementHidden", e, f) : ai(e, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" == b ? Y("visualElementHidden", d, f) : a ? V("visualElementHidden", d, a, f) : W("visualElementHidden", d, f))
}

function ej(a, b, c, d) {
    const e = {
        cttAuthInfo: Vi(b),
        D: b
    };
    if (O("il_via_jspb")) {
        var f = new ge;
        f.C(b);
        c = c.getAsJspb();
        E(f, J, 2, c);
        D(f, 4, ne.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);
        d && E(f, Zd, 3);
        "UNDEFINED_CSN" == b ? Y("visualElementGestured", f, e) : bi(f, e, a)
    } else f = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (f.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementGestured", f, e) : a ? V("visualElementGestured", f, a, e) : W("visualElementGestured", f, e)
}

function Yi() {
    for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return Ta(b, 3)
}

function Y(a, b, c) {
    Xi.push({
        payloadName: a,
        payload: b,
        options: c
    });
    $i || ($i = Eg())
}

function Fg(a) {
    if (Xi) {
        for (let b of Xi)
            if (b.payload)
                if (O("il_via_jspb")) switch (b.payload.C(a.csn), b.payloadName) {
                    case "screenCreated":
                        di(b.payload, b.options);
                        break;
                    case "visualElementAttached":
                        ei(b.payload, b.options);
                        break;
                    case "visualElementShown":
                        $h(b.payload, b.options);
                        break;
                    case "visualElementHidden":
                        ai(b.payload, b.options);
                        break;
                    case "visualElementGestured":
                        bi(b.payload, b.options);
                        break;
                    case "visualElementStateChanged":
                        ci(b.payload, b.options);
                        break;
                    default:
                        Ci(new Q("flushQueue unable to map payloadName to JSPB setter"))
                } else b.payload.csn =
                    a.csn, V(b.payloadName, b.payload, null, b.options);
        Xi.length = 0
    }
    $i = 0
};

function fj(a, b) {
    return b.data && b.data.loggingDirectives ? b.data.loggingDirectives.trackingParams || "" : b.i && b.i.trackingParams ? b.i.trackingParams : b.data && b.data.trackingParams || ""
}

function gj(a) {
    return parseInt(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "", 10) || 1
}

function hj(a, b) {
    var c = fj(0, b),
        d = b.visualElement ? b.visualElement : c,
        e = a.m.has(d);
    const f = a.j.get(d);
    a.m.add(d);
    a.j.set(d, !0);
    b.j && !e && b.j();
    if (c || b.visualElement)
        if (d = X(8)) {
            var g = !(!b.data || !b.data.loggingDirectives);
            if (gj(b) || g) {
                var h = b.visualElement ? b.visualElement : Gi(c);
                c = b.l;
                var k = b.m;
                g || e ? gj(b) & 4 ? f || (a = a.i, b = {
                    cttAuthInfo: Vi(d),
                    D: d
                }, O("il_via_jspb") ? (e = new ie, e.C(d), h = h.getAsJspb(), E(e, J, 2, h), D(e, 4, 4), c && E(e, Zd, 3, k), "UNDEFINED_CSN" == d ? Y("visualElementShown", e, b) : $h(e, b, a)) : (k = {
                    csn: d,
                    ve: h.getAsJson(),
                    eventType: 4
                }, c && (k.clientData = c), "UNDEFINED_CSN" == d ? Y("visualElementShown", k, b) : a ? V("visualElementShown", k, a, b) : W("visualElementShown", k, b))) : gj(b) & 1 && !e && cj(a.i, d, h, c, k) : cj(a.i, d, h, c)
            }
        }
}

function ij(a, b) {
    var c = fj(0, b),
        d = b.visualElement ? b.visualElement : c,
        e = a.l.has(d);
    const f = a.j.get(d);
    a.l.add(d);
    a.j.set(d, !1);
    !1 !== f && (c || b.visualElement) && (!(d = X(8)) || !gj(b) && b.data && b.data.loggingDirectives || (c = b.visualElement ? b.visualElement : Gi(c), gj(b) & 8 ? dj(a.i, d, c) : gj(b) & 2 && !e && (a = a.i, b = {
        cttAuthInfo: Vi(d),
        D: d
    }, O("il_via_jspb") ? (e = new he, e.C(d), c = c.getAsJspb(), E(e, J, 2, c), D(e, 4, 2), "UNDEFINED_CSN" == d ? Y("visualElementHidden", e, b) : ai(e, b, a)) : (e = {
            csn: d,
            ve: c.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" ==
        d ? Y("visualElementHidden", e, b) : a ? V("visualElementHidden", e, a, b) : W("visualElementHidden", e, b)))))
}
class jj {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.j = new Map;
        this.o = null;
        this.i = Qg
    }
    u(a) {
        this.i = a
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.j.clear();
        this.o = null
    }
}(function() {
    var a = jj;
    a.ea = void 0;
    a.A = function() {
        return a.ea ? a.ea : a.ea = new a
    }
})();
var kj = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var lj = ["notifications_register", "notifications_check_registration"];
let mj = null;

function Z(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return nj().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function oj() {
    return Z("IndexedDBCheck", "testing IndexedDB").then(() => pj("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function pj(a) {
    const b = new Q("Error accessing DB");
    return nj().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function nj() {
    return mj ? Promise.resolve(mj) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) mj = d, a(mj);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), nj()
        };
        c.onupgradeneeded = qj
    })
}

function qj(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const rj = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function sj(a) {
    if (1 === a.length) return a[0];
    var b = rj.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(rj).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function tj(a) {
    return `/youtubei/v1/${sj(a)}`
};

function uj(a) {
    if (a) return a[te.name]
};
var vj = class extends F {
    constructor(a) {
        super(a)
    }
};
var wj = class extends F {
    constructor(a) {
        super(a)
    }
};
wj.i = "yt.sw.adr";

function xj(a) {
    return r(function*() {
        var b = yield t.fetch(a.j);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new wj).constructor.i) {
                    b = new wj(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function yj(a = !1) {
    const b = zj.i;
    return r(function*() {
        if (a || !b.i) b.i = xj(b).then(b.l).catch(c => {
            delete b.i;
            Bi(c)
        });
        return b.i
    })
}
var zj = class {
    constructor() {
        this.j = Aj("/sw.js_data")
    }
    l(a) {
        const b = Ib(a, vj, 2);
        if (b) {
            const c = C(b, 5);
            c && (t.__SAPISID = c);
            null != C(b, 10) ? M("EOM_VISITOR_DATA", C(b, 10)) : null != C(b, 7) && M("VISITOR_DATA", C(b, 7));
            null != C(b, 4) && M("SESSION_INDEX", String(C(b, 4)));
            null != C(b, 8) && M("DELEGATED_SESSION_ID", C(b, 8))
        }
        return a
    }
};

function Bj(a) {
    return r(function*() {
        yield Cj();
        Ci(a)
    })
}

function Dj(a) {
    return r(function*() {
        yield Cj();
        Bi(a)
    })
}

function Ej(a) {
    r(function*() {
        var b = yield mg();
        b ? yield Mg(a, b): (yield yj(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && W(b.payloadName, b.payload))
    })
}

function Cj() {
    return r(function*() {
        try {
            yield yj()
        } catch (a) {}
    })
};
const Fj = window;
class Gj {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Hj = Fj.performance || Fj.mozPerformance || Fj.msPerformance || Fj.webkitPerformance || new Gj;
ma(Hj.clearResourceTimings || Hj.webkitClearResourceTimings || Hj.mozClearResourceTimings || Hj.msClearResourceTimings || Hj.oClearResourceTimings || pa, Hj);
v("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});

function Ij() {
    Jj.i || (Jj.i = new Jj);
    return Jj.i
}

function Kj(a, b, c = {}) {
    a.j.add(c.layer || 0);
    a.l = () => {
        Lj(a, b, c);
        var d = Si(c.layer);
        if (d) {
            for (var e of a.o) Mj(a, e[0], e[1] || d, c.layer);
            for (const k of a.I) {
                e = X(0);
                var f = k[0] || Si(0);
                if (e && f) {
                    d = a.client;
                    var g = f,
                        h = k[1];
                    f = {
                        cttAuthInfo: Vi(e),
                        D: e
                    };
                    O("il_via_jspb") ? (h = new je, h.C(e), g = g.getAsJspb(), E(h, J, 2, g), "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", h, f) : ci(h, f, d)) : (g = {
                        csn: e,
                        ve: g.getAsJson(),
                        clientData: h
                    }, "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", g, f) : d ? V("visualElementStateChanged", g, d, f) : W("visualElementStateChanged",
                        g, f))
                }
            }
        }
    };
    X(c.layer) || a.l();
    if (c.na)
        for (const d of c.na) Nj(a, d, c.layer);
    else Bi(Error("Delayed screen needs a data promise."))
}

function Lj(a, b, c = {}) {
    c.layer || (c.layer = 0);
    var d = void 0 !== c.Ka ? c.Ka : c.layer;
    var e = X(d);
    d = Si(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = N("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    let k;
    try {
        k = aj(a.client, b, f, c.ma, c.cttAuthInfo, g, c.Fb)
    } catch (l) {
        a = l;
        c = [{
            Ub: b,
            rootVe: d,
            parentVisualElement: void 0,
            Db: e,
            Ob: f,
            ma: c.ma
        }];
        a.args || (a.args = []);
        a.args.push(...c);
        Bi(l);
        return
    }
    Wi(k, b, c.layer, c.cttAuthInfo);
    if (b = e && "UNDEFINED_CSN" !== e && d) {
        a: {
            for (const l of Object.values(Oi))
                if (X(l) === e) {
                    b = !0;
                    break a
                }
            b = !1
        }
        b = !b
    }
    b && dj(a.client, e, d, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = k || "");
    d = jj.A();
    d.clear();
    d.o = X();
    d = Si(c.layer);
    e && "UNDEFINED_CSN" !== e && d && (O("web_mark_root_visible") || O("music_web_mark_root_visible")) && cj(void 0, k, d);
    a.j.delete(c.layer || 0);
    a.l = void 0;
    for (const [l, m] of a.Z) e = l, m.has(c.layer) && d && Mj(a, e, d, c.layer);
    for (c = 0; c < a.m.length; c++) {
        e =
            a.m[c];
        try {
            e()
        } catch (l) {
            Bi(l)
        }
    }
    a.m.length = 0;
    for (c = 0; c < a.v.length; c++) {
        e = a.v[c];
        try {
            e()
        } catch (l) {
            Bi(l)
        }
    }
}

function Oj(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    [28631].includes(b) || (Ci(new Q("createClientScreen() called with a non-page VE", b)), b = 83769);
    c.isHistoryNavigation || a.i.push({
        rootVe: b,
        key: c.key || ""
    });
    a.o = [];
    a.I = [];
    c.na ? Kj(a, b, c) : Lj(a, b, c)
}

function Nj(a, b, c = 0) {
    b.then(d => {
        a.j.has(c) && a.l && a.l();
        const e = X(c),
            f = Si(c);
        if (e && f) {
            var g;
            (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && bj(a.client, e, f, [Gi(d.response.trackingParams)]);
            var h;
            (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && bj(a.client, e, f, [Gi(d.playerResponse.trackingParams)])
        }
    })
}

function Mj(a, b, c, d = 0) {
    if (a.j.has(d)) a.o.push([b, c]);
    else {
        var e = X(d);
        c = c || Si(d);
        e && c && bj(a.client, e, c, [b])
    }
}

function Pj(a, b, c = 0) {
    (c = X(c)) && ej(a.client, c, b)
}

function Qj(a, b, c, d = 0) {
    if (!b) return !1;
    d = X(d);
    if (!d) return !1;
    ej(a.client, d, Gi(b), c);
    return !0
}

function Rj(a, b) {
    const c = b.Da && b.Da();
    b.visualElement ? Pj(a, b.visualElement, c) : (b = fj(jj.A(), b), Qj(a, b, void 0, c))
}
var Jj = class {
    constructor() {
        this.o = [];
        this.I = [];
        this.i = [];
        this.m = [];
        this.v = [];
        this.j = new Set;
        this.Z = new Map
    }
    u(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Qj(this, a.clickTrackingParams, b, c)
    }
};

function Sj(a) {
    const b = {};
    var c = Rc();
    c && (b.Authorization = c, c = a = null == a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(N("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), O("voice_search_auth_header_removal") || (b["X-Goog-AuthUser"] = c), "INNERTUBE_HOST_OVERRIDE" in Ae || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in Ae && (b["X-Goog-PageId"] = N("DELEGATED_SESSION_ID")));
    return b
}
var Tj = class {
    constructor() {
        this.Oa = !0
    }
};
var Uj = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function Vj(a, b) {
    b.encryptedTokenJarContents && (a.i[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.i[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var Wj = class {
    constructor() {
        this.i = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.K.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.i[f.encryptedTokenJarContents];
            Vj(this, a)
        }
    }
};

function Xj() {
    var a = N("INNERTUBE_CONTEXT");
    if (!a) return Bi(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = xa(a);
    O("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Fe();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Wj.i || (Wj.i = new Wj);
    b = Wj.i.i;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};
var Yj = Symbol("injectionDeps");

function Zj(a) {
    var b = {
        La: ak,
        sa: bk.i
    };
    a.providers.set(b.La, b)
}

function ck(a, b, c) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.i.has(b)) return a.i.get(b);
    if (!a.providers.has(b)) throw Error(`No provider for: ${b}`);
    const d = a.providers.get(b);
    c.push(b);
    if (d.sa) var e = d.sa;
    else if (d.Ua) e = d[Yj] ? dk(a, d[Yj], c) : [], e = d.Ua(...e);
    else if (d.Ta) {
        e = d.Ta;
        const f = e[Yj] ? dk(a, e[Yj], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.Yb || a.i.set(b, e);
    return e
}

function dk(a, b, c) {
    return b ? b.map(d => ck(a, d, c)) : []
}
var ek = class {
    constructor() {
        this.providers = new Map;
        this.i = new Map
    }
    resolve(a) {
        return ck(this, a, [])
    }
};
let fk;

function gk(a) {
    var b = a;
    if (a = N("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ga);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var hk = class {};
const ik = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends hk {})
};
const jk = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function kk(a) {
    var b = {
        Cb: {}
    };
    Tj.i || (Tj.i = new Tj);
    var c = Tj.i;
    if (void 0 !== bk.i) {
        const d = bk.i;
        a = [b !== d.o, a !== d.m, c !== d.l, !1, !1, void 0 !== d.j];
        if (a.some(e => e)) throw new Q("InnerTubeTransportService is already initialized", a);
    } else bk.i = new bk(b, a, c)
}

function lk(a, b) {
    return r(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.la) ? void 0 : c.sessionIndex
        };
        c = yield kd(Sj(d));
        return Promise.resolve(Object.assign({}, mk(b), c))
    })
}

function nk(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.K) ? 0 : d.context)
            for (const m of []) m.Qb(b.K.context);
        var e;
        if (null == (e = a.j) ? 0 : e.Xb(b.input, b.K)) return yield a.j.Hb(b.input, b.K);
        var f;
        if ((d = null == (f = b.config) ? void 0 : f.Tb) && a.i.has(d) && O("web_memoize_inflight_requests")) var g = a.i.get(d);
        else {
            f = JSON.stringify(b.K);
            let m;
            e = null != (m = null == (g = b.P) ? void 0 : g.headers) ? m : {};
            b.P = Object.assign({}, b.P, {
                headers: Object.assign({}, e, c)
            });
            g = Object.assign({}, b.P);
            "POST" === b.P.method && (g = Object.assign({},
                g, {
                    body: f
                }));
            g = a.m.fetch(b.input, g, b.config);
            d && a.i.set(d, g)
        }
        g = yield g;
        var h;
        let k;
        if (O("web_one_platform_error_handling") && (null == (h = g) ? 0 : null == (k = h.error) ? 0 : k.details)) {
            h = g.error.details;
            for (const m of h)(h = m["@type"]) && -1 < jk.indexOf(h) && (delete m["@type"], g = m)
        }
        d && a.i.has(d) && a.i.delete(d);
        let l;
        !g && (null == (l = a.j) ? 0 : l.Bb(b.input, b.K)) && (g = yield a.j.Gb(b.input, b.K));
        return g
    })
}

function ok(a, b, c) {
    var d = {
        la: {
            identity: Uj
        }
    };
    b.context || (b.context = Xj());
    return new G(e => r(function*() {
        var f = gk(c);
        f = Te(f) ? "same-origin" : "cors";
        if (a.l.Oa) {
            var g, h = null == d ? void 0 : null == (g = d.la) ? void 0 : g.sessionIndex;
            g = Sj({
                sessionIndex: h
            });
            f = Object.assign({}, mk(f), g)
        } else f = yield lk(d, f);
        g = gk(c);
        h = {};
        N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = N("INNERTUBE_API_KEY"));
        O("json_condensed_response") && (h.prettyPrint = "false");
        g = Se(g, h || {}, !1);
        h = {
            method: "POST",
            mode: Te(g) ? "same-origin" : "cors",
            credentials: Te(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e(nk(a, {
            input: g,
            P: h,
            K: b,
            config: d
        }, f))
    }))
}

function mk(a) {
    const b = {
        "Content-Type": "application/json"
    };
    N("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = N("EOM_VISITOR_DATA") : N("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = N("VISITOR_DATA"));
    O("track_webfe_innertube_auth_mismatch") && (b["X-Youtube-Bootstrap-Logged-In"] = N("LOGGED_IN", !1));
    "cors" !== a && ((a = N("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = N("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = N("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] =
        a), (a = N("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var bk = class {
    constructor(a, b, c) {
        this.o = a;
        this.m = b;
        this.l = c;
        this.j = void 0;
        this.i = new Map;
        a.ia || (a.ia = {});
        a.ia = Object.assign({}, ik, a.ia)
    }
};
var ak = new class {
    constructor(a) {
        this.name = a
    }
    toString() {
        return `InjectionToken(${this.name})`
    }
}("INNERTUBE_TRANSPORT_TOKEN");
let pk;

function qk() {
    if (!pk) {
        fk || (fk = new ek);
        var a = fk;
        kk({
            fetch: (b, c) => kd(fetch(new Request(b, c)))
        });
        Zj(a);
        pk = a.resolve(ak)
    }
    return pk
};
const rk = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    sk = RegExp("^(?:[a-z]+:)?//", "i");

function tk(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Z("IDToken", b), uk()) : "notifications_check_registration" === a && vk(b)
}

function wk() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function xk(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function yk(a) {
    return r(function*() {
        const b = xk(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = tj(ue);
        return zk().then(e => ok(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Ak(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                Dj(g);
                Promise.reject(g)
            })
        }))
    })
}

function Bk(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = sk.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Ak(a, b) {
    a.deviceId && Z("DeviceId", a.deviceId);
    a.timestampSec && Z("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Ij();
    Oj(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Bk(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Ck(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = Gi(g.data.clickTrackingParams), Mj(d, h, void 0, 8), h = {
            Y: 8,
            visualElement: h
        }, hj(jj.A(), h);
        Dk(a.displayCap)
    }).catch(() => {})
}

function Ck(a) {
    if (!uj(a)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: uj(a).serializedInteractionsRequest
        },
        c = tj(ve);
    return zk().then(d => ok(d, b, c))
}

function Dk(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = Gi(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        Y: 8,
                        visualElement: c
                    },
                    h = Ii(82046),
                    k = Ij();
                Mj(k, h, c, 8);
                c = {
                    Y: 8,
                    visualElement: h
                };
                hj(jj.A(), c);
                Rj(k, c);
                ij(jj.A(), g)
            }
        }
    })
}

function vk(a) {
    const b = [Ek(a), pj("RegistrationTimestamp").then(Fk), Gk(), Hk(), Ik()];
    Promise.all(b).catch(() => {
        Z("IDToken", a);
        uk();
        return Promise.resolve()
    })
}

function Fk(a) {
    a = a || 0;
    return 9E7 >= Date.now() - a ? Promise.resolve() : Promise.reject()
}

function Ek(a) {
    return pj("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Gk() {
    return pj("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Hk() {
    return pj("Endpoint").then(a => Jk().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Ik() {
    return pj("application_server_key").then(a => Kk().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Lk() {
    var a = Notification.permission;
    if (rk[a]) return rk[a]
}

function uk() {
    Z("RegistrationTimestamp", 0);
    Promise.all([Jk(), Mk(), Nk(), Kk()]).then(([a, b, c, d]) => {
        b = b ? kj(b) : null;
        c = c ? kj(c) : null;
        d = d ? Ta(new Uint8Array(d), 4) : null;
        Ok(a, b, c, d)
    }).catch(() => {
        Ok()
    })
}

function Ok(a = null, b = null, c = null, d = null) {
    oj().then(e => {
        e && (Z("Endpoint", a), Z("P256dhKey", b), Z("AuthKey", c), Z("application_server_key", d), Z("Permission", Notification.permission), Promise.all([pj("DeviceId"), pj("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || xd.length;
                for (k = 0; 256 > k; k++) f[k] = xd[0 | Math.random() * h];
                h = f.join("")
            }
            Pk(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function Pk(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Lk()
                    }
                }
            },
            h = tj(we);
        return zk().then(k => ok(k, g, h).then(() => {
            Z("DeviceId", a);
            Z("RegistrationTimestamp", Date.now());
            Z("TimestampLowerBound", Date.now())
        }, l => {
            Bj(l)
        }))
    })
}

function Jk() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Mk() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Nk() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Kk() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function zk() {
    return r(function*() {
        try {
            return yield yj(!0), qk()
        } catch (a) {
            return yield Bj(a), Promise.reject(a)
        }
    })
};
let Qk = self.location.origin + "/";

function Aj(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Tc.registration.scope : Qk;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Rk = void 0;

function Sk(a) {
    return r(function*() {
        Rk || (Rk = yield a.open("yt-appshell-assets"));
        return Rk
    })
}

function Tk(a, b) {
    return r(function*() {
        const c = yield Sk(a), d = b.map(e => Uk(c, e));
        return Promise.all(d)
    })
}

function Vk(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Wk(a, b) {
    return r(function*() {
        const c = yield Sk(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Xk(a, b, c) {
    return r(function*() {
        yield(yield Sk(a)).put(b, c)
    })
}

function Yk(a, b) {
    r(function*() {
        yield(yield Sk(a)).delete(b)
    })
}

function Uk(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Zk;
Zk = Hg("yt-serviceworker-metadata", {
    O: {
        auth: {
            S: 1
        },
        ["resource-manifest-assets"]: {
            S: 2
        }
    },
    ha: !0,
    upgrade(a, b) {
        b(1) && Of(a, "resource-manifest-assets");
        b(2) && Of(a, "auth")
    },
    version: 2
});
let $k = null;

function al(a) {
    return dg(Zk(), a)
}

function bl() {
    const a = Date.now();
    return IDBKeyRange.bound(0, a)
}

function cl(a, b) {
    return r(function*() {
        yield Kf(yield al(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return T(d.i.put(b, e)).then(() => {
                $k = e;
                let f = !0;
                return Tf(d, {
                    query: bl(),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function dl(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield Kf(yield al(a.token), ["resource-manifest-assets"], "readonly", e => Tf(e.objectStore("resource-manifest-assets"), {
            query: bl(),
            direction: "prev"
        }, f => {
            if (f.ca().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function el(a) {
    return r(function*() {
        $k || (yield Kf(yield al(a.token), ["resource-manifest-assets"], "readonly", b => Tf(b.objectStore("resource-manifest-assets"), {
            query: bl(),
            direction: "prev"
        }, c => {
            $k = c.getKey()
        })));
        return $k
    })
}
var fl = class {
    constructor(a) {
        this.token = a
    }
    static A() {
        return r(function*() {
            const a = yield mg();
            if (a) return fl.i || (fl.i = new fl(a)), fl.i
        })
    }
};

function gl(a, b) {
    return r(function*() {
        yield Qf(yield al(a.token), "auth", b, "shell_identifier_key")
    })
}

function hl(a) {
    return r(function*() {
        return (yield(yield al(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function il(a) {
    return r(function*() {
        yield(yield al(a.token)).clear("auth")
    })
}
var jl = class {
    constructor(a) {
        this.token = a
    }
    static A() {
        return r(function*() {
            const a = yield mg();
            if (a) return jl.i || (jl.i = new jl(a)), jl.i
        })
    }
};

function kl() {
    r(function*() {
        const a = yield jl.A();
        a && (yield il(a))
    })
};
var ll = class extends F {
    constructor(a) {
        super(a)
    }
};

function ml(a) {
    a: {
        var b = nl;
        if (gc.length) {
            const e = gc.pop();
            var {
                T: c = !1
            } = {};
            e.T = c;
            e.i.init(a, void 0, void 0, void 0);
            a = e
        } else a = new fc(a);
        try {
            const e = mc(b);
            var d = nc(new e.ba, a, e);
            break a
        } finally {
            b = a, b.i.clear(), b.m = -1, b.j = -1, 100 > gc.length && gc.push(b)
        }
        d = void 0
    }
    return d
}
var ol = [1],
    nl = [class extends F {
        constructor(a) {
            super(a, -1, ol)
        }
    }, 1, zc, [ll, 1, yc]];

function pl(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(ql(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function ql(a) {
    return Kb(ml(decodeURIComponent(a)), ll, 1).reduce((b, c) => {
        (c = C(c, 1)) && b.push(c);
        return b
    }, [])
};
var rl = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.i = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.j = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function sl(a) {
    return r(function*() {
        const b = yield yj();
        if (b && null != C(b, 3)) {
            var c = yield jl.A();
            c && (c = yield hl(c), C(b, 3) !== c && (Yk(a.caches, a.i), kl()))
        }
    })
}

function tl(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield ul(a.j), b = yield pl(c), yield Tk(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield vl(), yield Xk(a.caches, a.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield wl(a, b, a.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function xl(a) {
    return r(function*() {
        yield sl(a);
        return tl(a)
    })
}

function ul(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function vl() {
    return r(function*() {
        var a = yield yj();
        let b;
        a && null != C(a, 3) && (b = C(a, 3));
        return b ? (a = yield jl.A()) ? Promise.resolve(gl(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function wl(a, b, c) {
    return r(function*() {
        const d = yield fl.A();
        if (d) try {
            yield cl(d, b)
        } catch (e) {
            yield Bj(e)
        }
        b.push(c);
        try {
            yield Wk(a.caches, b)
        } catch (e) {
            yield Bj(e)
        }
        return Promise.resolve()
    })
}

function yl(a, b) {
    return r(function*() {
        return Vk(a.caches, b)
    })
}

function zl(a) {
    return r(function*() {
        return Vk(a.caches, a.i)
    })
}
var Al = class {
    constructor() {
        var a = self.caches;
        var b = Aj("/app_shell");
        O("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Aj("/app_shell_home");
        this.caches = a;
        this.j = b;
        this.i = c
    }
};

function Bl(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield yl(a.i, c.url);
        if (d) return Ej({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: P()
        }), d;
        Cl(c);
        return Dl(b)
    })
}

function El(a, b) {
    return r(function*() {
        const c = yield Fl(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield zl(a.i);
        if (d) return Gl(a), Hl(d, b);
        Il(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Jl(a, b) {
    b = new URL(b);
    if (!a.j.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.m)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Kl(a, b) {
    return r(function*() {
        const c = yield zl(a.i);
        if (!c) return Il(a), Dl(b);
        Gl(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(P() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return Hl(c, b);
        d = yield Fl(b);
        return d.response && d.response.ok ? d.response : Hl(c, b)
    })
}

function Dl(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Ll(b) ? b : t.fetch(a.request))
}

function Cl(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    fl.A().then(c => {
        if (c) {
            var d = el(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = dl(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Bj(e)
            }).finally(() => {
                Ej({
                    appShellAssetLoadReport: b,
                    timestamp: P()
                })
            })
        } else Ej({
            appShellAssetLoadReport: b,
            timestamp: P()
        })
    })
}

function Gl(a) {
    Ej({
        appShellAssetLoadReport: {
            assetPath: a.i.i,
            cacheHit: !0
        },
        timestamp: P()
    })
}

function Il(a) {
    Ej({
        appShellAssetLoadReport: {
            assetPath: a.i.i,
            cacheHit: !1
        },
        timestamp: P()
    })
}

function Hl(a, b) {
    if (!O("sw_nav_preload_pbj")) return a;
    const c = new rl,
        d = c.i(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Ll(e)) throw Error("no pbj preload response available");
        d.then(() => c.i(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.j();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function Fl(a) {
    return r(function*() {
        try {
            return {
                response: yield Dl(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Ll(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var Tl = class {
    constructor() {
        var a = Ml,
            b = Nl,
            c = Ol,
            d = Pl;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of Ic) e.push({
            key: f
        });
        f = Ql(O("kevlar_sw_app_wide_fallback") ? Rl : Sl);
        this.i = a;
        this.o = b;
        this.u = c;
        this.j = d;
        this.m = e;
        this.l = f
    }
};
var Pl = ["/", "/feed/downloads"];
const Sl = [/^\/$/, /^\/feed\/downloads$/],
    Rl = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Ql(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Ul = /^https:\/\/([\w-]*\.)*youtube\.com.*/,
    Vl = Ql([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]);
var Nl = new RegExp(`${Ul.source}(${Vl.source})`);
const Wl = Ql([/purge_shell=1/, /\/signin/, /\/logout/]);
var Ol = new RegExp(`${Ul.source}(${Wl.source})`);
var Yl = class {
    constructor() {
        var a = Ml,
            b = Xl;
        this.i = self;
        this.j = a;
        this.o = b;
        this.I = lj
    }
    init() {
        this.i.oninstall = this.u.bind(this);
        this.i.onactivate = this.l.bind(this);
        this.i.onfetch = this.m.bind(this);
        this.i.onmessage = this.v.bind(this)
    }
    u(a) {
        this.i.skipWaiting();
        const b = xl(this.j).catch(c => {
            Bj(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.i.clients.claim()],
            c = this.i.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), O("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.o,
                d = !!b.i.registration.navigationPreload;
            const e = a.request;
            if (c.u.test(e.url)) zj.i && (delete zj.i.i, t.__SAPISID = void 0, M("VISITOR_DATA", void 0), M("SESSION_INDEX", void 0), M("DELEGATED_SESSION_ID", void 0)), d = a.respondWith,
                c = c.i, Yk(c.caches, c.i), kl(), c = Dl(a), d.call(a, c);
            else if (c.o.test(e.url)) a.respondWith(Bl(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.j;
                (!O("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.l.test(f.pathname)) ? a.respondWith(El(c, a)): Jl(c, e.url) ? a.respondWith(Kl(c, a)) : d && a.respondWith(Dl(a))
            }
        })
    }
    v(a) {
        const b = a.data;
        this.I.includes(b.type) ? tk(a) : "refresh_shell" === b.type && tl(this.j).catch(c => {
            Bj(c)
        })
    }
};
var Zl = class {
    static A() {
        let a = w("ytglobal.storage_");
        a || (a = new Zl, v("ytglobal.storage_", a));
        return a
    }
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return $l()
        })
    }
};

function $l() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
v("ytglobal.storageClass_", Zl);

function am(a, b) {
    Zl.A().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: bm(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: bm(null == c ? void 0 : c.quota)
        });
        a.i("idbQuotaExceeded", c)
    })
}
class cm {
    constructor() {
        var a = dm;
        this.handleError = em;
        this.i = a;
        this.j = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.j = !0
        });
        this.l = Math.random() <= Ee("ytidb_transaction_ended_event_rate_limit", .02)
    }
    V(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                O("idb_data_corrupted_killswitch") || this.i("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.i("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                O("idb_is_supported_completed_killswitch") || this.i("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                am(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.l && this.i("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign({}, b, {
                        hasWindowUnloaded: this.j
                    }), this.i("idbTransactionAborted", a)
        }
    }
}

function bm(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
ni(ki(), {
    H: [{
        Ja: /Failed to fetch/,
        weight: 500
    }],
    G: []
});
var {
    handleError: em = Ai,
    V: dm = W
} = {
    handleError: Dj,
    V: function(a, b) {
        return r(function*() {
            yield Cj();
            W(a, b)
        })
    }
};
for (mf = new cm; 0 < lf.length;) {
    const a = lf.shift();
    switch (a.type) {
        case "ERROR":
            mf.handleError(a.payload);
            break;
        case "EVENT":
            mf.V(a.eventType, a.payload)
    }
}
zj.i = new zj;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Ck(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = Gi(b.clickTrackingParams);
        a = {
            Y: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Ii(74726);
            b = Ij();
            Mj(b, d, c, 8);
            c = {
                Y: 8,
                visualElement: d
            };
            hj(jj.A(), c);
            Rj(b, c)
        }
        ij(jj.A(), a)
    }
};
self.onpush = function(a) {
    a.waitUntil(pj("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return yk(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(wk())
};
self.onpushsubscriptionchange = function() {
    uk()
};
const Ml = new Al,
    Xl = new Tl;
(new Yl).init();
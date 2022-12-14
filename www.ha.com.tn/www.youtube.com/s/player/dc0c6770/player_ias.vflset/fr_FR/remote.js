(function(g) {
    var window = this;
    'use strict';
    var tab = function(a, b) {
            this.u = a >>> 0;
            this.j = b >>> 0
        },
        vab = function(a) {
            if (!a) return uab || (uab = new tab(0, 0));
            if (!/^\d+$/.test(a)) return null;
            g.Eba(a);
            return new tab(g.fe, g.ge)
        },
        wab = function(a, b, c) {
            null != c && ("string" === typeof c && vab(c), g.Ee(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.fe = b, g.ge = c, g.Be(a, g.fe), g.Be(a, g.ge)) : (c = vab(c), a = a.j, b = c.j, g.Be(a, c.u), g.Be(a, b)))
        },
        xab = function(a, b, c) {
            b = g.rba(b, c);
            null != b && (g.Ee(a, c, 0), a.j.j.push(b ? 1 : 0))
        },
        zab = function(a) {
            g.I.call(this, a, -1, yab)
        },
        Aab = function(a) {
            g.I.call(this, a)
        },
        Bab = function(a) {
            g.I.call(this, a)
        },
        Cab = function(a) {
            g.I.call(this, a)
        },
        Dab = function(a) {
            g.I.call(this, a)
        },
        Y7 = function(a) {
            g.Mj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Va()).toString(36));
            return a
        },
        Z7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.dga(a.u, b, c)
        },
        Eab = function(a) {
            if (a instanceof g.pm) return a;
            if ("function" == typeof a.gj) return a.gj(!1);
            if (g.Ma(a)) {
                var b = 0,
                    c = new g.pm;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.V2;
                        if (b in a) return g.qm(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Fab = function(a, b, c) {
            if (g.Ma(a)) g.rc(a, b, c);
            else
                for (a = Eab(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Gab = function(a, b) {
            var c = [];
            Fab(b, function(d) {
                try {
                    var e = g.Ho.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Lka(e) && c.push(d)
            }, a);
            return c
        },
        Hab = function(a, b) {
            Gab(a, b).forEach(function(c) {
                g.Ho.prototype.remove.call(this, c)
            }, a)
        },
        Iab = function(a) {
            if (a.Z) {
                if (a.Z.locationOverrideToken) return {
                    locationOverrideToken: a.Z.locationOverrideToken
                };
                if (null != a.Z.latitudeE7 && null != a.Z.longitudeE7) return {
                    latitudeE7: a.Z.latitudeE7,
                    longitudeE7: a.Z.longitudeE7
                }
            }
            return null
        },
        Jab = function(a, b) {
            g.Ub(a, b) || a.push(b)
        },
        Kab = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Lab = function(a, b) {
            return g.Af(a, b)
        },
        Mab = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        $7 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return Mab(a)
        },
        Nab = function(a, b, c, d) {
            var e = new g.Cj(null);
            a && g.Dj(e, a);
            b && g.Ej(e, b);
            c && g.Fj(e, c);
            d && (e.J = d);
            return e
        },
        a8 = function(a, b) {
            g.Ux[a] = !0;
            var c = g.Sx();
            c && c.publish.apply(c, arguments);
            g.Ux[a] = !1
        },
        b8 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.qo;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Oab(this, a.capabilities || ""), Pab(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Oab = function(a, b) {
            a.capabilities.clear();
            g.xm(b.split(","), g.Sa(Lab, Qab)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Pab = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        c8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        d8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Rab = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Sab = function(a) {
            return new c8(a)
        },
        Uab = function(a) {
            return Array.isArray(a) ? g.Pk(a, Sab) : []
        },
        e8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Vab = function(a) {
            return Array.isArray(a) ? "[" + g.Pk(a, e8).join(",") + "]" : "null"
        },
        Wab = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Xab = function(a) {
            return g.Pk(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Yab = function(a, b) {
            return g.Sb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        f8 = function(a, b) {
            return g.Sb(a, function(c) {
                return d8(c, b)
            })
        },
        Zab = function() {
            var a = (0, g.Pz)();
            a && Hab(a, a.j.gj(!0))
        },
        g8 = function() {
            var a = g.Sz("yt-remote-connected-devices") || [];
            g.nc(a);
            return a
        },
        $ab = function(a) {
            if (g.Vb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Pk(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        abb = function(a) {
            g.Rz("yt-remote-connected-devices", a, 86400)
        },
        h8 = function() {
            if (bbb) return bbb;
            var a = g.Sz("yt-remote-device-id");
            a || (a = Wab(), g.Rz("yt-remote-device-id", a, 31536E3));
            for (var b = g8(), c = 1, d = a; g.Ub(b, d);) c++, d = a + "#" + c;
            return bbb = d
        },
        cbb = function() {
            var a = g8(),
                b = h8();
            g.Uz() && g.qc(a, b);
            a = $ab(a);
            if (g.Vb(a)) try {
                g.Pu("remote_sid")
            } catch (c) {} else try {
                g.Nu("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        dbb = function() {
            return g.Sz("yt-remote-session-browser-channel")
        },
        ebb = function() {
            return g.Sz("yt-remote-local-screens") || []
        },
        fbb = function() {
            g.Rz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        gbb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Pk(ebb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Pk(a, function(d) {
                    return d.loungeToken
                });
            g.Yd(c, function(d) {
                return !g.Ub(b, d)
            }) && fbb();
            g.Rz("yt-remote-local-screens", a, 31536E3)
        },
        i8 = function(a) {
            a || (g.Tz("yt-remote-session-screen-id"), g.Tz("yt-remote-session-video-id"));
            cbb();
            a = g8();
            g.Zb(a, h8());
            abb(a)
        },
        hbb = function() {
            if (!j8) {
                var a = g.Qo();
                a && (j8 = new g.Eo(a))
            }
        },
        ibb = function() {
            hbb();
            return j8 ? !!j8.get("yt-remote-use-staging-server") : !1
        },
        jbb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        kbb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        lbb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        k8 = function(a) {
            a.length ? mbb(a.shift(), function() {
                k8(a)
            }) : nbb()
        },
        obb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        mbb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.ej(d, g.lg(a));
            (document.head || document.documentElement).appendChild(d)
        },
        pbb = function() {
            var a = jbb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        nbb = function() {
            var a = lbb();
            a && a(!1, "No cast extension found")
        },
        rbb = function() {
            if (qbb) {
                var a = 2,
                    b = lbb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                mbb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", nbb, c)
            }
        },
        sbb = function() {
            rbb();
            var a = pbb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            k8(a)
        },
        ubb = function() {
            rbb();
            var a = pbb();
            a.push.apply(a, g.t(tbb.map(obb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            k8(a)
        },
        vbb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Qh: 3,
                Ph: "channel_type"
            })
        },
        wbb = function(a, b) {
            a.j.Br("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        xbb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Qh: 3,
                Ph: "channel_type"
            })
        },
        ybb = function(a, b) {
            a.j.Br("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        zbb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Qh: 3,
                Ph: "channel_type"
            })
        },
        Abb = function(a, b) {
            a.j.Br("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        Bbb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/channel/error", {
                Qh: 3,
                Ph: "channel_type"
            })
        },
        Cbb = function(a, b) {
            a.j.Br("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Dbb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Ebb = function() {
            this.j = l8();
            this.j.vp("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        m8 = function(a, b, c) {
            g.J.call(this);
            this.I = null != c ? (0, g.Ra)(a, c) : a;
            this.wh = b;
            this.D = (0, g.Ra)(this.PU, this);
            this.j = !1;
            this.u = 0;
            this.B = this.xc = null;
            this.C = []
        },
        n8 = function(a, b, c) {
            g.J.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.wh = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.xc = null
        },
        Fbb = function(a) {
            a.xc = g.Qh(function() {
                a.xc = null;
                a.j && !a.u && (a.j = !1, Fbb(a))
            }, a.wh);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        o8 = function() {},
        Gbb = function() {
            g.cf.call(this, "p")
        },
        Hbb = function() {
            g.cf.call(this, "o")
        },
        Ibb = function() {
            var a = new g.C.TextEncoder;
            return new g.C.ReadableStream({
                start: function(b) {
                    for (var c = g.r(["test\r\n", "test\r\n"]), d = c.next(); !d.done; d = c.next()) b.enqueue(a.encode(d.value));
                    b.close()
                }
            })
        },
        Jbb = function(a) {
            return (a = /\/\/([^\/]+)\//.exec(a)) ? a[1].endsWith("google.com") : !1
        },
        Lbb = function(a, b) {
            if (!Kbb) {
                Kbb = !0;
                var c;
                a: {
                    if (c = g.C.navigator)
                        if (c = c.userAgent) break a;c = ""
                }(-1 == c.indexOf("Chrome") || -1 != c.indexOf("Edg") ? 0 : 90 <= parseInt(/Chrome\/(\d+)/.exec(c)[1], 10)) && Jbb(a) && window && window.document && Jbb(window.document.URL) && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = "A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                    document.head.appendChild(c), (new Request("", {
                        body: new ReadableStream,
                        method: "POST"
                    })).headers.has("Content-Type") || (g.C.fetch(a + "?ot=1", {
                        method: "POST",
                        body: "test\r\n"
                    }).catch(b), g.C.fetch(a + "?ot=2", {
                        method: "POST",
                        body: Ibb(),
                        BX: !1
                    }).catch(b), g.C.fetch(a + "?ot=3", {
                        method: "POST",
                        body: Ibb(),
                        BX: !0
                    }).catch(b)))
            }
        },
        Nbb = function() {
            return Mbb = Mbb || new g.Vf
        },
        Obb = function(a) {
            g.cf.call(this, "serverreachability", a)
        },
        p8 = function(a) {
            var b = Nbb();
            b.dispatchEvent(new Obb(b, a))
        },
        Pbb = function(a, b) {
            g.cf.call(this, "statevent", a);
            this.stat = b
        },
        q8 = function(a) {
            var b = Nbb();
            b.dispatchEvent(new Pbb(b, a))
        },
        Qbb = function(a, b, c, d) {
            g.cf.call(this, "timingevent", a);
            this.size = b;
            this.Ow = d
        },
        r8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        Rbb = function() {},
        s8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.Ac = c;
            this.zc = d || 1;
            this.kb = new g.Rj(this);
            this.Fb = 45E3;
            a = g.uG ? 125 : void 0;
            this.ob = new g.Oh(a);
            this.La = null;
            this.B = !1;
            this.S = this.eb = this.J = this.Qa = this.Aa = this.Kb = this.Z = null;
            this.oa = [];
            this.j = null;
            this.ea = 0;
            this.I = this.ya = null;
            this.Rb = -1;
            this.Ia = !1;
            this.yb = 0;
            this.Ya = null;
            this.Pc = this.Va = this.lc = this.Ba = !1;
            this.u = new Sbb
        },
        Sbb = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        Ubb = function(a, b, c) {
            a.Qa = 1;
            a.J = Y7(b.clone());
            a.S = c;
            a.Ba = !0;
            Tbb(a, null)
        },
        Tbb = function(a, b) {
            a.Aa = Date.now();
            t8(a);
            a.eb = a.J.clone();
            Z7(a.eb, "t", a.zc);
            a.ea = 0;
            var c = a.D.Qa;
            a.u = new Sbb;
            a.j = Vbb(a.D, c ? b : null, !a.S);
            0 < a.yb && (a.Ya = new n8((0, g.Ra)(a.hM, a, a.j), a.yb));
            a.kb.Ra(a.j, "readystatechange", a.SU);
            b = a.La ? g.Hf(a.La) : {};
            a.S ? (a.ya || (a.ya = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.eb, a.ya, a.S, b)) : (a.ya = "GET", a.j.send(a.eb, a.ya, null, b));
            p8(1)
        },
        Wbb = function(a) {
            return a.j ? "GET" == a.ya && 2 != a.Qa && a.D.oe : !1
        },
        $bb = function(a, b, c) {
            for (var d = !0, e; !a.Ia && a.ea < c.length;)
                if (e = Xbb(a, c), e == u8) {
                    4 ==
                        b && (a.I = 4, q8(14), d = !1);
                    break
                } else if (e == Ybb) {
                a.I = 4;
                q8(15);
                d = !1;
                break
            } else Zbb(a, e);
            Wbb(a) && e != u8 && e != Ybb && (a.u.j = "", a.ea = 0);
            4 != b || 0 != c.length || a.u.u || (a.I = 1, q8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Pc && (a.Pc = !0, a.D.AJ(a)) : (v8(a), w8(a))
        },
        Xbb = function(a, b) {
            var c = a.ea,
                d = b.indexOf("\n", c);
            if (-1 == d) return u8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Ybb;
            d += 1;
            if (d + c > b.length) return u8;
            b = b.slice(d, d + c);
            a.ea = d + c;
            return b
        },
        t8 = function(a) {
            a.Kb = Date.now() + a.Fb;
            acb(a, a.Fb)
        },
        acb = function(a, b) {
            if (null != a.Z) throw Error("WatchDog timer not null");
            a.Z = r8((0, g.Ra)(a.QU, a), b)
        },
        x8 = function(a) {
            a.Z && (g.C.clearTimeout(a.Z), a.Z = null)
        },
        w8 = function(a) {
            a.D.Wf() || a.Ia || bcb(a.D, a)
        },
        v8 = function(a) {
            x8(a);
            g.$e(a.Ya);
            a.Ya = null;
            a.ob.stop();
            g.Sj(a.kb);
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Zbb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.vg && (c.j == a || ccb(c.u, a)))
                    if (!a.Va && ccb(c.u, a) && 3 == c.vg) {
                        try {
                            var d = c.pe.j.parse(b)
                        } catch (A) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.S) {
                                    if (c.j)
                                        if (c.j.Aa + 3E3 < a.Aa) y8(c), z8(c);
                                        else break a;
                                    dcb(c);
                                    q8(18)
                                }
                            }
                            else c.Id = e[1], 0 < c.Id - c.Va && 37500 > e[2] && c.ob && 0 == c.oa && !c.ea && (c.ea = r8((0, g.Ra)(c.TU, c), 6E3));
                            if (1 >= ecb(c.u) && c.Rc) {
                                try {
                                    c.Rc()
                                } catch (A) {}
                                c.Rc = void 0
                            }
                        } else A8(c, 11)
                    } else if ((a.Va || c.j == a) && y8(c), !g.db(b))
                    for (e = c.pe.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Va = f[0];
                        f = f[1];
                        if (2 == c.vg)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Pc = f[2];
                                var h = f[3];
                                null != h && (c.iM = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.eb = 1.5 * l);
                                d = c;
                                var m = a.j;
                                if (m) {
                                    var n = g.Ii(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.gb(n, "spdy") || g.gb(n, "quic") || g.gb(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (fcb(p, p.u), p.u = null))
                                    }
                                    if (d.Ba) {
                                        var q = g.Ii(m, "X-HTTP-Session-Id");
                                        q && (d.Od = q, g.Mj(d.La, d.Ba, q))
                                    }
                                }
                                c.vg = 3;
                                c.D && c.D.oM();
                                c.Lc && (c.Fd = Date.now() - a.Aa);
                                d = c;
                                var u = a;
                                d.wd = gcb(d, d.Qa ? d.Pc : null, d.zc);
                                if (u.Va) {
                                    hcb(d.u,
                                        u);
                                    var w = u,
                                        y = d.eb;
                                    y && w.setTimeout(y);
                                    w.Z && (x8(w), t8(w));
                                    d.j = u
                                } else icb(d);
                                0 < c.B.length && B8(c)
                            } else "stop" != f[0] && "close" != f[0] || A8(c, 7);
                        else 3 == c.vg && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? A8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.nM(f), c.oa = 0)
                    }
                p8(4)
            } catch (A) {}
        },
        jcb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        kcb = function(a) {
            this.D = a || 10;
            g.C.PerformanceNavigationTiming ? (a = g.C.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.C.chrome && g.C.chrome.loadTimes && g.C.chrome.loadTimes() && g.C.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        lcb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        ecb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        ccb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        fcb = function(a,
            b) {
            a.j ? a.j.add(b) : a.u = b
        },
        hcb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        mcb = function(a) {
            if (null != a.u) return a.B.concat(a.u.oa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.r(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
                return b
            }
            return g.bc(a.B)
        },
        ncb = function(a, b) {
            var c = new Rbb;
            if (g.C.Image) {
                var d = new Image;
                d.onload = g.Sa(C8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Sa(C8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Sa(C8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Sa(C8, c, d, "TestLoadImage: timeout", !1, b);
                g.C.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        C8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        ocb = function() {
            this.j = new o8
        },
        pcb = function(a, b, c) {
            var d = c || "";
            try {
                g.Bj(a, function(e, f) {
                    var h = e;
                    g.Na(e) && (h = g.gi(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        D8 = function(a, b, c) {
            return c && c.ZZ ? c.ZZ[a] || b : b
        },
        qcb = function(a) {
            this.B = [];
            this.Pc = this.wd = this.La = this.zc = this.j = this.Od = this.Ba = this.Ia = this.J = this.Kb = this.Z = null;
            this.Ue = this.Ya = 0;
            this.Se = D8("failFast", !1, a);
            this.ob = this.ea = this.S = this.I = this.D = null;
            this.Ac = !0;
            this.Id = this.Va = -1;
            this.lc = this.oa = this.Aa = 0;
            this.Me = D8("baseRetryDelayMs", 5E3, a);
            this.jf = D8("retryDelaySeedMs", 1E4, a);
            this.Te = D8("forwardChannelMaxRetries", 2, a);
            this.Gd = D8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Jd = a && a.n6a || void 0;
            this.oe = a && a.l6a || !1;
            this.eb = void 0;
            this.Qa = a && a.v5 || !1;
            this.C = "";
            this.u = new kcb(a &&
                a.T4a);
            this.pe = new ocb;
            this.Fb = a && a.i5a || !1;
            this.yb = a && a.a5a || !1;
            this.Fb && this.yb && (this.yb = !1);
            this.Ih = a && a.O4a || !1;
            a && a.k5a && (this.Ac = !1);
            this.Lc = !this.Fb && this.Ac && a && a.X4a || !1;
            this.Rc = void 0;
            this.Fd = 0;
            this.kb = !1;
            this.ya = null;
            this.kf = !a || !1 !== a.Z4a;
            this.Rb = null
        },
        z8 = function(a) {
            a.j && (rcb(a), a.j.cancel(), a.j = null)
        },
        scb = function(a) {
            z8(a);
            a.S && (g.C.clearTimeout(a.S), a.S = null);
            y8(a);
            a.u.cancel();
            a.I && ("number" === typeof a.I && g.C.clearTimeout(a.I), a.I = null)
        },
        B8 = function(a) {
            lcb(a.u) || a.I || (a.I = !0, g.Fh(a.kM, a), a.Aa = 0)
        },
        ucb = function(a, b) {
            if (ecb(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.oa.concat(a.B), !0;
            if (1 == a.vg || 2 == a.vg || a.Aa >= (a.Se ? 0 : a.Te)) return !1;
            a.I = r8((0, g.Ra)(a.kM, a, b), tcb(a, a.Aa));
            a.Aa++;
            return !0
        },
        wcb = function(a, b) {
            var c;
            b ? c = b.Ac : c = a.Ya++;
            var d = a.La.clone();
            g.Mj(d, "SID", a.C);
            g.Mj(d, "RID", c);
            g.Mj(d, "AID", a.Va);
            E8(a, d);
            a.J && a.Z && g.Qj(d, a.J, a.Z);
            c = new s8(a, a.C, c, a.Aa + 1);
            null === a.J && (c.La = a.Z);
            b && (a.B = b.oa.concat(a.B));
            b = vcb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Gd) + Math.round(.5 * a.Gd * Math.random()));
            fcb(a.u, c);
            Ubb(c, d, b)
        },
        E8 = function(a, b) {
            a.Ia && g.mf(a.Ia, function(c, d) {
                g.Mj(b, d, c)
            });
            a.D && g.Bj({}, function(c, d) {
                g.Mj(b, d, c)
            })
        },
        vcb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Ra)(a.D.UU, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        pcb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.oa = a;
            return d
        },
        icb = function(a) {
            a.j || a.S || (a.lc = 1, g.Fh(a.jM, a), a.oa = 0)
        },
        dcb = function(a) {
            if (a.j || a.S || 3 <= a.oa) return !1;
            a.lc++;
            a.S = r8((0, g.Ra)(a.jM, a), tcb(a, a.oa));
            a.oa++;
            return !0
        },
        rcb = function(a) {
            null != a.ya && (g.C.clearTimeout(a.ya), a.ya = null)
        },
        xcb = function(a) {
            a.j = new s8(a, a.C, "rpc", a.lc);
            null === a.J && (a.j.La = a.Z);
            a.j.yb = 0;
            var b = a.wd.clone();
            g.Mj(b, "RID", "rpc");
            g.Mj(b, "SID", a.C);
            g.Mj(b, "CI", a.ob ? "0" : "1");
            g.Mj(b, "AID", a.Va);
            g.Mj(b, "TYPE", "xmlhttp");
            E8(a, b);
            a.J && a.Z && g.Qj(b, a.J, a.Z);
            a.eb && a.j.setTimeout(a.eb);
            var c = a.j;
            a = a.Pc;
            c.Qa = 1;
            c.J = Y7(b.clone());
            c.S = null;
            c.Ba = !0;
            Tbb(c, a)
        },
        y8 = function(a) {
            null != a.ea && (g.C.clearTimeout(a.ea), a.ea = null)
        },
        bcb = function(a, b) {
            var c = null;
            if (a.j == b) {
                y8(a);
                rcb(a);
                a.j = null;
                var d = 2
            } else if (ccb(a.u, b)) c = b.oa, hcb(a.u, b), d = 1;
            else return;
            if (0 != a.vg)
                if (b.B)
                    if (1 == d) {
                        c = b.S ? b.S.length : 0;
                        b = Date.now() - b.Aa;
                        var e = a.Aa;
                        d = Nbb();
                        d.dispatchEvent(new Qbb(d, c, b, e));
                        B8(a)
                    } else icb(a);
            else {
                var f = b.Rb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && ucb(a, b) || 2 == d && dcb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        A8(a, 5);
                        break;
                    case 4:
                        A8(a, 10);
                        break;
                    case 3:
                        A8(a, 6);
                        break;
                    default:
                        A8(a, 2)
                }
            }
        },
        tcb = function(a, b) {
            var c = a.Me + Math.floor(Math.random() *
                a.jf);
            a.isActive() || (c *= 2);
            return c * b
        },
        A8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Ra)(a.E5, a);
                c || (c = new g.Cj("//www.google.com/images/cleardot.gif"), g.C.location && "http" == g.C.location.protocol || g.Dj(c, "https"), Y7(c));
                ncb(c.toString(), d)
            } else q8(2);
            a.vg = 0;
            a.D && a.D.mM(b);
            ycb(a);
            scb(a)
        },
        ycb = function(a) {
            a.vg = 0;
            a.Rb = [];
            if (a.D) {
                var b = mcb(a.u);
                if (0 != b.length || 0 != a.B.length) g.fc(a.Rb, b), g.fc(a.Rb, a.B), a.u.B.length = 0, g.bc(a.B), a.B.length = 0;
                a.D.lM()
            }
        },
        zcb = function(a) {
            if (0 == a.vg) return a.Rb;
            var b = [];
            g.fc(b, mcb(a.u));
            g.fc(b, a.B);
            return b
        },
        gcb = function(a, b, c) {
            var d = g.Nj(c);
            "" != d.j ? (b && g.Ej(d, b + "." + d.j), g.Fj(d, d.B)) : (d = g.C.location, d = Nab(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ba;
            c = a.Od;
            b && c && g.Mj(d, b, c);
            g.Mj(d, "VER", a.iM);
            E8(a, d);
            return d
        },
        Vbb = function(a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.oe && !a.Jd ? new g.Bi(new g.xj({
                HS: !0
            })) : new g.Bi(a.Jd);
            b.J = a.Qa;
            return b
        },
        Acb = function() {},
        Bcb = function() {
            if (g.Bc && !g.yc(10)) throw Error("Environmental error: no available transport.");
        },
        G8 = function(a, b) {
            g.Vf.call(this);
            this.j = new qcb(b);
            this.I = a;
            this.u = b && b.I_ || null;
            a = b && b.G_ || null;
            b && b.S4a && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Z = a;
            a = b && b.n5a || null;
            b && b.rQ && (a ? a["X-WebChannel-Content-Type"] = b.rQ : a = {
                "X-WebChannel-Content-Type": b.rQ
            });
            b && b.mO && (a ? a["X-WebChannel-Client-Profile"] = b.mO : a = {
                "X-WebChannel-Client-Profile": b.mO
            });
            this.j.Kb = a;
            (a = b && b.l5a) && !g.db(a) && (this.j.J = a);
            this.J = b && b.v5 || !1;
            this.D = b && b.W5a || !1;
            (b = b && b.RZ) && !g.db(b) && (this.j.Ba = b, g.tf(this.u, b) && g.Ef(this.u,
                b));
            this.C = new F8(this)
        },
        Ccb = function(a) {
            Gbb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.metadataKey = g.qf(b)) ? g.Ff(b, this.metadataKey) : b : this.data = a
        },
        Dcb = function(a) {
            Hbb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        F8 = function(a) {
            this.j = a
        },
        Ecb = function(a, b) {
            this.u = a;
            this.j = b
        },
        Fcb = function(a) {
            return zcb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? Mab(b) : b);
                return b
            })
        },
        H8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        J8 = function(a) {
            I8.dispatchEvent(new Gcb(I8, a))
        },
        Gcb = function(a, b) {
            g.cf.call(this, "statevent", a);
            this.stat = b
        },
        K8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.J = c;
            this.I = d || 1;
            this.u = 45E3;
            this.B = new g.Rj(this);
            this.D = new g.Oh;
            this.D.setInterval(250)
        },
        Icb = function(a, b, c) {
            a.Bu = 1;
            a.gp = Y7(b.clone());
            a.yr = c;
            a.Ba = !0;
            Hcb(a, null)
        },
        Jcb = function(a, b, c, d, e) {
            a.Bu = 1;
            a.gp = Y7(b.clone());
            a.yr = null;
            a.Ba = c;
            e && (a.rS = !1);
            Hcb(a, d)
        },
        Hcb = function(a, b) {
            a.Au = Date.now();
            L8(a);
            a.ip = a.gp.clone();
            Z7(a.ip, "t", a.I);
            a.jB = 0;
            a.Hh = a.j.yF(a.j.Fx() ? b : null);
            0 < a.wF && (a.hB = new n8((0, g.Ra)(a.pM, a, a.Hh), a.wF));
            a.B.Ra(a.Hh, "readystatechange", a.WU);
            b = a.xr ? g.Hf(a.xr) : {};
            a.yr ? (a.iB = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Hh.send(a.ip, a.iB, a.yr, b)) : (a.iB = "GET", a.rS && !g.hf && (b.Connection = "close"), a.Hh.send(a.ip, a.iB, null, b));
            a.j.yl(1)
        },
        Mcb = function(a, b) {
            var c = a.jB,
                d = b.indexOf("\n", c);
            if (-1 == d) return Kcb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Lcb;
            d += 1;
            if (d + c > b.length) return Kcb;
            b = b.slice(d, d + c);
            a.jB = d + c;
            return b
        },
        Ocb = function(a, b) {
            a.Au = Date.now();
            L8(a);
            var c = b ? window.location.hostname : "";
            a.ip = a.gp.clone();
            g.Mj(a.ip, "DOMAIN", c);
            g.Mj(a.ip, "t", a.I);
            try {
                a.Il = new ActiveXObject("htmlfile")
            } catch (m) {
                M8(a);
                a.hp = 7;
                J8(22);
                N8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in O8) f = O8[f];
                        else if (f in Ncb) f = O8[f] = Ncb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                O8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.Cg(g.ig("b/12014412"), d);
            a.Il.open();
            a.Il.write(g.Ag(c));
            a.Il.close();
            a.Il.parentWindow.m = (0, g.Ra)(a.w3, a);
            a.Il.parentWindow.d = (0, g.Ra)(a.vR, a, !0);
            a.Il.parentWindow.rpcClose = (0, g.Ra)(a.vR, a, !1);
            c = a.Il.createElement("DIV");
            a.Il.parentWindow.document.body.appendChild(c);
            d = g.pg(a.ip.toString());
            d = g.Ug(g.og(d));
            d = g.Cg(g.ig("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.sda(c, d);
            a.j.yl(1)
        },
        L8 = function(a) {
            a.xF =
                Date.now() + a.u;
            Pcb(a, a.u)
        },
        Pcb = function(a, b) {
            if (null != a.Cu) throw Error("WatchDog timer not null");
            a.Cu = H8((0, g.Ra)(a.VU, a), b)
        },
        Qcb = function(a) {
            a.Cu && (g.C.clearTimeout(a.Cu), a.Cu = null)
        },
        N8 = function(a) {
            a.j.Wf() || a.wr || a.j.kB(a)
        },
        M8 = function(a) {
            Qcb(a);
            g.$e(a.hB);
            a.hB = null;
            a.D.stop();
            g.Sj(a.B);
            if (a.Hh) {
                var b = a.Hh;
                a.Hh = null;
                b.abort();
                b.dispose()
            }
            a.Il && (a.Il = null)
        },
        Rcb = function(a, b) {
            try {
                a.j.qM(a, b), a.j.yl(4)
            } catch (c) {}
        },
        Tcb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                Scb(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        Tcb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Scb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    P8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    P8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    P8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    P8(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        P8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Ucb = function(a) {
            this.j = a;
            this.u = new o8
        },
        Vcb = function(a) {
            var b = Q8(a.j, a.by, "/mail/images/cleardot.gif");
            Y7(b);
            Tcb(b.toString(), 5E3, (0, g.Ra)(a.UX, a), 3, 2E3);
            a.yl(1)
        },
        Wcb = function(a) {
            var b = a.j.Z;
            if (null != b) J8(5), b ? (J8(11), R8(a.j, a, !1)) : (J8(12), R8(a.j, a, !0));
            else if (a.wi = new K8(a), a.wi.xr = a.zF, b = a.j, b = Q8(b, b.Fx() ? a.Ex : null, a.AF), J8(5), !g.Bc || g.yc(10)) Z7(b, "TYPE", "xmlhttp"), Jcb(a.wi, b, !1, a.Ex, !1);
            else {
                Z7(b, "TYPE", "html");
                var c = a.wi;
                a = !!a.Ex;
                c.Bu = 3;
                c.gp = Y7(b.clone());
                Ocb(c, a)
            }
        },
        Xcb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new o8;
            this.S = a || null;
            this.Z = null != b ? b : null;
            this.J = c || !1
        },
        Ycb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Zcb = function(a, b, c, d) {
            g.cf.call(this, "timingevent", a);
            this.size = b;
            this.Ow = d
        },
        $cb = function(a) {
            g.cf.call(this, "serverreachability", a)
        },
        bdb = function(a) {
            a.XU(1, 0);
            a.lB = Q8(a, null, a.BF);
            adb(a)
        },
        cdb = function(a) {
            a.Cp && (a.Cp.abort(), a.Cp = null);
            a.Jf && (a.Jf.cancel(), a.Jf = null);
            a.Ln && (g.C.clearTimeout(a.Ln), a.Ln = null);
            S8(a);
            a.Fi && (a.Fi.cancel(), a.Fi = null);
            a.jp && (g.C.clearTimeout(a.jp), a.jp = null)
        },
        ddb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new Ycb(a.YU++, b));
            2 != a.j && 3 != a.j || adb(a)
        },
        edb = function(a) {
            var b = 0;
            a.Jf && b++;
            a.Fi && b++;
            return b
        },
        adb = function(a) {
            a.Fi || a.jp || (a.jp = H8((0, g.Ra)(a.uM, a), 0), a.Eu = 0)
        },
        hdb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.Hx = Math.floor(1E5 * Math.random());
                    b = a.Hx++;
                    var c = new K8(a, "", b);
                    c.xr = a.Ml;
                    var d = fdb(a),
                        e = a.lB.clone();
                    g.Mj(e, "RID", b);
                    g.Mj(e, "CVER", "1");
                    T8(a, e);
                    Icb(c, e, d);
                    a.Fi = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? gdb(a, b) : 0 == a.u.length || a.Fi || gdb(a))
        },
        gdb = function(a, b) {
            if (b)
                if (6 < a.zr) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.Hx - 1;
                    b = fdb(a)
                } else c = b.J, b = b.yr;
            else c = a.Hx++, b = fdb(a);
            var d = a.lB.clone();
            g.Mj(d, "SID", a.C);
            g.Mj(d, "RID", c);
            g.Mj(d, "AID", a.Fu);
            T8(a, d);
            c = new K8(a, a.C, c, a.Eu + 1);
            c.xr = a.Ml;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Fi = c;
            Icb(c, d, b)
        },
        T8 = function(a, b) {
            a.nh && (a = a.nh.yM()) && g.mf(a, function(c, d) {
                g.Mj(b, d, c)
            })
        },
        fdb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.zr && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    uu: e.uu
                }, f++) {
                e.uu = a.u[f].j;
                var h = a.u[f].map;
                e.uu = 6 >= a.zr ? f : e.uu - d;
                try {
                    g.mf(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.uu + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.uu + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        idb = function(a) {
            a.Jf || a.Ln || (a.I = 1, a.Ln = H8((0, g.Ra)(a.tM, a), 0), a.Du = 0)
        },
        kdb = function(a) {
            if (a.Jf || a.Ln || 3 <= a.Du) return !1;
            a.I++;
            a.Ln = H8((0, g.Ra)(a.tM, a), jdb(a, a.Du));
            a.Du++;
            return !0
        },
        R8 = function(a, b, c) {
            a.SE = c;
            a.Nl = b.Kn;
            a.J || bdb(a)
        },
        S8 = function(a) {
            null != a.Ar && (g.C.clearTimeout(a.Ar), a.Ar = null)
        },
        jdb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        U8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.nh && (c = null);
                var d = (0, g.Ra)(a.D5, a);
                c || (c = new g.Cj("//www.google.com/images/cleardot.gif"), Y7(c));
                Scb(c.toString(), 1E4, d)
            } else J8(2);
            ldb(a, b)
        },
        ldb = function(a, b) {
            a.j = 0;
            a.nh && a.nh.vM(b);
            mdb(a);
            cdb(a)
        },
        mdb = function(a) {
            a.j = 0;
            a.Nl = -1;
            if (a.nh)
                if (0 == a.B.length && 0 == a.u.length) a.nh.CF();
                else {
                    var b = g.bc(a.B),
                        c = g.bc(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.nh.CF(b, c)
                }
        },
        Q8 = function(a, b, c) {
            var d = g.Nj(c);
            if ("" != d.j) b && g.Ej(d, b + "." + d.j), g.Fj(d, d.B);
            else {
                var e = window.location;
                d = Nab(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Gx && g.mf(a.Gx, function(f, h) {
                g.Mj(d, h, f)
            });
            g.Mj(d, "VER", a.zr);
            T8(a, d);
            return d
        },
        ndb = function() {},
        odb = function() {
            this.j = [];
            this.u = []
        },
        pdb = function(a) {
            g.cf.call(this, "channelMessage");
            this.message = a
        },
        qdb = function(a) {
            g.cf.call(this, "channelError");
            this.error = a
        },
        rdb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        V8 = function(a, b) {
            g.J.call(this);
            this.j = new g.Zn(this.n3, 0, this);
            g.M(this, this.j);
            this.wh = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ra)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ra)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        sdb = function() {},
        l8 = function() {
            if (!W8) {
                W8 = new g.Sh(new sdb);
                var a = g.eu("client_streamz_web_flush_count", -1); - 1 !== a && (W8.C = a)
            }
            return W8
        },
        tdb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Aa = a;
            this.J = b;
            this.B = new g.Do;
            this.u = new V8(this.D4, this);
            this.j = null;
            this.ea = !1;
            this.I = null;
            this.Z = "";
            this.S = this.D = 0;
            this.C = [];
            this.Qa = c;
            this.oa = d;
            this.Va = e;
            this.La = new vbb;
            this.ya = new xbb;
            this.Ia = new zbb;
            this.Ba = new Bbb;
            this.Ya = new Dbb;
            this.eb = new Ebb
        },
        udb = function(a) {
            if (a.j) {
                var b = a.oa(),
                    c = a.j.Ml || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Ml = c
            }
        },
        X8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.qi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.ri(a) || "";
            a = g.ob();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.nb(a, "10.0") && (this.u = !1))
        },
        Y8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.xi(c + b, {})
        },
        vdb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Sa(a.C, d, !0),
                onError: g.Sa(a.B, e),
                onTimeout: g.Sa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Eu(b, a)
        },
        wdb = function(a, b) {
            g.Vf.call(this);
            var c = this;
            this.Vc = a();
            this.Vc.subscribe("handlerOpened", this.cV, this);
            this.Vc.subscribe("handlerClosed", this.aV, this);
            this.Vc.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Vc.subscribe("handlerMessage", this.bV, this);
            this.j = b
        },
        xdb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Bcb : e;
            var f = void 0 === f ? new g.Do : f;
            this.pathPrefix = a;
            this.j = b;
            this.Aa = c;
            this.D = f;
            this.S = null;
            this.Z = this.J = 0;
            this.channel = null;
            this.I = 0;
            this.B = new V8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : ecb((new Ecb(h, h.j)).j.u)) && d.connect(d.S, d.J)
            });
            this.C = {};
            this.u = {};
            this.ea = !1;
            this.logger = null;
            this.oa = [];
            this.Kg = void 0;
            this.La = new vbb;
            this.ya = new xbb;
            this.Ia = new zbb;
            this.Ba = new Bbb
        },
        ydb = function(a) {
            g.Of(a.channel, "m", function() {
                a.I = 3;
                a.B.reset();
                a.S = null;
                a.J = 0;
                for (var b = g.r(a.oa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.oa = [];
                a.ma("webChannelOpened");
                wbb(a.La, "WEB_CHANNEL")
            });
            g.Of(a.channel, "n", function() {
                a.I = 0;
                a.B.isActive() || a.ma("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Fcb(new Ecb(b, b.j));
                c && (a.oa = [].concat(g.t(c)));
                ybb(a.ya, "WEB_CHANNEL")
            });
            g.Of(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ma("webChannelMessage", new rdb(c[0], c[1]));
                a.Kg = b.statusCode;
                Abb(a.Ia, "WEB_CHANNEL")
            });
            g.Of(a.channel, "o", function() {
                401 === a.Kg || a.B.start();
                a.ma("webChannelError");
                Cbb(a.Ba, "WEB_CHANNEL")
            })
        },
        zdb = function(a) {
            var b = a.Aa();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Adb = function(a) {
            g.Vf.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.fV, this);
            this.j.subscribe("webChannelClosed", this.dV, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.eV, this)
        },
        Bdb = function(a, b, c, d, e) {
            function f() {
                return new tdb(Y8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.R("enable_mdx_web_channel_desktop") ? new Adb(function() {
                return new xdb(Y8(a, "/wc"), b, c)
            }) : new wdb(f, e)
        },
        Fdb = function() {
            var a = Cdb;
            Ddb();
            Z8.push(a);
            Edb()
        },
        $8 = function(a, b) {
            Ddb();
            var c = Gdb(a, String(b));
            g.Vb(Z8) ? Hdb(c) : (Edb(), g.rc(Z8, function(d) {
                d(c)
            }))
        },
        a9 = function(a) {
            $8("CP", a)
        },
        Ddb = function() {
            Z8 || (Z8 = g.Ga("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", Z8))
        },
        Hdb = function(a) {
            var b = (b9 + 1) % 50;
            b9 = b;
            c9[b] = a;
            d9 || (d9 = 49 == b)
        },
        Edb = function() {
            var a = Z8;
            if (c9[0]) {
                var b = d9 ? b9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = c9[b];
                    g.rc(a, function(d) {
                        d(c)
                    })
                } while (b != b9);
                c9 = Array(50);
                b9 = -1;
                d9 = !1
            }
        },
        Gdb = function(a, b) {
            var c = (Date.now() - Idb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        e9 = function(a) {
            g.ez.call(this);
            this.I = a;
            this.screens = []
        },
        Jdb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Kdb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.xm(a.screens, function(f) {
                return !!Yab(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Jdb(a, b[d]) || c;
            return c
        },
        Ldb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.xm(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Mdb = function(a, b, c, d, e) {
            g.ez.call(this);
            this.B = a;
            this.J = b;
            this.C = c;
            this.I = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.xc = NaN
        },
        g9 = function(a) {
            e9.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            f9(this);
            this.info("Initializing with " + Vab(this.screens))
        },
        Ndb = function(a) {
            if (a.screens.length) {
                var b = g.Pk(a.screens, function(d) {
                        return d.id
                    }),
                    c = Y8(a.u, "/pairing/get_lounge_token_batch");
                vdb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ra)(a.rZ, a), (0, g.Ra)(a.qZ, a))
            }
        },
        f9 = function(a) {
            if (g.R("deprecate_pair_servlet_enabled")) return Kdb(a, []);
            var b = Uab(ebb());
            b = g.xm(b, function(c) {
                return !c.uuid
            });
            return Kdb(a, b)
        },
        h9 = function(a, b) {
            gbb(g.Pk(a.screens, Rab));
            b && fbb()
        },
        Pdb = function(a, b) {
            g.ez.call(this);
            this.I = b;
            b = (b = g.Sz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.Ub(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            Odb("Initialized with " + g.gi(this.j))
        },
        Qdb = function(a, b, c) {
            var d = Y8(a.D, "/pairing/get_screen_availability");
            vdb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ra)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ra)(function() {
                c(!1)
            }, a))
        },
        Sdb = function(a, b) {
            a: if (Kab(b) != Kab(a.j)) var c = !1;
                else {
                    c = g.sf(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.j[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Odb("Updated online screens: " + g.gi(a.j)), a.j = b, a.ma("screenChange"));Rdb(a)
        },
        i9 = function(a) {
            isNaN(a.B) || g.Bu(a.B);
            a.B = g.zu((0, g.Ra)(a.rK, a), 0 < a.C && a.C < g.Va() ? 2E4 : 1E4)
        },
        Odb = function(a) {
            $8("OnlineScreenService", a)
        },
        Tdb = function(a) {
            var b = {};
            g.rc(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.hf("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Rdb = function(a) {
            a = g.sf(g.nf(a.j, function(b) {
                return b
            }));
            g.nc(a);
            a.length ? g.Rz("yt-remote-online-screen-ids", a.join(","), 60) : g.Tz("yt-remote-online-screen-ids")
        },
        j9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            e9.call(this, "ScreenService");
            this.C = a;
            this.J = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            Udb(this)
        },
        Wdb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.nj(),
                l = c ? f8(h, c) : null;
            c && (a.J || l) || (l = f8(h, b));
            if (l) {
                l.uuid = b;
                var m = k9(a, l);
                Qdb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Vdb(a, c, (0, g.Ra)(function(n) {
                var p = k9(this, new c8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Qdb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        Xdb = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        Ydb = function(a, b, c) {
            Qdb(a.j, b, c)
        },
        Vdb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Eu(Y8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        Zdb = function(a) {
            a.screens = a.u.nj();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Vab(a.screens))
        },
        Udb = function(a) {
            $db(a);
            a.u = new g9(a.C);
            a.u.subscribe("screenChange", (0, g.Ra)(a.AZ, a));
            Zdb(a);
            a.J || (a.B = Uab(g.Sz("yt-remote-automatic-screen-cache") || []));
            $db(a);
            a.info("Initializing automatic screens: " + Vab(a.B));
            a.j = new Pdb(a.C, (0, g.Ra)(a.nj, a, !0));
            a.j.subscribe("screenChange", (0, g.Ra)(function() {
                this.ma("onlineScreenChange")
            }, a))
        },
        k9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = f8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || aeb(a));
            $db(a);
            a.D[b.uuid] = b.id;
            g.Rz("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        aeb = function(a) {
            a = g.xm(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Rz("yt-remote-automatic-screen-cache", g.Pk(a, Rab))
        },
        $db = function(a) {
            a.D = g.Sz("yt-remote-device-id-map") || {}
        },
        l9 = function(a, b, c) {
            g.ez.call(this);
            this.Ba = c;
            this.B = a;
            this.j = b;
            this.C = null
        },
        m9 = function(a, b) {
            a.C = b;
            a.ma("sessionScreen", a.C)
        },
        beb = function(a, b) {
            a.C && (a.C.token = b, k9(a.B, a.C));
            a.ma("sessionScreen", a.C)
        },
        n9 = function(a, b) {
            $8(a.Ba, b)
        },
        o9 = function(a, b, c) {
            l9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.oa = (0, g.Ra)(this.kV, this);
            this.ya = (0, g.Ra)(this.G3, this);
            this.ea = g.zu(function() {
                ceb(d, null)
            }, 12E4);
            this.J = this.D = this.I = this.S = 0;
            this.Aa = !1;
            this.Z = "unknown"
        },
        eeb = function(a, b) {
            g.Bu(a.J);
            a.J = 0;
            0 == b ? deb(a) : a.J = g.zu(function() {
                deb(a)
            }, b)
        },
        deb = function(a) {
            feb(a, "getLoungeToken");
            g.Bu(a.D);
            a.D = g.zu(function() {
                geb(a, null)
            }, 3E4)
        },
        feb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.gi());
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ra)(function() {
                n9(this, "Failed to send message: " + b + ".")
            }, a)) : n9(a, "Sending yt message without session: " + g.gi(c))
        },
        heb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.fP(b, function(c) {
                m9(a, c)
            }, function() {
                return a.Wh()
            }, 5)) : a.Wh(Error("Waiting for session status timed out."))
        },
        jeb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " +
                JSON.stringify(b));
            var d = new c8(b);
            ieb(a, d, function(e) {
                e ? (a.Aa = !0, k9(a.B, d), m9(a, d), a.Z = "unknown", eeb(a, c)) : (g.iu(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Wh())
            }, 5)
        },
        ceb = function(a, b) {
            g.Bu(a.ea);
            a.ea = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? jeb(a, {
                name: a.j.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.iu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), heb(a, b.screenId))) : (g.iu(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), heb(a, b.screenId)) : heb(a, b.screenId) : a.Wh(Error("Waiting for session status timed out."))
        },
        geb = function(a, b) {
            g.Bu(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Z = c, eeb(a, 3E4)) : (beb(a, b.loungeToken), a.Aa = !1, a.Z = "unknown", eeb(a, b.loungeTokenRefreshIntervalMs))
        },
        ieb = function(a, b, c, d) {
            g.Bu(a.I);
            a.I = 0;
            Ydb(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.zu(function() {
                    ieb(a, b, c, d - 1)
                }, 300)
            })
        },
        keb = function(a) {
            g.Bu(a.S);
            a.S = 0;
            g.Bu(a.I);
            a.I = 0;
            g.Bu(a.ea);
            a.ea = 0;
            g.Bu(a.D);
            a.D = 0;
            g.Bu(a.J);
            a.J = 0
        },
        p9 = function(a, b, c, d) {
            l9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.S = null;
            this.ya = "";
            this.Qa = c;
            this.La = null;
            this.ea = function() {};
            this.Z = NaN;
            this.Ia = (0, g.Ra)(this.lV, this);
            this.D = function() {};
            this.J = this.I = 0;
            this.oa = !1;
            this.Aa = "unknown"
        },
        q9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        leb = function(a) {
            a.D = a.B.AM(a.ya, a.j.label, a.j.friendlyName, q9(a), function(b, c) {
                a.D = function() {};
                a.oa = !0;
                m9(a, b);
                "shortLived" == b.idType && 0 < c && r9(a, c)
            }, function(b) {
                a.D = function() {};
                a.Wh(b)
            })
        },
        meb = function(a) {
            var b = {};
            b.pairingCode = a.ya;
            b.theme = a.Qa;
            ibb() && (b.env_useStageMdx = 1);
            return g.vi(b)
        },
        neb = function(a) {
            return new Promise(function(b) {
                a.ya = Wab();
                if (a.La) {
                    var c = new chrome.cast.DialLaunchResponse(!0, meb(a));
                    b(c);
                    leb(a)
                } else a.ea = function() {
                    g.Bu(a.Z);
                    a.ea = function() {};
                    a.Z = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, meb(a));
                    b(d);
                    leb(a)
                }, a.Z = g.zu(function() {
                    a.ea()
                }, 100)
            })
        },
        peb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new c8(b);
            return (new Promise(function(e) {
                oeb(a, d, function(f) {
                    f ? (a.oa = !0, k9(a.B, d), m9(a, d), r9(a, c)) : g.iu(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : neb(a)
            })
        },
        qeb = function(a, b) {
            var c = a.S.receiver.label,
                d = a.j.friendlyName;
            return (new Promise(function(e) {
                Wdb(a.B, c, b, d, function(f) {
                    f && f.token && m9(a, f);
                    e(f)
                }, function(f) {
                    n9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : neb(a)
            })
        },
        oeb = function(a, b, c, d) {
            g.Bu(a.I);
            a.I = 0;
            Ydb(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.zu(function() {
                    oeb(a, b, c, d - 1)
                }, 300)
            })
        },
        r9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            q9(a) && (g.Bu(a.J), a.J = 0, 0 == b ? reb(a) : a.J = g.zu(function() {
                reb(a)
            }, b))
        },
        reb = function(a) {
            q9(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Aa = c, r9(a, 3E4)) : (a.oa = !1, a.Aa = "unknown", beb(a, b.loungeToken), r9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Aa = "noLoungeTokenResponse";
                r9(a, 3E4)
            })
        },
        seb = function(a) {
            g.Bu(a.I);
            a.I = 0;
            g.Bu(a.J);
            a.J = 0;
            a.D();
            a.D = function() {};
            g.Bu(a.Z)
        },
        s9 = function(a, b) {
            l9.call(this, a, b, "ManualSession");
            this.u = g.zu((0, g.Ra)(this.ow, this, null), 150)
        },
        t9 = function(a, b) {
            g.ez.call(this);
            this.config_ = b;
            this.u = a;
            this.S = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.Z = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.j = null;
            this.J = !1;
            this.B = [];
            this.D = (0, g.Ra)(this.v2, this)
        },
        teb = function(a, b) {
            return b ? g.Sb(a.B, function(c) {
                return d8(b, c.label)
            }, a) : null
        },
        u9 = function(a) {
            $8("Controller", a)
        },
        Cdb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        v9 = function(a) {
            return a.J || !!a.B.length || !!a.j
        },
        w9 = function(a, b, c) {
            b != a.j && (g.$e(a.j), (a.j = b) ? (c ? a.ma("yt-remote-cast2-receiver-resumed",
                b.j) : a.ma("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Ra)(a.tR, a, b)), b.subscribe("sessionFailed", function() {
                return ueb(a, b)
            }), b.getScreen() ? a.ma("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.ow(null)) : a.ma("yt-remote-cast2-session-change", null))
        },
        ueb = function(a, b) {
            a.j == b && a.ma("yt-remote-cast2-session-failed")
        },
        veb = function(a) {
            var b = a.u.zM(),
                c = a.j && a.j.j;
            a = g.Pk(b, function(d) {
                c && d8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = teb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Ceb = function(a, b, c, d) {
            d.disableCastApi ? x9("Cannot initialize because disabled by Mdx config.") : web() ? xeb(b, d) && (yeb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? zeb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? zeb(a, c) : (y9("Failed to load cast API: " + f), Aeb(!1), yeb(!1), g.Tz("yt-remote-cast-available"), g.Tz("yt-remote-cast-receiver"),
                    Beb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Vz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= jbb() && sbb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? nbb() : 89 <= jbb() ? ubb() : (rbb(), k8(tbb.map(obb))))) : x9("Cannot initialize because not running Chrome")
        },
        Beb = function() {
            x9("dispose");
            var a = z9();
            a && a.dispose();
            g.Fa("yt.mdx.remote.cloudview.instance_", null);
            Deb(!1);
            g.Xx(Eeb);
            Eeb.length = 0
        },
        A9 = function() {
            return !!g.Sz("yt-remote-cast-installed")
        },
        Feb = function() {
            var a = g.Sz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Geb = function() {
            x9("clearCurrentReceiver");
            g.Tz("yt-remote-cast-receiver")
        },
        Heb = function() {
            return A9() ? z9() ? z9().getCastSession() : (y9("getCastSelector: Cast is not initialized."), null) : (y9("getCastSelector: Cast API is not installed!"), null)
        },
        Ieb = function() {
            A9() ? z9() ? B9() ? (x9("Requesting cast selector."), z9().requestSession()) : (x9("Wait for cast API to be ready to request the session."), Eeb.push(g.Wx("yt-remote-cast2-api-ready", Ieb))) : y9("requestCastSelector: Cast is not initialized.") : y9("requestCastSelector: Cast API is not installed!")
        },
        C9 = function(a, b) {
            B9() ? z9().setConnectedScreenStatus(a, b) : y9("setConnectedScreenStatus called before ready.")
        },
        web = function() {
            var a = 0 <= g.ob().search(/ (CrMo|Chrome|CriOS)\//);
            return g.eE || a
        },
        Jeb = function(a, b) {
            z9().init(a, b)
        },
        xeb = function(a, b) {
            var c = !1;
            z9() || (a = new t9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Rz("yt-remote-cast-available", d);
                a8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                x9("onReceiverSelected: " + d.friendlyName);
                g.Rz("yt-remote-cast-receiver", d);
                a8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                x9("onReceiverResumed: " + d.friendlyName);
                g.Rz("yt-remote-cast-receiver", d);
                a8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                x9("onSessionChange: " + e8(d));
                d || g.Tz("yt-remote-cast-receiver");
                a8("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            x9("cloudview.createSingleton_: " + c);
            return c
        },
        z9 = function() {
            return g.Ga("yt.mdx.remote.cloudview.instance_")
        },
        zeb = function(a, b) {
            Aeb(!0);
            yeb(!1);
            Jeb(a, function(c) {
                c ? (Deb(!0), g.Yx("yt-remote-cast2-api-ready")) : (y9("Failed to initialize cast API."), Aeb(!1), g.Tz("yt-remote-cast-available"), g.Tz("yt-remote-cast-receiver"), Beb());
                b(c)
            })
        },
        x9 = function(a) {
            $8("cloudview", a)
        },
        y9 = function(a) {
            $8("cloudview", a)
        },
        Aeb = function(a) {
            x9("setCastInstalled_ " + a);
            g.Rz("yt-remote-cast-installed", a)
        },
        B9 = function() {
            return !!g.Ga("yt.mdx.remote.cloudview.apiReady_")
        },
        Deb = function(a) {
            x9("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a)
        },
        yeb = function(a) {
            g.Fa("yt.mdx.remote.cloudview.initializing_", a)
        },
        D9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.Qm = !1;
            this.S = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        Keb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Qm = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Va();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.S = 0;
            a.B = NaN;
            a.u = !1
        },
        E9 = function(a) {
            return a.Sc() ? (g.Va() - a.I) / 1E3 : 0
        },
        F9 = function(a, b) {
            a.J = b;
            a.I = g.Va()
        },
        G9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Va() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        H9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Keb(a)
        },
        Leb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.If(a.trackData);
            b.hasPrevious = a.Qm;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.S;
            b.liveIngestionTime = a.B;
            return b
        },
        J9 = function(a, b) {
            g.ez.call(this);
            this.B = 0;
            this.C = a;
            this.I = [];
            this.D = new odb;
            this.u = this.j = null;
            this.Z = (0, g.Ra)(this.S0, this);
            this.J = (0, g.Ra)(this.Tz, this);
            this.S = (0, g.Ra)(this.R0, this);
            this.ea = (0, g.Ra)(this.V0, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.LK, this), Meb(this))) : c = 3;
            0 != c && (b ? this.LK(c) : g.zu((0, g.Ra)(function() {
                this.LK(c)
            }, this), 0));
            (a = Heb()) && I9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ea)
        },
        K9 = function(a) {
            return new D9(a.C.getPlayerContextData())
        },
        Meb = function(a) {
            g.rc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.I.push(this.C.subscribe(b, g.Sa(this.t2, b), this))
            }, a)
        },
        Neb = function(a) {
            g.rc(a.I, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.I.length = 0
        },
        L9 = function(a) {
            return 1 == a.getState()
        },
        M9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.enqueue(b)
        },
        Oeb = function(a, b, c) {
            var d = K9(a);
            F9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            N9(a, d)
        },
        O9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        N9 = function(a, b) {
            Neb(a);
            a.C.setPlayerContextData(Leb(b));
            Meb(a)
        },
        I9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.Z), a.u.removeMediaListener(a.J), a.Tz(null));
            a.u = b;
            a.u && (a9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.Z), a.u.addMediaListener(a.J), a.u.media.length && a.Tz(a.u.media[0]))
        },
        Peb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = K9(a);
                b.contentId != d.videoId && a9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                F9(d, a.j.getEstimatedTime());
                N9(a, d)
            } else a9("No cast media video. Ignoring state update.")
        },
        P9 = function(a, b, c) {
            return (0, g.Ra)(function(d) {
                this.hf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.hf("Retrying " + b + " using MDx browser channel."), O9(this, b, c))
            }, a)
        },
        S9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.ez.call(this);
            var e = this;
            this.I = NaN;
            this.ya = !1;
            this.Z = this.S = this.oa = this.Aa = NaN;
            this.ea = [];
            this.D = this.J = this.C = this.j = this.u = null;
            this.La = a;
            this.Ia = d;
            this.ea.push(g.Cx(window, "beforeunload", function() {
                e.Fv(2)
            }));
            this.B = [];
            this.j = new D9;
            this.Qa = b.id;
            this.Ba = b.idType;
            this.u = Bdb(this.La, c, this.EM, "shortLived" == this.Ba, this.Qa);
            this.u.Ra("channelOpened", function() {
                Qeb(e)
            });
            this.u.Ra("channelClosed", function() {
                Q9("Channel closed");
                isNaN(e.I) ? i8(!0) : i8();
                e.dispose()
            });
            this.u.Ra("channelError", function(f) {
                i8();
                isNaN(e.Wy()) ? (1 == f && "shortLived" == e.Ba && e.ma("browserChannelAuthError", f), Q9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.ya = !0, Q9("Channel error: " + f + " with reconnection in " + e.Wy() + " ms"), R9(e, 2))
            });
            this.u.Ra("channelMessage", function(f) {
                Reb(e, f)
            });
            this.u.Uo(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.Uz() && g.Rz("yt-remote-session-video-id", f)
            })
        },
        Seb = function(a) {
            return g.Sb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        Q9 = function(a) {
            $8("conn", a)
        },
        R9 = function(a, b) {
            a.ma("proxyStateChange", b)
        },
        Teb = function(a) {
            a.I = g.zu(function() {
                Q9("Connecting timeout");
                a.Fv(1)
            }, 2E4)
        },
        Ueb = function(a) {
            g.Bu(a.I);
            a.I = NaN
        },
        Veb = function(a) {
            g.Bu(a.Aa);
            a.Aa = NaN
        },
        Xeb = function(a) {
            Web(a);
            a.oa = g.zu(function() {
                T9(a, "getNowPlaying")
            }, 2E4)
        },
        Web = function(a) {
            g.Bu(a.oa);
            a.oa = NaN
        },
        Qeb = function(a) {
            Q9("Channel opened");
            a.ya && (a.ya = !1, Veb(a), a.Aa = g.zu(function() {
                Q9("Timing out waiting for a screen.");
                a.Fv(1)
            }, 15E3))
        },
        Zeb = function(a, b) {
            var c = null;
            if (b) {
                var d = Seb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Fa("yt.mdx.remote.remoteClient_", c);
            b && (Ueb(a), Veb(a));
            c = a.u.cw() && isNaN(a.I);
            b == c ? b && (R9(a, 1), T9(a, "getSubtitlesTrack")) : b ? (a.eP() && a.j.reset(), R9(a, 1), T9(a, "getNowPlaying"), Yeb(a)) : a.Fv(1)
        },
        $eb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Df(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ma("remotePlayerChange"))
        },
        afb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            H9(a.j, d, e);
            a.ma("remoteQueueChange", c)
        },
        cfb = function(a, b) {
            b.params = b.params || {};
            afb(a, b, "NOW_PLAYING_MAY_CHANGE");
            bfb(a, b);
            a.ma("autoplayDismissed")
        },
        bfb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            F9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.S = isNaN(c) ? 0 : c;
            a.j.Aj(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? Xeb(a) : Web(a);
            a.ma("remotePlayerChange")
        },
        dfb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                F9(a.j, isNaN(b) ? 0 : b);
                a.ma("remotePlayerChange")
            }
        },
        efb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ma("remotePlayerChange")
        },
        ffb = function(a, b) {
            a.J = b.params.videoId;
            a.ma("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        gfb = function(a, b) {
            a.J = b.params.videoId || null;
            a.ma("autoplayUpNext", a.J)
        },
        hfb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ma("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ma("autoplayDismissed")
        },
        ifb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Qm = "true" == b.params.hasPrevious;
            a.j.hasNext = c;
            a.ma("previousNextChange")
        },
        Reb = function(a, b) {
            b = b.message;
            b.params ? Q9("Received: action=" + b.action + ", params=" + g.gi(b.params)) : Q9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = $7(b.params.devices);
                    a.B = g.Pk(b, function(d) {
                        return new b8(d)
                    });
                    b = !!g.Sb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Zeb(a, b);
                    b = a.QP("mlm");
                    a.ma("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.$b(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Zeb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new b8($7(b.params.device));
                    g.Sb(a.B, function(d) {
                        return d.equals(c)
                    }) || Jab(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new b8($7(b.params.device));
                    g.$b(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    afb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    cfb(a, b);
                    break;
                case "onStateChange":
                    bfb(a, b);
                    break;
                case "onAdStateChange":
                    dfb(a, b);
                    break;
                case "onVolumeChanged":
                    efb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    $eb(a, b);
                    break;
                case "nowAutoplaying":
                    ffb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ma("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    gfb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    hfb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    ifb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ma("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ma("loopModeChange", b.params.loopMode);
                    break;
                default:
                    Q9("Unrecognized action: " + b.action)
            }
        },
        Yeb = function(a) {
            g.Bu(a.Z);
            a.Z = g.zu(function() {
                a.Fv(1)
            }, 864E5)
        },
        T9 = function(a, b, c) {
            c ? Q9("Sending: action=" + b + ", params=" + g.gi(c)) : Q9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        jfb = function(a) {
            e9.call(this, "ScreenServiceProxy");
            this.Uf = a;
            this.j = [];
            this.j.push(this.Uf.$_s("screenChange", (0, g.Ra)(this.pV, this)));
            this.j.push(this.Uf.$_s("onlineScreenChange", (0, g.Ra)(this.V1, this)))
        },
        ofb = function(a, b) {
            hbb();
            if (!j8 || !j8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.O("MDX_CONFIG") || b;
                Zab();
                cbb();
                U9 || (U9 = new X8(b ? b.loungeApiHost : void 0), ibb() && (U9.j = "/api/loungedev"));
                V9 || (V9 = g.Ga("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", V9));
                kfb();
                var c = W9();
                if (!c) {
                    var d = new j9(U9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Fa("yt.mdx.remote.screenService_", d);
                    c = W9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Fa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Ceb(a, d, function(f) {
                        f ? X9() && C9(X9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            a8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ga("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0), Y9("Initializing: " + g.gi(b)),
                    Z9.push(g.Wx("yt-remote-cast2-api-ready", function() {
                        a8("yt-remote-api-ready")
                    })), Z9.push(g.Wx("yt-remote-cast2-availability-change", function() {
                        a8("yt-remote-receiver-availability-change")
                    })), Z9.push(g.Wx("yt-remote-cast2-receiver-selected", function() {
                        $9(null);
                        a8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), Z9.push(g.Wx("yt-remote-cast2-receiver-resumed", function() {
                        a8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), Z9.push(g.Wx("yt-remote-cast2-session-change", lfb)), Z9.push(g.Wx("yt-remote-connection-change", function(f) {
                        f ? C9(X9(), "YouTube TV") : a$() || (C9(null, null), Geb())
                    })), Z9.push(g.Wx("yt-remote-cast2-session-failed", function() {
                        a8("yt-remote-connection-failed")
                    })), a = mfb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.R("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), Y9(" -- with channel params: " + g.gi(a)), a ? (g.Rz("yt-remote-session-app", a.app), g.Rz("yt-remote-session-name", a.name)) : (g.Tz("yt-remote-session-app"), g.Tz("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a), c.start(), X9() || nfb())
            }
        },
        pfb = function() {
            var a = W9().Uf.$_gos();
            var b = b$();
            b && c$() && (Yab(a, b) || a.push(b));
            return Xab(a)
        },
        rfb = function() {
            var a = qfb();
            !a && A9() && Feb() && (a = {
                key: "cast-selector-receiver",
                name: Feb()
            });
            return a
        },
        qfb = function() {
            var a = pfb(),
                b = b$();
            b || (b = a$());
            return g.Sb(a, function(c) {
                return b && d8(b, c.key) ? !0 : !1
            })
        },
        b$ = function() {
            var a = X9();
            if (!a) return null;
            var b = W9().nj();
            return f8(b, a)
        },
        lfb = function(a) {
            Y9("remote.onCastSessionChange_: " + e8(a));
            if (a) {
                var b = b$();
                if (b && b.id == a.id) {
                    if (C9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) d$ && (d$.token = a), (b = c$()) && b.Uo(a)
                } else b && e$(), f$(a, 1)
            } else c$() && e$()
        },
        e$ = function() {
            B9() ? z9().stopSession() : y9("stopSession called before API ready.");
            var a = c$();
            a && (a.disconnect(1), sfb(null))
        },
        tfb = function() {
            var a = c$();
            return !!a && 3 != a.getProxyState()
        },
        Y9 = function(a) {
            $8("remote", a)
        },
        W9 = function() {
            if (!ufb) {
                var a = g.Ga("yt.mdx.remote.screenService_");
                ufb = a ? new jfb(a) : null
            }
            return ufb
        },
        X9 = function() {
            return g.Ga("yt.mdx.remote.currentScreenId_")
        },
        vfb = function(a) {
            g.Fa("yt.mdx.remote.currentScreenId_", a)
        },
        wfb = function() {
            return g.Ga("yt.mdx.remote.connectData_")
        },
        $9 = function(a) {
            g.Fa("yt.mdx.remote.connectData_", a)
        },
        c$ = function() {
            return g.Ga("yt.mdx.remote.connection_")
        },
        sfb = function(a) {
            var b = c$();
            $9(null);
            a || vfb("");
            g.Fa("yt.mdx.remote.connection_", a);
            V9 && (g.rc(V9, function(c) {
                c(a)
            }), V9.length = 0);
            b && !a ? a8("yt-remote-connection-change", !1) : !b && a && a8("yt-remote-connection-change", !0)
        },
        a$ = function() {
            var a = g.Uz();
            if (!a) return null;
            var b = W9();
            if (!b) return null;
            b = b.nj();
            return f8(b, a)
        },
        f$ = function(a, b) {
            X9();
            b$() && b$();
            if (g$) d$ = a;
            else {
                vfb(a.id);
                var c = g.Ga("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new S9(U9, a, mfb(), c);
                a.connect(b, wfb());
                a.subscribe("beforeDisconnect", function(d) {
                    a8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    c$() && (c$(), sfb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = b$();
                    d && "shortLived" == d.idType && (B9() ? z9().handleBrowserChannelAuthError() : y9("refreshLoungeToken called before API ready."))
                });
                sfb(a)
            }
        },
        nfb = function() {
            var a = a$();
            a ? (Y9("Resume connection to: " + e8(a)), f$(a, 0)) : (i8(), Geb(), Y9("Skipping connecting because no session screen found."))
        },
        kfb = function() {
            var a = mfb();
            if (g.Df(a)) {
                a = h8();
                var b = g.Sz("yt-remote-session-name") || "",
                    c = g.Sz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Fa("yt.mdx.remote.channelParams_", a)
            }
        },
        mfb = function() {
            return g.Ga("yt.mdx.remote.channelParams_") || {}
        },
        zfb = function(a, b, c) {
            g.J.call(this);
            var d = this;
            this.j = a;
            this.G = b;
            this.uc = c;
            this.events = new g.aE(this);
            this.ea = this.events.T(this.G, "onVolumeChange", function(e) {
                xfb(d, e)
            });
            this.D = !1;
            this.I = new g.cK(64);
            this.u = new g.Zn(this.DS, 500, this);
            this.B = new g.Zn(this.ES, 1E3, this);
            this.S = new m8(this.i6, 0, this);
            this.C = {};
            this.Z = new g.Zn(this.sT, 1E3, this);
            this.J = new n8(this.seekTo, 1E3, this);
            g.M(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.G1);
            this.events.T(b, "captionschanged", this.P0);
            this.events.T(b, "captionssettingschanged", this.MS);
            this.events.T(b, "videoplayerreset", this.ID);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.uc.AO()
            });
            b.K("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                yfb(d.j) || h$(d) || i$(d, 0)
            });
            a = this.uc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.qR, this);
            a.subscribe("remotePlayerChange", this.Yz, this);
            a.subscribe("remoteQueueChange", this.ID, this);
            a.subscribe("previousNextChange", this.nR, this);
            a.subscribe("nowAutoplaying", this.hR, this);
            a.subscribe("autoplayDismissed", this.LQ, this);
            g.M(this, this.u);
            g.M(this, this.B);
            g.M(this, this.S);
            g.M(this, this.Z);
            g.M(this, this.J);
            this.MS();
            this.ID();
            this.Yz()
        },
        xfb = function(a, b) {
            if (h$(a)) {
                a.uc.unsubscribe("remotePlayerChange", a.Yz, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = K9(a.uc);
                if (c !== d.volume || b !== d.muted) a.uc.setVolume(c, b), a.Z.start();
                a.uc.subscribe("remotePlayerChange", a.Yz, a)
            }
        },
        Afb = function(a) {
            a.hc(0);
            a.u.stop();
            a.Xb(new g.cK(64))
        },
        Bfb = function(a, b) {
            if (h$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.Jf(c, b));
                a.uc.DM(a.G.getVideoData(1).videoId, c);
                a.C = K9(a.uc).trackData
            }
        },
        i$ = function(a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.uc.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, Iab(c));
            a.Xb(new g.cK(1))
        },
        Cfb = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    HP: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.D = !1) : (a.G.loadModule("captions"), a.D = !0)
            } else a.G.setOption("captions", "track", {})
        },
        h$ = function(a) {
            return K9(a.uc).videoId === a.G.getVideoData(1).videoId
        },
        j$ = function() {
            g.W.call(this, {
                F: "div",
                N: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                W: [{
                    F: "div",
                    N: "ytp-mdx-popup-dialog-inner-content",
                    W: [{
                            F: "div",
                            N: "ytp-mdx-popup-title",
                            qa: "Vous \u00eates d\u00e9connect\u00e9"
                        }, {
                            F: "div",
                            N: "ytp-mdx-popup-description",
                            qa: "Les vid\u00e9os que vous visionnez peuvent \u00eatre ajout\u00e9es \u00e0 l'historique des vid\u00e9os regard\u00e9es sur votre t\u00e9l\u00e9viseur et avoir une influence sur les recommandations qui vous sont faites. Pour \u00e9viter ce probl\u00e8me, annulez et connectez-vous \u00e0 YouTube sur un ordinateur."
                        },
                        {
                            F: "div",
                            N: "ytp-mdx-privacy-popup-buttons",
                            W: [{
                                F: "button",
                                Ga: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                qa: "Annuler"
                            }, {
                                F: "button",
                                Ga: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                qa: "Confirmer"
                            }]
                        }
                    ]
                }]
            });
            this.j = new g.ML(this, 250);
            this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
            g.M(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        k$ = function(a) {
            g.W.call(this, {
                F: "div",
                N: "ytp-remote",
                W: [{
                    F: "div",
                    N: "ytp-remote-display-status",
                    W: [{
                        F: "div",
                        N: "ytp-remote-display-status-icon",
                        W: [g.TEa()]
                    }, {
                        F: "div",
                        N: "ytp-remote-display-status-text",
                        qa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.ML(this, 250);
            g.M(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Tc(a.Cb())
        },
        l$ = function(a, b) {
            g.lR.call(this, "Lire sur", 1, a, b);
            this.G = a;
            this.Hq = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        Dfb = function(a) {
            g.fO.call(this, a);
            this.jn = {
                key: Wab(),
                name: "Cet ordinateur"
            };
            this.Tj = null;
            this.subscriptions = [];
            this.cK = this.uc = null;
            this.Hq = [this.jn];
            this.Ep = this.jn;
            this.je = new g.cK(64);
            this.bQ = 0;
            this.Jg = -1;
            this.gA = !1;
            this.eA = this.Iw = null;
            if (!g.XF(this.player.V()) && !g.YF(this.player.V())) {
                a = this.player;
                var b = g.uN(a);
                b && (b = b.Jm()) && (b = new l$(a, b), g.M(this, b));
                b = new k$(a);
                g.M(this, b);
                g.EN(a, b.element, 4);
                this.Iw = new j$;
                g.M(this, this.Iw);
                g.EN(a, this.Iw.element, 4);
                this.gA = !!a$()
            }
        },
        m$ = function(a) {
            a.eA && (a.player.removeEventListener("presentingplayerstatechange",
                a.eA), a.eA = null)
        },
        Efb = function(a, b, c) {
            a.je = c;
            a.player.ma("presentingplayerstatechange", new g.vJ(c, b))
        },
        n$ = function(a, b) {
            if (b.key !== a.Ep.key)
                if (b.key === a.jn.key) e$();
                else if (yfb(a) && Ffb(a), a.Ep = b, !a.player.V().K("disable_mdx_connection_in_mdx_module_for_music_web") || !g.YF(a.player.V())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().K("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.aO(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.ya,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Iab(d)) && (a.locationInfo = d);
                    d = a
                }
                Y9("Connecting to: " + g.gi(b));
                "cast-selector-receiver" == b.key ? ($9(d || null), b = d || null, B9() ? z9().setLaunchParams(b) : y9("setLaunchParams called before ready.")) : !d && tfb() && X9() == b.key ? a8("yt-remote-connection-change", !0) : (e$(), $9(d || null), d = W9().nj(), (b = f8(d, b.key)) && f$(b, 1))
            }
        },
        yfb = function(a) {
            var b;
            (b = !a.player.V().K("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.O("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.O("SESSION_INDEX") && !g.O("LOGGED_IN"))) || a.gA || !a.Iw);
            return b ? !1 : g.oG(a.player.V()) || g.rG(a.player.V())
        },
        Ffb = function(a) {
            a.player.Cb().Sc() ? a.player.pauseVideo() : (a.eA = function(b) {
                !a.gA && g.xJ(b, 8) && (a.player.pauseVideo(), m$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.eA));
            a.Iw && a.Iw.td();
            c$() || (g$ = !0)
        };
    g.fq.prototype.Pp = g.ba(1, function() {
        return g.nd(this, 6)
    });
    g.he.prototype.oB = g.ba(0, function() {
        var a = g.oe(this);
        return 4294967296 * g.oe(this) + (a >>> 0)
    });
    var uab, Gfb = g.Re(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.E(b, c, g.pe(a.j));
            return !0
        }, g.Se),
        Hfb = g.Re(function(a, b, c, d) {
            if (1 !== a.u) return !1;
            g.Cd(b, c, d, g.pe(a.j));
            return !0
        }, g.Se),
        Ifb = g.Re(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.je(a.j));
            return !0
        }, g.Te),
        Jfb = g.Re(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.Cd(b, c, d, g.je(a.j));
            return !0
        }, g.Te),
        Kfb = g.Re(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.ne(a.j));
            return !0
        }, g.Ue),
        Lfb = g.Re(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.Cd(b, c, d, g.ne(a.j));
            return !0
        }, g.Ue),
        Mfb = g.Re(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.E(b, c, a.j.oB());
            return !0
        }, function(a, b, c) {
            wab(a, c, g.nd(b, c))
        }),
        Nfb = g.Re(function(a, b, c) {
            if (1 !== a.u && 2 !== a.u) return !1;
            b = g.rd(b, c);
            if (2 == a.u) {
                c = g.he.prototype.oB;
                var d = g.ne(a.j) >>> 0;
                for (d = a.j.j + d; a.j.j < d;) b.push(c.call(a.j))
            } else b.push(a.j.oB());
            return !0
        }, function(a, b, c) {
            b = g.rd(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) wab(a, c, b[d])
        }),
        Ofb = g.Re(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.E(b, c, g.se(a.j));
            return !0
        }, xab),
        Pfb = g.Re(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.Cd(b, c, d, g.se(a.j));
            return !0
        }, xab),
        Qfb = g.Re(function(a, b, c) {
            if (2 !== a.u) return !1;
            a = g.ye(a);
            g.Ad(b, c, a);
            return !0
        }, function(a, b, c) {
            b = g.rd(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && g.Fe(a, c, g.uaa(e))
                }
        }),
        Rfb = g.Re(function(a, b, c, d) {
            if (2 !== a.u) return !1;
            g.Cd(b, c, d, g.ye(a));
            return !0
        }, g.oca),
        Sfb = g.Re(function(a, b, c, d, e) {
            if (2 !== a.u) return !1;
            g.ve(a, g.vba(b, d, c), e);
            return !0
        }, g.pca),
        yab = [1];
    g.v(zab, g.I);
    g.v(Aab, g.I);
    var Tfb = [zab, 1, g.O2, [Aab, 1, Gfb, 2, Ifb]];
    g.v(Bab, g.I);
    g.v(Cab, g.I);
    g.v(Dab, g.I);
    var Ufb = [1, 2],
        Vfb = [g.Th, 1, g.N2, 5, Mfb, 2, Sfb, [Bab, 1, g.P2, [Cab, 1, g.N2, 2, g.N2, 3, Ofb], Ufb, 2, g.P2, [Dab, 1, g.N2, 2, g.N2, 3, Kfb, 4, Ofb], Ufb], 3, Qfb, 6, Nfb, 4, g.O2, [g.Uh, 1, g.O2, [g.Vh, 1, Rfb, g.Yh, 2, Lfb, g.Yh, 3, Pfb, g.Yh], 2, Sfb, [g.Wh, 1, Jfb, g.Xh, 2, Hfb, g.Xh, 3, g.P2, Tfb, g.Xh]]],
        Ncb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        O8 = {
            "'": "\\'"
        },
        Qab = {
            yda: "atp",
            LSa: "ska",
            sPa: "que",
            wGa: "mus",
            KSa: "sus",
            nua: "dsp",
            MQa: "seq",
            NFa: "mic",
            kna: "dpa",
            vea: "cds",
            mGa: "mlm",
            fna: "dsdtr",
            NHa: "ntb"
        };
    b8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var j8, bbb = "",
        qbb = kbb("loadCastFramework") || kbb("loadCastApplicationFramework"),
        tbb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Wa(m8, g.J);
    g.k = m8.prototype;
    g.k.OU = function(a) {
        this.C = arguments;
        this.j = !1;
        this.xc ? this.B = g.Va() + this.wh : this.xc = g.Qh(this.D, this.wh)
    };
    g.k.stop = function() {
        this.xc && (g.C.clearTimeout(this.xc), this.xc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C)))
    };
    g.k.ra = function() {
        this.stop();
        m8.Qe.ra.call(this)
    };
    g.k.PU = function() {
        this.xc && (g.C.clearTimeout(this.xc), this.xc = null);
        this.B ? (this.xc = g.Qh(this.D, this.B - g.Va()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C))
    };
    g.v(n8, g.J);
    g.k = n8.prototype;
    g.k.vF = function(a) {
        this.B = arguments;
        this.xc || this.u ? this.j = !0 : Fbb(this)
    };
    g.k.stop = function() {
        this.xc && (g.C.clearTimeout(this.xc), this.xc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.xc || (this.j = !1, Fbb(this))
    };
    g.k.ra = function() {
        g.J.prototype.ra.call(this);
        this.stop()
    };
    o8.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    o8.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    g.Wa(Gbb, g.cf);
    g.Wa(Hbb, g.cf);
    var Kbb = !1;
    var Mbb = null;
    g.Wa(Obb, g.cf);
    g.Wa(Pbb, g.cf);
    g.Wa(Qbb, g.cf);
    Rbb.prototype.info = function() {};
    Rbb.prototype.warning = function() {};
    var Ybb = {},
        u8 = {};
    g.k = s8.prototype;
    g.k.setTimeout = function(a) {
        this.Fb = a
    };
    g.k.SU = function(a) {
        a = a.target;
        var b = this.Ya;
        b && 3 == g.Ei(a) ? b.vF() : this.hM(a)
    };
    g.k.hM = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Ei(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.uG || this.j && (this.u.u || g.Gi(this.j) || g.Hi(this.j)))) {
                    this.Ia || 4 != b || 7 == c || (8 == c || 0 >= d ? p8(3) : p8(2));
                    x8(this);
                    var e = this.j.getStatus();
                    this.Rb = e;
                    b: if (Wbb(this)) {
                        var f = g.Hi(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Ei(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                v8(this);
                                w8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.C.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.ea = 0;
                        m = this.u.j
                    } else m = g.Gi(this.j);
                    if (this.B = 200 == e) {
                        if (this.lc && !this.Va) {
                            b: {
                                if (this.j) {
                                    var n = g.Ii(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.db(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Va = !0,
                            Zbb(this, e);
                            else {
                                this.B = !1;
                                this.I = 3;
                                q8(12);
                                v8(this);
                                w8(this);
                                break a
                            }
                        }
                        this.Ba ? ($bb(this, b, m), g.uG && this.B && 3 == b && (this.kb.Ra(this.ob, "tick", this.RU), this.ob.start())) : Zbb(this, m);
                        4 == b && v8(this);
                        this.B && !this.Ia && (4 == b ? bcb(this.D, this) : (this.B = !1, t8(this)))
                    } else g.Vea(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.I = 3, q8(12)) : (this.I = 0, q8(13)), v8(this), w8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.RU = function() {
        if (this.j) {
            var a = g.Ei(this.j),
                b = g.Gi(this.j);
            this.ea < b.length && (x8(this), $bb(this, a, b), this.B && 4 != a && t8(this))
        }
    };
    g.k.cancel = function() {
        this.Ia = !0;
        v8(this)
    };
    g.k.QU = function() {
        this.Z = null;
        var a = Date.now();
        0 <= a - this.Kb ? (2 != this.Qa && (p8(3), q8(17)), v8(this), this.I = 2, w8(this)) : acb(this, this.Kb - a)
    };
    g.k.getLastError = function() {
        return this.I
    };
    kcb.prototype.cancel = function() {
        this.B = mcb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.r(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = qcb.prototype;
    g.k.iM = 8;
    g.k.vg = 1;
    g.k.connect = function(a, b, c, d) {
        this.kf && g.Fh((0, g.Ra)(this.B4, this, a));
        q8(0);
        this.zc = a;
        this.Ia = b || {};
        c && void 0 !== d && (this.Ia.OSID = c, this.Ia.OAID = d);
        this.ob = this.Ac;
        this.La = gcb(this, null, this.zc);
        B8(this)
    };
    g.k.disconnect = function() {
        scb(this);
        if (3 == this.vg) {
            var a = this.Ya++,
                b = this.La.clone();
            g.Mj(b, "SID", this.C);
            g.Mj(b, "RID", a);
            g.Mj(b, "TYPE", "terminate");
            E8(this, b);
            a = new s8(this, this.C, a);
            a.Qa = 2;
            a.J = Y7(b.clone());
            b = !1;
            g.C.navigator && g.C.navigator.sendBeacon && (b = g.C.navigator.sendBeacon(a.J.toString(), ""));
            !b && g.C.Image && ((new Image).src = a.J, b = !0);
            b || (a.j = Vbb(a.D, null), a.j.send(a.J));
            a.Aa = Date.now();
            t8(a)
        }
        ycb(this)
    };
    g.k.B4 = function(a) {
        try {
            Lbb(a, function() {})
        } catch (b) {}
    };
    g.k.Wf = function() {
        return 0 == this.vg
    };
    g.k.getState = function() {
        return this.vg
    };
    g.k.kM = function(a) {
        if (this.I)
            if (this.I = null, 1 == this.vg) {
                if (!a) {
                    this.Ya = Math.floor(1E5 * Math.random());
                    a = this.Ya++;
                    var b = new s8(this, "", a),
                        c = this.Z;
                    this.Kb && (c ? (c = g.Hf(c), g.Jf(c, this.Kb)) : c = this.Kb);
                    null !== this.J || this.yb || (b.La = c, c = null);
                    var d;
                    if (this.Fb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = vcb(this, b, d);
                    e = this.La.clone();
                    g.Mj(e, "RID", a);
                    g.Mj(e, "CVER", 22);
                    this.Ba && g.Mj(e, "X-HTTP-Session-Id", this.Ba);
                    E8(this, e);
                    c && (this.yb ? d = "headers=" + g.Sg(g.ega(c)) + "&" + d : this.J && g.Qj(e, this.J, c));
                    fcb(this.u, b);
                    this.Ih && g.Mj(e, "TYPE", "init");
                    this.Fb ? (g.Mj(e, "$req", d), g.Mj(e, "SID", "null"), b.lc = !0, Ubb(b, e, null)) : Ubb(b, e, d);
                    this.vg = 2
                }
            } else 3 == this.vg && (a ? wcb(this, a) : 0 == this.B.length || lcb(this.u) || wcb(this))
    };
    g.k.jM = function() {
        this.S = null;
        xcb(this);
        if (this.Lc && !(this.kb || null == this.j || 0 >= this.Fd)) {
            var a = 2 * this.Fd;
            this.ya = r8((0, g.Ra)(this.O0, this), a)
        }
    };
    g.k.O0 = function() {
        this.ya && (this.ya = null, this.ob = !1, this.kb = !0, q8(10), z8(this), xcb(this))
    };
    g.k.AJ = function(a) {
        this.j == a && this.Lc && !this.kb && (rcb(this), this.kb = !0, q8(11))
    };
    g.k.TU = function() {
        null != this.ea && (this.ea = null, z8(this), dcb(this), q8(19))
    };
    g.k.E5 = function(a) {
        a ? q8(2) : q8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Acb.prototype;
    g.k.oM = function() {};
    g.k.nM = function() {};
    g.k.mM = function() {};
    g.k.lM = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.UU = function() {};
    g.Wa(G8, g.Vf);
    G8.prototype.open = function() {
        this.j.D = this.C;
        this.J && (this.j.Qa = !0);
        this.j.connect(this.I, this.u || void 0)
    };
    G8.prototype.close = function() {
        this.j.disconnect()
    };
    G8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.gi(a), a = c);
        b.B.push(new jcb(b.Ue++, a));
        3 == b.vg && B8(b)
    };
    G8.prototype.ra = function() {
        this.j.D = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        G8.Qe.ra.call(this)
    };
    g.Wa(Ccb, Gbb);
    g.Wa(Dcb, Hbb);
    g.Wa(F8, Acb);
    F8.prototype.oM = function() {
        this.j.dispatchEvent("m")
    };
    F8.prototype.nM = function(a) {
        this.j.dispatchEvent(new Ccb(a))
    };
    F8.prototype.mM = function(a) {
        this.j.dispatchEvent(new Dcb(a))
    };
    F8.prototype.lM = function() {
        this.j.dispatchEvent("n")
    };
    var I8 = new g.Vf;
    g.v(Gcb, g.cf);
    g.k = K8.prototype;
    g.k.xr = null;
    g.k.Jn = !1;
    g.k.Cu = null;
    g.k.xF = null;
    g.k.Au = null;
    g.k.Bu = null;
    g.k.gp = null;
    g.k.ip = null;
    g.k.yr = null;
    g.k.Hh = null;
    g.k.jB = 0;
    g.k.Il = null;
    g.k.iB = null;
    g.k.hp = null;
    g.k.Dx = -1;
    g.k.rS = !0;
    g.k.wr = !1;
    g.k.wF = 0;
    g.k.hB = null;
    var Lcb = {},
        Kcb = {};
    g.k = K8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.WU = function(a) {
        a = a.target;
        var b = this.hB;
        b && 3 == g.Ei(a) ? b.vF() : this.pM(a)
    };
    g.k.pM = function(a) {
        try {
            if (a == this.Hh) a: {
                var b = g.Ei(this.Hh),
                    c = this.Hh.u,
                    d = this.Hh.getStatus();
                if (g.Bc && !g.yc(10) || g.hf && !g.xc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Gi(this.Hh)) break a;this.wr || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.yl(3) : this.j.yl(2));Qcb(this);
                var e = this.Hh.getStatus();this.Dx = e;
                var f = g.Gi(this.Hh);
                if (this.Jn = 200 == e) {
                    4 == b && M8(this);
                    if (this.Ba) {
                        for (a = !0; !this.wr && this.jB < f.length;) {
                            var h = Mcb(this, f);
                            if (h == Kcb) {
                                4 == b && (this.hp = 4, J8(15), a = !1);
                                break
                            } else if (h == Lcb) {
                                this.hp = 4;
                                J8(16);
                                a = !1;
                                break
                            } else Rcb(this, h)
                        }
                        4 == b && 0 == f.length && (this.hp = 1, J8(17), a = !1);
                        this.Jn = this.Jn && a;
                        a || (M8(this), N8(this))
                    } else Rcb(this, f);
                    this.Jn && !this.wr && (4 == b ? this.j.kB(this) : (this.Jn = !1, L8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.hp = 3, J8(13)) : (this.hp = 0, J8(14)),
                M8(this),
                N8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.w3 = function(a) {
        H8((0, g.Ra)(this.v3, this, a), 0)
    };
    g.k.v3 = function(a) {
        this.wr || (Qcb(this), Rcb(this, a), L8(this))
    };
    g.k.vR = function(a) {
        H8((0, g.Ra)(this.u3, this, a), 0)
    };
    g.k.u3 = function(a) {
        this.wr || (M8(this), this.Jn = a, this.j.kB(this), this.j.yl(4))
    };
    g.k.cancel = function() {
        this.wr = !0;
        M8(this)
    };
    g.k.VU = function() {
        this.Cu = null;
        var a = Date.now();
        0 <= a - this.xF ? (2 != this.Bu && this.j.yl(3), M8(this), this.hp = 2, J8(18), N8(this)) : Pcb(this, this.xF - a)
    };
    g.k.getLastError = function() {
        return this.hp
    };
    g.k = Ucb.prototype;
    g.k.zF = null;
    g.k.wi = null;
    g.k.eE = !1;
    g.k.GS = null;
    g.k.oC = null;
    g.k.OI = null;
    g.k.AF = null;
    g.k.Oj = null;
    g.k.Kn = -1;
    g.k.Ex = null;
    g.k.by = null;
    g.k.connect = function(a) {
        this.AF = a;
        a = Q8(this.j, null, this.AF);
        J8(3);
        this.GS = Date.now();
        var b = this.j.S;
        null != b ? (this.Ex = b[0], (this.by = b[1]) ? (this.Oj = 1, Vcb(this)) : (this.Oj = 2, Wcb(this))) : (Z7(a, "MODE", "init"), this.wi = new K8(this), this.wi.xr = this.zF, Jcb(this.wi, a, !1, null, !0), this.Oj = 0)
    };
    g.k.UX = function(a) {
        if (a) this.Oj = 2, Wcb(this);
        else {
            J8(4);
            var b = this.j;
            b.Nl = b.Cp.Kn;
            U8(b, 9)
        }
        a && this.yl(2)
    };
    g.k.yF = function(a) {
        return this.j.yF(a)
    };
    g.k.abort = function() {
        this.wi && (this.wi.cancel(), this.wi = null);
        this.Kn = -1
    };
    g.k.Wf = function() {
        return !1
    };
    g.k.qM = function(a, b) {
        this.Kn = a.Dx;
        if (0 == this.Oj)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Nl = this.Kn;
                    U8(a, 2);
                    return
                }
                this.Ex = c[0];
                this.by = c[1]
            } else a = this.j, a.Nl = this.Kn, U8(a, 2);
        else if (2 == this.Oj)
            if (this.eE) J8(7), this.OI = Date.now();
            else if ("11111" == b) {
            if (J8(6), this.eE = !0, this.oC = Date.now(), a = this.oC - this.GS, !g.Bc || g.yc(10) || 500 > a) this.Kn = 200, this.wi.cancel(), J8(12), R8(this.j, this, !0)
        } else J8(8), this.oC = this.OI = Date.now(), this.eE = !1
    };
    g.k.kB = function() {
        this.Kn = this.wi.Dx;
        if (this.wi.Jn) 0 == this.Oj ? this.by ? (this.Oj = 1, Vcb(this)) : (this.Oj = 2, Wcb(this)) : 2 == this.Oj && ((!g.Bc || g.yc(10) ? !this.eE : 200 > this.OI - this.oC) ? (J8(11), R8(this.j, this, !1)) : (J8(12), R8(this.j, this, !0)));
        else {
            0 == this.Oj ? J8(9) : 2 == this.Oj && J8(10);
            var a = this.j;
            this.wi.getLastError();
            a.Nl = this.Kn;
            U8(a, 2)
        }
    };
    g.k.Fx = function() {
        return this.j.Fx()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.yl = function(a) {
        this.j.yl(a)
    };
    g.k = Xcb.prototype;
    g.k.Ml = null;
    g.k.Gx = null;
    g.k.Fi = null;
    g.k.Jf = null;
    g.k.BF = null;
    g.k.lB = null;
    g.k.rM = null;
    g.k.mB = null;
    g.k.Hx = 0;
    g.k.YU = 0;
    g.k.nh = null;
    g.k.jp = null;
    g.k.Ln = null;
    g.k.Ar = null;
    g.k.Cp = null;
    g.k.SE = null;
    g.k.Fu = -1;
    g.k.sM = -1;
    g.k.Nl = -1;
    g.k.Eu = 0;
    g.k.Du = 0;
    g.k.zr = 8;
    g.Wa(Zcb, g.cf);
    g.Wa($cb, g.cf);
    g.k = Xcb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        J8(0);
        this.BF = b;
        this.Gx = c || {};
        d && void 0 !== e && (this.Gx.OSID = d, this.Gx.OAID = e);
        this.J ? (H8((0, g.Ra)(this.nO, this, a), 100), bdb(this)) : this.nO(a)
    };
    g.k.disconnect = function() {
        cdb(this);
        if (3 == this.j) {
            var a = this.Hx++,
                b = this.lB.clone();
            g.Mj(b, "SID", this.C);
            g.Mj(b, "RID", a);
            g.Mj(b, "TYPE", "terminate");
            T8(this, b);
            a = new K8(this, this.C, a);
            a.Bu = 2;
            a.gp = Y7(b.clone());
            (new Image).src = a.gp.toString();
            a.Au = Date.now();
            L8(a)
        }
        mdb(this)
    };
    g.k.nO = function(a) {
        this.Cp = new Ucb(this);
        this.Cp.zF = this.Ml;
        this.Cp.u = this.D;
        this.Cp.connect(a)
    };
    g.k.Wf = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.uM = function(a) {
        this.jp = null;
        hdb(this, a)
    };
    g.k.tM = function() {
        this.Ln = null;
        this.Jf = new K8(this, this.C, "rpc", this.I);
        this.Jf.xr = this.Ml;
        this.Jf.wF = 0;
        var a = this.rM.clone();
        g.Mj(a, "RID", "rpc");
        g.Mj(a, "SID", this.C);
        g.Mj(a, "CI", this.SE ? "0" : "1");
        g.Mj(a, "AID", this.Fu);
        T8(this, a);
        if (!g.Bc || g.yc(10)) g.Mj(a, "TYPE", "xmlhttp"), Jcb(this.Jf, a, !0, this.mB, !1);
        else {
            g.Mj(a, "TYPE", "html");
            var b = this.Jf,
                c = !!this.mB;
            b.Bu = 3;
            b.gp = Y7(a.clone());
            Ocb(b, c)
        }
    };
    g.k.qM = function(a, b) {
        if (0 != this.j && (this.Jf == a || this.Fi == a))
            if (this.Nl = a.Dx, this.Fi == a && 3 == this.j)
                if (7 < this.zr) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Ln) {
                                if (this.Jf)
                                    if (this.Jf.Au + 3E3 < this.Fi.Au) S8(this), this.Jf.cancel(), this.Jf = null;
                                    else break a;
                                kdb(this);
                                J8(19)
                            }
                        }
                    else this.sM = a[1], 0 < this.sM - this.Fu && 37500 > a[2] && this.SE && 0 == this.Du && !this.Ar && (this.Ar = H8((0, g.Ra)(this.ZU, this), 6E3));
                    else U8(this, 11)
                } else null != b && U8(this, 11);
        else if (this.Jf ==
            a && S8(this), !g.db(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Fu = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.mB = c[2], c = c[3], null != c ? this.zr = c : this.zr = 6, this.j = 3, this.nh && this.nh.xM(), this.rM = Q8(this, this.Fx() ? this.mB : null, this.BF), idb(this)) : "stop" == c[0] && U8(this, 7) : 3 == this.j && ("stop" == c[0] ? U8(this, 7) : "noop" != c[0] && this.nh && this.nh.wM(c), this.Du = 0)
    };
    g.k.ZU = function() {
        null != this.Ar && (this.Ar = null, this.Jf.cancel(), this.Jf = null, kdb(this), J8(20))
    };
    g.k.kB = function(a) {
        if (this.Jf == a) {
            S8(this);
            this.Jf = null;
            var b = 2
        } else if (this.Fi == a) this.Fi = null, b = 1;
        else return;
        this.Nl = a.Dx;
        if (0 != this.j)
            if (a.Jn)
                if (1 == b) {
                    b = Date.now() - a.Au;
                    var c = I8;
                    c.dispatchEvent(new Zcb(c, a.yr ? a.yr.length : 0, b, this.Eu));
                    adb(this);
                    this.B.length = 0
                } else idb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Nl)) {
                if (d = 1 == b) this.Fi || this.jp || 1 == this.j || 2 <= this.Eu ? d = !1 : (this.jp = H8((0, g.Ra)(this.uM, this, a), jdb(this, this.Eu)), this.Eu++, d = !0);
                d = !(d || 2 == b && kdb(this))
            }
            if (d) switch (c) {
                case 1:
                    U8(this,
                        5);
                    break;
                case 4:
                    U8(this, 10);
                    break;
                case 3:
                    U8(this, 6);
                    break;
                case 7:
                    U8(this, 12);
                    break;
                default:
                    U8(this, 2)
            }
        }
    };
    g.k.XU = function(a) {
        if (!g.Ub(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.D5 = function(a) {
        a ? J8(2) : (J8(1), ldb(this, 8))
    };
    g.k.yF = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Bi;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.nh && this.nh.isActive(this)
    };
    g.k.yl = function(a) {
        var b = I8;
        b.dispatchEvent(new $cb(b, a))
    };
    g.k.Fx = function() {
        return !(!g.Bc || g.yc(10))
    };
    g.k = ndb.prototype;
    g.k.xM = function() {};
    g.k.wM = function() {};
    g.k.vM = function() {};
    g.k.CF = function() {};
    g.k.yM = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = odb.prototype;
    g.k.enqueue = function(a) {
        this.u.push(a)
    };
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Ub(this.j, a) || g.Ub(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.MXa)(b, a);
        0 <= c ? (g.Wb(b, c), b = !0) : b = !1;
        return b || g.Zb(this.u, a)
    };
    g.k.bk = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.v(pdb, g.cf);
    g.v(qdb, g.cf);
    g.Wa(V8, g.J);
    g.k = V8.prototype;
    g.k.n3 = function() {
        this.wh = Math.min(3E5, 2 * this.wh);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.wh + 15E3 * Math.random();
        g.$n(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.wh = 5E3
    };
    sdb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.R("enable_client_streamz_web")) {
            a = g.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.mea(c.value), c = {
                serializedIncrementBatch: g.zc(g.Qe(c, Vfb))
            }, g.dpa("streamzIncremented", c, {
                FK: b
            })
        }
    };
    var W8;
    g.Wa(tdb, ndb);
    g.k = tdb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Pg = function(a) {
        return this.B.Pg(a)
    };
    g.k.ma = function(a, b) {
        return this.B.ma.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.$e(this.B), this.disconnect(), g.$e(this.u), this.u = null, this.oa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Z = "";
            this.u.stop();
            this.I = a || null;
            this.D = b || 0;
            a = this.Aa + "/test";
            b = this.Aa + "/bind";
            var d = new Xcb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa),
                e = this.j;
            e && (e.nh = null);
            d.nh = this;
            this.j = d;
            udb(this);
            if (this.j) {
                d = g.O("ID_TOKEN");
                var f = this.j.Ml || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Ml = f
            }
            e ? (3 != e.getState() && 0 == edb(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.Fu)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function(a) {
        this.S = a || 0;
        this.u.stop();
        udb(this);
        this.j && (3 == this.j.getState() && hdb(this.j), this.j.disconnect());
        this.S = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Jf(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.cw() && (udb(this), ddb(this.j, a))
    };
    g.k.xM = function() {
        this.u.reset();
        this.I = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) ddb(this.j, a[b])
        }
        this.ma("handlerOpened");
        wbb(this.La, "BROWSER_CHANNEL")
    };
    g.k.vM = function(a) {
        var b = 2 == a && 401 == this.j.Nl;
        4 == a || b || this.u.start();
        this.ma("handlerError", a, b);
        Cbb(this.Ba, "BROWSER_CHANNEL")
    };
    g.k.CF = function(a, b) {
        if (!this.u.isActive()) this.ma("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        ybb(this.ya, "BROWSER_CHANNEL");
        a && this.Ya.j.FF("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.eb.j.FF("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.yM = function() {
        var a = {
            v: 2
        };
        this.Z && (a.gsessionid = this.Z);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.S && (a.ui = "" + this.S);
        this.I && g.Jf(a, this.I);
        return a
    };
    g.k.wM = function(a) {
        "S" == a[0] ? this.Z = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ma("handlerMessage", new rdb(a[0], a[1]));
        Abb(this.Ia, "BROWSER_CHANNEL")
    };
    g.k.cw = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Uo = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Va && this.j) {
            var b = this.j.Ml || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Ml = b
        }
    };
    g.k.Pp = function() {
        return this.J.id
    };
    g.k.Wp = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.It = function() {
        var a = this.u;
        g.ao(a.j);
        a.start()
    };
    g.k.D4 = function() {
        this.u.isActive();
        0 == edb(this.j) && this.connect(this.I, this.D)
    };
    X8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    X8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    X8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.v(wdb, g.Vf);
    g.k = wdb.prototype;
    g.k.connect = function(a, b, c) {
        this.Vc.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Vc.disconnect(a)
    };
    g.k.It = function() {
        this.Vc.It()
    };
    g.k.Pp = function() {
        return this.Vc.Pp()
    };
    g.k.Wp = function() {
        return this.Vc.Wp()
    };
    g.k.cw = function() {
        return this.Vc.cw()
    };
    g.k.cV = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Vc,
            b = this.j;
        g.Rz("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.SE,
            sessionId: a.j.C,
            arrayId: a.j.Fu
        });
        g.Rz("yt-remote-session-screen-id", b);
        a = g8();
        b = h8();
        g.Ub(a, b) || a.push(b);
        abb(a);
        cbb()
    };
    g.k.aV = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.bV = function(a) {
        this.dispatchEvent(new pdb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new qdb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Vc.sendMessage(a, b)
    };
    g.k.Uo = function(a) {
        this.Vc.Uo(a)
    };
    g.k.dispose = function() {
        this.Vc.dispose()
    };
    g.k = xdb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.I && (this.B.stop(), this.S = a, this.J = b, zdb(this), (a = g.O("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.D_ && (this.u.mdxVersion = "" + this.j.D_), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui,
            Object.assign(this.u, this.S), this.channel = new G8(this.pathPrefix, {
                RZ: "gsessionid",
                G_: this.C,
                I_: this.u
            }), this.channel.open(), this.I = 2, ydb(this))
    };
    g.k.disconnect = function(a) {
        this.Z = void 0 === a ? 0 : a;
        this.B.stop();
        zdb(this);
        this.channel && (0 !== this.Z ? this.u.ui = "" + this.Z : delete this.u.ui, this.channel.close());
        this.Z = 0
    };
    g.k.Wp = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.It = function() {
        var a = this.B;
        g.ao(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (zdb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Uo = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.Pp = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ma = function(a) {
        return this.D.ma.apply(this.D, [a].concat(g.t(g.za.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Pg = function(a) {
        return this.D.Pg(a)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.$e(this.D), this.disconnect(), g.$e(this.B), this.Aa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.v(Adb, g.Vf);
    g.k = Adb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.It = function() {
        this.j.It()
    };
    g.k.Pp = function() {
        return this.j.Pp()
    };
    g.k.Wp = function() {
        return this.j.Wp()
    };
    g.k.cw = function() {
        return 3 === this.j.I
    };
    g.k.fV = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.dV = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.eV = function(a) {
        this.dispatchEvent(new pdb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new qdb(401 === this.j.Kg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Uo = function(a) {
        this.j.Uo(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Idb = Date.now(),
        Z8 = null,
        c9 = Array(50),
        b9 = -1,
        d9 = !1;
    g.Wa(e9, g.ez);
    e9.prototype.nj = function() {
        return this.screens
    };
    e9.prototype.contains = function(a) {
        return !!Yab(this.screens, a)
    };
    e9.prototype.get = function(a) {
        return a ? f8(this.screens, a) : null
    };
    e9.prototype.info = function(a) {
        $8(this.I, a)
    };
    g.v(Mdb, g.ez);
    g.k = Mdb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.xc) && this.JR()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.xc) || (g.Bu(this.xc), this.xc = NaN)
    };
    g.k.ra = function() {
        this.stop();
        g.ez.prototype.ra.call(this)
    };
    g.k.JR = function() {
        this.xc = NaN;
        this.j = g.Eu(Y8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(this.hV, this),
            onError: (0, g.Ra)(this.gV, this),
            onTimeout: (0, g.Ra)(this.iV, this)
        })
    };
    g.k.hV = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.I;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ma("pairingComplete", new c8(a), b)
    };
    g.k.gV = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= Wfb.length ? this.ma("pairingFailed", Error("DIAL polling timed out")) : (a = Wfb[this.u], this.xc = g.zu((0, g.Ra)(this.JR, this), a), this.u++) : this.ma("pairingFailed", Error("Server error " + a.status))
    };
    g.k.iV = function() {
        this.j = null;
        this.ma("pairingFailed", Error("Server not responding"))
    };
    var Wfb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Wa(g9, e9);
    g.k = g9.prototype;
    g.k.start = function() {
        f9(this) && this.ma("screenChange");
        !g.Sz("yt-remote-lounge-token-expiration") && Ndb(this);
        g.Bu(this.j);
        this.j = g.zu((0, g.Ra)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        f9(this);
        Jdb(this, a);
        h9(this, !1);
        this.ma("screenChange");
        b(a);
        a.token || Ndb(this)
    };
    g.k.remove = function(a, b) {
        var c = f9(this);
        Ldb(this, a) && (h9(this, !1), c = !0);
        b(a);
        c && this.ma("screenChange")
    };
    g.k.QE = function(a, b, c, d) {
        var e = f9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, h9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ma("screenChange")
    };
    g.k.ra = function() {
        g.Bu(this.j);
        g9.Qe.ra.call(this)
    };
    g.k.rZ = function(a) {
        f9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        h9(this, !b);
        b && $8(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.qZ = function(a) {
        $8(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.v(Pdb, g.ez);
    g.k = Pdb.prototype;
    g.k.start = function() {
        var a = parseInt(g.Sz("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Va() - 144E5 < a ? 0 : a) ? i9(this): (this.C = g.Va() + 3E5, g.Rz("yt-remote-fast-check-period", this.C), this.rK())
    };
    g.k.isEmpty = function() {
        return g.Df(this.j)
    };
    g.k.update = function() {
        Odb("Updating availability on schedule.");
        var a = this.I(),
            b = g.nf(this.j, function(c, d) {
                return c && !!f8(a, d)
            }, this);
        Sdb(this, b)
    };
    g.k.ra = function() {
        g.Bu(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.ez.prototype.ra.call(this)
    };
    g.k.rK = function() {
        g.Bu(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = Tdb(this);
        if (Kab(a)) {
            var b = Y8(this.D, "/pairing/get_screen_availability");
            this.u = vdb(this.D, b, {
                lounge_token: g.sf(a).join(",")
            }, (0, g.Ra)(this.P2, this, a), (0, g.Ra)(this.O2, this))
        } else Sdb(this, {}), i9(this)
    };
    g.k.P2 = function(a, b) {
        this.u = null;
        var c = g.sf(Tdb(this));
        if (g.oc(c, g.sf(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            Sdb(this, c);
            i9(this)
        } else this.hf("Changing Screen set during request."), this.rK()
    };
    g.k.O2 = function(a) {
        this.hf("Screen availability failed: " + a);
        this.u = null;
        i9(this)
    };
    g.k.hf = function(a) {
        $8("OnlineScreenService", a)
    };
    g.Wa(j9, e9);
    g.k = j9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ma("screenChange"), this.j.isEmpty() || this.ma("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.QE = function(a, b, c, d) {
        this.u.contains(a) ? this.u.QE(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, $8(this.I, a), d(Error(a)))
    };
    g.k.nj = function(a) {
        return a ? this.screens : g.ac(this.screens, g.xm(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.zM = function() {
        return g.xm(this.nj(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.AM = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Mdb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.$e(l);
            e(k9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.$e(l);
            f(m)
        });
        l.start();
        return (0, g.Ra)(l.stop, l)
    };
    g.k.jV = function(a, b, c, d) {
        g.Eu(Y8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(function(e, f) {
                e = new c8(f.screen || {});
                if (!e.name || Xdb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Xdb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(k9(this, e))
            }, this),
            onError: (0, g.Ra)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ra)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ra = function() {
        g.$e(this.u);
        g.$e(this.j);
        j9.Qe.ra.call(this)
    };
    g.k.AZ = function() {
        Zdb(this);
        this.ma("screenChange");
        this.j.update()
    };
    j9.prototype.dispose = j9.prototype.dispose;
    g.Wa(l9, g.ez);
    g.k = l9.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.Wh = function(a) {
        this.isDisposed() || (a && (n9(this, "" + a), this.ma("sessionFailed")), this.C = null, this.ma("sessionScreen", null))
    };
    g.k.info = function(a) {
        $8(this.Ba, a)
    };
    g.k.BM = function() {
        return null
    };
    g.k.JK = function(a) {
        var b = this.j;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ra)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ra)(function() {
            n9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ra = function() {
        this.JK("");
        l9.Qe.ra.call(this)
    };
    g.v(o9, l9);
    g.k = o9.prototype;
    g.k.IK = function(a) {
        if (this.u) {
            if (this.u == a) return;
            n9(this, "Overriding cast session with new session object");
            keb(this);
            this.Aa = !1;
            this.Z = "unknown";
            this.u.removeUpdateListener(this.oa);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya)
        }
        this.u = a;
        this.u.addUpdateListener(this.oa);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya);
        feb(this, "getMdxSessionStatus")
    };
    g.k.ow = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.gi(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.Ra)(function() {
            this.Wh()
        }, this), (0, g.Ra)(function() {
            this.Wh(Error("Failed to stop receiver app."))
        }, this)) : this.Wh(Error("Stopping cast device without session."))
    };
    g.k.JK = function() {};
    g.k.ra = function() {
        this.info("disposeInternal");
        keb(this);
        this.u && (this.u.removeUpdateListener(this.oa), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya));
        this.u = null;
        l9.prototype.ra.call(this)
    };
    g.k.G3 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = $7(b), g.Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.gi(b)), a) {
                    case "mdxSessionStatus":
                        ceb(this, b);
                        break;
                    case "loungeToken":
                        geb(this, b);
                        break;
                    default:
                        n9(this, "Unknown youtube message: " + a)
                } else n9(this, "Unable to parse message.");
                else n9(this, "No data in message.")
    };
    g.k.fP = function(a, b, c, d) {
        g.Bu(this.S);
        this.S = 0;
        Wdb(this.B, this.j.label, a, this.j.friendlyName, (0, g.Ra)(function(e) {
            e ? b(e) : 0 <= d ? (n9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.S = g.zu((0, g.Ra)(this.fP, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.BM = function() {
        return this.u
    };
    g.k.kV = function(a) {
        this.isDisposed() || a || (n9(this, "Cast session died."), this.Wh())
    };
    g.v(p9, l9);
    g.k = p9.prototype;
    g.k.IK = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ia)
    };
    g.k.ow = function(a) {
        this.La = a;
        this.ea()
    };
    g.k.stop = function() {
        seb(this);
        this.u ? this.u.stop((0, g.Ra)(this.Wh, this, null), (0, g.Ra)(this.Wh, this, "Failed to stop DIAL device.")) : this.Wh()
    };
    g.k.ra = function() {
        seb(this);
        this.u && this.u.removeUpdateListener(this.Ia);
        this.u = null;
        l9.prototype.ra.call(this)
    };
    g.k.lV = function(a) {
        this.isDisposed() || a || (n9(this, "DIAL session died."), this.D(), this.D = function() {}, this.Wh())
    };
    g.v(s9, l9);
    s9.prototype.stop = function() {
        this.Wh()
    };
    s9.prototype.IK = function() {};
    s9.prototype.ow = function() {
        g.Bu(this.u);
        this.u = NaN;
        var a = f8(this.B.nj(), this.j.label);
        a ? m9(this, a) : this.Wh(Error("No such screen"))
    };
    s9.prototype.ra = function() {
        g.Bu(this.u);
        this.u = NaN;
        l9.prototype.ra.call(this)
    };
    g.v(t9, g.ez);
    g.k = t9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]);
        this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ra)(this.A2, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ra)(this.rR, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ra)(this.h1, this);
        chrome.cast.initialize(c, (0, g.Ra)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Fdb(), this.u.subscribe("onlineScreenChange", (0, g.Ra)(this.CM, this)), this.B = veb(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function(f) {
                this.hf("Failed to set initial custom receivers: " + g.gi(f))
            }, this)), this.ma("yt-remote-cast2-availability-change", v9(this)), b(!0))
        }, this), (0, g.Ra)(function(f) {
            this.hf("Failed to initialize API: " + g.gi(f));
            b(!1)
        }, this))
    };
    g.k.O4 = function(a, b) {
        u9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.getScreen();
            if (!a || c && c.id != a) u9("Unsetting old screen status: " + this.j.j.friendlyName), w9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = f8(this.u.nj(), a);
                if (!c) {
                    u9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    u9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = teb(this, c);
                a || (u9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function(d) {
                    this.hf("Failed to set initial custom receivers: " + g.gi(d))
                }, this)));
                u9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                w9(this, new s9(this.u, a), !0)
            }
            this.j.JK(b)
        } else u9("setConnectedScreenStatus: no screen.")
    };
    g.k.P4 = function(a) {
        this.isDisposed() ? this.hf("Setting connection data on disposed cast v2") : this.j ? this.j.ow(a) : this.hf("Setting connection data without a session")
    };
    g.k.nV = function() {
        this.isDisposed() ? this.hf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), w9(this, null)) : u9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ra)(this.rR, this), (0, g.Ra)(this.S2, this))
    };
    g.k.ra = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ra)(this.CM, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Cdb,
            b = g.Ga("yt.mdx.remote.debug.handlers_");
        g.Zb(b || [], a);
        g.$e(this.j);
        g.ez.prototype.ra.call(this)
    };
    g.k.hf = function(a) {
        $8("Controller", a)
    };
    g.k.tR = function(a, b) {
        this.j == a && (b || w9(this, null), this.ma("yt-remote-cast2-session-change", b))
    };
    g.k.v2 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.j.label != a.label) u9("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop();
                        else {
                            u9("onReceiverAction_: Casting to active receiver.");
                            this.j.getScreen() && this.ma("yt-remote-cast2-session-change", this.j.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            w9(this,
                                new s9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            w9(this, new p9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            w9(this, new o9(this.u, a, this.config_));
                            break;
                        default:
                            this.hf("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.j.label == a.label ? this.j.stop() : this.hf("Stopping receiver w/o session: " + a.friendlyName)
            } else this.hf("onReceiverAction_ called without receiver.")
    };
    g.k.h1 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.hf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.j : null;
        if (!c || c.label != b.label) return this.hf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return u9("Reselecting dial screen."),
                this.ma("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.hf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            w9(this, new p9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.S = a;
        b.S.appState == chrome.cast.DialAppState.RUNNING ? (a = b.S.extraData || {}, c = a.screenId || null, q9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = peb(b, {
            name: b.j.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.S.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.iu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = qeb(b, c)) : a = qeb(b, c)) : a = neb(b);
        return a
    };
    g.k.rR = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            u9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) u9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w9(this, new o9(this.u, c, this.config_), !0);
                    else {
                        this.hf("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.j,
                    e = f8(this.u.nj(),
                        d.label);
                e && d8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.$e(this.j), this.j = new o9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ra)(this.tR, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return ueb(b, b.j)
                }), this.j.ow(null));
                this.j.IK(a)
            }
        }
    };
    g.k.mV = function() {
        return this.j ? this.j.BM() : null
    };
    g.k.S2 = function(a) {
        this.isDisposed() || (this.hf("Failed to estabilish a session: " + g.gi(a)), a.code != chrome.cast.ErrorCode.CANCEL && w9(this, null), this.ma("yt-remote-cast2-session-failed"))
    };
    g.k.A2 = function(a) {
        u9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = v9(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            v9(this) != b && this.ma("yt-remote-cast2-availability-change", v9(this))
        }
    };
    g.k.CM = function() {
        this.isDisposed() || (this.B = veb(this), u9("Updating custom receivers: " + g.gi(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ra)(function() {
            this.hf("Failed to set custom receivers.")
        }, this)), this.ma("yt-remote-cast2-availability-change", v9(this)))
    };
    t9.prototype.setLaunchParams = t9.prototype.P4;
    t9.prototype.setConnectedScreenStatus = t9.prototype.O4;
    t9.prototype.stopSession = t9.prototype.nV;
    t9.prototype.getCastSession = t9.prototype.mV;
    t9.prototype.requestSession = t9.prototype.requestSession;
    t9.prototype.init = t9.prototype.init;
    t9.prototype.dispose = t9.prototype.dispose;
    var Eeb = [];
    g.k = D9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Keb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Qm = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.S = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.Sc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Aj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + E9(this) : this.D
    };
    g.k.clone = function() {
        return new D9(Leb(this))
    };
    g.v(J9, g.ez);
    g.k = J9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Wp = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.It = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        L9(this) ? (this.j ? this.j.play(null, g.Zf, P9(this, "play")) : O9(this, "play"), Oeb(this, 1, G9(K9(this))), this.ma("remotePlayerChange")) : M9(this, this.play)
    };
    g.k.pause = function() {
        L9(this) ? (this.j ? this.j.pause(null, g.Zf, P9(this, "pause")) : O9(this, "pause"), Oeb(this, 2, G9(K9(this))), this.ma("remotePlayerChange")) : M9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (L9(this)) {
            if (this.j) {
                var b = K9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Sc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Zf, P9(this, "seekTo", {
                    newTime: a
                }))
            } else O9(this, "seekTo", {
                newTime: a
            });
            Oeb(this, 3, a);
            this.ma("remotePlayerChange")
        } else M9(this, g.Sa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (L9(this)) {
            this.j ? this.j.stop(null, g.Zf, P9(this, "stopVideo")) : O9(this, "stopVideo");
            var a = K9(this);
            a.index = -1;
            a.videoId = "";
            Keb(a);
            N9(this, a);
            this.ma("remotePlayerChange")
        } else M9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (L9(this)) {
            var c = K9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ra)(function() {
                        a9("set receiver volume: " + d)
                    }, this), (0, g.Ra)(function() {
                        this.hf("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ra)(function() {
                    a9("set receiver muted: " + b)
                }, this), (0, g.Ra)(function() {
                    this.hf("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                O9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            N9(this, c)
        } else M9(this, g.Sa(this.setVolume, a, b))
    };
    g.k.DM = function(a, b) {
        if (L9(this)) {
            var c = K9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.gi(b.style), g.Jf(a, c.trackData));
            O9(this, "setSubtitlesTrack", a);
            N9(this, c)
        } else M9(this, g.Sa(this.DM, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        L9(this) ? (b = b.getLanguageInfo().getId(), O9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = K9(this), a.audioTrackId = b, N9(this, a)) : M9(this, g.Sa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = K9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        H9(l, a, c || 0);
        void 0 !== b && (F9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.gi(h));
        O9(this, "setPlaylist", m);
        d || N9(this, l)
    };
    g.k.XD = function(a, b) {
        if (L9(this)) {
            if (a && b) {
                var c = K9(this);
                H9(c, a, b);
                N9(this, c)
            }
            O9(this, "previous")
        } else M9(this, g.Sa(this.XD, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (L9(this)) {
            if (a && b) {
                var c = K9(this);
                H9(c, a, b);
                N9(this, c)
            }
            O9(this, "next")
        } else M9(this, g.Sa(this.nextVideo, a, b))
    };
    g.k.wv = function() {
        if (L9(this)) {
            O9(this, "clearPlaylist");
            var a = K9(this);
            a.reset();
            N9(this, a);
            this.ma("remotePlayerChange")
        } else M9(this, this.wv)
    };
    g.k.AO = function() {
        L9(this) ? O9(this, "dismissAutoplay") : M9(this, this.AO)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ma("proxyStateChange", a, this.B)
        }
        g.ez.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Neb(this);
        this.C = null;
        this.D.clear();
        I9(this, null);
        g.ez.prototype.ra.call(this)
    };
    g.k.LK = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ma("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.t2 = function(a, b) {
        this.ma(a, b)
    };
    g.k.S0 = function(a) {
        if (!a) this.Tz(null), I9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = K9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) a9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, N9(this, b)
        }
    };
    g.k.Tz = function(a) {
        a9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.S);
        if (this.j = a) this.j.addUpdateListener(this.S), Peb(this), this.ma("remotePlayerChange")
    };
    g.k.R0 = function(a) {
        a ? (Peb(this), this.ma("remotePlayerChange")) : this.Tz(null)
    };
    g.k.jL = function() {
        O9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.V0 = function() {
        var a = Heb();
        a && I9(this, a)
    };
    g.k.hf = function(a) {
        $8("CP", a)
    };
    g.v(S9, g.ez);
    g.k = S9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ia && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            F9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Ia ? "setInitialState" : "setPlaylist";
            Q9("Connecting with " + c + " and params: " + g.gi(m));
            this.u.connect({
                method: c,
                params: g.gi(m)
            }, a, dbb())
        } else Q9("Connecting without params"), this.u.connect({}, a, dbb());
        Teb(this)
    };
    g.k.Uo = function(a) {
        this.u.Uo(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Fa("yt.mdx.remote.remoteClient_", null), this.ma("beforeDispose"), R9(this, 3));
        g.ez.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Ueb(this);
        Web(this);
        Veb(this);
        g.Bu(this.S);
        this.S = NaN;
        g.Bu(this.Z);
        this.Z = NaN;
        this.C = null;
        g.Dx(this.ea);
        this.ea.length = 0;
        this.u.dispose();
        g.ez.prototype.ra.call(this);
        this.D = this.J = this.B = this.j = this.u = null
    };
    g.k.QP = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.r(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.iZ = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Wy()) ? this.u.cw() && isNaN(this.I) && (a = 1) : a = 2);
        return a
    };
    g.k.Fv = function(a) {
        Q9("Disconnecting with " + a);
        g.Fa("yt.mdx.remote.remoteClient_", null);
        Ueb(this);
        this.ma("beforeDisconnect", a);
        1 == a && i8();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.gZ = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), H9(a, this.C, a.index));
        return Leb(a)
    };
    g.k.Q4 = function(a) {
        var b = this,
            c = new D9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Bu(this.S), this.S = g.zu(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && T9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && G9(this.j) == G9(c) && g.gi(this.j.trackData) == g.gi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.rc(d, function(e) {
            this.ma(e)
        }, this)
    };
    g.k.eP = function() {
        var a = this.u.Pp(),
            b = g.Sb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Wy = function() {
        return this.u.Wp()
    };
    g.k.dZ = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.eZ = function() {
        return this.J || ""
    };
    g.k.oV = function() {
        !isNaN(this.Wy()) && this.u.It()
    };
    g.k.M4 = function(a, b) {
        T9(this, a, b);
        Yeb(this)
    };
    g.k.EM = function() {
        var a = g.Ou("SID", "") || "",
            b = g.Ou("SAPISID", "") || "",
            c = g.Ou("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.zc(g.bb(a), 2);
        b = g.zc(g.bb(b), 2);
        c = g.zc(g.bb(c), 2);
        return g.zc(g.bb(a + "," + b + "," + c), 2)
    };
    S9.prototype.subscribe = S9.prototype.subscribe;
    S9.prototype.unsubscribeByKey = S9.prototype.Pg;
    S9.prototype.getProxyState = S9.prototype.iZ;
    S9.prototype.disconnect = S9.prototype.Fv;
    S9.prototype.getPlayerContextData = S9.prototype.gZ;
    S9.prototype.setPlayerContextData = S9.prototype.Q4;
    S9.prototype.getOtherConnectedRemoteId = S9.prototype.eP;
    S9.prototype.getReconnectTimeout = S9.prototype.Wy;
    S9.prototype.getAutoplayMode = S9.prototype.dZ;
    S9.prototype.getAutoplayVideoId = S9.prototype.eZ;
    S9.prototype.reconnect = S9.prototype.oV;
    S9.prototype.sendMessage = S9.prototype.M4;
    S9.prototype.getXsrfToken = S9.prototype.EM;
    S9.prototype.isCapabilitySupportedOnConnectedDevices = S9.prototype.QP;
    g.v(jfb, e9);
    g.k = jfb.prototype;
    g.k.nj = function(a) {
        return this.Uf.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Uf.$_c(a)
    };
    g.k.get = function(a) {
        return this.Uf.$_g(a)
    };
    g.k.start = function() {
        this.Uf.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Uf.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Uf.$_r(a, b, c)
    };
    g.k.QE = function(a, b, c, d) {
        this.Uf.$_un(a, b, c, d)
    };
    g.k.ra = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Uf.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Uf = null;
        e9.prototype.ra.call(this)
    };
    g.k.pV = function() {
        this.ma("screenChange")
    };
    g.k.V1 = function() {
        this.ma("onlineScreenChange")
    };
    j9.prototype.$_st = j9.prototype.start;
    j9.prototype.$_gspc = j9.prototype.jV;
    j9.prototype.$_gsppc = j9.prototype.AM;
    j9.prototype.$_c = j9.prototype.contains;
    j9.prototype.$_g = j9.prototype.get;
    j9.prototype.$_a = j9.prototype.add;
    j9.prototype.$_un = j9.prototype.QE;
    j9.prototype.$_r = j9.prototype.remove;
    j9.prototype.$_gs = j9.prototype.nj;
    j9.prototype.$_gos = j9.prototype.zM;
    j9.prototype.$_s = j9.prototype.subscribe;
    j9.prototype.$_ubk = j9.prototype.Pg;
    var d$ = null,
        g$ = !1,
        U9 = null,
        V9 = null,
        ufb = null,
        Z9 = [];
    g.v(zfb, g.J);
    g.k = zfb.prototype;
    g.k.ra = function() {
        g.J.prototype.ra.call(this);
        this.u.stop();
        this.B.stop();
        this.S.stop();
        var a = this.uc;
        a.unsubscribe("proxyStateChange", this.qR, this);
        a.unsubscribe("remotePlayerChange", this.Yz, this);
        a.unsubscribe("remoteQueueChange", this.ID, this);
        a.unsubscribe("previousNextChange", this.nR, this);
        a.unsubscribe("nowAutoplaying", this.hR, this);
        a.unsubscribe("autoplayDismissed", this.LQ, this);
        this.uc = this.j = null
    };
    g.k.ek = function(a) {
        var b = g.za.apply(1, arguments);
        if (2 != this.uc.B)
            if (h$(this)) {
                if (!K9(this.uc).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        K9(this.uc).Sc() ? this.uc.pause() : this.uc.play();
                        break;
                    case "control_play":
                        this.uc.play();
                        break;
                    case "control_pause":
                        this.uc.pause();
                        break;
                    case "control_seek":
                        this.J.vF(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Bfb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.G.getCurrentTime();
                    i$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    i$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Bfb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.P0 = function(a) {
        this.S.OU(a)
    };
    g.k.i6 = function(a) {
        this.ek("control_subtitles_set_track", g.Df(a) ? null : a)
    };
    g.k.MS = function() {
        var a = this.G.getOption("captions", "track");
        g.Df(a) || Bfb(this, a)
    };
    g.k.hc = function(a) {
        this.j.hc(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.G1 = function() {
        g.Df(this.C) || Cfb(this, this.C);
        this.D = !1
    };
    g.k.qR = function(a, b) {
        this.B.stop();
        2 === b && this.ES()
    };
    g.k.Yz = function() {
        if (h$(this)) {
            this.u.stop();
            var a = K9(this.uc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.j.Jg = 1;
                    break;
                case 1082:
                case 1083:
                    this.j.Jg = 0;
                    break;
                default:
                    this.j.Jg = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Xb(new g.cK(8));
                    this.DS();
                    break;
                case 1085:
                case 3:
                    this.Xb(new g.cK(9));
                    break;
                case 1083:
                case 0:
                    this.Xb(new g.cK(2));
                    this.J.stop();
                    this.hc(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Xb(new g.cK(4));
                    break;
                case 2:
                    this.Xb(new g.cK(4));
                    this.hc(G9(a));
                    break;
                case -1:
                    this.Xb(new g.cK(64));
                    break;
                case -1E3:
                    this.Xb(new g.cK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "Cette vid\u00e9o ne peut pas \u00eatre visionn\u00e9e \u00e0 distance.",
                        jC: 2
                    }))
            }
            a = K9(this.uc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, Cfb(this, a));
            a = K9(this.uc); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.Z.isActive() || this.sT()
        } else Afb(this)
    };
    g.k.nR = function() {
        this.G.ma("mdxpreviousnextchange")
    };
    g.k.ID = function() {
        h$(this) || Afb(this)
    };
    g.k.hR = function(a) {
        isNaN(a) || this.G.ma("mdxnowautoplaying", a)
    };
    g.k.LQ = function() {
        this.G.ma("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        h$(this) && this.uc.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === K9(this.uc).playerState ? i$(this, a) : b && this.uc.seekTo(a)
    };
    g.k.sT = function() {
        var a = this;
        if (h$(this)) {
            var b = K9(this.uc);
            this.events.yc(this.ea);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.ea = this.events.T(this.G, "onVolumeChange", function(c) {
                xfb(a, c)
            })
        }
    };
    g.k.DS = function() {
        this.u.stop();
        if (!this.uc.isDisposed()) {
            var a = K9(this.uc);
            a.Sc() && this.Xb(new g.cK(8));
            this.hc(G9(a));
            this.u.start()
        }
    };
    g.k.ES = function() {
        this.B.stop();
        this.u.stop();
        var a = this.uc.Wp();
        2 == this.uc.B && !isNaN(a) && this.B.start()
    };
    g.k.Xb = function(a) {
        this.B.stop();
        var b = this.I;
        if (!g.hK(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.I, 2) && this.G.Tw(c);
            this.I = a;
            Efb(this.j, b, a)
        }
    };
    g.v(j$, g.W);
    j$.prototype.td = function() {
        this.j.show()
    };
    j$.prototype.Mb = function() {
        this.j.hide()
    };
    j$.prototype.u = function() {
        a8("mdx-privacy-popup-cancel");
        this.Mb()
    };
    j$.prototype.B = function() {
        a8("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.v(k$, g.W);
    k$.prototype.onStateChange = function(a) {
        this.Tc(a.state)
    };
    k$.prototype.Tc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.V(a, 128) ? g.KJ("Erreur sur $RECEIVER_NAME", b) : a.Sc() || g.V(a, 4) ? g.KJ("Lecture sur $RECEIVER_NAME", b) : g.KJ("Connect\u00e9 \u00e0 $RECEIVER_NAME", b);
            this.Oa("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.v(l$, g.lR);
    l$.prototype.D = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Hq = g.tc(a, this.j, this), g.mR(this, g.Pk(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Qj(a), this.enable(!0)) : this.enable(!1)
    };
    l$.prototype.j = function(a) {
        return a.key
    };
    l$.prototype.Wk = function(a) {
        return "cast-selector-receiver" === a ? "Caster sur\u2026" : this.Hq[a].name
    };
    l$.prototype.Qg = function(a) {
        g.lR.prototype.Qg.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.Hq[a]);
        this.qb.Mb()
    };
    g.v(Dfb, g.fO);
    g.k = Dfb.prototype;
    g.k.create = function() {
        var a = this.player.V(),
            b = g.VF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.K("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.K("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.K("enable_cast_short_lived_lounge_token")
        };
        ofb(b, a);
        this.subscriptions.push(g.Wx("yt-remote-before-disconnect", this.N0, this));
        this.subscriptions.push(g.Wx("yt-remote-connection-change", this.B2, this));
        this.subscriptions.push(g.Wx("yt-remote-receiver-availability-change", this.pR,
            this));
        this.subscriptions.push(g.Wx("yt-remote-auto-connect", this.z2, this));
        this.subscriptions.push(g.Wx("yt-remote-receiver-resumed", this.w2, this));
        this.subscriptions.push(g.Wx("mdx-privacy-popup-confirm", this.b4, this));
        this.subscriptions.push(g.Wx("mdx-privacy-popup-cancel", this.a4, this));
        this.pR()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.fO.prototype.load.call(this);
        this.Tj = new zfb(this, this.player, this.uc);
        var a = (a = wfb()) ? a.currentTime : 0;
        var b = tfb() ? new J9(c$(), void 0) : null;
        0 == a && b && (a = G9(K9(b)));
        0 !== a && this.hc(a);
        Efb(this, this.je, this.je);
        this.player.zn(6)
    };
    g.k.unload = function() {
        this.player.ma("mdxautoplaycanceled");
        this.Ep = this.jn;
        g.af(this.Tj, this.uc);
        this.uc = this.Tj = null;
        g.fO.prototype.unload.call(this);
        this.player.zn(5);
        m$(this)
    };
    g.k.ra = function() {
        g.Xx(this.subscriptions);
        g.fO.prototype.ra.call(this)
    };
    g.k.pn = function(a) {
        var b = g.za.apply(1, arguments);
        this.loaded && this.Tj.ek.apply(this.Tj, [a].concat(g.t(b)))
    };
    g.k.getAdState = function() {
        return this.Jg
    };
    g.k.Qm = function() {
        return this.uc ? K9(this.uc).Qm : !1
    };
    g.k.hasNext = function() {
        return this.uc ? K9(this.uc).hasNext : !1
    };
    g.k.hc = function(a, b) {
        this.bQ = a || 0;
        this.player.ma("progresssync", a, b);
        this.player.Pa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.bQ
    };
    g.k.getProgressState = function() {
        var a = K9(this.uc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.V().K("web_player_mdx_allow_seeking_change_killswitch") ? this.player.hg() : !a.isAdPlaying() && this.player.hg(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + E9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + E9(a) : a.j) - this.getCurrentTime(),
            loaded: a.S,
            seekableEnd: a.u ? a.j + E9(a) : a.j,
            seekableStart: 0 <
                a.C ? a.C + E9(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.uc && this.uc.nextVideo()
    };
    g.k.XD = function() {
        this.uc && this.uc.XD()
    };
    g.k.N0 = function(a) {
        1 === a && (this.cK = this.uc ? K9(this.uc) : null)
    };
    g.k.B2 = function() {
        var a = tfb() ? new J9(c$(), void 0) : null;
        if (a) {
            var b = this.Ep;
            this.loaded && this.unload();
            this.uc = a;
            this.cK = null;
            b.key !== this.jn.key && (this.Ep = b, this.load())
        } else g.$e(this.uc), this.uc = null, this.loaded && (this.unload(), (a = this.cK) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, G9(a)));
        this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.pR = function() {
        var a = [this.jn],
            b = a.concat,
            c = pfb();
        A9() && g.Sz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Hq = b.call(a, c);
        a = rfb() || this.jn;
        n$(this, a);
        this.player.Pa("onMdxReceiversChange")
    };
    g.k.z2 = function() {
        var a = rfb();
        n$(this, a)
    };
    g.k.w2 = function() {
        this.Ep = rfb()
    };
    g.k.b4 = function() {
        this.gA = !0;
        m$(this);
        g$ = !1;
        d$ && f$(d$, 1);
        d$ = null
    };
    g.k.a4 = function() {
        this.gA = !1;
        m$(this);
        n$(this, this.jn);
        this.Ep = this.jn;
        g$ = !1;
        d$ = null;
        this.player.playVideo()
    };
    g.k.Cg = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Hq;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Ieb() : n$(this, b)), this.loaded ? this.Ep : this.jn;
            case "quickCast":
                return 2 === this.Hq.length && "cast-selector-receiver" === this.Hq[1].key ? (b && Ieb(), !0) : !1
        }
    };
    g.k.jL = function() {
        this.uc.jL()
    };
    g.k.Bj = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.eO("remote", Dfb);
})(_yt_player);
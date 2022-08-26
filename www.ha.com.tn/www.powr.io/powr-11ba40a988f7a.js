! function() {
    function j(e, t, o, n) {
        var i = new Date,
            o = (i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3), "expires=" + i.toUTCString());
        n = n || "samesite=None;", document.cookie = e + "=" + t + ";" + o + ";" + n + "path=/;Secure"
    }

    function D(e) {
        for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), n = 0; n < o.length; n++) {
            for (var i = o[n];
                " " == i.charAt(0);) i = i.substring(1);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }
    let t = !1;
    var U = "https://www.powr.io";

    function z() {
        return "http://localhost:3000" != U && "https://localhost:3000" != U && "http://10.0.2.2:3000" != U && "http://192.168.1.149:3000" != U && "http://localhost:8888" != U ? function() {} : console.log.bind(window.console)
    }
    if ("undefined" != typeof loadPowr) z()("Powr already loaded");
    else {
        for (var e = document.querySelectorAll(".powrLoaded"), o = 0; o < e.length; o++) {
            var n = e[o];
            n.innerHTML = "", n.classList.remove("powrLoaded")
        }
        var G = ((t, o) => {
                let n = null;
                return (...e) => {
                    window.clearTimeout(n), n = window.setTimeout(() => {
                        t.apply(null, e)
                    }, o)
                }
            })(e => {
                for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                    message: "triggerPowrPopupAfterInactivity"
                }), POWR_RECEIVERS[t].url)
            }, 300),
            Y = (window.addEventListener ? window.addEventListener("message", l) : window.attachEvent("onmessage", l), 0),
            i = (POWR_RECEIVERS = [], document.createEvent("Event"));
        if (i.initEvent("powrPingListener", !0, !0), loadPowr = function() {
                if (document.body) {
                    for (var t = null, o = null, e = null, n = !1, i = document.querySelectorAll("script"), r = 0; r < i.length; r++) {
                        var a = i[r],
                            l = a.getAttribute("src");
                        if (null != l) {
                            var s, d = a.getAttribute("powr-token"),
                                c = a.getAttribute("external-type"),
                                p = ((e = K(l)) && e.loadApp && e.uniqueId && !a.getAttribute("auto-add") && ((f = document.createElement("div")).setAttribute("class", "powr-" + e.loadApp), f.setAttribute("id", e.uniqueId), document.body.appendChild(f), a.setAttribute("auto-add", !0)), c = c || a.getAttribute("platform"), a.getAttribute("template-powr-token")),
                                u = a.getAttribute("powr-load");
                            if (null == u && (u = "sync"), Q() && Q() <= 9 && (u = "sync"), n = a.getAttribute("demo-mode"), null != d ? t = d : -1 < l.search("powr-token") && void 0 !== e["powr-token"] && 0 < e["powr-token"].length && (t = e["powr-token"]), null != c ? o = c : -1 < l.search("external-type") ? null != (s = (e = K(l))["external-type"]) && 0 < s.length && (o = s) : -1 < l.search("platform") && null != (s = (e = K(l)).platform) && 0 < s.length && (o = s), "ecwid" == o && (u = "sync"), null != t || null != o) break
                        }
                    }
                    if (null == t || 0 == t.length) try {
                        t = window.top.location.host
                    } catch (e) {
                        t = ""
                    }
                    "wix-oauth" == o && document.querySelectorAll("head .powr-popup, head .powr-chat").forEach(function(e) {
                        document.body.append(e)
                    });
                    for (var w, g, m, h, M = /\[powr-[^\]]*\]/gi, N = /\[powr-[^\s\]]*/gi, E = document.querySelectorAll("a"), r = 0; r < E.length; r++) te(v = E[r]) || (w = v.previousSibling, g = v.nextSibling, w && g && v.getAttribute("href") && -1 < v.getAttribute("href").search("tel") && 3 == w.nodeType && 3 == g.nodeType && w.nodeValue.match(N) && -1 < g.nodeValue.search("]") && (m = v.innerHTML, h = w.nodeValue.match(/powr-[^\s\]]*/gi)[0], (b = document.createElement("div")).innerHTML = '<div class="' + h + '" label="' + m + '"></div>', w.parentNode.removeChild(w), g.parentNode.removeChild(g), v.parentNode.replaceChild(b, v)));
                    for (var f, R, E = document.querySelectorAll("body, body *"), r = 0; r < E.length; r++) {
                        var v, y = (v = E[r]).childNodes;
                        if (!te(v))
                            for (var C = 0; C < y.length; C++) {
                                var S, _, b, O = y[C];
                                3 != O.nodeType || (_ = (S = O.nodeValue).replace(M, F)) != S && ((b = document.createElement("div")).innerHTML = _, v.replaceChild(b, O))
                            }
                    }
                    0 == document.querySelectorAll("#powrIframeLoader").length && (f = document.createElement("div"), R = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0], f.id = "powrIframeLoader", f.innerHTML = "&shy;<style> .powrLoaded iframe { visibility: hidden; } </style>", R.parentNode.insertBefore(f, R));
                    for (var I = document.querySelectorAll("[class*=powr-]"), q = !1, H = !1, r = 0; r < I.length; r++) {
                        var P = I[r];
                        if (!te(P) && !(P instanceof SVGElement || -1 < P.className.search("powrLoaded"))) {
                            var W = ie(P);
                            if (void 0 !== W) {
                                Z(W) && (q = !0), "scroll-to-top" != W && !Z(W) || (H = !0);
                                var k = P.getAttribute("label");
                                if ("weebly_" != (k = null == k ? "" : k)) {
                                    P.className += " powrLoaded", null == p && (p = "");
                                    let e = P.getAttribute("id");
                                    null == e ? e = "" : e.includes("-template--") && (e = e.split("__")[1]);
                                    var V = P.getAttribute("view-mode"),
                                        A = "true" == n || "true" == P.getAttribute("demo-mode"),
                                        T = U + "/" + W + "/u/" + e;
                                    if (!1 === ne() && (T += "/cookieless"), e.startsWith("bigcommerce_") && P.dataset && "pagebuilder" === P.dataset.installSrc && (Z(W) || $(W)))
                                        if (ee()) T += "?hideContent=true";
                                        else {
                                            const B = P.closest("[data-content-region]"),
                                                L = B.querySelectorAll("div");
                                            for (let e = 0; e < L.length; e++) - 1 === L[e].className.indexOf("powr-") && (L[e].style.zIndex = "9999999")
                                        }
                                    "product-reviews" === W && ((x = P.getAttribute("data-product-id")) && (T = T + "?product_id=" + x), (x = P.getAttribute("data-product-name")) && (T = T + "&product_name=" + encodeURI(x))), T += "#platform=" + (s || "html");
                                    var P = encodeURIComponent(k),
                                        x = U + "/plugins/" + W + "/cached_view?load=" + u + "&index=" + Y + "&unique_label=" + e + "&powr_token=" + t + "&user_label=" + P + "&demo_mode=" + A + "&isCookieAllowed=" + ne(),
                                        k = "https://www.powr.io/plugins/" + W + "/view.json?unique_label=" + e + "&powr_token=" + t + "&user_label=" + P + "&demo_mode=" + A + "&isCookieAllowed=" + ne();
                                    if (null != o && (k += A = "&external_type=" + o, x += A), null != p && (k += A = "&template_powr_token=" + p, x += A), null != V && (k += A = "&view_mode=" + V, x += A), z()("page url IS " + oe()), oe() && (k += "&url=" + encodeURIComponent(oe())), document.location.host) var J = document.location.protocol + "//" + document.location.host;
                                    else try {
                                        var J = document.location.ancestorOrigins[0]
                                    } catch (e) {
                                        J = window.top && window.top.location && window.top.location.host ? window.top.location.protocol + "//" + window.top.location.host : ""
                                    }
                                    if (k += "&request_url=" + encodeURIComponent(J), x += "&request_url=" + encodeURIComponent(document.location.href), 0 == P.length && (x = T, oe() && (x += "&url=" + encodeURIComponent(oe()))), window.CookieControl && "function" == typeof window.CookieControl.isPOWrAllowed) {
                                        V = D("isJimdoCookieSettingsShownBefore");
                                        if (!ne() && !V) return void setTimeout(function() {
                                            window.CookieControl && window.CookieControl.showCookieSettings && (window.CookieControl.showCookieSettings(), j("isJimdoCookieSettingsShownBefore", !0, 1))
                                        }, 1e3)
                                    }
                                    re(I[r], W, Y, o, x, k, u), Y++
                                }
                            }
                        }
                    }
                    q && (X(document, "click", function(e) {
                        e = (e = e || window.event).relatedTarget || e.toElement || e.target;
                        if (e && e.classList.contains("trigger-popup"))
                            for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                                message: "triggerPowrPopupClick"
                            }), POWR_RECEIVERS[t].url);
                        else G()
                    }), X(document, "keypress", G), X(document, "mousemove", G), X(document, "mouseout", function(e) {
                        if ((e = e || window.event).clientY < 5)
                            for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                                message: "exitDocument"
                            }), POWR_RECEIVERS[t].url)
                    })), H && X(document, "scroll", function(e) {
                        for (var t = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight, o = 100 * (document.documentElement.scrollTop || document.body.scrollTop) / t, n = 0; n < POWR_RECEIVERS.length; n++) POWR_RECEIVERS[n].receiver.postMessage(JSON.stringify({
                            message: "scrollPosition",
                            scrollPercentage: o
                        }), POWR_RECEIVERS[n].url)
                    })
                }
            }, window.location.search.includes("powr-review-badge-preview")) {
            t = !0;
            let e = document.createElement("script");
            e.src = U + "/powr_product_review_badge_installation.js", document.head.appendChild(e)
        }
        loadPowr(), setInterval(function() {
            t || loadPowr()
        }, 500), X(window, "load", loadPowr);
        var r = !1;
        X(window, "keydown", function(e) {
            if (80 == e.keyCode && (r = !0, setTimeout(function() {
                    r = !1
                }, 2e3)), 38 == e.keyCode && r) {
                for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                    message: "showEdit"
                }), POWR_RECEIVERS[t].url);
                return e.preventDefault(), !1
            }
            if (40 == e.keyCode && r) {
                for (t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                    message: "hideEdit"
                }), POWR_RECEIVERS[t].url);
                return e.preventDefault(), !1
            }
        })
    }

    function X(e, t, o) {
        e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o)
    }

    function u(e, t, o, n) {
        var i = -1 < o.indexOf("product-reviews");
        window.Shopify;
        setTimeout(() => {
            t.appendChild(e), POWR_RECEIVERS.push({
                receiver: e.contentWindow,
                url: o,
                data_url: n
            })
        }, 0)
    }

    function F(e, t, o, n, i, r) {
        var a = e,
            e = (z()("Match:", e), a.match(/powr-[^\s\]]*/i)),
            l = a.match(/id="[^"]*"/i),
            e = '<div class="' + e + '" ' + (l = null == (l = null == (l = null == (l = null == (l = null == l ? a.match(/id='[^']*'/i) : l) && null != (l = a.match(/id=[^\]]*/i)) ? l[0].replace("id=", 'id="') + '"' : l) ? a.match(/label="[^"]*"/i) : l) ? a.match(/label='[^']*'/i) : l) ? "" : l) + "></div>";
        return z()("Result is:" + e), e
    }

    function K(e) {
        for (var t = {}, o = e.search("\\?"), n = (e = e.substr(o + 1)).split("&"), i = 0; i < n.length; i++) {
            var r, a = n[i].split("=");
            void 0 === t[a[0]] ? t[a[0]] = a[1] : "string" == typeof t[a[0]] ? (r = [t[a[0]], a[1]], t[a[0]] = r) : t[a[0]].push(a[1])
        }
        return t
    }

    function Q() {
        var e = navigator.userAgent.toLowerCase();
        return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1])
    }

    function Z(e) {
        return -1 < ["subscription-signup-popup", "donate-now-popup", "newslettersignuppopup", "emailpopup", "ebook-popup", "shipping-delay-popup", "sales-popup", "spin-to-win", "pre-sale-popup", "cyber-monday-popup", "coronavirus-popup", "discount-popup", "exit-popup", "covid-19-popup", "spin-wheel", "discount-notification-bar", "zoom-pop-up", "exit-intent-popup", "overlay-popup", "onclick-popup", "sales-pop", "email-popup", "coupon-box", "email-subscription-popup", "popup-notification", "full-screen-popup", "survey-popup", "mailchimp-email-signup", "promotion-popup", "splash-popup", "event-registration-popup", "popup-maker", "slide-in", "donation-popup", "sale-promotion-bar", "email-sign-up", "modal-popup", "newsletter-sign-up-popup", "popup", "coupon-popup", "popup-form"].indexOf(e)
    }

    function $(e) {
        return ["chat", "live-chat", "chat-box", "facebook-chat", "messenger-chat"].includes(e)
    }

    function ee() {
        return function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return 1
            }
        }() && window.location.search && window.location.search.includes("ctk=")
    }

    function te(e) {
        for (var t = !1, o = e; o && o !== document; o = o.parentNode)
            if (null != o.classList && o.classList.contains("powr-ignore")) {
                t = !0;
                break
            }
        return t
    }

    function oe() {
        try {
            return window.top.location.href
        } catch (e) {
            return z()("Couldn't get page url:", e), ""
        }
    }

    function w(t, e) {
        e.addEventListener && (e.addEventListener("powrPingListener", function() {
            return POWR_RECEIVERS[t].listenerConnected = !0
        }, !1), POWR_RECEIVERS[t].ping_interval = setInterval(function() {
            var e = document.querySelectorAll('[powrindex="' + t + '"]')[0];
            e && (POWR_RECEIVERS[t].listenerConnected = !1, e.dispatchEvent(i), !1 === POWR_RECEIVERS[t].listenerConnected && (console.log("POWr Lost connection. Reconnecting"), clearInterval(POWR_RECEIVERS[t].ping_interval), POWR_RECEIVERS[t].receiver = e.contentWindow, g(t), w(t, e)))
        }, 2e3))
    }

    function g(o) {
        var n = new XMLHttpRequest;
        n.open("GET", POWR_RECEIVERS[o].data_url, !0), n.withCredentials = !0, n.onreadystatechange = function() {
            var e, t;
            n.readyState != XMLHttpRequest.DONE && 4 != n.readyState || (200 == n.status ? ((e = JSON.parse(n.responseText)).iframe_index = o, POWR_RECEIVERS[o].data = e, t = setInterval(function() {
                POWR_RECEIVERS[o].loaded && (POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                    message: "loadView",
                    data: e
                }), POWR_RECEIVERS[o].url), clearInterval(t))
            }, 10)) : z()("Error receiving POWr App Data"))
        }, n.send()
    }

    function c(e) {
        switch (e.scrollTo) {
            case "top":
                a(0, e.scrollSpeed);
                break;
            case "bottom":
                t = e.scrollSpeed, a((document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight + 50, t);
                break;
            case "text":
                var t = e.scrollToText,
                    o = e.scrollSpeed;
                (t = function(e) {
                    for (var t = document.querySelectorAll("body, body *"), o = 0; o < t.length; o++)
                        for (var n = t[o], i = n.childNodes, r = 0; r < i.length; r++) {
                            var a = i[r];
                            if (3 == a.nodeType)
                                if (-1 < a.nodeValue.search(e)) return n
                        }
                    return !1
                }(t)) && a(t.getBoundingClientRect().top + window.scrollY - 150, o);
                break;
            case "anchor":
                var o = e.scrollToAnchor,
                    n = e.scrollSpeed;
                (o = document.getElementById(o)) && a(o.getBoundingClientRect().top + window.scrollY - 150, n);
                break;
            case "app":
                n = document.querySelector('iframe[src="' + e.url + '"]');
                n ? e.ios ? window.scrollTo(0, n.offsetTop - 50) : a(n.offsetTop - 50, e.scrollSpeed) : window.scrollBy(0, e.distance)
        }
        var t
    }

    function a(e, t, o) {
        var n = document.documentElement.scrollTop || document.body.scrollTop;
        n !== o && (window.requestAnimationFrame(function() {
            a(e, t, n)
        }), n < e ? window.scrollTo(0, n + (e - n) / t) : window.scrollTo(0, n - (n - e) / t))
    }

    function l(e) {
        z()("Settings got a message!", e);
        try {
            var t = JSON.parse(e.data);
            if ("clearCart" === t.message && fetch("/cart/clear.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(() => {
                    window.location.reload()
                }).catch(e => {
                    console.log("Error during clearing cart", e)
                }), "checkCartIsEmpty" === t.message && fetch("/cart.js", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(e => e.json()).then(e => {
                    if (0 < e.item_count)
                        for (let e = 0; e < POWR_RECEIVERS.length; e++) POWR_RECEIVERS[e].receiver.postMessage(JSON.stringify({
                            message: "showCartTimer"
                        }), POWR_RECEIVERS[e].url)
                }).catch(e => {
                    console.log("Error during checking cart items", e)
                }), "viewLoaded" == t.message) {
                z()("Settings received view loaded");
                var o = t.data.iframe_index,
                    n = (POWR_RECEIVERS[o].loaded = !0, t.data.cookiesToGet);
                0 < n.length && (POWR_RECEIVERS[o].cookies = n.map(function(e) {
                    return {
                        cname: e,
                        value: D(e)
                    }
                }), POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                    message: "cookiesSent",
                    cookies: POWR_RECEIVERS[o].cookies
                }), POWR_RECEIVERS[o].url))
            } else if ("updateSize" == t.message) {
                "undefined" != typeof gadgets && void 0 !== gadgets.window && void 0 !== gadgets.window.adjustHeight && gadgets.window.adjustHeight(t.data.height);
                var i, o = t.data.iframe_index,
                    r = document.querySelectorAll('[powrindex="' + o + '"]')[0];
                if (r) {
                    if (r.height = t.data.height + "px", r.style.height = t.data.height + "px", r.style.display = "inline", null != t.data.postCss)
                        for (var a in t.data.postCss) r.style[a] = t.data.postCss[a];
                    const s = r.parentNode;
                    var l = ie(s);
                    const d = s.getAttribute("id") || "";
                    d.startsWith("bigcommerce_") && ee() && s.dataset && "pagebuilder" === s.dataset.installSrc && (Z(l) || $(l)) && (r.style.display = "block", r.style.position = "unset", r.style.height = "200px")
                }
                t.data.postMessage && "scrollTo" == t.data.postMessage.messageType ? c(t.data.postMessage) : t.data.postMessage && "deliverHashedData" === t.data.postMessage.messageType && (i = t.data.postMessage.data, z()("HASHED DATA RECEIVED", i), __sharethis__ && "function" == typeof __sharethis__.hem && __sharethis__.hem(i)), z()("Updating size of el", r)
            } else "loadMe" == t.message ? (z()("Settings received loadMe request"), o = t.data.iframe_index, null != POWR_RECEIVERS[o] && null != POWR_RECEIVERS[o].data && POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                message: "loadView",
                data: POWR_RECEIVERS[o].data
            }), POWR_RECEIVERS[o].url)) : "setCookie" === t.message && j(t.cname, t.value, t.exdays)
        } catch (e) {}
    }

    function ne() {
        return window.CookieControl && window.CookieControl.isPOWrAllowed && window.CookieControl.isPOWrAllowed()
    }

    function ie(e) {
        const t = e.className.split(/\s+/);
        for (let e = 0; e < t.length; e++)
            if (0 === t[e].toLowerCase().search("powr-")) return t[e].toLowerCase().replace("powr-", "")
    }

    function re(e, t, o, n, i, r, a) {
        var l, s, d, c = document.createElement("iframe");

        function p() {
            var e = {
                message: "loaded",
                data: {
                    iframe_index: s,
                    parent_window_width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
                    parent_window_height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                    powrMetafields: window.powrMetafields,
                    powrShopMetafields: window.powrShopMetafields
                }
            };
            z()("POWr.js sending load message to url" + d + "; iframe:", l), l.contentWindow.postMessage(JSON.stringify(e), d)
        }
        c.src = i, e.classList && e.classList[0] && (c.title = e.classList[0].replace(/-/g, " ")), c.setAttribute("powrindex", o), c.width = "100%", c.height = c.style.height = "0px", Z(t) || (c.style.transition = "height 0.3s", c.style.webkitTransition = "height 0.3s"), c.style.display = "block", c.frameBorder = "0", c.style.visibility = "visible", c.setAttribute("webkitallowfullscreen", ""), c.setAttribute("mozallowfullscreen", ""), c.setAttribute("allowfullscreen", ""), "ecwid" == n && (e.style.minWidth = "280px"), s = o, d = i, (l = c).addEventListener ? l.addEventListener("load", p) : l.attachEvent("onload", p), "async" == a && (g(o), w(o, c)), "complete" === document.readyState || Z(t) ? u(c, e, i, r) : X(window, "load", () => {
            u(c, e, i, r)
        })
    }
}();
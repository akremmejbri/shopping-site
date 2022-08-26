! function(c) {
    var b = {};

    function a(d) {
        if (b[d]) return b[d].exports;
        var e = b[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return c[d].call(e.exports, e, e.exports, a), e.l = !0, e.exports
    }
    a.m = c, a.c = b, a.d = function(b, c, d) {
        a.o(b, c) || Object.defineProperty(b, c, {
            enumerable: !0,
            get: d
        })
    }, a.r = function(a) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }, a.t = function(b, d) {
        var c, e;
        if (1 & d && (b = a(b)), 8 & d) return b;
        if (4 & d && "object" == typeof b && b && b.__esModule) return b;
        if (c = Object.create(null), a.r(c), Object.defineProperty(c, "default", {
                enumerable: !0,
                value: b
            }), 2 & d && "string" != typeof b)
            for (e in b) a.d(c, e, function(a) {
                return b[a]
            }.bind(null, e));
        return c
    }, a.n = function(b) {
        var c = b && b.__esModule ? function() {
            return b.default
        } : function() {
            return b
        };
        return a.d(c, "a", c), c
    }, a.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, a.p = "", a(a.s = 0)
}([function(aj, _, ah) {
    "use strict";
    var G, F, B, z, y, E, v, k, n, l, q, r, H, I, J, L, M, N, O, P, R, S, T, U, V, W, X, Y, Z, x, Q, aa;
    ah.r(_), G = {
        hooks: {},
        navbar: {
            add: !0,
            title: "Menu",
            titleLink: "parent"
        },
        slidingSubmenus: !0
    }, F = {
        classNames: {
            divider: "Divider",
            nolistview: "NoListview",
            nopanel: "NoPanel",
            panel: "Panel",
            selected: "Selected",
            vertical: "Vertical"
        },
        language: null,
        panelNodetype: ["ul", "ol", "div"],
        screenReader: {
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
        }
    };
    const d = (a, b) => {
            "object" != j(a) && (a = {}), "object" != j(b) && (b = {});
            for (let c in b) b.hasOwnProperty(c) && (void 0 === a[c] ? a[c] = b[c] : "object" == j(a[c]) && d(a[c], b[c]));
            return a
        },
        j = a => ({}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()),
        g = () => "mm-" + ai++;
    let ai = 0;
    const D = a => "mm-clone-" == a.slice(0, 9) ? a : "mm-clone-" + a,
        t = a => "mm-clone-" == a.slice(0, 9) ? a.slice(9) : a,
        i = {},
        f = (b, a) => {
            void 0 === i[a] && (i[a] = {}), d(i[a], b)
        };
    B = {
        "Close submenu": "بستن زیرمنو",
        Menu: "منو",
        "Open submenu": "بازکردن زیرمنو",
        "Toggle submenu": "سوییچ زیرمنو"
    }, z = {
        "Close submenu": "Submenu sluiten",
        Menu: "Menu",
        "Open submenu": "Submenu openen",
        "Toggle submenu": "Submenu wisselen"
    }, y = {
        "Close submenu": "Fechar submenu",
        Menu: "Menu",
        "Open submenu": "Abrir submenu",
        "Toggle submenu": "Alternar submenu"
    }, E = {
        "Close submenu": "Закрыть подменю",
        Menu: "Меню",
        "Open submenu": "Открыть подменю",
        "Toggle submenu": "Переключить подменю"
    }, v = {
        "Close submenu": "Zatvoriť submenu",
        Menu: "Menu",
        "Open submenu": "Otvoriť submenu",
        "Toggle submenu": "Prepnúť submenu"
    };
    const c = c => {
            const a = c.split("."),
                b = document.createElement(a.shift());
            return b.classList.add(...a), b
        },
        b = (b, a) => a.length ? [].slice.call(b.querySelectorAll(a)) : [],
        a = (c, a) => {
            const b = Array.prototype.slice.call(c.children);
            return a ? b.filter(b => b.matches(a)) : b
        },
        u = a => a.filter(a => !a.matches(".mm-hidden")),
        w = c => {
            let b = [];
            return u(c).forEach(c => {
                b.push(...a(c, "a.mm-listitem__text"))
            }), b.filter(a => !a.matches(".mm-btn--next"))
        },
        m = (a, b, c) => {
            a.matches("." + b) && a.classList.add(c)
        };
    let h = {};
    const p = (a, b, c) => {
            "number" == typeof a && (a = "(min-width: " + a + "px)"), h[a] = h[a] || [], h[a].push({
                yes: b,
                no: c
            })
        },
        A = (a, b) => {
            var c = b.matches ? "yes" : "no";
            for (let b = 0; b < h[a].length; b++) h[a][b][c]()
        };
    q = function(a, b, c) {
        if (!b.has(a)) throw new TypeError("attempted to set private field on non-instance");
        return b.set(a, c), c
    }, r = function(a, b) {
        if (!b.has(a)) throw new TypeError("attempted to get private field on non-instance");
        return b.get(a)
    }, f({
        "Close submenu": "Untermenü schließen",
        Menu: "Menü",
        "Open submenu": "Untermenü öffnen",
        "Toggle submenu": "Untermenü wechseln"
    }, "de"), f(B, "fa"), f(z, "nl"), f(y, "pt_br"), f(E, "ru"), f(v, "sk");
    class e {
        constructor(a, b, c) {
            return k.set(this, void 0), n.set(this, void 0), l.set(this, void 0), this.opts = d(b, G), this.conf = d(c, F), this._api = ["i18n", "bind", "openPanel", "closePanel", "setSelected"], this.node = {}, this.hook = {}, this.node.menu = "string" == typeof a ? document.querySelector(a) : a, "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this.trigger("init:before"), this._initObservers(), this._initAddons(), this._initHooks(), this._initAPI(), this._initMenu(), this._initPanels(), this._initOpened(), (() => {
                for (let a in h) {
                    let b = window.matchMedia(a);
                    A(a, b), b.onchange = c => {
                        A(a, b)
                    }
                }
            })(), this.trigger("init:after"), this
        }
        openPanel(c, d = !0, e = !0) {
            if (c) {
                if (c.matches(".mm-panel") || (c = c.closest(".mm-panel")), this.trigger("openPanel:before", [c, {
                        animation: d,
                        setfocus: e
                    }]), c.parentElement.matches(".mm-listitem--vertical")) c.parentElement.classList.add("mm-listitem--opened");
                else {
                    const g = a(this.node.pnls, ".mm-panel--opened")[0];
                    c.matches(".mm-panel--parent") && g && g.classList.add("mm-panel--highest");
                    const h = ["mm-panel--opened", "mm-panel--parent"],
                        i = [];
                    d ? h.push("mm-panel--noanimation") : i.push("mm-panel--noanimation"), a(this.node.pnls, ".mm-panel").forEach(a => {
                        a.classList.add(...i), a.classList.remove(...h), a !== g && a.classList.remove("mm-panel--highest")
                    }), c.classList.add("mm-panel--opened");
                    let f = b(this.node.pnls, "#" + c.dataset.mmParent)[0];
                    for (; f;) f = f.closest(".mm-panel"), f.classList.add("mm-panel--parent"), f = b(this.node.pnls, "#" + f.dataset.mmParent)[0];
                    e && this.node.pnls.focus()
                }
                this.trigger("openPanel:after", [c, {
                    animation: d,
                    setfocus: e
                }])
            }
        }
        closePanel(c, d = !0, e = !0) {
            if (c && c.matches(".mm-panel--opened")) {
                if (this.trigger("closePanel:before", [c]), c.parentElement.matches(".mm-listitem--vertical")) c.parentElement.classList.remove("mm-listitem--opened");
                else if (c.dataset.mmParent) {
                    const a = b(this.node.pnls, "#" + c.dataset.mmParent)[0];
                    this.openPanel(a, d, e)
                } else {
                    const b = a(this.node.pnls, ".mm-panel--parent").pop();
                    if (b && b !== c) this.openPanel(b, d, e);
                    else {
                        const b = a(this.node.pnls, ".mm-panel")[0];
                        b && b !== c && this.openPanel(b, d, e)
                    }
                }
                this.trigger("closePanel:after", [c])
            }
        }
        togglePanel(a) {
            let b = "openPanel";
            (a.parentElement.matches(".mm-listitem--opened") || a.matches(".mm-panel--opened")) && (b = "closePanel"), this[b](a)
        }
        setSelected(a) {
            this.trigger("setSelected:before", [a]), b(this.node.menu, ".mm-listitem--selected").forEach(a => {
                a.classList.remove("mm-listitem--selected")
            }), a.classList.add("mm-listitem--selected"), this.trigger("setSelected:after", [a])
        }
        bind(a, b) {
            this.hook[a] = this.hook[a] || [], this.hook[a].push(b)
        }
        trigger(a, c) {
            if (this.hook[a])
                for (var b = 0, d = this.hook[a].length; b < d; b++) this.hook[a][b].apply(this, c)
        }
        _initObservers() {
            q(this, k, new MutationObserver(a => {
                a.forEach(a => {
                    a.addedNodes.forEach(a => {
                        a.matches(this.conf.panelNodetype.join(", ")) && this._initListview(a)
                    })
                })
            })), q(this, n, new MutationObserver(a => {
                a.forEach(a => {
                    a.addedNodes.forEach(a => {
                        this._initListitem(a)
                    })
                })
            })), q(this, l, new MutationObserver(a => {
                a.forEach(a => {
                    a.addedNodes.forEach(a => {
                        (null == a ? void 0 : a.matches(this.conf.panelNodetype.join(", "))) && this._initSubPanel(a)
                    })
                })
            }))
        }
        _initAPI() {
            const a = this;
            this.API = {}, this._api.forEach(b => {
                this.API[b] = function() {
                    return a[b].apply(a, arguments)
                }
            }), this.node.menu.mmApi = this.API
        }
        _initHooks() {
            for (let a in this.opts.hooks) this.bind(a, this.opts.hooks[a])
        }
        _initAddons() {
            this.trigger("initAddons:before");
            for (let a in e.addons) e.addons[a].call(this);
            this.trigger("initAddons:after")
        }
        _initMenu() {
            this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.classList.add("mm-menu"), this.node.menu.id = this.node.menu.id || g(), this.node.menu.setAttribute("tabindex", "-1");
            const b = a(this.node.menu).filter(a => a.matches(this.conf.panelNodetype.join(", ")));
            this.node.pnls = c("div.mm-panels"), this.node.menu.append(this.node.pnls), this.node.pnls.setAttribute("tabindex", "-1"), b.forEach(a => {
                this._initPanel(a)
            }), this.trigger("initMenu:after")
        }
        _initPanels() {
            this.trigger("initPanels:before"), this.node.menu.addEventListener("click", d => {
                var a, c;
                const e = (null === (c = null === (a = d.target) || void 0 === a ? void 0 : a.closest("a[href]")) || void 0 === c ? void 0 : c.getAttribute("href")) || "";
                if ("#" === e.slice(0, 1)) try {
                    const a = b(this.node.menu, e)[0];
                    a && (d.preventDefault(), this.togglePanel(a))
                } catch (a) {}
            }, {
                capture: !0
            }), this.trigger("initPanels:after")
        }
        _initPanel(b) {
            var d;
            if (!b.matches(".mm-panel") && (m(b, this.conf.classNames.panel, "mm-panel"), m(b, this.conf.classNames.nopanel, "mm-nopanel"), !b.matches(".mm-nopanel"))) {
                if (this.trigger("initPanel:before", [b]), b.id = b.id || g(), b.matches("ul, ol")) {
                    const a = c("div");
                    a.id = b.id, b.removeAttribute("id"), [].slice.call(b.classList).filter(a => "mm-" === a.slice(0, 3)).forEach(c => {
                        a.classList.add(c), b.classList.remove(c)
                    }), Object.keys(b.dataset).filter(a => "mm" === a.slice(0, 2)).forEach(c => {
                        a.dataset[c] = b.dataset[c], delete b.dataset[c]
                    }), b.before(a), a.append(b), b = a
                }
                return b.classList.add("mm-panel"), (null === (d = b.parentElement) || void 0 === d ? void 0 : d.matches(".mm-listitem--vertical")) || this.node.pnls.append(b), this._initNavbar(b), a(b, "ul, ol").forEach(a => {
                    this._initListview(a)
                }), r(this, k).observe(b, {
                    childList: !0
                }), this.trigger("initPanel:after", [b]), b
            }
        }
        _initNavbar(e) {
            if (a(e, ".mm-navbar").length) return;
            let f = null,
                d = null;
            if (e.dataset.mmParent)
                for (f = b(this.node.pnls, "#" + e.dataset.mmParent)[0], d = f.closest(".mm-panel"); d.closest(".mm-listitem--vertical");) d = d.parentElement.closest(".mm-panel");
            if (null == f ? void 0 : f.matches(".mm-listitem--vertical")) return;
            this.trigger("initNavbar:before", [e]);
            const i = c("div.mm-navbar");
            if (this.opts.navbar.add || i.classList.add("mm-hidden"), d) {
                const a = c("a.mm-btn.mm-btn--prev.mm-navbar__btn");
                a.href = "#" + d.id, a.title = this.i18n(this.conf.screenReader.closeSubmenu), i.append(a)
            }
            let h = null;
            f ? h = a(f, ".mm-listitem__text")[0] : d && (h = b(d, 'a[href="#' + e.id + '"]')[0]);
            const g = c("a.mm-navbar__title");
            switch (g.tabIndex = -1, g.ariaHidden = "true", this.opts.navbar.titleLink) {
                case "anchor":
                    h && (g.href = h.getAttribute("href"));
                    break;
                case "parent":
                    d && (g.href = "#" + d.id)
            }
            const j = c("span");
            var k;
            j.innerHTML = e.dataset.mmTitle || ((k = h) ? [].slice.call(k.childNodes).filter(a => a.nodeType === Node.TEXT_NODE).map(a => a.nodeValue.trim()).join(" ") : "") || this.i18n(this.opts.navbar.title) || this.i18n("Menu"), e.prepend(i), i.append(g), g.append(j), this.trigger("initNavbar:after", [e])
        }
        _initListview(b) {
            ["htmlulistelement", "htmlolistelement"].includes(j(b)) && (b.matches(".mm-listview") || (m(b, this.conf.classNames.nolistview, "mm-nolistview"), b.matches(".mm-nolistview") || (this.trigger("initListview:before", [b]), b.classList.add("mm-listview"), a(b).forEach(a => {
                this._initListitem(a)
            }), r(this, n).observe(b, {
                childList: !0
            }), this.trigger("initListview:after", [b]))))
        }
        _initListitem(b) {
            ["htmllielement"].includes(j(b)) && (b.matches(".mm-listitem") || (m(b, this.conf.classNames.divider, "mm-divider"), b.matches(".mm-divider") || (this.trigger("initListitem:before", [b]), b.classList.add("mm-listitem"), m(b, this.conf.classNames.selected, "mm-listitem--selected"), a(b, "a, span").forEach(a => {
                a.classList.add("mm-listitem__text")
            }), a(b, this.conf.panelNodetype.join(", ")).forEach(a => {
                this._initSubPanel(a)
            }), r(this, l).observe(b, {
                childList: !0
            }), this.trigger("initListitem:after", [b]))))
        }
        _initSubPanel(d) {
            if (d.matches(".mm-panel")) return;
            const b = d.parentElement;
            (d.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus) && b.classList.add("mm-listitem--vertical"), b.id = b.id || g(), d.id = d.id || g(), b.dataset.mmChild = d.id, d.dataset.mmParent = b.id;
            let e = a(b, ".mm-btn")[0];
            e || (e = c("a.mm-btn.mm-btn--next.mm-listitem__btn"), a(b, "a, span").forEach(a => {
                a.matches("span") ? (e.classList.add("mm-listitem__text"), e.innerHTML = a.innerHTML, b.insertBefore(e, a.nextElementSibling), a.remove()) : b.insertBefore(e, a.nextElementSibling)
            }), e.title = this.i18n(this.conf.screenReader[b.matches(".mm-listitem--vertical") ? "toggleSubmenu" : "openSubmenu"])), e.href = "#" + d.id, this._initPanel(d)
        }
        _initOpened() {
            this.trigger("initOpened:before");
            const c = b(this.node.pnls, ".mm-listitem--selected").pop();
            let d = a(this.node.pnls, ".mm-panel")[0];
            c && (this.setSelected(c), d = c.closest(".mm-panel")), this.openPanel(d, !1, !1), this.trigger("initOpened:after")
        }
        i18n(a) {
            return ((b, a) => "string" == typeof a && void 0 !== i[a] && i[a][b] || b)(a, this.conf.language)
        }
        static i18n(a = {}, b = "") {
            if (!a || !b) return i;
            f(a, b)
        }
    }
    k = new WeakMap, n = new WeakMap, l = new WeakMap, e.addons = {}, e.node = {}, e.vars = {}, H = {
        use: !0,
        position: "left"
    }, I = {
        clone: !1,
        menu: {
            insertMethod: "prepend",
            insertSelector: "body"
        },
        page: {
            nodetype: "div",
            selector: null,
            noSelector: []
        },
        screenReader: {
            closeMenu: "Close menu",
            openMenu: "Open menu"
        }
    }, e.prototype.open = function() {
        this.node.menu.matches(".mm-menu--opened") || (this.trigger("open:before"), this.node.wrpr.classList.add("mm-wrapper--opened"), this.node.menu.classList.add("mm-menu--opened"), this.node.wrpr.classList.add("mm-wrapper--opened"), this.node.menu.focus(), this.trigger("open:after"))
    }, e.prototype.close = function() {
        var a;
        if (!this.node.menu.matches(".mm-menu--opened")) return;
        this.trigger("close:before"), this.node.menu.classList.remove("mm-menu--opened"), this.node.wrpr.classList.remove("mm-wrapper--opened"), null === (a = document.querySelector(`[href="#${this.node.menu.id}"]`) || this.node.page || null) || void 0 === a || a.focus(), this.trigger("close:after")
    }, e.prototype.setPage = function(d) {
        var f = this.conf.offCanvas;
        if (!d) {
            let e = "string" == typeof f.page.selector ? b(document.body, f.page.selector) : a(document.body, f.page.nodetype);
            if (e = e.filter(a => !a.matches(".mm-menu, .mm-wrapper__blocker")), f.page.noSelector.length && (e = e.filter(a => !a.matches(f.page.noSelector.join(", ")))), e.length > 1) {
                let a = c("div");
                e[0].before(a), e.forEach(b => {
                    a.append(b)
                }), e = [a]
            }
            d = e[0]
        }
        this.trigger("setPage:before", [d]), d.setAttribute("tabindex", "-1"), d.classList.add("mm-page", "mm-slideout"), d.id = d.id || g(), e.node.blck.setAttribute("href", "#" + d.id), e.node.page = d, this.trigger("setPage:after", [d])
    }, J = {
        fix: !0
    };
    const K = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
    L = {
        close: !1,
        open: !1
    }, M = {
        add: !1
    }, N = {
        use: !1,
        top: [],
        bottom: [],
        position: "left",
        type: "default"
    }, O = {
        add: !1,
        blockPanel: !0,
        visible: 3
    }, P = {
        breadcrumbs: {
            separator: "/",
            removeFirst: !1
        }
    };

    function o() {
        this.opts.navbars = this.opts.navbars || [], this.conf.navbars = this.conf.navbars || {}, d(this.conf.navbars, P);
        let b = this.opts.navbars;
        if (void 0 !== b && (b instanceof Array || (b = [b]), b.length)) {
            var e = {};
            b.forEach(b => {
                if (!(b = function(a) {
                        return "boolean" == typeof a && a && (a = {}), "object" != typeof a && (a = {}), void 0 === a.content && (a.content = ["prev", "title"]), a.content instanceof Array || (a.content = [a.content]), void 0 === a.use && (a.use = !0), a
                    }(b)).use) return;
                const d = c("div.mm-navbar");
                let {
                    position: f
                } = b;
                "bottom" !== f && (f = "top"), e[f] || (e[f] = c("div.mm-navbars.mm-navbars--" + f)), e[f].append(d);
                for (let f = 0, g = b.content.length; f < g; f++) {
                    const e = b.content[f];
                    if ("string" == typeof e) {
                        const b = o.navbarContents[e];
                        if ("function" == typeof b) b.call(this, d);
                        else {
                            let b = c("span");
                            b.innerHTML = e;
                            const f = a(b);
                            1 == f.length && (b = f[0]), d.append(b)
                        }
                    } else d.append(e)
                }
                if ("string" == typeof b.type) {
                    const a = o.navbarTypes[b.type];
                    "function" == typeof a && a.call(this, d)
                }
                let g = () => {
                        d.classList.remove("mm-hidden")
                    },
                    h = () => {
                        d.classList.add("mm-hidden")
                    };
                "boolean" == typeof b.use ? this.bind("initMenu:after", g) : p(b.use, g, h)
            }), this.bind("initMenu:after", () => {
                for (let a in e) this.node.pnls["bottom" == a ? "after" : "before"](e[a])
            })
        }
    }
    o.navbarContents = {
        breadcrumbs: function(e) {
            var d = c("div.mm-navbar__breadcrumbs");
            e.append(d), this.bind("initNavbar:after", e => {
                if (!e.querySelector(".mm-navbar__breadcrumbs")) {
                    a(e, ".mm-navbar")[0].classList.add("mm-hidden");
                    for (var f = [], g = c("span.mm-navbar__breadcrumbs"), d = e, h = !0; d;) {
                        if (!(d = d.closest(".mm-panel")).parentElement.matches(".mm-listitem--vertical")) {
                            let a = b(d, ".mm-navbar__title span")[0];
                            if (a) {
                                let b = a.textContent;
                                b.length && f.unshift(h ? `<span>${b}</span>` : `<a \n                                    href="#${d.id}" \n                                    title="${this.i18n(this.conf.screenReader.openSubmenu)}"\n                                    >${b}</a>`)
                            }
                            h = !1
                        }
                        d = b(this.node.pnls, "#" + d.dataset.mmParent)[0]
                    }
                    this.conf.navbars.breadcrumbs.removeFirst && f.shift(), g.innerHTML = f.join('<span class="mm-separator">' + this.conf.navbars.breadcrumbs.separator + "</span>"), a(e, ".mm-navbar")[0].append(g)
                }
            }), this.bind("openPanel:before", b => {
                var a = b.querySelector(".mm-navbar__breadcrumbs");
                d.innerHTML = a ? a.innerHTML : ""
            })
        },
        close: function(b) {
            const a = c("a.mm-btn.mm-btn--close.mm-navbar__btn");
            a.title = this.i18n(this.conf.offCanvas.screenReader.closeMenu), b.append(a), this.bind("setPage:after", b => {
                a.href = "#" + b.id
            })
        },
        prev: function(d) {
            let b = c("a.mm-btn.mm-hidden");
            d.append(b), this.bind("initNavbar:after", b => {
                a(b, ".mm-navbar")[0].classList.add("mm-hidden")
            }), this.bind("openPanel:before", a => {
                if (a.parentElement.matches(".mm-listitem--vertical")) return;
                b.classList.add("mm-hidden");
                const c = a.querySelector(".mm-navbar__btn.mm-btn--prev");
                if (c) {
                    const a = c.cloneNode(!0);
                    b.after(a), b.remove(), b = a
                }
            })
        },
        searchfield: function(b) {
            let a = c("div.mm-navbar__searchfield");
            a.id = g(), b.append(a), this.opts.searchfield = this.opts.searchfield || {}, this.opts.searchfield.add = !0, this.opts.searchfield.addTo = "#" + a.id
        },
        title: function(b) {
            let a = c("a.mm-navbar__title");
            b.append(a), this.bind("openPanel:before", b => {
                if (b.parentElement.matches(".mm-listitem--vertical")) return;
                const c = b.querySelector(".mm-navbar__title");
                if (c) {
                    const b = c.cloneNode(!0);
                    a.after(b), a.remove(), a = b
                }
            })
        }
    }, o.navbarTypes = {
        tabs: function(c) {
            function d(f) {
                const e = a(c, `.mm-navbar__tab[href="#${f.id}"]`)[0];
                if (e) e.classList.add("mm-navbar__tab--selected"), e.ariaExpanded = "true";
                else {
                    const a = b(this.node.pnls, "#" + f.dataset.mmParent)[0];
                    a && d.call(this, a.closest(".mm-panel"))
                }
            }
            c.classList.add("mm-navbar--tabs"), c.closest(".mm-navbars").classList.add("mm-navbars--has-tabs"), a(c, "a").forEach(a => {
                a.classList.add("mm-navbar__tab")
            }), this.bind("openPanel:before", b => {
                a(c, "a").forEach(a => {
                    a.classList.remove("mm-navbar__tab--selected"), a.ariaExpanded = "false"
                }), d.call(this, b)
            }), this.bind("initPanels:after", () => {
                c.addEventListener("click", e => {
                    var a, c, d;
                    const f = null === (c = null === (a = e.target) || void 0 === a ? void 0 : a.closest(".mm-navbar__tab")) || void 0 === c ? void 0 : c.getAttribute("href");
                    try {
                        null === (d = b(this.node.pnls, f + ".mm-panel")[0]) || void 0 === d || d.classList.add("mm-panel--noanimation")
                    } catch (a) {}
                }, {
                    capture: !0
                })
            })
        }
    }, R = {
        scroll: !1,
        update: !1
    }, S = {
        scrollOffset: 0,
        updateOffset: 50
    }, T = {
        add: !1,
        addTo: "panels",
        noResults: "No results found.",
        placeholder: "Search",
        searchIn: "panels",
        splash: "",
        title: "Search"
    }, U = {
        cancel: !0,
        clear: !0,
        form: {},
        input: {},
        panel: {},
        submit: !1
    }, V = {
        cancel: "انصراف",
        "Cancel searching": "لغو جستجو",
        "Clear searchfield": "پاک کردن فیلد جستجو",
        "No results found.": "نتیجه‌ای یافت نشد.",
        Search: "جستجو"
    }, W = {
        cancel: "annuleren",
        "Cancel searching": "Zoeken annuleren",
        "Clear searchfield": "Zoekveld leeg maken",
        "No results found.": "Geen resultaten gevonden.",
        Search: "Zoeken"
    }, X = {
        cancel: "cancelar",
        "Cancel searching": "Cancelar pesquisa",
        "Clear searchfield": "Limpar campo de pesquisa",
        "No results found.": "Nenhum resultado encontrado.",
        Search: "Buscar"
    }, Y = {
        cancel: "отменить",
        "Cancel searching": "Отменить поиск",
        "Clear searchfield": "Очистить поле поиска",
        "No results found.": "Ничего не найдено.",
        Search: "Найти"
    }, Z = {
        cancel: "zrušiť",
        "Cancel searching": "Zrušiť vyhľadávanie",
        "Clear searchfield": "Vymazať pole vyhľadávania",
        "No results found.": "Neboli nájdené žiadne výsledky.",
        Search: "Vyhľadávanie"
    }, f({
        cancel: "abbrechen",
        "Cancel searching": "Suche abbrechen",
        "Clear searchfield": "Suchfeld löschen",
        "No results found.": "Keine Ergebnisse gefunden.",
        Search: "Suche"
    }, "de"), f(V, "fa"), f(W, "nl"), f(X, "pt_br"), f(Y, "ru"), f(Z, "sk");
    const ag = function() {
            const d = this.opts.searchfield,
                e = this.conf.searchfield;
            let b = a(this.node.pnls, ".mm-panel--search")[0];
            return b || (b = c("div.mm-panel--search"), s(b, e.panel), d.title.length && (b.dataset.mmTitle = this.i18n(d.title)), b.append(c("ul")), this._initPanel(b), b)
        },
        $ = function(a) {
            const d = this.opts.searchfield;
            if (a.matches(d.addTo)) {
                const c = a.matches(".mm-panel--search");
                if (!b(a, ".mm-searchfield").length) {
                    const b = C.call(this, c);
                    c && b.classList.add("mm-searchfield--cancelable"), a.prepend(b), ab.call(this, b)
                }
            }
            if (d.splash.length && a.matches(".mm-panel--search") && !b(a, ".mm-panel__splash").length) {
                const b = c("div.mm-panel__splash");
                b.innerHTML = d.splash, a.append(b)
            }
            if (d.noResults.length && !b(a, ".mm-panel__noresults").length) {
                const b = c("div.mm-panel__noresults");
                b.innerHTML = this.i18n(d.noResults), a.append(b)
            }
        },
        C = function(h = !1) {
            const g = this.opts.searchfield,
                d = this.conf.searchfield,
                e = c("form.mm-searchfield");
            s(e, d.form);
            const f = c("div.mm-searchfield__input");
            e.append(f);
            const b = c("input");
            if (f.append(b), b.type = "text", b.autocomplete = "off", b.placeholder = this.i18n(g.placeholder), b.setAttribute("aria-label", this.i18n(g.placeholder)), s(b, d.input), d.submit) {
                const a = c("button.mm-btnreset.mm-btn.mm-btn--next.mm-searchfield__btn");
                a.type = "submit", f.append(a)
            } else if (d.clear) {
                const a = c("button.mm-btnreset.mm-btn.mm-btn--close.mm-searchfield__btn");
                a.type = "reset", a.title = this.i18n("Clear searchfield"), f.append(a), e.addEventListener("reset", () => {
                    window.requestAnimationFrame(() => {
                        b.dispatchEvent(new Event("input"))
                    })
                })
            }
            if (d.cancel && h) {
                const b = c("a.mm-searchfield__cancel");
                b.href = "#", b.title = this.i18n("Cancel searching"), b.textContent = this.i18n("cancel"), e.append(b), b.addEventListener("click", () => {
                    this.closePanel(a(this.node.pnls, ".mm-panel--search")[0], !1)
                })
            }
            return e
        },
        ab = function(e) {
            const f = this.opts.searchfield,
                c = e.closest(".mm-panel") || b(this.node.pnls, ".mm-panel--search")[0],
                g = b(e, "input")[0];
            let d = c.matches(".mm-panel--search") ? b(this.node.pnls, f.searchIn) : [c];
            d = d.filter(a => !a.matches(".mm-panel--search"));
            const h = () => {
                const h = g.value.toLowerCase().trim(),
                    i = [];
                if (d.forEach(a => {
                        a.scrollTop = 0, i.push(...b(a, ".mm-listitem"))
                    }), h.length) {
                    this.trigger("search:before"), e.classList.add("mm-searchfield--searching"), c.classList.add("mm-panel--searching"), i.forEach(b => {
                        const c = a(b, ".mm-listitem__text")[0];
                        var d;
                        (!c || (d = c, Array.prototype.slice.call(d.childNodes).filter(a => 3 == a.nodeType).map(a => a.textContent).join(" ")).toLowerCase().indexOf(h) > -1) && (b.dataset.mmSearchresult = h)
                    });
                    let b = 0;
                    b = c.matches(".mm-panel--search") ? ac(c, h, d) : ae(h, d), c.classList[0 == b ? "add" : "remove"]("mm-panel--noresults"), this.trigger("search:after")
                } else this.trigger("clear:before"), e.classList.remove("mm-searchfield--searching"), c.classList.remove("mm-panel--searching", "mm-panel--noresults"), c.matches(".mm-panel--search") ? (ad(c), f.splash || this.closePanel(c, !1, !1)) : af(d), this.trigger("clear:after")
            };
            g.addEventListener("input", h), h()
        },
        ac = (e, f, g) => {
            const a = b(e, ".mm-listview")[0];
            a.innerHTML = "";
            let d = 0;
            return g.forEach(g => {
                const e = b(g, `[data-mm-searchresult="${f}"]`);
                if (d += e.length, e.length) {
                    const d = b(g, ".mm-navbar__title")[0];
                    if (d) {
                        const b = c("li.mm-divider");
                        b.innerHTML = d.innerHTML, a.append(b)
                    }
                    e.forEach(b => {
                        a.append(b.cloneNode(!0))
                    })
                }
            }), d
        },
        ad = a => {
            b(a, ".mm-listview")[0].innerHTML = ""
        },
        ae = (a, d) => {
            let c = 0;
            return d.forEach(e => {
                const d = b(e, `[data-mm-searchresult="${a}"]`);
                c += d.length, d.length && d.forEach(c => {
                    const b = ((d, b) => {
                        let c = [],
                            a = d.previousElementSibling;
                        for (; a;) b && !a.matches(b) || c.push(a), a = a.previousElementSibling;
                        return c
                    })(c, ".mm-divider")[0];
                    b && (b.dataset.mmSearchresult = a)
                }), b(e, ".mm-listitem, .mm-divider").forEach(b => {
                    b.classList[b.dataset.mmSearchresult === a ? "remove" : "add"]("mm-hidden")
                })
            }), c
        },
        af = a => {
            a.forEach(a => {
                b(a, ".mm-listitem, .mm-divider").forEach(a => {
                    a.classList.remove("mm-hidden")
                })
            })
        },
        s = (b, a) => {
            a && Object.keys(a).forEach(c => {
                b[c] = a[c]
            })
        };
    x = {
        add: !1,
        addTo: "panels"
    }, Q = {
        current: !0,
        hover: !1,
        parent: !1
    }, aa = {
        collapsed: {
            use: !1,
            blockMenu: !0
        },
        expanded: {
            use: !1,
            initial: "open"
        }
    }, e.addons = {
        offcanvas: function() {
            this.opts.offCanvas = this.opts.offCanvas || {}, this.conf.offCanvas = this.conf.offCanvas || {};
            const a = d(this.opts.offCanvas, H),
                f = d(this.conf.offCanvas, I);
            if (!a.use) return;
            const h = ["left", "left-front", "right", "right-front", "top", "bottom"];
            h.includes(a.position) || (a.position = h[0]), this._api.push("open", "close", "setPage"), e.node.blck || this.bind("initMenu:before", () => {
                const a = c("a.mm-wrapper__blocker.mm-slideout");
                a.id = g(), a.title = this.i18n(f.screenReader.closeMenu), a.setAttribute("tabindex", "-1"), document.querySelector(f.menu.insertSelector).append(a), e.node.blck = a
            }), this.bind("initMenu:before", () => {
                f.clone && (this.node.menu = this.node.menu.cloneNode(!0), this.node.menu.id && (this.node.menu.id = D(this.node.menu.id)), b(this.node.menu, "[id]").forEach(a => {
                    a.id = D(a.id)
                })), this.node.wrpr = document.querySelector(f.menu.insertSelector), this.node.wrpr.classList.add("mm-wrapper--position-" + a.position), this.node.wrpr[f.menu.insertMethod](this.node.menu)
            }), this.bind("initMenu:after", () => {
                this.setPage(e.node.page), this.node.menu.classList.add("mm-menu--offcanvas", "mm-menu--position-" + a.position);
                let b = window.location.hash;
                if (b) {
                    let a = t(this.node.menu.id);
                    a && a == b.slice(1) && setTimeout(() => {
                        this.open()
                    }, 1e3)
                }
            }), document.addEventListener("click", a => {
                var b;
                switch (null === (b = a.target.closest("a")) || void 0 === b ? void 0 : b.getAttribute("href")) {
                    case "#" + t(this.node.menu.id):
                        a.preventDefault(), this.open();
                        break;
                    case "#" + t(e.node.page.id):
                        a.preventDefault(), this.close()
                }
            }), document.addEventListener("keyup", a => {
                "Escape" == a.key && this.close()
            }), document.addEventListener("keyup", b => {
                var a;
                "Tab" == b.key && this.node.menu.matches(".mm-menu--opened") && !(null === (a = document.activeElement) || void 0 === a ? void 0 : a.closest("#" + this.node.menu.id)) && (console.log(document.activeElement), this.close())
            })
        },
        scrollBugFix: function() {
            if (!K || !this.opts.offCanvas.use) return;
            if (this.opts.scrollBugFix = this.opts.scrollBugFix || {}, !d(this.opts.scrollBugFix, J).fix) return;
            const b = (c => {
                let a = "",
                    b = null;
                return c.addEventListener("touchstart", c => {
                    1 === c.touches.length && (a = "", b = c.touches[0].pageY)
                }), c.addEventListener("touchend", c => {
                    0 === c.touches.length && (a = "", b = null)
                }), c.addEventListener("touchmove", c => {
                    if (a = "", b && 1 === c.touches.length) {
                        const d = c.changedTouches[0].pageY;
                        d > b ? a = "down" : d < b && (a = "up"), b = d
                    }
                }), {
                    get: () => a
                }
            })(this.node.menu);
            this.node.menu.addEventListener("scroll", a => {
                a.preventDefault(), a.stopPropagation()
            }, {
                passive: !1
            }), this.node.menu.addEventListener("touchmove", c => {
                let a = c.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");
                a && a.closest(".mm-listitem--vertical") && (a = ((d, c) => {
                    let b = [],
                        a = d.parentElement;
                    for (; a;) b.push(a), a = a.parentElement;
                    return c ? b.filter(a => a.matches(c)) : b
                })(a, ".mm-panel").pop()), a ? (a.scrollHeight === a.offsetHeight || 0 == a.scrollTop && "down" == b.get() || a.scrollHeight == a.scrollTop + a.offsetHeight && "up" == b.get()) && c.stopPropagation() : c.stopPropagation()
            }, {
                passive: !1
            }), this.bind("open:after", () => {
                var b = a(this.node.pnls, ".mm-panel--opened")[0];
                b && (b.scrollTop = 0)
            }), window.addEventListener("orientationchange", c => {
                var b = a(this.node.pnls, ".mm-panel--opened")[0];
                b && (b.scrollTop = 0, b.style["-webkit-overflow-scrolling"] = "auto", b.style["-webkit-overflow-scrolling"] = "touch")
            })
        },
        theme: function() {
            this.opts.theme = this.opts.theme || "light", this.bind("initMenu:after", () => {
                this.node.menu.classList.add("mm-menu--theme-" + this.opts.theme)
            })
        },
        backButton: function() {
            if (this.opts.backButton = this.opts.backButton || {}, !this.opts.offCanvas.use) return;
            const e = d(this.opts.backButton, L),
                c = "#" + this.node.menu.id;
            if (e.close) {
                var b = [];
                const d = () => {
                    b = [c], a(this.node.pnls, ".mm-panel--opened, .mm-panel--parent").forEach(a => {
                        b.push("#" + a.id)
                    })
                };
                this.bind("open:after", () => {
                    history.pushState(null, document.title, c)
                }), this.bind("open:after", d), this.bind("openPanel:after", d), this.bind("close:after", () => {
                    b = [], history.back(), history.pushState(null, document.title, location.pathname + location.search)
                }), window.addEventListener("popstate", d => {
                    if (this.node.menu.matches(".mm-menu--opened") && b.length) {
                        var a = (b = b.slice(0, -1))[b.length - 1];
                        a == c ? this.close() : (this.openPanel(this.node.menu.querySelector(a)), history.pushState(null, document.title, c))
                    }
                })
            }
            e.open && window.addEventListener("popstate", a => {
                this.node.menu.matches(".mm-menu--opened") || location.hash != c || this.open()
            })
        },
        counters: function() {
            if (this.opts.counters = this.opts.counters || {}, !d(this.opts.counters, M).add) return;
            const e = b => {
                    const c = this.node.pnls.querySelector("#" + b.dataset.mmParent);
                    if (!c) return;
                    const d = c.querySelector(".mm-counter");
                    if (!d) return;
                    const e = [];
                    a(b, ".mm-listview").forEach(b => {
                        e.push(...a(b, ".mm-listitem"))
                    }), d.innerHTML = u(e).length.toString()
                },
                f = new MutationObserver(a => {
                    a.forEach(a => {
                        "class" == a.attributeName && e(a.target.closest(".mm-panel"))
                    })
                });
            this.bind("initListview:after", g => {
                const f = g.closest(".mm-panel"),
                    d = this.node.pnls.querySelector("#" + f.dataset.mmParent);
                if (d) {
                    if (!b(d, ".mm-counter").length) {
                        const b = a(d, ".mm-btn")[0];
                        null == b || b.prepend(c("span.mm-counter"))
                    }
                    e(f)
                }
            }), this.bind("initListitem:after", a => {
                const b = a.closest(".mm-panel");
                if (!b) return;
                this.node.pnls.querySelector("#" + b.dataset.mmParent) && f.observe(a, {
                    attributes: !0
                })
            })
        },
        iconbar: function() {
            this.opts.iconbar = this.opts.iconbar || {};
            const e = d(this.opts.iconbar, N);
            if (!e.use) return;
            let a;
            if (["top", "bottom"].forEach((f, g) => {
                    let b = e[f];
                    "array" != j(b) && (b = [b]);
                    const d = c("div.mm-iconbar__" + f);
                    for (let a = 0, c = b.length; a < c; a++) "string" == typeof b[a] ? d.innerHTML += b[a] : d.append(b[a]);
                    d.children.length && (a || (a = c("div.mm-iconbar")), a.append(d))
                }), a) {
                this.bind("initMenu:after", () => {
                    this.node.menu.prepend(a)
                });
                let c = "mm-menu--iconbar-" + e.position,
                    d = () => {
                        this.node.menu.classList.add(c)
                    },
                    f = () => {
                        this.node.menu.classList.remove(c)
                    };
                if ("boolean" == typeof e.use ? this.bind("initMenu:after", d) : p(e.use, d, f), "tabs" == e.type) {
                    a.classList.add("mm-iconbar--tabs"), a.addEventListener("click", a => {
                        const c = a.target.closest(".mm-iconbar__tab");
                        if (c)
                            if (c.matches(".mm-iconbar__tab--selected")) a.stopImmediatePropagation();
                            else try {
                                const d = b(this.node.menu, c.getAttribute("href") + ".mm-panel")[0];
                                d && (a.preventDefault(), a.stopImmediatePropagation(), this.openPanel(d, !1))
                            } catch (a) {}
                    });
                    const c = d => {
                        b(a, "a").forEach(a => {
                            a.classList.remove("mm-iconbar__tab--selected")
                        });
                        const e = b(a, '[href="#' + d.id + '"]')[0];
                        if (e) e.classList.add("mm-iconbar__tab--selected");
                        else {
                            const a = b(this.node.pnls, "#" + d.dataset.mmParent)[0];
                            a && c(a.closest(".mm-panel"))
                        }
                    };
                    this.bind("openPanel:before", c)
                }
            }
        },
        iconPanels: function() {
            this.opts.iconPanels = this.opts.iconPanels || {};
            const b = d(this.opts.iconPanels, O);
            let e = !1;
            if ("first" == b.visible && (e = !0, b.visible = 1), b.visible = Math.min(3, Math.max(1, b.visible)), b.visible++, b.add) {
                if (this.bind("initMenu:after", () => {
                        this.node.menu.classList.add("mm-menu--iconpanel")
                    }), this.bind("initPanel:after", a => {
                        a.tabIndex = -1
                    }), this.bind("initPanels:after", () => {
                        document.addEventListener("keyup", c => {
                            var b;
                            if ("Tab" === c.key && (null === (b = document.activeElement) || void 0 === b ? void 0 : b.closest(".mm-menu")) === this.node.menu) {
                                const b = document.activeElement.closest(".mm-panel");
                                !document.activeElement.matches(".mm-panel__blocker") && (null == b ? void 0 : b.matches(".mm-panel--parent")) && (c.shiftKey ? a(b, ".mm-panel__blocker")[0].focus() : a(this.node.pnls, ".mm-panel--opened")[0].focus())
                            }
                        })
                    }), e) this.bind("initMenu:after", () => {
                    var b;
                    null === (b = a(this.node.pnls, ".mm-panel")[0]) || void 0 === b || b.classList.add("mm-panel--iconpanel-first")
                });
                else {
                    const c = ["mm-panel--iconpanel-0", "mm-panel--iconpanel-1", "mm-panel--iconpanel-2", "mm-panel--iconpanel-3"];
                    this.bind("openPanel:after", e => {
                        if (e.parentElement.matches(".mm-listitem--vertical")) return;
                        let d = a(this.node.pnls, ".mm-panel");
                        d = d.filter(a => a.matches(".mm-panel--parent")), d.push(e), d = d.slice(-b.visible), d.forEach((a, b) => {
                            a.classList.remove(...c), a.classList.add("mm-panel--iconpanel-" + b)
                        })
                    })
                }
                this.bind("initPanel:after", d => {
                    if (b.blockPanel && !d.parentElement.matches(".mm-listitem--vertical") && !a(d, ".mm-panel__blocker")[0]) {
                        const a = c("a.mm-panel__blocker");
                        a.href = "#" + d.closest(".mm-panel").id, a.title = this.i18n(this.conf.screenReader.closeSubmenu), d.prepend(a)
                    }
                })
            }
        },
        navbars: o,
        pageScroll: function() {
            this.opts.pageScroll = this.opts.pageScroll || {}, this.conf.pageScroll = this.conf.pageScroll || {};
            const f = d(this.opts.pageScroll, R),
                g = d(this.conf.pageScroll, S);
            var c;

            function h() {
                c && window.scrollTo({
                    top: c.getBoundingClientRect().top + document.scrollingElement.scrollTop - g.scrollOffset,
                    behavior: "smooth"
                }), c = null
            }

            function i(a) {
                try {
                    if ("#" == a.slice(0, 1)) return b(e.node.page, a)[0]
                } catch (a) {}
                return null
            }
            if (this.opts.offCanvas.use && f.scroll && (this.bind("close:after", () => {
                    h()
                }), this.node.menu.addEventListener("click", d => {
                    var a, b;
                    const e = (null === (b = null === (a = d.target) || void 0 === a ? void 0 : a.closest("a[href]")) || void 0 === b ? void 0 : b.getAttribute("href")) || "";
                    (c = i(e)) && (d.preventDefault(), this.node.menu.matches(".mm-menu--sidebar-expanded") && this.node.wrpr.matches(".mm-wrapper--sidebar-expanded") ? h() : this.close())
                })), f.update) {
                let c = [];
                this.bind("initListview:after", b => {
                    const d = a(b, ".mm-listitem");
                    w(d).forEach(b => {
                        const a = i(b.getAttribute("href"));
                        a && c.unshift(a)
                    })
                });
                let d = -1;
                window.addEventListener("scroll", h => {
                    const f = window.scrollY;
                    for (var e = 0; e < c.length; e++)
                        if (c[e].offsetTop < f + g.updateOffset) {
                            if (d !== e) {
                                d = e;
                                let g = a(this.node.pnls, ".mm-panel--opened")[0],
                                    h = b(g, ".mm-listitem"),
                                    f = w(h);
                                f = f.filter(a => a.matches('[href="#' + c[e].id + '"]')), f.length && this.setSelected(f[0].parentElement)
                            }
                            break
                        }
                }, {
                    passive: !0
                })
            }
        },
        searchfield: function() {
            this.opts.searchfield = this.opts.searchfield || {}, this.conf.searchfield = this.conf.searchfield || {};
            const a = d(this.opts.searchfield, T);
            if (d(this.conf.searchfield, U), a.add) {
                switch (a.addTo) {
                    case "panels":
                        a.addTo = ".mm-panel";
                        break;
                    case "searchpanel":
                        a.addTo = ".mm-panel--search"
                }
                switch (a.searchIn) {
                    case "panels":
                        a.searchIn = ".mm-panel"
                }
                this.bind("initPanel:after", b => {
                    b.matches(a.addTo) && !b.closest(".mm-listitem--vertical") && $.call(this, b)
                }), this.bind("initMenu:after", () => {
                    const c = ag.call(this);
                    $.call(this, c), b(this.node.menu, a.addTo).forEach(d => {
                        if (!d.matches(".mm-panel")) {
                            const e = C.call(this, !0);
                            d.append(e);
                            const f = b(e, "input")[0];
                            a.splash.length ? (f.addEventListener("focusin", () => {
                                this.openPanel(c, !1, !1)
                            }), this.bind("openPanel:after", a => {
                                a.matches(".mm-panel--search") ? e.classList.add("mm-searchfield--cancelable") : e.classList.remove("mm-searchfield--cancelable")
                            })) : (this.bind("search:after", () => {
                                this.openPanel(c, !1, !1)
                            }), f.addEventListener("focusout", () => {
                                f.value.length || this.closePanel(c, !1)
                            })), ab.call(this, e)
                        }
                    })
                }), this.bind("close:before", () => {
                    b(this.node.menu, ".mm-searchfield input").forEach(a => {
                        a.blur()
                    })
                })
            }
        },
        sectionIndexer: function() {
            this.opts.sectionIndexer = this.opts.sectionIndexer || {}, d(this.opts.sectionIndexer, x).add && this.bind("initPanels:after", () => {
                if (!this.node.indx) {
                    let f = "";
                    "abcdefghijklmnopqrstuvwxyz".split("").forEach(a => {
                        f += '<a href="#">' + a + "</a>"
                    });
                    let d = c("div.mm-sectionindexer");
                    d.innerHTML = f, this.node.pnls.prepend(d), this.node.indx = d, this.node.indx.addEventListener("click", a => {
                        a.target.matches("a") && a.preventDefault()
                    });
                    let e = e => {
                        if (!e.target.matches("a")) return;
                        const f = e.target.textContent,
                            c = a(this.node.pnls, ".mm-panel--opened")[0];
                        let d = -1,
                            g = c.scrollTop;
                        c.scrollTop = 0, b(c, ".mm-divider").filter(a => !a.matches(".mm-hidden")).forEach(a => {
                            d < 0 && f == a.textContent.trim().slice(0, 1).toLowerCase() && (d = a.offsetTop)
                        }), c.scrollTop = d > -1 ? d : g
                    };
                    K ? (this.node.indx.addEventListener("touchstart", e), this.node.indx.addEventListener("touchmove", e)) : this.node.indx.addEventListener("mouseover", e)
                }
                this.bind("openPanel:before", a => {
                    const c = b(a, ".mm-divider").filter(a => !a.matches(".mm-hidden")).length;
                    this.node.indx.classList[c ? "add" : "remove"]("mm-sectionindexer--active")
                })
            })
        },
        setSelected: function() {
            this.opts.setSelected = this.opts.setSelected || {};
            const c = d(this.opts.setSelected, Q);
            if ("detect" == c.current) {
                const a = b => {
                    b = b.split("?")[0].split("#")[0];
                    const c = this.node.menu.querySelector('a[href="' + b + '"], a[href="' + b + '/"]');
                    if (c) this.setSelected(c.parentElement);
                    else {
                        const c = b.split("/").slice(0, -1);
                        c.length && a(c.join("/"))
                    }
                };
                this.bind("initMenu:after", () => {
                    a.call(this, window.location.href)
                })
            } else c.current || this.bind("initListview:after", b => {
                a(b, ".mm-listitem--selected").forEach(a => {
                    a.classList.remove("mm-listitem--selected")
                })
            });
            c.hover && this.bind("initMenu:after", () => {
                this.node.menu.classList.add("mm-menu--selected-hover")
            }), c.parent && (this.bind("openPanel:after", c => {
                b(this.node.pnls, ".mm-listitem--selected-parent").forEach(a => {
                    a.classList.remove("mm-listitem--selected-parent")
                });
                let a = c;
                for (; a;) {
                    let c = b(this.node.pnls, "#" + a.dataset.mmParent)[0];
                    a = null == c ? void 0 : c.closest(".mm-panel"), c && !c.matches(".mm-listitem--vertical") && c.classList.add("mm-listitem--selected-parent")
                }
            }), this.bind("initMenu:after", () => {
                this.node.menu.classList.add("mm-menu--selected-parent")
            }))
        },
        sidebar: function() {
            if (!this.opts.offCanvas.use) return;
            this.opts.sidebar = this.opts.sidebar || {};
            const b = d(this.opts.sidebar, aa);
            if (b.collapsed.use) {
                this.bind("initMenu:after", () => {
                    if (this.node.menu.classList.add("mm-menu--sidebar-collapsed"), b.collapsed.blockMenu && !a(this.node.menu, ".mm-menu__blocker")[0]) {
                        const a = c("a.mm-menu__blocker");
                        a.setAttribute("href", "#" + this.node.menu.id), this.node.menu.prepend(a), a.title = this.i18n(this.conf.screenReader.openMenu)
                    }
                });
                let d = () => {
                        this.node.wrpr.classList.add("mm-wrapper--sidebar-collapsed")
                    },
                    e = () => {
                        this.node.wrpr.classList.remove("mm-wrapper--sidebar-collapsed")
                    };
                "boolean" == typeof b.collapsed.use ? this.bind("initMenu:after", d) : p(b.collapsed.use, d, e)
            }
            if (b.expanded.use) {
                this.bind("initMenu:after", () => {
                    this.node.menu.classList.add("mm-menu--sidebar-expanded")
                });
                let a = !1,
                    c = () => {
                        a = !0, this.node.wrpr.classList.add("mm-wrapper--sidebar-expanded"), this.open()
                    },
                    f = () => {
                        a = !1, this.node.wrpr.classList.remove("mm-wrapper--sidebar-expanded"), this.close()
                    };
                "boolean" == typeof b.expanded.use ? this.bind("initMenu:after", c) : p(b.expanded.use, c, f), this.bind("close:after", () => {
                    a && window.sessionStorage.setItem("mmenuExpandedState", "closed")
                }), this.bind("open:after", () => {
                    a && window.sessionStorage.setItem("mmenuExpandedState", "open")
                });
                let d = b.expanded.initial;
                const e = window.sessionStorage.getItem("mmenuExpandedState");
                switch (e) {
                    case "open":
                    case "closed":
                        d = e
                }
                "closed" == d && this.bind("init:after", () => {
                    this.close()
                })
            }
        }
    }, _.default = e, window && (window.Mmenu = e)
}])
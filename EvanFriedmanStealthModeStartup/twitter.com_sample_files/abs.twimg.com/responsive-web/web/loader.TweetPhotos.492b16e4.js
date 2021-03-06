(window.webpackJsonp = window.webpackJsonp || []).push([
    [188], {
        q2Cp: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("pVnL"),
                a = r.n(n),
                i = r("8OQS"),
                o = r.n(i),
                c = r("PJYZ"),
                u = r.n(c),
                p = r("VbXa"),
                s = r.n(p),
                l = r("lSNA"),
                g = r.n(l),
                h = r("ERkP"),
                m = r("nT9l"),
                d = r("3XMw"),
                f = r.n(d),
                _ = r("rrZY"),
                v = (r("0ra8"), r("PN9k"), r("W/Kd")),
                I = r.n(v),
                w = r("KEM+"),
                y = r.n(w),
                R = r("TIdA"),
                A = r("A91F"),
                E = r("9Xij"),
                G = r("PxJJ"),
                C = r("cm6r"),
                O = r("a6qo"),
                x = r("rHpw"),
                M = r("3xO4"),
                b = r.n(M),
                k = (r("aWzz"), 6),
                L = {},
                P = function(e) {
                    function t(r) {
                        var n;
                        if (n = e.call(this, r) || this, r.cacheLocationKey) {
                            var a = r.cacheLocationKey;
                            n._cacheGroup = L[a], n._cacheGroup || (n._cacheGroup = t.generateCacheGroup(k), L[a] = n._cacheGroup)
                        }
                        return n
                    }
                    I()(t, e);
                    var r = t.prototype;
                    return r.render = function() {
                        switch (this._getGroupSize()) {
                            case 0:
                                return null;
                            case 1:
                                return this._renderGroupOf1();
                            case 2:
                                return this._renderGroupOf2();
                            case 3:
                                return this._renderGroupOf3();
                            case 4:
                                return this._renderGroupOf4();
                            case 5:
                                return this._renderGroupOf5();
                            default:
                                return this._renderGroupOf6()
                        }
                    }, r._renderGroupOf1 = function() {
                        var e = this.props,
                            t = e.singleImageMaxAspectRatio,
                            r = e.singleImageMinAspectRatio,
                            n = this._cacheGroup ? this._cacheGroup[0] : void 0;
                        return this._renderImageAtIndex(0, A.a.withinRange(r, t), null, n)
                    }, r._renderGroupOf2 = function() {
                        return h.createElement(S, {
                            containerAspectRatio: this.props.containerAspectRatio
                        }, this._groupImage(0, 2, J.gutterRight), this._groupImage(1, 2))
                    }, r._renderGroupOf3 = function() {
                        return h.createElement(S, {
                            containerAspectRatio: this.props.containerAspectRatio
                        }, this._groupImage(0, 3, J.gutterRight), h.createElement(B, null, this._groupImage(1, 3, J.gutterBottom), this._groupImage(2, 3)))
                    }, r._renderGroupOf4 = function() {
                        return h.createElement(S, {
                            containerAspectRatio: this.props.containerAspectRatio
                        }, h.createElement(B, {
                            style: J.gutterRight
                        }, this._groupImage(0, 4, J.gutterBottom), this._groupImage(2, 4)), h.createElement(B, null, this._groupImage(1, 4, J.gutterBottom), this._groupImage(3, 4)))
                    }, r._renderGroupOf5 = function() {
                        return h.createElement(S, {
                            column: !0,
                            containerAspectRatio: this.props.containerAspectRatio
                        }, h.createElement(V, {
                            style: J.gutterBottom
                        }, this._groupImage(0, 5, J.gutterRight), this._groupImage(1, 5)), h.createElement(V, null, this._groupImage(2, 5, J.gutterRight), this._groupImage(3, 5, J.gutterRight), this._groupImage(4, 5)))
                    }, r._renderGroupOf6 = function() {
                        return h.createElement(S, {
                            column: !0,
                            containerAspectRatio: this.props.containerAspectRatio
                        }, h.createElement(V, {
                            style: J.gutterBottom
                        }, this._groupImage(0, 6, J.gutterRight), this._groupImage(1, 6, J.gutterRight), this._groupImage(2, 6)), h.createElement(V, null, this._groupImage(3, 6, J.gutterRight), this._groupImage(4, 6, J.gutterRight), this._groupImage(5, 6)))
                    }, r._groupImage = function(e, t, r) {
                        var n = this._cacheGroup ? this._cacheGroup[t - 1] : void 0;
                        return this._renderImageAtIndex(e, A.a.COVER, [J.item, J.relativePositioning, r], n)
                    }, r._renderImageAtIndex = function(e, t, r, n) {
                        var a = this.props,
                            i = a.images,
                            o = a.previewMode,
                            c = a.onClick,
                            u = a.onVariantSelection,
                            p = a.tweetMediaNavigationMethod,
                            s = i[e],
                            l = "string" == typeof s.expandedUrl ? {
                                pathname: s.expandedUrl
                            } : s.expandedUrl;
                        return h.createElement(C.a, {
                            interactiveStyles: null,
                            link: Object.assign({}, l, {
                                method: p
                            }),
                            onClick: c,
                            style: r
                        }, h.createElement(R.a, {
                            accessibilityLabel: s.accessibilityLabel,
                            aspectMode: t,
                            backgroundColor: s.backgroundColor,
                            cropCandidates: s.cropCandidates,
                            image: s,
                            layoutCache: n ? n[e] : void 0,
                            onVariantSelection: u,
                            previewMode: o,
                            withLoadingIndicator: !0
                        }), s.shouldShowAltLabel ? h.createElement(O.a, {
                            align: "left",
                            bold: !0
                        }, "ALT") : null)
                    }, r._getGroupSize = function() {
                        var e = this.props.images.length;
                        return 0 === e && G.a.report(new Error("TweetPhotos: empty array of images received")), Math.min(e, k)
                    }, t
                }(h.Component);
            y()(P, "defaultProps", {
                tweetMediaNavigationMethod: "push"
            }), y()(P, "generateCacheGroup", (function(e) {
                return new Array(e).fill(null).map((function(e, t) {
                    return new Array(t + 1).fill(null).map((function(e) {
                        return R.a.createLayoutCache()
                    }))
                }))
            })), P.propTypes = {};
            var S = function(e) {
                    var t = e.children,
                        r = e.containerAspectRatio,
                        n = void 0 === r ? x.a.theme.aspectRatios.landscape : r,
                        a = e.column,
                        i = void 0 !== a && a;
                    return h.createElement(E.a, {
                        ratio: n
                    }, h.createElement(b.a, {
                        style: [J.wideContainer, i ? J.column : J.row]
                    }, t))
                },
                B = function(e) {
                    var t = e.style,
                        r = e.children;
                    return h.createElement(b.a, {
                        style: [t, J.item, J.column]
                    }, r)
                },
                V = function(e) {
                    var t = e.style,
                        r = e.children;
                    return h.createElement(b.a, {
                        style: [t, J.item, J.row]
                    }, r)
                },
                J = x.a.create((function(e) {
                    return {
                        wideContainer: {
                            width: "100%",
                            height: "100%"
                        },
                        row: {
                            flexDirection: "row"
                        },
                        column: {
                            flexDirection: "column"
                        },
                        gutterRight: {
                            marginRight: "2px"
                        },
                        gutterBottom: {
                            marginBottom: "2px"
                        },
                        item: {
                            flexGrow: 1,
                            flexBasis: 0
                        },
                        relativePositioning: {
                            position: "relative"
                        }
                    }
                })),
                N = f.a.i7c776d5,
                T = f.a.da26d25f,
                z = function(e) {
                    function t() {
                        for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(n)) || this, g()(u()(t), "_renderContent", (function(e) {
                            var r = e.useMinimumData,
                                n = e.resourceSelectionHandler,
                                i = t.props,
                                c = (i.hideAcceptOverlay, o()(i, ["hideAcceptOverlay"]));
                            return h.createElement(_.a.Consumer, null, (function(e) {
                                return h.createElement(P, a()({}, c, {
                                    onVariantSelection: n,
                                    previewMode: r,
                                    tweetMediaNavigationMethod: e ? "replace" : "push"
                                }))
                            }))
                        })), t
                    }
                    return s()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.images,
                            r = e.hideAcceptOverlay;
                        return h.createElement(m.a, {
                            acceptLabel: 1 === t.length ? N : T,
                            hideAcceptOverlay: r,
                            renderContent: this._renderContent,
                            resourceId: t.map((function(e) {
                                return e.url
                            })).join(";")
                        })
                    }, t
                }(h.Component);
            g()(z, "defaultProps", {
                hideAcceptOverlay: !1
            });
            t.default = z
        },
        rrZY: function(e, t, r) {
            "use strict";
            var n = r("ERkP"),
                a = n.createContext(!1);
            t.a = a
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.TweetPhotos.492b16e4.js.map
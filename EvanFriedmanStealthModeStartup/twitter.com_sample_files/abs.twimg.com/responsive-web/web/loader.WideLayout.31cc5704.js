(window.webpackJsonp = window.webpackJsonp || []).push([
    [190], {
        "0af8": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "roundToNearestDevicePixel", (function() {
                return O
            })), n.d(t, "default", (function() {
                return w
            }));
            var i = n("PJYZ"),
                o = n.n(i),
                r = n("VbXa"),
                a = n.n(r),
                s = n("lSNA"),
                c = n.n(s),
                d = n("ERkP"),
                l = n("n+l9"),
                u = n("7nmT"),
                p = n.n(u),
                h = n("Yib4"),
                f = n("aWzz"),
                m = n("jHwr"),
                v = n("rHpw"),
                _ = n("jdj2"),
                y = n.n(_),
                g = n("3xO4"),
                b = n.n(g),
                O = function(e) {
                    var t = e.cssPixels,
                        n = e.dpr;
                    return Math.round(t * n) / n
                },
                w = function(e) {
                    function t(t, n) {
                        var i;
                        return i = e.call(this, t, n) || this, c()(o()(i), "_setContentRef", (function(e) {
                            i._contentRef = p.a.findDOMNode(e)
                        })), c()(o()(i), "_setContainerRef", (function(e) {
                            i._containerRef = p.a.findDOMNode(e)
                        })), c()(o()(i), "_handleProgrammaticScroll", (function(e) {
                            i._prevScrollY = (i._prevScrollY || 0) + e, i.setState({
                                contentOffset: Math.max(0, i.state.contentOffset + e)
                            })
                        })), c()(o()(i), "_handleLayout", (function(e) {
                            var t = e.nativeEvent.layout.height > i.state.contentHeight;
                            i._updatePositioning(t)
                        })), i.state = {
                            stickyTop: !0,
                            stickyThreshold: 0,
                            contentOffset: 0,
                            contentHeight: 0,
                            stickyOffset: 0,
                            position: l.b() ? "sticky" : "static"
                        }, i._scheduleUpdatePositioning = Object(m.a)(i._updatePositioning.bind(o()(i)), window.requestAnimationFrame), i
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillMount = function() {
                        var e = this.context.viewport;
                        this._removeProgrammaticScrollListener = e.addProgrammaticScrollListener(this._handleProgrammaticScroll)
                    }, n.componentDidMount = function() {
                        var e = this.context.viewport;
                        this._updatePositioning(), this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning);
                        var t = this._containerRef.getBoundingClientRect(),
                            n = e.scrollY();
                        this._prevScrollY = n, this.setState({
                            stickyOffset: n + t.top
                        })
                    }, n.componentWillUnmount = function() {
                        this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener()
                    }, n.render = function() {
                        var e = this.state,
                            t = e.stickyTop,
                            n = e.stickyThreshold,
                            i = e.contentOffset,
                            o = e.position,
                            r = E[o],
                            a = window.devicePixelRatio || 1,
                            s = O({
                                cssPixels: n,
                                dpr: a
                            }),
                            c = O({
                                cssPixels: i,
                                dpr: a
                            }),
                            l = {
                                top: t ? s + "px" : null,
                                bottom: t ? null : s + "px"
                            };
                        return d.createElement(b.a, {
                            ref: this._setContainerRef,
                            style: [E.container, {
                                minHeight: this.state.contentHeight
                            }]
                        }, d.createElement(b.a, {
                            style: {
                                marginTop: c + "px"
                            }
                        }), d.createElement(b.a, {
                            onLayout: this._handleLayout,
                            ref: this._setContentRef,
                            style: [this.props.style, l, r]
                        }, this.props.children))
                    }, n._updatePositioning = function(e) {
                        if (void 0 === e && (e = !1), this._contentRef && this._containerRef) {
                            var t = this.context.viewport.scrollY(),
                                n = t - this._prevScrollY;
                            if (!(Math.abs(n) < .5) || e) {
                                var i = this.props.distanceFromBottom;
                                this._prevScrollY = t;
                                var o = this._contentRef.getBoundingClientRect(),
                                    r = this._containerRef.getBoundingClientRect(),
                                    a = y.a.get("window").height,
                                    s = t + r.top,
                                    c = Math.max(o.top - r.top, 0);
                                if (a - o.height > s && !Object(h.a)()) this._updateState({
                                    stickyTop: !0,
                                    stickyThreshold: s,
                                    contentOffset: 0,
                                    stickyOffset: s,
                                    contentHeight: o.height,
                                    position: "fixed"
                                });
                                else {
                                    var d = n > 0,
                                        u = d !== this.state.stickyTop,
                                        p = window.devicePixelRatio || 1,
                                        f = o.bottom - a + i <= 1 / p,
                                        m = s - o.top <= 1 / p;
                                    if ((d && f || !d && m) && l.a()) {
                                        var v = i,
                                            _ = s;
                                        this._updateState({
                                            position: "fixed",
                                            stickyOffset: s,
                                            stickyTop: m,
                                            stickyThreshold: m ? _ : v,
                                            contentOffset: c,
                                            contentHeight: o.height
                                        })
                                    } else {
                                        var g = a - o.height - i,
                                            b = a - o.height - s,
                                            O = l.b() ? "sticky" : "static";
                                        this._updateState({
                                            position: O,
                                            stickyTop: d,
                                            stickyOffset: s,
                                            stickyThreshold: d ? g : b,
                                            contentOffset: u ? c : this.state.contentOffset,
                                            contentHeight: o.height
                                        })
                                    }
                                }
                            }
                        }
                    }, n._updateState = function(e) {
                        var t = this.state.stickyTop !== e.stickyTop,
                            n = this.state.stickyThreshold !== e.stickyThreshold,
                            i = Math.abs(this.state.contentOffset - e.contentOffset) > .5,
                            o = Math.abs(this.state.stickyOffset - e.stickyOffset) > .5,
                            r = this.state.position !== e.position,
                            a = this.state.contentHeight !== e.contentHeight;
                        (t || n || i || o || r || a) && this.setState(e)
                    }, t
                }(d.PureComponent);
            c()(w, "contextTypes", {
                viewport: f.object.isRequired
            }), c()(w, "defaultProps", {
                distanceFromBottom: 10
            });
            var E = v.a.create((function(e) {
                return {
                    container: {
                        height: "100%"
                    },
                    sticky: {
                        position: "sticky"
                    },
                    fixed: {
                        position: "fixed"
                    },
                    static: {
                        position: "static"
                    }
                }
            }))
        },
        LHcr: function(e, t, n) {
            "use strict";
            n.r(t);
            n("PN9k");
            var i = n("PJYZ"),
                o = n.n(i),
                r = n("VbXa"),
                a = n.n(r),
                s = n("lSNA"),
                c = n.n(s),
                d = n("ERkP"),
                l = n("kGix"),
                u = n("v//M"),
                p = n("3XMw"),
                h = n.n(p),
                f = n("Rp9C"),
                m = n("rHpw"),
                v = n("3xO4"),
                _ = n.n(v),
                y = n("lP98"),
                g = n("RqPI"),
                b = n("rxPX"),
                O = n("0KEI"),
                w = n("G6rE"),
                E = function(e, t) {
                    return g.g(e)
                },
                R = function(e, t) {
                    return t.userId
                },
                I = Object(b.a)().propsFromState({
                    fetchStatus: function(e, t) {
                        var n = R(0, t),
                            i = E(e);
                        return y.b(e, {
                            displayLocation: "profile_accounts_sidebar",
                            similarToUserId: n === i ? void 0 : n
                        })
                    },
                    loggedInUserId: E,
                    recommendations: function(e, t) {
                        var n = R(0, t),
                            i = E(e);
                        return y.c(e, {
                            displayLocation: "profile_accounts_sidebar",
                            similarToUserId: n === i ? void 0 : n
                        })
                    },
                    screenName: function(e, t) {
                        var n = w.e.select(e, t.userId);
                        return n && n.screen_name
                    }
                }).propsFromActions({
                    createLocalApiErrorHandler: Object(O.b)("WHO_TO_FOLLOW_CONTAINER"),
                    fetchRecommendationsIfNeeded: y.a
                }).withAnalytics(),
                T = n("7JQg"),
                x = n("NxHW"),
                L = n("Re5t"),
                S = n("hqDb"),
                P = n("hxu0"),
                k = n("6vad"),
                H = n("rC8y"),
                N = h.a.da31f17e,
                j = h.a.d5ee4403,
                U = h.a.e05b3b2d,
                C = 3,
                D = Object(T.d)({
                    component: "who_to_follow"
                })(Object(P.a)((function(e) {
                    var t = e.withProfileHeaderText,
                        n = e.userId,
                        i = e.userIds,
                        o = e.isInSidebar,
                        r = i.length > C,
                        a = "/i/connect_people?user_id=" + n;
                    return d.createElement(_.a, {
                        accessibilityLabel: N,
                        accessibilityRole: "complementary"
                    }, d.createElement(k.a, {
                        text: t ? j : N
                    }), d.createElement(S.a, {
                        displayMode: L.a.UserCompact,
                        userIds: i.slice(0, C),
                        withItemBorder: !0
                    }), r && d.createElement(H.a, {
                        interactiveStyles: o ? Object(x.a)() : void 0,
                        link: a,
                        text: U
                    }))
                })));
            n.d(t, "WhoToFollowContainer", (function() {
                return F
            }));
            var M = h.a.f80c522b,
                A = {
                    component: "suggest_who_to_follow",
                    element: "user",
                    action: "results"
                },
                F = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(i)) || this, c()(o()(t), "_renderContent", (function() {
                            var e = t.props,
                                n = e.recommendations,
                                i = e.screenName,
                                o = e.userId,
                                r = e.withProfileHeaderText,
                                a = n && n.map((function(e) {
                                    return e.user
                                }));
                            return i ? d.createElement(D, {
                                screenName: i,
                                userId: o,
                                userIds: a,
                                withProfileHeaderText: r
                            }) : null
                        })), c()(o()(t), "_handleImpression", (function(e) {
                            var n = t.props.analytics,
                                i = e && e.slice(0, C).map((function(e) {
                                    return Object.assign({}, f.a.forUser(e.user), {
                                        suggestion_details: {
                                            source_data: e.token
                                        }
                                    })
                                }));
                            n.scribe(Object.assign({}, A, {
                                data: {
                                    items: i
                                }
                            }))
                        })), t
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props.recommendations;
                        this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e)
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props.recommendations;
                        this.props.userId !== e.userId && this._fetchRecommendations(this.props), t !== e.recommendations && t && t.length > 0 && this._handleImpression(t)
                    }, n.render = function() {
                        var e = this.props,
                            t = e.fetchStatus,
                            n = e.style;
                        return t === l.a.FAILED || this._hasEmptySuggestionList() ? null : d.createElement(_.a, {
                            style: [W.root, n]
                        }, d.createElement(u.a, {
                            accessibilityLabel: M,
                            fetchStatus: t,
                            render: this._renderContent
                        }))
                    }, n._fetchRecommendations = function(e) {
                        var t = e.createLocalApiErrorHandler,
                            n = e.fetchRecommendationsIfNeeded,
                            i = e.userId;
                        n({
                            limit: 4,
                            displayLocation: "profile_accounts_sidebar",
                            similarToUserId: i !== e.loggedInUserId ? i : void 0
                        }).catch(t({}))
                    }, n._hasEmptySuggestionList = function() {
                        var e = this.props,
                            t = e.fetchStatus,
                            n = e.recommendations;
                        return t === l.a.LOADED && 0 === n.length
                    }, t
                }(d.PureComponent),
                W = m.a.create((function(e) {
                    return {
                        root: {
                            minHeight: "15rem"
                        }
                    }
                })),
                B = I(F);
            t.default = B
        },
        lP98: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return _
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "a", (function() {
                return g
            }));
            n("yKDW"), n("dtAy"), n("PN9k");
            var i, o = n("/kEJ"),
                r = n("oEOe"),
                a = n("RgK2"),
                s = n.n(a),
                c = n("kGix"),
                d = n("Ssj5"),
                l = "rweb/recommendations/FETCH_REQUEST",
                u = "rweb/recommendations/FETCH_SUCCESS",
                p = "rweb/recommendations/FETCH_FAILURE",
                h = {},
                f = function(e) {
                    var t = e.displayLocation,
                        n = e.similarToUserId;
                    return t + (n ? "_" + n : "")
                };
            d.a.register(((i = {}).recommendations = function(e, t) {
                if (void 0 === e && (e = h), !t.meta) return e;
                switch (t.type) {
                    case l:
                        var n, i = f(t.meta);
                        return Object.assign({}, e, ((n = {})[i] = Object.assign({}, e[i], {
                            fetchStatus: c.a.LOADING
                        }), n));
                    case p:
                        var o, r = f(t.meta);
                        return Object.assign({}, e, ((o = {})[r] = Object.assign({}, e[r], {
                            fetchStatus: c.a.FAILED
                        }), o));
                    case u:
                        var a, d = f(t.meta),
                            m = t.payload && t.payload.entities ? t.payload.entities : {
                                recommendations: s.a
                            },
                            _ = (t.payload && t.payload.result ? t.payload.result : v).map((function(e) {
                                return m.recommendations[e]
                            }));
                        return Object.assign({}, e, ((a = {})[d] = Object.assign({}, e[d], {
                            fetchStatus: c.a.LOADED,
                            recommendations: _
                        }), a));
                    default:
                        return e
                }
            }, i));
            var m = [],
                v = [],
                _ = function(e, t) {
                    var n = t.displayLocation,
                        i = t.similarToUserId,
                        o = e.recommendations[f({
                            displayLocation: n,
                            similarToUserId: i
                        })];
                    return o && o.recommendations ? o.recommendations : m
                },
                y = function(e, t) {
                    var n = t.displayLocation,
                        i = t.similarToUserId,
                        o = e.recommendations[f({
                            displayLocation: n,
                            similarToUserId: i
                        })];
                    return o ? o.fetchStatus : c.a.NONE
                },
                g = function(e) {
                    return function(t, n, i) {
                        var a = n(),
                            d = e.displayLocation,
                            h = e.similarToUserId,
                            f = _(a, {
                                displayLocation: d,
                                similarToUserId: h
                            }),
                            m = y(a, {
                                displayLocation: d,
                                similarToUserId: h
                            }) === c.a.LOADED;
                        return f && m ? Promise.resolve(s.a) : t(function(e) {
                            return function(t, n, i) {
                                var a = i.api,
                                    s = e.displayLocation,
                                    c = e.itsInterests,
                                    d = e.limit,
                                    h = void 0 === d ? 30 : d,
                                    f = e.similarToUserId;
                                return Object(r.b)(t, {
                                    request: a.Recommendations.fetch,
                                    params: {
                                        display_location: s,
                                        itsInterests: c,
                                        limit: h,
                                        user_id: f
                                    }
                                })({
                                    actionTypes: {
                                        REQUEST: l,
                                        SUCCESS: u,
                                        FAILURE: p
                                    },
                                    context: "FETCH_RECOMMENDATIONS",
                                    meta: {
                                        displayLocation: s,
                                        similarToUserId: f
                                    }
                                }, (function(e) {
                                    if (e) return [Object(o.b)(e.entities)]
                                }))
                            }
                        }(e))
                    }
                }
        },
        sAnO: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("97Jx"),
                o = n.n(i),
                r = (n("XDJg"), n("KYm4"), n("1Pcy")),
                a = n.n(r),
                s = n("W/Kd"),
                c = n.n(s),
                d = n("KEM+"),
                l = n.n(d),
                u = (n("PN9k"), n("ERkP")),
                p = n("zfvc"),
                h = n("jHwr"),
                f = n("VY6S"),
                m = n("w9LO"),
                v = n("//dC"),
                _ = n("Oe3h"),
                y = n("0FVZ"),
                g = n("7nmT"),
                b = n.n(g),
                O = n("cHvH"),
                w = n("rHpw"),
                E = n("jdj2"),
                R = n.n(E),
                I = n("/uF9"),
                T = n.n(I),
                x = n("3xO4"),
                L = n.n(x),
                S = w.a.create((function(e) {
                    return {
                        rootNarrow: {
                            maxWidth: "75%"
                        },
                        rootWide: {
                            maxWidth: "calc(" + e.spaces.jumbo + " * 5)"
                        },
                        anchor: w.a.absoluteFillObject,
                        mask: Object.assign({}, w.a.absoluteFillObject, {
                            position: "fixed"
                        }),
                        bodyRectHelper: Object.assign({}, w.a.absoluteFillObject, {
                            bottom: void 0
                        }),
                        content: {
                            borderRadius: e.borderRadii.medium,
                            position: "absolute",
                            overflow: "hidden",
                            backgroundColor: e.colors.navigationBackground,
                            boxShadow: e.boxShadows.medium
                        },
                        contentInitialRender: {
                            position: "fixed",
                            opacity: 0
                        },
                        contentFixed: {
                            position: "fixed",
                            overflowY: "auto",
                            overscrollBehavior: "contain"
                        }
                    }
                })),
                P = function(e) {
                    var t = e.verticalPreference,
                        n = e.canOrientUp,
                        i = e.canOrientDown;
                    return n && i || !n && !i ? t : n ? "up" : "down"
                },
                k = function(e) {
                    var t = e.horizontalPreference,
                        n = e.canOrientLeft,
                        i = e.canOrientRight;
                    return !n || "left" !== t && i ? "right" : "left"
                },
                H = function(e) {
                    return T.a.isRTL ? "left" === e ? "right" : "left" : e
                },
                N = function(e) {
                    function t(t, n) {
                        var i;
                        return i = e.call(this, t, n) || this, l()(a()(i), "_handleAnimateComplete", (function() {
                            var e = i.props.onAnimateComplete;
                            e && e()
                        })), l()(a()(i), "_handleEsc", (function(e) {
                            var t = i.props.onDismiss,
                                n = e.altKey,
                                o = e.ctrlKey,
                                r = e.metaKey,
                                a = e.key;
                            !(n || o || r) && "Escape" === a && t()
                        })), l()(a()(i), "_receiveBodyRectHelperRef", (function(e) {
                            var t = b.a.findDOMNode(e);
                            t && t instanceof window.HTMLElement && (i._bodyRectHelperNode = t), i._scheduleUpdate()
                        })), l()(a()(i), "_receiveAnchorRef", (function(e) {
                            var t = b.a.findDOMNode(e);
                            t && t instanceof window.HTMLElement && (i._anchorNode = t), i._scheduleUpdate()
                        })), l()(a()(i), "_receiveContentRef", (function(e) {
                            var t = b.a.findDOMNode(e);
                            t && t instanceof window.HTMLElement && (i._contentNode = t), i._scheduleUpdate()
                        })), l()(a()(i), "_updatePosition", (function() {
                            if (i._mounted && (i._anchorNode || i.props.position) && i._contentNode && i._contentNode instanceof window.HTMLElement && i._bodyRectHelperNode && i._bodyRectHelperNode instanceof window.HTMLElement) {
                                var e = i._contentNode.scrollHeight,
                                    t = i._contentNode.scrollWidth,
                                    n = i._bodyRectHelperNode.getBoundingClientRect(),
                                    o = n.left,
                                    r = n.top,
                                    a = n.width,
                                    s = R.a.get("window"),
                                    c = s.width,
                                    d = s.height,
                                    l = {
                                        left: 0,
                                        top: 0,
                                        height: 0,
                                        width: 0
                                    };
                                i.props.position ? l = Object.assign({}, l, {}, i.props.position) : i._anchorNode && i._anchorNode instanceof window.HTMLElement && (l = i._anchorNode.getBoundingClientRect());
                                var u = l,
                                    p = u.left,
                                    h = u.top,
                                    f = u.height,
                                    m = u.width,
                                    v = c - a,
                                    _ = p - o,
                                    y = h - r,
                                    g = p + m >= t,
                                    b = h + f >= e,
                                    O = c - p >= t,
                                    w = d - h >= e,
                                    E = i.props.preferredVerticalOrientation,
                                    I = H(i.props.preferredHorizontalOrientation),
                                    T = i.state.verticalOrientation || P({
                                        verticalPreference: E,
                                        canOrientUp: b,
                                        canOrientDown: w
                                    }),
                                    x = i.state.horizontalOrientation || k({
                                        horizontalPreference: I,
                                        canOrientLeft: g,
                                        canOrientRight: O
                                    }),
                                    L = i.props.isFixed ? p : _,
                                    S = i.props.isFixed ? h : y,
                                    N = "up" === T ? S + f - e : S,
                                    j = "left" === x ? c - L - m - v : c - L - t - v;
                                i.setState({
                                    top: Math.max(N, 0),
                                    right: j,
                                    verticalOrientation: T,
                                    horizontalOrientation: x
                                })
                            }
                        })), i.state = Object.freeze({}), i._scheduleUpdate = Object(h.a)(i._updatePosition, window.requestAnimationFrame), i._scheduleDebouncedUpdate = Object(f.a)(i._scheduleUpdate, 250), i
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this._mounted = !0, R.a.addEventListener("change", this._scheduleDebouncedUpdate)
                    }, n.componentWillUnmount = function() {
                        this._mounted = !1, R.a.removeEventListener("change", this._scheduleDebouncedUpdate)
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            i = t.isFixed,
                            r = t.onDismiss,
                            a = t.animateInDuration,
                            s = t.animateType,
                            c = t.withKeyboardNavigation,
                            d = this.state,
                            l = d.top,
                            h = d.right,
                            f = d.verticalOrientation,
                            g = void 0 === l,
                            b = "calc(100vh - " + (l || 0) + "px)",
                            E = [S.content, g && S.contentInitialRender, i && [S.contentFixed, {
                                maxHeight: b
                            }], {
                                top: l,
                                right: T.a.isRTL ? void 0 : h,
                                left: T.a.isRTL ? h : void 0
                            }];
                        return u.createElement(L.a, {
                            ref: this._receiveAnchorRef,
                            style: S.anchor
                        }, u.createElement(y.a.Dropdown, null, u.createElement(v.a, {
                            onDismiss: r
                        }, u.createElement(m.a, {
                            withKeyboardNavigation: c
                        }, u.createElement(L.a, {
                            onClick: r,
                            style: S.mask
                        }), u.createElement(L.a, {
                            ref: this._receiveBodyRectHelperRef,
                            style: S.bodyRectHelper
                        }), u.createElement(O.a, null, (function(t) {
                            var i = t.windowWidth;
                            return u.createElement(L.a, {
                                accessibilityRole: "menu",
                                onKeyUp: e._handleEsc,
                                ref: e._receiveContentRef,
                                style: [i < w.a.theme.breakpoints.medium ? S.rootNarrow : S.rootWide, E]
                            }, g && "slide" === s ? n : u.createElement(p.b, {
                                animateMount: "up" !== f,
                                duration: a,
                                onAnimateComplete: e._handleAnimateComplete,
                                show: !0,
                                type: s
                            }, (function(e) {
                                var t = e.isAnimating;
                                return u.createElement(_.a, {
                                    disableReporting: t
                                }, (function(e, t) {
                                    return u.createElement(L.a, o()({
                                        ref: e()
                                    }, t({})), n)
                                }))
                            })))
                        }))))))
                    }, t
                }(u.Component);
            l()(N, "defaultProps", {
                preferredHorizontalOrientation: "left",
                preferredVerticalOrientation: "down",
                animateType: "slide",
                animateInDuration: "normal",
                withKeyboardNavigation: !0
            });
            t.default = N
        },
        uo3S: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("ERkP"),
                o = n("RIqP"),
                r = n.n(o),
                a = n("rxPX"),
                s = n("Olyj"),
                c = n("XOJV"),
                d = n("s1N3"),
                l = function(e) {
                    var t = e.entities.user_mentions;
                    return (void 0 === t ? [] : t).map((function(e) {
                        return e.id_str
                    }))
                },
                u = Object(a.a)().propsFromState({
                    tweetMap: c.a.selectAll,
                    focalTweetId: function(e, t) {
                        return t.focalTweetId
                    }
                }).adjustStateProps((function(e) {
                    var t = e.tweetMap,
                        n = e.focalTweetId,
                        i = n && t[n];
                    if (!i) return {
                        participantIds: []
                    };
                    var o, a = [i.user].concat(r()(l(i)), r()((o = i, Object(s.a)(o.extended_entities && o.extended_entities.media || []).map((function(e) {
                            return e.user_id
                        }))))),
                        c = i.quoted_status && t[i.quoted_status];
                    return c && (a.push(c.user), a.push.apply(a, r()(l(c)))), {
                        participantIds: Object(d.a)(a)
                    }
                })),
                p = n("3XMw"),
                h = n.n(p),
                f = n("6vad"),
                m = n("hqDb"),
                v = n("3xO4"),
                _ = n.n(v),
                y = h.a.c915c2d0,
                g = function(e) {
                    var t = e.maxCount,
                        n = e.participantIds;
                    return i.createElement(_.a, {
                        accessibilityLabel: y,
                        accessibilityRole: "complementary"
                    }, i.createElement(f.a, {
                        text: y
                    }), i.createElement(m.a, {
                        userIds: n.slice(0, t),
                        withFinalItemBorder: !1,
                        withItemBorder: !0
                    }))
                };
            g.defaultProps = {
                maxCount: 3
            };
            var b = g,
                O = u((function(e) {
                    return i.createElement(b, {
                        participantIds: e.participantIds
                    })
                }));
            t.default = O
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.WideLayout.31cc5704.js.map
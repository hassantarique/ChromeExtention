(window.webpackJsonp = window.webpackJsonp || []).push([
    [178], {
        "MAI/": function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return d
            }));
            r("cI1W");
            var n = r("W/Kd"),
                i = r.n(n),
                a = r("KEM+"),
                o = r.n(a),
                s = r("ERkP"),
                l = r("rHpw"),
                c = r("oSwX"),
                u = r("3xO4"),
                m = r.n(u),
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.borderColor,
                            r = e.userAvatarUrls,
                            n = e.userAvatarSize,
                            i = r.length,
                            a = "cellBackground" === t ? h.borderCellBackground : h.borderPrimary;
                        return s.createElement(m.a, {
                            style: h.root
                        }, r.map((function(e, t) {
                            return s.createElement(c.default, {
                                key: e,
                                size: n,
                                style: [h.avatar, 0 !== t && h.avatarOverlap, {
                                    zIndex: i - t
                                }, a],
                                uri: e
                            })
                        })))
                    }, t
                }(s.Component);
            o()(d, "defaultProps", {
                borderColor: "cellBackground",
                userAvatarSize: "medium"
            });
            var h = l.a.create((function(e) {
                return {
                    avatar: {
                        borderWidth: e.borderWidths.small
                    },
                    avatarOverlap: {
                        marginLeft: "-" + e.spaces.xSmall
                    },
                    borderCellBackground: {
                        borderColor: e.colors.cellBackground
                    },
                    borderPrimary: {
                        borderColor: e.colors.primary
                    },
                    root: {
                        flexDirection: "row",
                        flexShrink: 0
                    }
                }
            }))
        },
        o52z: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            })), r.d(t, "b", (function() {
                return a
            }));
            var n = r("VPAj"),
                i = Object(n.a)([]),
                a = Object(n.a)({})
        },
        vVBL: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0, r("PN9k");
            var n = o(r("7DT3")),
                i = o(r("ERkP")),
                a = o(r("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, n.default)("svg", Object.assign({}, e, {
                    style: [a.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var l = s;
            t.default = l
        },
        xAHt: function(e, t, r) {
            "use strict";
            r.r(t);
            r("cI1W"), r("PN9k");
            var n = r("PJYZ"),
                i = r.n(n),
                a = r("VbXa"),
                o = r.n(a),
                s = r("lSNA"),
                l = r.n(s),
                c = r("ERkP"),
                u = r("lnti"),
                m = r("rxPX"),
                d = r("hqKg"),
                h = r("o52z"),
                p = r("G6rE"),
                f = function(e, t) {
                    return t.alert && t.alert.userIds || Object(h.a)()
                },
                w = Object(m.a)().dynamicPropsFromState((function() {
                    return {
                        userImageUrls: Object(d.createSelector)(p.e.selectAll, f, (function(e, t) {
                            return t ? Object(u.a)(t.map((function(t) {
                                var r = e[t];
                                return r ? r.profile_image_url_https : void 0
                            }))) : []
                        }))
                    }
                })).withAnalytics(),
                _ = r("3XMw"),
                b = r.n(_),
                v = r("vVBL"),
                g = r.n(v),
                y = r("IbOt"),
                S = r("fs1G"),
                D = r("rcen"),
                I = r("3xO4"),
                x = r.n(I),
                T = r("I4+6"),
                A = r("rHpw"),
                C = r("cm6r"),
                k = r("MAI/"),
                O = r("t62R");
            r.d(t, "NewTweetsPill", (function() {
                return R
            }));
            var P = b.a.gc5f7806,
                E = b.a.fd726bf2,
                L = {
                    component: "new_tweet_prompt"
                },
                M = {},
                j = {},
                R = function(e) {
                    function t() {
                        for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(n)) || this, l()(i()(t), "state", {
                            show: !1
                        }), l()(i()(t), "_getLastShownTime", (function() {
                            return j[t.props.timelineId]
                        })), l()(i()(t), "_attemptShow", (function() {
                            var e = t.props,
                                r = e.alert,
                                n = e.timelineId,
                                i = e.unreadCount;
                            if (t._timeoutID && (clearTimeout(t._timeoutID), t._timeoutID = null), t._mounted && (r || i > 0)) {
                                var a = t._getDelayRemaining();
                                a <= 0 ? (t.setState({
                                    show: !0
                                }), M[n] = Date.now(), t._scribeAction("show")) : t._timeoutID = setTimeout(t._attemptShow, a)
                            }
                        })), l()(i()(t), "_handleScrollDown", (function() {
                            var e = t.props,
                                r = e.remainVisibleInterval,
                                n = e.alert,
                                i = e.timelineId,
                                a = r;
                            n && n.displayDurationMs && n.displayDurationMs > -1 && (a = n.displayDurationMs), t.state.show && Date.now() >= M[i] + a && (t._scribeAction("dismiss"), t._hide())
                        })), l()(i()(t), "_handleClick", (function() {
                            t._scribeAction("click"), window.scrollTo(0, 0), t._hide()
                        })), t
                    }
                    o()(t, e);
                    var r = t.prototype;
                    return r.componentDidMount = function() {
                        this._mounted = !0, this._getLastShownTime() || this._updateLastShownTime(this.props.timelineId), this._attemptShow(), this._cancelMomentum = Object(y.a)({
                            onUp: S.a,
                            onDown: this._handleScrollDown
                        })
                    }, r.componentDidUpdate = function(e, t) {
                        var r = this.props,
                            n = r.unreadCount,
                            i = r.alert,
                            a = r.timelineId,
                            o = e.timelineId !== a,
                            s = o && !this._getLastShownTime();
                        o ? (s && this._updateLastShownTime(a), t.show && this._updateLastShownTime(e.timelineId), e.removeAlert && e.removeAlert(), this.setState({
                            show: !1
                        }), this._attemptShow()) : ((i && !t.show || n > e.unreadCount) && this._attemptShow(), !e.alert && 0 !== n || i || this._hide())
                    }, r.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.timelineId,
                            r = e.removeAlert;
                        this._mounted = !1, this._timeoutID && clearTimeout(this._timeoutID), this.state.show && (this._updateLastShownTime(t), r && r()), this._cancelMomentum()
                    }, r.render = function() {
                        var e, t = this.props,
                            r = t.alert,
                            n = t.userImageUrls,
                            i = this.state.show;
                        e = r ? r.richText && c.createElement(D.b, {
                            entities: r.richText.entities,
                            text: r.richText.text
                        }) : P;
                        var a = T.a.generate({
                            backgroundColor: A.a.theme.colors.primary,
                            color: A.a.theme.colors.whiteOnColor
                        });
                        return c.createElement(x.a, {
                            accessibilityRole: "status"
                        }, c.createElement(C.a, {
                            accessibilityLabel: E,
                            accessibilityRole: "button",
                            importantForAccessibility: i ? "yes" : "no-hide-descendants",
                            interactiveStyles: a,
                            onClick: this._handleClick,
                            style: [z.pill, i && z.show]
                        }, c.createElement(x.a, {
                            style: z.innerPill
                        }, c.createElement(g.a, {
                            style: z.icon
                        }), n ? c.createElement(x.a, null, c.createElement(k.a, {
                            borderColor: "primary",
                            userAvatarSize: "large",
                            userAvatarUrls: n
                        })) : null, c.createElement(O.b, {
                            color: "whiteOnColor",
                            numberOfLines: 1,
                            style: r && z.pillText
                        }, e))))
                    }, r._getDelayRemaining = function() {
                        var e = this.props,
                            t = e.triggerDelay,
                            r = e.alert,
                            n = r && r.triggerDelayMs || t;
                        return this._getLastShownTime() + n - Date.now()
                    }, r._updateLastShownTime = function(e) {
                        e && (j[e] = Date.now())
                    }, r._hide = function() {
                        var e = this.props,
                            t = e.alert,
                            r = e.removeAlert,
                            n = e.timelineId;
                        this._mounted && (this._updateLastShownTime(n), this.setState({
                            show: !1
                        })), t && setTimeout((function() {
                            return r()
                        }), 500)
                    }, r._scribeAction = function(e) {
                        var t = this.props,
                            r = t.analytics,
                            n = t.scribeNamespace,
                            i = Object.assign({}, n, {}, L, {
                                action: e
                            });
                        r.scribe(i)
                    }, t
                }(c.PureComponent);
            l()(R, "defaultProps", {
                remainVisibleInterval: 3e3,
                triggerDelay: 24e4,
                unreadCount: 0
            });
            var z = A.a.create((function(e) {
                    return {
                        pill: {
                            boxShadow: e.boxShadows.small,
                            backgroundColor: e.colors.primary,
                            borderRadius: e.borderRadii.infinite,
                            paddingHorizontal: e.spaces.small,
                            opacity: 0,
                            justifyContent: "center",
                            transform: [{
                                translate3d: "0, 0, 0"
                            }],
                            transitionProperty: "transform, opacity",
                            transitionDuration: "0.15s",
                            transitionTimingFunction: "ease, ease, step-end"
                        },
                        innerPill: {
                            flexDirection: "row",
                            paddingVertical: e.spaces.xxSmall
                        },
                        icon: {
                            width: e.spaces.medium,
                            marginRight: e.spaces.xxSmall,
                            alignSelf: "center",
                            color: e.colors.whiteOnColor
                        },
                        pillText: {
                            marginLeft: e.spaces.xxSmall,
                            alignSelf: "center"
                        },
                        show: {
                            opacity: 1,
                            transitionTimingFunction: "ease, ease, step-start",
                            transform: [{
                                translate3d: "0, 3.5em, 0"
                            }]
                        }
                    }
                })),
                V = w(R);
            t.default = V
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.NewTweetsPill.a1ec5204.js.map
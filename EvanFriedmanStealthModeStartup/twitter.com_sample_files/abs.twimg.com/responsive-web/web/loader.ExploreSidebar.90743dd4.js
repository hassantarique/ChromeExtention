(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
        "A+RP": function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a, o = n("PJYZ"),
                i = n.n(o),
                c = n("VbXa"),
                s = n.n(c),
                d = n("lSNA"),
                l = n.n(d),
                u = n("ERkP"),
                p = (n("PN9k"), n("R972")),
                m = n("VPAj"),
                f = n("8UdT"),
                h = n("xN10"),
                b = n("3XMw"),
                _ = n.n(b),
                g = n("caTy"),
                y = n("zML4"),
                E = n("NxHW"),
                T = n("3xO4"),
                v = n.n(T),
                S = n("Irs7"),
                w = n("hxu0"),
                x = n("6vad"),
                I = n("rC8y"),
                k = _.a.e1b61d44,
                C = _.a.e05b3b2d,
                M = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, l()(i()(r), "_handleShowMoreInlineClick", (function() {
                            var e = r.props.onClick;
                            r.setState({
                                showMoreTrends: !0
                            }), e("show_more_inline")
                        })), l()(i()(r), "_handleShowMoreClick", (function() {
                            (0, r.props.onClick)("show_more")
                        })), r.state = {
                            showMoreTrends: !1
                        }, r
                    }
                    s()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.trends,
                            n = e.analytics;
                        t && t.length > 0 && n.scribe({
                            action: "impression",
                            component: "explore_sidebar"
                        })
                    }, n.canShowMoreTrends = function() {
                        var e = this.props.trends;
                        return !this.state.showMoreTrends && e.length > 5
                    }, n.render = function() {
                        var e = this.props,
                            t = e.footer,
                            n = e.headerTitle,
                            r = e.isInSidebar,
                            a = u.createElement(y.a, {
                                to: "/settings/trends"
                            }),
                            o = r ? Object(E.a)() : void 0;
                        return u.createElement(v.a, null, u.createElement(x.a, {
                            rightControl: a,
                            text: n || k
                        }), this._renderTrends(), this.canShowMoreTrends() ? u.createElement(I.a, {
                            interactiveStyles: o,
                            onPress: this._handleShowMoreInlineClick,
                            text: C
                        }) : !!t && u.createElement(I.a, {
                            interactiveStyles: o,
                            link: t.landingUrl ? Object(g.b)(t.landingUrl) : void 0,
                            onPress: this._handleShowMoreClick,
                            text: t.text
                        }))
                    }, n._renderTrends = function() {
                        var e = this.props.trends;
                        return (this.state.showMoreTrends ? e : e.slice(0, 5)).map((function(e) {
                            return u.createElement(u.Fragment, {
                                key: e.key
                            }, e.item)
                        }))
                    }, t
                }(u.Component),
                O = Object(S.a)(Object(w.a)(M)),
                j = n("zh9S"),
                P = n("5Y9N"),
                R = n("XtkE"),
                A = ((r = {})[f.a.TimelineCursor] = p.d(p.a()), r[f.a.Label] = p.d(p.a()), r[f.a.Message] = p.d(p.a()), r[f.a.Moment] = p.d(p.a()), r[f.a.EventSummary] = p.d(p.a()), r[f.a.News] = p.d(p.a()), r[f.a.Trend] = Object(R.a)({
                    withThirdPartyCards: !1,
                    errorContext: "EXPLORE_SIDEBAR"
                }), r),
                F = ((a = {}).TrendsModule = p.f({
                    bindActions: function() {
                        return {
                            scribeAction: j.c
                        }
                    },
                    component: O,
                    createProps: function(e) {
                        var t = e.entry,
                            n = e.renderEntry,
                            r = e.scribeNamespace,
                            a = e.actions.scribeAction,
                            o = t.content,
                            i = o.footer,
                            c = o.header,
                            s = o.items;
                        return {
                            footer: i,
                            headerTitle: c && c.text,
                            onClick: function(e) {
                                a(Object.assign({}, r, {
                                    element: e,
                                    action: "click"
                                }))
                            },
                            trends: s.map((function(e) {
                                return {
                                    item: n(e),
                                    key: e.entryId
                                }
                            }))
                        }
                    },
                    shouldDisplayBorder: Object(m.a)(!1)
                }), a),
                U = Object.assign({}, Object(P.a)({
                    customHandlers: F,
                    customSelectDisplayType: function(e) {
                        return (t = e.content.items).length > 0 && Object(h.a)(t, (function(e) {
                            return e.type === f.a.Trend
                        })) ? "TrendsModule" : e.content.displayType;
                        var t
                    }
                }), {}, A),
                D = n("fTQJ"),
                N = n("b8qQ"),
                z = n("B5iK"),
                L = n("Kzn8"),
                H = n.n(L),
                V = n("FIs5"),
                G = n("I7xG"),
                X = n("BxsD");
            n.d(t, "UPDATE_INTERVAL", (function() {
                return K
            })), n.d(t, "ExploreSidebar", (function() {
                return Q
            }));
            var W = _.a.f9ef5332,
                B = _.a.e7f88406,
                K = 3e5,
                J = function() {
                    return u.createElement(V.a, {
                        message: B
                    })
                },
                Q = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this, l()(i()(t), "_getModuleWithProfileUserId", Object(G.a)(i()(t), (function(e) {
                            return e.profileUserId
                        }), (function(e) {
                            return Object(X.c)({
                                displayLocation: X.a.WebSidebar,
                                profileUserId: e
                            })
                        }))), l()(i()(t), "_setTimelineRef", (function(e) {
                            t._timeline = e, e && t._startTimer()
                        })), l()(i()(t), "_startTimer", (function() {
                            t._stopTimer(), t._timer = new z.b(K).interval(t._fetchUpdates), t._timer.start()
                        })), l()(i()(t), "_stopTimer", (function() {
                            t._timer && t._timer.stop(), t._timer = void 0
                        })), l()(i()(t), "_onAppForegrounded", (function(e) {
                            "active" === e && t._fetchUpdates()
                        })), l()(i()(t), "_fetchUpdates", (function() {
                            t._timeline && "active" === H.a.currentState && t._timeline.fetchTop({})
                        })), t
                    }
                    s()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        H.a.addEventListener("change", this._onAppForegrounded)
                    }, n.componentWillUnmount = function() {
                        this._stopTimer(), H.a.removeEventListener("change", this._onAppForegrounded)
                    }, n.render = function() {
                        var e = this.props.profileUserId ? this._getModuleWithProfileUserId() : X.e;
                        return u.createElement(v.a, null, u.createElement(D.a, {
                            entryConfiguration: U,
                            module: e,
                            renderUnavailable: J,
                            scroller: N.a,
                            showFooter: !1,
                            timelineRef: this._setTimelineRef,
                            title: W,
                            withInstreamVideo: !1
                        }))
                    }, t
                }(u.Component);
            t.default = Q
        },
        BxsD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "g", (function() {
                return p
            }));
            n("PN9k"), n("KYm4");
            var r = n("ZNT5"),
                a = n("eR3e"),
                o = Object.freeze({
                    Trends: "trends"
                }),
                i = Object.freeze({
                    WebSidebar: "web_sidebar"
                }),
                c = "explore-",
                s = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.contentType,
                        a = t.displayLocation,
                        o = t.profileUserId,
                        i = n || a || "main",
                        s = o ? "" + c + i + "-" + o : "" + c + i;
                    return Object(r.a)({
                        timelineId: s,
                        getEndpoint: function(e) {
                            return e.URT.fetchExplore
                        },
                        getEndpointParams: function(e) {
                            return Object.assign({
                                candidate_source: n,
                                display_location: a,
                                profile_user_id: o
                            }, e)
                        },
                        context: "FETCH_EXPLORE",
                        perfKey: "" + c + i,
                        staleIntervalMs: 9e5
                    })
                },
                d = s(),
                l = s({
                    contentType: o.Trends
                }),
                u = s({
                    displayLocation: i.WebSidebar
                }),
                p = function() {
                    return function(e, t) {
                        return e(Object(a.n)(t()).filter((function(e) {
                            return 0 === e.indexOf(c)
                        })).map((function(e) {
                            return Object(a.d)(e)
                        })))
                    }
                }
        },
        XtkE: function(e, t, n) {
            "use strict";
            var r = n("R972"),
                a = (n("PN9k"), n("yIC7"), n("6rlp")),
                o = n("ERkP"),
                i = n("vjRr"),
                c = n("VPAj"),
                s = n("0KEI"),
                d = n("NnR4"),
                l = n("caTy"),
                u = n("cFuS"),
                p = n("NeVM"),
                m = n("zh9S"),
                f = n("Rp9C"),
                h = n("X04g"),
                b = (n("rmZQ"), n("NlgC"), n("0rpg"), n("VbXa")),
                _ = n.n(b),
                g = n("wrlS"),
                y = n("NxHW"),
                E = n("zOwA"),
                T = "metadata",
                v = "trend",
                S = n("3xO4"),
                w = n.n(S),
                x = n("hxu0"),
                I = n("htQn"),
                k = n("pjBI"),
                C = n("t62R"),
                M = n("e5HP"),
                O = n("rHpw"),
                j = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
                P = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    _()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.attachment,
                            n = e.description,
                            r = e.domainContext,
                            a = e.isInSidebar,
                            i = e.link,
                            c = e.name,
                            s = e.onClick,
                            d = e.rank,
                            l = e.trendFeedbackMenu,
                            u = c.replace("#", "").charAt(0).match(j) ? "rtl" : "ltr",
                            p = i && ("string" == typeof i ? {
                                pathname: i
                            } : i);
                        return o.createElement(o.Fragment, null, o.createElement(I.a, {
                            interactiveStyles: a ? Object(y.a)() : void 0,
                            link: p ? Object.assign({}, p, {
                                anchorless: !0
                            }) : void 0,
                            onPress: s,
                            style: A.rootLink,
                            testID: v
                        }, o.createElement(w.a, {
                            style: A.content
                        }, o.createElement(k.a, null, d ? o.createElement(C.b, {
                            color: "deepGray",
                            importantForAccessibility: "no-hide-descendants",
                            size: "small"
                        }, d) : null, o.createElement(C.b, {
                            color: "deepGray",
                            size: "small"
                        }, r || null)), o.createElement(C.b, {
                            dir: u,
                            style: A.name,
                            weight: "bold",
                            withHashflags: !0
                        }, c), o.createElement(C.b, {
                            color: "deepGray",
                            style: A.description
                        }, n), t ? o.createElement(w.a, {
                            style: A.attachment
                        }, t) : null, this._renderMetadata(), o.createElement(w.a, {
                            style: A.trendFeedbackMenuContainer
                        }, l))))
                    }, n._renderMetadata = function() {
                        var e, t = this.props,
                            n = t.isInSidebar,
                            r = t.metaDescription,
                            a = t.promotedContent,
                            i = t.socialProofUser,
                            c = n && g.a.isTrue("responsive_web_trends_modification_hide_social_proof");
                        return a ? e = o.createElement(M.a, {
                            label: r,
                            promotedContent: a
                        }) : c ? e = null : i && r ? e = o.createElement(E.a, {
                            image: i.profile_image_url_https,
                            key: i.id_str,
                            label: r,
                            textSize: "small"
                        }) : r && (e = r), e ? o.createElement(C.b, {
                            color: "deepGray",
                            size: "small",
                            style: A.withMarginTop,
                            testID: T
                        }, e) : null
                    }, t
                }(o.Component),
                R = Object(x.a)(P),
                A = O.a.create((function(e) {
                    return {
                        rootLink: {
                            display: "flex",
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: e.componentDimensions.gutterVertical
                        },
                        trendFeedbackMenuContainer: {
                            position: "absolute",
                            top: 1,
                            right: 0
                        },
                        attachment: {
                            alignSelf: "stretch",
                            paddingBottom: e.spaces.xxSmall,
                            paddingTop: e.spaces.xSmall
                        },
                        description: {
                            paddingTop: e.spaces.micro
                        },
                        content: {
                            flexGrow: 1,
                            position: "relative"
                        },
                        name: {
                            paddingTop: e.spaces.micro
                        },
                        withMarginTop: {
                            marginTop: e.spaces.xxSmall
                        }
                    }
                })),
                F = n("G6rE"),
                U = n("SMZj"),
                D = function(e) {
                    var t = e.content,
                        n = t.name,
                        r = t.promotedMetadata,
                        a = Object.assign({
                            item_type: h.a.ItemType.TREND,
                            item_query: n,
                            name: n
                        }, f.a.getGuideDetails(e.itemMetadata.clientEventInfo));
                    return r && (a.disclosure_type = r.disclosureType), a
                },
                N = function(e) {
                    return e && e.promotedTrendId ? {
                        disclosure_type: e.disclosureType,
                        impression_id: e.promotedTrendId
                    } : void 0
                },
                z = function(e, t) {
                    if (e && e.length > 0) {
                        var n = e[0];
                        if (!t && Object(U.h)(n.name) !== U.d.EVENT) return;
                        var r = "summary_large_image" === n.name ? "summary" : n.name;
                        return n.trends_horizon_web_card_binding_values ? o.createElement(d.a, {
                            card: {
                                url: n.url,
                                name: r,
                                binding_values: n.trends_horizon_web_card_binding_values,
                                users: n.users
                            },
                            cardContext: {
                                locationKey: "trend",
                                tweetUserId: "TREND_CARD_NO_TWEET_USER_ID"
                            },
                            cardState: "secondary"
                        }) : void 0
                    }
                },
                L = function(e) {
                    var t = e.entry;
                    return {
                        cards: i.a.createManyHydratedSelector(t.content.associatedCardUrls || []),
                        socialProofUsers: function(e) {
                            return F.e.selectMany(e, t.content.associatedUserIds || [])
                        }
                    }
                },
                H = function(e, t) {
                    return r.f({
                        isFocusable: Object(c.a)(!0),
                        component: R,
                        bindActions: function(e) {
                            e.module;
                            return {
                                logTrend: a.c,
                                scribe: m.c,
                                createLocalApiErrorHandler: Object(s.b)(t)
                            }
                        },
                        selectData: L,
                        createProps: function(t) {
                            var n = t.actions,
                                r = n.logTrend,
                                a = n.scribe,
                                o = n.createLocalApiErrorHandler,
                                i = t.data,
                                c = i.cards,
                                s = i.socialProofUsers,
                                d = t.entry,
                                m = t.feedbackItems,
                                f = (t.module.selectFeedbackActions, t.scribeNamespace),
                                h = d.content,
                                b = h.promotedMetadata;
                            return {
                                attachment: z(c, e),
                                description: h.description,
                                domainContext: h.trendMetadata.domainContext,
                                link: Object(l.b)(h.url),
                                metaDescription: h.trendMetadata && h.trendMetadata.metaDescription,
                                name: h.name,
                                onClick: function() {
                                    a(Object.assign({}, f, {
                                        action: "search"
                                    }), {
                                        items: [D(d)]
                                    }), b && b.promotedTrendId && r({
                                        promoted_trend_id: b.promotedTrendId,
                                        event: u.d.CLICK
                                    }).catch(o())
                                },
                                promotedContent: N(b),
                                rank: h.rank,
                                trendFeedbackMenu: Object(p.a)({
                                    feedbackItems: m,
                                    scribe: a,
                                    scribeNamespace: f
                                }),
                                socialProofUser: s && s[0]
                            }
                        },
                        onImpression: function(e) {
                            var t = e.entry,
                                n = e.actions,
                                r = n.logTrend,
                                a = n.createLocalApiErrorHandler,
                                o = t.content.promotedMetadata;
                            o && o.promotedTrendId && r({
                                promoted_trend_id: o.promotedTrendId,
                                event: u.d.IMPRESSION
                            }).catch(a())
                        }
                    })
                };
            t.a = function(e) {
                var t = e.withThirdPartyCards,
                    n = void 0 !== t && t,
                    a = e.errorContext;
                return r.d(H(n, a))
            }
        },
        zOwA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = n("VbXa"),
                a = n.n(r),
                o = n("lSNA"),
                i = n.n(o),
                c = n("ERkP"),
                s = n("9Xij"),
                d = n("t62R"),
                l = n("rHpw"),
                u = n("D4le"),
                p = n.n(u),
                m = n("3xO4"),
                f = n.n(m),
                h = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return a()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.color,
                            n = e.image,
                            r = e.label,
                            a = e.textSize;
                        return c.createElement(f.a, {
                            style: b.root
                        }, n ? c.createElement(f.a, {
                            style: b.imageContainer
                        }, c.createElement(s.a, {
                            ratio: 1
                        }, c.createElement(p.a, {
                            source: n,
                            style: b.image
                        }))) : null, c.createElement(d.b, {
                            color: t,
                            size: a
                        }, r))
                    }, t
                }(c.PureComponent);
            i()(h, "defaultProps", {
                color: "deepGray",
                textSize: "normal"
            });
            var b = l.a.create((function(e) {
                return {
                    root: {
                        alignItems: "center",
                        flexDirection: "row"
                    },
                    imageContainer: {
                        alignSelf: "flex-start",
                        backgroundColor: e.colors.lightGray,
                        flexShrink: 0,
                        height: e.fontSizes.large,
                        marginRight: e.spaces.xxSmall,
                        width: e.fontSizes.large,
                        borderRadius: "100%"
                    },
                    image: {
                        height: "100%",
                        width: "100%",
                        borderRadius: e.borderRadii.infinite
                    }
                }
            }))
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.ExploreSidebar.90743dd4.js.map
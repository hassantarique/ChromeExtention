(window.webpackJsonp = window.webpackJsonp || []).push([
    [186], {
        TGLq: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r, i = n("6/RC"),
                o = (r = n("tI3i")) && r.__esModule ? r : {
                    default: r
                };
            var a = i.canUseDOM ? window.location.href : "",
                s = {
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    canOpenURL: function() {
                        return Promise.resolve(!0)
                    },
                    getInitialURL: function() {
                        return Promise.resolve(a)
                    },
                    openURL: function(e) {
                        try {
                            return c(e), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    },
                    _validateURL: function(e) {
                        (0, o.default)("string" == typeof e, "Invalid URL: should be a string. Was: " + e), (0, o.default)(e, "Invalid URL: cannot be empty")
                    }
                },
                c = function(e) {
                    i.canUseDOM && (window.location = new URL(e, window.location).toString())
                },
                l = s;
            t.default = l, e.exports = t.default
        },
        ainm: function(e, t, n) {
            "use strict";
            n.r(t);
            n("zQXS"), n("KI7T"), n("PN9k");
            var r = n("8OQS"),
                i = n.n(r),
                o = n("PJYZ"),
                a = n.n(o),
                s = n("VbXa"),
                c = n.n(s),
                l = n("lSNA"),
                d = n.n(l),
                u = (n("LnO1"), n("3eMz"), n("dtAy"), n("4oWw"), n("PRJl"), n("n+Zb")),
                p = n("EhiH"),
                m = n("zrc3"),
                h = n("7nmT"),
                f = n.n(h),
                y = n("nfVA"),
                v = function(e, t) {
                    var n = Object(p.a)(e, (function(e) {
                        return t.has(e.entryId)
                    }));
                    return n ? n.entryId : void 0
                },
                _ = function(e, t, n) {
                    var r, i = Object(m.a)(t, (function(t) {
                        return t.entryId === e
                    }));
                    if (i >= 0) {
                        var o = Object(p.a)(t, (function(e) {
                            return n.has(e.entryId)
                        }), i);
                        r = o ? o.entryId : void 0
                    }
                    return r || (r = v(t, n)), r
                },
                g = function(e, t, n, r) {
                    var i = e ? Object(m.a)(n, (function(t) {
                        return t.entryId === e
                    })) : -1;
                    if (i >= 0)
                        for (var o = i >= 0 ? i + t : 0; o >= 0 && o < n.length; o += t) {
                            var a = n[o].entryId;
                            if (r.has(a)) return a
                        }
                    return i >= 0 ? e : void 0
                },
                b = n("ERkP"),
                C = n("5UID"),
                I = n("VPAj"),
                w = n("1YZw"),
                E = n("rxPX"),
                T = Object(E.a)().propsFromActions({
                    addToast: w.b
                }).withAnalytics(),
                x = n("KNCp"),
                R = n("HPNB"),
                S = n("w0zD"),
                L = n("GQKA"),
                k = n.n(L),
                O = (n("KYm4"), Object.freeze({
                    Icon: "Icon",
                    FullWidth: "FullWidth"
                })),
                P = n("3xO4"),
                D = n.n(P),
                j = n("sgih"),
                A = n("/yvb"),
                M = n("t62R"),
                N = n("TIdA"),
                B = n("A91F"),
                F = n("cHvH"),
                U = n("rHpw"),
                H = n("aWzz"),
                z = n("rcen"),
                W = 418,
                G = 1,
                K = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, d()(a()(t), "_modalId", "COVER_SHEET_FULL_" + G++), d()(a()(t), "_render", (function(e) {
                            var n = e.windowWidth,
                                r = e.windowHeight,
                                i = t.props,
                                o = i.primaryText,
                                a = i.secondaryText,
                                s = i.primaryCtaLabel,
                                c = i.secondaryCtaLabel,
                                l = i.onDismiss,
                                d = i.onPrimaryCtaClick,
                                u = i.onSecondaryCtaClick,
                                p = i.details,
                                m = i.image,
                                h = r <= W,
                                f = R.a.isTwoColumnLayout(n),
                                y = !h && m;
                            return b.createElement(j.a, {
                                accessibilityRole: "dialog",
                                ariaLabelledBy: t._modalId,
                                enableMaskForDismiss: !!l,
                                onMaskClick: l,
                                style: V.sheet,
                                type: "full",
                                withMask: !0
                            }, y ? t._renderImage(f) : q, l ? b.createElement(S.a, {
                                color: "deepGray",
                                onClose: l,
                                size: "small",
                                style: V.dismissButton
                            }) : null, b.createElement(D.a, {
                                style: V.content
                            }, b.createElement(z.b, {
                                alignment: o.alignment || z.a.Center,
                                entities: o.entities,
                                nativeID: t._modalId,
                                rtl: o.rtl,
                                size: "large",
                                style: V.text,
                                text: o.text,
                                weight: "bold"
                            }), a ? b.createElement(z.b, {
                                alignment: a.alignment || z.a.Center,
                                color: "deepGray",
                                entities: a.entities,
                                rtl: a.rtl,
                                size: "normal",
                                style: [V.text, V.secondaryText],
                                text: a.text
                            }) : null), b.createElement(D.a, {
                                style: V.footer
                            }, b.createElement(A.a, {
                                onPress: d,
                                type: "primary"
                            }, b.createElement(M.b, null, s)), c ? b.createElement(A.a, {
                                onPress: u,
                                style: V.secondaryCtaButton,
                                type: "text"
                            }, b.createElement(M.b, null, c)) : null, p ? b.createElement(z.b, {
                                alignment: p.alignment,
                                color: "deepGray",
                                entities: p.entities,
                                rtl: p.rtl,
                                size: "small",
                                style: V.detailsText,
                                text: p.text
                            }) : null))
                        })), d()(a()(t), "_renderImage", (function(e) {
                            var n = t.props,
                                r = n.image,
                                i = n.imageDisplayType;
                            if (!r) return null;
                            var o = r.width / r.height;
                            return i === O.FullWidth ? b.createElement(D.a, {
                                style: [V.coverImage, e && V.wideModeCoverImage]
                            }, b.createElement(N.a, {
                                accessibilityLabel: "",
                                aspectMode: B.a.exact(o),
                                image: r
                            })) : b.createElement(D.a, {
                                style: V.image
                            }, b.createElement(N.a, {
                                accessibilityLabel: "",
                                aspectMode: B.a.withinRange(1, 10),
                                image: r
                            }))
                        })), t
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.props.onImpression && this.props.onImpression()
                    }, n.render = function() {
                        return b.createElement(F.a, null, this._render)
                    }, t
                }(b.PureComponent),
                V = U.a.create((function(e) {
                    return {
                        detailsText: {
                            alignSelf: "flex-start",
                            marginTop: e.spaces.xSmall
                        },
                        secondaryText: {
                            paddingTop: e.spaces.xSmall
                        },
                        sheet: {
                            backgroundColor: e.colors.cellBackground,
                            flex: 1,
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        icon: {
                            height: "2em",
                            marginBottom: e.spaces.xSmall,
                            marginTop: e.spaces.medium,
                            color: e.colors.brandColor
                        },
                        image: {
                            marginBottom: e.spaces.xSmall,
                            marginTop: e.spaces.large,
                            width: "calc(15 * " + e.spaces.medium + ")"
                        },
                        wideModeCoverImage: {
                            width: "100%",
                            borderTopEndRadius: e.borderRadii.medium,
                            borderTopStartRadius: e.borderRadii.medium,
                            overflow: "hidden"
                        },
                        coverImage: {
                            flex: 1,
                            flexGrow: 0
                        },
                        content: {
                            justifyContent: "center",
                            alignItems: "center",
                            padding: e.spaces.large
                        },
                        secondaryCtaButton: {
                            marginTop: e.spaces.xSmall
                        },
                        dismissButton: {
                            position: "absolute",
                            top: e.spaces.xxSmall,
                            left: e.spaces.xxSmall
                        },
                        footer: {
                            alignItems: "center",
                            paddingHorizontal: e.spaces.medium,
                            paddingBottom: e.spaces.xLarge
                        },
                        text: {
                            width: "100%"
                        }
                    }
                })),
                q = b.createElement(k.a, {
                    style: V.icon
                }),
                X = K,
                J = n("0SBs"),
                Q = n("TGLq"),
                Y = n.n(Q),
                Z = n("caTy"),
                $ = n("TnY3"),
                ee = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, d()(a()(t), "_scribeAction", (function(e) {
                            var n = t.props.analytics,
                                r = (e.details, i()(e, ["details"]));
                            n.scribe(Object.assign({
                                component: "cover"
                            }, r))
                        })), d()(a()(t), "_handleDismiss", (function() {
                            var e = t.props,
                                n = e.dismissInfo,
                                r = e.processCallback,
                                i = n || {},
                                o = i.callbacks,
                                a = i.clientEventInfo;
                            o && o.forEach((function(e) {
                                r(e)
                            })), t._scribeAction(Object.assign({
                                action: "dismiss"
                            }, a)), t.props.onClose()
                        })), d()(a()(t), "_handlePrimaryCtaClick", (function() {
                            t._handleCtaClick(t.props.primaryCta, "primary_cta")
                        })), d()(a()(t), "_handleSecondaryCtaClick", (function() {
                            t.props.secondaryCta && t._handleCtaClick(t.props.secondaryCta, "secondary_cta")
                        })), d()(a()(t), "_handleCtaClick", (function(e, n) {
                            var r = e.ctaBehavior,
                                i = e.callbacks,
                                o = e.clientEventInfo,
                                a = t.props,
                                s = a.addToast,
                                c = a.processCallback,
                                l = a.history;
                            if (t.props.onClose(), t._scribeAction(Object.assign({
                                    action: "click",
                                    element: n
                                }, o)), r.dismiss) {
                                var d = r.dismiss;
                                d && d.feedbackMessage && s({
                                    text: d.feedbackMessage.text
                                })
                            }
                            if (r.navigate) {
                                var u = r.navigate,
                                    p = u && Object(Z.b)(u.url);
                                p && (p.external ? Y.a.openURL(p.pathname) : l.push(p.pathname))
                            }
                            i && i.forEach((function(e) {
                                return c(e)
                            }))
                        })), t
                    }
                    return c()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.onImpression,
                            n = e.primaryText,
                            r = e.primaryCta,
                            i = e.secondaryText,
                            o = e.secondaryCta,
                            a = e.details,
                            s = e.image,
                            c = e.imageDisplayType,
                            l = e.type,
                            d = e.dismissInfo;
                        return l === x.a.Full ? b.createElement(X, {
                            details: a,
                            image: s,
                            imageDisplayType: c,
                            onDismiss: d && this._handleDismiss,
                            onImpression: t,
                            onPrimaryCtaClick: this._handlePrimaryCtaClick,
                            onSecondaryCtaClick: this._handleSecondaryCtaClick,
                            primaryCtaLabel: r.text,
                            primaryText: n,
                            secondaryCtaLabel: o && o.text,
                            secondaryText: i
                        }) : b.createElement(J.a, {
                            onImpression: t,
                            onPrimaryCtaClick: this._handlePrimaryCtaClick,
                            onSecondaryCtaClick: this._handleSecondaryCtaClick,
                            primaryCtaLabel: r.text,
                            primaryText: n,
                            secondaryCtaLabel: o && o.text,
                            secondaryText: i
                        })
                    }, t
                }(b.PureComponent);
            d()(ee, "defaultProps", {
                imageDisplayType: O.Icon
            });
            var te = Object($.a)(T(ee)),
                ne = n("3GUV"),
                re = n("8UdT"),
                ie = n("wrlS"),
                oe = n("MDbM"),
                ae = n("v//M"),
                se = (n("C1yv"), n("Qyxo")),
                ce = n("sXY3"),
                le = function() {
                    function e() {
                        this._lingerScribed = {}, this._appearance = {}
                    }
                    var t = e.prototype;
                    return t.processPositioningUpdate = function(e, t, n) {
                        void 0 === n && (n = Date.now());
                        var r = de(e, t);
                        return this._lingerTransition(r, n)
                    }, t.flushLingerEvents = function(e) {
                        return void 0 === e && (e = Date.now()), this._detectLingerEvents(this._appearance, {}, e)
                    }, t._lingerTransition = function(e, t) {
                        var n = {},
                            r = this._appearance;
                        return e.forEach((function(e) {
                            n[e] = r[e] || t
                        })), this._appearance = n, this._detectLingerEvents(r, n, t)
                    }, t._detectLingerEvents = function(e, t, n) {
                        var r = this;
                        return Object(se.a)(Object(ce.a)(e), (function(e) {
                            var i = e[0],
                                o = e[1];
                            return !t[i] && !r._lingerScribed[i] && n - o >= 500 ? (r._lingerScribed[i] = !0, {
                                id: i,
                                start: o,
                                end: n
                            }) : void 0
                        }))
                    }, e
                }(),
                de = function(e, t) {
                    return Object(se.a)(e, (function(e) {
                        var n = e.id,
                            r = e.rectangle;
                        return ue(r, t) >= .5 * r.getHeight() ? n : void 0
                    }))
                },
                ue = function(e, t) {
                    return Math.max(0, Math.min(e.getBottom(), t.getBottom()) - Math.max(e.getTop(), t.getTop()))
                },
                pe = n("iChn"),
                me = n("/NU0"),
                he = n("OrGc"),
                fe = n("hACr"),
                ye = n("oQhu"),
                ve = n("xjVt"),
                _e = n("EUHl"),
                ge = n("fs1G"),
                be = n("iBK2"),
                Ce = (n("rxtR"), n("+d3d")),
                Ie = n("aITJ"),
                we = n("I7xG"),
                Ee = n("cFgU");
            n.d(t, "TimelineRenderer", (function() {
                return Le
            }));
            var Te = function(e) {
                return e.entryId
            };
            var xe, Re = Object(I.a)(b.createElement(ne.a, null)),
                Se = new Map,
                Le = function(e) {
                    function t(t) {
                        var n, r, o;
                        return n = e.call(this, t) || this, d()(a()(n), "_entryRefs", new Map), d()(a()(n), "_adjustFocusBy", (function(e) {
                            n._shouldPreventKeyboardShortcuts() || n._updateFocus((function(t, r, i) {
                                var o = t && g(t, e, r, n._entryRefs);
                                if (!o && n._scroller) {
                                    var a = n._scroller.findTopmostVisibleId();
                                    o = a ? _(a, r, n._entryRefs) : v(r, n._entryRefs)
                                }
                                return o
                            }))
                        })), d()(a()(n), "_focusNext", (function() {
                            return n._adjustFocusBy(1)
                        })), d()(a()(n), "_focusPrevious", (function() {
                            return n._adjustFocusBy(-1)
                        })), d()(a()(n), "_handleCoverImpression", (function() {
                            var e = n.props,
                                t = e.activeCover,
                                r = e.scribeAction,
                                o = e.processCallback,
                                a = e.scribeNamespace;
                            if (t) {
                                var s = t.clientEventInfo,
                                    c = t.cover.impressionCallbacks;
                                c && c.forEach((function(e) {
                                    return o(e)
                                }));
                                var l = s || {},
                                    d = (l.details, i()(l, ["details"]));
                                r(Object.assign({}, a, {
                                    component: "cover",
                                    action: "impression"
                                }, d))
                            }
                        })), d()(a()(n), "_handleDismissCover", (function() {
                            n.props.clearActiveCover()
                        })), d()(a()(n), "_renderLoadBottom", Object(we.a)(a()(n), (function(e) {
                            return e.bottomFetchStatus
                        }), (function(e) {
                            return e.onBottomRetry
                        }), (function(e, t) {
                            return b.createElement(D.a, {
                                style: ke.footer
                            }, b.createElement(ae.a, {
                                fetchStatus: e,
                                onRequestRetry: t,
                                render: Re
                            }))
                        }))), d()(a()(n), "_refreshControlWrapper", (function(e) {
                            var t = n.props,
                                r = t.refreshControl,
                                i = t.topFetchStatus,
                                o = t.onRefresh;
                            return r ? b.createElement(r, {
                                isRefreshing: i === oe.a.LOADING,
                                onRefresh: o
                            }, e) : e
                        })), d()(a()(n), "_getCellRenderer", Object(ye.a)((function(e, t) {
                            var r, i = {
                                module: t,
                                renderEntry: function(e) {
                                    return r(e)
                                },
                                entryRef: n._setEntryRef
                            };
                            return r = function(t) {
                                var n = e.getHandler(t);
                                return n && n.render ? n.render(t, i) : null
                            }
                        }))), d()(a()(n), "_setEntryRef", (function(e, t) {
                            n._entryRefs.set(e, t)
                        })), d()(a()(n), "_getInitialFocusedEntry", Object(ye.a)((function(e, t) {
                            return t && e.find(t)
                        }))), d()(a()(n), "_createEntryIndex", Object(ye.a)((function(e) {
                            return Object(pe.a)(e, (function(e) {
                                return e.entryId
                            }))
                        }))), d()(a()(n), "_handleBeforeWindowUnload", (function() {
                            n._flushLingerScribes()
                        })), d()(a()(n), "scrollToTop", (function() {
                            n._scroller && (n._scroller.scrollToTop(), n._updateFocus((function(e, t, n) {
                                return e ? v(t, n) : void 0
                            })))
                        })), d()(a()(n), "_shouldPreventKeyboardShortcuts", (function() {
                            var e = n.context.isModal,
                                t = n.props.subTimeline;
                            return xe && !e || !!t
                        })), d()(a()(n), "_handleRefreshKeyboardShortcut", Object(Ce.a)((function() {
                            n._shouldPreventKeyboardShortcuts() || n._refreshToTop()
                        }), 1e3)), d()(a()(n), "_handleNearBottom", n._proximityHandler((function() {
                            n.props.onNearBottom()
                        }))), d()(a()(n), "_handleNearTop", n._proximityHandler((function() {
                            (0, n.props.onNearTop)()
                        }))), d()(a()(n), "_handleAtTop", n._proximityHandler((function() {
                            n.props.removeAlert && n.props.removeAlert(), n.props.onAtTop && n.props.onAtTop()
                        }))), d()(a()(n), "_handleItemsRendered", n._proximityHandler((function(e) {
                            var t = e.viewport,
                                r = e.positions;
                            n._scribeLingerEvents(n._impressionTracker.processPositioningUpdate(r, t))
                        }))), d()(a()(n), "_handlePositionRestored", (function() {
                            n._positionedRestored = !0
                        })), d()(a()(n), "_scribeNewEntries", (r = function(e) {
                            var t = n.props,
                                r = t.richScribeAction,
                                i = t.scribeNamespace,
                                o = n._buildStreamScribeData(e);
                            o.length > 0 && r(Object.assign({}, i, {
                                component: "stream",
                                action: "results"
                            }), {
                                items: o
                            })
                        }, o = window.requestIdleCallback || window.requestAnimationFrame, function(e) {
                            o((function() {
                                r(e)
                            }))
                        })), d()(a()(n), "_setScroller", (function(e) {
                            n._scroller = e
                        })), n._impressionTracker = new le, n
                    }
                    c()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillReceiveProps = function(e) {
                        this.props.timelineId !== e.timelineId && (this._flushLingerScribes(), this._impressionTracker = new le)
                    }, n.componentDidMount = function() {
                        var e = this.context.isModal;
                        this._initialize(), window.addEventListener("beforelogout", this._handleBeforeWindowUnload), window.addEventListener("beforeunload", this._handleBeforeWindowUnload), this.props.onRef && this.props.onRef(this), e && (xe = !0)
                    }, n.componentWillUnmount = function() {
                        var e = this.context.isModal;
                        this._flushLingerScribes(), window.removeEventListener("beforelogout", this._handleBeforeWindowUnload), window.removeEventListener("beforeunload", this._handleBeforeWindowUnload), this.props.onRef && this.props.onRef(void 0), e && (xe = !1)
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.entries,
                            r = t.handlerRegistry,
                            i = t.timelineId,
                            o = t.onRef;
                        i !== e.timelineId ? this._initialize() : n === e.entries && r === e.handlerRegistry || this._scribeNewEntries(n), o && o !== e.onRef && o(this)
                    }, n._updateFocus = function(e) {
                        var t = e(this._activeEntryId, this.props.entries, this._entryRefs);
                        if (t !== this._activeEntryId) {
                            this._activeEntryId = t;
                            var n = this._activeEntryId && this._entryRefs.get(this._activeEntryId);
                            n && function(e, t) {
                                var n = f.a.findDOMNode(e),
                                    r = n && n.querySelector("a, [tabindex='0']");
                                if (r) {
                                    r.scrollIntoView(), r.focus();
                                    var i = (t || y.a.root()).getRect().getTop();
                                    i > 0 && window.scrollBy(0, -1 * i)
                                }
                            }(n, this.context.viewport)
                        }
                    }, n.render = function() {
                        var e, t, n = this.props,
                            r = n.activeCover,
                            i = n.anchoring,
                            o = n.entries,
                            a = n.handlerRegistry,
                            s = n.showFooter,
                            c = n.header,
                            l = n.isInitialFocusEntry,
                            d = n.renderEmptyState,
                            p = n.timelineId,
                            m = n.title,
                            h = n.module,
                            f = this.props.scroller,
                            y = this._getInitialFocusedEntry(o, l);
                        return this._refreshControlWrapper(this._shouldRenderEmptyState(o) ? d() : b.createElement(C.a, {
                            title: m
                        }, r ? this._renderActiveCover() : null, this._renderPill(), b.createElement(fe.a, {
                            handlers: (e = {}, e[he.d.loadNewTweets] = this._handleRefreshKeyboardShortcut, e[he.d.nextItem] = this._focusNext, e[he.d.previousItem] = this._focusPrevious, e)
                        }, b.createElement(f, {
                            anchoring: i,
                            assumedItemHeight: (t = Ie.a.isDesktopOS() ? ie.a.getValue("responsive_web_vs_config_desktop_assumed_item_height") : void 0, Object(me.a)(t) ? t : void 0),
                            cacheKey: p,
                            footer: s && this._renderLoadBottom(),
                            header: c,
                            identityFunction: Te,
                            initialAnchor: y && u.b(Te(y)),
                            items: o,
                            onAtStart: this._handleAtTop,
                            onItemsRendered: this._handleItemsRendered,
                            onNearEnd: this._handleNearBottom,
                            onNearStart: this._handleNearTop,
                            onPositionRestored: this._handlePositionRestored,
                            ref: this._setScroller,
                            renderer: this._getCellRenderer(a, h)
                        }))))
                    }, n._renderPill = function() {
                        var e = this.props,
                            t = e.alert,
                            n = e.removeAlert,
                            r = e.topUnseenCount,
                            i = e.newTweetsPillMode,
                            o = e.scribeNamespace,
                            a = e.timelineId;
                        return i ? i === _e.a.URT ? b.createElement(ve.a.Configure, {
                            alert: t,
                            removeAlert: n,
                            scribeNamespace: o,
                            timelineId: a
                        }) : i === _e.a.CLIENT && r && r > 0 && ie.a.isTrue("responsive_web_tweets_pill_local_enabled") ? b.createElement(ve.a.Configure, {
                            removeAlert: n,
                            scribeNamespace: o,
                            timelineId: a,
                            unreadCount: r
                        }) : void 0 : null
                    }, n._renderActiveCover = function() {
                        var e = this.props.activeCover,
                            t = e && e.cover;
                        return e && t ? "full" === e.type ? this._renderFullCover(e.cover) : "half" === e.type ? this._renderHalfCover(e.cover) : null : null
                    }, n._renderFullCover = function(e) {
                        var t = this.props.processCallback;
                        return b.createElement(te, {
                            details: e.details || void 0,
                            dismissInfo: e.dismissInfo,
                            image: e.image,
                            imageDisplayType: e.imageDisplayType || void 0,
                            onClose: this._handleDismissCover,
                            onImpression: this._handleCoverImpression,
                            primaryCta: e.primaryCoverCta,
                            primaryText: e.primaryText,
                            processCallback: t,
                            secondaryCta: e.secondaryCoverCta,
                            secondaryText: e.secondaryText,
                            type: "full"
                        })
                    }, n._renderHalfCover = function(e) {
                        var t = this.props.processCallback;
                        return b.createElement(te, {
                            image: e.image ? e.image.image : void 0,
                            imageDisplayType: e.image ? e.image.imageDisplayType : void 0,
                            onClose: this._handleDismissCover,
                            onImpression: this._handleCoverImpression,
                            primaryCta: e.primaryCoverCta,
                            primaryText: e.primaryText,
                            processCallback: t,
                            secondaryCta: e.secondaryCoverCta,
                            secondaryText: e.secondaryText,
                            type: "half"
                        })
                    }, n._shouldRenderEmptyState = function(e) {
                        return this.props.initialFetchStatus === oe.a.LOADED && 0 === e.length
                    }, n._getEntryIndex = function() {
                        return this._createEntryIndex(this.props.entries)
                    }, n._initialize = function() {
                        this._scribeNewEntries(this.props.entries), this._activeEntryId = void 0
                    }, n._flushLingerScribes = function() {
                        this._scribeLingerEvents(this._impressionTracker.flushLingerEvents())
                    }, n._refreshToTop = function() {
                        this.props.onRefresh(), this.scrollToTop()
                    }, n._proximityHandler = function(e) {
                        var t = this;
                        return function(n) {
                            t._positionedRestored && e(n)
                        }
                    }, n._buildStreamScribeData = function(e) {
                        var t = this,
                            n = this.props,
                            r = n.scribeCache,
                            i = n.timelineId,
                            o = n.handlerRegistry,
                            a = null;
                        if (!r.has(i)) {
                            var s = new Set;
                            r.set(i, s)
                        }
                        var c = r.get(i);
                        return c ? e.reduce((function(e, n, r) {
                            var i = n.entryId,
                                s = !1;
                            if (n.content && n.content.promotedMetadata && (s = n.content.promotedMetadata), !c.has(i) && !o.getNeedsLoad(n)) {
                                c.add(i);
                                var l = t._getScribeDataItem(o, n);
                                l && (s && null !== a && (l.tweet_count = a), e.push(l))
                            }
                            return s ? a = 0 : null !== a && -1 === n.type.indexOf("ui_") && a++, e
                        }), []) : []
                    }, n._storeSeenIds = function(e) {
                        var t = this.props,
                            n = t.seenIds,
                            r = t.seenIdsLatest,
                            i = t.timelineId;
                        "home" === i && n ? n.addNewTweets(e) : "home-latest" === i && r && r.addNewTweets(e)
                    }, n._scribeLingerEvents = function(e) {
                        var t = this;
                        if (0 !== e.length) {
                            var n = this.props.handlerRegistry,
                                r = this._getEntryIndex(),
                                i = [],
                                o = [];
                            if (e.forEach((function(e) {
                                    var a = e.id,
                                        s = e.start,
                                        c = e.end,
                                        l = r[a];
                                    if (l) {
                                        var d = t._getScribeDataItem(n, l);
                                        if (d) {
                                            var u = {
                                                visibility_start: s,
                                                visibility_end: c
                                            };
                                            i.push(Object.assign({}, d, {
                                                impression_details: u
                                            }))
                                        }
                                        l.type === re.a.Tweet && o.push(l.content.id)
                                    }
                                })), i.length > 0) {
                                var a = this.props,
                                    s = a.richScribeAction,
                                    c = a.scribeNamespace;
                                s(Object.assign({}, c, {
                                    component: "stream",
                                    element: "linger",
                                    action: "results"
                                }), {
                                    items: i
                                })
                            }
                            o.length > 0 && this._storeSeenIds(o)
                        }
                    }, n._getScribeDataItem = function(e, t) {
                        var n = e.getHandler(t);
                        return n ? n.getDataForStreamImpression(t) : null
                    }, t
                }(b.PureComponent);
            d()(Le, "contextTypes", {
                viewport: H.object,
                isModal: H.bool
            }), d()(Le, "defaultProps", {
                showFooter: !0,
                onBottomRetry: ge.a,
                onNearBottom: ge.a,
                onNearTop: ge.a,
                onRefresh: ge.a,
                scribeCache: Se,
                scroller: be.a,
                seenIds: Object(Ee.b)(),
                seenIdsLatest: Object(Ee.a)()
            });
            var ke = U.a.create((function(e) {
                return {
                    footer: {
                        height: "calc(5 * " + e.lineHeight + "rem)"
                    }
                }
            }));
            t.default = Le
        },
        w0zD: function(e, t, n) {
            "use strict";
            var r = n("VbXa"),
                i = n.n(r),
                o = n("lSNA"),
                a = n.n(o),
                s = n("ERkP"),
                c = n("/yvb"),
                l = n("3XMw"),
                d = n.n(l),
                u = n("l2F/"),
                p = n.n(u),
                m = d.a.c6d63ac0,
                h = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return i()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.ariaLabel,
                            n = e.closeIcon,
                            r = e.color,
                            i = e.disabled,
                            o = e.onClose,
                            a = e.isOnMedia,
                            l = e.size,
                            d = e.style,
                            u = n || s.createElement(p.a, null);
                        return s.createElement(c.a, {
                            accessibilityLabel: t || m,
                            borderColor: "transparent",
                            color: r,
                            disabled: i,
                            icon: u,
                            onPress: o,
                            size: l,
                            style: d,
                            type: a ? "onMedia" : void 0
                        })
                    }, t
                }(s.PureComponent);
            a()(h, "defaultProps", {
                color: "white",
                disabled: !1,
                size: "normal"
            }), t.a = h
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.TimelineRenderer.919649b4.js.map
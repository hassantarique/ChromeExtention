(window.webpackJsonp = window.webpackJsonp || []).push([
    [183], {
        "0kTQ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a, r = n("k49u"),
                c = n("3XMw"),
                o = n.n(c).a.c7c099da,
                l = ((a = {})[r.a.TargetUserNotFound] = {
                    toast: {
                        text: o
                    }
                }, a.showToast = !0, a)
        },
        "9D32": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var a = o(n("7DT3")),
                r = o(n("ERkP")),
                c = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                return void 0 === e && (e = {}), (0, a.default)("svg", Object.assign({}, e, {
                    style: [c.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), r.default.createElement("g", null, r.default.createElement("path", {
                    d: "M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"
                })))
            };
            l.metadata = {
                height: 24,
                width: 24
            };
            var i = l;
            t.default = i
        },
        LzTg: function(e, t, n) {
            "use strict";
            n.r(t);
            n("cI1W");
            var a = n("PJYZ"),
                r = n.n(a),
                c = n("VbXa"),
                o = n.n(c),
                l = n("lSNA"),
                i = n.n(l),
                s = n("ERkP"),
                u = (n("yIC7"), n("ZUOq")),
                d = n("rxPX"),
                m = n("0KEI"),
                h = n("kGix"),
                p = n("auX9"),
                f = n("G6rE"),
                g = Object(d.a)().propsFromState({
                    fetchStatus: p.g,
                    loggedInUser: f.e.selectLoggedInUser,
                    multiAccountUsers: p.j,
                    hasMultiAccountBadges: p.h
                }).propsFromActions({
                    createLocalApiErrorHandlerAccountSwitch: Object(m.b)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),
                    createLocalApiErrorHandlerMultiListFetch: Object(m.b)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),
                    fetchMultiAccountList: p.c,
                    switchAccount: p.l
                }).adjustStateProps((function(e) {
                    var t = e.fetchStatus,
                        n = e.loggedInUser,
                        a = e.multiAccountUsers,
                        r = e.hasMultiAccountBadges;
                    return {
                        fetchStatus: t === h.a.NONE ? h.a.LOADING : t,
                        hasMultiAccountBadges: !!n && r,
                        loggedInUser: n,
                        multiAccountUsers: a
                    }
                })).withAnalytics({
                    page: "nav",
                    section: "account_switcher"
                }),
                _ = n("3XMw"),
                v = n.n(_),
                w = n("SKmd"),
                E = n.n(w),
                C = n("3Wr5"),
                b = n("5/+E"),
                y = n.n(b),
                A = {
                    logout: "AccountSwitcher_MenuSheet_Logout_Button"
                },
                k = n("3xO4"),
                S = n.n(k),
                M = n("Irs7"),
                x = n("yrzJ"),
                I = n("CKsB"),
                L = n("IMA+"),
                T = n("Znyr"),
                B = n("G1WX"),
                U = n("rHpw"),
                N = v.a.h54dfaeb,
                P = v.a.d133d3e5,
                O = v.a.a5fa74ba,
                z = v.a.cfcab6fb,
                H = v.a.e5d0a947,
                D = function(e) {
                    return s.createElement(v.a.I18NFormatMessage, {
                        $i18n: "aa0d102b"
                    }, s.createElement(x.a, {
                        color: "normal",
                        screenName: e
                    }))
                },
                F = 5,
                R = function() {
                    return s.createElement(S.a, {
                        style: V.divider
                    })
                },
                j = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this, i()(r()(t), "_render", (function() {
                            var e = t.props,
                                n = e.loggedInUser,
                                a = e.multiAccountUsers,
                                r = a.length > 1;
                            return s.createElement(S.a, {
                                style: V.menuContainer
                            }, t._renderUserAccounts(), a.length === F ? null : s.createElement(s.Fragment, null, s.createElement(I.a, {
                                actionText: z,
                                link: "/account/add",
                                onClick: t._handleAddExistingAccountClick
                            }), s.createElement(R, null)), r ? s.createElement(s.Fragment, null, s.createElement(I.a, {
                                actionText: H,
                                link: "/account/switch",
                                onClick: t._handleManageAccountsClick
                            }), s.createElement(R, null)) : null, s.createElement(I.a, {
                                actionText: D(n.screen_name),
                                link: "/logout",
                                onClick: t._handleLogOutClick,
                                testID: A.logout
                            }))
                        })), i()(r()(t), "_renderUserAccounts", (function() {
                            var e = t.props,
                                n = e.loggedInUser,
                                a = e.multiAccountUsers;
                            return a.length > 1 ? s.createElement(s.Fragment, null, a.map((function(e) {
                                var a = e.user_id === n.id_str,
                                    r = e.badgeCount;
                                return s.createElement(L.a, {
                                    accessibilityLabel: a ? void 0 : O({
                                        screenName: e.screen_name
                                    }),
                                    avatarUri: e.avatar_image_url,
                                    decoration: t._renderUserDecoration({
                                        badgeCount: r,
                                        isActiveUser: a
                                    }),
                                    displayMode: "UserCompact",
                                    isProtected: e.is_protected,
                                    isVerified: e.is_verified,
                                    key: e.user_id,
                                    name: e.name,
                                    onCellClick: a ? void 0 : t._handleMultiAccountSwitch({
                                        hasBadge: !!r,
                                        isProtected: e.is_protected,
                                        userId: e.user_id
                                    }),
                                    screenName: e.screen_name,
                                    userId: e.user_id,
                                    withBottomBorder: !0,
                                    withLink: !1
                                })
                            }))) : s.createElement(L.a, {
                                avatarUri: n.profile_image_url_https,
                                decoration: t._renderUserDecoration({
                                    isActiveUser: !0
                                }),
                                displayMode: "UserCompact",
                                isProtected: n.protected,
                                isVerified: n.verified,
                                name: n.name,
                                screenName: n.screen_name,
                                userId: n.id_str,
                                withBottomBorder: !0,
                                withLink: !1
                            })
                        })), i()(r()(t), "_renderUserDecoration", (function(e) {
                            var t = e.badgeCount;
                            return e.isActiveUser ? s.createElement(y.a, {
                                style: [V.iconCheckMark, V.userDecoration]
                            }) : t ? s.createElement(T.a, {
                                count: t,
                                standalone: !0,
                                style: V.userDecoration,
                                truncatedCountFormatter: P,
                                unreadCountLabel: N
                            }) : void 0
                        })), i()(r()(t), "_handleMultiAccountSwitch", (function(e) {
                            var n = e.hasBadge,
                                a = e.isProtected,
                                r = e.userId;
                            return function() {
                                return t.props.multiAccountSwitch({
                                    hasBadge: n,
                                    isProtected: a,
                                    userId: r
                                })
                            }
                        })), i()(r()(t), "_handleFetch", (function() {
                            var e = t.props,
                                n = e.createLocalApiErrorHandlerMultiListFetch;
                            (0, e.fetchMultiAccountList)().catch(n())
                        })), i()(r()(t), "_handleMenuItemClick", (function(e) {
                            return function() {
                                var n = t.props,
                                    a = n.analytics,
                                    r = n.onClose;
                                a.scribe({
                                    element: e,
                                    action: "click"
                                }), r && r()
                            }
                        })), i()(r()(t), "_handleAddExistingAccountClick", t._handleMenuItemClick("add_existing_account")), i()(r()(t), "_handleManageAccountsClick", t._handleMenuItemClick("manage_accounts")), i()(r()(t), "_handleLogOutClick", t._handleMenuItemClick("log_out")), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props.fetchStatus;
                        return Object(C.a)().hasMultiAccountCookie ? s.createElement(B.a, {
                            fetchStatus: e,
                            onRequestRetry: this._handleFetch,
                            render: this._render
                        }) : this._render()
                    }, t
                }(s.Component),
                V = U.a.create((function(e) {
                    return {
                        iconCheckMark: {
                            color: e.colors.primary,
                            flexShrink: 0
                        },
                        divider: {
                            backgroundColor: e.colors.borderColor,
                            height: e.borderWidths.small
                        },
                        menuContainer: {
                            paddingVertical: e.spaces.xSmall
                        },
                        userDecoration: {
                            marginLeft: e.spaces.xSmall
                        }
                    }
                })),
                J = Object(M.a)(j),
                W = n("0kTQ"),
                X = "SideNav_AccountSwitcher_Button",
                Z = n("OiMc"),
                G = n("cm6r"),
                K = n("XP29"),
                q = n("jV+4"),
                Q = v.a.h54dfaeb,
                Y = v.a.d133d3e5,
                $ = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this, i()(r()(t), "_renderMenuSheet", (function(e) {
                            var n = t.props,
                                a = n.createLocalApiErrorHandlerMultiListFetch,
                                r = n.fetchMultiAccountList,
                                c = n.fetchStatus,
                                o = n.loggedInUser,
                                l = n.multiAccountUsers;
                            return o ? s.createElement(J, {
                                createLocalApiErrorHandlerMultiListFetch: a,
                                fetchMultiAccountList: r,
                                fetchStatus: c,
                                loggedInUser: o,
                                multiAccountSwitch: t._multiAccountSwitch,
                                multiAccountUsers: l,
                                onClose: e
                            }) : null
                        })), i()(r()(t), "_renderBadge", (function() {
                            var e = t.props,
                                n = e.isExpanded;
                            return e.hasMultiAccountBadges ? s.createElement(T.a, {
                                pip: !0,
                                style: n && ee.pip,
                                truncatedCountFormatter: Y,
                                unreadCountLabel: Q
                            }) : null
                        })), i()(r()(t), "_multiAccountSwitch", (function(e) {
                            var n = e.hasBadge,
                                a = e.isProtected,
                                r = e.userId,
                                c = t.props,
                                o = c.analytics,
                                l = c.createLocalApiErrorHandlerAccountSwitch,
                                i = c.switchAccount;
                            o.scribe({
                                component: a ? "switch_to_protected_account" : "switch_account",
                                element: n ? "account_badged" : "account",
                                action: "click"
                            }), i({
                                user_id: r
                            }).catch(l(W.a))
                        })), i()(r()(t), "_handleAccountSwitcherClick", (function() {
                            t.props.analytics.scribe({
                                action: "click"
                            })
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.isExpanded,
                            n = e.loggedInUser;
                        if (!n) return null;
                        var a = n.name,
                            r = n.screen_name,
                            c = n.profile_image_url_https,
                            o = n.protected,
                            l = n.verified;
                        return s.createElement(Z.a, {
                            contentStyle: ee.menuContainer,
                            enableEnterKeyToggle: !0,
                            renderContent: this._renderMenuSheet,
                            withArrow: !0,
                            withFixedPosition: !0
                        }, s.createElement(G.a, {
                            accessibilityRole: "button",
                            onClick: this._handleAccountSwitcherClick,
                            style: ee.anchorContainer,
                            testID: X
                        }, s.createElement(S.a, null, s.createElement(K.a, {
                            screenName: r,
                            size: "xLarge",
                            uri: c
                        }), t ? null : this._renderBadge()), t ? s.createElement(s.Fragment, null, s.createElement(q.a, {
                            isProtected: o,
                            isVerified: l,
                            name: a,
                            screenName: r,
                            style: ee.userName,
                            withStackedLayout: !0
                        }), s.createElement(S.a, {
                            style: ee.iconContainer
                        }, s.createElement(E.a, {
                            style: ee.chevronDown
                        }), t ? this._renderBadge() : null)) : null))
                    }, t
                }(s.Component),
                ee = U.a.create((function(e) {
                    return {
                        anchorContainer: {
                            alignItems: "center",
                            borderRadius: e.borderRadii.infinite,
                            display: "flex",
                            flexDirection: "row",
                            padding: e.spaces.xSmall
                        },
                        chevronDown: {
                            color: e.colors.text
                        },
                        iconContainer: {
                            alignItems: "flex-end",
                            flexGrow: 1
                        },
                        userName: {
                            flexGrow: 1,
                            marginLeft: e.spaces.xSmall,
                            marginRight: e.spaces.large
                        },
                        pip: {
                            position: "absolute",
                            right: "calc(-1 * " + e.spaces.xxSmall + ")",
                            top: "calc(-1 * " + e.spaces.xxSmall + ")"
                        },
                        menuContainer: {
                            width: u.a.cardWidth.normal
                        }
                    }
                })),
                te = g($),
                ne = n("dcwb"),
                ae = n("wrlS"),
                re = n("1eTX"),
                ce = n("7CKV"),
                oe = n.n(ce),
                le = n("/yvb"),
                ie = n("zfvc"),
                se = n("t62R"),
                ue = v.a.c6432564,
                de = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this, i()(r()(t), "_handlePress", (function(e) {
                            t.props.analytics.scribe({
                                component: "new_tweet_button",
                                action: "click"
                            })
                        })), t
                    }
                    return o()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.composeOptions,
                            n = e.withLabel,
                            a = e.withIcon,
                            r = e.testID;
                        return s.createElement(le.a, {
                            accessibilityLabel: ue,
                            icon: a ? s.createElement(oe.a, null) : void 0,
                            link: {
                                pathname: "/compose/tweet",
                                state: t
                            },
                            onPress: this._handlePress,
                            size: "normalLarge",
                            style: me.button,
                            testID: r,
                            type: "primary"
                        }, n ? s.createElement(ie.b, {
                            animateMount: !0,
                            duration: "long",
                            show: !0,
                            type: "fade"
                        }, s.createElement(se.b, null, ue)) : null)
                    }, t
                }(s.Component),
                me = U.a.create((function(e) {
                    return {
                        button: {
                            boxShadow: "0px 8px 28px rgba(0, 0, 0, 0.08)"
                        }
                    }
                })),
                he = Object(M.a)(de),
                pe = n("N5qz"),
                fe = "SideNav_NewTweet_Button",
                ge = n("cHvH");
            n.d(t, "default", (function() {
                return _e
            }));
            var _e = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this, i()(r()(t), "_newMultiAccountEnabled", ae.a.isTrue("responsive_web_new_multi_account_ux_enabled")), t
                    }
                    o()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.isCollapsedSmall,
                            a = t.isExpanded,
                            r = t.isLoggedIn,
                            c = t.isTwoColumn,
                            o = t.location,
                            l = t.onTabRefresh,
                            i = t.widthStyle,
                            u = [ve.root, i, n ? ve.rootPaddingSmall : ve.rootPaddingNormal];
                        return s.createElement(ge.a, null, (function(t) {
                            var n = t.windowHeight;
                            return s.createElement(S.a, {
                                style: u
                            }, s.createElement(S.a, {
                                style: [ve.topSection, !a && ve.alignItemsCenter]
                            }, s.createElement(S.a, {
                                style: ve.topControl
                            }, s.createElement(re.a, {
                                onClick: l,
                                pullLeft: !1,
                                size: "large"
                            })), s.createElement(S.a, {
                                style: [ve.appTabBar, !a && ve.alignItemsCenter]
                            }, s.createElement(ne.a, {
                                layout: "vertical",
                                location: o,
                                onTabRefresh: l,
                                wideMode: c,
                                withExtendedItems: !0,
                                withLabel: a
                            })), r ? e._renderNewTweetButton(n) : null), r && e._newMultiAccountEnabled ? s.createElement(S.a, {
                                style: [ve.footerContainer, !a && ve.alignItemsCenter]
                            }, s.createElement(te, {
                                isExpanded: a
                            })) : null)
                        }))
                    }, n._renderNewTweetButton = function(e) {
                        var t = this.props,
                            n = t.composeOptions,
                            a = t.isExpanded;
                        return s.createElement(S.a, {
                            style: [ve.tweetButton, !a && ve.alignItemsCenter, pe.a.isTallHeight(e) && ve.withTallHeight]
                        }, s.createElement(he, {
                            composeOptions: n,
                            testID: fe,
                            withIcon: !a,
                            withLabel: a
                        }))
                    }, t
                }(s.Component),
                ve = U.a.create((function(e) {
                    return {
                        root: {
                            height: "100%",
                            overflowY: "auto",
                            justifyContent: "space-between"
                        },
                        rootPaddingNormal: {
                            paddingHorizontal: e.spaces.medium
                        },
                        rootPaddingSmall: {
                            paddingHorizontal: e.spaces.xSmall
                        },
                        topSection: {
                            alignItems: "flex-start"
                        },
                        topControl: {
                            paddingVertical: e.spaces.micro,
                            maxWidth: "100%"
                        },
                        appTabBar: {
                            marginBottom: e.spaces.xxSmall,
                            marginTop: e.spaces.micro,
                            width: "100%"
                        },
                        tweetButton: {
                            marginVertical: e.spaces.xxSmall,
                            width: "90%"
                        },
                        withTallHeight: {
                            marginVertical: e.spaces.small
                        },
                        alignItemsCenter: {
                            alignItems: "center"
                        },
                        settingsButton: {
                            marginBottom: e.spaces.medium,
                            marginHorizontal: e.spaces.xxSmall
                        },
                        footerContainer: {
                            marginBottom: e.spaces.xSmall,
                            marginTop: e.spaces.medium
                        }
                    }
                }))
        },
        b63e: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var a = o(n("7DT3")),
                r = o(n("ERkP")),
                c = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                return void 0 === e && (e = {}), (0, a.default)("svg", Object.assign({}, e, {
                    style: [c.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), r.default.createElement("g", null, r.default.createElement("path", {
                    d: "M20.884 9.978l-.167-.015c-.607-.055-1.133-.442-1.366-1.005v-.004c-.234-.563-.136-1.208.254-1.677l.107-.13c.544-.65.5-1.608-.1-2.208l-.55-.552c-.6-.6-1.557-.643-2.21-.1l-.127.107c-.468.39-1.114.488-1.677.255l-.005-.002c-.562-.233-.95-.76-1.004-1.366l-.015-.166c-.076-.844-.784-1.49-1.632-1.49h-.778c-.847 0-1.555.645-1.632 1.49l-.015.166c-.055.606-.44 1.132-1.003 1.365l-.006.002c-.563.233-1.21.135-1.678-.255l-.128-.107c-.65-.543-1.61-.5-2.21.1l-.55.55c-.6.6-.643 1.558-.1 2.21l.107.128c.39.468.488 1.115.255 1.678l-.002.005c-.234.56-.76.948-1.366 1.003l-.166.015c-.844.077-1.49.785-1.49 1.633v.78c0 .848.645 1.556 1.49 1.633l.165.015c.61.055 1.135.443 1.368 1.008l.002.006c.232.562.133 1.207-.256 1.674l-.106.128c-.543.65-.5 1.61.1 2.21l.55.55c.6.6 1.558.643 2.21.1l.123-.103c.47-.39 1.115-.487 1.678-.254l.01.004c.563.233.95.76 1.005 1.366l.015.16c.077.844.785 1.49 1.633 1.49h.78c.848 0 1.556-.645 1.633-1.49l.015-.16c.055-.607.442-1.133 1.005-1.366l.01-.004c.563-.233 1.21-.135 1.677.255l.123.104c.65.543 1.61.5 2.21-.1l.55-.55c.6-.6.643-1.558.1-2.21l-.107-.128c-.39-.47-.488-1.115-.254-1.678l.002-.005c.234-.562.76-.948 1.365-1.003l.165-.015c.844-.077 1.49-.785 1.49-1.633v-.78c0-.85-.646-1.557-1.49-1.634zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                })))
            };
            l.metadata = {
                height: 24,
                width: 24
            };
            var i = l;
            t.default = i
        },
        "k/Am": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var a = o(n("7DT3")),
                r = o(n("ERkP")),
                c = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                return void 0 === e && (e = {}), (0, a.default)("svg", Object.assign({}, e, {
                    style: [c.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), r.default.createElement("g", null, r.default.createElement("path", {
                    d: "M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
                }), r.default.createElement("path", {
                    d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                })))
            };
            l.metadata = {
                height: 24,
                width: 24
            };
            var i = l;
            t.default = i
        },
        nGvh: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var a = o(n("7DT3")),
                r = o(n("ERkP")),
                c = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                return void 0 === e && (e = {}), (0, a.default)("svg", Object.assign({}, e, {
                    style: [c.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), r.default.createElement("g", null, r.default.createElement("path", {
                    d: "M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                })))
            };
            l.metadata = {
                height: 24,
                width: 24
            };
            var i = l;
            t.default = i
        },
        o570: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var a = o(n("7DT3")),
                r = o(n("ERkP")),
                c = o(n("OkZJ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                return void 0 === e && (e = {}), (0, a.default)("svg", Object.assign({}, e, {
                    style: [c.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), r.default.createElement("g", null, r.default.createElement("path", {
                    d: "M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
                })))
            };
            l.metadata = {
                height: 24,
                width: 24
            };
            var i = l;
            t.default = i
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.SideNav.c752ef04.js.map
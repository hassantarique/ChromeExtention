window.__SCRIPTS_LOADED__["i18n-rweb"] && ((window.webpackJsonp = window.webpackJsonp || []).push([
    [80], {
        "3XMw": function(e, t, r) {
            "use strict";
            var n, o, a = {};
            Object.defineProperty(t, "_register", {
                value: function(e, t) {
                    if (a[e] = a[e] || {}, Object.defineProperty(this, "language", {
                            get: function() {
                                return n
                            },
                            set: function(e) {
                                n = e, o = a[e]
                            },
                            enumerable: !0,
                            configurable: !0
                        }).language = e, void 0 !== t) {
                        var r = Object.getOwnPropertyNames(t)[0],
                            i = Object.getOwnPropertyDescriptor(t, r);
                        Object.defineProperty(o, r, i), r in this || Object.defineProperty(this, r, {
                            get: function() {
                                return o[r]
                            }
                        })
                    }
                    return function(t, r) {
                        a[e][t] = r, t in this || Object.defineProperty(this, t, {
                            get: function() {
                                return o[t]
                            },
                            enumerable: !0
                        })
                    }.bind(this)
                },
                enumerable: !1
            })
        },
        maj8: function(e, t, r) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;

            function i(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(e, t) {
                for (var r, u, c = i(e), d = 1; d < arguments.length; d++) {
                    for (var s in r = Object(arguments[d])) o.call(r, s) && (c[s] = r[s]);
                    if (n) {
                        u = n(r);
                        for (var f = 0; f < u.length; f++) a.call(r, u[f]) && (c[u[f]] = r[u[f]])
                    }
                }
                return c
            }
        },
        tBke: function(e, t, r) {
            "use strict";
            var n = r("3XMw")._register("en"),
                o = function(e) {
                    var t = !String(e).split(".")[1];
                    return 1 == e && t ? "one" : "other"
                };

            function a(e, t, r) {
                switch (o(e)) {
                    case "one":
                        return t;
                    default:
                        return r
                }
            }

            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            n("a76a4712", "360"), n("a54d17e1", "Loading image"), n("h19e8033", "Set reminder"), n("j33a92ca", "Reminder set"), n("fb79efe3", "Play"), n("e6580b36", "Next"), n("g4c9627f", "Previous"), n("c07c6beb", "Follows you"), n("e618ec06", "Protected account"), n("e15e663b", "Translator account"), n("j094281e", "Verified account"), n("g37da5a4", "List"), n("f4c9593e", "Cancel"), n("a97eb7e8", "Yes"), n("adbb1147", "Day"), n("ie177cc2", "Month"), n("f6a4f704", "Year"), n("h500aec4", "January"), n("i0bd7830", "February"), n("dd2ba833", "March"), n("h41112c4", "April"), n("c44ba222", "May"), n("e085b629", "June"), n("j23444db", "July"), n("cf8294b7", "August"), n("h235e0a0", "September"), n("fe917e4d", "October"), n("dd341450", "November"), n("g27e0cbd", "December"), n("c6d63ac0", "Close"), n("e091ac1d", "Try again"), n("ec156656", "Something went wrong."), n("fd7eb69c", "Follow"), n("fd87318c", "Following"), n("ef5e2456", "Unfollow"), n("g061efcb", (function(e) {
                return "Unfollow " + e.title + "?"
            })), n("e0e1ff4e", "Zoom in or out on your image."), n("de15098a", "Aspect ratio: original"), n("aa261873", "Aspect ratio: wide"), n("a1e564e5", "Aspect ratio: square"), n("fd7d9019", "Learn more"), n("fd4568f3", "Followers you know"), n("h48dfaa0", "Not followed by anyone you're following"), n("b132d5eb", (function(e) {
                return "Promoted by " + e.fullName
            })), n("de4189ab", "Promoted"), n("a1240b5d", "Promoted (political)"), n("f0c6996b", (function(e) {
                return "Promoted (political) by " + e.fullName
            })), n("i8a5ec1d", "Promoted (issue)"), n("f3f75b08", (function(e) {
                return "Promoted (issue) by " + e.fullName
            })), n("a3f00cc9", "Pull to refresh"), n("fb67418f", "Now"), n("d53da10e", (function(e) {
                return e.amountOfTime + " ago"
            })), n("i15cb8fb", "You Retweeted"), n("d5d986db", "Pinned Tweet"), n("c88df33b", (function(e) {
                return e.team + " won"
            })), n("dd73a557", "Upcoming"), n("hd04d503", "Live"), n("d2a66c51", "Final"), n("b96a228d", "Postponed"), n("ed6e347e", "Cancelled"), n("a4bf5188", "Today"), n("dbb73a23", "Tomorrow"), n("ba8d1339", (function(e) {
                return "" + e.date
            })), n("c4d9bd93", (function(e) {
                return "" + e.place
            })), n("ed869ddd", "and"), n("e49eaf2c", (function(e) {
                return "and " + a(e.othersCount, "1 other", e.othersCount + " others")
            })), n("b90bebc4", "and"), n("if7c4751", (function(e) {
                return "and " + a(e.othersCount, "1 other", e.othersCount + " others")
            })), n("i5301171", "View people in conversation"), n("de4b1402", (function(e) {
                return "" + e.formattedCount
            })), n("cbc41858", (function(e) {
                return "Following"
            })), n("d1e8c189", (function(e) {
                return "" + e.formattedCount
            })), n("c94a69ff", (function(e) {
                return "Follower" + a(e.count, "", "s")
            })), n("ia51a661", "Reload"), n("e17680be", "Copy Video Address"), n("ad548e46", "Copy Gif Address"), n("e192cb7c", "Video"), n("ef8a23d7", "Broadcast"), n("e5a681fa", (function(e) {
                return "Play " + e.locVideoType
            })), n("afea008d", (function(e) {
                return "Play live " + e.locVideoType
            })), n("gcd7f40a", (function(e) {
                return e.hoursWord + " " + e.minutesWord + " " + e.secondsWord + " long"
            })), n("ffd04da2", (function(e) {
                return "Starting at " + e.hoursWord + " " + e.minutesWord + " " + e.secondsWord
            })), n("hce3aca0", (function(e) {
                return e.viewerCount + " viewer" + a(e.viewerCount, "", "s")
            })), n("d06bc93c", (function(e) {
                return e.viewCount + " view" + a(e.viewCount, "", "s")
            })), n("gb10d97b", "Hide captions"), n("f265bc9e", "Show captions"), n("b305f378", "Volume"), n("g4c568fa", "Volume slider"), n("c77d46bc", "Ad"), n("b1e528e2", (function(e) {
                return "Ad by " + e.advertiserName
            })), n("cbf9f3b5", "Pause"), n("a86068c2", "Replay"), n("i769873c", "Full screen"), n("c1d12f51", "Exit full screen"), n("d74e2882", "Seek slider"), n("e67d871f", "View on Periscope with hearts and chats"), n("g5ed862e", (function(e) {
                return e.currentTime + " of " + e.durationTime
            })), n("d835c4cf", "Skip Ad"), n("gf122aa6", "Skip"), n("iaa9d277", (function(e) {
                return "Skip Ad in " + e.seconds
            })), n("fffa5395", (function(e) {
                return "Skip " + e.seconds
            })), n("ea41b2ee", (function(e) {
                return e.volumePercent + " percent"
            })), n("fea81c4f", (function(e) {
                return "Watch now at " + e.trimmedHostname
            })), n("hbd4aa16", (function(e) {
                return "Visit " + e.trimmedHostname
            })), n("j9bb491b", "LIVE"), n("ef84b656", (function(e) {
                return "Ad · " + e.timeRemaining
            })), n("a2f8dfa9", (function(e) {
                return "Ad by " + e.advertiserName + " · " + e.timeRemaining
            })), n("f09c5897", "REPLAY"), n("afb3a1a6", "The media could not be played."), n("f1ff216a", "This broadcast has ended."), n("a44c6fe7", "This broadcast is not available."), n("b9ff639e", "This media has been disabled in response to a report by the copyright owner."), n("d3adb65c", "This broadcast is not available in your location."), n("b2c8c4b6", (function(e) {
                return "Video not available due to a copyright claimed by " + e.holder
            })), n("b344bd9e", "Sorry, this video is restricted in certain areas, please wait a few seconds as we acquire your location. Make sure to enable location settings in your browser."), n("gc211472", "We cannot play the video in this browser. Please try a different web browser."), n("d10d909d", "This video is not available in your location."), n("d5581b6c", "This video has been deleted."), n("ea7e7f93", "Guest audio indicator"), n("d671fe76", "Mute"), n("h4c10f46", "Unmute"), n("dfd3de3a", "Up next"), n("b1c9aed0", "Watch again");
            var u = r("ERkP"),
                c = [],
                d = {};

            function s(e) {
                return e
            }
            n("I18NFormatMessage", function(e) {
                var t, r, n, o, f;

                function b() {
                    return e.apply(this, arguments) || this
                }
                return r = e, (t = b).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, b.prototype.render = function() {
                    return u.createElement.apply(u, this[this.props.$i18n].reduce(this.templateReducer, [u.Fragment, null]))
                }, n = b, (o = [{
                    key: "f7f41f53",
                    get: function() {
                        return [this.props.formattedCount + " Member" + a(this.props.count, "", "s")]
                    }
                }, {
                    key: "fec5bb7c",
                    get: function() {
                        return ["Followed by "]
                    }
                }, {
                    key: "df548250",
                    get: function() {
                        return ["Followed by ", " and "]
                    }
                }, {
                    key: "efa8cccc",
                    get: function() {
                        return ["Followed by ", ", ", ", and "]
                    }
                }, {
                    key: "f3c72f02",
                    get: function() {
                        return ["Followed by ", ", ", ", and ", " others you follow"]
                    }
                }, {
                    key: "hb920fa1",
                    get: function() {
                        return ["", " Retweeted"]
                    }
                }, {
                    key: "c3924dbd",
                    get: function() {
                        return ["<FormatMessage />: "]
                    }
                }, {
                    key: "cce69761",
                    get: function() {
                        return ["", " from "]
                    }
                }, {
                    key: "f0e3023b",
                    get: function() {
                        return ["Replying to "]
                    }
                }, {
                    key: "deb8dc45",
                    get: function() {
                        return ["Replying to ", " ", " "]
                    }
                }, {
                    key: "c9fc9996",
                    get: function() {
                        return ["Replying to ", " "]
                    }
                }, {
                    key: "e7b105bd",
                    get: function() {
                        return ["Replying to ", " ", " ", " "]
                    }
                }, {
                    key: "fcafadf6",
                    get: function() {
                        return ["Replying to ", " ", " "]
                    }
                }, {
                    key: "a7609657",
                    get: function() {
                        return ["", " "]
                    }
                }, {
                    key: "j6c94d93",
                    get: function() {
                        return ["", " "]
                    }
                }, {
                    key: "templateReducer",
                    get: function() {
                        var e, t = u.Children.toArray(this.props.children),
                            r = (e = this.props.$i18n, c[d[e]] || s);
                        return function(e, n, o) {
                            return e.concat(n, t[r(o)])
                        }
                    }
                }]) && i(n.prototype, o), f && i(n, f), b
            }(r("3XMw").I18NFormatMessage || u.Component));
            var f = r("KQqj");
            r("5hi7"), r("7TW0"), r("yluK"), r("Fr/T");
            f._validateParameterTypeNumber, f._validateParameterPresence;
            var b = f._numberRound,
                l = (f._numberFormat, f._numberFormatterFn),
                p = f._pluralGeneratorFn,
                m = (f._validateParameterTypeDate, f._dateToPartsFormat, f._dateToPartsFormatterFn),
                h = (f._dateFormat, f._dateFormatterFn),
                y = f._unitFormatterFn;
            f.a527220190 = l(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", b("truncate"), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }, , {
                3: {
                    one: "0K",
                    other: "0K"
                },
                4: {
                    one: "00K",
                    other: "00K"
                },
                5: {
                    one: "000K",
                    other: "000K"
                },
                6: {
                    one: "0M",
                    other: "0M"
                },
                7: {
                    one: "00M",
                    other: "00M"
                },
                8: {
                    one: "000M",
                    other: "000M"
                },
                9: {
                    one: "0B",
                    other: "0B"
                },
                10: {
                    one: "00B",
                    other: "00B"
                },
                11: {
                    one: "000B",
                    other: "000B"
                },
                12: {
                    one: "0T",
                    other: "0T"
                },
                13: {
                    one: "00T",
                    other: "00T"
                },
                14: {
                    one: "000T",
                    other: "000T"
                },
                maxExponent: 14
            }], f("en").pluralGenerator({})), f.a50324716 = l(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", b(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }, , {
                3: {
                    one: "0K",
                    other: "0K"
                },
                4: {
                    one: "00K",
                    other: "00K"
                },
                5: {
                    one: "000K",
                    other: "000K"
                },
                6: {
                    one: "0M",
                    other: "0M"
                },
                7: {
                    one: "00M",
                    other: "00M"
                },
                8: {
                    one: "000M",
                    other: "000M"
                },
                9: {
                    one: "0B",
                    other: "0B"
                },
                10: {
                    one: "00B",
                    other: "00B"
                },
                11: {
                    one: "000B",
                    other: "000B"
                },
                12: {
                    one: "0T",
                    other: "0T"
                },
                13: {
                    one: "00T",
                    other: "00T"
                },
                14: {
                    one: "000T",
                    other: "000T"
                },
                maxExponent: 14
            }], f("en").pluralGenerator({})), f.a1259667653 = l(["", , 1, 0, 0, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", b("truncate"), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }, , {
                3: {
                    one: "0K",
                    other: "0K"
                },
                4: {
                    one: "00K",
                    other: "00K"
                },
                5: {
                    one: "000K",
                    other: "000K"
                },
                6: {
                    one: "0M",
                    other: "0M"
                },
                7: {
                    one: "00M",
                    other: "00M"
                },
                8: {
                    one: "000M",
                    other: "000M"
                },
                9: {
                    one: "0B",
                    other: "0B"
                },
                10: {
                    one: "00B",
                    other: "00B"
                },
                11: {
                    one: "000B",
                    other: "000B"
                },
                12: {
                    one: "0T",
                    other: "0T"
                },
                13: {
                    one: "00T",
                    other: "00T"
                },
                14: {
                    one: "000T",
                    other: "000T"
                },
                maxExponent: 14
            }], f("en").pluralGenerator({})), f.b468386326 = l(["", , 1, 0, 3, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", b(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }]), f.b203855544 = l(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", b(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }]), f.a1378886668 = l(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", b(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }]), f.a1662346136 = p((function(e) {
                var t = !String(e).split(".")[1];
                return 1 == e && t ? "one" : "other"
            })), f.a1269826356 = m({
                1: f("en").numberFormatter({
                    raw: "0"
                })
            }, {
                pattern: "MMM d",
                timeSeparator: ":",
                months: {
                    M: {
                        3: {
                            1: "Jan",
                            2: "Feb",
                            3: "Mar",
                            4: "Apr",
                            5: "May",
                            6: "Jun",
                            7: "Jul",
                            8: "Aug",
                            9: "Sep",
                            10: "Oct",
                            11: "Nov",
                            12: "Dec"
                        }
                    }
                }
            }), f.a64793641 = m({
                1: f("en").numberFormatter({
                    raw: "0"
                })
            }, {
                pattern: "MMM d, y",
                timeSeparator: ":",
                months: {
                    M: {
                        3: {
                            1: "Jan",
                            2: "Feb",
                            3: "Mar",
                            4: "Apr",
                            5: "May",
                            6: "Jun",
                            7: "Jul",
                            8: "Aug",
                            9: "Sep",
                            10: "Oct",
                            11: "Nov",
                            12: "Dec"
                        }
                    }
                }
            }), f.b129255162 = m({
                1: f("en").numberFormatter({
                    raw: "0"
                }),
                2: f("en").numberFormatter({
                    raw: "00"
                })
            }, {
                pattern: "h:mm a",
                timeSeparator: ":",
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            }), f.a878419275 = h(f("en").dateToPartsFormatter({
                skeleton: "MMMd"
            })), f.a816076018 = h(f("en").dateToPartsFormatter({
                skeleton: "yMMMd"
            })), f.b965415715 = h(f("en").dateToPartsFormatter({
                skeleton: "hm"
            })), f.a211373797 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "yr",
                    one: "{0}y",
                    other: "{0}y",
                    perUnitPattern: "{0}/y"
                }
            }), f.b636176220 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "years",
                    one: "{0} year",
                    other: "{0} years",
                    perUnitPattern: "{0} per year"
                }
            }), f.b1193188596 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "hour",
                    one: "{0}h",
                    other: "{0}h",
                    perUnitPattern: "{0}/h"
                }
            }), f.b2116965749 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "hours",
                    one: "{0} hour",
                    other: "{0} hours",
                    perUnitPattern: "{0} per hour"
                }
            }), f.a1963255228 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "min",
                    one: "{0}m",
                    other: "{0}m",
                    perUnitPattern: "{0}/min"
                }
            }), f.b1132522088 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "day",
                    one: "{0}d",
                    other: "{0}d",
                    perUnitPattern: "{0}/d"
                }
            }), f.b1844277225 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "days",
                    one: "{0} day",
                    other: "{0} days",
                    perUnitPattern: "{0} per day"
                }
            }), f.b2134163460 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "month",
                    one: "{0}m",
                    other: "{0}m",
                    perUnitPattern: "{0}/m"
                }
            }), f.a223746363 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "minutes",
                    one: "{0} minute",
                    other: "{0} minutes",
                    perUnitPattern: "{0} per minute"
                }
            }), f.a2110709659 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "seconds",
                    one: "{0} second",
                    other: "{0} seconds",
                    perUnitPattern: "{0} per second"
                }
            }), f.b1436183524 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0}/{1}",
                unitProperties: {
                    displayName: "sec",
                    one: "{0}s",
                    other: "{0}s",
                    perUnitPattern: "{0}/s"
                }
            }), f.a1064174459 = y(f("en").numberFormatter({}), f("en").pluralGenerator({}), {
                compoundUnitPattern: "{0} per {1}",
                unitProperties: {
                    displayName: "months",
                    one: "{0} month",
                    other: "{0} months",
                    perUnitPattern: "{0} per month"
                }
            }), n("d58baa7e", f.a527220190), n("e8733ed8", f.b1436183524), n("i3b7a017", f.a2110709659), n("be59d8c3", f.a1963255228), n("ie5d110e", f.a223746363), n("i3d087da", f.b1193188596), n("df5f11b3", f.b2116965749), n("ga8d18c8", f.b1132522088), n("a91e7d48", f.b1844277225), n("id952a68", f.b2134163460), n("ga09ab65", f.a1064174459), n("c83b901c", f.a211373797), n("a55b9fed", f.b636176220), n("ccaa970e", f.a878419275), n("jade381b", f.a816076018), n("d725a288", f.b965415715), n("e8d93005", f.a1259667653), n("ia24dc8c", f.b468386326), n("f9e9679f", f.a50324716)
        }
    },
    [
        ["tBke", 0, 1]
    ]
]), window.__SCRIPTS_LOADED__["i18n-horizon"] = !0);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/en.5cc1b6c4.js.map
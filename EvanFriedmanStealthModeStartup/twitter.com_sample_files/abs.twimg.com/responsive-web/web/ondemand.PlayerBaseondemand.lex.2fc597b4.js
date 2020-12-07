(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "+cpJ": function(t, e, r) {
            "use strict";
            var n = r("KEM+"),
                i = r.n(n),
                o = function t(e) {
                    var r = this;
                    i()(this, "clearLogs", (function() {
                        try {
                            window.sessionStorage.removeItem(r.storageKey)
                        } catch (t) {}
                    })), i()(this, "log", (function(e, n) {
                        if (t.debuggingEnabled) {
                            var i = e + ": " + n;
                            r.logItemInSessionStorage(i)
                        }
                    })), i()(this, "logItemInSessionStorage", (function(t) {
                        try {
                            var e = window.sessionStorage.getItem(r.storageKey),
                                n = e ? JSON.parse(e) : [];
                            n.push(t), window.sessionStorage.setItem(r.storageKey, JSON.stringify(n))
                        } catch (i) {}
                    })), this.storageKey = t.generateStorageKey(e), this.clearLogs()
                };
            i()(o, "debuggingEnabled", !1), i()(o, "generateStorageKey", (function(t) {
                return "TwitterVideoPlayerDebugLog:" + t
            })), i()(o, "getDebugFileLink", (function(t) {
                var e = window.sessionStorage.getItem(o.generateStorageKey(t)),
                    r = new window.Blob([JSON.parse(e).join("\n")], {
                        type: "application/octet-stream"
                    });
                return window.URL.createObjectURL(r)
            })), e.a = o
        },
        "6/SQ": function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return a
            })), r.d(e, "h", (function() {
                return s
            })), r.d(e, "a", (function() {
                return c
            })), r.d(e, "d", (function() {
                return u
            })), r.d(e, "f", (function() {
                return d
            })), r.d(e, "g", (function() {
                return l
            })), r.d(e, "b", (function() {
                return f
            }));
            r("PN9k");
            var n = r("UVZ6"),
                i = r("ClFK"),
                o = r("Q6z5"),
                a = "PLAYBACK_ERROR",
                s = function(t, e) {
                    return {
                        type: a,
                        playerId: t,
                        thrownError: e,
                        isFatal: !0
                    }
                },
                c = "CONFIGURATION_LOAD_ERROR",
                u = function(t, e) {
                    return {
                        type: c,
                        playerId: t,
                        thrownError: e,
                        isFatal: !0
                    }
                },
                d = function(t) {
                    return {
                        type: "ERROR_RESOLVED",
                        playerId: t
                    }
                },
                l = function(t) {
                    return {
                        type: "GEOLOCATION_PROMPT",
                        playerId: t
                    }
                },
                E = function(t) {
                    switch (t.message) {
                        case i.a.BROADCAST_ENDED_NO_REPLAY:
                        case i.a.BROADCAST_NOT_FOUND:
                        case i.a.DMCA_TAKEDOWN_ERROR:
                        case i.a.ORIGINAL_CONTEXT_DELETED:
                        case i.a.LIVE_VIDEO_GEOBLOCK_ERROR:
                        case i.a.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR:
                        case i.a.LIVE_VIDEO_GEOLOCATION_PROMPT:
                        case i.a.MEDIA_GEOBLOCK_ERROR:
                        case i.a.MEDIA_NOT_SUPPORTED:
                            return !1;
                        default:
                            return !0
                    }
                },
                O = function(t) {
                    if (!E(t)) return !1;
                    switch (t.message) {
                        case i.a.LIVE_VIDEO_NO_COOKIES_ERROR:
                            return !1;
                        default:
                            return !0
                    }
                },
                R = function(t, e) {
                    var r = e.errorInfo.count + 1,
                        n = E(t),
                        i = O(t) && r <= e.errorInfo.retryMax;
                    return {
                        backoffMs: i ? 1e3 * e.errorInfo.count : f.backoffMs,
                        count: r,
                        canRetry: n,
                        autoRetry: i
                    }
                };
            e.e = function(t, e) {
                switch (e.type) {
                    case o.b:
                        var r = parseInt(t.features.fatalErrorRetryMax, 10),
                            s = isNaN(r) ? f.errorInfo.retryMax : r;
                        return Object.assign({}, t, {
                            errorInfo: Object.assign({}, t.errorInfo, {
                                retryMax: s
                            })
                        });
                    case o.e:
                        return Object.assign({}, t, {
                            error: void 0,
                            errorInfo: Object.assign({}, t.errorInfo, {
                                autoRetry: !1,
                                canRetry: !1
                            })
                        });
                    case c:
                        var u, d = e.thrownError,
                            l = R(d, t);
                        return d.message === i.a.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR && (u = d.restriction), Object.assign({}, t, {
                            error: d.message,
                            errorData: u,
                            errorInfo: Object.assign({}, t.errorInfo, {}, l)
                        });
                    case a:
                        var p = e.thrownError,
                            _ = Object(n.a)(t.mediaAvailability),
                            h = _ ? new Error(_) : p,
                            I = R(h, t);
                        return Object.assign({}, t, {
                            error: h.message,
                            errorInfo: Object.assign({}, t.errorInfo, {}, I)
                        });
                    case "ERROR_RESOLVED":
                        return Object.assign({}, t, {
                            error: void 0,
                            errorInfo: Object.assign({}, t.errorInfo, {
                                autoRetry: !1,
                                canRetry: !1
                            })
                        });
                    case "GEOLOCATION_PROMPT":
                        var v = new Error(i.a.LIVE_VIDEO_GEOLOCATION_PROMPT);
                        return Object.assign({}, t, {
                            error: v.message,
                            errorInfo: Object.assign({}, t.errorInfo, {
                                autoRetry: O(v),
                                canRetry: E(v)
                            })
                        });
                    default:
                        return t
                }
            };
            var f = {
                error: void 0,
                errorInfo: {
                    autoRetry: !1,
                    backoffMs: void 0,
                    canRetry: !1,
                    count: 0,
                    retryMax: 0
                },
                errorData: void 0
            }
        },
        "A9/4": function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return i
            })), r.d(e, "b", (function() {
                return o
            })), r.d(e, "c", (function() {
                return a
            })), r.d(e, "a", (function() {
                return c
            }));
            r("PN9k"), r("p+GS"), r("dtAy"), r("BPcy"), r("KI7T");
            var n = r("YKqM"),
                i = function(t, e) {
                    if (t.tracks) return t.tracks.find((function(t) {
                        return t.id === e
                    }))
                },
                o = function(t) {
                    return i(t, t.currentTrackId)
                },
                a = function(t) {
                    return t.tracks ? t.tracks.filter((function(e) {
                        return e.id !== t.currentTrackId
                    })) : []
                },
                s = new RegExp(/^https:\/\/[\w-]+.twimg.com\/.+\.m3u8/),
                c = function(t) {
                    return void 0 === t && (t = []), t.map(u)
                },
                u = function(t) {
                    var e = t.src;
                    if (s.test(e)) {
                        var r = new n.a(e);
                        r.addSearchParam("descending", !0), e = r.toString()
                    }
                    return Object.assign({}, t, {
                        src: e
                    })
                }
        },
        ClFK: function(t, e, r) {
            "use strict";
            e.a = {
                BROADCAST_REQUEST_ERROR: "BROADCAST_REQUEST_ERROR",
                BROADCAST_ENDED_NO_REPLAY: "BROADCAST_ENDED_NO_REPLAY",
                BROADCAST_NOT_FOUND: "BROADCAST_NOT_FOUND",
                CONFIG_USER_DATA_NETWORK_ERROR: "CONFIG_USER_DATA_NETWORK_ERROR",
                CONFIG_NETWORK_ERROR: "CONFIG_NETWORK_ERROR",
                DMCA_TAKEDOWN_ERROR: "DMCA_TAKEDOWN_ERROR",
                LIVE_PARSE_ERROR: "LIVE_PARSE_ERROR",
                LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: "LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID",
                LIVE_STREAM_ACQUISITION_NETWORK_ERROR: "LIVE_STREAM_ACQUISITION_NETWORK_ERROR",
                LIVE_VIDEO_GEOBLOCK_ERROR: "LIVE_VIDEO_GEOBLOCK_ERROR",
                LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: "LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR",
                LIVE_VIDEO_GEOLOCATION_PROMPT: "LIVE_VIDEO_GEOLOCATION_PROMPT",
                LIVE_VIDEO_NO_COOKIES_ERROR: "LIVE_VIDEO_NO_COOKIES_ERROR",
                MEDIA_NOT_SUPPORTED: "MEDIA_NOT_SUPPORTED",
                MEDIA_SRC_INVALID_ERROR: "MEDIA_SRC_INVALID_ERROR",
                MEDIA_ABORTED: "MEDIA_ABORTED",
                MEDIA_NETWORK_ERROR: "MEDIA_NETWORK_ERROR",
                MEDIA_DECODE_ERROR: "MEDIA_DECODE_ERROR",
                MEDIA_GEOBLOCK_ERROR: "MEDIA_GEOBLOCK_ERROR",
                MEDIA_UNKNOWN_CODE_ERROR: "MEDIA_UNKNOWN_CODE_ERROR",
                ORIGINAL_CONTEXT_DELETED: "ORIGINAL_CONTEXT_DELETED",
                UNSUPPORTED_TYPE: "UNSUPPORTED_TYPE",
                VMAP_NETWORK_ERROR: "VMAP_NETWORK_ERROR",
                VMAP_PARSE_ERROR: "VMAP_PARSE_ERROR"
            }
        },
        Q6z5: function(t, e, r) {
            "use strict";
            var n = r("RhWx"),
                i = r.n(n),
                o = r("LdEA"),
                a = r.n(o),
                s = (r("PN9k"), r("KI7T"), r("6/SQ")),
                c = r("+cpJ"),
                u = r("byT6"),
                d = (r("yKDW"), r("dtAy"), r("UVZ6")),
                l = r("A9/4"),
                E = r("ClFK"),
                O = r("Yfpf"),
                R = r("zytq"),
                f = r("i9V9"),
                p = r("lklz"),
                _ = function() {
                    function t(t, e) {
                        this.httpClient = t, this.logger = e
                    }
                    var e = t.prototype;
                    return e.load = function(t, e) {
                        var r = this,
                            n = t.videoConfig,
                            i = a()(t, ["videoConfig"]);
                        return (n && (n.vmapUrl || t.videoConfig.variants && t.videoConfig.variants.length > 0) ? this.loadStaticConfigState(n, t.source) : this.loadDynamicConfigState(t.source, n, e)).then((function(t) {
                            return r.convertConfigStateToPlayerState(t, i, e)
                        }))
                    }, e.loadStaticConfigState = function(t, e) {
                        var r = this,
                            n = function() {
                                try {
                                    return JSON.parse(window.sessionStorage.getItem("TwitterVideoPlayerUserConfig"))
                                } catch (t) {}
                            }(),
                            i = {
                                eventId: t.eventId,
                                posterImage: t.poster,
                                track: {
                                    contentId: t.contentId,
                                    contentType: t.contentType,
                                    cta: t.cta,
                                    durationMs: t.durationMs,
                                    expandedUrl: t.expandedUrl,
                                    mediaAvailability: t.mediaAvailability,
                                    publisherId: t.publisherId,
                                    shouldLoop: t.loop,
                                    variants: t.variants,
                                    viewCount: t.viewCount,
                                    vmapUrl: t.vmapUrl
                                }
                            };
                        if (!this._shouldLoadStaticConfig(e)) return Promise.resolve(Object.assign({}, i, {
                            features: {
                                fatalErrorRetryMax: 3
                            }
                        }));
                        var o = this.httpClient.dispatch({
                            method: "GET",
                            path: "/1.1/videos/static/config.json",
                            host: "https://api.twitter.com"
                        }).then((function(t) {
                            if (200 !== t.status) throw new Error(E.a.CONFIG_USER_DATA_NETWORK_ERROR + ":" + t.status);
                            var e = JSON.parse(t.body);
                            return function(t) {
                                try {
                                    window.sessionStorage.setItem("TwitterVideoPlayerUserConfig", JSON.stringify(t))
                                } catch (e) {}
                            }(e), e
                        }), (function() {
                            throw new Error(E.a.CONFIG_USER_DATA_NETWORK_ERROR)
                        })).catch((function(t) {
                            return r.logger.log("ConfigurationLoader", "failed to load static configuration: " + t), {
                                features: {},
                                translations: {}
                            }
                        }));
                        return (n ? Promise.resolve(n) : o).then((function(t) {
                            var e = t.features,
                                r = t.translations;
                            return Object.assign({}, i, {
                                features: e,
                                translations: r
                            })
                        }))
                    }, e.loadDynamicConfigState = function(t, e, r) {
                        try {
                            return this.httpClient.dispatch({
                                method: "GET",
                                path: this.getApiEndpointForPlayerSource(t),
                                host: "https://api.twitter.com",
                                params: {
                                    bitrate_cap: r.bitrateCap
                                }
                            }).then((function(t) {
                                if (200 !== t.status) throw new Error(E.a.CONFIG_NETWORK_ERROR + ":" + t.status);
                                var r = JSON.parse(t.body);
                                return e && e.poster && (r.posterImage = e.poster), r
                            }), (function() {
                                throw new Error(E.a.CONFIG_NETWORK_ERROR)
                            }))
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }, e.convertConfigStateToPlayerState = function(t, e, r) {
                        var n, i, o = t.track,
                            s = t.translations,
                            c = a()(t, ["track", "translations"]),
                            u = r.reloadTimecode,
                            p = Object(O.b)(r.requestedTimecode),
                            _ = p > 0 || 0 === p ? p : -1;
                        Object(f.e)(s), o && (i = o.mediaAvailability, r.maxLoopCount && (o.maxLoopCount = r.maxLoopCount, o.loopCounter = 0), o.variants && o.variants.length > 0 ? n = o.variants : o.playbackUrl && o.playbackType && (n = [{
                            src: o.playbackUrl,
                            type: o.playbackType
                        }])), Object(R.a)() && (n = Object(l.a)(n));
                        var h = Object(d.a)(i);
                        if (h) switch (h) {
                            case E.a.ORIGINAL_CONTEXT_DELETED:
                            case E.a.DMCA_TAKEDOWN_ERROR:
                                throw new Error(h)
                        }
                        return Object.assign({}, e, {}, c, {
                            tracks: [Object.assign({}, o, {
                                id: 0,
                                displayType: "content",
                                requestedTimecode: _,
                                reloadTimecode: u,
                                rotation: 0,
                                variants: n,
                                currentVariantIndex: 0
                            })],
                            currentTrackId: 0,
                            source: Object.assign({}, e.source, {
                                trackId: 0
                            }),
                            mediaAvailability: i
                        })
                    }, e.getApiEndpointForPlayerSource = function(t) {
                        switch (t.type) {
                            case p.a.TWEET:
                                var e = t.index > 0 ? "/" + t.index : "";
                                return "/1.1/videos/tweet/config/" + t.id + e + ".json";
                            case p.a.LIVE_EVENT:
                                return "/1.1/videos/live_video/config/" + t.id + ".json";
                            case p.a.BROADCAST:
                                return "/1.1/videos/broadcast/config/" + t.id + ".json";
                            case p.a.DM:
                                return "/1.1/videos/dm/config/" + t.id + ".json";
                            default:
                                throw new Error(E.a.UNSUPPORTED_TYPE + ":" + t.type)
                        }
                    }, e._shouldLoadStaticConfig = function(t) {
                        return t.type !== p.a.STATIC_BROADCAST
                    }, t
                }(),
                h = r("YKqM"),
                I = "error",
                v = "playback",
                T = function() {
                    function t(t, e, r, n, i) {
                        this.dispatch = t, this.httpClient = e, this.twitterAuthedHttpClient = r, this.playerId = n, this.showGeolocationPrompt = i
                    }
                    var e = t.prototype;
                    return e.load = function(t) {
                        var e = t.tracks[0];
                        return "live" !== e.contentType && "broadcast" !== e.contentType ? Promise.resolve(t) : e.contentId ? this.getUserPermission(e).then(this.getUserGeolocation.bind(this)).then(this.parseGeolocationData.bind(this)).then(this.acquireLiveStream.bind(this, t)).then(this.parseStreamAcquisitionResponse.bind(this)).then(this.setCookies.bind(this)).then(this.checkCookies.bind(this)).catch(this.handleRejectedPromises.bind(this)).then((function(r) {
                            var n = r.isLiveTimecode,
                                i = r.playbackUrl,
                                o = r.lifecycleToken,
                                a = r.chatToken,
                                s = r.broadcastShareUrl,
                                c = r.restrictions;
                            if (void 0 !== c) {
                                if (void 0 !== c.find((function(t) {
                                        return "geoblocked" === t.restriction
                                    }))) throw new Error(E.a.LIVE_VIDEO_GEOBLOCK_ERROR);
                                var u = c.find((function(t) {
                                    return "copyright-violation" === t.restriction
                                }));
                                if (void 0 !== u) {
                                    var d = new Error(E.a.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR);
                                    throw d.restriction = u, d
                                }
                            }
                            return Object.assign({}, t, {
                                tracks: [Object.assign({}, e, {
                                    isLive: "live" === e.contentType || e.isLive,
                                    isLiveTimecode: n,
                                    variants: [{
                                        src: i,
                                        type: "application/x-mpegURL"
                                    }],
                                    lifecycleToken: o,
                                    chatToken: a,
                                    broadcastShareUrl: s
                                })]
                            })
                        })) : Promise.reject(Error(E.a.LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID))
                    }, e.getUserPermission = function(t) {
                        return t.isEventGeoblocked ? this.showGeolocationPrompt ? Promise.resolve({
                            shouldGetGeolocation: !0
                        }) : "permissions" in navigator ? navigator.permissions.query({
                            name: "geolocation"
                        }).then((function(t) {
                            var e = "granted" === t.state;
                            return Promise.resolve({
                                shouldGetGeolocation: e
                            })
                        })) : Promise.resolve({
                            shouldGetGeolocation: !1
                        }) : Promise.resolve({
                            shouldGetGeolocation: !1
                        })
                    }, e.getUserGeolocation = function(t) {
                        return t.shouldGetGeolocation && "geolocation" in navigator ? (this.dispatch(Object(s.g)(this.playerId)), new Promise((function(t) {
                            navigator.geolocation.getCurrentPosition((function(e) {
                                return t(e)
                            }), (function() {
                                return t()
                            }))
                        }))) : Promise.resolve()
                    }, e.parseGeolocationData = function(t) {
                        return Promise.resolve({
                            latitude: t && t.coords.latitude,
                            longitude: t && t.coords.longitude
                        })
                    }, e.acquireLiveStream = function(t, e) {
                        var r = this,
                            n = this.getLiveStreamAcquisitionDetails(t, e),
                            i = n.params,
                            o = n.path,
                            a = n.isLiveTimecode;
                        return this.twitterAuthedHttpClient.dispatch({
                            host: "https://api.twitter.com",
                            method: "GET",
                            params: i,
                            path: o
                        }).then((function(t) {
                            return t.status < 200 || t.status >= 400 ? Promise.reject({
                                type: I,
                                reason: E.a.LIVE_STREAM_ACQUISITION_NETWORK_ERROR
                            }) : (r.dispatch(Object(s.f)(r.playerId)), Promise.resolve({
                                body: t.body,
                                isLiveTimecode: a
                            }))
                        }), (function() {
                            return Promise.reject({
                                type: I,
                                reason: E.a.LIVE_STREAM_ACQUISITION_NETWORK_ERROR
                            })
                        }))
                    }, e.getLiveStreamAcquisitionDetails = function(t, e) {
                        var r = e.latitude,
                            n = e.longitude,
                            i = t.client,
                            o = t.source,
                            a = o && o.trackId || 0,
                            s = t.tracks[a],
                            c = {
                                client: i,
                                use_syndication_guest_id: "tfw" === i,
                                lat: r,
                                lng: n,
                                cookie_set_host: new h.a(window.location.href).getHostname()
                            },
                            u = t.features && t.features.isLiveTimecodeEnabled && (s.requestedTimecode > 0 || 0 === s.requestedTimecode);
                        return u && (c.latest_replay_playlist = !0), {
                            params: c,
                            isLiveTimecode: u,
                            path: "/1.1/live_video_stream/status/" + s.contentId
                        }
                    }, e.parseStreamAcquisitionResponse = function(t) {
                        var e = JSON.parse(t.body);
                        return e && e.source && e.source.noRedirectPlaybackUrl ? Promise.resolve({
                            cookieSetUrl: e.source.cookieSetUrl,
                            isLiveTimecode: t.isLiveTimecode,
                            playbackUrl: e.source.noRedirectPlaybackUrl,
                            lifecycleToken: e.lifecycleToken,
                            chatToken: e.chatToken,
                            broadcastShareUrl: e.shareUrl,
                            restrictions: e.restrictions
                        }) : Promise.reject({
                            type: I,
                            reason: E.a.LIVE_PARSE_ERROR
                        })
                    }, e.setCookies = function(t) {
                        var e = t.cookieSetUrl,
                            r = a()(t, ["cookieSetUrl"]);
                        return e ? this.httpClient.dispatch({
                            method: "GET",
                            path: e,
                            host: "",
                            withCredentials: !0
                        }).then((function() {
                            return Promise.resolve(t)
                        }), (function() {
                            return Promise.reject({
                                type: v,
                                payload: r
                            })
                        })) : Promise.reject({
                            type: v,
                            payload: r
                        })
                    }, e.checkCookies = function(t) {
                        var e = new h.a(t.cookieSetUrl);
                        return window.location.host === e.getHostname() ? Promise.resolve(t) : this.httpClient.dispatch({
                            method: "GET",
                            path: "https://t.lv.twimg.com/live_video_stream/cookie_check",
                            host: "",
                            withCredentials: !0
                        }).then((function(e) {
                            return 400 !== e.status ? Promise.resolve(t) : Promise.reject({
                                type: I,
                                reason: E.a.LIVE_VIDEO_NO_COOKIES_ERROR
                            })
                        }), (function() {
                            return Promise.reject({
                                type: I,
                                reason: E.a.LIVE_VIDEO_NO_COOKIES_ERROR
                            })
                        }))
                    }, e.handleRejectedPromises = function(t) {
                        if (t.type === v) return Promise.resolve(t.payload);
                        var e = t.reason ? new Error(t.reason) : t;
                        return Promise.reject(e)
                    }, t
                }(),
                m = (r("rmZQ"), function() {
                    function t(t) {
                        this.httpClient = t
                    }
                    var e = t.prototype;
                    return e.load = function(t) {
                        var e = this,
                            r = t.tracks[0];
                        return "vmap" !== r.contentType ? Promise.resolve(t) : this.httpClient.dispatch({
                            method: "GET",
                            path: r.vmapUrl,
                            host: "",
                            withCredentials: !1
                        }).then((function(n) {
                            if (n.status < 200 || n.status >= 400) throw new Error(E.a.VMAP_NETWORK_ERROR);
                            var i = e.parseVmap(n.body);
                            return Object.assign({}, t, {
                                tracks: [Object.assign({}, r, {}, i)]
                            })
                        }), (function() {
                            throw new Error(E.a.VMAP_NETWORK_ERROR)
                        }))
                    }, e.parseVmap = function(t) {
                        var e = (new window.DOMParser).parseFromString(t, "application/xml").getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "content")[0];
                        if (void 0 === e) throw new Error(E.a.VMAP_PARSE_ERROR);
                        var r = e.getElementsByTagName("MediaFile")[0];
                        if (void 0 === r) throw new Error(E.a.VMAP_PARSE_ERROR);
                        var n = r.textContent.trim().replace(/^http:\/\/amp\.twimg\.com\//, "https://amp.twimg.com/"),
                            i = r.getAttribute("type") || function(t) {
                                var e = new h.a(t).getPath();
                                return ".m3u8" === e.slice(e.lastIndexOf(".")) ? "application/x-mpegURL" : "video/mp4"
                            }(n);
                        return {
                            publisherId: e.getAttribute("ownerId"),
                            contentId: e.getAttribute("contentId"),
                            variants: [{
                                src: n,
                                type: i
                            }],
                            cta: this.getCta(e)
                        }
                    }, e.getCta = function(t) {
                        var e = t.getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "cta_open_url")[0],
                            r = t.getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "cta_watch_now")[0];
                        return void 0 !== e ? {
                            type: "url",
                            url: e.getAttribute("url")
                        } : void 0 !== r ? {
                            type: "watch",
                            url: r.getAttribute("url")
                        } : void 0
                    }, t
                }()),
                g = function(t, e, r, n, i, o, a) {
                    return [new _(r, a), new u.b(r, o), new m(e), new T(t, e, r, n, i)]
                },
                y = function(t, e, r, n) {
                    var i = Promise.resolve({
                        source: t,
                        videoConfig: e
                    });
                    return r.reduce((function(t, e) {
                        return t.then((function(t) {
                            return e.load(t, n)
                        }))
                    }), i)
                },
                A = r("UweJ");
            r.d(e, "c", (function() {
                return b
            })), r.d(e, "e", (function() {
                return C
            })), r.d(e, "a", (function() {
                return N
            })), r.d(e, "f", (function() {
                return S
            })), r.d(e, "b", (function() {
                return w
            })), r.d(e, "i", (function() {
                return P
            })), r.d(e, "g", (function() {
                return L
            })), r.d(e, "j", (function() {
                return U
            })), r.d(e, "d", (function() {
                return V
            }));
            var b = "CONFIGURE_PLAYER",
                C = "RELOADING_PLAYER",
                N = "BROADCAST_UPDATED",
                S = function(t, e) {
                    return {
                        type: N,
                        updatedState: e,
                        playerId: t
                    }
                },
                w = "CONFIGURATION_LOADED",
                D = function(t, e) {
                    return {
                        type: w,
                        playerState: e,
                        playerId: t
                    }
                },
                P = function(t, e) {
                    return {
                        type: "FEATURES_LOADED",
                        features: e,
                        playerId: t
                    }
                },
                L = function(t, e, r, n, i, o, a, c, d, l) {
                    return void 0 === d && (d = {}),
                        function(E) {
                            return E(function(t, e, r, n, i, o, a, s, c, u) {
                                return {
                                    type: b,
                                    source: e,
                                    session: r,
                                    analytics: n,
                                    playerId: t,
                                    adProvider: i,
                                    videoConfig: o,
                                    promotedContext: a,
                                    initiallyMutedCaptions: s,
                                    enableNativeFullscreen: c,
                                    intentToPlayTime: u
                                }
                            }(t, e, n, i, o, r, d.promotedContext, d.initiallyMutedCaptions, d.enableNativeFullscreen, d.intentToPlayTime)), y(e, r, g(E, Object(A.c)(t), Object(A.e)(t), t, d.showGeolocationPrompt, d.includeBroadcastEventAssociation, l), d).then((function(e) {
                                if (E(D(t, e)), a(), Object(u.c)(e)) {
                                    var r = e.source.id,
                                        n = new u.a(E, Object(A.e)(t), t, r, d.includeBroadcastEventAssociation);
                                    return n.queueUpdate(e.isLive).catch((function(e) {
                                        E(Object(s.d)(t, e))
                                    })), n
                                }
                            })).catch((function(e) {
                                E(Object(s.d)(t, e)), c()
                            }))
                        }
                },
                U = function(t, e, r, n, i, o, a) {
                    return void 0 === a && (a = {}),
                        function(c) {
                            return c(function(t, e, r) {
                                return {
                                    type: C,
                                    playerId: t,
                                    source: e,
                                    session: r
                                }
                            }(t, e, n)), y(e, r, g(c, Object(A.c)(t), Object(A.e)(t), t, a.showGeolocationPrompt, a.serveAds, a.includeBroadcastEventAssociation), a).then((function(e) {
                                c(D(t, e)), i()
                            })).catch((function(e) {
                                c(Object(s.d)(t, e)), o()
                            }))
                        }
                },
                V = (e.h = function(t, e) {
                    switch (e.type) {
                        case b:
                        case C:
                            return Object.assign({}, t, {}, e.promotedContext, {
                                source: e.source,
                                session: e.session,
                                playerId: e.playerId,
                                configuration: {
                                    loading: !0
                                }
                            });
                        case w:
                            return e.playerState.features.isDebuggingEnabled && (c.a.debuggingEnabled = !0), Object.assign({}, t, {}, e.playerState, {
                                features: Object.assign({}, t.features, {}, e.playerState.features),
                                configuration: {
                                    loading: !1
                                }
                            });
                        case "FEATURES_LOADED":
                            return Object.assign({}, t, {
                                features: Object.assign({}, t.features, {}, e.features)
                            });
                        case N:
                            var r = e.updatedState,
                                n = r.cta,
                                o = r.isLive,
                                s = r.viewerCount,
                                u = r.viewCount,
                                d = a()(r, ["cta", "isLive", "viewerCount", "viewCount"]),
                                l = function(t) {
                                    var e = t.tracks;
                                    return {
                                        sourceTrack: e.find((function(e) {
                                            return e.id === t.source.trackId
                                        })),
                                        otherTracks: e.filter((function(e) {
                                            return e.id !== t.source.trackId
                                        }))
                                    }
                                }(t),
                                E = l.sourceTrack,
                                O = l.otherTracks;
                            return E && (0 === E.requestedTimecode || E.requestedTimecode > 0) && delete d.posterImage, Object.assign({}, t, {}, d, {
                                tracks: [].concat(i()(O), [Object.assign({}, E, {
                                    cta: n,
                                    isLive: o,
                                    viewerCount: s,
                                    viewCount: u
                                })])
                            });
                        default:
                            return t
                    }
                }, {
                    configuration: {
                        loading: !1,
                        error: void 0
                    },
                    tracks: []
                })
        },
        UVZ6: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return i
            })), r.d(e, "a", (function() {
                return o
            }));
            var n = r("ClFK");

            function i(t, e) {
                var r = t.getState();
                return r && r.players && r.players[e] ? r.players[e] : {}
            }
            var o = function(t) {
                if (t && "unavailable" === t.status) switch (t.reason) {
                    case "geoblocked":
                        return n.a.MEDIA_GEOBLOCK_ERROR;
                    case "deleted":
                        return n.a.ORIGINAL_CONTEXT_DELETED;
                    case "dmcaed":
                        return n.a.DMCA_TAKEDOWN_ERROR
                }
                return null
            }
        },
        YKqM: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            }));
            r("p+GS"), r("Bu8c"), r("NlgC"), r("LnO1"), r("3eMz"), r("dtAy"), r("DB+v");

            function n(t) {
                return Object.keys(t).map((function(e) {
                    var r = void 0 === t[e] ? "" : encodeURIComponent(t[e]);
                    return encodeURIComponent(e) + "=" + r
                })).join("&")
            }
            var i = function() {
                function t(t) {
                    try {
                        this.parser = new URL(t)
                    } catch (e) {
                        this.parser = document.createElement("a"), this.parser.href = t
                    }
                }
                var e = t.prototype;
                return e.getHostname = function() {
                    return this.parser.hostname
                }, e.getPath = function() {
                    return this.parser.pathname
                }, e.isSafe = function() {
                    return !!this.parser.protocol.match(/^https?:$/)
                }, e.addSearchParam = function(t, e) {
                    this.parser.search ? this.parser.search = this.parser.search + "&" + t + "=" + e : this.parser.search = "?" + t + "=" + e
                }, e.toString = function() {
                    return this.parser.href
                }, t
            }();
            e.a = i
        },
        Yfpf: function(t, e, r) {
            "use strict";

            function n(t) {
                var e = t % 60,
                    r = e < 10 ? "0" + e : e,
                    n = (t - e) / 60 % 60,
                    i = Math.floor(t / 3600),
                    o = n < 10 && i ? "0" + n : n;
                return i ? i + ":" + o + ":" + r : o + ":" + r
            }
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return a
            }));
            var i = /^[0-9]{1,6}(\.[0-9]+)?$/,
                o = /^([0-9]{0,3}[hH])?([0-9]{0,2}[mM])?([0-9]{0,6}[sS])?$/,
                a = function(t) {
                    if (i.test(t)) return +t;
                    var e = o.exec(t);
                    if (e && e[0]) {
                        var r = e[1],
                            n = e[2],
                            a = e[3],
                            s = 0;
                        return r && (s += 3600 * +r.slice(0, -1)), n && (s += 60 * +n.slice(0, -1)), a && (s += +a.slice(0, -1)), s
                    }
                }
        },
        "ZeN/": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return i
            })), r.d(e, "c", (function() {
                return o
            }));
            var n = {
                    LOW: 32e4,
                    MEDIUM: 832e3,
                    HIGH: 2176e3
                },
                i = {
                    EVENT: "event",
                    VISIT: "url",
                    WATCH: "watch",
                    IMAGE: "image"
                },
                o = ["cover", "contain"]
        },
        byT6: function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return O
            })), r.d(e, "a", (function() {
                return R
            })), r.d(e, "b", (function() {
                return f
            }));
            r("PN9k");
            var n = r("LdEA"),
                i = r.n(n),
                o = (r("yKDW"), r("dtAy"), r("Q6z5")),
                a = r("ZeN/"),
                s = r("ClFK"),
                c = r("A9/4"),
                u = r("lklz"),
                d = function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = !0), {
                        ids: t.join(","),
                        include_events: e
                    }
                },
                l = function(t, e, r) {
                    try {
                        return t.dispatch({
                            method: "GET",
                            host: "https://api.twitter.com",
                            path: "/1.1/broadcasts/show.json",
                            params: d([e], r),
                            withCredentials: !0
                        }).then((function(t) {
                            if (200 !== t.status) return Promise.reject(s.a.BROADCAST_REQUEST_ERROR + ":" + t.status);
                            var r = JSON.parse(t.body),
                                n = r.broadcasts,
                                i = r.events;
                            if (!n || !n[e] || !n[e].broadcast_id) return Promise.reject(s.a.BROADCAST_NOT_FOUND);
                            if ("RUNNING" !== n[e].state && !n[e].available_for_replay) return Promise.reject(s.a.BROADCAST_ENDED_NO_REPLAY);
                            var o = {
                                broadcast: n[e]
                            };
                            return i && i[e] && i[e].length && (o.associatedEvent = i[e][0]), o
                        }), (function(t) {
                            return Promise.reject(s.a.BROADCAST_REQUEST_ERROR)
                        }))
                    } catch (n) {
                        return Promise.reject(n)
                    }
                },
                E = function(t) {
                    var e = t.broadcast,
                        r = t.associatedEvent,
                        n = void 0 === r ? {} : r,
                        i = e.state,
                        o = e.total_watched,
                        s = e.total_watching,
                        c = e.image_url,
                        u = e.start_ms,
                        d = e.ping_ms,
                        l = e.timedout_ms,
                        E = e.end_ms,
                        O = n.description,
                        R = n.title,
                        f = n.url,
                        p = n.id,
                        _ = "RUNNING" === i,
                        h = c,
                        I = parseInt(s, 10) || 0,
                        v = parseInt(o, 10) || 0,
                        T = {
                            isLive: _,
                            viewerCount: _ ? I : v,
                            posterImage: h,
                            eventDescription: O,
                            eventTitle: R,
                            eventUrl: f,
                            eventId: p
                        };
                    if (R && f && (T.cta = {
                            label: R,
                            type: a.b.EVENT,
                            url: f
                        }), !_) {
                        var m = (E || l || d || u) - u;
                        T.durationMs = m
                    }
                    return T
                },
                O = function(t) {
                    return t.source && t.source.type === u.a.BROADCAST
                },
                R = function() {
                    function t(t, e, r, n, i) {
                        this.dispatch = t, this.httpClient = e, this.playerId = r, this.broadcastId = n, this.includeBroadcastEventAssociation = i, this.updaterTimeout = null
                    }
                    var e = t.prototype;
                    return e.queueUpdate = function(t) {
                        var e, r, n = this,
                            i = t ? 15 : 30,
                            a = new Promise((function(t, n) {
                                e = t, r = n
                            }));
                        return this.updaterTimeout = setTimeout((function() {
                            var t, i, a;
                            (t = n.httpClient, i = n.broadcastId, a = n.includeBroadcastEventAssociation, l(t, i, a).then((function(t) {
                                return E(t)
                            }), (function(t) {
                                throw new Error(t)
                            }))).then((function(t) {
                                null != n.updaterTimeout && (n.queueUpdate(t.isLive), n.dispatch(Object(o.f)(n.playerId, t))), e()
                            }), (function(t) {
                                r(t)
                            }))
                        }), 1e3 * i), a
                    }, e.cancelUpdate = function() {
                        clearTimeout(this.updaterTimeout), this.updaterTimeout = null
                    }, t
                }(),
                f = function() {
                    function t(t, e) {
                        this.httpClient = t, this.includeBroadcastEventAssociation = e
                    }
                    return t.prototype.load = function(t) {
                        return function(t, e, r) {
                            if (!O(e)) return Promise.resolve(e);
                            var n = e.source.id;
                            return l(t, n, r).then((function(t) {
                                var r, n, o, a, s, u, d, l, O, R = Object(c.d)(e, 0),
                                    f = (r = t.broadcast, n = r.broadcast_id, o = r.media_key, a = r.profile_image_url, s = r.replay_edited_start_time, u = r.requires_fine_grain_geoblocking, d = r.twitter_user_id, l = r.user_id, O = r.unavailable_in_periscope, {
                                        broadcastId: n,
                                        contentId: o,
                                        contentType: "broadcast",
                                        displayType: "content",
                                        expandedUrl: "https://www.pscp.tv/w/" + n,
                                        isEventGeoblocked: u,
                                        playbackType: "application/x-mpegURL",
                                        publisherDisplayName: r.user_display_name,
                                        publisherId: d,
                                        periscopePublisherId: l,
                                        publisherProfileImageUrl: a,
                                        replayEditedStartTime: s,
                                        shouldLoop: !1,
                                        unavailableInPeriscope: O
                                    }),
                                    p = E(t),
                                    _ = p.cta,
                                    h = p.durationMs,
                                    I = p.isLive,
                                    v = p.viewerCount,
                                    T = p.viewCount,
                                    m = i()(p, ["cta", "durationMs", "isLive", "viewerCount", "viewCount"]);
                                return e.posterImage && delete m.posterImage, Object.assign({}, e, {}, m, {
                                    client: "web",
                                    tracks: [Object.assign({}, R, {}, f, {
                                        cta: _,
                                        durationMs: h,
                                        id: 0,
                                        isLive: I,
                                        viewerCount: v,
                                        viewCount: T
                                    })],
                                    currentTrackId: 0,
                                    source: Object.assign({}, e.source, {
                                        trackId: 0
                                    })
                                })
                            }), (function(t) {
                                throw new Error(t)
                            }))
                        }(this.httpClient, t, this.includeBroadcastEventAssociation)
                    }, t
                }()
        },
        i9V9: function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return o
            })), r.d(e, "e", (function() {
                return a
            })), r.d(e, "c", (function() {
                return s
            })), r.d(e, "a", (function() {
                return c
            }));
            r("rmZQ"), r("BPcy"), r("LnO1"), r("3eMz"), r("DB+v"), r("p+GS"), r("dtAy");
            var n, i = {},
                o = function(t) {
                    n = t
                },
                a = function(t) {
                    void 0 === t && (t = {}), i = t
                },
                s = function(t) {
                    return n ? n(t) : t.toString()
                },
                c = function() {
                    return Object.keys(i).length > 0
                };
            e.b = function(t, e) {
                void 0 === e && (e = {});
                var r = i[t] || t;
                return Object.keys(e).reduce((function(t, r) {
                    var n = new RegExp("%{" + r + "}", "g");
                    return t.replace(n, e[r])
                }), r)
            }
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/ondemand.PlayerBase~ondemand.lex.2fc597b4.js.map
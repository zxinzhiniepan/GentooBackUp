/*
	wot.js
	Copyright © 2009 - 2016  WOT Services Oy <info@mywot.com>

	This file is part of WOT.

	WOT is free software: you can redistribute it and/or modify it
	under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	WOT is distributed in the hope that it will be useful, but WITHOUT
	ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
	or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
	License for more details.

	You should have received a copy of the GNU General Public License
	along with WOT. If not, see <http://www.gnu.org/licenses/>.
*/

var wot = {
	version: 20170609,
	platform: "chrome",		// default platform - gets detected when "detect_platform" is run
    locale: "en",           // cached value of the locale
    lang: "en-US",          // cached value of the lang
	debug: false,           // when changing this, don't forget to switch ga_id value also!
	default_component: 0,
	enable_surveys: true,   // Feedback loop engine

	ga_id: "UA-2412412-14", // test: UA-35564069-1 , old-live: UA-2412412-8, new-live: UA-2412412-14

	// environment (browser, etc)
	env: {
		is_mailru: false,
		is_mailru_amigo: false,
		is_yandex: false,
		is_rambler: false,

		is_accessible: false
	},

	PLATFORMS: {
		CHROME: "chrome",
		OPERA: "opera",
		YANDEX: "yandex",
		MAILRU: "mailru",
		MAILRU_AMIGO: "mailru_amigo"
	},

	SG: {
		"opera": "243"
	},

	components: [
		{ name: 0 },
		{ name: 4 }
	],

    cgroups: {}, // Categories' groups and their mapping to colors and TR/CS. Initialized by calling "wot.init_categories(prefs)"

    // Groupings for building category selector in Rating Window. Loaded from API server, update.xml file.
    grouping: [],

    categories: {}, // is loaded from preferences during launch and updated from server regularly

	cat_combinations: {},   // is loaded at the same time as categories

	cat_combinations_prio: [],

    category_threshold: 3,  // confidence level to show a category as identified

	reputationlevels: [
		{ name: "rx", min: -2 },
		{ name: "r0", min: -1 },
		{ name: "r1", min:  0 },
		{ name: "r2", min: 20 },
		{ name: "r3", min: 40 },
		{ name: "r4", min: 60 },
		{ name: "r5", min: 80 }
	],

	confidencelevels: [
		{ name: "cx", min: -2 },
		{ name: "c0", min: -1 },
		{ name: "c1", min:  6 },
		{ name: "c2", min: 12 },
		{ name: "c3", min: 23 },
		{ name: "c4", min: 34 },
		{ name: "c5", min: 45 }
	],

    // reference: http://www.mywot.com/wiki/Activity_scores
    activityscore_levels: [
        { name: "rookie", min: 0 },
        { name: "bronze", min: 1500 },
        { name: "silver", min: 3000 },
        { name: "gold", min: 6000 },
        { name: "platinum", min: 10000 }
    ],

    AS_LEVELS: {
        ROOKIE: 0,
        BRONZE: 1500,
        SILVER: 3000,
        GOLD: 6000,
        PLATINUM: 10000
    },

	searchtypes: {
		optimized: 0,
		worst: 1,
		trustworthiness: 2
	},

	warningtypes: { /* bigger value = more severe warning */
		none: 0,
		notification: 1,
		overlay: 2,
		block: 3
	},

	warningreasons: { /* bigger value = more important reason */
		skipped: -1,
		none: 0,
		unknown: 1,
		rating: 2,
		reputation: 3
	},

	urls: {
		base:		"https://www.mywot.com/",
		scorecard:	"https://www.mywot.com/scorecard/",
		settings:	"https://www.mywot.com/settings",
        profile:	"https://www.mywot.com/user",
        signup:     "https://www.mywot.com/signup",
		welcome:	"https://www.mywot.com/settings/welcome",
		setcookies:	"http://www.mywot.com/setcookies.php",  // this can be only http because the add-on doesn't have permission to access https
		update:		"https://www.mywot.com/update",
		tour_warning:"https://www.mywot.com/support/tour/warningscreen",
		tour:       "https://www.mywot.com/support/tour/",
		tour_rw:    "https://www.mywot.com/support/tour/ratingwindow",
		tour_scorecard: "https://www.mywot.com/support/tour/scorecard",
		wg:         "https://beta.mywot.com/groups/g",
		wg_about:   "https://beta.mywot.com/groups",

		contexts: {
			rwlogo:     "rw-logo",
			rwsettings: "rw-settings",
			rwguide:    "rw-guide",
            rwforum:    "rw-forum",
			rwviewsc:   "rw-viewsc",
			rwprofile:  "rw-profile",
			rwmsg:      "rw-msg",
			rwcommreg:  "rw-commreg",
			rwcaptcha:  "rw-captcha",
			warnviewsc: "warn-viewsc",
			warnrate:   "warn-rate",
			popupviewsc:    "popup",
			popuprate:      "popup-rate",
			popupdonuts:    "popup-donuts",
			fbl_logo:   "fbl-logo",
			wt_intro:   "wt-intro",
			wt_rw_lm:   "wt-rw-lm",
			wt_warn_lm: "wt-warn-lm",
			wt_warn_logo:       "wt-warn-logo",
			wt_donuts_lm:       "wt-donuts-lm",
			wt_donuts_logo:     "wt-donuts-logo",
			wg_tag:             "wg-tag",
			wg_about_learnmore: "wg-learnmore"
		},

		geturl: function (url) {
			var is_wg = wot.ratingwindow ? wot.ratingwindow.is_wg_allowed : (wot.core ? wot.core.tags.is_wg_allowed : false);
			return is_wg ? url.replace('www.mywot.com', 'beta.mywot.com') : url;
		}
	},

	firstrunupdate: 2, /* increase to show a page after an update */

	cachestatus: {
		error:	0,
		ok:		1,
		busy:	2,
		retry:	3,
		link:	4,
        unsubmitted: 5
	},

	badge_types: {
        unsaved_comment: {
            color: [255, 0, 0, 255],
            text: "?",
            type: "unsaved_comment",
            priority: 1
        },
		notice: {   // for system notifications
			color: [240, 0, 0, 255],
			text: "1",
			type: "notice",  // important to compare with current status type
            priority: 2
		},
		message: { // for messages from another users
			color: [160, 160, 160, 255],
			text: "",
			type: "message",
            priority: 3
		},
        unrated: {
            color: [255, 235, 0, 255],
            text: "-",
            type: "unrated",
            priority: 4
        },
        nocategories: {
            color: [200, 200, 200, 255],
            text: "?",
            type: "nocategories",
            priority: 5
        }
	},

    comments: {
        error_codes: {
            "0": "SUCCESS",
            "1": "NO_ACTION_DEFINED",
            "2": "IS_BANNED",
            "3": "AUTHENTICATION_FAILED",
            "4": "NO_TARGET",
            "5": "COMMENT_NOT_FOUND",
            "6": "COMMENT_REMOVAL_FAILED",
            "7": "COMMENT_NOT_ALLOWED",
            "8": "NO_COMMENTID",
            "9": "NO_CATEGORIES_SPECIFIED",
            "10": "NO_COMMENT_SPECIFIED",
            "11": "AUTHENTICATION_INVALID_QUERY_PARAMETERS",
            "12": "AUTHENTICATION_REP_SERVER_ERROR",
            "13": "NO_QUERY_SPECIFIED",
            "14": "QUERY_STRING_MISSING",
            "15": "COMMENT_HAS_BEEN_ALTERED",
            "16": "COMMENT_TOO_SHORT",
            "17": "COMMENT_TOO_LONG",
            "18": "COMMENT_SAVE_FAILED",
            SUCCESS: 0,
            NO_ACTION_DEFINED: 1,
            IS_BANNED: 2,
            AUTHENTICATION_FAILED: 3,
            COMMENT_NOT_FOUND: 5,
            COMMENT_REMOVAL_FAILED: 6,
            COMMENT_NOT_ALLOWED: 7,
            AUTHENTICATION_REP_SERVER_ERROR: 12,
            COMMENT_SAVE_FAILED: 18
        }
    },

	expire_warned_after: 20000,  // number of milliseconds after which warned flag will be expired

	TINY_THANKYOU_DURING: 60 * 60 * 1000, // within this time after prev rating user won't see separate ThankYou screen after new submission. Milliseconds.

	// trusted extensions IDs
	allowed_senders: {
		"ihcnfeknmfflffeebijjfbhkmeehcihn": true,   // dev version
		"bhmmomiinigofkjcapegjjndpbikblnp": true,   // WOT via WebStore
		"goinjpofmboaejkhflohjoloaoebfopj": true,   // WOT (m2) distributed via mywot.com
		"hghiafbmcdglhlkgpfafjjoigpghhilc": true    // Manifest-1 version of WOT addon
	},

	// engagement schedule
	engage_settings: {
		invite_to_rw: {
			delay: 12 * 3600,    // 12 hours after first launch
			pref_name: "ratingwindow_shown",
			enabled: true   // this is a cache value to avoid comprehensive logic work often (in case of = false)
		}
	},

	// Constants for playing with date & time (in seconds)
	DT: {
		MINUTE: 60,
		HOUR: 3600,
		DAY: 24 * 3600,
		WEEK: 7 * 24 * 3600,
		MONTH: 30 * 24 * 3600
	},

	UNINSTALL_URL: "https://www.mywot.com/en/uninstall_chrome",
	UNINSTALL_FRAME_URL: "https://www.mywot.com/uninstall_chrome_frame.html",
	OVERRIDE_FOOTER_USER_MESSAGE: true,

	/* logging */

	log: function (s)
	{
		if (wot.debug) {
			console.log(s, arguments);
		}
	},

	init: function() {
		var platform = this.detect_platform();
		
		this.set_platform(platform);
	},

	set_platform: function(platform) {
		this.platform = platform;
	},

	/* events */

	events: {},

	open_scorecard: function(target) {

		chrome.windows.getCurrent(function(obj) {
			chrome.tabs.getSelected(obj.id, function (tab) {
				var target = wot.url.gethostname(tab.url);
				wot.core.open_scorecard(target, "icon_click", "limited-ch");
			});
		});


	},

	trigger: function (name, params, once)
	{
		if (this.events[name]) {
			if (wot.debug) {
				console.log("trigger: event " + name + ", once = " + once);
			}

			this.events[name].forEach(function (obj) {
				try {
					obj.func.apply(null, [].concat(params).concat(obj.params));
				} catch (e) {
					console.log("trigger: event " + name + " failed with " +
						e + "\n");
				}
			});

			if (once) { /* these events happen only once per bind */
				delete (this.events[name]);
			}
		}
	},

	bind: function (name, func, params)
	{
		if (typeof (func) == "function") {
			this.events[name] = this.events[name] || [];
			this.events[name].push({ func: func, params: params || [] });

			if (wot.debug) {
				console.log("bind: event " + name);
			}
			this.trigger("bind:" + name);
		}
	},

	addready: function (name, obj, func)
	{
		obj.ready = function (setready)
		{
			if (typeof(func) == "function") {
				this.isready = setready || func.apply(this);
			} else {
				this.isready = setready || this.isready;
			}
			if (this.isready) {
				wot.trigger(name + ":ready", [], true);
			}
		};

		obj.isready = false;

		this.bind("bind:" + name + ":ready", function() {
			obj.ready();
		});
	},

	/* messaging */

	connections: {},

	get_onConnect: function () {
		// this is the compatibility function to support messaging in Chrome 18-25 and Chrome 26+
		// http://stackoverflow.com/questions/15718066/chrome-runtime-sendmessage-not-working-as-expected/15718294#15718294
		return chrome.runtime && chrome.runtime.sendMessage ?
			chrome.runtime.onConnect : chrome.extension.onConnect;
	},

	get_connect: function () {
		// this is the compatibility function to support messaging in Chrome 18-25 and Chrome 26+
		// http://stackoverflow.com/questions/15718066/chrome-runtime-sendmessage-not-working-as-expected/15718294#15718294
		return chrome.runtime && chrome.runtime.sendMessage ?
			chrome.runtime.connect : chrome.extension.connect;
	},

	get_runtime: function () {
		// this is the compatibility function to support messaging in Chrome 18-25 and Chrome 26+
		// http://stackoverflow.com/questions/15718066/chrome-runtime-sendmessage-not-working-as-expected/15718294#15718294
		return chrome.runtime && chrome.runtime.sendMessage ?
			chrome.runtime : chrome.extension;
	},

	triggeronmessage: function(port)
	{
		port.onMessage.addListener(function(data) {
			wot.trigger("message:" + data.message, [ {
					port: port,
					post: function(message, data) {
						wot.post(this.port.name, message, data, this.port);
					}
				}, data ]);
		});
	},

	listen: function(names)
	{
		if (typeof(names) == "string") {
			names = [ names ];
		}

		wot.get_onConnect().addListener(function(port) {
			if (names.indexOf(port.name) >= 0) {
				wot.triggeronmessage(port);
				wot.connections[port.name] = port;
			}
		});
	},

	connect: function(name)
	{
		var port = this.connections[name];

		if (port) {
			return port;
		}

		port = wot.get_connect().call(wot.get_runtime(), { name: name });

		if (port) {
			this.triggeronmessage(port);
			this.connections[name] = port;
		}

		return port;
	},

	post: function(name, message, data, port)
	{
		port = port || this.connect(name);

		if (port) {
			data = data || {};
			data.message = name + ":" + message;
			port.postMessage(data);
		} else {
			console.warn("Can't find port to send message", name, message, data);
		}
	},

	/* i18n */

	i18n: function(category, id, shorter)
	{
		var msg = category;

		if (shorter) {
			msg += "__short";
		}

		if (id != null) {
			msg += "_" + id;
		}

		var result = chrome.i18n.getMessage(msg);

		if (result == null) {
			result = this.debug ? "!?" : "";
		}

		// Workaround for the Chrome's issue 53628
		// http://code.google.com/p/chromium/issues/detail?id=53628
		var temp_workaround = {
			"warnings_warning": "Warning!",
			"warnings_goto": "Go to the site",
			"warnings_leave": "Leave the site",
			"warnings_back": "Go back"
		};

		if (result == "") {
			var res_2 = temp_workaround[msg];
			if (res_2 != "") return res_2;
		}

		// END of workaround / remove it when the bug will be fixed

		return result;
	},

	/* helpers */

	getuniques: function(list)
	{
		var seen = {};

		return list.filter(function(item) {
					if (seen[item]) {
						return false;
					} else {
						seen[item] = true;
						return true;
					}
				});
	},

	/* rules */

	matchruleurl: function(rule, url)
	{
		try {
			return (RegExp(rule.url).test(url) &&
						(!rule.urlign || !RegExp(rule.urlign).test(url)));
		} catch (e) {
			console.log("matchurl: failed with " + e + "\n");
		}

		return false;
	},

	/* reputation and confidence */

	getlevel: function(levels, n, next)
	{
        next = next ? next : false;

		var next_level = levels[levels.length - 1];

		for (var i = levels.length - 1; i >= 0; --i) {
			if (n >= levels[i].min) {
				return next ? next_level : levels[i];
			}
            next_level = levels[i];
		}

		return levels[1];
	},

    get_level_label: function (component, rep_level, my) {
        my = my || false;

        if (my) {
            return wot.i18n("testimony", component + "_levels_" + rep_level);
        } else {
            return wot.i18n("reputationlevels", rep_level);
        }
    },

    get_user_level: function (activity_score, next) {
        activity_score = parseInt(activity_score) || 0;
        return wot.getlevel(wot.activityscore_levels, activity_score, next);
    },

	getwarningtypeforcomponent: function(comp, data, prefs)
	{
		var type = prefs["warning_type_" + comp] || this.warningtypes.none;

		if (!prefs["show_application_" + comp] ||
				type == this.warningtypes.none) {
			return null;
		}

		var r = -1, c = -1, t = -1;

		if (data[comp]) {
			r = data[comp].r;
			c = data[comp].c;
			t = data[comp].t;
		}

		var warninglevel = prefs["warning_level_" + comp] || 0;
		var minconfidence = prefs["min_confidence_level"] || 0;
		var forunknown = prefs["warning_unknown_" + comp];

		var rr = (r < -1) ? 0 : r;
		var cc = (c < -1) ? warninglevel : c;

		if (((rr >= 0 && rr <= warninglevel && /* poor reputation */
			  			/* and sufficient confidence */
						(cc >= minconfidence || forunknown)) ||
			 		/* or no reputation and warnings for unknown sites */
					(rr < 0 && forunknown)) &&
				/* and no rating that overrides the reputation */
				(t < 0 || t <= warninglevel)) {
			if (r < 0) {
				return {
					type: type,
					reason: this.warningreasons.unknown
				};
			} else {
				return {
					type: type,
					reason: this.warningreasons.reputation
				};
			}
		}

		/* or if the user has rated the site poorly */
		if (t >= 0 && t <= warninglevel) {
			return {
				type: type,
				reason: this.warningreasons.rating
			};
		}

		return null;
	},

	getwarningtype: function(data, prefs)
	{
		var warning = {
			type: this.warningtypes.none,
			reason: this.warningreasons.none
		};

		wot.components.forEach(function(item) {
			var comp = wot.getwarningtypeforcomponent(item.name, data, prefs);

			if (comp) {
				warning.type   = Math.max(warning.type, comp.type);
				warning.reason = Math.max(warning.reason, comp.reason);
			}
		});

		return warning;
	},

	getwarningtype_by_host_from_cache: function(host) {
		if (!host) { return false; }
		var cached = wot.cache.get(host);
		if (!cached) { return false; }

		var prefs = [
			"accessible",
			"min_confidence_level",
			"warning_opacity",
            "update:state"
		];

		wot.components.forEach(function(item) {
			prefs.push("show_application_" + item.name);
			prefs.push("warning_level_" + item.name);
			prefs.push("warning_type_" + item.name);
			prefs.push("warning_unknown_" + item.name);
		});

		var settings = {};

		prefs.forEach(function(item) {
			settings[item] = wot.prefs.get(item);
		});

		return wot.getwarningtype(cached.value, settings);
	},

	/* paths */

	getlocalepath: function(file)
	{
		return "_locales/" + this.i18n("locale") + "/" + file;
	},


	getincludepath: function(file)
	{
		return "skin/include/" + file;
	},

	geticon: function(r, size, accessible, options)
	{
		var name = "/",
			has_subtype = false,
			sub_type = "plain";

		if (options instanceof Object) {
			sub_type = options.subtype;
			has_subtype = !!sub_type;
			// todo: get other option here
		} else {
			// compatibility with old code (non-refactored: options is boolean)
			has_subtype = options; // sub_type might only be "plain" if plain is true.
		}

		if (typeof(r) == "number") {
			name += this.getlevel(this.reputationlevels, r).name;
		} else {
			name += r;
		}

		if (has_subtype) {
			name = "/" + sub_type + name;
		}

		var path = "skin/fusion/";

		if ((typeof(r) != "number" || r >= -1) && accessible) {
			path += "accessible/";
		}

		return path + size + "_" + size + name + ".png";
	},

	contextedurl: function(url, context)
	{
		var newurl = url;
		newurl += ( (url.indexOf("?") > 0) ? "&" : "?" );
		newurl += "utm_source=addon&utm_content=" + context;
		return newurl;
	},

	detect_environment: function(readonly)
	{
		readonly = readonly || false;
		var platform = this.detect_platform();

		// try to understand in which environment we are run
		wot.env.is_mailru = platform === this.PLATFORMS.MAILRU;
		wot.env.is_mailru_amigo = platform === this.PLATFORMS.MAILRU_AMIGO;
		wot.env.is_yandex = platform === this.PLATFORMS.YANDEX;

		if (wot.env.is_mailru || wot.env.is_yandex) {
			// set param to label requests
			wot.partner = platform;
		}

		if (wot.prefs) {
			if(!readonly) wot.prefs.set("partner", wot.partner);
			// Is the mode "accessible" set on?
			wot.env.is_accessible = wot.prefs.get("accessible");
		}
	},

	detect_platform: function() {
		var platform = this.PLATFORMS.CHROME;	// default
		var userAgent = window.navigator.userAgent;
		// userAgent = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.1.963.51 Safari/535.11 OPR";

		if (typeof opr === "object" || /OPR/.test(userAgent)) {	// supports version +15.0
			platform = this.PLATFORMS.OPERA;
		}

		// old yandex browser is named "Yandex Internet" (chromium 18), new browser is named "YaBrowser" (chromium +22)
		if (/YaBrowser/.test(userAgent) || / YI/.test(userAgent)) {
			platform = this.PLATFORMS.YANDEX;
		}

		if (/MRCHROME/.test(userAgent)) {
			platform = this.PLATFORMS.MAILRU;
		}

		if (/MRCHROME SOC/.test(userAgent)) {
			platform = this.PLATFORMS.MAILRU_AMIGO;
		}		

		return platform;
	},

    cache_locale: function () {
        wot.lang = wot.i18n("lang");
        wot.locale = wot.i18n("locale");
    },

	time_sincefirstrun: function()
	{
		// gives time (in seconds) spent from very first run of the addon.
		var starttime_str = wot.prefs.get("firstrun:time");
		if (starttime_str) {
			var starttime = new Date(starttime_str);
			return (new Date() - starttime) / 1000;    // in seconds;

		} else {
			return undefined;
		}
	},

	time_since: function(a, b) {

		if (typeof a === "string") {
			a = new Date(a);
		}

		b = b || new Date();

		if (typeof b === "string") {
			b = new Date(b);
		}

		return (b - a) / 1000;  // in seconds
	},

	is_defined: function (list, prefix) {
		// test if locale strings are available (due to bug in Chrome, it is possible to get "undefined")
		if (list instanceof Array != true) return false;
		for(var i in list) {
			if (wot.i18n(prefix, list[i]) === undefined) {
				return false; // avoid showing "undefined" strings in Tips. Postpone to browser's restart (it fixes usually)
			}
		}
		return true;
	},

	get_activity_score: function (onget) {
		var pref_name = "activity_score",
			proxy_wot = wot;
		if (wot.core || wot.ratingwindow) {
			// wow, we are in the background page or Rating window

			if (wot.ratingwindow) {
				// use reference to BG page
				var bg = chrome.extension.getBackgroundPage();
				proxy_wot = bg.wot;
			}

			if (proxy_wot.core.activity_score == 0) {
				// lets check what we have in local storage
				return proxy_wot.prefs.get(pref_name);
			} else {
				return proxy_wot.core.activity_score;
			}
		} else {
			// yay, we are in a content script. Have to use functional-style
			wot.prefs.get(pref_name, onget);
		}
	},

    // copies and validates categories from saved preferences (actually prefs['update:state'])
    init_categories: function (_prefs) {
        try {
            var update_state = (typeof _prefs.get == "function") ? _prefs.get("update:state") : _prefs["update:state"];

            if (update_state && !wot.utils.isEmptyObject(update_state) &&
                update_state.categories && update_state.categories.length > 0) {

                // update groupings and groups
                if(update_state.categories[0].grouping) {
                    var groupings = update_state.categories[0].grouping;
                    for (var k=0; k < groupings.length; k++) {
                        var grp = groupings[k];
                        grp.tmax = grp.tmax !== undefined ? parseInt(grp.tmax) : undefined;
                        grp.tmin = grp.tmin !== undefined ? parseInt(grp.tmin) : undefined;
                        grp.groups = grp.group; // change the name to comply with current implementation
                        delete grp.group;

                        if (grp.groups) {
                            for (var n=0; n < grp.groups.length; n++) {
                                wot.cgroups[grp.groups[n].name] = {
                                    type: grp.groups[n].type
                                }
                            }
                        }
                    }
                    wot.grouping = groupings;
                }

                // update categories
                if (update_state.categories[0].category) {
                    var cats = update_state.categories[0].category;
                    for (var m=0; m < cats.length; m++) {
                        cat = cats[m];
                        if (cat.name && cat.text != null) {
                            cat.id = parseInt(cat.name);
                            if (cat.group && wot.cgroups[cat.group] && wot.cgroups[cat.group].type) {
                                cat.type = wot.cgroups[cat.group].type;
                            }
                            cat.cs = (cat.application == "4");  // set CS flag
                            wot.categories[cat.name] = cat;
                        }
                    }
                }

                // update categories' combinations
                if (update_state.categories[0].conflict && update_state.categories[0].conflict.length > 0) {
				wot.cat_combinations_prio = ["6a"]; // 6A case is the first one by default
				var lst = update_state.categories[0].conflict;
	                for (var c = 0; c < lst.length; c++) {
				    var conflict = lst[c],
				        rule = conflict.rule;

				    if (conflict.voted && conflict.voted.length > 0) {
				        wot.cat_combinations_prio.push(rule.toLowerCase());

				        for (var j = 0; j < conflict.voted.length; j++) {
				            var voted = conflict.voted[j];
				            var group = voted && voted.group ? voted.group : "",
				                ccats = group.split(",");   // categories coflict group may have more than two categories, but we use only first two for now

				            if (ccats && ccats.length > 1) {

				                if (!wot.cat_combinations[ccats[0]]) {
					                wot.cat_combinations[ccats[0]] = {};
	                }

				                if (!wot.cat_combinations[ccats[1]]) {
					                wot.cat_combinations[ccats[1]] = {};
                }

				                // remember first two categories conflict (+transpositioned state)
				                wot.cat_combinations[ccats[0]][ccats[1]] = rule;
				                wot.cat_combinations[ccats[1]][ccats[0]] = rule;
				            }
				        }
				    }
		            }
	            }

            } else {
                console.warn("No categories are known yet. Not good situation.");
            }
        } catch (e) {
            console.error("init_categories() failed, ", e);
        }
    },

    get_category: function (cat_id) {
        var cid = String(cat_id),
            cat = {};
        if (wot.categories && wot.categories[cid]) {
            cat = wot.categories[cid];
            cat.id = cid;
        }
        return cat;
    },

    get_category_name: function (cat_id, is_short) {
        var cat = wot.get_category(cat_id);
        var text = is_short ? cat.shorttext : cat.text;
        return text ? text : cat.text;  // if no short name is known, return full name
    },

    get_category_group_id: function (cat_id) {
        return wot.get_category(cat_id).group;
    },

    get_category_css: function (cat_id) {
        var type = wot.get_category(cat_id).type;
        return type !== undefined ? "c-" + type : "";
    },

    rearrange_categories: function (cats_object) {
        // sorts the categories given as object and return two arrays of category objects ordered by confidence
        var sort_array = [],
            cs_array = [];

        if (cats_object) {

            try {
                // Make the array of objects (categories)
                for (var key in cats_object) {
                    var cat = wot.get_category(key);
                    cats_object[key].id = key;
                    cats_object[key].cs = cat.cs;
                    cats_object[key].group = cat.group;
                    sort_array.push(cats_object[key]);
                }

                // Sort the array
                sort_array.sort(function(a, b) {
                    if (a.c != b.c) {   // try to sort by confidence level
                        return a.c - b.c
                    } else {    // otherwise try to sort by group id
                        if (a.group != b.group) {
                            return a.group - b.group;
                        } else {
                            return a.id > b.id;
                        }
                    }
                });
                sort_array.reverse();
            } catch (e) {
                console.error("Failed to rearrange categories", e);
            }

            var alltogether = sort_array.slice(0);

            try {
                // filter out Child Safety cats to other array
                for (var i=sort_array.length-1; i>=0; i--) {
                    if (sort_array[i].cs) {
                        cs_array.push(sort_array.splice(i, 1)[0]);
                    }
                }
                cs_array.reverse();
            } catch (e) {
                console.error("Failed to rearrange categories", e);
            }
        }

        return {
            all: alltogether,
            trustworthy: sort_array,
            childsafety: cs_array
        };
    },

    select_categories: function (g_from, g_to) {
        var l = [];
        for(var i in wot.categories) {
            var c = wot.categories[i];
            if (((g_from != null && c.group >= g_from) || g_from == null) &&
                ((g_to != null && c.group <= g_to) || g_to == null)) {
                l.push(parseInt(i));
            }
        }
        return l;
    },

    select_identified: function (cat_list) {
        // Returns categories identified by community (not sorted order)
        var res = {};
        for (var i in cat_list) {
            var cat = cat_list[i];
            if (cat.c >= wot.category_threshold) res[i] = cat;
        }
        return res;
    },

    select_voted: function (cat_list) {
        // Returns categories voted by the current user (the state from server/cache)

        var res = {};
        for (var i in cat_list) {
            var cat = cat_list[i];
            if (cat.v != 0 && cat.v !== undefined) res[i] = cat;
        }

        return res;
    },

    determ_grouping: function (t0, type) {
        // Return proper grouping ID for the category selector based on user's testimonies

        var grp = {};
        for (var gi=0; gi < wot.grouping.length; gi++) {
            grp = wot.grouping[gi];
            if ((grp.omnipresent && type === "omnipresent") || (grp.dynamic && type === "dynamic")) return grp;
            else {
                if (!grp.omnipresent && !type) { // skip only omnipresent, and if type is not set
                    var tmin = grp.tmin !== null ? grp.tmin : -1,
                        tmax = grp.tmax !== null ? grp.tmax : -1;
                    if (t0 == -1 || (t0 >= tmin && t0 <= tmax)) {
                        return grp;
                    }
                }
            }
        }

        return {};
	},

    is_rated: function (cached) {

        if (cached && cached.value) {
            return wot.components.some(function(item) {
                return (cached.value[item.name] &&
                    cached.value[item.name].t >= 0);
            });
        }

        return false;
    },

	tags: {
		tags_re: /(\s|^)#([a-z0-9\u0400-\u04FF\u00E4\u00F6]{2,})/img,
		tags_validate_re: /^\d{2}$/im,

		get_tags: function (text) {

			if (!text) return [];

			var res,
				tags = [],
				_tags = {};

			while ((res = wot.tags.tags_re.exec(text)) !== null) {
				var tag = res[2] || "";

				if (wot.tags.tags_validate_re.test(tag)) continue;  // skip invalid tag

				if (tag && !_tags[tag]) {
					tags.push({
						value: tag,       // tag's text
						value_indx: tag.toLocaleLowerCase()       // index value of the tag
					});
					_tags[tag] = true;  // remember the tag to avoid duplications
				}
			}
			wot.tags.tags_re.lastIndex = 0; // reset the last index to avoid using it for the different text
			return tags;
		}
	},

	// redirection
	cache_alt_urls: {},
	cache_redirects: {},
	cache_credirects: {},
	cache_sublasts: {},
	cache_headers: {},
	cache_created_tabs_ts: {},
	hash_tabs: {},
	hash_requests: {},
	last_urls: {},

	//cache_created_tabs_ts
	add_created_tab_ts: function(tab_id) {
		if (this.is_created_tab_ts_exist(tab_id)) { return; }
		this.cache_created_tabs_ts[tab_id] = Date.now();
	},

	remove_created_tab_ts: function(tab_id) {
		delete this.cache_created_tabs_ts[tab_id];
	},

	is_created_tab_ts_exist: function(tab_id) {
		return this.cache_created_tabs_ts.hasOwnProperty(tab_id);
	},

	is_new_window_tab_created: function(tab_id) {
		if (!this.is_created_tab_ts_exist(tab_id)) { return false; }
		return Date.now() - this.cache_created_tabs_ts[tab_id] < 3000;
	},

	// cache_headers
	set_headers_flag: function(tab_id, ref) {
		if(this.cache_headers[tab_id] && this.cache_headers[tab_id].ref) {
			ref = this.cache_headers[tab_id].ref;
		}
		this.cache_headers[tab_id] = {flag:true, ref:ref};
	},

	remove_headers_flag: function(tab_id) {
		delete this.cache_headers[tab_id];
	},

	has_headers_flag: function(tab_id) {
		return this.cache_headers[tab_id] ? this.cache_headers[tab_id].flag : false;
	},

	get_ref_header: function(tab_id) {
		return this.cache_headers[tab_id] ? this.cache_headers[tab_id].ref : '';
	},

	// cache sublasts
	get_sublast: function(tab_id) {
		return this.is_sublast_exist(tab_id) ? this.cache_sublasts[tab_id] : "";	
	},

	add_sublast: function(tab_id, fetching, url) {
		this.cache_sublasts[tab_id] = {
			fetching: fetching,
			url: url
		};
	},

	set_sublast_fetching: function(tab_id, fetching) {
		var sublast = this.get_sublast(tab_id);
		if (sublast && fetching !== undefined) {
			sublast.fetching = fetching;
		}
	},

	is_sublast_exist: function(tab_id) {
		return this.cache_sublasts.hasOwnProperty(tab_id);
	},

	is_sublast_fetching: function(tab_id) {
		return this.is_sublast_exist(tab_id) && this.get_sublast(tab_id).fetching;
	},

	remove_sublast: function(tab_id) {
		if (this.is_sublast_exist(tab_id)) {
			delete this.cache_sublasts[tab_id];
		}
	},

	replace_sublast_id: function(old_id, new_id) {
		if (!this.is_sublast_exist(old_id)) { return; }
		var old_sublast = this.get_sublast(old_id);
		this.add_sublast(new_id, old_sublast.fetching, old_sublast.url);
		this.remove_sublast(old_id);
	},

	// hash_tabs
	delete_hash_requests: function(tab_id) {
		if (!tab_id || !wot.hash_tabs[tab_id]) { return; }
        for (var i=0; i < wot.hash_tabs[tab_id]._arrRequestsIds.length; i++){
            delete wot.hash_requests[wot.hash_tabs[tab_id]._arrRequestsIds[i]];
        }
	},	

	// last_urls
	get_last_url: function(id) {
		if (this.last_urls.hasOwnProperty(id)) {
			return this.last_urls[id];
		}
		else {
			return null;
		}
	},
	
	clear_last_url: function(id) {
	    if (this.last_urls.hasOwnProperty(id)) {
	      delete this.last_urls[id];
	    }
	},
	
	set_last_url: function(id, url){
	  	this.last_urls[id] = url;
	},
	
	is_valid_transition_type: function(transitionType) {
    	return transitionType && 
    	(transitionType != "auto_subframe" && 
    		transitionType != "manual_subframe" && 
    		transitionType != "form_submit");
	},

	// cache_alt_urls
	set_alt_url: function(tab_id, alt_url) {
	    if (tab_id == undefined) {
			throw new Error("add_alt_url, tab_id == undefined");
	    }
		this.cache_alt_urls[tab_id] = alt_url;
	},

	remove_alt_url: function(tab_id, transitionType) {
	    if (tab_id == undefined) {
			throw new Error("remove_alt_url, tab_id == undefined");
	    }
	    if (transitionType && !this.is_valid_transition_type(transitionType)) { return; }
	    if (this.cache_alt_urls.hasOwnProperty(tab_id)) {
	    	delete this.cache_alt_urls[tab_id];
	    }
	},

	find_low_ratings_url: function(urls) {
		for (var i = urls.length-1; i >= 0; i--) {
			var warningtype = wot.getwarningtype_by_host_from_cache(wot.url.gethostname(urls[i]));
			if (warningtype && warningtype.type >= wot.warningtypes.overlay) {
				return urls[i];
			}
		}
		return false;
	},

	get_alt_url: function(tab_id) {
	    if (tab_id == undefined) {
			throw new Error("get_alt_url, tab_id == undefined");
	    }
	    if (this.cache_alt_urls.hasOwnProperty(tab_id)) {
	    	return this.cache_alt_urls[tab_id];
	    }
	    return null;
	},

	// cache_credirects
	add_credirect: function(tab_id, url) {
	    if (tab_id == undefined) {
			throw new Error("add_credirect, tab_id == undefined");
	    }
	    this.cache_credirects[tab_id] = url;
	},

	delete_credirect: function(tab_id, url) {
	    if (tab_id == undefined) {
			throw new Error("remove_credirect, tab_id == undefined");
	    }
	    delete this.cache_credirects[tab_id];
	},

	get_credirect: function(tab_id) {
	    if (tab_id == undefined) {
			throw new Error("get_credirect, tab_id == undefined");
	    }
	    if (this.is_credirect_exist(tab_id)) {
	    	return this.cache_credirects[tab_id];
	    }
	    return null;
	},

	is_credirect_exist: function(tab_id) {
		return this.cache_credirects.hasOwnProperty(tab_id);
	},	

	// cache_redirects
	redirects_info: function() {
		return {
			_arr_server_redirect_urls: [],
			_completed_url: "",
			
			get_redirect_urls : function() {
			    return this._arr_server_redirect_urls;
			},
			
			add_url_to_cache: function(url) {
				this._arr_server_redirect_urls.push(url);
			}
		};
	},

	tab_info: function(tab, from_on_created_event){
		return {
			_tab : tab,
			_arrRequestsIds : [],
			_arrCommittedNavigations : [],
			_isDuplicate: false,
			_isReopened: false
		};
	},

	request_info: function(url_before, timestamp) {
		return {
			_url_before_redirect: url_before,
			_timestamp_before_request: timestamp
		};
	},

	navigation_info: function(details) {
		return {
			_transitionQualifiers : details.transitionQualifiers,
			_url : details.url
		};
	},

	add_redirect_info: function(tab_id) {
	    if (tab_id == undefined) {
			throw new Error("add_redirect_info, tab_id == undefined");
	    }
	    if (this.cache_redirects.hasOwnProperty(tab_id) == false) {
			this.cache_redirects[tab_id] = new this.redirects_info();
			return this.cache_redirects[tab_id];
	    } else {
			throw new Error("add_redirect_info, already exists, tab_id = " + tab_id);
	    }
	},

	get_redirect_info: function(tab_id) {
	    if (tab_id == undefined) {
			throw new Error("get_redirect_info, tab_id == undefined");
	    }
	    if (this.cache_redirects.hasOwnProperty(tab_id) == false) {
			return null;
	    } else {
			return this.cache_redirects[tab_id];
	    }
	},

	get_cached_redirects: function(tab_id) {
		if (tab_id == undefined) {
			throw new Error("get_cached_redirects, tab_id == undefined");
		}
		if (this.cache_redirects.hasOwnProperty(tab_id) == false) {
			return null;
		} else {
			if (this.cache_redirects[tab_id]._arr_server_redirect_urls ) {
				return this.cache_redirects[tab_id]._arr_server_redirect_urls;
			}
			else {
				return null;
			}
		}
	},
	
	delete_redirect_info: function(tab_id, transitionType) {
		if (tab_id == undefined) {
			throw new Error("delete_redirect_info, tab_id == undefined");
	    }
		if (this.cache_redirects.hasOwnProperty(tab_id) == false) {
			return null;
	    } else {
	    	return delete this.cache_redirects[tab_id];
	    }
	}
};


wot.utils = {

	get_document: function (frame) {
		frame = frame || window;
		var framed_document = frame.document || frame.contentDocument;
		return framed_document;
	},

	get_or_create_element: function (id, tag, frame) {
		tag = tag || "div";
		var framed_document = wot.utils.get_document(frame);

		var elem = framed_document.getElementById(id);

		if(!elem) {
			elem = framed_document.createElement(tag);
			elem.setAttribute("id", id);
		}

		return elem;
	},

	attach_element: function (element, frame) {
		var framed_document = wot.utils.get_document(frame);

		if(framed_document) {
			var body = framed_document.getElementsByTagName("body");

			if (!element || !body || !body.length) {
				return false;
			}

			return body[0].appendChild(element);
		} else {
			wot.log("Can't get document of frame");
			return false;
		}

	},

	attach_style: function (style_file_or_object, uniq_id, frame) {
		try {
			uniq_id = uniq_id || null;
			var reuse_style = false;

			var framed_document = wot.utils.get_document(frame);

			if(!framed_document) {
				return false;
			}

			if(uniq_id) {
				var el = framed_document.getElementById(uniq_id);
				if(el) {
					// if the element exists already - remove it to update styles
					reuse_style = true;
				}
			}

			var head = framed_document.getElementsByTagName("head");

			if (!head || !head.length) {
				return false;
			}

			var style = reuse_style ? el : framed_document.createElement("style");

			if (!style) {
				return false;
			}

			if(uniq_id) {
				style.setAttribute("id", uniq_id);
			}

			style.setAttribute("type", "text/css");

			if (typeof style_file_or_object === "object") {
				style.innerText = style_file_or_object.style;
			} else {
				style.innerText = "@import \"" +
					chrome.extension.getURL(wot.getincludepath(style_file_or_object)) +
					"\";";
			}

			if (!reuse_style) {
				head[0].appendChild(style);
			}

			return true;
		} catch (e) {
			console.log("wot.utils.attach_style() failed with", e, "Arguments:", arguments);
			return false;
		}
	},

	processhtml: function (html, replaces) {
		try {
			replaces.forEach(function(item) {
				html = html.replace(RegExp("{" + item.from + "}", "g"),
					item.to);
			});

			return html;
		} catch (e) {
			console.log("warning.processhtml: failed with " + e);
		}

		return "";
	},

	htmlescape: function(str) {
		var tagsToReplace = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;'
		};
		return str.replace(/[&<>]/g, function(symb) {
			return tagsToReplace[symb] || symb;
		});
	},

    isEmptyObject: function (obj) {
	    for (var name in obj) {
	        return false;
	    }
	    return true;
	},

	query_param: function(obj, prefix) {
		var k, p, v, arr = [];
		for(p in obj) {
			k = prefix ? prefix + "[" + p + "]" : p;
			v = obj[p];
			arr.push(typeof v == "object" ?
				wot.utils.query_param(v, k) :
				encodeURIComponent(k) + "=" + encodeURIComponent(v));
		}
		return arr.join("&");
	},

	getParams: function (query) {
		var params = {};
		if (location.search) {
			var parts = query.split('&');

			parts.forEach(function (part) {
				var pair = part.split('=');
				pair[0] = decodeURIComponent(pair[0]);
				pair[1] = decodeURIComponent(pair[1]);
				params[pair[0]] = (pair[1] !== 'undefined') ?
					pair[1] : true;
			});
		}
		return params;
	}

};

wot.init();
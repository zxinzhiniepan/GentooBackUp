/*
	content/warning.js
	Copyright © 2009 - 2013  WOT Services Oy <info@mywot.com>

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

wot.warning = {
	minheight: 600,
	exit_mode: "back",
	wtip_shown_dt: null,    // time when welcome tip was shown (to measure time spent to read it)
	target: "",
	wrapper_id: "wotwrapper",
	warning_id: "wotwarning",

	make_categories_block: function (categories, options) {

        var tmpl = '';
//        console.log("make_categories_block", categories);

        if (!wot.utils.isEmptyObject(categories)) {
            var lst = [],
                ordered_cats = wot.rearrange_categories(categories).all;
            for (var k in ordered_cats) {
                var cat = ordered_cats[k], cid = cat.id,
                    cconf = wot.getlevel(wot.confidencelevels, cat.c).name,
                    css = wot.get_category_css(cid),
                    cat_name = wot.get_category_name(cid),
                    li = "<li class='cat-item " + css + " " + cconf + "'>" + cat_name + "</li>";
                if (cat_name) {
                    lst.push(li);
                }
            }

            tmpl = "<div class='ws-categories-title'>{REASONTITLE}</div>" +
                "<ul id='ws-categories-list'>" +
                    lst.join("") +
                "</ul>";
        }

        return tmpl;
    },

    make_blacklists: function(blacklists, options) {
		if(options.is_warning_light) {
			return "";
		}
        var bl = blacklists || [],
            tmpl = "";

        if (bl && bl.length > 0) {
            tmpl = "<div class='wot-blacklisting-info'>" +
                        "<div class='wot-blacklist'>" +
                            "<div class='wot-bl-decoration'>" +
                                "<div class='wot-comp-icon wot-bl-decoration-donut' r='{RATING0}'></div>" +
                            "</div>";

            // the blacklist is unordered. We can order it in later versions by time or by risk level.
            for (var i = 0, bl_type=""; i < 5; i++) {
                if (bl.length > i) {
                    bl_type = wot.i18n("bl", bl[i].type);
                    bl_type = bl_type ? bl_type : wot.i18n("bl", "other");

                    tmpl += "<div class='wot-bl-verdict'>" + bl_type + "</div>"
                } else {
                    tmpl += "<div class='wot-bl-verdict empty'></div>";
                }
            }

            tmpl += "</div></div>";
        }

        return tmpl;
    },

	make_warning_icon: function(options) {
		if(options.is_warning_light) {
			return "<span class='warning-icon'></span>";
		}
		return "";
	},

    make_warning: function (categories, blacklists, options) {
		var wot_warning = "<div id='wotcontainer' class='wotcontainer {CLASS} {ACCESSIBLE} {BL_OR_REP} notranslate'>" +
			"<div class='wot-innercontainer'>" +
				"<div class='wot-logo'></div>" +
				"<div class='wot-warning'>" + this.make_warning_icon(options) + "{WARNING}</div>" +
				"<div class='wot-title'>{TITLE}</div>" +
				"<div id='wot-wt-warning-wrapper' style='display: none;'>" +
					"<div class='wot-wt-warning-content'>" +
						"<div id='wt-logo' class='wot-wt-logo'>&nbsp;</div>" +
						"<div>{WT_CONTENT}</div>" +
						"<div><label><input id='wt-warn-turnoff' type='checkbox' class='wot-checkbox' /> {WT_WARN_TURNOFF}</label></div>" +
						"<div class='wot-wt-warn-footer'>" +
							"<div id='wt-warn-ok' class='wot-wt-button wot-wt-warn-button'>{WT_BUTTON}</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='wot-desc'>{DESC}</div>" +

				this.make_blacklists(blacklists, options) +

				"<div class='wot-rep-components-wrapper'>" +
					"<div class='wot-rep-components'>" +
						"<div class='wot-component'>" +
							"<div class='wot-comp-name'>{RATINGDESC0}</div>" +
							"<div class='wot-rep-data'>" +
								"<div class='wot-comp-icon' r='{RATING0}'></div>" +
								"<div class='wot-rating-confidence' confidence='{CONFIDENCE0}'>" +
									"<div class='confidence-dot confidence-dot-1'></div>" +
									"<div class='confidence-dot confidence-dot-2'></div>" +
									"<div class='confidence-dot confidence-dot-3'></div>" +
									"<div class='confidence-dot confidence-dot-4'></div>" +
									"<div class='confidence-dot confidence-dot-5'></div>" +
								"</div>" +
								"<div class='rating-legend-wrapper'>" +
								"<div class='rating-legend' r='{RATING0}'>{RATINGEXPL0}</div>" +
								"</div>" +
							"</div>" +
						"</div>" +
						"<div class='wot-component'>" +
							"<div class='wot-comp-name'>{RATINGDESC4}</div>" +
							"<div class='wot-rep-data'>" +
								"<div class='wot-comp-icon' r='{RATING4}'></div>" +
								"<div class='wot-rating-confidence' confidence='{CONFIDENCE4}'>" +
									"<div class='confidence-dot confidence-dot-1'></div>" +
									"<div class='confidence-dot confidence-dot-2'></div>" +
									"<div class='confidence-dot confidence-dot-3'></div>" +
									"<div class='confidence-dot confidence-dot-4'></div>" +
									"<div class='confidence-dot confidence-dot-5'></div>" +
								"</div>" +
								"<div class='rating-legend-wrapper'>" +
									"<div class='rating-legend' r='{RATING4}'>{RATINGEXPL4}</div>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='ws-categories-area'>" +
					this.make_categories_block(categories, options) +
				"</div>"+
				"<div class='wot-openscorecard-wrap'>" +
					"<span class='wot-openscorecard'>{INFO}</span>" +
				"</div>" +
				"<div id='wot-warn-ratings'>"+
				"</div>" +
				"<div class='wot-rateit-wrap'>" +
					"<span>{RATETEXT}</span>" +
				"</div>" +
				"<div class='wot-buttons'>" +
					(options.parentalControl ? "" : "<div id='wot-btn-hide' class='wot-button'>{GOTOSITE}</div>") +
					"<div id='wot-btn-leave' class='wot-button'>{LEAVESITE}</div>" +
				"</div>" +
				"<div id='wot-android-app-footer'>" +
					"<div id='wot-android-app-text'>WOT is now available for Android!</div>" +
					"<div id='wot-android-app-btn'></div>" +
				"</div>" +
			"</div>" +
		"</div>";

		return wot_warning;
	},

	getheight: function () {
		try {
			if (window.innerHeight) {
				return window.innerHeight;
			}

			if (document.clientHeight) {
				return document.clientHeight;
			}

			if (document.body && document.body.clientHeight) {
				return document.body.clientHeight;
			}
		} catch (e) {
			console.log("warning.getheight: failed with " + e);
		}

		return -1;
	},

	set_exitmode: function() {
		if (window.history.length > 1) {
			wot.warning.exit_mode = "back"; // note: don't change this string, there are code dependent on it
		} else {
			wot.warning.exit_mode = "leave";
		}
	},

	enter_to_site: function (target) {
		wot.post("warnings", "enter_button", { target: target });
	},

	add: function(data, type_obj, show_wtip, isLight, parentalControl) {

		try {
			var reason = type_obj.reason;
			var wls = isLight ?"_light" : "";
			var is_warning_light = (type_obj.type == 1) || (type_obj.type == 3);

			if (!data.target || !data.cached || document.getElementById("wotwarning")) {
				return;
			}

			this.target = data.target;

			wot.warning.set_exitmode();

			var accessible = this.settings.accessible ? "accessible" : "";
			show_wtip = show_wtip || false;


            var normalized_target = (data.cached.value &&
                data.cached.value.normalized) ? data.cached.value.normalized : data.decodedtarget;

            var blacklists = (data.cached.value && data.cached.value.blacklist) ? data.cached.value.blacklist : [];
            var is_blacklisted = blacklists && blacklists.length > 0;
			var wt_text = wot.i18n("wt", "warning_text") || "";

            var info_link = (is_blacklisted && !is_warning_light) ? wot.i18n("bl", "information") : wot.i18n("warnings", "information");
            if (info_link.indexOf("<a>") < 0) {
                info_link = "<a>" + info_link + "</a>";
            }
            info_link = info_link.replace("<a>", "<a id='wotinfobutton' class='wot-link'>");


			var real = is_warning_light ? "&times;" : wot.i18n("warnings", "goto");

			var replaces = [
				{
				    from: "WARNING",
				    to: parentalControl ? wot.i18n("warnings", "blocked") : wot.i18n("warnings", "warning")
			    }, {
                    from: "BL_OR_REP",
                    to: is_blacklisted ? "blacklist": "reputation"
                }, {
					from: "TITLE",
					to: (normalized_target || "").replace(/[<>&="']/g, "")
				}, {
					from: "LANG",
					to: wot.i18n("lang")
				}, {
					from: "INFO",
					to: info_link
				}, {
					from: "GOTOSITE",
					to: is_warning_light ? "&times;" : wot.i18n("warnings", "goto")
				}, {
					from: "LEAVESITE",
					to: wot.i18n("warnings", wot.warning.exit_mode + wls)
				}, {
					from: "ACCESSIBLE",
					to: accessible
				}, {
					from: "WT_CONTENT",
					to: wot.utils.processhtml(wt_text, [{ from: "WT_LEARNMORE", to: wot.i18n("wt", "learnmore_link") }])
				},{
					from: "WT_WARN_TURNOFF",
					to: wot.i18n("wt", "warning_turnoff")
				}, {
					from: "WT_BUTTON",
					to: wot.i18n("wt", "warning_ok")
				}, {
					from: "NOREASONTITLE",
					to: wot.i18n("warnings", "noreasontitle")
				}
			];

			wot.components.forEach(function(item) {

				var cachedv = data.cached.value[item.name];

				var level = wot.getlevel(wot.reputationlevels,
								(cachedv && cachedv.r != null) ? cachedv.r : -1);

                var conf_level = wot.getlevel(wot.confidencelevels,
                    (cachedv && cachedv.c != null) ? cachedv.c : -1);

				replaces.push({
					from: "RATINGDESC" + item.name,
					to: wot.i18n("components", item.name)
				});
				replaces.push({
					from: "RATING" + item.name,
					to: level.name
				});
                replaces.push({
                    from: "CONFIDENCE" + item.name,
                    to: conf_level.name
                });
                replaces.push({
					from: "RATINGEXPL" + item.name,
					to: wot.i18n("reputationlevels", level.name) || "&nbsp;"
				});
			});

			var warnclass = "", rate_template = wot.i18n("warnings", "ratesite");

			if (this.getheight() < this.minheight) {
				warnclass = "wotnoratings";
			}

            if (is_blacklisted) { // If warning should show Blacklisted status
                replaces.push({ from: "CLASS", to: warnclass });

                var bl_description = blacklists.length == 1 ? wot.i18n("bl", "description") : wot.i18n("bl", "description_pl");
                replaces.push({ from: "DESC", to: bl_description });

            } else { // if Warning should show reputation reason
	            if (is_warning_light) {//parental control also
		            replaces.push({
			            from: "DESC",
			            to: wot.i18n("warnings", (wot.warning.data.value[0].r > wot.warning.settings.warning_level_0) ? "unknown" : "reputation" + wls)
		            });
		            replaces.push({from: "REASONTITLE", to: wot.i18n("warnings", "othersreasontitle" + wls)});
	            }
				else {
					if (reason == wot.warningreasons.reputation) {
						var reputation_message = data.hasOwnProperty("is_alt_url") && data.is_alt_url ? "reputation_redirect" : "reputation";
						replaces.push({from: "CLASS", to: warnclass});
						replaces.push({from: "DESC", to: wot.i18n("warnings", reputation_message + wls)});
						replaces.push({from: "REASONTITLE", to: wot.i18n("warnings", "reasontitle" + wls)});
					} else if (reason == wot.warningreasons.rating) {
						replaces.push({from: "CLASS", to: "wotnoratings"});
						replaces.push({from: "DESC", to: wot.i18n("warnings", "rating" + wls)});
						replaces.push({from: "REASONTITLE", to: wot.i18n("warnings", "othersreasontitle" + wls)});
						rate_template = wot.i18n("warnings", "reratesite" + wls);
					} else {
						replaces.push({from: "CLASS", to: warnclass});
						replaces.push({from: "DESC", to: wot.i18n("warnings", "unknown" + wls)});
						replaces.push({from: "REASONTITLE", to: ""});
					}
				}
            }

            // preprocess link "Rate the site"
            var rate_site = rate_template.replace("<a>", "<a id='wotrate-link' class='wot-link'>");

            replaces.push({ from: "RATETEXT", to: rate_site });

			var body = document.getElementsByTagName("body");

			if (!body || !body.length) {
				return;
			}

			// do nothing if style can't be attached
			if(wot.utils.attach_style("warning" + wls + ".css", "wot_warning_style") === false) {
				return;
			}

			var warning = document.createElement("div");
			var wrapper = document.createElement("div");

			if (!warning || !wrapper) {
				return;
			}

			warning.setAttribute("id", wot.warning.warning_id);

			var lightStyleLink = document.createElement("link");
			lightStyleLink.setAttribute("rel", "stylesheet");
			lightStyleLink.setAttribute("rel", chrome.extension.getURL("skin/include/warning" + (type_obj.type == 2 ? "" : "_light") + ".css"));
			lightStyleLink = body[0].appendChild(lightStyleLink);


			// For child safety we'll set opaque background on adult sites
			var data_4 = data.cached.value[4];
			if (data_4 && data_4.r != undefined && data_4.c != undefined ) {
				if(data_4.r <= this.settings.warning_level_4 && data_4.c >= this.settings.min_confidence_level) {
					this.settings.warning_opacity = 1;
				}
			}

			// set opacity
			if (this.settings.warning_opacity &&
					Number(this.settings.warning_opacity) >= 0 &&
					Number(this.settings.warning_opacity) <= 1) {
				warning.setAttribute("style", "opacity: " +
					this.settings.warning_opacity + " ! important;");
			}

            var _cats = (data.cached.value && data.cached.value.cats) ? data.cached.value.cats : {},
                categories = wot.select_identified(_cats);

			wrapper.setAttribute("id", wot.warning.wrapper_id);

			warning = body[0].appendChild(warning);
			wrapper = body[0].appendChild(wrapper);

			wrapper.innerHTML = wot.utils.processhtml(this.make_warning(categories, blacklists, { is_warning_light, parentalControl }), replaces);

			document.getElementById("wot-android-app-footer").addEventListener("click", this.on_android_app_footer_clicked, false);

			var notification_type = type_obj.type == 2 ? "overlay" : "light";
			wot.post("warnings", "shown", { type: notification_type, target: data.decodedtarget });   // for counting in stats

            document.getElementById("wotinfobutton").addEventListener("click", wot.warning.on_info_link, false);

			document.getElementById("wot-btn-leave").addEventListener("click",function(e){
				wot.post("warnings", "leave_button", {label: wot.warning.exit_mode});
				if(wot.warning.exit_mode == "leave") {
					// close tab
					wot.post("tab","close", {});
				} else {
					var e_beforeunload = window.onbeforeunload;
					var back_timer = null;
					window.onbeforeunload = function() {
						if(back_timer) {
							window.clearTimeout(back_timer);
						}
						if(e_beforeunload) e_beforeunload(window);
					};
					window.history.back();

					back_timer = window.setTimeout(function() {
						// this is a trick: we don't know if there is a back-step possible if history.length>1,
						// so we simply wait for a short time, and if we are still on a page, then "back" is impossible and
						// we should go to blank page
						wot.post("tab","close", {});
					}, 100);
				}
			});

			document.getElementById("wot-btn-hide").addEventListener("click",
				function() {
					wot.warning.enter_to_site(data.target);
				} , false);

			document.getElementById("wotrate-link").addEventListener("click", wot.warning.on_rate_link, false);

			if (show_wtip && !is_warning_light) {
				window.setTimeout(wot.warning.show_welcometip, 500);
			}

		} catch (e) {
			console.log("warning.add: failed with " + e);
		}
	},

	on_android_app_footer_clicked: function() {
		var url = "https://play.google.com/store/apps/details?id=com.my.wot&referrer=utm_source%3DExtension%26utm_medium%3DWarningNotification";
		window.open(url,'_blank');
	},

	on_info_link: function () {
		wot.post("search", "openscorecard", { target: wot.warning.target, ctx: wot.urls.contexts.warnviewsc })
	},

	on_rate_link: function () {
		wot.post("search", "ratesite", { target: wot.warning.target, ctx: wot.urls.contexts.warnviewsc })
	},

	show_welcometip: function () {
		var wt = document.getElementById("wot-wt-warning-wrapper");
		if (wt) {

			// TODO: next lines (3 blocks of similar code) need to be refactored
			var btn_ok = document.getElementById("wt-warn-ok");
			if (btn_ok) {
				btn_ok.addEventListener("click", wot.warning.on_click);
			}

			var learnmore_link = document.getElementById("wt-learnmore-link");
			if (learnmore_link) {
				learnmore_link.addEventListener("click", wot.warning.on_learnmore);
			}

			var logo = document.getElementById("wt-logo");
			if (logo) {
				logo.addEventListener("click", wot.warning.on_logo);
			}

			wot.post("wtb", "wtip_shown", { target: wot.warning.target });
			wot.warning.wtip_shown_dt = new Date();
			wt.setAttribute("style", "display: block;");
		}
	},

	hide_welcometip: function () {
		var wt = document.getElementById("wot-wt-warning-wrapper");
		if (wt) {
			wt.setAttribute("style", "display: none;");
		}
	},

	on_click: function (elem) {
		wot.warning.hide_welcometip();
		var read_time = Math.round(wot.time_since(wot.warning.wtip_shown_dt)),
			optout = false,
			target = wot.warning.target;

		var chk = document.getElementById("wt-warn-turnoff");
		if (chk) {
			optout = chk.checked || false;

			if (optout) {
				wot.warning.enter_to_site(target);
			}
		}

		// report that OK was clicked and provide status of "opt-out" control
		wot.post("wtb", "wtip_ok", { read_time: read_time, optout: optout, target: target });
	},

	on_learnmore: function (elem) {
		wot.warning.hide_welcometip();
		// report that the link was clicked
		wot.post("wtb", "wtip_info", { "elem": "learn_more" });
	},

	on_logo: function (elem) {
		wot.warning.hide_welcometip();
		// report that the link was clicked
		wot.post("wtb", "wtip_info", { "elem": "logo" });
	},

	onload: function()
	{
		wot.detect_environment(true);
		wot.bind("message:warnings:show", function(port, data) {
			var isLight = data.settings.warning_type_0 == 1,
				parentalControl = data.settings.warning_type_4 === 3;

			wot.warning.data = data.data.cached;
			wot.warning.settings = data.settings;
	        wot.init_categories(data.settings);
			wot.warning.add(data.data, data.type, data.show_wtip, isLight, parentalControl);
			wot.listen(["warning", "wt"]);
		});

		wot.post("warnings", "ready", {});  // report to BG that frame's content is loaded and ready to be shown
	}
};

wot.warning.onload();


/*
	prefs.js
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

$.extend(wot, { prefs: {
	defaults: {
		/* setting names are the same for each platform, don't change */
		accessible:				false,
		min_confidence_level:	wot.confidencelevels[2].min + 2,
		my_cookies:				true,
		popup_hide_delay:		200,
		popup_show_delay:		200,
		search_ignore_0:		false,
		search_ignore_1:		false,
		search_ignore_2:		false,
		search_ignore_4:		true,
		search_level:			wot.reputationlevels[5].min,
		search_type:			wot.searchtypes.optimized,
		search_showunknown:	    true,
		show_application_0:		true,
		show_application_1:		true,
		show_application_2:		true,
		show_application_4:		true,
		show_search_popup:		true,
		use_search_level:		false,
		ninja_donuts:           false,
		ninja_updateshown:      false,
		ninja_announceshown:    0,
		ninja_wave:             0,
		status_level:			"",
		warning_level_0:		wot.reputationlevels[4].min - 1,
		warning_level_1:		wot.reputationlevels[4].min - 1,
		warning_level_2:		wot.reputationlevels[4].min - 1,
		warning_level_4:		0,
		warning_opacity:		0.7,
		warning_type_0:			wot.warningtypes.overlay,
		warning_type_1:			wot.warningtypes.overlay,
		warning_type_2:			wot.warningtypes.overlay,
		warning_type_4:			wot.warningtypes.none,
		warning_unknown_0:		false,
		warning_unknown_1:		false,
		warning_unknown_2:		false,
		warning_unknown_4:		false,
		ratingwindow_shown:     0,   // how many times RatingWindow was opened
		rw_opened_sharing:      0,   // how many times RatingWindow was opened, used only for showing Share Screen.
		rw_sharing_shown:       0,   // how many times the Share screen was shown before
		wot_shared_on:          null,   // date when user clicked any of "share WOT" buttons
		activity_score:         0,
        show_fulllist:          false,  // Whether to show full list of categories on rating window selector
        super_wtips:            false,  // "super" settings for debug purpose: "Show welcome tips always"
        super_fbl:              false,   // "super" settings for debug purpose: "Show FBL always if question is available"
        super_showtestimonies:  false,

        settingsui_warnlevel:   "normal",   // this should not be considered by the add-on. Only to render prefs on the settings page
        settingsui_parental:    false,
        settingsui_searchlevel: "normal",
		settingsui_dynamicprotect: true,
        redirection_warning: 	false,
		"dynamic-protect-on": 1,
		"dynamic-protect-off": 0

    },

	set: function(name, value)
	{
		try {
			localStorage.setItem(name, JSON.stringify(value));
			wot.trigger("prefs:set", [ name, value ]);
			return true;
		} catch (e) {
			console.log("prefs.set: failed with " + e);
		}

		return false;
	},

	/* Overrides preferences depending on the environment */
	get_overrided_defaults: function(name)
	{
		var mailru_params,
			mailru_params_0 = { // for Mail.ru Internet Browser (warning for adult sites)
			"warning_level_4": 39,
			"warning_type_4": wot.warningtypes.overlay
		};

		var mailru_params_1 = {// for Mail.ru Amigo Browser (no warning for adult sites)
			"warning_level_4": 0,
			"warning_type_4": wot.warningtypes.none,
			search_level: wot.reputationlevels[5].min,
			use_search_level: true,
			search_showunknown: false,
			settingsui_searchlevel: "bad" // set UI settings to "Show poor reputation icons only"
		};

		if (wot.env.is_mailru) { // override only for MRU browser

			mailru_params = wot.env.is_mailru_amigo ? mailru_params_1 : mailru_params_0;

			if(mailru_params[name] !== undefined) {
				return mailru_params[name];
			}
		}

		return this.defaults[name];
	},

	get: function(name)
	{
		try {
			var value;

			try {
                var v = localStorage.getItem(name);
				value = v !== "undefined" ? JSON.parse(v) : undefined;
			} catch (e) {
			}

			if (value == null) {
				value = wot.prefs.get_overrided_defaults(name);
			}

			wot.trigger("prefs:get", [ name, value ]);
			return value;
		} catch (e) {
			console.log("prefs.get: failed with " + e);
		}

		return null;
	},

	clear: function(name)
	{
		try {
			localStorage.removeItem(name);
			wot.trigger("prefs:clear", [ name ]);
			return true;
		} catch (e) {
			console.log("prefs.clear: failed with " + e);
		}

		return false;
	},

	each: function(func, params)
	{
		if (typeof(func) != "function") {
			return;
		}

		params = params || [];

		for (var i = 0; i < localStorage.length; ++i) {
			var key = localStorage.key(i);

			var rv = func.apply(null,
						[ key, this.get(key) ].concat(params));

			if (rv) {
				return;
			}
		}
	},

	onload: function()
	{

		wot.bind("message:prefs:getm", function(port, data) {
			var values = {};

			data.names.forEach(function(item) {
				values[item] = wot.prefs.get(item);
			});

			port.post("putm", {
				values: values
			});
		});

		wot.bind("message:prefs:get", function(port, data) {
			port.post("put", {
				name: data.name,
				value: wot.prefs.get(data.name)
			});
		});

		wot.bind("message:prefs:set", function(port, data) {
			wot.prefs.set(data.name, data.value);
		});

		wot.bind("message:prefs:clear", function(port, data) {
			wot.prefs.clear(data.name);
		});

		wot.listen("prefs");
	}
}});

wot.prefs.onload();

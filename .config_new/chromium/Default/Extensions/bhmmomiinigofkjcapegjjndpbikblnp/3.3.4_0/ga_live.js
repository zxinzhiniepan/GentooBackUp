/*
	ga_live.js
	Copyright © 2009 - 2017 WOT Services Oy <info@mywot.com>

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

(function() {
	const CID_PREF_NAME = "cid";
	const LIVE_EVENT_DATE_FIRED_PREF_NAME = "live_event_date_fired";
	const GA_URL = "https://google-analytics.com/batch?";
	const SECOND = 1000;
	const MINUTE = SECOND * 60;
	const TEN_MINUTES = MINUTE * 10;

	const QUERY_PARAMS = {
		PROTOCOL_VERSION: 	{ KEY: "v", VALUE: 1 },
		HIT_TYPE: 			{ KEY: "t", VALUE: "event" },
		PROPRETY_ID: 		{ KEY: "tid", VALUE: "UA-2412412-12" },
		CID: 				{ KEY: "cid" },
		EVENT_CATEGORY: 	{ KEY: "ec", VALUE: "Settings" },
		EVENT_ACTION: { 
			KEY: "ea", 
			VALUES: {
				BASIC: "Basic",
				ADVANCED: "Advanced"
			}
		},
		EVENT_LABEL: 		{ KEY: "el" },
		DIMENSION: 			{ KEY: "cd" }
	};

	const DIMENSIONS = {
		ERROR_VALUE: "null",

		LOCALE: {
			INDEX: 1,
			NAME: "Locale",
			ACTION: "",
			LABEL: "User Language"
		},

		VERSION: {
			INDEX: 2,
			NAME: "Version",
			ACTION: "",
			LABEL: "Version Number"
		},

		RTP: {
			INDEX: 3,
			NAME: "Settings RTP",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.BASIC,
			LABEL: {
				ON: "RTP switched on",
				OFF: "RTP switched off"
			},
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		},

		WARNING: {
			INDEX: 4,
			NAME: "Settings Warning",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.BASIC,
			LABEL: {
				NORMAL: "Normal warnings",
				LIGHT: "Light warnings",
				OFF: "Warnings are off"
			},
			VALUES: {
				NORMAL: "Normal",
				LIGHT: "Light",
				OFF: "Off"
			}
		},

		PARENTAL_CONTROL: {
			INDEX: 5,
			NAME: "Settings Parental Control",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.BASIC,
			LABEL: {
				ON: "Parental control is on",
				OFF: "Parental control is off"
			},
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		},

		LINKS_DONUTS: {
			INDEX: 6,
			NAME: "Settings Links Donuts",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.BASIC,
			LABEL: {
				ON: "Reputation icons next to links are Always",
				ONLY_RED: "Reputation icons next to links are Only Red",
				OFF: "Reputation icons next to links are Off"
			},
			VALUES: {
				ON: "On",
				ONLY_RED: "Only Red",
				OFF: "Off"
			}
		},

		COOKIES: {
			INDEX: 7,
			NAME: "Settings Advanced Cookies",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.ADVANCED,
			LABEL: "Advanced Setting",
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		},

		POPUP: {
			INDEX: 8,
			NAME: "Settings Advanced PopUp",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.ADVANCED,
			LABEL: "Advanced Setting",
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		},

		COLOR_BLIND: {
			INDEX: 9,
			NAME: "Settings Advanced ColorBlind",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.ADVANCED,
			LABEL: "Advanced Setting",
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		},

		REDIRECT: {
			INDEX: 10,
			NAME: "Settings Advanced Redirect",
			ACTION: QUERY_PARAMS.EVENT_ACTION.VALUES.ADVANCED,
			LABEL: "Advanced Setting",
			VALUES: {
				ON: "On",
				OFF: "Off"
			}
		}
	};

	var event_timer = new function() {
		this.set_event_timer = function(send_event_fn) {
			setInterval(() => {
				this.attempt_sending(send_event_fn);
			}, TEN_MINUTES);
		};

		this.is_ready_to_fire = function() {
			var date_of_event_fired = this.get_date_of_event_fired();

			return !date_of_event_fired || !this.compare_dates();
		};

		this.attempt_sending = function(send_event_fn) {
			if (this.is_ready_to_fire()) {
				// console.log("sending event");
				send_event_fn();
				this.set_date_of_event_fired();
			}
		};

		this.get_current_day_of_month = function() {
			return (new Date()).getDate();
		};

		this.get_current_month = function() {
			return (new Date()).getMonth() + 1;
		};

		this.get_current_date = function() {
			var current_day = this.get_current_day_of_month();
			var current_month = this.get_current_month();

			return { d: current_day, m: current_month };
		};

		this.compare_dates = function() {
			var date_of_fired_event = this.get_date_of_event_fired();
			var current_date = this.get_current_date();
			// console.log(date_of_fired_event);
			// console.log(current_date);

			return date_of_fired_event.d === current_date.d &&
				date_of_fired_event.m === current_date.m;
		};

		this.set_date_of_event_fired = function() {
			var current_date = this.get_current_date();

			wot.prefs.set(LIVE_EVENT_DATE_FIRED_PREF_NAME, current_date);
		};

		this.get_date_of_event_fired = function() {
			return wot.prefs.get(LIVE_EVENT_DATE_FIRED_PREF_NAME);
		};
	};

	var conversion_map = new function() {
		this.settings_data = null;
		this.converted_data = null;

		this.get_converted_data = function(settings_data) {
			this.settings_data = settings_data;
			this.converted_data = {};

			this.converted_data["LOCALE"] = this.settings_data["LOCALE"];
			this.converted_data["VERSION"] = this.settings_data["VERSION"];

			this.set_dimension_with_on_off(
				"RTP", 
				DIMENSIONS.RTP.VALUES.ON, 
				DIMENSIONS.RTP.VALUES.OFF
			);

			this.set_warning();

			this.set_dimension_with_on_off(
				"PARENTAL_CONTROL", 
				DIMENSIONS.PARENTAL_CONTROL.VALUES.ON, 
				DIMENSIONS.PARENTAL_CONTROL.VALUES.OFF
			);

			this.set_links_donuts();

			this.set_dimension_with_on_off(
				"COOKIES", 
				DIMENSIONS.COOKIES.VALUES.ON, 
				DIMENSIONS.COOKIES.VALUES.OFF
			);

			this.set_dimension_with_on_off(
				"POPUP", 
				DIMENSIONS.POPUP.VALUES.ON, 
				DIMENSIONS.POPUP.VALUES.OFF
			);

			this.set_dimension_with_on_off(
				"COLOR_BLIND", 
				DIMENSIONS.COLOR_BLIND.VALUES.ON, 
				DIMENSIONS.COLOR_BLIND.VALUES.OFF
			);

			this.set_dimension_with_on_off(
				"REDIRECT", 
				DIMENSIONS.REDIRECT.VALUES.ON, 
				DIMENSIONS.REDIRECT.VALUES.OFF
			);			

			return this.converted_data;
		};

		this.set_dimension_with_on_off = function(dimension_name, on_value, off_value) {
			var dimension = this.settings_data[dimension_name];

			if (dimension === true) {
				dimension = on_value;
			} else if (dimension === false) {
				dimension = off_value;
			} else {
				dimension = DIMENSIONS.ERROR_VALUE;
			}

			this.converted_data[dimension_name] = encodeURIComponent(dimension);
		};

		this.set_warning = function() {
			var warning = this.settings_data["WARNING"];
			var value;

			if (warning === 0) {
				value = DIMENSIONS.WARNING.VALUES.OFF;
			} else if (warning === 1) {
				value = DIMENSIONS.WARNING.VALUES.LIGHT;
			} else if (warning === 2) {
				value = DIMENSIONS.WARNING.VALUES.NORMAL;
			} else {
				value = DIMENSIONS.ERROR_VALUE;
			}

			this.converted_data["WARNING"] = encodeURIComponent(value);
		};

		this.set_links_donuts = function() {
			var links_donuts = this.settings_data["LINKS_DONUTS"];
			var value; 

			if (links_donuts === "off") {
				value = DIMENSIONS.LINKS_DONUTS.VALUES.OFF;
			} else if (links_donuts === "bad") {
				value = DIMENSIONS.LINKS_DONUTS.VALUES.ONLY_RED;
			} else if (links_donuts === "normal") {
				value = DIMENSIONS.LINKS_DONUTS.VALUES.ON;
			} else {
				value = DIMENSIONS.ERROR_VALUE;
			}

			this.converted_data["LINKS_DONUTS"] = encodeURIComponent(value);
		};
	};

	var ga_live = new function() {
		this.cid = null;
		this.conversion_map = null;
		this.event_timer = null;

		this.init = function() {
			this.conversion_map = conversion_map;
			this.event_timer = event_timer;
			this.cid = this.get_cid();

			if (!this.cid) {
				this.set_cid();
				this.cid = this.get_cid();
			}

			this.event_timer.attempt_sending(this.send_event.bind(this));
			this.event_timer.set_event_timer(this.send_event.bind(this));
		};

		this.set_cid = function() {
			wot.prefs.set(CID_PREF_NAME, wot.api.generate_uuid_v4());
		};

		this.get_cid = function() {
			return wot.prefs.get(CID_PREF_NAME);
		};

		this.get_dimension_key = function(dimension_name) {
			if (DIMENSIONS.hasOwnProperty(dimension_name)) {
				return QUERY_PARAMS.DIMENSION.KEY + DIMENSIONS[dimension_name].INDEX;
			}

			throw new Error(`wot.ga_live.get_dimension_key: '${dimension_name}' is undefined`);
		};

		this.create_stringified_batched_events_request = function() {
			var settings_data = this.get_settings_data();
			var converted_data = this.conversion_map.get_converted_data(settings_data);
			var queries = this.get_queries_array(converted_data);
			var queries_string = queries.join("\r\n");

			// console.log(converted_data);
			// console.log(queries);

			return queries_string;
		};

		// used for batched events request
		this.get_queries_array = function(converted_data) {
			var queries = [];

			for (var key in converted_data) {
				var query = this.create_single_payload(
					DIMENSIONS[key].ACTION,			// event action value
					"",								// event label value
					{ 
						key: this.get_dimension_key(key),	// dimension key
						value: converted_data[key]			// dimension value
					}
				);

				queries.push(query);
			}

			return queries;
		};

		this.create_stringified_single_event_request = function() {
			var settings_data = this.get_settings_data();
			var converted_data = this.conversion_map.get_converted_data(settings_data);
			var dimension_array = this.get_dimensions_array(converted_data);
			var query_string = this.create_single_payload(null, null, { array: dimension_array });

			return query_string;
		};

		// used for a single event request
		this.get_dimensions_array = function(converted_data) {
			var dimension_array = [];

			for (var key in converted_data) {
				dimension_array.push({
					key: this.get_dimension_key(key),	// dimension key
					value: converted_data[key]			// dimension value					
				});
			}

			return dimension_array;
		};

		// dimensions should contain either a dimensions array - 'dimensions_array' or a single pair of
		//	dimension key/value - 'dimension_key', 'dimension_value'
		this.create_single_payload = function(
			event_action_value,
			event_label_value, 
			dimensions
		) {
			var dimension_array = dimensions.array || null;
			var dimension_key = dimensions.key || null;
			var dimension_value = dimensions.value || null;

			var query = `${QUERY_PARAMS.PROTOCOL_VERSION.KEY}=${QUERY_PARAMS.PROTOCOL_VERSION.VALUE}`;
			query += `&${QUERY_PARAMS.HIT_TYPE.KEY}=${QUERY_PARAMS.HIT_TYPE.VALUE}`;
			query += `&${QUERY_PARAMS.PROPRETY_ID.KEY}=${QUERY_PARAMS.PROPRETY_ID.VALUE}`;
			query += `&${QUERY_PARAMS.CID.KEY}=${this.cid}`;
			query += `&${QUERY_PARAMS.EVENT_CATEGORY.KEY}=${QUERY_PARAMS.EVENT_CATEGORY.VALUE}`;

			if (event_action_value) { 
				query += `&${QUERY_PARAMS.EVENT_ACTION.KEY}=${event_action_value}`; 
			}
			if (event_label_value) {
				query += `&${QUERY_PARAMS.EVENT_LABEL.KEY}=${event_label_value}`; 
			}

			if (dimension_array) {
				for (var dimension of dimension_array) {
					query += `&${dimension.key}=${dimension.value}`;
				}
			} else if (dimension_key && dimension_value) {
				query += `&${dimension_key}=${dimension_value}`;
			} else {
				throw new Error("ga_live.create_single_payload: dimensions are missing");
			}

			return query;
		};

		this.get_settings_data = function() {
			var settings_data = {};

			settings_data["LOCALE"] 		= chrome.i18n.getUILanguage();
			settings_data["VERSION"] 		= chrome.runtime.getManifest().version;
			settings_data["RTP"] 			= wot.prefs.get("settingsui_dynamicprotect"); // true / false
			settings_data["WARNING"] 		= wot.prefs.get("warning_type_0");	// 2 / 1 / 0
			settings_data["PARENTAL_CONTROL"] = wot.prefs.get("settingsui_parental");	// true / false
			settings_data["LINKS_DONUTS"] 	= wot.prefs.get("settingsui_searchlevel");	// off / bad / normal
			settings_data["COOKIES"] 		= wot.prefs.get("my_cookies");	// true / false
			settings_data["POPUP"] 			= wot.prefs.get("show_search_popup"); // true / false
			settings_data["COLOR_BLIND"] 	= wot.prefs.get("accessible");	// true / false
			settings_data["REDIRECT"] 		= wot.prefs.get("redirection_warning");	// true / false

			var exception_list = { "LOCALE": true };
			this.lower_case_settings_data(settings_data, exception_list);

			return settings_data;
		};

		this.lower_case_settings_data = function(settings_data, exception_list) {
			for (var key in settings_data) {
				// will not lower case what's in the exception_list
				if (exception_list.hasOwnProperty(key)) { continue; }

				var setting = settings_data[key];
				if (typeof setting === "string") {
					settings_data[key] = setting.toLowerCase();
				}
			}
		};

		this.send_event = function() {
			// var data = this.create_stringified_batched_events_request();	// for a batch event
			var data = this.create_stringified_single_event_request();

			var xhr = new XMLHttpRequest();

			xhr.open("POST", GA_URL, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(data);
		};
	};

	$.extend(wot, { ga_live });
})();
/*
 ga_retention.js
 Copyright © 2009 - 2017  WOT Services Oy <info@mywot.com>

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

(function () {
	const CID_PREF_NAME = "cid";
	const RETENTION_EVENT_DATA_PREF_NAME = "retention_event_data";
	const GA_URL = "https://google-analytics.com/batch?";

	const QUERY_PARAMS = {
		PROTOCOL_VERSION: 	{ KEY: "v", VALUE: 1 },
		HIT_TYPE: 			{ KEY: "t", VALUE: "event" },
		PROPRETY_ID: 		{ KEY: "tid", VALUE: "UA-2412412-14" },
		CID: 				{ KEY: "cid" },
		EVENT_CATEGORY: 	{ KEY: "ec", VALUE: "General" },
		EVENT_ACTION: 		{ KEY: "ea", VALUE: "Retained {xDay}" },
		EVENT_LABEL: 		{ KEY: "el", VALUE: "" }
	};

	class Retention {
		constructor(conf) {
			this.Storage = conf.Storage;
			this.TrackGAEvents = conf.TrackGAEvents;
			this.lastRetentionDay = 28;
			this.minHoursFromInstall = 8;

			var data = this.Storage.requestGet();
			this.data = this.initialize(data);
			this.report();
		}

		initialize(data) {
			if (data && data.installDate && data.sentDays) {
				return data;
			} else {
				data = data || {};
				if (!data.installDate) {
					data.installDate = new Date(wot.prefs.get("firstrun:time")) / 1 || Date.now();
				}
				data.sentDays = data.sentDays || {};

				this.Storage.requestSet(data);
				return data;
			}
		}

		report() {
			if (!this.data.completed) {
				setTimeout(this.report.bind(this), 1000 * 60 * 60);

				let now = new Date();
				let installDate = new Date(this.data.installDate);
				// console.log(installDate);

				let installStart = this.getDateStart(installDate);
				// console.log(installStart);

				let todayStart = this.getDateStart(now);
				// console.log(todayStart);
				
				let msStartDiff = Math.abs(todayStart - installStart);
				// console.log(msStartDiff);
				
				let hoursFromTrueInstall = Math.floor((now - installDate) / (1000 * 60 * 60));
				// console.log(hoursFromTrueInstall);
				let daysDiff = Math.floor(msStartDiff / (1000 * 60 * 60 * 24));
				// console.log(daysDiff);

				if (daysDiff > 0 && daysDiff <= this.lastRetentionDay) {
					if (!this.data.sentDays[daysDiff] && hoursFromTrueInstall > this.minHoursFromInstall) {
						this.TrackGAEvents(daysDiff);

						this.data.sentDays[daysDiff] = true;
						this.Storage.requestSet(this.data);
					}
				} else if (daysDiff > this.lastRetentionDay) {
					this.data.completed = true;

					this.Storage.requestSet(this.data);
				}
			}
		}

		getDateStart(date) {
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				(date.getHours() >= 0 && date.getHours() < 5) ? date.getDate() - 1 : date.getDate(),
				5, 0, 1
			); //day starts at 5AM
		}
	}	

	var ga_retention = new function() {
		this.cid = null;

		this.init = function() {
			if (wot.ga.disable) { return; }

			this.cid = this.getCid();

			if (!this.cid) {
				this.setCid();
				this.cid = this.getCid();
			}

			this.createRetention();
		};

		this.createRetention = function() {
			try {
				new Retention({
					Storage: {
						requestGet: function() {
							return wot.prefs.get(RETENTION_EVENT_DATA_PREF_NAME);
						},

						requestSet: function(data) {
							wot.prefs.set(RETENTION_EVENT_DATA_PREF_NAME, data);
						}
					},
					TrackGAEvents: function(xDay) {
						var eventActionValue = QUERY_PARAMS.EVENT_ACTION.VALUE.replace("{xDay}", xDay);
						var extensionVersion = chrome.runtime.getManifest().version;	// eventLabelValue

						eventActionValue = encodeURIComponent(eventActionValue);
						extensionVersion = encodeURIComponent(extensionVersion);

						ga_retention.sendEvent(eventActionValue, extensionVersion);
					}
				});
			} catch (e) {
				console.error("ga_retention event failed with", e);
			}
		};

		this.getCid = function() {
			return wot.prefs.get(CID_PREF_NAME);
		};

		this.setCid = function() {
			wot.prefs.set(CID_PREF_NAME, wot.api.generate_uuid_v4());
		};	

		this.sendEvent = function(eventActionValue, eventActionLabel) {
			var data = this.createSinglePayload(eventActionValue, eventActionLabel);

			var xhr = new XMLHttpRequest();

			xhr.open("POST", GA_URL, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(data);
		};

		this.createSinglePayload = function(eventActionValue, eventActionLabel) {
			var query = `${QUERY_PARAMS.PROTOCOL_VERSION.KEY}=${QUERY_PARAMS.PROTOCOL_VERSION.VALUE}`;
			query += `&${QUERY_PARAMS.HIT_TYPE.KEY}=${QUERY_PARAMS.HIT_TYPE.VALUE}`;
			query += `&${QUERY_PARAMS.PROPRETY_ID.KEY}=${QUERY_PARAMS.PROPRETY_ID.VALUE}`;
			query += `&${QUERY_PARAMS.CID.KEY}=${this.cid}`;
			query += `&${QUERY_PARAMS.EVENT_CATEGORY.KEY}=${QUERY_PARAMS.EVENT_CATEGORY.VALUE}`;

			if (eventActionValue) { 
				query += `&${QUERY_PARAMS.EVENT_ACTION.KEY}=${eventActionValue}`; 
			}
			if (eventActionLabel || eventActionLabel === "") {
				query += `&${QUERY_PARAMS.EVENT_LABEL.KEY}=${eventActionLabel}`;
			}

			return query;
		};
	};

	$.extend(wot, { ga_retention });
})();
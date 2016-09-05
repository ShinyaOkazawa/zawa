'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZAWA = ZAWA || {};

(function () {
	'use strict';

	var Utility = function () {
		function Utility() {
			_classCallCheck(this, Utility);

			this._ua = window.navigator.userAgent.toLowerCase();
			this._ver = window.navigator.appVersion.toLowerCase();
		}

		_createClass(Utility, [{
			key: 'isMobile',
			value: function isMobile() {
				// target mobile
				// windows phone, iphone, ipod, android, firefox OS, blackberry
				return this._ua.indexOf('windows') !== -1 && this._ua.indexOf('phone') !== -1 || this._ua.indexOf('iphone') !== -1 || this._ua.indexOf('ipod') !== -1 || this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') !== 1 || this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('mobile') !== -1 || this._ua.indexOf('blackberry') !== -1;
			}
		}, {
			key: 'isTablet',
			value: function isTablet() {
				return this._ua.indexOf('windows') !== -1 && this._ua.indexOf('touch') !== -1 && this._indexOf('tablet pc') !== -1 || this._ua.indexOf('ipad') !== -1 || this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') === -1 || this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('tablet') !== -1 || this._ua.indexOf('kindle') !== -1 || this._ua.indexOf('silk') !== -1 || this._ua.indexOf('playbook') !== -1;
			}
		}, {
			key: 'isMSIE',
			value: function isMSIE() {
				return this._ua.indexOf('msie') !== -1 && this._ua.indexOf('opera') === -1;
			}
		}, {
			key: 'isIE8',
			value: function isIE8() {
				return this.isMSIE() && this._ver.indexOf('msie 8.') !== -1;
			}
		}, {
			key: 'isIE9',
			value: function isIE9() {
				return this.isMSIE() && this._ver.indexOf('msie 9.') !== -1;
			}
		}, {
			key: 'isIE10',
			value: function isIE10() {
				return this.isMSIE() && this._ver.indexOf('msie 10.') !== -1;
			}
		}, {
			key: 'isIE11',
			value: function isIE11() {
				return this._ua.indexOf('trident/7') !== -1 && !this.isMSIE();
			}
		}, {
			key: 'isEdge',
			value: function isEdge() {
				return this._ua.indexOf('edge') !== -1;
			}
		}, {
			key: 'isChrome',
			value: function isChrome() {
				return this._ua.indexOf('chrome') !== -1 && this._ua.indexOf('edge') === -1;
			}
		}, {
			key: 'isFirefox',
			value: function isFirefox() {
				return this._ua.indexOf('firefox') !== -1;
			}
		}, {
			key: 'isSafari',
			value: function isSafari() {
				return this._ua.indexOf('safari') !== -1 && this._ua.indexOf('chrome') === -1;
			}
		}]);

		return Utility;
	}();

	ZAWA.Utility = new Utility();

	$(function () {
		console.log(window.navigator.userAgent);
		console.log(ZAWA.Utility.isSafari());
	});
})();
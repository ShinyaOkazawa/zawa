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
		}]);

		return Utility;
	}();

	ZAWA.Utility = new Utility();

	$(function () {

		console.log(ZAWA.Utility.isTablet());
	});
})();
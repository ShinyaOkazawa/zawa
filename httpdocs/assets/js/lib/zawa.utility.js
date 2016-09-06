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

			this._$html = $('html');
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
			key: 'isiPhone',
			value: function isiPhone() {
				return this._ua.indexOf('iphone') !== -1;
			}
		}, {
			key: 'isiPad',
			value: function isiPad() {
				return this._ua.indexOf('ipad') !== -1;
			}
		}, {
			key: 'isAndroid',
			value: function isAndroid() {
				return this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') !== -1;
			}
		}, {
			key: 'isAndroidTablet',
			value: function isAndroidTablet() {
				return this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') === -1;
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
			key: 'isIE',
			value: function isIE() {
				return this.isMSIE() || this.isIE11();
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
		}, {
			key: 'isOpera',
			value: function isOpera() {
				return this._ua.indexOf('opera') !== -1;
			}
		}, {
			key: 'setUAClass',
			value: function setUAClass() {

				if (this.isMobile()) this._$html.addClass('mobile');
				if (this.isTablet()) this._$html.addClass('tablet');
				if (this.isiPhone()) this._$html.addClass('iphone');
				if (this.isiPad()) this._$html.addClass('ipad');
				if (this.isAndroid()) this._$html.addClass('android');
				if (this.isAndroidTablet()) this._$html.addClass('androidtablet');
				if (this.isIE8()) this._$html.addClass('ie8');
				if (this.isIE9()) this._$html.addClass('ie9');
				if (this.isIE10()) this._$html.addClass('ie10');
				if (this.isIE11()) this._$html.addClass('ie11');
				if (this.isIE()) this._$html.addClass('ie');
				if (this.isEdge()) this._$html.addClass('edge');
				if (this.isChrome()) this._$html.addClass('chrome');
				if (this.isFirefox()) this._$html.addClass('firefox');
				if (this.isSafari()) this._$html.addClass('safari');
				if (this.isOpera()) this._$html.addClass('opera');
			}
		}]);

		return Utility;
	}();

	ZAWA.Utility = new Utility();

	$(function () {
		ZAWA.Utility.setUAClass();
	});
})();

(function () {
	'use strict';

	var PageView = function () {
		function PageView() {
			_classCallCheck(this, PageView);

			this._responsiveMode = null;
			this._$html = $('html');
			this._$head = $('head');
		}

		_createClass(PageView, [{
			key: 'setResponsiveClass',
			value: function setResponsiveClass() {
				var mode = this._$head.css('font-family');
				if (mode === 'pc') {
					this._$html.removeClass('modeSD');
					this._$html.addClass('modePC');
				} else {
					this._$html.removeClass('modePC');
					this._$html.addClass('modeSD');
				}
			}
		}]);

		return PageView;
	}();

	ZAWA.PageView = new PageView();

	$(function () {
		ZAWA.PageView.setResponsiveClass();
	});
})();
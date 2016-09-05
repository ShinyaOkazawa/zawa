let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Utility{
		constructor(){
			this._ua = window.navigator.userAgent.toLowerCase();
			this._ver = window.navigator.appVersion.toLowerCase();
		}

		isMobile(){
			// target mobile
			// windows phone, iphone, ipod, android, firefox OS, blackberry
			return (this._ua.indexOf('windows') !== -1 && this._ua.indexOf('phone') !== -1)
				|| this._ua.indexOf('iphone') !== -1
				|| this._ua.indexOf('ipod') !== -1
				|| (this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') !== 1)
				|| (this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('mobile') !== -1)
				|| this._ua.indexOf('blackberry') !== -1;
		}

		isTablet(){
			return (this._ua.indexOf('windows') !== -1 && this._ua.indexOf('touch') !== -1 && this._indexOf('tablet pc') !== -1)
				|| this._ua.indexOf('ipad') !== -1
				|| (this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') === -1)
				|| (this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('tablet') !== -1)
				|| this._ua.indexOf('kindle') !== -1
				|| this._ua.indexOf('silk') !== -1
				|| this._ua.indexOf('playbook') !== -1;
		}

		isMSIE(){
			return this._ua.indexOf('msie') !== -1 && this._ua.indexOf('opera') === -1;
		}

		isIE8(){
			return this.isMSIE() && this._ver.indexOf('msie 8.') !== -1;
		}

		isIE9(){
			return this.isMSIE() && this._ver.indexOf('msie 9.') !== -1;
		}

		isIE10(){
			return this.isMSIE() && this._ver.indexOf('msie 10.') !== -1;
		}

		isIE11(){
			return this._ua.indexOf('trident/7') !== -1 && !this.isMSIE();
		}

		isEdge(){
			return this._ua.indexOf('edge') !== -1;
		}

		isChrome(){
			return this._ua.indexOf('chrome') !== -1 && this._ua.indexOf('edge') === -1;
		}

		isFirefox(){
			return this._ua.indexOf('firefox') !== -1;
		}

		isSafari(){
			return this._ua.indexOf('safari') !== -1 && this._ua.indexOf('chrome') === -1;
		}

	}
	ZAWA.Utility = new Utility;


	$(function(){
		console.log(window.navigator.userAgent);
		console.log(ZAWA.Utility.isSafari());

	});

}());

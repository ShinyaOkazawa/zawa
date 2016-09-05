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

		isiPhone(){
			return this._ua.indexOf('iphone') !== -1;
		}

		isiPad(){
			return this._ua.indexOf('ipad') !== -1;
		}

		isAndroid(){
			return this._ua.indexOf('android') !==  -1 && this._ua.indexOf('mobile') !== -1;
		}

		isAndroidTablet(){
			return this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') === -1;
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

		isIE(){
			return this.isMSIE() || this.isIE11();
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

		isOpera(){
			return this._ua.indexOf('opera') !== -1;
		}

		setClassToHTML(){
			let html = document.querySelector('html'),
				classList = [];

			classList = html.className.split(' ');

			let joinedList;

			if(this.isMobile()) classList.push('mobile');
			if(this.isTablet()) classList.push('tablet');
			if(this.isiPhone()) classList.push('iphone');
			if(this.isiPad()) classList.push('ipad');
			if(this.isAndroid()) classList.push('android');
			if(this.isAndroidTablet()) classList.push('androidtablet');
			if(this.isIE8()) classList.push('ie8');
			if(this.isIE9()) classList.push('ie9');
			if(this.isIE10()) classList.push('ie10');
			if(this.isIE11()) classList.push('ie11');
			if(this.isIE()) classList.push('ie');
			if(this.isEdge()) classList.push('edge');
			if(this.isChrome()) classList.push('chrome');
			if(this.isFirefox()) classList.push('firefox');
			if(this.isSafari()) classList.push('safari');
			if(this.isOpera()) classList.push('opera');

			joinedList = classList.join(' ').trim();

			html.className = joinedList;
		}

	}
	ZAWA.Utility = new Utility;


	$(function(){
		ZAWA.Utility.setClassToHTML();
	});

}());

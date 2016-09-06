let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Utility{
		constructor(){
			this._ua = window.navigator.userAgent.toLowerCase();
			this._ver = window.navigator.appVersion.toLowerCase();

			this._$html = $('html');
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

		setUAClass(){

			if(this.isMobile()) this._$html.addClass('mobile');
			if(this.isTablet()) this._$html.addClass('tablet');
			if(this.isiPhone()) this._$html.addClass('iphone');
			if(this.isiPad()) this._$html.addClass('ipad');
			if(this.isAndroid()) this._$html.addClass('android');
			if(this.isAndroidTablet()) this._$html.addClass('androidtablet');
			if(this.isIE8()) this._$html.addClass('ie8');
			if(this.isIE9()) this._$html.addClass('ie9');
			if(this.isIE10()) this._$html.addClass('ie10');
			if(this.isIE11()) this._$html.addClass('ie11');
			if(this.isIE()) this._$html.addClass('ie');
			if(this.isEdge()) this._$html.addClass('edge');
			if(this.isChrome()) this._$html.addClass('chrome');
			if(this.isFirefox()) this._$html.addClass('firefox');
			if(this.isSafari()) this._$html.addClass('safari');
			if(this.isOpera()) this._$html.addClass('opera');

		}

	}
	ZAWA.Utility = new Utility;


	$(function(){
		ZAWA.Utility.setUAClass();
	});

}());

(function(){
	'use strict';

	class PageView{
		constructor(){
			this._responsiveMode = null;
			this._$html = $('html');
			this._$head = $('head');
		}

		setResponsiveClass(){
			let mode = this._$head.css('font-family');
			if(mode === 'pc'){
				this._$html.removeClass('modeSD');
				this._$html.addClass('modePC');
			} else {
				this._$html.removeClass('modePC');
				this._$html.addClass('modeSD');
			}
		}

	}
	ZAWA.PageView = new PageView;


	$(function(){
		ZAWA.PageView.setResponsiveClass();
	});

}());

let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Utility{
		constructor(){
			this._ua = window.navigator.userAgent.toLowerCase();
		}

		isMobile(){
			// target mobile
			// windows phone, iphone, ipod, android, firefox OS, blackberry
			return (this._ua.indexOf('windows') !== -1 && this._ua.indexOf('phone') !== -1)
				|| this._ua.indexOf('iphone') !== -1
				|| this._ua.indexOf('ipod') !== -1
				|| (this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') !== 1)
				|| (this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('mobile') !== -1)
				|| this._ua.indexOf('blackberry') !== -1
		}

		isTablet(){
			return (this._ua.indexOf('windows') !== -1 && this._ua.indexOf('touch') !== -1 && this._indexOf('tablet pc') !== -1)
				|| this._ua.indexOf('ipad') !== -1
				|| (this._ua.indexOf('android') !== -1 && this._ua.indexOf('mobile') === -1)
				|| (this._ua.indexOf('firefox') !== -1 && this._ua.indexOf('tablet') !== -1)
				|| this._ua.indexOf('kindle') !== -1
				|| this._ua.indexOf('silk') !== -1
				|| this._ua.indexOf('playbook') !== -1
		}

	}
	ZAWA.Utility = new Utility;


	$(function(){
		
		console.log(ZAWA.Utility.isTablet());

	});

}());

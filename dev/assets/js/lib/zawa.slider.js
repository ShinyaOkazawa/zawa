let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Slider{
		constructor($container){
			this._$slider = $container;
			this._$inner = this._$slider.children();
			this._$slides = this._$inner.children();
			this._$slideList = this._$slides.children();
			this._$pagerPrev = this._$slider.find('.pager__btn--prev a');
			this._$pagerNext = this._$slider.find('.pager__btn--next a');
			this._slideLen = this._$slideList.length;
			$container = null;

			this._init();
		}

		_init(){
			this._setSlidesWidth();

		}

		_setSlidesWidth(){
			let slideW = this._$slideList.eq(0).width();
			console.log(slideW);
		}

	}
	ZAWA.Slider = Slider;
}());

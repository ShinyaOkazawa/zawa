let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Slider{
		constructor($container){
			this._$slider = $container;
			this._$inner = this._$slider.find('.slider__inner');
			this._$slides = this._$inner.find('.slider__slides');
			this._$slideList = this._$slides.find('.slide__item');
			this._$pagerPrev = this._$slider.find('.pager__btn--prev a');
			this._$pagerNext = this._$slider.find('.pager__btn--next a');
			this._slideLen = this._$slideList.length;
			this._windowW = 0;
			$container = null;

			this._init();
		}

		_init(){
			this._getWindowW();
			this._setSlidesWidth();
			this._onEvent();
		}

		_onEvent(){
			this._$pagerNext.on('click', () => { this._next(); });
			this._$pagerPrev.on('click', () => { this._prev(); });
		}

		_getWindowW(){
			this._windowW = window.innerWidth;
		}

		_setSlidesWidth(){
			this._$slideList.width(this._windowW);
		}

		_next(){

		}

		_prev(){

		}

	}
	ZAWA.Slider = Slider;
}());

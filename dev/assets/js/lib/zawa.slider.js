let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Slider{
		constructor($container){
			this._$slider = $container;
			this._$inner = this._$slider.children();
			this._$slides = this._$inner.children();
			this._$slideList = this._$slides.children();
			$container = null;

			this._isOnTarget = false;
			this._isOnRight = false;
			this._isOnLeft = false;

			this._currentDirection = null;

			this._onLeftClass = 'is-left'
			this._onRightClass = 'is-right';

			this._init();
		}

		_init(){
			let mouseMoveEvent = new ZAWA.Throttle(100, this._onMouseMove.bind(this));

			this._setLayer();

			this._$slider.on('mouseover', this._onMouseOver.bind(this));
			this._$slider.on('mouseleave', this._onMouseLeave.bind(this));
			this._$slider.on('mousemove', mouseMoveEvent.run.bind(this));
			this._$slider.on('click', this._onClick.bind(this));
		}

		_setLayer(){
			let len = this._$slideList.length;

			this._$slideList.each(function(i){
				var $this = $(this);
				$this.css({ 'z-index': len - i });
			});
		}

		_setDirectionClass(){
			if(this._currentDirection === 'left'){
				if(!this._$slider.hasClass(this._onLeftClass)){
					this._$slider.removeClass(this._onRightClass);
					this._$slider.addClass(this._onLeftClass);
				}
			} else if(this._currentDirection === 'right'){
				if(!this._$slider.hasClass(this._onRightClass)){
					this._$slider.removeClass(this._onLeftClass);
					this._$slider.addClass(this._onRightClass);
				}
			}
		}

		_getDirection(e){
			let threshold = this._$slider.outerWidth() / 2,
				offset = e.offsetX;
			// on right
			if(offset > threshold){
				return 'right';
			// onleft
			} else {
				return 'left';
			}
		}

		_onMouseOver(e){
			this._isOnTarget = true;
		}

		_onMouseLeave(){
			this._isOnTarget = false;
		}

		_onMouseMove(e){
			this._currentDirection = this._getDirection(e);
			this._setDirectionClass();
		}

		_onClick(){
			if(this._$slider.hasClass(this._onLeftClass)){

			} else if(this._$slider.hasClass(this._onRightClass)){
			// http://tokyocatspecialists.jp/
			}

			return false;
		}
	}
	ZAWA.Slider = Slider;
}());

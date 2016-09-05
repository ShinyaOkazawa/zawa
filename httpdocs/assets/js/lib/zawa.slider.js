'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZAWA = ZAWA || {};

(function () {
	'use strict';

	var Slider = function () {
		function Slider($container) {
			_classCallCheck(this, Slider);

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

		_createClass(Slider, [{
			key: '_init',
			value: function _init() {
				this._getWindowW();
				this._setSlidesWidth();
				this._onEvent();
			}
		}, {
			key: '_onEvent',
			value: function _onEvent() {
				var _this = this;

				this._$pagerNext.on('click', function () {
					_this._next();
				});
				this._$pagerPrev.on('click', function () {
					_this._prev();
				});
			}
		}, {
			key: '_getWindowW',
			value: function _getWindowW() {
				this._windowW = window.innerWidth;
			}
		}, {
			key: '_setSlidesWidth',
			value: function _setSlidesWidth() {
				this._$slideList.width(this._windowW);
			}
		}, {
			key: '_next',
			value: function _next() {}
		}, {
			key: '_prev',
			value: function _prev() {}
		}]);

		return Slider;
	}();

	ZAWA.Slider = Slider;
})();
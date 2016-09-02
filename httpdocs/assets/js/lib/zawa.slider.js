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
			this._$inner = this._$slider.children();
			this._$slides = this._$inner.children();
			this._$slideList = this._$slides.children();
			this._$pagerPrev = this._$slider.find('.pager__btn--prev a');
			this._$pagerNext = this._$slider.find('.pager__btn--next a');
			this._slideLen = this._$slideList.length;
			$container = null;

			this._init();
		}

		_createClass(Slider, [{
			key: '_init',
			value: function _init() {
				this._setSlidesWidth();
			}
		}, {
			key: '_setSlidesWidth',
			value: function _setSlidesWidth() {
				var slideW = this._$slideList.eq(0).width();
				console.log(slideW);
			}
		}]);

		return Slider;
	}();

	ZAWA.Slider = Slider;
})();
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
			$container = null;

			this._isOnTarget = false;
			this._isOnRight = false;
			this._isOnLeft = false;

			this._currentDirection = null;

			this._onLeftClass = 'is-left';
			this._onRightClass = 'is-right';

			this._init();
		}

		_createClass(Slider, [{
			key: '_init',
			value: function _init() {
				var mouseMoveEvent = new ZAWA.Throttle(100, this._onMouseMove.bind(this));

				this._setLayer();

				this._$slider.on('mouseover', this._onMouseOver.bind(this));
				this._$slider.on('mouseleave', this._onMouseLeave.bind(this));
				this._$slider.on('mousemove', mouseMoveEvent.run.bind(this));
				this._$slider.on('click', this._onClick.bind(this));
			}
		}, {
			key: '_setLayer',
			value: function _setLayer() {
				var len = this._$slideList.length;

				this._$slideList.each(function (i) {
					var $this = $(this);
					$this.css({ 'z-index': len - i });
				});
			}
		}, {
			key: '_setDirectionClass',
			value: function _setDirectionClass() {
				if (this._currentDirection === 'left') {
					if (!this._$slider.hasClass(this._onLeftClass)) {
						this._$slider.removeClass(this._onRightClass);
						this._$slider.addClass(this._onLeftClass);
					}
				} else if (this._currentDirection === 'right') {
					if (!this._$slider.hasClass(this._onRightClass)) {
						this._$slider.removeClass(this._onLeftClass);
						this._$slider.addClass(this._onRightClass);
					}
				}
			}
		}, {
			key: '_getDirection',
			value: function _getDirection(e) {
				var threshold = this._$slider.outerWidth() / 2,
				    offset = e.offsetX;
				// on right
				if (offset > threshold) {
					return 'right';
					// onleft
				} else {
					return 'left';
				}
			}
		}, {
			key: '_onMouseOver',
			value: function _onMouseOver(e) {
				this._isOnTarget = true;
			}
		}, {
			key: '_onMouseLeave',
			value: function _onMouseLeave() {
				this._isOnTarget = false;
			}
		}, {
			key: '_onMouseMove',
			value: function _onMouseMove(e) {
				this._currentDirection = this._getDirection(e);
				this._setDirectionClass();
			}
		}, {
			key: '_onClick',
			value: function _onClick() {
				if (this._$slider.hasClass(this._onLeftClass)) {} else if (this._$slider.hasClass(this._onRightClass)) {
					// http://tokyocatspecialists.jp/
				}

				return false;
			}
		}]);

		return Slider;
	}();

	ZAWA.Slider = Slider;
})();
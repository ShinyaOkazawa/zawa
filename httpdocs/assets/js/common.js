'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = Common || {};

(function () {
	'use strict';

	var View = function () {
		function View() {
			_classCallCheck(this, View);

			this._onResize();
			this._onLoad();
		}

		_createClass(View, [{
			key: '_onResize',
			value: function _onResize() {
				var resizeEvent = new ZAWA.Throttle(1000, function () {
					ZAWA.Controller.emit('resize');
				});
				console.log(resizeEvent);
				window.addEventListener('resize', resizeEvent.run.bind(this), false);
			}
		}, {
			key: '_onLoad',
			value: function _onLoad() {
				window.addEventListener('load', function () {
					ZAWA.Controller.emit('load');
				}, false);
			}
		}]);

		return View;
	}();

	return new View();
})();

(function () {})();
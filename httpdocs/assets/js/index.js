'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	'use strict';

	var Index = {};

	ZAWA.Controller.on('load', function () {
		// console.log(3);
	});
	// window.addEventListener('load', function(){
	// 	var throttle = new ZAWA.Throttle(500, hello);
	// 	var debounce = new ZAWA.Debounce(500, hello);
	//
	// 	$(window).on('resize', throttle.run);
	// 	$(window).on('resize', debounce.run);
	//
	// 	function hello(){
	// 		console.log('hello');
	// 	}
	// }, false);

	Index.View = function () {
		var View = function () {
			function View() {
				_classCallCheck(this, View);

				this._setUA();
			}

			_createClass(View, [{
				key: '_setUA',
				value: function _setUA() {
					var ua = ZAWA.Utility.getUA();
					console.log(ua);
				}
			}]);

			return View;
		}();

		return View;
	}();

	$(function () {
		// new Index.View();
	});
})();
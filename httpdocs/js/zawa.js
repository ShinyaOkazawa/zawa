"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// bind polyfill
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
		    fToBind = this,
		    fNOP = function fNOP() {},
		    fBound = function fBound() {
			return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
		};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	};
}

var ZAWA = ZAWA || {};

(function () {
	'use strict';

	var Controller = function () {
		function Controller() {
			_classCallCheck(this, Controller);

			this._listeners = [];
		}

		_createClass(Controller, [{
			key: "on",
			value: function on(event, func) {
				this._listeners.push({
					event: event,
					func: func
				});
			}
		}, {
			key: "emit",
			value: function emit(event) {
				this._listeners.forEach(function (obj) {
					if (event === obj.event) {
						obj.func.apply(null);
					}
				});
			}
		}, {
			key: "remove",
			value: function remove(event) {
				var i = 0,
				    len = this._listeners.length;
				for (; i < len; i++) {
					if (event === this._listeners[i].event) {
						this._listeners.splice(i, 1);
						return;
					}
				}
			}
		}]);

		return Controller;
	}();

	ZAWA.Controller = new Controller();
})();
(function () {
	'use strict';

	var Throttle = function () {
		function Throttle(interval, callback) {
			var _this = this;

			_classCallCheck(this, Throttle);

			this._interval = interval;
			this._callback = callback;
			this._lastTime = 0;

			this.run = function () {
				if (_this._lastTime + _this._interval <= new Date().getTime()) {
					_this._lastTime = new Date().getTime();
					_this._callback();
					return;
				}
			};

			this._init();
		}

		_createClass(Throttle, [{
			key: "_init",
			value: function _init() {
				this._lastTime = new Date().getTime() - this._interval;
			}
		}]);

		return Throttle;
	}();

	ZAWA.Throttle = Throttle;
})();

(function () {
	'use strict';

	var Debounce = function Debounce(interval, callback) {
		var _this2 = this;

		_classCallCheck(this, Debounce);

		this._interval = interval;
		this._callback = callback;
		this._timer = 0;

		this.run = function () {
			clearTimeout(_this2._timer);
			_this2._timer = setTimeout(function () {
				_this2._callback();
			}, _this2._interval);
		};
	};

	ZAWA.Debounce = Debounce;
})();
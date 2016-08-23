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
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

let ZAWA = ZAWA || {};

(function(){
	'use strict';

	class Controller{
		constructor(){
			this._listeners = [];
		}

		on(event, func){
			this._listeners.push({
				event: event,
				func: func
			});
		}

		emit(event){
			this._listeners.forEach((obj) => {
				if(event === obj.event){
					obj.func.apply(null);
				}
			});
		}

		remove(event){
			let i = 0,
				len = this._listeners.length;
			for(; i < len; i++){
				if(event === this._listeners[i].event){
					this._listeners.splice(i, 1);
					return;
				}
			}
		}
	}
	ZAWA.Controller = new Controller;

}());
(function(){
	'use strict';

	class Throttle{
		constructor(interval, callback){
			this._interval = interval;
			this._callback = callback;
			this._lastTime = 0;

			this.run = () => {
				if((this._lastTime + this._interval) <= new Date().getTime()){
					this._lastTime = new Date().getTime();
					this._callback();
					return;
				}
			};

			this._init();
		}

		_init(){
			this._lastTime = new Date().getTime() - this._interval;
		}
	}
	ZAWA.Throttle = Throttle;

}());

(function(){
	'use strict';

	class Debounce{
		constructor(interval, callback){
			this._interval = interval;
			this._callback = callback;
			this._timer = 0;

			this.run = () => {
				clearTimeout(this._timer);
				this._timer = setTimeout(()=>{
					this._callback();
				}, this._interval);
			};
		}
	}
	ZAWA.Debounce = Debounce;
}());

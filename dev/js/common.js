let Common = Common || {};

(function(){
	'use strict';

	class View{
		constructor(){
			this._onResize();
			this._onLoad();
		}

		_onResize(){
			let resizeEvent = new ZAWA.Throttle(1000, function(){
				ZAWA.Controller.emit('resize');
			});
			window.addEventListener('resize', resizeEvent.run, false);
		}

		_onLoad(){
			window.addEventListener('load', function(){
				ZAWA.Controller.emit('load');
			}, false);
		}
	}

	return new View();
}());

(function(){
	'use strict';

}());

'use strict';

(function () {
	'use strict';

	ZAWA.Controller.on('load', function () {
		console.log(3);
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
})();
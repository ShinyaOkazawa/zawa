(function(){
	'use strict';

	let Index = {};

	ZAWA.Controller.on('load', function(){
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

	Index.View = (function(){

		class View{
			constructor(){
				this._setUA();
			}

			_setUA(){
				let ua = ZAWA.Utility.getUA();
				console.log(ua);
			}
		}

		return View;
	}());

	$(function(){
		// new Index.View();
	});

}());

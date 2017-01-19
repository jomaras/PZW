/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Counter_1 = __webpack_require__(2);
	var counter = new Counter_1.default();
	counter.increment();
	var newParagraph = document.createElement("p");
	newParagraph.textContent = counter.currentNumber + "";
	document.getElementsByTagName("body")[0].appendChild(newParagraph);


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Counter = (function () {
	    function Counter() {
	        this.currentNumber = 0;
	    }
	    Counter.prototype.increment = function () {
	        this.currentNumber++;
	    };
	    Counter.prototype.decrement = function () {
	        this.currentNumber--;
	    };
	    return Counter;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Counter;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
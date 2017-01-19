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

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Counter_1 = __webpack_require__(3);
	__export(__webpack_require__(3));
	var DummyClass = (function () {
	    function DummyClass() {
	    }
	    DummyClass.prototype.sayHello = function () {
	        alert("Hello");
	    };
	    return DummyClass;
	}());
	exports.DummyClass = DummyClass;
	var mainContainer = document.getElementById("main-container");
	if (mainContainer) {
	    ReactDOM.render(React.createElement(Counter_1.Counter, {}), mainContainer);
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Counter = (function (_super) {
	    __extends(Counter, _super);
	    function Counter() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            counter: 0
	        };
	        return _this;
	    }
	    Counter.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null,
	            React.createElement("button", { onClick: function () { return _this.decrement(); } }, "-"),
	            this.state.counter,
	            React.createElement("button", { onClick: function () { return _this.increment(); } }, "+")));
	    };
	    Counter.prototype.increment = function () {
	        this.setState({
	            counter: this.state.counter + 1
	        });
	    };
	    Counter.prototype.decrement = function () {
	        this.setState({
	            counter: this.state.counter - 1
	        });
	    };
	    return Counter;
	}(React.Component));
	exports.Counter = Counter;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
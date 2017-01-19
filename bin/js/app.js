webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(32);
	var Counter_1 = __webpack_require__(178);
	__export(__webpack_require__(178));
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

/***/ 178:
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

});
//# sourceMappingURL=app.js.map
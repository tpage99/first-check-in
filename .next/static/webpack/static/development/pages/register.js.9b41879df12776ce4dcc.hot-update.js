webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: Start, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Start", function() { return Start; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_primaryParent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/primaryParent */ "./components/primaryParent.js");
/* harmony import */ var _components_secondParent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/secondParent */ "./components/secondParent.js");







var _jsxFileName = "/Users/taylorpage/Desktop/Emmaus-Project/first-check-in/pages/register.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Start =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Start, _React$Component);

  function Start() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Start);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Start)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      step: 1,
      firstName: "",
      lastName: "",
      parentType: "",
      phone: "",
      email: "",
      firstName2: "",
      lastName2: "",
      parentType2: "",
      phone2: "",
      email2: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "nextStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "prevStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (input) {
      return function (e) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, input, e.target.value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Start, [{
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          parentType = _this$state.parentType,
          phone = _this$state.phone,
          email = _this$state.email,
          firstName2 = _this$state.firstName2,
          lastName2 = _this$state.lastName2,
          parentType2 = _this$state.parentType2,
          phone2 = _this$state.phone2,
          email2 = _this$state.email2;
      var values = {
        firstName: firstName,
        lastName: lastName,
        parentType: parentType,
        phone: phone,
        email: email,
        firstName2: firstName2,
        lastName2: lastName2,
        parentType2: parentType2,
        phone2: phone2,
        email2: email2
      };

      switch (step) {
        case 1:
          return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, __jsx(_components_primaryParent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            nextStep: this.nextStep,
            handleChange: this.handleChange,
            values: this.values,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }));

        case 2:
          return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, __jsx(_components_secondParent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            nextStep: this.nextStep,
            prevStep: this.prevStep,
            handleChange: this.handleChange,
            values: this.values,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }));
      }
    }
  }]);

  return Start;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Start);

/***/ })

})
//# sourceMappingURL=register.js.9b41879df12776ce4dcc.hot-update.js.map
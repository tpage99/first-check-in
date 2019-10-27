webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/secondParent.js":
/*!************************************!*\
  !*** ./components/secondParent.js ***!
  \************************************/
/*! exports provided: PrimaryParent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryParent", function() { return PrimaryParent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/taylorpage/Desktop/Emmaus-Project/first-check-in/components/secondParent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
var buttonStyle = {
  color: "white",
  backgroundColor: "green",
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "2rem"
};
var inputStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  boxShadow: "inset 0 1px 2px #FAFAFA",
  width: "60%",
  fontSize: "1.5rem",
  lineHeight: "2em"
};
var PrimaryParent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PrimaryParent, _React$Component);

  function PrimaryParent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrimaryParent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PrimaryParent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "continue", function (e) {
      e.preventDefault();

      _this.props.nextStep();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "previous", function (e) {
      e.preventDefault();

      _this.props.prevStep();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrimaryParent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          values = _this$props.values,
          handleChange = _this$props.handleChange;
      return __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "firstName2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "First Name "), __jsx("input", {
        style: inputStyle,
        id: "firstName2",
        type: "text",
        placeholder: " Jane",
        value: values,
        onChange: handleChange("firstName2"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "lastName2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Last Name "), __jsx("input", {
        style: inputStyle,
        id: "lastName2",
        type: "text",
        placeholder: " Smith",
        value: values,
        onChange: handleChange("lastName2"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "parent2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Parent "), __jsx("input", {
        style: inputStyle,
        id: "parent2",
        type: "text",
        value: values,
        onChange: handleChange("parentType2"),
        placeholder: " Mom/Dad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "phone2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Phone "), __jsx("input", {
        style: inputStyle,
        id: "phone2",
        type: "text",
        value: values,
        onChange: handleChange("phone2"),
        placeholder: " 4175551234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "email2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Email "), __jsx("input", {
        style: inputStyle,
        id: "email2",
        type: "text",
        value: values,
        onChange: handleChange("email2"),
        placeholder: " awesome_parent2@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("div", {
        style: {
          margin: "1rem auto",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("button", {
        style: buttonStyle,
        type: "submit",
        value: "next",
        onClick: this["continue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Next"), __jsx("button", {
        style: buttonStyle,
        type: "submit",
        value: "previous",
        onClick: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Previous")));
    }
  }]);

  return PrimaryParent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (PrimaryParent);

/***/ })

})
//# sourceMappingURL=register.js.b1f834afa551f8786bf5.hot-update.js.map
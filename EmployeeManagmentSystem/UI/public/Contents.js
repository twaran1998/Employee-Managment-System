"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Contents;

var _EmployeeDirectory = _interopRequireDefault(require("./components/EmployeeDirectory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/React.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
    exact: true,
    from: "/",
    to: "/users"
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/users",
    component: _EmployeeDirectory["default"]
  }), /*#__PURE__*/React.createElement(Route, {
    component: NotFound
  }));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Contents = _interopRequireDefault(require("../Contents"));

var _EmployeeNavBar = _interopRequireDefault(require("./EmployeeNavBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Page() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_EmployeeNavBar["default"], null), /*#__PURE__*/React.createElement(_Contents["default"], null));
}

var _default = Page;
exports["default"] = _default;
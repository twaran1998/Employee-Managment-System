"use strict";

var _Page = _interopRequireDefault(require("./components/Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var element = /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(_Page["default"], null));
ReactDOM.render(element, document.getElementById('root'));
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EmployeeNavBar = /*#__PURE__*/function (_Component) {
  _inherits(EmployeeNavBar, _Component);

  var _super = _createSuper(EmployeeNavBar);

  function EmployeeNavBar() {
    _classCallCheck(this, EmployeeNavBar);

    return _super.apply(this, arguments);
  }

  _createClass(EmployeeNavBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "navigation-wrap bg-light start-header start-style"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/React.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, /*#__PURE__*/React.createElement("a", {
        className: "navbar-brand",
        href: "http://localhost:4000/",
        target: "_blank"
      }, "Management Portal"), /*#__PURE__*/React.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/React.createElement("span", {
        className: "navbar-toggler-icon"
      })), /*#__PURE__*/React.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "navbar-nav ml-auto py-4 py-md-0"
      }, /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4 active"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "Home"), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu"
      }, /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Action"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Another action"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Something else here"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Another action"))), /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Portfolio")), /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Agency")), /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link dropdown-toggle",
        "data-toggle": "dropdown",
        href: "#",
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "Services"), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu"
      }, /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Action"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Another action"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Something else here"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Another action"))), /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Journal")), /*#__PURE__*/React.createElement("li", {
        className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Contact")))))))));
    }
  }]);

  return EmployeeNavBar;
}(Component);

var _default = EmployeeNavBar;
exports["default"] = _default;
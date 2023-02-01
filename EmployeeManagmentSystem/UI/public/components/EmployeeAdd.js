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

var EmployeeAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(EmployeeAdd, _React$Component);

  var _super = _createSuper(EmployeeAdd);

  function EmployeeAdd() {
    var _this;

    _classCallCheck(this, EmployeeAdd);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    /*setTimeout(() => {
        const newIssue = {status: 'Assigned', owner: 'Person-C', title: 'Add New Issue'}
        this.props.createIssue(newIssue);
    }, 3000); */

    return _this;
  }

  _createClass(EmployeeAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.employeeAdd;
      var employeeAge = parseInt(form.Age.value);

      if (employeeAge >= 20 && employeeAge <= 70) {
        var employee = {
          FirstName: form.FirstName.value,
          LastName: form.LastName.value,
          Age: parseInt(form.Age.value),
          DateOfJoining: form.DateOfJoining.value,
          Title: form.Title.value,
          Department: form.Department.value,
          EmployeeType: form.EmployeeType.value,
          CurrentStatus: form.currentStatus.value === "true" ? true : false
        };
        this.props.createEmployee(employee);
      } else {
        form.Age.value = "";
        alert("Invalid Age. Age Must be 20 and 70 !");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "createEmployee",
        className: "createEmployee",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "input",
        name: "FirstName",
        id: "FirstName",
        placeholder: "First Name",
        required: true
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "input",
        name: "LastName",
        id: "LastName",
        placeholder: "Last Name",
        required: true
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "input",
        name: "Age",
        id: "Age",
        placeholder: "Age",
        required: true
      }), /*#__PURE__*/React.createElement("label", null, "Joining Date"), /*#__PURE__*/React.createElement("input", {
        type: "date",
        className: "input",
        name: "DateOfJoining",
        id: "DateOfJoining",
        placeholder: "Date Of Joining",
        required: true
      }), /*#__PURE__*/React.createElement("label", null, "Job Title"), /*#__PURE__*/React.createElement("select", {
        name: "Title",
        className: "input",
        id: "Title",
        required: true
      }, /*#__PURE__*/React.createElement("option", {
        value: "Employee"
      }, "Employee"), /*#__PURE__*/React.createElement("option", {
        value: "Manager"
      }, "Manager"), /*#__PURE__*/React.createElement("option", {
        value: "Director"
      }, "Director"), /*#__PURE__*/React.createElement("option", {
        value: "VP"
      }, "VP")), /*#__PURE__*/React.createElement("label", null, "Department"), /*#__PURE__*/React.createElement("select", {
        name: "Department",
        className: "input",
        id: "Department",
        required: true
      }, /*#__PURE__*/React.createElement("option", {
        value: "IT"
      }, "IT"), /*#__PURE__*/React.createElement("option", {
        value: "Marketing"
      }, "Marketing"), /*#__PURE__*/React.createElement("option", {
        value: "HR"
      }, "HR"), /*#__PURE__*/React.createElement("option", {
        value: "Engineering"
      }, "Engineering")), /*#__PURE__*/React.createElement("label", null, "Employee Type"), /*#__PURE__*/React.createElement("select", {
        id: "EmployeeType",
        className: "input",
        name: "EmployeeType",
        required: true
      }, /*#__PURE__*/React.createElement("option", {
        value: "FullTime"
      }, "FullTime"), /*#__PURE__*/React.createElement("option", {
        value: "PartTime"
      }, "PartTime"), /*#__PURE__*/React.createElement("option", {
        value: "Contract"
      }, "Contract"), /*#__PURE__*/React.createElement("option", {
        value: "Seasonal"
      }, "Seasonal")), /*#__PURE__*/React.createElement("label", null, "Employee Status"), /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: "currentStatus",
        id: "currentStatus1",
        value: "true",
        defaultChecked: true
      }), /*#__PURE__*/React.createElement("label", {
        className: "radiobtnText",
        htmlFor: "currentStatus1"
      }, "Working"), /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: "currentStatus",
        id: "currentStatus2",
        value: "false"
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "currentStatus2",
        className: "radiobtnText"
      }, "Retired"), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "createbtn"
      }, "Create Employee"));
    }
  }]);

  return EmployeeAdd;
}(React.Component);

var _default = EmployeeAdd;
exports["default"] = _default;
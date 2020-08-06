webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Employer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/db.js */ "./lib/db.js");









var _jsxFileName = "D:\\Internship\\thet_HAJ\\new_admin\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Employer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Employer, _React$Component);

  var _super = _createSuper(Employer);

  function Employer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Employer);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "refreshTable", function () {
      _this.$datatable.clear();

      var self = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);

      Employer.getInitialProps().then(function (response) {
        _this.setState({
          employers: response.employers,
          jobs: response.jobs
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addJob", function (event) {
      event.preventDefault();
      var today = new Date();
      console.log(_this.state);
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var userRef = firebase.firestore().collection('job').add({
        JobName: _this.state.JobName,
        JobEmail: _this.state.JobEmail,
        JobPhone: _this.state.JobPhone,
        JobAddress: _this.state.JobAddress,
        JobStatus: _this.state.JobStatus,
        MinSalary: _this.state.MinSalary,
        MaxSalary: _this.state.MaxSalary,
        WorkingDays: _this.state.WorkingDays,
        WorkingHours: _this.state.WorkingHours,
        MinAge: _this.state.MinAge,
        city: _this.state.city,
        area: _this.state.EmpLocation,
        JpSkill: _this.state.JpSkill,
        JEmployer: _this.state.JEmployer,
        JobDescription: _this.state.JobDescription,
        Qualification: _this.state.Qualification,
        PostedDate: today
      });

      _this.setState({
        JobName: '',
        JobEmail: '',
        JobPhone: '',
        JobAddress: '',
        JobStatus: '',
        MinSalary: '',
        MaxSalary: '',
        WorkingDays: '',
        WorkingHours: '',
        MinAge: '',
        JpSkill: '',
        city: '',
        area: '',
        JEmployer: '',
        JobDescription: '',
        Qualification: '',
        PostedDate: '',
        showCities: false
      });

      _this.refreshTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));

      if (event.target.name == "EmpLocation") {
        _this.getCities(event.target.value);

        _this.setState({
          showCities: true
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getCities", function (id) {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var cities = [];
      firebase.firestore().collection('city').where('area_id', '==', id).get().then(function (snapshot) {
        snapshot.forEach(function (doc) {
          cities.push(Object.assign(_objectSpread({
            id: doc.id
          }, doc.data())));
        });

        _this.setState({
          cities: cities
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getJobCount", function (id) {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var count = 0;

      _this.state.jobs.map(function (job) {
        if (job.JEmployer == id) {
          count++;
        }
      });

      return count;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "passAddId", function (id) {
      _this.setState({
        JEmployer: id
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "passEditId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('employer').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          console.log(data);

          _this.setState({
            EmpName: data.EmpName,
            EmpEmail: data.EmpEmail,
            EmpAddress: data.EmpAddress,
            EmpCity: data.EmpCity,
            EmpLocation: data.EmpLocation,
            EmpPhone: data.EmpPhone,
            EmpWebsite: data.EmpWebsite
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "passDeleteId", function (id) {
      _this.setState({
        delete_id: id
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateEmployer", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('employer').doc(_this.state.edit_id).update({
          EmpName: _this.state.EmpName,
          EmpEmail: _this.state.EmpEmail,
          EmpAddress: _this.state.EmpAddress,
          EmpCity: _this.state.EmpCity,
          EmpLocation: _this.state.EmpLocation,
          EmpPhone: _this.state.EmpPhone,
          EmpWebsite: _this.state.EmpWebsite
        });

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteEmployer", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('employer').doc(_this.state.delete_id)["delete"]();

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }
    });

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.datatableRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.$datatable = null;
    _this.state = {
      showCities: false,
      employers: props.employers || [],
      areas: props.areas || [],
      jobs: props.jobs || [],
      cities: props.cities || []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Employer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeDatable();
    }
  }, {
    key: "initializeDatable",
    value: function initializeDatable() {
      this.$datatable = $(this.datatableRef.current).DataTable({
        order: [[3, "desc"]]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _jsx,
          _this2 = this;

      var employer = this.state.employers;
      var areas = this.state.areas;
      var cities = this.state.cities;
      return __jsx("html", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }
      }, "Golden Snitch | Admin")), __jsx("body", {
        "class": "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "wrapper ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "modal fade",
        id: "editModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "modal-dialog",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }
      }, __jsx("h5", {
        "class": "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 25
        }
      }, "Edit Employer"), __jsx("button", {
        type: "button",
        "class": "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 25
        }
      }, "\xD7"))), __jsx("div", {
        "class": "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }
      }, __jsx("form", {
        action: "#",
        method: "post",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 37
        }
      }, "Name"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "EmpName",
        onChange: this.handleChange,
        value: this.state.EmpName,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 37
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 33
        }
      }, __jsx("label", {
        "for": "exampleInputEmail1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 37
        }
      }, "Email"), __jsx("input", {
        type: "email",
        "class": "form-control",
        name: "EmpEmail",
        onChange: this.handleChange,
        value: this.state.EmpEmail,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 37
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 37
        }
      }, "Phone"), __jsx("input", {
        type: "tel",
        "class": "form-control",
        name: "EmpPhone",
        onChange: this.handleChange,
        value: this.state.EmpPhone,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 37
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 37
        }
      }, "Website"), __jsx("input", (_jsx = {
        type: "text",
        "class": "form-control",
        name: "EmpWebsite",
        value: this.state.EmpWebsite,
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "value", this.state.EmpWebsite), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 37
      }), _jsx))))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 37
        }
      }, "Area", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 48
        }
      }), __jsx("select", {
        id: "location",
        name: "EmpLocation",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        value: this.state.EmpLocation,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 41
        }
      }, areas && areas.map(function (area) {
        return __jsx("option", {
          value: area.id,
          selected: _this2.state.area == area.id ? "selected" : "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 49
          }
        }, area.areaName);
      }))))), __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 37
        }
      }, "City", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 48
        }
      }), __jsx("select", {
        id: "city",
        name: "EmpCity",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        value: this.state.EmpCity,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 41
        }
      }, cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          selected: _this2.state.city == city.id ? "selected" : "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 49
          }
        }, city.name);
      })))))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "col-md-10 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 29
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 33
        }
      }, "Address"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "EmpAddress",
        onChange: this.handleChange,
        value: this.state.EmpAddress,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 33
        }
      }))))), __jsx("div", {
        "class": "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }
      }, __jsx("button", {
        type: "button",
        "class": "btn btn-secondary",
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }
      }, "Close"), __jsx("button", {
        onClick: this.updateEmployer,
        "class": "btn btn-danger",
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }
      }, "Update Details"))))), __jsx("div", {
        className: "modal fade",
        id: "deleteConfirm",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-dialog",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 25
        }
      }, "Hey Admin !!!"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 25
        }
      }, "\xD7"))), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 21
        }
      }, "Are You Sure to Delete the Employer ?"), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 21
        }
      }, __jsx("button", {
        type: "button",
        className: "btn",
        "data-dismiss": "modal",
        "aria-label": "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }
      }, "Cancel"), __jsx("button", {
        type: "button",
        className: "btn",
        "data-dismiss": "modal",
        onClick: this.deleteEmployer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }
      }, "Delete"))))), __jsx("div", {
        "class": "modal fade",
        id: "addJobModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "modal-dialog",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 21
        }
      }, __jsx("h5", {
        "class": "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 25
        }
      }, "Add Job"), __jsx("button", {
        type: "button",
        "class": "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 25
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 25
        }
      }, "\xD7"))), __jsx("div", {
        "class": "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 21
        }
      }, __jsx("form", {
        action: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 41
        }
      }, "Name"), __jsx("input", {
        type: "text",
        "class": "form-control",
        placeholder: "Name",
        name: "JobName",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 41
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 37
        }
      }, __jsx("label", {
        "for": "exampleInputEmail1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 41
        }
      }, "Email"), __jsx("input", {
        type: "email",
        "class": "form-control",
        placeholder: "email",
        name: "JobEmail",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 41
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 37
        }
      }, __jsx("label", {
        "for": "exampleInputEmail1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 41
        }
      }, "Phone"), __jsx("input", {
        type: "tel",
        "class": "form-control",
        placeholder: "+12345678",
        name: "JobPhone",
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 45
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-10 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 41
        }
      }, "Address"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "JobAddress",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 41
        }
      })))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 41
        }
      }, "Employment Status ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 66
        }
      }), __jsx("select", {
        id: "job_sts",
        name: "JobStatus",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 45
        }
      }, __jsx("option", {
        value: "none",
        label: "--Select Employment Status--",
        selected: true,
        disabled: true,
        hidden: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 49
        }
      }), __jsx("option", {
        value: "full time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 49
        }
      }, "Full Time"), __jsx("option", {
        value: "part time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 49
        }
      }, "Part Time")))))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-12 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 41
        }
      }, "Salary")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 37
        }
      }, __jsx("a", {
        style: {
          fontSize: "small"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 41
        }
      }, "Minimum"), "\xA0", __jsx("input", {
        type: "number",
        min: "100,000",
        name: "MinSalary",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 41
        }
      }), "\xA0\xA0", __jsx("a", {
        style: {
          fontSize: "small"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 41
        }
      }, "Maximum"), "\xA0", __jsx("input", {
        type: "number",
        min: "100,000",
        name: "MaxSalary",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 41
        }
      })))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 37
        }
      }, "Working Days"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "WorkingDays",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 37
        }
      })), __jsx("div", {
        "class": "col-md-5 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 33
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 37
        }
      }, "Working Hours"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "WorkingHours",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 37
        }
      }))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-10 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 41
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 45
        }
      }, "Age Range")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 41
        }
      }, __jsx("input", {
        type: "number",
        min: "18",
        name: "MinAge",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 45
        }
      }))))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 41
        }
      }, "Minimum Japanese Skill", __jsx("select", {
        id: "jpskill",
        name: "JpSkill",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 45
        }
      }, __jsx("option", {
        value: "none",
        label: "---Select---",
        selected: true,
        disabled: true,
        hidden: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 49
        }
      }), __jsx("option", {
        value: "N3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 49
        }
      }, "N3"), __jsx("option", {
        value: "N2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 49
        }
      }, "N2"), __jsx("option", {
        value: "N1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 49
        }
      }, "N1")))))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 41
        }
      }, "Area", __jsx("select", {
        id: "area",
        name: "EmpLocation",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 45
        }
      }, __jsx("option", {
        value: "none",
        label: "---Select---",
        selected: true,
        disabled: true,
        hidden: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 49
        }
      }), areas && areas.map(function (area) {
        return __jsx("option", {
          value: area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 53
          }
        }, area.areaName);
      })))))), this.state.showCities && __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "col-md-3 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 41
        }
      }, "cities", __jsx("select", {
        id: "city",
        name: "city",
        "class": "form-control",
        style: {
          fontSize: "small"
        },
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 45
        }
      }, __jsx("option", {
        value: "none",
        label: "---Select---",
        selected: true,
        disabled: true,
        hidden: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 49
        }
      }), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464,
            columnNumber: 53
          }
        }, city.name);
      })))))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-12 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 41
        }
      }, "Job Description"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "JobDescription",
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 41
        }
      })))), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "col-md-12 pr-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 41
        }
      }, "Other Qualifications"), __jsx("input", {
        type: "text",
        "class": "form-control",
        name: "Qualification",
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 41
        }
      })))))), __jsx("div", {
        "class": "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 21
        }
      }, __jsx("button", {
        type: "button",
        "class": "btn btn-secondary",
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 25
        }
      }, "Close"), __jsx("button", {
        onClick: this.addJob,
        "class": "btn btn-danger",
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 25
        }
      }, "Add Job"))))), __jsx("div", {
        "class": "sidebar",
        "data-color": "red",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "/assets/img/logoo.png",
        alt: "Logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 33
        }
      }), __jsx("a", {
        href: "/user",
        "class": "simple-text logo-normal",
        style: {
          textAlign: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 33
        }
      }, "Golden Snitch Admin")), __jsx("div", {
        "class": "sidebar-wrapper",
        id: "sidebar-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 29
        }
      }, __jsx("ul", {
        "class": "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 33
        }
      }, __jsx("li", {
        "class": "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "/tables",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 41
        }
      }, __jsx("i", {
        "class": "now-ui-icons design_bullet-list-67",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 45
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 45
        }
      }, "Table List"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "/user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 41
        }
      }, __jsx("i", {
        "class": "now-ui-icons users_single-02",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 45
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 45
        }
      }, "User Profile")))))), __jsx("div", {
        "class": "main-panel",
        id: "main-panel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 25
        }
      }, __jsx("nav", {
        "class": "navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "navbar-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "navbar-toggle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 41
        }
      }, __jsx("button", {
        type: "button",
        "class": "navbar-toggler",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 45
        }
      }, __jsx("span", {
        "class": "navbar-toggler-bar bar1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 49
        }
      }), __jsx("span", {
        "class": "navbar-toggler-bar bar2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 49
        }
      }), __jsx("span", {
        "class": "navbar-toggler-bar bar3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 49
        }
      }))), __jsx("a", {
        "class": "navbar-brand",
        style: {
          fontSize: "x-large"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 41
        }
      }, "Employer Table")), __jsx("button", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navigation",
        "aria-controls": "navigation-index",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 41
        }
      }, __jsx("span", {
        "class": "navbar-toggler-bar navbar-kebab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 45
        }
      }), __jsx("span", {
        "class": "navbar-toggler-bar navbar-kebab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 45
        }
      }), __jsx("span", {
        "class": "navbar-toggler-bar navbar-kebab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 45
        }
      })), __jsx("div", {
        "class": "collapse navbar-collapse justify-content-end",
        id: "navigation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 37
        }
      }, __jsx("ul", {
        "class": "navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 41
        }
      }, __jsx("li", {
        "class": "nav-item active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 45
        }
      }, __jsx("a", {
        "class": "nav-link",
        href: "/index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 49
        }
      }, "Employer")), __jsx("li", {
        "class": "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 45
        }
      }, __jsx("a", {
        "class": "nav-link",
        href: "/job",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 49
        }
      }, "Job")))))), __jsx("div", {
        "class": "panel-header panel-header-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 45
        }
      }, __jsx("h4", {
        "class": "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 49
        }
      }, " Employer")), __jsx("div", {
        "class": "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "table-responsive",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 49
        }
      }, __jsx("table", {
        id: "example",
        ref: this.datatableRef,
        "class": "table table-striped table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 53
        }
      }, __jsx("thead", {
        style: {
          fontSize: 12
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 57
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 61
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 65
        }
      }, "Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 65
        }
      }, "Email"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 65
        }
      }, "Phone"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 65
        }
      }, "Website"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 65
        }
      }, "Area"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 65
        }
      }, "City"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 65
        }
      }, "Address"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 65
        }
      }, "Job Count"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 65
        }
      }, "Actions"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 57
        }
      }, employer && employer.map(function (Employer) {
        return __jsx("tr", {
          id: Employer.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586,
            columnNumber: 65
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587,
            columnNumber: 69
          }
        }, Employer.EmpName), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588,
            columnNumber: 69
          }
        }, Employer.EmpEmail), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 589,
            columnNumber: 69
          }
        }, Employer.EmpPhone), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 590,
            columnNumber: 69
          }
        }, Employer.EmpWebsite), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 591,
            columnNumber: 69
          }
        }, Employer.EmpLocation), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 69
          }
        }, Employer.EmpCity), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 69
          }
        }, Employer.EmpAddress), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 594,
            columnNumber: 69
          }
        }, _this2.getJobCount(Employer.id)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595,
            columnNumber: 69
          }
        }, __jsx("button", {
          "data-toggle": "modal",
          "data-target": "#addJobModal",
          onClick: function onClick() {
            return _this2.passAddId(Employer.id);
          },
          type: "button",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596,
            columnNumber: 73
          }
        }, " Add "), "\xA0", __jsx("button", {
          "data-toggle": "modal",
          "data-target": "#editModal",
          onClick: function onClick() {
            return _this2.passEditId(Employer.id);
          },
          type: "submit",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597,
            columnNumber: 73
          }
        }, " Edit "), "\xA0", __jsx("button", {
          "data-toggle": "modal",
          "data-target": "#deleteConfirm",
          onClick: function onClick() {
            return _this2.passDeleteId(Employer.id);
          },
          type: "submit",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 73
          }
        }, "Delete")));
      })))), __jsx("a", {
        href: "/add_employer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 49
        }
      }, __jsx("button", {
        "class": "btn btn-danger",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 53
        }
      }, "Add Employer"))))))), __jsx("footer", {
        "class": "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "inner-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 45
        }
      }, "Copyright\xA92020 GoldenSnitch")))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var firebase, jobQuerySnapshotJob, jobs, jobQuerySnapshotEmp, employers, areaQuerySnapshot, areas, cityQuerySnapshot, cities;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

              case 2:
                firebase = _context.sent;
                _context.next = 5;
                return firebase.firestore().collection("job").get();

              case 5:
                jobQuerySnapshotJob = _context.sent;
                jobs = jobQuerySnapshotJob.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 9;
                return firebase.firestore().collection("employer").get();

              case 9:
                jobQuerySnapshotEmp = _context.sent;
                employers = jobQuerySnapshotEmp.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 13;
                return firebase.firestore().collection("area").get();

              case 13:
                areaQuerySnapshot = _context.sent;
                areas = areaQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 17;
                return firebase.firestore().collection("city").get();

              case 17:
                cityQuerySnapshot = _context.sent;
                cities = cityQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                return _context.abrupt("return", {
                  jobs: jobs,
                  employers: employers,
                  areas: areas,
                  cities: cities
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Employer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFbXBsb3llciIsInByb3BzIiwiJGRhdGF0YWJsZSIsImNsZWFyIiwic2VsZiIsImdldEluaXRpYWxQcm9wcyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZW1wbG95ZXJzIiwiam9icyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2RheSIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsInVzZXJSZWYiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiSm9iTmFtZSIsIkpvYkVtYWlsIiwiSm9iUGhvbmUiLCJKb2JBZGRyZXNzIiwiSm9iU3RhdHVzIiwiTWluU2FsYXJ5IiwiTWF4U2FsYXJ5IiwiV29ya2luZ0RheXMiLCJXb3JraW5nSG91cnMiLCJNaW5BZ2UiLCJjaXR5IiwiYXJlYSIsIkVtcExvY2F0aW9uIiwiSnBTa2lsbCIsIkpFbXBsb3llciIsIkpvYkRlc2NyaXB0aW9uIiwiUXVhbGlmaWNhdGlvbiIsIlBvc3RlZERhdGUiLCJzaG93Q2l0aWVzIiwicmVmcmVzaFRhYmxlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0Q2l0aWVzIiwiaWQiLCJjaXRpZXMiLCJ3aGVyZSIsImdldCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiY291bnQiLCJtYXAiLCJqb2IiLCJlZGl0X2lkIiwiRW1wTmFtZSIsIkVtcEVtYWlsIiwiRW1wQWRkcmVzcyIsIkVtcENpdHkiLCJFbXBQaG9uZSIsIkVtcFdlYnNpdGUiLCJlcnJvciIsImRlbGV0ZV9pZCIsInVwZGF0ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkYXRhdGFibGVSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFyZWFzIiwiaW5pdGlhbGl6ZURhdGFibGUiLCIkIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiZW1wbG95ZXIiLCJmb250U2l6ZSIsImFyZWFOYW1lIiwidXBkYXRlRW1wbG95ZXIiLCJkZWxldGVFbXBsb3llciIsImFkZEpvYiIsInRleHRBbGlnbiIsImdldEpvYkNvdW50IiwicGFzc0FkZElkIiwicGFzc0VkaXRJZCIsInBhc3NEZWxldGVJZCIsImpvYlF1ZXJ5U25hcHNob3RKb2IiLCJkb2NzIiwiam9iUXVlcnlTbmFwc2hvdEVtcCIsImFyZWFRdWVyeVNuYXBzaG90IiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFDcUJBLFE7Ozs7O0FBQ2pCLG9CQUFhQyxLQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsdU5Bc0JKLFlBQUs7QUFDaEIsWUFBS0MsVUFBTCxDQUFnQkMsS0FBaEI7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHLHVHQUFiOztBQUNBSixjQUFRLENBQ0hLLGVBREwsR0FFS0MsSUFGTCxDQUVVLFVBQUNDLFFBQUQsRUFBWTtBQUNkLGNBQUtDLFFBQUwsQ0FBYztBQUNWQyxtQkFBUyxFQUFHRixRQUFRLENBQUNFLFNBRFg7QUFFVkMsY0FBSSxFQUFHSCxRQUFRLENBQUNHO0FBRk4sU0FBZDtBQUlILE9BUEw7QUFTQSxLQWxDZTs7QUFBQSxpTkEyRVQsVUFBQUMsS0FBSyxFQUFJO0FBQ2ZBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBakI7QUFDQSxVQUFJQyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLEtBQWhDLEVBQXVDQyxHQUF2QyxDQUEy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QkFJYzlCLFFBQVEsQ0FDbkNHLFNBRDJCLEdBRTNCQyxVQUYyQixDQUVoQixNQUZnQixFQUczQjZCLEdBSDJCLEU7OztBQUExQjhDLGlDO0FBSUFwQixxQixHQUFRb0IsaUJBQWlCLENBQUNGLElBQWxCLENBQXVCbkMsR0FBdkIsQ0FBMkIsVUFBQ04sR0FBRDtBQUFBLHlEQUNsQ0EsR0FBRyxDQUFDSSxJQUFKLEVBRGtDO0FBRXJDVixzQkFBRSxFQUFFTSxHQUFHLENBQUNOO0FBRjZCO0FBQUEsaUJBQTNCLEM7O3VCQUlrQjlCLFFBQVEsQ0FDbkNHLFNBRDJCLEdBRTNCQyxVQUYyQixDQUVoQixNQUZnQixFQUczQjZCLEdBSDJCLEU7OztBQUExQitDLGlDO0FBSUFqRCxzQixHQUFTaUQsaUJBQWlCLENBQUNILElBQWxCLENBQXVCbkMsR0FBdkIsQ0FBMkIsVUFBQ04sR0FBRDtBQUFBLHlEQUNuQ0EsR0FBRyxDQUFDSSxJQUFKLEVBRG1DO0FBRXRDVixzQkFBRSxFQUFFTSxHQUFHLENBQUNOO0FBRjhCO0FBQUEsaUJBQTNCLEM7aURBSVI7QUFBQ3RDLHNCQUFJLEVBQUpBLElBQUQ7QUFBTUQsMkJBQVMsRUFBVEEsU0FBTjtBQUFpQm9FLHVCQUFLLEVBQUxBLEtBQWpCO0FBQXdCNUIsd0JBQU0sRUFBTkE7QUFBeEIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6RXVCMEIsNENBQUssQ0FBQ3dCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY1OTY4MjEzZDgxOTg3NmQxMTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vbGliL2RiLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YXRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlID0gbnVsbFxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93Q2l0aWVzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVtcGxveWVycyA6IHByb3BzLmVtcGxveWVycyB8fCBbXSxcclxuICAgICAgICAgICAgYXJlYXMgOiBwcm9wcy5hcmVhcyB8fCBbXSxcclxuICAgICAgICAgICAgam9icyA6IHByb3BzLmpvYnMgfHwgW10sXHJcbiAgICAgICAgICAgIGNpdGllcyA6IHByb3BzLmNpdGllcyB8fCBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFibGUoKVxyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZURhdGFibGUoKXtcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGU9JCh0aGlzLmRhdGF0YWJsZVJlZi5jdXJyZW50KS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBvcmRlcjogW1szLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaFRhYmxlID0gKCkgPT57XHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlLmNsZWFyKClcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBFbXBsb3llclxyXG4gICAgICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXJzIDogcmVzcG9uc2UuZW1wbG95ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYnMgOiByZXNwb25zZS5qb2JzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKCkgXHJcblxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3RKb2IgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJqb2JcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGpvYnMgPSBqb2JRdWVyeVNuYXBzaG90Sm9iLmRvY3MubWFwKChkb2MpID0+KHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3RFbXAgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJlbXBsb3llclwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gam9iUXVlcnlTbmFwc2hvdEVtcC5kb2NzLm1hcCgoZG9jKSA9Pih7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiYXJlYVwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSBhcmVhUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKT0+KHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgY2l0eVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaXR5XCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSBjaXR5UXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKT0+KHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHtqb2JzLGVtcGxveWVycywgYXJlYXMsIGNpdGllc31cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGFkZEpvYj0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuYWRkKHtcclxuICAgICAgICAgICAgSm9iTmFtZTp0aGlzLnN0YXRlLkpvYk5hbWUsXHJcbiAgICAgICAgICAgIEpvYkVtYWlsOnRoaXMuc3RhdGUuSm9iRW1haWwsXHJcbiAgICAgICAgICAgIEpvYlBob25lOnRoaXMuc3RhdGUuSm9iUGhvbmUsXHJcbiAgICAgICAgICAgIEpvYkFkZHJlc3M6dGhpcy5zdGF0ZS5Kb2JBZGRyZXNzLFxyXG4gICAgICAgICAgICBKb2JTdGF0dXM6dGhpcy5zdGF0ZS5Kb2JTdGF0dXMsXHJcbiAgICAgICAgICAgIE1pblNhbGFyeTp0aGlzLnN0YXRlLk1pblNhbGFyeSxcclxuICAgICAgICAgICAgTWF4U2FsYXJ5OnRoaXMuc3RhdGUuTWF4U2FsYXJ5LFxyXG4gICAgICAgICAgICBXb3JraW5nRGF5czp0aGlzLnN0YXRlLldvcmtpbmdEYXlzLFxyXG4gICAgICAgICAgICBXb3JraW5nSG91cnM6dGhpcy5zdGF0ZS5Xb3JraW5nSG91cnMsXHJcbiAgICAgICAgICAgIE1pbkFnZTp0aGlzLnN0YXRlLk1pbkFnZSxcclxuICAgICAgICAgICAgY2l0eSA6IHRoaXMuc3RhdGUuY2l0eSxcclxuICAgICAgICAgICAgYXJlYSA6IHRoaXMuc3RhdGUuRW1wTG9jYXRpb24sXHJcbiAgICAgICAgICAgIEpwU2tpbGw6dGhpcy5zdGF0ZS5KcFNraWxsLFxyXG4gICAgICAgICAgICBKRW1wbG95ZXIgOiB0aGlzLnN0YXRlLkpFbXBsb3llcixcclxuICAgICAgICAgICAgSm9iRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5Kb2JEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgUXVhbGlmaWNhdGlvbjp0aGlzLnN0YXRlLlF1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgIFBvc3RlZERhdGU6dG9kYXlcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBKb2JOYW1lOicnLFxyXG4gICAgICAgICAgICBKb2JFbWFpbDonJyxcclxuICAgICAgICAgICAgSm9iUGhvbmU6JycsXHJcbiAgICAgICAgICAgIEpvYkFkZHJlc3M6JycsXHJcbiAgICAgICAgICAgIEpvYlN0YXR1czonJyxcclxuICAgICAgICAgICAgTWluU2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBNYXhTYWxhcnk6JycsXHJcbiAgICAgICAgICAgIFdvcmtpbmdEYXlzOicnLFxyXG4gICAgICAgICAgICBXb3JraW5nSG91cnM6JycsXHJcbiAgICAgICAgICAgIE1pbkFnZTonJyxcclxuICAgICAgICAgICAgSnBTa2lsbDonJyxcclxuICAgICAgICAgICAgY2l0eSA6ICcnLFxyXG4gICAgICAgICAgICBhcmVhIDogJycsXHJcbiAgICAgICAgICAgIEpFbXBsb3llciA6ICcnLFxyXG4gICAgICAgICAgICBKb2JEZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgICAgUXVhbGlmaWNhdGlvbjonJyxcclxuICAgICAgICAgICAgUG9zdGVkRGF0ZTonJyxcclxuICAgICAgICAgICAgc2hvd0NpdGllcyA6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJFbXBMb2NhdGlvblwiKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXMoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q2l0aWVzIDogdHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q2l0aWVzID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICBsZXQgY2l0aWVzID0gW11cclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdjaXR5Jykud2hlcmUoJ2FyZWFfaWQnLCc9PScsaWQpLmdldCgpXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3Q9PntcclxuICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaChkb2M9PntcclxuICAgICAgICAgICAgICAgIGNpdGllcy5wdXNoKE9iamVjdC5hc3NpZ24oe2lkIDogZG9jLmlkLC4uLmRvYy5kYXRhKCl9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2l0aWVzIDogY2l0aWVzfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0Sm9iQ291bnQ9KGlkKT0+IHtcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICB0aGlzLnN0YXRlLmpvYnMubWFwKGpvYj0+e1xyXG4gICAgICAgICAgICBpZihqb2IuSkVtcGxveWVyID09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNvdW50ICsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gY291bnRcclxuICAgIH1cclxuXHJcbiAgICBwYXNzQWRkSWQgPSAoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtKRW1wbG95ZXIgOiBpZH0pXHJcbiAgICB9XHJcbiAgICBwYXNzRWRpdElkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdF9pZCA6IGlkfSlcclxuICAgICAgICBsZXQgZmlyZWJhc2U9bG9hZEZpcmViYXNlKClcclxuICAgICAgICBsZXQgZGF0YT17fVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJykuZG9jKGlkKS5nZXQoKS50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGRhdGE9c25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wTmFtZTpkYXRhLkVtcE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW1wRW1haWw6ZGF0YS5FbXBFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBFbXBBZGRyZXNzOmRhdGEuRW1wQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBFbXBDaXR5OmRhdGEuRW1wQ2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBFbXBMb2NhdGlvbjpkYXRhLkVtcExvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIEVtcFBob25lOmRhdGEuRW1wUGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW1wV2Vic2l0ZTpkYXRhLkVtcFdlYnNpdGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFzc0RlbGV0ZUlkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlX2lkIDogaWR9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVtcGxveWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZT1sb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKS5kb2ModGhpcy5zdGF0ZS5lZGl0X2lkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgRW1wTmFtZTp0aGlzLnN0YXRlLkVtcE5hbWUsXHJcbiAgICAgICAgICAgICAgICBFbXBFbWFpbDp0aGlzLnN0YXRlLkVtcEVtYWlsLFxyXG4gICAgICAgICAgICAgICAgRW1wQWRkcmVzczp0aGlzLnN0YXRlLkVtcEFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBFbXBDaXR5OnRoaXMuc3RhdGUuRW1wQ2l0eSxcclxuICAgICAgICAgICAgICAgIEVtcExvY2F0aW9uOnRoaXMuc3RhdGUuRW1wTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICBFbXBQaG9uZTp0aGlzLnN0YXRlLkVtcFBob25lLFxyXG4gICAgICAgICAgICAgICAgRW1wV2Vic2l0ZTp0aGlzLnN0YXRlLkVtcFdlYnNpdGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlRW1wbG95ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlPWxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpXHJcbiAgICAgICAgICAgIC5kb2ModGhpcy5zdGF0ZS5kZWxldGVfaWQpXHJcbiAgICAgICAgICAgIC5kZWxldGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBlbXBsb3llciA9IHRoaXMuc3RhdGUuZW1wbG95ZXJzXHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSB0aGlzLnN0YXRlLmFyZWFzXHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aHRtbD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Hb2xkZW4gU25pdGNoIHwgQWRtaW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGJvZHkgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlciBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cImVkaXRNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkVkaXQgRW1wbG95ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiRW1wTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wTmFtZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJFbXBFbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wRW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkVtcFBob25lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5FbXBQaG9uZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XZWJzaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiRW1wV2Vic2l0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLkVtcFdlYnNpdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wV2Vic2l0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BcmVhPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJsb2NhdGlvblwiIG5hbWU9XCJFbXBMb2NhdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5FbXBMb2NhdGlvbn0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJlYXMgJiYgYXJlYXMubWFwKGFyZWE9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YXJlYS5pZH0gc2VsZWN0ZWQgPSB7dGhpcy5zdGF0ZS5hcmVhID09IGFyZWEuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSA+e2FyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2l0eTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2l0eVwiIG5hbWU9XCJFbXBDaXR5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkVtcENpdHl9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdGllcyAmJiBjaXRpZXMubWFwKGNpdHk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2l0eS5pZH0gc2VsZWN0ZWQgPSB7dGhpcy5zdGF0ZS5jaXR5ID09IGNpdHkuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSA+e2NpdHkubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiRW1wQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wQWRkcmVzc30gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVFbXBsb3llcn0gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+VXBkYXRlIERldGFpbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJkZWxldGVDb25maXJtXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkhleSBBZG1pbiAhISE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmUgWW91IFN1cmUgdG8gRGVsZXRlIHRoZSBFbXBsb3llciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUVtcGxveWVyfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cImFkZEpvYk1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5BZGQgSm9iPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuYW1lPVwiSm9iTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJKb2JFbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCIrMTIzNDU2NzhcIiBuYW1lPVwiSm9iUGhvbmVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpvYkFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbXBsb3ltZW50IFN0YXR1cyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJqb2Jfc3RzXCIgbmFtZT1cIkpvYlN0YXR1c1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBsYWJlbD1cIi0tU2VsZWN0IEVtcGxveW1lbnQgU3RhdHVzLS1cIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmdWxsIHRpbWVcIj5GdWxsIFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhcnQgdGltZVwiPlBhcnQgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fT5NaW5pbXVtPC9hPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxMDAsMDAwXCIgbmFtZT1cIk1pblNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fT5NYXhpbXVtPC9hPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxMDAsMDAwXCIgbmFtZT1cIk1heFNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V29ya2luZyBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiV29ya2luZ0RheXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V29ya2luZyBIb3VyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIldvcmtpbmdIb3Vyc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTAgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWdlIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjE4XCIgbmFtZT1cIk1pbkFnZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluaW11bSBKYXBhbmVzZSBTa2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJqcHNraWxsXCIgbmFtZT1cIkpwU2tpbGxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7Zm9udFNpemU6IFwic21hbGxcIn19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCIgbGFiZWw9XCItLS1TZWxlY3QtLS1cIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOM1wiPk4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOMlwiPk4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOMVwiPk4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJhcmVhXCIgbmFtZT1cIkVtcExvY2F0aW9uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiIGxhYmVsPVwiLS0tU2VsZWN0LS0tXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJlYXMgJiYgYXJlYXMubWFwKGFyZWE9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2FyZWEuaWR9PnthcmVhLmFyZWFOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q2l0aWVzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5jaXRpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiIGxhYmVsPVwiLS0tU2VsZWN0LS0tXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0aWVzICYmIGNpdGllcy5tYXAoY2l0eT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2l0eS5pZH0+e2NpdHkubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Kb2IgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSm9iRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9ICByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+T3RoZXIgUXVhbGlmaWNhdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiUXVhbGlmaWNhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkSm9ifSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5BZGQgSm9iPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nb28ucG5nXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3VzZXJcIiBjbGFzcz1cInNpbXBsZS10ZXh0IGxvZ28tbm9ybWFsXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29sZGVuIFNuaXRjaCBBZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIGlkPVwic2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi90YWJsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5vdy11aS1pY29ucyBkZXNpZ25fYnVsbGV0LWxpc3QtNjdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFibGUgTGlzdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJub3ctdWktaWNvbnMgdXNlcnNfc2luZ2xlLTAyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYW5lbFwiIGlkPVwibWFpbi1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci10cmFuc3BhcmVudCAgYmctcHJpbWFyeSAgbmF2YmFyLWFic29sdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWJhciBiYXIxXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWJhciBiYXIyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWJhciBiYXIzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIHN0eWxlPXt7Zm9udFNpemU6IFwieC1sYXJnZVwifX0+RW1wbG95ZXIgVGFibGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZpZ2F0aW9uXCIgYXJpYS1jb250cm9scz1cIm5hdmlnYXRpb24taW5kZXhcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWJhciBuYXZiYXIta2ViYWJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1iYXIgbmF2YmFyLWtlYmFiXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItYmFyIG5hdmJhci1rZWJhYlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIvaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcGxveWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiL2pvYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSm9iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkZXIgcGFuZWwtaGVhZGVyLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+IEVtcGxveWVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJleGFtcGxlXCIgcmVmPXt0aGlzLmRhdGF0YWJsZVJlZn0gY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt7Zm9udFNpemU6MTJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+V2Vic2l0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2l0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Sm9iIENvdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcGxveWVyICYmICBlbXBsb3llci5tYXAoRW1wbG95ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGlkPXtFbXBsb3llci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBFbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuRW1wUGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkVtcFdlYnNpdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkVtcExvY2F0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBDaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBBZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmdldEpvYkNvdW50KEVtcGxveWVyLmlkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjYWRkSm9iTW9kYWxcIiBvbkNsaWNrPXsoKT0+dGhpcy5wYXNzQWRkSWQoRW1wbG95ZXIuaWQpfSB0eXBlPVwiYnV0dG9uXCI+IEFkZCA8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZWRpdE1vZGFsXCIgb25DbGljaz17KCk9PnRoaXMucGFzc0VkaXRJZChFbXBsb3llci5pZCl9IHR5cGU9XCJzdWJtaXRcIj4gRWRpdCA8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZGVsZXRlQ29uZmlybVwiIG9uQ2xpY2s9eygpPT50aGlzLnBhc3NEZWxldGVJZChFbXBsb3llci5pZCl9IHR5cGU9XCJzdWJtaXRcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2FkZF9lbXBsb3llclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdHlwZT1cInN1Ym1pdFwiPkFkZCBFbXBsb3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHTCqTIwMjAgR29sZGVuU25pdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
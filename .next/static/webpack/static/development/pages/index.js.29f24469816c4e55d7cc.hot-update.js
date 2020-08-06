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
        area: _this.state.area,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFbXBsb3llciIsInByb3BzIiwiJGRhdGF0YWJsZSIsImNsZWFyIiwic2VsZiIsImdldEluaXRpYWxQcm9wcyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZW1wbG95ZXJzIiwiam9icyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2RheSIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsInVzZXJSZWYiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiSm9iTmFtZSIsIkpvYkVtYWlsIiwiSm9iUGhvbmUiLCJKb2JBZGRyZXNzIiwiSm9iU3RhdHVzIiwiTWluU2FsYXJ5IiwiTWF4U2FsYXJ5IiwiV29ya2luZ0RheXMiLCJXb3JraW5nSG91cnMiLCJNaW5BZ2UiLCJjaXR5IiwiYXJlYSIsIkpwU2tpbGwiLCJKRW1wbG95ZXIiLCJKb2JEZXNjcmlwdGlvbiIsIlF1YWxpZmljYXRpb24iLCJQb3N0ZWREYXRlIiwic2hvd0NpdGllcyIsInJlZnJlc2hUYWJsZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldENpdGllcyIsImlkIiwiY2l0aWVzIiwid2hlcmUiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsImNvdW50IiwibWFwIiwiam9iIiwiZWRpdF9pZCIsIkVtcE5hbWUiLCJFbXBFbWFpbCIsIkVtcEFkZHJlc3MiLCJFbXBDaXR5IiwiRW1wTG9jYXRpb24iLCJFbXBQaG9uZSIsIkVtcFdlYnNpdGUiLCJlcnJvciIsImRlbGV0ZV9pZCIsInVwZGF0ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkYXRhdGFibGVSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFyZWFzIiwiaW5pdGlhbGl6ZURhdGFibGUiLCIkIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiZW1wbG95ZXIiLCJmb250U2l6ZSIsImFyZWFOYW1lIiwidXBkYXRlRW1wbG95ZXIiLCJkZWxldGVFbXBsb3llciIsImFkZEpvYiIsInRleHRBbGlnbiIsImdldEpvYkNvdW50IiwicGFzc0FkZElkIiwicGFzc0VkaXRJZCIsInBhc3NEZWxldGVJZCIsImpvYlF1ZXJ5U25hcHNob3RKb2IiLCJkb2NzIiwiam9iUXVlcnlTbmFwc2hvdEVtcCIsImFyZWFRdWVyeVNuYXBzaG90IiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFDcUJBLFE7Ozs7O0FBQ2pCLG9CQUFhQyxLQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsdU5Bc0JKLFlBQUs7QUFDaEIsWUFBS0MsVUFBTCxDQUFnQkMsS0FBaEI7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHLHVHQUFiOztBQUNBSixjQUFRLENBQ0hLLGVBREwsR0FFS0MsSUFGTCxDQUVVLFVBQUNDLFFBQUQsRUFBWTtBQUNkLGNBQUtDLFFBQUwsQ0FBYztBQUNWQyxtQkFBUyxFQUFHRixRQUFRLENBQUNFLFNBRFg7QUFFVkMsY0FBSSxFQUFHSCxRQUFRLENBQUNHO0FBRk4sU0FBZDtBQUlILE9BUEw7QUFTQSxLQWxDZTs7QUFBQSxpTkEyRVQsVUFBQUMsS0FBSyxFQUFJO0FBQ2ZBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBakI7QUFDQSxVQUFJQyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLEtBQWhDLEVBQXVDQyxHQUF2QyxDQUEy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UUFBUSxDQUNuQ0csU0FEMkIsR0FFM0JDLFVBRjJCLENBRWhCLE1BRmdCLEVBRzNCNEIsR0FIMkIsRTs7O0FBQTFCK0MsaUM7QUFJQXBCLHFCLEdBQVFvQixpQkFBaUIsQ0FBQ0YsSUFBbEIsQ0FBdUJwQyxHQUF2QixDQUEyQixVQUFDTixHQUFEO0FBQUEseURBQ2xDQSxHQUFHLENBQUNJLElBQUosRUFEa0M7QUFFckNWLHNCQUFFLEVBQUVNLEdBQUcsQ0FBQ047QUFGNkI7QUFBQSxpQkFBM0IsQzs7dUJBSWtCN0IsUUFBUSxDQUNuQ0csU0FEMkIsR0FFM0JDLFVBRjJCLENBRWhCLE1BRmdCLEVBRzNCNEIsR0FIMkIsRTs7O0FBQTFCZ0QsaUM7QUFJQWxELHNCLEdBQVNrRCxpQkFBaUIsQ0FBQ0gsSUFBbEIsQ0FBdUJwQyxHQUF2QixDQUEyQixVQUFDTixHQUFEO0FBQUEseURBQ25DQSxHQUFHLENBQUNJLElBQUosRUFEbUM7QUFFdENWLHNCQUFFLEVBQUVNLEdBQUcsQ0FBQ047QUFGOEI7QUFBQSxpQkFBM0IsQztpREFJUjtBQUFDckMsc0JBQUksRUFBSkEsSUFBRDtBQUFNRCwyQkFBUyxFQUFUQSxTQUFOO0FBQWlCb0UsdUJBQUssRUFBTEEsS0FBakI7QUFBd0I3Qix3QkFBTSxFQUFOQTtBQUF4QixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpFdUIyQiw0Q0FBSyxDQUFDd0IsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjlmMjQ0Njk4MTZjNGU1NWQ3Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZGIuanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGUgPSBudWxsXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dDaXRpZXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgZW1wbG95ZXJzIDogcHJvcHMuZW1wbG95ZXJzIHx8IFtdLFxyXG4gICAgICAgICAgICBhcmVhcyA6IHByb3BzLmFyZWFzIHx8IFtdLFxyXG4gICAgICAgICAgICBqb2JzIDogcHJvcHMuam9icyB8fCBbXSxcclxuICAgICAgICAgICAgY2l0aWVzIDogcHJvcHMuY2l0aWVzIHx8IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YWJsZSgpXHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplRGF0YWJsZSgpe1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZT0kKHRoaXMuZGF0YXRhYmxlUmVmLmN1cnJlbnQpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzMsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoVGFibGUgPSAoKSA9PntcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGUuY2xlYXIoKVxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIEVtcGxveWVyXHJcbiAgICAgICAgICAgIC5nZXRJbml0aWFsUHJvcHMoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llcnMgOiByZXNwb25zZS5lbXBsb3llcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgam9icyA6IHJlc3BvbnNlLmpvYnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKSBcclxuXHJcbiAgICAgICAgY29uc3Qgam9iUXVlcnlTbmFwc2hvdEpvYiA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImpvYlwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgam9icyA9IGpvYlF1ZXJ5U25hcHNob3RKb2IuZG9jcy5tYXAoKGRvYykgPT4oe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3Qgam9iUXVlcnlTbmFwc2hvdEVtcCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImVtcGxveWVyXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBlbXBsb3llcnMgPSBqb2JRdWVyeVNuYXBzaG90RW1wLmRvY3MubWFwKChkb2MpID0+KHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgYXJlYVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJhcmVhXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBhcmVhcyA9IGFyZWFRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpPT4oe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBjaXR5UXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImNpdHlcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IGNpdHlRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpPT4oe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge2pvYnMsZW1wbG95ZXJzLCBhcmVhcywgY2l0aWVzfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYWRkSm9iPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5hZGQoe1xyXG4gICAgICAgICAgICBKb2JOYW1lOnRoaXMuc3RhdGUuSm9iTmFtZSxcclxuICAgICAgICAgICAgSm9iRW1haWw6dGhpcy5zdGF0ZS5Kb2JFbWFpbCxcclxuICAgICAgICAgICAgSm9iUGhvbmU6dGhpcy5zdGF0ZS5Kb2JQaG9uZSxcclxuICAgICAgICAgICAgSm9iQWRkcmVzczp0aGlzLnN0YXRlLkpvYkFkZHJlc3MsXHJcbiAgICAgICAgICAgIEpvYlN0YXR1czp0aGlzLnN0YXRlLkpvYlN0YXR1cyxcclxuICAgICAgICAgICAgTWluU2FsYXJ5OnRoaXMuc3RhdGUuTWluU2FsYXJ5LFxyXG4gICAgICAgICAgICBNYXhTYWxhcnk6dGhpcy5zdGF0ZS5NYXhTYWxhcnksXHJcbiAgICAgICAgICAgIFdvcmtpbmdEYXlzOnRoaXMuc3RhdGUuV29ya2luZ0RheXMsXHJcbiAgICAgICAgICAgIFdvcmtpbmdIb3Vyczp0aGlzLnN0YXRlLldvcmtpbmdIb3VycyxcclxuICAgICAgICAgICAgTWluQWdlOnRoaXMuc3RhdGUuTWluQWdlLFxyXG4gICAgICAgICAgICBjaXR5IDogdGhpcy5zdGF0ZS5jaXR5LFxyXG4gICAgICAgICAgICBhcmVhIDogdGhpcy5zdGF0ZS5hcmVhLFxyXG4gICAgICAgICAgICBKcFNraWxsOnRoaXMuc3RhdGUuSnBTa2lsbCxcclxuICAgICAgICAgICAgSkVtcGxveWVyIDogdGhpcy5zdGF0ZS5KRW1wbG95ZXIsXHJcbiAgICAgICAgICAgIEpvYkRlc2NyaXB0aW9uOnRoaXMuc3RhdGUuSm9iRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFF1YWxpZmljYXRpb246dGhpcy5zdGF0ZS5RdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICBQb3N0ZWREYXRlOnRvZGF5XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgSm9iTmFtZTonJyxcclxuICAgICAgICAgICAgSm9iRW1haWw6JycsXHJcbiAgICAgICAgICAgIEpvYlBob25lOicnLFxyXG4gICAgICAgICAgICBKb2JBZGRyZXNzOicnLFxyXG4gICAgICAgICAgICBKb2JTdGF0dXM6JycsXHJcbiAgICAgICAgICAgIE1pblNhbGFyeTonJyxcclxuICAgICAgICAgICAgTWF4U2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBXb3JraW5nRGF5czonJyxcclxuICAgICAgICAgICAgV29ya2luZ0hvdXJzOicnLFxyXG4gICAgICAgICAgICBNaW5BZ2U6JycsXHJcbiAgICAgICAgICAgIEpwU2tpbGw6JycsXHJcbiAgICAgICAgICAgIGNpdHkgOiAnJyxcclxuICAgICAgICAgICAgYXJlYSA6ICcnLFxyXG4gICAgICAgICAgICBKRW1wbG95ZXIgOiAnJyxcclxuICAgICAgICAgICAgSm9iRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgIFF1YWxpZmljYXRpb246JycsXHJcbiAgICAgICAgICAgIFBvc3RlZERhdGU6JycsXHJcbiAgICAgICAgICAgIHNob3dDaXRpZXMgOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKClcclxuICAgIH1cclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiRW1wTG9jYXRpb25cIil7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2l0aWVzKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NpdGllcyA6IHRydWV9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENpdGllcyA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgbGV0IGNpdGllcyA9IFtdXHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignY2l0eScpLndoZXJlKCdhcmVhX2lkJywnPT0nLGlkKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90PT57XHJcbiAgICAgICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jPT57XHJcbiAgICAgICAgICAgICAgICBjaXRpZXMucHVzaChPYmplY3QuYXNzaWduKHtpZCA6IGRvYy5pZCwuLi5kb2MuZGF0YSgpfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NpdGllcyA6IGNpdGllc30pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldEpvYkNvdW50PShpZCk9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qb2JzLm1hcChqb2I9PntcclxuICAgICAgICAgICAgaWYoam9iLkpFbXBsb3llciA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjb3VudCArK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGNvdW50XHJcbiAgICB9XHJcblxyXG4gICAgcGFzc0FkZElkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7SkVtcGxveWVyIDogaWR9KVxyXG4gICAgfVxyXG4gICAgcGFzc0VkaXRJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgbGV0IGZpcmViYXNlPWxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgbGV0IGRhdGE9e31cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpLmRvYyhpZCkuZ2V0KCkudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICBkYXRhPXNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIEVtcE5hbWU6ZGF0YS5FbXBOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEVtcEVtYWlsOmRhdGEuRW1wRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgRW1wQWRkcmVzczpkYXRhLkVtcEFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgRW1wQ2l0eTpkYXRhLkVtcENpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgRW1wTG9jYXRpb246ZGF0YS5FbXBMb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBFbXBQaG9uZTpkYXRhLkVtcFBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIEVtcFdlYnNpdGU6ZGF0YS5FbXBXZWJzaXRlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhc3NEZWxldGVJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlbGV0ZV9pZCA6IGlkfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFbXBsb3llciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZmlyZWJhc2U9bG9hZEZpcmViYXNlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJykuZG9jKHRoaXMuc3RhdGUuZWRpdF9pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIEVtcE5hbWU6dGhpcy5zdGF0ZS5FbXBOYW1lLFxyXG4gICAgICAgICAgICAgICAgRW1wRW1haWw6dGhpcy5zdGF0ZS5FbXBFbWFpbCxcclxuICAgICAgICAgICAgICAgIEVtcEFkZHJlc3M6dGhpcy5zdGF0ZS5FbXBBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgRW1wQ2l0eTp0aGlzLnN0YXRlLkVtcENpdHksXHJcbiAgICAgICAgICAgICAgICBFbXBMb2NhdGlvbjp0aGlzLnN0YXRlLkVtcExvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgRW1wUGhvbmU6dGhpcy5zdGF0ZS5FbXBQaG9uZSxcclxuICAgICAgICAgICAgICAgIEVtcFdlYnNpdGU6dGhpcy5zdGF0ZS5FbXBXZWJzaXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZUVtcGxveWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZT1sb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKVxyXG4gICAgICAgICAgICAuZG9jKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgICAgICAgICAuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXIgPSB0aGlzLnN0YXRlLmVtcGxveWVyc1xyXG4gICAgICAgIGNvbnN0IGFyZWFzID0gdGhpcy5zdGF0ZS5hcmVhc1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuc3RhdGUuY2l0aWVzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+R29sZGVuIFNuaXRjaCB8IEFkbWluPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxib2R5IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXIgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJlZGl0TW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5FZGl0IEVtcGxveWVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkVtcE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkVtcE5hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiRW1wRW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkVtcEVtYWlsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJFbXBQaG9uZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wUGhvbmV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2Vic2l0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkVtcFdlYnNpdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5FbXBXZWJzaXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkVtcFdlYnNpdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QXJlYTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibG9jYXRpb25cIiBuYW1lPVwiRW1wTG9jYXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7Zm9udFNpemU6IFwic21hbGxcIn19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuRW1wTG9jYXRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FyZWFzICYmIGFyZWFzLm1hcChhcmVhPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2FyZWEuaWR9IHNlbGVjdGVkID0ge3RoaXMuc3RhdGUuYXJlYSA9PSBhcmVhLmlkID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gPnthcmVhLmFyZWFOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNpdHlcIiBuYW1lPVwiRW1wQ2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5FbXBDaXR5fSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaXRpZXMgJiYgY2l0aWVzLm1hcChjaXR5PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdHkuaWR9IHNlbGVjdGVkID0ge3RoaXMuc3RhdGUuY2l0eSA9PSBjaXR5LmlkID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gPntjaXR5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkVtcEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkVtcEFkZHJlc3N9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXBkYXRlRW1wbG95ZXJ9IGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlVwZGF0ZSBEZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZGVsZXRlQ29uZmlybVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5IZXkgQWRtaW4gISEhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlIFlvdSBTdXJlIHRvIERlbGV0ZSB0aGUgRW1wbG95ZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5kZWxldGVFbXBsb3llcn0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhZGRKb2JNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWRkIEpvYjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIkpvYk5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiSm9iRW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9ICByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiKzEyMzQ1Njc4XCIgbmFtZT1cIkpvYlBob25lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKb2JBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1wbG95bWVudCBTdGF0dXMgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiam9iX3N0c1wiIG5hbWU9XCJKb2JTdGF0dXNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7Zm9udFNpemU6IFwic21hbGxcIn19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCIgbGFiZWw9XCItLVNlbGVjdCBFbXBsb3ltZW50IFN0YXR1cy0tXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZnVsbCB0aW1lXCI+RnVsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYXJ0IHRpbWVcIj5QYXJ0IFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNhbGFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0+TWluaW11bTwvYT4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMTAwLDAwMFwiIG5hbWU9XCJNaW5TYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0+TWF4aW11bTwvYT4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMTAwLDAwMFwiIG5hbWU9XCJNYXhTYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldvcmtpbmcgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIldvcmtpbmdEYXlzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldvcmtpbmcgSG91cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJXb3JraW5nSG91cnNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwIHByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFnZSBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxOFwiIG5hbWU9XCJNaW5BZ2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gSmFwYW5lc2UgU2tpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwianBza2lsbFwiIG5hbWU9XCJKcFNraWxsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e2ZvbnRTaXplOiBcInNtYWxsXCJ9fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiIGxhYmVsPVwiLS0tU2VsZWN0LS0tXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTjNcIj5OMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTjJcIj5OMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTjFcIj5OMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiYXJlYVwiIG5hbWU9XCJFbXBMb2NhdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBsYWJlbD1cIi0tLVNlbGVjdC0tLVwiIHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FyZWFzICYmIGFyZWFzLm1hcChhcmVhPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthcmVhLmlkfT57YXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0NpdGllcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Y2l0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tmb250U2l6ZTogXCJzbWFsbFwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBsYWJlbD1cIi0tLVNlbGVjdC0tLVwiIHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdGllcyAmJiBjaXRpZXMubWFwKGNpdHk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdHkuaWR9PntjaXR5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpvYkRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk90aGVyIFF1YWxpZmljYXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlF1YWxpZmljYXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEpvYn0gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+QWRkIEpvYjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2xvZ29vLnBuZ1wiIGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi91c2VyXCIgY2xhc3M9XCJzaW1wbGUtdGV4dCBsb2dvLW5vcm1hbFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvbGRlbiBTbml0Y2ggQWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdGFibGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJub3ctdWktaWNvbnMgZGVzaWduX2J1bGxldC1saXN0LTY3XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhYmxlIExpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibm93LXVpLWljb25zIHVzZXJzX3NpbmdsZS0wMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFuZWxcIiBpZD1cIm1haW4tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItdHJhbnNwYXJlbnQgIGJnLXByaW1hcnkgIG5hdmJhci1hYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1iYXIgYmFyMVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1iYXIgYmFyMlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1iYXIgYmFyM1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBzdHlsZT17e2ZvbnRTaXplOiBcIngtbGFyZ2VcIn19PkVtcGxveWVyIFRhYmxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvblwiIGFyaWEtY29udHJvbHM9XCJuYXZpZ2F0aW9uLWluZGV4XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1iYXIgbmF2YmFyLWtlYmFiXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItYmFyIG5hdmJhci1rZWJhYlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWJhciBuYXZiYXIta2ViYWJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiL2luZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbXBsb3llclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIi9qb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyIHBhbmVsLWhlYWRlci1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPiBFbXBsb3llcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwiZXhhbXBsZVwiIHJlZj17dGhpcy5kYXRhdGFibGVSZWZ9IGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17e2ZvbnRTaXplOjEyfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhvbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldlYnNpdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkpvYiBDb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbXBsb3llciAmJiAgZW1wbG95ZXIubWFwKEVtcGxveWVyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBpZD17RW1wbG95ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuRW1wTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuRW1wRW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkVtcFBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBXZWJzaXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5FbXBMb2NhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuRW1wQ2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuRW1wQWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5nZXRKb2JDb3VudChFbXBsb3llci5pZCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2FkZEpvYk1vZGFsXCIgb25DbGljaz17KCk9PnRoaXMucGFzc0FkZElkKEVtcGxveWVyLmlkKX0gdHlwZT1cImJ1dHRvblwiPiBBZGQgPC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2VkaXRNb2RhbFwiIG9uQ2xpY2s9eygpPT50aGlzLnBhc3NFZGl0SWQoRW1wbG95ZXIuaWQpfSB0eXBlPVwic3VibWl0XCI+IEVkaXQgPC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2RlbGV0ZUNvbmZpcm1cIiBvbkNsaWNrPXsoKT0+dGhpcy5wYXNzRGVsZXRlSWQoRW1wbG95ZXIuaWQpfSB0eXBlPVwic3VibWl0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hZGRfZW1wbG95ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIj5BZGQgRW1wbG95ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0wqkyMDIwIEdvbGRlblNuaXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L2h0bWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
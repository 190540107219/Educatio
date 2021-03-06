function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-modules-public-holidays-module"], {
  /***/
  "./projects/demos/app/demo-modules/public-holidays/component.ts":
  /*!**********************************************************************!*\
    !*** ./projects/demos/app/demo-modules/public-holidays/component.ts ***!
    \**********************************************************************/

  /*! exports provided: DemoComponent */

  /***/
  function projectsDemosAppDemoModulesPublicHolidaysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoComponent", function () {
      return DemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-calendar */
    "./projects/angular-calendar/src/index.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../demo-utils/calendar-header.component */
    "./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
    "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts");

    function DemoComponent_mwl_calendar_month_view_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-month-view", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events);
      }
    }

    function DemoComponent_mwl_calendar_week_view_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-week-view", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
      }
    }

    function DemoComponent_mwl_calendar_day_view_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-day-view", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
      }
    } // get your own key from https://holidayapi.com/


    var HOLIDAY_API_KEY = '8eb2582d-3a4c-4fc5-94c8-3e21487d4e23'; // change this to your own country

    var COUNTRY_CODE = 'US';

    var DemoComponent = /*#__PURE__*/function () {
      function DemoComponent(http, cdr) {
        _classCallCheck(this, DemoComponent);

        this.http = http;
        this.cdr = cdr;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Month;
        this.viewDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfYear"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subYears"])(new Date(), 1));
        this.events = [];
      }

      _createClass(DemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchHolidays();
        }
      }, {
        key: "fetchHolidays",
        value: function fetchHolidays() {
          var _this = this;

          this.http.get('https://holidayapi.com/v1/holidays', {
            params: {
              country: COUNTRY_CODE,
              year: String(new Date().getFullYear() - 1),
              key: HOLIDAY_API_KEY
            }
          }).subscribe(function (_ref) {
            var holidays = _ref.holidays;
            _this.events = holidays.map(function (holiday) {
              return {
                start: new Date(holiday.date),
                title: holiday.name,
                allDay: true,
                meta: {
                  type: 'holiday',
                  holiday: holiday
                }
              };
            });

            _this.cdr.markForCheck();
          });
        }
      }]);

      return DemoComponent;
    }();

    DemoComponent.??fac = function DemoComponent_Factory(t) {
      return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    DemoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DemoComponent,
      selectors: [["mwl-demo-component"]],
      decls: 12,
      vars: 6,
      consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", 4, "ngSwitchCase"], [3, "viewDate", "events"]],
      template: function DemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-demo-utils-calendar-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) {
            return ctx.view = $event;
          })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) {
            return ctx.viewDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DemoComponent_mwl_calendar_month_view_5_Template, 2, 2, "mwl-calendar-month-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DemoComponent_mwl_calendar_week_view_7_Template, 2, 2, "mwl-calendar-week-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DemoComponent_mwl_calendar_day_view_9_Template, 2, 2, "mwl-calendar-day-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "day");
        }
      },
      directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_6__["CalendarMonthViewComponent"], _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_7__["CalendarWeekViewComponent"], _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_8__["CalendarDayViewComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-demo-component',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          templateUrl: 'template.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules/public-holidays/module.ts":
  /*!*******************************************************************!*\
    !*** ./projects/demos/app/demo-modules/public-holidays/module.ts ***!
    \*******************************************************************/

  /*! exports provided: DemoModule */

  /***/
  function projectsDemosAppDemoModulesPublicHolidaysModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoModule", function () {
      return DemoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-calendar */
    "./projects/angular-calendar/src/index.ts");
    /* harmony import */


    var _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../demo-utils/module */
    "./projects/demos/app/demo-modules/demo-utils/module.ts");
    /* harmony import */


    var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component */
    "./projects/demos/app/demo-modules/public-holidays/component.ts");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/calendar.module */
    "./projects/angular-calendar/src/modules/calendar.module.ts");

    var DemoModule = function DemoModule() {
      _classCallCheck(this, DemoModule);
    };

    DemoModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: DemoModule
    });
    DemoModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function DemoModule_Factory(t) {
        return new (t || DemoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DemoModule, {
        declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
          }), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: '',
            component: _component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]
          }])],
          declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]],
          exports: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=demo-modules-public-holidays-module-es5.js.map
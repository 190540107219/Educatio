function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-modules-selectable-period-module"], {
  /***/
  "./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts":
  /*!*********************************************************************************!*\
    !*** ./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CalendarHeaderComponent */

  /***/
  function projectsDemosAppDemoModulesDemoUtilsCalendarHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function () {
      return CalendarHeaderComponent;
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


    var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
    "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");

    var CalendarHeaderComponent = function CalendarHeaderComponent() {
      _classCallCheck(this, CalendarHeaderComponent);

      this.locale = 'en';
      this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
    };

    CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) {
      return new (t || CalendarHeaderComponent)();
    };

    CalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarHeaderComponent,
      selectors: [["mwl-demo-utils-calendar-header"]],
      inputs: {
        view: "view",
        viewDate: "viewDate",
        locale: "locale"
      },
      outputs: {
        viewChange: "viewChange",
        viewDateChange: "viewDateChange"
      },
      decls: 43,
      vars: 16,
      consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]],
      template: function CalendarHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() {
            return ctx.viewDateChange.next(ctx.viewDate);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            Previous\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() {
            return ctx.viewDateChange.next(ctx.viewDate);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            Today\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() {
            return ctx.viewDateChange.next(ctx.viewDate);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            Next\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() {
            return ctx.viewChange.emit(ctx.CalendarView.Month);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Month\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() {
            return ctx.viewChange.emit(ctx.CalendarView.Week);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            Week\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() {
            return ctx.viewChange.emit(ctx.CalendarView.Day);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n            Day\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n  ");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
        }
      },
      directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__["CalendarPreviousViewDirective"], _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__["CalendarTodayDirective"], _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarNextViewDirective"]],
      pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__["CalendarDatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-demo-utils-calendar-header',
          template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  "
        }]
      }], null, {
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules/demo-utils/module.ts":
  /*!**************************************************************!*\
    !*** ./projects/demos/app/demo-modules/demo-utils/module.ts ***!
    \**************************************************************/

  /*! exports provided: DemoUtilsModule */

  /***/
  function projectsDemosAppDemoModulesDemoUtilsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function () {
      return DemoUtilsModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-calendar */
    "./projects/angular-calendar/src/index.ts");
    /* harmony import */


    var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-header.component */
    "./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts");

    var DemoUtilsModule = function DemoUtilsModule() {
      _classCallCheck(this, DemoUtilsModule);
    };

    DemoUtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoUtilsModule
    });
    DemoUtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoUtilsModule_Factory(t) {
        return new (t || DemoUtilsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoUtilsModule, {
        declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
        exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoUtilsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
          declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
          exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules/selectable-period/component.ts":
  /*!************************************************************************!*\
    !*** ./projects/demos/app/demo-modules/selectable-period/component.ts ***!
    \************************************************************************/

  /*! exports provided: DemoComponent */

  /***/
  function projectsDemosAppDemoModulesSelectablePeriodComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../demo-utils/calendar-header.component */
    "./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
    "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts");

    function DemoComponent_mwl_calendar_month_view_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeViewRender", function DemoComponent_mwl_calendar_month_view_8_Template_mwl_calendar_month_view_beforeViewRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.beforeMonthViewRender($event);
        })("dayClicked", function DemoComponent_mwl_calendar_month_view_8_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.dayClicked($event.day);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events);
      }
    }

    function DemoComponent_mwl_calendar_week_view_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeViewRender", function DemoComponent_mwl_calendar_week_view_10_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.beforeWeekOrDayViewRender($event);
        })("hourSegmentClicked", function DemoComponent_mwl_calendar_week_view_10_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.hourSegmentClicked($event.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
      }
    }

    function DemoComponent_mwl_calendar_day_view_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeViewRender", function DemoComponent_mwl_calendar_day_view_12_Template_mwl_calendar_day_view_beforeViewRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.beforeWeekOrDayViewRender($event);
        })("hourSegmentClicked", function DemoComponent_mwl_calendar_day_view_12_Template_mwl_calendar_day_view_hourSegmentClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.hourSegmentClicked($event.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
      }
    }

    var DemoComponent = /*#__PURE__*/function () {
      function DemoComponent() {
        _classCallCheck(this, DemoComponent);

        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Month;
        this.viewDate = new Date();
        this.events = [];
        this.selectedDays = [];
      }

      _createClass(DemoComponent, [{
        key: "dayClicked",
        value: function dayClicked(day) {
          this.selectedMonthViewDay = day;
          var selectedDateTime = this.selectedMonthViewDay.date.getTime();
          var dateIndex = this.selectedDays.findIndex(function (selectedDay) {
            return selectedDay.date.getTime() === selectedDateTime;
          });

          if (dateIndex > -1) {
            delete this.selectedMonthViewDay.cssClass;
            this.selectedDays.splice(dateIndex, 1);
          } else {
            this.selectedDays.push(this.selectedMonthViewDay);
            day.cssClass = 'cal-day-selected';
            this.selectedMonthViewDay = day;
          }
        }
      }, {
        key: "beforeMonthViewRender",
        value: function beforeMonthViewRender(_ref) {
          var _this = this;

          var body = _ref.body;
          body.forEach(function (day) {
            if (_this.selectedDays.some(function (selectedDay) {
              return selectedDay.date.getTime() === day.date.getTime();
            })) {
              day.cssClass = 'cal-day-selected';
            }
          });
        }
      }, {
        key: "hourSegmentClicked",
        value: function hourSegmentClicked(date) {
          this.selectedDayViewDate = date;
          this.addSelectedDayViewClass();
        }
      }, {
        key: "beforeWeekOrDayViewRender",
        value: function beforeWeekOrDayViewRender(event) {
          this.hourColumns = event.hourColumns;
          this.addSelectedDayViewClass();
        }
      }, {
        key: "addSelectedDayViewClass",
        value: function addSelectedDayViewClass() {
          var _this2 = this;

          this.hourColumns.forEach(function (column) {
            column.hours.forEach(function (hourSegment) {
              hourSegment.segments.forEach(function (segment) {
                delete segment.cssClass;

                if (_this2.selectedDayViewDate && segment.date.getTime() === _this2.selectedDayViewDate.getTime()) {
                  segment.cssClass = 'cal-day-selected';
                }
              });
            });
          });
        }
      }]);

      return DemoComponent;
    }();

    DemoComponent.ɵfac = function DemoComponent_Factory(t) {
      return new (t || DemoComponent)();
    };

    DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemoComponent,
      selectors: [["mwl-demo-component"]],
      decls: 15,
      vars: 6,
      consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [1, "alert", "alert-info"], [3, "ngSwitch"], [3, "viewDate", "events", "beforeViewRender", "dayClicked", 4, "ngSwitchCase"], [3, "viewDate", "events", "beforeViewRender", "hourSegmentClicked", 4, "ngSwitchCase"], [3, "viewDate", "events", "beforeViewRender", "dayClicked"], [3, "viewDate", "events", "beforeViewRender", "hourSegmentClicked"]],
      template: function DemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-demo-utils-calendar-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) {
            return ctx.view = $event;
          })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) {
            return ctx.viewDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  Click on a month view day or a time on the week or day view to select it\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DemoComponent_mwl_calendar_month_view_8_Template, 2, 2, "mwl-calendar-month-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DemoComponent_mwl_calendar_week_view_10_Template, 2, 2, "mwl-calendar-week-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DemoComponent_mwl_calendar_day_view_12_Template, 2, 2, "mwl-calendar-day-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
        }
      },
      directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_2__["CalendarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewComponent"], _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewComponent"], _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_6__["CalendarDayViewComponent"]],
      styles: ["\n      .cal-day-selected,\n      .cal-day-selected:hover {\n        background-color: deeppink !important;\n      }\n    "],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-demo-component',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          templateUrl: 'template.html',
          // don't do this in your app, its only so the styles get applied globally
          styles: ["\n      .cal-day-selected,\n      .cal-day-selected:hover {\n        background-color: deeppink !important;\n      }\n    "],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules/selectable-period/module.ts":
  /*!*********************************************************************!*\
    !*** ./projects/demos/app/demo-modules/selectable-period/module.ts ***!
    \*********************************************************************/

  /*! exports provided: DemoModule */

  /***/
  function projectsDemosAppDemoModulesSelectablePeriodModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./projects/demos/app/demo-modules/selectable-period/component.ts");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
    /* harmony import */


    var _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/calendar.module */
    "./projects/angular-calendar/src/modules/calendar.module.ts");

    var DemoModule = function DemoModule() {
      _classCallCheck(this, DemoModule);
    };

    DemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoModule
    });
    DemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoModule_Factory(t) {
        return new (t || DemoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
      }), _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, {
        declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"], _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
          }), _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
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
//# sourceMappingURL=demo-modules-selectable-period-module-es5.js.map
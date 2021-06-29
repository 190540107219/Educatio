function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts":
  /*!*************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader?lang=typescript!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
    \*************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsNode_modulesHighlightjsLoaderIndexJsLangTypescriptProjectsDemosAppDemoModulesDemoUtilsCalendarHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    &lt;div class=\"row text-center\"&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Previous\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Today\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Next\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;h3&gt;{{ viewDate | calendarDate: view + 'ViewTitle':locale }}&lt;/h3&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          &gt;\n            Month\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          &gt;\n            Week\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          &gt;\n            Day\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;br /&gt;\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter&lt;CalendarView&gt;();\n\n  @Output() viewDateChange = new EventEmitter&lt;Date&gt;();\n\n  CalendarView = CalendarView;\n}\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/colors.ts":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader?lang=typescript!./projects/demos/app/demo-modules/demo-utils/colors.ts ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsNode_modulesHighlightjsLoaderIndexJsLangTypescriptProjectsDemosAppDemoModulesDemoUtilsColorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> colors: <span class=\"hljs-built_in\">any</span> = {\n  red: {\n    primary: <span class=\"hljs-string\">'#ad2121'</span>,\n    secondary: <span class=\"hljs-string\">'#FAE3E3'</span>,\n  },\n  blue: {\n    primary: <span class=\"hljs-string\">'#1e90ff'</span>,\n    secondary: <span class=\"hljs-string\">'#D1E8FF'</span>,\n  },\n  yellow: {\n    primary: <span class=\"hljs-string\">'#e3bc08'</span>,\n    secondary: <span class=\"hljs-string\">'#FDF1BA'</span>,\n  },\n};\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/module.ts":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader?lang=typescript!./projects/demos/app/demo-modules/demo-utils/module.ts ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsNode_modulesHighlightjsLoaderIndexJsLangTypescriptProjectsDemosAppDemoModulesDemoUtilsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { FormsModule } from <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarHeaderComponent } from <span class=\"hljs-string\">'./calendar-header.component'</span>;\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoUtilsModule {}\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsDemosAppDemoModulesDemoUtilsCalendarHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter<CalendarView>();\n\n  @Output() viewDateChange = new EventEmitter<Date>();\n\n  CalendarView = CalendarView;\n}\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/colors.ts":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/colors.ts ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsDemosAppDemoModulesDemoUtilsColorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "export const colors: any = {\n  red: {\n    primary: '#ad2121',\n    secondary: '#FAE3E3',\n  },\n  blue: {\n    primary: '#1e90ff',\n    secondary: '#D1E8FF',\n  },\n  yellow: {\n    primary: '#e3bc08',\n    secondary: '#FDF1BA',\n  },\n};\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/module.ts":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsDemosAppDemoModulesDemoUtilsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { CalendarModule } from 'angular-calendar';\nimport { CalendarHeaderComponent } from './calendar-header.component';\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\nexport class DemoUtilsModule {}\n";
    /***/
  },

  /***/
  "./package.json":
  /*!**********************!*\
    !*** ./package.json ***!
    \**********************/

  /*! exports provided: name, version, description, funding, scripts, schematics, config, commitlint, repository, keywords, author, license, bugs, homepage, devDependencies, peerDependencies, dependencies, sideEffects, husky, default */

  /***/
  function packageJson(module) {
    module.exports = JSON.parse("{\"name\":\"angular-calendar\",\"version\":\"0.28.26\",\"description\":\"A calendar component for angular 6.0+ that can display events on a month, week or day view\",\"funding\":{\"url\":\"https://github.com/sponsors/mattlewis92\"},\"scripts\":{\"node:memory\":\"cross-env NODE_OPTIONS=--max_old_space_size=8192\",\"start\":\"npm run node:memory -- ng serve --open\",\"build:copy-package-json\":\"copyfiles package.json projects/angular-calendar & copyfiles package.json projects/angular-calendar/schematics/ng-add\",\"build:lib\":\"ng build angular-calendar --prod\",\"build:date-adapters\":\"tsc -p tsconfig-date-adapters.json && tsc -p tsconfig-date-adapters.json --module es2015 --outDir ./dist/angular-calendar/date-adapters/esm\",\"build:styles\":\"node-sass projects/angular-calendar/src/angular-calendar.scss | postcss --output dist/angular-calendar/css/angular-calendar.css\",\"build:clean\":\"del-cli dist\",\"build:schematics\":\"tsc projects/angular-calendar/schematics/ng-add/index.ts\",\"build:copyfiles\":\"copyfiles CHANGELOG.md README.md LICENSE dist/angular-calendar & cp-cli projects/angular-calendar/util/date-adapter-package-date-fns.json dist/angular-calendar/date-adapters/date-fns/package.json & cp-cli projects/angular-calendar/util/date-adapter-package-moment.json dist/angular-calendar/date-adapters/moment/package.json & copyfiles -u 3 projects/angular-calendar/src/**/*.scss dist/angular-calendar/scss & npx copyfiles -u 2 \\\"projects/angular-calendar/schematics/**/*.{json,js}\\\" dist/angular-calendar\",\"build\":\"run-s build:copy-package-json build:lib build:date-adapters build:styles build:schematics build:copyfiles\",\"test:single\":\"cross-env TZ=UTC ng test angular-calendar --watch=false --code-coverage\",\"test:watch\":\"cross-env TZ=UTC ng test angular-calendar\",\"test:schematics\":\"cross-env TS_NODE_COMPILER_OPTIONS={\\\\\\\"module\\\\\\\":\\\\\\\"commonjs\\\\\\\"} TS_NODE_PREFER_TS_EXTS=true mocha --require ts-node/register projects/angular-calendar/schematics/**/*.spec.ts\",\"test\":\"run-s lint test:single test:schematics build build:clean\",\"lint:styles\":\"stylelint \\\"{projects,src}/**/*.scss\\\" --fix\",\"lint:ts\":\"ng lint\",\"lint\":\"run-s lint:ts lint:styles\",\"commit\":\"git-cz\",\"codecov\":\"cat coverage/lcov.info | codecov\",\"prerelease\":\"npm test\",\"pretest:schematics\":\"npm run build:copy-package-json\",\"release:git-add\":\"git add package.json package-lock.json\",\"release:git-commit\":\"git commit -m 'chore: bump version number'\",\"release:git-changelog\":\"standard-version --first-release\",\"release:git-push\":\"git push --follow-tags origin master\",\"release:git\":\"run-s release:git-add release:git-commit release:git-changelog release:git-push\",\"release:npm-publish\":\"npm publish dist/angular-calendar\",\"release:npm\":\"run-s build release:npm-publish\",\"release\":\"run-s release:git release:npm\",\"postrelease\":\"npm run gh-pages\",\"gh-pages:demos\":\"ng build --prod\",\"gh-pages:compodoc\":\"compodoc -p tsconfig-compodoc.json -d dist/demos/docs --disableGraph --disableCoverage --disablePrivate --disableInternal --disableLifeCycleHooks --disableProtected --gaID UA-63367573-2\",\"gh-pages:deploy\":\"ng deploy\",\"gh-pages\":\"run-s build:clean gh-pages:demos gh-pages:compodoc gh-pages:deploy build:clean\"},\"schematics\":\"./schematics/collection.json\",\"config\":{\"commitizen\":{\"path\":\"@commitlint/prompt\"}},\"commitlint\":{\"extends\":[\"@commitlint/config-conventional\"]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mattlewis92/angular-calendar.git\"},\"keywords\":[\"angular\",\"angular2\",\"angular6\",\"calendar\",\"schematics\"],\"author\":\"Matt Lewis\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mattlewis92/angular-calendar/issues\"},\"homepage\":\"https://github.com/mattlewis92/angular-calendar#readme\",\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.901.12\",\"@angular-devkit/build-ng-packagr\":\"^0.901.12\",\"@angular/animations\":\"^9.1.12\",\"@angular/cdk\":\"^9.2.4\",\"@angular/cli\":\"^9.1.12\",\"@angular/common\":\"^9.1.12\",\"@angular/compiler\":\"^9.1.12\",\"@angular/compiler-cli\":\"^9.1.12\",\"@angular/core\":\"^9.1.12\",\"@angular/forms\":\"^9.1.12\",\"@angular/language-service\":\"^9.1.12\",\"@angular/localize\":\"^9.1.12\",\"@angular/platform-browser\":\"^9.1.12\",\"@angular/platform-browser-dynamic\":\"^9.1.12\",\"@angular/router\":\"^9.1.12\",\"@commitlint/cli\":\"^11.0.0\",\"@commitlint/config-conventional\":\"^11.0.0\",\"@commitlint/prompt\":\"^11.0.0\",\"@compodoc/compodoc\":\"^1.1.11\",\"@fortawesome/fontawesome-free\":\"^5.15.1\",\"@ng-bootstrap/ng-bootstrap\":\"^6.2.0\",\"@schematics/angular\":\"^9.1.12\",\"@sinonjs/fake-timers\":\"^6.0.1\",\"@stackblitz/sdk\":\"^1.5.1\",\"@types/chai\":\"^4.2.14\",\"@types/mocha\":\"^8.0.3\",\"@types/node\":\"^14.14.2\",\"@types/sinon\":\"^9.0.8\",\"@types/sinon-chai\":\"^3.2.5\",\"angular-cli-ghpages\":\"^0.6.2\",\"angulartics2\":\"^9.1.0\",\"angularx-flatpickr\":\"^6.5.1\",\"autoprefixer\":\"^10.0.1\",\"bootstrap-css-only\":\"^4.4.1\",\"chai\":\"^4.2.0\",\"codecov\":\"^3.8.0\",\"codelyzer\":\"^5.1.2\",\"commitizen\":\"^4.2.2\",\"copyfiles\":\"^2.4.0\",\"core-js\":\"^3.6.5\",\"cp-cli\":\"^2.0.0\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^5.0.0\",\"date-fns\":\"^2.16.1\",\"dayjs\":\"^1.10.4\",\"del-cli\":\"^3.0.1\",\"flatpickr\":\"^4.6.6\",\"highlightjs-loader\":\"^0.2.3\",\"husky\":\"^4.3.0\",\"karma\":\"^5.2.3\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-coverage-istanbul-reporter\":\"^3.0.3\",\"karma-mocha\":\"^2.0.1\",\"karma-mocha-reporter\":\"^2.2.5\",\"mocha\":\"^8.2.0\",\"moment\":\"^2.29.1\",\"moment-timezone\":\"^0.5.31\",\"ng-packagr\":\"^9.1.5\",\"ngx-clipboard\":\"^13.0.1\",\"ngx-contextmenu\":\"^5.4.0\",\"node-sass\":\"^4.14.1\",\"npm-run-all\":\"^4.1.5\",\"postcss\":\"^8.1.3\",\"postcss-cli\":\"^8.1.0\",\"postcss-flexibility\":\"^2.0.0\",\"prettier\":\"^2.1.2\",\"pretty-quick\":\"^3.1.0\",\"rrule\":\"^2.6.6\",\"rxjs\":\"^6.6.3\",\"sinon\":\"^9.2.0\",\"sinon-chai\":\"^3.5.0\",\"standard-version\":\"^9.0.0\",\"stylelint\":\"^13.7.2\",\"stylelint-config-prettier\":\"^8.0.2\",\"stylelint-config-standard\":\"^20.0.0\",\"ts-node\":\"^9.0.0\",\"tslint\":\"^6.1.3\",\"tslint-config-mwl\":\"^0.8.1\",\"typescript\":\"~3.8.3\",\"zone.js\":\"~0.10.2\"},\"peerDependencies\":{\"@angular/animations\":\">=6.0.0\",\"@angular/common\":\">=6.0.0\",\"@angular/core\":\">=6.0.0\"},\"dependencies\":{\"@scarf/scarf\":\"^1.1.0\",\"angular-draggable-droppable\":\"^4.6.0\",\"angular-resizable-element\":\"^3.3.5\",\"calendar-utils\":\"^0.8.4\",\"positioning\":\"^2.0.1\",\"tslib\":\"^1.14.1\"},\"sideEffects\":[\"*.css\",\"*.scss\"],\"husky\":{\"hooks\":{\"commit-msg\":\"commitlint -e\",\"pre-commit\":\"pretty-quick --staged\"}}}");
    /***/
  },

  /***/
  "./projects/angular-calendar/src/date-adapters/date-adapter.ts":
  /*!*********************************************************************!*\
    !*** ./projects/angular-calendar/src/date-adapters/date-adapter.ts ***!
    \*********************************************************************/

  /*! exports provided: DateAdapter */

  /***/
  function projectsAngularCalendarSrcDateAdaptersDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });

    var DateAdapter = function DateAdapter() {
      _classCallCheck(this, DateAdapter);
    };
    /***/

  },

  /***/
  "./projects/angular-calendar/src/date-adapters/date-fns/index.ts":
  /*!***********************************************************************!*\
    !*** ./projects/angular-calendar/src/date-adapters/date-fns/index.ts ***!
    \***********************************************************************/

  /*! exports provided: adapterFactory */

  /***/
  function projectsAngularCalendarSrcDateAdaptersDateFnsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adapterFactory", function () {
      return adapterFactory;
    });
    /* harmony import */


    var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! calendar-utils/date-adapters/date-fns */
    "./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    function adapterFactory() {
      return Object.assign(Object.assign({}, Object(calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])()), {
        addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_1__["addWeeks"],
        addMonths: date_fns__WEBPACK_IMPORTED_MODULE_1__["addMonths"],
        subDays: date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"],
        subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_1__["subWeeks"],
        subMonths: date_fns__WEBPACK_IMPORTED_MODULE_1__["subMonths"],
        getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_1__["getISOWeek"],
        setDate: date_fns__WEBPACK_IMPORTED_MODULE_1__["setDate"],
        setMonth: date_fns__WEBPACK_IMPORTED_MODULE_1__["setMonth"],
        setYear: date_fns__WEBPACK_IMPORTED_MODULE_1__["setYear"],
        getDate: date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"],
        getYear: date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"]
      });
    }
    /***/

  },

  /***/
  "./projects/angular-calendar/src/index.ts":
  /*!************************************************!*\
    !*** ./projects/angular-calendar/src/index.ts ***!
    \************************************************/

  /*! exports provided: CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarUtils, CalendarA11y, CalendarEventTimesChangedEventType, DateAdapter, CalendarView, DAYS_OF_WEEK, CalendarCommonModule, CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule, CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, CalendarModule */

  /***/
  function projectsAngularCalendarSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modules/calendar.module */
    "./projects/angular-calendar/src/modules/calendar.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarEventTitleFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["MOMENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMomentDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarNativeDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarAngularDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarUtils"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarA11y"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarEventTimesChangedEventType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["DateAdapter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["DAYS_OF_WEEK"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarCommonModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMonthViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["collapseAnimation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMonthModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarWeekViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["getWeekViewPeriod"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarWeekModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDayViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDayModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"];
    });
    /*
     * Public API Surface of angular-calendar
     */

    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/calendar.module.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/calendar.module.ts ***!
    \******************************************************************/

  /*! exports provided: CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarUtils, CalendarA11y, CalendarEventTimesChangedEventType, DateAdapter, CalendarView, DAYS_OF_WEEK, CalendarCommonModule, CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule, CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, CalendarModule */

  /***/
  function projectsAngularCalendarSrcModulesCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common/calendar-common.module */
    "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
    /* harmony import */


    var _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./month/calendar-month.module */
    "./projects/angular-calendar/src/modules/month/calendar-month.module.ts");
    /* harmony import */


    var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./week/calendar-week.module */
    "./projects/angular-calendar/src/modules/week/calendar-week.module.ts");
    /* harmony import */


    var _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./day/calendar-day.module */
    "./projects/angular-calendar/src/modules/day/calendar-day.module.ts");
    /* harmony import */


    var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/calendar-utils.provider */
    "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["MOMENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarMomentDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarNativeDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarAngularDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarUtils"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarA11y"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTimesChangedEventType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["collapseAnimation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["getWeekViewPeriod"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"];
    });
    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */


    var CalendarModule = /*#__PURE__*/function () {
      function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      }

      _createClass(CalendarModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarModule,
            providers: [dateAdapter, config.eventTitleFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"], config.dateFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"], config.utils || _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"], config.a11y || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarA11y"]]
          };
        }
      }]);

      return CalendarModule;
    }();

    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      },
      imports: [[_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, {
        imports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]],
        exports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]],
          exports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"], _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"], _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts ***!
    \****************************************************************************/

  /*! exports provided: CalendarA11yPipe */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarA11yPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11yPipe", function () {
      return CalendarA11yPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-a11y.provider */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts");
    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */


    var CalendarA11yPipe = /*#__PURE__*/function () {
      function CalendarA11yPipe(calendarA11y, locale) {
        _classCallCheck(this, CalendarA11yPipe);

        this.calendarA11y = calendarA11y;
        this.locale = locale;
      }

      _createClass(CalendarA11yPipe, [{
        key: "transform",
        value: function transform(a11yParams, method) {
          a11yParams.locale = a11yParams.locale || this.locale;

          if (typeof this.calendarA11y[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarA11y"].prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.calendarA11y[method](a11yParams);
        }
      }]);

      return CalendarA11yPipe;
    }();

    CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
      return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarA11y"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
    };

    CalendarA11yPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "calendarA11y",
      type: CalendarA11yPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarA11yPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'calendarA11y'
        }]
      }], function () {
        return [{
          type: _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarA11y"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts":
  /*!********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts ***!
    \********************************************************************************/

  /*! exports provided: CalendarA11y */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarA11yProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return CalendarA11y;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */


    var CalendarA11y = /*#__PURE__*/function () {
      function CalendarA11y(i18nPlural) {
        _classCallCheck(this, CalendarA11y);

        this.i18nPlural = i18nPlural;
      }
      /**
       * Aria label for the badges/date of a cell
       * @example: `Saturday October 19 1 event click to expand`
       */


      _createClass(CalendarA11y, [{
        key: "monthCell",
        value: function monthCell(_ref) {
          var day = _ref.day,
              locale = _ref.locale;

          if (day.badgeTotal > 0) {
            return "\n        ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
              '=0': 'No events',
              '=1': 'One event',
              other: '# events'
            }), ",\n         click to expand\n      ");
          } else {
            return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(day.date, 'EEEE MMMM d', locale));
          }
        }
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */

      }, {
        key: "openDayEventsLandmark",
        value: function openDayEventsLandmark(_ref2) {
          var date = _ref2.date,
              locale = _ref2.locale;
          return "\n      Beginning of expanded view for ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE MMMM dd', locale), "\n    ");
        }
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */

      }, {
        key: "openDayEventsAlert",
        value: function openDayEventsAlert(_ref3) {
          var date = _ref3.date,
              locale = _ref3.locale;
          return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE MMMM dd', locale), " expanded");
        }
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */

      }, {
        key: "eventDescription",
        value: function eventDescription(_ref4) {
          var event = _ref4.event,
              locale = _ref4.locale;

          if (event.allDay === true) {
            return this.allDayEventDescription({
              event: event,
              locale: locale
            });
          }

          var aria = "\n      ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.start, 'hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + " to ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.end, 'hh:mm a', locale));
          }

          return aria;
        }
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */

      }, {
        key: "allDayEventDescription",
        value: function allDayEventDescription(_ref5) {
          var event = _ref5.event,
              locale = _ref5.locale;
          var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + ", stop time ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.end, 'MMMM d hh:mm a', locale));
          }

          return aria + ", no stop time";
        }
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */

      }, {
        key: "actionButtonLabel",
        value: function actionButtonLabel(_ref6) {
          var action = _ref6.action;
          return action.a11yLabel;
        }
        /**
         * @returns {number} Tab index to be given to month cells
         */

      }, {
        key: "monthCellTabIndex",
        value: function monthCellTabIndex() {
          return 0;
        }
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */

      }, {
        key: "hideMonthCellEvents",
        value: function hideMonthCellEvents() {
          return true;
        }
        /**
         * @returns true if event titles should be aria-hidden (global)
         */

      }, {
        key: "hideEventTitle",
        value: function hideEventTitle() {
          return true;
        }
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */

      }, {
        key: "hideWeekHourSegment",
        value: function hideWeekHourSegment() {
          return true;
        }
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */

      }, {
        key: "hideDayHourSegment",
        value: function hideDayHourSegment() {
          return true;
        }
      }]);

      return CalendarA11y;
    }();

    CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
      return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]));
    };

    CalendarA11y.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalendarA11y,
      factory: CalendarA11y.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarA11y, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts":
  /*!**************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CalendarAngularDateFormatter */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarAngularDateFormatterProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return CalendarAngularDateFormatter;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */


    var CalendarAngularDateFormatter = /*#__PURE__*/function () {
      function CalendarAngularDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarAngularDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarAngularDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref7) {
          var date = _ref7.date,
              locale = _ref7.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref8) {
          var date = _ref8.date,
              locale = _ref8.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'd', locale);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref9) {
          var date = _ref9.date,
              locale = _ref9.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'LLLL y', locale);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref10) {
          var date = _ref10.date,
              locale = _ref10.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref11) {
          var date = _ref11.date,
              locale = _ref11.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'MMM d', locale);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref12) {
          var date = _ref12.date,
              locale = _ref12.locale,
              weekStartsOn = _ref12.weekStartsOn,
              excludeDays = _ref12.excludeDays,
              daysInWeek = _ref12.daysInWeek;

          var _Object = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _Object.viewStart,
              viewEnd = _Object.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref13) {
          var date = _ref13.date,
              locale = _ref13.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref14) {
          var date = _ref14.date,
              locale = _ref14.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref15) {
          var date = _ref15.date,
              locale = _ref15.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
        }
      }]);

      return CalendarAngularDateFormatter;
    }();

    CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
      return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]));
    };

    CalendarAngularDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarAngularDateFormatter,
      factory: CalendarAngularDateFormatter.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-common.module.ts":
  /*!********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-common.module.ts ***!
    \********************************************************************************/

  /*! exports provided: CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarUtils, CalendarA11y, CalendarEventTimesChangedEventType, DateAdapter, CalendarView, DAYS_OF_WEEK, CalendarCommonModule */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return CalendarCommonModule;
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


    var _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar-event-actions.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts");
    /* harmony import */


    var _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar-event-title.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts");
    /* harmony import */


    var _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-tooltip.directive */
    "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts");
    /* harmony import */


    var _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-previous-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts");
    /* harmony import */


    var _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendar-next-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts");
    /* harmony import */


    var _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calendar-today.directive */
    "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts");
    /* harmony import */


    var _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");
    /* harmony import */


    var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./calendar-event-title.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts");
    /* harmony import */


    var _click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./keydown-enter.directive */
    "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts");
    /* harmony import */


    var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./calendar-event-title-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts");
    /* harmony import */


    var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./calendar-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts");
    /* harmony import */


    var _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./calendar-utils.provider */
    "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
    /* harmony import */


    var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./calendar-a11y.provider */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts");
    /* harmony import */


    var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_12__["CalendarEventTitleFormatter"];
    });
    /* harmony import */


    var _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./calendar-moment-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_17__["MOMENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_17__["CalendarMomentDateFormatter"];
    });
    /* harmony import */


    var _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./calendar-native-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_18__["CalendarNativeDateFormatter"];
    });
    /* harmony import */


    var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./calendar-angular-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_19__["CalendarAngularDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_13__["CalendarDateFormatter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_14__["CalendarUtils"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_15__["CalendarA11y"];
    });
    /* harmony import */


    var _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./calendar-event-times-changed-event.interface */
    "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_20__["CalendarEventTimesChangedEventType"];
    });
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_21__["DateAdapter"];
    });
    /* harmony import */


    var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./calendar-view.enum */
    "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return _calendar_view_enum__WEBPACK_IMPORTED_MODULE_22__["CalendarView"];
    });
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return calendar_utils__WEBPACK_IMPORTED_MODULE_23__["DAYS_OF_WEEK"];
    });
    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */


    var CalendarCommonModule = /*#__PURE__*/function () {
      function CalendarCommonModule() {
        _classCallCheck(this, CalendarCommonModule);
      }

      _createClass(CalendarCommonModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarCommonModule,
            providers: [dateAdapter, config.eventTitleFormatter || _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_12__["CalendarEventTitleFormatter"], config.dateFormatter || _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_13__["CalendarDateFormatter"], config.utils || _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_14__["CalendarUtils"], config.a11y || _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_15__["CalendarA11y"]]
          };
        }
      }]);

      return CalendarCommonModule;
    }();

    CalendarCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarCommonModule
    });
    CalendarCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarCommonModule_Factory(t) {
        return new (t || CalendarCommonModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarCommonModule, {
        declarations: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"], _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"], _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"], _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"], _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"], _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"], _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"], _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_16__["CalendarA11yPipe"], _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__["KeydownEnterDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"], _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"], _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"], _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"], _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"], _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"], _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"], _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_16__["CalendarA11yPipe"], _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__["KeydownEnterDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"], _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"], _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"], _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"], _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"], _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"], _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"], _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_16__["CalendarA11yPipe"], _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__["KeydownEnterDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"], _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"], _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"], _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"], _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"], _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"], _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"], _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"], _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_16__["CalendarA11yPipe"], _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__["KeydownEnterDirective"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]],
          entryComponents: [_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts":
  /*!******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts ***!
    \******************************************************************************************/

  /*! exports provided: CalendarDateFormatter */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarDateFormatterProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return CalendarDateFormatter;
    });
    /* harmony import */


    var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./calendar-angular-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */


    var CalendarDateFormatter = /*#__PURE__*/function (_calendar_angular_dat) {
      _inherits(CalendarDateFormatter, _calendar_angular_dat);

      var _super = _createSuper(CalendarDateFormatter);

      function CalendarDateFormatter() {
        _classCallCheck(this, CalendarDateFormatter);

        return _super.apply(this, arguments);
      }

      return CalendarDateFormatter;
    }(_calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__["CalendarAngularDateFormatter"]);

    CalendarDateFormatter.ɵfac = function CalendarDateFormatter_Factory(t) {
      return ɵCalendarDateFormatter_BaseFactory(t || CalendarDateFormatter);
    };

    CalendarDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarDateFormatter,
      factory: CalendarDateFormatter.ɵfac
    });

    var ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarDateFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts ***!
    \****************************************************************************/

  /*! exports provided: CalendarDatePipe */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDatePipe", function () {
      return CalendarDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-date-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts");
    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */


    var CalendarDatePipe = /*#__PURE__*/function () {
      function CalendarDatePipe(dateFormatter, locale) {
        _classCallCheck(this, CalendarDatePipe);

        this.dateFormatter = dateFormatter;
        this.locale = locale;
      }

      _createClass(CalendarDatePipe, [{
        key: "transform",
        value: function transform(date, method) {
          var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
          var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

          if (typeof this.dateFormatter[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"].prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
          });
        }
      }]);

      return CalendarDatePipe;
    }();

    CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
      return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
    };

    CalendarDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "calendarDate",
      type: CalendarDatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'calendarDate'
        }]
      }], function () {
        return [{
          type: _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts":
  /*!***************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts ***!
    \***************************************************************************************/

  /*! exports provided: CalendarDragHelper */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarDragHelperProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDragHelper", function () {
      return CalendarDragHelper;
    });
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");

    var CalendarDragHelper = /*#__PURE__*/function () {
      function CalendarDragHelper(dragContainerElement, draggableElement) {
        _classCallCheck(this, CalendarDragHelper);

        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }

      _createClass(CalendarDragHelper, [{
        key: "validateDrag",
        value: function validateDrag(_ref16) {
          var x = _ref16.x,
              y = _ref16.y,
              snapDraggedEvents = _ref16.snapDraggedEvents,
              dragAlreadyMoved = _ref16.dragAlreadyMoved,
              transform = _ref16.transform;

          if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
              left: this.startPosition.left + transform.x,
              right: this.startPosition.right + transform.x,
              top: this.startPosition.top + transform.y,
              bottom: this.startPosition.bottom + transform.y
            });
            return (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isWithinThreshold"])({
              x: x,
              y: y
            }) || dragAlreadyMoved) && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isInside"])(this.dragContainerElement.getBoundingClientRect(), newRect);
          } else {
            return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isWithinThreshold"])({
              x: x,
              y: y
            }) || dragAlreadyMoved;
          }
        }
      }]);

      return CalendarDragHelper;
    }();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts":
  /*!******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CalendarEventActionsComponent */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarEventActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventActionsComponent", function () {
      return CalendarEventActionsComponent;
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


    var _click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keydown-enter.directive */
    "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts");
    /* harmony import */


    var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        action: a0
      };
    };

    function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var action_r7 = ctx.$implicit;

          var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;

          return action_r7.onClick({
            event: event_r3,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var action_r7 = ctx.$implicit;

          var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;

          return action_r7.onClick({
            event: event_r3,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
      }
    }

    function CalendarEventActionsComponent_ng_template_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template, 3, 8, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var event_r3 = ctx_r13.event;
        var trackByActionId_r4 = ctx_r13.trackByActionId;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
      }
    }

    function CalendarEventActionsComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_span_1_Template, 4, 2, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
      }

      if (rf & 2) {
        var event_r3 = ctx.event;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r3.actions);
      }
    }

    function CalendarEventActionsComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        trackByActionId: a1
      };
    };

    var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
      _classCallCheck(this, CalendarEventActionsComponent);

      this.trackByActionId = function (index, action) {
        return action.id ? action.id : action;
      };
    };

    CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
      return new (t || CalendarEventActionsComponent)();
    };

    CalendarEventActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarEventActionsComponent,
      selectors: [["mwl-calendar-event-actions"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 6,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
      template: function CalendarEventActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventActionsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _click_directive__WEBPACK_IMPORTED_MODULE_2__["ClickDirective"], _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__["KeydownEnterDirective"]],
      pipes: [_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__["CalendarA11yPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-event-actions',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts":
  /*!******************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts ***!
    \******************************************************************************************************/

  /*! exports provided: CalendarEventTimesChangedEventType */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarEventTimesChangedEventInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return CalendarEventTimesChangedEventType;
    });

    var CalendarEventTimesChangedEventType;

    (function (CalendarEventTimesChangedEventType) {
      CalendarEventTimesChangedEventType["Drag"] = "drag";
      CalendarEventTimesChangedEventType["Drop"] = "drop";
      CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts":
  /*!*************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts ***!
    \*************************************************************************************************/

  /*! exports provided: CalendarEventTitleFormatter */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarEventTitleFormatterProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return CalendarEventTitleFormatter;
    });
    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */


    var CalendarEventTitleFormatter = /*#__PURE__*/function () {
      function CalendarEventTitleFormatter() {
        _classCallCheck(this, CalendarEventTitleFormatter);
      }

      _createClass(CalendarEventTitleFormatter, [{
        key: "month",

        /**
         * The month view event title.
         */
        value: function month(event, title) {
          return event.title;
        }
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "monthTooltip",
        value: function monthTooltip(event, title) {
          return event.title;
        }
        /**
         * The week view event title.
         */

      }, {
        key: "week",
        value: function week(event, title) {
          return event.title;
        }
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "weekTooltip",
        value: function weekTooltip(event, title) {
          return event.title;
        }
        /**
         * The day view event title.
         */

      }, {
        key: "day",
        value: function day(event, title) {
          return event.title;
        }
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "dayTooltip",
        value: function dayTooltip(event, title) {
          return event.title;
        }
      }]);

      return CalendarEventTitleFormatter;
    }();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts":
  /*!****************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CalendarEventTitleComponent */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarEventTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleComponent", function () {
      return CalendarEventTitleComponent;
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


    var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar-event-title.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts");
    /* harmony import */


    var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");

    var _c0 = function _c0() {
      return {};
    };

    function CalendarEventTitleComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
      }

      if (rf & 2) {
        var event_r3 = ctx.event;
        var view_r4 = ctx.view;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0), "hideEventTitle"));
      }
    }

    function CalendarEventTitleComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        view: a1
      };
    };

    var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
      _classCallCheck(this, CalendarEventTitleComponent);
    };

    CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
      return new (t || CalendarEventTitleComponent)();
    };

    CalendarEventTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarEventTitleComponent,
      selectors: [["mwl-calendar-event-title"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate",
        view: "view"
      },
      decls: 6,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
      template: function CalendarEventTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventTitleComponent_ng_template_1_Template, 6, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventTitleComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.view));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      pipes: [_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__["CalendarEventTitlePipe"], _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__["CalendarA11yPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-event-title',
          template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts":
  /*!***********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts ***!
    \***********************************************************************************/

  /*! exports provided: CalendarEventTitlePipe */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarEventTitlePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitlePipe", function () {
      return CalendarEventTitlePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-event-title-formatter.provider */
    "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts");

    var CalendarEventTitlePipe = /*#__PURE__*/function () {
      function CalendarEventTitlePipe(calendarEventTitle) {
        _classCallCheck(this, CalendarEventTitlePipe);

        this.calendarEventTitle = calendarEventTitle;
      }

      _createClass(CalendarEventTitlePipe, [{
        key: "transform",
        value: function transform(title, titleType, event) {
          return this.calendarEventTitle[titleType](event, title);
        }
      }]);

      return CalendarEventTitlePipe;
    }();

    CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
      return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"]));
    };

    CalendarEventTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "calendarEventTitle",
      type: CalendarEventTitlePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'calendarEventTitle'
        }]
      }], function () {
        return [{
          type: _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts":
  /*!*************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts ***!
    \*************************************************************************************************/

  /*! exports provided: MOMENT, CalendarMomentDateFormatter */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarMomentDateFormatterProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return MOMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return CalendarMomentDateFormatter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");

    var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */

    var CalendarMomentDateFormatter = /*#__PURE__*/function () {
      /**
       * @hidden
       */
      function CalendarMomentDateFormatter(moment, dateAdapter) {
        _classCallCheck(this, CalendarMomentDateFormatter);

        this.moment = moment;
        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarMomentDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref17) {
          var date = _ref17.date,
              locale = _ref17.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref18) {
          var date = _ref18.date,
              locale = _ref18.locale;
          return this.moment(date).locale(locale).format('D');
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref19) {
          var date = _ref19.date,
              locale = _ref19.locale;
          return this.moment(date).locale(locale).format('MMMM YYYY');
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref20) {
          var date = _ref20.date,
              locale = _ref20.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref21) {
          var date = _ref21.date,
              locale = _ref21.locale;
          return this.moment(date).locale(locale).format('MMM D');
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref22) {
          var _this = this;

          var date = _ref22.date,
              locale = _ref22.locale,
              weekStartsOn = _ref22.weekStartsOn,
              excludeDays = _ref22.excludeDays,
              daysInWeek = _ref22.daysInWeek;

          var _Object2 = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _Object2.viewStart,
              viewEnd = _Object2.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return _this.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref23) {
          var date = _ref23.date,
              locale = _ref23.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref24) {
          var date = _ref24.date,
              locale = _ref24.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref25) {
          var date = _ref25.date,
              locale = _ref25.locale;
          return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        }
      }]);

      return CalendarMomentDateFormatter;
    }();

    CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
      return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));
    };

    CalendarMomentDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalendarMomentDateFormatter,
      factory: CalendarMomentDateFormatter.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MOMENT]
          }]
        }, {
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts":
  /*!*************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts ***!
    \*************************************************************************************************/

  /*! exports provided: CalendarNativeDateFormatter */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarNativeDateFormatterProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return CalendarNativeDateFormatter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */


    var CalendarNativeDateFormatter = /*#__PURE__*/function () {
      function CalendarNativeDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarNativeDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarNativeDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref26) {
          var date = _ref26.date,
              locale = _ref26.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref27) {
          var date = _ref27.date,
              locale = _ref27.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref28) {
          var date = _ref28.date,
              locale = _ref28.locale;
          return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
          }).format(date);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref29) {
          var date = _ref29.date,
              locale = _ref29.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref30) {
          var date = _ref30.date,
              locale = _ref30.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
          }).format(date);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref31) {
          var date = _ref31.date,
              locale = _ref31.locale,
              weekStartsOn = _ref31.weekStartsOn,
              excludeDays = _ref31.excludeDays,
              daysInWeek = _ref31.daysInWeek;

          var _Object3 = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _Object3.viewStart,
              viewEnd = _Object3.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short',
              year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref32) {
          var date = _ref32.date,
              locale = _ref32.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref33) {
          var date = _ref33.date,
              locale = _ref33.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref34) {
          var date = _ref34.date,
              locale = _ref34.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }).format(date);
        }
      }]);

      return CalendarNativeDateFormatter;
    }();

    CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
      return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));
    };

    CalendarNativeDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalendarNativeDateFormatter,
      factory: CalendarNativeDateFormatter.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts":
  /*!**************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts ***!
    \**************************************************************************************/

  /*! exports provided: CalendarNextViewDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarNextViewDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNextViewDirective", function () {
      return CalendarNextViewDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-view.enum */
    "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */


    var CalendarNextViewDirective = /*#__PURE__*/function () {
      function CalendarNextViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarNextViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarNextViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
          }[this.view];

          if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Day) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_2__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, 1, this.excludeDays));
          } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Week && this.daysInWeek) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_2__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarNextViewDirective;
    }();

    CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
      return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]));
    };

    CalendarNextViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CalendarNextViewDirective,
      selectors: [["", "mwlCalendarNextView", ""]],
      hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        view: "view",
        viewDate: "viewDate",
        excludeDays: "excludeDays",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlCalendarNextView]'
        }]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]
        }];
      }, {
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts":
  /*!******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts ***!
    \******************************************************************************************/

  /*! exports provided: CalendarPreviousViewDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarPreviousViewDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarPreviousViewDirective", function () {
      return CalendarPreviousViewDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calendar-view.enum */
    "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */


    var CalendarPreviousViewDirective = /*#__PURE__*/function () {
      function CalendarPreviousViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarPreviousViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarPreviousViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
          }[this.view];

          if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Day) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_2__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, -1, this.excludeDays));
          } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Week && this.daysInWeek) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_2__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarPreviousViewDirective;
    }();

    CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
      return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]));
    };

    CalendarPreviousViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CalendarPreviousViewDirective,
      selectors: [["", "mwlCalendarPreviousView", ""]],
      hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        view: "view",
        viewDate: "viewDate",
        excludeDays: "excludeDays",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlCalendarPreviousView]'
        }]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]
        }];
      }, {
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts":
  /*!*****************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CalendarResizeHelper */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarResizeHelperProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarResizeHelper", function () {
      return CalendarResizeHelper;
    });
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util */
    "./projects/angular-calendar/src/modules/common/util.ts");

    var CalendarResizeHelper = /*#__PURE__*/function () {
      function CalendarResizeHelper(resizeContainerElement, minWidth) {
        _classCallCheck(this, CalendarResizeHelper);

        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
      }

      _createClass(CalendarResizeHelper, [{
        key: "validateResize",
        value: function validateResize(_ref35) {
          var rectangle = _ref35.rectangle;

          if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
          }

          return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isInside"])(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        }
      }]);

      return CalendarResizeHelper;
    }();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts":
  /*!**********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-today.directive.ts ***!
    \**********************************************************************************/

  /*! exports provided: CalendarTodayDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarTodayDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarTodayDirective", function () {
      return CalendarTodayDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */


    var CalendarTodayDirective = /*#__PURE__*/function () {
      function CalendarTodayDirective(dateAdapter) {
        _classCallCheck(this, CalendarTodayDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarTodayDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        }
      }]);

      return CalendarTodayDirective;
    }();

    CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
      return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]));
    };

    CalendarTodayDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CalendarTodayDirective,
      selectors: [["", "mwlCalendarToday", ""]],
      hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        viewDate: "viewDate"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarTodayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlCalendarToday]'
        }]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]
        }];
      }, {
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts":
  /*!************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts ***!
    \************************************************************************************/

  /*! exports provided: CalendarTooltipWindowComponent, CalendarTooltipDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarTooltipDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarTooltipWindowComponent", function () {
      return CalendarTooltipWindowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarTooltipDirective", function () {
      return CalendarTooltipDirective;
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


    var positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! positioning */
    "./node_modules/positioning/dist/entry.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function CalendarTooltipWindowComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
      }

      if (rf & 2) {
        var contents_r3 = ctx.contents;
        var placement_r4 = ctx.placement;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CalendarTooltipWindowComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        contents: a0,
        placement: a1,
        event: a2
      };
    };

    var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
      _classCallCheck(this, CalendarTooltipWindowComponent);
    };

    CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
      return new (t || CalendarTooltipWindowComponent)();
    };

    CalendarTooltipWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarTooltipWindowComponent,
      selectors: [["mwl-calendar-tooltip-window"]],
      inputs: {
        contents: "contents",
        placement: "placement",
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 6,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
      template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarTooltipWindowComponent_ng_template_1_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarTooltipWindowComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.contents, ctx.placement, ctx.event));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-tooltip-window',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var CalendarTooltipDirective = /*#__PURE__*/function () {
      function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
      ) {
        _classCallCheck(this, CalendarTooltipDirective);

        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename

        this.delay = null; // tslint:disable-line no-input-rename

        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
      }

      _createClass(CalendarTooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();

            if (!this.contents) {
              this.hide();
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          var _this2 = this;

          var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(this.delay);
          delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(function () {
            _this2.show();
          });
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.hide();
        }
      }, {
        key: "show",
        value: function show() {
          var _this3 = this;

          if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;

            if (this.appendToBody) {
              this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }

            requestAnimationFrame(function () {
              _this3.positionTooltip();
            });
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
          }

          this.cancelTooltipDelay$.next();
        }
      }, {
        key: "positionTooltip",
        value: function positionTooltip() {
          var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
              this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
            }
          }
        }
      }]);

      return CalendarTooltipDirective;
    }();

    CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
      return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CalendarTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CalendarTooltipDirective,
      selectors: [["", "mwlCalendarTooltip", ""]],
      hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseOver();
          })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseOut();
          });
        }
      },
      inputs: {
        contents: ["mwlCalendarTooltip", "contents"],
        placement: ["tooltipPlacement", "placement"],
        customTemplate: ["tooltipTemplate", "customTemplate"],
        event: ["tooltipEvent", "event"],
        appendToBody: ["tooltipAppendToBody", "appendToBody"],
        delay: ["tooltipDelay", "delay"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlCalendarTooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mwlCalendarTooltip']
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPlacement']
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipTemplate']
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipEvent']
        }],
        appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipAppendToBody']
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipDelay']
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts":
  /*!*********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts ***!
    \*********************************************************************************/

  /*! exports provided: CalendarUtils */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarUtilsProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return CalendarUtils;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");

    var CalendarUtils = /*#__PURE__*/function () {
      function CalendarUtils(dateAdapter) {
        _classCallCheck(this, CalendarUtils);

        this.dateAdapter = dateAdapter;
      }

      _createClass(CalendarUtils, [{
        key: "getMonthView",
        value: function getMonthView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getMonthView"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekViewHeader",
        value: function getWeekViewHeader(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekViewHeader"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekView"])(this.dateAdapter, args);
        }
      }]);

      return CalendarUtils;
    }();

    CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
      return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));
    };

    CalendarUtils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalendarUtils,
      factory: CalendarUtils.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/calendar-view.enum.ts ***!
    \****************************************************************************/

  /*! exports provided: CalendarView */

  /***/
  function projectsAngularCalendarSrcModulesCommonCalendarViewEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return CalendarView;
    });

    var CalendarView;

    (function (CalendarView) {
      CalendarView["Month"] = "month";
      CalendarView["Week"] = "week";
      CalendarView["Day"] = "day";
    })(CalendarView || (CalendarView = {}));
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/click.directive.ts":
  /*!*************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/click.directive.ts ***!
    \*************************************************************************/

  /*! exports provided: ClickDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickDirective", function () {
      return ClickDirective;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ClickDirective = /*#__PURE__*/function () {
      function ClickDirective(renderer, elm, document) {
        _classCallCheck(this, ClickDirective);

        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ClickDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (!this.clickListenerDisabled) {
            this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (event) {
              event.stopPropagation();

              _this4.click.emit(event);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
      }, {
        key: "listen",
        value: function listen() {
          var _this5 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this5.renderer.listen(_this5.elm.nativeElement, 'click', function (event) {
              observer.next(event);
            });
          });
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.ɵfac = function ClickDirective_Factory(t) {
      return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickDirective,
      selectors: [["", "mwlClick", ""]],
      inputs: {
        clickListenerDisabled: "clickListenerDisabled"
      },
      outputs: {
        click: "mwlClick"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlClick]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        clickListenerDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['mwlClick']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts":
  /*!*********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts ***!
    \*********************************************************************************/

  /*! exports provided: KeydownEnterDirective */

  /***/
  function projectsAngularCalendarSrcModulesCommonKeydownEnterDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeydownEnterDirective", function () {
      return KeydownEnterDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KeydownEnterDirective = /*#__PURE__*/function () {
      function KeydownEnterDirective(host, ngZone, renderer) {
        _classCallCheck(this, KeydownEnterDirective);

        this.host = host;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line

        this.keydownListener = null;
      }

      _createClass(KeydownEnterDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.ngZone.runOutsideAngular(function () {
            _this6.keydownListener = _this6.renderer.listen(_this6.host.nativeElement, 'keydown', function (event) {
              if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();

                _this6.ngZone.run(function () {
                  _this6.keydown.emit(event);
                });
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.keydownListener !== null) {
            this.keydownListener();
            this.keydownListener = null;
          }
        }
      }]);

      return KeydownEnterDirective;
    }();

    KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
      return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    KeydownEnterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: KeydownEnterDirective,
      selectors: [["", "mwlKeydownEnter", ""]],
      outputs: {
        keydown: "mwlKeydownEnter"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeydownEnterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlKeydownEnter]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        keydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['mwlKeydownEnter']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/common/util.ts":
  /*!**************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/common/util.ts ***!
    \**************************************************************/

  /*! exports provided: validateEvents, isInside, roundToNearest, trackByEventId, trackByWeekDayHeaderDate, trackByHourSegment, trackByHour, trackByWeekAllDayEvent, trackByWeekTimeEvent, getMinutesMoved, getMinimumEventHeightInMinutes, getDefaultEventEnd, addDaysWithExclusions, isDraggedWithinPeriod, shouldFireDroppedEvent, getWeekViewPeriod, isWithinThreshold */

  /***/
  function projectsAngularCalendarSrcModulesCommonUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
      return validateEvents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isInside", function () {
      return isInside;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "roundToNearest", function () {
      return roundToNearest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByEventId", function () {
      return trackByEventId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByWeekDayHeaderDate", function () {
      return trackByWeekDayHeaderDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByHourSegment", function () {
      return trackByHourSegment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByHour", function () {
      return trackByHour;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByWeekAllDayEvent", function () {
      return trackByWeekAllDayEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByWeekTimeEvent", function () {
      return trackByWeekTimeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMinutesMoved", function () {
      return getMinutesMoved;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMinimumEventHeightInMinutes", function () {
      return getMinimumEventHeightInMinutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDefaultEventEnd", function () {
      return getDefaultEventEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addDaysWithExclusions", function () {
      return addDaysWithExclusions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDraggedWithinPeriod", function () {
      return isDraggedWithinPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shouldFireDroppedEvent", function () {
      return shouldFireDroppedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return getWeekViewPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isWithinThreshold", function () {
      return isWithinThreshold;
    });
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");

    var validateEvents = function validateEvents(events) {
      var warn = function warn() {
        var _console;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
      };

      return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_0__["validateEvents"])(events, warn);
    };

    function isInside(outer, inner) {
      return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
    }

    function roundToNearest(amount, precision) {
      return Math.round(amount / precision) * precision;
    }

    var trackByEventId = function trackByEventId(index, event) {
      return event.id ? event.id : event;
    };

    var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
      return day.date.toISOString();
    };

    var trackByHourSegment = function trackByHourSegment(index, segment) {
      return segment.date.toISOString();
    };

    var trackByHour = function trackByHour(index, hour) {
      return hour.segments[0].date.toISOString();
    };

    var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var MINUTES_IN_HOUR = 60;

    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
      return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    }

    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
      var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
      var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
      return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }

    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
      return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
    }

    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
      if (event.end) {
        return event.end;
      } else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
      }
    }

    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
      var daysCounter = 0;
      var daysToAdd = 0;
      var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
      var result = date;

      while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        var day = dateAdapter.getDay(result);

        if (excluded.indexOf(day) === -1) {
          daysToAdd++;
        }

        daysCounter++;
      }

      return result;
    }

    function isDraggedWithinPeriod(newStart, newEnd, period) {
      var end = newEnd || newStart;
      return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
    }

    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
      return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
    }

    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
      var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
      var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });
      var endOfWeek = dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });

      while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
      }

      if (daysInWeek) {
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return {
          viewStart: viewStart,
          viewEnd: viewEnd
        };
      } else {
        var _viewEnd = endOfWeek;

        while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
          _viewEnd = dateAdapter.subDays(_viewEnd, 1);
        }

        return {
          viewStart: viewStart,
          viewEnd: _viewEnd
        };
      }
    }

    function isWithinThreshold(_ref36) {
      var x = _ref36.x,
          y = _ref36.y;
      var DRAG_THRESHOLD = 1;
      return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts":
  /*!**********************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CalendarDayViewComponent */

  /***/
  function projectsAngularCalendarSrcModulesDayCalendarDayViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return CalendarDayViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../week/calendar-week-view.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */


    var CalendarDayViewComponent = function CalendarDayViewComponent() {
      _classCallCheck(this, CalendarDayViewComponent);

      /**
       * An array of events to display on view
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */
      this.events = [];
      /**
       * The number of segments in an hour. Must divide equally into 60.
       */

      this.hourSegments = 2;
      /**
       * The height in pixels of each hour segment
       */

      this.hourSegmentHeight = 30;
      /**
       * The day start hours in 24 hour time. Must be 0-23
       */

      this.dayStartHour = 0;
      /**
       * The day start minutes. Must be 0-59
       */

      this.dayStartMinute = 0;
      /**
       * The day end hours in 24 hour time. Must be 0-23
       */

      this.dayEndHour = 23;
      /**
       * The day end minutes. Must be 0-59
       */

      this.dayEndMinute = 59;
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * Whether to snap events to a grid when dragging
       */

      this.snapDraggedEvents = true;
      /**
       * Called when an event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      /**
       * Called when an hour segment is clicked
       */

      this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      /**
       * Called when an event is resized or dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      /**
       * An output that will be called before the view is rendered for the current day.
       * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
      return new (t || CalendarDayViewComponent)();
    };

    CalendarDayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarDayViewComponent,
      selectors: [["mwl-calendar-day-view"]],
      inputs: {
        viewDate: "viewDate",
        events: "events",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        refresh: "refresh",
        locale: "locale",
        eventSnapSize: "eventSnapSize",
        tooltipPlacement: "tooltipPlacement",
        tooltipTemplate: "tooltipTemplate",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        snapDraggedEvents: "snapDraggedEvents",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        eventClicked: "eventClicked",
        hourSegmentClicked: "hourSegmentClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender"
      },
      decls: 3,
      vars: 23,
      consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
      template: function CalendarDayViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mwl-calendar-week-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_1_listener($event) {
            return ctx.eventClicked.emit($event);
          })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_1_listener($event) {
            return ctx.hourSegmentClicked.emit($event);
          })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_1_listener($event) {
            return ctx.eventTimesChanged.emit($event);
          })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_1_listener($event) {
            return ctx.beforeViewRender.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
        }
      },
      directives: [_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__["CalendarWeekViewComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-day-view',
          template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
        }]
      }], null, {
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/day/calendar-day.module.ts":
  /*!**************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/day/calendar-day.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CalendarDayViewComponent, CalendarDayModule */

  /***/
  function projectsAngularCalendarSrcModulesDayCalendarDayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return CalendarDayModule;
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


    var _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calendar-day-view.component */
    "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts");
    /* harmony import */


    var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/calendar-common.module */
    "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
    /* harmony import */


    var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../week/calendar-week.module */
    "./projects/angular-calendar/src/modules/week/calendar-week.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"];
    });

    var CalendarDayModule = function CalendarDayModule() {
      _classCallCheck(this, CalendarDayModule);
    };

    CalendarDayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarDayModule
    });
    CalendarDayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarDayModule_Factory(t) {
        return new (t || CalendarDayModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__["CalendarCommonModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarDayModule, {
        declarations: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__["CalendarCommonModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekModule"]],
        exports: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarDayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__["CalendarCommonModule"], _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekModule"]],
          declarations: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]],
          exports: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts":
  /*!**************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CalendarMonthCellComponent */

  /***/
  function projectsAngularCalendarSrcModulesMonthCalendarMonthCellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthCellComponent", function () {
      return CalendarMonthCellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/calendar-tooltip.directive */
    "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");
    /* harmony import */


    var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");
    /* harmony import */


    var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/calendar-event-title.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts");

    function CalendarMonthCellComponent_ng_template_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3.badgeTotal);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        backgroundColor: a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        draggedFrom: a1
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        x: a0,
        y: a1
      };
    };

    var _c3 = function _c3() {
      return {
        delay: 300,
        delta: 30
      };
    };

    var _c4 = function _c4() {
      return {};
    };

    function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var event_r19 = ctx.$implicit;

          var highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).highlightDay;

          return highlightDay_r7.emit({
            event: event_r19
          });
        })("mouseleave", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var event_r19 = ctx.$implicit;

          var unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).unhighlightDay;

          return unhighlightDay_r8.emit({
            event: event_r19
          });
        })("mwlClick", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var event_r19 = ctx.$implicit;

          var eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r9.emit({
            event: event_r19,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r19 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
        var tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
        var tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
        var tooltipDelay_r12 = ctx_r27.tooltipDelay;
        var day_r3 = ctx_r27.day;
        var validateDrag_r14 = ctx_r27.validateDrag;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4), "hideMonthCellEvents"));
      }
    }

    function CalendarMonthCellComponent_ng_template_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template, 3, 32, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var day_r3 = ctx_r28.day;
        var trackByEventId_r13 = ctx_r28.trackByEventId;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
      }
    }

    var _c5 = function _c5(a0, a1) {
      return {
        day: a0,
        locale: a1
      };
    };

    function CalendarMonthCellComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarMonthCellComponent_ng_template_1_span_6_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalendarMonthCellComponent_ng_template_1_div_14_Template, 4, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
      }

      if (rf & 2) {
        var day_r3 = ctx.day;
        var locale_r5 = ctx.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, day_r3, locale_r5), "monthCell"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 7, day_r3.date, "monthViewDayNumber", locale_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
      }
    }

    function CalendarMonthCellComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c6 = function _c6(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      return {
        day: a0,
        openDay: a1,
        locale: a2,
        tooltipPlacement: a3,
        highlightDay: a4,
        unhighlightDay: a5,
        eventClicked: a6,
        tooltipTemplate: a7,
        tooltipAppendToBody: a8,
        tooltipDelay: a9,
        trackByEventId: a10,
        validateDrag: a11
      };
    };

    var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
      _classCallCheck(this, CalendarMonthCellComponent);

      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByEventId"];
      this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_1__["isWithinThreshold"];
    };

    CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
      return new (t || CalendarMonthCellComponent)();
    };

    CalendarMonthCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarMonthCellComponent,
      selectors: [["mwl-calendar-month-cell"]],
      hostAttrs: [1, "cal-cell", "cal-day-cell"],
      hostVars: 18,
      hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
        }
      },
      inputs: {
        day: "day",
        openDay: "openDay",
        locale: "locale",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        customTemplate: "customTemplate",
        tooltipTemplate: "tooltipTemplate",
        tooltipDelay: "tooltipDelay"
      },
      outputs: {
        highlightDay: "highlightDay",
        unhighlightDay: "unhighlightDay",
        eventClicked: "eventClicked"
      },
      decls: 6,
      vars: 15,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
      template: function CalendarMonthCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_1_Template, 16, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthCellComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"], _common_click_directive__WEBPACK_IMPORTED_MODULE_5__["ClickDirective"]],
      pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__["CalendarA11yPipe"], _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CalendarDatePipe"], _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarEventTitlePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-month-cell',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          host: {
            "class": 'cal-cell cal-day-cell',
            '[class.cal-past]': 'day.isPast',
            '[class.cal-today]': 'day.isToday',
            '[class.cal-future]': 'day.isFuture',
            '[class.cal-weekend]': 'day.isWeekend',
            '[class.cal-in-month]': 'day.inMonth',
            '[class.cal-out-month]': '!day.inMonth',
            '[class.cal-has-events]': 'day.events.length > 0',
            '[class.cal-open]': 'day === openDay',
            '[class.cal-event-highlight]': '!!day.backgroundColor'
          }
        }]
      }], null, {
        day: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        unhighlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CalendarMonthViewHeaderComponent */

  /***/
  function projectsAngularCalendarSrcModulesMonthCalendarMonthViewHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewHeaderComponent", function () {
      return CalendarMonthViewHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");

    function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var day_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.columnHeaderClicked.emit({
            isoDayNumber: day_r7.day,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r7 = ctx.$implicit;

        var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r7.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), "\n        ");
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template, 3, 14, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
      }

      if (rf & 2) {
        var days_r3 = ctx.days;
        var trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        days: a0,
        locale: a1,
        trackByWeekDayHeaderDate: a2
      };
    };

    var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
      _classCallCheck(this, CalendarMonthViewHeaderComponent);

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByWeekDayHeaderDate"];
    };

    CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
      return new (t || CalendarMonthViewHeaderComponent)();
    };

    CalendarMonthViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarMonthViewHeaderComponent,
      selectors: [["mwl-calendar-month-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        columnHeaderClicked: "columnHeaderClicked"
      },
      decls: 6,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
      template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CalendarDatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts":
  /*!**************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CalendarMonthViewComponent */

  /***/
  function projectsAngularCalendarSrcModulesMonthCalendarMonthViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return CalendarMonthViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/calendar-event-times-changed-event.interface */
    "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/calendar-utils.provider */
    "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /* harmony import */


    var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-month-view-header.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calendar-open-day-events.component */
    "./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./calendar-month-cell.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../common/keydown-enter.directive */
    "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts");
    /* harmony import */


    var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../common/calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        backgroundColor: a0
      };
    };

    var _c1 = function _c1() {
      return {};
    };

    function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var day_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.dayClicked.emit({
            day: day_r3,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var day_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.dayClicked.emit({
            day: day_r3,
            sourceEvent: $event
          });
        })("highlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.toggleDayHighlight($event.event, true);
        })("unhighlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.toggleDayHighlight($event.event, false);
        })("drop", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var day_r3 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom);
        })("eventClicked", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1), "monthCellTabIndex"));
      }
    }

    function CalendarMonthViewComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template, 3, 18, "mwl-calendar-month-cell", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-open-day-events", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_eventClicked_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        })("drop", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_drop_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowIndex_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
      }
    }
    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */


    var CalendarMonthViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       */
      function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this7 = this;

        _classCallCheck(this, CalendarMonthViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */

        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */

        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.trackByRowOffset = function (index, offset) {
          return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(function (day) {
            return day.date.toISOString();
          }).join('-');
        };
        /**
         * @hidden
         */


        this.trackByDate = function (index, day) {
          return day.date.toISOString();
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarMonthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this8.refreshAll();

              _this8.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
          var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["validateEvents"])(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }

          if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
            this.checkActiveDayIsOpen();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "toggleDayHighlight",
        value: function toggleDayHighlight(event, isHighlighted) {
          this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
              day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
            } else {
              delete day.backgroundColor;
            }
          });
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(droppedOn, event, draggedFrom) {
          if (droppedOn !== draggedFrom) {
            var year = this.dateAdapter.getYear(droppedOn.date);
            var month = this.dateAdapter.getMonth(droppedOn.date);
            var date = this.dateAdapter.getDate(droppedOn.date);
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            var newEnd;

            if (event.end) {
              var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
              newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }

            this.eventTimesChanged.emit({
              event: event,
              newStart: newStart,
              newEnd: newEnd,
              day: droppedOn,
              type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTimesChangedEventType"].Drop
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "checkActiveDayIsOpen",
        value: function checkActiveDayIsOpen() {
          var _this9 = this;

          if (this.activeDayIsOpen === true) {
            var activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(function (day) {
              return _this9.dateAdapter.isSameDay(day.date, activeDay);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
          } else {
            this.openRowIndex = null;
            this.openDay = null;
          }
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
          this.checkActiveDayIsOpen();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
              header: this.columnHeaders,
              body: this.view.days,
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarMonthViewComponent;
    }();

    CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
      return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__["CalendarUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"]));
    };

    CalendarMonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarMonthViewComponent,
      selectors: [["mwl-calendar-month-view"]],
      inputs: {
        viewDate: "viewDate",
        events: "events",
        excludeDays: "excludeDays",
        activeDayIsOpen: "activeDayIsOpen",
        activeDay: "activeDay",
        refresh: "refresh",
        locale: "locale",
        tooltipPlacement: "tooltipPlacement",
        tooltipTemplate: "tooltipTemplate",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        cellTemplate: "cellTemplate",
        openDayEventsTemplate: "openDayEventsTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        weekendDays: "weekendDays"
      },
      outputs: {
        beforeViewRender: "beforeViewRender",
        dayClicked: "dayClicked",
        eventClicked: "eventClicked",
        columnHeaderClicked: "columnHeaderClicked",
        eventTimesChanged: "eventTimesChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 5,
      consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
      template: function CalendarMonthViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mwl-calendar-month-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_3_listener($event) {
            return ctx.columnHeaderClicked.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarMonthViewComponent_div_8_Template, 11, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
        }
      },
      directives: [_calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthViewHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__["CalendarOpenDayEventsComponent"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__["CalendarMonthCellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _common_click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__["KeydownEnterDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__["CalendarA11yPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view',
          template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__["CalendarUtils"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"]
        }];
      }, {
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeDayIsOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openDayEventsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dayClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/month/calendar-month.module.ts":
  /*!******************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/month/calendar-month.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule */

  /***/
  function projectsAngularCalendarSrcModulesMonthCalendarMonthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return CalendarMonthModule;
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


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar-month-view.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts");
    /* harmony import */


    var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-month-view-header.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts");
    /* harmony import */


    var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-month-cell.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts");
    /* harmony import */


    var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendar-open-day-events.component */
    "./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts");
    /* harmony import */


    var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/calendar-common.module */
    "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["collapseAnimation"];
    });

    var CalendarMonthModule = function CalendarMonthModule() {
      _classCallCheck(this, CalendarMonthModule);
    };

    CalendarMonthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarMonthModule
    });
    CalendarMonthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarMonthModule_Factory(t) {
        return new (t || CalendarMonthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarMonthModule, {
        declarations: [_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"], _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"], _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"], _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]],
        exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"], _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"], _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"], _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMonthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]],
          declarations: [_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"], _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"], _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"], _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]],
          exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"], _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"], _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"], _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: collapseAnimation, CalendarOpenDayEventsComponent */

  /***/
  function projectsAngularCalendarSrcModulesMonthCalendarOpenDayEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return collapseAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarOpenDayEventsComponent", function () {
      return CalendarOpenDayEventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/calendar-event-title.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/keydown-enter.directive */
    "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts");
    /* harmony import */


    var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/calendar-event-actions.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts");
    /* harmony import */


    var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        event: a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        x: a0,
        y: a1
      };
    };

    var _c2 = function _c2() {
      return {
        delay: 300,
        delta: 30
      };
    };

    var _c3 = function _c3(a0) {
      return {
        backgroundColor: a0
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        event: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n           \n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlClick_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var event_r10 = ctx.$implicit;

          var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r4.emit({
            event: event_r10,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlKeydownEnter_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var event_r10 = ctx.$implicit;

          var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r4.emit({
            event: event_r10,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n           \n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mwl-calendar-event-actions", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r10 = ctx.$implicit;

        var validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).validateDrag;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, event_r10.color == null ? null : event_r10.color.primary));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c4, event_r10, ctx_r9.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
      }
    }

    var _c5 = function _c5(a0, a1) {
      return {
        date: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template, 12, 27, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var events_r3 = ctx_r17.events;
        var trackByEventId_r6 = ctx_r17.trackByEventId;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_div_1_Template, 10, 17, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
      }

      if (rf & 2) {
        var isOpen_r5 = ctx.isOpen;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOpen_r5);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c6 = function _c6(a0, a1, a2, a3, a4) {
      return {
        events: a0,
        eventClicked: a1,
        isOpen: a2,
        trackByEventId: a3,
        validateDrag: a4
      };
    };

    var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in'))]);

    var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
      _classCallCheck(this, CalendarOpenDayEventsComponent);

      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_2__["trackByEventId"];
      this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_2__["isWithinThreshold"];
    };

    CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
      return new (t || CalendarOpenDayEventsComponent)();
    };

    CalendarOpenDayEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarOpenDayEventsComponent,
      selectors: [["mwl-calendar-open-day-events"]],
      inputs: {
        locale: "locale",
        isOpen: "isOpen",
        events: "events",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        date: "date"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 6,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
      template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarOpenDayEventsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c6, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__["CalendarEventTitleComponent"], _common_click_directive__WEBPACK_IMPORTED_MODULE_6__["ClickDirective"], _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__["KeydownEnterDirective"], _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__["CalendarEventActionsComponent"]],
      pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarA11yPipe"]],
      encapsulation: 2,
      data: {
        animation: [collapseAnimation]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-open-day-events',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          animations: [collapseAnimation]
        }]
      }], null, {
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: CalendarWeekViewCurrentTimeMarkerComponent */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekViewCurrentTimeMarkerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewCurrentTimeMarkerComponent", function () {
      return CalendarWeekViewCurrentTimeMarkerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }

      if (rf & 2) {
        var topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().topPx;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", topPx_r9, "px");
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template, 1, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
      }

      if (rf & 2) {
        var isVisible_r8 = ctx.isVisible;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isVisible_r8);
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3, a4, a5, a6) {
      return {
        columnDate: a0,
        dayStartHour: a1,
        dayStartMinute: a2,
        dayEndHour: a3,
        dayEndMinute: a4,
        isVisible: a5,
        topPx: a6
      };
    };

    var CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/function () {
      function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
        var _this10 = this;

        _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

        this.dateAdapter = dateAdapter;
        this.zone = zone;
        this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.columnDate);
        this.marker$ = this.zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60 * 1000);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.columnDate$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (columnDate) {
          var startOfDay = _this10.dateAdapter.setMinutes(_this10.dateAdapter.setHours(columnDate, _this10.dayStartHour), _this10.dayStartMinute);

          var endOfDay = _this10.dateAdapter.setMinutes(_this10.dateAdapter.setHours(columnDate, _this10.dayEndHour), _this10.dayEndMinute);

          var hourHeightModifier = _this10.hourSegments * _this10.hourSegmentHeight / 60;
          var now = new Date();
          return {
            isVisible: _this10.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
            top: _this10.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
          };
        }));
      }

      _createClass(CalendarWeekViewCurrentTimeMarkerComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
          }
        }
      }]);

      return CalendarWeekViewCurrentTimeMarkerComponent;
    }();

    CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
      return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarWeekViewCurrentTimeMarkerComponent,
      selectors: [["mwl-calendar-week-view-current-time-marker"]],
      inputs: {
        columnDate: "columnDate",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        customTemplate: "customTemplate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 14,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
      template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var tmp_1_0 = null;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](6, _c0, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.marker$)) == null ? null : tmp_1_0.top);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", currVal_1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-current-time-marker',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        columnDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts":
  /*!******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CalendarWeekViewEventComponent */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekViewEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewEventComponent", function () {
      return CalendarWeekViewEventComponent;
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


    var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/calendar-tooltip.directive */
    "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/keydown-enter.directive */
    "./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts");
    /* harmony import */


    var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/calendar-event-actions.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts");
    /* harmony import */


    var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/calendar-event-title.component */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts");
    /* harmony import */


    var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/calendar-event-title.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts");
    /* harmony import */


    var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");

    var _c0 = function _c0(a0, a1) {
      return {
        backgroundColor: a0,
        borderColor: a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        locale: a1
      };
    };

    function CalendarWeekViewEventComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var eventClicked_r5 = ctx.eventClicked;
          return eventClicked_r5.emit({
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlKeydownEnter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var eventClicked_r5 = ctx.eventClicked;
          return eventClicked_r5.emit({
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-actions", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n         \n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-event-title", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
      }

      if (rf & 2) {
        var weekEvent_r3 = ctx.weekEvent;
        var tooltipPlacement_r4 = ctx.tooltipPlacement;
        var tooltipTemplate_r6 = ctx.tooltipTemplate;
        var tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
        var tooltipDisabled_r8 = ctx.tooltipDisabled;
        var tooltipDelay_r9 = ctx.tooltipDelay;
        var daysInWeek_r11 = ctx.daysInWeek;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c1, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
      }
    }

    function CalendarWeekViewEventComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c2 = function _c2(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
      return {
        weekEvent: a0,
        tooltipPlacement: a1,
        eventClicked: a2,
        tooltipTemplate: a3,
        tooltipAppendToBody: a4,
        tooltipDisabled: a5,
        tooltipDelay: a6,
        column: a7,
        daysInWeek: a8
      };
    };

    var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
      _classCallCheck(this, CalendarWeekViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
      return new (t || CalendarWeekViewEventComponent)();
    };

    CalendarWeekViewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarWeekViewEventComponent,
      selectors: [["mwl-calendar-week-view-event"]],
      inputs: {
        locale: "locale",
        weekEvent: "weekEvent",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDisabled: "tooltipDisabled",
        tooltipDelay: "tooltipDelay",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        tooltipTemplate: "tooltipTemplate",
        column: "column",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 6,
      vars: 12,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
      template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewEventComponent_ng_template_1_Template, 12, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewEventComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c2, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["CalendarTooltipDirective"], _common_click_directive__WEBPACK_IMPORTED_MODULE_3__["ClickDirective"], _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__["KeydownEnterDirective"], _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__["CalendarEventActionsComponent"], _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEventTitleComponent"]],
      pipes: [_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__["CalendarEventTitlePipe"], _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarA11yPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-event',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CalendarWeekViewHeaderComponent */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekViewHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewHeaderComponent", function () {
      return CalendarWeekViewHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");
    /* harmony import */


    var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");

    function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var day_r10 = ctx.$implicit;

          var dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayHeaderClicked;

          return dayHeaderClicked_r5.emit({
            day: day_r10,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var day_r10 = ctx.$implicit;

          var eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventDropped;

          return eventDropped_r6.emit({
            event: $event.dropData.event,
            newStart: day_r10.date
          });
        })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_dragEnter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var day_r10 = ctx.$implicit;

          var dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dragEnter;

          return dragEnter_r8.emit({
            date: day_r10.date
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r10 = ctx.$implicit;

        var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r10.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 11, day_r10.date, "weekViewColumnHeader", locale_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template, 11, 19, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
      }

      if (rf & 2) {
        var days_r3 = ctx.days;
        var trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3, a4, a5) {
      return {
        days: a0,
        locale: a1,
        dayHeaderClicked: a2,
        eventDropped: a3,
        dragEnter: a4,
        trackByWeekDayHeaderDate: a5
      };
    };

    var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
      _classCallCheck(this, CalendarWeekViewHeaderComponent);

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByWeekDayHeaderDate"];
    };

    CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
      return new (t || CalendarWeekViewHeaderComponent)();
    };

    CalendarWeekViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHeaderComponent,
      selectors: [["mwl-calendar-week-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventDropped: "eventDropped",
        dragEnter: "dragEnter"
      },
      decls: 6,
      vars: 9,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c0, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _common_click_directive__WEBPACK_IMPORTED_MODULE_4__["ClickDirective"]],
      pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__["CalendarDatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventDropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: CalendarWeekViewHourSegmentComponent */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekViewHourSegmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewHourSegmentComponent", function () {
      return CalendarWeekViewHourSegmentComponent;
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


    var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/calendar-a11y.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts");
    /* harmony import */


    var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");

    function CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var segment_r3 = ctx_r9.segment;
        var daysInWeek_r7 = ctx_r9.daysInWeek;
        var locale_r4 = ctx_r9.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), "\n        ");
      }
    }

    var _c0 = function _c0() {
      return {};
    };

    function CalendarWeekViewHourSegmentComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template, 3, 5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
      }

      if (rf & 2) {
        var segment_r3 = ctx.segment;
        var segmentHeight_r5 = ctx.segmentHeight;
        var isTimeLabel_r6 = ctx.isTimeLabel;
        var daysInWeek_r7 = ctx.daysInWeek;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r3.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
      }
    }

    function CalendarWeekViewHourSegmentComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
      }
    }

    var _c1 = function _c1(a0, a1, a2, a3, a4) {
      return {
        segment: a0,
        locale: a1,
        segmentHeight: a2,
        isTimeLabel: a3,
        daysInWeek: a4
      };
    };

    var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
      _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
    };

    CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
      return new (t || CalendarWeekViewHourSegmentComponent)();
    };

    CalendarWeekViewHourSegmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHourSegmentComponent,
      selectors: [["mwl-calendar-week-view-hour-segment"]],
      inputs: {
        segment: "segment",
        segmentHeight: "segmentHeight",
        locale: "locale",
        isTimeLabel: "isTimeLabel",
        daysInWeek: "daysInWeek",
        customTemplate: "customTemplate"
      },
      decls: 6,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
      template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHourSegmentComponent_ng_template_1_Template, 7, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__["CalendarA11yPipe"], _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CalendarDatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-hour-segment',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        segmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isTimeLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts":
  /*!************************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CalendarWeekViewComponent */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return CalendarWeekViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/calendar-drag-helper.provider */
    "./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts");
    /* harmony import */


    var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/calendar-resize-helper.provider */
    "./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts");
    /* harmony import */


    var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/calendar-event-times-changed-event.interface */
    "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony import */


    var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/calendar-utils.provider */
    "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
    /* harmony import */


    var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../date-adapters/date-adapter */
    "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
    /* harmony import */


    var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calendar-week-view-header.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
    /* harmony import */


    var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./calendar-week-view-event.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts");
    /* harmony import */


    var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./calendar-week-view-hour-segment.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts");
    /* harmony import */


    var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./calendar-week-view-current-time-marker.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts");
    /* harmony import */


    var _common_click_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../common/click.directive */
    "./projects/angular-calendar/src/modules/common/click.directive.ts");

    var __rest = undefined && undefined.__rest || function (s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    };

    function CalendarWeekViewComponent_div_6_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_6_div_7_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var day_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.eventDropped($event, day_r7.date, true);
        })("dragEnter", function CalendarWeekViewComponent_div_6_div_7_Template_div_dragEnter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var day_r7 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.dateDragEnter(day_r7.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        left: true
      };
    };

    function CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return {
        right: true
      };
    };

    function CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2(a0, a1) {
      return {
        left: a0,
        right: a1
      };
    };

    var _c3 = function _c3(a0, a1) {
      return {
        event: a0,
        calendarId: a1
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        x: a0,
        y: a1
      };
    };

    var _c5 = function _c5(a0) {
      return {
        x: a0
      };
    };

    var _c6 = function _c6() {
      return {};
    };

    var _c7 = function _c7() {
      return {
        delay: 300,
        delta: 30
      };
    };

    function CalendarWeekViewComponent_div_6_div_10_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var allDayEvent_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event);
        })("resizing", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth);
        })("resizeEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeEnd_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.allDayEventResizeEnded(allDayEvent_r14);
        })("dragStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragStart_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.dragStarted(_r12, _r15);
        })("dragging", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragging_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.allDayEventDragMove();
        })("dragEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-week-view-event", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_mwl_calendar_week_view_event_eventClicked_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.eventClicked.emit({
            event: allDayEvent_r14.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var allDayEvent_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c2, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c3, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c4, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c5, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c6))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
      }
    }

    function CalendarWeekViewComponent_div_6_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_Template, 10, 43, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var eventRow_r11 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
      }
    }

    function CalendarWeekViewComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_6_Template_div_dragEnter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.dragEnter("allDay");
        })("dragLeave", function CalendarWeekViewComponent_div_6_Template_div_dragLeave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.dragLeave("allDay");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_6_div_7_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_6_div_10_Template, 5, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
      }
    }

    function CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r33 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
      }
    }

    function CalendarWeekViewComponent_div_10_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template, 2, 8, "mwl-calendar-week-view-hour-segment", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r30 = ctx.$implicit;
        var odd_r31 = ctx.odd;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-odd", odd_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_Template, 4, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
      }
    }

    var _c8 = function _c8() {
      return {
        left: true,
        top: true
      };
    };

    function CalendarWeekViewComponent_div_15_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
      }
    }

    function CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template(rf, ctx) {}

    function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mwl-calendar-week-view-event", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template_mwl_calendar_week_view_event_eventClicked_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.eventClicked.emit({
            event: timeEvent_r37.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
      }

      if (rf & 2) {
        var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
      }
    }

    var _c9 = function _c9() {
      return {
        right: true,
        bottom: true
      };
    };

    function CalendarWeekViewComponent_div_15_div_6_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c9));
      }
    }

    var _c10 = function _c10(a0, a1, a2, a3) {
      return {
        left: a0,
        right: a1,
        top: a2,
        bottom: a3
      };
    };

    function CalendarWeekViewComponent_div_15_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event);
        })("resizing", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r51.timeEventResizing(timeEvent_r37, $event);
        })("resizeEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeEnd_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r52.timeEventResizeEnded(timeEvent_r37);
        })("dragStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragStart_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37);
        })("dragging", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragging_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.dragMove(timeEvent_r37, $event);
        })("dragEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var timeEvent_r37 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_15_div_6_div_3_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template, 0, 0, "ng-template", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template, 4, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_15_div_6_div_10_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var timeEvent_r37 = ctx.$implicit;

        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](29, _c10, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c3, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c4, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c4, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c6))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c7))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
      }
    }

    function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var segment_r59 = ctx.$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r60.hourSegmentClicked.emit({
            date: segment_r59.date,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var segment_r59 = ctx.$implicit;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r62.eventDropped($event, segment_r59.date, false);
        })("dragEnter", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var segment_r59 = ctx.$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r63.dateDragEnter(segment_r59.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r59 = ctx.$implicit;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
      }
    }

    function CalendarWeekViewComponent_div_15_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template, 2, 10, "mwl-calendar-week-view-hour-segment", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r56 = ctx.$implicit;
        var odd_r57 = ctx.odd;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-odd", odd_r57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mwl-calendar-week-view-current-time-marker", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_15_div_6_Template, 12, 45, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CalendarWeekViewComponent_div_15_div_9_Template, 4, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r34 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
      }
    }
    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */


    var CalendarWeekViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       */
      function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarWeekViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */

        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */

        this.timeEventResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        /**
         * @hidden
         */

        this.dragActive = false;
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */

        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByWeekDayHeaderDate"];
        /**
         * @hidden
         */

        this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByHourSegment"];
        /**
         * @hidden
         */

        this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByHour"];
        /**
         * @hidden
         */

        this.trackByWeekAllDayEvent = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByWeekAllDayEvent"];
        /**
         * @hidden
         */

        this.trackByWeekTimeEvent = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByWeekTimeEvent"];
        /**
         * @hidden
         */

        this.trackByHourColumn = function (index, column) {
          return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        /**
         * @hidden
         */


        this.trackById = function (index, row) {
          return row.id;
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarWeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this11.refreshAll();

              _this11.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
          var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["validateEvents"])(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeStarted",
        value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          this.resizeStarted(eventsContainer);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizing",
        value: function timeEventResizing(timeEvent, resizeEvent) {
          var _this12 = this;

          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          var adjustedEvents = new Map();

          var tempEvents = _toConsumableArray(this.events);

          this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            var newEventDates = _this12.getTimeEventResizedDates(event, lastResizeEvent);

            var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
          });
          this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeEnded",
        value: function timeEventResizeEnded(timeEvent) {
          this.view = this.getWeekView(this.events);
          var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

          if (lastResizeEvent) {
            this.timeEventResizes["delete"](timeEvent.event);
            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
              newStart: newEventDates.start,
              newEnd: newEventDates.end,
              event: timeEvent.event,
              type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTimesChangedEventType"].Resize
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeStarted",
        value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
          this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          });
          this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizing",
        value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

            allDayEvent.span = currentResize.originalSpan + _diff;
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeEnded",
        value: function allDayEventResizeEnded(allDayEvent) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (currentResize) {
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            var daysDiff;

            if (allDayEventResizingBeforeStart) {
              daysDiff = allDayEvent.offset - currentResize.originalOffset;
            } else {
              daysDiff = allDayEvent.span - currentResize.originalSpan;
            }

            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            var newStart = allDayEvent.event.start;
            var newEnd = allDayEvent.event.end || allDayEvent.event.start;

            if (allDayEventResizingBeforeStart) {
              newStart = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            } else {
              newEnd = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }

            this.eventTimesChanged.emit({
              newStart: newStart,
              newEnd: newEnd,
              event: allDayEvent.event,
              type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTimesChangedEventType"].Resize
            });
            this.allDayEventResizes["delete"](allDayEvent);
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "getDayColumnWidth",
        value: function getDayColumnWidth(eventRowContainer) {
          return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        }
        /**
         * @hidden
         */

      }, {
        key: "dateDragEnter",
        value: function dateDragEnter(date) {
          this.lastDragEnterDate = date;
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["shouldFireDroppedEvent"])(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
            this.eventTimesChanged.emit({
              type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTimesChangedEventType"].Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }

          this.lastDraggedEvent = null;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnter",
        value: function dragEnter(type) {
          this.eventDragEnterByType[type]++;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragLeave",
        value: function dragLeave(type) {
          this.eventDragEnterByType[type]--;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(eventsContainer, event, dayEvent) {
          var _this13 = this;

          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarDragHelper"](eventsContainer, event);

          this.validateDrag = function (_ref37) {
            var x = _ref37.x,
                y = _ref37.y,
                transform = _ref37.transform;
            return _this13.allDayEventResizes.size === 0 && _this13.timeEventResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this13.snapDraggedEvents,
              dragAlreadyMoved: _this13.dragAlreadyMoved,
              transform: transform
            });
          };

          this.dragActive = true;
          this.dragAlreadyMoved = false;
          this.lastDraggedEvent = null;
          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };

          if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
              var linkedEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
              }); // hide any linked events while dragging

              if (linkedEvent) {
                linkedEvent.width = 0;
                linkedEvent.height = 0;
              }
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         */

      }, {
        key: "dragMove",
        value: function dragMove(dayEvent, dragEvent) {
          var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
          var originalEvent = dayEvent.event;
          var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
          var tempEvents = this.events.map(function (event) {
            if (event === originalEvent) {
              return adjustedEvent;
            }

            return event;
          });
          this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventDragMove",
        value: function allDayEventDragMove() {
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
          var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.view = this.getWeekView(this.events);
          this.dragActive = false;
          this.validateDrag = null;

          var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
              start = _this$getDragMovedEve.start,
              end = _this$getDragMovedEve.end;

          if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["isDraggedWithinPeriod"])(start, end, this.view.period)) {
            this.lastDraggedEvent = weekEvent.event;
            this.eventTimesChanged.emit({
              newStart: start,
              newEnd: end,
              event: weekEvent.event,
              type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTimesChangedEventType"].Drag,
              allDay: !useY
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.days = this.utils.getWeekViewHeader(Object.assign({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          }, Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getWeekViewPeriod"])(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.getWeekView(this.events);
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({
              header: this.days
            }, this.view));
          }
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(events) {
          return this.utils.getWeekView(Object.assign({
            events: events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            segmentHeight: this.hourSegmentHeight,
            weekendDays: this.weekendDays
          }, Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getWeekViewPeriod"])(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "getDragMovedEventTimes",
        value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
          var daysDragged = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["roundToNearest"])(dragEndEvent.x, dayWidth) / dayWidth;
          var minutesMoved = useY ? Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getMinutesMoved"])(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
          var start = this.dateAdapter.addMinutes(Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
          var end;

          if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
          }

          return {
            start: start,
            end: end
          };
        }
      }, {
        key: "restoreOriginalEvents",
        value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
          var snapDraggedEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var previousView = this.view;

          if (snapDraggedEvents) {
            this.view = this.getWeekView(tempEvents);
          }

          var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
          });
          this.view.hourColumns.forEach(function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
              hour.segments.forEach(function (segment, segmentIndex) {
                column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
              });
            });
            adjustedEventsArray.forEach(function (adjustedEvent) {
              var originalEvent = adjustedEvents.get(adjustedEvent);
              var existingColumnEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent);
              });

              if (existingColumnEvent) {
                // restore the original event so trackBy kicks in and the dom isn't changed
                existingColumnEvent.event = originalEvent;
                existingColumnEvent['tempEvent'] = adjustedEvent;

                if (!snapDraggedEvents) {
                  existingColumnEvent.height = 0;
                  existingColumnEvent.width = 0;
                }
              } else {
                // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                var event = {
                  event: originalEvent,
                  left: 0,
                  top: 0,
                  height: 0,
                  width: 0,
                  startsBeforeDay: false,
                  endsAfterDay: false,
                  tempEvent: adjustedEvent
                };
                column.events.push(event);
              }
            });
          });
          adjustedEvents.clear();
        }
      }, {
        key: "getTimeEventResizedDates",
        value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
          var minimumEventHeight = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getMinimumEventHeightInMinutes"])(this.hourSegments, this.hourSegmentHeight);
          var newEventDates = {
            start: calendarEvent.start,
            end: Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getDefaultEventEnd"])(this.dateAdapter, calendarEvent, minimumEventHeight)
          };

          var end = calendarEvent.end,
              eventWithoutEnd = __rest(calendarEvent, ["end"]);

          var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getDefaultEventEnd"])(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
          };

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            var newStart = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

            if (newStart < smallestResizes.start) {
              newEventDates.start = newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

            var newEnd = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["addDaysWithExclusions"])(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

            if (newEnd > smallestResizes.end) {
              newEventDates.end = newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          if (typeof resizeEvent.edges.top !== 'undefined') {
            var minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getMinutesMoved"])(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

            if (_newStart < smallestResizes.start) {
              newEventDates.start = _newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            var _minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["getMinutesMoved"])(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

            if (_newEnd > smallestResizes.end) {
              newEventDates.end = _newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          return newEventDates;
        }
      }, {
        key: "resizeStarted",
        value: function resizeStarted(eventsContainer, minWidth) {
          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_2__["CalendarResizeHelper"](eventsContainer, minWidth);

          this.validateResize = function (_ref38) {
            var rectangle = _ref38.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
      }]);

      return CalendarWeekViewComponent;
    }();

    CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
      return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"]));
    };

    CalendarWeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarWeekViewComponent,
      selectors: [["mwl-calendar-week-view"]],
      inputs: {
        viewDate: "viewDate",
        events: "events",
        excludeDays: "excludeDays",
        refresh: "refresh",
        locale: "locale",
        tooltipPlacement: "tooltipPlacement",
        tooltipTemplate: "tooltipTemplate",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        precision: "precision",
        weekendDays: "weekendDays",
        snapDraggedEvents: "snapDraggedEvents",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventSnapSize: "eventSnapSize",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        daysInWeek: "daysInWeek",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventClicked: "eventClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender",
        hourSegmentClicked: "hourSegmentClicked"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 20,
      vars: 9,
      consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mwl-calendar-week-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_3_listener($event) {
            return ctx.dayHeaderClicked.emit($event);
          })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_3_listener($event) {
            return ctx.eventDropped({
              dropData: $event
            }, $event.newStart, true);
          })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_3_listener($event) {
            return ctx.dateDragEnter($event.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_6_Template, 12, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_8_listener() {
            return ctx.dragEnter("time");
          })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_8_listener() {
            return ctx.dragLeave("time");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_10_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CalendarWeekViewComponent_div_15_Template, 11, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n  ");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
        }
      },
      directives: [_calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_7__["CalendarWeekViewHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_10__["ResizableDirective"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_11__["CalendarWeekViewEventComponent"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_10__["ResizeHandleDirective"], _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_12__["CalendarWeekViewHourSegmentComponent"], _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_13__["CalendarWeekViewCurrentTimeMarkerComponent"], _common_click_directive__WEBPACK_IMPORTED_MODULE_14__["ClickDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view',
          template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"]
        }];
      }, {
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        precision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-calendar/src/modules/week/calendar-week.module.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-calendar/src/modules/week/calendar-week.module.ts ***!
    \****************************************************************************/

  /*! exports provided: CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule */

  /***/
  function projectsAngularCalendarSrcModulesWeekCalendarWeekModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return CalendarWeekModule;
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


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-week-view.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
    /* harmony import */


    var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-week-view-header.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts");
    /* harmony import */


    var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendar-week-view-event.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts");
    /* harmony import */


    var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/calendar-common.module */
    "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
    /* harmony import */


    var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./calendar-week-view-hour-segment.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts");
    /* harmony import */


    var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./calendar-week-view-current-time-marker.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"];
    });
    /* harmony import */


    var _common_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/util */
    "./projects/angular-calendar/src/modules/common/util.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return _common_util__WEBPACK_IMPORTED_MODULE_10__["getWeekViewPeriod"];
    });

    var CalendarWeekModule = function CalendarWeekModule() {
      _classCallCheck(this, CalendarWeekModule);
    };

    CalendarWeekModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarWeekModule
    });
    CalendarWeekModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarWeekModule_Factory(t) {
        return new (t || CalendarWeekModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]], angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarWeekModule, {
        declarations: [_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"], _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"], _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"], _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"], _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_9__["CalendarWeekViewCurrentTimeMarkerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"], _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"], _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"], _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"], _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"], _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_9__["CalendarWeekViewCurrentTimeMarkerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]],
          declarations: [_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"], _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"], _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"], _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"], _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_9__["CalendarWeekViewCurrentTimeMarkerComponent"]],
          exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"], _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"], _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"], _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"], _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"], _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_9__["CalendarWeekViewCurrentTimeMarkerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/$$_lazy_route_resource lazy recursive":
  /*!*********************************************************************!*\
    !*** ./projects/demos/$$_lazy_route_resource lazy namespace object ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function projectsDemos$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./projects/demos/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./projects/demos/app/demo-app.component.ts":
  /*!**************************************************!*\
    !*** ./projects/demos/app/demo-app.component.ts ***!
    \**************************************************/

  /*! exports provided: DemoAppComponent */

  /***/
  function projectsDemosAppDemoAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoAppComponent", function () {
      return DemoAppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @stackblitz/sdk */
    "./node_modules/@stackblitz/sdk/bundles/sdk.m.js");
    /* harmony import */


    var _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./demo-modules/demo-utils/sources */
    "./projects/demos/app/demo-modules/demo-utils/sources.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angulartics2_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angulartics2/ga */
    "./node_modules/angulartics2/__ivy_ngcc__/ga/fesm2015/angulartics2-ga.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function DemoAppComponent_ng_template_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      Loading demo...\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
      }
    }

    function DemoAppComponent_div_110_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Live demo\n              ");
      }
    }

    function DemoAppComponent_div_110_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
      }
    }

    function DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 56);
      }
    }

    function DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 57);
      }
    }

    function DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
      }
    }

    function DemoAppComponent_div_110_ngb_tab_31_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_3_Template, 1, 0, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_5_Template, 1, 0, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoAppComponent_div_110_ngb_tab_31_ng_template_2_i_7_Template, 1, 0, "i", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      }

      if (rf & 2) {
        var source_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", source_r8.language);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "html");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "css");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", source_r8.filename, "\n              ");
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "fa-copy": a0,
        "fa-check": a1
      };
    };

    function DemoAppComponent_div_110_ngb_tab_31_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoAppComponent_div_110_ngb_tab_31_ng_template_4_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.copied();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n              ");
      }

      if (rf & 2) {
        var source_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", source_r8.contents.raw)("ngbTooltip", "Copy source")("placement", "top-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r10.copied$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r10.copied$)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", source_r8.contents.highlighted, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DemoAppComponent_div_110_ngb_tab_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DemoAppComponent_div_110_ngb_tab_31_ng_template_2_Template, 10, 4, "ng-template", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DemoAppComponent_div_110_ngb_tab_31_ng_template_4_Template, 14, 12, "ng-template", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DemoAppComponent_div_110_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoAppComponent_div_110_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.editInStackblitz(ctx_r18.activeDemo);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit in Stackblitz\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-tabset", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DemoAppComponent_div_110_ng_template_26_Template, 3, 0, "ng-template", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DemoAppComponent_div_110_ng_template_28_Template, 4, 0, "ng-template", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DemoAppComponent_div_110_ngb_tab_31_Template, 6, 0, "ngb-tab", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.activeDemo.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destroyOnHide", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.activeDemo == null ? null : ctx_r2.activeDemo.sources);
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function DemoAppComponent_li_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var demo_r20 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r3.activeDemo == null ? null : ctx_r3.activeDemo.path) === demo_r20.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, demo_r20.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", demo_r20.label, "\n          ");
      }
    }

    function DemoAppComponent_em_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No matching demos found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function getSources(folder) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$__webpack_requ, sources;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__("./projects/demos/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$")("./" + folder + "/sources.ts");

              case 2:
                _yield$__webpack_requ = _context.sent;
                sources = _yield$__webpack_requ.sources;
                return _context.abrupt("return", sources.map(function (_ref39) {
                  var filename = _ref39.filename,
                      contents = _ref39.contents;

                  var _filename$match = filename.match(/^.+\.(.+)$/),
                      _filename$match2 = _slicedToArray(_filename$match, 2),
                      extension = _filename$match2[1];

                  var languages = {
                    ts: 'typescript',
                    html: 'html',
                    css: 'css'
                  };
                  return {
                    filename: filename,
                    contents: {
                      raw: contents.raw["default"].replace(",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])", '').replace("\nimport { RouterModule } from '@angular/router';", ''),
                      highlighted: contents.highlighted["default"] // TODO - move this into a regexp replace for both
                      .replace(',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])', '').replace('\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;', '')
                    },
                    language: languages[extension]
                  };
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }

    var dependencyVersions = {
      angular: __webpack_require__(
      /*! @angular/core/package.json */
      "./node_modules/@angular/core/package.json").version,
      angularRouter: __webpack_require__(
      /*! @angular/router/package.json */
      "./node_modules/@angular/router/package.json").version,
      angularCalendar: __webpack_require__(
      /*! ../../../package.json */
      "./package.json").version,
      calendarUtils: __webpack_require__(
      /*! calendar-utils/package.json */
      "./node_modules/calendar-utils/package.json").version,
      angularResizableElement: __webpack_require__(
      /*! angular-resizable-element/package.json */
      "./node_modules/angular-resizable-element/package.json").version,
      angularDraggableDroppable: __webpack_require__(
      /*! angular-draggable-droppable/package.json */
      "./node_modules/angular-draggable-droppable/package.json").version,
      dateFns: __webpack_require__(
      /*! date-fns/package.json */
      "./node_modules/date-fns/package.json").version,
      rxjs: __webpack_require__(
      /*! rxjs/package.json */
      "./node_modules/rxjs/package.json").version,
      bootstrap: __webpack_require__(
      /*! bootstrap-css-only/package.json */
      "./node_modules/bootstrap-css-only/package.json").version,
      zoneJs: __webpack_require__(
      /*! zone.js/package.json */
      "./node_modules/zone.js/package.json").version,
      ngBootstrap: __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap/package.json */
      "./node_modules/@ng-bootstrap/ng-bootstrap/package.json").version,
      rrule: __webpack_require__(
      /*! rrule/package.json */
      "./node_modules/rrule/package.json").version,
      fontAwesome: __webpack_require__(
      /*! @fortawesome/fontawesome-free/package.json */
      "./node_modules/@fortawesome/fontawesome-free/package.json").version,
      positioning: __webpack_require__(
      /*! positioning/package.json */
      "./node_modules/positioning/package.json").version,
      flatpickr: __webpack_require__(
      /*! flatpickr/package.json */
      "./node_modules/flatpickr/package.json").version,
      angularxFlatpickr: __webpack_require__(
      /*! angularx-flatpickr/package.json */
      "./node_modules/angularx-flatpickr/package.json").version
    };

    var DemoAppComponent = /*#__PURE__*/function () {
      function DemoAppComponent(router, analytics) {
        _classCallCheck(this, DemoAppComponent);

        this.router = router;
        this.demos = [];
        this.filteredDemos = [];
        this.isMenuVisible = false;
        this.firstDemoLoaded = false;
        this.searchText = '';
        this.copied$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        analytics.startTracking();
      }

      _createClass(DemoAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var defaultRoute = this.router.config.find(function (route) {
            return route.path === '**';
          });
          this.demos = this.router.config.filter(function (route) {
            return route.path !== '**';
          }).map(function (route) {
            return {
              path: route.path,
              label: route.data.label,
              darkTheme: route.data.darkTheme,
              tags: route.data.tags || []
            };
          });
          this.updateFilteredDemos();
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
            _this14.firstDemoLoaded = true;
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (event.url === '/') {
              return {
                url: "/".concat(defaultRoute.redirectTo)
              };
            }

            return event;
          })).subscribe(function (event) {
            return __awaiter(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.activeDemo = this.demos.find(function (demo) {
                        return "/".concat(demo.path) === event.url;
                      });
                      _context2.next = 3;
                      return getSources(this.activeDemo.path);

                    case 3:
                      this.activeDemo.sources = _context2.sent;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
          var script = document.createElement('script');
          script.async = true;
          script.setAttribute('data-uid', '7c1627e655');
          script.src = 'https://angular-calendar.ck.page/7c1627e655/index.js';
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      }, {
        key: "updateFilteredDemos",
        value: function updateFilteredDemos() {
          var _this15 = this;

          this.filteredDemos = this.demos.filter(function (demo) {
            return !_this15.searchText || [demo.label.toLowerCase()].concat(_toConsumableArray(demo.tags)).some(function (tag) {
              return tag.includes(_this15.searchText.toLowerCase());
            });
          });
        }
      }, {
        key: "editInStackblitz",
        value: function editInStackblitz(demo) {
          var files = {
            'index.html': "\n<link href=\"https://unpkg.com/bootstrap-css-only@".concat(dependencyVersions.bootstrap, "/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/@fortawesome/fontawesome-free@").concat(dependencyVersions.fontAwesome, "/css/all.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/angular-calendar@").concat(dependencyVersions.angularCalendar, "/css/angular-calendar.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/flatpickr@").concat(dependencyVersions.flatpickr, "/dist/flatpickr.css\" rel=\"stylesheet\">\n<mwl-demo-component>Loading...</mwl-demo-component>\n").trim(),
            'main.ts': "\nimport 'core-js/es6/reflect';\nimport 'core-js/es7/reflect';\nimport 'zone.js/dist/zone';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { NgModule } from '@angular/core';\nimport { DemoModule } from './demo/module';\nimport { DemoComponent } from './demo/component';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    DemoModule\n  ],\n  bootstrap: [DemoComponent]\n})\nexport class BootstrapModule {}\n\nplatformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));\n".trim()
          };

          _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_4__["sources"].forEach(function (source) {
            files["demo-utils/".concat(source.filename)] = source.contents.raw["default"];
          });

          demo.sources.forEach(function (source) {
            files["demo/".concat(source.filename)] = source.contents.raw;
          });

          _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_3__["default"].openProject({
            title: 'Angular Calendar Demo',
            description: demo.label,
            template: 'angular-cli',
            tags: ['angular-calendar'],
            files: files,
            dependencies: {
              '@angular/core': dependencyVersions.angular,
              '@angular/common': dependencyVersions.angular,
              '@angular/compiler': dependencyVersions.angular,
              '@angular/platform-browser': dependencyVersions.angular,
              '@angular/platform-browser-dynamic': dependencyVersions.angular,
              '@angular/router': dependencyVersions.angular,
              '@angular/forms': dependencyVersions.angular,
              '@angular/animations': dependencyVersions.angular,
              rxjs: dependencyVersions.rxjs,
              'zone.js': dependencyVersions.zoneJs,
              'angular-draggable-droppable': "^".concat(dependencyVersions.angularDraggableDroppable),
              'angular-resizable-element': "^".concat(dependencyVersions.angularResizableElement),
              'date-fns': dependencyVersions.dateFns,
              'angular-calendar': dependencyVersions.angularCalendar,
              '@ng-bootstrap/ng-bootstrap': '5.0.0',
              rrule: dependencyVersions.rrule,
              'calendar-utils': dependencyVersions.calendarUtils,
              flatpickr: dependencyVersions.flatpickr,
              'angularx-flatpickr': dependencyVersions.angularxFlatpickr,
              'core-js': '2'
            }
          }, {
            openFile: 'demo/component.ts'
          });
        }
      }, {
        key: "copied",
        value: function copied() {
          var _this16 = this;

          this.copied$.next(true);
          setTimeout(function () {
            _this16.copied$.next(false);
          }, 1000);
        }
      }]);

      return DemoAppComponent;
    }();

    DemoAppComponent.ɵfac = function DemoAppComponent_Factory(t) {
      return new (t || DemoAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angulartics2_ga__WEBPACK_IMPORTED_MODULE_6__["Angulartics2GoogleAnalytics"]));
    };

    DemoAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemoAppComponent,
      selectors: [["mwl-demo-app"]],
      decls: 127,
      vars: 13,
      consts: [["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], ["href", "javascript:;", 1, "nav-link"], [1, "fas", "fa-laptop"], [1, "nav-item"], ["href", "https://github.com/mattlewis92/angular-calendar#getting-started", 1, "nav-link"], [1, "fas", "fa-map-pin"], ["href", "https://mattlewis92.github.io/angular-calendar/docs/", 1, "nav-link"], [1, "fas", "fa-book"], ["href", "https://github.com/mattlewis92/angular-calendar/tree/master/build-tool-examples", 1, "nav-link"], [1, "fas", "fa-tools"], ["data-formkit-toggle", "7c1627e655", "href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-fw", "fa-envelope"], ["href", "https://github.com/users/mattlewis92/sponsorship", "target", "_blank", 1, "nav-link", "text-danger"], [1, "fas", "fa-dollar-sign"], [1, "nav", "navbar-nav", "ml-md-auto"], ["href", "https://www.npmjs.com/package/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-npm"], [1, "d-lg-none"], ["href", "https://github.com/mattlewis92/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-github"], ["href", "https://twitter.com/mattlewis92_", "target", "_blank", 1, "nav-link", "text-primary", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-twitter"], ["loading", ""], [1, "container-fluid"], [1, "row", "fill-height"], ["mwlDraggableScrollContainer", "", 1, "col-md-9", "col-xl-10", "fill-height", "scroll-y"], ["class", "card", 4, "ngIf", "ngIfElse"], [1, "col-md-3", "col-xl-2", "fill-height", "sidebar-nav", "scroll-y"], ["type", "search", "placeholder", "Search demos...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "list-unstyled", "spacer-top"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card"], [1, "card-body", "text-center"], [1, "fas", "fa-spin", "fa-spinner", "fa-5x"], [1, "card-header"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-info", "float-right", 3, "click"], [1, "fas", "fa-edit"], [1, "card-body"], [3, "destroyOnHide"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "fas", "fa-fw", "fa-laptop"], [1, "spacer-top"], [3, "ngSwitch"], ["class", "fab fa-fw fa-html5", 4, "ngSwitchCase"], ["class", "fab fa-fw fa-css3", 4, "ngSwitchCase"], ["class", "fas fa-fw fa-code", 4, "ngSwitchDefault"], [1, "fab", "fa-fw", "fa-html5"], [1, "fab", "fa-fw", "fa-css3"], [1, "fas", "fa-fw", "fa-code"], [1, "code-container"], ["ngxClipboard", "", 1, "btn", "btn-outline-primary", "copy-code", 3, "cbContent", "ngbTooltip", "placement", "click"], [1, "fa", 3, "ngClass"], [3, "innerHTML"], [3, "routerLink"]],
      template: function DemoAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular 6.0+ calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoAppComponent_Template_button_click_5_listener() {
            return ctx.isMenuVisible = !ctx.isMenuVisible;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Demos\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Getting started\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " API docs\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Build tool examples\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoAppComponent_Template_a_click_48_listener() {
            return ctx.isMenuVisible = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Subscribe\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Donate\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "View on npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "View on GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Follow me on Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, DemoAppComponent_ng_template_101_Template, 11, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, DemoAppComponent_div_110_Template, 35, 3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_115_listener($event) {
            return ctx.searchText = $event;
          })("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_115_listener() {
            return ctx.updateFilteredDemos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, DemoAppComponent_li_119_Template, 5, 6, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, DemoAppComponent_em_122_Template, 2, 0, "em", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navbar-dark", ctx.activeDemo == null ? null : ctx.activeDemo.darkTheme)("bg-dark", ctx.activeDemo == null ? null : ctx.activeDemo.darkTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isMenuVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", "View on npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", "View on GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", "Follow me on Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstDemoLoaded)("ngIfElse", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredDemos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredDemos.length === 0);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltip"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__["ɵd"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n\n@media (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n.spacer-top[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 90%;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active) {\n  color: #777;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0275d8;\n  text-decoration: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #373a3c;\n  font-weight: 700;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.fill-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scroll-y[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.code-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.copy-code[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW9zL2FwcC9kZW1vLWFwcC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vcy9hcHAvZGVtby1hcHAuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLnNwYWNlci10b3Age1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2lkZWJhci1uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnNpZGViYXItbmF2IGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXItbmF2IHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNpZGViYXItbmF2IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiA5MCU7XG59XG5cbi5zaWRlYmFyLW5hdiBhOm5vdCguYWN0aXZlKSB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uc2lkZWJhci1uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDI3NWQ4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlYmFyLW5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzczYTNjO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZmlsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zY3JvbGwteSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb2RlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvcHktY29kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-demo-app',
          styleUrls: ['./demo-app.css'],
          templateUrl: './demo-app.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: angulartics2_ga__WEBPACK_IMPORTED_MODULE_6__["Angulartics2GoogleAnalytics"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-app.module.ts":
  /*!***********************************************!*\
    !*** ./projects/demos/app/demo-app.module.ts ***!
    \***********************************************/

  /*! exports provided: DemoAppModule */

  /***/
  function projectsDemosAppDemoAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoAppModule", function () {
      return DemoAppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/__ivy_ngcc__/fesm2015/angulartics2.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _demo_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./demo-app.component */
    "./projects/demos/app/demo-app.component.ts");
    /* harmony import */


    var _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./demo-modules/kitchen-sink/component */
    "./projects/demos/app/demo-modules/kitchen-sink/component.ts");
    /* harmony import */


    var _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./demo-modules/kitchen-sink/module */
    "./projects/demos/app/demo-modules/kitchen-sink/module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./projects/demos/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var DemoAppModule = function DemoAppModule() {
      _classCallCheck(this, DemoAppModule);
    };

    DemoAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoAppModule,
      bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_7__["DemoAppComponent"]]
    });
    DemoAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoAppModule_Factory(t) {
        return new (t || DemoAppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], angulartics2__WEBPACK_IMPORTED_MODULE_5__["Angulartics2Module"].forRoot({
        developerMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      }), ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"], _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_9__["DemoModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
        path: 'kitchen-sink',
        component: _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_8__["DemoComponent"],
        data: {
          label: 'Kitchen sink'
        }
      }, {
        path: 'async-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-async-events-module */
          [__webpack_require__.e("default~demo-modules-async-events-module~demo-modules-public-holidays-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-async-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/async-events/module */
          "./projects/demos/app/demo-modules/async-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Async events'
        }
      }, {
        path: 'optional-event-end-dates',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-optional-event-end-dates-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-optional-event-end-dates-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/optional-event-end-dates/module */
          "./projects/demos/app/demo-modules/optional-event-end-dates/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Optional event end dates'
        }
      }, {
        path: 'editable-deletable-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-editable-deletable-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-editable-deletable-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/editable-deletable-events/module */
          "./projects/demos/app/demo-modules/editable-deletable-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Editable / deletable events'
        }
      }, {
        path: 'draggable-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-draggable-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-draggable-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/draggable-events/module */
          "./projects/demos/app/demo-modules/draggable-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Draggable events'
        }
      }, {
        path: 'resizable-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-resizable-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-resizable-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/resizable-events/module */
          "./projects/demos/app/demo-modules/resizable-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Resizable events'
        }
      }, {
        path: 'month-view-badge-total',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-month-view-badge-total-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-month-view-badge-total-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/month-view-badge-total/module */
          "./projects/demos/app/demo-modules/month-view-badge-total/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Month view badge total'
        }
      }, {
        path: 'recurring-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-recurring-events-module */
          [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("default~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-recurring-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/recurring-events/module */
          "./projects/demos/app/demo-modules/recurring-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Recurring events'
        }
      }, {
        path: 'custom-event-class',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-custom-event-class-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-custom-event-class-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/custom-event-class/module */
          "./projects/demos/app/demo-modules/custom-event-class/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Custom event class'
        }
      }, {
        path: 'clickable-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-clickable-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-clickable-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/clickable-events/module */
          "./projects/demos/app/demo-modules/clickable-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Clickable events'
        }
      }, {
        path: 'clickable-days',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-clickable-days-module */
          "demo-modules-clickable-days-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/clickable-days/module */
          "./projects/demos/app/demo-modules/clickable-days/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Clickable times'
        }
      }, {
        path: 'day-view-start-end',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-day-view-start-end-module */
          "demo-modules-day-view-start-end-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/day-view-start-end/module */
          "./projects/demos/app/demo-modules/day-view-start-end/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Day view start / end time'
        }
      }, {
        path: 'day-view-hour-split',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-day-view-hour-split-module */
          "demo-modules-day-view-hour-split-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/day-view-hour-split/module */
          "./projects/demos/app/demo-modules/day-view-hour-split/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Day view hour split'
        }
      }, {
        path: 'navigating-between-views',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-navigating-between-views-module */
          "demo-modules-navigating-between-views-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/navigating-between-views/module */
          "./projects/demos/app/demo-modules/navigating-between-views/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Navigating between views'
        }
      }, {
        path: 'before-view-render',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-before-view-render-module */
          "demo-modules-before-view-render-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/before-view-render/module */
          "./projects/demos/app/demo-modules/before-view-render/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Before view render',
          tags: ['disable']
        }
      }, {
        path: 'exclude-days',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-exclude-days-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-exclude-days-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/exclude-days/module */
          "./projects/demos/app/demo-modules/exclude-days/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Exclude Weekends'
        }
      }, {
        path: 'i18n',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-i18n-module */
          "demo-modules-i18n-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/i18n/module */
          "./projects/demos/app/demo-modules/i18n/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Internationalisation',
          tags: ['translation', 'i18n', 'translate', 'locale']
        }
      }, {
        path: 'draggable-external-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-draggable-external-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-draggable-external-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/draggable-external-events/module */
          "./projects/demos/app/demo-modules/draggable-external-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Draggable external events'
        }
      }, {
        path: 'all-day-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-all-day-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-all-day-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/all-day-events/module */
          "./projects/demos/app/demo-modules/all-day-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'All day events'
        }
      }, {
        path: 'customise-date-formats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-customise-date-formats-module */
          "demo-modules-customise-date-formats-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/customise-date-formats/module */
          "./projects/demos/app/demo-modules/customise-date-formats/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Customise date formats'
        }
      }, {
        path: 'show-dates-on-titles',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-show-dates-on-titles-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-show-dates-on-titles-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/show-dates-on-titles/module */
          "./projects/demos/app/demo-modules/show-dates-on-titles/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Show dates on title'
        }
      }, {
        path: 'disable-tooltips',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-disable-tooltips-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-disable-tooltips-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/disable-tooltips/module */
          "./projects/demos/app/demo-modules/disable-tooltips/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Disable tooltips'
        }
      }, {
        path: 'additional-event-properties',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-additional-event-properties-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-additional-event-properties-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/additional-event-properties/module */
          "./projects/demos/app/demo-modules/additional-event-properties/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Additional event properties'
        }
      }, {
        path: 'selectable-period',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-selectable-period-module */
          "demo-modules-selectable-period-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/selectable-period/module */
          "./projects/demos/app/demo-modules/selectable-period/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Selectable period'
        }
      }, {
        path: 'min-max-date',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-min-max-date-module */
          "demo-modules-min-max-date-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/min-max-date/module */
          "./projects/demos/app/demo-modules/min-max-date/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Min max date'
        }
      }, {
        path: 'refreshing-the-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-refreshing-the-view-module */
          "demo-modules-refreshing-the-view-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/refreshing-the-view/module */
          "./projects/demos/app/demo-modules/refreshing-the-view/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Refreshing the view'
        }
      }, {
        path: 'custom-templates',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-custom-templates-module */
          "demo-modules-custom-templates-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/custom-templates/module */
          "./projects/demos/app/demo-modules/custom-templates/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Custom templates'
        }
      }, {
        path: 'group-similar-events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-group-similar-events-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-group-similar-events-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/group-similar-events/module */
          "./projects/demos/app/demo-modules/group-similar-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Group similar events'
        }
      }, {
        path: 'context-menu',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-context-menu-module */
          [__webpack_require__.e("default~demo-modules-context-menu-module~demo-modules-responsive-week-view-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-context-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/context-menu/module */
          "./projects/demos/app/demo-modules/context-menu/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Context menu',
          tags: ['right click']
        }
      }, {
        path: 'week-view-minute-precision',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-week-view-minute-precision-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-week-view-minute-precision-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/week-view-minute-precision/module */
          "./projects/demos/app/demo-modules/week-view-minute-precision/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Week view minute precision'
        }
      }, {
        path: 'extra-month-view-weeks',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-extra-month-view-weeks-module */
          "demo-modules-extra-month-view-weeks-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/extra-month-view-weeks/module */
          "./projects/demos/app/demo-modules/extra-month-view-weeks/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Extra month view weeks'
        }
      }, {
        path: 'disable-slide-animation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-disable-slide-animation-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-disable-slide-animation-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/disable-slide-animation/module */
          "./projects/demos/app/demo-modules/disable-slide-animation/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Disable slide animation'
        }
      }, {
        path: 'no-events-label',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-no-events-label-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-no-events-label-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/no-events-label/module */
          "./projects/demos/app/demo-modules/no-events-label/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'No events label'
        }
      }, {
        path: 'moment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-moment-module */
          [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("default~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("demo-modules-moment-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/moment/module */
          "./projects/demos/app/demo-modules/moment/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Use moment'
        }
      }, {
        path: 'dayjs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-dayjs-module */
          [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("demo-modules-dayjs-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/dayjs/module */
          "./projects/demos/app/demo-modules/dayjs/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Use dayjs'
        }
      }, {
        path: 'day-view-scheduler',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-day-view-scheduler-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-day-view-scheduler-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/day-view-scheduler/module */
          "./projects/demos/app/demo-modules/day-view-scheduler/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Day view scheduler'
        }
      }, {
        path: 'drag-to-create-events',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-drag-to-create-events-module */
          "demo-modules-drag-to-create-events-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/drag-to-create-events/module */
          "./projects/demos/app/demo-modules/drag-to-create-events/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Drag to create events'
        }
      }, {
        path: 'responsive-week-view',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-responsive-week-view-module */
          [__webpack_require__.e("default~demo-modules-context-menu-module~demo-modules-responsive-week-view-module"), __webpack_require__.e("demo-modules-responsive-week-view-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/responsive-week-view/module */
          "./projects/demos/app/demo-modules/responsive-week-view/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Responsive week view'
        }
      }, {
        path: 'dark-theme',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-dark-theme-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-dark-theme-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/dark-theme/module */
          "./projects/demos/app/demo-modules/dark-theme/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Dark theme',
          darkTheme: true
        }
      }, {
        path: 'week-view-event-margin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-week-view-event-margin-module */
          [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-week-view-event-margin-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/week-view-event-margin/module */
          "./projects/demos/app/demo-modules/week-view-event-margin/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Week view event margin'
        }
      }, {
        path: 'customise-current-time-marker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-customise-current-time-marker-module */
          "demo-modules-customise-current-time-marker-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/customise-current-time-marker/module */
          "./projects/demos/app/demo-modules/customise-current-time-marker/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Customise current time marker'
        }
      }, {
        path: 'public-holidays',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | demo-modules-public-holidays-module */
          [__webpack_require__.e("default~demo-modules-async-events-module~demo-modules-public-holidays-module"), __webpack_require__.e("demo-modules-public-holidays-module")]).then(__webpack_require__.bind(null,
          /*! ./demo-modules/public-holidays/module */
          "./projects/demos/app/demo-modules/public-holidays/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Public holidays'
        }
      }, {
        path: 'scroll-to-current-time',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-modules-scroll-to-current-time-module */
          "demo-modules-scroll-to-current-time-module").then(__webpack_require__.bind(null,
          /*! ./demo-modules/scroll-to-current-time/module */
          "./projects/demos/app/demo-modules/scroll-to-current-time/module.ts")).then(function (m) {
            return m.DemoModule;
          });
        },
        data: {
          label: 'Scroll to current time'
        }
      }, {
        path: '**',
        redirectTo: 'kitchen-sink'
      }], {
        useHash: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoAppModule, {
        declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_7__["DemoAppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], angulartics2__WEBPACK_IMPORTED_MODULE_5__["Angulartics2Module"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"], _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_9__["DemoModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_7__["DemoAppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], angulartics2__WEBPACK_IMPORTED_MODULE_5__["Angulartics2Module"].forRoot({
            developerMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
          }), ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"], _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_9__["DemoModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
            path: 'kitchen-sink',
            component: _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_8__["DemoComponent"],
            data: {
              label: 'Kitchen sink'
            }
          }, {
            path: 'async-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-async-events-module */
              [__webpack_require__.e("default~demo-modules-async-events-module~demo-modules-public-holidays-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-async-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/async-events/module */
              "./projects/demos/app/demo-modules/async-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Async events'
            }
          }, {
            path: 'optional-event-end-dates',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-optional-event-end-dates-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-optional-event-end-dates-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/optional-event-end-dates/module */
              "./projects/demos/app/demo-modules/optional-event-end-dates/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Optional event end dates'
            }
          }, {
            path: 'editable-deletable-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-editable-deletable-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-editable-deletable-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/editable-deletable-events/module */
              "./projects/demos/app/demo-modules/editable-deletable-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Editable / deletable events'
            }
          }, {
            path: 'draggable-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-draggable-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-draggable-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/draggable-events/module */
              "./projects/demos/app/demo-modules/draggable-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Draggable events'
            }
          }, {
            path: 'resizable-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-resizable-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-resizable-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/resizable-events/module */
              "./projects/demos/app/demo-modules/resizable-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Resizable events'
            }
          }, {
            path: 'month-view-badge-total',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-month-view-badge-total-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-month-view-badge-total-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/month-view-badge-total/module */
              "./projects/demos/app/demo-modules/month-view-badge-total/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Month view badge total'
            }
          }, {
            path: 'recurring-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-recurring-events-module */
              [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("default~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-recurring-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/recurring-events/module */
              "./projects/demos/app/demo-modules/recurring-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Recurring events'
            }
          }, {
            path: 'custom-event-class',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-custom-event-class-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-custom-event-class-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/custom-event-class/module */
              "./projects/demos/app/demo-modules/custom-event-class/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Custom event class'
            }
          }, {
            path: 'clickable-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-clickable-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-clickable-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/clickable-events/module */
              "./projects/demos/app/demo-modules/clickable-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Clickable events'
            }
          }, {
            path: 'clickable-days',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-clickable-days-module */
              "demo-modules-clickable-days-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/clickable-days/module */
              "./projects/demos/app/demo-modules/clickable-days/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Clickable times'
            }
          }, {
            path: 'day-view-start-end',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-day-view-start-end-module */
              "demo-modules-day-view-start-end-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/day-view-start-end/module */
              "./projects/demos/app/demo-modules/day-view-start-end/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Day view start / end time'
            }
          }, {
            path: 'day-view-hour-split',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-day-view-hour-split-module */
              "demo-modules-day-view-hour-split-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/day-view-hour-split/module */
              "./projects/demos/app/demo-modules/day-view-hour-split/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Day view hour split'
            }
          }, {
            path: 'navigating-between-views',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-navigating-between-views-module */
              "demo-modules-navigating-between-views-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/navigating-between-views/module */
              "./projects/demos/app/demo-modules/navigating-between-views/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Navigating between views'
            }
          }, {
            path: 'before-view-render',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-before-view-render-module */
              "demo-modules-before-view-render-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/before-view-render/module */
              "./projects/demos/app/demo-modules/before-view-render/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Before view render',
              tags: ['disable']
            }
          }, {
            path: 'exclude-days',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-exclude-days-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-exclude-days-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/exclude-days/module */
              "./projects/demos/app/demo-modules/exclude-days/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Exclude Weekends'
            }
          }, {
            path: 'i18n',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-i18n-module */
              "demo-modules-i18n-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/i18n/module */
              "./projects/demos/app/demo-modules/i18n/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Internationalisation',
              tags: ['translation', 'i18n', 'translate', 'locale']
            }
          }, {
            path: 'draggable-external-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-draggable-external-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-draggable-external-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/draggable-external-events/module */
              "./projects/demos/app/demo-modules/draggable-external-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Draggable external events'
            }
          }, {
            path: 'all-day-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-all-day-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-all-day-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/all-day-events/module */
              "./projects/demos/app/demo-modules/all-day-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'All day events'
            }
          }, {
            path: 'customise-date-formats',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-customise-date-formats-module */
              "demo-modules-customise-date-formats-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/customise-date-formats/module */
              "./projects/demos/app/demo-modules/customise-date-formats/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Customise date formats'
            }
          }, {
            path: 'show-dates-on-titles',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-show-dates-on-titles-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-show-dates-on-titles-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/show-dates-on-titles/module */
              "./projects/demos/app/demo-modules/show-dates-on-titles/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Show dates on title'
            }
          }, {
            path: 'disable-tooltips',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-disable-tooltips-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-disable-tooltips-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/disable-tooltips/module */
              "./projects/demos/app/demo-modules/disable-tooltips/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Disable tooltips'
            }
          }, {
            path: 'additional-event-properties',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-additional-event-properties-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-additional-event-properties-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/additional-event-properties/module */
              "./projects/demos/app/demo-modules/additional-event-properties/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Additional event properties'
            }
          }, {
            path: 'selectable-period',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-selectable-period-module */
              "demo-modules-selectable-period-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/selectable-period/module */
              "./projects/demos/app/demo-modules/selectable-period/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Selectable period'
            }
          }, {
            path: 'min-max-date',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-min-max-date-module */
              "demo-modules-min-max-date-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/min-max-date/module */
              "./projects/demos/app/demo-modules/min-max-date/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Min max date'
            }
          }, {
            path: 'refreshing-the-view',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-refreshing-the-view-module */
              "demo-modules-refreshing-the-view-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/refreshing-the-view/module */
              "./projects/demos/app/demo-modules/refreshing-the-view/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Refreshing the view'
            }
          }, {
            path: 'custom-templates',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-custom-templates-module */
              "demo-modules-custom-templates-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/custom-templates/module */
              "./projects/demos/app/demo-modules/custom-templates/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Custom templates'
            }
          }, {
            path: 'group-similar-events',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-group-similar-events-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-group-similar-events-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/group-similar-events/module */
              "./projects/demos/app/demo-modules/group-similar-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Group similar events'
            }
          }, {
            path: 'context-menu',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-context-menu-module */
              [__webpack_require__.e("default~demo-modules-context-menu-module~demo-modules-responsive-week-view-module"), __webpack_require__.e("common"), __webpack_require__.e("demo-modules-context-menu-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/context-menu/module */
              "./projects/demos/app/demo-modules/context-menu/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Context menu',
              tags: ['right click']
            }
          }, {
            path: 'week-view-minute-precision',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-week-view-minute-precision-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-week-view-minute-precision-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/week-view-minute-precision/module */
              "./projects/demos/app/demo-modules/week-view-minute-precision/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Week view minute precision'
            }
          }, {
            path: 'extra-month-view-weeks',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-extra-month-view-weeks-module */
              "demo-modules-extra-month-view-weeks-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/extra-month-view-weeks/module */
              "./projects/demos/app/demo-modules/extra-month-view-weeks/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Extra month view weeks'
            }
          }, {
            path: 'disable-slide-animation',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-disable-slide-animation-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-disable-slide-animation-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/disable-slide-animation/module */
              "./projects/demos/app/demo-modules/disable-slide-animation/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Disable slide animation'
            }
          }, {
            path: 'no-events-label',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-no-events-label-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-no-events-label-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/no-events-label/module */
              "./projects/demos/app/demo-modules/no-events-label/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'No events label'
            }
          }, {
            path: 'moment',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-moment-module */
              [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("default~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("demo-modules-moment-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/moment/module */
              "./projects/demos/app/demo-modules/moment/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Use moment'
            }
          }, {
            path: 'dayjs',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-dayjs-module */
              [__webpack_require__.e("default~demo-modules-dayjs-module~demo-modules-moment-module~demo-modules-recurring-events-module"), __webpack_require__.e("demo-modules-dayjs-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/dayjs/module */
              "./projects/demos/app/demo-modules/dayjs/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Use dayjs'
            }
          }, {
            path: 'day-view-scheduler',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-day-view-scheduler-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-day-view-scheduler-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/day-view-scheduler/module */
              "./projects/demos/app/demo-modules/day-view-scheduler/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Day view scheduler'
            }
          }, {
            path: 'drag-to-create-events',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-drag-to-create-events-module */
              "demo-modules-drag-to-create-events-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/drag-to-create-events/module */
              "./projects/demos/app/demo-modules/drag-to-create-events/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Drag to create events'
            }
          }, {
            path: 'responsive-week-view',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-responsive-week-view-module */
              [__webpack_require__.e("default~demo-modules-context-menu-module~demo-modules-responsive-week-view-module"), __webpack_require__.e("demo-modules-responsive-week-view-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/responsive-week-view/module */
              "./projects/demos/app/demo-modules/responsive-week-view/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Responsive week view'
            }
          }, {
            path: 'dark-theme',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-dark-theme-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-dark-theme-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/dark-theme/module */
              "./projects/demos/app/demo-modules/dark-theme/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Dark theme',
              darkTheme: true
            }
          }, {
            path: 'week-view-event-margin',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-week-view-event-margin-module */
              [__webpack_require__.e("common"), __webpack_require__.e("demo-modules-week-view-event-margin-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/week-view-event-margin/module */
              "./projects/demos/app/demo-modules/week-view-event-margin/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Week view event margin'
            }
          }, {
            path: 'customise-current-time-marker',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-customise-current-time-marker-module */
              "demo-modules-customise-current-time-marker-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/customise-current-time-marker/module */
              "./projects/demos/app/demo-modules/customise-current-time-marker/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Customise current time marker'
            }
          }, {
            path: 'public-holidays',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | demo-modules-public-holidays-module */
              [__webpack_require__.e("default~demo-modules-async-events-module~demo-modules-public-holidays-module"), __webpack_require__.e("demo-modules-public-holidays-module")]).then(__webpack_require__.bind(null,
              /*! ./demo-modules/public-holidays/module */
              "./projects/demos/app/demo-modules/public-holidays/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Public holidays'
            }
          }, {
            path: 'scroll-to-current-time',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | demo-modules-scroll-to-current-time-module */
              "demo-modules-scroll-to-current-time-module").then(__webpack_require__.bind(null,
              /*! ./demo-modules/scroll-to-current-time/module */
              "./projects/demos/app/demo-modules/scroll-to-current-time/module.ts")).then(function (m) {
                return m.DemoModule;
              });
            },
            data: {
              label: 'Scroll to current time'
            }
          }, {
            path: '**',
            redirectTo: 'kitchen-sink'
          }], {
            useHash: true
          })],
          bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_7__["DemoAppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$":
  /*!*************************************************************************************!*\
    !*** ./projects/demos/app/demo-modules lazy ^\.\/.*\/sources\.ts$ namespace object ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function projectsDemosAppDemoModulesLazyRecursiveSourcesTs$(module, exports, __webpack_require__) {
    var map = {
      "./additional-event-properties/sources.ts": ["./projects/demos/app/demo-modules/additional-event-properties/sources.ts", 9],
      "./all-day-events/sources.ts": ["./projects/demos/app/demo-modules/all-day-events/sources.ts", 10],
      "./async-events/sources.ts": ["./projects/demos/app/demo-modules/async-events/sources.ts", 11],
      "./before-view-render/sources.ts": ["./projects/demos/app/demo-modules/before-view-render/sources.ts", 12],
      "./clickable-days/sources.ts": ["./projects/demos/app/demo-modules/clickable-days/sources.ts", 13],
      "./clickable-events/sources.ts": ["./projects/demos/app/demo-modules/clickable-events/sources.ts", 14],
      "./context-menu/sources.ts": ["./projects/demos/app/demo-modules/context-menu/sources.ts", 15],
      "./custom-event-class/sources.ts": ["./projects/demos/app/demo-modules/custom-event-class/sources.ts", 16],
      "./custom-templates/sources.ts": ["./projects/demos/app/demo-modules/custom-templates/sources.ts", 17],
      "./customise-current-time-marker/sources.ts": ["./projects/demos/app/demo-modules/customise-current-time-marker/sources.ts", 1],
      "./customise-date-formats/sources.ts": ["./projects/demos/app/demo-modules/customise-date-formats/sources.ts", 2],
      "./dark-theme/sources.ts": ["./projects/demos/app/demo-modules/dark-theme/sources.ts", 3],
      "./day-view-hour-split/sources.ts": ["./projects/demos/app/demo-modules/day-view-hour-split/sources.ts", 18],
      "./day-view-scheduler/sources.ts": ["./projects/demos/app/demo-modules/day-view-scheduler/sources.ts", 0],
      "./day-view-start-end/sources.ts": ["./projects/demos/app/demo-modules/day-view-start-end/sources.ts", 19],
      "./dayjs/sources.ts": ["./projects/demos/app/demo-modules/dayjs/sources.ts", 20],
      "./demo-utils/sources.ts": ["./projects/demos/app/demo-modules/demo-utils/sources.ts"],
      "./disable-slide-animation/sources.ts": ["./projects/demos/app/demo-modules/disable-slide-animation/sources.ts", 21],
      "./disable-tooltips/sources.ts": ["./projects/demos/app/demo-modules/disable-tooltips/sources.ts", 4],
      "./drag-to-create-events/sources.ts": ["./projects/demos/app/demo-modules/drag-to-create-events/sources.ts", 22],
      "./draggable-events/sources.ts": ["./projects/demos/app/demo-modules/draggable-events/sources.ts", 23],
      "./draggable-external-events/sources.ts": ["./projects/demos/app/demo-modules/draggable-external-events/sources.ts", 24],
      "./editable-deletable-events/sources.ts": ["./projects/demos/app/demo-modules/editable-deletable-events/sources.ts", 25],
      "./exclude-days/sources.ts": ["./projects/demos/app/demo-modules/exclude-days/sources.ts", 26],
      "./extra-month-view-weeks/sources.ts": ["./projects/demos/app/demo-modules/extra-month-view-weeks/sources.ts", 27],
      "./group-similar-events/sources.ts": ["./projects/demos/app/demo-modules/group-similar-events/sources.ts", 28],
      "./i18n/sources.ts": ["./projects/demos/app/demo-modules/i18n/sources.ts", 5],
      "./kitchen-sink/sources.ts": ["./projects/demos/app/demo-modules/kitchen-sink/sources.ts", 6],
      "./min-max-date/sources.ts": ["./projects/demos/app/demo-modules/min-max-date/sources.ts", 7],
      "./moment/sources.ts": ["./projects/demos/app/demo-modules/moment/sources.ts", 29],
      "./month-view-badge-total/sources.ts": ["./projects/demos/app/demo-modules/month-view-badge-total/sources.ts", 30],
      "./navigating-between-views/sources.ts": ["./projects/demos/app/demo-modules/navigating-between-views/sources.ts", 31],
      "./no-events-label/sources.ts": ["./projects/demos/app/demo-modules/no-events-label/sources.ts", 32],
      "./optional-event-end-dates/sources.ts": ["./projects/demos/app/demo-modules/optional-event-end-dates/sources.ts", 33],
      "./public-holidays/sources.ts": ["./projects/demos/app/demo-modules/public-holidays/sources.ts", 34],
      "./recurring-events/sources.ts": ["./projects/demos/app/demo-modules/recurring-events/sources.ts", 35],
      "./refreshing-the-view/sources.ts": ["./projects/demos/app/demo-modules/refreshing-the-view/sources.ts", 36],
      "./resizable-events/sources.ts": ["./projects/demos/app/demo-modules/resizable-events/sources.ts", 37],
      "./responsive-week-view/sources.ts": ["./projects/demos/app/demo-modules/responsive-week-view/sources.ts", 38],
      "./scroll-to-current-time/sources.ts": ["./projects/demos/app/demo-modules/scroll-to-current-time/sources.ts", 39],
      "./selectable-period/sources.ts": ["./projects/demos/app/demo-modules/selectable-period/sources.ts", 40],
      "./show-dates-on-titles/sources.ts": ["./projects/demos/app/demo-modules/show-dates-on-titles/sources.ts", 8],
      "./week-view-event-margin/sources.ts": ["./projects/demos/app/demo-modules/week-view-event-margin/sources.ts", 41],
      "./week-view-minute-precision/sources.ts": ["./projects/demos/app/demo-modules/week-view-minute-precision/sources.ts", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./projects/demos/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./projects/demos/app/demo-modules/demo-utils/sources.ts":
  /*!***************************************************************!*\
    !*** ./projects/demos/app/demo-modules/demo-utils/sources.ts ***!
    \***************************************************************/

  /*! exports provided: sources */

  /***/
  function projectsDemosAppDemoModulesDemoUtilsSourcesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sources", function () {
      return sources;
    });

    var sources = [{
      filename: 'calendar-header.component.ts',
      contents: {
        raw: __webpack_require__(
        /*! !raw-loader!./calendar-header.component */
        "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts"),
        highlighted: __webpack_require__(
        /*! !raw-loader!highlightjs-loader?lang=typescript!./calendar-header.component */
        "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts")
      }
    }, {
      filename: 'colors.ts',
      contents: {
        raw: __webpack_require__(
        /*! !raw-loader!./colors */
        "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/colors.ts"),
        highlighted: __webpack_require__(
        /*! !raw-loader!highlightjs-loader?lang=typescript!./colors */
        "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/colors.ts")
      }
    }, {
      filename: 'module.ts',
      contents: {
        raw: __webpack_require__(
        /*! !raw-loader!./module */
        "./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/module.ts"),
        highlighted: __webpack_require__(
        /*! !raw-loader!highlightjs-loader?lang=typescript!./module */
        "./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/module.ts")
      }
    }];
    /***/
  },

  /***/
  "./projects/demos/app/demo-modules/kitchen-sink/component.ts":
  /*!*******************************************************************!*\
    !*** ./projects/demos/app/demo-modules/kitchen-sink/component.ts ***!
    \*******************************************************************/

  /*! exports provided: DemoComponent */

  /***/
  function projectsDemosAppDemoModulesKitchenSinkComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-calendar */
    "./projects/angular-calendar/src/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
    "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
    "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
    "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
    "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
    "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
    "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");

    var _c0 = ["modalContent"];

    function DemoComponent_mwl_calendar_month_view_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.dayClicked($event.day);
        })("eventClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
      }
    }

    function DemoComponent_mwl_calendar_week_view_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
      }
    }

    function DemoComponent_mwl_calendar_day_view_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
      }
    }

    function DemoComponent_tr_94_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;
          return event_r16.title = $event;
        })("keyup", function DemoComponent_tr_94_Template_input_keyup_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.refresh.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;
          return event_r16.color.primary = $event;
        })("change", function DemoComponent_tr_94_Template_input_change_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.refresh.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;
          return event_r16.color.secondary = $event;
        })("change", function DemoComponent_tr_94_Template_input_change_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.refresh.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;
          return event_r16.start = $event;
        })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.refresh.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;
          return event_r16.end = $event;
        })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.refresh.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_tr_94_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var event_r16 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.deleteEvent(event_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Delete\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.color.primary);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.color.secondary);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.start)("altInput", true)("convertModelValue", true)("enableTime", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.end)("altInput", true)("convertModelValue", true)("enableTime", true);
      }
    }

    function DemoComponent_ng_template_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Event action occurred");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_6_listener() {
          var close_r29 = ctx.close;
          return close_r29();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      Action:\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      Event:\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_31_listener() {
          var close_r29 = ctx.close;
          return close_r29();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      OK\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n");
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.modalData == null ? null : ctx_r5.modalData.action);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 2, ctx_r5.modalData == null ? null : ctx_r5.modalData.event));
      }
    }

    var colors = {
      red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      },
      yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    };

    var DemoComponent = /*#__PURE__*/function () {
      function DemoComponent(modal) {
        var _this17 = this;

        _classCallCheck(this, DemoComponent);

        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [{
          label: '<i class="fas fa-fw fa-pencil-alt"></i>',
          a11yLabel: 'Edit',
          onClick: function onClick(_ref40) {
            var event = _ref40.event;

            _this17.handleEvent('Edited', event);
          }
        }, {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          a11yLabel: 'Delete',
          onClick: function onClick(_ref41) {
            var event = _ref41.event;
            _this17.events = _this17.events.filter(function (iEvent) {
              return iEvent !== event;
            });

            _this17.handleEvent('Deleted', event);
          }
        }];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [{
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
          title: 'A 3 day event',
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
          title: 'An event with no end date',
          color: colors.yellow,
          actions: this.actions
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: colors.blue,
          allDay: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(new Date(), 2),
          title: 'A draggable and resizable event',
          color: colors.yellow,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }];
        this.activeDayIsOpen = true;
      }

      _createClass(DemoComponent, [{
        key: "dayClicked",
        value: function dayClicked(_ref42) {
          var date = _ref42.date,
              events = _ref42.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
            } else {
              this.activeDayIsOpen = true;
            }

            this.viewDate = date;
          }
        }
      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref43) {
          var event = _ref43.event,
              newStart = _ref43.newStart,
              newEnd = _ref43.newEnd;
          this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
              return Object.assign(Object.assign({}, event), {
                start: newStart,
                end: newEnd
              });
            }

            return iEvent;
          });
          this.handleEvent('Dropped or resized', event);
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          this.modalData = {
            event: event,
            action: action
          };
          this.modal.open(this.modalContent, {
            size: 'lg'
          });
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          this.events = [].concat(_toConsumableArray(this.events), [{
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            }
          }]);
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }]);

      return DemoComponent;
    }();

    DemoComponent.ɵfac = function DemoComponent_Factory(t) {
      return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemoComponent,
      selectors: [["mwl-demo-component"]],
      viewQuery: function DemoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
        }
      },
      decls: 102,
      vars: 21,
      consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "clearfix"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["modalContent", ""], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "color", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", "altFormat", "F j, Y H:i", "placeholder", "Not set", 1, "form-control", 3, "ngModel", "altInput", "convertModelValue", "enableTime", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]],
      template: function DemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener() {
            return ctx.closeOpenMonthViewDay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        Previous\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_9_listener($event) {
            return ctx.viewDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        Today\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener() {
            return ctx.closeOpenMonthViewDay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        Next\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_28_listener() {
            return ctx.setView(ctx.CalendarView.Month);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        Month\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_31_listener() {
            return ctx.setView(ctx.CalendarView.Week);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n        Week\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_34_listener() {
            return ctx.setView(ctx.CalendarView.Day);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        Day\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DemoComponent_mwl_calendar_month_view_44_Template, 2, 4, "mwl-calendar-month-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DemoComponent_mwl_calendar_week_view_46_Template, 2, 3, "mwl-calendar-week-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DemoComponent_mwl_calendar_day_view_48_Template, 2, 3, "mwl-calendar-day-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n  Edit events\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_58_listener() {
            return ctx.addEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n    Add new\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Primary color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Secondary color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Starts at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Ends at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, DemoComponent_tr_94_Template, 33, 11, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, DemoComponent_ng_template_99_Template, 35, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 17, ctx.viewDate, ctx.view + "ViewTitle", "en"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        }
      },
      directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"], _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarTodayDirective"], _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarNextViewDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_9__["CalendarMonthViewComponent"], _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_10__["CalendarWeekViewComponent"], _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_11__["CalendarDayViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_13__["ɵb"]],
      pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_14__["CalendarDatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
      styles: ["h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW9zL2FwcC9kZW1vLW1vZHVsZXMva2l0Y2hlbi1zaW5rL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmIiwiZmlsZSI6InByb2plY3RzL2RlbW9zL2FwcC9kZW1vLW1vZHVsZXMva2l0Y2hlbi1zaW5rL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mwl-demo-component',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styleUrls: ['styles.css'],
          templateUrl: 'template.html'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modalContent', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/demos/app/demo-modules/kitchen-sink/module.ts":
  /*!****************************************************************!*\
    !*** ./projects/demos/app/demo-modules/kitchen-sink/module.ts ***!
    \****************************************************************/

  /*! exports provided: DemoModule */

  /***/
  function projectsDemosAppDemoModulesKitchenSinkModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-calendar */
    "./projects/angular-calendar/src/index.ts");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component */
    "./projects/demos/app/demo-modules/kitchen-sink/component.ts");
    /* harmony import */


    var _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, {
        declarations: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__["FlatpickrModule"], _angular_calendar_src_modules_calendar_module__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"]],
        exports: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
          })],
          declarations: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]],
          exports: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/demos/environments/environment.ts":
  /*!****************************************************!*\
    !*** ./projects/demos/environments/environment.ts ***!
    \****************************************************/

  /*! exports provided: environment */

  /***/
  function projectsDemosEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, for easier debugging, you can ignore zone related error
     * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
     * below file. Don't forget to comment it out in production mode
     * because it will have a performance impact when errors are thrown
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./projects/demos/main.ts":
  /*!********************************!*\
    !*** ./projects/demos/main.ts ***!
    \********************************/

  /*! no exports provided */

  /***/
  function projectsDemosMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./projects/demos/environments/environment.ts");
    /* harmony import */


    var _app_demo_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/demo-app.module */
    "./projects/demos/app/demo-app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_demo_app_module__WEBPACK_IMPORTED_MODULE_2__["DemoAppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!**************************************!*\
    !*** multi ./projects/demos/main.ts ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Angular\angular-calendar-master\projects\demos\main.ts */
    "./projects/demos/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("vis"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "vis"], factory);
	else if(typeof exports === 'object')
		exports["ibm-gantt-chart"] = factory(require("jquery"), require("vis"));
	else
		root["ibm-gantt-chart"] = factory(root["jQuery"], root["vis"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gantt; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var _core_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_core_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fonts_scss__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/* eslint-disable */




var Gantt = function Gantt(context, config) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Gantt);

  this.context = Gantt.utils.isString(context) ? document.getElementById(context) : context;
  var panelClass = Gantt.components.GanttPanel.impl || Gantt.components.GanttPanel;
  this.gantt = new panelClass(this.context, config);
  return this.gantt;
};


Gantt.defaultConfiguration = {
  rowHeight: 27,
  zoomFactor: 0.2,
  loadingPanelThresold: 500
}; // noinspection SpellCheckingInspection

Gantt.events = {
  TITLE_CHANGED: 'titleChanged',
  TABLE_INIT: 'tableinit',
  TIME_TABLE_INIT: 'timesheetinit',
  TIME_LINE_INIT: 'timeline_init',
  TIME_WINDOW_CHANGED: 'timeWindowChanged',
  TIME_LINE_RANGE_CHANGE: 'timeline_rangechange',
  TIME_LINE_RANGE_CHANGED: 'timeline_rangechanged',
  TIME_LINE_SIZE_CHANGED: 'timeline_sizeChanged',
  TIME_LINE_PAN_MOVE: 'timeline_panmove',
  TIME_LINE_PAN_MOVED: 'timeline_panmove',
  TIME_LINE_SCROLLED: 'timeline_scrolled',
  RESIZED: 'resized',
  SPLIT_RESIZED: 'split_resized',
  ROWS_FILTERED: 'rows_filtered',
  DATA_LOADED: 'data_loaded',
  ROWS_ADDED: 'rows_added',
  ROWS_REMOVED: 'rows_removed',
  ROWS_MODIFIED: 'rows_modified',
  ROWS_SORTED: 'rows_sorted',
  START_SELECTING: 'startSelecting',
  SELECTION_CLEARED: 'selectionCleared',
  STOP_SELECTING: 'stopSelecting',
  // Event names are generated from the Type objects associated with the SelectionHandler, with the format type.name + 'Selected|Unselected|SelectionChanged|SelectionCleared'
  ACTIVITY_SELECTED: 'activitySelected',
  ACTIVITY_UNSELECTED: 'activityUnselected',
  ACTIVITY_SELECTION_CHANGED: 'activitySelectionChanged',
  ACTIVITY_SELECTION_CLEARED: 'activitySelectionCleared',
  RESOURCE_SELECTED: 'resourceSelected',
  RESOURCE_UNSELECTED: 'resourceUnselected',
  RESOURCE_SELECTION_CHANGED: 'resourceSelectionChanged',
  RESOURCE_SELECTION_CLEARED: 'resourceSelectionCleared',
  ROW_SELECTED: 'rowSelected',
  ROW_UNSELECTED: 'rowUnselected',
  ROW_SELECTION_CHANGED: 'rowSelectionChanged',
  ROW_SELECTION_CLEARED: 'rowSelectionCleared',
  CONSTRAINT_SELECTED: 'constraintSelected',
  CONSTRAINT_UNSELECTED: 'constraintUnselected',
  CONSTRAINT_SELECTION_CHANGED: 'constraintSelectionChanged',
  CONSTRAINT_SELECTION_CLEARED: 'constraintSelectionCleared'
};
Gantt.type = {
  ACTIVITY_CHART: 'ActivityChart',
  SCHEDULE_CHART: 'ScheduleChart'
};
Gantt.constraintTypes = {
  START_TO_START: 0,
  START_TO_END: 2,
  END_TO_END: 3,
  END_TO_START: 1,
  isFromStart: function isFromStart(type) {
    return type === 0 || type === 2;
  },
  isToStart: function isToStart(type) {
    return type < 2;
  }
};

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(config) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Tooltip);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Tooltip, [{
    key: "showTooltip",
    value: function showTooltip(elt, ctx, cb) {}
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Tooltip;
}();

var DataFetcher = /*#__PURE__*/function () {
  function DataFetcher() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, DataFetcher);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DataFetcher, [{
    key: "get",
    value: function get(obj) {}
  }]);

  return DataFetcher;
}();

var Split = /*#__PURE__*/function () {
  function Split(elt, config) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Split);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Split, [{
    key: "getLeftComponent",
    value: function getLeftComponent() {}
  }, {
    key: "getRightComponent",
    value: function getRightComponent() {}
  }, {
    key: "leftComponentCreated",
    value: function leftComponentCreated() {}
  }]);

  return Split;
}();

var Component = /*#__PURE__*/function () {
  function Component(gantt, config) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Component);

    this.gantt = gantt;
    this.config = config;
    this.utils = Gantt.utils;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Component, [{
    key: "on",
    value: function on(event, handler) {
      var events = this.__events || (this.__events = {});
      var ar;
      var eventList = this.utils.isArray(event) && event || event.split(' ');

      for (var i = 0; i < eventList.length; i++) {
        event = eventList[i];

        if (!(ar = events[event])) {
          events[event] = ar = [handler];
        } else {
          ar.push(handler);
        }
      }
    }
  }, {
    key: "one",
    value: function one(events, handler) {
      var _this = this;

      var wrapperHandler = function wrapperHandler() {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        handler.apply(_this, params); // remove the handler after it has been notified

        var event = params[0];

        var index = _this.__events[event].indexOf(wrapperHandler);

        if (index > -1) {
          _this.__events[event].splice(index, 1);
        }
      };

      this.on(events, wrapperHandler);
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      if (this.__events) {
        var ar, i;
        var eventList = this.utils.isArray(event) && event || event.split(' ');

        for (var iEvent = 0; iEvent < eventList.length; iEvent++) {
          event = eventList[iEvent];

          if (ar = this.__events[event]) {
            for (i = 0; i < ar.length; i++) {
              if (ar[i] === handler) {
                ar.splice(i, 1);
                break;
              }
            }
          }
        }
      }
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(events) {
      var ar, params;

      if (events === true) {
        // Apply mode, event parameters are provided as an array
        events = arguments[1];
        var paramsArg = arguments[2] || [];
        params = new Array(paramsArg.length + 1);

        for (var iParam = 0; iParam < paramsArg.length; ++iParam) {
          params[iParam + 1] = paramsArg[iParam];
        }
      } else {
        params = new Array(arguments.length);

        for (var _iParam = 1; _iParam < arguments.length; ++_iParam) {
          params[_iParam] = arguments[_iParam];
        }
      }

      var eventList = this.utils.isArray(events) && events || events.split(' ');

      for (var iEvent = 0, event, evCount = eventList.length; iEvent < evCount; iEvent++) {
        if (ar = this.__events && this.__events[params[0] = event = eventList[iEvent]]) {
          for (var i = 0, count = ar.length; i < count;) {
            ar[i].apply(this, params); // If the handler being notified still in the array, go to next array elt

            if (count === ar.length) {
              ++i;
            } else {
              // If the handler was removed during notification (see one method), next element is at same index
              count = ar.length;
            }
          }
        }
      }
    }
  }]);

  return Component;
}();

var ErrorHandler = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ErrorHandler, _Component);

  var _super = _createSuper(ErrorHandler);

  function ErrorHandler(config) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ErrorHandler);

    _this2 = _super.call(this, null, config);
    _this2.config = config;
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ErrorHandler, [{
    key: "addError",
    value: function addError(err) {}
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return false;
    }
  }, {
    key: "clear",
    value: function clear() {}
  }, {
    key: "showError",
    value: function showError(err) {}
  }, {
    key: "getErrors",
    value: function getErrors() {
      return [];
    }
  }, {
    key: "createErrorNode",
    value: function createErrorNode(err) {
      var node = document.createElement('div');
      node.className = 'gantt_error';
      return node;
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(node) {}
  }]);

  return ErrorHandler;
}(Component);
/**
 *
 * <br>Emmits events: <ul>
 *   <li>Gantt.events.TIME_LINE_INIT</li>
 *   <li>Gantt.events.TIME_LINE_RANGE_CHANGE</li>
 *   <li>Gantt.events.TIME_LINE_RANGE_CHANGED</li>
 *   <li>Gantt.events.TIME_LINE_PAN_MOVED</li>
 *   <li>Gantt.events.TIME_LINE_SIZE_CHANGED</li>
 * </ul>
 */


var TimeLine = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TimeLine, _Component2);

  var _super2 = _createSuper(TimeLine);

  function TimeLine(gantt, node, config) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, TimeLine);

    _this3 = _super2.call(this, gantt, config);
    _this3.node = node;
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TimeLine, [{
    key: "setTimeWindow",
    value: function setTimeWindow(start, end) {}
  }, {
    key: "getTimeAxisHeight",
    value: function getTimeAxisHeight() {
      return 0;
    }
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "validateZoomFactor",
    value: function validateZoomFactor(zoomFactor) {}
  }, {
    key: "getXFromMillis",
    value: function getXFromMillis(time) {}
  }, {
    key: "getDecorationContainer",
    value: function getDecorationContainer() {}
    /**
     * Returns the current time horizon, an object with two start and end time properties, time given in milliseconds
     */

  }, {
    key: "getHorizon",
    value: function getHorizon() {}
  }, {
    key: "getScrollableHorizon",
    value: function getScrollableHorizon() {}
  }, {
    key: "setVisibleTimeWindow",
    value: function setVisibleTimeWindow(window) {}
  }, {
    key: "resetZoom",
    value: function resetZoom() {}
    /**
     * Markers
     */

  }, {
    key: "addTimeMarker",
    value: function addTimeMarker(id, time, classes) {}
  }, {
    key: "removeTimeMarker",
    value: function removeTimeMarker(id) {}
  }, {
    key: "setTimeLineItem",
    value: function setTimeLineItem(id, item) {}
  }, {
    key: "addTimeLineItem",
    value: function addTimeLineItem(id, item) {}
  }, {
    key: "removeTimeLineItem",
    value: function removeTimeLineItem(id) {}
  }]);

  return TimeLine;
}(Component);

var TimeTable = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TimeTable, _Component3);

  var _super3 = _createSuper(TimeTable);

  function TimeTable(gantt, node, config) {
    var _this4;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, TimeTable);

    _this4 = _super3.call(this, gantt, config);
    _this4.node = node;

    _this4.setConfiguration(config);

    return _this4;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TimeTable, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "createUpdates",
    value: function createUpdates(parent) {
      return new (Gantt.components.GanttUpdates.impl || Gantt.components.GanttUpdates)(parent);
    }
  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deselectAll) {}
  }, {
    key: "getDisplayedActivitiesTimeRange",
    value: function getDisplayedActivitiesTimeRange() {}
  }, {
    key: "searchActivities",
    value: function searchActivities(row, callback) {}
  }, {
    key: "setConstraints",
    value: function setConstraints(constraints) {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "scrollToRow",
    value: function scrollToRow(row) {}
  }, {
    key: "scrollToY",
    value: function scrollToY(y) {}
  }, {
    key: "setScrollTop",
    value: function setScrollTop(y) {}
  }, {
    key: "setFirstVisibleRow",
    value: function setFirstVisibleRow(row) {}
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {}
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(x) {}
    /**
     * Returns the component responsible for scrolling the time table.
     */

  }, {
    key: "getScroller",
    value: function getScroller() {}
  }, {
    key: "getVisibleWidth",
    value: function getVisibleWidth() {}
  }, {
    key: "getVisibleHeight",
    value: function getVisibleHeight() {} // Called to adjust the time table body width according to the time line width

  }, {
    key: "setBodyWidth",
    value: function setBodyWidth(w) {}
  }, {
    key: "getBodyWidth",
    value: function getBodyWidth() {} // Called to adjust the height of the time  table body according to the height of the gantt table

  }, {
    key: "setBodyHeight",
    value: function setBodyHeight(h) {}
  }, {
    key: "getBodyHeight",
    value: function getBodyHeight() {} // To perfectly horizontally align the time line and the time table, we need to apply a right margin
    // to the time line corresponding to the width of the vertical scroller in the time table, if any.

  }, {
    key: "getRightMargin",
    value: function getRightMargin() {} // The time line bottom must stops where the horizontal scrollbar of the time table starts.
    // The getBottomMargin returns the height of this scrollbar.

  }, {
    key: "getBottomMargin",
    value: function getBottomMargin() {}
  }]);

  return TimeTable;
}(Component);
/**
 *
 * <br>Emmits events: <ul>
 *   <li>Gantt.events.TABLE_INIT</li>
 *   <li>Gantt.events.ROWS_ADDED</li>
 *   <li>Gantt.events.ROWS_REMOVED</li>
 *   <li>Gantt.events.ROWS_MODIFIED</li>
 *   <li>Gantt.events.ROWS_FILTERED</li>
 * </ul>
 */


var TreeTable = /*#__PURE__*/function (_Component4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TreeTable, _Component4);

  var _super4 = _createSuper(TreeTable);

  function TreeTable(gantt, node, config) {
    var _this5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, TreeTable);

    _this5 = _super4.call(this, gantt, config);
    _this5.node = node;
    return _this5;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TreeTable, [{
    key: "setRows",
    value: function setRows(rows) {}
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      return 0;
    }
  }, {
    key: "isRowVisible",
    value: function isRowVisible(param) {}
  }, {
    key: "deleteDrawCache",
    value: function deleteDrawCache() {}
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "drawRows",
    value: function drawRows(selector) {}
  }, {
    key: "createUpdates",
    value: function createUpdates(parent) {
      return new (Gantt.components.GanttUpdates.impl || Gantt.components.GanttUpdates)(parent);
    }
  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deselectAll) {}
  }, {
    key: "setRowFilter",
    value: function setRowFilter(filter) {}
  }, {
    key: "filterChanged",
    value: function filterChanged() {}
  }, {
    key: "isRowFiltered",
    value: function isRowFiltered(row) {
      return false;
    }
  }, {
    key: "toggleCollapseRow",
    value: function toggleCollapseRow(param, collapse) {}
  }, {
    key: "setHeaderHeight",
    value: function setHeaderHeight(height) {}
  }, {
    key: "getTableBody",
    value: function getTableBody() {}
  }, {
    key: "getScrollableTable",
    value: function getScrollableTable() {}
  }, {
    key: "getTop",
    value: function getTop(tr) {
      return tr && tr.offsetTop - this.getTableBody().offsetTop || 0;
    }
  }, {
    key: "getRowAt",
    value: function getRowAt(y) {}
  }, {
    key: "getHeight",
    value: function getHeight() {}
  }, {
    key: "nextRow",
    value: function nextRow(row) {
      return null;
    }
  }, {
    key: "getRow",
    value: function getRow(id) {
      return null;
    }
  }, {
    key: "getRows",
    value: function getRows(selector) {}
  }, {
    key: "getRowName",
    value: function getRowName(row) {
      return row.name;
    }
  }, {
    key: "getRowTop",
    value: function getRowTop(row) {
      return row.tr && row.tr.offsetTop - this.getTableBody().offsetTop || 0;
    }
  }, {
    key: "expandParents",
    value: function expandParents(row) {}
  }]);

  return TreeTable;
}(Component);

TreeTable.defaultClass = '';

var GanttModel = /*#__PURE__*/function (_Component5) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GanttModel, _Component5);

  var _super5 = _createSuper(GanttModel);

  function GanttModel(gantt, config) {
    var _this6;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, GanttModel);

    _this6 = _super5.call(this, gantt, config);

    if (config) {
      _this6.setConfiguration(config);
    }

    return _this6;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GanttModel, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }]);

  return GanttModel;
}(Component);
/**
 *
 * <br>Emmits events: <ul>
 *   <li>Gantt.events.TABLE_INIT</li>
 *   <li>Gantt.events.ROWS_ADDED</li>
 *   <li>Gantt.events.ROWS_REMOVED</li>
 *   <li>Gantt.events.ROWS_MODIFIED</li>
 *   <li>Gantt.events.ROWS_FILTERED</li>
 * </ul>
 */


var GanttPanel = /*#__PURE__*/function (_Component6) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GanttPanel, _Component6);

  var _super6 = _createSuper(GanttPanel);

  function GanttPanel(node, config) {
    var _this7;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, GanttPanel);

    _this7 = _super6.call(this, node, config);
    _this7.node = node;
    _this7.events = Gantt.events;
    _this7.constraintTypes = Gantt.constraintTypes;
    return _this7;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GanttPanel, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "startUpdating",
    value: function startUpdating() {}
  }, {
    key: "stopUpdating",
    value: function stopUpdating() {}
  }, {
    key: "getModel",
    value: function getModel() {}
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      return 0;
    }
  }, {
    key: "getRow",
    value: function getRow(param) {
      return null;
    }
  }, {
    key: "getVisiibleRows",
    value: function getVisiibleRows() {
      return [];
    }
  }, {
    key: "ensureRowVisible",
    value: function ensureRowVisible(param) {}
  }, {
    key: "isRowVisible",
    value: function isRowVisible(param) {}
  }, {
    key: "getFirstVisibleRow",
    value: function getFirstVisibleRow() {}
  }, {
    key: "setFirstVisibleRow",
    value: function setFirstVisibleRow(row) {}
  }, {
    key: "isRowFiltered",
    value: function isRowFiltered(param) {}
  }, {
    key: "toggleCollapseRow",
    value: function toggleCollapseRow(param, collapse) {}
  }, {
    key: "scrollToY",
    value: function scrollToY(y) {}
  }, {
    key: "getRowActivities",
    value: function getRowActivities(param) {}
  }, {
    key: "resetZoom",
    value: function resetZoom() {}
  }, {
    key: "zoomIn",
    value: function zoomIn(evt) {}
  }, {
    key: "zoomOut",
    value: function zoomOut(evt) {}
  }, {
    key: "zoom",
    value: function zoom(zoomFactor, evt) {}
  }, {
    key: "fitToContent",
    value: function fitToContent() {}
  }, {
    key: "getVisibleHeight",
    value: function getVisibleHeight() {
      return 0;
    }
  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deselectAll) {}
    /*                        */

    /*    Search and filter   */

    /*                        */

  }, {
    key: "addFilter",
    value: function addFilter(rowFilter, filterTasks) {}
  }, {
    key: "removeFilter",
    value: function removeFilter(key, preventNotify) {}
  }, {
    key: "search",
    value: function search(text, rows, activities) {}
  }, {
    key: "setHideEmptyRows",
    value: function setHideEmptyRows(hide, preventNotify) {}
    /*                        */

    /*          Utils         */

    /*                        */

  }]);

  return GanttPanel;
}(Component);

var Filter = function Filter(options) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Filter);
};

var Renderer = /*#__PURE__*/function () {
  function Renderer(config, proto, paletteHandler) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Renderer);

    if (proto) {
      Gantt.utils.mergeObjects(this, proto);
    }

    this.config = config;
    this.paletteHandler = paletteHandler;
    this.setConfiguration(config);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Renderer, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }]);

  return Renderer;
}();

var ActivityLayout = /*#__PURE__*/function () {
  function ActivityLayout(config) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ActivityLayout);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ActivityLayout, [{
    key: "layout",
    value: function layout(row) {}
  }, {
    key: "allowVariableRowHeight",
    value: function allowVariableRowHeight() {
      return false;
    }
  }]);

  return ActivityLayout;
}();

Gantt.ObjectTypes = {
  Activity: 2,
  Resource: 4,
  Row: 1,
  Constraint: 8,
  Reservation: 16
};

var SelectionHandler = /*#__PURE__*/function (_Component7) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SelectionHandler, _Component7);

  var _super7 = _createSuper(SelectionHandler);

  function SelectionHandler(config, proto) {
    var _this8;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, SelectionHandler);

    _this8 = _super7.call(this, null, config);
    _this8.selections = [];
    _this8.selectionType = null;

    if (proto) {
      Gantt.utils.mergeObjects(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this8), proto);
    }

    _this8.setConfiguration(config);

    return _this8;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SelectionHandler, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "getObjectType",
    value: function getObjectType(obj) {}
  }, {
    key: "select",
    value: function select(obj, clear, notActive) {}
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.selections = [];
    }
  }, {
    key: "isSelected",
    value: function isSelected(obj) {
      return this.selections.indexOf(obj) >= 0;
    }
  }, {
    key: "processClick",
    value: function processClick(e, obj) {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.selections = [];
    }
  }]);

  return SelectionHandler;
}(Component);

var LayoutSynchronizer = /*#__PURE__*/function (_Component8) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LayoutSynchronizer, _Component8);

  var _super8 = _createSuper(LayoutSynchronizer);

  function LayoutSynchronizer(config, proto) {
    var _this9;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, LayoutSynchronizer);

    _this9 = _super8.call(this, null, config);

    if (proto) {
      Gantt.utils.mergeObjects(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this9), proto || config);
    }

    _this9.setConfiguration(config);

    return _this9;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LayoutSynchronizer, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "connect",
    value: function connect(gantt) {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.disconnect();
    }
  }]);

  return LayoutSynchronizer;
}(Component);

var Palette = /*#__PURE__*/function () {
  function Palette(config) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Palette);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Palette, [{
    key: "getColors",
    value: function getColors(count) {}
  }]);

  return Palette;
}();

Gantt.defaultPaletteName = null;
Gantt.defaultPalettes = {};

var GanttUpdates = /*#__PURE__*/function () {
  function GanttUpdates(parent) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, GanttUpdates);

    this.parent = parent;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GanttUpdates, [{
    key: "addUpdate",
    value: function addUpdate(update) {}
  }, {
    key: "removeUpdate",
    value: function removeUpdate(update) {}
  }, {
    key: "reload",
    value: function reload() {
      this._reload = true;
    }
  }, {
    key: "isReload",
    value: function isReload() {
      return false;
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "startUpdating",
    value: function startUpdating() {}
  }, {
    key: "stopUpdating",
    value: function stopUpdating() {}
  }]);

  return GanttUpdates;
}();

var Toolbar = /*#__PURE__*/function (_Component9) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Toolbar, _Component9);

  var _super9 = _createSuper(Toolbar);

  function Toolbar(gantt, node, config) {
    var _this10;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Toolbar);

    _this10 = _super9.call(this, gantt, config);
    _this10.node = node;

    _this10.setConfiguration(config, node);

    return _this10;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Toolbar, [{
    key: "setConfiguration",
    value: function setConfiguration(config, node) {
      this.config = config;
    }
  }, {
    key: "connect",
    value: function connect(gantt) {}
  }, {
    key: "ganttLoaded",
    value: function ganttLoaded(gantt, rows) {}
  }, {
    key: "onInitialized",
    value: function onInitialized() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Toolbar;
}(Component);

Toolbar.createTitle = function (title) {
  var node = document.createElement('div');
  node.innerHTML = title;
  node.className = 'toolbar-title';
  return node;
};

var Button = /*#__PURE__*/function (_Component10) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Button, _Component10);

  var _super10 = _createSuper(Button);

  function Button(gantt, config) {
    var _this11;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Button);

    _this11 = _super10.call(this, gantt, config);
    _this11.callbacks = [];

    _this11.setConfiguration(config);

    return _this11;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Button, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this12 = this;

      var btn = document.createElement('div');

      if (config.id) {
        btn.id = config.id;
      }

      btn.className = "toolbar-button g-hoverable g-selectable".concat(config.classes ? ' ' + config.classes : '');

      if (config.icon) {
        var img = document.createElement('img');
        img.src = config.icon;
        img.alt = '';
        btn.appendChild(img);
      }

      if (config.fontIcon) {
        var fontIcon = document.createElement('i');
        fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
        btn.appendChild(fontIcon);
      }

      if (config.svg) {
        Gantt.utils.appendSVG(btn, config.svg);
      }

      if (config.text) {
        btn.appendChild(document.createTextNode(config.text));
      }

      this.node = btn;

      this.node.onclick = function (e) {
        _this12.clicked(e);

        _this12.callbacks.map(function (cb) {
          cb({
            gantt: _this12.gantt,
            event: e
          });
        });
      };

      if (config.onclick) {
        this.onclick(config.onclick);
      }

      return btn;
    }
  }, {
    key: "onclick",
    value: function onclick(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "clicked",
    value: function clicked(e) {}
  }, {
    key: "setId",
    value: function setId(id) {
      this.node.id = id;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      Gantt.utils.toggleClass(this.node, 'selected', selected);
    }
  }]);

  return Button;
}(Component);

var CheckBox = /*#__PURE__*/function (_Component11) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CheckBox, _Component11);

  var _super11 = _createSuper(CheckBox);

  function CheckBox(gantt, config) {
    var _this13;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, CheckBox);

    _this13 = _super11.call(this, gantt, config);

    _this13.setConfiguration(config);

    return _this13;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CheckBox, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var ctnr = this.node = document.createElement('div');
      ctnr.style.whiteSpace = 'nowrap';
      var input = this.inputNode = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', 'None');
      input.className = 'g-selectable g-hoverable';

      if (config.id) {
        input.id = id;
      }

      if (config.classes) {
        ctnr.className = config.classes;
      }

      ctnr.appendChild(input);
      var label = document.createElement('label');

      if (config.id) {
        label.setAttribute('for', config.id);
      }

      if (config.icon) {
        var img = document.createElement('img');
        img.src = config.icon;
        img.alt = '';
        label.appendChild(img);
      }

      if (config.svg) {
        Gantt.utils.appendSVG(label, config.svg);
      }

      if (config.text) {
        label.appendChild(document.createTextNode(config.text));
      }

      if (config.onclick) {
        this.onclick(config.onclick);
      }

      ctnr.appendChild(label);
      return ctnr;
    }
  }, {
    key: "setChecked",
    value: function setChecked(checked) {
      this.inputNode.checked = checked;
    }
  }, {
    key: "onclick",
    value: function onclick(callback) {
      var _this14 = this;

      this.inputNode.onclick = function (e) {
        callback(_this14.inputNode.checked, {
          gantt: _this14.gantt,
          event: e
        });
      };
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "setId",
    value: function setId(id) {
      this.inputNode.id = id;
    }
  }]);

  return CheckBox;
}(Component);

CheckBox.defaultClass = null;

var Toggle = /*#__PURE__*/function (_Component12) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Toggle, _Component12);

  var _super12 = _createSuper(Toggle);

  function Toggle(gantt, config) {
    var _this15;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Toggle);

    _this15 = _super12.call(this, gantt, config);

    _this15.setConfiguration(config);

    return _this15;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Toggle, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this16 = this;

      this.callbacks = [];
      var ctnr = this._node = document.createElement('div');
      this._isSel = config.isSelected && config.isSelected(this.gantt);
      this.btnUnselected = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, config.unselected);
      this.btnSelected = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, config.selected);
      ctnr.appendChild(this._isSel ? this.btnSelected.node : this.btnUnselected.node);

      if (config.id) {
        ctnr.id = id;
      }

      var onclick = function onclick(e) {
        _this16._isSel = !_this16._isSel;

        _this16.updateButtons(_this16._isSel);

        _this16.callbacks.forEach(function (c) {
          c(_this16._isSel, {
            gantt: _this16.gantt,
            event: e
          });
        });
      };

      this.btnUnselected.node.onclick = this.btnSelected.node.onclick = onclick;

      if (config.onclick) {
        this.onclick(config.onclick);
      }

      return ctnr;
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this._isSel;
    }
  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      this._isSel = selected;
      this.updateButtons(selected);
    }
  }, {
    key: "node",
    get: function get() {
      return this._node;
    },
    set: function set(node) {
      this._node = node;
    }
  }, {
    key: "onclick",
    value: function onclick(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "update",
    value: function update() {
      this.updateButtons(this.config.isSelected ? this._isSel = this.config.isSelected(this.gantt) : this._isSel);
    }
  }, {
    key: "updateButtons",
    value: function updateButtons(isSel) {
      if (this.btnSelected.node.parentNode) {
        if (!isSel) this._node.replaceChild(this.btnUnselected.node, this.btnSelected.node);
      } else if (this.btnUnselected.node.parentNode) {
        this._node.replaceChild(this.btnSelected.node, this.btnUnselected.node);
      }
    }
  }]);

  return Toggle;
}(Component);

Toggle.defaultClass = null;

var DropDownList = /*#__PURE__*/function (_Component13) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DropDownList, _Component13);

  var _super13 = _createSuper(DropDownList);

  function DropDownList(gantt, config) {
    var _this17;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, DropDownList);

    _this17 = _super13.call(this, gantt, config);

    _this17.setConfiguration(config);

    return _this17;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DropDownList, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var node = this.node = document.createElement('div');
      var defaultClass = DropDownList.defaultClass;

      if (defaultClass) {
        node.className = defaultClass;
      }

      if (config.classes) {
        Gantt.utils.addClass(node, config.classes);
      }

      if (config.text || config.icon || config.fontIcon) {
        var labelNode = document.createElement('div');
        labelNode.className = 'label';

        if (config.icon) {
          var img = document.createElement('img');
          img.src = config.icon;
          img.alt = '';
          labelNode.appendChild(img);
        }

        if (config.fontIcon) {
          var fontIcon = document.createElement('i');
          fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
          labelNode.appendChild(fontIcon);
        }

        if (config.text) {
          labelNode.appendChild(document.createTextNode(config.text));
        }

        node.appendChild(labelNode);
      }

      var select = this.selectNode = document.createElement('select');
      select.className = 'g-hoverable';

      for (var i = 0, count = config.options.length, opt, optNode; i < count; i++) {
        opt = config.options[i];
        optNode = document.createElement('option');
        optNode.text = opt.text;
        optNode.value = opt.value;
        select.appendChild(optNode);
      }

      node.appendChild(select);

      if (config.onchange) {
        this.onchange(config.onchange);
      }

      return node;
    }
  }, {
    key: "select",
    value: function select(value) {
      this.selectNode.value = value;
    }
  }, {
    key: "onchange",
    value: function onchange(callback) {
      var _this18 = this;

      this.selectNode.onchange = function (e) {
        callback(_this18.selectNode.value, {
          gantt: _this18.gantt,
          event: e
        });
      };
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "setId",
    value: function setId(id) {
      this.selectNode.id = id;
    }
  }]);

  return DropDownList;
}(Component);

DropDownList.defaultClass = 'dropdown-list';

var Input = /*#__PURE__*/function (_Component14) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Input, _Component14);

  var _super14 = _createSuper(Input);

  function Input(gantt, config) {
    var _this19;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Input);

    _this19 = _super14.call(this, gantt, config);

    _this19.setConfiguration(config);

    return _this19;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Input, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var node = this.node = document.createElement('div');

      if (Input.defaultClass) {
        node.className = Input.defaultClass;
      }

      if (config.classes) {
        Gantt.utils.addClass(node, config.classes);
      }

      node.style.display = 'flex';
      node.style.flexDirection = 'row';
      node.style.alignItems = 'center';

      if (config.text || config.icon || config.fontIcon || config.type === 'search') {
        var labelNode = document.createElement('div');
        labelNode.className = 'label';
        labelNode.style.display = 'inline-block';

        if (config.icon) {
          var img = document.createElement('img');
          img.src = config.icon;
          img.alt = '';
          labelNode.appendChild(img);
        }

        if (config.fontIcon) {
          var fontIcon = document.createElement('i');
          fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
          fontIcon.setAttribute('aria-disabled', true);
          labelNode.appendChild(fontIcon);
        } else if (config.type === 'search') {
          var _fontIcon = document.createElement('i');

          _fontIcon.setAttribute('aria-disabled', true);

          _fontIcon.className = "fa fa-search fa-lg".concat(config.text ? ' fa-fw' : '');
          labelNode.appendChild(_fontIcon);
        }

        if (config.text) {
          labelNode.appendChild(document.createTextNode(config.text));
        }

        node.appendChild(labelNode);
      }

      var input = this.inputNode = document.createElement('input');
      node.appendChild(input);
      var deleteBtn = document.createElement('div');
      deleteBtn.className = 'delete-button';
      deleteBtn.display = 'inline-block';
      var deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa fa-times fa-lg';
      deleteBtn.appendChild(deleteIcon);
      node.appendChild(deleteBtn);

      deleteBtn.onclick = function () {
        input.value = '';

        if ('createEvent' in document) {
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent('change', false, true);
          input.dispatchEvent(evt);
        } else {
          input.fireEvent('onchange');
        }
      };

      if (config.onchange) {
        this.onchange(config.onchange);
      }

      return node;
    }
  }, {
    key: "setText",
    value: function setText(value) {
      this.input.value = value;
    }
  }, {
    key: "onchange",
    value: function onchange(userCallback) {
      var _this20 = this;

      var callback = function callback(e) {
        userCallback(_this20.inputNode.value, {
          gantt: _this20.gantt,
          event: e
        });
      };

      this.inputNode.onchange = callback;
      this.inputNode.onkeyup = callback;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.inputNode.id = id;
    }
  }]);

  return Input;
}(Component);

Input.defaultClass = 'input-box';

var ButtonGroup = /*#__PURE__*/function (_Component15) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ButtonGroup, _Component15);

  var _super15 = _createSuper(ButtonGroup);

  function ButtonGroup(gantt, config) {
    var _this21;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ButtonGroup);

    _this21 = _super15.call(this, gantt, config);
    _this21.selected = null;
    _this21.callbacks = [];

    _this21.setConfiguration(config);

    return _this21;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ButtonGroup, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var node = this.node = document.createElement('div');

      if (config.classes) {
        node.className = config.classes;
      }

      this.buttons = [];
      Gantt.utils.addClass(node, 'button-group');
      node.style.display = 'flex';
      node.style.flexDirection = 'row';
      node.style.alignItems = 'center';
      var self = this;

      function installBtnClicked(button) {
        button.clicked = function () {
          self.setSelected(button);
        };
      }

      this.value = null;
      var cfgBtns = config.buttons;

      for (var i = 0; i < cfgBtns.length; ++i) {
        var btn = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, cfgBtns[i]);
        this.buttons.push(btn);
        installBtnClicked(btn);

        if (cfgBtns[i].selected) {
          this.selected = btn;
          btn.setSelected(true);
          this.value = btn.value;
        }

        btn.value = cfgBtns[i].value;
        node.appendChild(btn.node);
      }

      if (config.onchange) {
        this.onchange(config.onchange);
      }

      if (config.value !== undefined) {
        this.setValue(config.value);
      }

      return node;
    }
  }, {
    key: "setValue",
    value: function setValue(value, noNotify) {
      for (var i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].value === value) {
          this.setSelected(this.buttons[i], noNotify);
          break;
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setSelected",
    value: function setSelected(btn, noNotify) {
      var _this22 = this;

      if (this.selected !== btn) {
        if (this.selected) {
          this.selected.setSelected(false);
        }

        this.selected = btn;

        if (btn) {
          this.value = btn.value;
          btn.setSelected(true);
        } else {
          this.value = null;
        }

        if (!noNotify) {
          this.callbacks.map(function (cb) {
            cb(_this22.value);
          });
        }
      }
    }
  }, {
    key: "onchange",
    value: function onchange(userCallback) {
      this.callbacks.push(userCallback);
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.inputNode.id = id;
    }
  }]);

  return ButtonGroup;
}(Component);

var LoadResourceChart = /*#__PURE__*/function (_Component16) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LoadResourceChart, _Component16);

  var _super16 = _createSuper(LoadResourceChart);

  function LoadResourceChart(gantt, node, config) {
    var _this23;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, LoadResourceChart);

    _this23 = _super16.call(this, gantt, node, config);
    _this23.node = node;

    _this23.setConfiguration(config);

    return _this23;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LoadResourceChart, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "setVisible",
    value: function setVisible(visible) {}
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(left) {}
  }]);

  return LoadResourceChart;
}(Component);

var ConstraintsGraph = /*#__PURE__*/function (_Component17) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ConstraintsGraph, _Component17);

  var _super17 = _createSuper(ConstraintsGraph);

  function ConstraintsGraph(gantt, node, config) {
    var _this24;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ConstraintsGraph);

    _this24 = _super17.call(this, gantt, node, config);
    _this24.node = node;

    _this24.setConfiguration(config);

    return _this24;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ConstraintsGraph, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "setConstraints",
    value: function setConstraints(cts) {}
  }, {
    key: "setNode",
    value: function setNode(node) {}
  }]);

  return ConstraintsGraph;
}(Component);

var ConstraintLayout = /*#__PURE__*/function (_Component18) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ConstraintLayout, _Component18);

  var _super18 = _createSuper(ConstraintLayout);

  function ConstraintLayout(gantt, config) {
    var _this25;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ConstraintLayout);

    _this25 = _super18.call(this, gantt, null, config);

    _this25.setConfiguration(config);

    return _this25;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ConstraintLayout, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {}
  }, {
    key: "startInitialize",
    value: function startInitialize() {}
  }, {
    key: "addNode",
    value: function addNode(node) {}
  }, {
    key: "addConstraint",
    value: function addConstraint(nodeFrom, nodeTo, cons) {}
  }, {
    key: "stopInitialize",
    value: function stopInitialize() {}
  }, {
    key: "forEachLink",
    value: function forEachLink(node, cb) {}
  }, {
    key: "layoutNode",
    value: function layoutNode(node) {}
  }, {
    key: "layoutRowNodeLinks",
    value: function layoutRowNodeLinks(rowIndex) {}
  }, {
    key: "drawRowLinks",
    value: function drawRowLinks(rowIndex, parentElt, renderer, ctx) {}
  }]);

  return ConstraintLayout;
}(Component);

Gantt.components = {
  Component: Component,
  GanttPanel: GanttPanel,
  GanttModel: GanttModel,
  TreeTable: TreeTable,
  TimeLine: TimeLine,
  TimeTable: TimeTable,
  Split: Split,
  Tooltip: Tooltip,
  Filter: Filter,
  DataFetcher: DataFetcher,
  ErrorHandler: ErrorHandler,
  Renderer: Renderer,
  ActivityLayout: ActivityLayout,
  SelectionHandler: SelectionHandler,
  LayoutSynchronizer: LayoutSynchronizer,
  GanttUpdates: GanttUpdates,
  Palette: Palette,
  Toolbar: Toolbar,
  Button: Button,
  CheckBox: CheckBox,
  Toggle: Toggle,
  DropDownList: DropDownList,
  Input: Input,
  ButtonGroup: ButtonGroup,
  LoadResourceChart: LoadResourceChart,
  ConstraintsGraph: ConstraintsGraph,
  ConstraintLayout: ConstraintLayout
};

Gantt.envReady = function () {
  return Promise.resolve(true);
};

if (false) {}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _classCallCheck; });

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/classCallCheck/_index.mjs
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/classCallCheck.js


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _createClass; });

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/createClass/_index.mjs
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/createClass.js


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _getPrototypeOf; });

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/getPrototypeOf/_index.mjs
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _inherits; });

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/setPrototypeOf/index.js
var setPrototypeOf = __webpack_require__(13);

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/inherits/_index.mjs

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/inherits.js


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _possibleConstructorReturn; });

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/typeof/index.js
var helpers_typeof = __webpack_require__(14);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/assertThisInitialized/index.js
var assertThisInitialized = __webpack_require__(15);

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/possibleConstructorReturn/_index.mjs


function _possibleConstructorReturn(self, call) {
  if (call && (helpers_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ _assertThisInitialized; });

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/assertThisInitialized/_index.mjs
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ core["a" /* default */]; });

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/classCallCheck.js + 1 modules
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/createClass.js + 1 modules
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/core.js
var core = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/plugins.js



core["a" /* default */].plugins = {
  plugins: [],

  /**
   * Registers the list of specified plugins if not already registered.
   * @param {Array|Object} plugins plugin instance(s).
   */
  register: function register(plugins) {
    for (var i = 0; i < arguments.length; i++) {
      if (this.plugins.indexOf(arguments[i]) === -1) {
        this.plugins.push(arguments[i]);
      }
    }
  },

  /**
   * Unregisters the specified plugin if registered.
   * @param {Array|Object} plugins plugin instance(s).
   */
  unregister: function unregister(plugins) {
    for (var i = 0, index; i < arguments.length; i++) {
      if ((index = this.plugins.indexOf(arguments[i])) !== -1) {
        this.plugins.splice(index, 1);
      }
    }
  },

  /**
   * Remove all registered plugins.
   * @see #register
   */
  clear: function clear() {
    this.plugins = [];
  },

  /**
   * Returns the number of registered plugins.
   * @returns {Number}
   */
  count: function count() {
    return this.plugins.length;
  },

  /**
   * Returns all registered plugin instances.
   * @returns {Array} array of plugins.
   */
  getAll: function getAll() {
    return this.plugins;
  },

  /**
   * Calls the registermed plugins on the specified method, with the provided args. This
   * method immediately returns as soon as a plugin returns a value. The
   * returned value can be used, for instance, to interrupt the current action.
   * @param {String|Boolean} method boolean to indicate the plugin call order of the name of the plugin method to call.
   * @param {...Object} args list to apply to the method call.
   * @returns {Object} the value false if any of the plugins return false, otherwise returns true.
   */
  call: function call(method) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var paramsStart;
    var reverse;

    if (typeof method !== 'string') {
      reverse = method;
      method = arguments[1];
      paramsStart = 2;
    } else {
      paramsStart = 1;
    }

    var params = Array.prototype.slice.call(arguments, paramsStart);

    for (var i = reverse ? this.plugins.length - 1 : 0, inc = reverse ? -1 : 1, end = reverse ? -1 : this.plugins.length, result; i !== end; i += inc) {
      var plugin = this.plugins[i];

      if (typeof plugin[method] === 'function') {
        if ((result = plugin[method].apply(plugin, params)) !== undefined) {
          return result;
        }
      }
    }
  }
};
/**
 * Plugin extension methods.
 * @interface Gantt.PluginBase
 */

var plugins_Plugin = /*#__PURE__*/function () {
  function Plugin() {
    Object(classCallCheck["a" /* default */])(this, Plugin);
  }

  Object(createClass["a" /* default */])(Plugin, [{
    key: "beforeInit",
    value: // Called at start of Gantt init
    function beforeInit() {} // Called at end of Gantt init

  }, {
    key: "afterInit",
    value: function afterInit() {} // Called at start of update

  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {} // Called at end of update

  }, {
    key: "afterUpdate",
    value: function afterUpdate() {} // Called at start of draw

  }, {
    key: "beforeDraw",
    value: function beforeDraw() {} // Called at end of draw

  }, {
    key: "afterDraw",
    value: function afterDraw() {} // Called during destroy

  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Plugin;
}();


// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(4);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(6);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js + 1 modules
var getPrototypeOf = __webpack_require__(3);

// CONCATENATED MODULE: ./src/core/selection.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var START_SELECTION_METHOD = 'startSelection';
var STOP_SELECTION_METHOD = 'stopSelection';
var CLEAR_SELECTION_METHOD = 'clearSelection';
var SELECTION_CHANGED_EVENT = 'SelectionChanged';
var UNSELECT_EVENT = 'Unselected';
var SELECT_EVENT = 'Selected';
var CLEAR_SELECTION_EVENT = 'SelectionCleared';
var START_SELECTING = 'StartSelecting';
var STOP_SELECTING = 'StopSelecting';

var selection_Type = /*#__PURE__*/function () {
  function Type(config) {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, Type);

    core["a" /* default */].utils.mergeObjects(this, config);
    this[SELECTION_CHANGED_EVENT] = {
      event: function event() {
        return _this.getSelectionChangedEvent();
      },
      method: function method() {
        return _this.getSelectionChangedMethod();
      }
    };
    this[SELECT_EVENT] = {
      event: function event() {
        return _this.getSelectionEvent();
      },
      method: function method() {
        return _this.getSelectionMethod();
      }
    };
    this[UNSELECT_EVENT] = {
      event: function event() {
        return _this.getUnselectionEvent();
      },
      method: function method() {
        return _this.getUnselectionMethod();
      }
    };
    this[CLEAR_SELECTION_EVENT] = {
      event: function event() {
        return _this.getClearSelectionEvent();
      },
      method: function method() {
        return _this.getClearSelectionMethod();
      }
    };
  }

  Object(createClass["a" /* default */])(Type, [{
    key: "accept",
    value: function accept(obj) {
      return false;
    }
  }, {
    key: "getTypeEvent",
    value: function getTypeEvent(event) {
      return this[event] && this[event].event();
    }
  }, {
    key: "getTypeMethod",
    value: function getTypeMethod(method) {
      return this.name + method;
    }
  }, {
    key: "notify",
    value: function notify(o, event, params) {
      var m = this[event] && this[event].method();

      if (m = o[m]) {
        m.apply(o, params);
      }
    }
  }, {
    key: "getClearSelectionEvent",
    value: function getClearSelectionEvent() {
      return this.name + CLEAR_SELECTION_EVENT;
    }
  }, {
    key: "getClearSelectionMethod",
    value: function getClearSelectionMethod() {
      return this.clearSelectionMethod || this.getTypeMethod(SELECT_EVENT);
    }
  }, {
    key: "getSelectionEvent",
    value: function getSelectionEvent() {
      return this.name + SELECT_EVENT;
    }
  }, {
    key: "getSelectionMethod",
    value: function getSelectionMethod() {
      return this.selectionMethod || this.getTypeMethod(SELECT_EVENT);
    }
  }, {
    key: "getUnselectionEvent",
    value: function getUnselectionEvent() {
      return this.name + UNSELECT_EVENT;
    }
  }, {
    key: "getUnselectionMethod",
    value: function getUnselectionMethod() {
      return this.unselectionMethod || this.getTypeMethod(UNSELECT_EVENT);
    }
  }, {
    key: "getSelectionChangedEvent",
    value: function getSelectionChangedEvent() {
      return this.name + SELECTION_CHANGED_EVENT;
    }
  }, {
    key: "getSelectionChangedMethod",
    value: function getSelectionChangedMethod() {
      return this.selectionChangedMethod || this.getTypeMethod(SELECTION_CHANGED_EVENT);
    }
  }]);

  return Type;
}();

var selection_SelectionHandler = /*#__PURE__*/function (_Gantt$components$Sel) {
  Object(inherits["a" /* default */])(SelectionHandler, _Gantt$components$Sel);

  var _super = _createSuper(SelectionHandler);

  function SelectionHandler(config, proto) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, SelectionHandler);

    _this2 = _super.call(this, config, proto);
    _this2.lock = 0;
    _this2.types = [];
    _this2.genericType = new selection_Type({
      name: ''
    });
    _this2.genericType[CLEAR_SELECTION_EVENT] = {
      event: function event() {
        return core["a" /* default */].events.SELECTION_CLEARED;
      },
      method: function method() {
        return CLEAR_SELECTION_METHOD;
      }
    };
    _this2.genericType[START_SELECTING] = {
      event: function event() {
        return core["a" /* default */].events.START_SELECTING;
      },
      method: function method() {
        return START_SELECTION_METHOD;
      }
    };
    _this2.genericType[STOP_SELECTING] = {
      event: function event() {
        return core["a" /* default */].events.STOP_SELECTING;
      },
      method: function method() {
        return STOP_SELECTION_METHOD;
      }
    };
    return _this2;
  }
  /**
   * @return {string}
   */


  Object(createClass["a" /* default */])(SelectionHandler, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      this.config = config;
      this.observers = [];

      if (config) {
        if (core["a" /* default */].utils.isArray(config)) {
          for (var i = 0; i < config.length; i++) {
            this.addConfiguration(config[i]);
          }
        } else {
          this.addConfiguration(config);
        }
      }
    }
  }, {
    key: "addConfiguration",
    value: function addConfiguration(config) {
      this.addObserver(config);
    }
  }, {
    key: "select",
    value: function select(obj, clear, notActive) {
      if (obj) {
        this.startSelecting();
        var objType = this.getObjectType(obj);
        var selTypeChanged = this.selectionType !== objType;

        if (this.selections.length && (clear || selTypeChanged)) {
          var oldType = this.selectionType;
          this.clear();

          if (selTypeChanged) {
            this.notify(oldType, SELECTION_CHANGED_EVENT, this.selections);
          }
        }

        this.selectionType = objType;

        if (notActive && this.selections.length) {
          // Add the selections at the end of selections array so that the current active selection at
          // position zero remains active
          if (core["a" /* default */].utils.isArray(obj)) {
            for (var i = 0, count = obj.length; i < count; ++i) {
              this.setObjectSelected(obj[i], true);
            }

            this.selections = this.selections.concat(obj);
          } else {
            this.setObjectSelected(obj, true);
            this.selections.push(obj);
          }
        } else if (core["a" /* default */].utils.isArray(obj)) {
          for (var _i = 0, _count = obj.length; _i < _count; ++_i) {
            this.setObjectSelected(obj[_i], true);
          }

          this.selections = obj.concat(this.selections);
        } else {
          // obj becomes the new active selection
          this.setObjectSelected(obj, true);
          this.selections.unshift(obj);
        }

        if (this.selections.length) {
          this.notify(this.selectionType, SELECT_EVENT, this.selections, this.selections[0]);
        }

        this.stopSelecting();
      }
    }
  }, {
    key: "unselect",
    value: function unselect(obj) {
      var _this3 = this;

      if (obj) {
        var selecting = false;
        var uns = core["a" /* default */].utils.isArray(obj) && obj || [obj];
        var foundUns = [];
        uns.forEach(function (o) {
          var index = _this3.selections.indexOf(obj);

          if (index >= 0) {
            if (!selecting) {
              _this3.startSelecting();

              selecting = true;
            }

            _this3.selections.splice(index, 1);

            _this3.setObjectSelected(obj, false);

            foundUns.push(obj);
          }
        });

        if (selecting) {
          this.notify(this.selectionType, UNSELECT_EVENT, foundUns);
          this.stopSelecting();
        }
      }
    }
  }, {
    key: "setObjectSelected",
    value: function setObjectSelected(obj, selected) {}
  }, {
    key: "clear",
    value: function clear() {
      if (this.selections.length) {
        this.startSelecting();
        var oldSelection = this.selections;

        for (var i = 0, count = oldSelection && oldSelection.length || 0; i < count; ++i) {
          this.setObjectSelected(oldSelection[i], false);
        }

        this.selections = [];
        this.notify(this.selectionType, CLEAR_SELECTION_EVENT, oldSelection);
        this.notify(this.genericType, CLEAR_SELECTION_EVENT, oldSelection);
        this.stopSelecting();
      }
    }
  }, {
    key: "processClick",
    value: function processClick(e, obj) {
      if (obj) {
        if (e.ctrlKey) {
          // toggle object selection.
          if (this.isSelected(obj)) {
            this.unselect(obj);
          } else {
            this.select(obj);
          }
        } else if (!this.isSelected(obj)) {
          this.select(obj, !e.shiftKey);
        }
      }
    }
  }, {
    key: "getObjectType",
    value: function getObjectType(obj) {
      for (var i = 0, count = this.types.length; i < count; ++i) {
        if (this.types[i].accept(obj)) return this.types[i];
      }

      return null;
    }
  }, {
    key: "startSelecting",
    value: function startSelecting() {
      if (++this.lock === 1) {
        this.notify(this.genericType, START_SELECTING);
      }
    }
  }, {
    key: "stopSelecting",
    value: function stopSelecting() {
      if (! --this.lock) {
        this.notify(this.genericType, STOP_SELECTING);

        if (this.selectionType) {
          this.notify(this.selectionType, SELECTION_CHANGED_EVENT, this.selections, this.selections.length ? this.selections[0] : null);
        }
      }
    } //
    // Notify selection observers
    //

  }, {
    key: "notify",
    value: function notify(type, event) {
      var typeEvent = type.getTypeEvent(event);

      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      if (typeEvent) {
        this.triggerEvent(true
        /* Specify 3rd parameter is an array of parameters */
        , typeEvent, params);
      }

      for (var i = 0, o; i < this.observers.length; i++) {
        o = this.observers[i];
        type.notify(o, event, params);
      }
    }
    /* notifyObserver(type, event, ...params) {
          for(let i = 0, o, m; i < this.observers.length; i++) {
              o = this.observers[i];
              type.notify(o, event, params);
          }
      } */

  }, {
    key: "addObserver",
    value: function addObserver(o) {
      this.observers.push(o);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(o) {
      var index = this.observers.indexOf(o);

      if (index >= 0) {
        this.observers.splice(index, 1);
        return 0;
      }

      return null;
    } //
    // Object types
    //

  }, {
    key: "registerType",
    value: function registerType(type) {
      type = new selection_Type(type);
      this.types.push(type);
      return type;
    }
  }], [{
    key: "SELECTION_CHANGED_EVENT",
    get: function get() {
      return SELECTION_CHANGED_EVENT;
    }
    /**
     * @return {string}
     */

  }, {
    key: "UNSELECT_EVENT",
    get: function get() {
      return UNSELECT_EVENT;
    }
    /**
     * @return {string}
     */

  }, {
    key: "SELECT_EVENT",
    get: function get() {
      return SELECT_EVENT;
    }
    /**
     * @return {string}
     */

  }, {
    key: "CLEAR_SELECTION_EVENT",
    get: function get() {
      return CLEAR_SELECTION_EVENT;
    }
  }]);

  return SelectionHandler;
}(core["a" /* default */].components.SelectionHandler);


core["a" /* default */].components.SelectionHandler.impl = selection_SelectionHandler;
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/typeof/_index.mjs
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/typeof.js

// CONCATENATED MODULE: ./src/core/renderer.js







function renderer_createSuper(Derived) { var hasNativeReflectConstruct = renderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function renderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var AUTOMATIC_COLOR = 'automatic';
var TEXT_OVERFLOW_ELLIPSIS = 'ellipsis';
var TEXT_OVERFLOW_NO_DISPLAY = 'noDisplay';
var TEXT_OVERFLOW_CUT = 'cut';

function createSelectorFunction(selector, fct, oldFct, fctCtx) {
  return fct && function (object, ctx, ext) {
    if (!selector || selector(object, ctx)) {
      return fctCtx ? fct.call(fctCtx, object, ctx, ext) : fct(object, ctx, ext);
    }

    return oldFct && oldFct(object, ctx, ext) || undefined;
  };
}

var renderer_Renderer = /*#__PURE__*/function (_Gantt$components$Ren) {
  Object(inherits["a" /* default */])(Renderer, _Gantt$components$Ren);

  var _super = renderer_createSuper(Renderer);

  function Renderer(config, proto, paletteHandler) {
    Object(classCallCheck["a" /* default */])(this, Renderer);

    return _super.call(this, config, proto, paletteHandler);
  }

  Object(createClass["a" /* default */])(Renderer, [{
    key: "draw",
    value: function draw(object, parentElt, ctx) {
      var shapeElt = this.createShape && this.createShape(object, parentElt, ctx) || null;

      if (this.getCSS) {
        var css = this.getCSS(object, ctx);

        if (css) {
          this.setCSS(shapeElt || parentElt, css);
        }
      }

      if ((this.getText || this.getIcon) && this.drawContent) {
        var text = this.getText && this.getText(object, ctx);
        var icon = this.getIcon && this.getIcon(object, ctx);
        this.drawContent(shapeElt || parentElt, icon, text, object, ctx);
      }

      var bg;

      if (this.background) {
        bg = this.background(object, ctx);

        if (bg) {
          this.setBackground(shapeElt, bg);
        }
      }

      if (this.color) {
        this.setColor(shapeElt, this.color(object, ctx, bg));
      }

      if (parentElt && shapeElt !== parentElt) {
        parentElt.appendChild(shapeElt);
      }

      return shapeElt;
    }
  }, {
    key: "setBackground",
    value: function setBackground(shapeElt, bg) {
      shapeElt.style.backgroundColor = bg;
    }
  }, {
    key: "setColor",
    value: function setColor(shapeElt, c) {
      shapeElt.style.color = c;
    }
  }, {
    key: "setCSS",
    value: function setCSS(elt, classname) {
      if (classname) {
        elt.className = elt.className && "".concat(elt.className, " ").concat(classname) || classname;
      }
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "createShape",
    value: function createShape(object, parentElt, ctx) {
      return null;
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "drawContent",
    value: function drawContent(elt, icon, text, object, ctx) {
      this.drawDefaultContent(elt, icon, text, object, ctx);
    }
  }, {
    key: "drawNoDisplayOverflowContent",
    value: function drawNoDisplayOverflowContent(elt, icon, text, object, ctx) {
      var ctnt = document.createElement('div');
      ctnt.className = 'content';
      ctnt.style.overflow = 'hidden';
      ctnt.style.display = 'flex'; // Cannot used as issue with FF https://github.ibm.com/IBMDecisionOptimization/dd-gantt-component/issues/14

      /* ctnt.style.alignItems = 'center'; */

      ctnt.style.justifyContent = 'center';
      ctnt.style.left = '0';
      ctnt.style.top = '0';
      ctnt.style.bottom = '0';
      ctnt.style.right = '0';
      ctnt.style.position = 'absolute';
      ctnt.style.flexWrap = 'wrap';

      if (icon) {
        var img = document.createElement('img');
        img.className = 'image-content';
        img.src = icon;
        img.alt = '';
        img.style.float = 'left';
        ctnt.appendChild(img);
      }

      var separator = document.createElement('div');
      separator.style.width = '1px';
      separator.style.display = 'inline-block';
      separator.style.height = '100%';
      ctnt.appendChild(separator);
      var t = document.createElement('div');
      t.className = 'text-content';
      t.innerHTML = text;
      t.style.display = 'flex';
      t.style.alignItems = 'center';
      t.style.whiteSpace = 'nowrap';
      t.style.height = '100%';
      t.style.textAlign = 'center';
      ctnt.appendChild(t);
      elt.appendChild(ctnt);
    }
  }, {
    key: "drawCutContent",
    value: function drawCutContent(elt, icon, text, object, ctx) {
      if (icon) {
        var img = document.createElement('img');
        img.className = 'image-content';
        img.src = icon;
        img.alt = '';
        elt.appendChild(img);
      }

      elt.style.overflow = 'hidden';
      var t = document.createElement('div');
      t.className = 'text-content';
      t.innerHTML = text;
      elt.appendChild(t);
      return t;
    }
  }, {
    key: "drawEllipsisContent",
    value: function drawEllipsisContent(elt, icon, text, object, ctx) {
      if (icon) {
        var img = document.createElement('img');
        img.className = 'image-content';
        img.src = icon;
        img.alt = '';
        elt.appendChild(img);
      }

      var t = document.createElement('div');
      t.className = 'text-content';
      t.style.textOverflow = 'ellipsis';
      t.style.overflow = 'hidden';
      t.innerHTML = text;
      elt.appendChild(t);
      return t;
    }
  }, {
    key: "drawOverflowVisibleContent",
    value: function drawOverflowVisibleContent(elt, icon, text, object, ctx) {
      if (icon) {
        var img = document.createElement('img');
        img.className = 'image-content';
        img.src = icon;
        img.alt = '';
        img.style.float = 'left';
        elt.appendChild(img);
      }

      var t = document.createElement('div');
      t.className = 'text-content';
      t.overflow = 'visible';
      t.innerHTML = text;
      elt.appendChild(t);
      return t;
    }
  }, {
    key: "filter",
    value: function filter(object, row, search) {
      if (this.getText && search) {
        var text = this.getText(object, row);
        return text && core["a" /* default */].utils.stringMatches(text, search);
      }

      return false;
    }
  }, {
    key: "createCSSGetter",
    value: function createCSSGetter(selector, classOptions, ctx) {
      if (typeof classOptions === 'function') {
        // Function is given the object to render in parameter and returns a set of CSS classes
        return createSelectorFunction(selector, classOptions, null, ctx);
      }

      if (typeof classOptions === 'string') {
        if (classOptions[0] === '@') {
          // The string represents the accessor to the object property providing the CSS class
          return createSelectorFunction(selector, core["a" /* default */].utils.propertyEvaluator(classOptions.substring(1)));
        }

        return createSelectorFunction(selector, function () {
          return classOptions;
        });
      } // Else the config is a descriptive object of the CSS setter


      if (!classOptions.property) {
        console.warn('Missing "property" field in class setter description:');
        console.warn(classOptions);
        return null;
      }

      var propGetter = core["a" /* default */].utils.propertyEvaluator(classOptions.property);
      return createSelectorFunction(selector, function (obj) {
        var prop = propGetter.call(obj, obj);

        if (prop) {
          if (classOptions.prefix) {
            prop = classOptions.prefix + prop;
          }

          if (classOptions.suffix) {
            prop = classOptions.suffix + prop;
          }
        }

        return prop;
      });
    }
  }, {
    key: "addCSSConfiguration",
    value: function addCSSConfiguration(selector, classes, ctx) {
      var i;
      var getter;

      if (!core["a" /* default */].utils.isArray(classes)) {
        classes = [classes];
      }

      for (i = 0; i < classes.length; i++) {
        getter = this.createCSSGetter(selector, classes[i], ctx);

        if (getter) {
          if (this.cssGetters) {
            this.cssGetters.push(getter);
          } else {
            this.cssGetters = [getter];

            this.getCSS = function (object, ctx) {
              var cssClasses = '';
              var cssToAdd;

              for (var _i = 0; _i < this.cssGetters.length; _i++) {
                cssToAdd = this.cssGetters[_i](object, ctx);

                if (cssToAdd) {
                  cssClasses = cssClasses && "".concat(cssClasses, " ").concat(cssToAdd) || cssToAdd;
                }
              }

              return cssClasses;
            };
          }
        }
      }
    }
  }, {
    key: "addFilterConfiguration",
    value: function addFilterConfiguration(selector, config, ctx) {
      var filter;

      if (typeof config === 'function') {
        filter = function filter() {
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          return config.apply(ctx, params);
        };
      } else if (typeof config === 'string') {
        var getter = core["a" /* default */].utils.propertyEvaluator(config);

        if (getter) {
          filter = function filter(object, ctx, search) {
            if (search) {
              var value = getter(object, ctx);
              return value && core["a" /* default */].utils.stringMatches(value, search);
            }

            return true;
          };
        }
      } else {
        console.warn('Cannot process filter config. Must be a string or a function.');
        console.warn(config);
      }

      if (filter) {
        var oldFilter = this.filter;

        this.filter = function (object, ctx, search) {
          if (!oldFilter(object, ctx, search)) {
            return false;
          }

          if (!selector || selector(object)) {
            if (!filter(object, ctx, search)) {
              return false;
            }
          }

          return true;
        };
      }
    }
  }, {
    key: "addTooltipPropertiesConfiguration",
    value: function addTooltipPropertiesConfiguration(selector, config, ctx) {
      var tooltipPropsGetter;

      if (typeof config === 'function') {
        tooltipPropsGetter = config;
      } else {
        console.warn('Cannot process tooltip properties config. Must be a a function.');
        console.warn(config);
      }

      if (tooltipPropsGetter) {
        if (selector) {
          this.getTooltipProperties = createSelectorFunction(selector, tooltipPropsGetter, this.getTooltipProperties, ctx);
        } else this.getTooltipProperties = tooltipPropsGetter;
      }
    }
  }, {
    key: "addTooltipConfiguration",
    value: function addTooltipConfiguration(selector, config, ctx) {
      var tooltipGetter;

      if (typeof config === 'function') {
        tooltipGetter = function tooltipGetter() {
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }

          return config.apply(ctx, params);
        };
      } else {
        console.warn('Cannot process tooltip config. Must be a function.');
        console.warn(config);
      }

      if (tooltipGetter) {
        if (selector) {
          this.getTooltip = createSelectorFunction(selector, tooltipGetter, this.getTooltip);
        } else this.getTooltip = tooltipGetter;
      }
    }
  }, {
    key: "addTextConfiguration",
    value: function addTextConfiguration(selector, config, ctx) {
      var textGetter;

      if (typeof config === 'function') {
        textGetter = function textGetter() {
          for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            params[_key3] = arguments[_key3];
          }

          return config.apply(ctx, params);
        };
      } else if (typeof config === 'string') {
        textGetter = core["a" /* default */].utils.propertyEvaluator(config);
      } else {
        console.warn('Cannot process text config. Must be a string or a function.');
        console.warn(config);
      }

      if (textGetter) {
        if (selector) {
          this.getText = createSelectorFunction(selector, textGetter, this.getText);
        } else this.getText = textGetter;
      }
    }
  }, {
    key: "addIconConfiguration",
    value: function addIconConfiguration(selector, config, ctx) {
      var iconGetter;

      if (typeof config === 'function') {
        iconGetter = function iconGetter() {
          for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            params[_key4] = arguments[_key4];
          }

          return config.apply(ctx, params);
        };
      } else if (typeof config === 'string') {
        iconGetter = core["a" /* default */].utils.propertyEvaluator(config);
      } else {
        console.warn('Cannot process icon config. Must be a string or a function.');
        console.warn(config);
      }

      if (iconGetter) {
        if (selector) {
          this.getIcon = createSelectorFunction(selector, iconGetter, this.getIcon);
        } else this.getIcon = iconGetter;
      }
    }
  }, {
    key: "addDrawConfiguration",
    value: function addDrawConfiguration(selector, config) {
      if (selector) {
        var oldDraw = this.draw;

        this.draw = function (object, elt, ctx) {
          if (selector(object, ctx)) {
            config.draw(object, elt, ctx);
          } else {
            oldDraw(object, elt, ctx);
          }
        };
      } else {
        this.draw = function (object, elt, ctx) {
          config.draw(object, elt, ctx);
        };
      }
    }
  }, {
    key: "addDrawContentConfiguration",
    value: function addDrawContentConfiguration(selector, config) {
      if (selector) {
        var oldDrawContent = this.drawContent;

        this.drawContent = function (elt, text, object, ctx) {
          if (selector(object, ctx)) {
            config.drawContent(elt, text, object, ctx);
          } else {
            oldDrawContent(elt, text, object, ctx);
          }
        };
      } else {
        this.drawContent = function (elt, text, object, ctx) {
          config.drawContent(elt, text, object, ctx);
        };
      }
    }
  }, {
    key: "addTextOverflowConfiguration",
    value: function addTextOverflowConfiguration(selector, config) {
      var drawDefaultContent;

      if (config === TEXT_OVERFLOW_ELLIPSIS) {
        drawDefaultContent = this.drawEllipsisContent;
      } else if (config === TEXT_OVERFLOW_NO_DISPLAY) {
        drawDefaultContent = this.drawNoDisplayOverflowContent;
      } else if (config === TEXT_OVERFLOW_CUT) {
        drawDefaultContent = this.drawCutContent;
      }

      if (selector) {
        var oldDrawDefaultContent = this.drawDefaultContent;

        this.drawDefaultContent = function (elt, text, object, ctx) {
          if (selector(object, ctx)) {
            drawDefaultContent.call(this, elt, text, object, ctx);
          } else {
            oldDrawDefaultContent.call(this, elt, text, object, ctx);
          }
        };
      } else {
        this.drawDefaultContent = drawDefaultContent;
      }
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }, {
    key: "getTextColorFromBackgroundColor",
    value: function getTextColorFromBackgroundColor(hexColor) {
      var rgb = this.hexToRgb(hexColor); // http://www.w3.org/TR/AERT#color-contrast

      var o = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
      return o > 125 ? '#383633' : 'white';
    }
  }, {
    key: "addColorConfiguration",
    value: function addColorConfiguration(selector, config, property, ctx) {
      var _this = this;

      var colorGetter;

      if (typeof config === 'function') {
        colorGetter = function colorGetter() {
          for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            params[_key5] = arguments[_key5];
          }

          return config.apply(ctx, params);
        };
      } else if (typeof config === 'string') {
        if (property === 'color' && AUTOMATIC_COLOR === config) {
          colorGetter = function colorGetter(obj, ctx, bg) {
            var index = _this.colors && _this.colors.indexOf(bg) || -1;

            if (index < 0) {
              var textColor;

              try {
                textColor = _this.getTextColorFromBackgroundColor(bg);
              } catch (err) {
                console.error("Invalid color format ".concat(bg));
                console.error(err);
                textColor = 'black';
              }

              if (!_this.colors) {
                _this.colors = [bg];
                _this.textColors = [textColor];
              } else {
                _this.colors.push(bg);

                _this.textColors.push(textColor);
              }

              return textColor;
            }

            return _this.textColors[index];
          };
        } else {
          colorGetter = core["a" /* default */].utils.propertyEvaluator(config);
        }
      } else {
        // Object describing how to get a color from a palette
        var paletteConfig = config.palette;
        var paletteRenderer = {
          paletteHandler: this.paletteHandler,
          colors: null,
          value: core["a" /* default */].utils.propertyEvaluator(config.getValue),
          getColor: function getColor(obj, ctx) {
            var value = this.value(obj, ctx);
            var colors = this.colors || this.makeColors(obj, ctx); // makeColors leads to the creation of this.values

            var index = this.values.indexOf(value);

            if (index < 0) {
              index = this.values.length;
              this.values.push(value);
            }

            return index < 0 ? null : colors[index % colors.length];
          },
          getValues: config.values && (core["a" /* default */].utils.isFunction(config.values) && config.values || function () {
            return config.values;
          }),
          makeColors: function makeColors(obj, ctx) {
            var palette;

            if (paletteConfig) {
              if (core["a" /* default */].utils.isString(paletteConfig)) {
                palette = this.paletteHandler.getPalette(paletteConfig);
              } else {
                palette = new (core["a" /* default */].components.Palette.impl || core["a" /* default */].components.Palette)(paletteConfig);
              }
            } else {
              palette = this.paletteHandler.getPalette();
            }

            if (!palette && !this.colors) {
              console.error("No palette found for ".concat(paletteConfig));
              palette = core["a" /* default */].defaultPalettes[core["a" /* default */].defaultPaletteName];
            }

            this.values = this.getValues && this.getValues(obj, ctx) || [];
            this.colors = palette && palette.getColors(this.values.length || -1); // -1 for the max number of colors handled by the palette.

            return this.colors;
          }
        };

        colorGetter = function colorGetter(obj, ctx) {
          return paletteRenderer.getColor(obj, ctx);
        };
      }

      if (colorGetter) {
        if (selector) {
          this[property] = createSelectorFunction(selector, colorGetter, this[property]);
        } else this[property] = colorGetter;
      }
    }
  }, {
    key: "addConfiguration",
    value: function addConfiguration(config) {
      var selector;

      if (config.selector) {
        if (typeof config.selector === 'function') {
          selector = function selector() {
            return config.selector.apply(config, arguments);
          };
        } else if (_typeof(config.selector) !== 'object' || !config.selector.property || !config.selector.value) {
          console.warn('Renderer selector must be a function or an object with "property" and "value" fields.');
          console.warn(config.selector);
        } else {
          var prop = core["a" /* default */].utils.propertyEvaluator(this.config.selector.property);
          var values = this.config.selector.value.split(',');

          selector = function selector(object) {
            var value = prop(object);
            return value && values.indexOf(value) >= 0;
          };
        }
      }

      this.processConfiguration(selector, config);
    }
  }, {
    key: "processConfiguration",
    value: function processConfiguration(selector, config) {
      this.defaultProcessConfiguration(selector, config);
    }
  }, {
    key: "defaultProcessConfiguration",
    value: function defaultProcessConfiguration(selector, config) {
      if (config.classes || config.css) {
        this.addCSSConfiguration(selector, config.classes || config.css, config);
      }

      if (config.text) {
        this.addTextConfiguration(selector, config.text, config);
      }

      if (config.icon) {
        this.addIconConfiguration(selector, config.icon, config);
      }

      if (config.filter) {
        this.addFilterConfiguration(selector, config.filter, config);
      }

      if (config.tooltip) {
        this.addTooltipConfiguration(selector, config.tooltip, config);
      }

      if (config.tooltipProperties) {
        this.addTooltipPropertiesConfiguration(selector, config.tooltipProperties, config);
      }

      if (config.createShape) {
        console.warn('config.createShape: Not implemented');
      }

      if (config.drawContent) {
        this.addDrawContentConfiguration(selector, config);
      }

      if (config.textOverflow) {
        this.addTextOverflowConfiguration(selector, config.textOverflow);
      }

      if (config.background) {
        this.addColorConfiguration(selector, config.background, 'background', config);
      }

      if (config.color) {
        this.addColorConfiguration(selector, config.color, 'color', config);
      }

      if (config.draw) {
        this.addDrawConfiguration(selector, config);
      }
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(config) {
      this.drawDefaultContent = this.drawNoDisplayOverflowContent;

      if (Array.isArray(config)) {
        for (var i = 0; i < config.length; i++) {
          this.addConfiguration(config[i]);
        }
      } else if (config) {
        this.addConfiguration(config);
      }

      this.initialized(config);
    }
  }, {
    key: "initialized",
    value: function initialized(config) {} // noinspection JSUnusedLocalSymbols

  }, {
    key: "getTooltipProperties",
    value: function getTooltipProperties(obj, ctx) {
      return [];
    }
  }, {
    key: "getTooltip",
    value: function getTooltip(parentNode, obj, ctx) {
      parentNode.style.display = 'flex';
      parentNode.style.flexDirection = 'column';
      /* const tooltipContent = document.createElement('div');
          tooltipContent.className = 'gantt-tooltip-content';
          tooltipContent.style.display = 'flex';
          tooltipContent.style.flexFlow = 'column'; */

      if (this.getText) {
        var title = document.createElement('h2');
        title.appendChild(document.createTextNode(this.getText(obj, ctx)));
        title.style.display = 'block';
        title.style.flex = '0 0 auto';
        parentNode.appendChild(title);
      }

      var props = this.getTooltipProperties(obj, ctx);
      var tableCtnr = document.createElement('div');
      tableCtnr.style.overflow = 'auto';
      tableCtnr.style.display = 'block';
      tableCtnr.style.flexShrink = '1';
      tableCtnr.style.flexGrow = '1';
      var table = document.createElement('table');
      var body = document.createElement('tbody');
      var tr;
      var td;

      for (var iProp = 0, count = props.length; iProp < count;) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.className = 'tooltip-key';
        td.appendChild(document.createTextNode(props[iProp++]));
        tr.appendChild(td);
        td = document.createElement('td');
        td.className = 'tooltip-table-separator';
        tr.appendChild(td);
        td = document.createElement('td');
        td.className = 'tooltip-value';
        td.appendChild(document.createTextNode(props[iProp++]));
        tr.appendChild(td);
        body.appendChild(tr);
      }

      table.appendChild(body);
      tableCtnr.appendChild(table);
      parentNode.appendChild(tableCtnr); // tooltipContent.appendChild(tableCtnr);
      // parentNode.appendChild(tooltipContent);
    }
  }]);

  return Renderer;
}(core["a" /* default */].components.Renderer);


core["a" /* default */].components.Renderer.impl = renderer_Renderer;
// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/arrayWithHoles/index.js
var arrayWithHoles = __webpack_require__(16);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js
var iterableToArrayLimit = __webpack_require__(17);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js
var unsupportedIterableToArray = __webpack_require__(18);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/nonIterableRest/index.js
var nonIterableRest = __webpack_require__(19);

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs




function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/slicedToArray.js

// CONCATENATED MODULE: ./src/model/index.js







function model_createSuper(Derived) { var hasNativeReflectConstruct = model_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function model_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



function updateTimeWindow(wnd, activity) {
  if (activity.start && wnd.start > activity.start) {
    wnd.start = activity.start;
  }

  if (activity.end && wnd.end < activity.end) {
    wnd.end = activity.end;
  }

  return activity;
}

var ConstraintPrototype = {
  isDisplayed: function isDisplayed() {
    return this.nodes !== null;
  },
  clearLink: function clearLink() {
    this.nodes = null;
  },
  setNodes: function setNodes(nodes) {
    this.nodes = nodes;
  }
};

var model_GanttModel = /*#__PURE__*/function (_Gantt$components$Gan) {
  Object(inherits["a" /* default */])(GanttModel, _Gantt$components$Gan);

  var _super = model_createSuper(GanttModel);

  function GanttModel(gantt, config) {
    Object(classCallCheck["a" /* default */])(this, GanttModel);

    return _super.call(this, gantt, config);
  }

  Object(createClass["a" /* default */])(GanttModel, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this = this;

      this.destroy();
      var ftchClass = core["a" /* default */].components.DataFetcher.impl || core["a" /* default */].components.DataFetcher;
      var fetchConfig;

      var checkFetcher = function checkFetcher(fetcher, type) {
        if (!fetcher.get) {
          throw new Error("Could not configure data for ".concat(type, ". Probably a configuration issue with key(s) ").concat(Object.keys(fetcher).join(',')));
        }
      };

      this.dateParser = null;

      if (config.dateFormat) {
        try {
          this.dateParser = core["a" /* default */].utils.createDateParser(config.dateFormat);
        } catch (err) {
          throw new Error("Could not process date format ".concat(config.dateFormat, ": ").concat(err));
        }
      }

      var makeTimeFct = function makeTimeFct(fct) {
        if (_this.dateParser) {
          var final;
          return function (obj) {
            if (!final) {
              var value = fct(obj);

              if (core["a" /* default */].utils.isString(value)) {
                final = function final(obj) {
                  return _this.dateParser(fct(obj));
                };

                return _this.dateParser(value);
              }

              final = fct;
              return value;
            }

            return final(obj);
          };
        }

        return fct;
      };

      this.allFetcher = null;

      if (fetchConfig = config.all) {
        this.allFetcher = new ftchClass(fetchConfig, ['reader', 'resources', 'activities', 'reservations', 'constraints'], {
          gantt: this.gantt
        });
        checkFetcher(this.allFetcher, 'all');
        this.allFetcher._reader = fetchConfig.reader && core["a" /* default */].utils.isFunction(fetchConfig.reader) ? fetchConfig.reader : function (data) {
          return fetchConfig.reader;
        };
        this.allFetcher._resourcesGetter = fetchConfig.resources && core["a" /* default */].utils.propertyEvaluator(fetchConfig.resources);
        this.allFetcher._activitiesGetter = fetchConfig.activities && core["a" /* default */].utils.propertyEvaluator(fetchConfig.activities);
        this.allFetcher._reservationsGetter = fetchConfig.reservations && core["a" /* default */].utils.propertyEvaluator(fetchConfig.reservations);
        this.allFetcher._constraintsGetter = fetchConfig.constraints && core["a" /* default */].utils.propertyEvaluator(fetchConfig.constraints);
      }

      this.resourceFetcher = null;

      if (fetchConfig = config.resources) {
        this.resourceFetcher = new ftchClass(fetchConfig, ['id', 'parent', 'name', 'activities'], {
          gantt: this.gantt
        });
        checkFetcher(this.resourceFetcher, 'resources');

        if (fetchConfig.parent) {
          this.resourceFetcher._parentIdGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.parent || 'parentId');
        }

        this.resourceFetcher._idGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.id || 'id');
        this.resourceFetcher._nameGetter = fetchConfig.name && core["a" /* default */].utils.propertyEvaluator(fetchConfig.name) || this.resourceFetcher._idGetter;

        if (fetchConfig.activities) {
          this.resourceFetcher._activityGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.activities);
        }
      }

      if (fetchConfig = config.activities) {
        // Do no not create an activity getter if activities are provided along with the resources
        this.activityFetcher = this.resourceFetcher && this.resourceFetcher._activityGetter && {} || new ftchClass(fetchConfig, ['id', 'parent', 'name', 'start', 'end', 'resource'], {
          gantt: this.gantt
        });

        if (!this.resourceFetcher || !this.resourceFetcher._activityGetter) {
          checkFetcher(this.activityFetcher, 'activities');
        }

        if (fetchConfig.parent) {
          this.activityFetcher._parentIdGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.parent || 'parentId');
        }

        this.activityFetcher._idGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.id || 'id');
        this.activityFetcher._nameGetter = fetchConfig.name && core["a" /* default */].utils.propertyEvaluator(fetchConfig.name) || this.activityFetcher._idGetter;
        this.activityFetcher._startGetter = makeTimeFct(core["a" /* default */].utils.propertyEvaluator(fetchConfig.start || 'start'));
        this.activityFetcher._endGetter = makeTimeFct(core["a" /* default */].utils.propertyEvaluator(fetchConfig.end || 'end'));

        if (fetchConfig.resource) {
          this.activityFetcher._resourceIdGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.resource);
        }
      }

      if (fetchConfig = config.reservations) {
        this.reservationFetcher = new ftchClass(fetchConfig, ['activity', 'resource'], {
          gantt: this.gantt
        });
        checkFetcher(this.reservationFetcher, 'reservations'); // noinspection JSUnresolvedVariable

        this.reservationFetcher._activityGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.activity || 'activity');
        this.reservationFetcher._resourceGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.resource || 'resource');
      }

      if (fetchConfig = config.constraints) {
        this.constraintFetcher = new ftchClass(fetchConfig, ['from', 'to', 'type'], {
          gantt: this.gantt
        });
        checkFetcher(this.constraintFetcher, 'constraints');
        this.constraintFetcher._fromGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.from || 'from'); // noinspection JSUnresolvedVariable

        this.constraintFetcher._toGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.to || 'to');
        this.constraintFetcher._typeGetter = core["a" /* default */].utils.propertyEvaluator(fetchConfig.type || 'type');
        this.constraintFetcher._idGetter = fetchConfig.id && core["a" /* default */].utils.propertyEvaluator(fetchConfig.id) || null;
      }

      if (fetchConfig = config.timeWindow) {
        this.timeWindowFetcher = new ftchClass(fetchConfig, null, {
          gantt: this.gantt
        });
        checkFetcher(this.timeWindowFetcher, 'timeWindow');
        this.timeWindowFetcher._startGetter = makeTimeFct(core["a" /* default */].utils.propertyEvaluator(fetchConfig.start || 'start'));
        this.timeWindowFetcher._endGetter = makeTimeFct(core["a" /* default */].utils.propertyEvaluator(fetchConfig.end || 'end'));
      }
    }
  }, {
    key: "load",
    value: function load(config) {
      var _this2 = this;

      if (config) {
        this.destroy();
        this.setConfiguration(config);
      }

      this.allData = null;

      if (this.allFetcher) {
        return this.allFetcher.get().then(function (data) {
          return _this2.loadFromData(data);
        });
      }

      return this.loadFromData();
    }
  }, {
    key: "loadFromData",
    value: function loadFromData(data
    /* May be null */
    ) {
      var _this3 = this;

      var actPromise;
      var resaPromise;
      var resourcePromise;
      var consPromise;
      this.activities = [];
      this.activities.byIds = {};
      this.rows = [];
      this.constraints = [];
      this.constraints.byIds = {};
      this.resources = [];
      this.resources.byIds = {};
      this.reservations = [];
      this.reservations.byIds = {};
      this.timeWindow = null;
      this.flat = true;
      var wnd;
      var wndPromise;

      if (this.timeWindowFetcher) {
        wndPromise = this.timeWindowFetcher.get(data).then(function (obj) {
          return {
            start: _this3.timeWindowFetcher._startGetter(obj),
            end: _this3.timeWindowFetcher._endGetter(obj)
          };
        });
      } else {
        // If time window not provided with a specified data fetcher, we compute it.
        wnd = {
          start: Number.MAX_VALUE,
          end: 0
        } || null;
      }

      var resourceGantt = this.gantt.isResourceGantt();

      if (!this.resourceFetcher && !this.activityFetcher) {
        if (resourceGantt) resourcePromise = Promise.resolve([]);else actPromise = Promise.resolve([]);
      } else {
        var timeWindowProcessed = !!wndPromise;

        if (this.resourceFetcher) {
          resourcePromise = this.resourceFetcher.get(data).then(function (resources) {
            // Compute here the time window only if this is resource chart with activities provided along with resources
            var computeTimeWindow = !timeWindowProcessed && resourceGantt && _this3.resourceFetcher._activityGetter;
            _this3.resources = _this3.createTreeNodes(resources, _this3.resourceFetcher, false, computeTimeWindow && wnd);
            timeWindowProcessed = timeWindowProcessed || computeTimeWindow;
            return _this3.resources;
          });
        }

        if (this.activityFetcher && (!resourceGantt || !this.resourceFetcher || !this.resourceFetcher._activityGetter)) {
          actPromise = this.activityFetcher.get(data).then(function (activities) {
            // Compute here the time window only if a time window fetcher was not specified
            _this3.activities = _this3.createTreeNodes(activities, _this3.activityFetcher, true, !timeWindowProcessed && wnd);
            return _this3.activities;
          });
        }

        if (this.reservationFetcher) {
          resaPromise = this.reservationFetcher.get(data);
        }

        if (this.constraintFetcher) {
          consPromise = this.constraintFetcher.get(data);
        }
      }

      return Promise.all([resourcePromise, actPromise, resaPromise, consPromise, wndPromise]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 5),
            resources = _ref2[0],
            activities = _ref2[1],
            resas = _ref2[2],
            cons = _ref2[3],
            wndResult = _ref2[4];

        // If assigning activities to resources through a resource ID getter on activities
        if (_this3.activityFetcher && _this3.activityFetcher._resourceIdGetter) {
          _this3.createReservationsFromActivityResources(resourceGantt ? _this3.resources.byIds : _this3.activities.byIds);
        }

        if (resas && resas.length) {
          _this3.createReservations(resas);
        }

        if (cons && cons.length) {
          _this3.createConstraints(cons);
        }

        wndResult = wndResult || wnd;

        if (!wndResult.end && resourceGantt && activities && activities.length) {
          // Gantt without reservations, process time window from unused activities
          wndResult.start = activities[0].start;
          wndResult.end = activities[0].end;

          for (var i = activities.length - 1; i; i--) {
            updateTimeWindow(wndResult, activities[i]);
          }
        }

        if (wndResult.end) {
          _this3.timeWindow = {
            start: wndResult.start,
            end: wndResult.end
          };

          _this3.triggerEvent(core["a" /* default */].events.TIME_WINDOW_CHANGED, _this3.timeWindow);
        }

        return _this3.rows = resourceGantt ? resources : activities;
      });
    }
  }, {
    key: "createReservations",
    value: function createReservations(data) {
      this.reservations = [];
      this.reservations.byIds = {};

      if (!data || data.length === 0) {
        return;
      }

      var resByIds = this.resources.byIds;
      var actByIds = this.activities.byIds;
      var resIdGetter = this.reservationFetcher._resourceGetter;
      var actIdGetter = this.reservationFetcher._activityGetter;

      for (var i = 0, resId, res, actId, act, len = data.length, resa; i < len; ++i) {
        resa = data[i];
        resId = resIdGetter(resa);

        if ((resId || resId === 0) && (res = resByIds[resId])) {
          actId = actIdGetter(resa);

          if ((actId || actId === 0) && (act = actByIds[actId])) {
            (res.activities || (res.activities = [])).push(resa = this.createReservationNode(act, res));
            this.reservations.push(resa);

            if (resa.id) {
              this.reservations.byIds[resa.id] = resa;
            }
          } else if (actId) {
            console.error("Cannot find activity \"".concat(actId, "\" for reservation ").concat(JSON.stringify(resa)));
          } else {
            console.error("No activity specified for reservation ".concat(JSON.stringify(resa)));
          }
        } else if (resId || resId === 0) {
          console.error("Cannot find resource \"".concat(resId, "\" for reservation ").concat(JSON.stringify(resa)));
        } else {
          console.error("No resource specified for reservation ".concat(JSON.stringify(resa)));
        }
      }
    }
  }, {
    key: "createReservationsFromActivityResources",
    value: function createReservationsFromActivityResources(rowByIds) {
      var resGetter = this.activityFetcher._resourceIdGetter;

      for (var i = 0, resId, res, len = this.activities.length, actNode; i < len; ++i) {
        resId = resGetter((actNode = this.activities[i]).getData());

        if (resId || resId === 0) {
          if (res = rowByIds[resId]) {
            (res.activities || (res.activities = [])).push(this.createReservationNode(actNode, res));
          } else {
            console.error("Cannot find resource \"".concat(resId, "\" for activity ").concat(JSON.stringify(actNode.getData())));
          }
        } else {
          console.error("No resource specified for activity ".concat(JSON.stringify(actNode.getData())));
        }
      }
    }
  }, {
    key: "createConstraints",
    value: function createConstraints(data) {
      var len = data.length;
      var consNodes = new Array(len);
      consNodes.byIds = {};

      for (var i = 0, node; i < len; ++i) {
        consNodes[i] = node = this.createConstraintNode(data[i], this.activities, i);
        consNodes.byIds[node.id] = node;
      }

      return this.constraints = consNodes;
    }
  }, {
    key: "isResourceGanttModel",
    value: function isResourceGanttModel() {
      return !!this.resourceFetcher;
    }
  }, {
    key: "isFlat",
    value: function isFlat() {
      return this.flat;
    }
  }, {
    key: "createActivityNode",
    value: function createActivityNode(activity) {
      var node = Object.create(activity);
      node.id = this.activityFetcher._idGetter(activity);
      node.name = this.activityFetcher._nameGetter(activity);
      node.start = this.activityFetcher._startGetter(activity);
      node.end = this.activityFetcher._endGetter(activity);

      node.getData = function () {
        return activity;
      };

      node.gantt = this.gantt;

      node.getObjectType = function () {
        return core["a" /* default */].ObjectTypes.Activity;
      };

      return node;
    }
  }, {
    key: "createReservationNode",
    value: function createReservationNode(activity, row) {
      var node = Object.create(activity);
      node.row = row;
      node.gantt = this.gantt;

      node.getObjectType = function () {
        return core["a" /* default */].ObjectTypes.Activity;
      }; // No reservation type as for now an activity acts as a reservation as the copy objects points to a row


      return node;
    }
  }, {
    key: "createConstraintNode",
    value: function createConstraintNode(cons, activities, index) {
      var id = this.constraintFetcher._fromGetter(cons);

      if (!id) {
        throw "No from activity specified for the constraint ".concat(JSON.stringify(cons));
      }

      var from = activities.byIds[id];

      if (!from) {
        throw "No activity could be found with the ID ".concat(id, "for constraint ").concat(JSON.stringify(cons));
      }

      id = this.constraintFetcher._toGetter(cons);

      if (!id) {
        throw "No to activity specified for the constraint ".concat(JSON.stringify(cons));
      }

      var to = activities.byIds[id];

      if (!to) {
        throw "No activity could be found with the ID ".concat(id, "for constraint ").concat(JSON.stringify(cons));
      }

      var node = Object.create(cons, ConstraintPrototype);
      node.from = from;
      node.to = to;
      node.type = this.constraintFetcher._typeGetter(cons);
      node.gantt = this.gantt;

      node.getData = function () {
        return cons;
      };

      node.id = this.constraintFetcher._idGetter ? this.constraintFetcher._idGetter(cons) : "cons_".concat(index);
      if (!from.consOuts) from.consOuts = [node];else from.consOuts.push(node);
      if (!to.consIns) to.consIns = [node];else to.consIns.push(node);

      node.getObjectType = function () {
        return core["a" /* default */].ObjectTypes.Constraint;
      };

      return node;
    }
  }, {
    key: "createTreeNode",
    value: function createTreeNode(id, data) {
      var row = Object.create(data);
      row.id = id;
      row.gantt = this.gantt;

      row.getData = function () {
        return data;
      };

      row.hasAncestor = function (node) {
        for (var p = row.parent; p; p = p.parent) {
          if (p === node) {
            return true;
          }
        }

        return true;
      };

      row.getAncestorsCount = function () {
        var count = 0;

        for (var parent = row.parent; parent; parent = parent.parent) {
          count++;
        }

        return count;
      };

      row.setRowHeight = function (row, h) {};

      row.isGanttRow = function () {
        return true;
      };

      return row;
    }
  }, {
    key: "createTreeNodes",
    value: function createTreeNodes(data, rowFetcher, isActivity, wnd) {
      var result = new Array(data.length);
      var byIds = result.byIds = {};
      var children = {};
      var row;
      var origData;
      var parentId;
      var arr;
      var i;
      var resultIndex;
      var id;
      var activities;
      var iAct;
      var len;
      var roots = [];
      var allActivities = this.activities;
      var actNode;
      var startGetter;
      var endGetter;
      var actsGetter;
      var act;

      if (isActivity || (actsGetter = rowFetcher._activityGetter)) {
        startGetter = this.activityFetcher._startGetter;
        endGetter = this.activityFetcher._endGetter;
      }
      /* function sortNodes(a, b) {
        // Put child nodes with children first
        const aChildren = children[a.id], bChildren = children[b.id];
        return aChildren && aChildren.length
            ? (bChildren && bChildren.length? 0 : -1) : (bChildren && bChildren.length? 1 : 0)
      } */


      function addNode(node, parentNode) {
        result[resultIndex++] = node;
        node.parent = parentNode; // const childNodes = children[node.id].sort(sortNodes);

        var childNodes = children[node.id];
        node.children = childNodes;
        var childCount = childNodes.length;

        for (var iChild = 0; iChild < childCount; ++iChild) {
          addNode(childNodes[iChild], node);
        }

        if (isActivity && childCount && (!node.start || !node.end)) {
          if (!node.start) {
            node.start = childNodes[0].start;
          }

          if (!node.end) {
            node.end = childNodes[0].end;
          }

          for (var _iChild = 1; _iChild < childCount; ++_iChild) {
            updateTimeWindow(node, childNodes[_iChild]);
          }
        }

        if (wnd && isActivity) {
          updateTimeWindow(wnd, node);
        }
      }

      var idGetter = rowFetcher._idGetter;
      var nameGetter = rowFetcher._nameGetter;
      var parentIdGetter = rowFetcher._parentIdGetter;

      for (i = 0, len = data.length; i < len; ++i) {
        origData = data[i];
        parentId = parentIdGetter ? parentIdGetter(origData) : null;
        id = idGetter(origData);
        row = this.createTreeNode(id, origData, children[id]);

        if (!children[id]) {
          children[id] = [];
        }

        if (nameGetter) {
          row.name = nameGetter(origData);
        }

        if (isActivity) {
          row.start = rowFetcher._startGetter(origData);
          row.end = rowFetcher._endGetter(origData);
          row.activities = [row];

          row.getObjectType = function () {
            return core["a" /* default */].ObjectTypes.Activity;
          };
        } else {
          row.getObjectType = function () {
            return core["a" /* default */].ObjectTypes.Resource;
          };
        } // Process the time window


        if (wnd) {
          if (!isActivity) {
            activities = actsGetter(origData);

            if (activities) {
              row.activities = new Array(activities.length);

              for (iAct = 0; iAct < activities.length; ++iAct) {
                actNode = this.createActivityNode(act = activities[iAct]);
                allActivities.push(actNode);

                if (actNode.id) {
                  allActivities.byIds[actNode.id] = actNode;
                }

                row.activities[iAct] = this.createReservationNode(updateTimeWindow(wnd, actNode), row);
              }
            } else {
              row.activities = [];
            }
          } else {
            // We are defining an activity chart, rows are activities
            updateTimeWindow(wnd, row);
          }
        }

        byIds[id] = row;

        if (parentId || parentId === 0) {
          arr = children[parentId];

          if (!arr) {
            children[parentId] = [row];
          } else {
            arr.push(row);
          }
        } else {
          roots.push(row);
        }
      }

      if (this.gantt.isResourceGantt() !== isActivity) {
        this.flat = roots.length === data.length;
      }

      for (i = 0, len = roots.length, resultIndex = 0; i < len; ++i) {
        addNode(roots[i]);
      }

      return result;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.allFetcher && this.allFetcher.destroy) {
        this.allFetcher.destroy();
      }

      this.allFetcher = null;

      if (this.resourceFetcher && this.resourceFetcher.destroy) {
        this.resourceFetcher.destroy();
      }

      this.resourceFetcher = null;
      this.resources = null;

      if (this.activityFetcher && this.activityFetcher.destroy) {
        this.activityFetcher.destroy();
      }

      this.activityFetcher = null;
      this.activities = null;

      if (this.reservationFetcher && this.reservationFetcher.destroy) {
        this.reservationFetcher.destroy();
      }

      this.reservationFetcher = null;
      this.reservations = null;

      if (this.constraintFetcher && this.constraintFetcher.destroy) {
        this.constraintFetcher.destroy();
      }

      this.constraintFetcher = null;
      this.constraints = null;

      if (this.timeWindowFetcher && this.timeWindowFetcher.destroy) {
        this.timeWindowFetcher.destroy();
      }

      this.timeWindowFetcher = null;
      this.timeWindow = null;
    }
  }, {
    key: "getActivity",
    value: function getActivity(param) {
      if (core["a" /* default */].utils.isString(param)) {
        return this.activities && this.activities.byIds[param];
      }

      if (this.activities) {
        for (var i = 0, count = this.activities.length; i < count; ++i) {
          if (this.activities[i].getData() === param) {
            return this.activities[i];
          }
        }
      }

      return null;
    }
  }]);

  return GanttModel;
}(core["a" /* default */].components.GanttModel);


core["a" /* default */].components.GanttModel = model_GanttModel;
// CONCATENATED MODULE: ./src/loadchart/loadchartctrl.js




var loadchartctrl_LoadResourceChartCtrl = /*#__PURE__*/function () {
  function LoadResourceChartCtrl(gantt, visible, config) {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, LoadResourceChartCtrl);

    this.gantt = gantt;
    this.visible = visible;
    this.loadCharts = [];
    var selectionHandler = gantt.selection;
    var ctlr = this;
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CHANGED, function (e, sels) {
      // Selections array is sorted from the last selected object to the first.
      // To keep the same colors associated with the resources when changing
      // the selection (Ctrl + Click),
      // we need to reverse this order so that the first selected object remains always
      // at the same array index.
      ctlr.setResources(sels.concat([]).reverse());
    });
    selectionHandler.on(core["a" /* default */].events.ROW_UNSELECTED, function (e, sels) {
      return _this.unselectRows(sels, _this.visible);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CLEARED, function (e, sels) {
      return _this.unselectRows(sels, _this.visible);
    });
    this.layoutSynch = this.gantt.synchLayout({
      timeTableBoundsChanged: function timeTableBoundsChanged(bounds) {
        ctlr.loadCharts.forEach(function (loadChart) {
          return loadChart.setTimeLineBounds(ctlr.layoutSynch.convertBounds(bounds, loadChart.getTimeLineNode));
        });
      },
      timeWindowChanged: function timeWindowChanged(start, end) {
        ctlr.timeWindowChanged(start, end);
      },
      timeLineSizeChanged: function timeLineSizeChanged(width) {
        ctlr.loadCharts.forEach(function (loadChart) {
          return loadChart.setTimeLineWidth(width);
        });
      },
      timeLineInitialized: function timeLineInitialized() {},
      timeLineScrolled: function timeLineScrolled(x) {
        ctlr.loadCharts.forEach(function (loadChart) {
          return loadChart.setTimeLineScrollLeft(x);
        });
      }
    });
    this.setConfiguration(config);
  }

  Object(createClass["a" /* default */])(LoadResourceChartCtrl, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this2 = this;

      var RendererClass = core["a" /* default */].components.Renderer.impl || core["a" /* default */].components.Renderer;
      this.resourceRenderer = new RendererClass(core["a" /* default */].utils.mergeObjects({
        background: {
          getValue: function getValue(res) {
            return _this2.resources.indexOf(res);
          }
        }
      }, config && config.renderer), {}, this.gantt);
    }
  }, {
    key: "getRowBackground",
    value: function getRowBackground(row) {
      return row.backgroundColor;
    }
  }, {
    key: "addLoadResourceChart",
    value: function addLoadResourceChart(loadChart) {
      this.loadCharts.push(loadChart);
      loadChart.setResourceRenderer(this.resourceRenderer);
    }
  }, {
    key: "addChildResources",
    value: function addChildResources(resources, a) {
      for (var i = 0, res; i < resources.length; i++) {
        res = resources[i];
        a.push(res);

        if (res.children) {
          this.addChildResources(res.children, a);
        }
      }

      return a;
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      var _this3 = this;

      if (this.visible !== visible) {
        this.visible = visible;
        this.loadCharts.forEach(function (loadChart) {
          return loadChart.setVisible(visible);
        });

        if (this.visible) {
          if (this.savedTimeW) {
            var _this$savedTimeW = this.savedTimeW,
                start = _this$savedTimeW.start,
                end = _this$savedTimeW.end;
            delete this.savedTimeW;
            this.setTimeWindow(start, end, function () {
              if (_this3.resources && _this3.resources.length) {
                _this3.setResources(_this3.resources); // Forces a row redraw

              }
            });
          } else if (this.resources && this.resources.length) {
            this.setResources(this.resources); // Forces a row redraw
          }

          if (this.savedScrollLeft) {
            var left = this.savedScrollLeft;
            delete this.savedScrollLeft;
            this.setScrollLeft(left);
          }
        } else if (this.resources && this.resources.length) {
          this.unselectRows(this.resources, true);
        }
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.visible;
    }
  }, {
    key: "timeWindowChanged",
    value: function timeWindowChanged(start, end) {
      if (!this.visible) {
        this.savedTimeW = {
          start: start,
          end: end
        };
      } else {
        this.setTimeWindow(start, end);
      }
    }
  }, {
    key: "setTimeWindow",
    value: function setTimeWindow(start, end, onInit) {
      this.loadCharts.forEach(function (loadChart) {
        return loadChart.setTimeWindow(start, end, onInit);
      });
    }
  }, {
    key: "timeTableXScrolled",
    value: function timeTableXScrolled(left) {
      if (!this.visible) {
        this.savedScrollLeft = left;
      } else this.setScrollLeft(left);
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(left) {
      this.loadCharts.forEach(function (loadChart) {
        return loadChart.setScrollLeft(left);
      });
    }
  }, {
    key: "setResources",
    value: function setResources(resources) {
      var allRes = this.addChildResources(resources, []);
      this.resources = allRes;

      if (this.visible) {
        for (var i = 0, count = allRes.length, res; i < count; i++) {
          res = allRes[i];
          res.backgroundColor = this.visible && this.resourceRenderer.background(res);
        }

        this.gantt.drawRows(this.resources);
        this.loadCharts.forEach(function (loadChart) {
          loadChart.setResources(allRes);
          loadChart.draw();
        });
      }
    }
  }, {
    key: "unselectRows",
    value: function unselectRows(rows, redraw) {
      var all = [];

      var unselectDeep = function unselectDeep(ar) {
        ar.forEach(function (row) {
          all.push(row);
          row.backgroundColor = undefined;

          if (row.children) {
            unselectDeep(row.children);
          }
        });
      };

      unselectDeep(rows);

      if (redraw) {
        this.gantt.drawRows(all);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.layoutSynch) {
        this.layoutSynch.disconnect();
        this.layoutSynch = null;
      }
    }
  }]);

  return LoadResourceChartCtrl;
}();


// EXTERNAL MODULE: ./src/loadchart/loadchart.js
var loadchart = __webpack_require__(12);

// CONCATENATED MODULE: ./src/loadchart/index.js




var LOAD_RESOURCE_CHART_OPENED = 'load-resource-chart-opened';
var LOAD_RESOURCE_CHART_CLOSED = 'load-resource-chart-closed';
var GANTT_LOAD_RESOURCE_CHART = 'gantt-load-resource-chart';
// CONCATENATED MODULE: ./src/core/utils.js







function utils_createSuper(Derived) { var hasNativeReflectConstruct = utils_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function utils_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var GanttStrings = {
  'Gantt.MoveActivity': 'Move "{name}"',
  'Gantt.ChangeActivityRow': 'Change "{name}" of row',
  'timeLine.changeRowItem.fmt': '<div class="dragg-item-content"><h2 class="dragg-title">{title}</h2><table>' + '<tr><td class="dragg-item-property">From row</td><td class="table-separator"></td><td class="dragg-item-value">{start}</td></tr>' + '<tr><td class="dragg-item-property">At date</td><td class="table-separator"></td><td class="dragg-item-value">{startRow}</td></tr>' + '<tr><td class="dragg-item-property">To row</td><td class="table-separator"></td><td class="dragg-item-value">{current}</td></tr>' + '<tr><td class="dragg-item-property">At date</td><td class="table-separator"></td><td class="dragg-item-value">{currentRow}</td></tr>' + '</table></div>',
  'timeLine.newTimeItem.fmt': '<div class="dragg-item-content"><h2 class="dragg-title {draggStatusClass}">{title}</h2><table>' + '<tr><td class="dragg-item-property">From</td><td class="table-separator"></td><td class="dragg-item-value">{start}</td></tr>' + '<tr><td class="dragg-item-property">To</td><td class="table-separator"></td><td class="dragg-item-value">{current}</td></tr>' + '</table></div>',
  'gantt.loading': 'Loading',
  'gantt.error.details': 'Details',
  'gantt.error.title.fmt': '{msg} : {title}',
  'gantt.toolbar.mini.text': 'Mini',
  'gantt.toolbar.minimize.text': 'Compact',
  'gantt.toolbar.normal.text': 'Normal',
  'gantt.toolbar.mini.tooltip': 'Change row height',
  'gantt.toolbar.fit.tooltip': 'Fit',
  'gantt.toolbar.refresh.text': 'Refresh',
  'gantt.toolbar.refresh.tooltip': 'Refresh',
  'gantt.toolbar.zoomIn.tooltip': 'Zoom In',
  'gantt.toolbar.zoomOut.tooltip': 'Zoom Out',
  'gantt.loadResourceChart.load.title': 'Load',
  'gantt.loadResourceChart.show.tooltip': 'Show Load chart',
  'gantt.loadResourceChart.hide.tooltip': 'Hide Load chart',
  'gantt.loadResourceChart.noSelection.title': 'Select one or more resources to display in the load chart',
  'gantt.constraintChart.from': 'From',
  'gantt.constraintChart.to': 'To',
  'gantt.constraintChart.type': 'Type',
  'gantt.constraintChart.start.start': 'Start to Start',
  'gantt.constraintChart.start.end': 'End to Start',
  'gantt.constraintChart.end.end': 'End to End',
  'gantt.constraintChart.end.start': 'End to Start',
  'gantt.name': 'Name',
  'gantt.id': 'Id',
  'gantt.start': 'Start',
  'gantt.end': 'End',
  'gantt.datatables.empty-table': 'No data available in table',
  'gantt.error.no-time-window-defined': 'No time window defined',
  'gantt.columns': 'columns'
};
var intl = {
  formatMessage: function formatMessage(m, v) {
    var message = GanttStrings[m.id] || m.defaultMessage || m.id;

    if (v) {
      Object.entries(v).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        message = message.replace("{".concat(key, "}"), value);
      });
    }

    return message;
  }
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

core["a" /* default */].utils = {
  defaultDateFormat: 'mmm d, hh:MM:ss TT',
  createDateParser: function createDateParser(format) {
    var i = 0;
    var fmt = {};
    var year = 'year';
    var month = 'month';
    var day = 'day';
    var hour = 'hour';
    var min = 'min';
    var secs = 'secs';
    var millis = 'millis';
    var convertor = {
      yyyy: year,
      yy: year,
      y: year,
      M: month,
      MM: month,
      MMMM: month,
      d: day,
      dd: day,
      H: hour,
      HH: hour,
      m: min,
      mm: min,
      s: secs,
      ss: secs,
      S: millis,
      SS: millis,
      SSS: millis
    };
    format.replace(/(yyyy|yy|y|MMMM|MM|M|dd|d|HH|H|mm|m|ss|s|SSS|SS|S)/g, function (part) {
      fmt[convertor[part]] = i++;
    });
    return function (s) {
      if (!s) return 0;
      var parts = s.match(/(\d+)/g);
      return new Date(parts[fmt[year]], parts[fmt[month]] - 1, parts[fmt[day]], parts[fmt[hour]], parts[fmt[min]], parts[fmt[secs]]).getTime();
    };
  },
  closest: function closest(elt, selector) {},
  mergeObjects: function mergeObjects(target) {
    if (!target) {
      target = {};
    }

    for (var _i = 1, obj, prop; _i < arguments.length; _i++) {
      if (obj = arguments[_i]) {
        for (var j = 0, keys = Object.keys(obj); j < keys.length; j++) {
          prop = keys[j];
          target[prop] = obj[prop];
        }
      }
    }

    return target;
  },
  getChild: function getChild(elt, tagname) {
    tagname = tagname ? tagname.toUpperCase() : null;

    for (var _i2 = 0; _i2 < elt.childNodes.length; _i2++) {
      if (!tagname || elt.childNodes[_i2].tagName.toUpperCase() === tagname) {
        return elt.childNodes[_i2];
      }
    }

    return null;
  },
  isArray: function isArray(obj) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    if (!Array.isArray) {
      Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }

    return Array.isArray(obj);
  },
  isString: function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
  },
  isFunction: function isFunction(obj) {
    return typeof obj === 'function';
  },
  isDomElement: function isDomElement(obj) {
    return obj.nodeType > 0;
    /* return (
        typeof HTMLElement === "object"
            ? o instanceof HTMLElement :  o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    ) */
  },
  hasClass: function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    }

    if (el.className && el.className.match) {
      // Classname strings for SVG elements don't have some string methods including replace or match
      return !!el.className.match(new RegExp("(\\s|^)".concat(className, "(\\s|$)")));
    }

    return false;
  },
  addClass: function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!this.hasClass(el, className)) {
      if (el.className) {
        el.className += " ".concat(className);
      } else {
        el.className = className;
      }
    }
  },
  removeClass: function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (this.hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)".concat(className, "(\\s|$)"));
      el.className = el.className.replace(reg, ' ');
    }
  },
  toggleClass: function toggleClass(el, classname, set) {
    if (set === undefined) {
      if (this.hasClass(el, classname)) {
        this.removeClass(el, classname);
      } else {
        this.addClass(el, classname);
      }
    } else if (set) {
      this.addClass(el, classname);
    } else {
      this.removeClass(el, classname);
    }
  },
  html: function html(node, htmlText) {
    throw new Error('Gantt.utils.html not supported');
  },
  walkToAncestor: function walkToAncestor(parent, elt, cb, param) {
    function makeArrayMatcher(array) {
      return function (obj) {
        for (var _i3 = 0; _i3 < array.length; _i3++) {
          if (obj === array[_i3]) {
            return true;
          }
        }

        return false;
      };
    }

    var matcher = typeof parent === 'function' ? parent : this.isArray(parent) ? makeArrayMatcher(parent) : function (obj) {
      return parent === obj;
    };

    for (var p = elt, parentNode; p && p !== document || matcher(p);) {
      if (matcher(p)) {
        return param === undefined && p || param;
      }

      parentNode = p.parentNode;

      if (parentNode === document && !matcher(document)) {
        return;
      }

      if (cb) {
        var result = cb(parentNode, p, param);

        if (result !== undefined) {
          param = result;
        }
      }

      p = parentNode;
    }
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    var t; // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for this browser safe implementation of scrollLeft

    return (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollLeft === 'number' ? t : document.body).scrollLeft;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    var t; // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for this browser safe implementation of scrollTop

    return (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop === 'number' ? t : document.body).scrollTop;
  },
  getScreenPoint: function getScreenPoint(elt, pt) {
    var bounds = elt.getBoundingClientRect();
    return {
      x: bounds.left + this.getWindowScrollLeft() + (pt ? pt.x : 0),
      y: bounds.top + this.getWindowScrollTop() + (pt ? pt.y : 0)
    };
  },
  getHeight: function getHeight(elt) {
    // In firefox, actual row heights can be non-integers, which results in elt.offsetHeight (integer)
    // being different from the actual display size, as the rounding done in the browser display and the one returned
    // from offsetHeight can different. A table row of height 32.5 is displayed with 32px and have its offsetHeight
    // returning 33...
    return elt.offsetHeight;
  },
  offsetParent: function offsetParent(elt) {
    return elt.parentNode; // Should be the closest ancestor with positioned style (fixed, relative or absolute)
  },
  ajax: function ajax(url, params) {},
  propertyEvaluator: function propertyEvaluator(path) {
    if (this.isFunction(path)) {
      return path;
    }

    var ar = path.split('.');

    if (ar.length > 1) {
      return function (obj) {
        for (var _i4 = 0; obj && _i4 < ar.length; _i4++) {
          obj = obj[ar[_i4]];
        }

        return obj;
      };
    }

    if (ar.length === 1) {
      return function (obj) {
        return obj[path];
      };
    }

    return function (obj) {
      return obj;
    };
  },
  stringMatches: function stringMatches(s, search) {
    if (s && search) {
      var tmp = '' + s;
      return tmp.toLocaleLowerCase().indexOf(search.toLowerCase()) > -1;
    }

    return false;
  },
  getIntl: function getIntl() {
    return intl;
  },
  setIntl: function setIntl(nintl) {
    intl = nintl;
  },
  getString: function getString(key, defaultValue) {
    // return GanttStrings[key] || defaultValue || key;
    return this.getIntl().formatMessage({
      id: key,
      defaultMessage: defaultValue
    });
  },
  formatString: function formatString(tpl, obj) {
    // tpl = this.getString(tpl, tpl);
    // return tpl.replace(/\{(\w+)\}/g, (_, key) => obj[key]);
    return this.getIntl().formatMessage({
      id: tpl,
      defaultMessage: obj
    }, obj);
  },
  addEventListener: function addEventListener(target, evt, cb, capture) {
    if (target.addEventListener) {
      target.addEventListener(evt, cb, capture);
    } else if (target.attachEvent) {
      target.attachEvent("on".concat(evt), cb);
    }
  },
  removeEventListener: function removeEventListener(target, evt, cb) {
    if (target.removeEventListener) {
      target.removeEventListener(evt, cb, false);
    } else if (target.detachEvent) {
      target.detachEvent("on".concat(evt), cb);
    }
  },
  implements: function _implements(clazz) {
    for (var _i5 = 1, count = arguments.length; _i5 < count; _i5++) {
      var toImplement = arguments[_i5];

      for (var key in toImplement) {
        if (toImplement.hasOwnProperty(key)) {
          clazz[key] = toImplement[key];
        }
      }
    }

    return clazz;
  },
  detectIE: function detectIE() {
    // https://codepen.io/gapcode/pen/vEJNZN
    var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');

    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');

    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');

    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    } // other browser


    return false;
  }
};
core["a" /* default */].utils.isInteger = Number.isInteger;

core["a" /* default */].utils.appendSVG = function (elt, cfg) {
  var svgElt = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // svgElt.setAttribute("viewBox", "0 0 " + config.svg.width + " " + config.svg.height);

  svgElt.setAttribute('viewBox', cfg.viewBox);
  svgElt.style.x = '0';
  svgElt.style.y = '0';
  svgElt.style.width = "".concat(cfg.width, "px");
  svgElt.style.height = "".concat(cfg.height, "px"); // Overrides the transformY(4px) from analytics CSS

  svgElt.style.webkitTransform = 'none';
  svgElt.style.transform = 'none';

  if (cfg.margin) {
    svgElt.style.margin = cfg.margin;
  } else {
    svgElt.style.margin = '0';
  }

  var paths = Array.isArray(cfg.paths) && cfg.paths || [cfg.paths];
  paths.forEach(function (p) {
    var pathElt = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElt.setAttribute('d', p);
    svgElt.appendChild(pathElt);
  });
  elt.appendChild(svgElt);
}; //
// DataFetcher
//

/**
 * Utility class for accessing remote or local data
 * @
 * @param config Configuration for accessing data.
 * @constructor
 */


var utils_DataFetcher =
/**
 * Constructs a new data fetcher associated with specified context and parameterized with the provided
 * options.
 * @param config parameters describing the access to data.
 * @param privateFields (Array) list of fields to not take into account when parsing the configuration.
 * @param settings the settings object to provide contextual info to user's callbacks.
 */
function DataFetcher(config, privateFields, settings) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, DataFetcher);

  var createEntry = function createEntry(name, cfg) {
    var ctx = config.context || config;

    var postProcess = function postProcess(data) {
      var p = data && data.then && data || Promise.resolve(data);

      if (config.success) {
        p = p.then(function (data) {
          return config.success.call(ctx, data, settings);
        });
      }

      return p;
    };

    if (core["a" /* default */].utils.isFunction(cfg)) {
      _this[name] = function () {
        try {
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          return cfg.apply(settings, params);
        } catch (err) {
          return Promise.reject(err);
        }
      };
    } else if (config.url) {
      // make the ajax call
      var ajaxConfig = core["a" /* default */].utils.mergeObjects({
        success: cfg.success,
        settings: settings
      }, cfg.ajaxConfig);

      _this[name] = function () {
        return core["a" /* default */].utils.ajax(cfg.url, ajaxConfig);
      };
    } else if (core["a" /* default */].utils.isArray(config)) {
      _this[name] = function () {
        return Promise.resolve(config);
      };
    } else {
      var data = config.data;

      if (data) {
        if (core["a" /* default */].utils.isString(data)) {
          if (!ctx) {
            throw "No context defined for data fetcher ".concat(name);
          }

          var propEval = core["a" /* default */].utils.propertyEvaluator(data);
          var fct = typeof ctx === 'function';

          _this[name] = function (model) {
            model = model || (fct ? ctx() : ctx);

            if (model && model.then) {
              // Check if promise. See https://promisesaplus.com/#point-53
              return model.then(function (res) {
                return postProcess(propEval(res));
              });
            }

            return postProcess(propEval(model));
          };
        } else if (core["a" /* default */].utils.isFunction(data)) {
          var _fct = typeof ctx === 'function';

          _this[name] = function (model) {
            model = model || (_fct ? ctx() : ctx);

            if (model && model.then) {
              // Check if promise. See https://promisesaplus.com/#point-53
              return model.then(function (res) {
                return postProcess(data.call(ctx, model));
              });
            }

            try {
              return postProcess(data.call(ctx, model));
            } catch (err) {
              return Promise.reject(err);
            }
          };
        } else {
          _this[name] = function () {
            return postProcess(data);
          };
        }
      } else {
        throw "Data definition for ".concat(JSON.stringify(config), " for '").concat(name, "' does not define ajax parameters nor static data");
      }
    }
  };

  if (core["a" /* default */].utils.isFunction(config)) {
    createEntry('get', config, {});
  } else if (core["a" /* default */].utils.isArray(config)) {
    createEntry('get', config, {});
  } else {
    var defConfig = {
      context: settings
    };
    var entryConfigs = [];
    var useDefault;

    for (var _i6 = 0, prop, keys = Object.keys(config); _i6 < keys.length; _i6++) {
      prop = keys[_i6];

      if (prop === 'data' || prop === 'url' || prop === 'success' || prop === 'context' || prop === 'ajaxConfig') {
        defConfig[prop] = config[prop];
        useDefault = true;
      } else if (!privateFields || privateFields.indexOf(prop) < 0) {
        entryConfigs.push(prop);
        entryConfigs.push(config[prop]);
      }
    }

    for (var _i7 = 0, _prop; _i7 < entryConfigs.length;) {
      _prop = entryConfigs[_i7++];
      createEntry(_prop, useDefault && core["a" /* default */].utils.mergeObjects({}, defConfig, entryConfigs[_i7++]) || entryConfigs[_i7++], defConfig);
    }

    if (!entryConfigs.length && useDefault) {
      createEntry('get', defConfig);
    }
  }
};

core["a" /* default */].components.DataFetcher.impl = utils_DataFetcher; //
// Tooltip
//
// See https://developer.mozilla.org/en-US/docs/Web/Events/wheel

var prefix = '';

var _addEventListener; // detect event model


if (window.addEventListener) {
  _addEventListener = 'addEventListener';
} else {
  _addEventListener = 'attachEvent';
  prefix = 'on';
} // detect available wheel event
// noinspection JSUnresolvedVariable


var support = 'onwheel' in document.createElement('div') ? 'wheel' // Modern browsers support "wheel"
: document.onmousewheel !== undefined ? 'mousewheel' // Webkit and IE support at least "mousewheel"
: 'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

window.addWheelListener = function (elem, callback, useCapture) {
  _addWheelListener(elem, support, callback, useCapture); // handle MozMousePixelScroll in older Firefox


  if (support === 'DOMMouseScroll') {
    _addWheelListener(elem, 'MozMousePixelScroll', callback, useCapture);
  }
};

function _addWheelListener(elem, eventName, callback, useCapture) {
  elem[_addEventListener](prefix + eventName, support === 'wheel' ? callback : function (originalEvent) {
    !originalEvent && (originalEvent = window.event); // create a normalized event object

    var event = {
      // keep a ref to the original event object
      originalEvent: originalEvent,
      target: originalEvent.target || originalEvent.srcElement,
      type: 'wheel',
      deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
      deltaX: 0,
      deltaY: 0,
      deltaZ: 0,
      altKey: originalEvent.altKey,
      ctrlKey: originalEvent.ctrlKey,
      shiftKey: originalEvent.shiftKey,
      preventDefault: function preventDefault() {
        originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
      }
    }; // calculate deltaY (and deltaX) according to the event

    if (support === 'mousewheel') {
      event.deltaY = -1 / 40 * originalEvent.wheelDelta; // Webkit also support wheelDeltaX
      // noinspection JSUnresolvedVariable

      originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
    } else {
      event.deltaY = originalEvent.detail;
    } // it's time to fire the callback


    return callback(event);
  }, useCapture || false);
}
/*                                                                                      */

/*                                                                                      */

/*                                  Date formatting                                     */

/*                                                                                      */

/*                                                                                      */


var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;

  var pad = function pad(val, len) {
    val = String(val);
    len = len || 2;

    while (val.length < len) {
      val = "0".concat(val);
    }

    return val;
  }; // Regexes and supporting functions are cached through closure


  return function (date, mask, utc) {
    var dF = dateFormat; // You can't provide utc if you skip other args (use the "UTC:" mask prefix)

    if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    } // Passing date through Date applies Date.parse, if necessary


    date = date ? new Date(date) : new Date();
    if (Number.isNaN(date)) throw SyntaxError('invalid date');
    mask = String(dF.masks[mask] || mask || dF.masks.default); // Allow setting the utc argument via the mask

    if (mask.slice(0, 4) === 'UTC:') {
      mask = mask.slice(4);
      utc = true;
    }

    var _ = utc ? 'getUTC' : 'get';

    var d = date["".concat(_, "Date")]();
    var D = date["".concat(_, "Day")]();
    var m = date["".concat(_, "Month")]();
    var y = date["".concat(_, "FullYear")]();
    var H = date["".concat(_, "Hours")]();
    var M = date["".concat(_, "Minutes")]();
    var s = date["".concat(_, "Seconds")]();
    var L = date["".concat(_, "Milliseconds")]();
    var o = utc ? 0 : date.getTimezoneOffset();
    var flags = {
      d: d,
      dd: pad(d),
      ddd: dF.i18n.dayNames[D],
      dddd: dF.i18n.dayNames[D + 7],
      m: m + 1,
      mm: pad(m + 1),
      mmm: dF.i18n.monthNames[m],
      mmmm: dF.i18n.monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: y,
      h: H % 12 || 12,
      hh: pad(H % 12 || 12),
      H: H,
      HH: pad(H),
      M: M,
      MM: pad(M),
      s: s,
      ss: pad(s),
      l: pad(L, 3),
      L: pad(L > 99 ? Math.round(L / 10) : L),
      t: H < 12 ? 'a' : 'p',
      tt: H < 12 ? 'am' : 'pm',
      T: H < 12 ? 'A' : 'P',
      TT: H < 12 ? 'AM' : 'PM',
      Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
    };
    return mask.replace(token, function ($0) {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
}(); // Some common format strings


dateFormat.masks = {
  default: 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}; // Internationalization strings

dateFormat.i18n = {
  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}; // For convenience...

Date.prototype.format = function (mask, utc) {
  return dateFormat(this, mask || core["a" /* default */].utils.defaultDateFormat, utc);
}; //
// Palette
//


var utils_Palette = /*#__PURE__*/function (_Gantt$components$Pal) {
  Object(inherits["a" /* default */])(Palette, _Gantt$components$Pal);

  var _super = utils_createSuper(Palette);

  function Palette(config) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, Palette);

    _this2 = _super.call(this, config);
    _this2.colorSet = null;

    _this2.setConfiguration(config);

    return _this2;
  }

  Object(createClass["a" /* default */])(Palette, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this3 = this;

      var maxColorsSize = -1;

      var addColorSet = function addColorSet(col, size) {
        if (col.length >= maxColorsSize) {
          _this3.colorSet[size] = col;
          maxColorsSize = col.length;
        } else {
          var insert = size - 1;

          while (insert >= 0 && _this3.colorSet[insert].length < col.length) {
            _this3.colorSet[i] = _this3.colorSet[i - 1];
          }

          _this3.colorSet[insert === -1 ? 0 : insert] = col;
        }
      };

      var getColorsFromSet = function getColorsFromSet(count) {
        for (var index = 0, setCount = _this3.colorSet.length; index < setCount; ++index) {
          if (_this3.colorSet[index].length >= count) {
            return _this3.colorSet[index];
          }
        }

        return _this3.colorSet.length && _this3.colorSet[_this3.colorSet.length - 1] || null;
      };

      if (core["a" /* default */].utils.isArray(config)) {
        var count = config.length;

        if (count) {
          if (core["a" /* default */].utils.isArray(config[0])) {
            // If defining a set of color collections
            this.colorSet = new Array(count); // Sort color collections in this.colorSet from the lowest number of colors to the greatest.
            // Algo is optimized for case when receiving ordered array of color collections.

            for (var _i8 = 0; _i8 < count; _i8++) {
              addColorSet(config[_i8], _i8);
            }

            this._getColors = getColorsFromSet;
          } else {
            this.colors = config;

            this._getColors = function () {
              return _this3.colors;
            };
          }
        } else {
          this._getColors = function () {
            return null;
          };
        }
      } else if (core["a" /* default */].utils.isFunction(config)) {
        this._getColors = config;
      } else {
        var keys = Object.keys(config);
        var keyCount = keys.length;
        var size = 0;
        this.colorSet = new Array(keyCount);

        for (var _i9 = 0, val; _i9 < keyCount; ++_i9) {
          if (core["a" /* default */].utils.isArray(val = config[keys[_i9]])) {
            addColorSet(val, size++);
          }
        }

        if (!size || size !== keyCount) {
          console.error("Unkown palette configuration ".concat(config));
          console.log(config);

          this._getColors = function () {
            return null;
          };

          this.colorSet = null;
        } else {
          this._getColors = getColorsFromSet;
        }
      }
    }
  }, {
    key: "getColors",
    value: function getColors(count) {
      function makeResult(ar) {
        var arLen = ar.length;
        if (count < 0 || arLen === count) return ar;
        if (arLen > count) return ar.slice(0, count); // Extremely bad temporary solution when number of required colors exceeds palette's size

        var result = new Array(count);

        for (var _i10 = 0; _i10 < count; ++_i10) {
          result[_i10] = ar[_i10 % arLen];
        }

        return result;
      }

      var colors = this._getColors(count);

      return colors && makeResult(colors);
    }
  }]);

  return Palette;
}(core["a" /* default */].components.Palette);

core["a" /* default */].components.Palette.impl = utils_Palette;
core["a" /* default */].defaultPaletteName = 'qualitative20';
core["a" /* default */].defaultPalettes[core["a" /* default */].defaultPaletteName] = new utils_Palette([// IBM colors. See http://www.ibm.com/design/language/framework/visual/color/
// '#5AA8F8', '#FFA573', '#8CD211', '#EFC100', '#AF6EE8', '#FDE876', '#FF5050', '#00B29E', '#152935', '#4178BC', '#562F72', '#C8F08F', '#FF7832', '#FDD600'
// '#325C80', '#2D660A', '#4178BE', '#4B8401', '#5596E6', '#5AA701', '#5AAAFA', '#8CD211', '#7CC7FF', '#B4E051', '#C0E6FF', '#C8F08F', '#1D3649', '#0A3C02'
// '#6EB400', '#FF7832', '#BA8FF7', '#F0F2F4'
// '#9655D2', '#FF71D2', '#D92780', '#FF7D85', '#FCFAFA'

/* '#C0E6FF', '#7CC7FF', '#5AAAFA', '#5596E6', '#4178BE', '#325C80' */
// blue palette

/* "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a" // Brewer palette */
// https://releases.fr.eurolabs.ibm.com/display/OS/Design+for+GANTT+CHART
'#41D6C3', '#8CD211', '#5AAAFA', '#BA8FF7', '#00AE9A', '#5AA600', '#4178BE', '#9855D4', '#EFC100', '#FF7832', '#E71D32', '#325C80', '#AC8C00', '#D74108', '#AD1625', '#1D3649', '#FF71D4', '#DB2780', '#9D9393', '#645A5A']);
core["a" /* default */].components.GanttPanel.prototype.utils = core["a" /* default */].utils;
// EXTERNAL MODULE: ./src/error/error.scss
var error = __webpack_require__(28);

// CONCATENATED MODULE: ./src/error/index.js






function error_createSuper(Derived) { var hasNativeReflectConstruct = error_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function error_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var defaults = {
  listClass: 'error-list fit-parent-content',
  maxErrors: 5,
  bodyClass: 'error-body clearfix',
  titleClass: 'error-title',
  barClass: 'error-bar',
  descClass: 'error-desc',
  detailsBtnClass: 'error-details-btn',
  removeBtnClass: 'remove-error-btn',
  errorExpandedDefault: true,
  fadingOutDuration: 600
};

var error_ErrorGroup = /*#__PURE__*/function () {
  function ErrorGroup(node) {
    Object(classCallCheck["a" /* default */])(this, ErrorGroup);

    this.node = node;
    this.errs = [];
    this.errNodes = [];
    this.errorList = null;
  }

  Object(createClass["a" /* default */])(ErrorGroup, [{
    key: "addError",
    value: function addError(err, node, maxErrors) {
      var _this = this;

      if (maxErrors && maxErrors > 0 && this.errs.length >= maxErrors) {
        this.errs.splice(0, this.errs.length - maxErrors + 1);
        var removed = this.errNodes.splice(0, this.errNodes.length - maxErrors + 1);
        removed.forEach(function (removedElt) {
          _this.errorList.removeChild(removedElt);
        });
      }

      this.errs.push(err);
      this.errNodes.push(node);
      this.errorList.appendChild(node);
      return node;
    }
  }, {
    key: "removeError",
    value: function removeError(err) {
      for (var i = 0; i < this.errs.length; i++) {
        if (this.errs[i] === err || this.errNodes[i] === err) {
          this.errs.splice(i, 1);
          var nodes = this.errNodes.splice(i, 1);

          if (nodes.length) {
            this.errorList.removeChild(nodes[0]);
          }

          return true;
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.errorList && this.errorList.parentNode === this.node) {
        this.node.removeChild(this.errorList);
      }

      this.errs = [];
      this.errNodes = [];
      this.errorList = null;
    }
  }, {
    key: "updateErrorList",
    value: function updateErrorList() {
      if (this.errorList) {
        if (this.errs.length) {
          this.errorList.style.display = '';

          if (!this.errorList.parentNode) {
            this.beforeSettingErrorList(this.node);
            this.node.appendChild(this.errorList);
          }
        } else {
          this.errorList.style.display = 'none';
        }
      }
    }
  }, {
    key: "beforeSettingErrorList",
    value: function beforeSettingErrorList(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return !!this.errs.length;
    }
  }]);

  return ErrorGroup;
}();

function ensureErrorGroup(node, errorGroups) {
  for (var i = 0; i < errorGroups.length; i++) {
    if (errorGroups[i].node === node) {
      return errorGroups[i];
    }
  }

  var errorGroup = new error_ErrorGroup(node);
  errorGroups.push(errorGroup);
  return errorGroup;
}

var error_ErrorHandler = /*#__PURE__*/function (_Gantt$components$Err) {
  Object(inherits["a" /* default */])(ErrorHandler, _Gantt$components$Err);

  var _super = error_createSuper(ErrorHandler);

  function ErrorHandler(node, config) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, ErrorHandler);

    _this2 = _super.call(this, core["a" /* default */].utils.mergeObjects({}, defaults, config));
    _this2.node = node;
    _this2.lockCount = 0;
    _this2.errorGroups = [];
    return _this2;
  } // noinspection JSUnusedGlobalSymbols


  Object(createClass["a" /* default */])(ErrorHandler, [{
    key: "addError",
    value: function addError(err, msg, node) {
      if (!this.lockCount) {
        var errDetails = this.convertError(err, msg);
        var errNode = errDetails && this.createErrorNode(err, errDetails);

        if (errNode) {
          var errorGroup = ensureErrorGroup(node || this.node, this.errorGroups);

          if (!errorGroup.errorList) {
            errorGroup.errorList = this.createErrorList();
          }

          errorGroup.addError(err, errNode, this.config.maxErrors);
          errorGroup.updateErrorList();
          return errNode;
        }
      }
    }
  }, {
    key: "lock",
    value: function lock() {
      this.lockCount++;
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "unlock",
    value: function unlock() {
      --this.lockCount;
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      var result = [];

      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; ++iGroup) {
        result = result.concat(this.errorGroups[iGroup].errs);
      }

      return result;
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; ++iGroup) {
        if (this.errorGroups[iGroup].hasErrors()) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "createErrorList",
    value: function createErrorList() {
      var lst = document.createElement('ul');
      lst.className = 'error-list';
      return lst;
    }
  }, {
    key: "createErrorNode",
    value: function createErrorNode(err, errDetails) {
      var _this3 = this;

      var node = document.createElement('li');
      node.className = this.config.errorExpandedDefault && 'error-component error-expanded' || 'error-component';
      var errorContent = document.createElement('div');
      errorContent.className = 'error-content clearfix';
      var textContent = document.createElement('div');
      var divTitle = document.createElement('span');
      divTitle.innerHTML = errDetails.title;
      divTitle.className = 'error-title';

      divTitle.onclick = function (evt) {
        return _this3._toggleErrorDisplay(node);
      };

      textContent.appendChild(divTitle);
      var divErrorBar = document.createElement('div');
      divErrorBar.className = 'error-bar';

      if (errDetails.desc) {
        var divDesc = document.createElement('div');
        divDesc.className = 'error-desc';
        divDesc.innerHTML = errDetails.desc;
        textContent.appendChild(divDesc);
        var detailsBtn = document.createElement('span');
        detailsBtn.tabIndex = 0;
        detailsBtn.className = 'error-details-btn';
        detailsBtn.innerHTML = core["a" /* default */].utils.getString('gantt.error.details');

        detailsBtn.onclick = function (evt) {
          return _this3._toggleErrorDisplay(node);
        };

        divErrorBar.appendChild(detailsBtn);
      } // Remove error button


      var removeErrorBtn = document.createElement('span');
      removeErrorBtn.className = 'remove-error-btn';
      removeErrorBtn.tabIndex = 0;

      removeErrorBtn.onclick = function (evt) {
        return _this3.removeError(err);
      };

      divErrorBar.appendChild(removeErrorBtn);
      errorContent.appendChild(divErrorBar);
      errorContent.appendChild(textContent); // Error the text div after the bar so that the bar remains top aligned with its container

      node.appendChild(errorContent);
      return node;
    }
  }, {
    key: "convertError",
    value: function convertError(err, msg) {
      var c = this.config && this.config.convertError && this.config.convertError(err, msg);

      if (c) {
        return c;
      }

      if (core["a" /* default */].utils.isString(err)) {
        return {
          title: err
        };
      }

      var title = err.message || err.status || err.statusCode;

      if (msg) {
        title = core["a" /* default */].utils.formatString('gantt.error.title.fmt', {
          msg: msg,
          title: title
        });
      }

      var desc = err.desc || err.description || err.stack;

      if (desc) {
        desc = desc.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }

      return {
        title: title,
        desc: desc
      };
    }
  }, {
    key: "_toggleErrorDisplay",
    value: function _toggleErrorDisplay(errorNode) {
      core["a" /* default */].utils.toggleClass(errorNode, 'error-expanded');
    }
  }, {
    key: "removeError",
    value: function removeError(err) {
      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; iGroup++) {
        if (this.errorGroups[iGroup].removeError(err)) {
          this.errorGroups[iGroup].updateErrorList();
          return true;
        }
      }

      return false;
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(node) {
      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; iGroup++) {
        if (this.errorGroups[iGroup].node === node) {
          this.errorGroups[iGroup].clear();
          this.errorGroups.splice(iGroup, 1);
          return true;
        }
      }

      return false;
    }
  }]);

  return ErrorHandler;
}(core["a" /* default */].components.ErrorHandler);


core["a" /* default */].components.ErrorHandler.impl = error_ErrorHandler;
// CONCATENATED MODULE: ./src/core/filter.js




var filter_Filter = /*#__PURE__*/function () {
  function Filter(options) {
    Object(classCallCheck["a" /* default */])(this, Filter);

    this.filters = [];
    this.filterKeys = [];

    if (options) {
      if (Array.isArray(options)) {
        for (var i = 0; i < options.length; i++) {
          this.addFilter(options[i]);
        }
      } else {
        this.addFilter(options);
      }
    }
  }

  Object(createClass["a" /* default */])(Filter, [{
    key: "addFilter",
    value: function addFilter(filter) {
      var filterKey = filter;
      filter = this.createFilter(filter);

      if (filter) {
        this.filters.push(filter);
        this.filterKeys.push(filterKey);
      }

      return filter;
    }
  }, {
    key: "addOrFilters",
    value: function addOrFilters() {
      var params = new Array(arguments.length);

      for (var i = 0; i < arguments.length; i++) {
        params[i] = arguments[i];
      }

      var filter = this.createFilterSet(params, true);

      if (filter) {
        this.filters.push(filter);
        this.filterKeys.push(filter);
      }

      return filter;
    }
  }, {
    key: "addAndFilters",
    value: function addAndFilters() {
      var params = new Array(arguments.length);

      for (var i = 0; i < arguments.length; i++) {
        params[i] = arguments[i];
      }

      var filter = this.createFilterSet(params, false);

      if (filter) {
        this.filters.push(filter);
        this.filterKeys.push(filter);
      }

      return filter;
    }
  }, {
    key: "createFilterSet",
    value: function createFilterSet() {
      if (!arguments.length) {
        return null;
      }

      var paramList;
      var orFilter;
      var i;
      var filter;

      if (Array.isArray(arguments[0])) {
        paramList = arguments[0];
        orFilter = arguments.length > 1 ? arguments[1] : this.DEFAULT_FILTER_SET_MODE_OR;
      } else {
        var copyLength;
        orFilter = arguments[arguments.length - 1];

        if (typeof orFilter !== 'boolean') {
          orFilter = this.DEFAULT_FILTER_SET_MODE_OR;
          copyLength = arguments.length;
        } else {
          copyLength = arguments.length - 1;
        }

        paramList = new Array(copyLength);

        for (i = 0; i < copyLength; i++) {
          paramList[i] = arguments[i];
        }
      }

      var filterList = [];

      for (i = 0; i < paramList.length; i++) {
        filter = this.createFilter(paramList[i]);

        if (filter) {
          filterList.push(filter);
        }
      }

      if (filterList.length) {
        filter = orFilter ? function (args) {
          for (var f = 0; f < filterList.length; f++) {
            if (filterList[f](args)) {
              return true;
            }
          }

          return false;
        } : function (args) {
          for (var f = 0; f < filterList.length; f++) {
            if (!filterList[f](args)) {
              return false;
            }
          }
        };
        return filter;
      }

      return null;
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      var index = this.filters.indexOf(filter);

      if (index < 0) {
        index = this.filterKeys.indexOf(filter);
      }

      if (index > -1) {
        this.filters.splice(index, 1);
        this.filterKeys.splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "createFilter",
    value: function createFilter(filter) {
      if (filter !== undefined) {
        var self = this;

        if (typeof filter === 'string') {
          return filter && function () {
            var params = arguments[0];
            params.push(filter);
            var result = self.acceptString.apply(self, params);
            params.pop();
            return result;
          } || function () {
            return true;
          };
        }

        if (typeof filter === 'function') {
          return function () {
            return filter.apply(self, arguments[0]);
          };
        }

        if (filter[this.getObjectFilterMethodName()]) {
          // Filter is an object with the appropriate filter method
          var fct = filter[this.getObjectFilterMethodName()];
          return function () {
            return fct.apply(filter, arguments[0]);
          };
        }

        if (filter.or) {
          return this.createFilterSet(filter.or, true);
        }

        if (filter.and) {
          return this.createFilterSet(filter.and, false);
        }

        console.log('Cannot process filter:');
        console.log(filter);
      } else {
        console.log('Null filter specified');
      }

      return null;
    }
  }, {
    key: "accept",
    value: function accept() {
      var params = [];
      var i;

      for (i = 0; i < arguments.length; i++) {
        params.push(arguments[i]);
      }

      for (i = 0; i < this.filters.length; i++) {
        if (!this.filters[i].call(this, params)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      this.filters = [];
      this.filterKeys = [];
      var params = [];
      var i;

      for (i = 0; i < arguments.length; i++) {
        params.push(arguments[i]);
      }

      this.addFilter.apply(this, params);
    }
  }, {
    key: "stringMatches",
    value: function stringMatches(string, pattern) {
      return string.indexOf(pattern) > -1;
    }
  }, {
    key: "acceptString",
    value: function acceptString(object, str) {}
  }, {
    key: "getObjectFilterMethodName",
    value: function getObjectFilterMethodName() {
      return 'accept';
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.filters.length === 0;
    }
  }], [{
    key: "DEFAULT_FILTER_SET_MODE_OR",
    get: function get() {
      return false;
    }
  }]);

  return Filter;
}();

core["a" /* default */].components.Filter.impl = filter_Filter;
/* harmony default export */ var core_filter = (filter_Filter);
// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js + 1 modules
var assertThisInitialized = __webpack_require__(7);

// CONCATENATED MODULE: ./src/core/updates.js







function updates_createSuper(Derived) { var hasNativeReflectConstruct = updates_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function updates_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var updates_GanttUpdates = /*#__PURE__*/function (_Gantt$components$Gan) {
  Object(inherits["a" /* default */])(GanttUpdates, _Gantt$components$Gan);

  var _super = updates_createSuper(GanttUpdates);

  function GanttUpdates(parent, proto) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GanttUpdates);

    _this = _super.call(this, parent);
    _this.children = [];
    _this.updates = [];
    _this.updateLocks = 0;
    _this._reload = false;

    if (parent) {
      parent.children.push(Object(assertThisInitialized["a" /* default */])(_this));
    }

    if (proto) {
      core["a" /* default */].utils.mergeObjects(Object(assertThisInitialized["a" /* default */])(_this), proto);
    }

    _this._containsRowChanges = false;
    _this._tableYScrollChanged = false;
    return _this;
  }

  Object(createClass["a" /* default */])(GanttUpdates, [{
    key: "reload",
    value: function reload() {
      this._reload = true;
      this._containsRowChanges = true;
    }
  }, {
    key: "isReload",
    value: function isReload() {
      return this._reload || this.parent && this.parent.isReload();
    }
  }, {
    key: "rowsChanged",
    value: function rowsChanged(event, rows, rowRef) {
      this.addUpdate({
        type: event,
        rows: rows,
        rowRef: rowRef
      });
      this._containsRowChanges = true;
    }
  }, {
    key: "addUpdate",
    value: function addUpdate(update) {
      this.updates.push(update);
    }
  }, {
    key: "removeUpdate",
    value: function removeUpdate(update) {
      var index = this.updates.indexOf(update);

      if (index >= 0) {
        this.updates.splice(index, 1);
      }

      for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
        this.children[i].removeUpdate(update);
      }
    }
  }, {
    key: "tableScrollYChanged",
    value: function tableScrollYChanged() {
      this._tableYScrollChanged = true;
    }
  }, {
    key: "hasTableScrollYChanged",
    value: function hasTableScrollYChanged() {
      return this._tableYScrollChanged || this.parent && this.parent.hasTableScrollYChanged();
    }
  }, {
    key: "startUpdating",
    value: function startUpdating() {
      ++this.updateLocks;
    }
  }, {
    key: "stopUpdating",
    value: function stopUpdating() {
      if (--this.updateLocks === 0) {
        this.applyUpdates();
        return true;
      }

      return false;
    }
  }, {
    key: "applyUpdates",
    value: function applyUpdates() {
      this.doApplyUpdates();
      this.updates = [];
      this._reload = false;

      for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
        this.children[i].applyUpdates();
      }

      this._containsRowChanges = false;
    }
  }, {
    key: "containsRowChanges",
    value: function containsRowChanges() {
      return this._containsRowChanges || this.parent && this.parent.containsRowChanges();
    }
  }, {
    key: "applyReload",
    value: function applyReload() {}
  }, {
    key: "doApplyUpdates",
    value: function doApplyUpdates() {
      if (this._reload) {
        this.applyReload();
      } else {
        for (var iUpdate = 0, count = this.updates.length; iUpdate < count; iUpdate++) {
          this.applyUpdate(this.updates[iUpdate]);
        }
      }
    }
  }, {
    key: "applyUpdate",
    value: function applyUpdate(update) {}
  }, {
    key: "destroy",
    value: function destroy() {
      for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
        this.children[i].destroy();
      }

      this.children = null;
    }
  }]);

  return GanttUpdates;
}(core["a" /* default */].components.GanttUpdates);

core["a" /* default */].components.GanttUpdates.impl = updates_GanttUpdates;
// EXTERNAL MODULE: ./src/toolbar/toolbar.scss
var toolbar = __webpack_require__(29);

// CONCATENATED MODULE: ./src/toolbar/index.js
/* eslint-disable */








function toolbar_createSuper(Derived) { var hasNativeReflectConstruct = toolbar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function toolbar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var idCount = 1;

function makeId(prefix) {
  return prefix + idCount++;
}

var checkClass;

function Checkbox(gantt, config) {
  if (!checkClass) {
    checkClass = core["a" /* default */].components.CheckBox.impl || core["a" /* default */].components.CheckBox;
  }

  return new checkClass(gantt, config);
}

var buttonClass;

function Button(gantt, config) {
  if (!buttonClass) {
    buttonClass = core["a" /* default */].components.Button.impl || core["a" /* default */].components.Button;
  }

  return new buttonClass(gantt, config);
}

var selectClass;

function Select(gantt, config) {
  if (!selectClass) {
    selectClass = core["a" /* default */].components.DropDownList.impl || core["a" /* default */].components.DropDownList;
  }

  return new selectClass(gantt, config);
}

var toggleClass;

function Toggle(gantt, config) {
  if (!toggleClass) {
    toggleClass = core["a" /* default */].components.Toggle.impl || core["a" /* default */].components.Toggle;
  }

  return new toggleClass(gantt, config);
}

var ToolbarComponents = {
  title: {
    node: function node(parentElt, gantt) {
      var node = core["a" /* default */].components.Toolbar.createTitle(gantt.getTitle());
      gantt.on(core["a" /* default */].events.TITLE_CHANGED, function (event, title) {
        node.innerHTML = title;
      });
      return node;
    },
    justifyLeft: true
  },
  separator: {
    node: function node(parentElt) {
      var sep = document.createElement('div');
      sep.className = 'separator';
      return sep;
    }
  },
  whitespace: {
    node: function node(parentElt) {
      var sep = document.createElement('div');
      sep.className = 'white-space';
      return sep;
    }
  },
  search: {
    component: function component(gantt) {
      return new (core["a" /* default */].components.Input.impl || core["a" /* default */].components.Input)(gantt, {
        type: 'search',
        onchange: function onchange(text) {
          gantt.search(text, true, true);
        }
      });
    }
  },
  mini: {
    component: function component(gantt) {
      return new Toggle(gantt, {
        unselected: {
          /*text : Gantt.utils.getString('gantt.toolbar.minimize.text'),*/
          tooltip: core["a" /* default */].utils.getString('gantt.toolbar.mini.tooltip'),

          /*fontIcon : "fa fa-compress fa-lg"*/
          svg: {
            width: 20,
            height: 20,
            viewBox: '0 0 16 16',
            margin: '-6px 0 0 0 ',
            paths: ['M4 5h16v2H4zM4 9h16v2H4zM4 13h16v2H4zM4 17h16v2H4z']
          }
        },
        selected: {
          /*fontIcon : "fa fa-expand fa-lg",*/

          /*text : Gantt.utils.getString('gantt.toolbar.normal.text'),*/
          tooltip: core["a" /* default */].utils.getString('gantt.toolbar.mini.tooltip'),
          svg: {
            width: 20,
            height: 20,
            viewBox: '0 0 24 24',
            margin: '-6px 0 0 0 ',
            paths: ['M4 5h16v2H4zM4 9h16v2H4zM4 13h16v2H4zM4 17h16v2H4z']
          }
        },
        isSelected: function isSelected() {
          var ganttNode = gantt.getPanelNode();
          return core["a" /* default */].utils.hasClass(ganttNode, 'mini');
        },
        onclick: function onclick() {
          var ganttNode = gantt.getPanelNode();
          core["a" /* default */].utils.toggleClass(ganttNode, 'mini');
          gantt.draw();
        }
      });
    },
    update: function update(gantt, rows, comp) {
      var ganttNode = gantt.getPanelNode();
      comp.setChecked(core["a" /* default */].utils.hasClass(ganttNode, 'mini'));
    }
    /*    template : "<div class='rounded-check' style='white-space: nowrap;'> \
                        <input type='checkbox' value='None' name='check' id='{id}'/> \
                        <label for='{id}'>{label}</label> \
                     </div>",*/

  },
  fitToContent: {
    component: function component(gantt) {
      return Button(gantt, {
        /*fontIcon : 'fa fa-arrows fa-lg',*/
        // Edited with http://editor.method.ac/
        svg: {
          width: 20,
          height: 20,
          viewBox: '0 0 24 24',
          paths: ['m9,3c3.309,0 6,2.691 6,6s-2.691,6 -6,6s-6,-2.691 -6,-6s2.691,-6 6,-6m0,-2a8,8 0 1 0 0,16a8,8 0 0 0 0,-16zm6,17l3,-3l5,5l-3,3l-5,-5z', 'm5.067202,10.936161l1.794565,-1.677985l-1.794565,-1.677997l1.025685,-0.958955l2.820467,2.636953l-2.820467,2.637771', 'm13.211615,7.601521l-1.74349,1.712784l1.74349,1.712783l-0.996386,0.979422l-2.739875,-2.692204l2.739875,-2.69241']
        },
        tooltip: core["a" /* default */].utils.getString('gantt.toolbar.fit.tooltip'),
        onclick: function onclick() {
          gantt.fitToContent();
        }
      });
    }
  },
  refresh: {
    component: function component(gantt) {
      return Button(gantt, {
        fontIcon: 'fa fa-refresh fa-lg',

        /*svg : {
                    width: 24,
                    height: 40,
                    margin: '-6px 2px 0 0',
                    viewBox : "0 0 24 24",
                    paths: ["M2 13.987c0-4.97 4.032-8.994 9-8.994h7l-2.5-2.506L17 1l5 4.987-5 5-1.5-1.5 2.5-2.5h-6.864c-3.867 0-7.136 3.133-7.136 7S7.146 21 11.013 21a7.034 7.034 0 0 0 5.185-2.29l1.478 1.348A9.067 9.067 0 0 1 11 23c-4.97 0-9-4.043-9-9.013z"]
                },*/
        text: core["a" /* default */].utils.getString('gantt.toolbar.refresh.text'),
        tooltip: core["a" /* default */].utils.getString('gantt.toolbar.fit.tooltip'),
        onclick: function onclick() {
          gantt.draw();
        }
      });
    }
  },
  zoomIn: {
    component: function component(gantt) {
      return Button(gantt, {
        /*classes: 'zoom-in',*/

        /*fontIcon : 'fa fa-search-plus fa-lg',*/
        svg: {
          width: 20,
          height: 20,
          viewBox: '0 0 24 24',
          paths: ['M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM15 18l3-3 5 5-3 3z', 'M10 5H8v3H5v2h3v3h2v-3h3V8h-3z']
        },
        tooltip: core["a" /* default */].utils.getString('gantt.toolbar.zoomIn.tooltip'),
        onclick: function onclick() {
          gantt.zoomIn();
        }
      });
    }
  },
  zoomOut: {
    component: function component(gantt) {
      return Button(gantt, {
        /*classes: 'zoom-out',*/

        /*fontIcon : 'fa fa-search-minus fa-lg',*/
        svg: {
          width: 20,
          height: 20,

          /*margin: '-2px 0 0 0',*/
          viewBox: '0 0 24 24',
          paths: ['M9 3c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM14.999 18l3-3 5 5-3 3z', 'M9 3c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1z', 'M5 8h8v2H5z']
        },
        tooltip: core["a" /* default */].utils.getString('gantt.toolbar.zoomOut.tooltip'),
        onclick: function onclick() {
          gantt.zoomOut();
        }
      });
    }
  },
  toggleLoadChart: {
    component: function component(gantt) {
      return new Toggle(gantt, {
        unselected: {
          classes: 'toggle-load-chart',
          fontIcon: 'fa fa-bar-chart fa-lg',
          tooltip: core["a" /* default */].utils.getString('gantt.loadResourceChart.show.tooltip')
        },
        selected: {
          classes: 'toggle-load-chart selected',
          fontIcon: 'fa fa-bar-chart fa-lg',
          tooltip: core["a" /* default */].utils.getString('gantt.loadResourceChart.hide.tooltip')
        },
        isSelected: function isSelected() {
          return gantt.isLoadChartVisible();
        },
        onclick: function onclick() {
          gantt.toggleLoadChartVisible();
        }
      });
    }
  }
};

var toolbar_Toolbar = /*#__PURE__*/function (_Gantt$components$Too) {
  Object(inherits["a" /* default */])(Toolbar, _Gantt$components$Too);

  var _super = toolbar_createSuper(Toolbar);

  function Toolbar(gantt, node, config) {
    Object(classCallCheck["a" /* default */])(this, Toolbar);

    return _super.call(this, gantt, node, config);
  }

  Object(createClass["a" /* default */])(Toolbar, [{
    key: "setConfiguration",
    value: function setConfiguration(config, toolbarNode) {
      var _this = this;

      this.components = [];
      var leftBar = null;

      function append(comp, handler) {
        if (handler.justifyLeft) {
          if (!leftBar) {
            leftBar = document.createElement('div');
            leftBar.style.display = 'flex';
            leftBar.style.flexDirection = 'row';
            leftBar.style.alignItems = 'center';
            leftBar.style.marginRight = 'auto';
            leftBar.className = 'left-toolbar-body';
            toolbarNode.appendChild(leftBar);
          }

          leftBar.appendChild(comp.node);
        } else {
          toolbarNode.appendChild(comp.node);
        }
      }

      var _loop = function _loop(i, count, _cfgNode, _handler, node, _comp) {
        _cfgNode = config[i];

        if (core["a" /* default */].utils.isString(_cfgNode)) {
          _handler = ToolbarComponents[_cfgNode];
        } else {
          _handler = _cfgNode;
        }

        if (!_handler.node) {
          if (_handler.component) {
            _comp = _handler.component(_this.gantt, toolbarNode);

            if (_comp.node && !_comp.node.parentNode) {
              append(_comp, _handler);
            }
          } else if (_handler.template) {
            _comp = {
              id: _handler.id !== undefined ? core["a" /* default */].utils.isFunction(_handler.id) ? _handler.id(_handler) : _handler.id : makeId(core["a" /* default */].utils.isString(_cfgNode) ? _cfgNode : 'toolbarComp')
            };
            _comp.node = document.createElement('div');
            var tpl = core["a" /* default */].utils.formatString(_handler.template, _comp);
            core["a" /* default */].utils.html(_comp.node, tpl);
            append(_comp, _handler);
          } else if (_handler.type) {
            if (_handler.type === 'button') {
              _comp = Button(_this.gantt, _handler);
            } else if (_handler.type === 'checkbox') {
              _comp = Checkbox(_this.gantt, _handler);
            } else if (_handler.type === 'select') {
              _comp = Select(_this.gantt, _handler);
            } else if (_handler.type === 'buttonGroup') {
              _comp = new (core["a" /* default */].components.ButtonGroup.impl || core["a" /* default */].components.ButtonGroup)(_this.gantt, _handler);
            } else if (_handler.type === 'separator') {
              _handler = ToolbarComponents.separator;
              _comp = {};
              _comp.node = _handler.node(toolbarNode, _this.gantt, _comp);
            } else {
              throw new Error('Unknown toolbar component type: ' + config.type);
            }

            if (_comp.node && !_comp.node.parentNode) {
              append(_comp, _handler);
            }
          } else {
            throw new Error('a node property must be specified in a toolbar element: ' + _cfgNode);
          }
        } else if (core["a" /* default */].utils.isString(_handler.node)) {
          _comp = {
            id: _handler.node,
            node: document.getElementById(_handler.node)
          };
        } else if (core["a" /* default */].utils.isFunction(_handler.node)) {
          _comp = {};
          _comp.node = _handler.node(toolbarNode, _this.gantt, _comp);
          append(_comp, _handler);
        } else {
          throw new Error('The node property of a toolbar element must be either a string ID or a function creating a Dom element');
        }

        if (_handler.id) {
          _comp.setId(_handler.id);
        }

        if (_handler.connect) {
          _handler.connect(_comp.node, _comp);
        }

        if (_handler.update) {
          _comp.update = function (gantt, rows) {
            _handler.update(gantt, rows, _comp);
          };
        }

        if (_cfgNode.id) _comp.id = _cfgNode.id;

        _this.components.push(_comp);

        cfgNode = _cfgNode;
        handler = _handler;
        comp = _comp;
      };

      for (var i = 0, count = config.length, cfgNode, handler, node, comp; i < count; i++) {
        _loop(i, count, cfgNode, handler, node, comp);
      }

      this.initTooltip();
    }
  }, {
    key: "onInitialized",
    value: function onInitialized() {
      this.components.forEach(function (c) {
        if (c.onInitialized) {
          c.onInitialized();
        }
      });
    }
  }, {
    key: "initTooltip",
    value: function initTooltip() {
      var tooltbar = this;

      function getTooltipNode(elt) {
        for (; elt && elt !== tooltbar.node; elt = elt.parentNode) {
          // Can be called with an elt outside the toolbar
          if (elt.dataset && elt.dataset.tooltip) {
            return elt;
          }
        }
      }

      this.gantt.tooltip.installTooltip({
        // The container that contains elements to display tooltip for.
        container: this.node,
        // The container inside which bounds the tooltip can be displayed
        getTooltipDisplayContainer: function getTooltipDisplayContainer() {
          return tooltbar.gantt.getBody();
        },
        // Returns an element in the node hierarchy for which a tooltip can be displayed
        getTooltipElement: function getTooltipElement(node) {
          return getTooltipNode(node);
        },
        renderTooltip: function renderTooltip(tooltipNode
        /* The element returned by getTooltipElement */
        , act
        /* data returned by getTooltipData for the specified tooltipElt */
        , tooltipCtnr
        /* The container of the tooltip to fill with info. */
        ) {
          tooltipCtnr.appendChild(document.createTextNode(tooltipNode.dataset.tooltip));
        }
      });
    }
  }, {
    key: "connect",
    value: function connect(gantt) {}
  }, {
    key: "ganttLoaded",
    value: function ganttLoaded(gantt, rows) {
      for (var i = 0, count = this.components.length, _comp2; i < count; ++i) {
        _comp2 = this.components[i];

        if (_comp2.update) {
          _comp2.update(gantt, rows);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Toolbar;
}(core["a" /* default */].components.Toolbar);

core["a" /* default */].components.Toolbar.impl = toolbar_Toolbar;
/*                    */

/* Toolbar components */

/*                    */

var toolbar_FlatCheckbox = /*#__PURE__*/function (_Gantt$components$Che) {
  Object(inherits["a" /* default */])(FlatCheckbox, _Gantt$components$Che);

  var _super2 = toolbar_createSuper(FlatCheckbox);

  function FlatCheckbox(gantt, config) {
    Object(classCallCheck["a" /* default */])(this, FlatCheckbox);

    return _super2.call(this, gantt, config);
  }

  Object(createClass["a" /* default */])(FlatCheckbox, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this2 = this;

      var btn = document.createElement('div');

      if (config.id) {
        btn.id = config.id;
      }

      btn.className = 'button g-hoverable g-selectable' + (config.classes ? ' ' + config.classes : '');

      if (config.icon) {
        var img = document.createElement('img');
        img.src = config.icon;
        img.alt = '';
        btn.appendChild(img);
      }

      if (config.fontIcon) {
        var fontIcon = document.createElement('i');
        fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
        btn.appendChild(fontIcon);
      }

      if (config.text) {
        btn.appendChild(document.createTextNode(config.text));
      }

      this.node = btn;

      btn.onclick = function (e) {
        core["a" /* default */].utils.toggleClass(btn, 'selected');

        if (config.onclick) {
          config.onclick(_this2.gantt);
        }
      };

      return btn;
    }
  }]);

  return FlatCheckbox;
}(core["a" /* default */].components.CheckBox);

core["a" /* default */].components.CheckBox.impl = toolbar_FlatCheckbox;
// EXTERNAL MODULE: ./src/core/tooltip.scss
var tooltip = __webpack_require__(30);

// CONCATENATED MODULE: ./src/core/tooltip.js






function tooltip_createSuper(Derived) { var hasNativeReflectConstruct = tooltip_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function tooltip_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ARROW_STYLE = 'gantt-tooltip-arrow';
var BOTTOM_ARROW_STYLE = 'bottom-arrow';
var TOP_ARROW_STYLE = 'top-arrow';

var tooltip_Tooltip = /*#__PURE__*/function (_Gantt$components$Too) {
  Object(inherits["a" /* default */])(Tooltip, _Gantt$components$Too);

  var _super = tooltip_createSuper(Tooltip);

  function Tooltip(options) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Tooltip);

    _this = _super.call(this, options);
    _this._tooltip = document.createElement('div');
    _this._tooltip.className = 'gantt-tooltip';
    _this._tooltip.style.position = 'fixed';
    _this._tooltip.style.visibility = 'hidden'; // Cannot have the arrow defined in CSS as the arrow position on the tooltip varies.

    _this._tooltipArrow = document.createElement('div');
    _this._tooltipArrow.style.position = 'absolute';
    _this._tooltipArrow.style.width = '0';
    _this._tooltipArrow.style.height = '0';
    _this._arrowHeight = 5;

    _this._tooltip.appendChild(_this._tooltipArrow);

    document.body.appendChild(_this._tooltip);
    core["a" /* default */].utils.addEventListener(_this._tooltip, 'mouseenter', function (evt) {
      if (_this._hideTimer !== undefined) {
        clearTimeout(_this._hideTimer);
        _this._hideTimer = null;
        _this._hidingElt = null;
      }
    }, true); // Capturing!

    core["a" /* default */].utils.addEventListener(_this._tooltip, 'mouseleave', function (evt) {
      if (evt.target === _this._tooltip) {
        _this.hideTooltip(300);
      }
    }, true); // Capturing!*/

    return _this;
  }

  Object(createClass["a" /* default */])(Tooltip, [{
    key: "showTooltip",
    value: function showTooltip(elt, ctx, cb) {
      var _this2 = this;

      if (elt === this._tooltipElt) return;

      if (this._hideTimer !== undefined) {
        clearTimeout(this._hideTimer);
        delete this._hideTimer;
        var hidingElt = this._hidingElt;
        this._hidingElt = null;

        if (hidingElt === elt) {
          return;
        }
      } // tooltip associated with same data is already showing.


      if (this._showTimer !== undefined) {
        if (this._tooltipElt === elt) {
          // tooltip associated with same data is about to show, do nothing
          return;
        }

        clearTimeout(this._showTimer);
        delete this._showTimer;
        this._tooltipElt = null;
      }

      this._tooltip.innerHTML = '';

      if (arguments.length === 2) {
        cb = ctx;
        ctx = null;
      }

      cb(this._tooltip);
      this._tooltip.style.visibility = 'hidden';
      this._tooltip.style.left = this._tooltip.style.top = 0; // If tooltip is a the right/bottom of the page, its processed sized can be cut, before display

      this._tooltip.style.maxHeight = 'none';
      var tooltipHeight = this._tooltip.offsetHeight + this._arrowHeight;
      var eltScreenPt = core["a" /* default */].utils.getScreenPoint(elt); // Process the limit bounds in which to display the tooltip

      var limits;

      if (ctx && ctx.limitElt) {
        var bounds = ctx.limitElt.getBoundingClientRect();
        var scrollLeft = core["a" /* default */].utils.getWindowScrollLeft();
        var scrollTop = core["a" /* default */].utils.getWindowScrollTop();
        limits = {
          x: Math.max(bounds.left + scrollLeft + (bounds.left < 0 ? bounds.lef : 0), 0),
          y: Math.max(bounds.top + scrollTop + (bounds.left < 0 ? bounds.lef : 0), 0)
        }; // limits = Gantt.utils.getScreenPoint(ctx.limitElt);

        limits.width = Math.min(document.documentElement.clientWidth, bounds.right + scrollLeft) - Math.max(bounds.left, 0);
        limits.height = Math.min(document.documentElement.clientHeight, bounds.bottom + scrollTop) - Math.max(bounds.top, 0);
      } else {
        limits = {
          x: 0,
          y: 0,
          width: document.body.offsetWidth,
          height: document.body.offsetHeight
        };
      } // Display the tooltip at the top or the bottom of the specified element?
      // Prefer top


      var topAvailHeight;
      var bottomAvailHeight;
      var arrowStyle;
      var arrowPos;

      if (eltScreenPt.y - tooltipHeight >= limits.y) {
        eltScreenPt.y -= tooltipHeight;
        this._tooltip.style.maxHeight = 'none';
        arrowStyle = BOTTOM_ARROW_STYLE;
      } // Otherwise, if displaying the tooltip at the bottom works, go for it
      else if (eltScreenPt.y + tooltipHeight + elt.offsetHeight <= limits.y + limits.height) {
          eltScreenPt.y += elt.offsetHeight + this._arrowHeight;
          this._tooltip.style.maxHeight = 'none';
          arrowStyle = TOP_ARROW_STYLE;
        } // Otherwise, display on top if more space available on top
        else if ((topAvailHeight = eltScreenPt.y - limits.y) > (bottomAvailHeight = limits.y + limits.height - eltScreenPt.y - elt.offsetHeight)) {
            eltScreenPt.y = limits.y;
            this._tooltip.style.maxHeight = "".concat(topAvailHeight - this._arrowHeight, "px");
            arrowStyle = BOTTOM_ARROW_STYLE;
          } // Display at the bottom
          else {
              eltScreenPt.y += elt.offsetHeight + this._arrowHeight;
              this._tooltip.style.maxHeight = "".concat(bottomAvailHeight - this._arrowHeight, "px");
              arrowStyle = TOP_ARROW_STYLE;
            } // Adjust horizontal position


      function adjustHorizontally(x, limitLeft, limitRight) {
        return Math.max(Math.min(x, limitRight), limitLeft);
      }

      var arrowMargin = 10; // Arrow cannot start at the left or right border of the tooltip because of the round border of the tooltip. Suggesting 10px as the minimum space from the tooltip border

      arrowPos = eltScreenPt.x + elt.offsetWidth / 2; // Ideal x screen position of the arrow

      if (limits.width <= this._tooltip.offsetWidth) {
        eltScreenPt.x = limits.x;
        this._tooltip.style.maxWidth = "".concat(limits.width, "px");
      } else {
        eltScreenPt.x = adjustHorizontally(eltScreenPt.x + elt.offsetWidth / 2 - this._tooltip.offsetWidth / 2, limits.x, limits.x + limits.width - this._tooltip.offsetWidth);
        this._tooltip.style.maxWidth = 'none';
      }

      arrowPos = adjustHorizontally(arrowPos - eltScreenPt.x, arrowMargin, this._tooltip.offsetWidth - arrowMargin);
      this.setArrowPosition(arrowStyle, arrowPos);

      this._tooltip.appendChild(this._tooltipArrow); // Previously removed with innerHTML = '';


      this._tooltip.style.top = "".concat(eltScreenPt.y, "px");
      this._tooltip.style.left = "".concat(eltScreenPt.x, "px");
      this._tooltipElt = elt;

      if (ctx && ctx.showDelay) {
        this._showTimer = setTimeout(function () {
          delete _this2._showTimer;
          _this2._tooltip.style.visibility = 'visible';
        }, ctx.showDelay);
      } else {
        this._tooltip.style.visibility = 'visible';
      }
    }
  }, {
    key: "setArrowPosition",
    value: function setArrowPosition(style, pos) {
      this._tooltipArrow.className = "".concat(ARROW_STYLE, " ").concat(style);

      if (style === TOP_ARROW_STYLE) {
        // this._tooltipArrow.style.top = 0;
        this._tooltipArrow.style.left = "".concat(pos, "px");
      } else if (style === BOTTOM_ARROW_STYLE) {
        // this._tooltipArrow.style.top = '100%';
        this._tooltipArrow.style.left = "".concat(pos, "px");
      }
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(millis, cb) {
      var _this3 = this;

      if (this._showTimer !== undefined) {
        clearTimeout(this._showTimer);
        this._tooltipElt = null;
        delete this._showTimer; // If about to show a tooltip, no tooltip to hide.

        return;
      } // If no tooltip shown, nothing to hide


      if (!this._tooltipElt) return;

      if (millis) {
        if (this._hideTimer) {
          return;
        }

        this._hideCB = cb;
        this._hidingElt = this._tooltipElt;
        this._hideTimer = setTimeout(function () {
          _this3._hideTimer = null;
          _this3._hidingElt = null;
          _this3._tooltipElt = null;

          if (_this3._hideCB) {
            _this3._hideCB();
          }

          _this3._hideCB = null;
          _this3._tooltip.style.display = 'none';
        }, millis);
      } else {
        if (cb) {
          cb();
        }

        this._tooltipElt = null;
        this._tooltip.style.display = 'none';
      }
    }
  }, {
    key: "installTooltip",
    value: function installTooltip(config) {
      var _this4 = this;

      var TOOLTIP_FADING_TIME = 1000;
      var TOOLTIP_SHOWING_DELAY = 800;
      core["a" /* default */].utils.addEventListener(config.container, 'mouseenter', function (evt) {
        // console.log('Enter ' + printElement(evt.target) + ', relatedTarget: ' + (evt.relatedTarget && printElement(evt.relatedTarget) || 'none'));
        var tooltipNode = config.getTooltipElement(evt.target);

        if (tooltipNode) {
          var tooltipData = config.getTooltipData && config.getTooltipData(tooltipNode);

          if (config.enteringTooltipElement && config.enteringTooltipElement(tooltipNode, tooltipData) === false) {
            // During a drag n drop for example.
            return;
          }

          var ctx = {
            limitElt: config.getTooltipDisplayContainer && config.getTooltipDisplayContainer() || document.body,
            showDelay: TOOLTIP_SHOWING_DELAY
          }; // console.log('   show tooltip: ' + tooltipNode);

          _this4.showTooltip(tooltipNode, ctx, function (parent) {
            config.renderTooltip(tooltipNode, tooltipData, parent);
          });
        } else {
          _this4.hideTooltip(TOOLTIP_FADING_TIME);
        }
      }, true);
      core["a" /* default */].utils.addEventListener(config.container, 'mouseleave', function (evt) {
        // console.log('Leave ' + printElement(evt.target) + ', relatedTarget: ' + (evt.relatedTarget && printElement(evt.relatedTarget) || 'none'));
        var tooltipNode = config.getTooltipElement(evt.target);

        if (tooltipNode) {
          if (_this4._tooltipElt === tooltipNode) {
            var tooltipData = config.getTooltipData && config.getTooltipData(tooltipNode);

            if (config.leavingTooltipElement && config.leavingTooltipElement(tooltipNode, tooltipData) === false) {
              // To leave displayed the tooltip after leaving the element we show the tooltip for.
              return;
            }

            if (evt.relatedTarget && config.getTooltipElement(evt.relatedTarget) === tooltipNode) {
              // If the element the mouse is moving in is still in the tooltip node, do nothing.
              return;
            }
          } // Otherwise hide the tooltip


          _this4.hideTooltip(TOOLTIP_FADING_TIME);
        }
      }, true);
    }
  }]);

  return Tooltip;
}(core["a" /* default */].components.Tooltip);

core["a" /* default */].components.Tooltip.impl = tooltip_Tooltip;

function printElement(elt) {
  return elt.tagName + (elt.id ? "#".concat(elt.id) : '') + (elt.className && elt.className.replace ? ".".concat(elt.className.replace(/ /g, '.')) : '');
}
// CONCATENATED MODULE: ./src/panel/layoutsynch.js






function layoutsynch_createSuper(Derived) { var hasNativeReflectConstruct = layoutsynch_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function layoutsynch_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



function sameBounds(rect1, rect2) {
  if (!rect1 || !rect2) {
    return !rect1 === !rect2;
  }

  return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
}

function layoutsynch_bounds(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    toString: function toString() {
      return "{ x = ".concat(this.x, ", y = ").concat(this.y, ", width = ").concat(this.width, ", height = ").concat(this.height, " }");
    }
  };
}

var layoutsynch_LayoutSynchronizer = /*#__PURE__*/function (_Gantt$components$Lay) {
  Object(inherits["a" /* default */])(LayoutSynchronizer, _Gantt$components$Lay);

  var _super = layoutsynch_createSuper(LayoutSynchronizer);

  function LayoutSynchronizer(config, proto) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LayoutSynchronizer);

    _this = _super.call(this, config, config);
    _this.timeTableBounds = null;
    return _this;
  }

  Object(createClass["a" /* default */])(LayoutSynchronizer, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      if (config) {
        core["a" /* default */].utils.mergeObjects(this, config);
      }
    }
  }, {
    key: "connect",
    value: function connect(gantt) {
      var _this2 = this;

      this.gantt = gantt;

      this.resizeHandler = function (e) {
        _this2.checkBounds();
      };

      gantt.on([core["a" /* default */].events.RESIZED, core["a" /* default */].events.SPLIT_RESIZED], this.resizeHandler);

      this.timeWindowChangeListener = function (e, start, end) {
        _this2.timeWindowChanged(start, end);
      };

      gantt.on(core["a" /* default */].events.TIME_WINDOW_CHANGED, this.timeWindowChangeListener);

      this.timeLineSizeListener = function (e, width, height) {
        _this2.timeLineSizeChanged(width, height);
      };

      gantt.on(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, this.timeLineSizeListener);

      this.timeLineInitializedListener = function (e) {
        _this2.timeLineInitialized();
      };

      gantt.on(core["a" /* default */].events.TIME_LINE_INIT, this.timeLineInitializedListener);

      this.timeLineScrollListener = function (e, x) {
        _this2.timeLineScrolled(x);
      };

      gantt.on(core["a" /* default */].events.TIME_LINE_SCROLLED, this.timeLineScrollListener);
    }
  }, {
    key: "convertBounds",
    value: function convertBounds(bounds, elt) {
      var parent = core["a" /* default */].utils.offsetParent(elt);
      var parentBounds = core["a" /* default */].utils.getScreenPoint(parent);
      parentBounds.x = bounds.x - parentBounds.x;
      parentBounds.y = bounds.y - parentBounds.y;
      parentBounds.width = bounds.width;
      parentBounds.height = bounds.height;
      return parentBounds;
    } //
    // Time line methods
    //

  }, {
    key: "getTimeLine",
    value: function getTimeLine() {
      return this.gantt.timeLine;
    }
  }, {
    key: "getTimeLineWidth",
    value: function getTimeLineWidth() {
      return this.gantt.timeLine.getWidth();
    }
  }, {
    key: "getTimeLineHeight",
    value: function getTimeLineHeight() {
      return this.gantt.timeLine.getTimeAxisHeight();
    }
  }, {
    key: "getTimeLineScrollLeft",
    value: function getTimeLineScrollLeft() {
      return this.gantt.timeTable.getScroller().scrollLeft;
    }
  }, {
    key: "getTimeAt",
    value: function getTimeAt(x) {
      return this.gantt.timeLine.getTimeAt(x);
    }
  }, {
    key: "timeLineInitialized",
    value: function timeLineInitialized() {}
  }, {
    key: "timeTableBoundsChanged",
    value: function timeTableBoundsChanged(bounds) {}
  }, {
    key: "timeWindowChanged",
    value: function timeWindowChanged(start, end) {}
  }, {
    key: "timeLineSizeChanged",
    value: function timeLineSizeChanged(width, height) {}
  }, {
    key: "timeLineScrolled",
    value: function timeLineScrolled(x) {}
  }, {
    key: "checkBounds",
    value: function checkBounds() {
      var newBounds = this.getScreenTimeTableScrollerBounds();

      if (newBounds) {
        if (!sameBounds(this.timeTableBounds, newBounds)) {
          this.timeTableBounds = newBounds;
          this.timeTableBoundsChanged(newBounds);
        }
      }
    }
  }, {
    key: "getScreenTimeTableScrollerBounds",
    value: function getScreenTimeTableScrollerBounds() {
      if (!this.gantt.timeTable) {
        // Called from first cycle of the Gantt initialization
        return null;
      }

      var timeTableScroller = this.gantt.timeTable.getScroller();
      var pt = core["a" /* default */].utils.getScreenPoint(timeTableScroller);
      return layoutsynch_bounds(pt.x, pt.y, this.gantt.timeTable.getVisibleWidth(), this.gantt.timeTable.getVisibleHeight());
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.gantt) {
        this.gantt.off([core["a" /* default */].events.RESIZED, core["a" /* default */].events.SPLIT_RESIZED], this.resizeHandler);
        this.gantt.off(core["a" /* default */].events.TIME_WINDOW_CHANGED, this.timeWindowChangeListener);
        this.gantt.off(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, this.timeLineSizeListener);
        this.gantt.off(core["a" /* default */].events.TIME_LINE_INIT, this.timeLineInitializedListener);
        this.gantt.off(core["a" /* default */].events.TIME_LINE_SCROLLED, this.timeLineScrollListener);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return LayoutSynchronizer;
}(core["a" /* default */].components.LayoutSynchronizer);


core["a" /* default */].components.LayoutSynchronizer.impl = layoutsynch_LayoutSynchronizer;
// EXTERNAL MODULE: ./src/panel/ganttpanel.scss
var ganttpanel = __webpack_require__(31);

// CONCATENATED MODULE: ./src/panel/ganttpanel.js






function ganttpanel_createSuper(Derived) { var hasNativeReflectConstruct = ganttpanel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function ganttpanel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











/**
 * Gantt panel is structured as follows:
 *
 * <pre>
 *   .gantt-panel
 *   ------------------------------------------------------------------------------------------------------------
 *   | Split pane                                                                                               |
 *   | -------------------------------------------------------------------------------------------------------- |
 *   | | .table-panel      | .time-panel                                                                      | |
 *   | | ----------------- | -------------------------------------------------------------------------------  | |
 *   | | | Table         | | | .time-line-scroller                            .vertical-scroller-filler     | | |
 *   | | | ------------- | | | --------------------------------------------   ----------------------------  | | |
 *   | | | | Header    | | | | | Time Line                                |   |                          |  | | |
 *   | | | ------------- | | | --------------------------------------------   ----------------------------  | | |
 *   | | |               | | |                                                                              | | |
 *   | | |               | | | .time-table-scroller                                                         | | |
 *   | | | ------------- | | | ---------------------------------------------------------------------------  | | |
 *   | | | | Body    ^ | | | | | Time Table                                                            ^^ | | | |
 *   | | | |         : | | | | |< .............. timeTableWidthTester ...................................>| | | |
 *   | | | |         : | | | | |                                                                       :: | | | |
 *   | | | |         : | | | | |                                                 timeTableHeightTester :: | | | |
 *   | | | |         : | | | | |                                                                       :: | | | |
 *   | | | |         : | | | | |                                                                       v: | | | |
 *   | | ------------:-- | | ---------------------------------------------------------------------------:-- | | |
 *   | --------------:----------------------------------------------------------------------------------:------ |
 *   ----------------:----------------------------------------------------------------------------------:--------
 *                   :                                                                                  :
 *                   : Matches height of .time-table-body                              .time-table-body :
 *                   v                                                                                  v
 * </pre>
 */

var ganttpanel_GanttPanel = /*#__PURE__*/function (_Gantt$components$Gan) {
  Object(inherits["a" /* default */])(GanttPanel, _Gantt$components$Gan);

  var _super = ganttpanel_createSuper(GanttPanel);

  function GanttPanel(node, config) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GanttPanel);

    _this = _super.call(this, node, config);

    _this.resizeHandler = function () {
      return _this.onResize();
    };

    _this.initPromise = core["a" /* default */].envReady().then(function () {
      return _this.setConfiguration(config);
    });
    return _this;
  }

  Object(createClass["a" /* default */])(GanttPanel, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this2 = this;

      if (this.splitPane) {
        this.destroy();
      }

      this.initializing = true;
      window.addEventListener('resize', this.resizeHandler);
      this.config = core["a" /* default */].utils.mergeObjects({}, core["a" /* default */].defaultConfiguration, config); // TODO

      this.rowHeight = this.config.rowHeight;
      this.zoomFactor = this.config.zoomFactor;

      if (this.tooltip && this.tooltip.destroy) {
        this.tooltip.destroy();
      }

      var TooltipClass = core["a" /* default */].components.Tooltip.impl || core["a" /* default */].components.Tooltip;
      this.tooltip = new TooltipClass(this.config.tooltip);

      if (this.config.title) {
        if (core["a" /* default */].utils.isFunction(this.config.title)) {
          this.title = this.config.title(this);
        } else {
          this.title = this.config.title;
        }
      } else this.title = null;

      var stringMatcher = core["a" /* default */].utils.stringMatches;
      var FilterClass = core["a" /* default */].components.Filter.impl || core["a" /* default */].components.Filter;
      this.rowFilter = core["a" /* default */].utils.mergeObjects(new FilterClass(this.config && this.config.rows && this.config.rows.filter), {
        stringMatches: function stringMatches(string, pattern) {
          return stringMatcher(string, pattern);
        },
        getObjectFilterMethodName: function getObjectFilterMethodName() {
          return 'acceptRow';
        },
        acceptString: function acceptString(row, columnData, rowIndex, text) {
          if (!text) {
            return true;
          }

          for (var col = 0; col < columnData.length; col++) {
            if (stringMatcher(columnData[col], text)) {
              return true;
            }
          }

          return false;
        }
      });
      this.activityFilter = core["a" /* default */].utils.mergeObjects(new FilterClass(this.config && this.config.tasks && this.config.tasks.filter), {
        stringMatches: function stringMatches(string, pattern) {
          return stringMatcher(string, pattern);
        },
        getObjectFilterMethodName: function getObjectFilterMethodName() {
          return 'acceptTask';
        },
        acceptString: function acceptString(activity, row, text) {
          var actName = activity.name;
          return !text || actName && stringMatcher(actName, text);
        }
      });

      if (this.config.table && this.config.table.hideEmptyRows) {
        this.setHideEmptyRows(true, true);
      }

      if (this.config.palette) {
        this.setPaletteConfiguration(this.config.palette);
      } else {
        this.palettes = {};
        this.defaultPalette = null;
      }

      var SelectionClass = core["a" /* default */].components.SelectionHandler.impl || core["a" /* default */].components.SelectionHandler;
      this.selectionHandler = new SelectionClass(this.config && this.config.selection, {
        setObjectSelected: function setObjectSelected(obj, selected) {
          if (selected) {
            obj.selected = true;
          } else {
            delete obj.selected;
          }
        }
      });
      var actType = this.selectionHandler.registerType({
        name: 'activity',
        accept: function accept(o) {
          return o.getObjectType() === core["a" /* default */].ObjectTypes.Activity;
        },
        clearSelectionMethod: 'clearActivitySelection',
        selectionChangedMethod: 'activitySelectionChanged',
        unselectionMethod: 'unselectActivities',
        selectionMethod: 'selectActivities'
      });
      var resType = this.selectionHandler.registerType({
        name: 'resource',
        accept: function accept(o) {
          return o.getObjectType() === core["a" /* default */].ObjectTypes.Resource;
        },
        clearSelectionMethod: 'clearResourceSelection',
        selectionChangedMethod: 'resourceSelectionChanged',
        unselectionMethod: 'unselectResources',
        selectionMethod: 'selectResources'
      });
      this.selectionHandler.registerType({
        name: 'constraint',
        accept: function accept(o) {
          return o.getObjectType() === core["a" /* default */].ObjectTypes.Constraint;
        },
        clearSelectionMethod: 'clearConstraintSelection',
        selectionChangedMethod: 'constraintSelectionChanged',
        unselectionMethod: 'unselectConstraints',
        selectionMethod: 'selectConstraints'
      });
      this.selectionHandler.registerType({
        name: 'reservation',
        accept: function accept(o) {
          return o.getObjectType() === core["a" /* default */].ObjectTypes.Reservation;
        },
        clearSelectionMethod: 'clearReservationSelection',
        selectionChangedMethod: 'reservationSelectionChanged',
        unselectionMethod: 'unselectReservations',
        selectionMethod: 'selectReservations'
      });
      var rowType = this.selectionHandler.registerType({
        name: 'row',
        clearSelectionMethod: 'clearRowSelection',
        selectionChangedMethod: 'rowSelectionChanged',
        unselectionMethod: 'unselectRows',
        selectionMethod: 'selectRows'
      });
      this.type = config && config.type || core["a" /* default */].type.SCHEDULE_CHART;
      var rc = this.isResourceGantt(); // Selection of objects that are rows for the Gantt chart (activities or resources) must generate row specific events

      var typeForRow = rc ? resType : actType;
      var defaultNotify = this.selectionHandler.notify;
      var handler = this.selectionHandler;

      this.selectionHandler.notify = function (type, event) {
        var args = new Array(arguments.length);

        for (var i = 0; i < arguments.length; i++) {
          args[i] = arguments[i];
        }

        defaultNotify.apply(handler, args);

        if (type === typeForRow) {
          args[0] = rowType;
          defaultNotify.apply(handler, args);
        }
      };

      var ErrorClass = core["a" /* default */].components.ErrorHandler.impl || core["a" /* default */].components.ErrorHandler;
      this.errorHandler = new ErrorClass(this.node, this.config && this.config.error);
      this.updates = new (core["a" /* default */].components.GanttUpdates.impl || core["a" /* default */].components.GanttUpdates)();
      var oldApplyUpdates = this.updates.applyUpdates;

      this.updates.applyUpdates = function () {
        var containsRowChanges = _this2.updates.containsRowChanges;
        oldApplyUpdates.call(_this2.updates);

        if (containsRowChanges) {
          // Time sheet scroller height depends on the height of the time sheet displays rows.
          // Call updateScrollerHeight without modifying the time sheet rows first has no effect
          _this2.updateScrollerHeight();
        }

        if (_this2.updates.hasTableScrollYChanged()) {
          var table = _this2.table && _this2.table.getScrollableTable();

          var scrollTop = table.scrollTop;

          _this2.timeTable.setScrollTop(scrollTop);
        }
      };

      this.model = null; // Create the Gantt

      try {
        this.create();
      } catch (err) {
        // Error already display in the Gantt
        return Promise.reject(err);
      }

      try {
        // Constructs the model, not loading it yet
        // Load data if specified in the configuration
        this.model = this.createModel(this.config.data || this.createDefaultModelConfig());
        this.initializing = false;
        this.triggerEvent(core["a" /* default */].events.RESIZED);
        return this.model && this.load() || Promise.resolve([]).then(function () {
          return _this2.updateScrollerHeight();
        });
      } catch (err) {
        this.errorHandler.addError(err, 'Error initializing the Gantt');
        return Promise.reject(err);
      }
    }
  }, {
    key: "createDefaultModelConfig",
    value: function createDefaultModelConfig(config) {
      return {
        resources: {
          data: []
        },
        activities: {
          data: []
        },
        reservations: {
          data: []
        }
      };
    }
  }, {
    key: "createModel",
    value: function createModel(config) {
      var _this3 = this;

      var ModelClass = core["a" /* default */].components.GanttModel.impl || core["a" /* default */].components.GanttModel;
      var model = new ModelClass(this, config);
      model.on(core["a" /* default */].events.TIME_WINDOW_CHANGED, function (event, wnd) {
        return _this3.setTimeWindow(wnd);
      });
      return model;
    }
  }, {
    key: "create",
    value: function create() {
      var _this4 = this;

      var getLoadConfig = function getLoadConfig(p) {
        var c = _this4.config.loadResourceChart;
        return core["a" /* default */].utils.isArray(c) ? c.length ? c[0][p] : undefined : c[p];
      };

      if (this.loadChartCtrl) {
        this.loadChartCtrl.destroy();
        delete this.loadChartCtrl;
      }

      var loadChartHidden = !this.config.loadResourceChart || !getLoadConfig('visible');
      this.loadChartCtrl = new loadchartctrl_LoadResourceChartCtrl(this, !loadChartHidden);
      this.contentElt = document.createElement('div');
      this.contentElt.className = 'gantt-panel docloud-gantt';

      if (this.config.loadResourceChart) {
        this.contentElt.className += ' gantt-load-resource-chart ' + (loadChartHidden ? LOAD_RESOURCE_CHART_CLOSED : LOAD_RESOURCE_CHART_OPENED);
      }

      this.contentElt.style.position = 'relative';
      this.contentElt.style.display = 'flex';
      this.contentElt.style.flexDirection = 'column';
      this.contentElt.style.height = '100%';
      this.toolbars = null;

      if (this.config.toolbar) {
        this.createToolbars(this.config.toolbar);
      } else {
        this.toolbarElt = null;
      }

      if (this.config.classes) {
        core["a" /* default */].utils.addClass(this.contentElt, this.config.classes);
      }

      if (this.config.header) {
        this.headerElt = this.createHeader(this.config.header);

        if (this.headerElt !== null) {
          this.contentElt.appendChild(this.headerElt);
        }
      } else {
        this.headerElt = null;
      }

      this.node.appendChild(this.contentElt);
      var bodyElt = this.body = document.createElement('div');
      bodyElt.className = 'gantt-body';
      bodyElt.style.position = 'relative'; // Position must be set for the child split pane to get its offsetTop relative to it and have the tooltips positioning work...

      bodyElt.style.flexGrow = 1;
      bodyElt.style.flexShrink = 1; // Impressive hack: the flex layout does not manage well resizing of components of height initially to zero!

      bodyElt.style.height = '10px';
      this.errorHandler.node = bodyElt;
      this.contentElt.appendChild(bodyElt); // Need to be added here for the split pane to be created in a element in the DOM

      var bodyCtnr;
      var SplitClass = core["a" /* default */].components.Split.impl || core["a" /* default */].components.Split;

      if (this.config.loadResourceChart) {
        this.legendConfig = {
          selector: function selector() {
            return _this4.loadChartCtrl.isVisible();
          },
          background: this.loadChartCtrl.getRowBackground.bind(this.loadChartCtrl)
        };
        var h = 150;
        var hConfig = getLoadConfig('height');

        if (hConfig) {
          if (core["a" /* default */].utils.isFunction(hConfig)) {
            h = hConfig();
          } else if (core["a" /* default */].utils.isString(hConfig)) {
            h = Number.parseInt(hConfig, 10);
          } else {
            h = hConfig;
          }
        }

        try {
          this.loadChartSplit = new SplitClass(bodyElt, core["a" /* default */].utils.mergeObjects({}, this.config && this.config.divider, {
            pos: -h,
            horizontal: false,
            fixedFirst: false,
            hideSecond: !this.loadChartCtrl.isVisible()
          }));

          this.loadChartSplit.onDividerDragEnd = function (e) {
            if (_this4.initPromise) {
              _this4.initPromise.then(function () {
                _this4.triggerEvent(core["a" /* default */].events.SPLIT_RESIZED);

                _this4.onResize();
              });
            }
          };
        } catch (err) {
          this.errorHandler.addError(err, 'Load split pane initialization error', this.node);
          throw new Error('Load split pane initialization error');
        }

        bodyCtnr = this.loadChartSplit.getLeftComponent();
      } else {
        bodyCtnr = bodyElt;
        this.legendConfig = undefined;
      }

      try {
        this.splitPane = new SplitClass(bodyCtnr, this.config && this.config.divider);

        this.splitPane.onresized = function (e) {
          _this4.triggerEvent(core["a" /* default */].events.SPLIT_RESIZED);
        };
      } catch (err) {
        this.errorHandler.addError(err, 'Split pane initialization error', this.node);
        throw new Error('Split pane initialization error');
      } // Initialize the load resource chart if any
      // Initialization prior to table and timetable so that selection listeners are set before selection
      // listeners of those two components.


      this.loadCharts = null;
      this.loadResPanel = null;

      if (this.config.loadResourceChart) {
        this.loadResPanel = this.createLoadResourceChart(this.config.loadResourceChart);

        if (this.loadResPanel) {
          // Both width and height to 100% for IE
          this.loadResPanel.style.width = '100%';
          this.loadResPanel.style.height = '100%';
          this.loadChartSplit.getRightComponent().appendChild(this.loadResPanel);
          this.loadChartSplit.rightComponentCreated();
        }
      } // Initialize table panel


      this.tablePanel = null;
      var leftComp = this.splitPane.getLeftComponent();
      leftComp.style.overflow = 'hidden';

      try {
        this.tablePanel = this.createTreeTable(leftComp); // A non-zero width component has been created in the left component part of the split pane, we can now
        // fix the split position

        this.splitPane.leftComponentCreated();
      } catch (err) {
        this.errorHandler.addError(err, 'Tree table initialization error', this.tablePanel || this.node);
        throw new Error('Table creation error');
      } // Initialize the time panel


      var rightPanel = this.splitPane.getRightComponent();
      rightPanel.style.overflow = 'hidden';

      try {
        this.createTimePanel(rightPanel);
      } catch (err) {
        this.errorHandler.addError(err, 'Error creating the time panel', rightPanel);
        throw new Error('Time panel creation error');
      }

      try {
        this.createTimeLine(this.timeLineScroller);
      } catch (err) {
        this.errorHandler.addError(err, 'Error create the time line', this.timeLineScroller);
        throw new Error('Time line creation error');
      }

      if (this.toolbars) {
        for (var i = 0; i < this.toolbars.length; i++) {
          this.toolbars[i].connect(this, this.toolbars[i].node);
        }
      }
    }
  }, {
    key: "load",
    value: function load(config) {
      var _this5 = this;

      if (config) {
        if (this.model && this.model.destroy) {
          this.model.destroy();
        }

        this.model = this.createModel(config);
      }

      this.timeLineInit = null; // Loading panel

      this.loadingPanel = null;
      var loadTimeout = setTimeout(function () {
        _this5.loadingPanel = _this5.createLoadingPanel(_this5.config);

        _this5.body.appendChild(_this5.loadingPanel);
      }, this.config.loadingPanelThresold);

      var stopLoading = function stopLoading() {
        if (!_this5.loadingPanel) {
          clearTimeout(loadTimeout);
        } else {
          _this5.body.removeChild(_this5.loadingPanel);
        }

        _this5.loading = false;
      };

      return this.model.load().then(function (rows) {
        var wnd = _this5.getTimeWindow();

        if (!wnd || !wnd.start) {
          if (!rows.length) {
            // Empty Gantt, this is ok
            var today = new Date().getTime();
            var day = 1000 * 3600 * 24;

            _this5.setTimeWindow({
              start: today - day * 2,
              end: today + day * 2
            });
          } else {
            stopLoading();
            return Promise.reject(core["a" /* default */].utils.getString('gantt.error.no-time-window-defined'));
          }
        }

        _this5.loading = true;

        _this5.startUpdating();

        _this5._resourceGantt = _this5.isResourceGantt();
        core["a" /* default */].utils.toggleClass(_this5.contentElt, 'schedule_chart', _this5._resourceGantt);
        core["a" /* default */].utils.toggleClass(_this5.contentElt, 'activity_chart', !_this5._resourceGantt);
        core["a" /* default */].utils.toggleClass(_this5.contentElt, 'constraints_chart', _this5.hasConstraints);
        return Promise.all([// Promise.all can be given non-promises as the parameter.
        // See example in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
        _this5.table.setRows(rows) || rows, _this5.timeLineInit || rows]).then(function () {
          stopLoading(); // After table is initialized and time line ready with accurate time window
          // We can update the time table

          _this5.triggerEvent(core["a" /* default */].events.DATA_LOADED, rows);

          _this5.timeTable.setConstraints(_this5.model.constraints);

          _this5.updates.timeTable.reload();

          _this5.stopUpdating();

          if (_this5.toobars) {
            _this5.toolbars.forEach(function (bar) {
              bar.ganttLoaded(_this5, rows);
            });
          }

          return rows;
        });
      }).catch(function (err) {
        stopLoading();

        _this5.errorHandler.addError(err, 'Loading error', _this5.tablePanel);

        return Promise.reject(err);
      });
    }
  }, {
    key: "isResourceGantt",
    value: function isResourceGantt() {
      return !this.type || this.type !== core["a" /* default */].type.ACTIVITY_CHART;
    }
  }, {
    key: "hasConstraints",
    value: function hasConstraints() {
      return this.model && this.model.constraints && this.model.constraints.length;
    }
  }, {
    key: "isFlat",
    value: function isFlat() {
      return !this.model || this.model.isFlat();
    }
  }, {
    key: "getTimeWindow",
    value: function getTimeWindow() {
      return this.timeWindow;
    }
  }, {
    key: "setTimeWindow",
    value: function setTimeWindow(_ref) {
      var _this6 = this;

      var start = _ref.start,
          end = _ref.end;

      if (end === 0) {
        throw new Error("Invalid time window + ".concat(JSON.stringify({
          start: start,
          end: end
        }), ", may not have been processed correctly"));
      }

      if (this.timeWindow && this.timeWindow.start === start && this.timeWindow.end === end) {
        return Promise.resolve(this.timeWindow);
      }

      this.timeWindow = {
        start: start,
        end: end
      };
      return this.timeLineInit = this.timeLine.setTimeWindow(start, end).then(function (_ref2) {
        var start = _ref2.start,
            end = _ref2.end;

        _this6.updateTableHeaderHeight();

        _this6.updateWidthFromTimeLine();

        _this6.scrollTimeTableToX(_this6.timeLine.getXFromMillis(_this6.timeLine.getHorizon().start));

        _this6.updateTimeLineHeight();

        _this6.triggerEvent(core["a" /* default */].events.TIME_WINDOW_CHANGED, start, end);
      });
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "initialized",
    value: function initialized() {
      return this.initPromise;
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "createTreeTable",
    value: function createTreeTable(ctnr) {
      var _this7 = this;

      // Initialize table panel
      var tablePanel = document.createElement('div');
      tablePanel.className = 'table-panel';
      tablePanel.style.position = 'relative';
      tablePanel.style.height = '100%';
      tablePanel.style.width = '100%';
      tablePanel.style.overflow = 'hidden'; // If not setting the min width, the table width would be zero while data being loaded and
      // the split pane would not able to set its split position.

      tablePanel.style.minWidth = '100px';
      var TreeTableClass = core["a" /* default */].components.TreeTable.impl || core["a" /* default */].components.TreeTable;
      var tableConfig = this.config.table;

      if (this.legendConfig || this.config.rows) {
        var rowsConfig = core["a" /* default */].utils.mergeObjects({}, this.legendConfig && {
          rows: {
            renderer: this.legendConfig
          }
        }, {
          rows: this.config.rows
        });
        tableConfig = core["a" /* default */].utils.mergeObjects(rowsConfig, tableConfig);
      }

      this.table = new TreeTableClass(this, tablePanel, tableConfig);
      this.table.setRowFilter(this.rowFilter);
      this.updates.table = this.table.createUpdates(this.updates);
      ctnr.appendChild(tablePanel);
      window.addWheelListener(tablePanel, function (evt) {
        var factor = evt.deltaMode === 1
        /** DOM_DELTA_LINE */
        ? 32 : 0.8; // necessary for FF !

        var delta = factor * evt.deltaY || -evt.wheelDelta || evt.detail;

        _this7.timeTable.scrollToY(_this7.timeTable.getScrollTop() + delta);

        if (evt.preventDefault) {
          evt.preventDefault();
        }
      });
      return tablePanel;
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "createTimePanel",
    value: function createTimePanel(ctnr) {
      var _this8 = this;

      this.timePanel = document.createElement('div');
      this.timePanel.className = 'time-panel'; // CSS layout

      this.timePanel.style.position = 'relative';
      this.timePanel.style.height = '100%'; // Create the time right panel

      var vScrollerFiller = document.createElement('div');
      vScrollerFiller.className = 'vertical-scroller-filler'; // CSS layout

      vScrollerFiller.style.position = 'absolute';
      vScrollerFiller.style.right = 0;
      vScrollerFiller.top = 0;
      this.timePanel.appendChild(vScrollerFiller);

      this.updateTimeLineRightMargin = function () {
        var rightMargin = _this8.timeTable.getRightMargin();

        _this8.timeLineScroller.style.paddingRight = rightMargin ? "".concat(rightMargin, "px") : '0';
        vScrollerFiller.style.width = _this8.timeLineScroller.style.paddingRight;
        vScrollerFiller.style.display = rightMargin ? 'block' : 'none';
      };

      this.updateTableHeaderHeight = function (force) {
        if (!_this8.initializing && _this8.timeLine) {
          // Timeline is created after first resize events are fired
          var h = _this8.timeLine.getTimeAxisHeight();

          if (force || _this8.headersHeight !== h) {
            _this8.headersHeight = h;

            if (!_this8.table) {
              console.log('no table');
            }

            _this8.table.setHeaderHeight(h);

            if (h) {
              _this8.timeTablePanel.style.top = vScrollerFiller.style.height = "".concat(h, "px");
            }
          }
        }
      };

      this.timeLineScroller = document.createElement('div');
      this.timeLineScroller.className = 'time-line-scroller';
      this.timeLineScroller.style.overflow = 'hidden';
      this.timeLineScroller.style.width = '100%';
      this.timeLineScroller.style.height = '100%';
      this.timePanel.appendChild(this.timeLineScroller);
      this.timeTablePanel = document.createElement('div');
      this.timeTablePanel.className = 'time-table'; // CSS layout

      this.timeTablePanel.style.position = 'absolute';
      this.timeTablePanel.style.left = '0';
      this.timeTablePanel.style.right = '0';
      this.timeTablePanel.style.bottom = '0';
      this.timePanel.appendChild(this.timeTablePanel);
      var TimeTableClass = core["a" /* default */].components.TimeTable.impl || core["a" /* default */].components.TimeTable;
      var timeTableConfig = this.config && this.config.timeTable;

      if (this.legendConfig || this.config.rows) {
        var rowsConfig = core["a" /* default */].utils.mergeObjects({}, this.legendConfig && {
          rows: {
            renderer: this.legendConfig
          }
        }, this.config.rows && {
          rows: this.config.rows
        });
        timeTableConfig = core["a" /* default */].utils.mergeObjects(rowsConfig, timeTableConfig);
      }

      this.timeTable = new TimeTableClass(this, this.timeTablePanel, timeTableConfig);
      this.updates.timeTable = this.timeTable.createUpdates(this.updates);
      this.attachTimeTableMouseWheel(this.timeTable.getScroller());
      this.timeTable.getScroller().addEventListener('scroll', function (e) {
        _this8.timeLineScroller.scrollLeft = e.target.scrollLeft;

        _this8.triggerEvent(core["a" /* default */].events.TIME_LINE_SCROLLED, e.target.scrollLeft);
      });
      ctnr.appendChild(this.timePanel);
      return this.timePanel;
    }
  }, {
    key: "drawTimeTable",
    value: function drawTimeTable(clear) {
      if (clear && this.table.deleteDrawCache) {
        this.table.deleteDrawCache();
      }

      this.timeTable.draw(clear);
    }
  }, {
    key: "createLoadingPanel",
    value: function createLoadingPanel(config) {
      var lp = document.createElement('div');
      lp.className = 'loading-panel';
      lp.style.position = 'absolute';
      lp.style.left = '0';
      lp.style.right = '0';
      lp.style.top = '0';
      lp.style.bottom = '0';
      lp.style.display = 'flex';
      lp.style.alignItems = 'center';
      lp.style.justifyContent = 'center';
      var loaderCtnr = document.createElement('div');
      loaderCtnr.style.position = 'absolute';
      loaderCtnr.style.left = '50%';
      loaderCtnr.style.top = '50%';
      loaderCtnr.style.transform = 'translate(-50%, -50%)';
      var loader = document.createElement('div');
      loader.className = 'loader';
      loaderCtnr.appendChild(loader);
      lp.appendChild(loaderCtnr);
      var label = document.createElement('div');
      label.className = 'label';
      label.appendChild(document.createTextNode(core["a" /* default */].utils.getString('gantt.loading')));
      lp.appendChild(label);
      return lp;
    }
  }, {
    key: "createLoadResourceChart",
    value: function createLoadResourceChart(config) {
      var _this9 = this;

      var loadChartNode;
      var chartPanel;
      (core["a" /* default */].utils.isArray(config) && config.length && core["a" /* default */].utils.isArray(config[0]) ? config : [config]).forEach(function (loadConfig) {
        // Construct the bar node
        if (!chartPanel) {
          chartPanel = document.createElement('div');
          chartPanel.className = 'load-resource-chart-panel';
          chartPanel.style.flexShrink = 0;
          chartPanel.style.position = 'relative'; // IE specific

          chartPanel.style.display = 'flex';
          chartPanel.style.flexDirection = 'columm';
        }

        loadChartNode = document.createElement('div');
        loadChartNode.className = 'load-resource-chart';
        chartPanel.appendChild(loadChartNode);

        if (!_this9.loadCharts) {
          _this9.loadCharts = [];
        }

        var loadChart = new (core["a" /* default */].components.LoadResourceChart.impl || core["a" /* default */].components.LoadResourceChart)(_this9, loadChartNode, core["a" /* default */].utils.mergeObjects({}, loadConfig, {
          height: ''
        }));

        _this9.loadChartCtrl.addLoadResourceChart(loadChart);

        loadChart.node.style.flex = '1 1';

        _this9.loadCharts.push(loadChart);

        window.addWheelListener(loadChart.getScroller(), function (evt) {
          evt.preventDefault();
        });
      });
      return chartPanel;
    }
  }, {
    key: "toggleLoadChartVisible",
    value: function toggleLoadChartVisible() {
      this.setLoadChartVisible(!this.isLoadChartVisible());
    }
  }, {
    key: "setLoadChartVisible",
    value: function setLoadChartVisible(visible) {
      this.loadChartHidden = !visible;
      this.loadChartSplit.setRightComponentVisible(visible);
      core["a" /* default */].utils.toggleClass(this.contentElt, LOAD_RESOURCE_CHART_OPENED, visible);
      core["a" /* default */].utils.toggleClass(this.contentElt, LOAD_RESOURCE_CHART_CLOSED, !visible);
      this.loadChartCtrl.setVisible(visible);
      this.onResize();
    }
  }, {
    key: "isLoadChartVisible",
    value: function isLoadChartVisible() {
      return this.loadChartCtrl.isVisible();
    }
  }, {
    key: "getPanelNode",
    value: function getPanelNode() {
      return this.contentElt;
    }
  }, {
    key: "updateTimeLineHeight",
    value: function updateTimeLineHeight() {
      var bottomMargin = this.timeTable.getBottomMargin();
      this.timeLineScroller.style.paddingBottom = bottomMargin ? "".concat(bottomMargin, "px") : '0';
    }
  }, {
    key: "attachTimeTableMouseWheel",
    value: function attachTimeTableMouseWheel(scroller) {
      var _this10 = this;

      window.addWheelListener(scroller, function (evt) {
        if (evt.ctrlKey && evt.deltaY !== 0) {
          if (evt.deltaY < 0) {
            _this10.zoomIn(evt);
          } else {
            _this10.zoomOut(evt);
          }

          evt.preventDefault();
        }
      });
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "createTimeLine",
    value: function createTimeLine(timeLineCtnr) {
      var _this11 = this;

      var TimeLineClass = core["a" /* default */].components.TimeLine.impl || core["a" /* default */].components.TimeLine;
      this.timeLine = new TimeLineClass(this, timeLineCtnr, this.config);
      this.timeLine.on([core["a" /* default */].events.TIME_LINE_RANGE_CHANGE, core["a" /* default */].events.TIME_LINE_RANGE_CHANGED, core["a" /* default */].events.TIME_LINE_PAN_MOVED], function () {
        _this11.updateTableHeaderHeight();

        _this11.updateWidthFromTimeLine();

        _this11.drawTimeTable(true);
      });
      this.timeLine.on(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, function (e, w, h) {
        _this11.updateWidthFromTimeLine();

        _this11.drawTimeTable(true);

        _this11.triggerEvent(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, w, h);
      });
      this.timeLine.on(core["a" /* default */].events.TIME_LINE_INIT, function (e) {
        _this11.triggerEvent(core["a" /* default */].events.TIME_LINE_INIT);
      });
      return this.timeLine;
    }
  }, {
    key: "createToolbars",
    value: function createToolbars(config) {
      var _this12 = this;

      this.toolbars = [];
      var ToolbarClass = core["a" /* default */].components.Toolbar.impl || core["a" /* default */].components.Toolbar;
      var toolbarNode;
      this.toolbarElt = null;
      (core["a" /* default */].utils.isArray(config) && config.length && core["a" /* default */].utils.isArray(config[0]) ? config : [config]).forEach(function (barConfig) {
        if (barConfig.node) {
          if (core["a" /* default */].utils.isString(barConfig.node)) {
            toolbarNode = document.getElementById(barConfig.node);
          } else if (core["a" /* default */].utils.isDomElement(node)) {
            toolbarNode = node;
          } else if (core["a" /* default */].utils.isFunction(barConfig.node)) {
            toolbarNode = barConfig.node(_this12);
          } else {
            throw new Error('The toolbar.node must be a string(Dom element ID) or a Dom element or a function returning a Dom element');
          }

          barConfig = barConfig.components;
        } else {
          // Construct the bar node
          if (!_this12.toolbarElt) {
            _this12.toolbarElt = document.createElement('div');
            _this12.toolbarElt.className = 'gantt-toolbars';
            _this12.toolbarElt.style.flexShrink = 0;
          }

          toolbarNode = document.createElement('div');
          toolbarNode.className = 'gantt-toolbar';

          _this12.toolbarElt.appendChild(toolbarNode);
        }

        _this12.toolbars.push(new ToolbarClass(_this12, toolbarNode, barConfig));
      });

      if (this.toolbarElt) {
        this.contentElt.appendChild(this.toolbarElt);
      } // Wait for all toolbar components to be created before triggering onInitialized as components can refer to each others


      this.toolbars.forEach(function (t) {
        t.onInitialized();
      });
      return this.toolbarElt;
    }
  }, {
    key: "createHeader",
    value: function createHeader(config) {
      var header = document.createElement('div');
      header.className = 'gantt-header';

      if (core["a" /* default */].utils.isString(config)) {
        header.appendChild(document.createTextNode(config));
      } else if (core["a" /* default */].utils.isFunction(config)) {
        var _node = config(this);

        if (_node) {
          header.appendChild(_node);
        }
      }

      return header;
    }
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      return this.table.getRowCount();
    }
  }, {
    key: "getRow",
    value: function getRow(param) {
      return this.table.getRow(param);
    }
  }, {
    key: "getRows",
    value: function getRows(selector) {
      return this.table.getRows(selector);
    }
  }, {
    key: "getVisibleRows",
    value: function getVisibleRows() {
      return this.table.getVisibleRows();
    }
  }, {
    key: "getVisibleHeight",
    value: function getVisibleHeight() {
      return this.timeTable.getVisibleHeight();
    }
  }, {
    key: "ensureRowVisible",
    value: function ensureRowVisible(param) {
      var row = this.table.getRow(param);

      if (!row) {
        throw new Error("Cannot find row for ".concat(param));
      }

      if (this.table.isRowFiltered(row)) {
        throw new Error("Cannot show the filtered row: ".concat(param));
      }

      this.table.expandParents(row);
      this.timeTable.scrollToRow(row);
    }
  }, {
    key: "isRowVisible",
    value: function isRowVisible(param) {
      return this.table.isRowVisible(param);
    }
  }, {
    key: "getFirstVisibleRow",
    value: function getFirstVisibleRow() {
      return this.table.getFirstVisibleRow();
    }
  }, {
    key: "setFirstVisibleRow",
    value: function setFirstVisibleRow(param) {
      this.timeTable.setFirstVisibleRow(this.getRow(param));
    }
  }, {
    key: "isRowFiltered",
    value: function isRowFiltered(param) {
      return this.table.isRowFiltered(param);
    }
  }, {
    key: "toggleCollapseRow",
    value: function toggleCollapseRow(param, collapse) {
      this.table.toggleCollapseRow(this.getRow(param), collapse);
    }
  }, {
    key: "scrollToY",
    value: function scrollToY(y) {
      this.timeTable.scrollToY(y);
    }
  }, {
    key: "getRowHeight",
    value: function getRowHeight(row) {
      row = this.getRow(row);
      return row && (row.activityRow ? row.activityRow.height : row.tr.offsetHeight);
    }
  }, {
    key: "draw",
    value: function draw(forceTableRedraw) {
      if (this.timeLine) {
        this.timeLine.draw(true);

        if (this.table.deleteDrawCache) {
          this.table.deleteDrawCache();
        }

        this.table.draw(forceTableRedraw);
        this.timeTable.draw();
        this.updateScrollerHeight();
      }
    }
  }, {
    key: "drawRows",
    value: function drawRows(selector) {
      var rows = this.getRows(selector);
      this.table.drawRows(rows);
      this.timeTable.drawRows(rows);
    }
  }, {
    key: "updateScrollerHeight",
    value: function updateScrollerHeight() {
      this.timeTable.setBodyHeight(this.loadOnDemand ? this.table.getRowCount() * this.getRowHeight() : this.table.getHeight());
      this.updateTimeLineRightMargin();
    }
  }, {
    key: "getRowActivities",
    value: function getRowActivities(row) {
      row = this.getRow(row);
      return row && row.activities || [];
    }
  }, {
    key: "getActivity",
    value: function getActivity(param, row) {
      if (row) {
        var acts = this.getRowActivities(row);

        if (core["a" /* default */].utils.isString(param)) {
          for (var i = 0, count = acts.length; i < count; ++i) {
            if (acts[i].id === param) {
              return acts[i];
            }
          }

          return undefined;
        }

        if (core["a" /* default */].utils.isInteger(param)) {
          return acts[param];
        }

        for (var _i = 0, _count = acts.length; _i < _count; ++_i) {
          if (acts[_i].getData() === param) {
            return acts[_i];
          }
        }
      } else {
        return this.model.getActivity(param);
      }
    }
  }, {
    key: "getActivityNode",
    value: function getActivityNode(param, res) {
      var activity = this.getActivity(param, res);
      return activity && activity.node;
    }
  }, {
    key: "getToolbarComponent",
    value: function getToolbarComponent(id) {
      for (var i = 0; i < this.toolbars.length; i++) {
        for (var j = 0; j < this.toolbars[i].components.length; j++) {
          var c = this.toolbars[i].components[j];

          if (c && id === c.id) {
            return c;
          }
        }
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (this.timeLine && this.timeLine.onResize) {
        this.timeLine.onResize();
      }

      if (this.updateTimeLineRightMargin) {
        this.updateTimeLineRightMargin();
      }

      if (this.table && this.table.onResize) {
        this.table.onResize();
      }

      if (this.updateTableHeaderHeight && this.timeLine) {
        this.updateTableHeaderHeight(true);
      }

      if (this.table) {
        this.triggerEvent(core["a" /* default */].events.RESIZED);
      }

      if (this.timeTable && this.timeTable.onResize) {
        this.timeTable.onResize();
      }

      if (this.timeTable) {
        this.updateScrollerHeight();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      core["a" /* default */].plugins.call('destroy', this);

      if (this.errorHandler && this.errorHandler.destroy) {
        this.errorHandler.destroy();
      }

      if (this.splitPane && this.splitPane.destroy) {
        this.splitPane.destroy();
      }

      if (this.table && this.table.destroy) {
        this.table.destroy();
      }

      if (this.model && this.model.destroy) {
        this.model.destroy();
      }

      if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler);
        this.resizeHandler = null;
      }

      if (this.updates) {
        this.updates.destroy();
      }

      if (this.toolbars) {
        this.toolbars.forEach(function (bar) {
          bar.destroy();
        });
        this.toobars = null;
      }

      while (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
      }

      this.contentElt = null;
      this.table = null;
      this.body = null;
    }
  }, {
    key: "disconnect",
    value: function disconnect() {}
    /*             */

    /*     Rows    */

    /*             */

  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deselectAll) {
      if (typeof row === 'string') {
        row = this.table.getRow(row);
      }

      highlight = highlight === undefined || highlight;
      this.table.highlightRow(row, highlight, deselectAll);
      this.timeTable.highlightRow(row, highlight, deselectAll);
    }
    /*                */

    /*   Selection    */

    /*                */

  }, {
    key: "selection",
    get: function get() {
      return this.selectionHandler;
    },
    set: function set(sel) {
      var currentSel = this.selectionHandler && this.selectionHandler.get();

      if (this.selectionHandler) {
        this.selectionHandler.destroy();
      }

      this.selectionHandler = sel;

      if (this.selectionHandler) {
        if (currentSel && currentSel.length) {
          this.selectionHandler.select(sel);
        }
      }
    }
    /*                         */

    /*   Layout synchronizer   */

    /*                         */

  }, {
    key: "synchLayout",
    value: function synchLayout(config) {
      var ls = new (core["a" /* default */].components.LayoutSynchronizer.impl || core["a" /* default */].components.LayoutSynchronizer)(config);
      ls.connect(this);
      return ls;
    }
    /*             */

    /*     Zoom    */

    /*             */

  }, {
    key: "resetZoom",
    value: function resetZoom() {
      this.timeLine.resetZoom();
      this.scrollTimeTableToX(this.timeLine.getXFromMillis(this.timeLine.getHorizon().start));
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(evt) {
      this.zoom(this.zoomFactor, evt);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(evt) {
      this.zoom(-this.zoomFactor, evt);
    }
  }, {
    key: "zoom",
    value: function zoom(zoomFactor, evt) {
      zoomFactor = this.timeLine.validateZoomFactor(zoomFactor);

      if (zoomFactor !== 0) {
        var visibleW = this.timeTable.getVisibleWidth(); // When zooming, we want to keep the same time coordinate under the mouse, if mousewheel event is provided as a parameter.

        var xRef = evt && this.getTimeTableCoordinates(evt.target, {
          x: evt.offsetX,
          y: evt.offsetY
        }).x || this.timeTable.getScrollLeft() + visibleW / 2;
        var timeRef = this.timeLine.getTimeAt(xRef);
        xRef -= this.timeTable.getScrollLeft();
        this.timeLine.zoom(zoomFactor);
        var newScrollLeft = this.timeLine.getXFromMillis(timeRef) - xRef;
        this.scrollTimeTableToX(newScrollLeft);
      }
    }
  }, {
    key: "fitToContent",
    value: function fitToContent() {
      var timeRange = this.timeTable.getDisplayedActivitiesTimeRange();
      this.timeLine.setVisibleTimeWindow(timeRange);
      this.scrollTimeTableToX(this.timeLine.getXFromMillis(timeRange && timeRange.start || this.timeLine.getHorizon().start));
    }
  }, {
    key: "updateScrollFromTimeLine",
    value: function updateScrollFromTimeLine() {}
  }, {
    key: "updateWidthFromTimeLine",
    value: function updateWidthFromTimeLine() {
      this.timeTable.setBodyWidth(this.timeLine.getWidth());
    }
    /*                        */

    /*    Search and filter   */

    /*                        */

  }, {
    key: "addFilter",
    value: function addFilter(filter, rows, activities) {
      var result = {
        activities: activities && this.activityFilter.addFilter(filter)
      };
      var actFilter = result.activities;

      if (rows) {
        // noinspection JSUnusedLocalSymbols
        result.row = actFilter ? this.rowFilter.addOrFilters(filter, function (row, columnData, rowIndex) {
          var count = row.activities.length;
          var params = [null, row];

          for (var i = 0; i < count; i++) {
            params[0] = row.activities[i];

            if (actFilter(params)) {
              return true;
            }
          }

          return false;
        }) : this.rowFilter.addFilter(filter);
      }

      if (result.row || result.activities) {
        this.filterChanged();
        return result;
      }

      return null;
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(key, preventNotify) {
      var success = false;

      if (key) {
        if (key.row) {
          success = this.rowFilter.removeFilter(key.row);
        }

        if (key.activities) {
          success = this.activityFilter.removeFilter(key.activities);
        }

        if (this.searchFilter === key) {
          this.searchFilter = null;
        }
      }

      if (success && !preventNotify) {
        this.filterChanged();
      }

      return success;
    }
  }, {
    key: "search",
    value: function search(text, rows, activities) {
      if (this.searchFilter) {
        if (this.searchFilter.row) {
          this.rowFilter.removeFilter(this.searchFilter.row);
        }

        if (this.searchFilter.activities) {
          this.activityFilter.removeFilter(this.searchFilter.activities);
        }
      }

      if (text && (rows || activities)) {
        this.searchFilter = this.addFilter(text, rows, activities);
      } else {
        this.searchFilter = null;
        this.filterChanged();
      }
    }
  }, {
    key: "setHideEmptyRows",
    value: function setHideEmptyRows(hide, preventNotify) {
      var _this13 = this;

      if (hide && !this.hideEmptyRowsFilter || !hide && this.hideEmptyRowsFilter) {
        if (this.hideEmptyRowsFilter) {
          this.rowFilter.removeFilter(this.hideEmptyRowsFilter);
          this.hideEmptyRowsFilter = null;
        } else {
          // noinspection JSUnusedLocalSymbols
          this.hideEmptyRowsFilter = this.rowFilter.addFilter(function (row, columnData, rowIndex) {
            var activityFilter = _this13.activityFilter;
            activityFilter = activityFilter && !activityFilter.isEmpty() ? activityFilter : null;
            var count = row.activities && row.activities.length;

            if (!count || !activityFilter) {
              return count;
            }

            for (var i = 0; i < count; i++) {
              if (activityFilter.accept(row.activities[i], row)) {
                return true;
              }
            }

            return false;
          });
        }

        if (!preventNotify) {
          this.filterChanged();
        }

        return true;
      }

      return false;
    }
  }, {
    key: "filterChanged",
    value: function filterChanged() {
      if (this.table && this.timeTable) {
        this.table.filterChanged();
        var table = this.table && this.table.getScrollableTable();
        this.updateScrollerHeight();
        var scrollTop = table.scrollTop;
        this.timeTable.setScrollTop(scrollTop);
        this.drawTimeTable(true);
        this.triggerEvent(core["a" /* default */].events.ROWS_FILTERED);
      }
    }
    /*             */

    /*     Title   */

    /*             */

  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
      this.triggerEvent(core["a" /* default */].events.TITLE_CHANGED, title);
    }
    /*                */

    /*   Row colors   */

    /*                */

  }, {
    key: "setRowColor",
    value: function setRowColor(row, color) {
      row.color = color;

      if (this.table.setRowColor) {
        this.table.setRowColor(row, color);
      }

      if (this.timeTable.setRowColor) {
        this.timeTable.setRowColor(row, color);
      }
    }
    /*             */

    /*     Utils   */

    /*             */
    // noinspection JSUnusedGlobalSymbols

  }, {
    key: "centerTimeSheetOnX",
    value: function centerTimeSheetOnX(x) {
      this.scrollTimeTableToX(x - this.timeTable.getVisibleWidth() / 2);
    }
  }, {
    key: "scrollTimeTableToX",
    value: function scrollTimeTableToX(x) {
      x = Math.min(Math.max(Math.round(x), 0), this.timeTable.getBodyWidth() - this.timeTable.getVisibleWidth());
      this.timeTable.setScrollLeft(x);

      if (this.loadChartCtrl) {
        this.loadChartCtrl.timeTableXScrolled(x);
      }

      this.triggerEvent(core["a" /* default */].events.TIME_LINE_SCROLLED, x);
    }
  }, {
    key: "getTimeTableCoordinates",
    value: function getTimeTableCoordinates(target, position) {
      var _this14 = this;

      return core["a" /* default */].utils.walkToAncestor([this.timeTable.getScroller(), this.timeLineScroller], target, function (parent, node, position) {
        if (parent === _this14.timeLineScroller) {
          position.x += _this14.timeTable.getScrollLeft();
        } else if (parent === _this14.timeTable.getScroller()) {
          return position;
        }

        return {
          x: position.x + node.offsetLeft - parent.scrollLeft,
          y: position.y + node.offsetTop - parent.scrollTop
        };
      }, {
        x: position && position.x || 0,
        y: position && position.y || 0
      });
    }
  }, {
    key: "addTimeMarker",
    value: function addTimeMarker(id, time, classes) {
      this.timeLine.addTimeMarker(id, time, classes);
    }
  }, {
    key: "removeTimeMarker",
    value: function removeTimeMarker(id) {
      this.timeLine.removeTimeMarker(id);
    }
  }, {
    key: "setTimeLineItem",
    value: function setTimeLineItem(id, item) {
      this.timeLine.setTimeLineItem(id, item);
    }
  }, {
    key: "addTimeLineItem",
    value: function addTimeLineItem(id, item) {
      this.timeLine.addTimeLineItem(id, item);
    }
  }, {
    key: "removeTimeLineItem",
    value: function removeTimeLineItem(id) {
      this.timeLine.removeTimeLineItem(id);
    }
    /*             */

    /*    Errors   */

    /*             */

  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return this.errorHandler.hasErrors();
    }
    /*             */

    /*   Palettes  */

    /*             */

  }, {
    key: "setPaletteConfiguration",
    value: function setPaletteConfiguration(config) {
      if (core["a" /* default */].utils.isArray(config) || core["a" /* default */].utils.isFunction(config)) {
        this.palettes = null;
        this.defaultPalette = new (core["a" /* default */].components.Palette.impl || core["a" /* default */].components.Palette)(config);
      } else if (core["a" /* default */].utils.isString(config)) {
        this.palettes = null;
        this.defaultPalette = core["a" /* default */].defaultPalettes[config];

        if (!this.defaultPalette) {
          console.error("Palette [".concat(config, "] does not exist"));
        }
      } else {
        var paletteNames = Object.keys(config);
        this.palettes = {};
        this.defaultPalette = null;

        for (var i = 0, count = paletteNames.length; i < count; ++i) {
          this.palettes[paletteNames[i]] = new (core["a" /* default */].components.Palette.impl || core["a" /* default */].components.Palette)(config[paletteNames[i]]);
        }
      }
    }
  }, {
    key: "getPalette",
    value: function getPalette(name) {
      if (!name) {
        return this.defaultPalette || core["a" /* default */].defaultPaletteName && core["a" /* default */].defaultPalettes[core["a" /* default */].defaultPaletteName];
      }

      return this.palettes && this.palettes[name] || core["a" /* default */].defaultPalettes[name];
    }
    /*             */

    /*   Updates   */

    /*             */

  }, {
    key: "startUpdating",
    value: function startUpdating() {
      this.updates.startUpdating();
    }
  }, {
    key: "stopUpdating",
    value: function stopUpdating() {
      if (this.updates.stopUpdating()) {// nothing to do
      }
    }
  }, {
    key: "rowsChanged",
    value: function rowsChanged(event, rows) {
      this.updates.startUpdating();
      this.triggerEvent(event, rows);
      this.updates.rowsChanged(event, rows);
      this.updates.stopUpdating();
    }
  }]);

  return GanttPanel;
}(core["a" /* default */].components.GanttPanel);

core["a" /* default */].components.GanttPanel.impl = ganttpanel_GanttPanel;
/* harmony default export */ var panel_ganttpanel = (ganttpanel_GanttPanel);
// CONCATENATED MODULE: ./src/panel/index.js


// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/superPropBase/index.js
var superPropBase = __webpack_require__(20);

// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/get/_index.mjs

function _index_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _index_get = Reflect.get;
  } else {
    _index_get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _index_get(target, property, receiver || target);
}
// CONCATENATED MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/get.js

// CONCATENATED MODULE: ./src/core/dragdrop.js



var defaultConfig = {
  keySpeed: 10,
  showMoveOnInvalid: true,
  dragActivationThresoldWidth: 5,
  dragActivationThresoldHeight: 5
};

var dragdrop_DragDropHandler = /*#__PURE__*/function () {
  function DragDropHandler(container, config) {
    Object(classCallCheck["a" /* default */])(this, DragDropHandler);

    core["a" /* default */].utils.mergeObjects(this, defaultConfig, config);
    this.container = container;
    this.initialMouseX = undefined;
    this.initialMouseY = undefined;
    this.startX = undefined;
    this.startY = undefined;
    this.dXKeys = undefined;
    this.dYKeys = undefined;
    this.draggedObject = undefined;
    this.clickedObject = undefined;
    this.handlers = [];
    this.methodsToHitch = [];
    this.hitchedMethods = [];
  }

  Object(createClass["a" /* default */])(DragDropHandler, [{
    key: "addHandler",
    value: function addHandler(handler) {
      this.handlers.push(handler);
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      var index = this.handlers.indexOf(handler);

      if (index > -1) {
        this.handlers.splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this = this;

      element.onmousedown = function (e) {
        return _this.startDragMouse(e);
      };
    }
  }, {
    key: "startDragMouse",
    value: function startDragMouse(e) {
      var evt = e || window.event;

      if (evt.button === 2) {
        // Right button, we cancel the drag if any
        if (this.draggedObject) {
          this.cancel(evt);
        }
      } else if (!evt.button) {
        this.initialMouseX = evt.clientX;
        this.initialMouseY = evt.clientY;
        evt.target.blur();
        this.connectDragStarter(evt);
        return false;
      }
    }
  }, {
    key: "connectDragStarter",
    value: function connectDragStarter(evt) {
      // Drag will be triggered only if the mouse moves more than options.dragActivationThresoldWidth / options.dragActivationThresoldHeight
      this.initOffsetX = evt.offsetX;
      this.initOffsetY = evt.offsetY;
      this.clickedObject = evt.target;
      this.dXKeys = this.dYKeys = 0;
      this.addEventListener(document, 'mousemove', this.checkStartDrag);
      this.addEventListener(document, 'mouseup', this.cancelDragStarter);
      this.addEventListener(document, 'keydown', this.dragStarterKeys);
      this.addEventListener(document, 'keypress', this.dragStartSwitchKeyEvents);
    }
  }, {
    key: "checkStartDrag",
    value: function checkStartDrag(e) {
      var evt = e || window.event;
      var dX = evt.clientX - this.initialMouseX;
      var dY = evt.clientY - this.initialMouseY;

      if (Math.abs(dX) >= this.dragActivationThresoldWidth || Math.abs(dY) >= this.dragActivationThresoldHeight) {
        this.cancelDragStarter();

        if (this.startDrag()) {
          this.move(dX, dY);
        }
      }
    }
  }, {
    key: "dragStartSwitchKeyEvents",
    value: function dragStartSwitchKeyEvents() {
      // for Opera and Safari 1.3
      this.removeEventListener(document, 'keydown', this.dragStarterKeys);
      this.removeEventListener(document, 'keypress', this.switchKeyEvents);
      this.addEventListener(document, 'keypress', this.dragStarterKeys);
    }
  }, {
    key: "dragStarterKeys",
    value: function dragStarterKeys(e) {
      var evt = e || window.event;
      var key = evt.keyCode;

      switch (key) {
        case 37: // left

        case 63234:
          this.dXKeys -= this.keySpeed;
          break;

        case 38: // up

        case 63232:
          this.dYKeys -= this.keySpeed;
          break;

        case 39: // right

        case 63235:
          this.dXKeys += this.keySpeed;
          break;

        case 40: // down

        case 63233:
          this.dYKeys += this.keySpeed;
          break;

        case 13: // enter

        case 27:
          // escape
          if (evt.preventDefault) evt.preventDefault();
          this.cancelDragStarter(evt);
          return false;

        default:
          return true;
      }

      if (evt.preventDefault) evt.preventDefault();
      this.cancelDragStarter(); // Any movement key pressed triggers the start of the drag

      if (this.startDrag()) {
        this.move(this.dXKeys, this.dYKeys);
      }

      return false;
    }
  }, {
    key: "cancelDragStarter",
    value: function cancelDragStarter() {
      this.removeEventListener(document, 'mousemove', this.checkStartDrag);
      this.removeEventListener(document, 'mouseup', this.cancelDragStarter);
      this.removeEventListener(document, 'keypress', this.dragStarterKeys);
      this.removeEventListener(document, 'keypress', this.dragStartSwitchKeyEvents);
      this.removeEventListener(document, 'keydown', this.dragStarterKeys);
    }
  }, {
    key: "startDrag",
    value: function startDrag() {
      var obj = this.startMove(this.clickedObject, this.initOffsetX, this.initOffsetY);

      if (!obj) {
        return false;
      }

      if (this.draggedObject) {
        this.releaseElement();
      }

      this.addEventListener(document, 'mousemove', this.dragMouse);
      this.addEventListener(document, 'mouseup', this.dropped);
      this.addEventListener(document, 'keydown', this.dragKeys);
      this.addEventListener(document, 'keypress', this.switchKeyEvents);
      this.startX = obj.offsetLeft;
      this.startY = obj.offsetTop;
      this.initLeft = obj.style.left;
      this.initTop = obj.style.top;
      this.initParentNode = obj.parentNode;
      this.draggedObject = obj;
      this.invalid = false;
      obj.className += ' dragged';
      return true;
    }
  }, {
    key: "callHandlers",
    value: function callHandlers(meth, evt) {
      var result;
      var i;
      var handler;

      for (i = 0; i < this.handlers.length; i++) {
        handler = this.handlers[i];

        if (handler[meth]) {
          result = handler[meth](evt);

          if (result !== undefined && !result) {
            return false;
          }
        }
      }

      return result;
    }
  }, {
    key: "startMove",
    value: function startMove(obj, offsetX, offsetY) {
      var result = this.callHandlers('startMove', obj, offsetX, offsetY);
      return result === undefined ? obj : result;
    }
  }, {
    key: "dragMouse",
    value: function dragMouse(e) {
      var evt = e || window.event;
      var dX = evt.clientX - this.initialMouseX;
      var dY = evt.clientY - this.initialMouseY;
      this.move(dX, dY);
      return false;
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      var i;
      var handler;
      var result;
      var pos = {
        dx: dx,
        dy: dy,
        x: this.startX + dx,
        y: this.startY + dy
      }; // Check if move valid

      this.invalid = false;

      for (i = 0; i < this.handlers.length; i++) {
        handler = this.handlers[i];

        if (handler.move) {
          result = handler.move(pos);

          if (result !== undefined && !result) {
            this.invalid = true;
          }
        }
      }

      if (this.invalid && !this.showMoveOnInvalid) {
        return false;
      }

      this.moved(dx, dy);

      if (pos.x !== undefined) {
        this.draggedObject.style.left = "".concat(pos.x, "px");
      }

      if (pos.y !== undefined) {
        this.draggedObject.style.top = "".concat(pos.y, "px");
      }

      return true;
    }
  }, {
    key: "dragKeys",
    value: function dragKeys(e) {
      var evt = e || window.event;
      var key = evt.keyCode;

      switch (key) {
        case 37: // left

        case 63234:
          this.dXKeys -= this.keySpeed;
          break;

        case 38: // up

        case 63232:
          this.dYKeys -= this.keySpeed;
          break;

        case 39: // right

        case 63235:
          this.dXKeys += this.keySpeed;
          break;

        case 40: // down

        case 63233:
          this.dYKeys += this.keySpeed;
          break;

        case 13: // enter

        case 27:
          // escape
          this.cancel(evt);
          return false;

        default:
          return true;
      }

      this.move(this.dXKeys, this.dYKeys);
      if (evt.preventDefault) evt.preventDefault();
      return false;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(elt, event, method, capturing) {
      var _this2 = this;

      var index = this.methodsToHitch.indexOf(method);
      var hitched = index >= 0 ? this.hitchedMethods[index] : null;

      if (index < 0) {
        this.methodsToHitch.push(method);
        this.hitchedMethods.push(hitched = function hitched(e) {
          return method.call(_this2, e);
        });
      } else {
        hitched = this.hitchedMethods[index];
      }

      if (capturing) {
        core["a" /* default */].utils.addEventListener(elt, event, hitched, true);
      } else {
        core["a" /* default */].utils.addEventListener(elt, event, hitched);
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(elt, event, method) {
      var index = this.methodsToHitch.indexOf(method);

      if (index >= 0) {
        core["a" /* default */].utils.removeEventListener(elt, event, this.hitchedMethods[index]);
      }
    }
  }, {
    key: "switchKeyEvents",
    value: function switchKeyEvents() {
      // for Opera and Safari 1.3
      this.removeEventListener(document, 'keydown', this.dragKeys);
      this.removeEventListener(document, 'keypress', this.switchKeyEvents);
      this.addEventListener(document, 'keypress', this.dragKeys);
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "moved",
    value: function moved(dx, dy) {
      this.callHandlers('moved');
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      this.callHandlers('stopMove');
    }
  }, {
    key: "cancel",
    value: function cancel(evt) {
      this.restoreInitPosition();
      this.callHandlers('cancel');
      this.releaseElement(evt);
    }
  }, {
    key: "restoreInitPosition",
    value: function restoreInitPosition() {
      if (this.draggedObject) {
        if (this.callHandlers('restoreInitPosition') !== false) {
          this.draggedObject.style.left = this.initLeft;
          this.draggedObject.style.top = this.initTop;

          if (this.initParentNode !== this.draggedObject.parentNode) {
            this.initParentNode.appendChild(this.draggedObject);
          }
        }
      }
    }
  }, {
    key: "dropped",
    value: function dropped(e) {
      var evt = e || window.event;

      if (!evt.button && this.draggedObject) {
        // Drag and drop may have been cancelled through a right click or pressing the Esc key
        var dX = evt.clientX - this.initialMouseX;
        var dY = evt.clientY - this.initialMouseY;
        this.move(dX, dY, true);
        this.applyMove();
        this.releaseElement(evt);
      }
    }
  }, {
    key: "applyMove",
    value: function applyMove() {
      this.callHandlers('applyMove');
    }
  }, {
    key: "releaseElement",
    value: function releaseElement(evt) {
      this.stopDrag(evt);
      this.removeEventListener(document, 'mousemove', this.dragMouse);
      this.removeEventListener(document, 'mouseup', this.dropped);
      this.removeEventListener(document, 'keypress', this.dragKeys);
      this.removeEventListener(document, 'keypress', this.switchKeyEvents);
      this.removeEventListener(document, 'keydown', this.dragKeys);
      core["a" /* default */].utils.removeClass(this.draggedObject, 'dragged');
      this.draggedObject = null;
    }
  }]);

  return DragDropHandler;
}();


// CONCATENATED MODULE: ./src/timetable/css-classes.js
var TIME_MARKER_DRAG_ITEM = 'dragg-item';
var TIME_TABLE_ACTIVITY_CLASSNAME = 'time-table-activity';
var TIME_TABLE_ROW = 'time-table-row';
var UNSELECTABLE_CLASSNAME = 'g-unselectable';
var DEFAULT_ACTIVITY_CLASSNAME = "".concat(TIME_TABLE_ACTIVITY_CLASSNAME, " ").concat(UNSELECTABLE_CLASSNAME);
var MILESTONE_CLASSNAME = "".concat(DEFAULT_ACTIVITY_CLASSNAME, " milestone");
var PARENT_ACTIVITY_CLASSNAME = "".concat(DEFAULT_ACTIVITY_CLASSNAME, " parent-activity");
var HIGHLIGHT_CLASS = 'highlight';
var SELECTION_CLASS = 'selected';
var SELECT_CONTENT_CLASSNAME = 'select-content';
var DECORATION_INVALID_TYPE = 'invalid';
var DECORATION_INVALID_CLASS = 'time-table-invalid';
var DECORATION_BREAK_TYPE = 'break';
var DECORATION_BREAK_CLASS = 'time-table-break';
// CONCATENATED MODULE: ./src/timetable/activityrenderer.js


var ActivityRendererPrototype = {
  createShape: function createShape(activity) {
    var elt = document.createElement('div');
    var start = activity.start;
    var end = activity.end;

    if (end === start) {
      elt.className = MILESTONE_CLASSNAME;
      elt.style.border = 'none';
      elt.style.maxWidth = '0';
      var diamond = document.createElement('div');
      diamond.className = 'shape';
      diamond.style.position = 'absolute';
      diamond.style.top = '8px';
      diamond.style.left = '0';
      diamond.style.right = '0';
      diamond.style.bottom = '-8px';
      diamond.style.minWidth = '16px';
      diamond.style.maxHeight = '16px';
      diamond.style.background = 'inherit';
      elt.appendChild(diamond);
    } else if (activity.children && activity.children.length) {
      elt.className = PARENT_ACTIVITY_CLASSNAME;
      elt.style.display = 'block';
      elt.style.backgroundColor = 'transparent';
      var bar = document.createElement('div');
      bar.className = 'parent-activity-bar';
      bar.style.width = '100%';
      bar.style.height = '50%';
      elt.appendChild(bar);
      var triangleBar = document.createElement('div');
      var triangleWidth = 7;
      triangleBar.style.width = '100%';
      triangleBar.style.height = '50%';
      triangleBar.style.backgroundColor = 'transparent';
      var leftTriangle = document.createElement('div');
      leftTriangle.className = 'top-left-triangle activity-limit';
      leftTriangle.style.display = 'inline-block';
      leftTriangle.style.float = 'left';
      leftTriangle.style.width = '0';
      leftTriangle.style.height = '0';
      leftTriangle.style.borderTopStyle = 'solid';
      leftTriangle.style.borderTopWidth = "".concat(triangleWidth, "px");
      leftTriangle.style.borderRightStyle = 'solid';
      leftTriangle.style.borderRightWidth = "".concat(triangleWidth, "px");
      leftTriangle.style.borderRightColor = 'transparent';
      triangleBar.appendChild(leftTriangle);
      var rightTriangle = document.createElement('div');
      rightTriangle.className = 'top-right-triangle activity-limit';
      triangleBar.appendChild(rightTriangle);
      rightTriangle.style.display = 'inline-block';
      rightTriangle.style.float = 'right';
      rightTriangle.style.width = '0';
      rightTriangle.style.height = '0';
      rightTriangle.style.borderTopStyle = 'solid';
      rightTriangle.style.borderTopWidth = "".concat(triangleWidth, "px");
      rightTriangle.style.borderLeftStyle = 'solid';
      rightTriangle.style.borderLeftWidth = "".concat(triangleWidth, "px");
      rightTriangle.style.borderLeftColor = 'transparent';
      elt.appendChild(triangleBar);
    } else {
      elt.className = DEFAULT_ACTIVITY_CLASSNAME;
    }

    var selElt = document.createElement('div');
    selElt.className = SELECT_CONTENT_CLASSNAME;
    selElt.style.height = '100%';
    selElt.style.display = 'flex';
    selElt.style.justifyContent = 'space-between';
    selElt.style.alignItems = 'center';
    selElt.style.border = 'none';
    elt.appendChild(selElt);
    return elt;
  },
  drawRightContent: function drawRightContent(elt, icon, text, object) {
    var textCtnr = document.createElement('div');
    textCtnr.style.position = 'absolute';
    textCtnr.className = 'text-container right';
    textCtnr.style.left = '100%';
    textCtnr.style.top = '0';
    textCtnr.style.height = '100%';

    if (icon) {
      var img = document.createElement('img');
      img.className = 'image-content';
      img.src = icon;
      img.alt = '';
      textCtnr.appendChild(img);
    }

    elt.style.overflowX = 'visible';
    var t = document.createElement('span');
    t.className = 'text-content';
    t.innerHTML = text;
    textCtnr.appendChild(t);
    elt.appendChild(textCtnr);
    object.label = {
      getTextWidth: function getTextWidth() {
        return t.offsetWidth;
      },
      getTextHeight: function getTextHeight() {
        return t.offsetHeight;
      },
      move: function move(left, dist) {
        core["a" /* default */].utils.toggleClass(textCtnr, 'left', left);
        textCtnr.style.marginLeft = 0; // Default one is for margin on text without links

        if (left) {
          textCtnr.style.left = "".concat(-dist, "px");
          textCtnr.style.paddingLeft = 0;
        } else {
          textCtnr.style.left = '100%';
          textCtnr.style.paddingLeft = "".concat(dist, "px");
        }
      }
    };
    return textCtnr;
  },
  getText: function getText(activity) {
    return activity.name;
  },
  getTooltipProperties: function getTooltipProperties(act) {
    var props = [core["a" /* default */].utils.getString('gantt.start'), new Date(act.start).format(), core["a" /* default */].utils.getString('gantt.end'), new Date(act.end).format()];

    if (act.id !== undefined) {
      props.push(core["a" /* default */].utils.getString('gantt.id'));
      props.push(act.id);
    }

    return props;
  },
  processConfiguration: function processConfiguration(selector, config) {
    this.defaultProcessConfiguration(selector, config);

    if (config.rowHeight) {
      this.addRowHeightConfiguration(selector, config.rowHeight);
    }

    if (config.generateRowDecorations) {
      this.addGenerateRowDecorations(selector, config.generateRowDecorations);
    }

    if (config.generateDecorations) {
      this.addGenerateDecorations(selector, config.generateDecorations);
    }
  },
  initialized: function initialized(config) {
    var _this = this;

    var gantt = this.paletteHandler;
    this.defaultSetBackground = this.setBackground;
    this.drawDefaultContentSet = this.drawDefaultContent;

    this.ganttLoadListener = function (e) {
      if (gantt.isResourceGantt()) {
        _this.drawDefaultContent = _this.drawNoDisplayOverflowContent;
        _this.setBackground = _this.defaultSetBackground;
        _this.drawDefaultContent = _this.drawDefaultContentSet;
      } else {
        // TODO Don't put a setter in a get...
        _this.setBackground = function (shapeElt, bg) {
          if (core["a" /* default */].utils.hasClass('parent-activity')) {
            shapeElt.querySelectorAll('.activity-limit').forEach(function (elt) {
              elt.style.borderColor = bg;
            });
            shapeElt.querySelector('parent-activity-bar').style.backgroundColor = bg;
          } else {
            this.drawDefaultContentSet(shapeElt, bg);
          }
        };

        _this.drawDefaultContent = _this.drawRightContent;
      }
    };

    gantt.on(core["a" /* default */].events.DATA_LOADED, this.ganttLoadListener);
  },
  destroy: function destroy() {
    if (this.ganttLoadListener) {
      var gantt = this.paletteHandler;
      gantt.off(core["a" /* default */].events.DATA_LOADED, this.ganttLoadListener);
      this.ganttLoadListener = null;
    }
  },
  addRowHeightConfiguration: function addRowHeightConfiguration(selector, config) {
    var rowHeight;

    if (typeof config === 'function') {
      rowHeight = config;
    } else if (typeof config === 'string') {
      var getter = core["a" /* default */].utils.propertyEvaluator(config);

      if (getter) {
        rowHeight = function rowHeight(object, ctx) {
          return getter(object, ctx);
        };
      }
    } else {
      rowHeight = function rowHeight() {
        return config;
      };
    }

    if (rowHeight) {
      var oldRowHeight = this.rowHeight;

      this.rowHeight = function (object, ctx) {
        if (!selector || selector(object)) {
          return rowHeight(object, ctx);
        }

        return oldRowHeight && oldRowHeight(object, ctx);
      };
    }
  },
  //
  // Decoration management
  //
  addGenerateRowDecorations: function addGenerateRowDecorations(selector, config) {
    var generateRowDecorations;

    if (typeof config === 'function') {
      generateRowDecorations = config;
    } else if (typeof config === 'string') {
      var getter = core["a" /* default */].utils.propertyEvaluator(config);

      if (getter) {
        generateRowDecorations = function generateRowDecorations(row, start, end, ctx) {
          return getter(row, start, end, ctx);
        };
      }
    } else {
      throw new Error('generateRowDecorations must be a function or an accessor to a row method');
    }

    if (generateRowDecorations) {
      var oldGenerateRowDecorations = this.generateRowDecorations;

      this.generateRowDecorations = function (row, start, end, ctx) {
        var decorations = oldGenerateRowDecorations && oldGenerateRowDecorations(row, start, end, ctx) || null;

        if (!selector || selector(row)) {
          var newDecos = generateRowDecorations(row, start, end, ctx);

          if (newDecos && newDecos.length) {
            return !decorations || !decorations.length ? newDecos : decorations.concat(newDecos);
          }
        }

        return decorations;
      };
    }
  },
  addGenerateDecorations: function addGenerateDecorations(selector, config) {
    var generateDecorations;

    if (typeof config === 'function') {
      generateDecorations = config;
    } else {
      throw new Error('generateDecorations must be a function');
    }

    if (generateDecorations) {
      var oldGenerateDecorations = this.generateDecorations;

      this.generateDecorations = function (start, end, ctx) {
        var decorations = oldGenerateDecorations && oldGenerateDecorations(start, end, ctx) || null;

        if (!selector || selector(ctx)) {
          var newDecos = generateDecorations(start, end, ctx);

          if (newDecos && newDecos.length) {
            return !decorations || !decorations.length ? newDecos : decorations.concat(newDecos);
          }
        }

        return decorations;
      };
    }
  }
};
/* harmony default export */ var activityrenderer = (ActivityRendererPrototype);
// CONCATENATED MODULE: ./src/timetable/rowrenderer.js

var RowRendererPrototype = {
  createShape: function createShape(activity, parentElt) {
    return parentElt;
  }
};
/* harmony default export */ var rowrenderer = (RowRendererPrototype);
// CONCATENATED MODULE: ./src/timetable/activitylayout.js







function activitylayout_createSuper(Derived) { var hasNativeReflectConstruct = activitylayout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function activitylayout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var defaultOptions = {
  cascadeOffset: 5,
  topMargin: 1,
  bottomMargin: 1,
  subRowPadding: 1,
  constantRowHeight: false,
  compareBoundingBoxes: false,
  miniWidth: 4
};
var STRATEGY_LOGISTIC = 'logistic';
var STRATEGY_TILE = 'tile';
var STRATEGIES = {};
var MINI_ACTIVITY_CLASS = 'mini-activity';
var MILESTONE = 'milestone';

STRATEGIES[STRATEGY_LOGISTIC] = function (row) {
  // this is the activity layout calling this function
  activitylayout_ActivityLayout.sortTasksOnStart(row);
  var subRowsCount = activitylayout_ActivityLayout.computeSubRows(row);
  var offset;
  var actHeight = row.height - this.topMargin - this.bottomMargin - 1;

  if (subRowsCount > 1) {
    offset = this.cascadeOffset;
    actHeight = Math.max(actHeight - this.cascadeOffset * (subRowsCount - 1), 0);

    if (actHeight === 0) {
      offset = 0;
    }
  }

  var actCount = row.activities && row.activities.length || 0;

  for (var iAct = 0, act; iAct < actCount; ++iAct) {
    act = row.activities[iAct];

    if (act.node) {
      act.node.style.top = "".concat(this.topMargin + offset * act.subRowIndex, "px");
      act.node.style.height = actHeight;
    }
  }
};

STRATEGIES[STRATEGY_TILE] = function (row) {
  var rowHeight = row.tableRowHeight;
  var topMargin = this.topMargin;
  var bottomMargin = this.bottomMargin;
  var subRowHeight = rowHeight - topMargin - bottomMargin - 1;

  if (subRowHeight <= 0) {
    subRowHeight = 1;
    var availMargin = rowHeight - subRowHeight;
    topMargin = availMargin * topMargin / (topMargin + bottomMargin);
    bottomMargin = availMargin - topMargin;
  } // Compute the overlap, tiling, and number of subrows required to accommodate the
  // graphics. First, we associate each graphic with its the bounds in view coordinates.
  // Then we sort the array by start time or x position, depending on the overlap
  // detection strategy being used.


  var activitiyComparator = this.compareBoundingBoxes ? function (act1, act2) {
    return act1.left - act2.left;
  } : function (act1, act2) {
    return act1.start - act2.start;
  };
  row.activities.sort(activitiyComparator); // Finally, assign graphics to subrows, increasing the number of subrows as
  // necessary so that the graphics do not overlap.

  var subRows = this.setTaskSubRows(row); // For constant row height, we subdivide the row's current height into the required
  // number of subrows. For constant subrow height, we expand the row to accommodate the
  // required number of subrows

  var subRowMargin = this.subRowPadding;

  if (this.constantRowHeight) {
    if (subRowMargin * (subRows.length - 1) >= subRowHeight) {
      subRowMargin = subRowHeight / (subRows.length - 1);
    }

    subRowHeight = (subRowHeight - (subRows.length - 1) * subRowMargin) / subRows.length;
  } else {
    rowHeight = topMargin + bottomMargin + subRows.length * subRowHeight + (subRows.length - 1) * subRowMargin; // Set the row height so that each subrow has the chart's global row
    // height.

    row.setRowHeight(Math.round(rowHeight));
  } // Set the vertical bounds of the activities in each subrow.


  var top = topMargin;
  var subRowTasks;
  var task;

  for (var i = 0, iTask; i < subRows.length; i++) {
    subRowTasks = subRows[i];

    for (iTask = 0; iTask < subRowTasks.length; iTask++) {
      task = subRowTasks[iTask];
      task.node.style.top = "".concat(top, "px");
      task.node.style.height = "".concat(subRowHeight, "px");
    }

    top += subRowHeight + subRowMargin;
  }
};

var activitylayout_ActivityLayout = /*#__PURE__*/function (_Gantt$components$Act) {
  Object(inherits["a" /* default */])(ActivityLayout, _Gantt$components$Act);

  var _super = activitylayout_createSuper(ActivityLayout);

  function ActivityLayout(config, proto, ctx) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ActivityLayout);

    _this = _super.call(this, config);
    core["a" /* default */].utils.mergeObjects(Object(assertThisInitialized["a" /* default */])(_this), defaultOptions, config, proto);
    _this.ctx = ctx;

    if (_this.strategy) {
      if (typeof config.strategy === 'string') {
        _this.getLayoutStrategy = function () {
          return _this.strategy;
        };
      } else if (typeof _this.strategy === 'function') {
        _this.getLayoutStrategy = function () {
          return _this.strategy(_this.ctx);
        };
      }
    }

    return _this;
  }

  Object(createClass["a" /* default */])(ActivityLayout, [{
    key: "layout",
    value: function layout(row) {
      if (row.activities && row.activities.length) {
        var strategyKey = this.getLayoutStrategy();
        var vLayout;
        this.layoutHorizontally(row);

        if (strategyKey && (vLayout = STRATEGIES[strategyKey])) {
          vLayout.call(this, row);
        } else {
          var act;
          var elt;

          for (var iAct = 0; iAct < row.activities.length; iAct++) {
            act = row.activities[iAct];
            elt = act.node;

            if (elt) {
              elt.style.top = "".concat(this.topMargin, "px");
              elt.style.height = "".concat(row.height - this.topMargin - this.bottomMargin - 1, "px");
            }
          }
        }
      }
    }
    /**
     * @return {string}
     */

  }, {
    key: "allowVariableRowHeight",
    value: function allowVariableRowHeight() {
      var strategyKey = this.getLayoutStrategy();

      if (strategyKey && strategyKey === STRATEGY_TILE) {
        return !this.constantRowHeight;
      }

      return false;
    }
  }, {
    key: "layoutHorizontally",
    value: function layoutHorizontally(row) {
      var act;
      var elt;
      var left;
      var actCount = row.activities.length;

      for (var iAct = 0; iAct < actCount; iAct++) {
        act = row.activities[iAct];
        elt = act.node;

        if (elt) {
          left = act.left = row.getX(act.start);
          elt.style.left = "".concat(left, "px");
          elt.style.width = "".concat(act.width = row.getX(act.end) - left + 1, "px");

          if (act.width <= this.miniWidth && !core["a" /* default */].utils.hasClass(elt, MILESTONE)) {
            act.width = this.miniWidth;
            elt.style.width = "".concat(act.width, "px");
            core["a" /* default */].utils.addClass(elt, MINI_ACTIVITY_CLASS);
          }
        }
      }
    }
  }, {
    key: "getLayoutStrategy",
    value: // noinspection JSMethodCanBeStatic
    function getLayoutStrategy() {
      return null;
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "layoutVertically",
    value: function layoutVertically(row) {
      row.subRows = [];
    }
    /*                                  */

    /*      Tiling specific methods     */

    /*                                  */

    /**
     * Creates as many subrows as needed to accommodate the given activity graphics and
     * assigns the activity graphics to the subrows. The activity graphics are provided
     * with their view bounding boxes as an array of {@link GraphicBounds}. This allows
     * the tiling policy to take advantage of the precomputed activity bounding boxes when
     * computing graphic overlap and assigning activity graphics to subrows. The result of
     * this method is a list of subrows, where each subrow is a list of {@link
     * GraphicBounds} representing the activities assigned to the subrow. All activity
     * graphics provided as input to the tiling policy must be assigned to one and only
     * one subrow.
     *
     * @param graphics             The activity graphics to be tiled into subrows, as an
     *                             array of {@link GraphicBounds}. If <code>compareBoundingBoxes</code>
     *                             is <code>true</code> then the array will be sorted by
     *                             the x position of each activity graphic's bounding box.
     *                             If <code>compareBoundingBoxes</code> is
     *                             <code>false</code> then the array will be sorted by the
     *                             start time of each activity. Note, that the bounding
     *                             boxes are provided as input only. Modifying the
     *                             bounding box of a {@link GraphicBounds} will not affect
     *                             how an activity is positioned.
     * @param compareBoundingBoxes Indicates whether the tiling policy should compute
     *                             activity overlap by comparing the graphic bounding
     *                             boxes. If <code>false</code>, activity overlap should
     *                             be computed by comparing the activity time intervals.
     * @return The list of subrows, where each subrow is a list of {@link GraphicBounds}
     *         representing the activities assigned to the subrow.
     */

  }, {
    key: "setTaskSubRows",
    value: function setTaskSubRows(row) {
      var subRows = [];
      var act;
      var iSubRow;

      for (var iAct = 0, actCount = row.activities && row.activities.length || 0; iAct < actCount; ++iAct) {
        act = row.activities[iAct];

        if (act.node) {
          for (iSubRow = 0; iSubRow < subRows.length; iSubRow++) {
            if (this.addGraphicToSubRowIfFits(act, subRows[iSubRow])) {
              break;
            }
          }

          if (iSubRow === subRows.length) {
            subRows.push([act]);
          }
        }
      }

      return subRows;
    }
    /**
     * Adds the specified task to the specified subRow if it fits. If the
     * task is successfully added to the list of graphics for the subrow, this method
     * returns true. If the graphic does not fit into the subrow, this method returns
     * false. If the graphic does not fit into any of the existing subrows, the tiling
     * policy will create a new subrow for the graphic. Note, that a graphic must always
     * succeed in being added to an empty subrow.
     *
     * @param activity             The activity to add.
     * @param subRow               The subRow, represented as a list of activities.
     */

  }, {
    key: "addGraphicToSubRowIfFits",
    value: function addGraphicToSubRowIfFits(activity, subRow) {
      // Adding a graphic to an empty subrow must always succeed.
      if (!subRow.length) {
        subRow.push(activity);
      } // Otherwise, check whether the graphic fits at the end of the subRow.
      else {
          var lastRowTask = subRow[subRow.length - 1];

          if (this.compareBoundingBoxes) {
            if (activity.left < lastRowTask.left + lastRowTask.width) {
              return false;
            }
          } else if (activity.start < lastRowTask.end) {
            return false;
          }

          subRow.push(activity);
        }

      return true;
    }
  }], [{
    key: "STRATEGY_LOGISTIC",
    get: function get() {
      return STRATEGY_LOGISTIC;
    }
    /**
     * @return {string}
     */

  }, {
    key: "STRATEGY_TILE",
    get: function get() {
      return STRATEGY_TILE;
    }
  }, {
    key: "STRATEGIES",
    get: function get() {
      return STRATEGIES;
    }
  }, {
    key: "sortTasksOnStart",
    value: function sortTasksOnStart(row) {
      row.activities.sort(function (act1, act2) {
        return act1.start - act2.start;
      });
    }
  }, {
    key: "computeSubRows",
    value: function computeSubRows(row) {
      var endTimes = [];
      var endTime;
      var iAct;
      var act;
      var e;
      var endTimesCount = 0;
      var actCount = row.activities && row.activities.length || 0;

      for (iAct = 0; iAct < actCount; ++iAct) {
        act = row.activities[iAct];

        if (act.node) {
          for (e = 0; e < endTimesCount; e++) {
            endTime = endTimes[e];

            if (act.start === endTime || act.start > endTime) {
              break;
            }
          }

          act.subRowIndex = e;

          if (e < endTimesCount) {
            endTimes[e] = act.end;
          } else {
            endTimes.push(act.end);
            endTimesCount++;
          }
        }
      }

      return endTimesCount;
    }
  }]);

  return ActivityLayout;
}(core["a" /* default */].components.ActivityLayout);


core["a" /* default */].components.ActivityLayout.impl = activitylayout_ActivityLayout;
// CONCATENATED MODULE: ./src/constraintgraph/linkrenderer.js






function linkrenderer_createSuper(Derived) { var hasNativeReflectConstruct = linkrenderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function linkrenderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var ID_DELIM = '_';
var CONSTRAINT_LINK_CLASS = 'constraint-link';
var CONSTRAINT_LINK_CTNR_CLASS = 'constraint-link-ctnr';
var STYLE_ARROW = 1;
var CONSTRAINT_ARROW = 'constraint-arrow';

var linkrenderer_NodeLabelLayout = /*#__PURE__*/function () {
  function NodeLabelLayout() {
    Object(classCallCheck["a" /* default */])(this, NodeLabelLayout);
  }

  Object(createClass["a" /* default */])(NodeLabelLayout, [{
    key: "startLayout",
    value: function startLayout(act, ctx) {}
  }, {
    key: "getNodeToLabelSpacing",
    value: function getNodeToLabelSpacing(act, bbox, textWidth, ctx) {}
  }]);

  return NodeLabelLayout;
}();

var linkrenderer_DefaultNodeLabelLayout = /*#__PURE__*/function (_NodeLabelLayout) {
  Object(inherits["a" /* default */])(DefaultNodeLabelLayout, _NodeLabelLayout);

  var _super = linkrenderer_createSuper(DefaultNodeLabelLayout);

  function DefaultNodeLabelLayout(left) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DefaultNodeLabelLayout);

    _this = _super.call(this);
    _this.left = left;
    return _this;
  }

  Object(createClass["a" /* default */])(DefaultNodeLabelLayout, [{
    key: "getNodeToLabelSpacing",
    value: function getNodeToLabelSpacing(act, bbox, textWidth, ctx) {
      return this.left ? -ctx.nodeToLinkPadding : ctx.nodeToLinkPadding;
    }
  }]);

  return DefaultNodeLabelLayout;
}(linkrenderer_NodeLabelLayout);

var LinkRendererPrototype = {
  drawLink: function drawLink(object, points, style, parentElt, ctx) {
    if (points.length < 2) return null;
    var lastX = points[0].x;
    var lastY = points[0].y;
    var nodes = [];
    var color = this.color ? this.color(object, ctx) : undefined;
    var css = this.getCSS && this.getCSS(object, ctx);
    var w = this.lineWidth && this.lineWidth(object, ctx);
    var i = 0;
    var line;
    var pt;
    var horiz; // eslint-disable-next-line no-constant-condition

    while (true) {
      line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.pointerEvents = 'auto';
      pt = points[++i];
      if (object && object.id) line.id = object.id + ID_DELIM + i;
      horiz = pt.y === lastY;
      line.className = "".concat(CONSTRAINT_LINK_CLASS, " ").concat(horiz ? 'constraint-horiz-link' : 'constraint-vert-link');

      if (this.linkOutlineWidth) {
        line.className = "".concat(CONSTRAINT_LINK_CTNR_CLASS, " ").concat(horiz ? 'constraint-horiz-link' : 'constraint-vert-link');

        if (horiz) {
          line.style.height = "".concat((w || 1) + this.linkOutlineWidth + this.linkOutlineWidth, "px");
          line.style.paddingTop = line.style.paddingBottom = "".concat(this.linkOutlineWidth, "px");
          line.style.top = "".concat(lastY - this.linkOutlineWidth, "px");
          line.style.left = "".concat(Math.min(lastX, pt.x), "px");
          line.style.width = "".concat(Math.abs(lastX - pt.x) + (i && lastX > pt.x ? w || 1 : 0), "px");
          if (css) line.className += " ".concat(css);
          var link = document.createElement('div');
          link.className = "".concat(CONSTRAINT_LINK_CLASS, " constraint-horiz-link");
          if (w) link.style.height = "".concat(w, "px");
          link.style.width = '100%';
          line.appendChild(link);
        } else {
          line.style.width = "".concat((w || 1) + this.linkOutlineWidth + this.linkOutlineWidth, "px");
          line.style.paddingLeft = line.style.paddingRight = "".concat(this.linkOutlineWidth, "px");
          line.style.left = "".concat(lastX - this.linkOutlineWidth, "px");
          line.style.top = "".concat(Math.min(lastY, pt.y), "px");
          line.style.height = "".concat(Math.abs(lastY - pt.y), "px");
          if (css) line.className += " ".concat(css);

          var _link = document.createElement('div');

          _link.className = "".concat(CONSTRAINT_LINK_CLASS, " constraint-vert-link");
          if (w) _link.style.width = "".concat(w, "px");
          _link.style.height = '100%';
          line.appendChild(_link);
        }
      } else if (horiz) {
        if (w) line.style.height = "".concat(w, "px");
        line.style.top = "".concat(lastY, "px");
        line.style.left = "".concat(Math.min(lastX, pt.x), "px");
        line.style.width = "".concat(Math.abs(lastX - pt.x) + (i && lastX > pt.x ? w || 1 : 0), "px");
        if (css) line.className += " ".concat(css);
      } else {
        if (w) line.style.width = "".concat(w, "px");
        line.style.left = "".concat(lastX, "px");
        line.style.top = "".concat(Math.min(lastY, pt.y), "px");
        line.style.height = "".concat(Math.abs(lastY - pt.y), "px");
        if (css) line.className += " ".concat(css);
      }

      nodes.push(line);
      parentElt.appendChild(line);

      if (i === points.length - 1) {
        if (style === STYLE_ARROW) {
          if (horiz) {
            var arrowWidth = this.arrowWidth(object, ctx);
            var arrowHeight = this.arrowHeight(object, ctx);

            if (lastX < pt.x) {
              line = this.drawRightArrow(pt.x, lastY, arrowWidth, arrowHeight, color);
            } else {
              line = this.drawLeftArrow(pt.x, lastY, arrowWidth, arrowHeight, color);
            }

            line.style.pointerEvents = 'auto';
            if (css) line.className += " ".concat(css);
            if (object && object.id) line.id = "".concat(object.id + ID_DELIM, "arrow");
            nodes.push(line);
            parentElt.appendChild(line);
          }
        }

        return nodes;
      }

      lastX = pt.x;
      lastY = pt.y;
    }
  },
  drawLeftArrow: function drawLeftArrow(x, y, arrowWidth, arrowHeight, color) {
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.className = "".concat(CONSTRAINT_ARROW, " constraint-left-arrow");
    node.style.left = "".concat(x, "px");
    node.style.top = "".concat(y - (arrowHeight - 1), "px");
    node.style.width = '0';
    node.style.height = '0';
    node.style.borderTop = "".concat(arrowHeight, "px solid transparent");
    node.style.borderBottom = "".concat(arrowHeight, "px solid transparent");
    node.style.borderRightWidth = "".concat(arrowWidth, "px");
    node.style.borderRightStyle = 'solid';
    if (color) node.style.borderRightColor = color;
    return node;
  },
  drawRightArrow: function drawRightArrow(x, y, arrowWidth, arrowHeight, color) {
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.className = "".concat(CONSTRAINT_ARROW, " constraint-right-arrow");
    node.style.left = "".concat(x - arrowWidth, "px");
    node.style.top = "".concat(y - (arrowHeight - 1), "px");
    node.style.width = '0';
    node.style.height = '0';
    node.style.borderTop = "".concat(arrowHeight, "px solid transparent");
    node.style.borderBottom = "".concat(arrowHeight, "px solid transparent");
    node.style.borderLeftWidth = "".concat(arrowWidth, "px");
    node.style.borderLeftStyle = 'solid';
    if (color) node.style.borderLeftColor = color;
    return node;
  },
  arrowWidth: function arrowWidth() {
    return 5;
  },
  arrowHeight: function arrowHeight() {
    return 5;
  },
  getTooltipProperties: function getTooltipProperties(cons, ctx) {
    var getName = function getName(act) {
      return act.name || act.id;
    };

    var props = [core["a" /* default */].utils.getString('gantt.constraintChart.from'), getName(cons.from), core["a" /* default */].utils.getString('gantt.constraintChart.to'), getName(cons.to), core["a" /* default */].utils.getString('gantt.constraintChart.type')];
    var type;
    if (cons.type === core["a" /* default */].constraintTypes.START_TO_START) type = core["a" /* default */].utils.getString('gantt.constraintChart.start.start');else if (cons.type === core["a" /* default */].constraintTypes.START_TO_END) type = core["a" /* default */].utils.getString('gantt.constraintChart.start.end');else if (cons.type === core["a" /* default */].constraintTypes.END_TO_END) type = core["a" /* default */].utils.getString('gantt.constraintChart.end.end');else type = core["a" /* default */].utils.getString('gantt.constraintChart.end.start');
    props.push(type);
    return props;
  },
  processConfiguration: function processConfiguration(selector, config) {
    this.defaultProcessConfiguration(selector, config);

    if (config.lineWidth) {
      this.addLineWidthConfiguration(selector, config.lineWidth);
    }

    if (config.arrowWidth) {
      this.addArrowConfiguration(selector, config.arrowWidth, 'arrowWidth');
    }

    if (config.arrowHeight) {
      this.addArrowConfiguration(selector, config.arrowWidth, 'arrowHeight');
    }

    if (config.nodeLabelLayout) {
      this.addNodeLabelLayoutConfiguration(selector, config.nodeLabelLayout);
    }
  },
  setColor: function setColor(elt, color) {
    elt.style.color = color;
  },
  destroy: function destroy() {},
  addLineWidthConfiguration: function addLineWidthConfiguration(selector, config) {
    var lineWidth;

    if (typeof config === 'function') {
      lineWidth = config;
    } else if (typeof config === 'string') {
      var getter = core["a" /* default */].utils.propertyEvaluator(config);

      if (getter) {
        lineWidth = function lineWidth(object, ctx) {
          return getter(object, ctx);
        };
      }
    } else {
      lineWidth = function lineWidth() {
        return config;
      };
    }

    if (lineWidth) {
      var oldLineWidth = this.lineWidth;

      this.lineWidth = function (object, ctx) {
        if (!selector || selector(object, ctx)) {
          return lineWidth(object, ctx);
        }

        return oldLineWidth && oldLineWidth(object, ctx);
      };
    }
  },
  addArrowConfiguration: function addArrowConfiguration(selector, config, field) {
    var arrowSize;

    if (typeof config === 'function') {
      arrowSize = config;
    } else if (typeof config === 'string') {
      var getter = core["a" /* default */].utils.propertyEvaluator(config);

      if (getter) {
        arrowSize = function arrowSize(object, ctx) {
          return getter(object, ctx);
        };
      }
    } else {
      arrowSize = function arrowSize() {
        return config;
      };
    }

    if (arrowSize) {
      var oldArrowSize = this[field];

      this[field] = function (object, ctx) {
        if (!selector || selector(object, ctx)) {
          return arrowSize(object, ctx);
        }

        return oldArrowSize && oldArrowSize(object, ctx);
      };
    }
  },
  addNodeLabelLayoutConfiguration: function addNodeLabelLayoutConfiguration(selector, config) {
    var labelLayout;

    if (typeof config === 'string') {
      if (config === 'left' || config === 'LEFT') {
        labelLayout = new linkrenderer_DefaultNodeLabelLayout(true);
      } else if (config === 'right' || config === 'RIGHT') {
        labelLayout = new linkrenderer_DefaultNodeLabelLayout(false);
      }
    } else if (core["a" /* default */].utils.isFunction(config)) {
      labelLayout = new linkrenderer_NodeLabelLayout();
      labelLayout.getNodeToLabelSpacing = config;
    } else {
      labelLayout = config;
    }

    if (labelLayout) {
      var oldGetLabelLayout = this.getLabelLayout;

      this.getLabelLayout = function (object, ctx) {
        if (!selector || selector(object, ctx)) {
          return labelLayout;
        }

        return oldGetLabelLayout && oldGetLabelLayout(object, ctx);
      };
    }
  }
};

// CONCATENATED MODULE: ./src/constraintgraph/constraintlayout.js






function constraintlayout_createSuper(Derived) { var hasNativeReflectConstruct = constraintlayout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function constraintlayout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var LOCKED = Number.MAX_VALUE;
var constraintlayout_STYLE_ARROW = 1;
var LEFT = 0;
var RIGHT = 1;
var SIDE_COUNT = 2;
var CONNECTOR_COUNT = 4;
var INCOMINGS = new Array(4);
INCOMINGS[core["a" /* default */].constraintTypes.START_TO_START] = 0;
INCOMINGS[core["a" /* default */].constraintTypes.START_TO_END] = 2;
INCOMINGS[core["a" /* default */].constraintTypes.END_TO_START] = 0;
INCOMINGS[core["a" /* default */].constraintTypes.END_TO_END] = 2;
var OUTGINGS = new Array(4);
OUTGINGS[core["a" /* default */].constraintTypes.START_TO_START] = 1;
OUTGINGS[core["a" /* default */].constraintTypes.START_TO_END] = 1;
OUTGINGS[core["a" /* default */].constraintTypes.END_TO_START] = 3;
OUTGINGS[core["a" /* default */].constraintTypes.END_TO_END] = 3;

var constraintlayout_Link = /*#__PURE__*/function () {
  function Link(cons) {
    Object(classCallCheck["a" /* default */])(this, Link);

    this.ar = [cons];

    if (cons.from.consNode.index < cons.to.consNode.index) {
      this.topNode = cons.from.consNode;
      this.bottomNode = cons.to.consNode;
    } else {
      this.topNode = cons.to.consNode;
      this.bottomNode = cons.from.consNode;
    }
  }

  Object(createClass["a" /* default */])(Link, [{
    key: "addConstraint",
    value: function addConstraint(cons) {
      this.ar.push(cons);
      var rowIndex = cons.from.consNode.index;

      if (rowIndex < this.topNode.index) {
        this.topNode = cons.from.consNode;
      } else if (rowIndex > this.bottomNode.index) {
        this.bottomNode = cons.from.consNode;
      }
    }
  }, {
    key: "topIndex",
    value: function topIndex() {
      return this.topNode.index;
    }
  }, {
    key: "bottomIndex",
    value: function bottomIndex() {
      return this.bottomNode.index;
    }
  }, {
    key: "toNode",
    value: function toNode() {
      return this.ar[0].to.consNode;
    }
  }, {
    key: "switchSides",
    value: function switchSides() {
      var type = this.ar[0].type;
      return type === core["a" /* default */].constraintTypes.END_TO_START || type === core["a" /* default */].constraintTypes.START_TO_END;
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed() {
      for (var i = 0; i < this.ar.length; i++) {
        if (!this.ar[i].nodes) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      var s = 'Link[';

      if (this.ar.length > 1) {
        s += "(".concat(this.ar.map(function (cons) {
          return cons.from.consNode.toString();
        }).join(','), ")");
      } else s += this.ar[0].from.consNode.toString();

      s += ' -> ';
      s += this.ar[0].to.consNode.toString();
      return "".concat(s, "]");
    }
  }, {
    key: "resetLayout",
    value: function resetLayout() {
      this.x = undefined;

      for (var i = 0; i < this.ar.length; i++) {
        this.ar[i].nodes = undefined;
      }
    }
  }]);

  return Link;
}();

function compareLinks(l1, l2) {
  var i1 = l1.topIndex();
  var i2 = l2.topIndex();
  if (i1 < i2) return 1;
  if (i1 > i2) return -1;
  i1 = l1.bottomIndex();
  i2 = l2.bottomIndex();
  return i1 < i2 ? 1 : i1 > i2 ? -1 : 0;
}

var constraintlayout_Node = /*#__PURE__*/function () {
  function Node(act, index) {
    Object(classCallCheck["a" /* default */])(this, Node);

    this.act = act;
    this.index = index;
    this.links = [[], []];
    this.layoutLinks = 0;
    this.linksDisplayed = 0;
    this.bbox = null;
    this.incomingLinks = new Array(4);
    this.connectors = new Array(CONNECTOR_COUNT);
    this.nodeLabelLayout = false;

    for (var i = 0; i < CONNECTOR_COUNT; i++) {
      this.connectors[i] = 0;
    }
  }

  Object(createClass["a" /* default */])(Node, [{
    key: "addLink",
    value: function addLink(link, side) {
      var ar = this.links[side];

      for (var i = 0, count = ar.length, thisLink; i < count; i++) {
        thisLink = ar[i];

        if (compareLinks(ar[i], link) >= 0) {
          ar.splice(i, 0, link);
          return;
        }
      }

      ar.push(link);
    }
  }, {
    key: "getLinks",
    value: function getLinks(side) {
      return this.links[side];
    }
  }, {
    key: "getIncomingLink",
    value: function getIncomingLink(type) {
      return this.incomingLinks[type];
    }
  }, {
    key: "setIncomingLink",
    value: function setIncomingLink(type, link) {
      this.incomingLinks[type] = link;
    }
  }, {
    key: "incConnectionCount",
    value: function incConnectionCount(type) {
      this.connectors[type]++;
    }
  }, {
    key: "setBBox",
    value: function setBBox(bbox) {
      this.bbox = bbox;
    }
  }, {
    key: "hasLinks",
    value: function hasLinks() {
      for (var side = 0; side < SIDE_COUNT; side++) {
        if (this.links[side].length) return true;
      }

      return false;
    }
  }, {
    key: "clearLinks",
    value: function clearLinks() {
      this.links = [[], []];
      this.connectors = new Array(CONNECTOR_COUNT);
      this.bbox = null;
    }
  }, {
    key: "resetLayout",
    value: function resetLayout() {
      for (var side = 0; side < SIDE_COUNT; ++side) {
        for (var iLink = 0, ar = this.links[side], link; iLink < ar.length; iLink++) {
          if ((link = ar[iLink]).toNode() === this) {
            ar[iLink].resetLayout();
          }
        }
      }

      this.nodeLabelLayout = false;
    }
  }, {
    key: "topRight",
    value: function topRight() {
      var n = this;

      while (n.next) {
        n = n.next;
      }

      return n;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.act.name || this.act.id;
    }
  }]);

  return Node;
}();

var defaultLayoutOptions = {
  horizLinkToNodeDist: 11,
  horizSwitchSideLinkToNodeDist: 8,
  horizLinkToLinkDist: 10,
  switchSideLinkVertMargin: 1 // Vertical space between the To node row and the link crossing over the node

};

var constraintlayout_ConstraintLayout = /*#__PURE__*/function (_Gantt$components$Con) {
  Object(inherits["a" /* default */])(ConstraintLayout, _Gantt$components$Con);

  var _super = constraintlayout_createSuper(ConstraintLayout);

  function ConstraintLayout(gantt, config) {
    Object(classCallCheck["a" /* default */])(this, ConstraintLayout);

    return _super.call(this, gantt, config);
  }

  Object(createClass["a" /* default */])(ConstraintLayout, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      core["a" /* default */].utils.mergeObjects(this, defaultLayoutOptions, config);
    }
  }, {
    key: "startInitialize",
    value: function startInitialize() {
      this.nodes = [];
    }
  }, {
    key: "addNode",
    value: function addNode(act, index) {
      var node = new constraintlayout_Node(act, index);
      node.next = this.nodes[index];
      this.nodes[index] = node;
      return node;
    }
  }, {
    key: "addConstraint",
    value: function addConstraint(from, to, cons) {
      var type = cons.type;
      var side = core["a" /* default */].constraintTypes.isFromStart(cons.type) ? LEFT : RIGHT;
      var link = to.getIncomingLink(INCOMINGS[type]);
      var i;
      from.incConnectionCount(OUTGINGS[type]);
      to.incConnectionCount(INCOMINGS[type]);

      if (link) {
        var beforeTop = link.topIndex();
        var beforeBottom = link.bottomIndex();
        link.addConstraint(cons);

        for (i = link.topIndex(); i < beforeTop; i++) {
          this.nodes[i].addLink(link, side);
        }

        for (i = beforeBottom + 1; i <= link.bottomIndex(); i++) {
          this.nodes[i].addLink(link, side);
        }
      } else {
        to.setIncomingLink(INCOMINGS[type], link = new constraintlayout_Link(cons));

        for (i = link.topIndex(); i <= link.bottomIndex(); i++) {
          this.nodes[i].addLink(link, side);
        }
      }
    }
  }, {
    key: "stopInitialize",
    value: function stopInitialize() {}
  }, {
    key: "layoutRowNodeLinks",
    value: function layoutRowNodeLinks(rowIndex, renderer, ctx) {
      this.reinteringPath = null;

      for (var consNode = this.nodes[rowIndex]; consNode; consNode = consNode.next) {
        this.layoutOneSideNodeLinks(consNode, LEFT);
        this.layoutOneSideNodeLinks(consNode, RIGHT);
        this.layoutNodeLabel(consNode, renderer, ctx);
      }
    }
  }, {
    key: "processConnectors",
    value: function processConnectors(consNode, bbox) {
      if (!consNode.links[LEFT].length && !consNode.links[RIGHT].length) return;
      var parentAct = consNode.act.children && consNode.act.children.length;
      var h = parentAct ? bbox.height / 2 : bbox.height;

      for (var side = 0, connectIndex = 0, incoming, outgoing; side < SIDE_COUNT; side++, connectIndex += 2) {
        incoming = consNode.connectors[connectIndex];
        outgoing = consNode.connectors[connectIndex + 1];

        if (incoming || outgoing) {
          if (incoming) {
            consNode.connectors[connectIndex] = bbox.y + bbox.top + h / (outgoing ? 3 : 2);
          }

          if (outgoing) {
            consNode.connectors[connectIndex + 1] = bbox.y + bbox.top + h - h / (incoming ? 3 : 2);
          }
        }
      }
    }
  }, {
    key: "layoutOneSideNodeLinks",
    value: function layoutOneSideNodeLinks(consNode, side, beforeLink) {
      if (!consNode.bbox) {
        consNode.setBBox(this.getNodeRect(consNode.act, consNode.index));
        this.processConnectors(consNode, consNode.bbox);
      }

      var left = side === LEFT;
      var nodeLimit = consNode.bbox.x + (left ? -this.horizLinkToNodeDist : consNode.bbox.width + this.horizLinkToNodeDist);
      var limit = nodeLimit;

      for (var i = 0, links = consNode.getLinks(side), lastIndex = beforeLink ? links.indexOf(beforeLink) : links.length, link; i < lastIndex; i++) {
        link = links[i];

        if (link.x === undefined) {
          link.x = LOCKED;
          var x = nodeLimit;
          var skipIndex = void 0;

          if (link.switchSides()) {
            // If node switch sides (goes from start to end or end to start), we don't need to layout the
            // 'to' node as its bounds are not taken into account into the current layout processing which
            // layouts the other side.
            var toNode = link.toNode();
            skipIndex = toNode.index; // However, it is still necessary to calc the 'to' node bounds for the link when it is to
            // be the drawn, in case the 'to' node is outside the layout processing row range.

            if (!toNode.bbox) {
              toNode.setBBox(this.getNodeRect(toNode.act, toNode.index));
              this.processConnectors(toNode, toNode.bbox);
            }
          }

          for (var index = link.topIndex(), last = link.bottomIndex(), value; index <= last; index++) {
            if (index !== consNode.index && index !== skipIndex) {
              value = this.layoutOneSideNodeLinks(this.nodes[index], side, link);

              if (this.reinteringPath) {
                this.reinteringPath = "".concat(this.nodes[index].toString(), " -> ").concat(link.toString(), " -> ").concat(this.reinteringPath);

                if (!beforeLink) {
                  throw new Error("Re-entering layout on ".concat(left ? 'left side of ' : 'right side of ').concat(this.reinteringPath));
                }

                return left ? Number.MAX_VALUE : Number.MIN_VALUE;
              }

              x = left ? Math.min(x, value) : Math.max(x, value);
            }
          }

          link.x = x;
          consNode.layoutLinks++;
        } else if (link.x === LOCKED) {
          // Re-entering on a same node, we are looping
          this.reinteringPath = "".concat(consNode.toString(), " -> ").concat(link.toString());
          return left ? Number.MAX_VALUE : Number.MIN_VALUE;
        }

        limit = left ? Math.min(limit, link.x - this.horizLinkToLinkDist) : Math.max(limit, link.x + this.horizLinkToLinkDist);
      }

      return limit;
    }
  }, {
    key: "layoutNodeLabel",
    value: function layoutNodeLabel(consNode, renderer, ctx) {
      var _this = this;

      var label = consNode.act.label;
      if (!label) return;
      var labelLayout = renderer.getLabelLayout && renderer.getLabelLayout(consNode.act, ctx);

      if (labelLayout) {
        var labelW = label.getTextWidth();

        var iterLinks = function iterLinks(side) {
          var limit = consNode.bbox.x + (side === LEFT ? 0 : consNode.bbox.width);
          var links = consNode.links[side];
          var lastX = limit;
          var x;
          var i = 0;
          var link;

          for (; i < links.length; i++) {
            link = links[i];
            if (link.toNode() === consNode && link.switchSides()) continue; // Switching side links are either on top or at the bottom of the row in the label area, cannot go over labels

            x = link.x; // Link margin not taken into account, compensated with applied padding

            if (labelLayout.nextLink(consNode.act, side === LEFT, link.x, lastX, limit, ctx)) break;
            lastX = x;
          }

          return Math.abs(lastX + (side === LEFT ? -1 : 1) * (i ? _this.horizLinkToLinkDist : _this.horizLinkToNodeDist) - limit);
        };

        labelLayout.startLayout(consNode.act, labelW, ctx);

        if (consNode.hasLinks() && labelLayout.nextLink) {
          iterLinks(RIGHT);
          iterLinks(LEFT);
        }

        var spacing = labelLayout.getNodeToLabelSpacing(consNode.act, consNode.bbox, labelW, ctx);

        if (spacing < 0) {
          label.move(true, -spacing + labelW);
        } else {
          label.move(false, spacing);
        }
      }
    }
  }, {
    key: "drawLink",
    value: function drawLink(link, parentElt, renderer, ctx) {
      var cons = link.ar[0];
      var toNode = cons.to.consNode; // If the link starts from one side (left/right) of the node and comes to the node on the otherside.

      var startLeft = core["a" /* default */].constraintTypes.isFromStart(cons.type);
      var endLeft = core["a" /* default */].constraintTypes.isToStart(cons.type);
      var points = new Array(startLeft !== endLeft ? 6 : 4);
      link.nodes = null;

      for (var i = 0, count = link.ar.length, fromNode, x, y, iPoint; i < count; i++) {
        cons = link.ar[i];
        iPoint = 0;
        fromNode = cons.from.consNode;
        points[iPoint++] = {
          x: startLeft ? fromNode.bbox.x : fromNode.bbox.x + fromNode.bbox.width,
          y: y = fromNode.connectors[OUTGINGS[cons.type]]
        };
        points[iPoint++] = {
          x: link.x,
          y: y
        };

        if (startLeft !== endLeft) {
          y = fromNode.index < toNode.index ? toNode.bbox.y + this.switchSideLinkVertMargin : toNode.bbox.y + toNode.bbox.rowHeight - this.switchSideLinkVertMargin;
          points[iPoint++] = {
            x: link.x,
            y: y
          };
          x = endLeft ? toNode.bbox.x - this.horizSwitchSideLinkToNodeDist : toNode.bbox.x + toNode.bbox.width + this.horizSwitchSideLinkToNodeDist;
          points[iPoint++] = {
            x: x,
            y: y
          };
          points[iPoint++] = {
            x: x,
            y: y = toNode.connectors[INCOMINGS[cons.type]]
          };
        } else {
          points[iPoint++] = {
            x: link.x,
            y: y = toNode.connectors[INCOMINGS[cons.type]]
          };
        }

        points[iPoint++] = {
          x: endLeft ? toNode.bbox.x : toNode.bbox.x + toNode.bbox.width,
          y: y
        };
        cons.nodes = renderer.drawLink(cons, points, constraintlayout_STYLE_ARROW, parentElt, ctx);
      }
    }
  }, {
    key: "drawRowLinks",
    value: function drawRowLinks(rowIndex, parentElt, renderer, ctx) {
      var side;
      var links;
      var i;
      var count;

      for (var consNode = this.nodes[rowIndex]; consNode; consNode = consNode.next) {
        if (consNode.linksDisplayed === consNode.links.length) continue;

        for (side = 0; side < SIDE_COUNT; side++) {
          links = consNode.getLinks(side);

          for (i = 0, count = links.length; i < count; ++i) {
            if (!links[i].isDisplayed()) {
              consNode.linksDisplayed++;
              this.drawLink(links[i], parentElt, renderer, ctx);
            }
          }
        }
      }
    }
  }, {
    key: "clearLinks",
    value: function clearLinks() {
      for (var i = 0, count = this.nodes ? this.nodes.length : 0; i < count; i++) {
        for (var node = this.nodes[i]; node; node = node.next) {
          node.clearLinks();
        }
      }
    }
  }, {
    key: "resetLayout",
    value: function resetLayout() {
      for (var i = 0, count = this.nodes ? this.nodes.length : 0; i < count; i++) {
        for (var node = this.nodes[i]; node; node = node.next) {
          node.resetLayout();
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.nodes) {
        for (var i = 0, count = this.nodes.length; i < count; i++) {
          if (this.nodes[i].act) {
            this.nodes[i].act.consNode = null;
          }
        }

        this.nodes = null;
      }
    }
  }]);

  return ConstraintLayout;
}(core["a" /* default */].components.ConstraintLayout);


core["a" /* default */].components.ConstraintLayout.impl = constraintlayout_ConstraintLayout;
// CONCATENATED MODULE: ./src/constraintgraph/constraintgraph.js






function constraintgraph_createSuper(Derived) { var hasNativeReflectConstruct = constraintgraph_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function constraintgraph_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var constraintgraph_defaultOptions = {
  linkOutlineWidth: 2
};
var constraintgraph_TOOLTIP_FADING_TIME = 1000;
var constraintgraph_TOOLTIP_SHOWING_DELAY = 800;
var constraintgraph_SELECTION_CLASS = 'selected';

var constraintgraph_ConstraintsGraph = /*#__PURE__*/function (_Gantt$components$Con) {
  Object(inherits["a" /* default */])(ConstraintsGraph, _Gantt$components$Con);

  var _super = constraintgraph_createSuper(ConstraintsGraph);

  function ConstraintsGraph(gantt, node, config) {
    Object(classCallCheck["a" /* default */])(this, ConstraintsGraph);

    return _super.call(this, gantt, node, core["a" /* default */].utils.mergeObjects({}, constraintgraph_defaultOptions, config));
  }

  Object(createClass["a" /* default */])(ConstraintsGraph, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this = this;

      this.destroy();
      this.create();
      this.ready = Promise.resolve([]);

      if (config.layout && core["a" /* default */].utils.isFunction(config.layout)) {
        this.layout = new config.layout(this.gantt);
      } else {
        var LayoutClass = core["a" /* default */].components.ConstraintLayout.impl || core["a" /* default */].components.ConstraintLayout;
        this.layout = new LayoutClass(this.gantt, config.layout);
      }

      var LinkRendererClass = core["a" /* default */].components.Renderer.impl || core["a" /* default */].components.Renderer;
      this.linkRenderer = new LinkRendererClass(config.renderer, LinkRendererPrototype, this.gantt);

      if (config.linkOutlineWidth) {
        this.linkRenderer.linkOutlineWidth = config.linkOutlineWidth;
      } // Ugly way for managing the exception of this view having several DOM nodes in its life


      var node = this.node;
      this.node = null;
      this.setNode(node);
      var selectionHandler = this.gantt.selection;
      selectionHandler.on(core["a" /* default */].events.CONSTRAINT_SELECTION_CLEARED, function (e, sels) {
        return _this.clearConstraintSelection(sels);
      });
      selectionHandler.on(core["a" /* default */].events.CONSTRAINT_SELECTED, function (e, sels) {
        return _this.selectConstraints(sels);
      });
      selectionHandler.on(core["a" /* default */].events.CONSTRAINT_UNSELECTED, function (e, sels) {
        return _this.unselectConstraints(sels);
      });
    }
  }, {
    key: "setNode",
    value: function setNode(node) {
      var _this2 = this;

      if (this.node) {
        this.gantt.errorHandler.removeGroup(this.node);

        if (this.tooltipEnter) {
          core["a" /* default */].utils.removeEventListener(this.node, 'mouseenter', this.tooltipEnter);
          core["a" /* default */].utils.removeEventListener(this.node, 'mouseleave', this.tooltipLeave);
          core["a" /* default */].utils.removeEventListener(this.node, 'click', this.clickHandler);
        }

        this.node.innerHTML = '';
      }

      this.node = node;

      if (node) {
        if (!this.tooltipEnter) {
          this.tooltipEnter = function (evt) {
            var ctNode = _this2.getConstraintNode(evt.target);

            if (ctNode && (!_this2.gantt.timeTable.isDragAndDropping || !_this2.gantt.timeTable.isDragAndDropping())) {
              _this2.showTooltip(ctNode);
            }
          };

          this.tooltipLeave = function (evt) {
            var ctNode = _this2.getConstraintNode(evt.target);

            if (ctNode && _this2.tooltipElt === node) {
              _this2.hideTooltip(constraintgraph_TOOLTIP_FADING_TIME);
            }
          };

          this.clickHandler = function (e) {
            return _this2.processClick(e);
          };
        }

        core["a" /* default */].utils.addEventListener(this.node, 'mouseenter', this.tooltipEnter, true);
        core["a" /* default */].utils.addEventListener(this.node, 'mouseleave', this.tooltipLeave, true);
        core["a" /* default */].utils.addEventListener(this.node, 'click', this.clickHandler, true);
      }
    }
  }, {
    key: "create",
    value: function create() {
      if (this.config && this.config.classes) {
        core["a" /* default */].utils.addClass(this.config.classes);
      }
    }
  }, {
    key: "setConstraints",
    value: function setConstraints(cts) {
      var _this3 = this;

      this.cts = cts;

      if (cts && cts.length) {
        this.ready = new Promise(function (resolve) {
          setTimeout(function () {
            _this3.processConstraints(cts);

            resolve();
          }, 0);
        });
      } else {
        this.ready = Promise.resolve([]);
      }
    }
  }, {
    key: "processConstraints",
    value: function processConstraints(cts) {
      var table = this.gantt.table;
      var activityFilter = this.gantt.timeTable.getActivityFilter();
      var row;
      var count;
      var acts;
      var act;
      var i;
      this.layout.startInitialize();

      try {
        for (row = table.getFirstVisibleRow(); row; row = table.nextRow(row)) {
          acts = row.activities;
          count = acts && acts.length;

          if (count) {
            for (i = 0; i < count; ++i) {
              act = acts[i];
              act = !activityFilter || activityFilter.accept(act, row) ? act : null;

              if (act) {
                act.consNode = this.layout.addNode(act, row.index);
              }
            }
          }
        }

        var from;
        var to;
        var cons;

        for (i = 0, count = cts.length; i < count; ++i) {
          cons = cts[i];
          cons.nodes = null; // Remove nodes from previous display

          from = cons.from.consNode;
          to = cons.to.consNode;

          if (from && to) {
            this.layout.addConstraint(from, to, cons);
          }
        }
      } catch (e) {
        this.addError(e, 'Error processing constraints');
        this.layout.stopInitialize();
        throw e;
      }

      this.layout.stopInitialize();
    }
  }, {
    key: "addError",
    value: function addError(e, msg) {
      if (!this.errorNode) {
        this.errorNode = document.createElement('div');
        this.errorNode.style.opacity = '0.80';
        this.gantt.timeTablePanel.appendChild(this.errorNode);
      }

      this.gantt.errorHandler.addError(e, msg, this.errorNode);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.layout && this.layout.destroy) {
        this.layout.destroy();
      }

      this.layout = null;

      if (this.node && this.tooltipEnter) {
        core["a" /* default */].utils.removeEventListener(this.node, 'mouseenter', this.tooltipEnter);
        core["a" /* default */].utils.removeEventListener(this.node, 'mouseleave', this.tooltipLeave);
        this.tooltipEnter = this.tooltipLeave = null;
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      if (this.cts) {
        for (var i = 0, count = this.cts.length; i < count; ++i) {
          this.cts[i].fromNode = null;
          this.cts[i].toNode = null;
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.node.innerHTML = '';
      this.clearCache();
    }
  }, {
    key: "clearLinks",
    value: function clearLinks() {
      this.layout.clearLinks();
    }
  }, {
    key: "resetLayout",
    value: function resetLayout() {
      this.layout.resetLayout();
    }
  }, {
    key: "draw",
    value: function draw(rows, drawCB) {
      var _this4 = this;

      if (!rows.length) return this.ready;
      return this.ready.then(function () {
        var table = _this4.gantt.table;
        var firstRowIndex = rows[0].row.index;
        var lastRowIndex = rows[rows.length - 1].row.index;

        function getNodeRect(act, index) {
          var row;
          var y;

          if (index < firstRowIndex) {
            row = rows[0].row;
            y = rows[0].y;

            while (index < firstRowIndex) {
              row = table.prevRow(row);
              drawCB(row);
              y -= row.activityRow.height;
              rows.splice(0, 0, {
                y: y,
                row: row,
                height: row.activityRow.height,
                index: --firstRowIndex
              });
            }
          } else if (index > lastRowIndex) {
            row = rows[lastRowIndex];
            y = row.y + row.height;
            row = row.row;

            while (index > lastRowIndex) {
              row = table.nextRow(row);
              drawCB(row);
              rows.push({
                y: y,
                row: row,
                height: row.activityRow.height,
                index: ++lastRowIndex
              });
              y += row.activityRow.height;
            }
          }

          row = rows[index - firstRowIndex];
          return act.node ? {
            x: act.left,
            y: row.y,
            top: Number.parseInt(act.node.style.top, 10),
            width: act.node.offsetWidth,
            height: act.node.offsetHeight,
            rowHeight: row.height
          } : {
            x: 0,
            y: row.y,
            top: 0,
            width: 0,
            height: 0,
            rowHeight: row.height
          };
        }

        _this4.layout.getNodeRect = getNodeRect;
        var ctx = {
          gantt: _this4.gantt,
          nodeToLinkPadding: _this4.layout.horizLinkToNodeDist,
          linkToLinkPadding: _this4.layout.horizLinkToLinkDist
        };
        var i;
        var rowIndex;
        var count = rows.length;

        try {
          for (i = 0, rowIndex = firstRowIndex; i < count; i++, rowIndex++) {
            _this4.layout.layoutRowNodeLinks(rowIndex, _this4.linkRenderer, ctx);
          }
        } catch (e) {
          _this4.addError(e);
        }

        try {
          var fragment = document.createDocumentFragment();

          for (i = 0, rowIndex = firstRowIndex; i < count; i++, rowIndex++) {
            _this4.layout.drawRowLinks(rowIndex, fragment, _this4.linkRenderer, ctx);
          }

          _this4.node.appendChild(fragment);
        } catch (e) {
          _this4.addError(e, 'Error drawing constraints');
        }
      });
    }
  }, {
    key: "getConstraint",
    value: function getConstraint(node) {
      var id = node.id;
      var lastIndex = id.indexOf(ID_DELIM);
      var index;

      if (lastIndex >= 0) {
        while ((index = id.indexOf(ID_DELIM, lastIndex + 1)) > 0) {
          lastIndex = index;
        }

        id = id.substring(0, lastIndex);
      }

      var cons;

      if (this.cts.byIds && (cons = this.cts.byIds[id])) {
        return cons;
      }

      return null;
    }
  }, {
    key: "getConstraintNode",
    value: function getConstraintNode(elt) {
      var node = null;

      for (; elt && elt !== this.node; elt = elt.parentNode) {
        if (core["a" /* default */].utils.hasClass(elt, CONSTRAINT_LINK_CTNR_CLASS) || core["a" /* default */].utils.hasClass(elt, CONSTRAINT_ARROW)) return elt;
        if (core["a" /* default */].utils.hasClass(elt, CONSTRAINT_LINK_CLASS)) node = elt;
      }

      return node;
    }
    /*                 */

    /*     Tooltips    */

    /*                 */

  }, {
    key: "showTooltip",
    value: function showTooltip(consNode) {
      var _this5 = this;

      var cons;

      if (consNode && consNode !== this.tooltipElt && (cons = this.getConstraint(consNode))) {
        this.tooltipElt = consNode;
        var ctx = {
          limitElt: this.gantt.getBody(),
          showDelay: constraintgraph_TOOLTIP_SHOWING_DELAY
        };
        this.gantt.tooltip.showTooltip(consNode, ctx, function (parent) {
          var tooltipCtx = {
            gantt: _this5.gantt
          };

          _this5.linkRenderer.getTooltip(parent, cons, tooltipCtx);
        });
      }
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(fadingTime) {
      this.tooltipElt = null;
      this.gantt.tooltip.hideTooltip(fadingTime);
    }
    /**
     * Selection management
     */

  }, {
    key: "processClick",
    value: function processClick(e) {
      this.hideTooltip();
      var consNode = this.getConstraintNode(e.target);
      var cons;

      if (consNode && (cons = this.getConstraint(consNode))) {
        this.gantt.selection.processClick(e, cons);
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "clearConstraintSelection",
    value: function clearConstraintSelection(sels) {
      for (var i = 0, nodes, count = sels.length, sel; i < count; ++i) {
        sel = sels[i];

        if (nodes = sel.nodes) {
          for (var j = 0, nodesCount = nodes.length; j < nodesCount; j++) {
            core["a" /* default */].utils.removeClass(nodes[j], constraintgraph_SELECTION_CLASS);
          }
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "selectConstraints",
    value: function selectConstraints(sels) {
      for (var i = 0, nodes; i < sels.length; i++) {
        if (nodes = sels[i].nodes) {
          for (var j = 0, count = nodes.length; j < count; j++) {
            core["a" /* default */].utils.addClass(nodes[j], constraintgraph_SELECTION_CLASS);
          }
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "unselectConstraints",
    value: function unselectConstraints(sels) {
      for (var i = 0, nodes; i < sels.length; i++) {
        if (nodes = sels[i].nodes) {
          for (var j = 0, count = nodes.length; j < count; j++) {
            core["a" /* default */].utils.removeClass(nodes[j], constraintgraph_SELECTION_CLASS);
          }
        }
      }
    }
  }]);

  return ConstraintsGraph;
}(core["a" /* default */].components.ConstraintsGraph);


core["a" /* default */].components.ConstraintsGraph.impl = constraintgraph_ConstraintsGraph;
// EXTERNAL MODULE: ./src/constraintgraph/constraintgraph.scss
var constraintgraph = __webpack_require__(33);

// CONCATENATED MODULE: ./src/constraintgraph/index.js


/* harmony default export */ var src_constraintgraph = (constraintgraph_ConstraintsGraph);
// EXTERNAL MODULE: ./src/timetable/timetable.scss
var timetable = __webpack_require__(34);

// CONCATENATED MODULE: ./src/timetable/timetable.js







function timetable_createSuper(Derived) { var hasNativeReflectConstruct = timetable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function timetable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var ROW_ID_PREFIX = 'timeTableRow_';
var ACTIVITY_ID_PREFIX = '';
var timetable_defaultOptions = {
  bufferPageSize: 3
};

var timetable_TimeTable = /*#__PURE__*/function (_Gantt$components$Tim) {
  Object(inherits["a" /* default */])(TimeTable, _Gantt$components$Tim);

  var _super = timetable_createSuper(TimeTable);

  function TimeTable(gantt, node, config) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TimeTable);

    _this = _super.call(this, gantt, node, core["a" /* default */].utils.mergeObjects({}, timetable_defaultOptions, config)); // Selection management

    core["a" /* default */].utils.addEventListener(node, 'click', function (e) {
      return _this.processClick(e);
    }, true);
    core["a" /* default */].utils.addEventListener(node, 'dblclick', function (e) {
      return _this.processDoubleClick(e);
    }, true);
    core["a" /* default */].utils.addEventListener(node, 'contextmenu', function (e) {
      return _this.processMouseDown(e);
    }, true);
    var selectionHandler = gantt.selection;
    selectionHandler.on(core["a" /* default */].events.ACTIVITY_SELECTION_CLEARED, function (e, sels) {
      return _this.clearActivitySelection(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ACTIVITY_SELECTED, function (e, sels) {
      return _this.selectActvities(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ACTIVITY_UNSELECTED, function (e, sels) {
      return _this.unselectActvities(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTED, function (e, sels) {
      return _this.selectRows(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_UNSELECTED, function (e, sels) {
      return _this.unselectRows(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CLEARED, function (e, sels) {
      return _this.unselectRows(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CHANGED, function (e, sels) {
      return _this.rowSelectionChanged(sels);
    });
    return _this;
  } // Method called from super class
  // noinspection JSUnusedGlobalSymbols


  Object(createClass["a" /* default */])(TimeTable, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this2 = this;

      this.destroy();
      this.create();
      this.bufferPageSize = config.bufferPageSize;
      var RendererClass = core["a" /* default */].components.Renderer.impl || core["a" /* default */].components.Renderer;
      this.activityRenderer = new RendererClass(config.renderer, activityrenderer, this.gantt);
      this.rowRenderer = config.rows && config.rows.renderer && new RendererClass(config.rows.renderer, rowrenderer, this.gantt);
      this.interactor = this.config.interactor;
      this.moveInterator = this.interactor && this.interactor.move;
      this.mouseHandler = this.interactor && this.interactor.click;

      var onScroll = function onScroll(e) {
        if (_this2.synchronizeTableTop(e.target.scrollTop)) {
          e.preventDefault && e.preventDefault();
        }
      };

      core["a" /* default */].utils.addEventListener(this.scroller, 'scroll', onScroll);
      if (this.moveInterator) this.initDragAndDrop();
      this.initTooltip();
      this.events = {};
      var LayoutClass = core["a" /* default */].components.ActivityLayout.impl || core["a" /* default */].components.ActivityLayout;
      this.layout = new LayoutClass(config && config.layout, null
      /* proto */
      , {
        gantt: this.gantt
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this3 = this;

      this.scroller = document.createElement('div');
      this.scroller.className = 'time-table-scroller'; // CSS layout

      this.scroller.style.position = 'absolute';
      this.scroller.style.height = '100%';
      this.scroller.style.top = '0';
      this.scroller.style.left = '0';
      this.scroller.style.right = '0';
      this.scroller.style.bottom = '0';
      this.scroller.style.overflowX = 'scroll';
      this.node.appendChild(this.scroller); // Element used for getting the width of the visible time table area.

      var timeTableWidthTester = document.createElement('div');

      this.getVisibleWidth = function () {
        return timeTableWidthTester.offsetWidth;
      }; // CSS layout


      timeTableWidthTester.style.width = '100%';
      timeTableWidthTester.style.height = 0;
      this.scroller.appendChild(timeTableWidthTester); // Element used for getting the height of the visible time table area,
      // excluding the horizontal scrollbar height

      var timeTableHeightTester = document.createElement('div'); // noinspection JSUnusedGlobalSymbols

      this.getVisibleHeight = function () {
        return timeTableHeightTester.offsetHeight;
      };

      timeTableHeightTester.style.width = 0;
      timeTableHeightTester.style.position = 'absolute';
      timeTableHeightTester.style.top = 0;
      timeTableHeightTester.style.height = '100%';
      this.scroller.appendChild(timeTableHeightTester); // noinspection JSUnresolvedVariable

      this.body = document.createElement('div');
      this.body.style.minHeight = '1px'; // Horizontal scroll position for this.scroll is set before the body is given a height. If this.scroll content (this.body) has no height, the h-scroll position does not apply

      this.body.className = 'time-table-body'; // this.scroller.style.width = 0;

      this.scroller.appendChild(this.body);
      core["a" /* default */].utils.addEventListener(this.body, 'mouseenter', function (e) {
        var row = _this3.getTimeTableRowNode(e.target);

        if (row) {
          _this3.gantt.highlightRow(row.id.substring(ROW_ID_PREFIX.length), true, true);
        }
      }, true);
      core["a" /* default */].utils.addEventListener(this.body, 'mouseleave', function (e) {
        var row = _this3.getTimeTableRowNode(e.target);

        if (row) {
          _this3.gantt.highlightRow(row.id.substring(ROW_ID_PREFIX.length), false, true);
        }
      }, true);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "createUpdates",
    value: function createUpdates(parent) {
      var _this4 = this;

      return new (core["a" /* default */].components.GanttUpdates.impl || core["a" /* default */].components.GanttUpdates)(parent, {
        applyReload: function applyReload() {
          _this4.draw();
        },
        applyUpdates: function applyUpdates() {
          if (parent.containsRowChanges()) {
            if (_this4.ctsGraph) {
              _this4.resetConstraints();
            }

            _this4.draw(true);
          } else {
            _this4.draw();
          }
        }
      });
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "renderRow",
    value: function renderRow(row, ctx) {
      var timeLine = this.gantt.timeLine;
      var actRow = {
        row: row,
        getX: function getX(date) {
          return timeLine.getXFromMillis(date);
        },
        setRowHeight: function setRowHeight(h) {
          this.height = h;
        }
      };
      var node = document.createElement('div');
      node.id = ROW_ID_PREFIX + row.id;
      var table = this.gantt.table; // In Firefox, the use of tr.offsetHeight leads to error.
      // For a row of height 32.5px, tr.offsetHeight will return 33px where
      // as the actual display of the row takes 32px.
      // Gantt.utils.getHeight internally invokes the jQuery.height() function which is more reliable.

      var oldRowHeight = table.getRowHeight(row);
      var variableLayoutRowHeight = this.layout.allowVariableRowHeight();
      actRow.tableRowHeight = actRow.height = !variableLayoutRowHeight && this.activityRenderer.rowHeight && this.activityRenderer.rowHeight(row) || oldRowHeight;

      if (!variableLayoutRowHeight && actRow.height !== oldRowHeight) {
        table.setRowHeight(row, actRow.height); // For example if actRow.height < minimum table row height

        actRow.height = oldRowHeight = table.getRowHeight(row);
      } // See http://help.dottoro.com/lhwdpnva.php
      // for making nodes unselectable


      node.className = "".concat(ctx.odd ? "".concat(TIME_TABLE_ROW, " odd") : TIME_TABLE_ROW, " ").concat(UNSELECTABLE_CLASSNAME) + (row.classes ? ' ' + row.classes : '') + (row.selected ? ' ' + SELECTION_CLASS : '');

      if (this.rowRenderer) {
        this.rowRenderer.draw(row, node, ctx);
      } // node.style.backgroundColor = row.tr.style.backgroundColor;


      var rowSpan = document.createElement('div');
      rowSpan.innerHTML = "".concat(row.index + 1);
      rowSpan.className = 'row-number';
      node.appendChild(rowSpan);
      actRow.rowNode = node;

      if (this.activityRenderer.generateRowDecorations) {
        this.generateRowDecorations(row, node, ctx);
      }

      this.renderActivities(actRow, ctx);

      if (actRow.height !== oldRowHeight) {
        table.setRowHeight(row, actRow.height); // For example if actRow.height < minimum table row height

        actRow.height = table.getRowHeight(row);
      }

      node.style.height = "".concat(actRow.height, "px");
      return actRow;
    }
  }, {
    key: "renderActivities",
    value: function renderActivities(activityRow) {
      var activityFilter = this.getActivityFilter(),
          activities = activityRow.row.activities,
          actCount = activities && activities.length || 0;
      var actNodes, iAct, act, actNode;
      activityRow.activities = actNodes = [];

      if (actCount) {
        for (iAct = 0; iAct < actCount; ++iAct) {
          act = activities[iAct];
          act.node = actNode = (!activityFilter || activityFilter.accept(act, activityRow.row)) && this.renderActivity(act, activityRow.row, activityRow.rowNode) || null;

          if (actNode) {
            if (act.id) {
              actNode.id = ACTIVITY_ID_PREFIX + activityRow.rowNode.id + act.id;
            }

            actNodes.push(act);
            activityRow.rowNode.appendChild(actNode);
          }
        }

        this.layout.layout(activityRow);
      }
    }
  }, {
    key: "getActivityFilter",
    value: function getActivityFilter() {
      var activityFilter = this.gantt.activityFilter;
      return activityFilter && !activityFilter.isEmpty() ? activityFilter : null;
    }
  }, {
    key: "renderActivity",
    value: function renderActivity(act, row, timeTableRowNode) {
      return this.activityRenderer.draw(act, timeTableRowNode, row);
    }
  }, {
    key: "getX",
    value: function getX(date) {
      return this.gantt.timeLine.getXFromMillis(date);
    }
  }, {
    key: "draw",
    value: function draw(forceRedraw) {
      var _this5 = this;

      if (this.container) {
        this.body.removeChild(this.container);
        this.container = null;
      }

      var ctsNode;

      if (this.ctsGraph && forceRedraw) {
        this.resetConstraints();
      } // Draw the height of several row pages


      var top = this.scroller.scrollTop;
      this.lastRepaintY = top;

      if (top < 0) {
        top = 0;
      }

      var table = this.gantt.table;
      top -= Math.abs((this.bufferPageSize - 1) / 2 * this.scroller.clientHeight);

      if (top < 0) {
        top = 0;
      }

      var timeLine = this.gantt.timeLine;
      var ctx = {
        getX: function getX(millis) {
          timeLine.getXFromMillis(millis);
        },
        horiz: this.gantt.timeLine.getScrollableHorizon(),
        gantt: this.gantt
      }; // Generate  global decorations

      if (this.activityRenderer.generateDecorations && (forceRedraw || !this.backgroundCtnr)) {
        this.generateGlobalDecorations(ctx);
      }

      var row = table.getRowAt(top);

      if (row && row.getData()) {
        // If no rows are displayed, a row displaying
        // 'No matching records found' is displayed instead: no activities to display
        top = table.getRowTop(row);
        var ctsRows = this.ctsGraph ? [] : null,
            firstRowIndex = row.index;
        var maxBufferHeight = top + this.bufferPageSize * this.scroller.clientHeight;
        var yFinal = Math.min(maxBufferHeight, table.getHeight());
        var variableHeightLayout = this.layout.allowVariableRowHeight() || this.activityRenderer.rowHeight;
        ctx.odd = row.index % 2 === 0; // This is the way datatables work...

        this.container = this.createContainer(top);
        var activityRow;

        while (row && top < yFinal) {
          activityRow = row.activityRow;

          if (forceRedraw || !activityRow || !activityRow.rowNode) {
            row.activityRow = activityRow = this.renderRow(row, ctx);
          }

          this.container.appendChild(activityRow.rowNode);

          if (ctsRows) {
            ctsRows.push({
              y: top,
              height: activityRow.height,
              row: row
            });
          }

          top += activityRow.height;

          if (variableHeightLayout) {
            // Row height can change so that the yFinal
            yFinal = Math.min(maxBufferHeight, table.getHeight());
          }

          ctx.odd = !ctx.odd;
          row = table.nextRow(row);
        }

        if (this.ctsGraph && this.ctsGraph.node) {
          this.body.insertBefore(this.container, this.ctsGraph.node);
        } else {
          this.body.appendChild(this.container);
        }

        if (variableHeightLayout) {
          this.gantt.updateScrollerHeight();
        }

        if (this.ctsGraph) {
          var updateScrolls = false;
          this.ctsGraph.draw(ctsRows, function (row) {
            // Draw callback to draw additional rows
            activityRow = row.activityRow;

            if (forceRedraw || !activityRow || !activityRow.rowNode) {
              row.activityRow = activityRow = _this5.renderRow(row, ctx);
            }

            if (row.index > firstRowIndex) {
              // We only add row nodes rendered after the last row node above.
              // The constraint draw algorithm ensures that additional rows to be rendered are drawn
              // in ascending order, from the lowest to the highest index.
              _this5.container.appendChild(activityRow.rowNode);

              updateScrolls = true;
            }
          }).then(function () {
            if (forceRedraw && ctsNode) {
              _this5.body.appendChild(ctsNode);
            }

            if (updateScrolls) {
              _this5.gantt.updateScrollerHeight();
            }
          });
        }
      }

      this._ready = true;
    }
  }, {
    key: "drawRows",
    value: function drawRows() {
      this.draw(true);
    }
  }, {
    key: "createContainer",
    value: function createContainer(y) {
      var c = document.createElement('div');
      c.className = 'time-table-row-container'; // c.style.width = this.gantt.getTimeTableWidth() + 'px';

      c.style.width = "".concat(this.getBodyWidth(), "px");
      c.style.overflow = 'none';
      c.style.position = 'absolute';
      c.style.padding = 0;
      c.style.border = 'none';
      c.style.top = "".concat(y, "px");
      c.style.left = 0;
      return c;
    }
  }, {
    key: "on",
    value: function on(event, handler) {
      if (event === core["a" /* default */].events.TIME_TABLE_INIT) {
        if (this._ready) {
          handler.call(this);
        } else {
          _index_get(Object(getPrototypeOf["a" /* default */])(TimeTable.prototype), "on", this).call(this, this, core["a" /* default */].events.TIME_TABLE_INIT, handler);
        }
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.draw(false);
    }
  }, {
    key: "getActivityNode",
    value: function getActivityNode(elt) {
      for (; elt && elt !== this.body; elt = elt.parentNode) {
        if (TimeTable.isActivityNode(elt)) {
          return elt;
        }
      }

      return null;
    }
  }, {
    key: "getActivity",
    value: function getActivity(activityElt) {
      var tr = this.getTimeTableRowNode(activityElt);

      if (tr) {
        var row = this.getRow(tr.id.substring(ROW_ID_PREFIX.length));
        var activities = row && row.activityRow && row.activityRow.activities;

        if (activities) {
          for (var iAct = 0; iAct < activities.length; iAct++) {
            if (activities[iAct].node === activityElt) {
              return activities[iAct];
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "getTimeTableRowNode",
    value: function getTimeTableRowNode(activityNode) {
      for (var tr = activityNode; tr !== this.body; tr = tr.parentNode) {
        if (core["a" /* default */].utils.hasClass(tr, TIME_TABLE_ROW)) {
          return tr;
        }
      }

      return null;
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "getActivityRow",
    value: function getActivityRow(activity) {
      var tr;
      var actNode = activity.node && activity.start && activity.node || activity;

      for (tr = actNode.parentNode; tr !== this.body; tr = tr.parentNode) {
        if (this.utils.hasClass(tr, TIME_TABLE_ROW)) {
          break;
        }
      }

      return tr && this.getRow(tr.id.substring(ROW_ID_PREFIX.length));
    }
  }, {
    key: "getRow",
    value: function getRow(id) {
      return this.gantt.table.getRow(id);
    }
  }, {
    key: "scrollToRow",
    value: function scrollToRow(row) {
      var y = this.gantt.table.getRowTop(row);
      var top = this.scroller.scrollTop; // If row before or after visible area

      if (y < top || y > top + this.getVisibleHeight()) {
        this.scrollToY(y);
      } // Check if row is fully visible
      else {
          // Draw of row has been called, we can access its height.
          var rowHeight = this.gantt.getRowHeight(row);

          if (top + this.getVisibleHeight() < y + rowHeight) {
            this.scrollToY(y);
          }
        }
    }
  }, {
    key: "setFirstVisibleRow",
    value: function setFirstVisibleRow(row) {
      var y = this.gantt.table.getRowTop(row);
      this.scrollToY(y);
    }
  }, {
    key: "scrollToY",
    value: function scrollToY(y) {
      this.scroller.scrollTop = y; // For unit test, we want both the time table and table have their top synchronised immediatly

      this.synchronizeTableTop(y);
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(y) {
      this.scroller.scrollTop = y;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.scroller.scrollTop;
    }
  }, {
    key: "synchronizeTableTop",
    value: function synchronizeTableTop(top) {
      var table = this.gantt.table && this.gantt.table.getScrollableTable();

      if (table) {
        // Table may not be initialized yet.
        table.scrollTop = top;
        var scrollTop = table.scrollTop; // No empty space below the table which impacts the default scrolling strategy of the element.
        // When reaching the bottom of the table, last scroll down events won't impact table's display
        // We need to reflect that on the time table scrollbar
        // e.target.scrollTop = scrollTop;

        if (this.lastRepaintY === undefined || Math.abs(scrollTop - this.lastRepaintY) > this.scroller.clientHeight) {
          this.draw();
        }

        return true;
      }

      return false;
    }
  }, {
    key: "highlightActivity",
    value: function highlightActivity(act, highlight, deSelectAll) {
      if (deSelectAll && (!act || !core["a" /* default */].utils.hasClass(act, HIGHLIGHT_CLASS))) {
        var highlightActs = this.body.querySelectorAll(".".concat(TIME_TABLE_ACTIVITY_CLASSNAME, ".").concat(HIGHLIGHT_CLASS));

        if (highlightActs && highlightActs.length) {
          for (var i = 0; i < highlightActs.length; i++) {
            core["a" /* default */].utils.removeClass(highlightActs[i], HIGHLIGHT_CLASS);
          }
        }
      }

      if (act) {
        core["a" /* default */].utils.toggleClass(act, HIGHLIGHT_CLASS, highlight);
      }
    }
  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deSelectAll) {
      if (deSelectAll) {
        var highlightRows = this.body.querySelectorAll(".".concat(TIME_TABLE_ROW, ".").concat(HIGHLIGHT_CLASS));

        if (highlightRows && highlightRows.length) {
          for (var i = 0; i < highlightRows.length; i++) {
            core["a" /* default */].utils.removeClass(highlightRows[i], HIGHLIGHT_CLASS);
          }
        }
      }

      if (row) {
        if (row.activityRow && row.activityRow.rowNode) {
          core["a" /* default */].utils.toggleClass(row.activityRow.rowNode, HIGHLIGHT_CLASS, highlight);
        }
      }
    }
  }, {
    key: "getDisplayedActivitiesTimeRange",
    value: function getDisplayedActivitiesTimeRange() {
      var top = this.scroller.scrollTop;

      if (top < 0) {
        top = 0;
      }

      var table = this.gantt.table;
      var row = table.getRowAt(top);

      if (!row || !row.getData()) {
        return null; // If no rows are displayed, a row displaying 'No matching records found' is displayed instead: no activities to display
      }

      top = table.getRowTop(row);
      var yFinal = Math.min(top + this.scroller.clientHeight, table.getHeight());
      var activityFilter = this.getActivityFilter();
      var minDate,
          maxDate = 0,
          activities,
          act,
          iAct,
          start,
          end,
          actCount;

      while (row && top < yFinal) {
        top += row.tr.offsetHeight;
        activities = row.activityRow && row.activityRow.activities;

        if (actCount = activities && activities.length) {
          for (iAct = 0; iAct < actCount; ++iAct) {
            act = activities[iAct];

            if (!activityFilter || activityFilter.accept(act, row)) {
              start = act.start;
              end = act.end;

              if (minDate) {
                if (minDate > start) {
                  minDate = start;
                }

                if (maxDate < end) {
                  maxDate = end;
                }
              } else {
                minDate = start;
                maxDate = end;
              }
            }
          }
        }

        row = table.nextRow(row);
      }

      return minDate && {
        start: minDate,
        end: maxDate
      };
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.scroller.scrollLeft;
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(x) {
      this.scroller.scrollLeft = x;
    }
  }, {
    key: "getScroller",
    value: function getScroller() {
      return this.scroller;
    }
  }, {
    key: "getRightMargin",
    value: function getRightMargin() {
      return this.scroller.offsetWidth - this.getVisibleWidth();
    }
  }, {
    key: "getBottomMargin",
    value: function getBottomMargin() {
      return this.scroller.offsetHeight - this.getVisibleHeight();
    }
  }, {
    key: "setBodyWidth",
    value: function setBodyWidth(w) {
      // this.timeScroller.style.width = this.timeLine.getWidth() + 'px';
      this.body.style.width = "".concat(w, "px");
    }
  }, {
    key: "getBodyWidth",
    value: function getBodyWidth() {
      return this.body.offsetWidth;
    }
  }, {
    key: "setBodyHeight",
    value: function setBodyHeight(h) {
      this.body.style.height = "".concat(h, "px");
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "getBodyHeight",
    value: function getBodyHeight() {
      return core["a" /* default */].utils.getHeight(this.scroller);
    }
    /*                 */

    /*     Tooltips    */

    /*                 */

  }, {
    key: "initTooltip",
    value: function initTooltip() {
      var timeTable = this;
      var resGantt = this.gantt.isResourceGantt();
      this.gantt.tooltip.installTooltip({
        // The container that contains elements to display tooltip for.
        container: this.body,
        // The container inside which bounds the tooltip can be displayed
        getTooltipDisplayContainer: function getTooltipDisplayContainer() {
          return timeTable.gantt.getBody();
        },
        // Returns an element in the node hierarchy for which a tooltip can be displayed
        getTooltipElement: function getTooltipElement(node) {
          return timeTable.getActivityNode(node);
        },
        getTooltipData: function getTooltipData(actNode) {
          return timeTable.getActivity(actNode);
        },
        renderTooltip: function renderTooltip(actNode
        /* The element returned by getTooltipElement */
        , act
        /* data returned by getTooltipData for the specified tooltipElt */
        , tooltipCtnr
        /* The container of the tooltip to fill with info. */
        ) {
          if (act && (resGantt && act.row || act)) {
            timeTable.activityRenderer.getTooltip(tooltipCtnr, act, act.row);
          }
        },
        enteringTooltipElement: function enteringTooltipElement(actNode, act) {
          if (timeTable.isDragAndDropping()) return false;

          if (actNode) {
            timeTable.highlightActivity(actNode, true, true);
          }

          return true;
        },
        leavingTooltipElement: function leavingTooltipElement(actNode, act) {
          if (actNode) {
            timeTable.highlightActivity(actNode, false, true);
          }
        }
      });
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      this.gantt.tooltip.hideTooltip(0);
    }
    /*                 */

    /*      Search     */

    /*                 */
    // noinspection JSUnusedGlobalSymbols

  }, {
    key: "searchActivities",
    value: function searchActivities(row, filter) {
      var _this6 = this;

      var activities = row.activities;
      var actCount = activities && activities.length;

      if (actCount) {
        var filterFct = typeof filter === 'string' && function (act, object, filter) {
          return _this6.activityRenderer.filter(act, row, filter);
        } || filter;

        for (var iAct = 0; iAct < actCount; ++iAct) {
          if (filterFct(activities[iAct], row, filter)) {
            return true;
          }
        }
      }

      return false;
    }
    /*                   */

    /*   Drag and drop   */

    /*                   */

  }, {
    key: "initDragAndDrop",
    value: function initDragAndDrop() {
      var node = this.body,
          timeTable = this;
      this.dragDropHandler = new dragdrop_DragDropHandler(node);
      this.dragDropHandler.addHandler({
        startMove: function startMove(target, initOffsetX, initOffsetY) {
          var actNode = timeTable.getActivityNode(target);

          if (actNode) {
            this.activity = timeTable.getActivity(actNode);

            if (this.activity === null) {
              console.log('null activity!');
              return false;
            }

            this.initActivityRow = timeTable.getTimeTableRowNode(actNode);
            this.row = this.initRow = timeTable.getRow(this.initActivityRow.id.substring(ROW_ID_PREFIX.length));
            this.initTimeTablePos = timeTable.gantt.getTimeTableCoordinates(target, {
              x: initOffsetX,
              y: initOffsetY
            });
            this.initScrollLeft = node.scrollLeft;
            this.initScrollTop = node.scrollTop;
            this.timeLineItem = {
              start: new Date(this.activity.start),
              type: 'box'
            };
            this.timeLineItem.context = {
              start: this.timeLineItem.start.format(),
              startRow: this.initRow.name
            };
            timeTable.hideTooltip();
            timeTable.gantt.highlightRow(this.row, true, true);
            timeTable.startDraggingActivity(this);
            return actNode;
          }

          return false;
        },
        move: function move(pos) {
          pos.y = undefined; // We don't change the activity Y position

          var scrollDiffX = node.scrollLeft - this.initScrollLeft;

          if (scrollDiffX) {
            pos.dx += scrollDiffX;
            pos.x += scrollDiffX;
          }

          var scrollDiffY = node.scrollTop - this.initScrollTop;

          if (scrollDiffY) {
            pos.dy += scrollDiffY;
          }

          var preRow = this.row;
          var newRow = timeTable.gantt.table.getRowAt(this.initTimeTablePos.y + pos.dy, preRow);
          this.currentTime = new Date(timeTable.gantt.timeLine.getTimeAt(pos.x));

          if (newRow) {
            this.row = newRow;

            if (preRow.id !== newRow.id && this.initRow.id !== preRow.id) {
              // Keep highlighting the init row
              timeTable.gantt.highlightRow(preRow, false);
            }

            if (preRow.id !== newRow.id) {
              if (this.initRow.id !== preRow.id) {
                timeTable.gantt.highlightRow(preRow, false);
              }

              if (this.initRow.id !== newRow.id) {
                timeTable.gantt.highlightRow(newRow, true);
              }

              if (newRow.activityRow) {
                newRow.activityRow.rowNode.appendChild(timeTable.dragDropHandler.draggedObject);
              }
            }

            return this.row.id !== this.initRow.id ? timeTable.acceptActivityRowChange(this) : timeTable.acceptActivityMove(this);
          }

          return false;
        },
        moved: function moved() {
          this.updateTimeLineItem();
        },
        restoreInitPosition: function restoreInitPosition() {
          if (this.row && this.initRow.id !== this.row.id) {
            timeTable.gantt.highlightRow(this.row, false);
            this.row = this.initRow;
          }

          node.scrollTop = this.initTop;
        },
        stopMove: function stopMove() {
          timeTable.stopDraggingActivity(this);
          timeTable.gantt.timeLine.removeTimeLineItem(TIME_MARKER_DRAG_ITEM);

          if (this.row) {
            timeTable.gantt.highlightRow(this.row, true, true);
          }
        },
        applyMove: function applyMove() {
          timeTable.applyActivityMove(this);
        },
        cancel: function cancel() {
          timeTable.abortActivityMove();
        },
        updateTimeLineItem: function updateTimeLineItem() {
          timeTable.gantt.timeLine.setTimeLineItem(TIME_MARKER_DRAG_ITEM, this.createDragTimeLineItem());
        },
        createDragTimeLineItem: function createDragTimeLineItem() {
          var item = this.timeLineItem,
              changeRow = this.row.id !== this.initRow.id;
          item.className = "".concat(TIME_MARKER_DRAG_ITEM, " ").concat(timeTable.dragDropHandler.invalid ? 'dragg-invalid' : 'dragg-valid'); // item.context.draggStatusClass = dragDropHandler.invalid? 'dragg-invalid' : 'dragg-valid';

          item.context.current = this.currentTime.format();
          item.start = this.currentTime;
          item.context.title = core["a" /* default */].utils.formatString(changeRow ? 'Gantt.ChangeActivityRow' : 'Gantt.MoveActivity', this.activity);

          if (changeRow) {
            item.context.currentRow = this.row.name;
          }

          item.content = core["a" /* default */].utils.formatString(changeRow ? 'timeLine.changeRowItem.fmt' : 'timeLine.newTimeItem.fmt', item.context);
          return item;
        }
      });
      this.dragDropHandler.addEventListener(node, 'mousedown', this.dragDropHandler.startDragMouse, true); // Capturing!
    }
  }, {
    key: "startDraggingActivity",
    value: function startDraggingActivity(actParam) {
      if (this.moveInterator && this.moveInterator.startMove) {
        this.moveInterator.startMove(actParam);
      }
    }
  }, {
    key: "acceptActivityRowChange",
    value: function acceptActivityRowChange(actParam) {
      if (this.moveInterator && this.moveInterator.acceptRowChange) {
        return this.moveInterator.acceptRowChange(actParam);
      }

      return true;
    }
  }, {
    key: "acceptActivityMove",
    value: function acceptActivityMove(actParam) {
      if (this.moveInterator && this.moveInterator.acceptMove) {
        return this.moveInterator.acceptMove(actParam);
      }

      return true;
    }
  }, {
    key: "abortActivityMove",
    value: function abortActivityMove(actParam) {
      if (this.moveInterator && this.moveInterator.abortMove) {
        return this.moveInterator.abortMove(actParam);
      }

      return true;
    }
  }, {
    key: "applyActivityMove",
    value: function applyActivityMove(actParam) {
      if (this.moveInterator && this.moveInterator.applyMove) {
        return this.moveInterator.applyMove(actParam);
      }

      return true;
    }
  }, {
    key: "stopDraggingActivity",
    value: function stopDraggingActivity(actParam) {
      if (this.moveInterator && this.moveInterator.stopMove) {
        return this.moveInterator.stopMove(actParam);
      }

      return true;
    }
  }, {
    key: "isDragAndDropping",
    value: function isDragAndDropping() {
      return this.dragDropHandler && this.dragDropHandler.draggedObject;
    }
    /*  Selection methods  */

  }, {
    key: "processClick",
    value: function processClick(e) {
      var _this7 = this;

      this.hideTooltip();
      this.processMouseEvent(e, function (e, row, date) {
        _this7.gantt.highlightRow(row, true, true);

        _this7.gantt.selection.processClick(e, row);

        if (_this7.mouseHandler && _this7.mouseHandler.rowClicked) {
          _this7.mouseHandler.rowClicked(e, row, date);
        }
      }, function (e, activity, date, row) {
        _this7.gantt.selection.processClick(e, activity);

        if (_this7.mouseHandler && _this7.mouseHandler.activityClicked) {
          _this7.mouseHandler.activityClicked(e, activity, date, row);
        }
      });
    }
  }, {
    key: "processMouseEvent",
    value: function processMouseEvent(e, rowCB, activityCB) {
      // const date = new Date(this.gantt.timeLine.getTimeAt(pos.x));
      var coord = this.gantt.getTimeTableCoordinates(e.target, {
        x: event.offsetX,
        y: event.offsetY
      });
      var date = new Date(this.gantt.timeLine.getTimeAt(coord.x));

      if (e.target && core["a" /* default */].utils.hasClass(e.target, TIME_TABLE_ROW)) {
        var row = this.getRow(e.target.id.substring(ROW_ID_PREFIX.length));

        if (row) {
          this.gantt.highlightRow(row, true, true);

          if (rowCB) {
            rowCB(e, row, date);
          }

          this.gantt.selection.processClick(e, row);
        }
      } else {
        var actNode = core["a" /* default */].utils.closest(e.target, ".".concat(TIME_TABLE_ACTIVITY_CLASSNAME));
        var act = actNode && this.getActivity(actNode);

        if (act) {
          var _row = act.row;

          if (!_row) {
            var rowNode = core["a" /* default */].utils.closest(e.target, ".".concat(TIME_TABLE_ROW));
            _row = this.getRow(rowNode.id.substring(ROW_ID_PREFIX.length));
          }

          if (_row) {
            this.gantt.highlightRow(_row, true, true);
          }

          if (activityCB) {
            activityCB(e, act, date, _row);
          }
        }
      }
    }
  }, {
    key: "processDoubleClick",
    value: function processDoubleClick(e) {
      var _this8 = this;

      this.hideTooltip();
      this.processMouseEvent(e, function (e, row, date) {
        if (_this8.mouseHandler && _this8.mouseHandler.rowDoubleClicked && row) {
          _this8.mouseHandler.rowDoubleClicked(e, row, date);
        }
      }, function (e, activity, date, row) {
        if (_this8.mouseHandler && _this8.mouseHandler.activityDoubleClicked) {
          _this8.mouseHandler.activityDoubleClicked(e, activity, date, row);
        }
      });
    }
  }, {
    key: "processMouseDown",
    value: function processMouseDown(e) {
      var _this9 = this;

      this.hideTooltip();

      if (e.which === 3) {
        this.processMouseEvent(e, function (e, row, date) {
          if (_this9.mouseHandler && _this9.mouseHandler.rowRightClicked && row) {
            _this9.mouseHandler.rowRightClicked(e, row, date);
          }
        }, function (e, activity, date, row) {
          if (_this9.mouseHandler && _this9.mouseHandler.activityRightClicked) {
            _this9.mouseHandler.activityRightClicked(e, activity, date, row);
          }
        });
        e && e.preventDefault && e.preventDefault();
        e && e.stopPropagation && e.stopPropagation();
        return false;
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "clearActivitySelection",
    value: function clearActivitySelection(sels) {
      for (var i = 0, count = sels.length, sel; i < count; ++i) {
        sel = sels[i];

        if (sel.node) {
          core["a" /* default */].utils.removeClass(sel.node, SELECTION_CLASS);
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "selectActvities",
    value: function selectActvities(sels) {
      for (var i = 0, node; i < sels.length; i++) {
        if (node = sels[i].node) {
          core["a" /* default */].utils.addClass(node, SELECTION_CLASS);
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "unselectActvities",
    value: function unselectActvities(sels) {
      for (var i = 0, node; i < sels.length; i++) {
        if (node = sels[i].node) {
          core["a" /* default */].utils.removeClass(node, SELECTION_CLASS);
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "selectRows",
    value: function selectRows(rows) {
      for (var i = 0, node; i < rows.length; i++) {
        if ((node = rows[i].activityRow) && (node = node.rowNode)) {
          core["a" /* default */].utils.addClass(node, SELECTION_CLASS);
        }
      }
    } // noinspection JSMethodCanBeStatic

  }, {
    key: "unselectRows",
    value: function unselectRows(rows) {
      for (var i = 0, node; i < rows.length; i++) {
        if ((node = rows[i].activityRow) && (node = node.rowNode)) {
          core["a" /* default */].utils.removeClass(node, SELECTION_CLASS);
        }
      }
    }
  }, {
    key: "rowSelectionChanged",
    value: function rowSelectionChanged() {
      this.draw();
    } //
    // Decoration management
    //

  }, {
    key: "generateGlobalDecorations",
    value: function generateGlobalDecorations(ctx) {
      var decoContainer = this.gantt.timeLine.getDecorationContainer();

      if (!decoContainer) {
        console.warn('No decoration container found in time line');
        return;
      }

      if (this.backgroundCtnr) {
        decoContainer.removeChild(this.backgroundCtnr);
        this.backgroundCtnr = null;
      }

      if (this.activityRenderer.generateDecorations) {
        var ctnr = document.createElement('div');
        ctnr.className = 'time-table-decoration-ctnr decoration-background-ctnr';
        ctnr.style.position = 'absolute';
        ctnr.style.left = 0;
        ctnr.style.top = 0;
        ctnr.style.bottom = 0;
        ctnr.style.width = '100%';
        ctnr.style.height = '100%';
        var objs = this.activityRenderer.generateDecorations(ctx.horiz.start, ctx.horiz.end, ctx);

        for (var i = 0, count = objs ? objs.length : 0, obj; i < count; ++i) {
          obj = objs[i]; // noinspection JSUnresolvedVariable

          this.addDecoration(obj, ctnr);
        }

        if (ctnr.firstChild) {
          decoContainer.appendChild(this.backgroundCtnr = ctnr);
        }
      }
    }
  }, {
    key: "generateRowDecorations",
    value: function generateRowDecorations(row, rowNode, ctx) {
      var objs = this.activityRenderer.generateRowDecorations(row, ctx.horiz.start, ctx.horiz.end, ctx);

      for (var i = 0, count = objs ? objs.length : 0, obj, node; i < count; ++i) {
        obj = objs[i];
        node = this.addDecoration(obj, rowNode); // noinspection JSUnresolvedVariable

        node.style.zIndex = obj.foreground ? 1 : -1;
      }
    }
  }, {
    key: "addDecoration",
    value: function addDecoration(obj, ctnr) {
      var node;

      if (obj.create) {
        node = obj.create();
      } else {
        node = document.createElement('div');

        if (obj.type) {
          if (obj.type === DECORATION_INVALID_TYPE) {
            node.className = DECORATION_INVALID_CLASS;
          } else if (obj.type === DECORATION_BREAK_TYPE) {
            node.className = DECORATION_BREAK_CLASS;
          }
        } else {
          node.className = DECORATION_BREAK_CLASS;
        }

        node.display = 'inline-block';
      }

      if (obj.className) {
        core["a" /* default */].utils.addClass(node, obj.className);
      }

      node.style.position = 'absolute';

      if (obj.background) {
        node.style.background = obj.background;
      } // noinspection JSUnresolvedVariable


      if (obj.color || obj.foreground) {
        // noinspection JSUnresolvedVariable
        node.style.color = obj.color || obj.foreground;
      }

      var left = this.gantt.timeLine.getXFromMillis(obj.start);
      node.style.left = "".concat(left, "px");
      node.style.width = this.gantt.timeLine.getXFromMillis(obj.end) - left;
      node.style.top = '1px';
      node.style.bottom = '1px';
      ctnr.appendChild(node);
      return node;
    } //
    // Constraints
    //

  }, {
    key: "createConstraintGrapherNode",
    value: function createConstraintGrapherNode() {
      if (this.ctsGraph && this.ctsGraph.node) {
        this.body.removeChild(this.ctsGraph.node);
      }

      var ctsNode = document.createElement('div');
      ctsNode.className = 'constraints-grapher';
      ctsNode.style.height = '100%';
      ctsNode.style.width = '100%';
      ctsNode.style.position = 'relative';
      ctsNode.style.pointerEvents = 'none';
      return ctsNode;
    }
  }, {
    key: "setConstraints",
    value: function setConstraints(constraints) {
      this.constraints = constraints;

      if (constraints && constraints.length) {
        if (!this.ctsGraph) {
          var ctsNode = this.createConstraintGrapherNode();
          this.ctsGraph = new (core["a" /* default */].components.ConstraintsGraph.impl || core["a" /* default */].components.ConstraintsGraph)(this.gantt, ctsNode, this.gantt.config && this.gantt.config.constraints);
          this.body.appendChild(ctsNode);
        }

        this.ctsGraph.setConstraints(constraints);
      } else if (this.ctsGraph) {
        if (this.ctsGraph.node) {
          this.body.removeChild(this.ctsGraph.node);
        }

        if (this.ctsGraph.destroy) {
          this.ctsGraph.destroy();
        }

        this.ctsGraph = null;
      }
    }
  }, {
    key: "resetConstraints",
    value: function resetConstraints() {
      var ctsNode = this.createConstraintGrapherNode();
      this.ctsGraph.setNode(ctsNode); // Instead of removing all links, we change the link container

      this.ctsGraph.setConstraints(this.constraints);
      this.body.appendChild(ctsNode);
    } //
    // Destroy
    //

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.backgroundCtnr) {
        this.node.removeChild(this.backgroundCtnr);
        this.backgroundCtnr = null;
      }

      if (this.foregroundCtnr) {
        this.node.removeChild(this.foregroundCtnr);
        this.foregroundCtnr = null;
      }

      if (this.activityRenderer) {
        this.activityRenderer.destroy();
        this.activityRenderer = null;
      }

      if (this.ctsGraph) {
        this.ctsGraph.destroy();
        this.ctsGraph = null;
      }
    }
  }], [{
    key: "isActivityNode",
    value: function isActivityNode(elt) {
      return core["a" /* default */].utils.hasClass(elt, TIME_TABLE_ACTIVITY_CLASSNAME);
    }
  }]);

  return TimeTable;
}(core["a" /* default */].components.TimeTable);


core["a" /* default */].components.TimeTable.impl = timetable_TimeTable;

if (false) {}
// CONCATENATED MODULE: ./src/timetable/index.js


// CONCATENATED MODULE: ./src/gantt.js
/**
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* import-sort-ignore */






 // import P from 'es6-promise/dist/es6-promise.min';


 // if (typeof Promise === 'undefined' /* && Promise.toString().indexOf("[native code]") !== -1 */) {
//   console.log('Use of es6-promise');
//   P.polyfill();
// }

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESOURCE_LOAD_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var LOAD_RESOURCE_BAR_CLASS = 'load-resource-bar';
var RESOURCE_LOAD_CLASS = 'resource-load';
var Block = /*#__PURE__*/function () {
  function Block(start, end, prev, next) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Block);

    this.start = start;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.resNodes = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Block, [{
    key: "addResource",
    value: function addResource(resNode) {
      this.resNodes.push(resNode);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(start, end, resNode) {
      var block = new Block(start, end, this.prev, this);
      this.prev.next = block; // Always a previous as firstBlock initialized with a minimal date.

      this.prev = block;
      if (resNode) block.addResource(resNode);
      return block;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(start, end, resNode) {
      if (this.next) {
        return this.next.insert(start, end, resNode);
      }

      var block = new Block(start, end, this, null);
      this.next = block;
      if (resNode) block.addResource(resNode);
      return block;
    }
  }, {
    key: "insert",
    value: function insert(start, end, resNode) {
      var block;

      if (start >= this.end) {
        return this.insertAfter(start, end, resNode);
      }

      if (start < this.start) {
        this.insertBefore(start, Math.min(this.start, end), resNode);
        if (end <= this.start) return undefined;
        start = this.start;
      }

      if (start > this.start) {
        this.insertBefore(this.start, start).resNodes = [].concat(this.resNodes);
        this.start = start;
      }

      if (end < this.end) {
        block = this.insertBefore(this.start, end);
        block.resNodes = this.resNodes.concat([resNode]);
        this.start = end;
        return block;
      }

      this.resNodes.push(resNode);

      if (end > this.end) {
        return this.insertAfter(this.end, end, resNode);
      }

      return this;
    }
  }, {
    key: "computeMax",
    value: function computeMax(useMaxLoad) {
      var max = 0;
      var usedRes = [];
      this.resNodes.forEach(function (node) {
        if (useMaxLoad) {
          if (usedRes.indexOf(node.resource) < 0) {
            usedRes.push(node.resource);
            max += node.maxLoad;
          }
        } else max += node.load;
      });
      this.max = max;
      return Math.max(max, this.next ? this.next.computeMax(useMaxLoad) : 0);
    }
  }, {
    key: "createVisItem",
    value: function createVisItem(ctx) {
      // max, verticalPercentage, renderer
      if (!this.resNodes.length) return null;
      var tpl = '<div style="display: flex; flex-direction: column-reverse; height: 100%" class="' + LOAD_RESOURCE_BAR_CLASS + '">';
      var closing = '</div>';
      var max = ctx.max;
      var height = ctx.plotAreaHeight; // Only true if one resource selected => this.resNodes is always of size 1

      if (ctx.useMaxLoad && this.max) {
        tpl += '<div style="display: flex; flex-direction: column-reverse; height: ' + Math.round(height = height * this.max / max) + 'px;" class="max-load">';
        max = this.max; // activities height are now proportional to their max load container height

        closing = '</div>' + closing;
      }

      for (var i = 0, res; i < this.resNodes.length; i++) {
        res = this.resNodes[i];
        tpl += '<div style="background-color: ' + ctx.chartRenderer.background(res.resource, res.activity) + '; height: ' + Math.round(height * res.load / max) + 'px;" data-res-name="' + res.resource.name + '" data-act-name="' + (res.activity.name || '') + '" data-res-load="' + res.load + '"' + (res.maxLoad ? ' data-max-load="' + res.maxLoad + '"' : '') + ' class="' + RESOURCE_LOAD_CLASS + '"></div>';
      }

      tpl += closing;
      return {
        start: this.start,
        end: this.end,
        type: 'background',
        content: tpl
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      var s;

      if (this.start) {
        s = '[ start: ' + new Date(this.start).toLocaleDateString() + ' - end: ' + new Date(this.end).toLocaleDateString() + '(';
        s += this.resNodes.join(', ');
        s += ')]';
      } else {
        s = '';
      }

      return s + (this.next ? '\n     ' + this.next.toString() : '');
    }
  }]);

  return Block;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var moment = __webpack_require__(38);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = moment;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _loadchart_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _loadchart_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_loadchart_scss__WEBPACK_IMPORTED_MODULE_8__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CHART_TOP_MARGIN = 8;

function ResNode(resource, activity, load, maxLoad) {
  this.resource = resource;
  this.activity = activity;
  this.load = load;
  this.maxLoad = maxLoad;
}

ResNode.prototype.toString = function () {
  return this.resource.name + ' - ' + this.activity.name;
};

var LoadResourceChart = /*#__PURE__*/function (_Gantt$components$Loa) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(LoadResourceChart, _Gantt$components$Loa);

  var _super = _createSuper(LoadResourceChart);

  function LoadResourceChart() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LoadResourceChart);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LoadResourceChart, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      if (config.classes) {
        _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.addClass(this.node, config.classes);
      }

      this.header = document.createElement('div');
      this.header.className = 'load-resource-chart-header';

      if (config.header) {
        var headerContent;

        if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isFunction(config.header)) {
          headerContent = config.header(this.header);
        } else if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isDomElement(config.header)) {
          headerContent = config.header;
        } else {
          headerContent = document.createElement('h3');
          headerContent.appendChild(document.createTextNode(config.header));
        }

        if (headerContent) {
          this.header.appendChild(headerContent);
        }
      }

      this.node.appendChild(this.header);
      this.body = document.createElement('div');
      this.body.className = 'load-resource-chart-body';
      this.body.style.position = 'relative';

      if (config.height) {
        if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isFunction(config.height)) {
          this.body.style.height = config.height() + 'px';
        } else if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isString(config.height)) {
          this.body.style.height = config.height;
        } else {
          this.body.style.height = config.height + 'px';
        }
      } else {
        this.body.style.height = '100%';
      }

      this.node.appendChild(this.body);
      this.leftPanel = document.createElement('div');
      this.leftPanel.className = 'load-resource-chart-left';
      this.leftPanel.style.position = 'absolute';
      this.leftPanel.style.left = '0';
      this.leftPanel.style.top = '0';
      this.leftPanel.style.bottom = '0';
      this.legendPanel = document.createElement('div');
      this.legendPanel.className = 'legend-panel empty-legend';
      this.legendPanel.style.position = 'absolute';
      this.legendPanel.style.bottom = '0';
      this.legendPanel.style.overflowY = 'auto';
      this.leftPanel.appendChild(this.legendPanel); // Create Y-Axis panel

      this.yAxisPanel = document.createElement('div');
      this.yAxisPanel.className = 'y-axis-ctnr';
      this.yAxisPanel.style.position = 'absolute';
      this.yAxisPanel.style.right = 0;
      this.yAxisPanel.style.top = '0';
      this.yAxis = document.createElement('div');
      this.yAxis.className = 'y-axis' + (config && config.yAxis && config.yAxis.className ? ' ' + config.yAxis.className : '');
      this.yAxis.style.position = 'absolute';
      this.yAxis.style.overflow = 'visible';
      this.yAxis.style.right = 0;
      this.yAxis.style.top = '0';
      this.yAxisPanel.appendChild(this.yAxis);
      this.leftPanel.appendChild(this.yAxisPanel);
      this.body.appendChild(this.leftPanel);
      this.timeLineScrollerElt = document.createElement('div');
      this.timeLineScrollerElt.className = 'load-resource-chart-scroller';
      this.timeLineScrollerElt.style.position = 'absolute';
      this.timeLineScrollerElt.style.top = '0';
      this.timeLineScrollerElt.style.bottom = '0';
      this.timeLineScrollerElt.style.right = '0';
      this.timeLineScrollerElt.style.overflow = 'hidden';
      this.body.appendChild(this.timeLineScrollerElt);
      this.noSelectionElt = document.createElement('div');
      this.noSelectionElt.className = 'no-selection';
      this.noSelectionElt.style.position = 'absolute';
      this.noSelectionElt.style.left = '0';
      this.noSelectionElt.style.top = '0';
      this.noSelectionElt.style.bottom = '0';
      this.noSelectionElt.style.right = '0';
      this.noSelectionElt.style.overflow = 'hidden';
      this.noSelectionElt.style.display = 'flex';
      this.noSelectionElt.style.alignItems = 'center';
      this.noSelectionElt.style.justifyContent = 'center';
      this.noSelectionElt.style.zIndex = '1';
      var noSelMsg = document.createElement('div');
      noSelMsg.className = 'no-selection-message';
      noSelMsg.appendChild(document.createTextNode(_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.getString('gantt.loadResourceChart.noSelection.title')));
      this.noSelectionElt.appendChild(noSelMsg);
      this.body.appendChild(this.noSelectionElt);

      function createGetter(config) {
        if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isFunction(config)) {
          return config;
        }

        if (_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.isString(config)) {
          return _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.propertyEvaluator(config);
        }

        return function () {
          return config;
        };
      }

      this.resourceMaxLoad = config.maxLoad && createGetter(config.maxLoad);

      this.resourceActivityLoad = config.load && createGetter(config.load) || function () {
        return 1;
      };

      var loadChart = this;
      var RendererClass = _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].components.Renderer.impl || _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].components.Renderer;
      this.chartRenderer = new RendererClass({}, {
        background: function background(res) {
          return loadChart.resourceRenderer.background(res);
        },
        getTooltipProperties: function getTooltipProperties(info) {
          var props = ['Resource', info.resourceName, 'Activity', info.activityName, 'Load', info.resourceLoad];

          if (info.resourceMaxLoad) {
            props.push('Maximum load', info.resourceMaxLoad);
          }

          return props;
        }
      }, this.gantt);
      this.initTooltips();
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible) {}
  }, {
    key: "setTimeLineBounds",
    value: function setTimeLineBounds(bounds) {
      this.timeLineScrollerElt.style.left = bounds.x + 'px';
      this.timeLineScrollerElt.style.width = bounds.width + 'px';
      this.leftPanel.style.width = bounds.x + 'px';

      if (this.timeLineElt) {
        this.updatePlottingArea();
        this.drawCharts();
      }
    }
  }, {
    key: "setTimeLineWidth",
    value: function setTimeLineWidth(w) {
      if (this.timeLineElt) {
        this.timeLineElt.style.width = w + 'px';
      }
    }
  }, {
    key: "setTimeLineScrollLeft",
    value: function setTimeLineScrollLeft(left) {
      this.timeLineScrollerElt.scrollLeft = left;
    }
  }, {
    key: "getTimeLineNode",
    value: function getTimeLineNode() {
      return this.timeLineScrollerElt;
    }
  }, {
    key: "setTimeWindow",
    value: function setTimeWindow(start, end, onInit) {
      var _this = this;

      if (this.timeLineElt) {
        this.timeLineScrollerElt.removeChild(this.timeLineElt);
      }

      this.timeLineElt = document.createElement('div');
      this.timeLineElt.style.width = this.gantt.timeLine.getWidth() + 'px';
      this.timeLineElt.style.height = '100%';

      try {
        // See https://github.com/almende/vis/issues/24 for time zone hack
        this.visTimeline = new vis__WEBPACK_IMPORTED_MODULE_5___default.a.Timeline(this.timeLineElt, {}, {
          // 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'month', 'year'
          orientation: {
            axis: 'bottom',
            item: 'bottom'
          },
          height: '100%',
          start: this.gantt.timeLine.scrollableHorizon.start,
          end: this.gantt.timeLine.scrollableHorizon.end
        });
        this.visTimeline.range.body.emitter.off('mousewheel');

        var fireReady = function fireReady() {
          _this.visTimeline.off('changed', fireReady);

          _this.timeScaleElt = _this.timeLineElt.getElementsByClassName('vis-panel vis-bottom')[0];
          var style = window.getComputedStyle(_this.timeScaleElt);
          var bottom = style.bottom;
          bottom = bottom ? Number.parseInt(bottom, 10) : 0;

          if (Number.isNaN(bottom)) {
            bottom = 0;
          }

          var topBorder = style.borderTopWidth;
          topBorder = topBorder ? Number.parseInt(topBorder, 10) : 0;
          _this.timeScaleHeight = $(_this.timeScaleElt).outerHeight() + bottom - topBorder; // visjs set a -2px bottom

          _this.updatePlottingArea();

          _this.triggerEvent(_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].events.TIME_LINE_INIT);

          if (onInit) {
            onInit();
          }
        };

        this.visTimeline.on('changed', fireReady);
      } catch (e) {
        console.error(e);
        throw e;
      }

      this.timeLineScrollerElt.appendChild(this.timeLineElt);
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(left) {
      this.getScroller().scrollLeft = left;
    }
  }, {
    key: "setResources",
    value: function setResources(resources) {
      this.resources = resources;
    }
  }, {
    key: "setResourceRenderer",
    value: function setResourceRenderer(resRenderer) {
      this.resourceRenderer = resRenderer;
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "draw",
    value: function draw() {
      if (this.visTimeline) {
        this.noSelectionElt.style.display = this.resources && this.resources.length ? 'none' : 'flex';
        this.updateLegend();
        this.drawCharts();
      }
    }
  }, {
    key: "unselectRows",
    value: function unselectRows(rows) {
      rows.forEach(function (row) {
        return row.backgroundColor = undefined;
      });
    }
  }, {
    key: "drawCharts",
    value: function drawCharts() {
      var _this2 = this;

      var firstBlock = new _block__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"](0, 0);
      var maxLoad;
      var load;
      (this.resources || []).forEach(function (res) {
        (res.activities || []).forEach(function (act) {
          load = _this2.resourceActivityLoad(res, act);
          maxLoad = _this2.resourceMaxLoad && _this2.resourceMaxLoad(res, act);
          firstBlock.insert(act.start, act.end, new ResNode(res, act, load, maxLoad));
        });
      });
      var max = firstBlock.computeMax(this.resourceMaxLoad && this.resources.length === 1);
      this.setYAxisMax(max);
      var items = [];
      var item;
      var ctx = {
        max: max,
        useMaxLoad: this.resourceMaxLoad && this.resources.length === 1,
        chartRenderer: this.chartRenderer,
        plotAreaHeight: this.plotAreaHeight - CHART_TOP_MARGIN,
        yRatio: this.yRatio
      };

      for (var block = firstBlock.next; block; block = block.next) {
        item = block.createVisItem(ctx);

        if (item) {
          items.push(item);
        }
      }

      this.visTimeline.setItems(items);
    }
  }, {
    key: "updateLegend",
    value: function updateLegend() {
      if (this.legend) {
        this.legendPanel.removeChild(this.legend);
      }

      var hasRes = this.resources && this.resources.length;
      _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.toggleClass(this.legendPanel, 'empty-legend', !hasRes);
      this.legendPanel.style.overflowY = 'auto';

      if (this.resources) {
        this.legend = document.createElement('ul');
        this.legend.className = 'legend';
        var li;
        var colorBox;
        var name;
        var res;

        for (var i = 0, count = this.resources.length; i < count; i++) {
          res = this.resources[i];
          li = document.createElement('li');
          li.className = 'legend-item';
          li.style.display = 'table';
          colorBox = document.createElement('div');
          colorBox.className = 'legend-item-color';
          colorBox.style.display = 'table-cell';
          colorBox.style.verticalAlign = 'middle';
          colorBox.style.backgroundColor = res.backgroundColor;
          li.appendChild(colorBox);
          name = document.createElement('div');
          name.className = 'legend-item-name';
          name.style.display = 'table-cell';
          name.style.verticalAlign = 'middle';
          name.innerHTML = res.name;
          li.appendChild(name);
          this.legend.appendChild(li);
        }

        this.legendPanel.appendChild(this.legend);
      }
    }
  }, {
    key: "setYAxisMax",
    value: function setYAxisMax(max) {
      var tickCount;
      var tickUnit;
      this.yAxis.innerHTML = '';
      if (!max) return; // Calc the best tick units

      function closest10Factor(n) {
        var f = 10;

        while (n > f) {
          f *= 10;
        }

        return f;
      }

      var MAX_TICK_COUNT = 5;

      if (max <= MAX_TICK_COUNT) {
        tickUnit = 1;
        tickCount = max;
      } else {
        // Due to the small height of the axis, we can draw a maximum of 5 axis labels
        // Determine the best unit to use for a number of labels from 2 to 5
        max = closest10Factor(max);
        tickCount = MAX_TICK_COUNT;
        tickUnit = Math.round(max / tickCount);
      }

      var totalHeight = this.plotAreaHeight - CHART_TOP_MARGIN;
      this.yRatio = Math.round(totalHeight / max); // Create the Y Axis labels

      for (var iTick = 0, v = 0, h = tickUnit * this.yRatio; iTick <= tickCount; iTick++, v += tickUnit) {
        // <= MAX_TICK_COUNT because first tick is zero
        var label = this.createLabelledTick('' + v, h);
        label.style.top = this.plotAreaHeight - v * this.yRatio - h / 2 - 2 + 'px'; // -2 for the height of the tick border

        label.style.right = '0';
        this.yAxis.appendChild(label);
      }
    }
  }, {
    key: "createLabelledTick",
    value: function createLabelledTick(label, height) {
      var labelDiv = document.createElement('div');
      labelDiv.className = 'y-axis-label';
      labelDiv.style.position = 'absolute';
      labelDiv.style.height = height + 'px';
      labelDiv.style.lineHeight = height + 'px';
      labelDiv.style.textAlign = 'center';
      labelDiv.style.whiteSpace = 'nowrap';
      labelDiv.appendChild(document.createTextNode(label));
      var tick = document.createElement('div');
      tick.style.display = 'inline-block';
      tick.style.position = 'absolute';
      tick.style.top = height / 2 + 'px';
      tick.style.right = '0';
      tick.className = 'y-axis-tick';
      labelDiv.appendChild(tick);
      return labelDiv;
    }
  }, {
    key: "updatePlottingArea",
    value: function updatePlottingArea() {
      // Cannot use native offsetHeight as it is rounding dimensions
      // See warning at https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
      this.setPlottingAreaHeight($(this.body).outerHeight() - this.timeScaleHeight);
    }
  }, {
    key: "setPlottingAreaHeight",
    value: function setPlottingAreaHeight(h) {
      this.yAxis.style.height = h + 'px';
      this.plotAreaHeight = h;
    }
  }, {
    key: "getScroller",
    value: function getScroller() {
      return this.timeLineScrollerElt;
    } //
    // Tooltips
    //

  }, {
    key: "initTooltips",
    value: function initTooltips() {
      var _this3 = this;

      var isResourceLoadNode = function isResourceLoadNode(elt) {
        return _core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].utils.hasClass(elt, _block__WEBPACK_IMPORTED_MODULE_7__[/* RESOURCE_LOAD_CLASS */ "b"]);
      };

      var getResourceLoadNode = function getResourceLoadNode(elt) {
        for (; elt && elt !== _this3.body; elt = elt.parentNode) {
          if (isResourceLoadNode(elt)) {
            return elt;
          }
        }

        return null;
      };

      var getResource = function getResource(id) {
        return id && _this3.gantt.table.getRow(id);
      };

      var gantt = this.gantt;
      var loadchart = this;
      this.gantt.tooltip.installTooltip({
        // The container that contains elements to display tooltip for.
        container: this.body,
        // The container inside which bounds the tooltip can be displayed
        getTooltipDisplayContainer: function getTooltipDisplayContainer() {
          return gantt.getBody();
        },
        // Returns an element in the node hierarchy for which a tooltip can be displayed
        getTooltipElement: function getTooltipElement(node) {
          return getResourceLoadNode(node);
        },
        getTooltipData: function getTooltipData(node) {
          return {
            resourceName: node.dataset.resName,
            resourceLoad: node.dataset.resLoad,
            resourceMaxLoad: node.dataset.resMaxLoad,
            activityName: node.dataset.actName
          };
        },
        renderTooltip: function renderTooltip(node
        /* The element returned by getTooltipElement */
        , info
        /* data returned by getTooltipData for the specified tooltipElt */
        , tooltipCtnr
        /* The container of the tooltip to fill with info. */
        ) {
          if (info) {
            loadchart.chartRenderer.getTooltip(tooltipCtnr, info);
          }
        }
      });
    }
  }]);

  return LoadResourceChart;
}(_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].components.LoadResourceChart);

_core_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].components.LoadResourceChart.impl = LoadResourceChart;
/* unused harmony default export */ var _unused_webpack_default_export = (LoadResourceChart);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(26);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(32);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableController; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _treetablecontroller_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _treetablecontroller_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_treetablecontroller_scss__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable */

var DATATABLE_FILTER_INSTALLED = false;
var TREE_NODE_TYPE = 'tree-node';

var TreeTableController = /*#__PURE__*/function () {
  function TreeTableController() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TreeTableController);

    this.collapsedNodes = {};
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TreeTableController, [{
    key: "getHierarchyColumn",
    value: function getHierarchyColumn(columns) {
      // Safe enough for now to consider the first column is the one controlling the table hierarchy
      return columns && columns.length && columns[0] || null;
    }
  }, {
    key: "customizeOptions",
    value: function customizeOptions(options, hCol, rowRenderer) {
      var _this = this;

      if (hCol || (hCol = this.getHierarchyColumn(options.columns))) {
        // Without this column, not hierarchy can be managed, this tree table controller remains inactive
        if (!hCol.render) {
          hCol.render = {};
        }

        var oldRender = hCol.render.display;
        var oldData = hCol.data;
        var self = this;

        hCol.render.display = function (node, type, full, meta) {
          var content = oldRender && oldRender.call(this, oldData && node[oldData] || node, type, full, meta) || node.name;
          var parent = node.parent;
          var prefix = '';

          while (parent) {
            prefix += '<div class="tree-node-spacing"></div>';
            parent = parent.parent;
          }

          prefix += '<div class="tree-node-handle">' + (node.children && node.children.length ? '<i style="width: 16px;" class="fa fa-caret-right fa-lg collapsed"></i><i style="16px;" class="fa fa-caret-down fa-lg expanded"></i>' : '') + '</div>';

          if (node.color) {
            prefix += '<div class="tree-node-color" style="background-color="' + node.color + '"></div>';
          }

          return prefix + content;
        };

        hCol.render.filter = function (node, type, full, meta) {
          return node ? node.name : '';
        };

        hCol.className = hCol.className && hCol.className + ' hierarchy-control' || 'hierarchy-control';
        hCol.type = TREE_NODE_TYPE;
        var oldCreatedRow = options.createdRow;

        options.createdRow = function (row, node, index) {
          row.tabIndex = "0";
          var parentRow = node.children && node.children.length;

          if (rowRenderer) {
            rowRenderer.draw(node, row, node);
          }

          var classname = parentRow ? _this.collapsedNodes[node.id] && 'parent-row collapsed' || 'parent-row' : 'leaf-row';

          if (node.hidden) {
            classname = classname + ' hidden';
          }

          $(row).addClass(classname);

          if (oldCreatedRow) {
            oldCreatedRow.call(_this, row, node, index);
          }
        };
      }
    }
  }, {
    key: "getData",
    value: function getData(id) {
      var row = this.$dataTable.row(id);
      var node;
      return row && (node = row.data()) && node.getData() || null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.collapsedNodes = {};
    }
  }, {
    key: "getRow",
    value: function getRow(data) {
      if (typeof data === 'string') {
        // object ID
        return this.$dataTable.row('#' + data);
      }

      return data;
    }
  }, {
    key: "isCollapsedNode",
    value: function isCollapsedNode(node) {
      if (typeof node === 'string') {
        return this.collapsedNodes[node];
      }

      var row = this.getRow(node);
      node = row && row.data();
      return node && node.children && this.collapsedNodes[node.id];
    }
  }, {
    key: "collapseNode",
    value: function collapseNode(node, collapse) {
      var row = this.getRow(node);
      node = row && row.data();

      if (node && node.children && node.children.length) {
        var visible = !collapse;

        if (!collapse) {
          delete this.collapsedNodes[node.id];
          $(row.node()).removeClass('collapsed');
        } else {
          this.collapsedNodes[node.id] = true;
          $(row.node()).addClass('collapsed');
        }

        var rowsModified = [];

        for (var i = 0; i < node.children.length; i++) {
          this.setRowVisible(node.children[i], visible, rowsModified);
        }

        this.rowsVisibilityChanged(!collapse, rowsModified, node.id);
      }
    }
  }, {
    key: "rowsVisibilityChanged",
    value: function rowsVisibilityChanged(visible, rows, rowRef) {}
  }, {
    key: "setRowVisible",
    value: function setRowVisible(row, visible, rowsModified) {
      var tr = row.tr || this.$dataTable.row('#' + row.id).node();

      if (tr) {
        $(tr).toggleClass('hidden', !visible);

        if (visible) {
          delete row.hidden;
        } else {
          row.hidden = true;
        }

        if (rowsModified) {
          rowsModified.push(row.id);
        }

        if (row.children && !this.collapsedNodes[row.id]) {
          for (var i = 0, count = row.children.length; i < count; ++i) {
            this.setRowVisible(row.children[i], visible, rowsModified);
          }
        }
      }
    }
  }, {
    key: "expandParents",
    value: function expandParents(row) {
      row = this.getRow(row); // row is Datatable row

      var node = row && row.data(); // node is Gantt row.

      if (node) {
        var parent = node.parent,
            topCollapsed;

        while (parent) {
          if (this.collapsedNodes[parent.id]) {
            // Change the collapse state of all collapsed ancestor except for the top most collapsed ancestor
            // which will be processed with the call to collapseNode().
            if (topCollapsed) {
              delete this.collapsedNodes[topCollapsed.id];
            }

            topCollapsed = parent;
          }

          parent = parent.parent;
        }

        if (topCollapsed) {
          // Expand the top most collapsed ancestor
          this.collapseNode(topCollapsed.id, false);
        }
      }
    }
  }, {
    key: "install",
    value: function install($dataTable, bodyElt) {
      var _this2 = this;

      this.$dataTable = $dataTable;
      $(bodyElt).on('click', 'td.hierarchy-control .tree-node-handle', function (e) {
        var tr = $(e.target).closest('tr');

        if (tr && tr.length) {
          var row = $dataTable.row(tr);

          _this2.collapseNode(row, !_this2.isCollapsedNode(row));
        }
      });

      if (!DATATABLE_FILTER_INSTALLED) {
        DATATABLE_FILTER_INSTALLED = true;
        $.fn.dataTable.ext.search.push(function (settings, aData, dataIndex, node) {
          var dataTable;

          if (dataTable = settings.ganttDataTable) {
            // Be sure this global search applies only to GanttDataTables
            if (!dataTable.filter.isEmpty()) {
              node.__filterMatched = dataTable.filter.accept(node, aData, dataIndex);
            }
          }

          return true;
        });
        $.fn.dataTable.ext.search.push(function (settings, data, dataIndex, node) {
          if (settings.ganttDataTable) {
            // Be sure this global search applies only to GanttDataTables
            if (node.hidden) {
              return false;
            }

            if (!settings.ganttDataTable.filter.isEmpty()) {
              // If a search is in place, a collapsed or not matching node cam be made visible if at least one child matches the search
              var processVisibilityFromChildren = function processVisibilityFromChildren(vNode) {
                if (vNode && vNode.children) {
                  for (var iChild = 0, count = vNode.children.length, child; iChild < count; iChild++) {
                    child = vNode.children[iChild];

                    if (child.__filterMatched || processVisibilityFromChildren(child)) {
                      vNode.__filterMatched = true;
                      return true;
                    }
                  }
                }

                return false;
              };

              return node.__filterMatched || processVisibilityFromChildren(node);
            }

            return true;
          }

          return true;
        });

        var makeComparisonFct = function makeComparisonFct(m) {
          function comp(a, b, comparator) {
            a = a.getSortValue ? a.getSortValue(a) : comparator ? a : a.name;
            b = b.getSortValue ? b.getSortValue(b) : comparator ? b : b.name;
            return comparator ? comparator(a, b) * m : a < b ? -m : a > b ? m : 0;
          }

          return function (a, b) {
            var comparator = a.comparator; // If comparator specified in user config, we are sure it is provided with a or b. But a.parent or b.parent won't have it has they are not constructed from the sort render callback

            if (a.parent === b.parent) {
              return comp(a, b, comparator);
            } // Look for common ancestor


            var aParent = a.parent,
                lastParent = a,
                bParent;

            while (aParent) {
              // Has b aParent has an ancestor?
              bParent = b;

              while (bParent) {
                if (bParent.parent === aParent) {
                  return comp(lastParent, bParent, comparator);
                }

                bParent = bParent.parent;
              }

              lastParent = aParent;
              aParent = aParent.parent;
            } // Compare top ancestor for both nodes


            for (bParent = b; bParent.parent;) {
              bParent = bParent.parent;
            }

            return comp(lastParent, bParent, comparator);
          };
        };

        $.fn.dataTable.ext.type.order[TREE_NODE_TYPE + '-asc'] = makeComparisonFct(1);
        $.fn.dataTable.ext.type.order[TREE_NODE_TYPE + '-desc'] = makeComparisonFct(-1);
      }
    }
  }]);

  return TreeTableController;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _jquery_jquery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _jquery_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _jquery_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _jquery_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _jquery_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/**
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* import-sort-ignore */
 // jQuery modules





 // TODO should be defined in webpack, but there is a .default issue

if (typeof window !== 'undefined') {
  window.Gantt = _gantt__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
}

_gantt__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].version = "0.5.21";

try {
  console.log("[LOADED] ".concat("ibm-gantt-chart", "@").concat("0.5.21", " (jquery@").concat($().jquery, ", datatables.net@").concat($().DataTable.version, ")"));
} catch (error) {// nothig to do
}

/* harmony default export */ __webpack_exports__["default"] = (_gantt__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


var allGantts = [];

var getGantt = function getGantt(node) {
  for (var i = 0, count = allGantts.length; i < count; ++i) {
    if (allGantts[i].node === node) {
      return allGantts[i];
    }
  }

  return null;
};

var removeGantt = function removeGantt(gantt) {
  var index = allGantts.indexOf(gantt);

  if (index > -1) {
    allGantts.splice(index, 1);
  }

  return gantt;
};

_core_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].envReady = function () {
  return new Promise(function (resolve, reject) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(resolve);
  });
};

try {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.Gantt = function (options) {
    var gantts = [];
    this.each(function () {
      var _this = this;

      var gantt = getGantt(this);

      if (gantt) {
        if (options) {
          gantt.destroy();
          removeGantt(gantt);
        } else {
          // Use the current gantt associated with this node as no configuration change has been specified.
          return;
        }
      }

      gantt = new _core_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](this, options);

      gantt.disconnect = function () {
        removeGantt(_this);
      };

      gantts.push(gantt);
    });
    var ganttRef = gantts.length && gantts[0];
    var apiRef = ganttRef && ganttRef.api && ganttRef.api() || {};

    if (gantts.length === 1) {
      this.api = function () {
        return apiRef;
      };
    } else if (gantts.length > 0) {// TODO
    } else {
      this.api = function () {
        return {};
      };
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this, apiRef);
    return gantts.length && gantts[0];
  };
} catch (e) {
  console.error(e);
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


_core_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].utils = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, _core_core__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].utils, {
  closest: function closest(elt, selector) {
    var res = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elt).closest(selector);
    return res && res.length && res[0] || null;
  },
  mergeObjects: function mergeObjects() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend.apply(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, args);
  },
  // Triggers security issues
  // https://github.ibm.com/IBMDecisionOptimization/dd-gantt-component/issues/21
  // html(node, htmlText) {
  //     $(node).html(htmlText);
  // },
  offsetParent: function offsetParent(elt) {
    var $parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elt).offsetParent();
    return $parent.length && $parent[0] || null;
  },
  ajax: function ajax(url, params) {
    var $params = {
      url: url || params.url,
      dataType: params && params.dataType || 'json'
    };

    if (params && params.method) {
      $params.method = params.method;
    }

    if (params && params.params) {
      $params.data = params.params;
    }

    if (params && params.customizeRequest) {
      $params.beforeSend = params.customizeRequest;
    }

    var settings = params.settings;

    if (params && params.success) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax($params).then(function (data, statusText, req) {
        if (params.settings) {
          params.settings.statusText = statusText;
          params.settings.request = req;
        }

        if (params.context) {
          return params.success.call(params.context, data, params.settings);
        }

        return params.success(data, params.settings);
      });
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax($params);
  },
  getHeight: function getHeight(elt) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(elt).height();
  }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";var e,n;function M(){return e.apply(null,arguments)}function i(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function _(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function h(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function o(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var a in e)if(h(e,a))return;return 1}function r(e){return void 0===e}function m(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,a){for(var t=[],s=0;s<e.length;++s)t.push(a(e[s],s));return t}function l(e,a){for(var t in a)h(a,t)&&(e[t]=a[t]);return h(a,"toString")&&(e.toString=a.toString),h(a,"valueOf")&&(e.valueOf=a.valueOf),e}function c(e,a,t,s){return Sa(e,a,t,s,!0).utc()}function L(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function Y(e){if(null==e._isValid){var a=L(e),t=n.call(a.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidEra&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(s=s&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function y(e){var a=c(NaN);return null!=e?l(L(a),e):L(a).userInvalidated=!0,a}n=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,s=0;s<t;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1};var f=M.momentProperties=[],a=!1;function p(e,a){var t,s,n;if(r(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),r(a._i)||(e._i=a._i),r(a._f)||(e._f=a._f),r(a._l)||(e._l=a._l),r(a._strict)||(e._strict=a._strict),r(a._tzm)||(e._tzm=a._tzm),r(a._isUTC)||(e._isUTC=a._isUTC),r(a._offset)||(e._offset=a._offset),r(a._pf)||(e._pf=L(a)),r(a._locale)||(e._locale=a._locale),0<f.length)for(t=0;t<f.length;t++)r(n=a[s=f[t]])||(e[s]=n);return e}function k(e){p(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===a&&(a=!0,M.updateOffset(this),a=!1)}function D(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function T(e){!1===M.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function t(n,r){var d=!0;return l(function(){if(null!=M.deprecationHandler&&M.deprecationHandler(null,n),d){for(var e,a,t=[],s=0;s<arguments.length;s++){if(e="","object"==typeof arguments[s]){for(a in e+="\n["+s+"] ",arguments[0])h(arguments[0],a)&&(e+=a+": "+arguments[0][a]+", ");e=e.slice(0,-2)}else e=arguments[s];t.push(e)}T(n+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),d=!1}return r.apply(this,arguments)},r)}var s,g={};function w(e,a){null!=M.deprecationHandler&&M.deprecationHandler(e,a),g[e]||(T(a),g[e]=!0)}function v(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,a){var t,s=l({},e);for(t in a)h(a,t)&&(_(e[t])&&_(a[t])?(s[t]={},l(s[t],e[t]),l(s[t],a[t])):null!=a[t]?s[t]=a[t]:delete s[t]);for(t in e)h(e,t)&&!h(a,t)&&_(e[t])&&(s[t]=l({},s[t]));return s}function S(e){null!=e&&this.set(e)}M.suppressDeprecationWarnings=!1,M.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)h(e,a)&&t.push(a);return t};function H(e,a,t){var s=""+Math.abs(e),n=a-s.length;return(0<=e?t?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}var j=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,x=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,P={},O={};function W(e,a,t,s){var n="string"==typeof s?function(){return this[s]()}:s;e&&(O[e]=n),a&&(O[a[0]]=function(){return H(n.apply(this,arguments),a[1],a[2])}),t&&(O[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function A(e,a){return e.isValid()?(a=E(a,e.localeData()),P[a]=P[a]||function(s){for(var e,n=s.match(j),a=0,r=n.length;a<r;a++)O[n[a]]?n[a]=O[n[a]]:n[a]=(e=n[a]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var a="",t=0;t<r;t++)a+=v(n[t])?n[t].call(e,s):n[t];return a}}(a),P[a](e)):e.localeData().invalidDate()}function E(e,a){var t=5;function s(e){return a.longDateFormat(e)||e}for(x.lastIndex=0;0<=t&&x.test(e);)e=e.replace(x,s),x.lastIndex=0,--t;return e}var F={};function z(e,a){var t=e.toLowerCase();F[t]=F[t+"s"]=F[a]=e}function N(e){return"string"==typeof e?F[e]||F[e.toLowerCase()]:void 0}function J(e){var a,t,s={};for(t in e)h(e,t)&&(a=N(t))&&(s[a]=e[t]);return s}var R={};function C(e,a){R[e]=a}function I(e){return e%4==0&&e%100!=0||e%400==0}function U(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function G(e){var a=+e,t=0;return 0!=a&&isFinite(a)&&(t=U(a)),t}function V(a,t){return function(e){return null!=e?(K(this,a,e),M.updateOffset(this,t),this):B(this,a)}}function B(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function K(e,a,t){e.isValid()&&!isNaN(t)&&("FullYear"===a&&I(e.year())&&1===e.month()&&29===e.date()?(t=G(t),e._d["set"+(e._isUTC?"UTC":"")+a](t,e.month(),Se(t,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+a](t))}var q,Z=/\d/,$=/\d\d/,Q=/\d{3}/,X=/\d{4}/,ee=/[+-]?\d{6}/,ae=/\d\d?/,te=/\d\d\d\d?/,se=/\d\d\d\d\d\d?/,ne=/\d{1,3}/,re=/\d{1,4}/,de=/[+-]?\d{1,6}/,ie=/\d+/,_e=/[+-]?\d+/,oe=/Z|[+-]\d\d:?\d\d/gi,me=/Z|[+-]\d\d(?::?\d\d)?/gi,ue=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function le(e,t,s){q[e]=v(t)?t:function(e,a){return e&&s?s:t}}function Me(e,a){return h(q,e)?q[e](a._strict,a._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}q={};var ce={};function Le(e,t){var a,s=t;for("string"==typeof e&&(e=[e]),m(t)&&(s=function(e,a){a[t]=G(e)}),a=0;a<e.length;a++)ce[e[a]]=s}function Ye(e,n){Le(e,function(e,a,t,s){t._w=t._w||{},n(e,t._w,t,s)})}var ye,fe=0,pe=1,ke=2,De=3,Te=4,ge=5,we=6,ve=7,be=8;function Se(e,a){if(isNaN(e)||isNaN(a))return NaN;var t,s=(a%(t=12)+t)%t;return e+=(a-s)/12,1==s?I(e)?29:28:31-s%7%2}ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){for(var a=0;a<this.length;++a)if(this[a]===e)return a;return-1},W("M",["MM",2],"Mo",function(){return this.month()+1}),W("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),W("MMMM",0,0,function(e){return this.localeData().months(this,e)}),z("month","M"),C("month",8),le("M",ae),le("MM",ae,$),le("MMM",function(e,a){return a.monthsShortRegex(e)}),le("MMMM",function(e,a){return a.monthsRegex(e)}),Le(["M","MM"],function(e,a){a[pe]=G(e)-1}),Le(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[pe]=n:L(t).invalidMonth=e});var He="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),je="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),xe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Pe=ue,Oe=ue;function We(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=G(a);else if(!m(a=e.localeData().monthsParse(a)))return e;return t=Math.min(e.date(),Se(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function Ae(e){return null!=e?(We(this,e),M.updateOffset(this,!0),this):B(this,"Month")}function Ee(){function e(e,a){return a.length-e.length}for(var a,t=[],s=[],n=[],r=0;r<12;r++)a=c([2e3,r]),t.push(this.monthsShort(a,"")),s.push(this.months(a,"")),n.push(this.months(a,"")),n.push(this.monthsShort(a,""));for(t.sort(e),s.sort(e),n.sort(e),r=0;r<12;r++)t[r]=he(t[r]),s[r]=he(s[r]);for(r=0;r<24;r++)n[r]=he(n[r]);this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Fe(e){return I(e)?366:365}W("Y",0,0,function(){var e=this.year();return e<=9999?H(e,4):"+"+e}),W(0,["YY",2],0,function(){return this.year()%100}),W(0,["YYYY",4],0,"year"),W(0,["YYYYY",5],0,"year"),W(0,["YYYYYY",6,!0],0,"year"),z("year","y"),C("year",1),le("Y",_e),le("YY",ae,$),le("YYYY",re,X),le("YYYYY",de,ee),le("YYYYYY",de,ee),Le(["YYYYY","YYYYYY"],fe),Le("YYYY",function(e,a){a[fe]=2===e.length?M.parseTwoDigitYear(e):G(e)}),Le("YY",function(e,a){a[fe]=M.parseTwoDigitYear(e)}),Le("Y",function(e,a){a[fe]=parseInt(e,10)}),M.parseTwoDigitYear=function(e){return G(e)+(68<G(e)?1900:2e3)};var ze=V("FullYear",!0);function Ne(e){var a,t;return e<100&&0<=e?((t=Array.prototype.slice.call(arguments))[0]=e+400,a=new Date(Date.UTC.apply(null,t)),isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e)):a=new Date(Date.UTC.apply(null,arguments)),a}function Je(e,a,t){var s=7+a-t;return s-(7+Ne(e,0,s).getUTCDay()-a)%7-1}function Re(e,a,t,s,n){var r,d=1+7*(a-1)+(7+t-s)%7+Je(e,s,n),i=d<=0?Fe(r=e-1)+d:d>Fe(e)?(r=e+1,d-Fe(e)):(r=e,d);return{year:r,dayOfYear:i}}function Ce(e,a,t){var s,n,r=Je(e.year(),a,t),d=Math.floor((e.dayOfYear()-r-1)/7)+1;return d<1?s=d+Ie(n=e.year()-1,a,t):d>Ie(e.year(),a,t)?(s=d-Ie(e.year(),a,t),n=e.year()+1):(n=e.year(),s=d),{week:s,year:n}}function Ie(e,a,t){var s=Je(e,a,t),n=Je(e+1,a,t);return(Fe(e)-s+n)/7}W("w",["ww",2],"wo","week"),W("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),C("week",5),C("isoWeek",5),le("w",ae),le("ww",ae,$),le("W",ae),le("WW",ae,$),Ye(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=G(e)});function Ue(e,a){return e.slice(a,7).concat(e.slice(0,a))}W("d",0,"do","day"),W("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),W("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),W("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),W("e",0,0,"weekday"),W("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),C("day",11),C("weekday",11),C("isoWeekday",11),le("d",ae),le("e",ae),le("E",ae),le("dd",function(e,a){return a.weekdaysMinRegex(e)}),le("ddd",function(e,a){return a.weekdaysShortRegex(e)}),le("dddd",function(e,a){return a.weekdaysRegex(e)}),Ye(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:L(t).invalidWeekday=e}),Ye(["d","e","E"],function(e,a,t,s){a[s]=G(e)});var Ge="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ve="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Be="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ke=ue,qe=ue,Ze=ue;function $e(){function e(e,a){return a.length-e.length}for(var a,t,s,n,r=[],d=[],i=[],_=[],o=0;o<7;o++)a=c([2e3,1]).day(o),t=he(this.weekdaysMin(a,"")),s=he(this.weekdaysShort(a,"")),n=he(this.weekdays(a,"")),r.push(t),d.push(s),i.push(n),_.push(t),_.push(s),_.push(n);r.sort(e),d.sort(e),i.sort(e),_.sort(e),this._weekdaysRegex=new RegExp("^("+_.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,a){W(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function ea(e,a){return a._meridiemParse}W("H",["HH",2],0,"hour"),W("h",["hh",2],0,Qe),W("k",["kk",2],0,function(){return this.hours()||24}),W("hmm",0,0,function(){return""+Qe.apply(this)+H(this.minutes(),2)}),W("hmmss",0,0,function(){return""+Qe.apply(this)+H(this.minutes(),2)+H(this.seconds(),2)}),W("Hmm",0,0,function(){return""+this.hours()+H(this.minutes(),2)}),W("Hmmss",0,0,function(){return""+this.hours()+H(this.minutes(),2)+H(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),z("hour","h"),C("hour",13),le("a",ea),le("A",ea),le("H",ae),le("h",ae),le("k",ae),le("HH",ae,$),le("hh",ae,$),le("kk",ae,$),le("hmm",te),le("hmmss",se),le("Hmm",te),le("Hmmss",se),Le(["H","HH"],De),Le(["k","kk"],function(e,a,t){var s=G(e);a[De]=24===s?0:s}),Le(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),Le(["h","hh"],function(e,a,t){a[De]=G(e),L(t).bigHour=!0}),Le("hmm",function(e,a,t){var s=e.length-2;a[De]=G(e.substr(0,s)),a[Te]=G(e.substr(s)),L(t).bigHour=!0}),Le("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[De]=G(e.substr(0,s)),a[Te]=G(e.substr(s,2)),a[ge]=G(e.substr(n)),L(t).bigHour=!0}),Le("Hmm",function(e,a,t){var s=e.length-2;a[De]=G(e.substr(0,s)),a[Te]=G(e.substr(s))}),Le("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[De]=G(e.substr(0,s)),a[Te]=G(e.substr(s,2)),a[ge]=G(e.substr(n))});var aa=V("Hours",!0);var ta,sa={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:je,week:{dow:0,doy:6},weekdays:Ge,weekdaysMin:Be,weekdaysShort:Ve,meridiemParse:/[ap]\.?m?\.?/i},na={},ra={};function da(e){return e?e.toLowerCase().replace("_","-"):e}function ia(e){for(var a,t,s,n,r=0;r<e.length;){for(a=(n=da(e[r]).split("-")).length,t=(t=da(e[r+1]))?t.split("-"):null;0<a;){if(s=_a(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&function(e,a){for(var t=Math.min(e.length,a.length),s=0;s<t;s+=1)if(e[s]!==a[s])return s;return t}(n,t)>=a-1)break;a--}r++}return ta}function _a(a){var e;if(void 0===na[a]&&"undefined"!=typeof module&&module&&module.exports)try{e=ta._abbr,!(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),oa(e)}catch(e){na[a]=null}return na[a]}function oa(e,a){var t;return e&&((t=r(a)?ua(e):ma(e,a))?ta=t:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ta._abbr}function ma(e,a){if(null===a)return delete na[e],null;var t,s=sa;if(a.abbr=e,null!=na[e])w("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=na[e]._config;else if(null!=a.parentLocale)if(null!=na[a.parentLocale])s=na[a.parentLocale]._config;else{if(null==(t=_a(a.parentLocale)))return ra[a.parentLocale]||(ra[a.parentLocale]=[]),ra[a.parentLocale].push({name:e,config:a}),null;s=t._config}return na[e]=new S(b(s,a)),ra[e]&&ra[e].forEach(function(e){ma(e.name,e.config)}),oa(e),na[e]}function ua(e){var a;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ta;if(!i(e)){if(a=_a(e))return a;e=[e]}return ia(e)}function la(e){var a,t=e._a;return t&&-2===L(e).overflow&&(a=t[pe]<0||11<t[pe]?pe:t[ke]<1||t[ke]>Se(t[fe],t[pe])?ke:t[De]<0||24<t[De]||24===t[De]&&(0!==t[Te]||0!==t[ge]||0!==t[we])?De:t[Te]<0||59<t[Te]?Te:t[ge]<0||59<t[ge]?ge:t[we]<0||999<t[we]?we:-1,L(e)._overflowDayOfYear&&(a<fe||ke<a)&&(a=ke),L(e)._overflowWeeks&&-1===a&&(a=ve),L(e)._overflowWeekday&&-1===a&&(a=be),L(e).overflow=a),e}var Ma=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ha=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ca=/Z|[+-]\d\d(?::?\d\d)?/,La=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Ya=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ya=/^\/?Date\((-?\d+)/i,fa=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,pa={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ka(e){var a,t,s,n,r,d,i=e._i,_=Ma.exec(i)||ha.exec(i);if(_){for(L(e).iso=!0,a=0,t=La.length;a<t;a++)if(La[a][1].exec(_[1])){n=La[a][0],s=!1!==La[a][2];break}if(null==n)return void(e._isValid=!1);if(_[3]){for(a=0,t=Ya.length;a<t;a++)if(Ya[a][1].exec(_[3])){r=(_[2]||" ")+Ya[a][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(_[4]){if(!ca.exec(_[4]))return void(e._isValid=!1);d="Z"}e._f=n+(r||"")+(d||""),va(e)}else e._isValid=!1}function Da(e,a,t,s,n,r){var d=[function(e){var a=parseInt(e,10);{if(a<=49)return 2e3+a;if(a<=999)return 1900+a}return a}(e),je.indexOf(a),parseInt(t,10),parseInt(s,10),parseInt(n,10)];return r&&d.push(parseInt(r,10)),d}function Ta(e){var a,t,s,n,r=fa.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(r){if(a=Da(r[4],r[3],r[2],r[5],r[6],r[7]),t=r[1],s=a,n=e,t&&Ve.indexOf(t)!==new Date(s[0],s[1],s[2]).getDay()&&(L(n).weekdayMismatch=!0,!void(n._isValid=!1)))return;e._a=a,e._tzm=function(e,a,t){if(e)return pa[e];if(a)return 0;var s=parseInt(t,10),n=s%100;return 60*((s-n)/100)+n}(r[8],r[9],r[10]),e._d=Ne.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),L(e).rfc2822=!0}else e._isValid=!1}function ga(e,a,t){return null!=e?e:null!=a?a:t}function wa(e){var a,t,s,n,r,d,i,_=[];if(!e._d){for(d=e,i=new Date(M.now()),s=d._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()],e._w&&null==e._a[ke]&&null==e._a[pe]&&function(e){var a,t,s,n,r,d,i,_,o;null!=(a=e._w).GG||null!=a.W||null!=a.E?(r=1,d=4,t=ga(a.GG,e._a[fe],Ce(Ha(),1,4).year),s=ga(a.W,1),((n=ga(a.E,1))<1||7<n)&&(_=!0)):(r=e._locale._week.dow,d=e._locale._week.doy,o=Ce(Ha(),r,d),t=ga(a.gg,e._a[fe],o.year),s=ga(a.w,o.week),null!=a.d?((n=a.d)<0||6<n)&&(_=!0):null!=a.e?(n=a.e+r,(a.e<0||6<a.e)&&(_=!0)):n=r);s<1||s>Ie(t,r,d)?L(e)._overflowWeeks=!0:null!=_?L(e)._overflowWeekday=!0:(i=Re(t,s,n,r,d),e._a[fe]=i.year,e._dayOfYear=i.dayOfYear)}(e),null!=e._dayOfYear&&(r=ga(e._a[fe],s[fe]),(e._dayOfYear>Fe(r)||0===e._dayOfYear)&&(L(e)._overflowDayOfYear=!0),t=Ne(r,0,e._dayOfYear),e._a[pe]=t.getUTCMonth(),e._a[ke]=t.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=_[a]=s[a];for(;a<7;a++)e._a[a]=_[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[De]&&0===e._a[Te]&&0===e._a[ge]&&0===e._a[we]&&(e._nextDay=!0,e._a[De]=0),e._d=(e._useUTC?Ne:function(e,a,t,s,n,r,d){var i;return e<100&&0<=e?(i=new Date(e+400,a,t,s,n,r,d),isFinite(i.getFullYear())&&i.setFullYear(e)):i=new Date(e,a,t,s,n,r,d),i}).apply(null,_),n=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[De]=24),e._w&&void 0!==e._w.d&&e._w.d!==n&&(L(e).weekdayMismatch=!0)}}function va(e){if(e._f!==M.ISO_8601)if(e._f!==M.RFC_2822){e._a=[],L(e).empty=!0;for(var a,t,s,n,r,d,i,_=""+e._i,o=_.length,m=0,u=E(e._f,e._locale).match(j)||[],l=0;l<u.length;l++)t=u[l],(a=(_.match(Me(t,e))||[])[0])&&(0<(s=_.substr(0,_.indexOf(a))).length&&L(e).unusedInput.push(s),_=_.slice(_.indexOf(a)+a.length),m+=a.length),O[t]?(a?L(e).empty=!1:L(e).unusedTokens.push(t),r=t,i=e,null!=(d=a)&&h(ce,r)&&ce[r](d,i._a,i,r)):e._strict&&!a&&L(e).unusedTokens.push(t);L(e).charsLeftOver=o-m,0<_.length&&L(e).unusedInput.push(_),e._a[De]<=12&&!0===L(e).bigHour&&0<e._a[De]&&(L(e).bigHour=void 0),L(e).parsedDateParts=e._a.slice(0),L(e).meridiem=e._meridiem,e._a[De]=function(e,a,t){var s;if(null==t)return a;return null!=e.meridiemHour?e.meridiemHour(a,t):(null!=e.isPM&&((s=e.isPM(t))&&a<12&&(a+=12),s||12!==a||(a=0)),a)}(e._locale,e._a[De],e._meridiem),null!==(n=L(e).era)&&(e._a[fe]=e._locale.erasConvertYear(n,e._a[fe])),wa(e),la(e)}else Ta(e);else ka(e)}function ba(e){var a,t,s=e._i,n=e._f;return e._locale=e._locale||ua(e._l),null===s||void 0===n&&""===s?y({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),D(s)?new k(la(s)):(d(s)?e._d=s:i(n)?function(e){var a,t,s,n,r,d,i=!1;if(0===e._f.length)return L(e).invalidFormat=!0,e._d=new Date(NaN);for(n=0;n<e._f.length;n++)r=0,d=!1,a=p({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],va(a),Y(a)&&(d=!0),r+=L(a).charsLeftOver,r+=10*L(a).unusedTokens.length,L(a).score=r,i?r<s&&(s=r,t=a):(null==s||r<s||d)&&(s=r,t=a,d&&(i=!0));l(e,t||a)}(e):n?va(e):r(t=(a=e)._i)?a._d=new Date(M.now()):d(t)?a._d=new Date(t.valueOf()):"string"==typeof t?function(e){var a=ya.exec(e._i);null===a?(ka(e),!1===e._isValid&&(delete e._isValid,Ta(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:M.createFromInputFallback(e)))):e._d=new Date(+a[1])}(a):i(t)?(a._a=u(t.slice(0),function(e){return parseInt(e,10)}),wa(a)):_(t)?function(e){var a,t;e._d||(t=void 0===(a=J(e._i)).day?a.date:a.day,e._a=u([a.year,a.month,t,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),wa(e))}(a):m(t)?a._d=new Date(t):M.createFromInputFallback(a),Y(e)||(e._d=null),e))}function Sa(e,a,t,s,n){var r,d={};return!0!==a&&!1!==a||(s=a,a=void 0),!0!==t&&!1!==t||(s=t,t=void 0),(_(e)&&o(e)||i(e)&&0===e.length)&&(e=void 0),d._isAMomentObject=!0,d._useUTC=d._isUTC=n,d._l=t,d._i=e,d._f=a,d._strict=s,(r=new k(la(ba(d))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Ha(e,a,t,s){return Sa(e,a,t,s,!1)}M.createFromInputFallback=t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),M.ISO_8601=function(){},M.RFC_2822=function(){};var ja=t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ha.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:y()}),xa=t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ha.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:y()});function Pa(e,a){var t,s;if(1===a.length&&i(a[0])&&(a=a[0]),!a.length)return Ha();for(t=a[0],s=1;s<a.length;++s)a[s].isValid()&&!a[s][e](t)||(t=a[s]);return t}var Oa=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Wa(e){var a=J(e),t=a.year||0,s=a.quarter||0,n=a.month||0,r=a.week||a.isoWeek||0,d=a.day||0,i=a.hour||0,_=a.minute||0,o=a.second||0,m=a.millisecond||0;this._isValid=function(e){var a,t,s=!1;for(a in e)if(h(e,a)&&(-1===ye.call(Oa,a)||null!=e[a]&&isNaN(e[a])))return!1;for(t=0;t<Oa.length;++t)if(e[Oa[t]]){if(s)return!1;parseFloat(e[Oa[t]])!==G(e[Oa[t]])&&(s=!0)}return!0}(a),this._milliseconds=+m+1e3*o+6e4*_+1e3*i*60*60,this._days=+d+7*r,this._months=+n+3*s+12*t,this._data={},this._locale=ua(),this._bubble()}function Aa(e){return e instanceof Wa}function Ea(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Fa(e,t){W(e,0,0,function(){var e=this.utcOffset(),a="+";return e<0&&(e=-e,a="-"),a+H(~~(e/60),2)+t+H(~~e%60,2)})}Fa("Z",":"),Fa("ZZ",""),le("Z",me),le("ZZ",me),Le(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Na(me,e)});var za=/([\+\-]|\d\d)/gi;function Na(e,a){var t,s,n=(a||"").match(e);return null===n?null:0===(s=60*(t=((n[n.length-1]||[])+"").match(za)||["-",0,0])[1]+G(t[2]))?0:"+"===t[0]?s:-s}function Ja(e,a){var t,s;return a._isUTC?(t=a.clone(),s=(D(e)||d(e)?e.valueOf():Ha(e).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+s),M.updateOffset(t,!1),t):Ha(e).local()}function Ra(e){return-Math.round(e._d.getTimezoneOffset())}function Ca(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}M.updateOffset=function(){};var Ia=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ua=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ga(e,a){var t,s,n,r=e,d=null;return Aa(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:m(e)||!isNaN(+e)?(r={},a?r[a]=+e:r.milliseconds=+e):(d=Ia.exec(e))?(t="-"===d[1]?-1:1,r={y:0,d:G(d[ke])*t,h:G(d[De])*t,m:G(d[Te])*t,s:G(d[ge])*t,ms:G(Ea(1e3*d[we]))*t}):(d=Ua.exec(e))?(t="-"===d[1]?-1:1,r={y:Va(d[2],t),M:Va(d[3],t),w:Va(d[4],t),d:Va(d[5],t),h:Va(d[6],t),m:Va(d[7],t),s:Va(d[8],t)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(n=function(e,a){var t;if(!e.isValid()||!a.isValid())return{milliseconds:0,months:0};a=Ja(a,e),e.isBefore(a)?t=Ba(e,a):((t=Ba(a,e)).milliseconds=-t.milliseconds,t.months=-t.months);return t}(Ha(r.from),Ha(r.to)),(r={}).ms=n.milliseconds,r.M=n.months),s=new Wa(r),Aa(e)&&h(e,"_locale")&&(s._locale=e._locale),Aa(e)&&h(e,"_isValid")&&(s._isValid=e._isValid),s}function Va(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function Ba(e,a){var t={};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=a-e.clone().add(t.months,"M"),t}function Ka(s,n){return function(e,a){var t;return null===a||isNaN(+a)||(w(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),t=e,e=a,a=t),qa(this,Ga(e,a),s),this}}function qa(e,a,t,s){var n=a._milliseconds,r=Ea(a._days),d=Ea(a._months);e.isValid()&&(s=null==s||s,d&&We(e,B(e,"Month")+d*t),r&&K(e,"Date",B(e,"Date")+r*t),n&&e._d.setTime(e._d.valueOf()+n*t),s&&M.updateOffset(e,r||d))}Ga.fn=Wa.prototype,Ga.invalid=function(){return Ga(NaN)};var Za=Ka(1,"add"),$a=Ka(-1,"subtract");function Qa(e){return"string"==typeof e||e instanceof String}function Xa(e){return D(e)||d(e)||Qa(e)||m(e)||function(a){var e=i(a),t=!1;e&&(t=0===a.filter(function(e){return!m(e)&&Qa(a)}).length);return e&&t}(e)||function(e){var a,t,s=_(e)&&!o(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(a=0;a<r.length;a+=1)t=r[a],n=n||h(e,t);return s&&n}(e)||null==e}function et(e,a){if(e.date()<a.date())return-et(a,e);var t=12*(a.year()-e.year())+(a.month()-e.month()),s=e.clone().add(t,"months"),n=a-s<0?(a-s)/(s-e.clone().add(t-1,"months")):(a-s)/(e.clone().add(1+t,"months")-s);return-(t+n)||0}function at(e){var a;return void 0===e?this._locale._abbr:(null!=(a=ua(e))&&(this._locale=a),this)}M.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",M.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var tt=t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function st(){return this._locale}var nt=126227808e5;function rt(e,a){return(e%a+a)%a}function dt(e,a,t){return e<100&&0<=e?new Date(e+400,a,t)-nt:new Date(e,a,t).valueOf()}function it(e,a,t){return e<100&&0<=e?Date.UTC(e+400,a,t)-nt:Date.UTC(e,a,t)}function _t(e,a){return a.erasAbbrRegex(e)}function ot(){for(var e=[],a=[],t=[],s=[],n=this.eras(),r=0,d=n.length;r<d;++r)a.push(he(n[r].name)),e.push(he(n[r].abbr)),t.push(he(n[r].narrow)),s.push(he(n[r].name)),s.push(he(n[r].abbr)),s.push(he(n[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+a.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}function mt(e,a){W(0,[e,e.length],0,a)}function ut(e,a,t,s,n){var r;return null==e?Ce(this,s,n).year:((r=Ie(e,s,n))<a&&(a=r),function(e,a,t,s,n){var r=Re(e,a,t,s,n),d=Ne(r.year,0,r.dayOfYear);return this.year(d.getUTCFullYear()),this.month(d.getUTCMonth()),this.date(d.getUTCDate()),this}.call(this,e,a,t,s,n))}W("N",0,0,"eraAbbr"),W("NN",0,0,"eraAbbr"),W("NNN",0,0,"eraAbbr"),W("NNNN",0,0,"eraName"),W("NNNNN",0,0,"eraNarrow"),W("y",["y",1],"yo","eraYear"),W("y",["yy",2],0,"eraYear"),W("y",["yyy",3],0,"eraYear"),W("y",["yyyy",4],0,"eraYear"),le("N",_t),le("NN",_t),le("NNN",_t),le("NNNN",function(e,a){return a.erasNameRegex(e)}),le("NNNNN",function(e,a){return a.erasNarrowRegex(e)}),Le(["N","NN","NNN","NNNN","NNNNN"],function(e,a,t,s){var n=t._locale.erasParse(e,s,t._strict);n?L(t).era=n:L(t).invalidEra=e}),le("y",ie),le("yy",ie),le("yyy",ie),le("yyyy",ie),le("yo",function(e,a){return a._eraYearOrdinalRegex||ie}),Le(["y","yy","yyy","yyyy"],fe),Le(["yo"],function(e,a,t,s){var n;t._locale._eraYearOrdinalRegex&&(n=e.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?a[fe]=t._locale.eraYearOrdinalParse(e,n):a[fe]=parseInt(e,10)}),W(0,["gg",2],0,function(){return this.weekYear()%100}),W(0,["GG",2],0,function(){return this.isoWeekYear()%100}),mt("gggg","weekYear"),mt("ggggg","weekYear"),mt("GGGG","isoWeekYear"),mt("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),C("weekYear",1),C("isoWeekYear",1),le("G",_e),le("g",_e),le("GG",ae,$),le("gg",ae,$),le("GGGG",re,X),le("gggg",re,X),le("GGGGG",de,ee),le("ggggg",de,ee),Ye(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=G(e)}),Ye(["gg","GG"],function(e,a,t,s){a[s]=M.parseTwoDigitYear(e)}),W("Q",0,"Qo","quarter"),z("quarter","Q"),C("quarter",7),le("Q",Z),Le("Q",function(e,a){a[pe]=3*(G(e)-1)}),W("D",["DD",2],"Do","date"),z("date","D"),C("date",9),le("D",ae),le("DD",ae,$),le("Do",function(e,a){return e?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),Le(["D","DD"],ke),Le("Do",function(e,a){a[ke]=G(e.match(ae)[0])});var lt=V("Date",!0);W("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),C("dayOfYear",4),le("DDD",ne),le("DDDD",Q),Le(["DDD","DDDD"],function(e,a,t){t._dayOfYear=G(e)}),W("m",["mm",2],0,"minute"),z("minute","m"),C("minute",14),le("m",ae),le("mm",ae,$),Le(["m","mm"],Te);var Mt=V("Minutes",!1);W("s",["ss",2],0,"second"),z("second","s"),C("second",15),le("s",ae),le("ss",ae,$),Le(["s","ss"],ge);var ht,ct,Lt=V("Seconds",!1);for(W("S",0,0,function(){return~~(this.millisecond()/100)}),W(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),W(0,["SSS",3],0,"millisecond"),W(0,["SSSS",4],0,function(){return 10*this.millisecond()}),W(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),W(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),W(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),W(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),W(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),C("millisecond",16),le("S",ne,Z),le("SS",ne,$),le("SSS",ne,Q),ht="SSSS";ht.length<=9;ht+="S")le(ht,ie);function Yt(e,a){a[we]=G(1e3*("0."+e))}for(ht="S";ht.length<=9;ht+="S")Le(ht,Yt);ct=V("Milliseconds",!1),W("z",0,0,"zoneAbbr"),W("zz",0,0,"zoneName");var yt=k.prototype;function ft(e){return e}yt.add=Za,yt.calendar=function(e,a){1===arguments.length&&(arguments[0]?Xa(arguments[0])?(e=arguments[0],a=void 0):function(e){for(var a=_(e)&&!o(e),t=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n=0;n<s.length;n+=1)t=t||h(e,s[n]);return a&&t}(arguments[0])&&(a=arguments[0],e=void 0):a=e=void 0);var t=e||Ha(),s=Ja(t,this).startOf("day"),n=M.calendarFormat(this,s)||"sameElse",r=a&&(v(a[n])?a[n].call(this,t):a[n]);return this.format(r||this.localeData().calendar(n,this,Ha(t)))},yt.clone=function(){return new k(this)},yt.diff=function(e,a,t){var s,n,r;if(!this.isValid())return NaN;if(!(s=Ja(e,this)).isValid())return NaN;switch(n=6e4*(s.utcOffset()-this.utcOffset()),a=N(a)){case"year":r=et(this,s)/12;break;case"month":r=et(this,s);break;case"quarter":r=et(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-n)/864e5;break;case"week":r=(this-s-n)/6048e5;break;default:r=this-s}return t?r:U(r)},yt.endOf=function(e){var a,t;if(void 0===(e=N(e))||"millisecond"===e||!this.isValid())return this;switch(t=this._isUTC?it:dt,e){case"year":a=t(this.year()+1,0,1)-1;break;case"quarter":a=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":a=t(this.year(),this.month()+1,1)-1;break;case"week":a=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":a=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":a=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":a=this._d.valueOf(),a+=36e5-rt(a+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":a=this._d.valueOf(),a+=6e4-rt(a,6e4)-1;break;case"second":a=this._d.valueOf(),a+=1e3-rt(a,1e3)-1;break}return this._d.setTime(a),M.updateOffset(this,!0),this},yt.format=function(e){e=e||(this.isUtc()?M.defaultFormatUtc:M.defaultFormat);var a=A(this,e);return this.localeData().postformat(a)},yt.from=function(e,a){return this.isValid()&&(D(e)&&e.isValid()||Ha(e).isValid())?Ga({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},yt.fromNow=function(e){return this.from(Ha(),e)},yt.to=function(e,a){return this.isValid()&&(D(e)&&e.isValid()||Ha(e).isValid())?Ga({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},yt.toNow=function(e){return this.to(Ha(),e)},yt.get=function(e){return v(this[e=N(e)])?this[e]():this},yt.invalidAt=function(){return L(this).overflow},yt.isAfter=function(e,a){var t=D(e)?e:Ha(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=N(a)||"millisecond")?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())},yt.isBefore=function(e,a){var t=D(e)?e:Ha(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=N(a)||"millisecond")?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())},yt.isBetween=function(e,a,t,s){var n=D(e)?e:Ha(e),r=D(a)?a:Ha(a);return!!(this.isValid()&&n.isValid()&&r.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(n,t):!this.isBefore(n,t))&&(")"===s[1]?this.isBefore(r,t):!this.isAfter(r,t)))},yt.isSame=function(e,a){var t,s=D(e)?e:Ha(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(a=N(a)||"millisecond")?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))},yt.isSameOrAfter=function(e,a){return this.isSame(e,a)||this.isAfter(e,a)},yt.isSameOrBefore=function(e,a){return this.isSame(e,a)||this.isBefore(e,a)},yt.isValid=function(){return Y(this)},yt.lang=tt,yt.locale=at,yt.localeData=st,yt.max=xa,yt.min=ja,yt.parsingFlags=function(){return l({},L(this))},yt.set=function(e,a){if("object"==typeof e)for(var t=function(e){var a,t=[];for(a in e)h(e,a)&&t.push({unit:a,priority:R[a]});return t.sort(function(e,a){return e.priority-a.priority}),t}(e=J(e)),s=0;s<t.length;s++)this[t[s].unit](e[t[s].unit]);else if(v(this[e=N(e)]))return this[e](a);return this},yt.startOf=function(e){var a,t;if(void 0===(e=N(e))||"millisecond"===e||!this.isValid())return this;switch(t=this._isUTC?it:dt,e){case"year":a=t(this.year(),0,1);break;case"quarter":a=t(this.year(),this.month()-this.month()%3,1);break;case"month":a=t(this.year(),this.month(),1);break;case"week":a=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":a=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":a=t(this.year(),this.month(),this.date());break;case"hour":a=this._d.valueOf(),a-=rt(a+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":a=this._d.valueOf(),a-=rt(a,6e4);break;case"second":a=this._d.valueOf(),a-=rt(a,1e3);break}return this._d.setTime(a),M.updateOffset(this,!0),this},yt.subtract=$a,yt.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},yt.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},yt.toDate=function(){return new Date(this.valueOf())},yt.toISOString=function(e){if(!this.isValid())return null;var a=!0!==e,t=a?this.clone().utc():this;return t.year()<0||9999<t.year()?A(t,a?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):v(Date.prototype.toISOString)?a?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(t,"Z")):A(t,a?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},yt.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,a,t,s="moment",n="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",n="Z"),e="["+s+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",t=n+'[")]',this.format(e+a+"-MM-DD[T]HH:mm:ss.SSS"+t)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(yt[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),yt.toJSON=function(){return this.isValid()?this.toISOString():null},yt.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},yt.unix=function(){return Math.floor(this.valueOf()/1e3)},yt.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},yt.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},yt.eraName=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].name;if(a[t].until<=e&&e<=a[t].since)return a[t].name}return""},yt.eraNarrow=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].narrow;if(a[t].until<=e&&e<=a[t].since)return a[t].narrow}return""},yt.eraAbbr=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].abbr;if(a[t].until<=e&&e<=a[t].since)return a[t].abbr}return""},yt.eraYear=function(){for(var e,a,t=this.localeData().eras(),s=0,n=t.length;s<n;++s)if(e=t[s].since<=t[s].until?1:-1,a=this.clone().startOf("day").valueOf(),t[s].since<=a&&a<=t[s].until||t[s].until<=a&&a<=t[s].since)return(this.year()-M(t[s].since).year())*e+t[s].offset;return this.year()},yt.year=ze,yt.isLeapYear=function(){return I(this.year())},yt.weekYear=function(e){return ut.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},yt.isoWeekYear=function(e){return ut.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},yt.quarter=yt.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},yt.month=Ae,yt.daysInMonth=function(){return Se(this.year(),this.month())},yt.week=yt.weeks=function(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")},yt.isoWeek=yt.isoWeeks=function(e){var a=Ce(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")},yt.weeksInYear=function(){var e=this.localeData()._week;return Ie(this.year(),e.dow,e.doy)},yt.weeksInWeekYear=function(){var e=this.localeData()._week;return Ie(this.weekYear(),e.dow,e.doy)},yt.isoWeeksInYear=function(){return Ie(this.year(),1,4)},yt.isoWeeksInISOWeekYear=function(){return Ie(this.isoWeekYear(),1,4)},yt.date=lt,yt.day=yt.days=function(e){if(!this.isValid())return null!=e?this:NaN;var a,t,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(a=e,t=this.localeData(),e="string"!=typeof a?a:isNaN(a)?"number"==typeof(a=t.weekdaysParse(a))?a:null:parseInt(a,10),this.add(e-s,"d")):s},yt.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")},yt.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var a,t,s=(a=e,t=this.localeData(),"string"==typeof a?t.weekdaysParse(a)%7||7:isNaN(a)?null:a);return this.day(this.day()%7?s:s-7)},yt.dayOfYear=function(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")},yt.hour=yt.hours=aa,yt.minute=yt.minutes=Mt,yt.second=yt.seconds=Lt,yt.millisecond=yt.milliseconds=ct,yt.utcOffset=function(e,a,t){var s,n=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?n:Ra(this);if("string"==typeof e){if(null===(e=Na(me,e)))return this}else Math.abs(e)<16&&!t&&(e*=60);return!this._isUTC&&a&&(s=Ra(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==e&&(!a||this._changeInProgress?qa(this,Ga(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,M.updateOffset(this,!0),this._changeInProgress=null)),this},yt.utc=function(e){return this.utcOffset(0,e)},yt.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ra(this),"m")),this},yt.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Na(oe,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},yt.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Ha(e).utcOffset():0,(this.utcOffset()-e)%60==0)},yt.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},yt.isLocal=function(){return!!this.isValid()&&!this._isUTC},yt.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},yt.isUtc=Ca,yt.isUTC=Ca,yt.zoneAbbr=function(){return this._isUTC?"UTC":""},yt.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},yt.dates=t("dates accessor is deprecated. Use date instead.",lt),yt.months=t("months accessor is deprecated. Use month instead",Ae),yt.years=t("years accessor is deprecated. Use year instead",ze),yt.zone=t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}),yt.isDSTShifted=t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e,a={};return p(a,this),(a=ba(a))._a?(e=(a._isUTC?c:Ha)(a._a),this._isDSTShifted=this.isValid()&&0<function(e,a,t){for(var s=Math.min(e.length,a.length),n=Math.abs(e.length-a.length),r=0,d=0;d<s;d++)(t&&e[d]!==a[d]||!t&&G(e[d])!==G(a[d]))&&r++;return r+n}(a._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});var pt=S.prototype;function kt(e,a,t,s){var n=ua(),r=c().set(s,a);return n[t](r,e)}function Dt(e,a,t){if(m(e)&&(a=e,e=void 0),e=e||"",null!=a)return kt(e,a,t,"month");for(var s=[],n=0;n<12;n++)s[n]=kt(e,n,t,"month");return s}function Tt(e,a,t,s){a=("boolean"==typeof e?m(a)&&(t=a,a=void 0):(a=e,e=!1,m(t=a)&&(t=a,a=void 0)),a||"");var n,r=ua(),d=e?r._week.dow:0,i=[];if(null!=t)return kt(a,(t+d)%7,s,"day");for(n=0;n<7;n++)i[n]=kt(a,(n+d)%7,s,"day");return i}pt.calendar=function(e,a,t){var s=this._calendar[e]||this._calendar.sameElse;return v(s)?s.call(a,t):s},pt.longDateFormat=function(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.match(j).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},pt.invalidDate=function(){return this._invalidDate},pt.ordinal=function(e){return this._ordinal.replace("%d",e)},pt.preparse=ft,pt.postformat=ft,pt.relativeTime=function(e,a,t,s){var n=this._relativeTime[t];return v(n)?n(e,a,t,s):n.replace(/%d/i,e)},pt.pastFuture=function(e,a){var t=this._relativeTime[0<e?"future":"past"];return v(t)?t(a):t.replace(/%s/i,a)},pt.set=function(e){var a,t;for(t in e)h(e,t)&&(v(a=e[t])?this[t]=a:this["_"+t]=a);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},pt.eras=function(e,a){for(var t,s=this._eras||ua("en")._eras,n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":t=M(s[n].since).startOf("day"),s[n].since=t.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":t=M(s[n].until).startOf("day").valueOf(),s[n].until=t.valueOf();break}}return s},pt.erasParse=function(e,a,t){var s,n,r,d,i,_=this.eras();for(e=e.toUpperCase(),s=0,n=_.length;s<n;++s)if(r=_[s].name.toUpperCase(),d=_[s].abbr.toUpperCase(),i=_[s].narrow.toUpperCase(),t)switch(a){case"N":case"NN":case"NNN":if(d===e)return _[s];break;case"NNNN":if(r===e)return _[s];break;case"NNNNN":if(i===e)return _[s];break}else if(0<=[r,d,i].indexOf(e))return _[s]},pt.erasConvertYear=function(e,a){var t=e.since<=e.until?1:-1;return void 0===a?M(e.since).year():M(e.since).year()+(a-e.offset)*t},pt.erasAbbrRegex=function(e){return h(this,"_erasAbbrRegex")||ot.call(this),e?this._erasAbbrRegex:this._erasRegex},pt.erasNameRegex=function(e){return h(this,"_erasNameRegex")||ot.call(this),e?this._erasNameRegex:this._erasRegex},pt.erasNarrowRegex=function(e){return h(this,"_erasNarrowRegex")||ot.call(this),e?this._erasNarrowRegex:this._erasRegex},pt.months=function(e,a){return e?i(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||xe).test(a)?"format":"standalone"][e.month()]:i(this._months)?this._months:this._months.standalone},pt.monthsShort=function(e,a){return e?i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[xe.test(a)?"format":"standalone"][e.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},pt.monthsParse=function(e,a,t){var s,n,r;if(this._monthsParseExact)return function(e,a,t){var s,n,r,d=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=c([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return t?"MMM"===a?-1!==(n=ye.call(this._shortMonthsParse,d))?n:null:-1!==(n=ye.call(this._longMonthsParse,d))?n:null:"MMM"===a?-1!==(n=ye.call(this._shortMonthsParse,d))||-1!==(n=ye.call(this._longMonthsParse,d))?n:null:-1!==(n=ye.call(this._longMonthsParse,d))||-1!==(n=ye.call(this._shortMonthsParse,d))?n:null}.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=c([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}},pt.monthsRegex=function(e){return this._monthsParseExact?(h(this,"_monthsRegex")||Ee.call(this),e?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=Oe),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},pt.monthsShortRegex=function(e){return this._monthsParseExact?(h(this,"_monthsRegex")||Ee.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=Pe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},pt.week=function(e){return Ce(e,this._week.dow,this._week.doy).week},pt.firstDayOfYear=function(){return this._week.doy},pt.firstDayOfWeek=function(){return this._week.dow},pt.weekdays=function(e,a){var t=i(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(a)?"format":"standalone"];return!0===e?Ue(t,this._week.dow):e?t[e.day()]:t},pt.weekdaysMin=function(e){return!0===e?Ue(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},pt.weekdaysShort=function(e){return!0===e?Ue(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},pt.weekdaysParse=function(e,a,t){var s,n,r;if(this._weekdaysParseExact)return function(e,a,t){var s,n,r,d=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=c([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return t?"dddd"===a?-1!==(n=ye.call(this._weekdaysParse,d))?n:null:"ddd"===a?-1!==(n=ye.call(this._shortWeekdaysParse,d))?n:null:-1!==(n=ye.call(this._minWeekdaysParse,d))?n:null:"dddd"===a?-1!==(n=ye.call(this._weekdaysParse,d))||-1!==(n=ye.call(this._shortWeekdaysParse,d))||-1!==(n=ye.call(this._minWeekdaysParse,d))?n:null:"ddd"===a?-1!==(n=ye.call(this._shortWeekdaysParse,d))||-1!==(n=ye.call(this._weekdaysParse,d))||-1!==(n=ye.call(this._minWeekdaysParse,d))?n:null:-1!==(n=ye.call(this._minWeekdaysParse,d))||-1!==(n=ye.call(this._weekdaysParse,d))||-1!==(n=ye.call(this._shortWeekdaysParse,d))?n:null}.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=c([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}},pt.weekdaysRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=Ke),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},pt.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},pt.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ze),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},pt.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},pt.meridiem=function(e,a,t){return 11<e?t?"pm":"PM":t?"am":"AM"},oa("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1===G(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.lang=t("moment.lang is deprecated. Use moment.locale instead.",oa),M.langData=t("moment.langData is deprecated. Use moment.localeData instead.",ua);var gt=Math.abs;function wt(e,a,t,s){var n=Ga(a,t);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function vt(e){return e<0?Math.floor(e):Math.ceil(e)}function bt(e){return 4800*e/146097}function St(e){return 146097*e/4800}function Ht(e){return function(){return this.as(e)}}var jt=Ht("ms"),xt=Ht("s"),Pt=Ht("m"),Ot=Ht("h"),Wt=Ht("d"),At=Ht("w"),Et=Ht("M"),Ft=Ht("Q"),zt=Ht("y");function Nt(e){return function(){return this.isValid()?this._data[e]:NaN}}var Jt=Nt("milliseconds"),Rt=Nt("seconds"),Ct=Nt("minutes"),It=Nt("hours"),Ut=Nt("days"),Gt=Nt("months"),Vt=Nt("years");var Bt=Math.round,Kt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function qt(e,a,t,s){var n=Ga(e).abs(),r=Bt(n.as("s")),d=Bt(n.as("m")),i=Bt(n.as("h")),_=Bt(n.as("d")),o=Bt(n.as("M")),m=Bt(n.as("w")),u=Bt(n.as("y")),l=(r<=t.ss?["s",r]:r<t.s&&["ss",r])||d<=1&&["m"]||d<t.m&&["mm",d]||i<=1&&["h"]||i<t.h&&["hh",i]||_<=1&&["d"]||_<t.d&&["dd",_];return null!=t.w&&(l=l||m<=1&&["w"]||m<t.w&&["ww",m]),(l=l||o<=1&&["M"]||o<t.M&&["MM",o]||u<=1&&["y"]||["yy",u])[2]=a,l[3]=0<+e,l[4]=s,function(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}.apply(null,l)}var Zt=Math.abs;function $t(e){return(0<e)-(e<0)||+e}function Qt(){if(!this.isValid())return this.localeData().invalidDate();var e,a,t,s,n,r,d,i,_=Zt(this._milliseconds)/1e3,o=Zt(this._days),m=Zt(this._months),u=this.asSeconds();return u?(e=U(_/60),a=U(e/60),_%=60,e%=60,t=U(m/12),m%=12,s=_?_.toFixed(3).replace(/\.?0+$/,""):"",n=u<0?"-":"",r=$t(this._months)!==$t(u)?"-":"",d=$t(this._days)!==$t(u)?"-":"",i=$t(this._milliseconds)!==$t(u)?"-":"",n+"P"+(t?r+t+"Y":"")+(m?r+m+"M":"")+(o?d+o+"D":"")+(a||e||_?"T":"")+(a?i+a+"H":"")+(e?i+e+"M":"")+(_?i+s+"S":"")):"P0D"}var Xt=Wa.prototype;Xt.isValid=function(){return this._isValid},Xt.abs=function(){var e=this._data;return this._milliseconds=gt(this._milliseconds),this._days=gt(this._days),this._months=gt(this._months),e.milliseconds=gt(e.milliseconds),e.seconds=gt(e.seconds),e.minutes=gt(e.minutes),e.hours=gt(e.hours),e.months=gt(e.months),e.years=gt(e.years),this},Xt.add=function(e,a){return wt(this,e,a,1)},Xt.subtract=function(e,a){return wt(this,e,a,-1)},Xt.as=function(e){if(!this.isValid())return NaN;var a,t,s=this._milliseconds;if("month"===(e=N(e))||"quarter"===e||"year"===e)switch(a=this._days+s/864e5,t=this._months+bt(a),e){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(a=this._days+Math.round(St(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}},Xt.asMilliseconds=jt,Xt.asSeconds=xt,Xt.asMinutes=Pt,Xt.asHours=Ot,Xt.asDays=Wt,Xt.asWeeks=At,Xt.asMonths=Et,Xt.asQuarters=Ft,Xt.asYears=zt,Xt.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*G(this._months/12):NaN},Xt._bubble=function(){var e,a,t,s,n,r=this._milliseconds,d=this._days,i=this._months,_=this._data;return 0<=r&&0<=d&&0<=i||r<=0&&d<=0&&i<=0||(r+=864e5*vt(St(i)+d),i=d=0),_.milliseconds=r%1e3,e=U(r/1e3),_.seconds=e%60,a=U(e/60),_.minutes=a%60,t=U(a/60),_.hours=t%24,d+=U(t/24),i+=n=U(bt(d)),d-=vt(St(n)),s=U(i/12),i%=12,_.days=d,_.months=i,_.years=s,this},Xt.clone=function(){return Ga(this)},Xt.get=function(e){return e=N(e),this.isValid()?this[e+"s"]():NaN},Xt.milliseconds=Jt,Xt.seconds=Rt,Xt.minutes=Ct,Xt.hours=It,Xt.days=Ut,Xt.weeks=function(){return U(this.days()/7)},Xt.months=Gt,Xt.years=Vt,Xt.humanize=function(e,a){if(!this.isValid())return this.localeData().invalidDate();var t,s,n=!1,r=Kt;return"object"==typeof e&&(a=e,e=!1),"boolean"==typeof e&&(n=e),"object"==typeof a&&(r=Object.assign({},Kt,a),null!=a.s&&null==a.ss&&(r.ss=a.s-1)),t=this.localeData(),s=qt(this,!n,r,t),n&&(s=t.pastFuture(+this,s)),t.postformat(s)},Xt.toISOString=Qt,Xt.toString=Qt,Xt.toJSON=Qt,Xt.locale=at,Xt.localeData=st,Xt.toIsoString=t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Qt),Xt.lang=tt,W("X",0,0,"unix"),W("x",0,0,"valueOf"),le("x",_e),le("X",/[+-]?\d+(\.\d{1,3})?/),Le("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e))}),Le("x",function(e,a,t){t._d=new Date(G(e))}),M.version="2.29.1",e=Ha,M.fn=yt,M.min=function(){return Pa("isBefore",[].slice.call(arguments,0))},M.max=function(){return Pa("isAfter",[].slice.call(arguments,0))},M.now=function(){return Date.now?Date.now():+new Date},M.utc=c,M.unix=function(e){return Ha(1e3*e)},M.months=function(e,a){return Dt(e,a,"months")},M.isDate=d,M.locale=oa,M.invalid=y,M.duration=Ga,M.isMoment=D,M.weekdays=function(e,a,t){return Tt(e,a,t,"weekdays")},M.parseZone=function(){return Ha.apply(null,arguments).parseZone()},M.localeData=ua,M.isDuration=Aa,M.monthsShort=function(e,a){return Dt(e,a,"monthsShort")},M.weekdaysMin=function(e,a,t){return Tt(e,a,t,"weekdaysMin")},M.defineLocale=ma,M.updateLocale=function(e,a){var t,s,n;return null!=a?(n=sa,null!=na[e]&&null!=na[e].parentLocale?na[e].set(b(na[e]._config,a)):(null!=(s=_a(e))&&(n=s._config),a=b(n,a),null==s&&(a.abbr=e),(t=new S(a)).parentLocale=na[e],na[e]=t),oa(e)):null!=na[e]&&(null!=na[e].parentLocale?(na[e]=na[e].parentLocale,e===oa()&&oa(e)):null!=na[e]&&delete na[e]),na[e]},M.locales=function(){return s(na)},M.weekdaysShort=function(e,a,t){return Tt(e,a,t,"weekdaysShort")},M.normalizeUnits=N,M.relativeTimeRounding=function(e){return void 0===e?Bt:"function"==typeof e&&(Bt=e,!0)},M.relativeTimeThreshold=function(e,a){return void 0!==Kt[e]&&(void 0===a?Kt[e]:(Kt[e]=a,"s"===e&&(Kt.ss=a-1),!0))},M.calendarFormat=function(e,a){var t=e.diff(a,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"},M.prototype=yt,M.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},M.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M\xf4re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}});function es(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function as(d){return function(e,a,t,s){var n=es(e),r=ts[d][es(e)];return 2===n&&(r=r[a?0:1]),r.replace(/%d/i,e)}}var ts={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},ss=["\u062c\u0627\u0646\u0641\u064a","\u0641\u064a\u0641\u0631\u064a","\u0645\u0627\u0631\u0633","\u0623\u0641\u0631\u064a\u0644","\u0645\u0627\u064a","\u062c\u0648\u0627\u0646","\u062c\u0648\u064a\u0644\u064a\u0629","\u0623\u0648\u062a","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];M.defineLocale("ar-dz",{months:ss,monthsShort:ss,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:as("s"),ss:as("s"),m:as("m"),mm:as("m"),h:as("h"),hh:as("h"),d:as("d"),dd:as("d"),M:as("M"),MM:as("M"),y:as("y"),yy:as("y")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:0,doy:4}}),M.defineLocale("ar-kw",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:12}});function ns(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function rs(d){return function(e,a,t,s){var n=ns(e),r=is[d][ns(e)];return 2===n&&(r=r[a?0:1]),r.replace(/%d/i,e)}}var ds={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},is={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},_s=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];M.defineLocale("ar-ly",{months:_s,monthsShort:_s,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:rs("s"),ss:rs("s"),m:rs("m"),mm:rs("m"),h:rs("h"),hh:rs("h"),d:rs("d"),dd:rs("d"),M:rs("M"),MM:rs("M"),y:rs("y"),yy:rs("y")},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return ds[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),M.defineLocale("ar-ma",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}});var os={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},ms={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"};M.defineLocale("ar-sa",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return ms[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return os[e]}).replace(/,/g,"\u060c")},week:{dow:0,doy:6}}),M.defineLocale("ar-tn",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}});function us(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function ls(d){return function(e,a,t,s){var n=us(e),r=cs[d][us(e)];return 2===n&&(r=r[a?0:1]),r.replace(/%d/i,e)}}var Ms={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},hs={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},cs={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},Ls=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];M.defineLocale("ar",{months:Ls,monthsShort:Ls,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:ls("s"),ss:ls("s"),m:ls("m"),mm:ls("m"),h:ls("h"),hh:ls("h"),d:ls("d"),dd:ls("d"),M:ls("M"),MM:ls("M"),y:ls("y"),yy:ls("y")},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return hs[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ms[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}});var Ys={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"};function ys(e,a,t){var s,n;return"m"===t?a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443":"h"===t?a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",hh:a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",dd:"\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",yy:"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}M.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),weekdaysShort:"Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),weekdaysMin:"Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",lastDay:"[d\xfcn\u0259n] LT",lastWeek:"[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \u0259vv\u0259l",s:"bir ne\xe7\u0259 saniy\u0259",ss:"%d saniy\u0259",m:"bir d\u0259qiq\u0259",mm:"%d d\u0259qiq\u0259",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,isPM:function(e){return/^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gec\u0259":e<12?"s\u0259h\u0259r":e<17?"g\xfcnd\xfcz":"ax\u015fam"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,ordinal:function(e){if(0===e)return e+"-\u0131nc\u0131";var a=e%10;return e+(Ys[a]||Ys[e%100-a]||Ys[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("be",{months:{format:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),standalone:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")},monthsShort:"\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),weekdays:{format:"\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),standalone:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),isFormat:/\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0451\u043d\u043d\u044f \u045e] LT",nextDay:"[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",lastDay:"[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",nextWeek:function(){return"[\u0423] dddd [\u045e] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";case 1:case 2:case 4:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u0440\u0430\u0437 %s",past:"%s \u0442\u0430\u043c\u0443",s:"\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",m:ys,mm:ys,h:ys,hh:ys,d:"\u0434\u0437\u0435\u043d\u044c",dd:ys,M:"\u043c\u0435\u0441\u044f\u0446",MM:ys,y:"\u0433\u043e\u0434",yy:ys},meridiemParse:/\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u044b":e<12?"\u0440\u0430\u043d\u0456\u0446\u044b":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0430\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-\u044b":e+"-\u0456";case"D":return e+"-\u0433\u0430";default:return e}},week:{dow:1,doy:7}}),M.defineLocale("bg",{months:"\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u044f\u043d\u0443_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u043d\u0435\u0441 \u0432] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432] LT",nextWeek:"dddd [\u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u041c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:return"[\u041c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0441\u043b\u0435\u0434 %s",past:"\u043f\u0440\u0435\u0434\u0438 %s",s:"\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",w:"\u0441\u0435\u0434\u043c\u0438\u0446\u0430",ww:"%d \u0441\u0435\u0434\u043c\u0438\u0446\u0438",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0430",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0==t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1==a?e+"-\u0432\u0438":2==a?e+"-\u0440\u0438":7==a||8==a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),M.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),weekdays:"Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"},calendar:{sameDay:"[Bi l\u025br\u025b] LT",nextDay:"[Sini l\u025br\u025b] LT",nextWeek:"dddd [don l\u025br\u025b] LT",lastDay:"[Kunu l\u025br\u025b] LT",lastWeek:"dddd [t\u025bm\u025bnen l\u025br\u025b] LT",sameElse:"L"},relativeTime:{future:"%s k\u0254n\u0254",past:"a b\u025b %s b\u0254",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"l\u025br\u025b kelen",hh:"l\u025br\u025b %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});var fs={1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},ps={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"};M.defineLocale("bn-bd",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",ss:"%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return ps[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return fs[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a?e<4?e:e+12:"\u09ad\u09cb\u09b0"===a||"\u09b8\u0995\u09be\u09b2"===a?e:"\u09a6\u09c1\u09aa\u09c1\u09b0"===a?3<=e?e:e+12:"\u09ac\u09bf\u0995\u09be\u09b2"===a||"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<6?"\u09ad\u09cb\u09b0":e<12?"\u09b8\u0995\u09be\u09b2":e<15?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<18?"\u09ac\u09bf\u0995\u09be\u09b2":e<20?"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}});var ks={1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},Ds={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"};M.defineLocale("bn",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",ss:"%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return Ds[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ks[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a&&4<=e||"\u09a6\u09c1\u09aa\u09c1\u09b0"===a&&e<5||"\u09ac\u09bf\u0995\u09be\u09b2"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<10?"\u09b8\u0995\u09be\u09b2":e<17?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<20?"\u09ac\u09bf\u0995\u09be\u09b2":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}});var Ts={1:"\u0f21",2:"\u0f22",3:"\u0f23",4:"\u0f24",5:"\u0f25",6:"\u0f26",7:"\u0f27",8:"\u0f28",9:"\u0f29",0:"\u0f20"},gs={"\u0f21":"1","\u0f22":"2","\u0f23":"3","\u0f24":"4","\u0f25":"5","\u0f26":"6","\u0f27":"7","\u0f28":"8","\u0f29":"9","\u0f20":"0"};function ws(e,a,t){var s;return e+" "+(s={mm:"munutenn",MM:"miz",dd:"devezh"}[t],2!==e?s:function(e){var a={m:"v",b:"v",d:"z"};return void 0!==a[e.charAt(0)]?a[e.charAt(0)]+e.substring(1):e}(s))}M.defineLocale("bo",{months:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),monthsShort:"\u0f5f\u0fb3\u0f0b1_\u0f5f\u0fb3\u0f0b2_\u0f5f\u0fb3\u0f0b3_\u0f5f\u0fb3\u0f0b4_\u0f5f\u0fb3\u0f0b5_\u0f5f\u0fb3\u0f0b6_\u0f5f\u0fb3\u0f0b7_\u0f5f\u0fb3\u0f0b8_\u0f5f\u0fb3\u0f0b9_\u0f5f\u0fb3\u0f0b10_\u0f5f\u0fb3\u0f0b11_\u0f5f\u0fb3\u0f0b12".split("_"),monthsShortRegex:/^(\u0f5f\u0fb3\u0f0b\d{1,2})/,monthsParseExact:!0,weekdays:"\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysShort:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysMin:"\u0f49\u0f72_\u0f5f\u0fb3_\u0f58\u0f72\u0f42_\u0f63\u0fb7\u0f42_\u0f55\u0f74\u0f62_\u0f66\u0f44\u0f66_\u0f66\u0fa4\u0f7a\u0f53".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",nextDay:"[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",nextWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",lastDay:"[\u0f41\u0f0b\u0f66\u0f44] LT",lastWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0f63\u0f0b",past:"%s \u0f66\u0f94\u0f53\u0f0b\u0f63",s:"\u0f63\u0f58\u0f0b\u0f66\u0f44",ss:"%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",m:"\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",mm:"%d \u0f66\u0f90\u0f62\u0f0b\u0f58",h:"\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",hh:"%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",d:"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",dd:"%d \u0f49\u0f72\u0f53\u0f0b",M:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",MM:"%d \u0f5f\u0fb3\u0f0b\u0f56",y:"\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",yy:"%d \u0f63\u0f7c"},preparse:function(e){return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g,function(e){return gs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Ts[e]})},meridiemParse:/\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"===a&&4<=e||"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44"===a&&e<5||"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c":e<10?"\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66":e<17?"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44":e<20?"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42":"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"},week:{dow:0,doy:6}});var vs=[/^gen/i,/^c[\u02bc\']hwe/i,/^meu/i,/^ebr/i,/^mae/i,/^(mez|eve)/i,/^gou/i,/^eos/i,/^gwe/i,/^her/i,/^du/i,/^ker/i],bs=/^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,Ss=[/^Su/i,/^Lu/i,/^Me([^r]|$)/i,/^Mer/i,/^Ya/i,/^Gw/i,/^Sa/i];function Hs(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1!==e&&(2===e||3===e||4===e)?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1!==e&&(2===e||3===e||4===e)?"godine":"godina"}}M.defineLocale("br",{months:"Genver_C\u02bchwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C\u02bchwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc\u02bcher_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParse:Ss,fullWeekdaysParse:[/^sul/i,/^lun/i,/^meurzh/i,/^merc[\u02bc\']her/i,/^yaou/i,/^gwener/i,/^sadorn/i],shortWeekdaysParse:[/^Sul/i,/^Lun/i,/^Meu/i,/^Mer/i,/^Yao/i,/^Gwe/i,/^Sad/i],minWeekdaysParse:Ss,monthsRegex:bs,monthsShortRegex:bs,monthsStrictRegex:/^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,monthsShortStrictRegex:/^(gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,monthsParse:vs,longMonthsParse:vs,shortMonthsParse:vs,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc\u02bchoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec\u02bch da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s \u02bczo",s:"un nebeud segondenno\xf9",ss:"%d eilenn",m:"ur vunutenn",mm:ws,h:"un eur",hh:"%d eur",d:"un devezh",dd:ws,M:"ur miz",MM:ws,y:"ur bloaz",yy:function(e){switch(function e(a){if(9<a)return e(a%10);return a}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(a\xf1|vet)/,ordinal:function(e){return e+(1===e?"a\xf1":"vet")},week:{dow:1,doy:4},meridiemParse:/a.m.|g.m./,isPM:function(e){return"g.m."===e},meridiem:function(e,a,t){return e<12?"a.m.":"g.m."}}),M.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:Hs,m:Hs,mm:Hs,h:Hs,hh:Hs,d:"dan",dd:Hs,M:"mjesec",MM:Hs,y:"godinu",yy:Hs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("ca",{months:{standalone:"gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem\xe0 a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){return e+("w"!==a&&"W"!==a?1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8":"a")},week:{dow:1,doy:4}});var js="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),xs="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),Ps=[/^led/i,/^\xfano/i,/^b\u0159e/i,/^dub/i,/^kv\u011b/i,/^(\u010dvn|\u010derven$|\u010dervna)/i,/^(\u010dvc|\u010dervenec|\u010dervence)/i,/^srp/i,/^z\xe1\u0159/i,/^\u0159\xedj/i,/^lis/i,/^pro/i],Os=/^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;function Ws(e){return 1<e&&e<5&&1!=~~(e/10)}function As(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return a||s?n+(Ws(e)?"sekundy":"sekund"):n+"sekundami";case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(Ws(e)?"minuty":"minut"):n+"minutami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Ws(e)?"hodiny":"hodin"):n+"hodinami";case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(Ws(e)?"dny":"dn\xed"):n+"dny";case"M":return a||s?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return a||s?n+(Ws(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):n+"m\u011bs\xedci";case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(Ws(e)?"roky":"let"):n+"lety"}}function Es(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function Fs(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function zs(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}M.defineLocale("cs",{months:js,monthsShort:xs,monthsRegex:Os,monthsShortRegex:Os,monthsStrictRegex:/^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,monthsParse:Ps,longMonthsParse:Ps,shortMonthsParse:Ps,weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:As,ss:As,m:As,mm:As,h:As,hh:As,d:As,dd:As,M:As,MM:As,y:As,yy:As},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("cv",{months:"\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),monthsShort:"\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),weekdays:"\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),weekdaysShort:"\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),weekdaysMin:"\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",LLL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",LLLL:"dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"},calendar:{sameDay:"[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextDay:"[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastDay:"[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextWeek:"[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastWeek:"[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",sameElse:"L"},relativeTime:{future:function(e){return e+(/\u0441\u0435\u0445\u0435\u0442$/i.exec(e)?"\u0440\u0435\u043d":/\u04ab\u0443\u043b$/i.exec(e)?"\u0442\u0430\u043d":"\u0440\u0430\u043d")},past:"%s \u043a\u0430\u044f\u043b\u043b\u0430",s:"\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",ss:"%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",m:"\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",hh:"%d \u0441\u0435\u0445\u0435\u0442",d:"\u043f\u04d7\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",MM:"%d \u0443\u0439\u04d1\u0445",y:"\u043f\u04d7\u0440 \u04ab\u0443\u043b",yy:"%d \u04ab\u0443\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-\u043c\u04d7\u0448/,ordinal:"%d-\u043c\u04d7\u0448",week:{dow:1,doy:7}}),M.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn \xf4l",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a="";return 20<e?a=40===e||50===e||60===e||80===e||100===e?"fed":"ain":0<e&&(a=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][e]),e+a},week:{dow:1,doy:4}}),M.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"p\xe5 dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xe5 sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"et \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de-at",{months:"J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:Es,mm:"%d Minuten",h:Es,hh:"%d Stunden",d:Es,dd:Es,w:Es,ww:"%d Wochen",M:Es,MM:Es,y:Es,yy:Es},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de-ch",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:Fs,mm:"%d Minuten",h:Fs,hh:"%d Stunden",d:Fs,dd:Fs,w:Fs,ww:"%d Wochen",M:Fs,MM:Fs,y:Fs,yy:Fs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:zs,mm:"%d Minuten",h:zs,hh:"%d Stunden",d:zs,dd:zs,w:zs,ww:"%d Wochen",M:zs,MM:zs,y:zs,yy:zs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Ns=["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9","\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9","\u0789\u07a7\u0783\u07a8\u0797\u07aa","\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa","\u0789\u07ad","\u0796\u07ab\u0782\u07b0","\u0796\u07aa\u078d\u07a6\u0787\u07a8","\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa","\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa","\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],Js=["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6","\u0780\u07af\u0789\u07a6","\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6","\u0784\u07aa\u078b\u07a6","\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8","\u0780\u07aa\u0786\u07aa\u0783\u07aa","\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];M.defineLocale("dv",{months:Ns,monthsShort:Ns,weekdays:Js,weekdaysShort:Js,weekdaysMin:"\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0789\u0786|\u0789\u078a/,isPM:function(e){return"\u0789\u078a"===e},meridiem:function(e,a,t){return e<12?"\u0789\u0786":"\u0789\u078a"},calendar:{sameDay:"[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",nextDay:"[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",nextWeek:"dddd LT",lastDay:"[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",lastWeek:"[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",sameElse:"L"},relativeTime:{future:"\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",past:"\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",s:"\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",ss:"d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",m:"\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",mm:"\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",h:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",hh:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",d:"\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",dd:"\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",M:"\u0789\u07a6\u0780\u07ac\u0787\u07b0",MM:"\u0789\u07a6\u0790\u07b0 %d",y:"\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",yy:"\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:7,doy:12}}),M.defineLocale("el",{monthsNominativeEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),monthsGenitiveEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),months:function(e,a){return e?"string"==typeof a&&/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),weekdays:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),weekdaysShort:"\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),weekdaysMin:"\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),meridiem:function(e,a,t){return 11<e?t?"\u03bc\u03bc":"\u039c\u039c":t?"\u03c0\u03bc":"\u03a0\u039c"},isPM:function(e){return"\u03bc"===(e+"").toLowerCase()[0]},meridiemParse:/[\u03a0\u039c]\.?\u039c?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",nextDay:"[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[\u03a7\u03b8\u03b5\u03c2 {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";default:return"[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t,s=this._calendarEl[e],n=a&&a.hours();return t=s,("undefined"!=typeof Function&&t instanceof Function||"[object Function]"===Object.prototype.toString.call(t))&&(s=s.apply(a)),s.replace("{}",n%12==1?"\u03c3\u03c4\u03b7":"\u03c3\u03c4\u03b9\u03c2")},relativeTime:{future:"\u03c3\u03b5 %s",past:"%s \u03c0\u03c1\u03b9\u03bd",s:"\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",ss:"%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",m:"\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",mm:"%d \u03bb\u03b5\u03c0\u03c4\u03ac",h:"\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",hh:"%d \u03ce\u03c1\u03b5\u03c2",d:"\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",dd:"%d \u03bc\u03ad\u03c1\u03b5\u03c2",M:"\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",MM:"%d \u03bc\u03ae\u03bd\u03b5\u03c2",y:"\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",yy:"%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},dayOfMonthOrdinalParse:/\d{1,2}\u03b7/,ordinal:"%d\u03b7",week:{dow:1,doy:4}}),M.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:0,doy:4}}),M.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.defineLocale("en-in",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:0,doy:6}}),M.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-sg",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mart_apr_maj_jun_jul_a\u016dg_sept_okt_nov_dec".split("_"),weekdays:"diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_\u0135a_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"[la] D[-an de] MMMM, YYYY",LLL:"[la] D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",llll:"ddd, [la] D[-an de] MMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodia\u016d je] LT",nextDay:"[Morga\u016d je] LT",nextWeek:"dddd[n je] LT",lastDay:"[Hiera\u016d je] LT",lastWeek:"[pasintan] dddd[n je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"anta\u016d %s",s:"kelkaj sekundoj",ss:"%d sekundoj",m:"unu minuto",mm:"%d minutoj",h:"unu horo",hh:"%d horoj",d:"unu tago",dd:"%d tagoj",M:"unu monato",MM:"%d monatoj",y:"unu jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var Rs="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Cs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Is=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Us=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;M.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Cs[e.month()]:Rs[e.month()]:Rs},monthsRegex:Us,monthsShortRegex:Us,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:Is,longMonthsParse:Is,shortMonthsParse:Is,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var Gs="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Vs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Bs=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Ks=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;M.defineLocale("es-mx",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Vs[e.month()]:Gs[e.month()]:Gs},monthsRegex:Ks,monthsShortRegex:Ks,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:Bs,longMonthsParse:Bs,shortMonthsParse:Bs,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:4},invalidDate:"Fecha inv\xe1lida"});var qs="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Zs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),$s=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Qs=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;M.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Zs[e.month()]:qs[e.month()]:qs},monthsRegex:Qs,monthsShortRegex:Qs,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:$s,longMonthsParse:$s,shortMonthsParse:$s,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:6}});var Xs="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),en="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),an=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],tn=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;function sn(e,a,t,s){var n={s:["m\xf5ne sekundi","m\xf5ni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["\xfche minuti","\xfcks minut"],mm:[e+" minuti",e+" minutit"],h:["\xfche tunni","tund aega","\xfcks tund"],hh:[e+" tunni",e+" tundi"],d:["\xfche p\xe4eva","\xfcks p\xe4ev"],M:["kuu aja","kuu aega","\xfcks kuu"],MM:[e+" kuu",e+" kuud"],y:["\xfche aasta","aasta","\xfcks aasta"],yy:[e+" aasta",e+" aastat"]};return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]}M.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?en[e.month()]:Xs[e.month()]:Xs},monthsRegex:tn,monthsShortRegex:tn,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:an,longMonthsParse:an,shortMonthsParse:an,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4},invalidDate:"Fecha inv\xe1lida"}),M.defineLocale("et",{months:"jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\xe4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\xe4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\xe4rast",past:"%s tagasi",s:sn,ss:sn,m:sn,mm:sn,h:sn,hh:sn,d:sn,dd:"%d p\xe4eva",M:sn,MM:sn,y:sn,yy:sn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var nn={1:"\u06f1",2:"\u06f2",3:"\u06f3",4:"\u06f4",5:"\u06f5",6:"\u06f6",7:"\u06f7",8:"\u06f8",9:"\u06f9",0:"\u06f0"},rn={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};M.defineLocale("fa",{months:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),monthsShort:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),weekdays:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysShort:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,isPM:function(e){return/\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)},meridiem:function(e,a,t){return e<12?"\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631":"\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"},calendar:{sameDay:"[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",nextDay:"[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",nextWeek:"dddd [\u0633\u0627\u0639\u062a] LT",lastDay:"[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",lastWeek:"dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",sameElse:"L"},relativeTime:{future:"\u062f\u0631 %s",past:"%s \u067e\u06cc\u0634",s:"\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",ss:"%d \u062b\u0627\u0646\u06cc\u0647",m:"\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",mm:"%d \u062f\u0642\u06cc\u0642\u0647",h:"\u06cc\u06a9 \u0633\u0627\u0639\u062a",hh:"%d \u0633\u0627\u0639\u062a",d:"\u06cc\u06a9 \u0631\u0648\u0632",dd:"%d \u0631\u0648\u0632",M:"\u06cc\u06a9 \u0645\u0627\u0647",MM:"%d \u0645\u0627\u0647",y:"\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/[\u06f0-\u06f9]/g,function(e){return rn[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return nn[e]}).replace(/,/g,"\u060c")},dayOfMonthOrdinalParse:/\d{1,2}\u0645/,ordinal:"%d\u0645",week:{dow:6,doy:12}});var dn="nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),_n=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",dn[7],dn[8],dn[9]];function on(e,a,t,s){var n,r,d="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"ss":d=s?"sekunnin":"sekuntia";break;case"m":return s?"minuutin":"minuutti";case"mm":d=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":d=s?"tunnin":"tuntia";break;case"d":return s?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":d=s?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return s?"kuukauden":"kuukausi";case"MM":d=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":d=s?"vuoden":"vuotta";break}return r=s,d=((n=e)<10?r?_n[n]:dn[n]:n)+" "+d}M.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:on,ss:on,m:on,mm:on,h:on,hh:on,d:on,dd:on,M:on,MM:on,y:on,yy:on},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("fil",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),M.defineLocale("fo",{months:"januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),weekdaysShort:"sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),weekdaysMin:"su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[\xcd dag kl.] LT",nextDay:"[\xcd morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xcd gj\xe1r kl.] LT",lastWeek:"[s\xed\xf0stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s s\xed\xf0ani",s:"f\xe1 sekund",ss:"%d sekundir",m:"ein minuttur",mm:"%d minuttir",h:"ein t\xedmi",hh:"%d t\xedmar",d:"ein dagur",dd:"%d dagar",M:"ein m\xe1na\xf0ur",MM:"%d m\xe1na\xf0ir",y:"eitt \xe1r",yy:"%d \xe1r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("fr-ca",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}}),M.defineLocale("fr-ch",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var mn=/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,un=[/^janv/i,/^f\xe9vr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^ao\xfbt/i,/^sept/i,/^oct/i,/^nov/i,/^d\xe9c/i];M.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsRegex:mn,monthsShortRegex:mn,monthsStrictRegex:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,monthsShortStrictRegex:/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,monthsParse:un,longMonthsParse:un,shortMonthsParse:un,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var ln="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),Mn="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");M.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Mn[e.month()]:ln[e.month()]:ln},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[\xf4fr\xfbne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien min\xfat",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}});M.defineLocale("ga",{months:["Ean\xe1ir","Feabhra","M\xe1rta","Aibre\xe1n","Bealtaine","Meitheamh","I\xfail","L\xfanasa","Me\xe1n F\xf3mhair","Deireadh F\xf3mhair","Samhain","Nollaig"],monthsShort:["Ean","Feabh","M\xe1rt","Aib","Beal","Meith","I\xfail","L\xfan","M.F.","D.F.","Samh","Noll"],monthsParseExact:!0,weekdays:["D\xe9 Domhnaigh","D\xe9 Luain","D\xe9 M\xe1irt","D\xe9 C\xe9adaoin","D\xe9ardaoin","D\xe9 hAoine","D\xe9 Sathairn"],weekdaysShort:["Domh","Luan","M\xe1irt","C\xe9ad","D\xe9ar","Aoine","Sath"],weekdaysMin:["Do","Lu","M\xe1","C\xe9","D\xe9","A","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Inniu ag] LT",nextDay:"[Am\xe1rach ag] LT",nextWeek:"dddd [ag] LT",lastDay:"[Inn\xe9 ag] LT",lastWeek:"dddd [seo caite] [ag] LT",sameElse:"L"},relativeTime:{future:"i %s",past:"%s \xf3 shin",s:"c\xfapla soicind",ss:"%d soicind",m:"n\xf3im\xe9ad",mm:"%d n\xf3im\xe9ad",h:"uair an chloig",hh:"%d uair an chloig",d:"l\xe1",dd:"%d l\xe1",M:"m\xed",MM:"%d m\xedonna",y:"bliain",yy:"%d bliain"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}});function hn(e,a,t,s){var n={s:["\u0925\u094b\u0921\u092f\u093e \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940","\u0925\u094b\u0921\u0947 \u0938\u0945\u0915\u0902\u0921"],ss:[e+" \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",e+" \u0938\u0945\u0915\u0902\u0921"],m:["\u090f\u0915\u093e \u092e\u093f\u0923\u091f\u093e\u0928","\u090f\u0915 \u092e\u093f\u0928\u0942\u091f"],mm:[e+" \u092e\u093f\u0923\u091f\u093e\u0902\u0928\u0940",e+" \u092e\u093f\u0923\u091f\u093e\u0902"],h:["\u090f\u0915\u093e \u0935\u0930\u093e\u0928","\u090f\u0915 \u0935\u0930"],hh:[e+" \u0935\u0930\u093e\u0902\u0928\u0940",e+" \u0935\u0930\u093e\u0902"],d:["\u090f\u0915\u093e \u0926\u093f\u0938\u093e\u0928","\u090f\u0915 \u0926\u0940\u0938"],dd:[e+" \u0926\u093f\u0938\u093e\u0902\u0928\u0940",e+" \u0926\u0940\u0938"],M:["\u090f\u0915\u093e \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928","\u090f\u0915 \u092e\u094d\u0939\u092f\u0928\u094b"],MM:[e+" \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928\u0940",e+" \u092e\u094d\u0939\u092f\u0928\u0947"],y:["\u090f\u0915\u093e \u0935\u0930\u094d\u0938\u093e\u0928","\u090f\u0915 \u0935\u0930\u094d\u0938"],yy:[e+" \u0935\u0930\u094d\u0938\u093e\u0902\u0928\u0940",e+" \u0935\u0930\u094d\u0938\u093e\u0902"]};return s?n[t][0]:n[t][1]}function cn(e,a,t,s){var n={s:["thoddea sekondamni","thodde sekond"],ss:[e+" sekondamni",e+" sekond"],m:["eka mintan","ek minut"],mm:[e+" mintamni",e+" mintam"],h:["eka voran","ek vor"],hh:[e+" voramni",e+" voram"],d:["eka disan","ek dis"],dd:[e+" disamni",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineamni",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsamni",e+" vorsam"]};return s?n[t][0]:n[t][1]}M.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"],monthsShort:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],monthsParseExact:!0,weekdays:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-m\xe0ireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-d\xe8 aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"m\xecos",MM:"%d m\xecosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}}),M.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextDay:function(){return"[ma\xf1\xe1 "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\xe1s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\xe1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\xe1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("gom-deva",{months:{standalone:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u092f_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),format:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092e\u093e\u0930\u094d\u091a\u093e\u091a\u094d\u092f\u093e_\u090f\u092a\u094d\u0930\u0940\u0932\u093e\u091a\u094d\u092f\u093e_\u092e\u0947\u092f\u093e\u091a\u094d\u092f\u093e_\u091c\u0942\u0928\u093e\u091a\u094d\u092f\u093e_\u091c\u0941\u0932\u092f\u093e\u091a\u094d\u092f\u093e_\u0911\u0917\u0938\u094d\u091f\u093e\u091a\u094d\u092f\u093e_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0911\u0915\u094d\u091f\u094b\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0921\u093f\u0938\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940._\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u092f\u0924\u093e\u0930_\u0938\u094b\u092e\u093e\u0930_\u092e\u0902\u0917\u0933\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u092c\u093f\u0930\u0947\u0938\u094d\u0924\u093e\u0930_\u0938\u0941\u0915\u094d\u0930\u093e\u0930_\u0936\u0947\u0928\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0906\u092f\u0924._\u0938\u094b\u092e._\u092e\u0902\u0917\u0933._\u092c\u0941\u0927._\u092c\u094d\u0930\u0947\u0938\u094d\u0924._\u0938\u0941\u0915\u094d\u0930._\u0936\u0947\u0928.".split("_"),weekdaysMin:"\u0906_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u092c\u094d\u0930\u0947_\u0938\u0941_\u0936\u0947".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",LTS:"A h:mm:ss [\u0935\u093e\u091c\u0924\u093e\u0902]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",llll:"ddd, D MMM YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]"},calendar:{sameDay:"[\u0906\u092f\u091c] LT",nextDay:"[\u092b\u093e\u0932\u094d\u092f\u093e\u0902] LT",nextWeek:"[\u092b\u0941\u0921\u0932\u094b] dddd[,] LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092b\u093e\u091f\u0932\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s \u0906\u0926\u0940\u0902",s:hn,ss:hn,m:hn,mm:hn,h:hn,hh:hn,d:hn,dd:hn,M:hn,MM:hn,y:hn,yy:hn},dayOfMonthOrdinalParse:/\d{1,2}(\u0935\u0947\u0930)/,ordinal:function(e,a){switch(a){case"D":return e+"\u0935\u0947\u0930";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u0940"===a?e<4?e:e+12:"\u0938\u0915\u093e\u0933\u0940\u0902"===a?e:"\u0926\u0928\u092a\u093e\u0930\u093e\u0902"===a?12<e?e:e+12:"\u0938\u093e\u0902\u091c\u0947"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924\u0940":e<12?"\u0938\u0915\u093e\u0933\u0940\u0902":e<16?"\u0926\u0928\u092a\u093e\u0930\u093e\u0902":e<20?"\u0938\u093e\u0902\u091c\u0947":"\u0930\u093e\u0924\u0940"}}),M.defineLocale("gom-latn",{months:{standalone:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),format:"Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Fuddlo] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fattlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:cn,ss:cn,m:cn,mm:cn,h:cn,hh:cn,d:cn,dd:cn,M:cn,MM:cn,y:cn,yy:cn},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,a){switch(a){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/rati|sokallim|donparam|sanje/,meridiemHour:function(e,a){return 12===e&&(e=0),"rati"===a?e<4?e:e+12:"sokallim"===a?e:"donparam"===a?12<e?e:e+12:"sanje"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"rati":e<12?"sokallim":e<16?"donparam":e<20?"sanje":"rati"}});var Ln={1:"\u0ae7",2:"\u0ae8",3:"\u0ae9",4:"\u0aea",5:"\u0aeb",6:"\u0aec",7:"\u0aed",8:"\u0aee",9:"\u0aef",0:"\u0ae6"},Yn={"\u0ae7":"1","\u0ae8":"2","\u0ae9":"3","\u0aea":"4","\u0aeb":"5","\u0aec":"6","\u0aed":"7","\u0aee":"8","\u0aef":"9","\u0ae6":"0"};M.defineLocale("gu",{months:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),monthsShort:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),monthsParseExact:!0,weekdays:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),weekdaysShort:"\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),weekdaysMin:"\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),longDateFormat:{LT:"A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LTS:"A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LLLL:"dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"},calendar:{sameDay:"[\u0a86\u0a9c] LT",nextDay:"[\u0a95\u0abe\u0ab2\u0ac7] LT",nextWeek:"dddd, LT",lastDay:"[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",lastWeek:"[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0aae\u0abe",past:"%s \u0aaa\u0ab9\u0ac7\u0ab2\u0abe",s:"\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",ss:"%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",m:"\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",mm:"%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",h:"\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",hh:"%d \u0a95\u0ab2\u0abe\u0a95",d:"\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",dd:"%d \u0aa6\u0abf\u0ab5\u0ab8",M:"\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",MM:"%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",y:"\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",yy:"%d \u0ab5\u0ab0\u0acd\u0ab7"},preparse:function(e){return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g,function(e){return Yn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Ln[e]})},meridiemParse:/\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0ab0\u0abe\u0aa4"===a?e<4?e:e+12:"\u0ab8\u0ab5\u0abe\u0ab0"===a?e:"\u0aac\u0aaa\u0acb\u0ab0"===a?10<=e?e:e+12:"\u0ab8\u0abe\u0a82\u0a9c"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0ab0\u0abe\u0aa4":e<10?"\u0ab8\u0ab5\u0abe\u0ab0":e<17?"\u0aac\u0aaa\u0acb\u0ab0":e<20?"\u0ab8\u0abe\u0a82\u0a9c":"\u0ab0\u0abe\u0aa4"},week:{dow:0,doy:6}}),M.defineLocale("he",{months:"\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),monthsShort:"\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),weekdays:"\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),weekdaysShort:"\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),weekdaysMin:"\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [\u05d1]MMMM YYYY",LLL:"D [\u05d1]MMMM YYYY HH:mm",LLLL:"dddd, D [\u05d1]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",nextDay:"[\u05de\u05d7\u05e8 \u05d1\u05be]LT",nextWeek:"dddd [\u05d1\u05e9\u05e2\u05d4] LT",lastDay:"[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",lastWeek:"[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",sameElse:"L"},relativeTime:{future:"\u05d1\u05e2\u05d5\u05d3 %s",past:"\u05dc\u05e4\u05e0\u05d9 %s",s:"\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",ss:"%d \u05e9\u05e0\u05d9\u05d5\u05ea",m:"\u05d3\u05e7\u05d4",mm:"%d \u05d3\u05e7\u05d5\u05ea",h:"\u05e9\u05e2\u05d4",hh:function(e){return 2===e?"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd":e+" \u05e9\u05e2\u05d5\u05ea"},d:"\u05d9\u05d5\u05dd",dd:function(e){return 2===e?"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd":e+" \u05d9\u05de\u05d9\u05dd"},M:"\u05d7\u05d5\u05d3\u05e9",MM:function(e){return 2===e?"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd":e+" \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},y:"\u05e9\u05e0\u05d4",yy:function(e){return 2===e?"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd":e%10==0&&10!==e?e+" \u05e9\u05e0\u05d4":e+" \u05e9\u05e0\u05d9\u05dd"}},meridiemParse:/\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,isPM:function(e){return/^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)},meridiem:function(e,a,t){return e<5?"\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8":e<10?"\u05d1\u05d1\u05d5\u05e7\u05e8":e<12?t?'\u05dc\u05e4\u05e0\u05d4"\u05e6':"\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e<18?t?'\u05d0\u05d7\u05d4"\u05e6':"\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":"\u05d1\u05e2\u05e8\u05d1"}});var yn={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},fn={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"},pn=[/^\u091c\u0928/i,/^\u092b\u093c\u0930|\u092b\u0930/i,/^\u092e\u093e\u0930\u094d\u091a/i,/^\u0905\u092a\u094d\u0930\u0948/i,/^\u092e\u0908/i,/^\u091c\u0942\u0928/i,/^\u091c\u0941\u0932/i,/^\u0905\u0917/i,/^\u0938\u093f\u0924\u0902|\u0938\u093f\u0924/i,/^\u0905\u0915\u094d\u091f\u0942/i,/^\u0928\u0935|\u0928\u0935\u0902/i,/^\u0926\u093f\u0938\u0902|\u0926\u093f\u0938/i];function kn(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1!==e&&(2===e||3===e||4===e)?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1!==e&&(2===e||3===e||4===e)?"godine":"godina"}}M.defineLocale("hi",{months:{format:"\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),standalone:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u0902\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u0902\u092c\u0930_\u0926\u093f\u0938\u0902\u092c\u0930".split("_")},monthsShort:"\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092c\u091c\u0947",LTS:"A h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"},monthsParse:pn,longMonthsParse:pn,shortMonthsParse:[/^\u091c\u0928/i,/^\u092b\u093c\u0930/i,/^\u092e\u093e\u0930\u094d\u091a/i,/^\u0905\u092a\u094d\u0930\u0948/i,/^\u092e\u0908/i,/^\u091c\u0942\u0928/i,/^\u091c\u0941\u0932/i,/^\u0905\u0917/i,/^\u0938\u093f\u0924/i,/^\u0905\u0915\u094d\u091f\u0942/i,/^\u0928\u0935/i,/^\u0926\u093f\u0938/i],monthsRegex:/^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,monthsShortRegex:/^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,monthsStrictRegex:/^(\u091c\u0928\u0935\u0930\u0940?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908?|\u0905\u0917\u0938\u094d\u0924?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924?\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930?)/i,monthsShortStrictRegex:/^(\u091c\u0928\.?|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\.?|\u0905\u0917\.?|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\.?|\u0926\u093f\u0938\.?)/i,calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092a\u093f\u091b\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092e\u0947\u0902",past:"%s \u092a\u0939\u0932\u0947",s:"\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0902\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u091f",mm:"%d \u092e\u093f\u0928\u091f",h:"\u090f\u0915 \u0918\u0902\u091f\u093e",hh:"%d \u0918\u0902\u091f\u0947",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",MM:"%d \u092e\u0939\u0940\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return fn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return yn[e]})},meridiemParse:/\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924"===a?e<4?e:e+12:"\u0938\u0941\u092c\u0939"===a?e:"\u0926\u094b\u092a\u0939\u0930"===a?10<=e?e:e+12:"\u0936\u093e\u092e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924":e<10?"\u0938\u0941\u092c\u0939":e<17?"\u0926\u094b\u092a\u0939\u0930":e<20?"\u0936\u093e\u092e":"\u0930\u093e\u0924"},week:{dow:0,doy:6}}),M.defineLocale("hr",{months:{format:"sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:return"[pro\u0161lu] [nedjelju] [u] LT";case 3:return"[pro\u0161lu] [srijedu] [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:kn,m:kn,mm:kn,h:kn,hh:kn,d:"dan",dd:kn,M:"mjesec",MM:kn,y:"godinu",yy:kn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Dn="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function Tn(e,a,t,s){var n=e;switch(t){case"s":return s||a?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return n+(s||a)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" \xf3ra":" \xf3r\xe1ja");case"hh":return n+(s||a?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" h\xf3nap":" h\xf3napja");case"MM":return n+(s||a?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(s||a?" \xe9v":" \xe9ve");case"yy":return n+(s||a?" \xe9v":" \xe9ve")}return""}function gn(e){return(e?"":"[m\xfalt] ")+"["+Dn[this.day()]+"] LT[-kor]"}function wn(e){return e%100==11||e%10!=1}function vn(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"ss":return wn(e)?n+(a||s?"sek\xfandur":"sek\xfandum"):n+"sek\xfanda";case"m":return a?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return wn(e)?n+(a||s?"m\xedn\xfatur":"m\xedn\xfatum"):a?n+"m\xedn\xfata":n+"m\xedn\xfatu";case"hh":return wn(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return wn(e)?a?n+"dagar":n+(s?"daga":"d\xf6gum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"m\xe1nu\xf0ur":s?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return wn(e)?a?n+"m\xe1nu\xf0ir":n+(s?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):a?n+"m\xe1nu\xf0ur":n+(s?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return a||s?"\xe1r":"\xe1ri";case"yy":return wn(e)?n+(a||s?"\xe1r":"\xe1rum"):n+(a||s?"\xe1r":"\xe1ri")}}M.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan._feb._m\xe1rc._\xe1pr._m\xe1j._j\xfan._j\xfal._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return gn.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return gn.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:Tn,ss:Tn,m:Tn,mm:Tn,h:Tn,hh:Tn,d:Tn,dd:Tn,M:Tn,MM:Tn,y:Tn,yy:Tn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("hy-am",{months:{format:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),standalone:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")},monthsShort:"\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),weekdays:"\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),weekdaysShort:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),weekdaysMin:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0569.",LLL:"D MMMM YYYY \u0569., HH:mm",LLLL:"dddd, D MMMM YYYY \u0569., HH:mm"},calendar:{sameDay:"[\u0561\u0575\u057d\u0585\u0580] LT",nextDay:"[\u057e\u0561\u0572\u0568] LT",lastDay:"[\u0565\u0580\u0565\u056f] LT",nextWeek:function(){return"dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},lastWeek:function(){return"[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},sameElse:"L"},relativeTime:{future:"%s \u0570\u0565\u057f\u0578",past:"%s \u0561\u057c\u0561\u057b",s:"\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",ss:"%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",m:"\u0580\u0578\u057a\u0565",mm:"%d \u0580\u0578\u057a\u0565",h:"\u056a\u0561\u0574",hh:"%d \u056a\u0561\u0574",d:"\u0585\u0580",dd:"%d \u0585\u0580",M:"\u0561\u0574\u056b\u057d",MM:"%d \u0561\u0574\u056b\u057d",y:"\u057f\u0561\u0580\u056b",yy:"%d \u057f\u0561\u0580\u056b"},meridiemParse:/\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,isPM:function(e){return/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)},meridiem:function(e){return e<4?"\u0563\u056b\u0577\u0565\u0580\u057e\u0561":e<12?"\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561":e<17?"\u0581\u0565\u0580\u0565\u056f\u057e\u0561":"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-\u056b\u0576":e+"-\u0580\u0564";default:return e}},week:{dow:1,doy:7}}),M.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?11<=e?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}}),M.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:vn,ss:vn,m:vn,mm:vn,h:"klukkustund",hh:vn,d:vn,dd:vn,M:vn,MM:vn,y:vn,yy:vn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("it-ch",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:function(){return"[Oggi a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextDay:function(){return"[Domani a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextWeek:function(){return"dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastDay:function(){return"[Ieri a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastWeek:function(){switch(this.day()){case 0:return"[La scorsa] dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT";default:return"[Lo scorso] dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"}},sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",w:"una settimana",ww:"%d settimane",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("ja",{eras:[{since:"2019-05-01",offset:1,name:"\u4ee4\u548c",narrow:"\u32ff",abbr:"R"},{since:"1989-01-08",until:"2019-04-30",offset:1,name:"\u5e73\u6210",narrow:"\u337b",abbr:"H"},{since:"1926-12-25",until:"1989-01-07",offset:1,name:"\u662d\u548c",narrow:"\u337c",abbr:"S"},{since:"1912-07-30",until:"1926-12-24",offset:1,name:"\u5927\u6b63",narrow:"\u337d",abbr:"T"},{since:"1873-01-01",until:"1912-07-29",offset:6,name:"\u660e\u6cbb",narrow:"\u337e",abbr:"M"},{since:"0001-01-01",until:"1873-12-31",offset:1,name:"\u897f\u66a6",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"\u7d00\u5143\u524d",narrow:"BC",abbr:"BC"}],eraYearOrdinalRegex:/(\u5143|\d+)\u5e74/,eraYearOrdinalParse:function(e,a){return"\u5143"===a[1]?1:parseInt(a[1]||e,10)},months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),weekdaysShort:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),weekdaysMin:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"},meridiemParse:/\u5348\u524d|\u5348\u5f8c/i,isPM:function(e){return"\u5348\u5f8c"===e},meridiem:function(e,a,t){return e<12?"\u5348\u524d":"\u5348\u5f8c"},calendar:{sameDay:"[\u4eca\u65e5] LT",nextDay:"[\u660e\u65e5] LT",nextWeek:function(e){return e.week()!==this.week()?"[\u6765\u9031]dddd LT":"dddd LT"},lastDay:"[\u6628\u65e5] LT",lastWeek:function(e){return this.week()!==e.week()?"[\u5148\u9031]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}\u65e5/,ordinal:function(e,a){switch(a){case"y":return 1===e?"\u5143\u5e74":e+"\u5e74";case"d":case"D":case"DDD":return e+"\u65e5";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u6570\u79d2",ss:"%d\u79d2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65e5",dd:"%d\u65e5",M:"1\u30f6\u6708",MM:"%d\u30f6\u6708",y:"1\u5e74",yy:"%d\u5e74"}}),M.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?11<=e?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),M.defineLocale("ka",{months:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),monthsShort:"\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),weekdays:{standalone:"\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),format:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),isFormat:/(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/},weekdaysShort:"\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),weekdaysMin:"\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",nextDay:"[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",lastDay:"[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",nextWeek:"[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",lastWeek:"[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",sameElse:"L"},relativeTime:{future:function(e){return e.replace(/(\u10ec\u10d0\u10db|\u10ec\u10e3\u10d7|\u10e1\u10d0\u10d0\u10d7|\u10ec\u10d4\u10da|\u10d3\u10e6|\u10d7\u10d5)(\u10d8|\u10d4)/,function(e,a,t){return"\u10d8"===t?a+"\u10e8\u10d8":a+t+"\u10e8\u10d8"})},past:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e)?e.replace(/(\u10d8|\u10d4)$/,"\u10d8\u10e1 \u10ec\u10d8\u10dc"):/\u10ec\u10d4\u10da\u10d8/.test(e)?e.replace(/\u10ec\u10d4\u10da\u10d8$/,"\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc"):e},s:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",ss:"%d \u10ec\u10d0\u10db\u10d8",m:"\u10ec\u10e3\u10d7\u10d8",mm:"%d \u10ec\u10e3\u10d7\u10d8",h:"\u10e1\u10d0\u10d0\u10d7\u10d8",hh:"%d \u10e1\u10d0\u10d0\u10d7\u10d8",d:"\u10d3\u10e6\u10d4",dd:"%d \u10d3\u10e6\u10d4",M:"\u10d7\u10d5\u10d4",MM:"%d \u10d7\u10d5\u10d4",y:"\u10ec\u10d4\u10da\u10d8",yy:"%d \u10ec\u10d4\u10da\u10d8"},dayOfMonthOrdinalParse:/0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,ordinal:function(e){return 0===e?e:1===e?e+"-\u10da\u10d8":e<20||e<=100&&e%20==0||e%100==0?"\u10db\u10d4-"+e:e+"-\u10d4"},week:{dow:1,doy:7}});var bn={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"};M.defineLocale("kk",{months:"\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),monthsShort:"\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),weekdays:"\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),weekdaysShort:"\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),weekdaysMin:"\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",nextDay:"[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0493\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0456\u0448\u0456\u043d\u0434\u0435",past:"%s \u0431\u04b1\u0440\u044b\u043d",s:"\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",hh:"%d \u0441\u0430\u0493\u0430\u0442",d:"\u0431\u0456\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0456\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0456\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0448\u0456|\u0448\u044b)/,ordinal:function(e){return e+(bn[e]||bn[e%10]||bn[100<=e?100:null])},week:{dow:1,doy:7}});var Sn={1:"\u17e1",2:"\u17e2",3:"\u17e3",4:"\u17e4",5:"\u17e5",6:"\u17e6",7:"\u17e7",8:"\u17e8",9:"\u17e9",0:"\u17e0"},Hn={"\u17e1":"1","\u17e2":"2","\u17e3":"3","\u17e4":"4","\u17e5":"5","\u17e6":"6","\u17e7":"7","\u17e8":"8","\u17e9":"9","\u17e0":"0"};M.defineLocale("km",{months:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),monthsShort:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),weekdays:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),weekdaysShort:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysMin:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,isPM:function(e){return"\u179b\u17d2\u1784\u17b6\u1785"===e},meridiem:function(e,a,t){return e<12?"\u1796\u17d2\u179a\u17b9\u1780":"\u179b\u17d2\u1784\u17b6\u1785"},calendar:{sameDay:"[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",nextDay:"[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",nextWeek:"dddd [\u1798\u17c9\u17c4\u1784] LT",lastDay:"[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",lastWeek:"dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",sameElse:"L"},relativeTime:{future:"%s\u1791\u17c0\u178f",past:"%s\u1798\u17bb\u1793",s:"\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",ss:"%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",m:"\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",mm:"%d \u1793\u17b6\u1791\u17b8",h:"\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",hh:"%d \u1798\u17c9\u17c4\u1784",d:"\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",dd:"%d \u1790\u17d2\u1784\u17c3",M:"\u1798\u17bd\u1799\u1781\u17c2",MM:"%d \u1781\u17c2",y:"\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",yy:"%d \u1786\u17d2\u1793\u17b6\u17c6"},dayOfMonthOrdinalParse:/\u1791\u17b8\d{1,2}/,ordinal:"\u1791\u17b8%d",preparse:function(e){return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g,function(e){return Hn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Sn[e]})},week:{dow:1,doy:4}});var jn={1:"\u0ce7",2:"\u0ce8",3:"\u0ce9",4:"\u0cea",5:"\u0ceb",6:"\u0cec",7:"\u0ced",8:"\u0cee",9:"\u0cef",0:"\u0ce6"},xn={"\u0ce7":"1","\u0ce8":"2","\u0ce9":"3","\u0cea":"4","\u0ceb":"5","\u0cec":"6","\u0ced":"7","\u0cee":"8","\u0cef":"9","\u0ce6":"0"};M.defineLocale("kn",{months:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),monthsShort:"\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),monthsParseExact:!0,weekdays:"\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),weekdaysShort:"\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),weekdaysMin:"\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c87\u0c82\u0ca6\u0cc1] LT",nextDay:"[\u0ca8\u0cbe\u0cb3\u0cc6] LT",nextWeek:"dddd, LT",lastDay:"[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",lastWeek:"[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0ca8\u0c82\u0ca4\u0cb0",past:"%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",s:"\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",ss:"%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",m:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",mm:"%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",h:"\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",hh:"%d \u0c97\u0c82\u0c9f\u0cc6",d:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",dd:"%d \u0ca6\u0cbf\u0ca8",M:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",MM:"%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",y:"\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",yy:"%d \u0cb5\u0cb0\u0ccd\u0cb7"},preparse:function(e){return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g,function(e){return xn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return jn[e]})},meridiemParse:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"===a?e<4?e:e+12:"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6"===a?e:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8"===a?10<=e?e:e+12:"\u0cb8\u0c82\u0c9c\u0cc6"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf":e<10?"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6":e<17?"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8":e<20?"\u0cb8\u0c82\u0c9c\u0cc6":"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},dayOfMonthOrdinalParse:/\d{1,2}(\u0ca8\u0cc6\u0cd5)/,ordinal:function(e){return e+"\u0ca8\u0cc6\u0cd5"},week:{dow:0,doy:6}}),M.defineLocale("ko",{months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c A h:mm",LLLL:"YYYY\ub144 MMMM D\uc77c dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\ub144 MMMM D\uc77c",lll:"YYYY\ub144 MMMM D\uc77c A h:mm",llll:"YYYY\ub144 MMMM D\uc77c dddd A h:mm"},calendar:{sameDay:"\uc624\ub298 LT",nextDay:"\ub0b4\uc77c LT",nextWeek:"dddd LT",lastDay:"\uc5b4\uc81c LT",lastWeek:"\uc9c0\ub09c\uc8fc dddd LT",sameElse:"L"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",ss:"%d\ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c \ub2ec",MM:"%d\ub2ec",y:"\uc77c \ub144",yy:"%d\ub144"},dayOfMonthOrdinalParse:/\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\uc77c";case"M":return e+"\uc6d4";case"w":case"W":return e+"\uc8fc";default:return e}},meridiemParse:/\uc624\uc804|\uc624\ud6c4/,isPM:function(e){return"\uc624\ud6c4"===e},meridiem:function(e,a,t){return e<12?"\uc624\uc804":"\uc624\ud6c4"}});var Pn={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},On={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},Wn=["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645","\u0634\u0648\u0628\u0627\u062a","\u0626\u0627\u0632\u0627\u0631","\u0646\u06cc\u0633\u0627\u0646","\u0626\u0627\u06cc\u0627\u0631","\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646","\u062a\u06d5\u0645\u0645\u0648\u0632","\u0626\u0627\u0628","\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644","\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645","\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645","\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];M.defineLocale("ku",{months:Wn,monthsShort:Wn,weekdays:"\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),weekdaysShort:"\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,isPM:function(e){return/\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e)},meridiem:function(e,a,t){return e<12?"\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc":"\u0626\u06ce\u0648\u0627\u0631\u0647\u200c"},calendar:{sameDay:"[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",nextDay:"[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",nextWeek:"dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",lastDay:"[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",lastWeek:"dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",sameElse:"L"},relativeTime:{future:"\u0644\u0647\u200c %s",past:"%s",s:"\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",ss:"\u0686\u0631\u0643\u0647\u200c %d",m:"\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",mm:"%d \u062e\u0648\u0644\u0647\u200c\u0643",h:"\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",hh:"%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",d:"\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",dd:"%d \u0695\u06c6\u0698",M:"\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",MM:"%d \u0645\u0627\u0646\u06af",y:"\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",yy:"%d \u0633\u0627\u06b5"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return On[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Pn[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}});var An={0:"-\u0447\u04af",1:"-\u0447\u0438",2:"-\u0447\u0438",3:"-\u0447\u04af",4:"-\u0447\u04af",5:"-\u0447\u0438",6:"-\u0447\u044b",7:"-\u0447\u0438",8:"-\u0447\u0438",9:"-\u0447\u0443",10:"-\u0447\u0443",20:"-\u0447\u044b",30:"-\u0447\u0443",40:"-\u0447\u044b",50:"-\u0447\u04af",60:"-\u0447\u044b",70:"-\u0447\u0438",80:"-\u0447\u0438",90:"-\u0447\u0443",100:"-\u0447\u04af"};function En(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function Fn(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var a=e%10;return 0==a?Fn(e/10):Fn(a)}if(e<1e4){for(;10<=e;)e/=10;return Fn(e)}return Fn(e/=1e3)}M.defineLocale("ky",{months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),weekdaysShort:"\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),weekdaysMin:"\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",nextDay:"[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0438\u0447\u0438\u043d\u0434\u0435",past:"%s \u043c\u0443\u0440\u0443\u043d",s:"\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",mm:"%d \u043c\u04af\u043d\u04e9\u0442",h:"\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",hh:"%d \u0441\u0430\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0438\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0438\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,ordinal:function(e){return e+(An[e]||An[e%10]||An[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("lb",{months:"Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),weekdaysMin:"So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[G\xebschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return Fn(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return Fn(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",ss:"%d Sekonnen",m:En,mm:"%d Minutten",h:En,hh:"%d Stonnen",d:En,dd:"%d Deeg",M:En,MM:"%d M\xe9int",y:En,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("lo",{months:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),monthsShort:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),weekdays:"\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysShort:"\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysMin:"\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,isPM:function(e){return"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"===e},meridiem:function(e,a,t){return e<12?"\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2":"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"},calendar:{sameDay:"[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextDay:"[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastDay:"[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",sameElse:"L"},relativeTime:{future:"\u0ead\u0eb5\u0e81 %s",past:"%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",s:"\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",ss:"%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",m:"1 \u0e99\u0eb2\u0e97\u0eb5",mm:"%d \u0e99\u0eb2\u0e97\u0eb5",h:"1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",hh:"%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",d:"1 \u0ea1\u0eb7\u0ec9",dd:"%d \u0ea1\u0eb7\u0ec9",M:"1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",MM:"%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",y:"1 \u0e9b\u0eb5",yy:"%d \u0e9b\u0eb5"},dayOfMonthOrdinalParse:/(\u0e97\u0eb5\u0ec8)\d{1,2}/,ordinal:function(e){return"\u0e97\u0eb5\u0ec8"+e}});var zn={ss:"sekund\u0117_sekund\u017ei\u0173_sekundes",m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};function Nn(e,a,t,s){return a?Rn(t)[0]:s?Rn(t)[1]:Rn(t)[2]}function Jn(e){return e%10==0||10<e&&e<20}function Rn(e){return zn[e].split("_")}function Cn(e,a,t,s){var n=e+" ";return 1===e?n+Nn(0,a,t[0],s):a?n+(Jn(e)?Rn(t)[1]:Rn(t)[0]):s?n+Rn(t)[1]:n+(Jn(e)?Rn(t)[1]:Rn(t)[2])}M.defineLocale("lt",{months:{format:"sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),weekdaysMin:"S_P_A_T_K_Pn_\u0160".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012f] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:function(e,a,t,s){return a?"kelios sekund\u0117s":s?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes"},ss:Cn,m:Nn,mm:Cn,h:Nn,hh:Cn,d:Nn,dd:Cn,M:Nn,MM:Cn,y:Nn,yy:Cn},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});var In={ss:"sekundes_sekund\u0113m_sekunde_sekundes".split("_"),m:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),mm:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),h:"stundas_stund\u0101m_stunda_stundas".split("_"),hh:"stundas_stund\u0101m_stunda_stundas".split("_"),d:"dienas_dien\u0101m_diena_dienas".split("_"),dd:"dienas_dien\u0101m_diena_dienas".split("_"),M:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),MM:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function Un(e,a,t){return t?a%10==1&&a%100!=11?e[2]:e[3]:a%10==1&&a%100!=11?e[0]:e[1]}function Gn(e,a,t){return e+" "+Un(In[t],e,a)}function Vn(e,a,t){return Un(In[t],e,a)}M.defineLocale("lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:function(e,a){return a?"da\u017eas sekundes":"da\u017e\u0101m sekund\u0113m"},ss:Gn,m:Vn,mm:Gn,h:Vn,hh:Gn,d:Vn,dd:Gn,M:Vn,MM:Gn,y:Vn,yy:Gn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Bn={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Bn.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Bn.correctGrammaticalCase(e,s)}};function Kn(e,a,t,s){switch(t){case"s":return a?"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434":"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";case"ss":return e+(a?" \u0441\u0435\u043a\u0443\u043d\u0434":" \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");case"m":case"mm":return e+(a?" \u043c\u0438\u043d\u0443\u0442":" \u043c\u0438\u043d\u0443\u0442\u044b\u043d");case"h":case"hh":return e+(a?" \u0446\u0430\u0433":" \u0446\u0430\u0433\u0438\u0439\u043d");case"d":case"dd":return e+(a?" \u04e9\u0434\u04e9\u0440":" \u04e9\u0434\u0440\u0438\u0439\u043d");case"M":case"MM":return e+(a?" \u0441\u0430\u0440":" \u0441\u0430\u0440\u044b\u043d");case"y":case"yy":return e+(a?" \u0436\u0438\u043b":" \u0436\u0438\u043b\u0438\u0439\u043d");default:return e}}M.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedjelje] [u] LT","[pro\u0161log] [ponedjeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srijede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:Bn.translate,m:Bn.translate,mm:Bn.translate,h:Bn.translate,hh:Bn.translate,d:"dan",dd:Bn.translate,M:"mjesec",MM:Bn.translate,y:"godinu",yy:Bn.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("mi",{months:"Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),weekdaysShort:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),weekdaysMin:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te h\u0113kona ruarua",ss:"%d h\u0113kona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("mk",{months:"\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),weekdaysMin:"\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",nextWeek:"[\u0412\u043e] dddd [\u0432\u043e] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";case 1:case 2:case 4:case 5:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435\u0434 %s",s:"\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u0435\u0434\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0435\u0434\u0435\u043d \u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0435\u0434\u0435\u043d \u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",M:"\u0435\u0434\u0435\u043d \u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0438",y:"\u0435\u0434\u043d\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0==t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1==a?e+"-\u0432\u0438":2==a?e+"-\u0440\u0438":7==a||8==a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),M.defineLocale("ml",{months:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),monthsShort:"\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),monthsParseExact:!0,weekdays:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),weekdaysShort:"\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),weekdaysMin:"\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),longDateFormat:{LT:"A h:mm -\u0d28\u0d41",LTS:"A h:mm:ss -\u0d28\u0d41",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -\u0d28\u0d41",LLLL:"dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"},calendar:{sameDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",nextDay:"[\u0d28\u0d3e\u0d33\u0d46] LT",nextWeek:"dddd, LT",lastDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",lastWeek:"[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",past:"%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",s:"\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",ss:"%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",m:"\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",mm:"%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",h:"\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",hh:"%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",d:"\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",dd:"%d \u0d26\u0d3f\u0d35\u0d38\u0d02",M:"\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",MM:"%d \u0d2e\u0d3e\u0d38\u0d02",y:"\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",yy:"%d \u0d35\u0d7c\u0d37\u0d02"},meridiemParse:/\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"===a&&4<=e||"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d"===a||"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f":e<12?"\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46":e<17?"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d":e<20?"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02":"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"}}),M.defineLocale("mn",{months:"\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),monthsShort:"1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),monthsParseExact:!0,weekdays:"\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),weekdaysShort:"\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),weekdaysMin:"\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",LLL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",LLLL:"dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"},meridiemParse:/\u04ae\u04e8|\u04ae\u0425/i,isPM:function(e){return"\u04ae\u0425"===e},meridiem:function(e,a,t){return e<12?"\u04ae\u04e8":"\u04ae\u0425"},calendar:{sameDay:"[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",nextDay:"[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",nextWeek:"[\u0418\u0440\u044d\u0445] dddd LT",lastDay:"[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",lastWeek:"[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",sameElse:"L"},relativeTime:{future:"%s \u0434\u0430\u0440\u0430\u0430",past:"%s \u04e9\u043c\u043d\u04e9",s:Kn,ss:Kn,m:Kn,mm:Kn,h:Kn,hh:Kn,d:Kn,dd:Kn,M:Kn,MM:Kn,y:Kn,yy:Kn},dayOfMonthOrdinalParse:/\d{1,2} \u04e9\u0434\u04e9\u0440/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+" \u04e9\u0434\u04e9\u0440";default:return e}}});var qn={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},Zn={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};function $n(e,a,t,s){var n="";if(a)switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926";break;case"m":n="\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u0947";break;case"h":n="\u090f\u0915 \u0924\u093e\u0938";break;case"hh":n="%d \u0924\u093e\u0938";break;case"d":n="\u090f\u0915 \u0926\u093f\u0935\u0938";break;case"dd":n="%d \u0926\u093f\u0935\u0938";break;case"M":n="\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u0947";break;case"y":n="\u090f\u0915 \u0935\u0930\u094d\u0937";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u0947";break}else switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"m":n="\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";break;case"h":n="\u090f\u0915\u093e \u0924\u093e\u0938\u093e";break;case"hh":n="%d \u0924\u093e\u0938\u093e\u0902";break;case"d":n="\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";break;case"dd":n="%d \u0926\u093f\u0935\u0938\u093e\u0902";break;case"M":n="\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";break;case"y":n="\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u093e\u0902";break}return n.replace(/%d/i,e)}M.defineLocale("mr",{months:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u0935\u093e\u091c\u0924\u093e",LTS:"A h:mm:ss \u0935\u093e\u091c\u0924\u093e",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",LLLL:"dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0909\u0926\u094d\u092f\u093e] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092e\u093e\u0917\u0940\u0932] dddd, LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u0927\u094d\u092f\u0947",past:"%s\u092a\u0942\u0930\u094d\u0935\u0940",s:$n,ss:$n,m:$n,mm:$n,h:$n,hh:$n,d:$n,dd:$n,M:$n,MM:$n,y:$n,yy:$n},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return Zn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return qn[e]})},meridiemParse:/\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u092a\u0939\u093e\u091f\u0947"===a||"\u0938\u0915\u093e\u0933\u0940"===a?e:"\u0926\u0941\u092a\u093e\u0930\u0940"===a||"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"===a||"\u0930\u093e\u0924\u094d\u0930\u0940"===a?12<=e?e:e+12:void 0},meridiem:function(e,a,t){return 0<=e&&e<6?"\u092a\u0939\u093e\u091f\u0947":e<12?"\u0938\u0915\u093e\u0933\u0940":e<17?"\u0926\u0941\u092a\u093e\u0930\u0940":e<20?"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940":"\u0930\u093e\u0924\u094d\u0930\u0940"},week:{dow:0,doy:6}}),M.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),M.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),M.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),weekdays:"Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),weekdaysShort:"\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),weekdaysMin:"\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[G\u0127ada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-biera\u0127 fil-]LT",lastWeek:"dddd [li g\u0127adda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f\u2019 %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"sieg\u0127a",hh:"%d sieg\u0127at",d:"\u0121urnata",dd:"%d \u0121ranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var Qn={1:"\u1041",2:"\u1042",3:"\u1043",4:"\u1044",5:"\u1045",6:"\u1046",7:"\u1047",8:"\u1048",9:"\u1049",0:"\u1040"},Xn={"\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1040":"0"};M.defineLocale("my",{months:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),monthsShort:"\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),weekdays:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),weekdaysShort:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),weekdaysMin:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",nextDay:"[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",nextWeek:"dddd LT [\u1019\u103e\u102c]",lastDay:"[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",lastWeek:"[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",sameElse:"L"},relativeTime:{future:"\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",past:"\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",s:"\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",ss:"%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",m:"\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",mm:"%d \u1019\u102d\u1014\u1005\u103a",h:"\u1010\u1005\u103a\u1014\u102c\u101b\u102e",hh:"%d \u1014\u102c\u101b\u102e",d:"\u1010\u1005\u103a\u101b\u1000\u103a",dd:"%d \u101b\u1000\u103a",M:"\u1010\u1005\u103a\u101c",MM:"%d \u101c",y:"\u1010\u1005\u103a\u1014\u103e\u1005\u103a",yy:"%d \u1014\u103e\u1005\u103a"},preparse:function(e){return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g,function(e){return Xn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Qn[e]})},week:{dow:1,doy:4}}),M.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",w:"en uke",ww:"%d uker",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var er={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},ar={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};M.defineLocale("ne",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),weekdaysShort:"\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),weekdaysMin:"\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A\u0915\u094b h:mm \u092c\u091c\u0947",LTS:"A\u0915\u094b h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return ar[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return er[e]})},meridiemParse:/\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u093f"===a?e<4?e:e+12:"\u092c\u093f\u0939\u093e\u0928"===a?e:"\u0926\u093f\u0909\u0901\u0938\u094b"===a?10<=e?e:e+12:"\u0938\u093e\u0901\u091d"===a?e+12:void 0},meridiem:function(e,a,t){return e<3?"\u0930\u093e\u0924\u093f":e<12?"\u092c\u093f\u0939\u093e\u0928":e<16?"\u0926\u093f\u0909\u0901\u0938\u094b":e<20?"\u0938\u093e\u0901\u091d":"\u0930\u093e\u0924\u093f"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u092d\u094b\u0932\u093f] LT",nextWeek:"[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",lastDay:"[\u0939\u093f\u091c\u094b] LT",lastWeek:"[\u0917\u090f\u0915\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u093e",past:"%s \u0905\u0917\u093e\u0921\u093f",s:"\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",mm:"%d \u092e\u093f\u0928\u0947\u091f",h:"\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",hh:"%d \u0918\u0923\u094d\u091f\u093e",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",MM:"%d \u092e\u0939\u093f\u0928\u093e",y:"\u090f\u0915 \u092c\u0930\u094d\u0937",yy:"%d \u092c\u0930\u094d\u0937"},week:{dow:0,doy:6}});var tr="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),sr="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),nr=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],rr=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;M.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?sr[e.month()]:tr[e.month()]:tr},monthsRegex:rr,monthsShortRegex:rr,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:nr,longMonthsParse:nr,shortMonthsParse:nr,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}});var dr="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),ir="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),_r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],or=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;M.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?ir[e.month()]:dr[e.month()]:dr},monthsRegex:or,monthsShortRegex:or,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:_r,longMonthsParse:_r,shortMonthsParse:_r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",w:"\xe9\xe9n week",ww:"%d weken",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),M.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"su._m\xe5._ty._on._to._fr._lau.".split("_"),weekdaysMin:"su_m\xe5_ty_on_to_fr_la".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I g\xe5r klokka] LT",lastWeek:"[F\xf8reg\xe5ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",w:"ei veke",ww:"%d veker",M:"ein m\xe5nad",MM:"%d m\xe5nader",y:"eit \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("oc-lnc",{months:{standalone:"geni\xe8r_febri\xe8r_mar\xe7_abril_mai_junh_julhet_agost_setembre_oct\xf2bre_novembre_decembre".split("_"),format:"de geni\xe8r_de febri\xe8r_de mar\xe7_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct\xf2bre_de novembre_de decembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"dimenge_diluns_dimars_dim\xe8cres_dij\xf2us_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dm._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:"[u\xe8i a] LT",nextDay:"[deman a] LT",nextWeek:"dddd [a] LT",lastDay:"[i\xe8r a] LT",lastWeek:"dddd [passat a] LT",sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"unas segondas",ss:"%d segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){return e+("w"!==a&&"W"!==a?1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8":"a")},week:{dow:1,doy:4}});var mr={1:"\u0a67",2:"\u0a68",3:"\u0a69",4:"\u0a6a",5:"\u0a6b",6:"\u0a6c",7:"\u0a6d",8:"\u0a6e",9:"\u0a6f",0:"\u0a66"},ur={"\u0a67":"1","\u0a68":"2","\u0a69":"3","\u0a6a":"4","\u0a6b":"5","\u0a6c":"6","\u0a6d":"7","\u0a6e":"8","\u0a6f":"9","\u0a66":"0"};M.defineLocale("pa-in",{months:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),monthsShort:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),weekdays:"\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),weekdaysShort:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),weekdaysMin:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),longDateFormat:{LT:"A h:mm \u0a35\u0a1c\u0a47",LTS:"A h:mm:ss \u0a35\u0a1c\u0a47",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",LLLL:"dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"},calendar:{sameDay:"[\u0a05\u0a1c] LT",nextDay:"[\u0a15\u0a32] LT",nextWeek:"[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",lastDay:"[\u0a15\u0a32] LT",lastWeek:"[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0a35\u0a3f\u0a71\u0a1a",past:"%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",s:"\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",ss:"%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",m:"\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",mm:"%d \u0a2e\u0a3f\u0a70\u0a1f",h:"\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",hh:"%d \u0a18\u0a70\u0a1f\u0a47",d:"\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",dd:"%d \u0a26\u0a3f\u0a28",M:"\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",MM:"%d \u0a2e\u0a39\u0a40\u0a28\u0a47",y:"\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",yy:"%d \u0a38\u0a3e\u0a32"},preparse:function(e){return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g,function(e){return ur[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return mr[e]})},meridiemParse:/\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0a30\u0a3e\u0a24"===a?e<4?e:e+12:"\u0a38\u0a35\u0a47\u0a30"===a?e:"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30"===a?10<=e?e:e+12:"\u0a38\u0a3c\u0a3e\u0a2e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0a30\u0a3e\u0a24":e<10?"\u0a38\u0a35\u0a47\u0a30":e<17?"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30":e<20?"\u0a38\u0a3c\u0a3e\u0a2e":"\u0a30\u0a3e\u0a24"},week:{dow:0,doy:6}});var lr="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),Mr="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),hr=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^pa\u017a/i,/^lis/i,/^gru/i];function cr(e){return e%10<5&&1<e%10&&~~(e/10)%10!=1}function Lr(e,a,t){var s=e+" ";switch(t){case"ss":return s+(cr(e)?"sekundy":"sekund");case"m":return a?"minuta":"minut\u0119";case"mm":return s+(cr(e)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return s+(cr(e)?"godziny":"godzin");case"ww":return s+(cr(e)?"tygodnie":"tygodni");case"MM":return s+(cr(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return s+(cr(e)?"lata":"lat")}}function Yr(e,a,t){return e+(20<=e%100||100<=e&&e%100==0?" de ":" ")+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"s\u0103pt\u0103m\xe2ni",MM:"luni",yy:"ani"}[t]}function yr(e,a,t){var s,n;return"m"===t?a?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",ww:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043d\u0435\u0434\u0435\u043b\u0438_\u043d\u0435\u0434\u0435\u043b\u044c",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}M.defineLocale("pl",{months:function(e,a){return e?/D MMMM/.test(a)?Mr[e.month()]:lr[e.month()]:lr},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),monthsParse:hr,longMonthsParse:hr,shortMonthsParse:hr,weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:Lr,m:Lr,mm:Lr,h:Lr,hh:Lr,d:"1 dzie\u0144",dd:"%d dni",w:"tydzie\u0144",ww:Lr,M:"miesi\u0105c",MM:Lr,y:"rok",yy:Lr},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("pt-br",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",invalidDate:"Data inv\xe1lida"}),M.defineLocale("pt",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",w:"uma semana",ww:"%d semanas",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xe2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xeen urm\u0103",s:"c\xe2teva secunde",ss:Yr,m:"un minut",mm:Yr,h:"o or\u0103",hh:Yr,d:"o zi",dd:Yr,w:"o s\u0103pt\u0103m\xe2n\u0103",ww:Yr,M:"o lun\u0103",MM:Yr,y:"un an",yy:Yr},week:{dow:1,doy:7}});var fr=[/^\u044f\u043d\u0432/i,/^\u0444\u0435\u0432/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f\u0440/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441\u0435\u043d/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e\u044f/i,/^\u0434\u0435\u043a/i];M.defineLocale("ru",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")},monthsShort:{format:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),standalone:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")},weekdays:{standalone:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),format:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?] ?dddd/},weekdaysShort:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),monthsParse:fr,longMonthsParse:fr,shortMonthsParse:fr,monthsRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsShortRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsStrictRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,monthsShortStrictRegex:/^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., H:mm",LLLL:"dddd, D MMMM YYYY \u0433., H:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",ss:yr,m:yr,mm:yr,h:"\u0447\u0430\u0441",hh:yr,d:"\u0434\u0435\u043d\u044c",dd:yr,w:"\u043d\u0435\u0434\u0435\u043b\u044f",ww:yr,M:"\u043c\u0435\u0441\u044f\u0446",MM:yr,y:"\u0433\u043e\u0434",yy:yr},meridiemParse:/\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0438":e<12?"\u0443\u0442\u0440\u0430":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0435\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-\u0439";case"D":return e+"-\u0433\u043e";case"w":case"W":return e+"-\u044f";default:return e}},week:{dow:1,doy:4}});var pr=["\u062c\u0646\u0648\u0631\u064a","\u0641\u064a\u0628\u0631\u0648\u0631\u064a","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u064a\u0644","\u0645\u0626\u064a","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0621\u0650","\u0622\u06af\u0633\u067d","\u0633\u064a\u067e\u067d\u0645\u0628\u0631","\u0622\u06aa\u067d\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u068a\u0633\u0645\u0628\u0631"],kr=["\u0622\u0686\u0631","\u0633\u0648\u0645\u0631","\u0627\u06b1\u0627\u0631\u0648","\u0627\u0631\u0628\u0639","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639","\u0687\u0646\u0687\u0631"];M.defineLocale("sd",{months:pr,monthsShort:pr,weekdays:kr,weekdaysShort:kr,weekdaysMin:kr,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0627\u0684] LT",nextDay:"[\u0633\u0680\u0627\u06bb\u064a] LT",nextWeek:"dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",lastDay:"[\u06aa\u0627\u0644\u0647\u0647] LT",lastWeek:"[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",sameElse:"L"},relativeTime:{future:"%s \u067e\u0648\u0621",past:"%s \u0627\u06b3",s:"\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",ss:"%d \u0633\u064a\u06aa\u0646\u068a",m:"\u0647\u06aa \u0645\u0646\u067d",mm:"%d \u0645\u0646\u067d",h:"\u0647\u06aa \u06aa\u0644\u0627\u06aa",hh:"%d \u06aa\u0644\u0627\u06aa",d:"\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",dd:"%d \u068f\u064a\u0646\u0647\u0646",M:"\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",MM:"%d \u0645\u0647\u064a\u0646\u0627",y:"\u0647\u06aa \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),M.defineLocale("se",{months:"o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),monthsShort:"o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),weekdays:"sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),weekdaysShort:"sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s gea\u017ees",past:"ma\u014bit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta m\xe1nnu",MM:"%d m\xe1nut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("si",{months:"\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),monthsShort:"\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),weekdays:"\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),weekdaysShort:"\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),weekdaysMin:"\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"},calendar:{sameDay:"[\u0d85\u0daf] LT[\u0da7]",nextDay:"[\u0dc4\u0dd9\u0da7] LT[\u0da7]",nextWeek:"dddd LT[\u0da7]",lastDay:"[\u0d8a\u0dba\u0dda] LT[\u0da7]",lastWeek:"[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",sameElse:"L"},relativeTime:{future:"%s\u0d9a\u0dd2\u0db1\u0dca",past:"%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",s:"\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",ss:"\u0dad\u0dad\u0dca\u0db4\u0dbb %d",m:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",mm:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",h:"\u0db4\u0dd0\u0dba",hh:"\u0db4\u0dd0\u0dba %d",d:"\u0daf\u0dd2\u0db1\u0dba",dd:"\u0daf\u0dd2\u0db1 %d",M:"\u0db8\u0dcf\u0dc3\u0dba",MM:"\u0db8\u0dcf\u0dc3 %d",y:"\u0dc0\u0dc3\u0dbb",yy:"\u0dc0\u0dc3\u0dbb %d"},dayOfMonthOrdinalParse:/\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,ordinal:function(e){return e+" \u0dc0\u0dd0\u0db1\u0dd2"},meridiemParse:/\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,isPM:function(e){return"\u0db4.\u0dc0."===e||"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"===e},meridiem:function(e,a,t){return 11<e?t?"\u0db4.\u0dc0.":"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4":t?"\u0db4\u0dd9.\u0dc0.":"\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"}});var Dr="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),Tr="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function gr(e){return 1<e&&e<5}function wr(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return a||s?n+(gr(e)?"sekundy":"sek\xfand"):n+"sekundami";case"m":return a?"min\xfata":s?"min\xfatu":"min\xfatou";case"mm":return a||s?n+(gr(e)?"min\xfaty":"min\xfat"):n+"min\xfatami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(gr(e)?"hodiny":"hod\xedn"):n+"hodinami";case"d":return a||s?"de\u0148":"d\u0148om";case"dd":return a||s?n+(gr(e)?"dni":"dn\xed"):n+"d\u0148ami";case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(gr(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(gr(e)?"roky":"rokov"):n+"rokmi"}}function vr(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"ss":return n+=1===e?a?"sekundo":"sekundi":2===e?a||s?"sekundi":"sekundah":e<5?a||s?"sekunde":"sekundah":"sekund";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":e<5?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":e<5?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":e<5?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":e<5?a||s?"leta":"leti":a||s?"let":"leti"}}M.defineLocale("sk",{months:Dr,monthsShort:Tr,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:wr,ss:wr,m:wr,mm:wr,h:wr,hh:wr,d:wr,dd:wr,M:wr,MM:wr,y:wr,yy:wr},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:vr,ss:vr,m:vr,mm:vr,h:vr,hh:vr,d:vr,dd:vr,M:vr,MM:vr,y:vr,yy:vr},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),weekdays:"E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),weekdaysShort:"Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_M\xeb_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n\xeb] LT",nextDay:"[Nes\xebr n\xeb] LT",nextWeek:"dddd [n\xeb] LT",lastDay:"[Dje n\xeb] LT",lastWeek:"dddd [e kaluar n\xeb] LT",sameElse:"L"},relativeTime:{future:"n\xeb %s",past:"%s m\xeb par\xeb",s:"disa sekonda",ss:"%d sekonda",m:"nj\xeb minut\xeb",mm:"%d minuta",h:"nj\xeb or\xeb",hh:"%d or\xeb",d:"nj\xeb dit\xeb",dd:"%d dit\xeb",M:"nj\xeb muaj",MM:"%d muaj",y:"nj\xeb vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var br={words:{ss:["\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u0435","\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],m:["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442","\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],mm:["\u043c\u0438\u043d\u0443\u0442","\u043c\u0438\u043d\u0443\u0442\u0435","\u043c\u0438\u043d\u0443\u0442\u0430"],h:["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442","\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],hh:["\u0441\u0430\u0442","\u0441\u0430\u0442\u0430","\u0441\u0430\u0442\u0438"],dd:["\u0434\u0430\u043d","\u0434\u0430\u043d\u0430","\u0434\u0430\u043d\u0430"],MM:["\u043c\u0435\u0441\u0435\u0446","\u043c\u0435\u0441\u0435\u0446\u0430","\u043c\u0435\u0441\u0435\u0446\u0438"],yy:["\u0433\u043e\u0434\u0438\u043d\u0430","\u0433\u043e\u0434\u0438\u043d\u0435","\u0433\u043e\u0434\u0438\u043d\u0430"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=br.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+br.correctGrammaticalCase(e,s)}};M.defineLocale("sr-cyrl",{months:"\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),monthsShort:"\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),monthsParseExact:!0,weekdays:"\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),weekdaysMin:"\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",nextDay:"[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",nextWeek:function(){switch(this.day()){case 0:return"[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";case 3:return"[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";case 6:return"[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";case 1:case 2:case 4:case 5:return"[\u0443] dddd [\u0443] LT"}},lastDay:"[\u0458\u0443\u0447\u0435 \u0443] LT",lastWeek:function(){return["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435 %s",s:"\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:br.translate,m:br.translate,mm:br.translate,h:br.translate,hh:br.translate,d:"\u0434\u0430\u043d",dd:br.translate,M:"\u043c\u0435\u0441\u0435\u0446",MM:br.translate,y:"\u0433\u043e\u0434\u0438\u043d\u0443",yy:br.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Sr={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=Sr.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Sr.correctGrammaticalCase(e,s)}};M.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedelje] [u] LT","[pro\u0161log] [ponedeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:Sr.translate,m:Sr.translate,mm:Sr.translate,h:Sr.translate,hh:Sr.translate,d:"dan",dd:Sr.translate,M:"mesec",MM:Sr.translate,y:"godinu",yy:Sr.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?11<=e?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),M.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),weekdaysShort:"s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),weekdaysMin:"s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\xe5r] LT",nextWeek:"[P\xe5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\xf6r %s sedan",s:"n\xe5gra sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\xe5nad",MM:"%d m\xe5nader",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}(\:e|\:a)/,ordinal:function(e){var a=e%10;return e+(1!=~~(e%100/10)&&(1==a||2==a)?":a":":e")},week:{dow:1,doy:4}}),M.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"hh:mm A",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"siku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});var Hr={1:"\u0be7",2:"\u0be8",3:"\u0be9",4:"\u0bea",5:"\u0beb",6:"\u0bec",7:"\u0bed",8:"\u0bee",9:"\u0bef",0:"\u0be6"},jr={"\u0be7":"1","\u0be8":"2","\u0be9":"3","\u0bea":"4","\u0beb":"5","\u0bec":"6","\u0bed":"7","\u0bee":"8","\u0bef":"9","\u0be6":"0"};M.defineLocale("ta",{months:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),monthsShort:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),weekdays:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),weekdaysShort:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),weekdaysMin:"\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",nextDay:"[\u0ba8\u0bbe\u0bb3\u0bc8] LT",nextWeek:"dddd, LT",lastDay:"[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",lastWeek:"[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0b87\u0bb2\u0bcd",past:"%s \u0bae\u0bc1\u0ba9\u0bcd",s:"\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",ss:"%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",m:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",mm:"%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",h:"\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",hh:"%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",d:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",dd:"%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",M:"\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",MM:"%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",y:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",yy:"%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"},dayOfMonthOrdinalParse:/\d{1,2}\u0bb5\u0ba4\u0bc1/,ordinal:function(e){return e+"\u0bb5\u0ba4\u0bc1"},preparse:function(e){return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g,function(e){return jr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Hr[e]})},meridiemParse:/\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,meridiem:function(e,a,t){return e<2?" \u0baf\u0bbe\u0bae\u0bae\u0bcd":e<6?" \u0bb5\u0bc8\u0b95\u0bb1\u0bc8":e<10?" \u0b95\u0bbe\u0bb2\u0bc8":e<14?" \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd":e<18?" \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1":e<22?" \u0bae\u0bbe\u0bb2\u0bc8":" \u0baf\u0bbe\u0bae\u0bae\u0bcd"},meridiemHour:function(e,a){return 12===e&&(e=0),"\u0baf\u0bbe\u0bae\u0bae\u0bcd"===a?e<2?e:e+12:"\u0bb5\u0bc8\u0b95\u0bb1\u0bc8"===a||"\u0b95\u0bbe\u0bb2\u0bc8"===a||"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd"===a&&10<=e?e:e+12},week:{dow:0,doy:6}}),M.defineLocale("te",{months:"\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),monthsShort:"\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),monthsParseExact:!0,weekdays:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),weekdaysShort:"\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),weekdaysMin:"\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c28\u0c47\u0c21\u0c41] LT",nextDay:"[\u0c30\u0c47\u0c2a\u0c41] LT",nextWeek:"dddd, LT",lastDay:"[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",lastWeek:"[\u0c17\u0c24] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0c32\u0c4b",past:"%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",s:"\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",ss:"%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",m:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",mm:"%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",h:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",hh:"%d \u0c17\u0c02\u0c1f\u0c32\u0c41",d:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",dd:"%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",M:"\u0c12\u0c15 \u0c28\u0c46\u0c32",MM:"%d \u0c28\u0c46\u0c32\u0c32\u0c41",y:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",yy:"%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},dayOfMonthOrdinalParse:/\d{1,2}\u0c35/,ordinal:"%d\u0c35",meridiemParse:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"===a?e<4?e:e+12:"\u0c09\u0c26\u0c2f\u0c02"===a?e:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02"===a?10<=e?e:e+12:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f":e<10?"\u0c09\u0c26\u0c2f\u0c02":e<17?"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02":e<20?"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02":"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},week:{dow:0,doy:6}}),M.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"segundu balun",ss:"segundu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}});var xr={0:"-\u0443\u043c",1:"-\u0443\u043c",2:"-\u044e\u043c",3:"-\u044e\u043c",4:"-\u0443\u043c",5:"-\u0443\u043c",6:"-\u0443\u043c",7:"-\u0443\u043c",8:"-\u0443\u043c",9:"-\u0443\u043c",10:"-\u0443\u043c",12:"-\u0443\u043c",13:"-\u0443\u043c",20:"-\u0443\u043c",30:"-\u044e\u043c",40:"-\u0443\u043c",50:"-\u0443\u043c",60:"-\u0443\u043c",70:"-\u0443\u043c",80:"-\u0443\u043c",90:"-\u0443\u043c",100:"-\u0443\u043c"};M.defineLocale("tg",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0430\u043b\u0438_\u043c\u0430\u0440\u0442\u0438_\u0430\u043f\u0440\u0435\u043b\u0438_\u043c\u0430\u0439\u0438_\u0438\u044e\u043d\u0438_\u0438\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442\u0438_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0438_\u043e\u043a\u0442\u044f\u0431\u0440\u0438_\u043d\u043e\u044f\u0431\u0440\u0438_\u0434\u0435\u043a\u0430\u0431\u0440\u0438".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_")},monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),weekdaysShort:"\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),weekdaysMin:"\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextDay:"[\u0424\u0430\u0440\u0434\u043e \u0441\u043e\u0430\u0442\u0438] LT",lastDay:"[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",lastWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",sameElse:"L"},relativeTime:{future:"\u0431\u0430\u044a\u0434\u0438 %s",past:"%s \u043f\u0435\u0448",s:"\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",m:"\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",mm:"%d \u0434\u0430\u049b\u0438\u049b\u0430",h:"\u044f\u043a \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u044f\u043a \u0440\u04ef\u0437",dd:"%d \u0440\u04ef\u0437",M:"\u044f\u043a \u043c\u043e\u04b3",MM:"%d \u043c\u043e\u04b3",y:"\u044f\u043a \u0441\u043e\u043b",yy:"%d \u0441\u043e\u043b"},meridiemParse:/\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0448\u0430\u0431"===a?e<4?e:e+12:"\u0441\u0443\u0431\u04b3"===a?e:"\u0440\u04ef\u0437"===a?11<=e?e:e+12:"\u0431\u0435\u0433\u043e\u04b3"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0448\u0430\u0431":e<11?"\u0441\u0443\u0431\u04b3":e<16?"\u0440\u04ef\u0437":e<19?"\u0431\u0435\u0433\u043e\u04b3":"\u0448\u0430\u0431"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0443\u043c|\u044e\u043c)/,ordinal:function(e){return e+(xr[e]||xr[e%10]||xr[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("th",{months:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),monthsShort:"\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),monthsParseExact:!0,weekdays:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysShort:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysMin:"\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",LLLL:"\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"},meridiemParse:/\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,isPM:function(e){return"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"===e},meridiem:function(e,a,t){return e<12?"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07":"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"},calendar:{sameDay:"[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextDay:"[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextWeek:"dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",lastDay:"[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",lastWeek:"[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",sameElse:"L"},relativeTime:{future:"\u0e2d\u0e35\u0e01 %s",past:"%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",s:"\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",ss:"%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",m:"1 \u0e19\u0e32\u0e17\u0e35",mm:"%d \u0e19\u0e32\u0e17\u0e35",h:"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",hh:"%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",d:"1 \u0e27\u0e31\u0e19",dd:"%d \u0e27\u0e31\u0e19",w:"1 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",ww:"%d \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",M:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19",MM:"%d \u0e40\u0e14\u0e37\u0e2d\u0e19",y:"1 \u0e1b\u0e35",yy:"%d \u0e1b\u0e35"}});var Pr={1:"'inji",5:"'inji",8:"'inji",70:"'inji",80:"'inji",2:"'nji",7:"'nji",20:"'nji",50:"'nji",3:"'\xfcnji",4:"'\xfcnji",100:"'\xfcnji",6:"'njy",9:"'unjy",10:"'unjy",30:"'unjy",60:"'ynjy",90:"'ynjy"};M.defineLocale("tk",{months:"\xddanwar_Fewral_Mart_Aprel_Ma\xfd_I\xfdun_I\xfdul_Awgust_Sent\xfdabr_Okt\xfdabr_No\xfdabr_Dekabr".split("_"),monthsShort:"\xddan_Few_Mar_Apr_Ma\xfd_I\xfdn_I\xfdl_Awg_Sen_Okt_No\xfd_Dek".split("_"),weekdays:"\xddek\u015fenbe_Du\u015fenbe_Si\u015fenbe_\xc7ar\u015fenbe_Pen\u015fenbe_Anna_\u015eenbe".split("_"),weekdaysShort:"\xddek_Du\u015f_Si\u015f_\xc7ar_Pen_Ann_\u015een".split("_"),weekdaysMin:"\xddk_D\u015f_S\u015f_\xc7r_Pn_An_\u015en".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn sagat] LT",nextDay:"[ertir sagat] LT",nextWeek:"[indiki] dddd [sagat] LT",lastDay:"[d\xfc\xfdn] LT",lastWeek:"[ge\xe7en] dddd [sagat] LT",sameElse:"L"},relativeTime:{future:"%s so\u0148",past:"%s \xf6\u0148",s:"birn\xe4\xe7e sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir a\xfd",MM:"%d a\xfd",y:"bir \xfdyl",yy:"%d \xfdyl"},ordinal:function(e,a){switch(a){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'unjy";var t=e%10;return e+(Pr[t]||Pr[e%100-t]||Pr[100<=e?100:null])}},week:{dow:1,doy:7}}),M.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});var Or="pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function Wr(e,a,t,s){var n=function(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),s=e%10,n="";0<a&&(n+=Or[a]+"vatlh");0<t&&(n+=(""!==n?" ":"")+Or[t]+"maH");0<s&&(n+=(""!==n?" ":"")+Or[s]);return""===n?"pagh":n}(e);switch(t){case"ss":return n+" lup";case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}M.defineLocale("tlh",{months:"tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),monthsShort:"jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa\u2019leS] LT",nextWeek:"LLL",lastDay:"[wa\u2019Hu\u2019] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"},past:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu\u2019":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"},s:"puS lup",ss:Wr,m:"wa\u2019 tup",mm:Wr,h:"wa\u2019 rep",hh:Wr,d:"wa\u2019 jaj",dd:Wr,M:"wa\u2019 jar",MM:Wr,y:"wa\u2019 DIS",yy:Wr},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Ar={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",100:"'\xfcnc\xfc",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};function Er(e,a,t,s){var n={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n m\xedut","'iens m\xedut"],mm:[e+" m\xeduts",e+" m\xeduts"],h:["'n \xfeora","'iensa \xfeora"],hh:[e+" \xfeoras",e+" \xfeoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return s||a?n[t][0]:n[t][1]}function Fr(e,a,t){var s,n;return"m"===t?a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443":"h"===t?a?"\u0433\u043e\u0434\u0438\u043d\u0430":"\u0433\u043e\u0434\u0438\u043d\u0443":e+" "+(s=+e,n={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",hh:a?"\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d":"\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",MM:"\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",yy:"\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"}[t].split("_"),s%10==1&&s%100!=11?n[0]:2<=s%10&&s%10<=4&&(s%100<10||20<=s%100)?n[1]:n[2])}function zr(e){return function(){return e+"\u043e"+(11===this.hours()?"\u0431":"")+"] LT"}}M.defineLocale("tr",{months:"Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),monthsShort:"Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),meridiem:function(e,a,t){return e<12?t?"\xf6\xf6":"\xd6\xd6":t?"\xf6s":"\xd6S"},meridiemParse:/\xf6\xf6|\xd6\xd6|\xf6s|\xd6S/,isPM:function(e){return"\xf6s"===e||"\xd6S"===e},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\xfcn] LT",lastWeek:"[ge\xe7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \xf6nce",s:"birka\xe7 saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",w:"bir hafta",ww:"%d hafta",M:"bir ay",MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},ordinal:function(e,a){switch(a){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'\u0131nc\u0131";var t=e%10;return e+(Ar[t]||Ar[e%100-t]||Ar[100<=e?100:null])}},week:{dow:1,doy:7}}),M.defineLocale("tzl",{months:"Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),weekdaysShort:"S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),weekdaysMin:"S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi \xe0] LT",nextDay:"[dem\xe0 \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[ieiri \xe0] LT",lastWeek:"[s\xfcr el] dddd [lasteu \xe0] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Er,ss:Er,m:Er,mm:Er,h:Er,hh:Er,d:Er,dd:Er,M:Er,MM:Er,y:Er,yy:Er},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("tzm-latn",{months:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minu\u1e0d",mm:"%d minu\u1e0d",h:"sa\u025ba",hh:"%d tassa\u025bin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),M.defineLocale("tzm",{months:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),monthsShort:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),weekdays:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysShort:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysMin:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",nextDay:"[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",nextWeek:"dddd [\u2d34] LT",lastDay:"[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",lastWeek:"dddd [\u2d34] LT",sameElse:"L"},relativeTime:{future:"\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",past:"\u2d62\u2d30\u2d4f %s",s:"\u2d49\u2d4e\u2d49\u2d3d",ss:"%d \u2d49\u2d4e\u2d49\u2d3d",m:"\u2d4e\u2d49\u2d4f\u2d53\u2d3a",mm:"%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",h:"\u2d59\u2d30\u2d44\u2d30",hh:"%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",d:"\u2d30\u2d59\u2d59",dd:"%d o\u2d59\u2d59\u2d30\u2d4f",M:"\u2d30\u2d62o\u2d53\u2d54",MM:"%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",y:"\u2d30\u2d59\u2d33\u2d30\u2d59",yy:"%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"},week:{dow:6,doy:12}}),M.defineLocale("ug-cn",{months:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),monthsShort:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),weekdays:"\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),weekdaysShort:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),weekdaysMin:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",LLL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",LLLL:"dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"},meridiemParse:/\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5"===a||"\u0633\u06d5\u06be\u06d5\u0631"===a||"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646"===a||"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646"!==a&&"\u0643\u06d5\u0686"!==a&&11<=e?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5":s<900?"\u0633\u06d5\u06be\u06d5\u0631":s<1130?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646":s<1230?"\u0686\u06c8\u0634":s<1800?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646":"\u0643\u06d5\u0686"},calendar:{sameDay:"[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",nextDay:"[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",nextWeek:"[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",lastDay:"[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",lastWeek:"[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0643\u06d0\u064a\u0649\u0646",past:"%s \u0628\u06c7\u0631\u06c7\u0646",s:"\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",ss:"%d \u0633\u06d0\u0643\u0648\u0646\u062a",m:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",mm:"%d \u0645\u0649\u0646\u06c7\u062a",h:"\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",hh:"%d \u0633\u0627\u0626\u06d5\u062a",d:"\u0628\u0649\u0631 \u0643\u06c8\u0646",dd:"%d \u0643\u06c8\u0646",M:"\u0628\u0649\u0631 \u0626\u0627\u064a",MM:"%d \u0626\u0627\u064a",y:"\u0628\u0649\u0631 \u064a\u0649\u0644",yy:"%d \u064a\u0649\u0644"},dayOfMonthOrdinalParse:/\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"-\u0643\u06c8\u0646\u0649";case"w":case"W":return e+"-\u06be\u06d5\u067e\u062a\u06d5";default:return e}},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:7}}),M.defineLocale("uk",{months:{format:"\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),standalone:"\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")},monthsShort:"\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),weekdays:function(e,a){var t={nominative:"\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),accusative:"\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),genitive:"\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")};return!0===e?t.nominative.slice(1,7).concat(t.nominative.slice(0,1)):e?t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a)?"accusative":/\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0440.",LLL:"D MMMM YYYY \u0440., HH:mm",LLLL:"dddd, D MMMM YYYY \u0440., HH:mm"},calendar:{sameDay:zr("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),nextDay:zr("[\u0417\u0430\u0432\u0442\u0440\u0430 "),lastDay:zr("[\u0412\u0447\u043e\u0440\u0430 "),nextWeek:zr("[\u0423] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return zr("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);case 1:case 2:case 4:return zr("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"%s \u0442\u043e\u043c\u0443",s:"\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",ss:Fr,m:Fr,mm:Fr,h:"\u0433\u043e\u0434\u0438\u043d\u0443",hh:Fr,d:"\u0434\u0435\u043d\u044c",dd:Fr,M:"\u043c\u0456\u0441\u044f\u0446\u044c",MM:Fr,y:"\u0440\u0456\u043a",yy:Fr},meridiemParse:/\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0456":e<12?"\u0440\u0430\u043d\u043a\u0443":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u043e\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-\u0439";case"D":return e+"-\u0433\u043e";default:return e}},week:{dow:1,doy:7}});var Nr=["\u062c\u0646\u0648\u0631\u06cc","\u0641\u0631\u0648\u0631\u06cc","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u06cc\u0644","\u0645\u0626\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0626\u06cc","\u0627\u06af\u0633\u062a","\u0633\u062a\u0645\u0628\u0631","\u0627\u06a9\u062a\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u062f\u0633\u0645\u0628\u0631"],Jr=["\u0627\u062a\u0648\u0627\u0631","\u067e\u06cc\u0631","\u0645\u0646\u06af\u0644","\u0628\u062f\u06be","\u062c\u0645\u0639\u0631\u0627\u062a","\u062c\u0645\u0639\u06c1","\u06c1\u0641\u062a\u06c1"];return M.defineLocale("ur",{months:Nr,monthsShort:Nr,weekdays:Jr,weekdaysShort:Jr,weekdaysMin:Jr,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0622\u062c \u0628\u0648\u0642\u062a] LT",nextDay:"[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",nextWeek:"dddd [\u0628\u0648\u0642\u062a] LT",lastDay:"[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",lastWeek:"[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0628\u0639\u062f",past:"%s \u0642\u0628\u0644",s:"\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",ss:"%d \u0633\u06cc\u06a9\u0646\u0688",m:"\u0627\u06cc\u06a9 \u0645\u0646\u0679",mm:"%d \u0645\u0646\u0679",h:"\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",hh:"%d \u06af\u06be\u0646\u0679\u06d2",d:"\u0627\u06cc\u06a9 \u062f\u0646",dd:"%d \u062f\u0646",M:"\u0627\u06cc\u06a9 \u0645\u0627\u06c1",MM:"%d \u0645\u0627\u06c1",y:"\u0627\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),M.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}}),M.defineLocale("uz",{months:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),weekdaysShort:"\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),weekdaysMin:"\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",nextDay:"[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",nextWeek:"dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastDay:"[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastWeek:"[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",sameElse:"L"},relativeTime:{future:"\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",past:"\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",s:"\u0444\u0443\u0440\u0441\u0430\u0442",ss:"%d \u0444\u0443\u0440\u0441\u0430\u0442",m:"\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",mm:"%d \u0434\u0430\u043a\u0438\u043a\u0430",h:"\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u0431\u0438\u0440 \u043e\u0439",MM:"%d \u043e\u0439",y:"\u0431\u0438\u0440 \u0439\u0438\u043b",yy:"%d \u0439\u0438\u043b"},week:{dow:1,doy:7}}),M.defineLocale("vi",{months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),monthsShort:"Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),monthsParseExact:!0,weekdays:"ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\xf4m nay l\xfac] LT",nextDay:"[Ng\xe0y mai l\xfac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\xfac] LT",lastDay:"[H\xf4m qua l\xfac] LT",lastWeek:"dddd [tu\u1ea7n tr\u01b0\u1edbc l\xfac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\xe0i gi\xe2y",ss:"%d gi\xe2y",m:"m\u1ed9t ph\xfat",mm:"%d ph\xfat",h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\xe0y",dd:"%d ng\xe0y",w:"m\u1ed9t tu\u1ea7n",ww:"%d tu\u1ea7n",M:"m\u1ed9t th\xe1ng",MM:"%d th\xe1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),M.defineLocale("x-pseudo",{months:"J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),monthsShort:"J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),monthsParseExact:!0,weekdays:"S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),weekdaysShort:"S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),weekdaysMin:"S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~\xf3d\xe1~\xfd \xe1t] LT",nextDay:"[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",nextWeek:"dddd [\xe1t] LT",lastDay:"[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",lastWeek:"[L~\xe1st] dddd [\xe1t] LT",sameElse:"L"},relativeTime:{future:"\xed~\xf1 %s",past:"%s \xe1~g\xf3",s:"\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",ss:"%d s~\xe9c\xf3\xf1~ds",m:"\xe1 ~m\xed\xf1~\xfat\xe9",mm:"%d m~\xed\xf1\xfa~t\xe9s",h:"\xe1~\xf1 h\xf3~\xfar",hh:"%d h~\xf3\xfars",d:"\xe1 ~d\xe1\xfd",dd:"%d d~\xe1\xfds",M:"\xe1 ~m\xf3\xf1~th",MM:"%d m~\xf3\xf1t~hs",y:"\xe1 ~\xfd\xe9\xe1r",yy:"%d \xfd~\xe9\xe1rs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("yo",{months:"S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),monthsShort:"S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),weekdays:"A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),weekdaysShort:"A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),weekdaysMin:"A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[O\u0300ni\u0300 ni] LT",nextDay:"[\u1ecc\u0300la ni] LT",nextWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",lastDay:"[A\u0300na ni] LT",lastWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",sameElse:"L"},relativeTime:{future:"ni\u0301 %s",past:"%s k\u1ecdja\u0301",s:"i\u0300s\u1eb9ju\u0301 aaya\u0301 die",ss:"aaya\u0301 %d",m:"i\u0300s\u1eb9ju\u0301 kan",mm:"i\u0300s\u1eb9ju\u0301 %d",h:"wa\u0301kati kan",hh:"wa\u0301kati %d",d:"\u1ecdj\u1ecd\u0301 kan",dd:"\u1ecdj\u1ecd\u0301 %d",M:"osu\u0300 kan",MM:"osu\u0300 %d",y:"\u1ecddu\u0301n kan",yy:"\u1ecddu\u0301n %d"},dayOfMonthOrdinalParse:/\u1ecdj\u1ecd\u0301\s\d{1,2}/,ordinal:"\u1ecdj\u1ecd\u0301 %d",week:{dow:1,doy:4}}),M.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a||"\u4e0b\u5348"!==a&&"\u665a\u4e0a"!==a&&11<=e?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:function(e){return e.week()!==this.week()?"[\u4e0b]dddLT":"[\u672c]dddLT"},lastDay:"[\u6628\u5929]LT",lastWeek:function(e){return this.week()!==e.week()?"[\u4e0a]dddLT":"[\u672c]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u540e",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d \u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",w:"1 \u5468",ww:"%d \u5468",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}}),M.defineLocale("zh-hk",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1200?"\u4e0a\u5348":1200===s?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.defineLocale("zh-mo",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"D/M/YYYY",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929] LT",nextDay:"[\u660e\u5929] LT",nextWeek:"[\u4e0b]dddd LT",lastDay:"[\u6628\u5929] LT",lastWeek:"[\u4e0a]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.defineLocale("zh-tw",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return s<600?"\u51cc\u6668":s<900?"\u65e9\u4e0a":s<1130?"\u4e0a\u5348":s<1230?"\u4e2d\u5348":s<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929] LT",nextDay:"[\u660e\u5929] LT",nextWeek:"[\u4e0b]dddd LT",lastDay:"[\u6628\u5929] LT",lastWeek:"[\u4e0a]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.locale("en"),M});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/classCallCheck.js + 1 modules
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/createClass.js + 1 modules
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(4);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(6);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js + 1 modules
var getPrototypeOf = __webpack_require__(3);

// EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(5);
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

// EXTERNAL MODULE: ./src/core/core.js
var core = __webpack_require__(0);

// CONCATENATED MODULE: ./src/jquery/treetable/columnrenderer.js

var ColumnRendererPrototype = {
  createShape: function createShape(activity, parentElt, ctx) {
    return parentElt;
  },
  getText: function getText(row) {
    return row.name;
  },
  drawContent: function drawContent(elt, icon, text, object, ctx) {// Done through the render method

    /* if (icon) {
            const img = document.createElement('img');
            img.className = 'image-content';
            img.src = icon;
            img.alt = '';
            img.style.float = 'left';
            elt.appendChild(img);
        }
         if (text) {
            elt.appendChild(document.createTextNode(text));
        } */
  }
};
/* harmony default export */ var columnrenderer = (ColumnRendererPrototype);
// CONCATENATED MODULE: ./src/jquery/treetable/rowrenderer.js

var RowRendererPrototype = {
  createShape: function createShape(activity, parentElt) {
    return parentElt;
  }
};
/* harmony default export */ var rowrenderer = (RowRendererPrototype);
// EXTERNAL MODULE: ./src/jquery/treetable/treetablecontroller.js
var treetablecontroller = __webpack_require__(21);

// EXTERNAL MODULE: ./src/jquery/treetable/datatables.scss
var datatables = __webpack_require__(42);

// CONCATENATED MODULE: ./src/jquery/treetable/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var HIGHLIGHT_CLASS = 'highlight';
var SELECTION_CLASS = 'selected';
var FLAT_CLASS = 'tree-table-flat';
var NUMBER_COLUMN_NAME = 'rowNumbers';
var HIERARCHY_COLUMN_NAME = 'hierarchy';
var TREE_NODE_TYPE = 'tree-node';
var defaultDataTableOptions = {
  /* serverSide: true, */

  /*
     searching: false, */
  bInfo: false,
  paging: false,
  scrollY: '100%',
  scrollX: true,
  rowId: 'id'
};

function getDefaultTableColumns() {
  return [{
    name: NUMBER_COLUMN_NAME,
    data: null,
    title: '',
    render: function render(data, type, full, meta) {
      var color = full.backgroundColor ? " style=\"background-color: ".concat(full.backgroundColor) : '';
      return "<div class=\"row-number\"".concat(color, ">").concat(meta.row + 1, "</div>");
    },

    /* "width": "40px", */
    className: 'row-number-col',
    orderable: false,
    searchable: false
  }, {
    name: HIERARCHY_COLUMN_NAME,
    data: null,
    title: core["a" /* default */].utils.getString('gantt.name', 'Name')
  }];
}

var findColumn = function findColumn(columns, name) {
  for (var iCol = 0, count = columns ? columns.length : 0; iCol < count; iCol++) {
    if (columns[iCol].name === name) {
      return columns[iCol];
    }
  }

  return null;
};

var treetable_GanttDataTable = /*#__PURE__*/function (_Gantt$components$Tre) {
  Object(inherits["a" /* default */])(GanttDataTable, _Gantt$components$Tre);

  var _super = _createSuper(GanttDataTable);

  function GanttDataTable(gantt, node, config) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GanttDataTable);

    _this = _super.call(this, gantt, node, config);
    _this.gantt = gantt;
    var selectionHandler = _this.gantt.selection;
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CLEARED, function () {
      return _this.clearSelection();
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTED, function (e, sels) {
      return _this.selectRows(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_UNSELECTED, function (e, sels) {
      return _this.unselectRows(sels);
    });
    selectionHandler.on(core["a" /* default */].events.ROW_SELECTION_CHANGED, function (e, sels) {
      return _this.rowSelectionChanged(sels);
    });

    _this.setConfiguration(config);

    return _this;
  }

  Object(createClass["a" /* default */])(GanttDataTable, [{
    key: "setConfiguration",
    value: function setConfiguration(config) {
      var _this2 = this;

      this.config = config;

      if (this.$dataTable) {
        this.destroy();
      }

      var defaultConfig = core["a" /* default */].utils.mergeObjects({}, defaultDataTableOptions, {
        language: {
          emptyTable: core["a" /* default */].utils.getString('gantt.datatables.empty-table')
        }
      });
      defaultConfig.columns = getDefaultTableColumns(); // Instead of doing a deep copy of the defaultDataTableOptions

      this.dataTableOptions = core["a" /* default */].utils.mergeObjects(defaultConfig, config && config.dataTables);
      var rowRenderer;

      if (config && config.rows && config.rows.renderer) {
        rowRenderer = new (core["a" /* default */].components.Renderer.impl || core["a" /* default */].components.Renderer)(config.rows.renderer, rowrenderer, this.gantt);
      }

      if (config && config.columns && config.columns.length) {
        var defaultColumns = {};
        this.dataTableOptions.columns = this.dataTableOptions.columns.filter(function (col) {
          // Remove default columns if defined - maybe with a different order - in config.columns
          if (col.name) {
            defaultColumns[col.name] = col;
          }

          return !col.name || !findColumn(config.columns, col.name);
        });

        for (var iCol = 0, configCol, col; iCol < config.columns.length; iCol++) {
          configCol = config.columns[iCol];
          col = this.customizeDataColumn(configCol.name && defaultColumns[configCol.name] || {}, configCol, rowRenderer);

          if (col) {
            this.dataTableOptions.columns.push(col);
          }
        } // if default columns not in the specified config.columns, add them back in the columns unless explicitely removed


        var removedCols = {};
        this.dataTableOptions.columns = this.dataTableOptions.columns.filter(function (col) {
          if (col.remove && col.name) {
            removedCols[col.name] = true;
            return false;
          }

          return true;
        });

        if (!findColumn(this.dataTableOptions.columns, HIERARCHY_COLUMN_NAME) && !removedCols[HIERARCHY_COLUMN_NAME]) {
          this.dataTableOptions.columns.splice(0, 0, findColumn(defaultColumns[HIERARCHY_COLUMN_NAME]));
        }

        if (!findColumn(this.dataTableOptions.columns, NUMBER_COLUMN_NAME) && !removedCols[NUMBER_COLUMN_NAME]) {
          this.dataTableOptions.columns.splice(0, 0, findColumn(defaultColumns[NUMBER_COLUMN_NAME]));
        }
      } else if (rowRenderer) {
        for (var _iCol = 0, _configCol; _iCol < this.dataTableOptions.columns.length; _iCol++) {
          _configCol = this.dataTableOptions.columns[_iCol];
          this.dataTableOptions.columns[_iCol] = this.customizeDataColumn(_configCol, {}, rowRenderer);
        }
      }

      if (config && config.sorting !== undefined && !config.sorting) {
        this.dataTableOptions.columns.bSort = false;
      } else if (!config || !config.initialSorting) {
        this.dataTableOptions.order = [];
      }

      this.controller = new treetablecontroller["a" /* default */]();

      this.controller.rowsVisibilityChanged = function (visible, rows, rowRef) {
        _this2.gantt.startUpdating();

        _this2.triggerEvent(visible ? core["a" /* default */].events.ROWS_ADDED : core["a" /* default */].events.ROWS_REMOVED, rows, rowRef);

        _this2.gantt.updates.rowsChanged(visible ? core["a" /* default */].events.ROWS_ADDED : core["a" /* default */].events.ROWS_REMOVED, rows, rowRef);

        _this2.gantt.stopUpdating();
      };

      this.controller.customizeOptions(this.dataTableOptions, findColumn(this.dataTableOptions.columns, HIERARCHY_COLUMN_NAME), rowRenderer);
      this.dataTableOptions.rowId = 'id';
      var oldInitComplete = this.dataTableOptions.initComplete;

      this.dataTableOptions.initComplete = function (oSettings, json) {
        if (oldInitComplete) {
          oldInitComplete(oSettings, json);
        }
      };

      var oldDrawCallback = this.dataTableOptions.drawCallback;
      this._drawCallbacks = [];

      this.dataTableOptions.drawCallback = function (settings) {
        if (oldDrawCallback) {
          oldDrawCallback.call(_this2, settings);
        }

        for (var i = 0; i < _this2._drawCallbacks.length; i++) {
          _this2._drawCallbacks[i](settings);
        }

        _this2._drawCallbacks = [];
      };

      this.create();
    }
  }, {
    key: "customizeDataColumn",
    value: function customizeDataColumn(col, config, rowRenderer) {
      if (config.name) {
        col.name = config.name;
      }

      if (config.title) {
        col.title = config.title;
      }

      if (config.width) {
        col.width = config.width;
      }

      if (config.visible) {
        col.visible = config.visible;
      }

      if (config.className) {
        col.className = config.className;
      }

      if (config.remove) {
        // Not a dataTables field but pre-processed by this class
        col.remove = config.remove;
      }

      if (config.data || config.text) {
        var c = config.data || config.text;

        if (typeof c === 'function') {
          col.data = c;
        } else if (typeof c === 'string') {
          var getter = core["a" /* default */].utils.propertyEvaluator(c);

          if (getter) {
            col.data = function (object) {
              return getter(object);
            };
          }
        }
      }

      if (config.renderer || config.sortComparator || config.sortValue || config.filterValue || rowRenderer) {
        var colRenderer = config.renderer ? new (core["a" /* default */].components.Renderer.impl || core["a" /* default */].components.Renderer)(config.renderer, columnrenderer, this.gantt) : null;

        if (config.sortValue || config.sortComparator || colRenderer && colRenderer.getText) {
          col.type = TREE_NODE_TYPE;
          var sortValue;

          if (config.sortValue) {
            if (core["a" /* default */].utils.isFunction(config.sortValue)) {
              sortValue = function sortValue(obj) {
                return config.sortValue.call(config, obj);
              };
            } else if (core["a" /* default */].utils.isString(config.sortValue)) {
              sortValue = core["a" /* default */].utils.propertyEvaluator(config.sortValue);
            } else {
              console.warn('sortValue column config should be a function or a string');
            }
          }

          if (!sortValue && !config.sortComparator && colRenderer && colRenderer.getText) {
            sortValue = function sortValue(obj) {
              return colRenderer.getText(obj);
            };
          }

          col.render = {};

          col.render.sort = function (node, type, full) {
            var obj = Object.create(full);

            if (sortValue) {
              obj.getSortValue = sortValue;
            }

            if (config.sortComparator) {
              obj.comparator = function (a, b) {
                return config.sortComparator.call(config, a, b);
              };
            }

            return obj;
          };
        } else {
          col.orderable = false;
        }

        if (config.filterValue) {
          if (!col.render) {
            col.render = {};
          }

          if (core["a" /* default */].utils.isFunction(config.filterValue)) {
            col.render.filter = function (node, type, full) {
              return config.filterValue.call(config, full);
            };
          } else if (core["a" /* default */].utils.isString(config.filterValue)) {
            var filterValue = core["a" /* default */].utils.propertyEvaluator(config.filterValue);

            col.render.filter = function (node, type, full) {
              return filterValue(full);
            };
          } else {
            console.warn('filterValue column config should be a function or a string');
          }
        }

        if (colRenderer) {
          if (!col.render) {
            col.render = {};
          }

          if (colRenderer && colRenderer.getText) {
            // Value used for sorting or filtering if not sort/filter config specified.
            col.render._ = function (node, type, full) {
              return colRenderer.getText(full);
            };
          }

          col.render.display = function (node, type, full, meta) {
            var result = '';
            var icon = colRenderer.getIcon && colRenderer.getIcon(node, meta);

            if (icon) {
              icon = core["a" /* default */].utils.isArray(icon) ? icon : [icon];

              for (var iIcon = 0; iIcon < icon.length; iIcon++) {
                result += "<img src='".concat(icon[iIcon], "' alt='' class='text-icon'>");
              }
            }

            var text = colRenderer.getText && colRenderer.getText(node, meta);

            if (text) {
              result += "<span>".concat(text, "</span>");
            }

            return result;
          };
        } // https://datatables.net/reference/option/columns.createdCell


        var ctx = {};

        if (rowRenderer) {
          if (colRenderer) {
            col.createdCell = function (cell, cellData, rowData) {
              colRenderer.draw(rowData, cell, ctx);
            };
          } else {
            col.createdCell = function (cell, cellData, rowData) {
              rowRenderer.draw(rowData, cell, ctx);
            };
          }
        } else if (colRenderer) {
          col.createdCell = function (cell, cellData, rowData) {
            colRenderer.draw(rowData, cell, ctx);
          };
        }
      }

      if (!col.data) {
        col.data = null;
      }

      return col;
    }
  }, {
    key: "setRowFilter",
    value: function setRowFilter(filter) {
      this.filter = filter;
    }
  }, {
    key: "create",
    value: function create() {}
  }, {
    key: "setRows",
    value: function setRows(rows) {
      var _this3 = this;

      this.rows = rows;

      if (this.tableElt) {
        this.destroy();
      }

      this.tableElt = document.createElement('table');
      this.tableElt.className = core["a" /* default */].components.TreeTable.defaultClass;
      this.tableElt.setAttribute('aria-label', core["a" /* default */].utils.getString('gantt.columns'));
      this.tableElt.tabIndex = 0;
      this.tableElt.cellSpacing = 0; // this.tableElt.style.width = '100%';

      var thead = document.createElement('thead');
      var tr = document.createElement('tr');
      tr.tabIndex = 0; // Scan columns definitions

      var columns = this.dataTableOptions.columns;

      for (var i = 0, th; i < columns.length; i++) {
        th = document.createElement('th');
        th.scope = 'col';
        th.innerHTML = columns[i].key && core["a" /* default */].utils.getString(columns[i].key, columns[i].title) || columns[i].title || columns[i].data || "Col".concat(i + 1);
        tr.appendChild(th);
      }

      thead.appendChild(tr);
      this.tableElt.appendChild(thead);
      this.node.appendChild(this.tableElt);
      var initResolver;
      var initPms = new Promise(function (resolver, reject) {
        initResolver = resolver;
      });
      var $tableElt = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.tableElt);
      this.tableBody = null;

      if (this.headerHeight > 0) {
        this.headerHeight = -this.headerHeight;
      }

      this.$dataTable = $tableElt.on('init.dt', function () {
        _this3.tableInitialized();

        if (_this3.headerHeight < 0) {
          _this3.setHeaderHeight(-_this3.headerHeight);
        }

        _this3.triggerEvent(core["a" /* default */].events.TABLE_INIT);

        initResolver(rows);
        _this3.dataTableOptions.data = null;
      }).DataTable(core["a" /* default */].utils.mergeObjects({}, this.dataTableOptions, {
        data: rows
      }));
      this.$dataTable.on('draw.dt', function () {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(thead).children('tr').removeAttr('role'); // No role: https://www.w3.org/TR/html-aria/#tr
      }); // https://datatables.net/examples/api/counter_columns.html

      var hasNumberColumn = findColumn(this.dataTableOptions.columns, NUMBER_COLUMN_NAME);
      this.$dataTable.on('order.dt search.dt', function (e) {
        if (hasNumberColumn) {
          _this3.$dataTable.column("".concat(NUMBER_COLUMN_NAME, ":name"), {
            search: 'applied',
            order: 'applied'
          }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
          });
        }
      }).draw('full-hold');
      var allSettings = this.$dataTable.settings();

      for (var _i = 0; _i < allSettings.length; _i++) {
        // Retrieve the GanttDataTable from the global search function
        allSettings[_i].ganttDataTable = this;
      }

      var body = this.getScrollableBody(this.tableElt);
      this.controller.install(this.$dataTable, body);
      /* Impossilbe to use the code below as an alternative of re-creating the table for each setRows
              The code below does not set ids to tr rows and the workaround for doing that is too costly.
              this.$dataTable.rows.add(rows).draw();
              * */

      /*  Manage selection  */

      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(body).on('click', 'tr', function (e) {
        var tr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('tr');

        var row = tr && tr.length && _this3.getRow(tr[0]);

        if (row) {
          _this3.gantt.highlightRow(row, true, true);

          _this3.gantt.selection.processClick(e, row);
        }
      });
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(body).on('mouseenter', 'tr', function (e) {
        var tr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('tr');

        var row = tr && tr.length && _this3.getRow(tr[0]);

        if (row) {
          _this3.gantt.highlightRow(row, true, true);
        }
      });
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(body).on('mouseleave', 'tr', function (e) {
        var tr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('tr');

        var row = tr && tr.length && _this3.getRow(tr[0]);

        _this3.gantt.highlightRow(null, true, true);
      });
      return initPms;
    }
  }, {
    key: "tableInitialized",
    value: function tableInitialized() {
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.node).toggleClass(FLAT_CLASS, this.gantt.isFlat());
      this.$scrollableBody = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.node).find('div.dataTables_scrollBody');
      this.scrollableBody = this.$scrollableBody[0];
      this.tableBody = this.$scrollableBody.find('TBODY')[0];
      this.scrollableBody.overflowX = 'scroll';
      this.scrollableBody.overflowY = 'hidden';
      this.scrollableBody.style.position = 'absolute';
      this.scrollableBody.style.right = 0;
      this.scrollableBody.style.left = 0;
      this.scrollableBody.style.bottom = 0;
      this.scrollableBody.style.width = null;
      this.scrollableBody.style.height = null;
      var $scrollableHead = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.node).find('div.dataTables_scrollHead THEAD');
      this.tableHeader = $scrollableHead[0];
      var table = this;
      $scrollableHead.find('th').click(function () {
        if (core["a" /* default */].utils.hasClass(this, 'sorting') || core["a" /* default */].utils.hasClass(this, 'sorting_asc') || core["a" /* default */].utils.hasClass(this, 'sorting_desc')) {
          table.gantt.startUpdating();
          table.gantt.updates.rowsChanged(core["a" /* default */].events.ROWS_SORTED);
          table.gantt.updates.tableScrollYChanged(); // When sorting, datatable automatically restore scrolly position to 0

          table.triggerEvent(core["a" /* default */].events.ROWS_SORTED);
          table.gantt.stopUpdating();
        }
      });
    }
  }, {
    key: "onDraw",
    value: function onDraw(fct) {
      this._drawCallbacks.push(fct);
    }
  }, {
    key: "createUpdates",
    value: function createUpdates(parent) {
      var _this4 = this;

      var updates = new (core["a" /* default */].components.GanttUpdates.impl || core["a" /* default */].components.GanttUpdates)(parent, {
        doApplyUpdates: function doApplyUpdates() {
          if (updates.isReload()) {
            _this4.$dataTable.draw();
          } else if (updates.containsRowChanges) {
            _this4.$dataTable.draw('full-hold');
          }
        }
      });
      return updates;
    }
  }, {
    key: "getScrollableBody",
    value: function getScrollableBody() {
      return this.getTableBody();
    }
  }, {
    key: "setHeaderHeight",
    value: function setHeaderHeight(height) {
      if (this.tableHeader) {
        this.headerHeight = height;
        var scrollHeadHeight;

        if (!height) {
          scrollHeadHeight = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.tableHeader).height();
        } else {
          scrollHeadHeight = height;
          var tds = core["a" /* default */].utils.getChild(this.tableHeader, 'TR').childNodes;

          for (var i = 0, count = tds.length; i < count; ++i) {
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(tds.item(i)).css({
              height: "".concat(height, "px")
            });
          }

          this.tableHeader.parentNode.height = "".concat(height, "px");
        } // Horrible hack to Datatable issue for fitting its parent div
        // https://datatables.net/forums/discussion/12187/datatable-fixed-height


        this.scrollableBody.style.top = "".concat(scrollHeadHeight, "px");
        var panelHeight = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.node).height();
        this.$scrollableBody.height(panelHeight - scrollHeadHeight); // this.getScrollableBody().style.top = scrollHeadHeight + 'px';
      } // Table not initialized yet
      else {
          // Store it for when the table is initialized
          this.headerHeight = -height;
        }
    }
  }, {
    key: "getScrollableTable",
    value: function getScrollableTable() {
      return this.scrollableBody;
    }
  }, {
    key: "getTableBody",
    value: function getTableBody() {
      return this.tableBody;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.tableBody ? this.tableBody.offsetHeight : 0;
    }
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      return this.$dataTable.data().length;
    }
  }, {
    key: "createRowResult",
    value: function createRowResult(tr, index) {
      var id = tr.id;
      var node = (id || id === 0) && this.rows && this.rows.byIds[id] || null;

      if (node) {
        node.tr = tr;

        if (index !== undefined) {
          node.index = index;
        }
      }

      return node;
    }
  }, {
    key: "getRow",
    value: function getRow(param) {
      var id;
      var row;

      if (param && param.isGanttRow) {
        row = param;
        id = param.id;
      } else if (typeof param === 'string' || param && param.id) {
        id = param.id || param;
        row = this.rows && this.rows.byIds && id && this.rows.byIds[id];
      } else if (core["a" /* default */].utils.isInteger(param)) {
        row = this.rows && this.rows[param];
        id = row && row.id;
      }

      if (row && !row.tr && id) {
        row.tr = param.nodeType ? param : document.getElementById(id);
      }

      return row;
    }
  }, {
    key: "getRows",
    value: function getRows(selector) {
      var _this5 = this;

      if (!selector) {
        // Return all rows
        return this.rows;
      }

      if (core["a" /* default */].utils.isArray(selector)) {
        return selector.map(function (row) {
          return _this5.getRow(row);
        });
      }

      return this.getRow(selector);
    }
  }, {
    key: "getVisibleRows",
    value: function getVisibleRows() {
      if (!this.$dataTable) return [];
      var trs = this.$dataTable.$('tr', {
        filter: 'applied'
      });
      var count = trs.length;
      var result = new Array(count);

      for (var i = 0, row; i < count; ++i) {
        row = trs[i];
        row = row.length ? row[0] : row;
        row = this.rows && this.rows.byIds[row.id];
        result[i] = row;
      }

      return result;
    }
  }, {
    key: "getRowAt",
    value: function getRowAt(y, startingRow) {
      // TODO code below seems to be quicker but does not work as is as getBoundingClientRect().top does not
      // return the coordinate relative to the direct parent

      /* var rowHeight = this.getRowHeight();
           var rowNum = y / rowHeight;
           var row = this.getRowAtIndex(Math.floor(y / rowHeight));
            if (!row && !(row = this.nextRow(null))) {
           return null;
           }
           var rect = row.tr.getBoundingClientRect();
           if (y >= rect.top) {
           while (y >= rect.bottom) {
           row = this.nextRow(row);
           if (!row) {
           return null;
           }
           rect = row.tr.getBoundingClientRect()
           }
           }
           else {
           while (y < rect.top) {
           row = this.prevRow(row);
           if (!row) {
           return null;
           }
           rect = row.tr.getBoundingClientRect();
           }
           }
           return row; */
      // Alternative slower option, only using element.offsetHeight
      var tr;
      var index;

      if (startingRow && startingRow.getData() && (tr = startingRow.tr)) {
        index = startingRow.index;
        var top = this.getRowTop(startingRow);

        if (top <= y) {
          y -= top;

          while (tr && y > tr.offsetHeight) {
            y -= tr.offsetHeight;
            tr = tr.nextSibling;
            index++;
          }
        } else {
          do {
            tr = tr.previousSibling;
            --index;
          } while (tr && y < (top -= tr.offsetHeight));
        }

        if (tr && startingRow.tr === tr) {
          return startingRow;
        }
      } else {
        index = 0;
        var row = this.nextRow(null);
        tr = row && row.tr;

        while (tr && y >= tr.offsetHeight) {
          y -= tr.offsetHeight;
          tr = tr.nextSibling;
          ++index;
        }
      }

      return tr && this.createRowResult(tr, index);
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "getRowAtIndex",
    value: function getRowAtIndex(index) {
      var body = this.getTableBody();

      if (body) {
        var tr = core["a" /* default */].utils.getChild(body, 'TR');
        var origIndex = index;

        while (index-- && tr) {
          tr = tr.nextSibling;
        }

        return tr && this.createRowResult(tr, origIndex) || null;
      }

      return null;
    }
  }, {
    key: "getRowTop",
    value: function getRowTop(row) {
      return (row.tr || (row.tr = document.getElementById(row.id))) && row.tr.offsetTop - this.getTableBody().offsetTop || 0;
    }
  }, {
    key: "nextRow",
    value: function nextRow(row) {
      if (!row) {
        var tr = this.getTableBody() && this.getTableBody().firstChild;
        return tr && this.createRowResult(tr, 0) || null;
      }

      var nextTr = row.tr.nextSibling;
      return nextTr && this.createRowResult(nextTr, row.index + 1) || null;
    } // noinspection JSUnusedGlobalSymbols

  }, {
    key: "prevRow",
    value: function prevRow(row) {
      if (!row) {
        var tr = this.getTableBody() && this.getTableBody().lastChild;
        return tr && this.createRowResult(tr, this.getTableBody().childElementCount) || null;
      }

      var prevTr = row.tr.previousSibling;
      return prevTr && this.createRowResult(prevTr, row.index - 1) || null;
    }
  }, {
    key: "setRowHeight",
    value: function setRowHeight(row, height) {
      if (!row.defaultHeight) {
        row.defaultHeight = row.tr.offsetHeight;
      }

      if (height !== row.defaultHeight) {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row.tr).css({
          height: "".concat(height, "px")
        }).addClass('variable-row-height');
      } else {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row.tr).css({
          height: 'inherit'
        });
      }
    }
  }, {
    key: "getRowHeight",
    value: function getRowHeight(row, height) {
      // return $(row.tr).offsetHeight;
      if (!row.tr) row.tr = document.getElementById(row.id);
      var r = row.tr.getBoundingClientRect();
      return r.height; // return row.tr.getBoundingClientRect().height;
      // return $(row.tr || (row.tr = document.getElementById(row.id))).height();
    }
  }, {
    key: "deleteDrawCache",
    value: function deleteDrawCache() {
      if (this.rows) {
        for (var i = 0, count = this.rows.length; i < count; ++i) {
          delete this.rows[i].activityRow;
        }
      }

      this.$dataTable && this.$dataTable.$('tr.variable-row-height').css({
        height: 'inherit'
      }).removeClass('variable-row-height');
    }
  }, {
    key: "expandParents",
    value: function expandParents(row) {
      row = this.getRow(row);

      if (row) {
        this.controller.expandParents("".concat(row.id)); // In case row.id is a num
      }
    }
  }, {
    key: "getFirstVisibleRow",
    value: function getFirstVisibleRow() {
      var yTop = this.getScrollableTable().scrollTop;
      return this.getRowAt(yTop);
    }
  }, {
    key: "isRowVisible",
    value: function isRowVisible(param) {
      var row = this.getRow(param);

      if (this.isRowFiltered(row)) {
        return false;
      }

      var parent = row.parent;

      while (parent) {
        if (this.controller.isCollapsedNode(parent.id)) {
          return false;
        }

        parent = parent.parent;
      }

      return true;
    }
  }, {
    key: "toggleCollapseRow",
    value: function toggleCollapseRow(param, collapse) {
      var row = this.getRow(param);

      if (!row || this.isRowFiltered(row)) {
        return false;
      }

      if (collapse === undefined) {
        collapse = !this.controller.isCollapsedNode(row.id);
      }

      this.controller.collapseNode(row.id, collapse);
    }
  }, {
    key: "highlightRow",
    value: function highlightRow(row, highlight, deselectAll) {
      var utils = core["a" /* default */].utils;

      if (deselectAll) {
        var result = this.getTableBody().querySelectorAll("tr.".concat(HIGHLIGHT_CLASS));

        for (var i = 0; i < result.length; i++) {
          utils.removeClass(result[i], HIGHLIGHT_CLASS);
        }
      }

      if (row && row.tr) {
        utils.toggleClass(row.tr, HIGHLIGHT_CLASS, highlight === undefined || highlight);
      } else if (row) {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.getTableBody()).find("#".concat(row.id || row)).toggleClass(HIGHLIGHT_CLASS, highlight === undefined || highlight);
      }
    }
  }, {
    key: "draw",
    value: function draw(forceTableReload) {
      if (forceTableReload) {
        this.$dataTable.draw();
      } else {
        this.$dataTable.draw('full-hold');
      }
    }
  }, {
    key: "drawRows",
    value: function drawRows(rows) {
      var _this6 = this;

      // this.$dataTable.rows(rows.map(row => row.tr)).invalidate().draw();
      rows.forEach(function (element) {
        var data = _this6.$dataTable.row(element.tr).data();

        element.tr.style.backgroundColor = data.backgroundColor || '';
      }); // this.$dataTable.row(0).invalidate().draw();
      // this.$dataTable.rows(rows.map(row => row.tr)).invalidate('dom').draw();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (this.$dataTable) this.$dataTable.draw('full-hold');
    }
  }, {
    key: "filterChanged",
    value: function filterChanged() {
      if (this.$dataTable) this.$dataTable.draw('full-hold');
    }
  }, {
    key: "isRowFiltered",
    value: function isRowFiltered(row) {
      return row.__filterMatched !== undefined && !row.__filterMatched;
    }
  }, {
    key: "setRowColor",
    value: function setRowColor(row, color) {}
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.$dataTable) {
        this.$dataTable.destroy(); // https://datatables.net/reference/api/destroy()

        if (this.tableElt.parentNode === this.node) {
          this.node.removeChild(this.tableElt);
        }

        this.$dataTable = null;
        this.tableElt = null;
        this.tableBody = null;
        this.$scrollableBody = null;
        this.tableHeader = null;
      }
    }
    /*  Selection methods  */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.$dataTable) {
        this.$dataTable.$("tr.".concat(SELECTION_CLASS)).removeClass(SELECTION_CLASS);
      }
    }
  }, {
    key: "selectRows",
    value: function selectRows(rows) {
      for (var i = 0, tr; i < rows.length; i++) {
        tr = rows[i].tr || this.getRow(rows[i]).tr;

        if (tr) {
          core["a" /* default */].utils.addClass(tr, SELECTION_CLASS);
          /* const tds = tr.querySelectorAll('td');
                   for (let i = 0; i < tds.length; i++) {
                   Gantt.utils.addClass(tds[i], SELECTION_CLASS);
                   } */
        }
      }
    }
  }, {
    key: "unselectRows",
    value: function unselectRows(rows) {
      for (var i = 0, tr; i < rows.length; i++) {
        tr = rows[i].tr || this.getRow(rows[i]).tr;

        if (tr) {
          core["a" /* default */].utils.removeClass(tr, SELECTION_CLASS);
        }
      }
    }
  }, {
    key: "rowSelectionChanged",
    value: function rowSelectionChanged() {
      if (this.$dataTable) {
        this.$dataTable.draw('full-hold');
      }
    }
  }]);

  return GanttDataTable;
}(core["a" /* default */].components.TreeTable);


core["a" /* default */].components.TreeTable.defaultClass = 'gantt-tree-table display nowrap';
core["a" /* default */].components.TreeTable.impl = treetable_GanttDataTable;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/classCallCheck.js + 1 modules
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/createClass.js + 1 modules
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(5);
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

// EXTERNAL MODULE: ./src/core/core.js
var core = __webpack_require__(0);

// CONCATENATED MODULE: ./src/jquery/split/split.js




/* ONO: Gantt malfunctions with latter versions of this plugin! */

(function (Gantt, $) {
  var methods = {};

  methods.init = function () {
    var $splitPanes = this;
    $splitPanes.each(setMinHeightAndMinWidth);
    $splitPanes.append('<div class="split-pane-resize-shim">');
    $splitPanes.children('.split-pane-divider').html('<div class="split-pane-divider-inner"></div>');
    $splitPanes.children('.split-pane-divider').on('touchstart mousedown', mousedownHandler);
    setTimeout(function () {
      // Doing this later because of an issue with Chrome (v23.0.1271.64) returning split-pane width = 0
      // and triggering multiple resize events when page is being opened from an <a target="_blank"> .
      $splitPanes.each(function () {
        $(this).on('_splitpaneparentresize', createParentresizeHandler($(this)));
      });
      $(window).trigger('resize');
    }, 100);
  };

  methods.firstComponentSize = function (value) {
    this.each(function () {
      var $splitPane = $(this);
      var components = getComponents($splitPane);

      if ($splitPane.is('.fixed-top')) {
        fixedTopHandler(components, components.divider.offsetTop)({
          pageY: value
        });
      } else if ($splitPane.is('.fixed-bottom')) {
        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
        fixedBottomHandler(components, -components.last.offsetHeight)({
          pageY: -value
        });
      } else if ($splitPane.is('.horizontal-percent')) {
        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
        horizontalPercentHandler(components, -components.last.offsetHeight)({
          pageY: -value
        });
      } else if ($splitPane.is('.fixed-left')) {
        fixedLeftHandler(components, components.divider.offsetLeft)({
          pageX: value
        });
      } else if ($splitPane.is('.fixed-right')) {
        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
        fixedRightHandler(components, -components.last.offsetWidth)({
          pageX: -value
        });
      } else if ($splitPane.is('.vertical-percent')) {
        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
        verticalPercentHandler(components, -components.last.offsetWidth)({
          pageX: -value
        });
      }
    });
  };

  methods.lastComponentSize = function (value) {
    this.each(function () {
      var $splitPane = $(this);
      var components = getComponents($splitPane);

      if ($splitPane.is('.fixed-top')) {
        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
        fixedTopHandler(components, components.divider.offsetTop)({
          pageY: value
        });
      } else if ($splitPane.is('.fixed-bottom')) {
        fixedBottomHandler(components, -components.last.offsetHeight)({
          pageY: -value
        });
      } else if ($splitPane.is('.horizontal-percent')) {
        horizontalPercentHandler(components, -components.last.offsetHeight)({
          pageY: -value
        });
      } else if ($splitPane.is('.fixed-left')) {
        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
        fixedLeftHandler(components, components.divider.offsetLeft)({
          pageX: value
        });
      } else if ($splitPane.is('.fixed-right')) {
        fixedRightHandler(components, -components.last.offsetWidth)({
          pageX: -value
        });
      } else if ($splitPane.is('.vertical-percent')) {
        verticalPercentHandler(components, -components.last.offsetWidth)({
          pageX: -value
        });
      }
    });
  };

  methods.setLeftComponentVisible = function (visible) {
    this.each(function () {
      var $splitPane = $(this);
      var components = getComponents($splitPane);
      components.divider.style.display = visible ? '' : 'none';
      components.first.style.display = visible ? '' : 'none';
    });
  };

  methods.setRightComponentVisible = function (visible) {
    this.each(function () {
      var $splitPane = $(this);
      var components = getComponents($splitPane);
      var first = components.first;
      first.style.position = visible ? 'absolute' : 'relative';
      first.style[$(first).hasClass('top-pane') ? 'height' : 'width'] = visible ? '' : '100%';
      components.divider.style.display = visible ? '' : 'none';
      components.last.style.display = visible ? '' : 'none';
    });
  };

  $.fn.splitPane = function (method) {
    if (!method) {
      method = 'init';
    }

    methods[method].apply(this, $.grep(arguments, function (it, i) {
      return i > 0;
    }));
  };

  var SPLITPANERESIZE_HANDLER = '_splitpaneparentresizeHandler';
  /**
   * A special event that will "capture" a resize event from the parent split-pane or window.
   * The event will NOT propagate to grandchildren.
   */

  $.event.special._splitpaneparentresize = {
    setup: function setup(data, namespaces) {
      var element = this;
      var parent = $(this).parent().closest('.split-pane')[0] || window;
      $(this).data(SPLITPANERESIZE_HANDLER, function (event) {
        var target = event.target === document ? window : event.target;

        if (target === parent) {
          event.type = '_splitpaneparentresize';
          $.event.dispatch.apply(element, arguments);
        } else {
          event.stopPropagation();
        }
      });
      $(parent).on('resize', $(this).data(SPLITPANERESIZE_HANDLER));
    },
    teardown: function teardown(namespaces) {
      var parent = $(this).parent().closest('.split-pane')[0] || window;
      $(parent).off('resize', $(this).data(SPLITPANERESIZE_HANDLER));
      $(this).removeData(SPLITPANERESIZE_HANDLER);
    }
  };

  function setMinHeightAndMinWidth() {
    var $splitPane = $(this);
    var components = getComponents($splitPane);

    if ($splitPane.is('.fixed-top, .fixed-bottom, .horizontal-percent')) {
      $splitPane.css('min-height', "".concat(minHeight(components.first) + minHeight(components.last) + $(components.divider).height(), "px"));
    } else {
      $splitPane.css('min-width', "".concat(minWidth(components.first) + minWidth(components.last) + $(components.divider).width(), "px"));
    }
  }

  function mousedownHandler(event) {
    var $divider = $(this);
    var $splitPane = $divider.parent();
    var $resizeShim = $divider.siblings('.split-pane-resize-shim');
    $resizeShim.show();
    $divider.addClass('dragged');

    if (event.type.match(/^touch/)) {
      $divider.addClass('touch');
    }

    var moveEventHandler = createMousemove($splitPane, pageXof(event), pageYof(event));
    $(document).on('touchmove mousemove', moveEventHandler);
    $(document).one('touchend mouseup', function (event) {
      $(document).off('touchmove mousemove', moveEventHandler);
      $divider.removeClass('dragged touch');
      $resizeShim.hide();
      $splitPane.trigger('dividerdragend', [getComponentsSizes($splitPane)]);
    });
    $splitPane.trigger('dividerdragstart', [getComponentsSizes($splitPane)]);
  }

  function getComponentsSizes($splitPane) {
    var property = $splitPane.is('.fixed-top, .fixed-bottom, .horizontal-percent') ? 'height' : 'width';
    return {
      firstComponentSize: $splitPane.find('.split-pane-component:first')[property](),
      lastComponentSize: $splitPane.find('.split-pane-component:last')[property]()
    };
  }

  function createParentresizeHandler($splitPane) {
    var components = getComponents($splitPane);

    if ($splitPane.is('.fixed-top')) {
      return function (event) {
        var lastComponentMinHeight = minHeight(components.last);
        var maxfirstComponentHeight = components.splitPane.offsetHeight - lastComponentMinHeight - components.divider.offsetHeight;

        if (components.first.offsetHeight > maxfirstComponentHeight) {
          setTop(components, "".concat(maxfirstComponentHeight, "px"));
        }

        $splitPane.resize();
      };
    }

    if ($splitPane.is('.fixed-bottom')) {
      return function (event) {
        var firstComponentMinHeight = minHeight(components.first);
        var maxLastComponentHeight = components.splitPane.offsetHeight - firstComponentMinHeight - components.divider.offsetHeight;

        if (components.last.offsetHeight > maxLastComponentHeight) {
          setBottom(components, "".concat(maxLastComponentHeight, "px"));
        }

        $splitPane.resize();
      };
    }

    if ($splitPane.is('.horizontal-percent')) {
      return function (event) {
        var lastComponentMinHeight = minHeight(components.last);
        var firstComponentMinHeight = minHeight(components.first);
        var maxLastComponentHeight = components.splitPane.offsetHeight - firstComponentMinHeight - components.divider.offsetHeight;

        if (components.last.offsetHeight > maxLastComponentHeight) {
          setBottom(components, "".concat(maxLastComponentHeight / components.splitPane.offsetHeight * 100, "%"));
        } else if (components.splitPane.offsetHeight - components.first.offsetHeight - components.divider.offsetHeight < lastComponentMinHeight) {
          setBottom(components, "".concat(lastComponentMinHeight / components.splitPane.offsetHeight * 100, "%"));
        }

        $splitPane.resize();
      };
    }

    if ($splitPane.is('.fixed-left')) {
      return function (event) {
        var lastComponentMinWidth = minWidth(components.last);
        var maxFirstComponentWidth = components.splitPane.offsetWidth - lastComponentMinWidth - components.divider.offsetWidth;

        if (components.first.offsetWidth > maxFirstComponentWidth) {
          setLeft(components, "".concat(maxFirstComponentWidth, "px"));
        }

        $splitPane.resize();
      };
    }

    if ($splitPane.is('.fixed-right')) {
      return function (event) {
        var firstComponentMinWidth = minWidth(components.first);
        var maxLastComponentWidth = components.splitPane.offsetWidth - firstComponentMinWidth - components.divider.offsetWidth;

        if (components.last.offsetWidth > maxLastComponentWidth) {
          setRight(components, "".concat(maxLastComponentWidth, "px"));
        }

        $splitPane.resize();
      };
    }

    if ($splitPane.is('.vertical-percent')) {
      return function (event) {
        var lastComponentMinWidth = minWidth(components.last);
        var firstComponentMinWidth = minWidth(components.first);
        var maxLastComponentWidth = components.splitPane.offsetWidth - firstComponentMinWidth - components.divider.offsetWidth;

        if (components.last.offsetWidth > maxLastComponentWidth) {
          setRight(components, "".concat(maxLastComponentWidth / components.splitPane.offsetWidth * 100, "%"));
        } else if (components.splitPane.offsetWidth - components.first.offsetWidth - components.divider.offsetWidth < lastComponentMinWidth) {
          setRight(components, "".concat(lastComponentMinWidth / components.splitPane.offsetWidth * 100, "%"));
        }

        $splitPane.resize();
      };
    }
  }

  function createMousemove($splitPane, pageX, pageY) {
    var components = getComponents($splitPane);

    if ($splitPane.is('.fixed-top')) {
      return fixedTopHandler(components, pageY);
    }

    if ($splitPane.is('.fixed-bottom')) {
      return fixedBottomHandler(components, pageY);
    }

    if ($splitPane.is('.horizontal-percent')) {
      return horizontalPercentHandler(components, pageY);
    }

    if ($splitPane.is('.fixed-left')) {
      return fixedLeftHandler(components, pageX);
    }

    if ($splitPane.is('.fixed-right')) {
      return fixedRightHandler(components, pageX);
    }

    if ($splitPane.is('.vertical-percent')) {
      return verticalPercentHandler(components, pageX);
    }
  }

  function fixedTopHandler(components, pageY) {
    var firstComponentMinHeight = minHeight(components.first);
    var maxFirstComponentHeight = components.splitPane.offsetHeight - minHeight(components.last) - components.divider.offsetHeight;
    var topOffset = components.divider.offsetTop - pageY;
    return function (event) {
      var top = newTop(firstComponentMinHeight, maxFirstComponentHeight, topOffset + pageYof(event));
      setTop(components, "".concat(top, "px"));
      $(components.splitPane).resize();
    };
  }

  function fixedBottomHandler(components, pageY) {
    var lastComponentMinHeight = minHeight(components.last);
    var maxLastComponentHeight = components.splitPane.offsetHeight - minHeight(components.first) - components.divider.offsetHeight;
    var bottomOffset = components.last.offsetHeight + pageY;
    return function (event) {
      event.preventDefault && event.preventDefault();
      var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
      setBottom(components, "".concat(bottom, "px"));
      $(components.splitPane).resize();
    };
  }

  function horizontalPercentHandler(components, pageY) {
    var splitPaneHeight = components.splitPane.offsetHeight;
    var lastComponentMinHeight = minHeight(components.last);
    var maxLastComponentHeight = splitPaneHeight - minHeight(components.first) - components.divider.offsetHeight;
    var bottomOffset = components.last.offsetHeight + pageY;
    return function (event) {
      event.preventDefault && event.preventDefault();
      var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
      setBottom(components, "".concat(bottom / splitPaneHeight * 100, "%"));
      $(components.splitPane).resize();
    };
  }

  function fixedLeftHandler(components, pageX) {
    var firstComponentMinWidth = minWidth(components.first);
    var maxFirstComponentWidth = components.splitPane.offsetWidth - minWidth(components.last) - components.divider.offsetWidth;
    var leftOffset = components.divider.offsetLeft - pageX;
    return function (event) {
      event.preventDefault && event.preventDefault();
      var left = newLeft(firstComponentMinWidth, maxFirstComponentWidth, leftOffset + pageXof(event));
      setLeft(components, "".concat(left, "px"));
      $(components.splitPane).resize();
    };
  }

  function fixedRightHandler(components, pageX) {
    var lastComponentMinWidth = minWidth(components.last);
    var maxLastComponentWidth = components.splitPane.offsetWidth - minWidth(components.first) - components.divider.offsetWidth;
    var rightOffset = components.last.offsetWidth + pageX;
    return function (event) {
      event.preventDefault && event.preventDefault();
      var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
      setRight(components, "".concat(right, "px"));
      $(components.splitPane).resize();
    };
  }

  function verticalPercentHandler(components, pageX) {
    var splitPaneWidth = components.splitPane.offsetWidth;
    var lastComponentMinWidth = minWidth(components.last);
    var maxLastComponentWidth = splitPaneWidth - minWidth(components.first) - components.divider.offsetWidth;
    var rightOffset = components.last.offsetWidth + pageX;
    return function (event) {
      event.preventDefault && event.preventDefault();
      var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
      setRight(components, "".concat(right / splitPaneWidth * 100, "%"));
      $(components.splitPane).resize();
    };
  }

  function getComponents($splitPane) {
    return {
      splitPane: $splitPane[0],
      first: $splitPane.children('.split-pane-component:first')[0],
      divider: $splitPane.children('.split-pane-divider')[0],
      last: $splitPane.children('.split-pane-component:last')[0]
    };
  }

  function pageXof(event) {
    if (event.pageX !== undefined) {
      return event.pageX;
    }

    if (event.originalEvent.pageX !== undefined) {
      return event.originalEvent.pageX;
    }

    if (event.originalEvent.touches) {
      return event.originalEvent.touches[0].pageX;
    }
  }

  function pageYof(event) {
    if (event.pageY !== undefined) {
      return event.pageY;
    }

    if (event.originalEvent.pageY !== undefined) {
      return event.originalEvent.pageY;
    }

    if (event.originalEvent.touches) {
      return event.originalEvent.touches[0].pageY;
    }
  }

  function minHeight(element) {
    return Number.parseInt($(element).css('min-height'), 10) || 0;
  }

  function minWidth(element) {
    return Number.parseInt($(element).css('min-width'), 10) || 0;
  }

  function newTop(firstComponentMinHeight, maxFirstComponentHeight, value) {
    return Math.min(Math.max(firstComponentMinHeight, value), maxFirstComponentHeight);
  }

  function newLeft(firstComponentMinWidth, maxFirstComponentWidth, value) {
    return Math.min(Math.max(firstComponentMinWidth, value), maxFirstComponentWidth);
  }

  function setTop(components, top) {
    components.first.style.height = top;
    components.divider.style.top = top;
    components.last.style.top = top;
  }

  function setBottom(components, bottom) {
    components.first.style.bottom = bottom;
    components.divider.style.bottom = bottom;
    components.last.style.height = bottom;
  }

  function setLeft(components, left) {
    components.first.style.width = left;
    components.divider.style.left = left;
    components.last.style.left = left;
  }

  function setRight(components, right) {
    components.first.style.right = right;
    components.divider.style.left = right;
    components.last.style.width = right;
  }

  var Split = /*#__PURE__*/function () {
    function Split(elt, options) {
      var _this = this;

      Object(classCallCheck["a" /* default */])(this, Split);

      this.options = options;
      this.horiz = !this.options || this.options.horizontal === undefined || this.options.horizontal;
      var fixedFirst = !this.options || this.options.fixedFirst === undefined || this.options.fixedFirst;
      var hideFirst = options && options.hideFirst;
      var hideSecond = options && options.hideSecond;
      this.splitPaneElt = document.createElement('div');
      this.splitPaneElt.className = "split-pane docloud-splitpane ".concat(this.horiz ? fixedFirst ? 'fixed-left' : 'fixed-right' : fixedFirst ? 'fixed-top' : 'fixed-bottom');
      this.leftComponent = document.createElement('div');
      this.leftComponent.className = "split-pane-component ".concat(this.horiz ? 'left-pane split-pane-left' : 'top-pane split-pane-top');
      this.splitPaneElt.appendChild(this.leftComponent);
      var divider = document.createElement('div');
      divider.className = "split-pane-divider ".concat(this.horiz ? 'h-split-pane-divider' : 'v-split-pane-divider');
      this.splitPaneElt.appendChild(divider);

      if (hideFirst || hideSecond) {
        divider.style.display = 'none';
      }

      this.rightComponent = document.createElement('div');
      this.rightComponent.className = "split-pane-component ".concat(this.horiz ? 'right-pane split-pane-right' : 'bottom-pane split-pane-bottom');
      this.splitPaneElt.appendChild(this.rightComponent);

      if (hideSecond) {
        this.leftComponent.style.position = 'relative';
        this.leftComponent.style[!this.horiz ? 'height' : 'width'] = '100%';
        this.rightComponent.style.display = 'none';
      } else if (hideFirst) {
        this.rightComponent.style.position = 'relative';
        this.rightComponent.style[!this.horiz ? 'height' : 'width'] = '100%';
        this.leftComponent.style.display = 'none';
      }

      elt.appendChild(this.splitPaneElt);
      this.$splitPaneElt = $(this.splitPaneElt).splitPane();
      $(this.splitPaneElt).on('resize', function (e) {
        _this.onresized();
      });
      $(this.splitPaneElt).on('dividerdragend', function (e) {
        _this.onDividerDragEnd();
      });
    }

    Object(createClass["a" /* default */])(Split, [{
      key: "getLeftComponent",
      value: function getLeftComponent() {
        return this.leftComponent;
      }
    }, {
      key: "getRightComponent",
      value: function getRightComponent() {
        return this.rightComponent;
      }
    }, {
      key: "leftComponentCreated",
      value: function leftComponentCreated() {
        var pos = this.options && this.options.pos || 200;

        if (pos >= 0) {
          $(this.splitPaneElt).splitPane('firstComponentSize', pos);
        }
      }
    }, {
      key: "rightComponentCreated",
      value: function rightComponentCreated() {
        var pos = this.options && this.options.pos;

        if (pos < 0) {
          $(this.splitPaneElt).splitPane('lastComponentSize', -pos);
        }
      }
    }, {
      key: "onresized",
      value: function onresized() {}
    }, {
      key: "onDividerDragEnd",
      value: function onDividerDragEnd() {}
    }, {
      key: "setLeftComponentVisible",
      value: function setLeftComponentVisible(visible) {
        $(this.splitPaneElt).splitPane('setLeftComponentVisible', visible);
      }
    }, {
      key: "setRightComponentVisible",
      value: function setRightComponentVisible(visible) {
        $(this.splitPaneElt).splitPane('setRightComponentVisible', visible);
      }
    }]);

    return Split;
  }();

  Gantt.components.Split.impl = Split;
})(core["a" /* default */], external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a);
// EXTERNAL MODULE: ./src/jquery/split/split-pane.scss
var split_pane = __webpack_require__(37);

// CONCATENATED MODULE: ./src/jquery/split/index.js



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/classCallCheck.js + 1 modules
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/createClass.js + 1 modules
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(4);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(6);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js + 1 modules
var getPrototypeOf = __webpack_require__(3);

// EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(5);
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

// EXTERNAL MODULE: /Users/delhoume/git/gantt-chart/node_modules/moment-with-locales-es6/index.js
var moment_with_locales_es6 = __webpack_require__(11);
var moment_with_locales_es6_default = /*#__PURE__*/__webpack_require__.n(moment_with_locales_es6);

// EXTERNAL MODULE: external {"root":"vis","commonjs2":"vis","commonjs":"vis","amd":"vis"}
var external_root_vis_commonjs2_vis_commonjs_vis_amd_vis_ = __webpack_require__(8);
var external_root_vis_commonjs2_vis_commonjs_vis_amd_vis_default = /*#__PURE__*/__webpack_require__.n(external_root_vis_commonjs2_vis_commonjs_vis_amd_vis_);

// EXTERNAL MODULE: ./src/core/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./src/jquery/timeline/timeline.scss
var timeline = __webpack_require__(40);

// CONCATENATED MODULE: ./src/jquery/timeline/timeline.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var defaultConfig = {
  scrollableHorizonFactor: 3,
  margin: 20
};

var timeline_TimeLine = /*#__PURE__*/function (_Gantt$components$Tim) {
  Object(inherits["a" /* default */])(TimeLine, _Gantt$components$Tim);

  var _super = _createSuper(TimeLine);

  function TimeLine(gantt, elt, config) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TimeLine);

    _this = _super.call(this, gantt, elt, core["a" /* default */].utils.mergeObjects({}, defaultConfig, config));

    _this.create();

    return _this;
  }

  Object(createClass["a" /* default */])(TimeLine, [{
    key: "create",
    value: function create() {
      this.scrollableHorizonFactor = Math.max(this.config && this.config.scrollableHorizonFactor || 3, 1);
      this.items = [];
      this.itemsByIds = {};
      this._init = false;
    }
  }, {
    key: "setTimeWindow",
    value: function setTimeWindow(start, end) {
      var _this2 = this;

      if (this.timeLineElt) {
        this.node.removeChild(this.timeLineElt);
      }

      this.timeLineElt = document.createElement('div');
      this.timeLineElt.style.width = "".concat(this.node.offsetWidth * this.scrollableHorizonFactor, "px");
      this.timeLineElt.style.height = '100%';
      var data = [];
      var span = end - start;
      this.scrollableHorizon = {
        start: Math.round(start - (this.scrollableHorizonFactor - 1) / 2 * span),
        end: Math.round(end + (this.scrollableHorizonFactor - 1) / 2 * span)
      };
      var intl = core["a" /* default */].utils.getIntl();

      if (intl) {
        if (intl.locale) {
          moment_with_locales_es6_default.a.locale(intl.locale);
        }
      }

      try {
        // See https://github.com/almende/vis/issues/24 for time zone hack
        this.visTimeline = new external_root_vis_commonjs2_vis_commonjs_vis_amd_vis_default.a.Timeline(this.timeLineElt, data, {
          // 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'month', 'year'
          orientation: {
            axis: 'top',
            item: 'top'
          },
          height: '100%',
          start: this.scrollableHorizon.start,
          end: this.scrollableHorizon.end,
          moment: moment_with_locales_es6_default.a
        });
      } catch (e) {
        console.error(e);
        throw e;
      }

      this.horizon = {
        start: start,
        end: end
      };
      this.node.appendChild(this.timeLineElt);
      this.zoomFactor = 1;
      var initPromise = new Promise(function (resolve, reject) {
        _this2.initResolve = resolve;
      });
      this.visTimeline.on('rangechanged', function () {
        _this2.updateRatio();
      });
      this._init = false;

      var fireReady = function fireReady() {
        _this2._init = true;

        var window = _this2.visTimeline.getWindow();

        window.startMillis = window.start.getTime();
        window.endMillis = window.end.getTime();

        _this2.updateRatio();

        var wnd = {
          start: start,
          end: end
        };

        _this2.initResolve(wnd);

        _this2.visTimeline.off('changed', fireReady);

        _this2.triggerEvent(core["a" /* default */].events.TIME_LINE_INIT, wnd);
      };

      this.visTimeline.on('changed', fireReady);
      this.visTimeline.on('rangechange', function () {
        _this2.updateRatio();

        _this2.triggerEvent(core["a" /* default */].events.TIME_LINE_RANGE_CHANGE);
      });
      this.visTimeline.on('rangechanged', function () {
        _this2.updateRatio();

        _this2.triggerEvent(core["a" /* default */].events.TIME_LINE_RANGE_CHANGED);
      });
      this.visTimeline.on('pan', function () {
        _this2.triggerEvent(core["a" /* default */].events.TIME_LINE_PAN_MOVE);
      });
      this.visTimeline.on('panend', function () {
        _this2.triggerEvent(core["a" /* default */].events.TIME_LINE_PAN_MOVED);
      });
      return initPromise;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.timeLineElt.offsetWidth;
    }
  }, {
    key: "getHorizon",
    value: function getHorizon() {
      return this.horizon;
    }
  }, {
    key: "getScrollableHorizon",
    value: function getScrollableHorizon() {
      return this.scrollableHorizon;
    }
  }, {
    key: "updateRatio",
    value: function updateRatio() {
      this.window = this.visTimeline.getWindow();
      this.window.startMillis = this.window.start.getTime();
      this.window.endMillis = this.window.end.getTime();
      this.scrollableHorizon.start = this.window.startMillis;
      this.scrollableHorizon.end = this.window.endMillis;
      this.ratio = this.getWidth() / (this.window.endMillis - this.window.startMillis);
    }
  }, {
    key: "getXFromMillis",
    value: function getXFromMillis(time) {
      return Math.round((time - this.scrollableHorizon.start) * this.ratio); // return (time - this.window.startMillis) * this.ratio;
    }
  }, {
    key: "getX",
    value: function getX(time) {
      return Math.round((time - this.scrollableHorizon.start) * this.ratio);
    }
  }, {
    key: "getTimeAt",
    value: function getTimeAt(x) {
      return this.scrollableHorizon.start + Math.round(x / this.getWidth() * (this.scrollableHorizon.end - this.scrollableHorizon.start));
    }
  }, {
    key: "getTimeAxisHeight",
    value: function getTimeAxisHeight(defaultValue) {
      var visTimeAxis = this.timeLineElt && this.timeLineElt.getElementsByClassName('vis-panel vis-top'); // Cannot use native offsetHeight as it is rounding dimensions
      // See warning at https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight

      return visTimeAxis && visTimeAxis.length && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(visTimeAxis[0]).outerHeight() || defaultValue;
    }
  }, {
    key: "getTimeWindow",
    value: function getTimeWindow() {
      return this.visTimeline && this.visTimeline.getWindow();
    }
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "onResize",
    value: function onResize() {
      if (this._init) {
        this.updateRatio();
      }
    }
  }, {
    key: "validateZoomFactor",
    value: function validateZoomFactor(zoomFactor) {
      if (this.zoomFactor + zoomFactor < 1) {
        return 0;
      }

      return zoomFactor;
    }
  }, {
    key: "zoom",
    value: function zoom(zoomFactor, xCenter) {
      this.zoomFactor += zoomFactor;
      var w = this.getWidth() + zoomFactor * this.getWidth();
      this.timeLineElt.style.width = "".concat(w, "px");
      this.updateRatio();
      this.triggerEvent(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
    }
  }, {
    key: "resetZoom",
    value: function resetZoom() {
      this.zoomFactor = 1;
      var w = this.node.offsetWidth * this.scrollableHorizonFactor;
      this.timeLineElt.style.width = "".concat(w, "px");
      this.updateRatio();
      this.triggerEvent(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
    }
  }, {
    key: "setVisibleTimeWindow",
    value: function setVisibleTimeWindow(window) {
      if (!window || !window.start || !window.end) {
        this.resetZoom();
      } else {
        var horizPageCount = (this.scrollableHorizon.end - this.scrollableHorizon.start) / (window.end - window.start);
        this.zoomFactor = horizPageCount / this.scrollableHorizonFactor;
        var w = horizPageCount * this.node.offsetWidth;
        this.timeLineElt.style.width = "".concat(w, "px");
        this.updateRatio();
        this.triggerEvent(core["a" /* default */].events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
      }
    }
  }, {
    key: "getVisibleTimes",
    value: function getVisibleTimes() {
      return {
        start: this.window.startMillis,
        end: this.window.endMillis
      };
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(time, animate) {
      var range = this.visTimeline.getWindow();
      var interval = range.end - range.start;
      this.visTimeline.setWindow(time, time + interval, animate === undefined ? undefined : {
        animation: animate
      });
    }
    /*           Markers        */

  }, {
    key: "addTimeMarker",
    value: function addTimeMarker(id, time, classes) {
      var ar = this.visTimeline.customTimes;
      var l = ar && ar.length;
      this.visTimeline.addCustomTime(time, id); // Retrieve the node associate with the time marker

      if (ar && ar.length && ar.length !== l) {
        var markerObj = this.visTimeline.customTimes[l];

        if (markerObj && markerObj.bar) {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(markerObj.bar).css('top', "".concat(this.getTimeAxisHeight() - 3, "px"));
        }
      }
    }
  }, {
    key: "removeTimeMarker",
    value: function removeTimeMarker(id, time, classes) {
      this.visTimeline.removeCustomTime(id);
    }
  }, {
    key: "createVisItem",
    value: function createVisItem(item) {
      return {
        start: item.start || (item.type === 'background' ? this.window.startMillis : undefined),
        end: item.end || (item.type === 'background' ? this.window.endMillis : undefined),
        title: item.title,
        type: item.type === 'background' ? 'background' : item.type === 'box' ? 'box' : item.type === 'point' ? 'point' : 'background',
        className: item.className,
        content: item.content
      };
    }
  }, {
    key: "setTimeLineItem",
    value: function setTimeLineItem(id, item) {
      this.removeTimeLineItem(id, false);
      this.addTimeLineItem(id, item);
    }
  }, {
    key: "addTimeLineItem",
    value: function addTimeLineItem(id, item, update) {
      item = this.createVisItem(item);
      this.items.push(item);
      this.itemsByIds[id] = item;

      if (update === undefined || update) {
        this.visTimeline.setItems(this.items);
      }
    }
  }, {
    key: "removeTimeLineItem",
    value: function removeTimeLineItem(id, update) {
      var item = this.itemsByIds[id];

      if (item) {
        delete this.itemsByIds[id];
        var index = this.items.indexOf(item);

        if (index > -1) {
          this.items.splice(index, 1);
        }

        if (update === undefined || update) {
          this.visTimeline.setItems(this.items);
        }
      }
    } //
    // Decorations

  }, {
    key: "getDecorationContainer",
    value: function getDecorationContainer() {
      var $panel = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.timeLineElt).find('.vis-panel.vis-background.vis-horizontal');
      return $panel.length && $panel[0] || null;
    }
  }]);

  return TimeLine;
}(core["a" /* default */].components.TimeLine);


core["a" /* default */].components.TimeLine.impl = timeline_TimeLine;
// CONCATENATED MODULE: ./src/jquery/timeline/index.js

/* harmony default export */ var jquery_timeline = (timeline_TimeLine);

/***/ })
/******/ ]);
});
//# sourceMappingURL=ibm-gantt-chart-jquery.js.map
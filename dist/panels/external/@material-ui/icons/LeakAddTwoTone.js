"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M18 21h3v-3c-1.66 0-3 1.34-3 3zM3 14c6.08 0 11-4.93 11-11h-2c0 4.97-4.03 9-9 9v2zM14 21h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"
}), _react.default.createElement("path", {
  d: "M3 10c3.87 0 7-3.13 7-7H8c0 2.76-2.24 5-5 5v2zM10 21h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zM3 3v3c1.66 0 3-1.34 3-3H3z"
}))), 'LeakAddTwoTone');

exports.default = _default;
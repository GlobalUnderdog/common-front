"use strict";var _interopRequireWildcard=require("@babel/runtime-corejs3/helpers/interopRequireWildcard");var _Object$defineProperty=require("@babel/runtime-corejs3/core-js-stable/object/define-property");_Object$defineProperty(exports,"__esModule",{value:true});exports.GUProvider=void 0;var _react=_interopRequireWildcard(require("react"));var _reactGridSystem=require("react-grid-system");var _emotion=require("./emotion");var Children=function Children(_ref){var children=_ref.children;var theme=(0,_emotion.useTheme)();(0,_reactGridSystem.setConfiguration)(theme.grid.rules);return/*#__PURE__*/_react.default.createElement(_react.Fragment,null,/*#__PURE__*/_react.default.createElement(_emotion.Global,{styles:theme.global.css(theme)}),/*#__PURE__*/_react.default.createElement(_emotion.Global,{styles:theme.modal.css(theme)}),/*#__PURE__*/_react.default.createElement(_reactGridSystem.ScreenClassProvider,null,children));};var GUProvider=function GUProvider(_ref2){var children=_ref2.children,theme=_ref2.theme;return/*#__PURE__*/_react.default.createElement(_emotion.ThemeProvider,{theme:theme},/*#__PURE__*/_react.default.createElement(Children,{children:children}));};exports.GUProvider=GUProvider;
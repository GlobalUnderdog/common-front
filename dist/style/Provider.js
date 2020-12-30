"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.GUProvider=void 0;var _react=_interopRequireWildcard(require("react"));var _reactGridSystem=require("react-grid-system");var _emotion=require("./emotion");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Children=function Children(_ref){var children=_ref.children;var theme=(0,_emotion.useTheme)();(0,_reactGridSystem.setConfiguration)(theme.grid.rules);return/*#__PURE__*/_react.default.createElement(_react.Fragment,null,/*#__PURE__*/_react.default.createElement(_emotion.Global,{styles:theme.global.css(theme)}),/*#__PURE__*/_react.default.createElement(_emotion.Global,{styles:theme.modal.css(theme)}),/*#__PURE__*/_react.default.createElement(_reactGridSystem.ScreenClassProvider,null,children));};var GUProvider=function GUProvider(_ref2){var children=_ref2.children,theme=_ref2.theme;return/*#__PURE__*/_react.default.createElement(_emotion.ThemeProvider,{theme:theme},/*#__PURE__*/_react.default.createElement(Children,{children:children}));};exports.GUProvider=GUProvider;
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.GUModal=void 0;var _common=require("@globalunderdog/common");var _react=babelHelpers.interopRequireWildcard(require("react"));var _reactModal=babelHelpers.interopRequireDefault(require("react-modal"));var _style=require("../style");/** @jsx jsx */var commonModalProps=function commonModalProps(hiding,className){return{shouldCloseOnEsc:true,shouldCloseOnOverlayClick:true,shouldFocusAfterRender:true,overlayClassName:"modalOverlay ".concat(hiding?'hiding':''),className:"modalCard ".concat(className!==null&&className!==void 0?className:''," ").concat(hiding?'hiding':'')};};var GUModal=function GUModal(_ref){var children=_ref.children,setOpen=_ref.setOpen,className=_ref.className,onRequestClose=_ref.onRequestClose,isOpen=_ref.isOpen,props=babelHelpers.objectWithoutProperties(_ref,["children","setOpen","className","onRequestClose","isOpen"]);var theme=(0,_style.useTheme)();(0,_react.useEffect)(function(){_reactModal.default.setAppElement('body');},[]);var _useState=(0,_react.useState)(false),_useState2=babelHelpers.slicedToArray(_useState,2),hiding=_useState2[0],setHiding=_useState2[1];var hideModal=/*#__PURE__*/function(){var _ref2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setHiding(true);// + 30ms so very slow computers can have smooth animations (usually
// in these cases the js timeout might finish about 10-20 ms earlier
// than the CSS animation)
_context.next=3;return(0,_common.wait)(380);case 3:setOpen(false);setHiding(false);case 5:case"end":return _context.stop();}}},_callee);}));return function hideModal(){return _ref2.apply(this,arguments);};}();return(0,_style.jsx)(_reactModal.default,babelHelpers.extends({},commonModalProps(hiding,className),{css:theme.modal.css(theme),isOpen:isOpen||hiding,onRequestClose:/*#__PURE__*/babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var _yield$onRequestClose;var shouldClose;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!onRequestClose){_context2.next=15;break;}_context2.next=3;return onRequestClose();case 3:_context2.t2=_yield$onRequestClose=_context2.sent;_context2.t1=_context2.t2!==null;if(!_context2.t1){_context2.next=7;break;}_context2.t1=_yield$onRequestClose!==void 0;case 7:if(!_context2.t1){_context2.next=11;break;}_context2.t3=_yield$onRequestClose;_context2.next=12;break;case 11:_context2.t3=true;case 12:_context2.t0=_context2.t3;_context2.next=16;break;case 15:_context2.t0=true;case 16:shouldClose=_context2.t0;if(!shouldClose){_context2.next=22;break;}_context2.next=20;return hideModal();case 20:_context2.next=23;break;case 22:setOpen(true);case 23:case"end":return _context2.stop();}}},_callee2);}))},props),(0,_style.jsx)(_style.Container,null,children));};exports.GUModal=GUModal;
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.GUTextArea=void 0;var _react=require("react");var _style=require("../style");/** @jsx jsx */var GUTextArea=function GUTextArea(_ref){var className=_ref.className,labelSecond=_ref.labelSecond,props=babelHelpers.objectWithoutProperties(_ref,["className","labelSecond"]);var theme=(0,_style.useTheme)();var label=props.label;return(0,_style.jsx)("div",{css:theme.textArea.css(theme,props),className:className},labelSecond?(0,_style.jsx)(_react.Fragment,null,(0,_style.jsx)("textarea",props),label&&(0,_style.jsx)("label",{htmlFor:props.id},label)):(0,_style.jsx)(_react.Fragment,null,label&&(0,_style.jsx)("label",{htmlFor:props.id},label),(0,_style.jsx)("textarea",props)));};exports.GUTextArea=GUTextArea;
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"AttentionSeeker",{enumerable:true,get:function get(){return _reactAwesomeReveal.AttentionSeeker;}});Object.defineProperty(exports,"Bounce",{enumerable:true,get:function get(){return _reactAwesomeReveal.Bounce;}});Object.defineProperty(exports,"Reveal",{enumerable:true,get:function get(){return _reactAwesomeReveal.default;}});Object.defineProperty(exports,"Fade",{enumerable:true,get:function get(){return _reactAwesomeReveal.Fade;}});Object.defineProperty(exports,"Flip",{enumerable:true,get:function get(){return _reactAwesomeReveal.Flip;}});Object.defineProperty(exports,"Hinge",{enumerable:true,get:function get(){return _reactAwesomeReveal.Hinge;}});Object.defineProperty(exports,"JackInTheBox",{enumerable:true,get:function get(){return _reactAwesomeReveal.JackInTheBox;}});Object.defineProperty(exports,"Roll",{enumerable:true,get:function get(){return _reactAwesomeReveal.Roll;}});Object.defineProperty(exports,"Rotate",{enumerable:true,get:function get(){return _reactAwesomeReveal.Rotate;}});Object.defineProperty(exports,"Slide",{enumerable:true,get:function get(){return _reactAwesomeReveal.Slide;}});Object.defineProperty(exports,"Zoom",{enumerable:true,get:function get(){return _reactAwesomeReveal.Zoom;}});exports.SlideFade=void 0;var _reactAwesomeReveal=_interopRequireWildcard(require("react-awesome-reveal"));var _style=require("../style");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  from {\n    transform: ",";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var translateDirection=function translateDirection(direction){var distance=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'100%';switch(direction){case'up':return"translate3d(0, ".concat(distance,", 0)");case'down':return"translate3d(0, -".concat(distance,", 0)");case'left':return"translate3d(".concat(distance,", 0, 0)");case'right':return"translate3d(-".concat(distance,", 0, 0)");}};var animation=function animation(direction,distance){return(0,_style.keyframes)(_templateObject(),translateDirection(direction,distance));};var SlideFade=function SlideFade(_ref){var direction=_ref.direction,distance=_ref.distance,props=_objectWithoutProperties(_ref,["direction","distance"]);return/*#__PURE__*/React.createElement(_reactAwesomeReveal.default,_extends({},props,{keyframes:animation(direction!==null&&direction!==void 0?direction:'left',distance!==null&&distance!==void 0?distance:'100%')}));};exports.SlideFade=SlideFade;
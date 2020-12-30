function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/** @jsx jsx */import React,{Fragment}from'react';import{jsx,useTheme}from'../style';export var GURadio=function GURadio(_ref){var className=_ref.className,label=_ref.label,labelFirst=_ref.labelFirst,props=_objectWithoutProperties(_ref,["className","label","labelFirst"]);var theme=useTheme();return jsx("div",{css:theme.radio.css(theme,props),className:className},labelFirst?jsx(Fragment,null,label&&jsx("label",{htmlFor:props.id},label),jsx("input",_extends({},props,{type:"radio"}))):jsx(Fragment,null,jsx("input",_extends({},props,{type:"radio"})),label&&jsx("label",{htmlFor:props.id},label)));};
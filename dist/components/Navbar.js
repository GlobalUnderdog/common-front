"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.GUNavbar=void 0;var _link=_interopRequireDefault(require("next/link"));var _react=require("react");var _style=require("../style");var _Button=require("./Button");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  width: 100%;\n  height: var(\n    ","\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n\n  /* Container */\n  & > div {\n    display: flex;\n    align-items: center;\n\n    "," {\n      flex-flow: row wrap;\n      justify-content: space-between;\n    }\n    height: 100%;\n\n    & > img {\n      width: 80px;\n      object-fit: contain;\n    }\n\n    .toggleNavLinks {\n      width: var(--navbarHeight);\n      height: var(--navbarHeight);\n      font-size: 18px;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      &:focus {\n        outline: none;\n      }\n\n      background: none;\n      border: none;\n      color: ",";\n      transition: color ease 0.3s;\n      "," {\n        display: none;\n      }\n    }\n\n    & > .links {\n      display: flex;\n      align-items: center;\n\n      "," {\n        width: 100%;\n        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n        padding: 0;\n        margin: 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n\n        opacity: ",";\n        pointer-events: ",";\n        /*\n    The animation is faster when showing the menu in order for the text\n    to render inside the wrapper.\n    */\n        transition: opacity ease ",";\n      }\n\n      "," {\n        flex: 4;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  a {\n    font-size: 16px;\n    text-decoration: none;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    transition: color ease 0.2s;\n    "," {\n      margin-bottom: 25px;\n      display: flex;\n      align-items: center;\n      margin: 0;\n    }\n    "," {\n      margin-right: 25px;\n    }\n\n    font-weight: 400;\n    &.bold {\n      font-weight: 700;\n    }\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + ("," * var(--navbarLinkHeight))\n    );\n  }\n  "," {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var globalVariables=function globalVariables(links){return(0,_style.css)(_templateObject(),links,_style.mediaQuery.medium);};var Wrapper=_style.styled.div(_templateObject2(),function(p){return p.expanded?'--navbarExpandedHeight':'--navbarHeight';},function(p){return p.theme.color.ink.light;},function(p){return p.theme.color.canvas.light;},function(p){return p.expanded?"0 2px 2px ".concat(p.theme.color.ink.main,"25"):'none';},_style.mediaQuery.small,function(_ref){var expanded=_ref.expanded,theme=_ref.theme;return expanded?theme.color.primary.main:theme.color.ink.light;},_style.mediaQuery.medium,_style.mediaQuery.small,function(p){return p.expanded?1:0;},function(p){return p.expanded?'visible':'none';},function(p){return p.expanded?'0.7s':'0.15s';},_style.mediaQuery.medium,function(p){return p.theme.color.ink.light;},function(p){return p.theme.color.primary.main;},_style.mediaQuery.small,_style.mediaQuery.medium);var NavLink=function NavLink(_ref2){var href=_ref2.href,label=_ref2.label,button=_ref2.button,color=_ref2.color,setExpanded=_ref2.setExpanded,onClick=_ref2.onClick;var theme=(0,_style.useTheme)();// Forwarded click required by Next Link for non `<a/>`
var childOnClick=function childOnClick(forwardedClick){if(onClick)onClick();if(forwardedClick)forwardedClick;setExpanded(false);};// Forwards the right events for Next.js Link
var Child=function Child(_ref3){var href=_ref3.href,_onClick=_ref3.onClick;return button?(0,_style.jsx)(_Button.GUButton,{color:color,onClick:function onClick(e){return childOnClick(_onClick?_onClick(e):undefined);}},label):(0,_style.jsx)("a",{onClick:function onClick(e){return childOnClick(_onClick?_onClick(e):undefined);},href:href,style:{color:color?theme.color[color].main:undefined}},label);};return href?(0,_style.jsx)(_link.default,{href:href,passHref:true},(0,_style.jsx)(Child,null)):(0,_style.jsx)(Child,null);};/**
 * Navbar introduces 3 css variables which are available globally in the app:
 *
 *  * `var(--navbarHeight)`: actual height of the navbar;
 *  * `var(--navbarLinkHeight)`: height of each link in the navbar when expanded;
 *  * `var(--navbarExpandedHeight)`: total size of the expanded navbar;
 *
 * You can replace these values using Theme.global.css
 */var GUNavbar=function GUNavbar(_ref4){var links=_ref4.links,logo=_ref4.logo,css=_ref4.css,className=_ref4.className;var _useState=(0,_react.useState)(false),_useState2=_slicedToArray(_useState,2),expanded=_useState2[0],setExpanded=_useState2[1];// Declaring all links here so we can use Array.length for CSS heights,
// note that in this case Preact doesn't need `key` prop in components.
var mappedLinks=links.map(function(_ref5){var href=_ref5.href,label=_ref5.label,color=_ref5.color,button=_ref5.button,onClick=_ref5.onClick;return(0,_style.jsx)(NavLink,{href:href,label:label,setExpanded:setExpanded,color:color,button:button,onClick:onClick});});return(0,_style.jsx)(_react.Fragment,null,(0,_style.jsx)(_style.Global,{styles:globalVariables(links.length)}),(0,_style.jsx)(Wrapper,{expanded:expanded,css:css,className:className},(0,_style.jsx)(_style.Container,null,(0,_style.jsx)(_link.default,{href:"/"},logo!==null&&logo!==void 0?logo:(0,_style.jsx)("div",null)),(0,_style.jsx)("button",{className:"toggleNavLinks",onClick:function onClick(){return setExpanded(!expanded);}},(0,_style.jsx)("i",{className:"fa fa-menu"})),(0,_style.jsx)("div",{className:"links"},mappedLinks))));};exports.GUNavbar=GUNavbar;
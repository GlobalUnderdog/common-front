"use strict";var _interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault");var _Object$defineProperty=require("@babel/runtime-corejs3/core-js-stable/object/define-property");var _Object$defineProperties=require("@babel/runtime-corejs3/core-js-stable/object/define-properties");var _Object$getOwnPropertyDescriptors=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");var _forEachInstanceProperty=require("@babel/runtime-corejs3/core-js-stable/instance/for-each");var _Object$getOwnPropertyDescriptor=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");var _filterInstanceProperty=require("@babel/runtime-corejs3/core-js-stable/instance/filter");var _Object$getOwnPropertySymbols=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");var _Object$keys=require("@babel/runtime-corejs3/core-js-stable/object/keys");_Object$defineProperty(exports,"__esModule",{value:true});exports.makeTheme=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));var _map=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));var _flat=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));var _defaultTheme=require("./defaultTheme");var _util=require("./util");function ownKeys(object,enumerableOnly){var keys=_Object$keys(object);if(_Object$getOwnPropertySymbols){var symbols=_Object$getOwnPropertySymbols(object);if(enumerableOnly)symbols=_filterInstanceProperty(symbols).call(symbols,function(sym){return _Object$getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){var _context4;_forEachInstanceProperty(_context4=ownKeys(Object(source),true)).call(_context4,function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(_Object$getOwnPropertyDescriptors){_Object$defineProperties(target,_Object$getOwnPropertyDescriptors(source));}else{var _context5;_forEachInstanceProperty(_context5=ownKeys(Object(source))).call(_context5,function(key){_Object$defineProperty(target,key,_Object$getOwnPropertyDescriptor(source,key));});}}return target;}// Not declared in ./util since we don't want to export this function outside the package
var handleCSSRule=function handleCSSRule(rules,defaultRule){if(!(rules!==null&&rules!==void 0&&rules.css))return{css:defaultRule.css};var rulesCss=rules.css;// Typescript still thinks rules.css is empty by this point2
if(rules.replace)return{css:rules.css};return{css:function css(theme,props){var _context,_context2,_context3;// Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
var styles=(0,_flat.default)(_context=(0,_map.default)(_context2=(0,_flat.default)(_context3=[defaultRule.css,rulesCss]).call(_context3,2)).call(_context2,function(st){return st(theme,props);})).call(_context);// TS Complains if we don't have this, even though we've used flat()
return styles;}};};var makeTheme=function makeTheme(theme){var _grid$replace,_radius$big,_radius$main,_radius$small;// This ternary operation allow us to avoid `TypeError: theme is undefined`
var _ref=theme?theme:{},color=_ref.color,radius=_ref.radius,grid=_ref.grid,button=_ref.button,global=_ref.global,input=_ref.input,textArea=_ref.textArea,checkbox=_ref.checkbox,radio=_ref.radio,modal=_ref.modal,extended=(0,_objectWithoutProperties2.default)(_ref,["color","radius","grid","button","global","input","textArea","checkbox","radio","modal"]);return _objectSpread({color:{secondary:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.secondary),color===null||color===void 0?void 0:color.secondary),canvas:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.canvas),color===null||color===void 0?void 0:color.canvas),error:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.error),color===null||color===void 0?void 0:color.error),info:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.info),color===null||color===void 0?void 0:color.info),ink:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.ink),color===null||color===void 0?void 0:color.ink),primary:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.primary),color===null||color===void 0?void 0:color.primary),success:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.success),color===null||color===void 0?void 0:color.success),warning:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.color.warning),color===null||color===void 0?void 0:color.warning)},grid:{replace:(_grid$replace=grid===null||grid===void 0?void 0:grid.replace)!==null&&_grid$replace!==void 0?_grid$replace:false,rules:grid!==null&&grid!==void 0&&grid.replace&&grid!==null&&grid!==void 0&&grid.rules?grid.rules:_objectSpread(_objectSpread({},_defaultTheme.guDefaultTheme.grid.rules),grid===null||grid===void 0?void 0:grid.rules)},radius:_objectSpread(_objectSpread({},radius),{},{big:(0,_util.cssUnit)((_radius$big=radius===null||radius===void 0?void 0:radius.big)!==null&&_radius$big!==void 0?_radius$big:_defaultTheme.guDefaultTheme.radius.big),main:(0,_util.cssUnit)((_radius$main=radius===null||radius===void 0?void 0:radius.main)!==null&&_radius$main!==void 0?_radius$main:_defaultTheme.guDefaultTheme.radius.main),small:(0,_util.cssUnit)((_radius$small=radius===null||radius===void 0?void 0:radius.small)!==null&&_radius$small!==void 0?_radius$small:_defaultTheme.guDefaultTheme.radius.small)}),global:handleCSSRule(global,_defaultTheme.guDefaultTheme.global),button:handleCSSRule(button,_defaultTheme.guDefaultTheme.button),input:handleCSSRule(input,_defaultTheme.guDefaultTheme.input),textArea:handleCSSRule(textArea,_defaultTheme.guDefaultTheme.textArea),checkbox:handleCSSRule(checkbox,_defaultTheme.guDefaultTheme.checkbox),radio:handleCSSRule(radio,_defaultTheme.guDefaultTheme.radio),modal:handleCSSRule(modal,_defaultTheme.guDefaultTheme.modal)},extended);};exports.makeTheme=makeTheme;
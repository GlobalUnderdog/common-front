function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}import{guDefaultTheme}from'./defaultTheme';import{cssUnit}from'./util';// Not declared in ./util since we don't want to export this function outside the package
var handleCSSRule=function handleCSSRule(rules,defaultRule){if(!(rules!==null&&rules!==void 0&&rules.css))return{css:defaultRule.css};var rulesCss=rules.css;// Typescript still thinks rules.css is empty by this point2
if(rules.replace)return{css:rules.css};return{css:function css(theme,props){// Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
var styles=[defaultRule.css,rulesCss].flat(2).map(function(st){return st(theme,props);}).flat();// TS Complains if we don't have this, even though we've used flat()
return styles;}};};export var makeTheme=function makeTheme(theme){var _grid$replace,_radius$big,_radius$main,_radius$small;// This ternary operation allow us to avoid `TypeError: theme is undefined`
var _ref=theme?theme:{},color=_ref.color,radius=_ref.radius,grid=_ref.grid,button=_ref.button,global=_ref.global,input=_ref.input,textArea=_ref.textArea,checkbox=_ref.checkbox,radio=_ref.radio,modal=_ref.modal,extended=_objectWithoutProperties(_ref,["color","radius","grid","button","global","input","textArea","checkbox","radio","modal"]);return _objectSpread({color:{secondary:_objectSpread(_objectSpread({},guDefaultTheme.color.secondary),color===null||color===void 0?void 0:color.secondary),canvas:_objectSpread(_objectSpread({},guDefaultTheme.color.canvas),color===null||color===void 0?void 0:color.canvas),error:_objectSpread(_objectSpread({},guDefaultTheme.color.error),color===null||color===void 0?void 0:color.error),info:_objectSpread(_objectSpread({},guDefaultTheme.color.info),color===null||color===void 0?void 0:color.info),ink:_objectSpread(_objectSpread({},guDefaultTheme.color.ink),color===null||color===void 0?void 0:color.ink),primary:_objectSpread(_objectSpread({},guDefaultTheme.color.primary),color===null||color===void 0?void 0:color.primary),success:_objectSpread(_objectSpread({},guDefaultTheme.color.success),color===null||color===void 0?void 0:color.success),warning:_objectSpread(_objectSpread({},guDefaultTheme.color.warning),color===null||color===void 0?void 0:color.warning)},grid:{replace:(_grid$replace=grid===null||grid===void 0?void 0:grid.replace)!==null&&_grid$replace!==void 0?_grid$replace:false,rules:grid!==null&&grid!==void 0&&grid.replace&&grid!==null&&grid!==void 0&&grid.rules?grid.rules:_objectSpread(_objectSpread({},guDefaultTheme.grid.rules),grid===null||grid===void 0?void 0:grid.rules)},radius:_objectSpread(_objectSpread({},radius),{},{big:cssUnit((_radius$big=radius===null||radius===void 0?void 0:radius.big)!==null&&_radius$big!==void 0?_radius$big:guDefaultTheme.radius.big),main:cssUnit((_radius$main=radius===null||radius===void 0?void 0:radius.main)!==null&&_radius$main!==void 0?_radius$main:guDefaultTheme.radius.main),small:cssUnit((_radius$small=radius===null||radius===void 0?void 0:radius.small)!==null&&_radius$small!==void 0?_radius$small:guDefaultTheme.radius.small)}),global:handleCSSRule(global,guDefaultTheme.global),button:handleCSSRule(button,guDefaultTheme.button),input:handleCSSRule(input,guDefaultTheme.input),textArea:handleCSSRule(textArea,guDefaultTheme.textArea),checkbox:handleCSSRule(checkbox,guDefaultTheme.checkbox),radio:handleCSSRule(radio,guDefaultTheme.radio),modal:handleCSSRule(modal,guDefaultTheme.modal)},extended);};
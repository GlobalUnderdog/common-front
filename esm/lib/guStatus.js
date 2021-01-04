import _regeneratorRuntime from"@babel/runtime/regenerator";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _asyncToGenerator from"@babel/runtime/helpers/asyncToGenerator";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import{trpc}from'./trpc';/**
 * Returns the back-end URL + a simple calculation done with `trpc`
 */export var guStatusConfig=function guStatusConfig(backend){window.guStatus=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(x,y){var start,resp,finish;return _regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:start=new Date().valueOf();window.console.log("Pinging ".concat(backend," with add(").concat(x,", ").concat(y,")"));_context.next=4;return trpc.add(x,y);case 4:resp=_context.sent;finish=new Date().valueOf();console.log("".concat(backend," responded:"));console.log(_objectSpread(_objectSpread({},resp),{},{responseMS:finish-start}));case 8:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}();};
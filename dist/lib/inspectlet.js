"use strict";var _interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault");var _Object$defineProperty=require("@babel/runtime-corejs3/core-js-stable/object/define-property");_Object$defineProperty(exports,"__esModule",{value:true});exports.inspectlet=void 0;var _setTimeout2=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));var inspectlet=function inspectlet(inspectletId){window.__insp=window.__insp||[];window.__insp.push(['wid',inspectletId]);window.ldinsp=function(){var _x$parentNode;if(typeof window.__inspld!='undefined')return;window.__inspld=1;var insp=document.createElement('script');insp.type='text/javascript';insp.async=true;insp.id='inspsync';insp.src=('https:'==document.location.protocol?'https':'http')+'://cdn.inspectlet.com/inspectlet.js?wid='+inspectletId+'&r='+Math.floor(new Date().getTime()/3600000);var x=document.getElementsByTagName('script')[0];(_x$parentNode=x.parentNode)===null||_x$parentNode===void 0?void 0:_x$parentNode.insertBefore(insp,x);};(0,_setTimeout2.default)(window.ldinsp,0);};exports.inspectlet=inspectlet;
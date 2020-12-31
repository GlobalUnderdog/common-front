"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _exportNames={guLibConfig:true};exports.guLibConfig=void 0;var _reactGtmModule=babelHelpers.interopRequireDefault(require("react-gtm-module"));var _googleGA=require("./googleGA");Object.keys(_googleGA).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_googleGA[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _googleGA[key];}});});var _guStatus=require("./guStatus");Object.keys(_guStatus).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_guStatus[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _guStatus[key];}});});var _inspectlet=require("./inspectlet");Object.keys(_inspectlet).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_inspectlet[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _inspectlet[key];}});});var _trpc=require("./trpc");Object.keys(_trpc).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_trpc[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _trpc[key];}});});var guLibConfig=function guLibConfig(env){var serverUrl=env.serverUrl,googleUa=env.googleUa,inspectletId=env.inspectletId,serverTimeout=env.serverTimeout,googleTm=env.googleTm;if(serverUrl){(0,_guStatus.guStatusConfig)(serverUrl);var timeout=serverTimeout?+serverTimeout:undefined;(0,_trpc.trpcConfig)(serverUrl,timeout);}if(googleUa)(0,_googleGA.googleAnalyticsInit)(googleUa);if(inspectletId)(0,_inspectlet.inspectlet)(inspectletId);if(googleTm)_reactGtmModule.default.initialize(googleTm);};exports.guLibConfig=guLibConfig;
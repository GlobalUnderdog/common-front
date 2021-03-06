"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.trpcConfig=exports.trpc=void 0;var _client=require("@tianhuil/simple-trpc/dist/client");/**
 * The default client uses localhost:8080 as its url and 3000ms as timeout,
 * use trpcConfig to change these values (this is automatically set up if
 * guLibConfig is called)
 */var trpc=(0,_client.makeClient)((0,_client.httpConnector)('http://localhost:8080',{timeout:3000}));exports.trpc=trpc;var trpcConfig=function trpcConfig(url){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:3000;exports.trpc=trpc=(0,_client.makeClient)((0,_client.httpConnector)(url,{timeout:timeout}));};exports.trpcConfig=trpcConfig;
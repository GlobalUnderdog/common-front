import{httpConnector,makeClient}from'@tianhuil/simple-trpc/dist/client';/**
 * The default client uses localhost:8080 as its url and 3000ms as timeout,
 * use trpcConfig to change these values (this is automatically set up if
 * guLibConfig is called)
 */export var trpc=makeClient(httpConnector('http://localhost:8080',{timeout:3000}));export var trpcConfig=function trpcConfig(url){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:3000;trpc=makeClient(httpConnector(url,{timeout:timeout}));};
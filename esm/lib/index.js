import TagManager from'react-gtm-module';import{googleAnalyticsInit}from'./googleGA';import{guStatusConfig}from'./guStatus';import{inspectlet}from'./inspectlet';import{trpcConfig}from'./trpc';export*from'./googleGA';export*from'./guStatus';export*from'./inspectlet';export*from'./trpc';export var guLibConfig=function guLibConfig(env){var serverUrl=env.serverUrl,googleUa=env.googleUa,inspectletId=env.inspectletId,serverTimeout=env.serverTimeout,googleTm=env.googleTm;if(serverUrl){guStatusConfig(serverUrl);var timeout=serverTimeout?+serverTimeout:undefined;trpcConfig(serverUrl,timeout);}if(googleUa)googleAnalyticsInit(googleUa);if(inspectletId)inspectlet(inspectletId);if(googleTm)TagManager.initialize(googleTm);};
define("bitbucket/internal/util/redux",["exports","redux"],function(a,d){Object.defineProperty(a,"__esModule",{value:!0});a.legacyCustomCreateStore=a.createActorStore=a.actorMiddleware=void 0;var k=a.actorMiddleware=function(){for(var a=arguments.length,d=Array(a),b=0;b<a;b++)d[b]=arguments[b];return function(b){return function(c){return function(a){var e=b.getState(),h=c(a),f=b.getState();d.forEach(function(c){return c(a,b.dispatch,e,f)});return h}}}},g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||
d.compose;a.createActorStore=function(a,f){for(var b=arguments.length,e=Array(2<b?b-2:0),c=2;c<b;c++)e[c-2]=arguments[c];return(0,d.createStore)((0,d.combineReducers)(a),f,g((0,d.applyMiddleware)(k.apply(void 0,e))))};a.legacyCustomCreateStore=function(a,f){for(var b=arguments.length,e=Array(2<b?b-2:0),c=2;c<b;c++)e[c-2]=arguments[c];return(0,d.createStore)((0,d.combineReducers)(a),f,g(d.applyMiddleware.apply(void 0,e)))}});
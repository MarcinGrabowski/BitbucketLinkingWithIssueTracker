define("bitbucket/internal/bbui/utils/promise-middleware",["module","exports","lodash"],function(e,a,h){Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a){var f=a.dispatch;return function(a){return function(b){function g(c,a){c=babelHelpers.extends({},b,{payload:c,meta:babelHelpers.extends({},d,{actionId:e,isPending:a})});delete c.meta.promise;return c}var d=b.meta;if(!d||!d.promise)return a(b);var e=Number((0,h.uniqueId)());f(g(b.payload,!0));return d.promise.then(function(a){return f(g(a,
!1))},function(a){return f(g({error:a},!1))})}}};e.exports=a["default"]});
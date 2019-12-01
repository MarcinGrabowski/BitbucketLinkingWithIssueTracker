define("bitbucket/internal/bbui/json-validation/json-validation",["module","exports","lodash"],function(h,e,l){function f(a,b){var c="";b&&(c='For property: "'+b+'". ');throw Error(""+c+a);}function d(a,b){if(!a)return g.default.identity;if("string"===typeof a||a instanceof String){a+="";var c=a.indexOf("?"),k=!1;if(-1!==c){if(0!==c&&c!==a.length-1)throw Error('Type unexpectedly contains a "?" in the middle: '+a);k=!0;a=a.split("?")[c?0:1]}return function(b,c){if(null==b){if(k)return;f("Value was null, but expected non-nullable type "+
a,c)}("undefined"===typeof b?"undefined":babelHelpers.typeof(b))===a||"function"===typeof b&&"object"===a||f("The typeof "+b+" is "+("undefined"===typeof b?"undefined":babelHelpers.typeof(b))+" but expected it to be "+a+" "+(k&&"or value to be null")+".",c)}}if(g.default.isArray(a)||a===Array){var e=a!==Array&&a[0]?d(a[0],b):g.default.identity;return function(a,b){g.default.isArray(a)||f("Array type expected, but null or non-Array value provided.",b);a.forEach(function(a,c){return e(a,""+(b?b+".":
"")+c)})}}if(a===Object||a&&"object"===("undefined"===typeof a?"undefined":babelHelpers.typeof(a))){var h=a===Object?[]:Object.keys(a).map(function(c){return[c,d(a[c],""+(b?b+".":"")+c)]});return function(a,b){a&&"object"===("undefined"===typeof a?"undefined":babelHelpers.typeof(a))||"function"===typeof a||f("Object expected, but null or non-Object value provided.",b);h.forEach(function(c){c=babelHelpers.slicedToArray(c,2);var d=c[0];(0,c[1])(a[d],""+(b?b+".":"")+d)})}}if("function"===typeof a)return a;
f("Invalid descriptor: Expected type "+a+". Should be falsy, String, Array, Object, or function.",b)}Object.defineProperty(e,"__esModule",{value:!0});e.default=d;var g=babelHelpers.interopRequireDefault(l);d.asEnum=function(a,b){return function(c){if(!Object.keys(b).some(function(a){return b[a]===c}))throw Error("Invalid "+a+". Expected one of "+Object.keys(b).join(", ")+", but got "+c);}};d.nullable=function(a){var b=d(a);return function(a){null!=a&&b(a)}};d.recurse=function(a){var b=void 0;return function(c){b||
(b=d(a()));b(c)}};d.strictEqual=function(a){return function(b){if(b!==a)throw Error("Expected "+a+" but was "+b);}};h.exports=e["default"]});
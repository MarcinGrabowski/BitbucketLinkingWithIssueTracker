define("bitbucket/internal/bbui/avatars/avatars",["module","exports","jquery","lodash"],function(d,a,b,e){Object.defineProperty(a,"__esModule",{value:!0});var c=babelHelpers.interopRequireDefault(b);b=babelHelpers.interopRequireDefault(e);a.default={init:b.default.once(function(){(0,c.default)(".avatar-tooltip \x3e .aui-avatar-inner \x3e img").tooltip({hoverable:!1,offset:5,gravity:function(){return c.default.fn.tipsy.autoNS.call(this)+c.default.fn.tipsy.autoWE.call(this)},delayIn:0,live:!0})})};
d.exports=a["default"]});
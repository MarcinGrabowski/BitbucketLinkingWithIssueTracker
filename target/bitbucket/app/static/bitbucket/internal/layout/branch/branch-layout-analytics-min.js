define("bitbucket/internal/layout/branch/branch-layout-analytics","module exports jquery lodash bitbucket/util/navbuilder bitbucket/internal/util/events".split(" "),function(f,a,g,h,k,l){function c(d){if("selector"===d.context){var a=e.default.find(["commits","browse","branches"],function(a){return e.default.startsWith(window.location.pathname,m.default.currentRepo()[a]().build())});b.default.trigger("bitbucket.internal.ui.branch-selector.actions.item.clicked",null,{webItemKey:d.webItemKey,source:a})}}
Object.defineProperty(a,"__esModule",{value:!0});var n=babelHelpers.interopRequireDefault(g),e=babelHelpers.interopRequireDefault(h),m=babelHelpers.interopRequireDefault(k),b=babelHelpers.interopRequireDefault(l);a.default={initLayoutAnalytics:function(a){a.on("aui-dropdown2-show",function(){b.default.trigger("bitbucket.internal.ui.branch-selector.actions.opened")});a.on("click","a",function(){c({context:"selector",webItemKey:(0,n.default)(this).attr("data-web-item-key")})});b.default.on("bitbucket.internal.feature.branch-copy.branchNameCopied",
c)},CONTEXT:"selector"};f.exports=a["default"]});
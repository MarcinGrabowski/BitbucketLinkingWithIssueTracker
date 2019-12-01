define("bitbucket/internal/feature/file-content/diff-view-context/diff-view-context","module exports @atlassian/aui jquery lodash bitbucket/util/navbuilder bitbucket/internal/feature/file-content/diff-view-context/diff-view-context-internal bitbucket/internal/feature/file-content/diff-view-type bitbucket/internal/model/file-change bitbucket/internal/util/ajax bitbucket/internal/util/dom-event bitbucket/internal/util/navigator".split(" "),function(n,k,d,a,t,u,v,w,x,y,z,l){function A(f,b,c,d,a,m){return a||
m?bitbucket.internal.feature.fileContent.hunkSeparator({tooltip:B,lineStart:f,lineEnd:b,destOffset:c,changeType:d,isBelow:a,isAbove:m}):""}Object.defineProperty(k,"__esModule",{value:!0});d=babelHelpers.interopRequireDefault(d);var C=babelHelpers.interopRequireDefault(a),D=babelHelpers.interopRequireDefault(t),r=babelHelpers.interopRequireDefault(u),p=babelHelpers.interopRequireDefault(v),E=babelHelpers.interopRequireDefault(w),F=babelHelpers.interopRequireDefault(x),G=babelHelpers.interopRequireDefault(y),
H=babelHelpers.interopRequireDefault(z),B=(0,l.isMac)()?d.default.I18n.getText("bitbucket.web.diffview.showmore.tooltip.cmd"):d.default.I18n.getText("bitbucket.web.diffview.showmore.tooltip.ctrl");a=r.default.parse(location.href).getQueryParamValue("context");var q={maxLimit:(0,l.isIE)()?1E3:5E3,maxContext:a&&parseInt(a,10)||10};k.default={attachExpandContext:function(a,b){var c=b.fileChange,d=b.expansionCallback,k=b.diffViewType;c=new F.default(c);return a.on("click",".skipped-container:not(.loading)",
function(a){a.preventDefault();var e=(0,C.default)(a.currentTarget);e.addClass("loading");e.find(".showmore span").html("\x26nbsp;");var b=e.find(".showmore").spin("small"),f=e.data("change-type"),l=e.data("dest-offset");a=H.default.isCtrlish(a)?q.maxLimit-1:q.maxContext;var m=e.data("line-start")-1,n=e.data("line-end")-1;p.default.fetchContext(m,n,function(a,d){var g=void 0,h=void 0,f=a;g=c.getCommitRange().getSinceRevision();h=c.getCommitRange().getUntilRevision();k===E.default.EFFECTIVE?(g=g&&
g.getId()||h.getParents()[0].getId(),h=c.getSrcPath()&&""!==c.getSrcPath().toString()?c.getSrcPath():c.getPath()):(g=h.getId(),h=c.getPath(),f-=l);return G.default.rest({statusCode:{200:function(a,c,d,b){if(b&&b.message&&0<b.message.replace(/,/g,"").indexOf(" "+f+" "))return{promise:function(){return{lines:[]}}}}},url:r.default.rest().currentRepo().browse().path(h).at(g).withParams({start:f,limit:d}).build()}).then(function(b){b.start=a;return b}).always(function(){b.spinStop()}).fail(function(){e.removeClass("loading")})},
a,q).then(p.default.toHunks(l,f)).then(D.default.bind(d,null,c,e))})},getSeparatedHunkHtml:function(a,b){return p.default.getSeparatedHunkHtml(a,b,A)}};n.exports=k["default"]});
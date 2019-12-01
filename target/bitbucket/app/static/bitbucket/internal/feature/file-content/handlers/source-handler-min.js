define("bitbucket/internal/feature/file-content/handlers/source-handler","module exports jquery lodash bitbucket/feature/files/file-handlers bitbucket/util/navbuilder bitbucket/internal/feature/file-content/binary-source-view/binary-source-view bitbucket/internal/feature/file-content/binary-view/binary-view bitbucket/internal/feature/file-content/content-message/content-message bitbucket/internal/feature/file-content/request-source bitbucket/internal/feature/file-content/source-view/source-view bitbucket/internal/model/file-content-modes bitbucket/internal/util/error bitbucket/internal/util/property".split(" "),
function(u,d,g,k,l,m,n,v,w,x,y,z,A,B){function e(a,b,e){if(!b)throw Error("Every handler we expose from core needs to have a handlerID.");return function(h){if(h.contentMode!==C.default.SOURCE)return c.default.Deferred().reject();var d={includeBlame:!1};p.default.isFunction(e)&&p.default.assign(d,{start:e(h.anchor)});var g=h.$container;return(0,D.default)(h.fileChange,d).then(function(b){return a(b,h)}).then(function(a){a.handlerID||(a.handlerID=b);return a},function(a,b,e,d){return d&&d.errors&&
E.default.isErrorEntityWithinRepository(d.errors[0])?(r.default.renderErrors(g,d),c.default.Deferred().resolve({handlerID:f.default.builtInHandlers.ERROR})):c.default.Deferred().reject()})}}Object.defineProperty(d,"__esModule",{value:!0});var c=babelHelpers.interopRequireDefault(g),p=babelHelpers.interopRequireDefault(k),f=babelHelpers.interopRequireDefault(l),F=babelHelpers.interopRequireDefault(m),t=babelHelpers.interopRequireDefault(n),q=babelHelpers.interopRequireDefault(v),r=babelHelpers.interopRequireDefault(w),
D=babelHelpers.interopRequireDefault(x),G=babelHelpers.interopRequireDefault(y),C=babelHelpers.interopRequireDefault(z),E=babelHelpers.interopRequireDefault(A);babelHelpers.interopRequireDefault(B).default.getFromProvider("page.max.source.lines").done(function(a){});g=e(function(a,b){return a.binary||q.default.treatTextAsBinary(b.fileChange.path.extension)?c.default.Deferred().resolve(new t.default(b)):c.default.Deferred().reject()},f.default.builtInHandlers.SOURCE_BINARY);k=e(function(a,b){return!a.binary&&
!q.default.treatTextAsBinary(b.fileChange.path.extension)||"image"!==q.default.getRenderedBinary(b.fileChange.path,b.fileChange.commitRange.untilRevision).type?c.default.Deferred().reject():c.default.Deferred().resolve(new t.default(b))},f.default.builtInHandlers.SOURCE_IMAGE);l=e(function(a,b){if(!a.lines||0!==a.lines.length)return c.default.Deferred().reject();r.default.renderEmptyFile(b.$container,a,b.fileChange);return c.default.Deferred().resolve({})},f.default.builtInHandlers.SOURCE_EMPTY);
m=e(function(a,b){if(a.lines||!a.children)return c.default.Deferred().reject();window.location.href=F.default.currentRepo().browse().path(a.path).at(a.revision).build();return c.default.Deferred().resolve({})},f.default.builtInHandlers.DIRECTORY);n=e(function(a,b){if(!a.lines||0===a.lines.length)return c.default.Deferred().reject();a=new G.default(a,b);p.default.defer(a.init.bind(a));return c.default.Deferred().resolve(a)},f.default.builtInHandlers.SOURCE_TEXT);d.default={handleBinary:g,handleImage:k,
handleEmptyFile:l,handleDirectory:m,handleText:n};u.exports=d["default"]});
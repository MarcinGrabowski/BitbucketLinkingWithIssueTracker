define("bitbucket/internal/layout/admin/admin",["module","exports","jquery"],function(e,a,f){Object.defineProperty(a,"__esModule",{value:!0});var b=babelHelpers.interopRequireDefault(f),g=function(){var a=(0,b.default)(".tabs-menu .menu-item");a.children(".aui-dd-trigger").mouseenter(function(){var c=a.filter(".active"),d=(0,b.default)(this);0<c.length&&c[0]!==d.parent()[0]&&d.click()})};a.default={onReady:function(){g()}};e.exports=a["default"]});
define("bitbucket/internal/page/project/settings/general/project-settings","module exports @atlassian/aui jquery bitbucket/util/navbuilder bitbucket/internal/feature/project/project-avatar-picker/project-avatar-picker bitbucket/internal/model/page-state bitbucket/internal/util/ajax bitbucket/internal/util/notifications/notifications bitbucket/internal/widget/confirm-dialog/confirm-dialog".split(" "),function(n,b,p,q,r,t,u,v,w,x){Object.defineProperty(b,"__esModule",{value:!0});var e=babelHelpers.interopRequireDefault(p),
d=babelHelpers.interopRequireDefault(q),l=babelHelpers.interopRequireDefault(r),y=babelHelpers.interopRequireDefault(t),f=babelHelpers.interopRequireDefault(u),z=babelHelpers.interopRequireDefault(v),A=babelHelpers.interopRequireDefault(w),B=babelHelpers.interopRequireDefault(x);b.default={initDeleteButton:function(b){function g(a){(0,d.default)(".delete-confirm-button").prop("disabled",!a).toggleClass("disabled",!a)}function m(){c.append(bitbucket.internal.page.project.settings.deleteDialog({project:f.default.getProject().toJSON()}));
g(!0)}var c,h,k=new B.default({id:"delete-project-dialog",titleText:e.default.I18n.getText("bitbucket.web.project.delete"),titleClass:"warning-header",confirmButtonClass:"delete-confirm-button",panelContent:'\x3cdiv class\x3d"container"\x3e\x3c/div\x3e',submitText:e.default.I18n.getText("bitbucket.web.button.delete"),focusSelector:".cancel-button"},{type:"DELETE"});k.attachTo(b,function(){c=(0,d.default)(k.getContentElement()).find(".container");c.empty();h=(0,d.default)("\x3cdiv class\x3d'spinner'\x3e\x3c/div\x3e").appendTo(c);
g(!1);h.spin("large");z.default.rest({url:l.default.rest().currentProject().allRepos().build(),statusCode:{"*":!1}}).done(function(a){a&&a.size?(c.append(bitbucket.internal.page.project.settings.deleteDisabledDialog({project:f.default.getProject().toJSON()})),g(!1)):m()}).fail(function(){m()}).always(function(){h.spinStop().remove()})});k.addConfirmListener(function(a){a.done(function(a){A.default.addFlash(e.default.I18n.getText("bitbucket.web.project.deleted",f.default.getProject().getName()));window.location=
l.default.allProjects().build()})})},onReady:function(){var b={name:"atl_token",value:(0,d.default)(".project-settings input[name\x3datl_token]").val()};new y.default(".avatar-picker-field",{xsrfToken:b})}};n.exports=b["default"]});
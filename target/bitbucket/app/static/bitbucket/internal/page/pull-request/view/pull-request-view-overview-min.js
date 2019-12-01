define("bitbucket/internal/page/pull-request/view/pull-request-view-overview","module exports jquery lodash bitbucket/util/navbuilder bitbucket/internal/enums bitbucket/internal/feature/comments/comment-tips bitbucket/internal/feature/pull-request/activity/pull-request-activity bitbucket/internal/model/page-state bitbucket/internal/util/events bitbucket/internal/util/scroll bitbucket/internal/util/syntax-highlight".split(" "),function(w,k,x,y,z,l,A,B,C,D,E,F){function m(){d&&d.find(".manual-merge").click(function(a){a.preventDefault();
h.default.trigger("bitbucket.internal.pull-request.show.cant.merge.help")})}function n(a,b){if(d){if(d.data("outcome")===b)return;d.remove()}d=(0,f.default)(bitbucket.internal.feature.pullRequest.mergeWarningBanner({outcome:b,extraClasses:"transparent"})).prependTo(a);m();setTimeout(function(){return d.removeClass("transparent")},0)}function p(a,b,d){if(c instanceof q.default){c.reset();c=null;var G=(0,f.default)(bitbucket.internal.feature.pullRequest.activity({id:"pull-request-activity",currentUser:e.default.getCurrentUser()&&
e.default.getCurrentUser().toJSON(),commentTips:r.default.tips})).find(".pull-request-activity");t().replaceWith(G)}c=new q.default(t(),a,b,d,{scrollableElement:window});c.init()}function t(){return(0,f.default)(g).find(".pull-request-activity")}function u(){var a=v();if(a.id&&a.type){var b=a.type,d=a.id;var c=(0,f.default)(g);b=c.find(b===H.COMMENT?'.comment[data-id\x3d"'+d+'"]':'.activity-item[data-activityid\x3d"'+d+'"]');b.length?(c.find(".comment.focused, .activity-item.focused").removeClass("focused"),
b.addClass("focused"),I.default.scrollTo(b),c=!0):c=!1;c||p(e.default.getPullRequest(),a.type,a.id)}}function v(){var a=J.default.parse(window.location);return{type:a.getQueryParamValue("commentId")?"comment":"activity",id:a.getQueryParamValue("commentId")||a.getQueryParamValue("activityId")}}Object.defineProperty(k,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(x),K=babelHelpers.interopRequireDefault(y),J=babelHelpers.interopRequireDefault(z),r=babelHelpers.interopRequireDefault(A),
q=babelHelpers.interopRequireDefault(B),e=babelHelpers.interopRequireDefault(C),h=babelHelpers.interopRequireDefault(D),I=babelHelpers.interopRequireDefault(E),L=babelHelpers.interopRequireDefault(F),g,c,d,H={COMMENT:"comment",ACTIVITY:"activity"};h.default.on("bitbucket.internal.pull-request.*.merge",function(a,b,c,f,e){e===l.MergeOutcome.CLEAN?d&&(d.remove(),d=null):n(g,e)});k.default={load:function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g=a;var c=e.default.getPullRequest();
a.innerHTML=bitbucket.internal.feature.pullRequest.viewOverview({pullRequest:c.toJSON(),author:c.getAuthor().getUser().toJSON(),createdDate:c.getCreatedDate(),description:c.getDescription(),descriptionAsHtml:c.getDescriptionAsHtml(),currentUser:e.default.getCurrentUser()&&e.default.getCurrentUser().toJSON(),commentTips:r.default.tips});L.default.container((0,f.default)(a));b.store&&(b=b.store.getState(),b=K.default.get(b,"pullRequest.mergeable.outcome",null),b===l.MergeOutcome.CONFLICTED&&n(a,b));
d&&(m(),d.addClass("transparent").prependTo(a),setTimeout(function(){return d.removeClass("transparent")},0));b=v();p(c,b.type,b.id);h.default.on("bitbucket.internal.history.changestate",u)},_internalActivity:function(){return c},unload:function(a){c.reset();c=null;(0,f.default)(a).empty();g=null;h.default.off("bitbucket.internal.history.changestate",u)},keyboardShortcutContexts:["pull-request-overview"]};w.exports=k["default"]});
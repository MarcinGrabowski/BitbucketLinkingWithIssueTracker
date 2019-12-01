require(["@atlassian/aui","jquery","lodash","bitbucket/util/navbuilder","bitbucket/internal/feature/commit/request-commit"],function(f,e,l,m,n){function h(b,a){b.tipsy({opacity:.98,trigger:a,gravity:function(){return b.attr("data-commit-preview-gravity")||e.fn.tipsy.autoNS.call(this)},className:"commit-preview-tipsy",title:function(){var a=b.attr("data-commit-message"),d=b.attr("data-commit-preview-prefix"),e=f.I18n.getText("bitbucket.web.commit.preview.loading");if(a)return d?d+"\n\n"+g(a):g(a);
k(b).then(function(){"in"===b.data("tipsy").hoverState&&(b.tipsy("hide"),b.tipsy("show"))});return d?d+"\n\n"+e:e}})}function k(b){if(b.data("commit-loading"))return b.data("commit-loading");var a=b.attr("data-commitid")||b.text(),c=m.parse(b.attr("href")).path().match(/.*?\/(projects|users)\/([^\/]+)\/repos\/([^\/]+)\//);a=n({commitId:a,project:c&&("users"===c[1]?"~":"")+c[2],repo:c&&c[3],statusCode:{404:!1,"*":!1}}).then(function(a){return a.message?g(a.message):f.I18n.getText("bitbucket.web.commit.preview.message.empty")},
function(){return f.I18n.getText("bitbucket.web.commit.preview.request.failed")});a.then(function(a){return b.attr("data-commit-message",a)});b.data("commit-loading",a);return a}var g=function(b){var a=b.substring(0,b.substring(750).search(/\s/)+750);return a.length<b.length?a+"\u2026":a};e(document).on("mouseenter focus","a.commitid:not(.no-preview):not([data-inited]), \n        .commit-preview-trigger:not([data-inited]), \n        .commits-table .message[data-commit-message]:not([data-inited])",
function(b){var a=e(this).attr("data-inited",!0),c=a.attr("data-trigger-mode")||"all";if("all"===c)h(a,"hover"),a.tipsy("show");else{h(a,"manual");var d=a.tipsy(!0);a.on("mouseenter",function(){return d.show()});a.on("mouseleave",function(){return d.hide()});"hover-accessible"===c&&k(a).then(function(b){var c=l.uniqueId("commit-desc-");e(bitbucket.internal.widget.commitPreview.assistiveText({id:c,message:b})).insertAfter(a);a.attr("aria-describedby",c)});"mouseenter"===b.type&&d.show()}})});
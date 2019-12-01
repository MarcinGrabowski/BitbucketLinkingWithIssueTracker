define("bitbucket/internal/feature/file-content/stash-codemirror/search",["codemirror","jquery","lodash","bitbucket/internal/util/navigator"],function(t,u,v,m){function w(a,b){a="string"===typeof a?new RegExp("^"+a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$\x26"),b?"i":""):new RegExp("^(?:"+a.source+")",a.ignoreCase?"i":"");return{token:function(c){if(c.match(a))return"searching";for(;!c.eol()&&(c.next(),!c.match(a,!1)););}}}function x(){this.query=this.overlay=this.dialogEl=this.cursor=null}
function g(a){return a.state.search||(a.state.search=new x)}function n(a){var b=a.match(/^\/(.*)\/([a-z]*)$/);return b?new RegExp(b[1],(0,v.includes)(b[2],"i")?"i":""):a}function l(a,b){a.operation(function(){a.removeOverlay(b.overlay);b.overlay=w(b.query,"string"===typeof b.query);a.addOverlay(b.overlay)})}function p(a,b){a.operation(function(){a.removeOverlay(b.overlay);b.overlay=null})}function h(a,b,c){(b=b&&b.trim())&&0!==b.length&&a.operation(function(){var d=g(a);b!==d.query?(d.query=n(b),
d.cursor=null,l(a,d)):d.overlay||l(a,d);k(a,c)})}function q(a,b){var c=g(a);if(c.dialogEl){var d=c.dialogEl.getElementsByClassName("search-query")[0];d.select()}else{d=(0,r.default)(bitbucket.internal.feature.fileContent.codemirror.searchQuery());d.find(".search-button").on("click",function(c){k(a,(0,r.default)(c.target).closest(".aui-button").data("rev"))}).tooltip();var f=d.find("input")[0];f.onkeydown=function(b){c.query=void 0;var d=String.fromCharCode(b.keyCode),e=(0,m.isMac)()&&b.metaKey&&!b.ctrlKey||
!(0,m.isMac)()&&!b.metaKey&&b.ctrlKey;"F"!==d||!e||b.shiftKey||b.altKey?"G"!==d||!e||b.shiftKey||b.altKey?"G"===d&&e&&b.shiftKey&&!b.altKey&&(b.preventDefault(),h(a,f.value,!0)):(b.preventDefault(),h(a,f.value)):b.preventDefault()};c.dialogEl=d[0];a.getWrapperElement().classList.add("searching");e.default.signal(a,"search.show");d={value:a.getSelection()||c.query,closeOnEnter:!1,closeOnBlur:!1,onClose:function(){p(a,c);a.getWrapperElement().classList.remove("searching");e.default.signal(a,"search.hide");
c.dialogEl=c.cursor=null}};a.openDialog(c.dialogEl,function(b,c){c.preventDefault();h(a,b)},d)}h(a,d.value,b)}function k(a,b){a.operation(function(){var c=g(a);if(c.query&&c.dialogEl){if(!c.cursor){b&&a.execCommand("goCharLeft");var d=c.query;var f=a.getCursor();d=a.getSearchCursor(d,f,"string"===typeof d);c.cursor=d}if(!c.cursor.find(b)&&(d=c.query,f=b?e.default.Pos(a.lastLine()):e.default.Pos(a.firstLine(),0),d=a.getSearchCursor(d,f,"string"===typeof d),c.cursor=d,!c.cursor.find(b)))return;a.setSelection(c.cursor.from(),
c.cursor.to());c={from:c.cursor.from(),to:c.cursor.to()};(d=a.getOption("scrollLineIntoViewFunc"))?(d(c),c=a.charCoords(c.from,"local"),d=a.getScrollInfo(),(d.left>c.left||d.left+d.clientWidth<c.left)&&a.scrollTo(Math.max(0,c.left-20),null)):a.scrollIntoView(c,100)}else q(a,b)})}var e=babelHelpers.interopRequireDefault(t),r=babelHelpers.interopRequireDefault(u);e.default.defineOption("scrollLineIntoViewFunc",null);e.default.commands.find=q;e.default.commands.findNext=k;e.default.commands.findPrev=
function(a){return k(a,!0)};e.default.commands.highlight=function(a,b){var c=g(a);0===b.length?p(a,c):(c.query=n(b),l(a,c))}});
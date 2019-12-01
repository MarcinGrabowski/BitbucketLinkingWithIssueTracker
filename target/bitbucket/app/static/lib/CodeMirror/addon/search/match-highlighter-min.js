(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror"),require("./matchesonscrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./matchesonscrollbar"],f):f(CodeMirror)})(function(f){function q(a){this.options={};for(var b in g)this.options[b]=(a&&a.hasOwnProperty(b)?a:g)[b];this.matchesonscroll=this.overlay=this.timeout=null;this.active=!1}function h(a){var b=a.state.matchHighlighter;(b.active||a.hasFocus())&&k(a,b)}function l(a){var b=
a.state.matchHighlighter;b.active||(b.active=!0,k(a,b))}function k(a,b){clearTimeout(b.timeout);b.timeout=setTimeout(function(){m(a)},b.options.delay)}function n(a,b,d,c){var e=a.state.matchHighlighter;a.addOverlay(e.overlay=r(b,d,c));e.options.annotateScrollbar&&a.showMatchesOnScrollbar&&(b=d?new RegExp("\\b"+b.replace(/[\\\[.+*?(){|^$]/g,"\\$\x26")+"\\b"):b,e.matchesonscroll=a.showMatchesOnScrollbar(b,!1,{className:"CodeMirror-selection-highlight-scrollbar"}))}function p(a){var b=a.state.matchHighlighter;
b.overlay&&(a.removeOverlay(b.overlay),b.overlay=null,b.matchesonscroll&&(b.matchesonscroll.clear(),b.matchesonscroll=null))}function m(a){a.operation(function(){var b=a.state.matchHighlighter;p(a);if(!a.somethingSelected()&&b.options.showToken){for(var d=!0===b.options.showToken?/[\w$]/:b.options.showToken,c=a.getCursor(),e=a.getLine(c.line),f=c=c.ch;c&&d.test(e.charAt(c-1));)--c;for(;f<e.length&&d.test(e.charAt(f));)++f;c<f&&n(a,e.slice(c,f),d,b.options.style)}else if(d=a.getCursor("from"),e=a.getCursor("to"),
d.line==e.line){if(c=b.options.wordsOnly){a:if(null!==a.getRange(d,e).match(/^\w+$/)){if(0<d.ch&&(c={line:d.line,ch:d.ch-1},c=a.getRange(c,d),null===c.match(/\W/))){c=!1;break a}if(e.ch<a.getLine(d.line).length&&(c={line:e.line,ch:e.ch+1},c=a.getRange(e,c),null===c.match(/\W/))){c=!1;break a}c=!0}else c=!1;c=!c}c||(d=a.getRange(d,e),b.options.trim&&(d=d.replace(/^\s+|\s+$/g,"")),d.length>=b.options.minChars&&n(a,d,!1,b.options.style))}})}function r(a,b,d){return{token:function(c){var e;if(e=c.match(a))(e=
!b)||(e=(!c.start||!b.test(c.string.charAt(c.start-1)))&&(c.pos==c.string.length||!b.test(c.string.charAt(c.pos))));if(e)return d;c.next();c.skipTo(a.charAt(0))||c.skipToEnd()}}}var g={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};f.defineOption("highlightSelectionMatches",!1,function(a,b,d){d&&d!=f.Init&&(p(a),clearTimeout(a.state.matchHighlighter.timeout),a.state.matchHighlighter=null,a.off("cursorActivity",h),a.off("focus",l));if(b){b=a.state.matchHighlighter=
new q(b);if(a.hasFocus())b.active=!0,m(a);else a.on("focus",l);a.on("cursorActivity",h)}})});
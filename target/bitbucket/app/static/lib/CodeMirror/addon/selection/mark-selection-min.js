(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){function n(a){a.state.markedSelection&&a.operation(function(){t(a)})}function p(a){a.state.markedSelection&&a.state.markedSelection.length&&a.operation(function(){h(a)})}function e(a,c,d,q){if(0!=k(c,d))for(var f=a.state.markedSelection,g=a.state.markedSelectionStyle,b=c.line;;){var e=b==c.line?c:r(b,
0);b+=m;var h=b>=d.line,l=h?d:r(b,0);e=a.markText(e,l,{className:g});null==q?f.push(e):f.splice(q++,0,e);if(h)break}}function h(a){a=a.state.markedSelection;for(var c=0;c<a.length;++c)a[c].clear();a.length=0}function l(a){h(a);for(var c=a.listSelections(),d=0;d<c.length;d++)e(a,c[d].from(),c[d].to())}function t(a){if(!a.somethingSelected())return h(a);if(1<a.listSelections().length)return l(a);var c=a.getCursor("start"),d=a.getCursor("end"),b=a.state.markedSelection;if(!b.length)return e(a,c,d);var f=
b[0].find(),g=b[b.length-1].find();if(!f||!g||d.line-c.line<=m||0<=k(c,g.to)||0>=k(d,f.from))return l(a);for(;0<k(c,f.from);)b.shift().clear(),f=b[0].find();0>k(c,f.from)&&(f.to.line-c.line<m?(b.shift().clear(),e(a,c,f.to,0)):e(a,c,f.from,0));for(;0>k(d,g.to);)b.pop().clear(),g=b[b.length-1].find();0<k(d,g.to)&&(d.line-g.from.line<m?(b.pop().clear(),e(a,g.from,d)):e(a,g.to,d))}b.defineOption("styleSelectedText",!1,function(a,c,d){d=d&&d!=b.Init;c&&!d?(a.state.markedSelection=[],a.state.markedSelectionStyle=
"string"==typeof c?c:"CodeMirror-selectedtext",l(a),a.on("cursorActivity",n),a.on("change",p)):!c&&d&&(a.off("cursorActivity",n),a.off("change",p),h(a),a.state.markedSelection=a.state.markedSelectionStyle=null)});var m=8,r=b.Pos,k=b.cmpPos});
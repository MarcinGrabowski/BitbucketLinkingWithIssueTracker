(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../ruby/ruby")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../ruby/ruby"],d):d(CodeMirror)})(function(d){d.defineMode("slim",function(m){function J(a,b,c){var e=function(e,d){d.tokenize=b;return e.pos<a?(e.pos=a,c):d.tokenize(e,d)};return function(a,c){c.tokenize=e;return b(a,c)}}function t(a,b){a.stack={parent:a.stack,
style:"continuation",indented:b,tokenize:a.line};a.line=a.tokenize}function u(a){a.line==a.tokenize&&(a.line=a.stack.tokenize,a.stack=a.stack.parent)}function K(a,b){return function(c,e){u(e);if(c.match(/^\\$/))return t(e,a),"lineContinuation";e=b(c,e);c.eol()&&c.current().match(/(?:^|[^\\])(?:\\\\)*\\$/)&&c.backUp(1);return e}}function L(a,b){return function(c,e){u(e);var d=b(c,e);c.eol()&&c.current().match(/,$/)&&t(e,a);return d}}function v(a,b){return function(c,e){return c.peek()==a&&1==e.rubyState.tokenize.length?
(c.next(),e.tokenize=b,"closeAttributeTag"):n(c,e)}}function f(a){var b,c=function(c,d){if(1==d.rubyState.tokenize.length&&!d.rubyState.context.prev){c.backUp(1);if(c.eatSpace())return d.rubyState=b,d.tokenize=a,a(c,d);c.next()}return n(c,d)};return function(a,k){b=k.rubyState;k.rubyState=d.startState(p);k.tokenize=c;return n(a,k)}}function n(a,b){return p.token(a,b.rubyState)}function z(a,b){if(a.match(/^#\{/))return b.tokenize=v("}",b.tokenize),null;var c=r.token(a,b.htmlState),d=a.current(),k=
d.search(/[^\\]#\{/);-1<k&&(b.tokenize=J(a.pos,b.tokenize,c),a.backUp(d.length-k-1));return c}function M(a){return function(b,c){var d=b.match(/^\\$/)?"lineContinuation":z(b,c);b.eol()&&(c.tokenize=a);return d}}function A(a,b,c){b.stack={parent:b.stack,style:"html",indented:a.column()+c,tokenize:b.line};b.line=b.tokenize=z;return null}function B(a,b){a.skipToEnd();return b.stack.style}function l(a,b){if(a.eat(b.stack.endQuote))return b.line=b.stack.line,b.tokenize=b.stack.tokenize,b.stack=b.stack.parent,
null;if(a.match(N))return b.tokenize=O,"slimAttribute";a.next();return null}function O(a,b){return a.match(/^==?/)?(b.tokenize=P,null):l(a,b)}function P(a,b){var c=a.peek();return'"'==c||"'"==c?(b.tokenize=C(c,"string",!0,!1,l),a.next(),b.tokenize(a,b)):"["==c?f(l)(a,b):a.match(/^(true|false|nil)\b/)?(b.tokenize=l,"keyword"):f(l)(a,b)}function Q(a,b){if(a.match(/^#\{/))return b.tokenize=v("}",b.tokenize),null;var c=new d.StringStream(a.string.slice(b.stack.indented),a.tabSize);c.pos=a.pos-b.stack.indented;
c.start=a.start-b.stack.indented;c.lastColumnPos=a.lastColumnPos-b.stack.indented;c.lastColumnValue=a.lastColumnValue-b.stack.indented;var e=b.subMode.token(c,b.subState);a.pos=c.pos+b.stack.indented;return e}function R(a,b){b.stack.indented=a.column();b.line=b.tokenize=Q;return b.tokenize(a,b)}function S(a,b){a.skipToEnd();return"slimDoctype"}function T(a,b){if("\x3c"==a.peek())return(b.tokenize=M(b.tokenize))(a,b);if(a.match(/^[|']/))return A(a,b,1);if(a.match(/^\/(!|\[\w+])?/))return b.stack={parent:b.stack,
style:"comment",indented:b.indented+1,tokenize:b.line},b.line=B,B(a,b);if(a.match(/^(-|==?[<>]?)/))return b.tokenize=K(a.column(),L(a.column(),n)),"slimSwitch";if(a.match(/^doctype\b/))return b.tokenize=S,"keyword";var c=a.match(U);if(c){a=c[1];if(w.hasOwnProperty(a))a=w[a];else{c=D[a];var e=d.mimeModes[c];c=e?d.getMode(m,e):(e=d.modes[c])?e(m,{name:c}):d.getMode(m,"null");a=w[a]=c}c=d.startState(a);b.subMode=a;b.subState=c;b.stack={parent:b.stack,style:"sub",indented:b.indented+1,tokenize:b.line};
b.line=b.tokenize=R;return"slimSubmode"}return x(a,b)}function y(a,b){return b.startOfLine?T(a,b):x(a,b)}function x(a,b){return a.eat("*")?(b.tokenize=f(E),null):a.match(V)?(b.tokenize=E,"slimTag"):q(a,b)}function E(a,b){return a.match(/^(<>?|><?)/)?(b.tokenize=q,null):q(a,b)}function q(a,b){return a.match(W)?(b.tokenize=q,"slimId"):a.match(X)?(b.tokenize=q,"slimClass"):g(a,b)}function g(a,b){return a.match(/^([\[\{\(])/)?(b.stack={parent:b.stack,style:"wrapper",indented:b.indented+1,tokenize:g,line:b.line,
endQuote:Y[RegExp.$1]},b.line=b.tokenize=l,null):a.match(Z)?(b.tokenize=aa,"slimAttribute"):"*"==a.peek()?(a.next(),b.tokenize=f(F),null):F(a,b)}function aa(a,b){return a.match(/^==?/)?(b.tokenize=ba,null):g(a,b)}function ba(a,b){var c=a.peek();return'"'==c||"'"==c?(b.tokenize=C(c,"string",!0,!1,g),a.next(),b.tokenize(a,b)):"["==c?f(g)(a,b):":"==c?f(G)(a,b):a.match(/^(true|false|nil)\b/)?(b.tokenize=g,"keyword"):f(g)(a,b)}function G(a,b){a.backUp(1);if(a.match(/^[^\s],(?=:)/))return b.tokenize=f(G),
null;a.next();return g(a,b)}function C(a,b,c,d,k){return function(e,f){u(f);var h=0==e.current().length;if(e.match(/^\\$/,h)){if(!h)return b;t(f,f.indented);return"lineContinuation"}if(e.match(/^#\{/,h)){if(!h)return b;f.tokenize=v("}",f.tokenize);return null}h=!1;for(var g;null!=(g=e.next());){if(g==a&&(d||!h)){f.tokenize=k;break}if(c&&"#"==g&&!h&&e.eat("{")){e.backUp(2);break}h=!h&&"\\"==g}e.eol()&&h&&e.backUp(1);return b}}function F(a,b){if(a.match(/^==?/))return b.tokenize=n,"slimSwitch";if(a.match(/^\/$/))return b.tokenize=
y,null;if(a.match(/^:/))return b.tokenize=x,"slimSwitch";A(a,b,0);return b.tokenize(a,b)}var r=d.getMode(m,{name:"htmlmixed"}),p=d.getMode(m,"ruby"),w={html:r,ruby:p},D={ruby:"ruby",javascript:"javascript",css:"text/css",sass:"text/x-sass",scss:"text/x-scss",less:"text/x-less",styl:"text/x-styl",coffee:"coffeescript",asciidoc:"text/x-asciidoc",markdown:"text/x-markdown",textile:"text/x-textile",creole:"text/x-creole",wiki:"text/x-wiki",mediawiki:"text/x-mediawiki",rdoc:"text/x-rdoc",builder:"text/x-builder",
nokogiri:"text/x-nokogiri",erb:"application/x-erb"},U=function(a){var b=[],c;for(c in a)b.push(c);return new RegExp("^("+b.join("|")+"):")}(D),H={commentLine:"comment",slimSwitch:"operator special",slimTag:"tag",slimId:"attribute def",slimClass:"attribute qualifier",slimAttribute:"attribute",slimSubmode:"keyword special",closeAttributeTag:null,slimDoctype:null,lineContinuation:null},Y={"{":"}","[":"]","(":")"},V=/^[:_a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd](?::[_a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd\-0-9\u00b7\u0300-\u036f\u203f-\u2040]|[_a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd\-0-9\u00b7\u0300-\u036f\u203f-\u2040]*)/,
Z=/^[:_a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][:\._a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd\-0-9\u00b7\u0300-\u036f\u203f-\u2040]*(?=\s*=)/,N=/^[:_a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][:\._a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd\-0-9\u00b7\u0300-\u036f\u203f-\u2040]*/,
X=/^\.-?[_a-zA-Z]+[\w\-]*/,W=/^#[_a-zA-Z]+[\w\-]*/,I={startState:function(){var a=d.startState(r),b=d.startState(p);return{htmlState:a,rubyState:b,stack:null,last:null,tokenize:y,line:y,indented:0}},copyState:function(a){return{htmlState:d.copyState(r,a.htmlState),rubyState:d.copyState(p,a.rubyState),subMode:a.subMode,subState:a.subMode&&d.copyState(a.subMode,a.subState),stack:a.stack,last:a.last,tokenize:a.tokenize,line:a.line}},token:function(a,b){if(a.sol())for(b.indented=a.indentation(),b.startOfLine=
!0,b.tokenize=b.line;b.stack&&b.stack.indented>b.indented&&"slimSubmode"!=b.last;)b.line=b.tokenize=b.stack.tokenize,b.stack=b.stack.parent,b.subMode=null,b.subState=null;if(a.eatSpace())return null;a=b.tokenize(a,b);b.startOfLine=!1;a&&(b.last=a);return H.hasOwnProperty(a)?H[a]:a},blankLine:function(a){if(a.subMode&&a.subMode.blankLine)return a.subMode.blankLine(a.subState)},innerMode:function(a){return a.subMode?{state:a.subState,mode:a.subMode}:{state:a,mode:I}}};return I},"htmlmixed","ruby");
d.defineMIME("text/x-slim","slim");d.defineMIME("application/x-slim","slim")});
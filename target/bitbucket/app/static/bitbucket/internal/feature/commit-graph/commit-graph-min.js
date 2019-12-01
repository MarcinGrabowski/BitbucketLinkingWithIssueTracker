define("bitbucket/internal/feature/commit-graph/commit-graph","exports classnames lodash react bitbucket/internal/util/components/react-functional ./graph-builder".split(" "),function(h,r,m,p,t,u){Object.defineProperty(h,"__esModule",{value:!0});h.Slice=h.Graph=h.CommitGraph=void 0;var v=babelHelpers.interopRequireDefault(r),n=babelHelpers.interopRequireDefault(p),w=function(a,b,c,e){return"M"+a+","+b+" L"+c+","+e},x=function(a,b,c,e){var k=Math.round((e-b)/2);return"M"+a+","+b+" C"+a+","+(b+k)+" "+
c+","+(e-k)+" "+c+","+e},y=function(a){return a.length&&(0,m.max)([1].concat(a.map(function(b){return b.segments.length})))};(h.CommitGraph=function(a){function b(){var c,e,a,d;babelHelpers.classCallCheck(this,b);for(var l=arguments.length,f=Array(l),g=0;g<l;g++)f[g]=arguments[g];return d=(e=(a=babelHelpers.possibleConstructorReturn(this,(c=b.__proto__||Object.getPrototypeOf(b)).call.apply(c,[this].concat(f))),a),a.buildGraph=(0,m.memoize)(u.buildGraph),a.getMaxColumns=(0,m.memoize)(y),e),babelHelpers.possibleConstructorReturn(a,
d)}babelHelpers.inherits(b,a);babelHelpers.createClass(b,[{key:"render",value:function(){var c=this.props,a=c.commits,b=c.focusedCommitId,d=c.colWidth,l=c.sliceHeight,f=c.offsetX;c=c.offsetY;if(!a.length)return null;a=this.buildGraph(a);var g=f+this.getMaxColumns(a)*d;return n.default.createElement(z,{className:"commit-graph",graph:a,width:g,height:c+a.length*l,offsetX:f,offsetY:c,colWidth:d,sliceHeight:l,focusedId:b})}}]);return b}(p.PureComponent)).defaultProps={colWidth:8,sliceHeight:40,offsetX:8,
offsetY:20};var z=h.Graph=(0,t.pure)(function(a){var b=a.offsetX,c=a.offsetY,e=a.colWidth,k=a.sliceHeight,d=a.focusedId;return n.default.createElement("svg",{className:a.className,width:a.width,height:a.height},a.graph.map(function(a,f){return n.default.createElement(A,babelHelpers.extends({slice:a,index:f,offsetX:b,offsetY:c,colWidth:e,sliceHeight:k},{focused:a.id===d,key:"slice-"+a.id}))}))}),A=h.Slice=function(a){function b(){babelHelpers.classCallCheck(this,b);return babelHelpers.possibleConstructorReturn(this,
(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}babelHelpers.inherits(b,a);babelHelpers.createClass(b,[{key:"shouldComponentUpdate",value:function(a){var c=a.slice;a=a.focused;return!(0,m.isEqual)(c,this.props.slice)||a!==this.props.focused}},{key:"render",value:function(){var a=this.props,b=a.slice,k=a.offsetX,d=a.colWidth,l=a.sliceHeight,f=a.focused,g=b.id,h=b.color,m=k+b.column*d,q=a.offsetY+a.index*l;return n.default.createElement(p.Fragment,null,b.segments.map(function(a){var b=
a.startColumn,c=a.endColumn;a=a.color;return n.default.createElement("path",{key:"path-"+g+"-"+b+"-"+c,d:(b===c?w:x)(k+b*d,q,k+c*d,q+l),className:"color-"+a%6})}),n.default.createElement("circle",{id:"node-"+g,key:"node-"+g,r:f?4:3,cx:m,cy:q,className:(0,v.default)("color-"+h%6,{focused:f})}))}}]);return b}(p.Component)});
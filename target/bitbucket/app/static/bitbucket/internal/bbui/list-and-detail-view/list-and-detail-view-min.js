define("bitbucket/internal/bbui/list-and-detail-view/list-and-detail-view",["module","exports","jquery","lodash","../widget/widget"],function(k,g,h,l,e){Object.defineProperty(g,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(h);h=babelHelpers.interopRequireDefault(l);e=function(e){function d(a,b){babelHelpers.classCallCheck(this,d);var c=babelHelpers.possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,b));c.keycodes={j:74,k:75};c.$el=(0,f.default)(a);
c.$el.html(bitbucket.internal.component.listAndDetailView.main({listContent:b.listContent||"",detailContent:b.detailContent||""}));c.$listView=c.$el.find(".list-view");c.$detailView=c.$el.find(".detail-view");c.selectHandler=b.selectHandler;c.bindShortcuts();c.$listView.on("click",c.options.listItemTag,c._itemClickHandler);c._maybeSelectFirst();return c}babelHelpers.inherits(d,e);babelHelpers.createClass(d,[{key:"destroy",value:function(){babelHelpers.get(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),
"destroy",this).call(this);this.unbindShortcuts();this.$el.empty()}},{key:"_itemClickHandler",value:function(a){var b=this.options.selectedClass;this.$listView.find("li."+b).removeClass(b);b=(0,f.default)(a.currentTarget).addClass(b);this.selectHandler(b,this.$listView,this.$detailView,a)}},{key:"_maybeSelectFirst",value:function(){this.options.selectFirstOnInit&&this.$listView.find(this.options.listItemTag+":first").click()}},{key:"_shortcutHandler",value:function(a){var b=this.$listView.find(this.options.listItemTag+
"."+this.options.selectedClass);if(a.which===this.keycodes.j)a=b.next(this.options.listItemTag);else if(a.which===this.keycodes.k)a=b.prev(this.options.listItemTag);else return;a.click().find("a").focus().blur()}},{key:"bindShortcuts",value:function(){(0,f.default)(document).on("keydown",this._shortcutHandler)}},{key:"unbindShortcuts",value:function(){(0,f.default)(document).off("keydown",this._shortcutHandler)}},{key:"removeItem",value:function(a,b){var c=f.default.Deferred();a.addClass("offScreen").one("transitionend",
function(){a.remove();c.resolve()});a.next(b).length?a.next(b).click():a.prev(b).length?a.prev(b).click():this.$detailView.empty();return c.promise()}},{key:"addItem",value:function(a,b,c){a.addClass("offScreen");b?a.insertBefore(b):a.appendTo(this.$listView);a.offset();a.removeClass("offScreen");c&&a.click()}}]);return d}(babelHelpers.interopRequireDefault(e).default);g.default=e;e.defaults={selectedClass:"selected-item",selectFirstOnInit:!1,listItemTag:"li",selectHandler:h.default.noop};k.exports=
g["default"]});
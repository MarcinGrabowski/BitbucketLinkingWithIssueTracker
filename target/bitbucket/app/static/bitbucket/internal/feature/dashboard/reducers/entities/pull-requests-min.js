define("bitbucket/internal/feature/dashboard/reducers/entities/pull-requests",["module","exports","bitbucket/internal/bbui/utils/pull-request-unique-id","bitbucket/internal/util/reducers","../../actions"],function(b,a,d,e,f){Object.defineProperty(a,"__esModule",{value:!0});var g=babelHelpers.interopRequireDefault(d);a.default=(0,e.reduceByType)({},babelHelpers.defineProperty({},f.LOAD_PULL_REQUESTS_SUCCESS,function(a,b){var c=babelHelpers.extends({},a);b.payload.values.forEach(function(a){c[(0,g.default)(a)]=
a});return c}));b.exports=a["default"]});
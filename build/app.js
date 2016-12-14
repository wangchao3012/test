'use strict';

var _Koa = require('Koa');var _Koa2 = _interopRequireDefault(_Koa);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// const Koa=require('Koa');
var app = new _Koa2.default();

app.use(function (ctx) {
    ctx.body = '练习使用Koa';
});
app.listen(3000);
//# sourceMappingURL=app.js.map
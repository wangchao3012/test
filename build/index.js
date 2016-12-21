
'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _stringify = require('babel-runtime/core-js/json/stringify');var _stringify2 = _interopRequireDefault(_stringify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var config = require('config');
// var Sequelize = require('sequelize');
// var db = {
//     sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options)
// }; 

// import Sequelize from 'sequelize'

console.error(config.mysql.dbname);
var Sequelize = require('sequelize');
var db = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options) };


db.User = db.sequelize.import('./model/user.js');


// db.User.f().then(function (num) {
//     console.log(num);
// });

// db.Role = db.import('./model/role.js');
db.sequelize.sync({ force: false }).then(function () {

    console.log("服务启动成功");
    var dmu = {
        name: '张三' + new Date().getTime() };

    db.User.create(dmu).then(function (user) {
        console.log('添加用户：' + (0, _stringify2.default)(dmu));
    });
}).catch(function (err) {
    console.log("服务启动失败: %s", err);
});
// module.exports = db;



var Koa = require('koa');
var app = new Koa();
// app.use(ctx => {
//     db.User.findOne({ id: 2 }).then(function (res) {
//         console.log('user:' + JSON.stringify(res.dataValues));
//         ctx.body = JSON.stringify(res.dataValues);
//     })

// });

// app.use((ctx, next) => {
//     return db.User.findOne({ id: 2 }).then(function (res) {
//         console.log('user:' + JSON.stringify(res.dataValues));
//         ctx.body = JSON.stringify(res.dataValues);
//     })
// });

app.use(function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var start, ms;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        start = new Date();
                        // await next();
                        ms = new Date() - start;
                        // await next();
                        console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');_context.next = 5;return (
                            db.User.findOne({ id: 2 }).then(function (res) {
                                console.log('user:' + (0, _stringify2.default)(res.dataValues));
                                ctx.body = (0, _stringify2.default)(res.dataValues);
                            }).catch(function (err) {
                                ctx.body = err;
                            }));case 5:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


app.listen(config.port);
//# sourceMappingURL=index.js.map
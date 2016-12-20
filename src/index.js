
'use strict'

var config = require('config');
// var Sequelize = require('sequelize');
// var db = {
//     sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options)
// }; 

// import Sequelize from 'sequelize'

console.error(config.util.getEnv())
const Sequelize = require('sequelize');
const db = new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options);

db.User = db.import('./model/user.js');


// db.Role = db.import('./model/role.js');
db.sync({ force: false }).then(function () {
    console.log("服务启动成功");
}).catch(function (err) {
    console.log("服务启动失败: %s", err);
});
// module.exports = db;



function name(params) {

}
const Koa = require('koa');
const app = new Koa();
app.use(ctx => {

    var time = new Date().getTime();
    for (var i = 0; i < 10000; i++) {
        var dmu = {
            name: '张三' + new Date().getTime(),
            age: 11,
        };
        db.User.create(dmu).then(function (user) {
            ctx.body = (new Date().getTime() - time) + 'ms 添加用户' + JSON.stringify(dmu);
        });
    }

});
app.listen(config.port);

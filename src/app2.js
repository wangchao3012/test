
'use strict'
// import config from 'config';
var config = require('config');
// var Sequelize = require('sequelize');
// var db = {
//     sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options)
// }; 

// import Sequelize from 'sequelize'

console.error(config.mysql.dbname)
const Sequelize = require('sequelize');
const db = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),
}

db.User = db.sequelize.import('./model/user.js');


// db.User.f().then(function (num) {
//     console.log(num);
// });

// db.Role = db.import('./model/role.js');
db.sequelize.sync({ force: false }).then(function () {

    console.log("服务启动成功");
    var dmu = {
        name: '张三' + new Date().getTime()
    };
    db.User.create(dmu).then(function (user) {
        console.log('添加用户：' + JSON.stringify(dmu));
    });
}).catch(function (err) {
    console.log("服务启动失败: %s", err);
});
// module.exports = db;


// import Koa from 'koa';
const Koa = require('koa');
const app = new Koa();
// const router = require('koa-router');

// app.use((ctx, next) => {
//     return db.User.findOne({ id: 2 }).then(function (res) {
//         console.log('user:' + JSON.stringify(res.dataValues));
//         ctx.body = JSON.stringify(res.dataValues);
//     })
// });
const convert = require('koa-convert');
// http 参数解析
const bodyparser = require('koa-bodyparser')();
app.use(bodyparser);
app.use(async (ctx, next) => {
    const start = new Date();
    // await next();
    const ms = new Date() - start;
    // await next();
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    await db.User.findOne({ id: 2 }).then(function (res) {
        console.log('user:' + JSON.stringify(res.dataValues));
        console.log('par:::' + ctx.request.body);

        // parseInt(undefined)
        // app.onerror({method:'11'})
        // app.emit('error')
        ctx.body = JSON.stringify(res.dataValues);
    }).catch(err => {
        ctx.body = err
    })
});
// app.use('/rest', (ctx, next) => {
//     console.log('rest');

// });
// var u = require('assert')
app.on('error', (err, ctx) => {
    console.error('err:' + JSON.stringify(err));

});

app.listen(config.port);

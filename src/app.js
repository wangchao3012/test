
'use strict'

const Koa = require('koa');
const app = new Koa();

const convert = require('koa-convert');
var config = require('config');


console.log('当前连接数据库名:::' + config.mysql.dbname)
const Sequelize = require('sequelize');
const db = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),
}

db.User = db.sequelize.import('./model/user.js');


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


// http 参数解析
const bodyparser = require('koa-bodyparser')();
app.use(convert(bodyparser));
const tool = require('./common/tool')

app.use(async (ctx, next) => {
    await checkAuth(ctx.request.body);
    // ctx.request.body
    // await next();
    // await db.User.findOne({ id: 2 }).then(function (res) {
    //     console.log('user:' + JSON.stringify(res.dataValues));
    //     console.log('par:::' + ctx.request.body);

    //     ctx.body = JSON.stringify(res.dataValues);
    // }).catch(err => {
    //     ctx.body = err
    // });
});
const defaultToken = config.app.defaultToken;
const noCheckToken = ['user.login', 'user.register'];
const cache = require('./common/cache')
var checkAuth = async function (cr) {
    var bb = await cache.set2();
    if (cr.test || (noCheckToken.indexOf != -1 && tool.checkSign(defaultToken))) {
        return true;
    }
    else {

        // tool.checkToken(ctx.request.body)
    }
}


app.on('error', (err, ctx) => {
    console.error('err:' + JSON.stringify(err));
});

app.listen(config.port);

module.exports = app;
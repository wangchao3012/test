
'use strict'

const Koa = require('koa');
const app = new Koa();

const convert = require('koa-convert');
var config = require('config');
const cache = require('./common/cache');

console.log('当前连接数据库名:::' + config.mysql.dbname)




// http 参数解析
const bodyparser = require('koa-bodyparser')();
app.use(convert(bodyparser));
const tool = require('./common/tool');
var service = {};
// const user=require('./service/account/user')
app.use(async (ctx, next) => {
    let cr = ctx.request.body;
    var sr = await checkAuth(cr);
    if (sr.sc == statusCode.成功) {
        var arr = cr.m.split('.');
        var cla = require('./service/' + arr[0] + '/' + arr[1]);
        try {

            sr.d = await cla[arr[2]](cr.d);


        } catch (err) {
            if (err.stack) {
                sr.msg = '服务器异常，请稍后重试';
                sr.sc = statusCode.系统错误;
                cache.qpush(cache.key.error, {
                    method: cr.m,
                    cr: JSON.stringify(cr),
                    message: err.message,
                    stack: err.stack
                });
            } else {
                sr.msg = err;
            }
        }
    }

    ctx.body = sr;

});
var statusCode = {
    成功: 0,
    失败: -1,
    未登录: -2,
    系统错误: -4,
};
var sr = {
    sc: -1,//状态号
    s: '',//返回状态信息
    d: null
};
const defaultToken = config.app.defaultToken;
const noCheckToken = ['user.login', 'user.register'];

const uuid = require('uuid/v4');

var checkAuth = async function (cr) {

    if (cr.test || (noCheckToken.indexOf != -1 && tool.checkSign(cr, defaultToken))) {
        return { sc: statusCode.成功 };
    }
    else {
        // var flag = await cache.hset(cr.uid, cr.si, uuid());
        var token = await cache.hget(cr.uid, cr.sn);
        if (tool.checkSign(cr, token)) {
            return { sc: statusCode.成功, si: token };
        }
        else {
            return { sc: statusCode.未登录, s: '签名不正确，正确签名字符串为：' + tool.signJoin(cr, token) };
        }
    }
}


app.on('error', (err, ctx) => {
    console.error('err:' + err.message + '\r\n' + err.stack);
});

app.listen(config.port);

module.exports = app;
'use strict'

var config = require('config');
var Sequelize = require('sequelize');
var db = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options)
};
db.User = db.sequelize.import('../model/user.js');
module.exports = db;

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = '添加用户';
});
app.listen(config.get('port'));
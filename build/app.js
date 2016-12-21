'use strict';

// import Koa from 'Koa'

// // const Koa=require('Koa');
// const app=new Koa();

// app.use(ctx=>{
//     ctx.body='练习使用Koa'; 
// });
// app.listen(3000);

// var sqldb = require('./sqldb');
// sqldb.sequelize.sync({force: false}).then(function() {
//     console.log("Server successed to start");
// }).catch(function(err){
//     console.log("Server failed to start due to error: %s", err);
// });


var Sequelize = require('sequelize');
var db = new Sequelize('test', 'root', '1qaz@WSX', {
    host: '10.25.24.72',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 1 },

    define: {
        freezeTableName: true, //模型名是否和数据库名称相同
        paranoid: true, //是否标记删除
        timestamps: true } });


db.User = db.import('./model/user.js');
db.Role = db.import('./model/role.js');
db.sync({ force: false }).then(function () {
    console.log("服务启动成功");
}).catch(function (err) {
    console.log("服务启动失败: %s", err);
});
//# sourceMappingURL=app.js.map
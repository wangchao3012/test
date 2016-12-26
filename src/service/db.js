const Sequelize = require('sequelize');
var config = require('config');
var db = {
    init: function () {



        // db.sequelize.sync({ force: false }).then(function () {

        //     console.log("服务启动成功");
        //     var dmu = {
        //         name: '张三' + new Date().getTime()
        //     };
        //     db.User.create(dmu).then(function (user) {
        //         console.log('添加用户：' + JSON.stringify(dmu));
        //     });
        // }).catch(function (err) {
        //     console.log("服务启动失败: %s", err);
        // });
    },
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),
    // User: this.sequelize.import('../model/user.js'),
    findById: async function (par) {
        let {model, id} = par;
        return await this.sequelize.model(model).findById(id).then(res => { return res.dataValues });
    }
}
db.User = db.sequelize.import('../model/user.js');


module.exports = db;
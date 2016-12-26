const Sequelize = require('sequelize');
const config = require('config');
var db = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),
    findById: async function (par) {
        let {model, id} = par;
        return await this.sequelize.model(model).findById(id).then(res => { return res.dataValues });
    }
}
db.User = db.sequelize.import('../model/user');
db.Role = db.sequelize.import('../model/role');
db.Menu = db.sequelize.import('../model/menu');

db.sync = function () {
    db.sequelize.sync({ force: false }).then(function () {
        console.info("%s   数据库同步成功", config.mysql.dbname);
    }).catch(function (err) {
        console.log("%s   数据库同步失败: %s", config.mysql.dbname, err);
    });
};

module.exports = db;
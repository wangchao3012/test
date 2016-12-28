const Sequelize = require('sequelize');
const config = require('config');
var dbUser = {
    sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),
    findById: async function (par) {
        let {model, id} = par;
        return await this.sequelize.model(model).findById(id).then(res => {
            return res ? res.dataValues : res;
        });
    },
    findOne: async function (par) {
        return await this.sequelize.model(par.m).findOne(par.opt).then(res => {
            return res ? res.dataValues : res;
        });
    }
}
dbUser.User = dbUser.sequelize.import('../model/user');
dbUser.Role = dbUser.sequelize.import('../model/role');
db.Menu = dbUser.sequelize.import('../model/menu');

dbUser.sync = function () {
    dbUser.sequelize.sync({ force: false }).then(function () {
        console.info("%s   数据库同步成功", config.mysql.dbname);
    }).catch(function (err) {
        console.log("%s   数据库同步失败: %s", config.mysql.dbname, err);
    });
};

module.exports = dbUser;
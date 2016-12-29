

const Sequelize = require('sequelize');
const config = require('config');
var dbBase = require('./dbBase');

let sequelize = new Sequelize(config.mysql.account.dbname, config.mysql.account.user, config.mysql.account.password, config.mysql.account.options);

sequelize.import('../model/user');
sequelize.import('../model/role');
sequelize.import('../model/menu');

class dbAccount extends dbBase {
    constructor() {
        super(sequelize);
    }
    sync() {

        this.sequelize.sync({ force: false }).then(function () {
            console.info("%s   数据库同步成功", config.mysql.account.dbname);

        }).catch(function (err) {
            console.log("%s   数据库同步失败: %s", config.mysql.account.dbname, err);
        });

    }
}

module.exports = dbAccount;
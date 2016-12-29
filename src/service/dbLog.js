const Sequelize = require('sequelize');
const config = require('config');
var dbBase = require('./dbBase');

var sequelize = new Sequelize(config.mysql.log.dbname, config.mysql.log.user, config.mysql.log.password, config.mysql.log.options);
sequelize.import('../model/exceptionLog');
class dbLog extends dbBase {
    constructor() {
        super(sequelize);
    }
    sync() {
        this.sequelize.sync({ force: false }).then(function () {
            console.info("%s   数据库同步成功", config.mysql.log.dbname);
        }).catch(function (err) {
            console.log("%s   数据库同步失败: %s", config.mysql.log.dbname, err);
        });
    }
}

module.exports = dbLog;
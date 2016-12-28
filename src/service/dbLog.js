const Sequelize = require('sequelize');
const config = require('config');
var dbBase = require('./dbBase');
class dbLog extends dbBase {
    constructor() {
        var sequelize = new Sequelize(config.mysql.log.dbname, config.mysql.log.user, config.mysql.log.password, config.mysql.log.options);
        super(sequelize);

        this.sequelize.import('../model/exceptionLog');

        this.sequelize.sync({ force: false }).then(function () {
            console.info("%s   数据库同步成功", config.mysql.dbname);
        }).catch(function (err) {
            console.log("%s   数据库同步失败: %s", config.mysql.dbname, err);
        });
    }
    sync() {
        this.sequelize.import('../model/exceptionLog');

        this.sequelize.sync({ force: false }).then(function () {
            console.info("%s   数据库同步成功", config.mysql.dbname);
        }).catch(function (err) {
            console.log("%s   数据库同步失败: %s", config.mysql.dbname, err);
        });

    }
}

module.exports = dbLog;
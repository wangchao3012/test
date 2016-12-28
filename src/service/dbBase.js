
const config = require('config');
class dbBase {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }
    //  sequelize: new Sequelize(config.mysql.dbname, config.mysql.user, config.mysql.password, config.mysql.options),

    async findById(par) {
        let {model, id} = par;
        
        return await this.sequelize.model(model).findById(id).then(res => {
            return res ? res.dataValues : res;
        });
    }
    async findOne(par) {
        return await this.sequelize.model(par.m).findOne(par.opt).then(res => {
            return res ? res.dataValues : res;
        });
    }
}
module.exports = dbBase;

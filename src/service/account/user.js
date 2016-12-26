const db = require('../db') 
const uuid = require('uuid/v4');

let User = {
    login: async function (m) {
        var mu = await db.findById({ model: 'user11', id: m.id });
        // var muu = await db.sequelize.model('user').findById(m.id).then(res =>
        // { return res.dataValues }
        // );
        throw '用户不存在'
        console.log('m::', m, mu);
        return mu
    }
}
module.exports = User;


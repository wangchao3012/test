

const Sequelize = require('sequelize');
const config = require('config');
var dbBase = require('./dbBase');
let db = {
    sequelize: new Sequelize(config.mysql.account.dbname, config.mysql.account.user, config.mysql.account.password, config.mysql.account.options)
}

db.User = db.sequelize.import('../model/user');
db.Role = db.sequelize.import('../model/role');
db.Menu = db.sequelize.import('../model/menu');
db.ThreeUser = db.sequelize.import('../model/threeUser');
// db.User.hasMany(db.ThreeUser, { foreignKey: 'userId', targetKey: 'id'  });

db.UserInRole = db.sequelize.import('../model/userInRole');
db.User.belongsToMany(db.Role, { 'through': db.UserInRole, foreignKey: 'userId', targetKey: 'id', });
db.Role.belongsToMany(db.User, { 'through': db.UserInRole, foreignKey: 'roleId', targetKey: 'id', });

db.RoleInMenu = db.sequelize.import('../model/roleInMenu');
db.Role.belongsToMany(db.Menu, { 'through': db.RoleInMenu, foreignKey: 'roleId', targetKey: 'id', });
db.Menu.belongsToMany(db.Role, { 'through': db.RoleInMenu, foreignKey: 'menuId', targetKey: 'id', });

class dbAccount extends dbBase {
    constructor() {
        super(db.sequelize);
    }
    sync() {

        this.sequelize.sync({ force: true }).then(function () {


            // let user = db.User.create({
            //     name: 'admin'
            // }).then(res => {

            //     db.UserInRole.createTag({ 'name': 'tag' }, { 'type': 0 });

                console.info("%s   数据库同步成功", config.mysql.account.dbname);

            // });

            // db.sequelize.transaction(t => {

            //     let user = db.User.create({
            //         name: 'admin'
            //     });
            //     user.setThreeUser
            //     user.addRole({
            //         name: '管理员'
            //     },
            //         {
            //             transaction: t
            //         })
            // });



            // user.createRole({
            //     name: '管理员'
            // }, { 'type': 0 });
            // Promise.all([
            //  let user=   db.User.create({
            //         name: 'admin'
            //     }),

            //     db.Role.create({
            //         name: '管理员'
            //     })
            // ]).then(res => {
            //     var user = res[0];
            //     var role = res[1];
            //     console.log('res::', res);
            //     user.setUserRoles(role);
            // });
        }).catch(function (err) {
            console.log("%s   数据库同步失败: %s", config.mysql.account.dbname, err);
        });

    }
}

module.exports = dbAccount;
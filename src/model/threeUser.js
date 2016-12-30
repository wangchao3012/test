'use strict'
// 第三方用户信息
const User = require('./user')
var ThreeUser = function (sequelize, DataTypes) {
    return sequelize.define('threeUser', {
        userId: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        openId: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        threeTypeId: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        nickname: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        sex: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        province: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    });
};
User.hasMany(ThreeUser, { foreignKey: 'userId', targetKey: 'id' });

module.exports = ThreeUser;
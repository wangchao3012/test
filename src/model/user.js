'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        // id:{
        //     type:DataTypes.INTEGER,
        //     primaryKey:true,
        //     // allowNull:false,
        //     autoIncrement:true 
        // },
        name: {
            comment: '姓名',
            type: DataTypes.STRING,
            defaultValue: ''
        },
        openId: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        userName: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        loweredUserName: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        head: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        mobile: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        roleIds: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        roleNames: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        salt: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
    });
};
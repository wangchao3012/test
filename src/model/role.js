'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
        name: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        code: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        sort: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        isLocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        remark: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    });
};
/// <reference path="../../NodeSnippet/typings/index.d.ts" />
'use strict';

module.exports = function (sequelize, DataTypes) {

    return sequelize.define('role', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1 },

        name: {
            type: DataTypes.STRING } });


};

module.exports = function (sequelize, DataTypes) {

    return sequelize.define('role', {
        name: {
            type: DataTypes.STRING } });


};
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('className', {
        colName: {
            type: DataTypes.STRING } });


};
//# sourceMappingURL=userInRole.js.map
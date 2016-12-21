'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        // id:{
        //     type:DataTypes.INTEGER,
        //     primaryKey:true,
        //     // allowNull:false,
        //     autoIncrement:true 
        // },
        name: {
            type: DataTypes.STRING },

        age: {
            type: DataTypes.INTEGER },

        sex: {
            type: DataTypes.INTEGER },

        height: {
            type: DataTypes.INTEGER },

        weight: {
            type: DataTypes.INTEGER } },

    {
        freezeTableName: true });

    return User;
};
//# sourceMappingURL=user.js.map
/**
 * Created by saurav on 26/2/15.
 */
/*
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Passenger =  sequelize.define ('passenger',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            journey_id: {type: DataTypes.INTEGER, allowNull: false},
            user_id: {type: DataTypes.INTEGER, allowNull: false},
            message: {type: DataTypes.TEXT, allowNull: true},
            status: {type: DataTypes.INTEGER, allowNull: false, default:0}
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'passenger',
            timestamps : false
        });

    return Passenger;
};

/*
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Request =  sequelize.define ('request',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            request_creator_id: {type: DataTypes.INTEGER, allowNull: false},
            journey_id: {type: DataTypes.INTEGER, allowNull: false},
            message: {type: DataTypes.TEXT, allowNull: true}
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'status',
            timestamps : false
        });

    return Status;
};/**
 * Created by rahul on 28/2/15.
 */

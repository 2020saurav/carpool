/*
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Place =  sequelize.define ('place',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            name: {type: DataTypes.STRING, allowNull: false}
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'place',
            timestamps : false
        });
    return Place;
};
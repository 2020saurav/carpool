/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Travel =  sequelize.define ('travel',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            from: {type: DataTypes.STRING(50), allowNull: false},
            to: {type: DataTypes.STRING(50), allowNull: false},
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'travel',
            timestamps : false
        });

    return Travel;
};
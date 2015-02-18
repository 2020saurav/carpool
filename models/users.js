/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Users =  sequelize.define ('users',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            first_name: {type: DataTypes.STRING(50), allowNull: false},
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'users',
            timestamps : false
        });

    return Users;
};
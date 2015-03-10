/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var User =  sequelize.define ('user',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            login: {type: DataTypes.STRING(20), allowNull:false},
            password: {type: DataTypes.STRING(255), allowNull:false},
            first_name: {type: DataTypes.STRING(20), allowNull: false},
            last_name: {type: DataTypes.STRING(20), allowNull:true},
            gender: {type: DataTypes.INTEGER, allowNull:true, default : 0 },
            photo_url: {type: DataTypes.TEXT, allowNull: true },
            email: {type: DataTypes.STRING(30), allowNull:false},
            contact: {type: DataTypes.INTEGER(10), allowNull: true},
            facebook: {type: DataTypes.STRING(255), allowNull: true},
            hall: {type: DataTypes.STRING(20), allowNull: true},
            is_active: {type: DataTypes.BOOLEAN, allowNull:false, default:true}
        },
        {
            freezeTableName : true,
            underscored : true,
            tableName : 'user',
            timestamps : false
        });

    return User;
};
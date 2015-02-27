/**
 * Created by pawan on 27/2/15.
 */
/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|Model}
 */
module.exports = function(sequelize, DataTypes) {
    var Journey =  sequelize.define ('journey',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            creator_id: {type: DataTypes.INTEGER, allowNull: false},
            source: {type: DataTypes.INTEGER, allowNull: false},
            destination: {type: DataTypes.INTEGER, allowNull: false},
            date: {type: DataTypes.DATE, allowNull: false},
            mode: {type: DataTypes.STRING(20), allowNull: false},
            max_capacity: {type: DataTypes.INTEGER, allowNull: false},
            other_info: {type: DataTypes.STRING(255), allowNull: true},
            gathering_place: {type: DataTypes.STRING(20), allowNull: false},
            total_fare: {type: DataTypes.INTEGER, allowNull: false},
            booked: {type: DataTypes.BOOLEAN, allowNull: false }
        },
    {
        freezeTableName : true,
            underscored : true,
        tableName : 'journey',
        timestamps : false
    });
    return Journey;
};

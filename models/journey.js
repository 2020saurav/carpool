/**
 * Created by pawan on 27/2/15.
 */
module.exports = function(sequelize, DataTypes) {
    var Journey =  sequelize.define ('journey',
        {
            id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            creator_id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement:true},
            source: {type: DataTypes.STRING(20), allowNull: false},
            destination: {type: DataTypes.STRING(20), allowNull: false},
            date: {type: DataTypes.INTEGER, allowNull: false},
            departure_time: {type: DataTypes.INTEGER, allowNull: false},
            mode: {type: DataTypes.STRING(10), allowNull:false},
            max_capacity: {type: DataTypes.INTEGER, allowNull:false},
            total_fare: {type: DataTypes.INTEGER, allowNull:false},
            booked: {type: DataTypes.BOOLEAN, allowNull:false},
            gathering_place: {type: DataTypes.STRING(30), allowNull: true},
            other_info: {type: DataTypes.INTEGER, allowNull:true}

,        }
    {
        freezeTableName : true,
            underscored : true,
        tableName : 'journey',
        timestamps : false
    });

    return Journey;
};
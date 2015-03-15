var model = require('../models/index');
var userModel = model.sequelize.models.user;
var passengerModel = model.sequelize.models.passenger;
var journeyModel = model.sequelize.models.journey;

userModel.hasMany(passengerModel, {foreignKey:"user_id"});
passengerModel.belongsTo(userModel,{foreignKey:"user_id"})

var PENDING = 0;
var CONFIRMED = 1;
var CANCELLED = 2;
var IGNORED = 3;

module.exports = function(req, res) {
    var userId = req.session.userId;
    var pendingPassengers = [];
    var jIds = [];
    journeyModel.findAll({
        where:{
            creator_id : userId
            // TODO add time condition. time > now
        }
    }).then(function(journies) {
        if(journies)
        {
            for(var i=0; i<journies.length; i++)
            {
                jIds.push(journies[i].id)
            }
            passengerModel.findAll({
                where:{
                    journey_id : jIds
                },
                include:[
                    {model : userModel}
                ]
            }).then(function (passengers) {
                if(passengers)
                {
                    for(var p=0; p<passengers.length; p++)
                    {
                        if(passengers[p].status == PENDING)
                        {
                            pendingPassengers.push(passengers[p])
                        }
                    }
//                    res.send(passengers)
                    res.render("pendingRequests",{"session" : req.session, "passengers":pendingPassengers})
                }
                else
                {
                    console.log("error")
                }

            })
        }
        else
        {
            console.log("sfsf")
        }
    })

};
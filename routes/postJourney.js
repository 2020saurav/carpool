/**
 * Created by pawan on 12/3/15.
 */
var model = require('../models/index');

var userModel = model.sequelize.models.user;

module.exports = function(req, res) {
    var source = req.body.source;
    var destination = req.body.destination;
    if(source==destination)
    {
        res.redirect("/journey?error=Please Enter correct source and destination")
    }
    else{
            userModel.create({
                    "source" : req.body.source,
                    "destination" : req.body.destination,
                    "mode" : req.body.mode,
                    "max_capacity" : req.body.maxCapacity,
                    "other_info" : req.body.otherInfo,
                    "gathering_place" : req.body.gatheringPlace,
                    "total_fare" : req.body.totalFare,
                    "is_booked" : req.body.isBooked
                }
            ).then( function(u) {
                    if(u)
                    {
                        // if successfully entered data in database, set session.
                        req.session.userId = u.id;
                        req.session.journeyId = u.journey_id;
                        req.session.source = u.source;
                        res.session.destination = u.destination;
                        res.session.mode = u.mode;
                        res.session.maxCapacity = u.max_capacity;
                        res.session.totalFare = u.total_fare;
                        res.session.gatheringPlace = u.gathering_place;
                        res.session.isBooked = u.is_booked;
                        res.session.otherInfo = u.other_info;
                        res.redirect("/");
                    }
                    else
                    {
                        // TODO error
                        console.log(u)
                    }
                });
        }
    };


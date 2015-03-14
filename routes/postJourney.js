/**
 * Created by pawan on 12/3/15.
 */
var model = require('../models/index');

var journeyModel = model.sequelize.models.journey;

module.exports = function(req, res) {
    var source = req.body.source;
    var destination = req.body.destination;
    if(!req.session.userId)
    {
        res.redirect("/login");
    }
    else
    {
        if(source==destination)
        {
            res.redirect("/journey?error=Please Enter correct source and destination")
        }
        else
        {
            journeyModel.create({
                    "creator_id": req.session.userId,
                    "source" : req.body.source,
                    "destination" : req.body.destination,
                    "departure_time":10000, // TODO get this value
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
                        // TODO show confirmation message
                        res.redirect("/?success=confirm");
                    }
                    else
                    {
                        // TODO error
                        console.log(u)
                    }
                });
        }
    }
};


/**
 * Created by pawan on 15/3/15.
 */
var model = require('../models/index');

var passengerModel = model.sequelize.models.passenger;
module.exports = function(req, res) {
    var userId = req.session.userId;
    //take the journey_id of this particular journey
    var journeyId = req.body.journeyId;

    passengerModel.create({
        "journey_id" : journeyId,
        "user_id" : userId,
        "message" : req.body.message,
        "status" : 0
    }).then(function(passenger){
        if(passenger){
            //TODO confirmation mail/notification to both parties
            res.redirect("/?success=Journey request successful")
        }
        else{
            res.redirect("/?error=Journey request failed")
        }
    })



//    var max_capacity =
//    passengerModel.findAll({
//        where :{
//            //search all passengers corresponding to this journey_Id
//            // from passenger table
//            "journey_id" : journeyId
//        }
//        // return the count of total users corresponding to this
//        // journey.
//    }).then(function(count){
//        if(count < max_capacity){
//            requestModel.create({
//                "request_creator_id" : userId,
//                "journey_id" : journeyId,
//                "message" : req.body.message
//            }
//        ).then(function(success){
//            if(success){
//                passengerModel.create({
//                    "journey_id" : journeyId,
//                    "user_id" : userId
//                    //"status" =
//                }
//            }
//            else {
//                res.send("something went wrong please try again")
//            }
//        ).then(function())
//        })
//            //insert the data in passenger table
//        }
//        else {
//            res.send("sorry maximum capacity of this journey is over")
//        }
//    })
//
//    //now check the count < max_capacity
//    // if true
//        // insert the data in passenger table
//        // send the request of user to creator of journeyy including message
//        // by mail + when creator login his/her acc. he/she should able to
//        // see the request
//
//    // else
//        // send sorry message to user that
//        // sorry max capacity of this journey is already full you may
//        // create new journey. and send him/her to create new joureny button

}


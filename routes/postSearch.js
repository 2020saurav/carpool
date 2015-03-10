var model = require('../models/index');

var journeyModel = model.sequelize.models.journey;
var placeModel = model.sequelize.models.place;

module.exports = function(req, res) {
    var toCityId = req.body.to;
    var fromCityId = req.body.from;

    if(toCityId==fromCityId)
    {
        // TODO complete this
    }

    var toCity="";
    var fromCity="";
    placeModel.findOne({
        where : {
            "id" : toCityId
        }
    }).then(function(city){
        if(city)
        {
            toCity = city.name;
            placeModel.findOne({
                where : {
                    "id" : fromCityId
                }
            }).then(function(city){
                if(city)
                {
                    fromCity = city.name;
                    // now both to and from city names are available : may use to display.
                    // use IDs to search in journey table
                    res.send("You want to go from " + fromCity + " to "+toCity);
                    // TODO : now call journeyModel.findAll where to AND from city IDs match and get all such rows
                    // pass the results to searchresult.jade . In searchresult.jade, keep a for loop to unroll the journies.
                }
                else
                {
                    res.send("City does not exist");
                }
            });
        }
        else
        {
            res.send("City does not exist");
        }
    });
};

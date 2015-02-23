var model = require('../models/index');

var travelModel = model.sequelize.models.travel;

module.exports = function(req, res)
{
    var toCity = req.body.toCity;
    var fromCity = req.body.fromCity;
    travelModel.create({
    	"to" : toCity,
    	"from" : fromCity
    }).success(function (t) {
    	res.redirect('/travel');
    })
};
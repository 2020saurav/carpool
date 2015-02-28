var model = require('../models/index');

var travelModel = model.sequelize.models.travel;

module.exports = function(req, res)
{
    travelModel.findAll().success(function(t){
    	res.render('travelView',{
    		"values" : t
    	})
    })
};
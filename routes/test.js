var model = require('../models/index');

var userModel = model.sequelize.models.user;

module.exports = function(req, res)
{
    userModel.findAll().success(function(users){
        console.log(users);
        res.send(users);
////        res.render('travelView',{
////            "values" : t
////        })
    })
};
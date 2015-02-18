var model = require('../models/index');

var userModel = model.sequelize.models.users;

module.exports = function(req, res)
{
    var firstName = req.body.firstName;
    userModel.create({
        "first_name" : firstName
    }).success(function(user) {
        console.log("User Created: " + user.first_name);
        res.redirect('/');
    })
};
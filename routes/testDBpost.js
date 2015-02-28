var model = require('../models/index');

var userModel = model.sequelize.models.users;

module.exports = function(req, res)
{
    var firstName = req.body.firstName;
    var middleName = req.body.middleName;
    var lastName = req.body.lastName;
    userModel.create({
        "first_name" : firstName,
        "middle_name" : middleName,
        "last_name" : lastName
    }).success(function(user) {
        console.log("User Created: " + user.first_name + user.middle_name + user.last_name);
        res.redirect('/');
    })
};
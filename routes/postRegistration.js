/**
 * Created by pawan on 4/3/15.
 */
var model = require('../models/index');

var userModel = model.sequelize.models.user;

module.exports = function(req, res) {
    var login = req.body.username;
    var password = req.body.password;
    userModel.find({
        where: {
            login: login,
            password: password
        }
    }).then(function (user) {
        if(user) {
            res.redirect("/registration");
            // lost other data too
            // how to get rid of this?
        }
        else
            req.session.login = user.login;
            req.session.userId = user.id;
            req.session.firstName = user.first_name;
            req.session.lastName = user.last_name;
            req.session.photoURL = user.photo_url;
            res.redirect("/");
        })
}

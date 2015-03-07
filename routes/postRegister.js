/**
 * Created by pawan on 4/3/15.
 */
var model = require('../models/index');

var userModel = model.sequelize.models.user;

module.exports = function(req, res) {
    var login = req.body.login;
    var password = req.body.password;
    var password2 = req.body.password2;
    if(password != password2)
    {
        res.redirect("/register?error=PasswordsDoNotMatch")
    }
    userModel.find({
        where: {
            login: login
            // TODO add email condition using OR
        }
    }).then(function (user) {

        if(user) {
            res.redirect("/register?error=LoginAlreadyExists");
            // TODO attach the form data back to autofill the form.
        }
        else
        {
            // Enter in database and then set session
            userModel.create({
                    "login" : req.body.login,
                    "password" : req.body.password,
                    "first_name" : req.body.firstName,
                    "last_name" : req.body.lastName,
                    "gender" : req.body.gender,
                    "photo_url" : req.body.photoURL,
                    "email" : req.body.email,
                    "contact" : req.body.contact,
                    "facebook" : "getThisValue",
                    "hall" : req.body.hall,
                    "is_active" : true
                }
            ).then(function(u) {
                if(u)
                {
                    // if successfully entered data in database, set session.
                    req.session.login = u.login;
                    req.session.userId = u.id;
                    req.session.firstName = u.first_name;
                    req.session.lastName = u.last_name;
                    req.session.photoURL = u.photo_url;
                    res.redirect("/");
                }
                else
                {
                    // TODO error
                    console.log(u)
                }
            });
        }
    })
};

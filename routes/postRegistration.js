/**
 * Created by pawan on 4/3/15.
 */
var model = require('../models/index');
var userModel = model.sequelize.models.user;
module.exports = function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var photoUrl = req.body.photoURL;
    var gender = req.body.gender;
    var contact = req.body.contact;
    var email = req.body.email;
    var hall = req.body.hall;
    var login = req.body.login;
    var password = req.body.password;
    //var facebook  = NULL;
    //var isActive = NULL;
    userModel.find({
        where: {
            login: login
        }
    }).then(function (user) {
        if(user)
        {
            res.redirect("/registration?message=Username already exists");
        }
        else
        {
            //i have save all entries in database
            userModel.create({
                "first_name" : firstName,
                "last_name" : lastName,
                "gender" : gender,
                "photo_url" : photoUrl,
                "contact" : contact,
                "email" : email,
                "hall" : hall,
                "login" : login,
                "password" : password
                //facebook authentication key ??
                //is active ??
            }).then(function(){
                req.session.login = user.login;
                req.session.userId = user.id;
                req.session.firstName = user.first_name;
                req.session.lastName = user.last_name;
                req.session.photoURL = user.photo_url;
                res.redirect("/");
            })
        }

    })
}

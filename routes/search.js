var model = require('../models/index');
var placeModel = model.sequelize.models.place;
var url = require('url');

module.exports = function(req, res) {
    var urlParts = url.parse(req.url, true);
    var success = urlParts.query.success;
    var error = urlParts.query.error;
    placeModel.findAll().then(function (places) {
        if (places) {
            res.render('index', {
                "session": req.session,
                "places": places,
                "success" : success,
                "error" : error
            })
        }
        else {
            res.send("Check console log");
            console.log(places)
        }
    });
}
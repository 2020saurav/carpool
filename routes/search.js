var model = require('../models/index');
var placeModel = model.sequelize.models.place;

module.exports = function(req, res) {
    placeModel.findAll().then(function (cities) {
        if (cities) {
            res.render('index', {
                "session": req.session,
                "cities": cities
            })
        }
        else {
            res.send("Check console log");
            console.log(cities)
        }
    });
}
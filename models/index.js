var Sequelize = require('sequelize');
var config    = require('../config').db;  // we use node-config to handle environments

// initialize database connection

var sequelize = new Sequelize(config.database, config.username, config.password, {
    logging: false,
    maxConcurrentQueries: 100
});

// load models
var models = [
    'journey',
    'passenger',
    'place',
    'user'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// create tables in db if not exist:
//sequelize.sync({force:true})
sequelize.sync()
// force true will drop table.

module.exports.sequelize = sequelize;
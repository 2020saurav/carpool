var Sequelize = require('sequelize');
var config    = require('../config').db;  // we use node-config to handle environments

// initialize database connection

var sequelize = new Sequelize(config.database, config.username, config.password, {
    logging: false,
    maxConcurrentQueries: 100
});

// load models
var models = [
    'user',
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//sequelize.sync({force:true})
// create tables in db if not exist:
sequelize.sync()
// force true will drop table.

module.exports.sequelize = sequelize;
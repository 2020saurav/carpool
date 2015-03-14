var Sequelize = require('sequelize');
module.exports = {
    db : {
        host : 'localhost',
        database : 'carpool',
        username : 'root',
        password : 'root'
    },
    modelConnect : store = new Sequelize('carpool', 'root','root')
};
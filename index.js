var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(3000, function () {

    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port)

});
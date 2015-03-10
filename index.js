var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var  session = require("express-session");

app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret : "ddhjvgg",
    name : "carpoolCooke",
    resave : true,
    saveUninitialized : true
}));



app.get('/', function (req, res) {
    routes.search(req, res);
});

app.get('/search', function (req, res) {
    routes.search(req, res);
});

app.post('/search', function (req, res) {
    routes.postSearch(req, res);
});

app.get('/login', function (req, res) {
    routes.login(req, res);
});

app.post('/postLogin', function (req, res) {
    routes.postLogin(req, res);
});

app.get('/register', function (req, res) {
    routes.register(req, res);
});

app.post('/postRegister', function (req, res) {
    routes.postRegister(req, res);
});

app.get('/logout/', function(req,res) {
    req.session.destroy(function(err){
        if(err)
            console.log(err);
        else
            res.redirect('/');
    })
});


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

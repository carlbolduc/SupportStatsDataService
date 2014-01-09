var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.bodyParser());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ss');

var dailyTotalStatModel = require('./models/dailyTotalStat');
var dailyAgentStatModel = require('./models/dailyAgentStat');
var dailyAccountStatModel = require('./models/dailyAccountStat');

app.get('/', function(req, res){
    res.render('index', { title: 'Support Stats Data Service' });
});

// retrieve

app.get('/dailyTotalStats/today', function(req, res) {
    var now = new Date();
    dailyTotalStatModel.find({"date": {"$gte": new Date(now.getFullYear(), now.getMonth(), now.getDate())}}, function(err, result) {
        res.send(result[0]); // return 1 json object instead of an array of json object(s)
    });
});

app.get('/dailyTotalStats', function(req, res) {
    dailyTotalStatModel.find(function(err, result) {
        res.send(result);
    });
});

app.get('/dailyAgentStats/:name/today', function(req, res) {
    var now = new Date();
    dailyAgentStatModel.find({"name": req.params.name, "date": {"$gte": new Date(now.getFullYear(), now.getMonth(), now.getDate())}}, function(err, result) {
        res.send(result[0]); // return 1 json object instead of an array of json object(s)
    });
});

app.get('/dailyAgentStats', function(req, res) {
    dailyAgentStatModel.find(function(err, result) {
        res.send(result);
    });
});

app.get('/dailyAccountStats/:name/today', function(req, res) {
    var now = new Date();
    dailyAccountStatModel.find({"name": req.params.name, "date": {"$gte": new Date(now.getFullYear(), now.getMonth(), now.getDate())}}, function(err, result) {
        res.send(result[0]); // return 1 json object instead of an array of json object(s)
    });
});

app.get('/dailyAccountStats', function(req, res) {
    dailyAccountStatModel.find(function(err, result) {
        res.send(result);
    });
});

// create

app.post('/dailyTotalStats', function (req, res){
    var dailyTotalStat;
    dailyTotalStat = new dailyTotalStatModel({
        date: Date.now(),
        min: req.body.min,
        max: req.body.max
    });
    dailyTotalStat.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(dailyTotalStat);
});

app.post('/dailyAgentStats', function (req, res){
    var dailyAgentStat;
    dailyAgentStat = new dailyAgentStatModel({
        date: Date.now(),
        name: req.body.name,
        min: req.body.min,
        max: req.body.max
    });
    dailyAgentStat.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(dailyAgentStat);
});

app.post('/dailyAccountStats', function (req, res){
    var dailyAccountStat;
    dailyAccountStat = new dailyAccountStatModel({
        date: Date.now(),
        name: req.body.name,
        min: req.body.min,
        max: req.body.max
    });
    dailyAccountStat.save(function (err) {
        if (!err) {
            return console.log("created " + req.body.name);
        } else {
            return console.log(err);
        }
    });
    return res.send(dailyAccountStat);
});

// update

app.put('/dailyTotalStats/:id', function (req, res) {
    console.log(req.body.min);
    dailyTotalStatModel.findByIdAndUpdate(req.params.id, { date: Date.now(), min: req.body.min, max: req.body.max }, function(err, stat) { 
        if (!err) {
            console.log("updated");
        } else {
            console.log(err);
        }
        res.send(stat);
    });
});

app.put('/dailyAgentStats/:id', function (req, res) {
    dailyAgentStatModel.findByIdAndUpdate(req.params.id, { date: Date.now(), min: req.body.min, max: req.body.max }, function(err, stat) { 
        if (!err) {
            console.log("updated");
        } else {
            console.log(err);
        }
        res.send(stat);
    });
});

app.put('/dailyAccountStats/:id', function (req, res) {
    dailyAccountStatModel.findByIdAndUpdate(req.params.id, { date: Date.now(), min: req.body.min, max: req.body.max }, function(err, stat) { 
        if (!err) {
            console.log("updated");
        } else {
            console.log(err);
        }
        res.send(stat);
    });
});

app.listen(3000);
console.log('Listening on port 3000 bro');

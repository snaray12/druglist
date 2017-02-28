var path = require('path');
var express  = require('express');
var mongoose = require('mongoose');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var druginfoController = require('./druginfoController');
var drugsController = require('./drugsController');
var database = require('./config/database');

var app      = express();

var port = process.env.PORT || 8080;

mongoose.connect(database.url);

app.use(express.static(path.join(__dirname,'public'))); 
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/welcome', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/druginfo', druginfoController.get);
router.get('/druglist/:category', druginfoController.findByCategory);
router.post('/druginfo', druginfoController.add);
router.post('/drugs', drugsController.add);
router.get('/drugs/:name', drugsController.findByName);
router.get('/drugslist/', drugsController.get);

app.use('/api', router);

app.use('/', function(req, res){
	res.redirect('/api');
})

app.listen(port);
console.log('Magic happens on port ' + port);
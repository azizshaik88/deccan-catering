//bring in the express module


var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

//environment variable to determine whether in dev or prod mode
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//initialize Express application
var app = express();


//stylus
function compile(str, path) {
	return stylus(str).set('filename', path);
}




//configure Express view engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');

//stylus middleware config
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));

//tells Express any requests coming in that match up to /public dir contents to go ahead and serve the file
app.use(express.static(__dirname + '/public'));

//logging
app.use(logger('dev'));


//enable parsing url-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
//enable parsing json-encoded bodies
app.use(bodyParser.json());



//add route that delivers index page
app.get('*', function(req, res) {
    res.render('index.pug');
});







//start listening for requests
//var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
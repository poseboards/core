var express        = require('express');
var methodOverride = require('method-override');
var connect        = require('connect');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var mongoose       = require('mongoose');
var db             = require('./config/db')(mongoose);
var hbs            = require('./config/handlebars');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var logger         = require('morgan');
var User           = require('./models/user');
var usersRouter    = require('./routes/users-router');
var sessionsRouter = require('./routes/sessions-router');

var app = express();

var root = __dirname + '/public';
var lib = __dirname + '/lib';

// Handlebars
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

// Express Configuration
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'DJ Django D\'jenkins',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(root));
app.use(express.static(lib));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);


var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running on port: Andre Tré-th000usand");
});
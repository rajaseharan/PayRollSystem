var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var expressvalidator = require('express-validation');


var index = require('./routes/index');
var users = require('./routes/users');
var psign=require('./routes/psign');
var emp=require('./routes/emp');
var emp_menu=require('./routes/emp_menu');
var emp_view=require('./routes/addemp_view');
var ded=require('./routes/ded');
var allw=require('./routes/allw');
var gross_pay=require('./routes/gross_pay');
var search=require('./routes/search');
var update1=require('./routes/update1');
var view_details=require('./routes/view_details');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.set('public', path.join(__dirname, 'public'));

// app.get('/', routes.index);
// app.get('/login', routes.login);
// app.get('/register', routes.register);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
var l=
    {emp_name:'',
        emp_id:'',
        postion:'',
        phn_no:'',
        email_id:'',
        dob:''
    };


MongoClient.connect(url, function(err, db) {



    db.collection("Emp_Details").find({}).toArray( function (err, res) {
        if (err) throw err;

            console.log(res);


        db.close();
    });






    });

app.locals.empid;
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/psign',psign);
app.use('/addemp_view',emp_view);
app.use('/emp',emp);
app.use('/emp_menu',emp_menu);
app.use('/ded',ded);
app.use('/allw',allw);
app.use('/gross_pay',gross_pay);
app.use('/search',search);
app.use('/update1',update1);
app.use('/view_details',view_details);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors'); // 跨域访问
var mongoose = require('mongoose'); // 数据库连接

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 配置cors
app.use(cors({
	origin:['http://localhost:8080'],// 允许这个域的访问
	methods:['GET','POST'], // 只允许GET和POST请求
	alloweHeaders:['Conten-Type', 'Authoriztion'] // 只允许带这两种请求头的链接访问
}))

mongoose.connect("mongodb://localhost/EndProcess"); // 连接本地数据库EndProcess

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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

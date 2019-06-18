var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // 解析 cookie
var logger = require('morgan'); // 日志
const session = require('express-session')

// 引入路由
var blogRouter = require('./routes/blog');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 注册
app.use(logger('dev')); // 日志
app.use(express.json()); // content-type: json 格式
app.use(express.urlencoded({ extended: false })); // 
app.use(cookieParser()); // 解析cookie
app.use(session({
  secret: 'EwdsNl32_123#',
  cookie: {
    path: '/', // 默认 '/'
    httpOnly: true, // 禁止前端js操作cookie,只能后端操作
    maxAge: 24 * 60 * 60 * 1000, // 24h失效
  }
}));

// app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.use('/api/blog', blogRouter)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

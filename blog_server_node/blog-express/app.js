var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser'); // 解析 cookie
var logger = require('morgan'); // 日志
const session = require('express-session')
const ConnectRedis = require('connect-redis')(session)

// 全局添加Date方法
require('./utils/dateFormate')
// 引入路由
var travelRouter = require('./routes/travel-pwa-mock/index');
var testRouter = require('./routes/test');
var blogRouter = require('./routes/blog');
var todolistRouter = require('./routes/todolist');
var wxLittleBirdRouter = require('./routes/wx-litter-bird-server');
var userRouter = require('./routes/user');
var cmsRouter = require('./routes/cms');
var indexRouter = require('./routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 注册
const loggerOpt = process.env.NODE_ENV === 'development' ? 'dev' : 'combined';
const logFileName = path.join(__dirname, 'log', 'access.log')
const writeStream = fs.createWriteStream(logFileName, {
  flags: 'a' // a: append
});

app.use(logger( loggerOpt, {
  stream: loggerOpt === 'dev' ? process.stdout : writeStream
})); // 日志
app.use(express.json()); // content-type: json 格式
app.use(express.urlencoded({ extended: false })); // 
app.use(cookieParser()); // 解析cookie

// redis
const redisClient = require('./db/redis')
const redisSessionStore = new ConnectRedis({
  client: redisClient
})
app.use(session({
  secret: 'EwdsNl32_123#',
  resave: false, // 重新保存：强制会话保存即使是未修改的, 默认为true
  saveUninitialized: true, // 强制“未初始化”的会话保存到存储
  cookie: {
    path: '/', // 默认 '/'
    httpOnly: true, // 禁止前端js操作cookie,只能后端操作
    maxAge: 24 * 60 * 60 * 1000, // 24h失效
  },
  store: redisSessionStore // session 存到redis中
}));

// app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.use('', indexRouter)
app.use('/api/travel', travelRouter)

app.use('/api/test', testRouter)
app.use('/api/blog', blogRouter)

app.use('/api/birds', wxLittleBirdRouter)
app.use('/api/todos', todolistRouter)
app.use('/api/user', userRouter)
app.use('/api/cms', cmsRouter)

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

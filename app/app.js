const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const index = require('./routes/index');
const users = require('./routes/users');
const shops = require('./routes/shops');
const bills = require('./routes/bills');

const app = express();
const cors = require('cors');//TODO:跨域操作，上线后删除

//db
const DB_URL = 'mongodb://localhost/gp';
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);

mongoose.connect(DB_URL);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//TODO:跨域操作，上线后删除
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'gp',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
        url: DB_URL,
        collection: 'sessions'
    })
}));

//判定session中是否存在用户
app.use((req, res, next) => {
   let _user = req.session.user;

   if(_user){
       app.locals.user = _user;
   }else{
       delete app.locals.user;
   }
   next();
});

app.use('/', index);
app.use('/users', users);
app.use('/shops', shops);
app.use('/bills', bills);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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
  res.send({
      errCode: '100000',
      result: err
  });
});

module.exports = app;

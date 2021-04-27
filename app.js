let createError = require('http-errors');
let cookieSession = require('cookie-session')
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let loginRoute = require('./routes/login');

let app = express();
let port = 3000;

app.listen(port, function() {
  console.log('app started');
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRoute);

app.use(cookieSession({
  name: 'session',
  keys: ['dsawei*&DSA CZXJBSAUDHAS*D AS*YUDW*E&WQ*&SZUJ SAJHDAS&UY3u2y1 321gdsa6 1832 7218 7dsagbdsyaug23713y2 123 g21'],
  maxAge: 24 * 60 * 60 * 1000
}))


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

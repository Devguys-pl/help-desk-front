let cookieSession = require('cookie-session')
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
const loginRoutes = require('./routes/login');

let app = express();
let port = 3000;

app.listen(port, function() {
    console.log('app started');
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cookieSession({
  name: 'session',
  keys: ['YOURKEYS'],
  maxAge: 24 * 60 * 60 * 1000
}))

loginRoutes(app);

module.exports = app;

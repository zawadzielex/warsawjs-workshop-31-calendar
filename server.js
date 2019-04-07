const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const { PORT, SESSION_OPTIONS } = require('./constants');
const rootRouter = require('./rootRouter');
const autentication = require('./autentication');
const app = express();

app.use(morgan('dev'));

// express Session - expres nie posiada mechanizmu sesji, trzeba go dodac
app.use(session(SESSION_OPTIONS));

// passport init
app.use(passport.initialize());
app.use(passport.session());

app.use(autentication)

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(rootRouter)

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info( `express app running on port: ${app.get('port')}`);
});

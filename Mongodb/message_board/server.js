var express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      flash      = require('express-flash'),
      session    = require('express-session');

require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret',
    cookie: { maxAge: 60000 },
}));
app.use(flash());

require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log(`listening on port 8000`);
})
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('./config/mongoose'),
    path = require('path'),
    flash = require('express-flash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})
mongoose.Promise = global.Promise;
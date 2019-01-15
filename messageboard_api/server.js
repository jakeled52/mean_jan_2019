const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      port       = 8000;

require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.set(path.join('views', __dirname, 'views'));

require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})

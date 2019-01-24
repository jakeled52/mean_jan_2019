var session = require('express-session');
var express = require("express");
var bodyParser = require('body-parser');

var path = require("path");

var app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

var io = require('socket.io').listen(server);

var COUNTER = 0
io.sockets.on('connection', function(socket){
    socket.on('click_button', function(data){
        COUNTER++;
        console.log("+1 = " + COUNTER);
        io.emit('update_count', {count: COUNTER});
    });
    socket.on('click_reset_button', function(data){
        console.log("Count reset by = " + socket.id);
        COUNTER = 0;
        io.emit('reset_count', {count: COUNTER});
    })
});
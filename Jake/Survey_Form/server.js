var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    socket.on("random_number", function(data){
        console.log(data.message)
        socket.emit('updated_number', {number: Math.floor(Math.random()*1000 + 1)})
    })
    socket.on("posting_form", function(data){
        console.log("Data: {Name:" + data.name + " Location:"+data.location + " Language:" + data.language + " Comment: " + data.comment + "}");
        socket.emit('updated_message', {name: data.name, location: data.location, language: data.language, comment: data.comment})
    })
});
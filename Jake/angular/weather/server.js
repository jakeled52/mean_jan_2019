var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    port       = 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.set(path.join('views', __dirname, 'views'));
app.all("*",function(req,res){
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
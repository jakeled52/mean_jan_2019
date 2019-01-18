var express = require("express");
console.log("express is ", express);
var app = express();

app.set("views", __dirname + "/views");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response){
	console.log("request object: ", request);
	console.log("response object: ", response);

	response.render('cars');
});
app.get('/cats', function(request, response){
	console.log("request object: ", request);
	console.log("response object: ", response);

	response.render('cats');
});
app.get('/cars/new', function(request, response){
	console.log("request object: ", request);
	console.log("response object: ", response);

	response.render('new');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
var counts = require('../controllers/count_controller');

module.exports = function(app){
	app.get('/', counts.home_func);
	app.get('/add', counts.add_func);
	app.get('/reset', counts.reset_func);
};
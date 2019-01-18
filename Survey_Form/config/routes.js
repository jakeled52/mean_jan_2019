var survey_controller = require('../controllers/survey');

module.exports = function(app){
	app.get('/', survey_controller.index_func);
}
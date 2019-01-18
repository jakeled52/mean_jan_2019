var survey_controller = require('../controllers/survey');

module.exports = function(app){
	app.get('/', survey_controller.index_func);
	app.post('/results', survey_controller.submit_func);
	app.get('/results', survey_controller.data_func);
	app.get('/back', survey_controller.back_func)
}
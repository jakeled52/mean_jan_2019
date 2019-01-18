const persons = require('../controllers/persons.js');

module.exports = function(app) {

	app.get('/', persons.findBy);
	app.get('/add/:name', persons.create);
	app.get('/remove/:name', persons.remove);
	app.get('/:name', persons.show);
}

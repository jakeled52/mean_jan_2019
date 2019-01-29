const tasks = require('../controllers/tasks.js');

module.exports = function(app) {

	app.get('/tasks', tasks.all);
	app.get('/task/:id', tasks.show);
	app.post('/new', tasks.create);
	app.put('/edit/:id', tasks.update);
	app.delete('/destroy/:id', tasks.destroy);
}

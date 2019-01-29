var cakes_controller = require('../controllers/cakes_controller');

module.exports = function(app) {
  app.get('/cakes', cakes_controller.cakes);
  app.get('/cakes/:id', cakes_controller.cake_id);
  app.post('/cakes', cakes_controller.new);
  app.put('/cakes/:id', cakes_controller.cake_update_id);
  app.delete('/cakes/:id', cakes_controller.delete_cake);
}
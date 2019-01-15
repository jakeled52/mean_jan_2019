const messages_controller = require('../controllers/messages_controller');
const comments_controller = require('../controllers/comments_controller');

module.exports = function(app) {
  app.get('/', messages_controller.messages);
  app.post('/messages', messages_controller.create);

  app.post('/comments/:mid', comments_controller.create);
}

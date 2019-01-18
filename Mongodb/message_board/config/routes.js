const messages_controller = require('../controllers/message_controller');
const comments_controller = require('../controllers/comment_controller');

module.exports = function(app) {
  app.get('/', messages_controller.messages);
  app.post('/messages', messages_controller.create);

  app.post('/comments/:mid', comments_controller.create);
}
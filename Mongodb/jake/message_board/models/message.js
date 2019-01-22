var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  name: { type: String,
          minlength: [3, 'Name must be greater than 3'],
          maxlength: [10, 'Name must be less than 10'],
  },
  content: {
    type: String,
    minlength: [5, 'Message must be greater than 5']
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
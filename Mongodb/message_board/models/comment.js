var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Name must be greater than 3'],
    maxlength: [10, 'Name must be less than 10']
  },
  content: {
    type: String,
    minlength: [5, 'Comment must be greater than 5']
  },
}, {timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
}, {timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;

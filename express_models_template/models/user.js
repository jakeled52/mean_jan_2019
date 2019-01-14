const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: '',
  },
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;

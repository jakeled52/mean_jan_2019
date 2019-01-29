var mongoose = require('mongoose');

var CakeSchema = new mongoose.Schema({
  baker: {
    type: String,
    minlength: [2,"Name cant be one letter"],
    required: 'First name is required',
  },
  img_url: {
    type: String,
    required: 'Cake image url required',
  },
  reviews: [{type: String}],
  ratings: [{type: Number}],
}, {timestamps: true });

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
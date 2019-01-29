var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [3,"Product Title is NOT less than 3 letters"],
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  img: {
    type: String,
    required: [true, "Img url is required"],
  },
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoldSchema = new mongoose.Schema({
  Amount: { type: Number,
          default: 0,
  }, 
  location: { type:String,
  				default: '',
  			},
},{timestamps: true });

module.exports = mongoose.model('Gold', GoldSchema);

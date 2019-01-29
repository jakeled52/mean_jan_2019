const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  title: { type: String,
          default: '',
  }, 
  desc: { type:String,
  				default: '',
  			},
  completed: {type: Boolean,
  			  default: false,
  			},
  			
},{timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);

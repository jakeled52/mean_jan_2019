var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema ({
	title: {type: String},
	desc: {type: String,
		default: '',}
}, {timestamps: true})

module.exports = mongoose.model('Person', PersonSchema);

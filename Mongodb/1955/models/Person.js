var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema ({
	name: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Person', PersonSchema);

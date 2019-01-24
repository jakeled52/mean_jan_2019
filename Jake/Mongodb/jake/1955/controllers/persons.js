var mongoose = require('mongoose');
var Person = require('../models/Person');

module.exports = {
		findBy: function(req, res){
			Person.find({}, function(err, persons){
				if(err){
					res.json(err);
				}else {
					res.json({message: "Success", data: persons});
				}
			})
		},
		create: function(req, res) {
			Persona = new Person({name: req.params.name})
			Persona.save(function(err){
				if(err){
					res.send(err);
				}else {
					res.json({ message: 'Person saved', data: Person});
				}
			})	
		},
		remove: function(req, res) {
			Person.remove({name: req.params.name}, function(err, persons) {
				if(err) {
					res.send('error');
				} else {
					res.json({message: 'Person removed'});
				}
			})
		},
		show: function(req, res) {
			Person.find({name: req.params.name}, function(err, persons) {
				if(err) {
					res.send('error');
				} else {
					res.send(persons);
				}
			})
		}	
}
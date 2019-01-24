var mongoose = require('mongoose');
var Task = require('../models/Task');

module.exports = {
		all: function(req, res){
			Task.find({}, function(err, Tasks){
				if(err){
					res.json(err);
				}else {
					res.json({message: "Success", data: Tasks});
				}
			})
		},
		create: function(req, res) {
			Taska = new Task({title: req.params.title, desc: req.params.desc})
			Taska.save(function(err){
				if(err){
					res.send(err);
				}else {
					res.json({ message: 'Task saved', data: Task});
				}
			})	
		},
		destroy: function(req, res) {
			Task.remove({title: req.params.title, desc: req.params.desc}, function(err, Tasks) {
				if(err) {
					res.send('error');
				} else {
					res.json({message: 'Task removed'});
				}
			})
		},
		show: function(req, res) {
			Task.find({title: req.params.title, desc: req.params.desc}, function(err, Tasks) {
				if(err) {
					res.send('error');
				} else {
					res.send(Tasks);
				}
			})
		},	
		update: function(req, res){
			var task = Task.update({_id: req.params.id},{title: req.body.title, desc: req.body.desc, completed: req.body.complete},
			function(err){
			if(err){
				res.json({message:"Error updating task"})
			}
			else{
				res.json({message:"update Successfull", data: task})
			}
		  })
		}
}
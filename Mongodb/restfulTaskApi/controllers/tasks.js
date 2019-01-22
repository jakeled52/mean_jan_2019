var mongoose = require('mongoose');
var Task = require('../models/Task');

module.exports = {
		all: function(req, res){
			console.log("all!!!")
			Task.find({}, function(err, Tasks){
				if(err){
					res.json(err);
				}else {
					res.json({message: "Data given.", data: Tasks});
				}
			})
		},
		create: function(req, res) {
			Taska = new Task({title: req.body.title, desc: req.body.desc})
			console.log("made it")
			console.log(req.body);
			console.log(req.params);
			Taska.save(function(err){
				if(err){
					res.json({message:"Error creating task"})
				}else {
					res.json({ message: 'Task created', data: Taska});
				}
			})	
		},
		destroy: function(req, res) {
			Task.remove({_id: req.params.id}, function(err) {
				if(err) {
					res.josn({message: 'error destroying task'});
				} else {
					res.json({message: 'Task removed'});
				}
			})
		},
		show: function(req, res) {
			Task.find({_id: req.params.id}, function(err, tasks) {
				if(err) {
					res.json({message: "Error getting Task."});
				} else {
					res.json({message: "Here is the TAsk: ", data: tasks});
				}
			})
		},	
		update: function(req, res){
		   var tasks = Task.update({_id: req.params.id},{title: req.body.title, desc: req.body.desc, completed: req.body.completed},
			function(err, tasks){
			if(err){
				res.json({message:"Error updating task"});
			}
			else{
				res.json({message:"update Successfull", data: tasks});
			}
		  })
		}
}
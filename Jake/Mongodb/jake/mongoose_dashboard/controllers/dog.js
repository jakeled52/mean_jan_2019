var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Dog = require('../models/dog')
module.exports = {
    showAll: function(req, res) {
        Dog.find({}, function(err, dogs){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (dogs) {
                res.render('index', {dogs: dogs})
            }
        });
    },
    new: function(req, res){
        res.render('new')
    },
    create: function(req, res){
        var puppy = new Dog({name: req.body.name, description: req.body.description});
        puppy.save(function(err){
            if (err) {
                res.render('new', {errors: puppy.errors})
            } else {
                console.log("you have successfully added a dog")
                res.redirect('/')
            }
        })
    },
    showOne: function(req, res){
      Dog.findOne({_id:req.params.id}, function(err, dogs){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (dogs) {
                res.render('showOne', {dogs: dogs})
            }
        })
    },
    edit: function(req, res){
        Dog.findOne({_id:req.params.id}, function(err, dogs){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (dogs) {
                res.render('edit', {dogs: dogs})
            }
        })
    },
    update: function(req, res){
        Dog.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
    destroy: function(req, res){
        Dog.remove({_id: req.params.id}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
}

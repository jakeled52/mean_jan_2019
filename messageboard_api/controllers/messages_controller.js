const Message = require('../models/message');

module.exports = {

  messages: function(req, res){
    Message.find({}).
    populate('comments').
    exec(function(err, msgs) {
      res.json({errs: err, data: msgs});
    });
  },

  create: function(req, res){
    Message.create({name: req.body.name, content: req.body.content}, function(err, msgs) {
      res.json({errs: err, data: msgs});
    })
  }

}

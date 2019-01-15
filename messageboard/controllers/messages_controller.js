const Message = require('../models/message');

module.exports = {

  messages: function(req, res){
    Message.find({}).
    populate('comments').
    exec(function(err, msgs) {
      if (err) {
        return res.render('index', {all_msgs: []});
      }
      else {
        return res.render('index', {all_msgs: msgs});
      }
    });
  },

  create: function(req, res){
    Message.create({name: req.body.name, content: req.body.content}, function(err, msgs) {
      if (err) {
        for(var key in err.errors){
            req.flash('create_message', err.errors[key].message);
        }
      }
      return res.redirect('/');
    });
  }

}

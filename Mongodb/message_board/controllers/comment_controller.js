const Message = require('../models/message');
const Comment = require('../models/comment');

module.exports = {

  create: function(req, res){
    Message.findById(req.params.mid, function(err, msg) {
      if (err) {
        for(var key_error in err.errors){
            req.flash(err.errors[key_error].message);
        }
        return res.redirect('/')
      }
      else {
        Comment.create({name: req.body.name, content: req.body.content}, function(err, comment) {
          if (err) {
            for(var key_error in err.errors){
                req.flash(err.errors[key_error].message);
            }
          }
          else {
            msg.comments.push(comment);
            msg.save();
          }
          return res.redirect('/');
        });
      }
    });
  }

}
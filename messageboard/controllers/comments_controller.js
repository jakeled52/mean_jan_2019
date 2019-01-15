const Message = require('../models/message');
const Comment = require('../models/comment');

module.exports = {

  create: function(req, res){
    Message.findById(req.params.mid, function(err, msg) {
      if (err) {
        for(var key in err.errors){
            req.flash('create_comment', err.errors[key].message);
        }
        return res.redirect('/')
      }
      else {
        Comment.create({name: req.body.name, content: req.body.content}, function(err, cmt) {
          if (err) {
            for(var key in err.errors){
                req.flash('create_comment', err.errors[key].message);
            }
          }
          else {
            msg.comments.push(cmt);
            msg.save();
          }
          return res.redirect('/');
        });
      }
    });
  }

}

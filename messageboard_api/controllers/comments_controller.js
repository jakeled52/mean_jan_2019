const Message = require('../models/message');
const Comment = require('../models/comment');

module.exports = {

  create: function(req, res){
    Message.findById(req.params.cid, function(err, msg) {
      if (err) {
        res.json({errs: err, data: msg});
      }
      else {
        Comment.create({name: req.body.name, content: req.body.content}, function(err, cmt) {
          if (!err) {
            msg.comments.push(cmt);
            msg.save();
          }
          res.json({errs: err, data: cmt});
        });
      }
    });
  }

}

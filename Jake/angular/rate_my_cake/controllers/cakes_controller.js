var Cake = require('../models/cake');

module.exports = {
  cakes: function(req, res){
    Cake.find({}, function(err,cakes){
      res.json({err: err, cakes: cakes});
    });
  },

  new: function(req, res){
    var cake = new Cake({baker: req.body.baker, img_url: req.body.img_url});
    cake.save(function(err, cake) {
      res.json({err: err, cake: cake});
      console.log(cake);
    });
  },

  cake_id: function(req, res){
    Cake.findById(req.params.id, function(err,cake){
      res.json({err: err, cake: cake});
    });
  },
  
  cake_update_id: function(req, res){
    Cake.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: req.body.content, ratings: req.body.rating}}, function(err,cake){
      res.json({err: err, cake: cake});
    });
  },

  delete_cake: function(req, res){
    Cake.findByIdAndRemove(req.params.id,function(err,cake){
      res.json({err: err, cake: cake});
    });
  }
}
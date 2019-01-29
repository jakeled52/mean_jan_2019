var Product = require('../models/product');

module.exports = {
  products: function(req, res){
    Product.find({}, function(err,products){
      res.json({err: err, product: products});
    });
  },

  new: function(req, res){
    var product = new Product(req.body);
    product.save(function(err, product) {
      res.json({err: err, product: product});
    });
  },
  oneProduct: function(req, res){
    Product.findOne({_id: req.params.id}, function(err,product){
      res.json({err: err, product: product});
    });
  },
  deleteProduct: function(req, res){
    Product.findByIdAndRemove(req.params.id,function(err,product){
      res.json({err: err, product: product});
    });
  },
  productUpdate: function(req, res){
    Product.update({_id: req.params.id}, req.body, { runValidators: true }, function(err,product){
      res.json({err: err, product: product});
    });
  },

}

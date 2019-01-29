var product_controller = require('../controllers/products_controller');
var path = require('path');
module.exports = function(app) {
  app.get('/products', product_controller.products);
  app.post('/products', product_controller.new);
  app.delete('/products/:id', product_controller.deleteProduct);
  app.get('/products/:id', product_controller.oneProduct);
  app.put('/products/:id', product_controller.productUpdate);
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  })
}
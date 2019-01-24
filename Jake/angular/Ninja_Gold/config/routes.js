const goldController = require('../controllers/getGold.js');
module.exports = function(app){
    app.get('/',goldController.all);
    app.get('/farm', goldController.farmGold);
}
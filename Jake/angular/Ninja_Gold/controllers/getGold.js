var mongoose = require('mongoose');
var Gold = require('../models/Gold');

module.exports = {
    all: function(req,res){
        var player = new Gold;
    },
    farmGold: function(req, res){
        var farm = Math.floor(Math.random()*5)+2;
        console.log('you earned ',farm,' amount from the farm.') 
    },

}
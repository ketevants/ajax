var router = require('express').Router();

var db = require('../../models');
const Day = require('../../models/day.js');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');


router.get('/', function(req, res, next){
  Day.findAll({})
  .then(function(days){
   res.send(days)
  })
  .catch(next);
})


module.exports= router;

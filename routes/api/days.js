var router = require('express').Router();
var db = require('../../models').db;
const Day = require('../../models/day.js');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');


router.get('/', function(req, res, next){
  Day.findAll({})
  .then(function(days){
  //  res.send(days)
    res.send('You GOT all the days');
  })
  .catch(next);
})


router.post('/', function(req, res, next) {
  Day.create(req.body)
  .then(function(newDay) {
    res.send(newDay);
   //  res.send('You created a day!!');
  })
  .catch(next);
})

router.get('/:id', function(req, res, next) {
  Day.findById(req.params.id)
  .then(function(day) {
    res.send(day);
  })
  .catch(next);
})

router.post('/:id/restaurants', function(req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    },
    include: [Restaurant]
  })
  .then(function(day) {
    day.addRestaurants(req.body.dataId)
  })
  .catch(next);
})

router.post('/:id/hotels', function(req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    },
    include: [Hotel]
  })
  .then(function(day) {
    day.setHotel(req.body.dataId)
  })
  .catch(next);
})

router.post('/:id/activities', function(req, res, next) {
  Day.findById(req.params.id, {
    include: [Activity]
  })
  .then(function(day) {
    // res.send(day.activities);
    day.addActivity(req.body.dataId) // ?
  })
  .catch(next);
})

router.delete('/:id', function(req, res, next) {
  Day.findById(req.params.id)
  .then(function(day) {
    return day.destroy();
  })
  .catch(next)
})








module.exports = router;

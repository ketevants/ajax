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
  //  res.send(days)
    res.send('You GOT all the days');
  })
  .catch(next);
})

router.post('/', function(req, res, next) {
  Day.create(req.body)
  .then(function(newDay) {
    res.send(newDay);
    // res.send('You created a day!!');
  })
  .catch(next);
})

// $.ajax({
//   method: 'POST',
//   url: '/api/days',
//   data: {
//     number: 1
//   }
// })
// .then(function (responseData) {
//   console.log(responseData)
// })
// .catch(function (errorObj) {
//   // some code to run if the request errors out
// });

router.get('/:id', function(req, res, next) {
  Day.findById(req.params.id)
  .then(function(day) {
    res.send(day);
  })
  .catch(next);
})

router.post('/:id/restaurants', function(req, res, next) {
  Day.findById(req.params.id, {
    include: [Restaurant]
  })
  .then(function(day) {
    day.setRestaurant(req.body.restaurant.id); // not sure if correct
    // res.send(day.restaurants);
  })
  .catch(next);
})

router.post('/:id/hotels', function(req, res, next) {
  Day.findById(req.params.id, {
    include: [Hotel]
  })
  .then(function(day) {
    // res.send(day.hotels);
    day.setHotel(req.body.hotel.id) // ?
  })
  .catch(next);
})

router.post('/:id/activities', function(req, res, next) {
  Day.findById(req.params.id, {
    include: [Activity]
  })
  .then(function(day) {
    // res.send(day.activities);
    day.setActivity(req.body.activity.id) // ?
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

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'));
var Team = require('../models/team.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teams', function (req, res, next) {
  Team.findQ()
  .then(function(response) {
    res.json(response);
  })
  .catch(function(err) {
    res.send({'ERROR': err});
  });
});

router.get('/team/:id', function (req, res, next) {
  Team.findByIdQ(req.params.id)
  .then (function (response) {
    res.json(response);
  })
  .catch(function (err) {
    res.send({'ERROR': err});
  });
});

router.post('/teams', function (req, res, next) {
  var newTeam = new Team(req.body);
  newTeam.saveQ()
  .then(function(response) {
    res.json(response);
  })
  .catch(function (err) {
    res.json({'ERROR': err});
  });
});

router.put('/team/:id', function (req, res, next) {
  var update = req.body;
  var options = {new:true};
  Team.findByIdAndUpdateQ(req.params.id, update, options)
  .then (function (response) {
    res.json(response);
  })
  .catch(function (err) {
    res.json({'ERROR': err});
  });
});

router.delete('/team/:id', function (req, res, next) {
  Team.findByIdAndRemoveQ(req.params.id)
  .then(function (response) {
    res.json(response);
  })
  .catch(function(err) {
    res.json({'ERROR': err});
  });
});

module.exports = router;

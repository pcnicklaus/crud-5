var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Team = new Schema({
  name: String,
  city: String,
  squad: Number,
  sport: String
});

module.exports = mongoose.model('teams', Team);


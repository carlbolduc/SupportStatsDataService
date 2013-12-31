var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var dailyTotalStatSchema= new Schema({
    date: Date,
    min: Number,
    max: Number
});

module.exports = mongoose.model('dailyTotalStat', dailyTotalStatSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var dailyAccountStatSchema= new Schema({
    date: Date,
    name: String,
    min: Number,
    max: Number
});

module.exports = mongoose.model('dailyAccountStat', dailyAccountStatSchema);
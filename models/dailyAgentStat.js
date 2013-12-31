var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var dailyAgentStatSchema= new Schema({
    date: Date,
    name: String,
    min: Number,
    max: Number
});

module.exports = mongoose.model('dailyAgentStat', dailyAgentStatSchema);
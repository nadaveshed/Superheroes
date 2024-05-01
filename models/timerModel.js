const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
    hours: Number,
    minutes: Number,
    seconds: Number,
    message: String,
    url: String,
    superheroUUID: String,
    triggerTime: Date,
    triggered: Boolean,
});

module.exports = mongoose.model("Timer", TimerSchema);

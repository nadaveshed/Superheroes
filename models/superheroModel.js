const mongoose = require('mongoose');

const SuperheroSchema = new mongoose.Schema({
    name: String,
    alias: String,
    powers: [{ type: String }],
    details: String,
});

module.exports = mongoose.model("Superhero", SuperheroSchema);

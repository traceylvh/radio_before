var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Favorites = new Schema({
    title: {type: String},
    name: {type: String},
    length: {type: String},
    description: {type: String}
});

module.exports = mongoose.model("Favorites", Favorites);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    url: { type: String, required: true },
    description: { type: String, required: false },
});

module.exports = mongoose.model('Video',schema);

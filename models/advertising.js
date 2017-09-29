var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgUrl: { type: String, required: true}
});

module.exports = mongoose.model('Advertising',schema);

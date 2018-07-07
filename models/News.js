var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
   article_uuid: String,
   article_date: {type: Date, default: Date.now},
   article_title: String,
   article_content: String
});

module.exports = mongoose.model('News', NewsSchema);

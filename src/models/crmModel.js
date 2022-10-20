var mongoose = require('mongoose');
var schema = mongoose.Schema;

var blogSchema = new schema({
    title: String,
    author: String,
    body: String,
},
{
  timestamps: true
});

module.exports = blogSchema;
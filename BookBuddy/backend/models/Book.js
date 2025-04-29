const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  sellerName: String,
  contact: String
});

module.exports = mongoose.model('Book', BookSchema);

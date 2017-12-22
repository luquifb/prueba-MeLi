const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  product_Id: String,
  description: String,
  price: Number,
  category: String,
  image: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

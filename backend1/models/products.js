const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

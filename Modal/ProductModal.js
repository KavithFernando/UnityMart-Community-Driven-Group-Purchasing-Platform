const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  Description: {
    type: String,
    required: true,
  },

  Photo: {
    data: Buffer,
    contentType: String,
  },

  Seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("ProductModal", productSchema);

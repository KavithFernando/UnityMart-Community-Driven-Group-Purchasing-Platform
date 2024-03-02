const mongoose = require("mongoose");

const productModal = new mongoose.Schema({
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

  price: {
    type: Number,
    required: true,
  },

  discountPrice: {
    type: Number,
    required: true,
  },

  Description: {
    type: String,
    required: true,
  },

  Photo: {
    type: String,
    required: true,
  },

  Seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

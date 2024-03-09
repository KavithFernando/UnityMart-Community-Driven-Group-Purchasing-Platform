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

  reach: {
    type: Number,
    required: true,
  },

  current: {
    type: Number,
    default: 0,
  },

  discountPrice: {
    type: Number,
    required: true,
  },

  storePrice: {
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

  Participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});

module.exports = mongoose.model("ProductModal", productSchema);

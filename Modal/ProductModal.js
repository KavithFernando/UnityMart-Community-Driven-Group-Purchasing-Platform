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

  description: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },

  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Virtual field for current/reach ratio
productSchema.virtual("currentReachRatio").get(function () {
  return this.current / this.reach;
});

module.exports = mongoose.model("ProductModal", productSchema);

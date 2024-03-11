const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  bORs: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("UserModal", userSchema);

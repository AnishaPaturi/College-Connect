const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  available: Boolean
});

module.exports = mongoose.model("MenuItem", menuItemSchema);

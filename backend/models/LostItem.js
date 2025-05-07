const mongoose = require("mongoose");

const lostItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  reportedBy: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("LostItem", lostItemSchema);

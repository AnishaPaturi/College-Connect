const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("News", newsSchema);

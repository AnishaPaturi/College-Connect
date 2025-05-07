const mongoose = require("mongoose");

const peerHelpSchema = new mongoose.Schema({
  subject: String,
  description: String,
  studentName: String,
  contact: String,
  postedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("PeerHelp", peerHelpSchema);

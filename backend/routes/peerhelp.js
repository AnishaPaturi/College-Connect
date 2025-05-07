const express = require("express");
const router = express.Router();
const PeerHelp = require("../models/PeerHelp");

router.get("/", async (req, res) => {
  const requests = await PeerHelp.find();
  res.json(requests);
});

router.post("/", async (req, res) => {
  const newRequest = new PeerHelp(req.body);
  await newRequest.save();
  res.status(201).json(newRequest);
});

module.exports = router;

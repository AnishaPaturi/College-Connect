const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch events." });
  }
});

// Create a new event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Failed to create event." });
  }
});

module.exports = router;

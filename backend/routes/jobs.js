const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Failed to get jobs" });
  }
});

// Post a new job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: "Failed to create job" });
  }
});

module.exports = router;

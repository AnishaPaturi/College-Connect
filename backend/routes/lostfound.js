const express = require("express");
const router = express.Router();
const LostItem = require("../models/LostItem");

// Get all lost items
router.get("/", async (req, res) => {
  const items = await LostItem.find();
  res.json(items);
});

// Post a lost item
router.post("/", async (req, res) => {
  const newItem = new LostItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

module.exports = router;

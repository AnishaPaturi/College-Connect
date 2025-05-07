const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.get("/", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const item = new MenuItem(req.body);
  await item.save();
  res.status(201).json(item);
});

module.exports = router;

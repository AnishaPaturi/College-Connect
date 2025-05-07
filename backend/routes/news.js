const express = require("express");
const router = express.Router();
const News = require("../models/News");

router.get("/", async (req, res) => {
  const articles = await News.find();
  res.json(articles);
});

router.post("/", async (req, res) => {
  const article = new News(req.body);
  await article.save();
  res.status(201).json(article);
});

module.exports = router;

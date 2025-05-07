const express = require("express");
const router = express.Router();
const axios = require("axios");

const NEWS_API_KEY = "6b08f92a6e3b476ea75f195bd9af467e";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${NEWS_API_KEY}`
    );
    res.json(response.data.articles);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch news");
  }
});

module.exports = router;
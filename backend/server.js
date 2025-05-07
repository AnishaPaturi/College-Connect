const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Route imports
const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");
const jobsRouter = require("./routes/jobs");
const lostRouter = require("./routes/lostfound");
const peerHelpRouter = require("./routes/peerhelp");
const newsRouter = require("./routes/news");
const canteenRouter = require("./routes/canteen");

// Use routes
app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/lost", lostRouter);
app.use("/api/peerhelp", peerHelpRouter);
app.use("/api/news", newsRouter);
app.use("/api/canteen", canteenRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

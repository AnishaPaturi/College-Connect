const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/login", require("./routes/auth"));
app.use("/api/signup", require("./routes/auth"));
app.use("/api/canteen", require("./routes/canteen"));
app.use("/api/events", require("./routes/events"));
app.use("/api/news", require("./routes/news"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/help", require("./routes/peerHelp"));
app.use("/api/lostfound", require("./routes/lostFound"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
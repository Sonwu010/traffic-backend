const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

// 🔥 IMPORTANT: use dynamic port (Render needs this)
const PORT = process.env.PORT || 3000;

// Log visitor
app.post("/log", (req, res) => {
  visitors.push({ time: new Date() });
  res.send({ status: "logged" });
});

// Send stats
app.get("/stats", (req, res) => {
  res.send({ total: visitors.length });
});

// Optional: test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

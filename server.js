const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];
let labels = [];

// 📌 Log visitor
app.post("/log", (req, res) => {
  const time = new Date().toLocaleTimeString();

  visitors.push(1);
  labels.push(time);

  if (visitors.length > 10) {
    visitors.shift();
    labels.shift();
  }

  res.send("Logged");
});

// 📊 Send stats
app.get("/stats", (req, res) => {
  res.json({
    labels: labels,
    visitors: visitors.map((_, i) => i + 1)
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));

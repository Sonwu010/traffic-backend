const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

// Log visitor
app.post("/log", (req, res) => {
  visitors.push({
    time: new Date()
  });
  res.send({ status: "logged" });
});

// Send stats
app.get("/stats", (req, res) => {
  res.send({
    total: visitors.length
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
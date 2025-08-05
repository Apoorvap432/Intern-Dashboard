const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Dummy intern data
const intern = {
  name: "Apoorva Panwar",
  referralCode: "apoorva2025",
  totalDonations: 15000
};

const leaderboard = [
  { name: "Apoorva", donations: 15000 },
  { name: "Riya", donations: 12000 },
  { name: "Rahul", donations: 10000 }
];

// Routes
app.get('/api/user', (req, res) => {
  res.json(intern);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));

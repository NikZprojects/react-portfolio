const express = require("express");
const cors = require("cors");
const data = require("/home/ubuntu/node/instagram-project/static/data/chemistrycocktails_production.json");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

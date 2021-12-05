const router = require("express").Router();
require("dotenv").config({ path: "../.env" });

const dataPath = process.env.CHEMISTRYCOCKTAILS_PATH;
//const dataPath = "./test.json";
let data = ["Failed to load resource"];

try {
  data = require(dataPath);
} catch {
  console.log("Chemistry Cocktails JSON file not found");
}

router.route("/").get((req, res) => {
  try {
    res.json(data);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

const fs = require("fs");
const express = require("express");
//const https = require("https");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const tokenSignInRouter = require("./routes/tokensignin");
const habitsRouter = require("./routes/habits");
const chemistryCocktailsRouter = require("./routes/chemistryCocktails");
const messagesRouter = require("./routes/mailServer");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/tokensignin", tokenSignInRouter);
app.use("/habits", habitsRouter);
app.use("/messages", messagesRouter);
app.use("/chemistrycocktails.json", chemistryCocktailsRouter);

mongoose.connect(process.env.HABIT_DB);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// for https in development:
// const cert = fs.readFileSync("../localhost.pem");
// const key = fs.readFileSync("../localhost-key.pem");
// const server = https.createServer({ key: key, cert: cert }, app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

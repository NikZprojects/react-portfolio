const router = require("express").Router();
let User = require("../models/user.model");
let UserHabits = require("../models/userHabits.model");
let Habit = require("../models/habit.model");
require("dotenv").config({ path: "../.env" });

const { OAuth2Client } = require("google-auth-library");

router.route("/").post((req, res) => {
  const token = req.body.id_token;
  const client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    User.find().then((users) => {
      let user = users.find((user) => user.userid === userid);
      if (user) {
        res.json(user);
      } else {
        const habits = [
          new Habit({
            name: "Click to Delete",
            deleteHabit: false,
            completionData: [],
          }),
        ];

        const newUserHabits = new UserHabits({
          userid,
          habits,
        });

        newUserHabits.save().then((userHabits) => {
          const name = payload["name"];
          const email = payload["email"];
          const picture = payload["picture"];
          const habitDataID = userHabits._id;

          const newUser = new User({
            userid,
            name,
            email,
            picture,
            habitDataID,
          });
          newUser.save().then((user) => {
            res.json(user);
          });
        });
      }
    });
  }
  verify().catch(console.error);
});

module.exports = router;

const router = require("express").Router();
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config({ path: "../.env" });

const emailcred = JSON.parse(process.env.EMAILCRED);

router.route("/").post((req, res) => {
  // TODO: Handle failed cases, failed recaptcha, failed send, etc

  async function sendMessage(message) {
    const verifyUser = async (recaptcha) => {
      try {
        const response = await axios.post(
          "https://www.google.com/recaptcha/api/siteverify",
          `secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${recaptcha}`
        );
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    try {
      const isHuman = await verifyUser(message?.recaptcha);
      //Can use isHuman.success (default) or isHuman.score > [0-1.0], where 0 is robot, 1 is human
      if (!isHuman?.success) {
        return res.status(400);
      }
      let transporter = nodemailer.createTransport({
        service: "hotmail",
        port: 5001, //587
        secure: false, // (true for 465)
        auth: {
          user: emailcred.user.toString(),
          pass: emailcred.pass.toString(),
        },
      });

      let info = await transporter.sendMail({
        from: `"NZP_messages" <${emailcred.user.toString()}>`,
        to: '"NikZprojects" <NikZprojects@gmail.com>',
        subject: `New Message from ${message.name}`,
        html: `<p>From: ${message.email}</p>
      <pre style="font-family:verdana">${message.message}</pre>`,
      });

      console.log("Message sent: %s", info.messageId);
      console.log(info.response);
      res.status(200).send("Success");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  }
  sendMessage(req.body);
});

module.exports = router;

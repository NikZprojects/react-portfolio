const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" });

const emailcred = JSON.parse(process.env.EMAILCRED);

const sendMessage = async (message) => {
  async function main() {
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
  }

  main().catch(console.error);
};

router.route("/").post((req, res) => {
  try {
    sendMessage(req.body);
    res.status(200);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

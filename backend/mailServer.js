const fs = require("fs");
const express = require("express");
const cors = require("cors");
const emailcred = require("./emailcred.json");
const nodemailer = require("nodemailer");

const sendMessage = (message) => {
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

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    sendMessage(req.body);
    res.status(200);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

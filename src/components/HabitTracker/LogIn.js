import React, { useEffect } from "react";
const axios = require("axios");

export const LogIn = ({ setUser }) => {
  useEffect(() => {
    async function handleCredentialResponse(response) {
      await axios
        .post(`${process.env.REACT_APP_DOMAIN}/tokensignin`, response)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      window.google.accounts.id.prompt(); // also display the One Tap dialog
    };
  });

  return (
    <div className="wrapper">
      <h1> React Habit Tracker </h1>
      <div className="signInBox">
        <h3> Sign in to keep track of your habits: </h3>

        <center>
          <div id="buttonDiv"></div>
        </center>

        <br></br>
        <button className="buttonLink" onClick={() => setUser("guest")}>
          ...or try it out as a guest
        </button>
      </div>
    </div>
  );
};

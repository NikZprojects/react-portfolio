import React, { useEffect } from "react";
const axios = require("axios");

export const LogIn = ({ setUser }) => {
  function onSuccess(googleUser) {
    var id_token = { id_token: googleUser.getAuthResponse().id_token };

    axios
      .post("https://www.nikzprojects.com/apis/tokensignin", id_token)
      .then((res) => setUser(res.data));
  }

  function onFailure(error) {
    console.log(error);
  }

  useEffect(() => {
    window.gapi?.signin2.render("my-signin2", {
      scope: "profile email",
      width: "responsive",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }, [window.gapi]);

  useEffect(() => {
    if (!window.gapi?.signin2 && !localStorage.getItem("loaded")) {
      localStorage.setItem("loaded", true);
      window.location.reload();
    }
  }, [window.gapi]);

  return (
    <div className="wrapper">
      <h1> React Habit Tracker </h1>
      <div className="signInBox">
        <h3> Sign in to keep track of your habits: </h3>

        <center>
          <div id="my-signin2"></div>
        </center>

        <br></br>
        <button className="buttonLink" onClick={() => setUser("guest")}>
          ...or try it out as a guest
        </button>
      </div>
    </div>
  );
};

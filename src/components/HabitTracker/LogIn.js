import React, { useEffect, useState } from "react";
const axios = require("axios");

export const LogIn = ({ setUser }) => {
  const [loaded, setLoaded] = useState(false);
  async function onSuccess(googleUser) {
    var id_token = { id_token: googleUser.getAuthResponse().id_token };

    await axios
      .post(`${process.env.REACT_APP_DOMAIN}/tokensignin`, id_token)

      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }

  function onFailure(error) {
    console.log(error);
  }

  useEffect(() => {
    setTimeout(
      () => {
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
      },
      !loaded ? 500 : 1
    );
  });

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

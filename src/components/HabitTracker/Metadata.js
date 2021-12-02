import { Helmet } from "react-helmet-async";

const Metadata = () => (
  <Helmet>
    <script
      src="https://apis.google.com/js/platform.js?onload=renderButton"
      async
      defer
    ></script>
    <meta
      name="google-signin-client_id"
      content="193552029926-u74rfb1qh4pe5dnn8oqb15ku8hueojhm.apps.googleusercontent.com"
    />
    <link rel="icon" href="/static/reacthabittracker/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Habit Tracker built with MERN stack. Log in to save your habits."
    />
    <meta
      name="google-signin-client_id"
      content="193552029926-u74rfb1qh4pe5dnn8oqb15ku8hueojhm.apps.googleusercontent.com"
    />
    <link rel="manifest" href="/static/reacthabittracker/manifest.json" />

    <title>React Habit Tracker</title>
  </Helmet>
);

export default Metadata;

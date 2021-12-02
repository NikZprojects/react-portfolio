import { Helmet } from "react-helmet-async";

const Metadata = () => {
  const analytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-JQZPS42ZVX");
  };
  analytics();
  return (
    <Helmet>
      <meta charset="utf-8" />
      <script src="https://apis.google.com/js/platform.js"></script>

      <link rel="icon" href="/static/reactportfolio/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Currently focusing on building innovative
        API-driven React web applications. Recent Projects: React Habit Tracker.
        Instagram Search Bar. Food Blog Website."
      />
      <meta
        name="keywords"
        content="nikzprojects, nikz, projects, nik, z, nikzprojects.com, React, javascript, web development"
      />
      <link rel="manifest" href="/static/reactportfolio/manifest.json" />
      <title>Nik Zagarella | JavaScript Web Developer</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JQZPS42ZVX"
      ></script>
    </Helmet>
  );
};

export default Metadata;

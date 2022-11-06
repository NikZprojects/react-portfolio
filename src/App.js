import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import HabitTracker from "./pages/HabitTracker";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        >
          <div className="App">
            <Switch>
              <Route path="/HabitTracker">
                <HabitTracker />
              </Route>
              <Route path="/">
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </GoogleReCaptchaProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;

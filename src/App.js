import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import HabitTracker from "./pages/HabitTracker";

function App() {
  return (
    <HelmetProvider>
      <Router>
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
      </Router>
    </HelmetProvider>
  );
}

export default App;

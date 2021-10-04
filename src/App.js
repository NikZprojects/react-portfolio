import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import HabitTracker from "./pages/HabitTracker";

function App() {
  return (
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
  );
}

export default App;

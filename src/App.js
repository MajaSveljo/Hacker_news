import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./homaepage";
import CommentsPage from "./comments";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/item/:id" component={CommentsPage} />
      </Switch>
    </div>
  );
}

export default App;

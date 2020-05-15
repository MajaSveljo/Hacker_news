import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./pages/homaepage";
import CommentsPage from "./pages/comments";
import AskPage from "./pages/ask";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/item/:id" component={CommentsPage} />
        <Route exact path="/ask" component={AskPage} />
      </Switch>
    </div>
  );
}

export default App;

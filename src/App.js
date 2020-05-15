import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homaepage";
import CommentsPage from "./pages/comments";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/item/:id" component={CommentsPage} />
      </Switch>
    </div>
  );
}

export default App;

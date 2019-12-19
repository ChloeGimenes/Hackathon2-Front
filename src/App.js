import React from "react";
import Home from "./Pages/Home";
import NazeAnim from "./Pages/NazeAnim";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Naze" component={NazeAnim} />
    </Switch>
  );
}

export default App;

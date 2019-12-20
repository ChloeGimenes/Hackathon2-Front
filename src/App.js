import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Decollage from "./pages/Decollage";
import RocketMan from "./pages/RocketMan";
import Cockpit from "./pages/Cockpit";
import ErrorFound from "./pages/ErrorFound";
import NazeAnim from "./pages/NazeAnim";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Form' component={Form} />
      <Route path='/Decollage' component={Decollage} />
      <Route path='/RocketMan' component={RocketMan} />
      <Route path='/ErrorFound' component={ErrorFound} />
      <Route path='/Cockpit' component={Cockpit} />
      <Route path='/Naze' component={NazeAnim} />
    </Switch>
  );
}

export default App;

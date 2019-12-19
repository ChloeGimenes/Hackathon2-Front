import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cockpit from "./pages/Cockpit";
import ErrorFound from "./pages/ErrorFound";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/ErrorFound' component={ErrorFound} />
      <Route path='/Cockpit' component={Cockpit} />
    </Switch>
  );
}

export default App;

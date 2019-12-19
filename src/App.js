import React from "react";
import { Switch, Route } from "react-router-dom";

import Form from "./pages/Form";
import Decollage from "./pages/Decollage";

function App() {
  return (
    <Switch>
      <Route path='/Form' component={Form} />
      <Route path='/Decollage' component={Decollage} />
    </Switch>
  );
}

export default App;

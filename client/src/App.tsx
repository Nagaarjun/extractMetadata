import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getMetaData } from "./components/url";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={getMetaData} />
      {/* <Route exact path="/register" component={RegisterUser} />
      <Route path="/welcome" component={DashBoard} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;

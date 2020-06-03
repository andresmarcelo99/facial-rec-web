import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

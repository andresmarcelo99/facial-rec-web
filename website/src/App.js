import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import RegisterPage from "./components/pages/RegisterPage";
import ContactPage from "./components/pages/Contact";
import ThanksPage from "./components/pages/ThanksPage";
import PricesPage from "./components/pages/Prices";
import Profile from "./components/pages/Profile";

import Test from "./components/pages/Test";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/test" exact component={Test} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/thanks" exact component={ThanksPage} />
            <Route path="/prices" exact component={PricesPage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </div>{" "}
    </Provider>
  );
}

export default App;

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components/common";
import { Resume } from "./components/resume";
import { Home } from "./components/home";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </div>
  </Router>
);

export default App;

import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Header } from "./components/common";
import { Resume } from "./components/resume";
import { Home } from "./components/home";
import "./App.css";

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <Header />
          <TransitionGroup style={{ position: "relative" }}>
            <CSSTransition key={location.key} classNames="fade" timeout={200}>
              <Switch location={location}>
                <Route exact={true} path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                {/* Not found */}
                <Route />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
);

export default App;

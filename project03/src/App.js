import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/games/Games";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Dashboard} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

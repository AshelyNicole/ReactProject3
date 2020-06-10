import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/Home";
import GameCenter from "./components/games/Games";
import TicTacToe from "./components/games/TicTacToe";
import Tetris from "./components/games/Tetris";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Dashboard} />
            <Route path="/games" component={GameCenter} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/tetris" component={Tetris} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

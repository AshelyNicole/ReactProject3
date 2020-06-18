import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/auth/util/setAuthToken";
import { setCurrentUser, logoutUser } from "./components/auth/actions/authActions";
import { Provider } from "react-redux";
import store from "./components/auth/store"
import Login from "./components/auth/Login";
import Dashboard from "./components/Home";
import EnterChat from "./components/chat/EnterChat";
import ChatRoom from "./components/chat/ChatRoom";
import GameCenter from "./components/games/Games";
import TicTacToe from "./components/games/TicTacToe";
import Tetris from "./components/games/tetris/components/Tetris";
import Logout from "./components/skeleton/NavBar";
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component= {Login} />
              <PrivateRoute exact path="/home" component={Dashboard} />
              <Route path="/enterchat" exact component={EnterChat} />
              <Route path="/chatroom" exact component={ChatRoom} />
              <Route path="/games" component={GameCenter} />
              <Route path="/tictactoe" component={TicTacToe} />
              <Route path="/tetris" component={Tetris} />
              <Route path="/logout" component= {Logout} />
            </Switch>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;

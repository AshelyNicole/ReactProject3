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
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Route exact path="/" component= {Login} />
            <Switch>
              <PrivateRoute exact path="/home" component={Dashboard} />
            </Switch>
            <Route path="/enterchat" exact component={EnterChat} />
            <Route path="/chatroom" exact component={ChatRoom} />
            <Route path="/games" component={GameCenter} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/tetris" component={Tetris} />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;

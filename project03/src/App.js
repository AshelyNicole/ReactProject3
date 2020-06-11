import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/games/Games";
import JoinChat from "./components/chat/JoinChat";
import ChatRoom from "./components/chat/ChatRoom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Dashboard} />
            <Route path="/joinchat" exact component={JoinChat} />
            <Route path="/chatroom" exact component={ChatRoom} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Games from './games/Games';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/dashboard" component= {Dashboard} />
            <Route exact path="/games" component= {Games} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;

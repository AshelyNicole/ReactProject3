import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationForm from './forms/RegistrationForm';
import LoginForm from'./forms/LoginForm';
import LoginToggle from './LoginToggle';
import '../styles/Login.css';

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div className="login">
                        <div className="loginDesign"></div>
                        <div className="loginForm">
                            <LoginToggle />
                            <Route exact path="/" component={RegistrationForm} />
                            <Route path ="/login" component= {LoginForm} />
                        

                        </div>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}

export default Login;
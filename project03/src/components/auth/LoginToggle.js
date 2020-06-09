import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginToggle extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="toggle">
                    <NavLink to="/login"activeClassName="switcherActive" className="switcher">Sign In</NavLink>
                    <NavLink exact to="/" activeClassName="switcherActive" className="switcher">Sign Up</NavLink>                       
                </div>

                <div className="formTitle">
                    <NavLink to="/login" activeClassName="formLinkActive" className="formLink">Sign In</NavLink> or <NavLink exact to="/" activeClassName="formLinkActive"className="formLink">Sign Up</NavLink>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginToggle;
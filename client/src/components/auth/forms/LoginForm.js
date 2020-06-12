import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render(){
        return (            
            <div className="form">
                <form className="formOutline" onSubmit="this.handleSubmit">
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input type="email" id="email" className="formInput" name="email" />
                    </div>
                    <br />
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="password">Password</label>
                        <input type="password" id="password" className="formInput" name="password" />
                    </div>
                    <br />
                    <div className="formField">
                        <button className="loginButton btn">Sign In</button>
                        <Link to="/"className="memberLink">CREATE AN ACCOUNT</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegistrationForm extends Component {
    render(){
        return (            
            <div className="form">
                <form className="formOutline" onSubmit="this.handleSubmit">
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="formInput"  name="name" />
                    </div>
                    <br/>
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input type="email" id="email" className="formInput" name="email" />
                    </div>
                    <br/>
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="password">Password</label>
                        <input type="password" id="password" className="formInput" name="password" />
                    </div>
                    <label className="checkboxLabel">
                        <input className="checkbox" type="checkbox" name="agreed"/> I agree to the statements in <a href="" className="termsLink">terms of service</a>
                    </label>

                    <div className="formField">
                        <Link to = "/home" className="regButton btn">Sign Up</Link>
                        <Link to="/login" className="memberLink">ALREADY A MEMBER</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;

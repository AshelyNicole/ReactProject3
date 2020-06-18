import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";


class LoginForm extends Component {
    constructor() {
        super()
        this.state ={
            email: "",
            password: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            //sends user to home dashboard after logging in
            this.props.history.push("/home")
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData)
    }


    render(){
        const { errors } = this.state

        return (            
            <div className="form">
                <form className="formOutline" onSubmit="this.onSubmit">
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <span className="red-text">
                            {errors.emails}
                            {errors.emailnotfound}
                        </span>
                        <input type="email" id="email" className={classnames("formInput", {invalid: errors.email || errors.emailnotfound})} onChange={this.onChange} value={this.state.email} error={errors.email} />
                    </div>
                    <br />
                    <div clasName="formField">
                        <label className="formLabel" htmlFor="password">Password</label>
                        <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                        <input type="password" id="password" className={classnames("formInput", {invalid: errors.password || errors.passwordincorrect})} onChange={this.onChange} value={this.state.password} error={errors.password} />
                    </div>
                    <br />
                    <div className="formField">
                        <button className="loginButton btn"Link >Sign In</button>
                        <Link to="/"className="memberLink">CREATE AN ACCOUNT</Link>
                    </div>
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect( mapStateToProps, { loginUser }) (withRouter(LoginForm));

import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class RegistrationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onsubmit = e => {
        e.preventDefault()
        console.log("Hello")
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password,
        }
        this.props.registerUser(newUser, this.props.history)
    }

 

    render(){
        const { errors } = this.state

        return (       
            <React.Fragment>
                <div className="container form">
                    <form noValidate onSubmit={this.onsubmit}>
                        <div className="formField">
                            <label className="formLabel" htmlFor="name">Full Name</label>
                            <span className="red-text">{errors.name}</span>
                            <input type="text" id="name" className={classnames("formInput", { invalid: errors.name})}  onChange={this.onChange} value={this.state.name} error={errors.name} />
                        </div>
                        <br/>
                        <div className="formField">
                            <label className="formLabel" htmlFor="email">Email</label>
                            <span className="red-text">{errors.email}</span>
                            <input type="email" id="email" className={classnames("formInput", { invalid: errors.email})}  onChange={this.onChange} value={this.state.email} error={errors.email} />
                        </div>
                        <br/>
                        <div className="formField">
                            <label className="formLabel" htmlFor="password">Password</label>
                            <span className="red-text">{errors.password}</span>
                            <input type="password" id="password" className={classnames("formInput", { invalid: errors.password})}  onChange={this.onChange} value={this.state.password} error={errors.password} />
                        </div>
                        <br/>
                        <div className="formField">
                            <label className="formLabel" htmlFor="password2">Confirm Password</label>
                            <span className="red-text">{errors.password2}</span>
                            <input type="password" id="password2" className={classnames("formInput", { invalid: errors.password2})}  onChange={this.onChange} value={this.state.password2} error={errors.password2} />
                        </div>
                        

                        <div className="formField">
                            <button className="regButton btn" type="submit">Sign Up</button>
                            <Link to="/login" className="memberLink">ALREADY A MEMBER</Link>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

RegistrationForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(RegistrationForm));

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../auth/actions/authActions";
import '../styles/Dashboard.css';

class NavBar extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <h1 className="navbar-text">Title(TBD)</h1>
          <button
            className="navbar-toggler toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bars">
              <i className="fas fa-bars fa-1x" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/games" className="nav-link">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/enterchat" className="nav-link" >
                  Messaging
                </Link>
              </li>
              <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={this.onLogoutClick}>
                    Log Out
                  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect( mapStateToProps, { logoutUser })(NavBar);
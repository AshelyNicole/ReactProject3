import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../auth/actions/authActions";
import { Navbar, Nav } from "react-bootstrap";
import "./style/Nav.css";

class Navigation extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
    window.location = "/"
  }

  render () {
    return (
    <React.Fragment>
      <Nav>
        <Navbar.Brand>
          <Link to="/home" className="title">Clubhouse</Link>
        </Navbar.Brand>
        <Link to="/" onClick={this.onLogoutClick} className="nav-link">Log Out</Link>
      </Nav>
    </React.Fragment>
       
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect( mapStateToProps, { logoutUser })(Navigation);
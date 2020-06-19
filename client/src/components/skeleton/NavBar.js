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
      <Navbar expand="lg" className="nav">
        <Navbar.Brand>
          <Link to="/home" className="title">Clubhouse</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/home" className="nav-link">Home</Link>
            </Nav.Link>
            <Link to="/games" className="nav-link">Games</Link>
            <Nav.Link>
              <Link to="/enterchat" className="nav-link">Chat</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" onClick={this.onLogoutClick} className="nav-link">Home</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
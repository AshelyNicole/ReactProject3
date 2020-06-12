import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';

function NavBar() {
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
                <Link to="/joinchat" className="nav-link" href="#">
                  Messaging
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;
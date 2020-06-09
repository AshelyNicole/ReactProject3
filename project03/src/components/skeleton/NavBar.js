import React from "react";
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
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Messaging
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;
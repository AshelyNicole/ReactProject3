import React from "react";
import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

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

function Main() {
  return (
    <div className="row">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Game Center</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Tetris!
          </a>
          <a href="#" className="btn btn-primary">
            Tic-Tac-Toe
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Message</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import "./styles/Dashboard.css";
import games from "../assets/games.jpg";
import chattime from "../assets/chattime.jpg";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
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
        <img src={games} className="card-img-top" alt="games" />
        <div className="card-body">
          <h5 className="card-title">Game Center</h5>
          <p className="card-text">
            Click on one of the buttons below to play our games
          </p>
          <a href="#" className="btn btn-primary">
            Tetris!
          </a>
          <a href="#" className="btn btn-primary">
            Tic-Tac-Toe!
          </a>
        </div>
      </div>
      <div className="card">
        <img src={chattime} className="card-img-top" alt="chattime" />
        <div className="card-body">
          <h5 className="card-title">Message</h5>
          <p className="card-text">
            Click on the button below to start chatting with friends or family
          </p>
          <a href="#" className="btn btn-primary">
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="copyright">
      <p>© 2020 Dashboard</p>
    </footer>
  );
}
export default Dashboard;

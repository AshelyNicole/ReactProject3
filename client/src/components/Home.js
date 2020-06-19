import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";
import games from "../assets/games.jpg";
import chattime from "../assets/chattime.jpg";
import Footer from "./skeleton/Footer";
import NavBar from "./skeleton/NavBar";

class Dashboard extends Component {
  render() {
    return ( 
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );

  }
}



function Main() {

  console.log("Home is LOADED")
  return (
    <div className="row">
      <div className="card">
        <img src={games} className="card-img-top" alt="games" />
        <div className="card-body">
          <h5 className="card-title">Game Center</h5>
          <p className="card-text">
            Click below to play fun games
          </p>
          <Link to="/games" className="btn btn-primary">
            Game Time
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={chattime} className="card-img-top" alt="chattime" />
        <div className="card-body">
          <h5 className="card-title">Message</h5>
          <p className="card-text">
            Click on the button below to start chatting with friends or family
          </p>
          <Link to="/enterchat" className="btn btn-primary">
            Chat
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;

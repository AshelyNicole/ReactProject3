import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";
import games from "../assets/games.jpg";
import chattime from "../assets/chattime.jpg";
import Footer from "./skeleton/Footer";
import Navigation from "./skeleton/NavBar";
import { Card } from "react-bootstrap"; 


class Dashboard extends Component {
  render() {
    return ( 
      <div>
        <Navigation />
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
      <Card style={{ width: '18rem' }} className="tiles">
        <Card.Img variant="top" src={games} />
        <Card.Body>
          <Card.Title className="cardTitle">
            <Link to="/games"> Game Center </Link>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}className="tiles">
        <Card.Img variant="top" src={chattime} />
        <Card.Body>
          <Card.Title className="cardTitle">
            <Link to="/enterchat"> Chat App </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>  
  );
}


export default Dashboard;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import blocks from "../../assets/blocks.jpeg";
import xo from "../../assets/xo.jpeg";
import { Card } from "react-bootstrap";
import Footer from "../skeleton/Footer";
import NavBar from "../skeleton/NavBar";


class GameCenter extends Component {
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
  return (
    <div className="row">
      <Card style={{ width: '18rem' }} className="tiles">
        <Card.Img variant="top" src={xo} />
        <Card.Body>
          <Card.Title className="cardTitle">
            <Link to="/tictactoe"> Tic Tac Toe </Link>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}className="tiles">
        <Card.Img variant="top" src={blocks} />
        <Card.Body>
          <Card.Title className="cardTitle">
            <Link to="/tetris"> Tetris </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>  
  );
}


export default GameCenter;

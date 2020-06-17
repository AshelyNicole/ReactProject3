import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import blocks from "../../assets/blocks.jpeg";
import xo from "../../assets/xo.jpeg";
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
      <div className="card">
        <img src={xo} className="card-img-top" alt="games" />
        <div className="card-body">
          <h5 className="card-title">Tic Tac Toe</h5>
          <Link to="/tictactoe" className="btn btn-primary">
            Tic-Tac-Toe!
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={blocks} className="card-img-top" alt="chattime" />
        <div className="card-body">
          <h5 className="card-title">Tetris</h5>
          <p className="card-text">
            Click on the button below to start chatting with friends or family
          </p>
          <Link to="/tetris" className="btn btn-primary">
            Tetris!
          </Link>
        </div>
      </div>
    </div>
  );
}


export default GameCenter;

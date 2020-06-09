import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {
  return (
    <div>
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

// Header
function Header() {
  return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">TIC-TAC-TOE</h1>
            <h2 className="lead">Three-In-A-Row To Win!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// square
// value(props)
// onClick function (prop)
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// Creating the Board component
function Board() {
  // Creating the state of the board and filling an array with empty values
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  // Creating the turn state and setting the state to true so x's turn is first
  const [xTurn, setXTurn] = useState(true);

  // Creating handleClick function
  const handleClick = (index) => {
    // Making a copy of the board state
    const newSquares = [...boardSquares];
    // if the index of the board is fill or there is a winner, return null
    if (newSquares[index] || winner) {
      return null;
    }
    // mutate that copy, add X or O and calculate turns
    newSquares[index] = xTurn ? "X" : "O";
    // set the state of the board
    setBoardSquares(newSquares);
    // set the state of the turn
    setXTurn(!xTurn);
  };
  // create a render square function and pass in index
  const renderSquares = (index) => {
    return (
      // return a square, with the correct value and function
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };
  // Setting the turn order
  const winner = calculateWinner(boardSquares);
  const turnOrder = winner
    ? `Winner is: ${winner}`
    : `Next player: ${xTurn ? "X" : "O"}`;

  return (
    // Creating the board and rendering turn order
    <div className="board">
      <div className="turn-order">{turnOrder}</div>
      <div className="row">
        {renderSquares(0)} {renderSquares(1)} {renderSquares(2)}
      </div>
      <div className="row">
        {renderSquares(3)} {renderSquares(4)} {renderSquares(5)}
      </div>
      <div className="row">
        {renderSquares(6)} {renderSquares(7)} {renderSquares(8)}
      </div>
    </div>
  );
}

// function that calculates the winner
function calculateWinner(squares) {
  // array of winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // loop through winning combinations
  for (let i = 0; i < winningCombinations.length; i++) {
    const [one, two, three] = winningCombinations[i];
    // check to see if values in the squares fulfill the winning combinations; If so, return X or O; else, return nothing
    if (
      squares[one] &&
      squares[one] === squares[two] &&
      squares[two] === squares[three]
    ) {
      return squares[one];
    }
  }
  return null;
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2020 Game</p>
    </footer>
  );
}

export default TicTacToe;

import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {
  return (
    <div>
      <Board />
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
    // if the index of the board is fill, return
    if (newSquares[index]) {
      return;
    }
    // mutate that copy, add X or O and calculate turns
    newSquares[index] = xTurn ? "X" : "O";
    // set the state of the board
    setBoardSquares(newSquares);
    // set the state of the turn
    setXTurn(!setXTurn);
  };
  // create a render square function
  const renderSquares = (index) => {
    // take in an index
    return (
      // return a square, with the correct value and function
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  // Setting the turn order
  const turnOrder = `Next player: ${xTurn ? "X" : "O"}`;

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

// get our set of winning lines

// loop through this set
// check to see if values in our squares fulfill the winning requirement
// If so, return X or O
// else, return nothing

export default TicTacToe;

import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {
  return (
    <div>
      <Square />
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
  handleClick = (index) => {
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
    // create our board
  };

  // create a render square function
  // take in an index
  // return a square, with the correct value and function

  // Initiliaze status
}
// function that calculates the winner

// get our set of winning lines

// loop through this set
// check to see if values in our squares fulfill the winning requirement
// If so, return X or O
// else, return nothing

export default TicTacToe;

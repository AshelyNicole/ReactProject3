import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {
  return (
    <div>
      <Square />
    </div>
  );
}

function Square(props) {
  return <button className="square"></button>;
}
// square
// value(props)
// onClick function (prop)

// board
// boardState
// turnState
// handleClick
// copy of your board state
// if the index of the board is fill, return
// mutate that copy, and add X or O
// calculate next turn
// set the state of the baord
// set the state of the turn

// create our board

// create a render square function
// take in an index
// return a square, with the correct value and function

// Initiliaze status

// function that calculates the winner

// get our set of winning lines

// loop through this set
// check to see if values in our squares fulfill the winning requirement
// If so, return X or O
// else, return nothing

export default TicTacToe;

import React from "react";
import "./chatStyles/Header.css";

// Header for Message box; passing in and destructuring prop from Chatroom/
function Header({ chatRoom }) {
  return (
    <div className="header-two">
      <div className="container-header-one">
        <h3>Room: {chatRoom}</h3>
      </div>
      <div className="container-header-two"></div>
    </div>
  );
}

export default Header;

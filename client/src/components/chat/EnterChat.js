import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./chatStyles/EnterChat.css";

function EnterChat() {
  // Creating states
  // Line 32 onclick ternary operator to prevent user from clicking button without entering a username and room which would break the app;
  // Passing data as an url with to be able to query the url string with npm dependency query-string
  const [user, setUser] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  return (
    <div className="container-one">
      <div className="container-two">
        <h1 className="header-one">Enter Chat Room</h1>
        <div>
          <input
            className="input"
            placeholder="Enter your username"
            name="name"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-two"
            placeholder="Enter room #"
            name="room"
            type="text"
            onChange={(e) => setChatRoom(e.target.value)}
          />
          <Link
            onClick={(e) => (!user || !chatRoom ? e.preventDefault() : null)}
            to={`/chatroom?name=${user}&room=${chatRoom}`}
          >
            <button className="button" type="submit">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnterChat;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/JoinChat.css";

function JoinChat() {
  // Creating states
  const [user, setUser] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  // line 31 passing data as a url with query string npm package, able to input parameters with ?; also teranary operator to prevent user from clicking button if the user has not specified the name or the room which would break the app
  return (
    <div className="container-one">
      <div className="container-two">
        <h1 className="header">Join Chat Room</h1>
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
            to={`/joinchat?user=${user}&chatRoom=${chatRoom}`}
          >
            <button className="button" type="submit">
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinChat;

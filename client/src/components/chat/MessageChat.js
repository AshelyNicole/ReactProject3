import React from "react";
import "./chatStyles/MessageChat.css";

// Passing in props from ChatMessages; sending user message
function MessageChat({ newMessage: { user, text }, username }) {
  let currentUserMessage = false;

  if (user === username) {
    currentUserMessage = true;
  }

  // Render if sent by current user; if not render else
  return currentUserMessage ? (
    <div className="container-message">
      <p className="user-name">{username}</p>
      <div className="chatbox-message">
        <p className="chat-message">{text}</p>
      </div>
    </div>
  ) : (
    <div className="container-message">
      <div className="chatbox-message">
        <p className="chat-message">{text}</p>
      </div>
      <p className="user-name">{user}</p>
    </div>
  );
}

export default MessageChat;

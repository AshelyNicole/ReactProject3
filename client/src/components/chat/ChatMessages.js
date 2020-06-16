import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import MessageChat from "./MessageChat";
import "./chatStyles/ChatMessages.css";

// Passing in props from ChatRoom; mapping through messages
function ChatMessages({ messages, user }) {
  return (
    <Scrollbars className="new-message">
      {messages.map((newMessage, index) => (
        <div key={index}>
          {<MessageChat user={user} newMessage={newMessage} />}
        </div>
      ))}
    </Scrollbars>
  );
}

export default ChatMessages;

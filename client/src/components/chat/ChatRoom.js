import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import "./chatStyles/ChatRoom.css";
import Header from "./Header";
import InputText from "./InputText";
import ChatMessages from "./ChatMessages";
import { Link } from "react-router-dom";

let socket;
function ChatRoom({ location }) {
  // Created states
  const [username, setUserName] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  // storing messages
  const [messages, setMessages] = useState([]);
  // user messages
  const [userMessage, setUserMessage] = useState("");
  const server = "localhost:5000";
  // Get data back from users who have joined the chatroom
  // location.search gets back the parameters of an url
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setUserName(name);
    setChatRoom(room);
    // passing server endpoint to  socket variable
    socket = io(server);
    // emit allows for events; joining url parameters together
    socket.emit("join", { name, room }, () => {});
    //disconnecting when the component unmounts
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [server, location.search]);

  // adding messages to message array
  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  }, [messages]);

  // user messagess
  const sendUserMessages = (e) => {
    e.preventDefault();
    if (userMessage) {
      socket.emit("deliverMessage", userMessage, () => setUserMessage(""));
    }
  };

  console.log(userMessage, messages);
  // Rendering components
  return (
    <React.Fragment>
      <div className="room-wrapper">
        <Link to="/home" className="chat-links white-text">Home</Link>
      </div>
      <div className="container-one-room">
        <div className="container-two-room">
          <Header chatRoom={chatRoom} />
          <ChatMessages username={username} messages={messages} />
          <InputText
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            sendUserMessages={sendUserMessages}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ChatRoom;

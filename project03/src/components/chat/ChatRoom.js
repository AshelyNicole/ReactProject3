import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";

function ChatRoom({ location }) {
  // Created states
  const [user, setUser] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  // Get data back from users who have joined the chatroom
  // location.search gets back the parameters of an url
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setUser(user);
    setChatRoom(chatRoom);

    // passing server endpoint to variable
    let socket;
    socket = io("localhost:5000");
    socket.emit();
  }, ["localhost:5000", location.search]);
  return <h1>Chat Room</h1>;
}

export default ChatRoom;

const express = require("express");
const app = express();
const router = express.Router();
const http = require("http");
// const mongoose = require("mongoose");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
// const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const { addUser, findUser } = require("./client/src/components/chat/ChatUsers");

router.get("/", (req, res) => {
  res.send("Server is running!");
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, res) => {
    const { error, newUser } = addUser({ id: socket.id, name, room });
    // display error message if user chooses username already taken
    if (error) {
      return res(error);
    }
    // Message when user enters the chat room
    socket.emit("newMessage", {
      user: "ChatBot",
      text: `Welcome to the chat room ${newUser.name}`,
    });
    // Message to other users in room
    socket.broadcast.to(newUser.room).emit("newMessage", {
      user: "ChatBot",
      text: `${newUser.name} has entered the chat room`,
    });
    // join users in room
    socket.join(newUser.room);

    res();
  });
  // User messages
  socket.on("deliverMessage", (newMessage, res) => {
    const users = findUser(socket.id);

    io.to(users.room).emit("newMessage", {
      user: users.name,
      text: newMessage,
    });

    res();
  });

  socket.on("disconnect", () => {
    console.log("User has left the chat!");
  });
});

// Define middleware here
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

// Start the API server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

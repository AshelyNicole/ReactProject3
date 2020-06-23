const express = require("express");
const app = express();
const router = express.Router();
const http = require("http");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// API Routes
const users = require("./routes/usersRoutes")

const PORT = process.env.PORT || 5000;
const { addUser, findUser } = require("./client/src/components/chat/ChatUsers");

// router.get("/", (req, res) => {
//  res.send("Server is running!");
// });

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
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//Body Parser Middleware for Login Authentification
app.use (
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(router);
//Database codes
require('dotenv').config();

// Connect to the Mongo DB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log('MongoDB database connection established succesfully!')
});

//Passport Middleware & Config
app.use(passport.initialize());
require("./config/passport")(passport);

//Login API Routes
router.use("/api/users", users);


// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client","build", "index.html"));
  })
//}



// Start the API server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

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

router.get("/", (req, res) => {
  res.send("Server is running!");
});

io.on("connection", (socket) => {
  console.log("New connection!");

  socket.on("disconnect", () => {
    console.log("User left the chat!");
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

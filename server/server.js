const express = require("express");
// const mongoose = require("mongoose");
const socketio = require("socket.io");
const http = require("http");
// const routes = require("./routes");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

// Define middleware here
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

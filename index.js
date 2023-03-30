const express = require("express");
// const socketio = require("socket.io");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hi from Codedamn");
});

app.listen(1337, () => {
  console.log("Server running!");
});

// const io = socketio(server);

// io.on("connection", (_socket) => {
//   console.log("New connection");
// });

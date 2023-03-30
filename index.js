const express = require("express");
const socketio = require("socket.io");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hi from Codedamn");
});

const server = app.listen(1337, () => {
  console.log("Server running!");
});

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New connection");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

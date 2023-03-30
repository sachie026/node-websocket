const express = require("express");
const { Server } = require("socket.io");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hi from Codedamn");
});

const server = app.listen(1337, () => {
  console.log("Server running!");
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New connection");
  io.emit("chat message", "New connection");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

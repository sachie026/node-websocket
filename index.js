// var { WebSocketServer } = require("ws");

// const GEOMETRY_MINIMUM_SIZE = 0.75;
// const GEOMETRY_MAXIMUM_SIZE = 1.25;

// const wss = new WebSocketServer({ port: 8080 });

// const randomNumberGenerator = () => {
//   return (
//     Math.random() * (GEOMETRY_MAXIMUM_SIZE - GEOMETRY_MINIMUM_SIZE) +
//     GEOMETRY_MINIMUM_SIZE
//   ).toFixed(3);
// };

// wss.on("connection", function connection(ws) {
//   ws.on("message", function message(_data) {
//     ws.send(randomNumberGenerator());
//   });
// });

// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ server: server });

// wss.on("connection", function connection(ws) {
//   ws.send("Welcome New Client!");

//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);
//     ws.send(randomNumberGenerator());
//   });
// });

// app.get("/", (req, res) => res.send("Hello World!"));

// server.listen(3000, () => console.log(`Lisening on port :3000`));

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

io.on("connection", (_socket) => {
  console.log("New connection");
});

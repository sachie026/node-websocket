// const express = require("express");
// const { Server } = require("socket.io");
// const cors = require("cors");
// const app = express();

// const PORT = process.env.PORT || 5000;

// app.use(cors());

// app.get("/", (_req, res) => {
//   res.send("Hi from Codedamn");
// });

// const server = app.listen(PORT, () => {
//   console.log("Server running!");
// });

// const io = new Server(server);

// io.on("connection", (socket) => {
//   console.log("New connection");
//   socket.emit("chat message", { o: 1 });
//   socket.on("chat message", (msg) => {
//     socket.emit("chat message", msg);
//   });
// });
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*:*",
  },
});

// io.set()

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.broadcast.emit("hi");
  io.emit("chat message", "hi");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

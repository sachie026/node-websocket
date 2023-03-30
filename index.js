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

const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

// const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  socket.on("sendMessage", (message) => {
    // const user = getUser(socket.id);

    io.emit("message", { text: message });

    // callback();
  });

  socket.on("disconnect", () => {
    // const user = removeUser(socket.id);

    io.emit("message", "disconnected");
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);

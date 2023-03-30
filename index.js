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

const serverPort = 3000;
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const WebSocket = require("ws");
const websocketServer = new WebSocket.Server({ server });

app.get("/", (_req, res) => {
  res.send("Hi from Codedamn");
});
//when a websocket connection is established
websocketServer.on("connection", (webSocketClient) => {
  //send feedback to the incoming connection
  webSocketClient.send('{ "connection" : "ok"}');

  //when a message is received
  webSocketClient.on("message", (message) => {
    //for each websocket client
    websocketServer.clients.forEach((client) => {
      //send the client the current message
      client.send(`{ "message" : ${message} }`);
    });
  });
});

//start the web server
server.listen(serverPort, () => {
  console.log(`Websocket server started on port ` + serverPort);
});

// const express = require("express");
// const http = require("http");
// const ws = require("ws");
// const path = require("path");

// const app = express();
// // app.use(express.static(path.join(__dirname, "./public")));
// app.get("/", (_req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// const httpServer = http.createServer(app);
// const wss = new ws.Server({ server: httpServer }, {});

// wss.on("connection", (ws) => {
//   ws.send("joined");
//   console.log("Client connected");
//   ws.onmessage = (event) => {
//     const msg = JSON.parse(event.data);
//     console.log(msg.x + ", " + msg.y);
//     // Send an answer
//     const resp = {
//       x: msg.x,
//       y: msg.y,
//     };
//     ws.send(JSON.stringify(resp));
//   };
// });

// const port = process.env.PORT || 3000;
// httpServer.listen(port, () => {
//   console.log("Server started. Port: ", port);
// });

// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");

// app.use(cors());

// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: {
//     origin: "*:*",
//   },
// });

// // io.set()

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.broadcast.emit("hi");
//   io.emit("chat message", "hi");
//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//   });
// });

// server.listen(3000, () => {
//   console.log("listening on *:3000");
// });

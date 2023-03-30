var { WebSocketServer } = require("ws");

const GEOMETRY_MINIMUM_SIZE = 0.75;
const GEOMETRY_MAXIMUM_SIZE = 1.25;

const wss = new WebSocketServer({ port: 8080 });

const randomNumberGenerator = () => {
  return (
    Math.random() * (GEOMETRY_MAXIMUM_SIZE - GEOMETRY_MINIMUM_SIZE) +
    GEOMETRY_MINIMUM_SIZE
  ).toFixed(3);
};

wss.on("connection", function connection(ws) {
  ws.on("message", function message(_data) {
    ws.send(randomNumberGenerator());
  });
});

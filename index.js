import { WebSocketServer } from "ws";
import { GEOMETRY_MAXIMUM_SIZE, GEOMETRY_MINIMUM_SIZE } from "./constants.js";

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

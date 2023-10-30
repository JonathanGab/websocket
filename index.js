const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Hello, you sent -> ${message}`);
  });

  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

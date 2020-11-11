const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const port = 8883;
const host = "localhost";
const { token } = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./settings.json"), "utf8")
);

// body parser
app.use(
  bodyParser.json({
    limit: "10mb"
  })
);

app.post("/auth", (req, res) => {
  console.log(req.body, token);
  res.json({ success: true });
});

// Запуск сервера
server.listen(port, host, function() {
  console.log("Node server started on %s:%d", host, port);
});

module.exports.server = server;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const port = 8883;
const host = "localhost";

// body parser
app.use(
  bodyParser.json({
    limit: "10mb"
  })
);

app.post("/auth", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

// Запуск сервера
server.listen(port, host, function() {
  console.log("Node server started on %s://%s:%d", port, host);
});

module.exports.server = server;

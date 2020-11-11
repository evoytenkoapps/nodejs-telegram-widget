const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = require("http").createServer(app);

// body parser
app.use(
  bodyParser.json({
    limit: "10mb"
  })
);

// Запуск сервера
server.listen(environment.port, environment.host, function() {
  console.log(
    "Node server started on %s://%s:%d",
    environment.http_type,
    environment.host,
    environment.port
  );
});

module.exports.server = server;

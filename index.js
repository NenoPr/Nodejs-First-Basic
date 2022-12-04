const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const indexPath = __dirname + "/index.html";
const aboutPath = __dirname + "/about.html";
const contactPath = __dirname + "/contact-me.html";
const _404Path = __dirname + "/404.html";

const httpServer = http.createServer(httpHandler);

httpServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function httpHandler(req, res) {
  console.log(__dirname + req.url);
  if (req.url === "/") {
    fs.readFile(indexPath, function (err, data) {
      if (err == null) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  fs.readFile(__dirname + req.url + '.html', function (err, data) {
    if (err == null) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } else {
      fs.readFile(_404Path, function (err, data) {
        if (err == null) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
  });
}

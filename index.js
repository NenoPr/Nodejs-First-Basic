// const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 8080;

const indexPath = __dirname + "/index.html";
const aboutPath = __dirname + "/about.html";
const contactPath = __dirname + "/contact-me.html";
const _404Path = __dirname + "/404.html";

// const httpServer = http.createServer(httpHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/about", (req, res) => {
  res.sendFile(aboutPath);
});

app.get("/contact-me", (req, res) => {
  res.sendFile(contactPath);
});

app.get('*', function(req, res){
  res.sendFile(_404Path);
});

// function httpHandler(req, res) {
//   console.log(__dirname + req.url);
//   if (req.url === "/") {
//     fs.readFile(indexPath, function (err, data) {
//       if (err == null) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
//   fs.readFile(__dirname + req.url + '.html', function (err, data) {
//     if (err == null) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     } else {
//       fs.readFile(_404Path, function (err, data) {
//         if (err == null) {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.write(data);
//           res.end();
//         }
//       });
//     }
//   });
// }

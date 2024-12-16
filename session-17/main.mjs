// console.log("Hi there");

// import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hi there I'm from server from");
// });

// server.listen(3000, () => {
//   console.log("Server is running at", 3000);
// });

// what do we need to run web application server?
// services -> application code
// why do we need port?
// should served using a port
// entry gate where the application service is served.

// Internal packages
// os, fs, http, events etc

// external package -> not part of core node.js
// install package -> npm install <package> -> npm init
// nodemon -> hmr for backend service

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HI there from server");
});
app.get("/page", (req, res) => {
  res.send("Hi from page 2");
});
app.listen(3000, () => {
  console.log(`Server is running at 3000`);
});

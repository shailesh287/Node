//console.log("hello world");

//create server
const express = require("express");

const server = express();

const middleware1 = (req, res, next) => {
  console.log("Hello this is middleware 1");
  next(); // next function is basically used to block the flow and take it to the requested route
};

const middleware2 = (req, res, next) => {
  console.log("Hello this is middleware 2");
};

server.use(middleware1);
server.get("/", (req, res) => {
  res.send("Hello world");
});

server.get("/user", middleware2, (req, res) => {
  res.send("Hello user");
});

server.listen(3001);

//HTTP Methods - get post update/put delete
//CRUD : create read update delete

//middlewares ::
//It is a Function
//it takes three parameters => req , res , next
//you can create multiple middlewares

//why do we nees middleware::;
//hoc in react . middleware is a function which will be excuted first before any route gets executed

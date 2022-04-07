// console.log("heyy")

//create server

const express = require("express"); // server created
const server = express();

//middleware
const middleware1 = (req, res, next) => {
  console.log("hello this is middleware 1");
  next(); //block the flow and take it back to the requested route
};

const middleware2 = (req, res, next) => {
  console.log("hello this is middleware 2");
  next(); //block the flow and take it back to the requested route
};
server.use(middleware1); // accessible to all routes
//server.use(middleware2); midlleware2 wont execute for main page

server.get("/", (request, response) => {
  response.send("helllo world");
});

server.get("/user", middleware2, (request, response) => {
  //middleware2 is specific to this route.
  response.send("<h1>hello user</h1>");
});

server.get("/user2", (request, response) => {
  response.send({ name: "Vaibhav", age: 23 });
});

server.listen(3001, () => {
  console.log("server is running on port 3001"); //this is a server
});

//HTTP methods
//CRUD: create read update delete
// get post put/update delete

// Middlewares :::
// is a function: this function takes 3 parameters they are req,res,next

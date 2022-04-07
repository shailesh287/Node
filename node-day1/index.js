const http = require("http"); // ES5 syntax

//creating server

http
  .createServer((request, response) => {
    response.write("Hello World");
    //closing the server
    response.end();
  })
  .listen(8000);

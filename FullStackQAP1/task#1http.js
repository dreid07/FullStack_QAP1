// HTTP (HyperText Transfer Protocol): is a communications protocol that is used to transfer data over the web.
// Status codes are issued by a server in response ot a client's request made to the server.
// It remains as one of the main methods of communications on the web today.

const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  // provides feedback from the server
  res.write("Hello world");
  res.end;
});

server.listen(port, function (error) {
  // states whether the http server is listening
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("server is listening on port" + port);
  }
});

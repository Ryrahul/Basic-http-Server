const http = require("node:http");
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    console.log(req.url);
    res.end("Its home page ");
  } else {
    res.end("Not home Page");
  }
});
server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("running on port 3000");
});

const http = require("http");
const fs = require("fs");

const port = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer((req, res) =>
  fs.createReadStream(file).pipe(res)
);

server.listen(port);

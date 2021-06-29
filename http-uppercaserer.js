const http = require("http");

const port = Number(process.argv[2]);

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method !== "POST") {
    console.error("only POST");
    return;
  }

  req.on("data", (chunk) => res.write(chunk.toString().toUpperCase()));
  req.on("end", () => res.end());
});

server.listen(port);

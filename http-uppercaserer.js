const http = require("http");

const port = Number(process.argv[2]);

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method !== "POST") {
    console.error("only POST");
    return;
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk.toString().toUpperCase()));
  req.on("end", () => {
    res.write(body);
    res.end();
  });
});

server.listen(port);

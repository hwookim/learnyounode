const http = require("http");

const port = Number(process.argv[2]);

function doGet(url) {
  const time = new Date(url.searchParams.get("iso"));
  if (url.pathname === "/api/parsetime") {
    return parseTime(time);
  } else if (url.pathname === "/api/unixtime") {
    return { unixtime: time.getTime() };
  }
}

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "GET") {
    const baseURL = "http://" + req.headers.host + "/";
    const reqUrl = new URL(req.url, baseURL);
    const result = doGet(reqUrl);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(result));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);

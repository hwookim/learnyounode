const http = require("http");

http.get(process.argv[2], (response) => {
  let body = "";

  response.setEncoding("utf8");
  response.on("data", (chunk) => body += chunk);
  response.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});

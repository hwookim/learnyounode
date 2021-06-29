const http = require("http");
const requests = process.argv.slice(2);

function jugglingAsync(requests) {
  const responses = [];
  let count = 0;

  function handleRequest(request, index) {
    http.get(request, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => (body += chunk));
      response.on("end", () => {
        responses[index] = body;
        count++;
        if (count === requests.length) {
          responses.forEach(printResponse);
        }
      });
    });
  }

  function printResponse(response) {
    console.log(response);
  }

  requests.forEach(handleRequest);
}

jugglingAsync(requests);

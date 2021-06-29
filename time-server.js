const net = require("net");
const port = Number(process.argv[2]);

function fillZero(no) {
  return no < 10 ? "0" + no : no;
}

function now() {
  const date = new Date();
  return (
    date.getFullYear() +
    "-" +
    fillZero(date.getMonth() + 1) +
    "-" +
    fillZero(date.getDate()) +
    " " +
    fillZero(date.getHours()) +
    ":" +
    fillZero(date.getMinutes())
  );
}

const server = net.createServer((socket) => socket.end(now() + "\n"));
server.listen(port);

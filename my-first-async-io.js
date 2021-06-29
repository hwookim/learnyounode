const fs = require("fs");

function callback (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  const lines = data.toString().split("\n").length - 1;
  console.log(lines);
}

const file = process.argv[2];
fs.readFile(file, callback);

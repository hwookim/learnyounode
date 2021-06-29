const fs = require("fs");
const path = require("path");

function filterFiles(files, ext) {
  files.filter((file) => path.extname(file) === ext)
    .forEach((file) => console.log(file));
}

const directory = process.argv[2];
const extensions = "." + process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  filterFiles(files, extensions);
});
